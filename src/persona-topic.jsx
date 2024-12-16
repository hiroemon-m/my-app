import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';


const colormap = {'鹿島建設株式会社':'rgb(229, 134, 6)', "株式会社大林組":'rgb(93, 105, 177)', "清水建設株式会社":'rgb(82, 188, 163)',
  "大成建設株式会社":'rgb(153, 201, 69)', "株式会社竹中工務店":'rgb(204, 97, 176)', "株式会社長谷工コーポレーション":'rgb(36, 121, 108)', 
  "前田建設工業株式会社":'rgb(218, 165, 27)',"五洋建設株式会社":'rgb(47, 138, 196)', "株式会社フジタ":'rgb(118, 78, 159)', 
  "戸田建設株式会社":'rgb(237, 100, 90)', "株式会社熊谷組":'rgb(165, 170, 153)'};

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
            color: colormap[k],
            size: 5,
          },
          name: k,
        }));

        const plotAnnotations = searchList.flatMap((k, j) =>
          Array(4).fill(0).map((_, i) => ({
            x: node_alpha[j][i + 1],
            y: node_beta[j][i + 1],
            xref: 'x',
            yref: 'y',
            ax: node_alpha[j][i],
            ay: node_beta[j][i],
            axref: 'x',
            ayref: 'y',
            arrowcolor: colormap[k],
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
              font: { size: 9, color: 'gray' },
              xanchor: 'center',
              yanchor: 'middle',
            },
            {
              x: 0.75,
              y: 1.05,
              text: '（業界を引っ張り未知の分野に投資している）',
              showarrow: false,
              font: { size: 9, color: 'gray' },
              xanchor: 'center',
              yanchor: 'middle',
            },
            {
              x: 0.25,
              y: -0.05,
              text: '（独自路線を進み伝統的な分野に取り組んでいる）',
              showarrow: false,
              font: { size: 9, color: 'gray' },
              xanchor: 'center',
              yanchor: 'middle',
            },
            {
              x: 0.75,
              y: -0.05,
              text: '（独自路線を進み未知の分野に投資している）',
              showarrow: false,
              font: { size: 9, color: 'gray' },
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

export default PlotPersonTopic;
