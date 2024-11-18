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

const PlotBarChartB = ({ update, visualType, topic, company, clickdata, onRendered }) => {
  const [chartData, setChartData] = useState([]);
  const [title, setTitle] = useState("FIの分布");

  useEffect(() => {
    const loadChartData = async () => {
      try {
        const time = 9;
        const targetId = clickdata || topic[0] || "default_topic"; // clickdataを優先
        const path = `${process.env.PUBLIC_URL}/data/param/patent/alpha/topic=${targetId}/trend/output_${time}.json`;
        const companyPath = `${process.env.PUBLIC_URL}/data/param/patent/alpha/topic=${targetId}/company.txt`;

        // データを取得
        const [original, companyList] = await Promise.all([
          fetchData(path),
          loadCompanies(companyPath),
        ]);

        if (!companyList.includes(company[0])) {
          console.warn(`Company "${company[0]}" not found.`);
          setChartData([]);
          return;
        }

        // Companyのデータ取得
        const companyIndex = companyList.indexOf(company[0]);
        const companyData = original[companyIndex];
        if (!companyData) {
          console.warn(`No data found for company index "${companyIndex}".`);
          setChartData([]);
          return;
        }

        // JSONデータの整形
        const formattedData = Object.entries(companyData).map(([key, value]) => ({
          category: key,
          value: parseFloat(value) || 0, // 値を数値に変換（ない場合は0）
        }));

        // データを降順にソートして上位10件を取得
        const sortedData = formattedData
          .sort((a, b) => b.value - a.value)
          .slice(0, 10);

        setChartData(sortedData);
        setTitle(`${company[0]}のFIの分布`);
        onRendered(); // 描画完了を通知
      } catch (error) {
        console.error("データ処理中のエラー:", error);
      }
    };

    if (visualType === "one-comp" && (update || chartData.length === 0 || clickdata)) {
      loadChartData();
    }
  }, [visualType, company, clickdata, update]); // clickdata を依存関係に追加

  return (
    <div>
      <Plot
        data={[
          {
            type: "bar",
            x: chartData.map((item) => item.value).reverse(),
            y: chartData.map((item) => item.category).reverse(),
            orientation: "h",
            marker: { color: "royalblue" },
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
        }}
      />
    </div>
  );
};

export default PlotBarChartB;
