// src/App.js
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const time = 9;
  const target_id = 5;

  useEffect(() => {
    //const dataUrl = `${process.env.PUBLIC_URL}/data/sample.json`;
    const dataUrl = `${process.env.PUBLIC_URL}/data/topic${target_id}/persona=5/occupy_mean_0.json`;

    //const dataUrl = `${process.env.PUBLIC_URL}/data/topic${target_id}/persona_5/occupy_mean_${time}.json`;
    console.log(dataUrl)
    fetch(dataUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("データの読み込みエラー:", error));
  }, []);

  return (
    <div>
      <h1>データの読み込み結果</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
