import React, { useState, useEffect, useRef } from 'react';
import Plot from 'react-plotly.js';

// fetchData関数：JSONまたはテキスト形式に対応
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json(); // JSON形式の場合
    } else {
      const text = await response.text(); // プレーンテキストの場合
      return text.split("\n").filter(line => line.trim() !== ""); // 改行区切りのデータを配列として返す
    }
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return [];
  }
};

// スパースデータを密行列に変換し、行方向の和を計算
const processSparseData = (sparseData) => {
    
  const numRows = Math.max(...sparseData.map(entry => entry.row)) + 1;
  const numCols = Math.max(...sparseData.map(entry => entry.col)) + 1;

  const matrix = Array.from({ length: numRows }, () => Array(numCols).fill(0));
  sparseData.forEach(({ row, col, value }) => {
    matrix[row][col] = value;
  });

  return matrix.map(row => row.reduce((sum, value) => sum + value, 0)); // 行方向の和を返す
};

const PlotPieB = ({ update, visualType, topic, company, onRendered, onClickData }) => {
  const [chartData, setChartData] = useState([]);
  const [title, setTitle] = useState("注目トピックに関する特許の企業占有率");
  const allTopic = [2, 3, 1, 0, 9, 6, 8, 7, 11];

  const IdtoTopic = {"2":"コンクリート構造","3":"地盤改良","1":"トンネル掘削",
    "0":"免震構造","9":"管理システム","6":"廃棄物処理","8":"建築パネル",
    "7":"空調システム","11":"掘削装置","10":"建築設計","5":"トンネル測量"};

    const TopictoId = {"コンクリート構造":"2","地盤改良":"3","トンネル掘削":"1",
        "免震構造":"0","管理システム":"9","廃棄物処理":"6","建築パネル":"8",
       "空調システム":"7","掘削装置":"11","建築設計":"10","トンネル測量":"5"};
  // キャッシュ用のオブジェクト
  const dataCache = useRef({
    companies: {},
    sparseData: {}
  });

  const loadData = async () => {
    try {
      const allTopicsData = await Promise.all(
        allTopic.map(async (target_id) => {
          const time = 9;
          const companyUrl = `${process.env.PUBLIC_URL}/data/param/patent/alpha/topic=${target_id}/company.txt`;
          const sparseDataUrl = `${process.env.PUBLIC_URL}/data/topic${target_id}/persona=5/occupy_topic_${time}.json`;

          // キャッシュを確認
          if (!dataCache.current.companies[target_id]) {
            dataCache.current.companies[target_id] = await fetchData(companyUrl);
          }

          if (!dataCache.current.sparseData[target_id]) {
            dataCache.current.sparseData[target_id] = await fetchData(sparseDataUrl);
          }

          const companies = dataCache.current.companies[target_id];
          const sparseData = dataCache.current.sparseData[target_id];

          // 正規化関数
          const normalizeString = (str) => {
            if (typeof str !== "string") {
              console.warn("非文字列データが検出されました:", str);
              return null; // 非文字列データは無視
            }
            return str.normalize("NFC").trim(); // 正規化とトリムを適用
          };

          // 正規化したデータで比較
          const sanitizedCompanies = companies.map(normalizeString);
          const sanitizedCompany = normalizeString(company[0]);

          if (!sanitizedCompanies.includes(sanitizedCompany)) {
            console.warn(`Company "${sanitizedCompany}" not found in topic ${target_id}`);
            return null;
          }

          // スパースデータを処理
          const rowSums = processSparseData(sparseData);

          const companyIndex = sanitizedCompanies.indexOf(sanitizedCompany);

          return { topic: target_id, value: rowSums[companyIndex] };
        })
      );

      const filteredData = allTopicsData.filter((data) => data !== null);

      // 正規化とソート
      const totalValue = filteredData.reduce((sum, item) => sum + item.value, 0);
      if (totalValue === 0) {
        console.warn("No valid data to normalize.");
        setChartData([]);
        return;
      }



      const normalizedData = filteredData.map(item => ({
        category: item.topic,
        value: item.value / totalValue,
      })).sort((a, b) => b.value - a.value);

      setChartData(normalizedData.slice(0, 10)); // 上位10件のみ表示
      onRendered(); // 描画完了を通知
    } catch (error) {
      console.error("データ処理中のエラー:", error);
    }
  };

  // 初期データ読み込みとupdateの変更時にデータをロード
  useEffect(() => {
    if (visualType === "one-comp") {
      loadData();
    }
  }, [update, visualType]);

  const handlePlotClick = (event) => {
    if (event.points && event.points[0]) {
      const clickdata = event.points[0].label; // クリックされた部分のラベル
      const label = TopictoId[clickdata]
      const topicid = label.replace("Topic ", "");
      onClickData([topicid]); // 親コンポーネントにラベルを通知
    }
  };

  return (
    <div>
      <Plot
        data={[
          {
            type: "pie",
            values: chartData.map(item => item.value),
            labels: chartData.map(item =>  IdtoTopic[String(item.category)]),
            direction: "clockwise",
            marker: { colorscale: "Viridis" },
          },
        ]}
        layout={{
          title: title,
          showlegend: true,
          plot_bgcolor: "white",
          paper_bgcolor: "white",
          margin: { t: 70, b: 5, l: 40, r: 50 },
        }}
        onClick={handlePlotClick} // クリックイベントを追加
      />
    </div>
  );
};

export default PlotPieB;
