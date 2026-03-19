import React, { useState, useEffect, useRef } from 'react';
import Plot from 'react-plotly.js';

const colormap = {"コンクリート構造":'rgb(229, 134, 6)', "地盤改良":'rgb(93, 105, 177)', "トンネル掘削":'rgb(82, 188, 163)',
  "免震構造":'rgb(153, 201, 69)', "管理システム":'rgb(204, 97, 176)', "廃棄物処理":'rgb(36, 121, 108)', 
  "建築パネル":'rgb(218, 165, 27)',"空調システム":'rgb(47, 138, 196)', "掘削装置":'rgb(118, 78, 159)', 
};

const normalize = (s) => typeof s === 'string' ? s.normalize('NFC').trim() : '';

const fetchJson = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
};

const PlotPieB = ({ update, visualType, topic, company, span, topicList, onRendered, onClickData }) => {
  const [chartData, setChartData] = useState([]);

  const IdtoTopic = {"2":"コンクリート構造","3":"地盤改良","1":"トンネル掘削",
    "0":"免震構造","9":"管理システム","6":"廃棄物処理","8":"建築パネル",
    "7":"空調システム","11":"掘削装置","10":"建築設計","5":"トンネル測量"};

  const TopictoId = {"コンクリート構造":"2","地盤改良":"3","トンネル掘削":"1",
    "免震構造":"0","管理システム":"9","廃棄物処理":"6","建築パネル":"8",
    "空調システム":"7","掘削装置":"11","建築設計":"10","トンネル測量":"5"};

  // spanごとの最終時点ファイル名（occupy_mean は小さくて高速）
  const getLastMeanFile = (spanId) => {
    const map = { '1': 'occupy_mean_20.json', '2': 'occupy_mean_9.json', '3': 'occupy_mean_6.json' };
    return map[String(spanId)] || 'occupy_mean_9.json';
  };

  // サイドバーのtopicListを使う
  const targetTopics = (topicList && topicList.length > 0)
    ? topicList.map(Number)
    : [2, 3, 1, 0, 9, 6, 8, 7, 11];

  // ファイルキャッシュ（span × topicId ごと）
  const fileCache = useRef({});

  const loadData = async () => {
    if (!company || !company[0]) return;
    try {
      const spanId = String(span || '2');
      const meanFile = getLastMeanFile(spanId);
      const targetCompany = normalize(company[0]);

      const results = await Promise.all(
        targetTopics.map(async (topicId) => {
          const cacheKey = `${topicId}-${spanId}`;
          if (!fileCache.current[cacheKey]) {
            const url = `${process.env.PUBLIC_URL}/data/app_data/topic${topicId}/persona=5/span${spanId}/${meanFile}`;
            fileCache.current[cacheKey] = await fetchJson(url);
          }
          const data = fileCache.current[cacheKey];
          if (!Array.isArray(data)) return null;
          // [{company, value}] から対象会社を検索
          const entry = data.find(d => normalize(d.company) === targetCompany);
          return entry && entry.value > 0 ? { topic: topicId, value: entry.value } : null;
        })
      );

      const filtered = results.filter(d => d !== null);
      const total = filtered.reduce((s, d) => s + d.value, 0);
      if (total === 0) {
        setChartData([]);
        if (onRendered) onRendered();
        return;
      }

      setChartData(
        filtered
          .map(d => ({ category: d.topic, value: d.value / total }))
          .sort((a, b) => b.value - a.value)
      );
      if (onRendered) onRendered();
    } catch (error) {
      console.error("データ処理中のエラー:", error);
    }
  };

  useEffect(() => {
    if (visualType === "one-comp") {
      loadData();
    }
  }, [update, visualType, span, company, topicList]);

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
          title: `${company[0] || ""} の出願特許 トピック分布`,
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
