import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

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

const PlotPieA = ({ visualType, topic, company }) => {
  const [chartValueData, setChartValueData] = useState([]);
  const [chartLabelData, setChartLabelData] = useState([]);
  const [title, setTitle] = useState("");
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    console.log("here", topic);
    const time = 8;
    const target_id = 5;
    const dataUrl = `${process.env.PUBLIC_URL}/data/sample.json`;

    

    if (visualType === "one-topic") {
      //const dataUrl = `${process.env.PUBLIC_URL}/data/sample.json`;

      
      //const dataUrl = `${process.env.PUBLIC_URL}/data/topic${target_id}/persona=5/occupy_mean_${time}.json`;
      const columnPath = `${process.env.PUBLIC_URL}/param/patent/alpha/topic=${target_id}/company.txt`;
      setTitle("注目トピックに関する特許の企業占有率");
          // グラフデータを取得
    fetch(dataUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => setChartValueData(jsonData))
    .catch((error) => console.error("データの読み込みエラー:", error));

  // company listを取得してlabelsに設定
    if (columnPath) {
      loadCompanies(columnPath).then((companies) => {
        setCompanyList(companies);
        setChartLabelData(companies);
      });
    }
    console.log("Chart Label Data:", chartLabelData);
    console.log("Chart Value Data:", chartValueData);
  

    } else {
      const columnPath = `${process.env.PUBLIC_URL}/param/patent/alpha/topic=${target_id}/company.txt`;

      const dataUrl = `${process.env.PUBLIC_URL}/data/topic${topic}/persona=5/c_occupy_topic_${time}.json`;
      setTitle("特許分野の占有率");
          // グラフデータを取得
    fetch(dataUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => setChartValueData(jsonData))
    .catch((error) => console.error("データの読み込みエラー:", error));

      // company listを取得してlabelsに設定
      if (columnPath) {
        loadCompanies(columnPath).then((companies) => {
          setCompanyList(companies);
          setChartLabelData(companies);
        });
      }
      console.log("Chart Label Data:", chartLabelData);
      console.log("Chart Value Data:", chartValueData);
    
    }

    


  }, [visualType, topic, company]);


  return (
    <div>
      <h3>{title}</h3>
      <Plot
        data={[
          {
            type: "pie",
            values: chartValueData,
            labels: chartLabelData,
            direction: "clockwise",
            marker: {
              colorscale: "Viridis",
            },
          },
        ]}
        layout={{
          title: title,
          height: 400,
          width: 500,
          showlegend: true,
          plot_bgcolor: "white",
          paper_bgcolor: "white",
          margin: { t: 70, b: 5, l: 40, r: 50 },
        }}
      />
      <ul>
        {companyList.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlotPieA;
