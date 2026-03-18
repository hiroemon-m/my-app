/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.jsx */ "./src/sidebar.jsx");
/* harmony import */ var _content_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.jsx */ "./src/content.jsx");




const App = () => {
  const arrowColor = ['#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF', '#3E9E6F', '#F38181', '#545E75', '#FFB627', '#577590'];
  const companyList = ['鹿島建設株式会社', '株式会社大林組', '清水建設株式会社', '大成建設株式会社', '株式会社竹中工務店', '株式会社長谷工コーポレーション', '前田建設工業株式会社', '五洋建設株式会社', '株式会社フジタ', '戸田建設株式会社', '株式会社熊谷組'];
  const topicList = ['0', '1', '2', '3', '5', '6', '7', '8', '9', '11'];
  const [visualType, setVisualType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('one-topic');
  const [isApplied, setIsApplied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [selectedCompanies, setSelectedCompanies] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['株式会社熊谷組']);
  const [selectedTopics, setSelectedTopics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['0']);
  const [selectedSpan, setSelectedSpan] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('2');
  const handleVisualTypeChange = value => {
    setVisualType(value);
  };
  const handleApply = () => {
    setIsApplied(1);
  };
  const toggleSelection = (item, setSelected, buttomtype) => {
    if (buttomtype === 'checkbox') {
      setSelected(prevSelected => prevSelected.includes(item) ? prevSelected.filter(i => i !== item) : [...prevSelected, item]);
    } else {
      setSelected([item]);
    }
  };
  const CompanyCheckboxChange = (company, buttomtype) => {
    toggleSelection(company, setSelectedCompanies, buttomtype);
  };
  const TopicCheckboxChange = (topic, buttomtype) => {
    toggleSelection(topic, setSelectedTopics, buttomtype);
  };
  const handleSpanChange = value => {
    setSelectedSpan(value);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSelectedCompanies(['株式会社熊谷組']);
    setSelectedTopics(['0']);
  }, [visualType]);
  const resetIsApplied = () => {
    setIsApplied(0);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "react-content",
    fluid: true,
    className: "bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    md: 3,
    className: "border-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onApply: handleApply,
    visualType: visualType,
    onVisualTypeChange: handleVisualTypeChange,
    topicList: topicList,
    companyList: companyList,
    selectedCompanies: selectedCompanies,
    selectedTopics: selectedTopics,
    onChangeTopic: TopicCheckboxChange,
    onChangeCompany: CompanyCheckboxChange,
    selectedSpan: selectedSpan,
    onSpanChange: handleSpanChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    md: 9,
    className: "border-end",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plot: isApplied,
    visualType: visualType,
    topic: selectedTopics,
    company: selectedCompanies,
    span: selectedSpan,
    resetApply: resetIsApplied
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/content.jsx":
/*!*************************!*\
  !*** ./src/content.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var _occupy_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./occupy.jsx */ "./src/occupy.jsx");
/* harmony import */ var _occupy_company_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./occupy-company.jsx */ "./src/occupy-company.jsx");
/* harmony import */ var _persona_comp_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persona-comp.jsx */ "./src/persona-comp.jsx");
/* harmony import */ var _persona_topic_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persona-topic.jsx */ "./src/persona-topic.jsx");
/* harmony import */ var _trend_topix_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trend-topix.jsx */ "./src/trend-topix.jsx");
/* harmony import */ var _trend_comp_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trend-comp.jsx */ "./src/trend-comp.jsx");
/* harmony import */ var _go_anywhere_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./go-anywhere.jsx */ "./src/go-anywhere.jsx");








 // 正しいパスを指定

const Content = _ref => {
  let {
    plot,
    visualType,
    topic,
    company,
    span,
    resetApply
  } = _ref;
  const [clickData, setClickData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // クリックデータの状態

  const handlePieChartClick = data => {
    console.log("クリックされたデータ:", data); // デバッグ用
    setClickData(data); // 状態を更新
  };
  const [cardData, setCardData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchData = async () => {
      const data = await (0,_go_anywhere_jsx__WEBPACK_IMPORTED_MODULE_7__.getCardData)(plot, visualType, topic, company, span);
      setCardData(data);
    };
    fetchData();
  }, [plot, visualType, topic, company, span]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fluid: true,
    className: "bg-light",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      height: '50vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    md: 12,
    style: {
      marginLeft: '0%'
    }
  }, visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_persona_topic_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    span: span,
    onRendered: resetApply,
    layout: {
      title: "ペルソナの可視化",
      width: '100%',
      height: '50vh'
    },
    config: {
      responsive: true
    } // Plotlyにレスポンシブ設定を有効化
    ,
    style: {
      width: "100%",
      height: "50vh"
    } // 必ず全体サイズを親要素に合わせる
    ,
    className: "bg-light"
  }) : visualType === "one-comp" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_persona_comp_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    span: span,
    onRendered: resetApply,
    layout: {
      title: "ペルソナの可視化",
      width: '100%',
      height: '42vh'
    },
    config: {
      responsive: true
    } // Plotlyにレスポンシブ設定を有効化
    ,
    style: {
      width: "100%",
      height: "100%"
    } // 必ず全体サイズを親要素に合わせる
    ,
    className: "bg-light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u8A72\u5F53\u3059\u308B\u8868\u793A\u304C\u3042\u308A\u307E\u305B\u3093"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      height: '50vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    md: 6
  }, visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_occupy_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    span: span,
    onRendered: resetApply,
    layout: {
      title: '注目企業の業界に対する占有率',
      width: '100%',
      height: '80%'
    },
    className: "bg-light"
  }) : visualType === "one-comp" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_occupy_company_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    span: span,
    onRendered: resetApply,
    onClickData: handlePieChartClick // クリックデータのハンドラーを渡す
    ,
    layout: {
      title: '注目企業の業界に対する占有率',
      width: '100%',
      height: '80%'
    },
    className: "bg-light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u8A72\u5F53\u3059\u308B\u8868\u793A\u304C\u3042\u308A\u307E\u305B\u3093")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    md: 6
  }, visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_trend_topix_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    span: span,
    onRendered: resetApply,
    data: [] // データを追加してください
    ,
    layout: {
      title: 'Fタームの分布',
      width: '100%',
      height: '80%'
    },
    className: "bg-light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_trend_comp_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    span: span,
    clickdata: clickData,
    onRendered: resetApply,
    data: [] // データを追加してください
    ,
    layout: {
      title: 'Fタームの分布',
      width: '100%',
      height: '80%'
    },
    className: "bg-light"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "h-100"
  }, cardData.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: index,
    xs: 12 // 各カードを1行に表示、レイアウトに応じて調整可能
    ,
    className: "d-flex align-items-center justify-content-center",
    style: {
      flex: "1 1 auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "w-75 h-75"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Body, {
    className: "d-flex flex-column align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Title, {
    className: "text-secondary-emphasis"
  }, item.label || item.direction.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Text, {
    className: "text-secondary-emphasis"
  }, item.values.join(", "))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/go-anywhere.jsx":
/*!*****************************!*\
  !*** ./src/go-anywhere.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCardData: () => (/* binding */ getCardData)
/* harmony export */ });
// anywhere_5.json 形式:
// [{"company": "...", "color": "...", "novelty_up": [...], "novelty_down": [...], "adapt_up": [...], "adapt_down": [...]}]
// FIコードは文字列で直接格納されている（インデックスではない）
const getCardData = async (plot, visualType, topic, company, span) => {
  try {
    if (visualType !== "one-topic") return [];
    const targetTopic = Array.isArray(topic) ? topic[0] : topic;
    const spanId = span || "2";
    const targetCompany = Array.isArray(company) ? company[0] : company || "株式会社熊谷組";
    const dataPath = `${"/my-app"}/data/app_data/topic${targetTopic}/persona=5/span${spanId}/anywhere_5.json`;
    const response = await fetch(dataPath);
    if (!response.ok) throw new Error("データの取得に失敗しました");
    const jsonData = await response.json();
    if (!Array.isArray(jsonData)) return [];

    // 対象企業のデータを探す（見つからなければ最初の企業を使う）
    let companyEntry = jsonData.find(item => item.company === targetCompany);
    if (!companyEntry && jsonData.length > 0) {
      companyEntry = jsonData[0];
    }
    if (!companyEntry) return [];
    return [{
      direction: "novelty_up",
      label: "新規性↑",
      values: companyEntry.novelty_up || []
    }, {
      direction: "novelty_down",
      label: "新規性↓",
      values: companyEntry.novelty_down || []
    }, {
      direction: "adapt_up",
      label: "順応性↑",
      values: companyEntry.adapt_up || []
    }, {
      direction: "adapt_down",
      label: "順応性↓",
      values: companyEntry.adapt_down || []
    }];
  } catch (error) {
    console.error("データの読み込みに失敗しました:", error);
    return [];
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _app_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.jsx */ "./src/app.jsx");



react_dom__WEBPACK_IMPORTED_MODULE_1__.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById("root"));

/***/ }),

/***/ "./src/occupy-company.jsx":
/*!********************************!*\
  !*** ./src/occupy-company.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js");


const colormap = {
  "コンクリート構造": 'rgb(229, 134, 6)',
  "地盤改良": 'rgb(93, 105, 177)',
  "トンネル掘削": 'rgb(82, 188, 163)',
  "免震構造": 'rgb(153, 201, 69)',
  "管理システム": 'rgb(204, 97, 176)',
  "廃棄物処理": 'rgb(36, 121, 108)',
  "建築パネル": 'rgb(218, 165, 27)',
  "空調システム": 'rgb(47, 138, 196)',
  "掘削装置": 'rgb(118, 78, 159)'
};
const fetchJson = async url => {
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
const getRowSums = occupyJson => {
  const numRows = occupyJson.companies.length;
  const sums = Array(numRows).fill(0);
  occupyJson.data.forEach(_ref => {
    let {
      row,
      value
    } = _ref;
    sums[row] += value;
  });
  return sums;
};
const PlotPieB = _ref2 => {
  let {
    update,
    visualType,
    topic,
    company,
    span,
    onRendered,
    onClickData
  } = _ref2;
  const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("注目トピックに関する特許の企業占有率");
  const allTopic = [2, 3, 1, 0, 9, 6, 8, 7, 11];
  const IdtoTopic = {
    "2": "コンクリート構造",
    "3": "地盤改良",
    "1": "トンネル掘削",
    "0": "免震構造",
    "9": "管理システム",
    "6": "廃棄物処理",
    "8": "建築パネル",
    "7": "空調システム",
    "11": "掘削装置",
    "10": "建築設計",
    "5": "トンネル測量"
  };
  const TopictoId = {
    "コンクリート構造": "2",
    "地盤改良": "3",
    "トンネル掘削": "1",
    "免震構造": "0",
    "管理システム": "9",
    "廃棄物処理": "6",
    "建築パネル": "8",
    "空調システム": "7",
    "掘削装置": "11",
    "建築設計": "10",
    "トンネル測量": "5"
  };
  const dataCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const loadData = async () => {
    try {
      const spanId = span || "2";
      const allTopicsData = await Promise.all(allTopic.map(async target_id => {
        const cacheKey = `${target_id}-${spanId}`;
        if (!dataCache.current[cacheKey]) {
          const url = `${"/my-app"}/data/app_data/topic${target_id}/persona=5/span${spanId}/occupy_topic_9.json`;
          dataCache.current[cacheKey] = await fetchJson(url);
        }
        const occupyJson = dataCache.current[cacheKey];
        if (!occupyJson || !occupyJson.companies) return null;
        const normalizeString = str => typeof str === "string" ? str.normalize("NFC").trim() : null;
        const sanitizedCompanies = occupyJson.companies.map(normalizeString);
        const sanitizedCompany = normalizeString(company[0]);
        const companyIndex = sanitizedCompanies.indexOf(sanitizedCompany);
        if (companyIndex === -1) return null;
        const rowSums = getRowSums(occupyJson);
        return {
          topic: target_id,
          value: rowSums[companyIndex]
        };
      }));
      const filteredData = allTopicsData.filter(data => data !== null);
      const totalValue = filteredData.reduce((sum, item) => sum + item.value, 0);
      if (totalValue === 0) {
        setChartData([]);
        return;
      }
      const normalizedData = filteredData.map(item => ({
        category: item.topic,
        value: item.value / totalValue
      })).sort((a, b) => b.value - a.value);
      setChartData(normalizedData.slice(0, 10));
      if (onRendered) onRendered();
    } catch (error) {
      console.error("データ処理中のエラー:", error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (visualType === "one-comp") {
      loadData();
    }
  }, [update, visualType, span]);
  const handlePlotClick = event => {
    if (event.points && event.points[0]) {
      const clickdata = event.points[0].label; // クリックされた部分のラベル
      const label = TopictoId[clickdata];
      const topicid = label.replace("Topic ", "");
      onClickData([topicid]); // 親コンポーネントにラベルを通知
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "3%",
      marginBottom: "3%",
      width: "100%",
      height: "94%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: [{
      type: "pie",
      values: chartData.map(item => item.value),
      labels: chartData.map(item => IdtoTopic[String(item.category)]),
      direction: "clockwise",
      marker: {
        colors: chartData.map(item => colormap[IdtoTopic[String(item.category)]])
      }
    }],
    layout: {
      title: title,
      showlegend: true,
      plot_bgcolor: "white",
      paper_bgcolor: "white",
      margin: {
        t: 70,
        b: 5,
        l: 40,
        r: 50
      }
    },
    style: {
      width: "100%",
      height: "100%"
    } // 必ず全体サイズを親要素に合わせ
    ,
    onClick: handlePlotClick // クリックイベントを追加
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlotPieB);

/***/ }),

