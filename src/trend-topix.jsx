import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

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

const PlotBarChartA = ({ update, visualType, topic, span, onRendered }) => {
  const [chartData, setChartData] = useState([]);
  const [title, setTitle] = useState("FIの分布");

  useEffect(() => {
    const loadChartData = async () => {
      try {
        const targetId = topic[0];
        const spanId = span || "2";
        const path = `${process.env.PUBLIC_URL}/data/app_data/topic${targetId}/persona=5/span${spanId}/occupy_topic_9.json`;
        const fiPath = `${process.env.PUBLIC_URL}/data/fi_subclass_split.json`;

        const [occupyJson, fiList] = await Promise.all([
          fetchData(path),
          fetchData(fiPath),
        ]);

        if (!occupyJson || !occupyJson.fi_codes || !occupyJson.data) return;

        // FIコード別に全企業の値を合算
        const fiSums = {};
        occupyJson.data.forEach(({ col, value }) => {
          const fiCode = occupyJson.fi_codes[col];
          fiSums[fiCode] = (fiSums[fiCode] || 0) + value;
        });

        const total = Object.values(fiSums).reduce((s, v) => s + v, 0);
        const formattedData = Object.entries(fiSums).map(([key, value]) => ({
          category: key,
          value: total > 0 ? (value / total) * 100 : 0,
          summarize: fiList[key],
        }));

        const sortedData = formattedData
          .sort((a, b) => b.value - a.value)
          .slice(0, 10);

        setChartData(sortedData);
        setTitle(`FIの分布`);
        if (onRendered) onRendered();
      } catch (error) {
        console.error("データ処理中のエラー:", error);
      }
    };

    if (visualType === "one-topic" && (update || chartData.length === 0)) {
      loadChartData();
    }
  }, [visualType, topic, span, update]);

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
            customdata: chartData.map((item) => item.summarize).reverse(),
            hovertemplate: `説明: %{customdata}<br>%: %{x:.2f}% <extra></extra>`,
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
            align: "left",
            font: { size: 11, color: "black" },
            bgcolor: "lightyellow",
            bordercolor: "gray",
          },
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default PlotBarChartA;
