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
          const columnPath = `${process.env.PUBLIC_URL}/data/param/patent/alpha/topic=${target_id}/company.txt`;
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
            const parameterPath = `${process.env.PUBLIC_URL}/data/param/patent/alpha/topic=${target_id}/test_optimize_${p}.txt`;
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
          color: arrow_color[j % arrow_color.length],
          size: 5,
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
    }
  }, [update, preparedData]);

  return (
    <div  style={{ width:'100vh' ,height: '100vh' }}>
      <Plot
        data={figData}
        layout={{
          plot_bgcolor: 'white',
          paper_bgcolor: 'white',
          annotations: annotations,
          title: {
            text: title,
            font: { size: 20, color: 'black' },
            xref: 'paper',
            x: 0.5,
            y: 0.95,
            xanchor: 'center',
          
          },
          annotations: [
            {
              x: 0.25,
              y: 1.05,
              text: '（業界を引っ張り伝統的な分野に取り組んでいる）',
              showarrow: false,
              font: { size: 12, color: 'gray' },
              xanchor: 'center',
              yanchor: 'middle',
            },
            {
              x: 0.75,
              y: 1.05,
              text: '（業界を引っ張り未知の分野に投資している）',
              showarrow: false,
              font: { size: 12, color: 'gray' },
              xanchor: 'center',
              yanchor: 'middle',
            },
            {
              x: 0.25,
              y: -0.05,
              text: '（独自路線を進み伝統的な分野に取り組んでいる）',
              showarrow: false,
              font: { size: 12, color: 'gray' },
              xanchor: 'center',
              yanchor: 'middle',
            },
            {
              x: 0.75,
              y: -0.05,
              text: '（独自路線を進み未知の分野に投資している）',
              showarrow: false,
              font: { size: 12, color: 'gray' },
              xanchor: 'center',
              yanchor: 'middle',
            },
          ],

         
          xaxis: {
            title : "新規性",
            range: [0, 1.03],
            linecolor: 'gray',
            linewidth: 1,
            gridcolor: 'lightgrey',
            gridwidth: 1,
            griddash: 'dot',
            tickmode:"array",
            tickvals:[0, 0.5, 1],
            ticktext:["低", "", "高"],
            zeroline: false,

          },
          yaxis: {
            title : "順応性",
            title_standoff:25,   // Y軸からの距離（見やすくするため）
            range: [-0.1, 1.1],
            linecolor: 'gray',
            linewidth: 1,
            gridcolor: 'lightgrey',
            gridwidth: 1,
            griddash: 'dot',
            tickmode:"array",
            tickvals:[-0.1, 0.5, 1],
            ticktext:["低", "", "高"],
            zeroline: false,

          },
          margin: { t: 40, b: 40, l: 45, r: 50 },
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