/***/ "./src/occupy.jsx":
/*!************************!*\
  !*** ./src/occupy.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js");


const fetchData = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return [];
  }
};
const PlotPieA = _ref => {
  let {
    update,
    visualType,
    topic,
    span,
    onRendered
  } = _ref;
  const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const IdtoTopic = {
    "2": "コンクリート構造",
    "3": "地盤改良",
    "1": "トンネル掘削",
    "0": "免震構造",
    "9": "管理システム",
    "6": "廃棄物処理",
    "8": "建築パネル",
    "7": "空調システム",
    "11": "掘削装置",
    "10": "建築設計",
    "5": "トンネル測量"
  };
  const colormap = {
    '鹿島建設株式会社': 'rgb(229, 134, 6)',
    "株式会社大林組": 'rgb(93, 105, 177)',
    "清水建設株式会社": 'rgb(82, 188, 163)',
    "大成建設株式会社": 'rgb(153, 201, 69)',
    "株式会社竹中工務店": 'rgb(204, 97, 176)',
    "株式会社長谷工コーポレーション": 'rgb(36, 121, 108)',
    "前田建設工業株式会社": 'rgb(218, 165, 27)',
    "五洋建設株式会社": 'rgb(47, 138, 196)',
    "株式会社フジタ": 'rgb(118, 78, 159)',
    "戸田建設株式会社": 'rgb(237, 100, 90)',
    "株式会社熊谷組": 'rgb(165, 170, 153)'
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadChartData = async () => {
      try {
        const time = 0;
        const targetId = topic || "0";
        const spanId = span || "2";
        const dataUrl = `${"/my-app"}/data/app_data/topic${targetId}/persona=5/span${spanId}/occupy_mean_${time}.json`;

        // [{"company": "...", "value": 0.xxx}, ...] 形式
        const rawData = await fetchData(dataUrl);
        if (!Array.isArray(rawData)) return;
        const sortedData = rawData.filter(item => item.value !== null).sort((a, b) => b.value - a.value).slice(0, 10).map(item => ({
          label: item.company,
          value: item.value
        }));
        setChartData(sortedData);
        setTitle(`${IdtoTopic[targetId]}に関する特許の企業占有率`);
        if (onRendered) onRendered();
      } catch (error) {
        console.error("チャートデータの処理中にエラー:", error);
      }
    };
    if (visualType === "one-topic") {
      loadChartData();
    }
  }, [update, visualType, topic, span, onRendered]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "3%",
      marginBottom: "3%",
      width: "100%",
      height: "94%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: [{
      type: "pie",
      values: chartData.map(item => item.value),
      labels: chartData.map(item => item.label),
      direction: "clockwise",
      marker: {
        colors: chartData.map(item => colormap[item.label])
      }
    }],
    layout: {
      title: title,
      showlegend: true,
      plot_bgcolor: "white",
      paper_bgcolor: "white",
      margin: {
        t: 70,
        b: 5,
        l: 40,
        r: 50
      }
    },
    style: {
      width: "100%",
      height: "100%"
    } // 必ず全体サイズを親要素に合わせ
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlotPieA);

/***/ }),

/***/ "./src/persona-comp.jsx":
/*!******************************!*\
  !*** ./src/persona-comp.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js");



// データをロードする関数
const loadCompanies = async dataPath => {
  try {
    const response = await fetch(dataPath);
    const text = await response.text();
    return text.split("\n").filter(line => line.trim() !== "");
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return [];
  }
};
const toList = async dataPath => {
  try {
    const response = await fetch(dataPath);
    const text = await response.text();
    const lines = text.split("\n").filter(line => line.trim() !== "");
    const alpha_li = lines.map(line => parseFloat(line.split(",")[0]));
    const beta_li = lines.map(line => parseFloat(line.split(",")[1]));
    return {
      alpha_li,
      beta_li
    };
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return {
      alpha_li: [],
      beta_li: []
    };
  }
};
const PlotPersonComp = _ref => {
  let {
    update,
    visualType,
    topic,
    company,
    span,
    onRendered
  } = _ref;
  const IdtoTopic = {
    "2": "コンクリート構造",
    "3": "地盤改良",
    "1": "トンネル掘削",
    "0": "免震構造",
    "9": "管理システム",
    "6": "廃棄物処理",
    "8": "建築パネル",
    "7": "空調システム",
    "11": "掘削装置"
  };
  const colormap = {
    "コンクリート構造": 'rgb(229, 134, 6)',
    "地盤改良": 'rgb(93, 105, 177)',
    "トンネル掘削": 'rgb(82, 188, 163)',
    "免震構造": 'rgb(153, 201, 69)',
    "管理システム": 'rgb(204, 97, 176)',
    "廃棄物処理": 'rgb(36, 121, 108)',
    "建築パネル": 'rgb(218, 165, 27)',
    "空調システム": 'rgb(47, 138, 196)',
    "掘削装置": 'rgb(118, 78, 159)'
  };
  const arrow_color = ['#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF'];
  const [preparedData, setPreparedData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [figData, setFigData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [annotations, setAnnotations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("企業の立ち位置");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const prepareData = async () => {
      try {
        const allPromises = (topic || ["default_topic"]).map(async target_id => {
          console.log("topic", target_id);
          const columnPath = `${"/my-app"}/data/param/patent/topic=${target_id}/company`;
          const companies = await loadCompanies(columnPath);
          const companyDict = companies.reduce((acc, value, idx) => {
            acc[value] = idx;
            return acc;
          }, {});
          const newSearchList = Array.isArray(company) ? company : [company];
          const filteredSearchList = newSearchList.filter(value => value in companyDict);
          const node_alpha = Array.from({
            length: filteredSearchList.length
          }, () => Array(5).fill(0));
          const node_beta = Array.from({
            length: filteredSearchList.length
          }, () => Array(5).fill(0));
          const promises = Array.from({
            length: 5
          }, (_, j) => j + 5).map(async p => {
            const spanId = span || "2";
            const parameterPath = `${"/my-app"}/data/param/patent/topic=${target_id}/span=${spanId}/test_optimize_${p}`;
            const {
              alpha_li,
              beta_li
            } = await toList(parameterPath);
            filteredSearchList.forEach((k, j) => {
              const idx = companies.indexOf(k);
              node_alpha[j][p - 5] = alpha_li[idx];
              node_beta[j][p - 5] = beta_li[idx];
            });
          });
          await Promise.all(promises);
          return {
            node_alpha,
            node_beta,
            filteredSearchList
          };
        });
        const results = await Promise.all(allPromises);
        const combinedAlpha = results.flatMap(result => result.node_alpha);
        const combinedBeta = results.flatMap(result => result.node_beta);
        const combinedSearchList = results.flatMap(result => result.filteredSearchList);
        setPreparedData({
          alpha: combinedAlpha,
          beta: combinedBeta,
          searchList: combinedSearchList
        });
        setTitle(`${company}の業界での立ち位置`); // 初期タイトルを設定
      } catch (error) {
        console.error("データ準備中のエラー:", error);
      }
    };

    // 初期レンダリング時にもデータを準備
    prepareData();
  }, [visualType, topic, company, span]);

  // preparedData が揃ったら自動で描画
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!preparedData) return;
    const plotData = preparedData.searchList.map((k, j) => ({
      x: preparedData.alpha[j],
      y: preparedData.beta[j],
      mode: "lines+markers+text",
      text: ["1", "2", "3", "4", "5"],
      textposition: "top left",
      marker: {
        symbol: 'circle',
        color: colormap[IdtoTopic[topic[j % topic.length]]],
        size: 5
      },
      name: IdtoTopic[topic[j % topic.length]]
    }));
    const plotAnnotations = preparedData.searchList.flatMap((k, j) => Array(4).fill(0).map((_, i) => ({
      x: preparedData.alpha[j][i + 1],
      y: preparedData.beta[j][i + 1],
      xref: 'x',
      yref: 'y',
      axref: 'x',
      ayref: 'y',
      ax: preparedData.alpha[j][i],
      ay: preparedData.beta[j][i],
      arrowcolor: colormap[IdtoTopic[topic[j % topic.length]]],
      arrowsize: 1.2,
      arrowwidth: 1.2,
      arrowhead: 5,
      showarrow: true
    })));
    setFigData(plotData);
    setAnnotations(plotAnnotations);
    if (onRendered) onRendered();
  }, [preparedData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100vh',
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: figData,
    layout: {
      plot_bgcolor: 'white',
      paper_bgcolor: 'white',
      annotations: annotations,
      title: {
        text: title,
        font: {
          size: 20,
          color: 'black'
        },
        xref: 'paper',
        x: 0.5,
        y: 0.95,
        xanchor: 'center'
      },
      annotations: [{
        x: 0.25,
        y: 1.05,
        text: '（業界を引っ張り伝統的な分野に取り組んでいる）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 0.75,
        y: 1.05,
        text: '（業界を引っ張り未知の分野に投資している）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 0.25,
        y: -0.05,
        text: '（独自路線を進み伝統的な分野に取り組んでいる）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 0.75,
        y: -0.05,
        text: '（独自路線を進み未知の分野に投資している）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }],
      xaxis: {
        title: "新規性",
        range: [-1, 1],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [-1, 0, 1],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      yaxis: {
        title: "順応性",
        title_standoff: 25,
        range: [-1, 1],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [-1, 0, 1],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      margin: {
        t: 40,
        b: 40,
        l: 45,
        r: 50
      },
      showlegend: true,
      legend: {
        x: 1,
        y: 1,
        bgcolor: 'rgba(255,255,255,0.5)',
        bordercolor: 'gray',
        borderwidth: 1
      }
    },
    config: {
      responsive: true
    } // Plotlyにレスポンシブ設定を有効化
    ,
    style: {
      marginTop: "2vh",
      width: "100vh",
      height: "45vh"
    } // 必ず全体サイズを親要素に合わせる
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlotPersonComp);

/***/ }),

