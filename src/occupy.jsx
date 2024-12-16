import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const colormap = {'鹿島建設株式会社':'rgb(229, 134, 6)', "株式会社大林組":'rgb(93, 105, 177)', "清水建設株式会社":'rgb(82, 188, 163)',
                "大成建設株式会社":'rgb(153, 201, 69)', "株式会社竹中工務店":'rgb(204, 97, 176)', "株式会社長谷工コーポレーション":'rgb(36, 121, 108)', 
                "前田建設工業株式会社":'rgb(218, 165, 27)',"五洋建設株式会社":'rgb(47, 138, 196)', "株式会社フジタ":'rgb(118, 78, 159)', 
                "戸田建設株式会社":'rgb(237, 100, 90)', "株式会社熊谷組":'rgb(165, 170, 153)'};
               

// データをロードする関数
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

// テキストデータを読み込む関数
const fetchTextData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const text = await response.text();
    return text.split("\n").filter((line) => line.trim() !== "");
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return [];
  }
};

const PlotPieA = ({ update, visualType, topic, onRendered }) => {
  const [chartData, setChartData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const loadChartData = async () => {
      try {
        const time = 4;
        const targetId = topic || "default_topic"; // 初期値として"default_topic"を設定
        const dataUrl = `/data/topic${targetId}/persona=5/occupy_mean_${time}.json`;
        const columnUrl = `/data/param/patent/alpha/topic=${targetId}/company`;

        // データ取得
        const [values, labels] = await Promise.all([
          fetchData(dataUrl),
          fetchTextData(columnUrl),
        ]);

        // 値とラベルの組み合わせを作成
        const data = labels.map((label, index) => ({
          label,
          value: values.value[index] || 0, // 値がない場合は0
        }));

        // 値に基づいて降順にソートして上位10件を抽出
        const sortedData = data
          .sort((a, b) => b.value - a.value)
          .slice(0, 10);

        setChartData(sortedData);
        setTitle(`${targetId}に関する特許の企業占有率`);
        if (onRendered) onRendered(); // 描画完了を通知
      } catch (error) {
        console.error("チャートデータの処理中にエラー:", error);
      }
    };

    // 初回レンダリング時と`update`変更時にデータをロード
    if (visualType === "one-topic") {
      loadChartData();
    }
  }, [update, visualType, topic, onRendered]);

  return (
    <div>
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
      />
    </div>
  );
};

export default PlotPieA;
