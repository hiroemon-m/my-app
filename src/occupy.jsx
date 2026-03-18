import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return [];
  }
};

const PlotPieA = ({ update, visualType, topic, span, onRendered }) => {
  const [chartData, setChartData] = useState([]);
  const [title, setTitle] = useState("");
  const IdtoTopic = {"2":"コンクリート構造","3":"地盤改良","1":"トンネル掘削",
    "0":"免震構造","9":"管理システム","6":"廃棄物処理","8":"建築パネル",
    "7":"空調システム","11":"掘削装置","10":"建築設計","5":"トンネル測量"};

  const colormap = {'鹿島建設株式会社':'rgb(229, 134, 6)', "株式会社大林組":'rgb(93, 105, 177)', "清水建設株式会社":'rgb(82, 188, 163)',
      "大成建設株式会社":'rgb(153, 201, 69)', "株式会社竹中工務店":'rgb(204, 97, 176)', "株式会社長谷工コーポレーション":'rgb(36, 121, 108)', 
      "前田建設工業株式会社":'rgb(218, 165, 27)',"五洋建設株式会社":'rgb(47, 138, 196)', "株式会社フジタ":'rgb(118, 78, 159)', 
      "戸田建設株式会社":'rgb(237, 100, 90)', "株式会社熊谷組":'rgb(165, 170, 153)'};

  useEffect(() => {
    const loadChartData = async () => {
      try {
        const time = 0;
        const targetId = topic || "0";
        const spanId = span || "2";
        const dataUrl = `${process.env.PUBLIC_URL}/data/app_data/topic${targetId}/persona=5/span${spanId}/occupy_mean_${time}.json`;

        // [{"company": "...", "value": 0.xxx}, ...] 形式
        const rawData = await fetchData(dataUrl);
        if (!Array.isArray(rawData)) return;

        const sortedData = rawData
          .filter(item => item.value !== null)
          .sort((a, b) => b.value - a.value)
          .slice(0, 10)
          .map(item => ({ label: item.company, value: item.value }));

        setChartData(sortedData);
        setTitle(`${IdtoTopic[targetId]}に関する特許の企業占有率`);
        if (onRendered) onRendered();
      } catch (error) {
        console.error("チャートデータの処理中にエラー:", error);
      }
    };

    if (visualType === "one-topic") {
      loadChartData();
    }
  }, [update, visualType, topic, span, onRendered]);

  return (
    <div style={{marginTop:"3%",marginBottom:"3%", width: "100%", height: "94%" }}>
      <Plot
        data={[
          {
            type: "pie",
            values: chartData.map((item) => item.value),
            labels: chartData.map((item) => item.label),
            direction: "clockwise",
            marker: {
              colors: chartData.map((item) => colormap[item.label]),
            },
          },
        ]}
        layout={{
          title: title,
          showlegend: true,
          plot_bgcolor: "white",
          paper_bgcolor: "white",
          margin: { t: 70, b: 5, l: 40, r: 50 },
        }}
  
        style={{ width: "100%", height: "100%" }} // 必ず全体サイズを親要素に合わせ
      />
    </div>
  );
};

export default PlotPieA;