/***/ "./src/persona-topic.jsx":
/*!*******************************!*\
  !*** ./src/persona-topic.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js");


const colormap = {
  '鹿島建設株式会社': 'rgb(229, 134, 6)',
  "株式会社大林組": 'rgb(93, 105, 177)',
  "清水建設株式会社": 'rgb(82, 188, 163)',
  "大成建設株式会社": 'rgb(153, 201, 69)',
  "株式会社竹中工務店": 'rgb(204, 97, 176)',
  "株式会社長谷工コーポレーション": 'rgb(36, 121, 108)',
  "前田建設工業株式会社": 'rgb(218, 165, 27)',
  "五洋建設株式会社": 'rgb(47, 138, 196)',
  "株式会社フジタ": 'rgb(118, 78, 159)',
  "戸田建設株式会社": 'rgb(237, 100, 90)',
  "株式会社熊谷組": 'rgb(165, 170, 153)'
};

// データをロードする関数
const loadCompanies = async dataPath => {
  try {
    const response = await fetch(dataPath);
    const text = await response.text();
    return text.split("\n").filter(line => line.trim() !== "");
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return [];
  }
};
const toList = async dataPath => {
  try {
    const response = await fetch(dataPath);
    const text = await response.text();
    const lines = text.split("\n").filter(line => line.trim() !== "");
    const alpha_li = lines.map(line => parseFloat(line.split(",")[0]));
    const beta_li = lines.map(line => parseFloat(line.split(",")[1]));
    return {
      alpha_li,
      beta_li
    };
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return {
      alpha_li: [],
      beta_li: []
    };
  }
};
const PlotPersonTopic = _ref => {
  let {
    update,
    visualType,
    topic,
    company,
    span,
    onRendered
  } = _ref;
  const arrow_color = ['#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF'];
  const [figData, setFigData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [annotations, setAnnotations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [companyList, setCompanyList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [searchList, setSearchList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const IdtoTopic = {
    "2": "コンクリート構造",
    "3": "地盤改良",
    "1": "トンネル掘削",
    "0": "免震構造",
    "9": "管理システム",
    "6": "廃棄物処理",
    "8": "建築パネル",
    "7": "空調システム",
    "11": "掘削装置",
    "10": "建築設計",
    "5": "トンネル測量"
  };

  // 初期データのロード
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (visualType === "one-topic" && topic) {
      const target_id = topic; // トピックIDの設定
      const columnPath = `${"/my-app"}/data/param/patent/topic=${target_id}/company`;
      loadCompanies(columnPath).then(data => {
        setCompanyList(data);
        setTitle(`業界内での企業の立ち位置`);
      });
    }
  }, [visualType, topic]);

  // 検索対象のフィルタリング
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (companyList.length > 0) {
      const companyDict = companyList.reduce((acc, value, idx) => {
        acc[value] = idx;
        return acc;
      }, {});
      const newSearchList = Array.isArray(company) ? company : [company];
      setSearchList(newSearchList.filter(value => value in companyDict));
    }
  }, [companyList, company]);

  // データの描画（searchList・span が変わったら自動で再描画）
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (searchList.length === 0 || !topic) return;
    const target_id = topic;
    const node_alpha = Array.from({
      length: searchList.length
    }, () => Array(5).fill(0));
    const node_beta = Array.from({
      length: searchList.length
    }, () => Array(5).fill(0));
    const promises = Array.from({
      length: 5
    }, (_, i) => i + 5).map(p => {
      const spanId = span || "2";
      const parameterPath = `${"/my-app"}/data/param/patent/topic=${target_id}/span=${spanId}/test_optimize_${p}`;
      return toList(parameterPath).then(_ref2 => {
        let {
          alpha_li,
          beta_li
        } = _ref2;
        searchList.forEach((k, j) => {
          const idx = companyList.indexOf(k);
          node_alpha[j][p - 5] = alpha_li[idx];
          node_beta[j][p - 5] = beta_li[idx];
        });
      });
    });
    Promise.all(promises).then(() => {
      const plotData = searchList.map((k, j) => ({
        x: node_alpha[j],
        y: node_beta[j],
        mode: "lines+markers+text",
        text: ["1", "2", "3", "4", "5"],
        textposition: "top left",
        marker: {
          symbol: 'circle',
          color: colormap[k],
          size: 5
        },
        name: k
      }));
      const plotAnnotations = searchList.flatMap((k, j) => Array(4).fill(0).map((_, i) => ({
        x: node_alpha[j][i + 1],
        y: node_beta[j][i + 1],
        xref: 'x',
        yref: 'y',
        ax: node_alpha[j][i],
        ay: node_beta[j][i],
        axref: 'x',
        ayref: 'y',
        arrowcolor: colormap[k],
        arrowsize: 1.2,
        arrowwidth: 1.2,
        arrowhead: 5,
        showarrow: true
      })));
      setFigData(plotData);
      setAnnotations(plotAnnotations);
      if (onRendered) onRendered();
    });
  }, [searchList, companyList, topic, span]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100vh',
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: figData,
    layout: {
      plot_bgcolor: 'white',
      paper_bgcolor: 'white',
      annotations: annotations,
      title: {
        text: title,
        font: {
          size: 20,
          color: 'black'
        },
        xref: 'paper',
        x: 0.5,
        y: 0.95,
        xanchor: 'center'
      },
      annotations: [{
        x: 0.25,
        y: 1.05,
        text: '（業界を引っ張り伝統的な分野に取り組んでいる）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 0.75,
        y: 1.05,
        text: '（業界を引っ張り未知の分野に投資している）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 0.25,
        y: -0.05,
        text: '（独自路線を進み伝統的な分野に取り組んでいる）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 0.75,
        y: -0.05,
        text: '（独自路線を進み未知の分野に投資している）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }],
      xaxis: {
        title: "新規性",
        range: [-1, 1],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [-1, 0, 1],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      yaxis: {
        title: "順応性",
        title_standoff: 25,
        range: [-1, 1],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [-1, 0, 1],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      margin: {
        t: 40,
        b: 40,
        l: 45,
        r: 50
      },
      showlegend: true,
      legend: {
        x: 1,
        y: 1,
        bgcolor: 'rgba(255,255,255,0.5)',
        bordercolor: 'gray',
        borderwidth: 1
      }
    },
    config: {
      responsive: true
    } // Plotlyにレスポンシブ設定を有効化
    ,
    style: {
      marginTop: "2vh",
      width: "100vh",
      height: "45vh"
    } // 必ず全体サイズを親要素に合わせる
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlotPersonTopic);

/***/ }),

/***/ "./src/sidebar.jsx":
/*!*************************!*\
  !*** ./src/sidebar.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Accordion.js");
// Sidebar.jsx


const Sidebar = _ref => {
  let {
    onApply,
    visualType,
    onVisualTypeChange,
    topicList,
    companyList,
    selectedCompanies,
    selectedTopics,
    onChangeTopic,
    onChangeCompany,
    selectedSpan,
    onSpanChange
  } = _ref;
  const [inputType, setInputType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["radio", "checkbox"]);
  const [companyFilter, setCompanyFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const handleRadioChange = event => {
    onVisualTypeChange(event.target.value);
    if (event.target.value == "one-comp") {
      setInputType(["checkbox", "radio"]);
    } else {
      setInputType(["radio", "checkbox"]);
    }
    console.log(event.target.value);
    console.log(inputType);
  };
  const IdtoTopic = {
    "2": "コンクリート構造",
    "3": "地盤改良",
    "1": "トンネル掘削",
    "0": "免震構造",
    "9": "管理システム",
    "6": "廃棄物処理",
    "8": "建築パネル",
    "7": "空調システム",
    "11": "掘削装置",
    "10": "建築設計",
    "5": "トンネル測量"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '100vh',
      padding: '10px',
      backgroundColor: 'bg-light'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bg-light text-danger font-italic",
    style: {
      height: '5%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    style: {
      marginTop: '10%'
    },
    className: "text-secondary-emphasis"
  }, "\u53EF\u8996\u5316\u6761\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "apply",
    onClick: onApply,
    style: {
      marginTop: '15%'
    },
    className: "badge rounded-pill bg-dark"
  }, "\u53EF\u8996\u5316"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bg-light my-2 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex align-items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-secondary-emphasis",
    style: {
      fontSize: '13px',
      whiteSpace: 'nowrap'
    }
  }, "\u6642\u9593\u3092\u9078\u629E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btn-group",
    role: "group"
  }, [{
    value: '1',
    label: '1年'
  }, {
    value: '2',
    label: '2年'
  }, {
    value: '3',
    label: '3年'
  }].map(_ref2 => {
    let {
      value,
      label
    } = _ref2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: value,
      type: "button",
      onClick: () => onSpanChange(value),
      className: `btn btn-sm ${selectedSpan === value ? 'btn-dark' : 'btn-outline-secondary'}`,
      style: {
        fontSize: '13px',
        padding: '2px 10px'
      }
    }, label);
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bg-light text-danger ",
    style: {
      height: '80%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    defaultActiveKey: "0",
    className: "my-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    eventKey: "0",
    className: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Header, null, "\u53EF\u8996\u5316\u30BF\u30A4\u30D7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-6 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "one-comp",
    name: "visual_type",
    value: "one-comp",
    className: "form-check-input",
    onChange: handleRadioChange,
    checked: visualType === "one-comp" // デフォルトチェック
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "one-comp",
    className: "form-check-label mx-2",
    style: {
      fontSize: "14px"
    }
  }, "1\u793E\u306B\u6CE8\u76EE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-6 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "one-topic",
    name: "visual_type",
    value: "one-topic",
    className: "form-check-input",
    onChange: handleRadioChange,
    checked: visualType === "one-topic" // デフォルトチェック
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "one-topic",
    className: "form-check-label mx-2",
    style: {
      fontSize: "14px"
    }
  }, "1\u30C8\u30D4\u30C3\u30AF\u306B\u6CE8\u76EE"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    eventKey: "1",
    className: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Header, null, "Topic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, topicList.map(topic => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: topic
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: inputType[0],
    id: topic,
    checked: selectedTopics.includes(topic),
    onChange: () => onChangeTopic(topic, inputType[0]),
    name: "topic"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: topic
  }, IdtoTopic[topic]))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    eventKey: "2",
    className: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Header, null, "Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "\u4F01\u696D\u540D\u3067\u7D5E\u308A\u8FBC\u307F...",
    value: companyFilter,
    onChange: e => setCompanyFilter(e.target.value),
    className: "form-control form-control-sm mb-2",
    style: {
      fontSize: '13px'
    }
  }), companyList.filter(company => company.includes(companyFilter)).map(company => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: company
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: inputType[1],
    id: company,
    checked: selectedCompanies.includes(company),
    onChange: () => onChangeCompany(company, inputType[1]),
    name: "company"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: company
  }, company))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/trend-comp.jsx":
/*!****************************!*\
  !*** ./src/trend-comp.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js");


const fetchData = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      const text = await response.text();
      return text.split("\n").filter(line => line.trim() !== "");
    }
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return [];
  }
};
const PlotBarChartB = _ref => {
  let {
    update,
    visualType,
    topic,
    company,
    span,
    clickdata,
    onRendered
  } = _ref;
  const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("FIの分布");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadChartData = async () => {
      try {
        const targetId = clickdata || topic[0] || "0";
        const spanId = span || "2";
        const path = `${"/my-app"}/data/app_data/topic${targetId}/persona=5/span${spanId}/occupy_topic_9.json`;
        const fiPath = `${"/my-app"}/data/fi_subclass_split.json`;
        const [occupyJson, fiList] = await Promise.all([fetchData(path), fetchData(fiPath)]);
        if (!occupyJson || !occupyJson.companies || !occupyJson.fi_codes) {
          setChartData([]);
          return;
        }
        const normalizeString = str => typeof str === "string" ? str.normalize("NFC").trim() : null;
        const sanitizedCompanies = occupyJson.companies.map(normalizeString);
        const companyIndex = sanitizedCompanies.indexOf(normalizeString(company[0]));
        if (companyIndex === -1) {
          console.warn(`Company "${company[0]}" not found.`);
          setChartData([]);
          return;
        }

        // 対象企業の行のみ抽出
        const fiValues = {};
        occupyJson.data.forEach(_ref2 => {
          let {
            row,
            col,
            value
          } = _ref2;
          if (row === companyIndex) {
            fiValues[occupyJson.fi_codes[col]] = value * 100;
          }
        });
        const sortedData = Object.entries(fiValues).map(_ref3 => {
          let [key, value] = _ref3;
          return {
            category: key,
            value,
            summarize: fiList[key]
          };
        }).sort((a, b) => b.value - a.value).slice(0, 10);
        setChartData(sortedData);
        setTitle(`${company[0]}のFIの分布`);
        if (onRendered) onRendered();
      } catch (error) {
        console.error("データ処理中のエラー:", error);
      }
    };
    if (visualType === "one-comp" && (update || chartData.length === 0 || clickdata)) {
      loadChartData();
    }
  }, [visualType, topic, company, span, JSON.stringify(clickdata), update]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "3%",
      marginBottom: "3%",
      width: "100%",
      height: "94%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: [{
      type: "bar",
      x: chartData.map(item => item.value).reverse(),
      y: chartData.map(item => item.category).reverse(),
      orientation: "h",
      marker: {
        color: "royalblue"
      },
      customdata: chartData.map(item => item.summarize).reverse(),
      hovertemplate: `説明: %{customdata}<br>%: %{x:.2f}% <extra></extra>`
    }],
    layout: {
      title: {
        text: title,
        x: 0.5,
        y: 0.95,
        xanchor: "center"
      },
      xaxis: {
        linecolor: "gray",
        linewidth: 1,
        mirror: false,
        ticksuffix: " %"
      },
      yaxis: {
        linecolor: "gray",
        linewidth: 1,
        mirror: false,
        title: "FI"
      },
      plot_bgcolor: "white",
      paper_bgcolor: "white",
      margin: {
        t: 40,
        b: 35,
        l: 80,
        r: 50
      },
      hoverlabel: {
        align: "left",
        font: {
          size: 11,
          color: "black"
        },
        bgcolor: "lightyellow",
        bordercolor: "gray"
      }
    },
    style: {
      width: "100%",
      height: "100%"
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlotBarChartB);

/***/ }),

