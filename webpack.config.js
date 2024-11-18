const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.js",
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
      publicPath: "/my-app/",
    },
    resolve: {
      extensions: [".js", ".jsx"],
      fallback: {
        assert: require.resolve("assert"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        util: require.resolve("util"),
        path: require.resolve("path-browserify"),
        url: require.resolve("url"),
        zlib: require.resolve("browserify-zlib"),
        https: require.resolve("https-browserify"),
        http: require.resolve("stream-http"),
        buffer: require.resolve("buffer"),
        querystring: require.resolve("querystring-es3"),
        fs: false,
        net: false,
        tls: false,
        vm: require.resolve("vm-browserify"),
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: "asset/resource",
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
          type: "asset/inline",
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify: isProduction && {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new Dotenv(),
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
      hot: true,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
