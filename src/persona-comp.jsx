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

const PlotPersonComp = ({ update, visualType, topic, company, onRendered }) => {
const IdtoTopic = {"2":"コンクリート構造","3":"地盤改良","1":"トンネル掘削",
        "0":"免震構造","9":"管理システム","6":"廃棄物処理","8":"建築パネル",
        "7":"空調システム","11":"掘削装置"};
const colormap = {"コンクリート構造":'rgb(229, 134, 6)', "地盤改良":'rgb(93, 105, 177)', "トンネル掘削":'rgb(82, 188, 163)',
          "免震構造":'rgb(153, 201, 69)', "管理システム":'rgb(204, 97, 176)', "廃棄物処理":'rgb(36, 121, 108)', 
          "建築パネル":'rgb(218, 165, 27)',"空調システム":'rgb(47, 138, 196)', "掘削装置":'rgb(118, 78, 159)', 
        };
        
  const arrow_color = ['#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF'];

  const [preparedData, setPreparedData] = useState(null);
  const [figData, setFigData] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const [title, setTitle] = useState("企業の立ち位置");

  useEffect(() => {
    const prepareData = async () => {
      try {
        const allPromises = (topic || ["default_topic"]).map(async (target_id) => {
            console.log("topic",target_id)
          const columnPath = `/data/param/patent/alpha/topic=${target_id}/company`;
          const companies = await loadCompanies(columnPath);

          const companyDict = companies.reduce((acc, value, idx) => {
            acc[value] = idx;
            return acc;
          }, {});

          const newSearchList = Array.isArray(company) ? company : [company];
          const filteredSearchList = newSearchList.filter(value => value in companyDict);

          const node_alpha = Array.from({ length: filteredSearchList.length }, () => Array(5).fill(0));
          const node_beta = Array.from({ length: filteredSearchList.length }, () => Array(5).fill(0));

          const promises = Array.from({ length: 5 }, (_, j) => j + 5).map(async (p) => {
            const parameterPath = `/data/param/patent/alpha/topic=${target_id}/test_optimize_${p}`;
            const { alpha_li, beta_li } = await toList(parameterPath);

            filteredSearchList.forEach((k, j) => {
              const idx = companies.indexOf(k);
              node_alpha[j][p - 5] = alpha_li[idx];
              node_beta[j][p - 5] = beta_li[idx];
            });
          });

          await Promise.all(promises);

          return { node_alpha, node_beta, filteredSearchList };
        });

        const results = await Promise.all(allPromises);

        const combinedAlpha = results.flatMap(result => result.node_alpha);
        const combinedBeta = results.flatMap(result => result.node_beta);
        const combinedSearchList = results.flatMap(result => result.filteredSearchList);

        setPreparedData({ alpha: combinedAlpha, beta: combinedBeta, searchList: combinedSearchList });
        setTitle(`${company}の業界での立ち位置`); // 初期タイトルを設定
      } catch (error) {
        console.error("データ準備中のエラー:", error);
      }
    };

    // 初期レンダリング時にもデータを準備
    prepareData();
  }, [visualType, topic, company]);

  useEffect(() => {
    if (update && preparedData) {
      const plotData = preparedData.searchList.map((k, j) => ({
        x: preparedData.alpha[j],
        y: preparedData.beta[j],
        mode: "lines+markers+text",
        text: ["1", "2", "3", "4", "5"],
        textposition: "top left",
        marker: {
          symbol: 'circle',
          color: colormap[IdtoTopic[topic[j]]],

          size: 5
          ,
        },
        name: IdtoTopic[topic[j]],
      }));

      const plotAnnotations = preparedData.searchList.flatMap((_, j) =>
        Array(4).fill(0).map((_, i) => ({
          x: preparedData.alpha[j][i + 1],
          y: preparedData.beta[j][i + 1],
          xref: 'x',
          yref: 'y',
          axref: 'x',
          ayref: 'y',
          ax: preparedData.alpha[j][i],
          ay: preparedData.beta[j][i],
          arrowcolor: colormap[IdtoTopic[topic[j]]],
          arrowsize: 1.2,
          arrowwidth: 1.2,
          arrowhead: 5,
          showarrow: true,
        }))
      );

      setFigData(plotData);
      setAnnotations(plotAnnotations);

      if (onRendered) onRendered();
    }
  }, [update, preparedData]);

  return (
    <div style={{ width:'100vh' ,height: '100vh' }}>
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
        style={{marginTop:"2vh", width: "100vh", height: "45vh" }} // 必ず全体サイズを親要素に合わせる
      />
    </div>
  );
};

export default PlotPersonComp;