/***/ "./src/trend-topix.jsx":
/*!*****************************!*\
  !*** ./src/trend-topix.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js");


const fetchData = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      const text = await response.text();
      return text.split("\n").filter(line => line.trim() !== "");
    }
  } catch (error) {
    console.error("データの読み込みエラー:", error);
    return [];
  }
};
const PlotBarChartA = _ref => {
  let {
    update,
    visualType,
    topic,
    span,
    onRendered
  } = _ref;
  const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("FIの分布");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadChartData = async () => {
      try {
        const targetId = topic[0];
        const spanId = span || "2";
        const path = `${"/my-app"}/data/app_data/topic${targetId}/persona=5/span${spanId}/occupy_topic_9.json`;
        const fiPath = `${"/my-app"}/data/fi_subclass_split.json`;
        const [occupyJson, fiList] = await Promise.all([fetchData(path), fetchData(fiPath)]);
        if (!occupyJson || !occupyJson.fi_codes || !occupyJson.data) return;

        // FIコード別に全企業の値を合算
        const fiSums = {};
        occupyJson.data.forEach(_ref2 => {
          let {
            col,
            value
          } = _ref2;
          const fiCode = occupyJson.fi_codes[col];
          fiSums[fiCode] = (fiSums[fiCode] || 0) + value;
        });
        const total = Object.values(fiSums).reduce((s, v) => s + v, 0);
        const formattedData = Object.entries(fiSums).map(_ref3 => {
          let [key, value] = _ref3;
          return {
            category: key,
            value: total > 0 ? value / total * 100 : 0,
            summarize: fiList[key]
          };
        });
        const sortedData = formattedData.sort((a, b) => b.value - a.value).slice(0, 10);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "3%",
      marginBottom: "3%",
      width: "100%",
      height: "94%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: [{
      type: "bar",
      x: chartData.map(item => item.value).reverse(),
      y: chartData.map(item => item.category).reverse(),
      orientation: "h",
      marker: {
        color: "royalblue"
      },
      customdata: chartData.map(item => item.summarize).reverse(),
      hovertemplate: `説明: %{customdata}<br>%: %{x:.2f}% <extra></extra>`
    }],
    layout: {
      title: {
        text: title,
        x: 0.5,
        y: 0.95,
        xanchor: "center"
      },
      xaxis: {
        linecolor: "gray",
        linewidth: 1,
        mirror: false,
        ticksuffix: " %"
      },
      yaxis: {
        linecolor: "gray",
        linewidth: 1,
        mirror: false,
        title: "FI"
      },
      plot_bgcolor: "white",
      paper_bgcolor: "white",
      margin: {
        t: 40,
        b: 35,
        l: 80,
        r: 50
      },
      hoverlabel: {
        align: "left",
        font: {
          size: 11,
          color: "black"
        },
        bgcolor: "lightyellow",
        bordercolor: "gray"
      }
    },
    style: {
      width: "100%",
      height: "100%"
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlotBarChartA);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-bootstrap_esm_Accordion_js-node_modules_react-bootstrap_esm_Button-be1b41"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cHAvLi9zcmMvY29udGVudC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2dvLWFueXdoZXJlLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS1jb21wYW55LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvb2NjdXB5LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS10b3BpYy5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3NpZGViYXIuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy90cmVuZC1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtdG9waXguanN4Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXIuanN4JztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudC5qc3gnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGFycm93Q29sb3IgPSBbXG4gICAgJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRicsXG4gICAgJyMzRTlFNkYnLCAnI0YzODE4MScsICcjNTQ1RTc1JywgJyNGRkI2MjcnLCAnIzU3NzU5MCcsXG4gIF07XG4gIGNvbnN0IGNvbXBhbnlMaXN0ID0gW1xuICAgICfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+5aSn5p6X57WEJywgJ+a4heawtOW7uuioreagquW8j+S8muekvicsICflpKfmiJDlu7roqK3moKrlvI/kvJrnpL4nLFxuICAgICfmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupcnLCAn5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzJywgJ+WJjeeUsOW7uuioreW3pealreagquW8j+S8muekvicsXG4gICAgJ+S6lOa0i+W7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7jg5Xjgrjjgr8nLCAn5oi455Sw5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvueGiuiwt+e1hCcsXG4gIF07XG4gIGNvbnN0IHRvcGljTGlzdCA9IFsnMCcsICcxJywgJzInLCAnMycsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTEnXTtcblxuICBjb25zdCBbdmlzdWFsVHlwZSwgc2V0VmlzdWFsVHlwZV0gPSB1c2VTdGF0ZSgnb25lLXRvcGljJyk7XG4gIGNvbnN0IFtpc0FwcGxpZWQsIHNldElzQXBwbGllZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29tcGFuaWVzLCBzZXRTZWxlY3RlZENvbXBhbmllc10gPSB1c2VTdGF0ZShbJ+agquW8j+S8muekvueGiuiwt+e1hCddKTtcbiAgY29uc3QgW3NlbGVjdGVkVG9waWNzLCBzZXRTZWxlY3RlZFRvcGljc10gPSB1c2VTdGF0ZShbJzAnXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFNwYW4sIHNldFNlbGVjdGVkU3Bhbl0gPSB1c2VTdGF0ZSgnMicpO1xuXG4gIGNvbnN0IGhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRWaXN1YWxUeXBlKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcHBseSA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2VsZWN0aW9uID0gKGl0ZW0sIHNldFNlbGVjdGVkLCBidXR0b210eXBlKSA9PiB7XG4gICAgaWYgKGJ1dHRvbXR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHNldFNlbGVjdGVkKChwcmV2U2VsZWN0ZWQpID0+XG4gICAgICAgIHByZXZTZWxlY3RlZC5pbmNsdWRlcyhpdGVtKVxuICAgICAgICAgID8gcHJldlNlbGVjdGVkLmZpbHRlcigoaSkgPT4gaSAhPT0gaXRlbSlcbiAgICAgICAgICA6IFsuLi5wcmV2U2VsZWN0ZWQsIGl0ZW1dXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZChbaXRlbV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDb21wYW55Q2hlY2tib3hDaGFuZ2UgPSAoY29tcGFueSwgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbihjb21wYW55LCBzZXRTZWxlY3RlZENvbXBhbmllcywgYnV0dG9tdHlwZSk7XG4gIH07XG5cbiAgY29uc3QgVG9waWNDaGVja2JveENoYW5nZSA9ICh0b3BpYywgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbih0b3BpYywgc2V0U2VsZWN0ZWRUb3BpY3MsIGJ1dHRvbXR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNwYW5DaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRTZWxlY3RlZFNwYW4odmFsdWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDb21wYW5pZXMoWyfmoKrlvI/kvJrnpL7nhorosLfntYQnXSk7XG4gICAgc2V0U2VsZWN0ZWRUb3BpY3MoWycwJ10pO1xuICB9LCBbdmlzdWFsVHlwZV0pO1xuXG4gIGNvbnN0IHJlc2V0SXNBcHBsaWVkID0gKCkgPT4ge1xuICAgIHNldElzQXBwbGllZCgwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaWQ9XCJyZWFjdC1jb250ZW50XCIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5cbiAgICAgIDxSb3c+XG4gICAgICAgIHsvKiDjgrXjgqTjg4njg5Djg7wgKi99XG4gICAgICAgIDxDb2wgbWQ9ezN9IGNsYXNzTmFtZT1cImJvcmRlci1lbmRcIj5cbiAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgb25BcHBseT17aGFuZGxlQXBwbHl9XG4gICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgb25WaXN1YWxUeXBlQ2hhbmdlPXtoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICBjb21wYW55TGlzdD17Y29tcGFueUxpc3R9XG4gICAgICAgICAgICBzZWxlY3RlZENvbXBhbmllcz17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICBzZWxlY3RlZFRvcGljcz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICBvbkNoYW5nZVRvcGljPXtUb3BpY0NoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgb25DaGFuZ2VDb21wYW55PXtDb21wYW55Q2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICBzZWxlY3RlZFNwYW49e3NlbGVjdGVkU3Bhbn1cbiAgICAgICAgICAgIG9uU3BhbkNoYW5nZT17aGFuZGxlU3BhbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICB7Lyog44Oh44Kk44Oz44Kz44Oz44OG44Oz44OEICovfVxuICAgICAgICA8Q29sIG1kPXs5fSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICBwbG90PXtpc0FwcGxpZWR9XG4gICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgdG9waWM9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgY29tcGFueT17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICBzcGFuPXtzZWxlY3RlZFNwYW59XG4gICAgICAgICAgICByZXNldEFwcGx5PXtyZXNldElzQXBwbGllZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9ZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgUGxvdFBpZUEgZnJvbSAnLi9vY2N1cHkuanN4JztcbmltcG9ydCBQbG90UGllQiBmcm9tICcuL29jY3VweS1jb21wYW55LmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFDb21wIGZyb20gJy4vcGVyc29uYS1jb21wLmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFUb3BpYyBmcm9tICcuL3BlcnNvbmEtdG9waWMuanN4JztcblxuaW1wb3J0IFBsb3RCYXJDaGFydEEgZnJvbSAnLi90cmVuZC10b3BpeC5qc3gnO1xuaW1wb3J0IFBsb3RCYXJDaGFydEIgZnJvbSAnLi90cmVuZC1jb21wLmpzeCc7XG5pbXBvcnQgeyBnZXRDYXJkRGF0YSB9IGZyb20gXCIuL2dvLWFueXdoZXJlLmpzeFwiOyAvLyDmraPjgZfjgYTjg5HjgrnjgpLmjIflrppcblxuXG5cblxuXG5jb25zdCBDb250ZW50ID0gKHtwbG90LHZpc3VhbFR5cGUsdG9waWMsY29tcGFueSxzcGFuLHJlc2V0QXBwbHl9KSA9PiB7XG5cblxuXG4gICAgY29uc3QgW2NsaWNrRGF0YSwgc2V0Q2xpY2tEYXRhXSA9IHVzZVN0YXRlKCk7IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBrueKtuaFi1xuXG4gICAgY29uc3QgaGFuZGxlUGllQ2hhcnRDbGljayA9IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIuOCr+ODquODg+OCr+OBleOCjOOBn+ODh+ODvOOCvzpcIiwgZGF0YSk7IC8vIOODh+ODkOODg+OCsOeUqFxuICAgICAgc2V0Q2xpY2tEYXRhKGRhdGEpOyAvLyDnirbmhYvjgpLmm7TmlrBcbiAgICB9O1xuXG4gICAgY29uc3QgW2NhcmREYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q2FyZERhdGEocGxvdCwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4pO1xuICAgICAgICBzZXRDYXJkRGF0YShkYXRhKTtcbiAgICAgIH07XG4gICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbcGxvdCwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW5dKTtcbiAgXG4gICAgXG4gIHJldHVybiAoXG4gICAgXG4gICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJiZy1saWdodFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIHsvKiBGaXJzdCBSb3cgKi99XG4gICAgICA8Um93IHN0eWxlPXt7IGhlaWdodDogJzUwdmgnIH19PlxuICAgICAgICB7LyogUGVyc29uYSBHcmFwaCAqL31cbiAgICAgICAgPENvbCBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwJScgfX0+XG5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFUb3BpY1xuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44Oa44Or44K944OK44Gu5Y+v6KaW5YyWXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHZoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwdmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiID8gKFxuICAgICAgICAgICAgPFBsb3RQZXJzb25hQ29tcFxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44Oa44Or44K944OK44Gu5Y+v6KaW5YyWXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MnZoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPC9Db2w+XG4gIDwvUm93PlxuXG4gICAgICB7LyogU2Vjb25kIFJvdyAqL31cbiAgICAgIDxSb3cgc3R5bGU9e3sgaGVpZ2h0OiAnNTB2aCcgfX0+XG4gICAgICAgIDxDb2wgbWQ9ezZ9PlxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGllQVxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfms6jnm67kvIHmpa3jga7mpa3nlYzjgavlr77jgZnjgovljaDmnInnjocnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGllQlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgb25DbGlja0RhdGE9e2hhbmRsZVBpZUNoYXJ0Q2xpY2t9IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBruODj+ODs+ODieODqeODvOOCkua4oeOBmVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+azqOebruS8gealreOBrualreeVjOOBq+WvvuOBmeOCi+WNoOacieeOhycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgICBcbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgbWQ9ezZ9PlxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QVxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgIGRhdGE9e1tdfSAvLyDjg4fjg7zjgr/jgpLov73liqDjgZfjgabjgY/jgaDjgZXjgYRcbiAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICB0aXRsZTogJ0bjgr/jg7zjg6Djga7liIbluIMnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPik6KFxuICAgICAgICAgIDxQbG90QmFyQ2hhcnRCXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBjbGlja2RhdGE9e2NsaWNrRGF0YX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgIGRhdGE9e1tdfSAvLyDjg4fjg7zjgr/jgpLov73liqDjgZfjgabjgY/jgaDjgZXjgYRcbiAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICB0aXRsZTogJ0bjgr/jg7zjg6Djga7liIbluIMnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPil9XG4gICAgICAgICAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImgtMTAwXCI+XG4gICAgICB7Y2FyZERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q29sXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICB4cz17MTJ9IC8vIOWQhOOCq+ODvOODieOCkjHooYzjgavooajnpLrjgIHjg6zjgqTjgqLjgqbjg4jjgavlv5zjgZjjgaboqr/mlbTlj6/og71cbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IGZsZXg6IFwiMSAxIGF1dG9cIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidy03NSBoLTc1XCI+XG4gICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsIHx8IGl0ZW0uZGlyZWN0aW9uLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlcy5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbD5cbiAgICAgICkpfVxuICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcblxuIiwiLy8gYW55d2hlcmVfNS5qc29uIOW9ouW8jzpcbi8vIFt7XCJjb21wYW55XCI6IFwiLi4uXCIsIFwiY29sb3JcIjogXCIuLi5cIiwgXCJub3ZlbHR5X3VwXCI6IFsuLi5dLCBcIm5vdmVsdHlfZG93blwiOiBbLi4uXSwgXCJhZGFwdF91cFwiOiBbLi4uXSwgXCJhZGFwdF9kb3duXCI6IFsuLi5dfV1cbi8vIEZJ44Kz44O844OJ44Gv5paH5a2X5YiX44Gn55u05o6l5qC857SN44GV44KM44Gm44GE44KL77yI44Kk44Oz44OH44OD44Kv44K544Gn44Gv44Gq44GE77yJXG5leHBvcnQgY29uc3QgZ2V0Q2FyZERhdGEgPSBhc3luYyAocGxvdCwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4pID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAodmlzdWFsVHlwZSAhPT0gXCJvbmUtdG9waWNcIikgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgdGFyZ2V0VG9waWMgPSBBcnJheS5pc0FycmF5KHRvcGljKSA/IHRvcGljWzBdIDogdG9waWM7XG4gICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICBjb25zdCB0YXJnZXRDb21wYW55ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnlbMF0gOiAoY29tcGFueSB8fCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiKTtcblxuICAgIGNvbnN0IGRhdGFQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9hcHBfZGF0YS90b3BpYyR7dGFyZ2V0VG9waWN9L3BlcnNvbmE9NS9zcGFuJHtzcGFuSWR9L2FueXdoZXJlXzUuanNvbmA7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCLjg4fjg7zjgr/jga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ9cIik7XG5cbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoanNvbkRhdGEpKSByZXR1cm4gW107XG5cbiAgICAvLyDlr77osaHkvIHmpa3jga7jg4fjg7zjgr/jgpLmjqLjgZnvvIjopovjgaTjgYvjgonjgarjgZHjgozjgbDmnIDliJ3jga7kvIHmpa3jgpLkvb/jgYbvvIlcbiAgICBsZXQgY29tcGFueUVudHJ5ID0ganNvbkRhdGEuZmluZChpdGVtID0+IGl0ZW0uY29tcGFueSA9PT0gdGFyZ2V0Q29tcGFueSk7XG4gICAgaWYgKCFjb21wYW55RW50cnkgJiYganNvbkRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29tcGFueUVudHJ5ID0ganNvbkRhdGFbMF07XG4gICAgfVxuICAgIGlmICghY29tcGFueUVudHJ5KSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gW1xuICAgICAgeyBkaXJlY3Rpb246IFwibm92ZWx0eV91cFwiLCAgIGxhYmVsOiBcIuaWsOimj+aAp+KGkVwiLCB2YWx1ZXM6IGNvbXBhbnlFbnRyeS5ub3ZlbHR5X3VwICAgfHwgW10gfSxcbiAgICAgIHsgZGlyZWN0aW9uOiBcIm5vdmVsdHlfZG93blwiLCBsYWJlbDogXCLmlrDopo/mgKfihpNcIiwgdmFsdWVzOiBjb21wYW55RW50cnkubm92ZWx0eV9kb3duIHx8IFtdIH0sXG4gICAgICB7IGRpcmVjdGlvbjogXCJhZGFwdF91cFwiLCAgICAgbGFiZWw6IFwi6aCG5b+c5oCn4oaRXCIsIHZhbHVlczogY29tcGFueUVudHJ5LmFkYXB0X3VwICAgICB8fCBbXSB9LFxuICAgICAgeyBkaXJlY3Rpb246IFwiYWRhcHRfZG93blwiLCAgIGxhYmVsOiBcIumghuW/nOaAp+KGk1wiLCB2YWx1ZXM6IGNvbXBhbnlFbnRyeS5hZGFwdF9kb3duICAgfHwgW10gfSxcbiAgICBdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgavlpLHmlZfjgZfjgb7jgZfjgZ86XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHAuanN4XCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPEFwcCAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuY29uc3QgY29sb3JtYXAgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjoncmdiKDIyOSwgMTM0LCA2KScsIFwi5Zyw55uk5pS56ImvXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLjg4jjg7Pjg43jg6vmjpjliYpcIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWFjemch+ani+mAoFwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi566h55CG44K344K544OG44OgXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLlu4Pmo4Tnianlh6bnkIZcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbn07XG5cbmNvbnN0IGZldGNoSnNvbiA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vLyB7Y29tcGFuaWVzLCBmaV9jb2RlcywgZGF0YX0g5b2i5byP44Gu44K544OR44O844K544OH44O844K/44GL44KJ6KGM5pa55ZCR44Gu5ZKM44KS6KiI566XXG5jb25zdCBnZXRSb3dTdW1zID0gKG9jY3VweUpzb24pID0+IHtcbiAgY29uc3QgbnVtUm93cyA9IG9jY3VweUpzb24uY29tcGFuaWVzLmxlbmd0aDtcbiAgY29uc3Qgc3VtcyA9IEFycmF5KG51bVJvd3MpLmZpbGwoMCk7XG4gIG9jY3VweUpzb24uZGF0YS5mb3JFYWNoKCh7IHJvdywgdmFsdWUgfSkgPT4ge1xuICAgIHN1bXNbcm93XSArPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBzdW1zO1xufTtcblxuY29uc3QgUGxvdFBpZUIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBvblJlbmRlcmVkLCBvbkNsaWNrRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCLms6jnm67jg4jjg5Tjg4Pjgq/jgavplqLjgZnjgovnibnoqLHjga7kvIHmpa3ljaDmnInnjodcIik7XG4gIGNvbnN0IGFsbFRvcGljID0gWzIsIDMsIDEsIDAsIDksIDYsIDgsIDcsIDExXTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gIGNvbnN0IFRvcGljdG9JZCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOlwiMlwiLFwi5Zyw55uk5pS56ImvXCI6XCIzXCIsXCLjg4jjg7Pjg43jg6vmjpjliYpcIjpcIjFcIixcbiAgICBcIuWFjemch+ani+mAoFwiOlwiMFwiLFwi566h55CG44K344K544OG44OgXCI6XCI5XCIsXCLlu4Pmo4Tnianlh6bnkIZcIjpcIjZcIixcIuW7uuevieODkeODjeODq1wiOlwiOFwiLFxuICAgIFwi56m66Kq/44K344K544OG44OgXCI6XCI3XCIsXCLmjpjliYroo4Xnva5cIjpcIjExXCIsXCLlu7rnr4noqK3oqIhcIjpcIjEwXCIsXCLjg4jjg7Pjg43jg6vmuKzph49cIjpcIjVcIn07XG5cbiAgY29uc3QgZGF0YUNhY2hlID0gdXNlUmVmKHt9KTtcblxuICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgIGNvbnN0IGFsbFRvcGljc0RhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgYWxsVG9waWMubWFwKGFzeW5jICh0YXJnZXRfaWQpID0+IHtcbiAgICAgICAgICBjb25zdCBjYWNoZUtleSA9IGAke3RhcmdldF9pZH0tJHtzcGFuSWR9YDtcbiAgICAgICAgICBpZiAoIWRhdGFDYWNoZS5jdXJyZW50W2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9hcHBfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS9vY2N1cHlfdG9waWNfOS5qc29uYDtcbiAgICAgICAgICAgIGRhdGFDYWNoZS5jdXJyZW50W2NhY2hlS2V5XSA9IGF3YWl0IGZldGNoSnNvbih1cmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG9jY3VweUpzb24gPSBkYXRhQ2FjaGUuY3VycmVudFtjYWNoZUtleV07XG4gICAgICAgICAgaWYgKCFvY2N1cHlKc29uIHx8ICFvY2N1cHlKc29uLmNvbXBhbmllcykgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICBjb25zdCBub3JtYWxpemVTdHJpbmcgPSAoc3RyKSA9PlxuICAgICAgICAgICAgdHlwZW9mIHN0ciA9PT0gXCJzdHJpbmdcIiA/IHN0ci5ub3JtYWxpemUoXCJORkNcIikudHJpbSgpIDogbnVsbDtcblxuICAgICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbmllcyA9IG9jY3VweUpzb24uY29tcGFuaWVzLm1hcChub3JtYWxpemVTdHJpbmcpO1xuICAgICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbnkgPSBub3JtYWxpemVTdHJpbmcoY29tcGFueVswXSk7XG5cbiAgICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBzYW5pdGl6ZWRDb21wYW5pZXMuaW5kZXhPZihzYW5pdGl6ZWRDb21wYW55KTtcbiAgICAgICAgICBpZiAoY29tcGFueUluZGV4ID09PSAtMSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICBjb25zdCByb3dTdW1zID0gZ2V0Um93U3VtcyhvY2N1cHlKc29uKTtcbiAgICAgICAgICByZXR1cm4geyB0b3BpYzogdGFyZ2V0X2lkLCB2YWx1ZTogcm93U3Vtc1tjb21wYW55SW5kZXhdIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBhbGxUb3BpY3NEYXRhLmZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPT0gbnVsbCk7XG4gICAgICBjb25zdCB0b3RhbFZhbHVlID0gZmlsdGVyZWREYXRhLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnZhbHVlLCAwKTtcbiAgICAgIGlmICh0b3RhbFZhbHVlID09PSAwKSB7XG4gICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZERhdGEgPSBmaWx0ZXJlZERhdGFcbiAgICAgICAgLm1hcChpdGVtID0+ICh7IGNhdGVnb3J5OiBpdGVtLnRvcGljLCB2YWx1ZTogaXRlbS52YWx1ZSAvIHRvdGFsVmFsdWUgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgIHNldENoYXJ0RGF0YShub3JtYWxpemVkRGF0YS5zbGljZSgwLCAxMCkpO1xuICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIpIHtcbiAgICAgIGxvYWREYXRhKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCB2aXN1YWxUeXBlLCBzcGFuXSk7XG5cbiAgY29uc3QgaGFuZGxlUGxvdENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnBvaW50cyAmJiBldmVudC5wb2ludHNbMF0pIHtcbiAgICAgIGNvbnN0IGNsaWNrZGF0YSA9IGV2ZW50LnBvaW50c1swXS5sYWJlbDsgLy8g44Kv44Oq44OD44Kv44GV44KM44Gf6YOo5YiG44Gu44Op44OZ44OrXG4gICAgICBjb25zdCBsYWJlbCA9IFRvcGljdG9JZFtjbGlja2RhdGFdXG4gICAgICBjb25zdCB0b3BpY2lkID0gbGFiZWwucmVwbGFjZShcIlRvcGljIFwiLCBcIlwiKTtcbiAgICAgIG9uQ2xpY2tEYXRhKFt0b3BpY2lkXSk7IC8vIOimquOCs+ODs+ODneODvOODjeODs+ODiOOBq+ODqeODmeODq+OCkumAmuefpVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IGNoYXJ0RGF0YS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLm1hcChpdGVtID0+ICBJZHRvVG9waWNbU3RyaW5nKGl0ZW0uY2F0ZWdvcnkpXSksXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiY2xvY2t3aXNlXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgY29sb3JzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBjb2xvcm1hcFtJZHRvVG9waWNbU3RyaW5nKGl0ZW0uY2F0ZWdvcnkpXV0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDcwLCBiOiA1LCBsOiA0MCwgcjogNTAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQbG90Q2xpY2t9IC8vIOOCr+ODquODg+OCr+OCpOODmeODs+ODiOOCkui/veWKoFxuICAgICAgLz5cbiAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGllQjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBpZUEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBzcGFuLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICBjb25zdCBjb2xvcm1hcCA9IHsn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JzoncmdiKDIyOSwgMTM0LCA2KScsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICAgICAgXCLlpKfmiJDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIuagquW8j+S8muekvuerueS4reW3peWLmeW6l1wiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gICAgICBcIuWJjeeUsOW7uuioreW3pealreagquW8j+S8muekvlwiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLkupTmtIvlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuagquW8j+S8muekvuODleOCuOOCv1wiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICAgICAgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDIzNywgMTAwLCA5MCknLCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiOidyZ2IoMTY1LCAxNzAsIDE1MyknfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gMDtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b3BpYyB8fCBcIjBcIjtcbiAgICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgICAgY29uc3QgZGF0YVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvYXBwX2RhdGEvdG9waWMke3RhcmdldElkfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS9vY2N1cHlfbWVhbl8ke3RpbWV9Lmpzb25gO1xuXG4gICAgICAgIC8vIFt7XCJjb21wYW55XCI6IFwiLi4uXCIsIFwidmFsdWVcIjogMC54eHh9LCAuLi5dIOW9ouW8j1xuICAgICAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgZmV0Y2hEYXRhKGRhdGFVcmwpO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmF3RGF0YSkpIHJldHVybjtcblxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gcmF3RGF0YVxuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlICE9PSBudWxsKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApXG4gICAgICAgICAgLm1hcChpdGVtID0+ICh7IGxhYmVsOiBpdGVtLmNvbXBhbnksIHZhbHVlOiBpdGVtLnZhbHVlIH0pKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke0lkdG9Ub3BpY1t0YXJnZXRJZF1944Gr6Zai44GZ44KL54m56Kix44Gu5LyB5qWt5Y2g5pyJ546HYCk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OB44Oj44O844OI44OH44O844K/44Gu5Yem55CG5Lit44Gr44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgc3Bhbiwgb25SZW5kZXJlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHZhbHVlczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgIGNvbG9yczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gY29sb3JtYXBbaXRlbS5sYWJlbF0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDcwLCBiOiA1LCBsOiA0MCwgcjogNTAgfSxcbiAgICAgICAgfX1cbiAgXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGllQTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5cbiBcbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgbG9hZENvbXBhbmllcyA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgdG9MaXN0ID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuXG4gICAgY29uc3QgYWxwaGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgY29uc3QgYmV0YV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMV0pKTtcblxuICAgIHJldHVybiB7IGFscGhhX2xpLCBiZXRhX2xpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGFscGhhX2xpOiBbXSwgYmV0YV9saTogW10gfTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBlcnNvbkNvbXAgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBvblJlbmRlcmVkIH0pID0+IHtcbmNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICAgICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICAgICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIn07XG5cbmNvbnN0IGNvbG9ybWFwID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6J3JnYigyMjksIDEzNCwgNiknLCBcIuWcsOebpOaUueiJr1wiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi44OI44Oz44ON44Or5o6Y5YmKXCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgICAgICAgICBcIuWFjemch+ani+mAoFwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi566h55CG44K344K544OG44OgXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLlu4Pmo4Tnianlh6bnkIZcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgICAgICAgICBcIuW7uuevieODkeODjeODq1wiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLnqbroqr/jgrfjgrnjg4bjg6BcIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuaOmOWJiuijhee9rlwiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICAgICAgICB9O1xuICAgICAgICBcbiAgY29uc3QgYXJyb3dfY29sb3IgPSBbJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRiddO1xuXG4gIGNvbnN0IFtwcmVwYXJlZERhdGEsIHNldFByZXBhcmVkRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZpZ0RhdGEsIHNldEZpZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYW5ub3RhdGlvbnMsIHNldEFubm90YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIuS8gealreOBrueri+OBoeS9jee9rlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByZXBhcmVEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsUHJvbWlzZXMgPSAodG9waWMgfHwgW1wiZGVmYXVsdF90b3BpY1wiXSkubWFwKGFzeW5jICh0YXJnZXRfaWQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9waWNcIix0YXJnZXRfaWQpXG4gICAgICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L3RvcGljPSR7dGFyZ2V0X2lkfS9jb21wYW55YDtcbiAgICAgICAgICBjb25zdCBjb21wYW5pZXMgPSBhd2FpdCBsb2FkQ29tcGFuaWVzKGNvbHVtblBhdGgpO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW5pZXMucmVkdWNlKChhY2MsIHZhbHVlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGFjY1t2YWx1ZV0gPSBpZHg7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIGNvbnN0IG5ld1NlYXJjaExpc3QgPSBBcnJheS5pc0FycmF5KGNvbXBhbnkpID8gY29tcGFueSA6IFtjb21wYW55XTtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJlZFNlYXJjaExpc3QgPSBuZXdTZWFyY2hMaXN0LmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSBpbiBjb21wYW55RGljdCk7XG5cbiAgICAgICAgICBjb25zdCBub2RlX2FscGhhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsdGVyZWRTZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcbiAgICAgICAgICBjb25zdCBub2RlX2JldGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWx0ZXJlZFNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuXG4gICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBqKSA9PiBqICsgNSkubWFwKGFzeW5jIChwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGFuSWQgPSBzcGFuIHx8IFwiMlwiO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L3RvcGljPSR7dGFyZ2V0X2lkfS9zcGFuPSR7c3BhbklkfS90ZXN0X29wdGltaXplXyR7cH1gO1xuICAgICAgICAgICAgY29uc3QgeyBhbHBoYV9saSwgYmV0YV9saSB9ID0gYXdhaXQgdG9MaXN0KHBhcmFtZXRlclBhdGgpO1xuXG4gICAgICAgICAgICBmaWx0ZXJlZFNlYXJjaExpc3QuZm9yRWFjaCgoaywgaikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW5pZXMuaW5kZXhPZihrKTtcbiAgICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwIC0gNV0gPSBhbHBoYV9saVtpZHhdO1xuICAgICAgICAgICAgICBub2RlX2JldGFbal1bcCAtIDVdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgICByZXR1cm4geyBub2RlX2FscGhhLCBub2RlX2JldGEsIGZpbHRlcmVkU2VhcmNoTGlzdCB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpO1xuXG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQWxwaGEgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5ub2RlX2FscGhhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRCZXRhID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQubm9kZV9iZXRhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRTZWFyY2hMaXN0ID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQuZmlsdGVyZWRTZWFyY2hMaXN0KTtcblxuICAgICAgICBzZXRQcmVwYXJlZERhdGEoeyBhbHBoYTogY29tYmluZWRBbHBoYSwgYmV0YTogY29tYmluZWRCZXRhLCBzZWFyY2hMaXN0OiBjb21iaW5lZFNlYXJjaExpc3QgfSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnl944Gu5qWt55WM44Gn44Gu56uL44Gh5L2N572uYCk7IC8vIOWIneacn+OCv+OCpOODiOODq+OCkuioreWumlxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+a6luWCmeS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDliJ3mnJ/jg6zjg7Pjg4Djg6rjg7PjgrDmmYLjgavjgoLjg4fjg7zjgr/jgpLmupblgplcbiAgICBwcmVwYXJlRGF0YSgpO1xuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW5dKTtcblxuICAvLyBwcmVwYXJlZERhdGEg44GM5o+D44Gj44Gf44KJ6Ieq5YuV44Gn5o+P55S7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcmVwYXJlZERhdGEpIHJldHVybjtcblxuICAgIGNvbnN0IHBsb3REYXRhID0gcHJlcGFyZWREYXRhLnNlYXJjaExpc3QubWFwKChrLCBqKSA9PiAoe1xuICAgICAgeDogcHJlcGFyZWREYXRhLmFscGhhW2pdLFxuICAgICAgeTogcHJlcGFyZWREYXRhLmJldGFbal0sXG4gICAgICBtb2RlOiBcImxpbmVzK21hcmtlcnMrdGV4dFwiLFxuICAgICAgdGV4dDogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0sXG4gICAgICB0ZXh0cG9zaXRpb246IFwidG9wIGxlZnRcIixcbiAgICAgIG1hcmtlcjoge1xuICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICBjb2xvcjogY29sb3JtYXBbSWR0b1RvcGljW3RvcGljW2ogJSB0b3BpYy5sZW5ndGhdXV0sXG4gICAgICAgIHNpemU6IDUsXG4gICAgICB9LFxuICAgICAgbmFtZTogSWR0b1RvcGljW3RvcGljW2ogJSB0b3BpYy5sZW5ndGhdXSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBwcmVwYXJlZERhdGEuc2VhcmNoTGlzdC5mbGF0TWFwKChrLCBqKSA9PlxuICAgICAgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgIHg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXVtpICsgMV0sXG4gICAgICAgIHk6IHByZXBhcmVkRGF0YS5iZXRhW2pdW2kgKyAxXSxcbiAgICAgICAgeHJlZjogJ3gnLCB5cmVmOiAneScsXG4gICAgICAgIGF4cmVmOiAneCcsIGF5cmVmOiAneScsXG4gICAgICAgIGF4OiBwcmVwYXJlZERhdGEuYWxwaGFbal1baV0sXG4gICAgICAgIGF5OiBwcmVwYXJlZERhdGEuYmV0YVtqXVtpXSxcbiAgICAgICAgYXJyb3djb2xvcjogY29sb3JtYXBbSWR0b1RvcGljW3RvcGljW2ogJSB0b3BpYy5sZW5ndGhdXV0sXG4gICAgICAgIGFycm93c2l6ZTogMS4yLCBhcnJvd3dpZHRoOiAxLjIsIGFycm93aGVhZDogNSxcbiAgICAgICAgc2hvd2Fycm93OiB0cnVlLFxuICAgICAgfSkpXG4gICAgKTtcblxuICAgIHNldEZpZ0RhdGEocGxvdERhdGEpO1xuICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG4gICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgfSwgW3ByZXBhcmVkRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiAgc3R5bGU9e3sgd2lkdGg6JzEwMHZoJyAsaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17ZmlnRGF0YX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMjAsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgICAgICAgICB4cmVmOiAncGFwZXInLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC4yNSxcbiAgICAgICAgICAgICAgeTogMS4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuS8nee1seeahOOBquWIhumHjuOBq+WPluOCiue1hOOCk+OBp+OBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjc1LFxuICAgICAgICAgICAgICB5OiAxLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuMjUsXG4gICAgICAgICAgICAgIHk6IC0wLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNzUsXG4gICAgICAgICAgICAgIHk6IC0wLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcblxuICAgICAgICAgXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLmlrDopo/mgKdcIixcbiAgICAgICAgICAgIHJhbmdlOiBbLTEsIDFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6Wy0xLCAwLCAxXSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi6aCG5b+c5oCnXCIsXG4gICAgICAgICAgICB0aXRsZV9zdGFuZG9mZjogMjUsXG4gICAgICAgICAgICByYW5nZTogWy0xLCAxXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlstMSwgMCwgMV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDQwLCBsOiA0NSwgcjogNTAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIydmhcIiwgd2lkdGg6IFwiMTAwdmhcIiwgaGVpZ2h0OiBcIjQ1dmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGVyc29uQ29tcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5jb25zdCBjb2xvcm1hcCA9IHsn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JzoncmdiKDIyOSwgMTM0LCA2KScsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWkp+aIkOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDIzNywgMTAwLCA5MCknLCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiOidyZ2IoMTY1LCAxNzAsIDE1MyknfTtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCB0b0xpc3QgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICBjb25zdCBhbHBoYV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMF0pKTtcbiAgICBjb25zdCBiZXRhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVsxXSkpO1xuXG4gICAgcmV0dXJuIHsgYWxwaGFfbGksIGJldGFfbGkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYWxwaGFfbGk6IFtdLCBiZXRhX2xpOiBbXSB9O1xuICB9XG59O1xuXG5jb25zdCBQbG90UGVyc29uVG9waWMgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgYXJyb3dfY29sb3IgPSBbJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRiddO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29tcGFueUxpc3QsIHNldENvbXBhbnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaExpc3QsIHNldFNlYXJjaExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG5cbiAgLy8g5Yid5pyf44OH44O844K/44Gu44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L3RvcGljPSR7dGFyZ2V0X2lkfS9jb21wYW55YDtcblxuICAgICAgbG9hZENvbXBhbmllcyhjb2x1bW5QYXRoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldENvbXBhbnlMaXN0KGRhdGEpO1xuICAgICAgICBzZXRUaXRsZShg5qWt55WM5YaF44Gn44Gu5LyB5qWt44Gu56uL44Gh5L2N572uYCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpY10pO1xuXG4gIC8vIOaknOe0ouWvvuixoeOBruODleOCo+ODq+OCv+ODquODs+OCsFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb21wYW55TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb21wYW55RGljdCA9IGNvbXBhbnlMaXN0LnJlZHVjZSgoYWNjLCB2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgIGFjY1t2YWx1ZV0gPSBpZHg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGNvbnN0IG5ld1NlYXJjaExpc3QgPSBBcnJheS5pc0FycmF5KGNvbXBhbnkpID8gY29tcGFueSA6IFtjb21wYW55XTtcbiAgICAgIHNldFNlYXJjaExpc3QobmV3U2VhcmNoTGlzdC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgaW4gY29tcGFueURpY3QpKTtcbiAgICB9XG4gIH0sIFtjb21wYW55TGlzdCwgY29tcGFueV0pO1xuXG4gIC8vIOODh+ODvOOCv+OBruaPj+eUu++8iHNlYXJjaExpc3Tjg7tzcGFuIOOBjOWkieOCj+OBo+OBn+OCieiHquWLleOBp+WGjeaPj+eUu++8iVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2hMaXN0Lmxlbmd0aCA9PT0gMCB8fCAhdG9waWMpIHJldHVybjtcblxuICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljO1xuICAgIGNvbnN0IG5vZGVfYWxwaGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcbiAgICBjb25zdCBub2RlX2JldGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcblxuICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4gaSArIDUpLm1hcCgocCkgPT4ge1xuICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC90b3BpYz0ke3RhcmdldF9pZH0vc3Bhbj0ke3NwYW5JZH0vdGVzdF9vcHRpbWl6ZV8ke3B9YDtcbiAgICAgIHJldHVybiB0b0xpc3QocGFyYW1ldGVyUGF0aCkudGhlbigoeyBhbHBoYV9saSwgYmV0YV9saSB9KSA9PiB7XG4gICAgICAgIHNlYXJjaExpc3QuZm9yRWFjaCgoaywgaikgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbnlMaXN0LmluZGV4T2Yoayk7XG4gICAgICAgICAgbm9kZV9hbHBoYVtqXVtwIC0gNV0gPSBhbHBoYV9saVtpZHhdO1xuICAgICAgICAgIG5vZGVfYmV0YVtqXVtwIC0gNV0gPSBiZXRhX2xpW2lkeF07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBwbG90RGF0YSA9IHNlYXJjaExpc3QubWFwKChrLCBqKSA9PiAoe1xuICAgICAgICB4OiBub2RlX2FscGhhW2pdLFxuICAgICAgICB5OiBub2RlX2JldGFbal0sXG4gICAgICAgIG1vZGU6IFwibGluZXMrbWFya2Vycyt0ZXh0XCIsXG4gICAgICAgIHRleHQ6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdLFxuICAgICAgICB0ZXh0cG9zaXRpb246IFwidG9wIGxlZnRcIixcbiAgICAgICAgbWFya2VyOiB7IHN5bWJvbDogJ2NpcmNsZScsIGNvbG9yOiBjb2xvcm1hcFtrXSwgc2l6ZTogNSB9LFxuICAgICAgICBuYW1lOiBrLFxuICAgICAgfSkpO1xuXG4gICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBzZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICAgIEFycmF5KDQpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgICAgICAgIHg6IG5vZGVfYWxwaGFbal1baSArIDFdLFxuICAgICAgICAgIHk6IG5vZGVfYmV0YVtqXVtpICsgMV0sXG4gICAgICAgICAgeHJlZjogJ3gnLCB5cmVmOiAneScsXG4gICAgICAgICAgYXg6IG5vZGVfYWxwaGFbal1baV0sIGF5OiBub2RlX2JldGFbal1baV0sXG4gICAgICAgICAgYXhyZWY6ICd4JywgYXlyZWY6ICd5JyxcbiAgICAgICAgICBhcnJvd2NvbG9yOiBjb2xvcm1hcFtrXSxcbiAgICAgICAgICBhcnJvd3NpemU6IDEuMiwgYXJyb3d3aWR0aDogMS4yLCBhcnJvd2hlYWQ6IDUsXG4gICAgICAgICAgc2hvd2Fycm93OiB0cnVlLFxuICAgICAgICB9KSlcbiAgICAgICk7XG5cbiAgICAgIHNldEZpZ0RhdGEocGxvdERhdGEpO1xuICAgICAgc2V0QW5ub3RhdGlvbnMocGxvdEFubm90YXRpb25zKTtcbiAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgfSk7XG4gIH0sIFtzZWFyY2hMaXN0LCBjb21wYW55TGlzdCwgdG9waWMsIHNwYW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgIHN0eWxlPXt7IHdpZHRoOicxMDB2aCcgLGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgeHJlZjogJ3BhcGVyJyxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuMjUsXG4gICAgICAgICAgICAgIHk6IDEuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgorkvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC43NSxcbiAgICAgICAgICAgICAgeTogMS4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuacquefpeOBruWIhumHjuOBq+aKleizh+OBl+OBpuOBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjI1LFxuICAgICAgICAgICAgICB5OiAtMC4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOeLrOiHqui3r+e3muOCkumAsuOBv+S8nee1seeahOOBquWIhumHjuOBq+WPluOCiue1hOOCk+OBp+OBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjc1LFxuICAgICAgICAgICAgICB5OiAtMC4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOeLrOiHqui3r+e3muOCkumAsuOBv+acquefpeOBruWIhumHjuOBq+aKleizh+OBl+OBpuOBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG5cbiAgICAgICAgIFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi5paw6KaP5oCnXCIsXG4gICAgICAgICAgICByYW5nZTogWy0xLCAxXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlstMSwgMCwgMV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6IDI1LFxuICAgICAgICAgICAgcmFuZ2U6IFstMSwgMV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbLTEsIDAsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiA0MCwgbDogNDUsIHI6IDUwIH0sXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgYmdjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgYm9yZGVyd2lkdGg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMnZoXCIsIHdpZHRoOiBcIjEwMHZoXCIsIGhlaWdodDogXCI0NXZoXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBlcnNvblRvcGljO1xuIiwiLy8gU2lkZWJhci5qc3hcbmltcG9ydCBSZWFjdCAseyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENvbCwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgU2lkZWJhciA9ICh7IG9uQXBwbHksIHZpc3VhbFR5cGUsIG9uVmlzdWFsVHlwZUNoYW5nZSwgdG9waWNMaXN0LCBjb21wYW55TGlzdCwgc2VsZWN0ZWRDb21wYW5pZXMsIHNlbGVjdGVkVG9waWNzLCBvbkNoYW5nZVRvcGljLCBvbkNoYW5nZUNvbXBhbnksIHNlbGVjdGVkU3Bhbiwgb25TcGFuQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgW2lucHV0VHlwZSwgc2V0SW5wdXRUeXBlXSA9IHVzZVN0YXRlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSk7XG4gIGNvbnN0IFtjb21wYW55RmlsdGVyLCBzZXRDb21wYW55RmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIG9uVmlzdWFsVHlwZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZT09XCJvbmUtY29tcFwiKXtcbiAgICAgICAgc2V0SW5wdXRUeXBlKFtcImNoZWNrYm94XCIsXCJyYWRpb1wiXSl9XG4gICAgICBlbHNle1xuICAgICAgICBzZXRJbnB1dFR5cGUoW1wicmFkaW9cIixcImNoZWNrYm94XCJdKVxuICAgICAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0VHlwZSk7XG4gIH07XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcbiAgXG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgcGFkZGluZzogJzEwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdiZy1saWdodCcgfX0+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBmb250LWl0YWxpY1wiIHN0eWxlPXt7IGhlaWdodDogJzUlJyB9fT5cbiAgICAgICAgPENvbCBzbT17Nn0+XG4gICAgICAgICAgPGg1IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwJScgfX0gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgIOWPr+imluWMluadoeS7tlxuICAgICAgICAgIDwvaDU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNtPXs0fT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpZD1cImFwcGx5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHl9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNSUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZSByb3VuZGVkLXBpbGwgYmctZGFya1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg5Y+v6KaW5YyWXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIHsvKiDmmYLplpPluYXpgbjmip7jg5zjgr/jg7MgKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IG15LTIgcHgtMlwiPlxuICAgICAgICA8Q29sIHhzPXsxMn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgICAgICAgICAgICDmmYLplpPjgpLpgbjmip5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCI+XG4gICAgICAgICAgICAgIHtbe3ZhbHVlOicxJywgbGFiZWw6JzHlubQnfSwge3ZhbHVlOicyJywgbGFiZWw6JzLlubQnfSwge3ZhbHVlOiczJywgbGFiZWw6JzPlubQnfV0ubWFwKCh7dmFsdWUsIGxhYmVsfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU3BhbkNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNtICR7c2VsZWN0ZWRTcGFuID09PSB2YWx1ZSA/ICdidG4tZGFyaycgOiAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5J31gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JywgcGFkZGluZzogJzJweCAxMHB4JyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgey8qIEFjY29yZGlvbiAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgdGV4dC1kYW5nZXIgXCIgc3R5bGU9e3sgaGVpZ2h0OiAnODAlJyB9fT5cbiAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiIGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICB7LyogVmlzdWFsaXphdGlvbiBUeXBlICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjBcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+5Y+v6KaW5YyW44K/44Kk44OXPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkID0gXCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCJ9IC8vIOODh+ODleOCqeODq+ODiOODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19XG4gICAgICAgICAgICAgICAgICA+MeekvuOBq+azqOebrjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Zpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCJ9IC8vIOODh+ODleOCqeODq+ODiOODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBteC0yXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPjHjg4jjg5Tjg4Pjgq/jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBUb3BpYyBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMVwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Ub3BpYzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAge3RvcGljTGlzdC5tYXAoKHRvcGljKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RvcGljfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dFR5cGVbMF19IFxuICAgICAgICAgICAgICAgICAgICBpZCA9IHt0b3BpY31cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRUb3BpY3MuaW5jbHVkZXModG9waWMpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VUb3BpYyh0b3BpYyxpbnB1dFR5cGVbMF0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9waWNcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0b3BpY30+e0lkdG9Ub3BpY1t0b3BpY119PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cbiAgICAgICAgICB7LyogQ29tcGFueSBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMlwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Db21wYW55PC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLkvIHmpa3lkI3jgafntZ7jgorovrzjgb8uLi5cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55RmlsdGVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tcGFueUZpbHRlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBtYi0yXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEzcHgnIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtjb21wYW55TGlzdFxuICAgICAgICAgICAgICAgIC5maWx0ZXIoY29tcGFueSA9PiBjb21wYW55LmluY2x1ZGVzKGNvbXBhbnlGaWx0ZXIpKVxuICAgICAgICAgICAgICAgIC5tYXAoKGNvbXBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29tcGFueX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aW5wdXRUeXBlWzFdfVxuICAgICAgICAgICAgICAgICAgICBpZD17Y29tcGFueX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDb21wYW5pZXMuaW5jbHVkZXMoY29tcGFueSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUNvbXBhbnkoY29tcGFueSwgaW5wdXRUeXBlWzFdKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nY29tcGFueSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17Y29tcGFueX0+e2NvbXBhbnl9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG4gICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RCYXJDaGFydEIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBjbGlja2RhdGEsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiRknjga7liIbluINcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBjbGlja2RhdGEgfHwgdG9waWNbMF0gfHwgXCIwXCI7XG4gICAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2FwcF9kYXRhL3RvcGljJHt0YXJnZXRJZH0vcGVyc29uYT01L3NwYW4ke3NwYW5JZH0vb2NjdXB5X3RvcGljXzkuanNvbmA7XG4gICAgICAgIGNvbnN0IGZpUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvZmlfc3ViY2xhc3Nfc3BsaXQuanNvbmA7XG5cbiAgICAgICAgY29uc3QgW29jY3VweUpzb24sIGZpTGlzdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKHBhdGgpLFxuICAgICAgICAgIGZldGNoRGF0YShmaVBhdGgpLFxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoIW9jY3VweUpzb24gfHwgIW9jY3VweUpzb24uY29tcGFuaWVzIHx8ICFvY2N1cHlKc29uLmZpX2NvZGVzKSB7XG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3JtYWxpemVTdHJpbmcgPSAoc3RyKSA9PlxuICAgICAgICAgIHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIgPyBzdHIubm9ybWFsaXplKFwiTkZDXCIpLnRyaW0oKSA6IG51bGw7XG5cbiAgICAgICAgY29uc3Qgc2FuaXRpemVkQ29tcGFuaWVzID0gb2NjdXB5SnNvbi5jb21wYW5pZXMubWFwKG5vcm1hbGl6ZVN0cmluZyk7XG4gICAgICAgIGNvbnN0IGNvbXBhbnlJbmRleCA9IHNhbml0aXplZENvbXBhbmllcy5pbmRleE9mKG5vcm1hbGl6ZVN0cmluZyhjb21wYW55WzBdKSk7XG4gICAgICAgIGlmIChjb21wYW55SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBDb21wYW55IFwiJHtjb21wYW55WzBdfVwiIG5vdCBmb3VuZC5gKTtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWvvuixoeS8gealreOBruihjOOBruOBv+aKveWHulxuICAgICAgICBjb25zdCBmaVZhbHVlcyA9IHt9O1xuICAgICAgICBvY2N1cHlKc29uLmRhdGEuZm9yRWFjaCgoeyByb3csIGNvbCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIGlmIChyb3cgPT09IGNvbXBhbnlJbmRleCkge1xuICAgICAgICAgICAgZmlWYWx1ZXNbb2NjdXB5SnNvbi5maV9jb2Rlc1tjb2xdXSA9IHZhbHVlICogMTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKGZpVmFsdWVzKVxuICAgICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHsgY2F0ZWdvcnk6IGtleSwgdmFsdWUsIHN1bW1hcml6ZTogZmlMaXN0W2tleV0gfSkpXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtjb21wYW55WzBdfeOBrkZJ44Gu5YiG5biDYCk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgJiYgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwIHx8IGNsaWNrZGF0YSkpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3BhbiwgSlNPTi5zdHJpbmdpZnkoY2xpY2tkYXRhKSwgdXBkYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgeTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaFwiLFxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sXG4gICAgICAgICAgICBjdXN0b21kYXRhOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnN1bW1hcml6ZSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgaG92ZXJ0ZW1wbGF0ZTogYOiqrOaYjjogJXtjdXN0b21kYXRhfTxicj4lOiAle3g6LjJmfSUgPGV4dHJhPjwvZXh0cmE+YCxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpY2tzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkZJXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiAzNSwgbDogODAsIHI6IDUwIH0sXG4gICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAxMSwgY29sb3I6IFwiYmxhY2tcIiB9LFxuICAgICAgICAgICAgYmdjb2xvcjogXCJsaWdodHllbGxvd1wiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RCYXJDaGFydEI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgUGxvdEJhckNoYXJ0QSA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIHNwYW4sIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiRknjga7liIbluINcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b3BpY1swXTtcbiAgICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvYXBwX2RhdGEvdG9waWMke3RhcmdldElkfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS9vY2N1cHlfdG9waWNfOS5qc29uYDtcbiAgICAgICAgY29uc3QgZmlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9maV9zdWJjbGFzc19zcGxpdC5qc29uYDtcblxuICAgICAgICBjb25zdCBbb2NjdXB5SnNvbiwgZmlMaXN0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEocGF0aCksXG4gICAgICAgICAgZmV0Y2hEYXRhKGZpUGF0aCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICghb2NjdXB5SnNvbiB8fCAhb2NjdXB5SnNvbi5maV9jb2RlcyB8fCAhb2NjdXB5SnNvbi5kYXRhKSByZXR1cm47XG5cbiAgICAgICAgLy8gRknjgrPjg7zjg4nliKXjgavlhajkvIHmpa3jga7lgKTjgpLlkIjnrpdcbiAgICAgICAgY29uc3QgZmlTdW1zID0ge307XG4gICAgICAgIG9jY3VweUpzb24uZGF0YS5mb3JFYWNoKCh7IGNvbCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpQ29kZSA9IG9jY3VweUpzb24uZmlfY29kZXNbY29sXTtcbiAgICAgICAgICBmaVN1bXNbZmlDb2RlXSA9IChmaVN1bXNbZmlDb2RlXSB8fCAwKSArIHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0b3RhbCA9IE9iamVjdC52YWx1ZXMoZmlTdW1zKS5yZWR1Y2UoKHMsIHYpID0+IHMgKyB2LCAwKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKGZpU3VtcykubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgY2F0ZWdvcnk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogdG90YWwgPiAwID8gKHZhbHVlIC8gdG90YWwpICogMTAwIDogMCxcbiAgICAgICAgICBzdW1tYXJpemU6IGZpTGlzdFtrZXldLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGZvcm1hdHRlZERhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGBGSeOBruWIhuW4g2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiAmJiAodXBkYXRlIHx8IGNoYXJ0RGF0YS5sZW5ndGggPT09IDApKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIHNwYW4sIHVwZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgIHg6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgICAgICAgIG1hcmtlcjogeyBjb2xvcjogXCJyb3lhbGJsdWVcIiB9LFxuICAgICAgICAgICAgY3VzdG9tZGF0YTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5zdW1tYXJpemUpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIGhvdmVydGVtcGxhdGU6IGDoqqzmmI46ICV7Y3VzdG9tZGF0YX08YnI+JTogJXt4Oi4yZn0lIDxleHRyYT48L2V4dHJhPmAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aWNrc3VmZml4OiBcIiAlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogXCJGSVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDgwLCByOiA1MCB9LFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMTEsIGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgIGJnY29sb3I6IFwibGlnaHR5ZWxsb3dcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRBO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteV9hcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbXlfYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdC1ib290c3RyYXBfZXNtX0FjY29yZGlvbl9qcy1ub2RlX21vZHVsZXNfcmVhY3QtYm9vdHN0cmFwX2VzbV9CdXR0b24tYmUxYjQxXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIlNpZGViYXIiLCJDb250ZW50IiwiQXBwIiwiYXJyb3dDb2xvciIsImNvbXBhbnlMaXN0IiwidG9waWNMaXN0IiwidmlzdWFsVHlwZSIsInNldFZpc3VhbFR5cGUiLCJpc0FwcGxpZWQiLCJzZXRJc0FwcGxpZWQiLCJzZWxlY3RlZENvbXBhbmllcyIsInNldFNlbGVjdGVkQ29tcGFuaWVzIiwic2VsZWN0ZWRUb3BpY3MiLCJzZXRTZWxlY3RlZFRvcGljcyIsInNlbGVjdGVkU3BhbiIsInNldFNlbGVjdGVkU3BhbiIsImhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUFwcGx5IiwidG9nZ2xlU2VsZWN0aW9uIiwiaXRlbSIsInNldFNlbGVjdGVkIiwiYnV0dG9tdHlwZSIsInByZXZTZWxlY3RlZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaSIsIkNvbXBhbnlDaGVja2JveENoYW5nZSIsImNvbXBhbnkiLCJUb3BpY0NoZWNrYm94Q2hhbmdlIiwidG9waWMiLCJoYW5kbGVTcGFuQ2hhbmdlIiwicmVzZXRJc0FwcGxpZWQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJmbHVpZCIsImNsYXNzTmFtZSIsIm1kIiwib25BcHBseSIsIm9uVmlzdWFsVHlwZUNoYW5nZSIsIm9uQ2hhbmdlVG9waWMiLCJvbkNoYW5nZUNvbXBhbnkiLCJvblNwYW5DaGFuZ2UiLCJzdHlsZSIsImhlaWdodCIsInBsb3QiLCJzcGFuIiwicmVzZXRBcHBseSIsIkNhcmQiLCJQbG90UGllQSIsIlBsb3RQaWVCIiwiUGxvdFBlcnNvbmFDb21wIiwiUGxvdFBlcnNvbmFUb3BpYyIsIlBsb3RCYXJDaGFydEEiLCJQbG90QmFyQ2hhcnRCIiwiZ2V0Q2FyZERhdGEiLCJfcmVmIiwiY2xpY2tEYXRhIiwic2V0Q2xpY2tEYXRhIiwiaGFuZGxlUGllQ2hhcnRDbGljayIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2FyZERhdGEiLCJzZXRDYXJkRGF0YSIsImZldGNoRGF0YSIsIm1hcmdpbkxlZnQiLCJ1cGRhdGUiLCJvblJlbmRlcmVkIiwibGF5b3V0IiwidGl0bGUiLCJ3aWR0aCIsImNvbmZpZyIsInJlc3BvbnNpdmUiLCJvbkNsaWNrRGF0YSIsImNsaWNrZGF0YSIsIm1hcCIsImluZGV4Iiwia2V5IiwieHMiLCJmbGV4IiwiQm9keSIsIlRpdGxlIiwibGFiZWwiLCJkaXJlY3Rpb24iLCJ0b1VwcGVyQ2FzZSIsIlRleHQiLCJ2YWx1ZXMiLCJqb2luIiwidGFyZ2V0VG9waWMiLCJBcnJheSIsImlzQXJyYXkiLCJzcGFuSWQiLCJ0YXJnZXRDb21wYW55IiwiZGF0YVBhdGgiLCJwcm9jZXNzIiwiZW52IiwiUFVCTElDX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbkRhdGEiLCJqc29uIiwiY29tcGFueUVudHJ5IiwiZmluZCIsImxlbmd0aCIsIm5vdmVsdHlfdXAiLCJub3ZlbHR5X2Rvd24iLCJhZGFwdF91cCIsImFkYXB0X2Rvd24iLCJlcnJvciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiU3RyaWN0TW9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VSZWYiLCJQbG90IiwiY29sb3JtYXAiLCJmZXRjaEpzb24iLCJ1cmwiLCJzdGF0dXMiLCJnZXRSb3dTdW1zIiwib2NjdXB5SnNvbiIsIm51bVJvd3MiLCJjb21wYW5pZXMiLCJzdW1zIiwiZmlsbCIsImZvckVhY2giLCJyb3ciLCJfcmVmMiIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsInNldFRpdGxlIiwiYWxsVG9waWMiLCJJZHRvVG9waWMiLCJUb3BpY3RvSWQiLCJkYXRhQ2FjaGUiLCJsb2FkRGF0YSIsImFsbFRvcGljc0RhdGEiLCJQcm9taXNlIiwiYWxsIiwidGFyZ2V0X2lkIiwiY2FjaGVLZXkiLCJjdXJyZW50Iiwibm9ybWFsaXplU3RyaW5nIiwic3RyIiwibm9ybWFsaXplIiwidHJpbSIsInNhbml0aXplZENvbXBhbmllcyIsInNhbml0aXplZENvbXBhbnkiLCJjb21wYW55SW5kZXgiLCJpbmRleE9mIiwicm93U3VtcyIsImZpbHRlcmVkRGF0YSIsInRvdGFsVmFsdWUiLCJyZWR1Y2UiLCJzdW0iLCJub3JtYWxpemVkRGF0YSIsImNhdGVnb3J5Iiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJoYW5kbGVQbG90Q2xpY2siLCJldmVudCIsInBvaW50cyIsInRvcGljaWQiLCJyZXBsYWNlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidHlwZSIsImxhYmVscyIsIlN0cmluZyIsIm1hcmtlciIsImNvbG9ycyIsInNob3dsZWdlbmQiLCJwbG90X2JnY29sb3IiLCJwYXBlcl9iZ2NvbG9yIiwibWFyZ2luIiwidCIsImwiLCJyIiwib25DbGljayIsImxvYWRDaGFydERhdGEiLCJ0aW1lIiwidGFyZ2V0SWQiLCJkYXRhVXJsIiwicmF3RGF0YSIsInNvcnRlZERhdGEiLCJsb2FkQ29tcGFuaWVzIiwidGV4dCIsInNwbGl0IiwibGluZSIsInRvTGlzdCIsImxpbmVzIiwiYWxwaGFfbGkiLCJwYXJzZUZsb2F0IiwiYmV0YV9saSIsIlBsb3RQZXJzb25Db21wIiwiYXJyb3dfY29sb3IiLCJwcmVwYXJlZERhdGEiLCJzZXRQcmVwYXJlZERhdGEiLCJmaWdEYXRhIiwic2V0RmlnRGF0YSIsImFubm90YXRpb25zIiwic2V0QW5ub3RhdGlvbnMiLCJwcmVwYXJlRGF0YSIsImFsbFByb21pc2VzIiwiY29sdW1uUGF0aCIsImNvbXBhbnlEaWN0IiwiYWNjIiwiaWR4IiwibmV3U2VhcmNoTGlzdCIsImZpbHRlcmVkU2VhcmNoTGlzdCIsIm5vZGVfYWxwaGEiLCJmcm9tIiwibm9kZV9iZXRhIiwicHJvbWlzZXMiLCJfIiwiaiIsInAiLCJwYXJhbWV0ZXJQYXRoIiwiayIsInJlc3VsdHMiLCJjb21iaW5lZEFscGhhIiwiZmxhdE1hcCIsInJlc3VsdCIsImNvbWJpbmVkQmV0YSIsImNvbWJpbmVkU2VhcmNoTGlzdCIsImFscGhhIiwiYmV0YSIsInNlYXJjaExpc3QiLCJwbG90RGF0YSIsIngiLCJ5IiwibW9kZSIsInRleHRwb3NpdGlvbiIsInN5bWJvbCIsImNvbG9yIiwic2l6ZSIsIm5hbWUiLCJwbG90QW5ub3RhdGlvbnMiLCJ4cmVmIiwieXJlZiIsImF4cmVmIiwiYXlyZWYiLCJheCIsImF5IiwiYXJyb3djb2xvciIsImFycm93c2l6ZSIsImFycm93d2lkdGgiLCJhcnJvd2hlYWQiLCJzaG93YXJyb3ciLCJmb250IiwieGFuY2hvciIsInlhbmNob3IiLCJ4YXhpcyIsInJhbmdlIiwibGluZWNvbG9yIiwibGluZXdpZHRoIiwiZ3JpZGNvbG9yIiwiZ3JpZHdpZHRoIiwiZ3JpZGRhc2giLCJ0aWNrbW9kZSIsInRpY2t2YWxzIiwidGlja3RleHQiLCJ6ZXJvbGluZSIsInlheGlzIiwidGl0bGVfc3RhbmRvZmYiLCJsZWdlbmQiLCJiZ2NvbG9yIiwiYm9yZGVyY29sb3IiLCJib3JkZXJ3aWR0aCIsIlBsb3RQZXJzb25Ub3BpYyIsInNldENvbXBhbnlMaXN0Iiwic2V0U2VhcmNoTGlzdCIsInRoZW4iLCJBY2NvcmRpb24iLCJCdXR0b24iLCJpbnB1dFR5cGUiLCJzZXRJbnB1dFR5cGUiLCJjb21wYW55RmlsdGVyIiwic2V0Q29tcGFueUZpbHRlciIsImhhbmRsZVJhZGlvQ2hhbmdlIiwidGFyZ2V0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInNtIiwiZm9udFNpemUiLCJ3aGl0ZVNwYWNlIiwicm9sZSIsImRlZmF1bHRBY3RpdmVLZXkiLCJJdGVtIiwiZXZlbnRLZXkiLCJIZWFkZXIiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJodG1sRm9yIiwicGxhY2Vob2xkZXIiLCJlIiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwiZ2V0IiwicGF0aCIsImZpUGF0aCIsImZpTGlzdCIsImZpX2NvZGVzIiwid2FybiIsImZpVmFsdWVzIiwiY29sIiwiT2JqZWN0IiwiZW50cmllcyIsIl9yZWYzIiwic3VtbWFyaXplIiwiSlNPTiIsInN0cmluZ2lmeSIsInJldmVyc2UiLCJvcmllbnRhdGlvbiIsImN1c3RvbWRhdGEiLCJob3ZlcnRlbXBsYXRlIiwibWlycm9yIiwidGlja3N1ZmZpeCIsImhvdmVybGFiZWwiLCJhbGlnbiIsImZpU3VtcyIsImZpQ29kZSIsInRvdGFsIiwicyIsInYiLCJmb3JtYXR0ZWREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==