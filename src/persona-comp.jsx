import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';



 
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

const toList = async (dataPath) => {
  try {
    const response = await fetch(dataPath);
    const text = await response.text();
    const lines = text.split("\n").filter(line => line.trim() !== "");

    const alpha_li = lines.map(line => parseFloat(line.split(",")[0]));
    const beta_li = lines.map(line => parseFloat(line.split(",")[1]));

    return { alpha_li, beta_li };
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return { alpha_li: [], beta_li: [] };
  }
};

const PlotPersonComp = ({ update, visualType, topic, company, span, onRendered }) => {
const IdtoTopic = {"2":"コンクリート構造","3":"地盤改良","1":"トンネル掘削",
        "0":"免震構造","9":"管理システム","6":"廃棄物処理","8":"建築パネル",
        "7":"空調システム","11":"掘削装置"};

const colormap = {"コンクリート構造":'rgb(229, 134, 6)', "地盤改良":'rgb(93, 105, 177)', "トンネル掘削":'rgb(82, 188, 163)',
          "免震構造":'rgb(153, 201, 69)', "管理システム":'rgb(204, 97, 176)', "廃棄物処理":'rgb(36, 121, 108)', 
          "建築パネル":'rgb(218, 165, 27)',"空調システム":'rgb(47, 138, 196)', "掘削装置":'rgb(118, 78, 159)', 
        };
        
  const arrow_color = ['#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF'];

  const [preparedData, setPreparedData] = useState(null);
  const [figData, setFigData] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const [title, setTitle] = useState("企業の立ち位置");
  const [isLoading, setIsLoading] = useState(false);

  // 4象限の固定ラベル（軸の意味に合わせた説明）
  // X=新規性（低:伝統的〜高:革新的）、Y=順応性（低:独自路線〜高:業界追随）
  const quadrantLabels = [
    { x: 0.02, y: 0.97, text: '業界の流れに乗り<br>伝統的技術を磨く',   xanchor: 'left',  yanchor: 'top'    },
    { x: 0.98, y: 0.97, text: '業界の流れに乗り<br>革新的技術に挑戦',   xanchor: 'right', yanchor: 'top'    },
    { x: 0.02, y: 0.03, text: '独自路線で<br>伝統的技術に特化',         xanchor: 'left',  yanchor: 'bottom' },
    { x: 0.98, y: 0.03, text: '独自路線で<br>革新的技術に挑戦',         xanchor: 'right', yanchor: 'bottom' },
  ].map(({ x, y, text, xanchor, yanchor }) => ({
    xref: 'paper', yref: 'paper', x, y, text, xanchor, yanchor,
    showarrow: false,
    font: { size: 8, color: 'gray' },
    bgcolor: 'rgba(255,255,255,0.6)',
    borderpad: 2,
  }));

  // データロード: 各トピックのcompanyファイルから選択会社のインデックスを特定し、
  // そのインデックスのデータをtest_optimize_Nから取得して軌跡を構築
  useEffect(() => {
    if (!topic || topic.length === 0 || !company) return;

    const normalize = (s) => typeof s === 'string' ? s.normalize('NFC').trim() : '';
    const selectedCompanies = (Array.isArray(company) ? company : [company]).map(normalize);
    const spanId = String(span || '2');
    const spanToMaxP = { '1': 20, '2': 9, '3': 6 };
    const maxP = spanToMaxP[spanId] ?? 9;

    const loadAll = async () => {
      setIsLoading(true);
      try {
        const allTraces = [];

        for (const topicId of topic) {
          // 1. そのトピックのcompanyリストを読み込む
          const companyUrl = `${process.env.PUBLIC_URL}/param/patent/topic=${topicId}/company`;
          const rawCompanies = await loadCompanies(companyUrl);
          const normalizedCompanies = rawCompanies.map(normalize);

          // 2. サイドバーで選択した各会社のインデックスをcompanyリストから特定
          const companyIndexMap = selectedCompanies
            .map(cn => ({ name: cn, idx: normalizedCompanies.indexOf(cn) }))
            .filter(({ idx }) => idx !== -1);

          if (companyIndexMap.length === 0) continue;

          // 3. 全時点のtest_optimize_Nファイルを並列取得
          const timeDataList = await Promise.all(
            Array.from({ length: maxP + 1 }, (_, p) =>
              toList(`${process.env.PUBLIC_URL}/param/patent/topic=${topicId}/span=${spanId}/test_optimize_${p}`)
            )
          );

          // 4. 各会社について、各時点のインデックス行のデータで軌跡を構築
          for (const { name, idx } of companyIndexMap) {
            allTraces.push({
              topicId,
              companyName: name,
              alpha: timeDataList.map(({ alpha_li }) => alpha_li[idx]),
              beta:  timeDataList.map(({ beta_li  }) => beta_li[idx]),
            });
          }
        }

        setPreparedData({ traces: allTraces });
        setTitle(`${selectedCompanies.join(', ')} の業界での立ち位置`);
      } catch (error) {
        console.error("データ準備中のエラー:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAll();
  }, [visualType, topic, company, span]);

  // 描画: preparedData が更新されたらPlotlyのデータ・アノテーションを生成
  useEffect(() => {
    if (!preparedData) return;

    if (!preparedData.traces || preparedData.traces.length === 0) {
      setFigData([]);
      setAnnotations([...quadrantLabels]);
      if (onRendered) onRendered();
      return;
    }

    const plotData = preparedData.traces.map(({ topicId, companyName, alpha, beta }) => {
      const n = alpha.length;
      return {
        x: alpha,
        y: beta,
        mode: 'lines+markers',
        type: 'scatter',
        marker: {
          symbol: alpha.map((_, i) => i === 0 ? 'square' : i === n - 1 ? 'star' : 'circle'),
          color: colormap[IdtoTopic[topicId]] || 'gray',
          size:   alpha.map((_, i) => (i === 0 || i === n - 1) ? 9 : 5),
        },
        name: `${companyName} (${IdtoTopic[topicId] || topicId})`,
      };
    });

    // 全連続時点間に進行方向の矢印を描画
    const plotAnnotations = preparedData.traces.flatMap(({ topicId, alpha, beta }) =>
      Array.from({ length: alpha.length - 1 }, (_, i) => ({
        x: alpha[i + 1], y: beta[i + 1],
        ax: alpha[i],    ay: beta[i],
        xref: 'x', yref: 'y', axref: 'x', ayref: 'y',
        arrowcolor: colormap[IdtoTopic[topicId]] || 'gray',
        arrowsize: 1.2, arrowwidth: 1.2, arrowhead: 5,
        showarrow: true,
      }))
    );

    setFigData(plotData);
    setAnnotations([...plotAnnotations, ...quadrantLabels]);
    if (onRendered) onRendered();
  }, [preparedData]);

  return (
    <div style={{ width: '100vh', height: '100vh', position: 'relative' }}>
      {isLoading && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(255,255,255,0.75)', zIndex: 10, fontSize: 16, color: '#555',
        }}>
          読み込み中...
        </div>
      )}
      <Plot
        data={figData}
        layout={{
          plot_bgcolor: 'white',
          paper_bgcolor: 'white',
          annotations: annotations,
          title: {
            text: title,
            font: { size: 20, color: 'black' },
            xref: 'paper',
            x: 0.5,
            y: 0.95,
            xanchor: 'center',
          },

         
          xaxis: {
            title : "新規性",
            range: [-0.05, 1.15],
            linecolor: 'gray',
            linewidth: 1,
            gridcolor: 'lightgrey',
            gridwidth: 1,
            griddash: 'dot',
            tickmode:"array",
            tickvals:[0, 0.5, 1],
            ticktext:["低", "", "高"],
            zeroline: false,
          },
          yaxis: {
            title : "順応性",
            title_standoff: 25,
            range: [0.8, 2.15],
            linecolor: 'gray',
            linewidth: 1,
            gridcolor: 'lightgrey',
            gridwidth: 1,
            griddash: 'dot',
            tickmode:"array",
            tickvals:[1, 1.5, 2],
            ticktext:["低", "", "高"],
            zeroline: false,
          },
          margin: { t: 40, b: 40, l: 45, r: 50 },
          showlegend: true,
          legend: {
            x: 1,
            y: 1,
            bgcolor: 'rgba(255,255,255,0.5)',
            bordercolor: 'gray',
            borderwidth: 1,
          },
        }}
        config={{ responsive: true }} // Plotlyにレスポンシブ設定を有効化
              style={{marginTop:"2vh", width: "100vh", height: "45vh" }} // 必ず全体サイズを親要素に合わせる
      />
    </div>
  );
};

export default PlotPersonComp;
