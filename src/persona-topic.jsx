import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

// データをロードする関数
const loadCompanies = async (dataPath) => {
  try {
    const response = await fetch(dataPath);
    const text = await response.text();
    return text.split("\n").filter((line) => line.trim() !== "");
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return [];
  }
};

const toList = async (dataPath) => {
  try {
    const response = await fetch(dataPath);
    const text = await response.text();
    const lines = text.split("\n").filter(line => line.trim() !== "");

    const alpha_li = lines.map(line => parseFloat(line.split(",")[0]));
    const beta_li = lines.map(line => parseFloat(line.split(",")[1]));

    return { alpha_li, beta_li };
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return { alpha_li: [], beta_li: [] };
  }
};

const PlotPersonTopic = ({ update, visualType, topic, company, onRendered }) => {
  const arrow_color = ['#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF'];
  const [figData, setFigData] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [title, setTitle] = useState("");
  const IdtoTopic = {"2":"コンクリート構造","3":"地盤改良","1":"トンネル掘削",
    "0":"免震構造","9":"管理システム","6":"廃棄物処理","8":"建築パネル",
    "7":"空調システム","11":"掘削装置","10":"建築設計","5":"トンネル測量"};

  // 初期データのロード
  useEffect(() => {
    if (visualType === "one-topic" && topic) {
      const target_id = topic; // トピックIDの設定
      const columnPath = `${process.env.PUBLIC_URL}/data/param/patent/alpha/topic=${target_id}/company.txt`;

      loadCompanies(columnPath).then((data) => {
        setCompanyList(data);
        setTitle(`業界内での企業の立ち位置`);
      });
    }
  }, [visualType, topic]);

  // 検索対象のフィルタリング
  useEffect(() => {
    if (companyList.length > 0) {
      const companyDict = companyList.reduce((acc, value, idx) => {
        acc[value] = idx;
        return acc;
      }, {});

      const newSearchList = Array.isArray(company) ? company : [company];
      setSearchList(newSearchList.filter(value => value in companyDict));
    }
  }, [companyList, company]);

  // データの描画
  useEffect(() => {
    if (update && searchList.length > 0 && topic) {
      const target_id = topic; // トピックIDの設定
      const node_alpha = Array.from({ length: searchList.length }, () => Array(5).fill(0));
      const node_beta = Array.from({ length: searchList.length }, () => Array(5).fill(0));

      const promises = Array.from({ length: 5 }, (_, i) => i + 5).map((p) => {
        const parameterPath = `${process.env.PUBLIC_URL}/data/param/patent/alpha/topic=${target_id}/test_optimize_${p}.txt`;
        return toList(parameterPath).then(({ alpha_li, beta_li }) => {
          searchList.forEach((k, j) => {
            const idx = companyList.indexOf(k);
            node_alpha[j][p - 5] = alpha_li[idx];
            node_beta[j][p - 5] = beta_li[idx];
          });
        });
      });

      Promise.all(promises).then(() => {
        const plotData = searchList.map((k, j) => ({
          x: node_alpha[j],
          y: node_beta[j],
          mode: "lines+markers+text",
          text: ["1", "2", "3", "4", "5"],
          textposition: "top left",
          marker: {
            symbol: 'circle',
            color: arrow_color[j % arrow_color.length],
            size: 5,
          },
          name: k,
        }));

        const plotAnnotations = searchList.flatMap((_, j) =>
          Array(4).fill(0).map((_, i) => ({
            x: node_alpha[j][i + 1],
            y: node_beta[j][i + 1],
            xref: 'x',
            yref: 'y',
            ax: node_alpha[j][i],
            ay: node_beta[j][i],
            axref: 'x',
            ayref: 'y',
            arrowcolor: arrow_color[j % arrow_color.length],
            arrowsize: 1.2,
            arrowwidth: 1.2,
            arrowhead: 5,
            showarrow: true,
          }))
        );

        setFigData(plotData);
        setAnnotations(plotAnnotations);
        if (onRendered) onRendered();
      });
    }
  }, [update, searchList, companyList, topic]);

  return (
    <div style={{marginTop:"3vh", width: "100vh", height: "97vh" }} >
      <Plot
        data={figData}
        layout={{
          plot_bgcolor: 'white',
          paper_bgcolor: 'white',
          annotations: annotations,
          title: {
            text: title,
            font: { size: 20, color: 'grey' },
            xref: 'paper',
            x: 0.5,
            y: 0.95,
            xanchor: 'center',
          },
          xaxis: {
            range: [0, 1.01],
            linecolor: 'gray',
            linewidth: 1,
            gridcolor: 'lightgrey',
            gridwidth: 1,
            griddash: 'dot',
          },
          yaxis: {
            range: [0, 1.01],
            linecolor: 'gray',
            linewidth: 1,
            gridcolor: 'lightgrey',
            gridwidth: 1,
            griddash: 'dot',
          },
          margin: { t: 40, b: 35, l: 40, r: 50 },
          showlegend: true,
          legend: {
            x: 1,
            y: 1,
            bgcolor: 'rgba(255,255,255,0.5)',
            bordercolor: 'gray',
            borderwidth: 1,
          },
        }}
        config={{ responsive: true }} // Plotlyにレスポンシブ設定を有効化
        style={{marginTop:"3vh", width: "100vh", height: "100vh" }} // 必ず全体サイズを親要素に合わせ
      />
    </div>
  );
};

export default PlotPersonTopic;
