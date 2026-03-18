import React, { useState, useEffect, useRef } from 'react';
import Plot from 'react-plotly.js';

const colormap = {"コンクリート構造":'rgb(229, 134, 6)', "地盤改良":'rgb(93, 105, 177)', "トンネル掘削":'rgb(82, 188, 163)',
  "免震構造":'rgb(153, 201, 69)', "管理システム":'rgb(204, 97, 176)', "廃棄物処理":'rgb(36, 121, 108)', 
  "建築パネル":'rgb(218, 165, 27)',"空調システム":'rgb(47, 138, 196)', "掘削装置":'rgb(118, 78, 159)', 
};

const fetchJson = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return null;
  }
};

// {companies, fi_codes, data} 形式のスパースデータから行方向の和を計算
const getRowSums = (occupyJson) => {
  const numRows = occupyJson.companies.length;
  const sums = Array(numRows).fill(0);
  occupyJson.data.forEach(({ row, value }) => {
    sums[row] += value;
  });
  return sums;
};

const PlotPieB = ({ update, visualType, topic, company, span, onRendered, onClickData }) => {
  const [chartData, setChartData] = useState([]);
  const [title, setTitle] = useState("注目トピックに関する特許の企業占有率");
  const allTopic = [2, 3, 1, 0, 9, 6, 8, 7, 11];

  const IdtoTopic = {"2":"コンクリート構造","3":"地盤改良","1":"トンネル掘削",
    "0":"免震構造","9":"管理システム","6":"廃棄物処理","8":"建築パネル",
    "7":"空調システム","11":"掘削装置","10":"建築設計","5":"トンネル測量"};

  const TopictoId = {"コンクリート構造":"2","地盤改良":"3","トンネル掘削":"1",
    "免震構造":"0","管理システム":"9","廃棄物処理":"6","建築パネル":"8",
    "空調システム":"7","掘削装置":"11","建築設計":"10","トンネル測量":"5"};

  const dataCache = useRef({});

  const loadData = async () => {
    try {
      const spanId = span || "2";
      const allTopicsData = await Promise.all(
        allTopic.map(async (target_id) => {
          const cacheKey = `${target_id}-${spanId}`;
          if (!dataCache.current[cacheKey]) {
            const url = `${process.env.PUBLIC_URL}/data/app_data/topic${target_id}/persona=5/span${spanId}/occupy_topic_9.json`;
            dataCache.current[cacheKey] = await fetchJson(url);
          }

          const occupyJson = dataCache.current[cacheKey];
          if (!occupyJson || !occupyJson.companies) return null;

          const normalizeString = (str) =>
            typeof str === "string" ? str.normalize("NFC").trim() : null;

          const sanitizedCompanies = occupyJson.companies.map(normalizeString);
          const sanitizedCompany = normalizeString(company[0]);

          const companyIndex = sanitizedCompanies.indexOf(sanitizedCompany);
          if (companyIndex === -1) return null;

          const rowSums = getRowSums(occupyJson);
          return { topic: target_id, value: rowSums[companyIndex] };
        })
      );

      const filteredData = allTopicsData.filter((data) => data !== null);
      const totalValue = filteredData.reduce((sum, item) => sum + item.value, 0);
      if (totalValue === 0) {
        setChartData([]);
        return;
      }

      const normalizedData = filteredData
        .map(item => ({ category: item.topic, value: item.value / totalValue }))
        .sort((a, b) => b.value - a.value);

      setChartData(normalizedData.slice(0, 10));
      onRendered();
    } catch (error) {
      console.error("データ処理中のエラー:", error);
    }
  };

  useEffect(() => {
    if (visualType === "one-comp") {
      loadData();
    }
  }, [update, visualType, span]);

  const handlePlotClick = (event) => {
    if (event.points && event.points[0]) {
      const clickdata = event.points[0].label; // クリックされた部分のラベル
      const label = TopictoId[clickdata]
      const topicid = label.replace("Topic ", "");
      onClickData([topicid]); // 親コンポーネントにラベルを通知
    }
  };

  return (
    <div style={{marginTop:"3%",marginBottom:"3%", width: "100%", height: "94%" }}>
      <Plot
        data={[
          {
            type: "pie",
            values: chartData.map(item => item.value),
            labels: chartData.map(item =>  IdtoTopic[String(item.category)]),
            direction: "clockwise",
            marker: {
              colors: chartData.map((item) => colormap[IdtoTopic[String(item.category)]]),
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
        onClick={handlePlotClick} // クリックイベントを追加
      />
     
    </div>
  );
};

export default PlotPieB;
