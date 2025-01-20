import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

// データ取得関数
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      const text = await response.text();
      return text.split("\n").filter((line) => line.trim() !== "");
    }
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return [];
  }
};



const PlotBarChartA = ({ update, visualType, topic, onRendered }) => {
  const [chartData, setChartData] = useState([]);
  const [title, setTitle] = useState("FIの分布!");

  useEffect(() => {
    const loadChartData = async () => {
      try {
        const time = 9;
        const targetId = topic[0]; // clickdataを優先
        const path = `${process.env.PUBLIC_URL}/data/param/patent/alpha/topic=${targetId}/trend/output_topic_${time}.json`;
        const fiPath = `${process.env.PUBLIC_URL}/data/fi_subclass_split.json`;

        // データを取得
        const [original, fiList] = await Promise.all([
          fetchData(path),
          fetchData(fiPath),
        ]);

        console.log("a",original);
 

        // JSONデータの整形
        const formattedData = Object.entries(original).map(([key, value]) => ({
          
          category: key,
          value: key === "" ? 0 : parseFloat(value) * 100 || 0, 
          summarize: fiList[key],
        }));
        console.log("a",formattedData);


        // データを降順にソートして上位10件を取得
        const sortedData = formattedData
          .sort((a, b) => b.value - a.value)
          .slice(0, 10);

        setChartData(sortedData);
        setTitle(`FIの分布`);
        console.log(chartData);
        onRendered(); // 描画完了を通知
      } catch (error) {
        console.error("データ処理中のエラー:", error);
      }
    };

    if (visualType === "one-topic" && (update || chartData.length === 0 )) {
      loadChartData();
    }
  }, [visualType, topic, update]); // clickdata を依存関係に追加

  return (
    <div style={{marginTop:"3%",marginBottom:"3%", width: "100%", height: "94%" }}>
      <Plot
        data={[
          {
            type: "bar",
            x: chartData.map((item) => item.value).reverse(),
            y: chartData.map((item) => item.category).reverse(),
            orientation: "h",
            marker: { color: "royalblue" },
            hovertemplate:
            `説明: %{customdata}<br>%: %{x:.2f}% <extra></extra>`, // customdata を参照
          },
        ]}
        layout={{
          title: {
            text: title,
            x: 0.5,
            y: 0.95,
            xanchor: "center",
          },
          xaxis: {
            linecolor: "gray",
            linewidth: 1,
            mirror: false,
            ticksuffix: " %",
          },
          yaxis: {
            linecolor: "gray",
            linewidth: 1,
            mirror: false,
            title: "FI",
          },
          plot_bgcolor: "white",
          paper_bgcolor: "white",
          margin: { t: 40, b: 35, l: 80, r: 50 },
          hoverlabel: {
            align:"left",
            font: {
              size: 11, // ツールチップのフォントサイズ
              color: "black", // フォントの色
            },
            bgcolor: "lightyellow", // ツールチップの背景色
            bordercolor: "gray", // ツールチップの枠線色
          },
        }}

        style={{ width: "100%", height: "100%" }} // 必ず全体サイズを親要素に合わせ
      />
    </div>
  );
};

export default PlotBarChartA;
