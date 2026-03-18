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
    topicList: topicList,
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
    topicList,
    resetApply
  } = _ref;
  const [clickData, setClickData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handlePieChartClick = data => {
    setClickData(data);
  };

  // 会社・トピックが変わったらクリック選択をリセット
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setClickData(null);
  }, [company, topic]);
  const [cardData, setCardData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchData = async () => {
      const data = await (0,_go_anywhere_jsx__WEBPACK_IMPORTED_MODULE_7__.getCardData)(plot, visualType, topic, company, span, clickData);
      setCardData(data);
    };
    fetchData();
  }, [plot, visualType, topic, company, span, clickData]);
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
    topicList: topicList,
    onRendered: resetApply,
    onClickData: handlePieChartClick,
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
const getCardData = async (plot, visualType, topic, company, span, clickedTopic) => {
  try {
    if (visualType !== "one-topic" && visualType !== "one-comp") return [];

    // one-comp: クリックされたトピック優先、なければ選択中トピック
    const targetTopic = visualType === "one-comp" ? clickedTopic ? Array.isArray(clickedTopic) ? clickedTopic[0] : clickedTopic : Array.isArray(topic) ? topic[0] : topic : Array.isArray(topic) ? topic[0] : topic;
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
    topicList,
    onRendered,
    onClickData
  } = _ref2;
  const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
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

  // サイドバーのtopicListを使う（未指定時はフォールバック）
  const targetTopics = topicList && topicList.length > 0 ? topicList.map(Number) : [2, 3, 1, 0, 9, 6, 8, 7, 11];
  const loadData = async () => {
    try {
      const spanId = span || "2";
      const allTopicsData = await Promise.all(targetTopics.map(async target_id => {
        const cacheKey = `${target_id}-${spanId}-${company[0]}`;
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
      setChartData(normalizedData);
      if (onRendered) onRendered();
    } catch (error) {
      console.error("データ処理中のエラー:", error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (visualType === "one-comp") {
      loadData();
    }
  }, [update, visualType, span, company, topicList]);
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
      title: `${company[0] || ""} の出願特許 トピック分布`,
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
    if (visualType === "one-comp") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvYXBwLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvY29udGVudC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2dvLWFueXdoZXJlLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS1jb21wYW55LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvb2NjdXB5LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS10b3BpYy5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3NpZGViYXIuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy90cmVuZC1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtdG9waXguanN4Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXIuanN4JztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudC5qc3gnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGFycm93Q29sb3IgPSBbXG4gICAgJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRicsXG4gICAgJyMzRTlFNkYnLCAnI0YzODE4MScsICcjNTQ1RTc1JywgJyNGRkI2MjcnLCAnIzU3NzU5MCcsXG4gIF07XG4gIGNvbnN0IGNvbXBhbnlMaXN0ID0gW1xuICAgICfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+5aSn5p6X57WEJywgJ+a4heawtOW7uuioreagquW8j+S8muekvicsICflpKfmiJDlu7roqK3moKrlvI/kvJrnpL4nLFxuICAgICfmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupcnLCAn5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzJywgJ+WJjeeUsOW7uuioreW3pealreagquW8j+S8muekvicsXG4gICAgJ+S6lOa0i+W7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7jg5Xjgrjjgr8nLCAn5oi455Sw5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvueGiuiwt+e1hCcsXG4gIF07XG4gIGNvbnN0IHRvcGljTGlzdCA9IFsnMCcsICcxJywgJzInLCAnMycsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTEnXTtcblxuICBjb25zdCBbdmlzdWFsVHlwZSwgc2V0VmlzdWFsVHlwZV0gPSB1c2VTdGF0ZSgnb25lLXRvcGljJyk7XG4gIGNvbnN0IFtpc0FwcGxpZWQsIHNldElzQXBwbGllZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29tcGFuaWVzLCBzZXRTZWxlY3RlZENvbXBhbmllc10gPSB1c2VTdGF0ZShbJ+agquW8j+S8muekvueGiuiwt+e1hCddKTtcbiAgY29uc3QgW3NlbGVjdGVkVG9waWNzLCBzZXRTZWxlY3RlZFRvcGljc10gPSB1c2VTdGF0ZShbJzAnXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFNwYW4sIHNldFNlbGVjdGVkU3Bhbl0gPSB1c2VTdGF0ZSgnMicpO1xuXG4gIGNvbnN0IGhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRWaXN1YWxUeXBlKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcHBseSA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2VsZWN0aW9uID0gKGl0ZW0sIHNldFNlbGVjdGVkLCBidXR0b210eXBlKSA9PiB7XG4gICAgaWYgKGJ1dHRvbXR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHNldFNlbGVjdGVkKChwcmV2U2VsZWN0ZWQpID0+XG4gICAgICAgIHByZXZTZWxlY3RlZC5pbmNsdWRlcyhpdGVtKVxuICAgICAgICAgID8gcHJldlNlbGVjdGVkLmZpbHRlcigoaSkgPT4gaSAhPT0gaXRlbSlcbiAgICAgICAgICA6IFsuLi5wcmV2U2VsZWN0ZWQsIGl0ZW1dXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZChbaXRlbV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDb21wYW55Q2hlY2tib3hDaGFuZ2UgPSAoY29tcGFueSwgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbihjb21wYW55LCBzZXRTZWxlY3RlZENvbXBhbmllcywgYnV0dG9tdHlwZSk7XG4gIH07XG5cbiAgY29uc3QgVG9waWNDaGVja2JveENoYW5nZSA9ICh0b3BpYywgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbih0b3BpYywgc2V0U2VsZWN0ZWRUb3BpY3MsIGJ1dHRvbXR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNwYW5DaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRTZWxlY3RlZFNwYW4odmFsdWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDb21wYW5pZXMoWyfmoKrlvI/kvJrnpL7nhorosLfntYQnXSk7XG4gICAgc2V0U2VsZWN0ZWRUb3BpY3MoWycwJ10pO1xuICB9LCBbdmlzdWFsVHlwZV0pO1xuXG4gIGNvbnN0IHJlc2V0SXNBcHBsaWVkID0gKCkgPT4ge1xuICAgIHNldElzQXBwbGllZCgwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaWQ9XCJyZWFjdC1jb250ZW50XCIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5cbiAgICAgIDxSb3c+XG4gICAgICAgIHsvKiDjgrXjgqTjg4njg5Djg7wgKi99XG4gICAgICAgIDxDb2wgbWQ9ezN9IGNsYXNzTmFtZT1cImJvcmRlci1lbmRcIj5cbiAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgb25BcHBseT17aGFuZGxlQXBwbHl9XG4gICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgb25WaXN1YWxUeXBlQ2hhbmdlPXtoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICBjb21wYW55TGlzdD17Y29tcGFueUxpc3R9XG4gICAgICAgICAgICBzZWxlY3RlZENvbXBhbmllcz17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICBzZWxlY3RlZFRvcGljcz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICBvbkNoYW5nZVRvcGljPXtUb3BpY0NoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgb25DaGFuZ2VDb21wYW55PXtDb21wYW55Q2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICBzZWxlY3RlZFNwYW49e3NlbGVjdGVkU3Bhbn1cbiAgICAgICAgICAgIG9uU3BhbkNoYW5nZT17aGFuZGxlU3BhbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICB7Lyog44Oh44Kk44Oz44Kz44Oz44OG44Oz44OEICovfVxuICAgICAgICA8Q29sIG1kPXs5fSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICBwbG90PXtpc0FwcGxpZWR9XG4gICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgdG9waWM9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgY29tcGFueT17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICBzcGFuPXtzZWxlY3RlZFNwYW59XG4gICAgICAgICAgICB0b3BpY0xpc3Q9e3RvcGljTGlzdH1cbiAgICAgICAgICAgIHJlc2V0QXBwbHk9e3Jlc2V0SXNBcHBsaWVkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH1mcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBQbG90UGllQSBmcm9tICcuL29jY3VweS5qc3gnO1xuaW1wb3J0IFBsb3RQaWVCIGZyb20gJy4vb2NjdXB5LWNvbXBhbnkuanN4JztcbmltcG9ydCBQbG90UGVyc29uYUNvbXAgZnJvbSAnLi9wZXJzb25hLWNvbXAuanN4JztcbmltcG9ydCBQbG90UGVyc29uYVRvcGljIGZyb20gJy4vcGVyc29uYS10b3BpYy5qc3gnO1xuXG5pbXBvcnQgUGxvdEJhckNoYXJ0QSBmcm9tICcuL3RyZW5kLXRvcGl4LmpzeCc7XG5pbXBvcnQgUGxvdEJhckNoYXJ0QiBmcm9tICcuL3RyZW5kLWNvbXAuanN4JztcbmltcG9ydCB7IGdldENhcmREYXRhIH0gZnJvbSBcIi4vZ28tYW55d2hlcmUuanN4XCI7IC8vIOato+OBl+OBhOODkeOCueOCkuaMh+WumlxuXG5cblxuXG5cbmNvbnN0IENvbnRlbnQgPSAoe3Bsb3QsdmlzdWFsVHlwZSx0b3BpYyxjb21wYW55LHNwYW4sdG9waWNMaXN0LHJlc2V0QXBwbHl9KSA9PiB7XG5cbiAgICBjb25zdCBbY2xpY2tEYXRhLCBzZXRDbGlja0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBoYW5kbGVQaWVDaGFydENsaWNrID0gKGRhdGEpID0+IHtcbiAgICAgIHNldENsaWNrRGF0YShkYXRhKTtcbiAgICB9O1xuXG4gICAgLy8g5Lya56S+44O744OI44OU44OD44Kv44GM5aSJ44KP44Gj44Gf44KJ44Kv44Oq44OD44Kv6YG45oqe44KS44Oq44K744OD44OIXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldENsaWNrRGF0YShudWxsKTtcbiAgICB9LCBbY29tcGFueSwgdG9waWNdKTtcblxuICAgIGNvbnN0IFtjYXJkRGF0YSwgc2V0Q2FyZERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENhcmREYXRhKHBsb3QsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBjbGlja0RhdGEpO1xuICAgICAgICBzZXRDYXJkRGF0YShkYXRhKTtcbiAgICAgIH07XG4gICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbcGxvdCwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIGNsaWNrRGF0YV0pO1xuICBcbiAgICBcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgey8qIEZpcnN0IFJvdyAqL31cbiAgICAgIDxSb3cgc3R5bGU9e3sgaGVpZ2h0OiAnNTB2aCcgfX0+XG4gICAgICAgIHsvKiBQZXJzb25hIEdyYXBoICovfVxuICAgICAgICA8Q29sIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAlJyB9fT5cblxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYVRvcGljXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzUwdmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiNTB2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFDb21wXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQydmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8L0NvbD5cbiAgPC9Sb3c+XG5cbiAgICAgIHsvKiBTZWNvbmQgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgPENvbCBtZD17Nn0+XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgICAgPFBsb3RQaWVBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+azqOebruS8gealreOBrualreeVjOOBq+WvvuOBmeOCi+WNoOacieeOhycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiID8gKFxuICAgICAgICAgICAgPFBsb3RQaWVCXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICB0b3BpY0xpc3Q9e3RvcGljTGlzdH1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgb25DbGlja0RhdGE9e2hhbmRsZVBpZUNoYXJ0Q2xpY2t9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+6Kmy5b2T44GZ44KL6KGo56S644GM44GC44KK44G+44Gb44KTPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICAgICAgIFxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17Nn0+XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgIDxQbG90QmFyQ2hhcnRBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgZGF0YT17W119IC8vIOODh+ODvOOCv+OCkui/veWKoOOBl+OBpuOBj+OBoOOBleOBhFxuICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgIHRpdGxlOiAnRuOCv+ODvOODoOOBruWIhuW4gycsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KTooXG4gICAgICAgICAgPFBsb3RCYXJDaGFydEJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIHNwYW49e3NwYW59XG4gICAgICAgICAgICAgIGNsaWNrZGF0YT17Y2xpY2tEYXRhfVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgZGF0YT17W119IC8vIOODh+ODvOOCv+OCkui/veWKoOOBl+OBpuOBj+OBoOOBleOBhFxuICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgIHRpdGxlOiAnRuOCv+ODvOODoOOBruWIhuW4gycsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KX1cbiAgICAgICAgICBcbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiaC0xMDBcIj5cbiAgICAgIHtjYXJkRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxDb2xcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIHhzPXsxMn0gLy8g5ZCE44Kr44O844OJ44KSMeihjOOBq+ihqOekuuOAgeODrOOCpOOCouOCpuODiOOBq+W/nOOBmOOBpuiqv+aVtOWPr+iDvVxuICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgICAgICAgc3R5bGU9e3sgZmxleDogXCIxIDEgYXV0b1wiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTc1IGgtNzVcIj5cbiAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+XG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWwgfHwgaXRlbS5kaXJlY3Rpb24udG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICA8Q2FyZC5UZXh0IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+XG4gICAgICAgICAgICAgICAge2l0ZW0udmFsdWVzLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgKSl9XG4gICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG4iLCIvLyBhbnl3aGVyZV81Lmpzb24g5b2i5byPOlxuLy8gW3tcImNvbXBhbnlcIjogXCIuLi5cIiwgXCJjb2xvclwiOiBcIi4uLlwiLCBcIm5vdmVsdHlfdXBcIjogWy4uLl0sIFwibm92ZWx0eV9kb3duXCI6IFsuLi5dLCBcImFkYXB0X3VwXCI6IFsuLi5dLCBcImFkYXB0X2Rvd25cIjogWy4uLl19XVxuLy8gRknjgrPjg7zjg4njga/mloflrZfliJfjgafnm7TmjqXmoLzntI3jgZXjgozjgabjgYTjgovvvIjjgqTjg7Pjg4fjg4Pjgq/jgrnjgafjga/jgarjgYTvvIlcbmV4cG9ydCBjb25zdCBnZXRDYXJkRGF0YSA9IGFzeW5jIChwbG90LCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3BhbiwgY2xpY2tlZFRvcGljKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKHZpc3VhbFR5cGUgIT09IFwib25lLXRvcGljXCIgJiYgdmlzdWFsVHlwZSAhPT0gXCJvbmUtY29tcFwiKSByZXR1cm4gW107XG5cbiAgICAvLyBvbmUtY29tcDog44Kv44Oq44OD44Kv44GV44KM44Gf44OI44OU44OD44Kv5YSq5YWI44CB44Gq44GR44KM44Gw6YG45oqe5Lit44OI44OU44OD44KvXG4gICAgY29uc3QgdGFyZ2V0VG9waWMgPSB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCJcbiAgICAgID8gKGNsaWNrZWRUb3BpYyA/IChBcnJheS5pc0FycmF5KGNsaWNrZWRUb3BpYykgPyBjbGlja2VkVG9waWNbMF0gOiBjbGlja2VkVG9waWMpIDogKEFycmF5LmlzQXJyYXkodG9waWMpID8gdG9waWNbMF0gOiB0b3BpYykpXG4gICAgICA6IChBcnJheS5pc0FycmF5KHRvcGljKSA/IHRvcGljWzBdIDogdG9waWMpO1xuICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgY29uc3QgdGFyZ2V0Q29tcGFueSA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55WzBdIDogKGNvbXBhbnkgfHwgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIik7XG5cbiAgICBjb25zdCBkYXRhUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvYXBwX2RhdGEvdG9waWMke3RhcmdldFRvcGljfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS9hbnl3aGVyZV81Lmpzb25gO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwi44OH44O844K/44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfXCIpO1xuXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGpzb25EYXRhKSkgcmV0dXJuIFtdO1xuXG4gICAgLy8g5a++6LGh5LyB5qWt44Gu44OH44O844K/44KS5o6i44GZ77yI6KaL44Gk44GL44KJ44Gq44GR44KM44Gw5pyA5Yid44Gu5LyB5qWt44KS5L2/44GG77yJXG4gICAgbGV0IGNvbXBhbnlFbnRyeSA9IGpzb25EYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmNvbXBhbnkgPT09IHRhcmdldENvbXBhbnkpO1xuICAgIGlmICghY29tcGFueUVudHJ5ICYmIGpzb25EYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbXBhbnlFbnRyeSA9IGpzb25EYXRhWzBdO1xuICAgIH1cbiAgICBpZiAoIWNvbXBhbnlFbnRyeSkgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHsgZGlyZWN0aW9uOiBcIm5vdmVsdHlfdXBcIiwgICBsYWJlbDogXCLmlrDopo/mgKfihpFcIiwgdmFsdWVzOiBjb21wYW55RW50cnkubm92ZWx0eV91cCAgIHx8IFtdIH0sXG4gICAgICB7IGRpcmVjdGlvbjogXCJub3ZlbHR5X2Rvd25cIiwgbGFiZWw6IFwi5paw6KaP5oCn4oaTXCIsIHZhbHVlczogY29tcGFueUVudHJ5Lm5vdmVsdHlfZG93biB8fCBbXSB9LFxuICAgICAgeyBkaXJlY3Rpb246IFwiYWRhcHRfdXBcIiwgICAgIGxhYmVsOiBcIumghuW/nOaAp+KGkVwiLCB2YWx1ZXM6IGNvbXBhbnlFbnRyeS5hZGFwdF91cCAgICAgfHwgW10gfSxcbiAgICAgIHsgZGlyZWN0aW9uOiBcImFkYXB0X2Rvd25cIiwgICBsYWJlbDogXCLpoIblv5zmgKfihpNcIiwgdmFsdWVzOiBjb21wYW55RW50cnkuYWRhcHRfZG93biAgIHx8IFtdIH0sXG4gICAgXTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Gr5aSx5pWX44GX44G+44GX44GfOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwLmpzeFwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cbmNvbnN0IGNvbG9ybWFwID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6J3JnYigyMjksIDEzNCwgNiknLCBcIuWcsOebpOaUueiJr1wiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi44OI44Oz44ON44Or5o6Y5YmKXCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgXCLlhY3pnIfmp4vpgKBcIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIueuoeeQhuOCt+OCueODhuODoFwiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5buD5qOE54mp5Yem55CGXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gIFwi5bu656+J44OR44ON44OrXCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuepuuiqv+OCt+OCueODhuODoFwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5o6Y5YmK6KOF572uXCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG59O1xuXG5jb25zdCBmZXRjaEpzb24gPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLy8ge2NvbXBhbmllcywgZmlfY29kZXMsIGRhdGF9IOW9ouW8j+OBruOCueODkeODvOOCueODh+ODvOOCv+OBi+OCieihjOaWueWQkeOBruWSjOOCkuioiOeul1xuY29uc3QgZ2V0Um93U3VtcyA9IChvY2N1cHlKc29uKSA9PiB7XG4gIGNvbnN0IG51bVJvd3MgPSBvY2N1cHlKc29uLmNvbXBhbmllcy5sZW5ndGg7XG4gIGNvbnN0IHN1bXMgPSBBcnJheShudW1Sb3dzKS5maWxsKDApO1xuICBvY2N1cHlKc29uLmRhdGEuZm9yRWFjaCgoeyByb3csIHZhbHVlIH0pID0+IHtcbiAgICBzdW1zW3Jvd10gKz0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gc3Vtcztcbn07XG5cbmNvbnN0IFBsb3RQaWVCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3BhbiwgdG9waWNMaXN0LCBvblJlbmRlcmVkLCBvbkNsaWNrRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICBjb25zdCBUb3BpY3RvSWQgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjpcIjJcIixcIuWcsOebpOaUueiJr1wiOlwiM1wiLFwi44OI44Oz44ON44Or5o6Y5YmKXCI6XCIxXCIsXG4gICAgXCLlhY3pnIfmp4vpgKBcIjpcIjBcIixcIueuoeeQhuOCt+OCueODhuODoFwiOlwiOVwiLFwi5buD5qOE54mp5Yem55CGXCI6XCI2XCIsXCLlu7rnr4njg5Hjg43jg6tcIjpcIjhcIixcbiAgICBcIuepuuiqv+OCt+OCueODhuODoFwiOlwiN1wiLFwi5o6Y5YmK6KOF572uXCI6XCIxMVwiLFwi5bu656+J6Kit6KiIXCI6XCIxMFwiLFwi44OI44Oz44ON44Or5ris6YePXCI6XCI1XCJ9O1xuXG4gIGNvbnN0IGRhdGFDYWNoZSA9IHVzZVJlZih7fSk7XG5cbiAgLy8g44K144Kk44OJ44OQ44O844GudG9waWNMaXN044KS5L2/44GG77yI5pyq5oyH5a6a5pmC44Gv44OV44Kp44O844Or44OQ44OD44Kv77yJXG4gIGNvbnN0IHRhcmdldFRvcGljcyA9ICh0b3BpY0xpc3QgJiYgdG9waWNMaXN0Lmxlbmd0aCA+IDApXG4gICAgPyB0b3BpY0xpc3QubWFwKE51bWJlcilcbiAgICA6IFsyLCAzLCAxLCAwLCA5LCA2LCA4LCA3LCAxMV07XG5cbiAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICBjb25zdCBhbGxUb3BpY3NEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHRhcmdldFRvcGljcy5tYXAoYXN5bmMgKHRhcmdldF9pZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gYCR7dGFyZ2V0X2lkfS0ke3NwYW5JZH0tJHtjb21wYW55WzBdfWA7XG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudFtjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvYXBwX2RhdGEvdG9waWMke3RhcmdldF9pZH0vcGVyc29uYT01L3NwYW4ke3NwYW5JZH0vb2NjdXB5X3RvcGljXzkuanNvbmA7XG4gICAgICAgICAgICBkYXRhQ2FjaGUuY3VycmVudFtjYWNoZUtleV0gPSBhd2FpdCBmZXRjaEpzb24odXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBvY2N1cHlKc29uID0gZGF0YUNhY2hlLmN1cnJlbnRbY2FjaGVLZXldO1xuICAgICAgICAgIGlmICghb2NjdXB5SnNvbiB8fCAhb2NjdXB5SnNvbi5jb21wYW5pZXMpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cikgPT5cbiAgICAgICAgICAgIHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIgPyBzdHIubm9ybWFsaXplKFwiTkZDXCIpLnRyaW0oKSA6IG51bGw7XG5cbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW5pZXMgPSBvY2N1cHlKc29uLmNvbXBhbmllcy5tYXAobm9ybWFsaXplU3RyaW5nKTtcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW55ID0gbm9ybWFsaXplU3RyaW5nKGNvbXBhbnlbMF0pO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gc2FuaXRpemVkQ29tcGFuaWVzLmluZGV4T2Yoc2FuaXRpemVkQ29tcGFueSk7XG4gICAgICAgICAgaWYgKGNvbXBhbnlJbmRleCA9PT0gLTEpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgY29uc3Qgcm93U3VtcyA9IGdldFJvd1N1bXMob2NjdXB5SnNvbik7XG4gICAgICAgICAgcmV0dXJuIHsgdG9waWM6IHRhcmdldF9pZCwgdmFsdWU6IHJvd1N1bXNbY29tcGFueUluZGV4XSB9O1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gYWxsVG9waWNzRGF0YS5maWx0ZXIoKGRhdGEpID0+IGRhdGEgIT09IG51bGwpO1xuICAgICAgY29uc3QgdG90YWxWYWx1ZSA9IGZpbHRlcmVkRGF0YS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS52YWx1ZSwgMCk7XG4gICAgICBpZiAodG90YWxWYWx1ZSA9PT0gMCkge1xuICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRhID0gZmlsdGVyZWREYXRhXG4gICAgICAgIC5tYXAoaXRlbSA9PiAoeyBjYXRlZ29yeTogaXRlbS50b3BpYywgdmFsdWU6IGl0ZW0udmFsdWUgLyB0b3RhbFZhbHVlIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xuXG4gICAgICBzZXRDaGFydERhdGEobm9ybWFsaXplZERhdGEpO1xuICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIpIHtcbiAgICAgIGxvYWREYXRhKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCB2aXN1YWxUeXBlLCBzcGFuLCBjb21wYW55LCB0b3BpY0xpc3RdKTtcblxuICBjb25zdCBoYW5kbGVQbG90Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRzICYmIGV2ZW50LnBvaW50c1swXSkge1xuICAgICAgY29uc3QgY2xpY2tkYXRhID0gZXZlbnQucG9pbnRzWzBdLmxhYmVsOyAvLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/pg6jliIbjga7jg6njg5njg6tcbiAgICAgIGNvbnN0IGxhYmVsID0gVG9waWN0b0lkW2NsaWNrZGF0YV1cbiAgICAgIGNvbnN0IHRvcGljaWQgPSBsYWJlbC5yZXBsYWNlKFwiVG9waWMgXCIsIFwiXCIpO1xuICAgICAgb25DbGlja0RhdGEoW3RvcGljaWRdKTsgLy8g6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Op44OZ44Or44KS6YCa55+lXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHZhbHVlczogY2hhcnREYXRhLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gIElkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW0lkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldXSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiBgJHtjb21wYW55WzBdIHx8IFwiXCJ9IOOBruWHuumhmOeJueiosSDjg4jjg5Tjg4Pjgq/liIbluINgLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgICAgb25DbGljaz17aGFuZGxlUGxvdENsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jgqTjg5njg7Pjg4jjgpLov73liqBcbiAgICAgIC8+XG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQaWVBID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgc3Bhbiwgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG5cbiAgY29uc3QgY29sb3JtYXAgPSB7J+m5v+WztuW7uuioreagquW8j+S8muekvic6J3JnYigyMjksIDEzNCwgNiknLCBcIuagquW8j+S8muekvuWkp+ael+e1hFwiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi5riF5rC05bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgICAgIFwi5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupdcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuagquW8j+S8muekvumVt+iwt+W3peOCs+ODvOODneODrOODvOOCt+ODp+ODs1wiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICAgICAgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgICAgIFwi5oi455Sw5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigyMzcsIDEwMCwgOTApJywgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIjoncmdiKDE2NSwgMTcwLCAxNTMpJ307XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDA7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWMgfHwgXCIwXCI7XG4gICAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICAgIGNvbnN0IGRhdGFVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2FwcF9kYXRhL3RvcGljJHt0YXJnZXRJZH0vcGVyc29uYT01L3NwYW4ke3NwYW5JZH0vb2NjdXB5X21lYW5fJHt0aW1lfS5qc29uYDtcblxuICAgICAgICAvLyBbe1wiY29tcGFueVwiOiBcIi4uLlwiLCBcInZhbHVlXCI6IDAueHh4fSwgLi4uXSDlvaLlvI9cbiAgICAgICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGZldGNoRGF0YShkYXRhVXJsKTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJhd0RhdGEpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IHJhd0RhdGFcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS52YWx1ZSAhPT0gbnVsbClcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKVxuICAgICAgICAgIC5tYXAoaXRlbSA9PiAoeyBsYWJlbDogaXRlbS5jb21wYW55LCB2YWx1ZTogaXRlbS52YWx1ZSB9KSk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtJZHRvVG9waWNbdGFyZ2V0SWRdfeOBq+mWouOBmeOCi+eJueioseOBruS8gealreWNoOacieeOh2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODgeODo+ODvOODiOODh+ODvOOCv+OBruWHpueQhuS4reOBq+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIikge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIHNwYW4sIG9uUmVuZGVyZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW2l0ZW0ubGFiZWxdKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gIFxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuXG4gXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Db21wID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3Bhbiwgb25SZW5kZXJlZCB9KSA9PiB7XG5jb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCJ9O1xuXG5jb25zdCBjb2xvcm1hcCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLlnLDnm6TmlLnoia9cIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIuODiOODs+ODjeODq+aOmOWJilwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gICAgICAgICAgXCLlhY3pnIfmp4vpgKBcIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIueuoeeQhuOCt+OCueODhuODoFwiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5buD5qOE54mp5Yem55CGXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gICAgICAgICAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gIGNvbnN0IGFycm93X2NvbG9yID0gWycjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnXTtcblxuICBjb25zdCBbcHJlcGFyZWREYXRhLCBzZXRQcmVwYXJlZERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmaWdEYXRhLCBzZXRGaWdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fubm90YXRpb25zLCBzZXRBbm5vdGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCLkvIHmpa3jga7nq4vjgaHkvY3nva5cIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmVwYXJlRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbFByb21pc2VzID0gKHRvcGljIHx8IFtcImRlZmF1bHRfdG9waWNcIl0pLm1hcChhc3luYyAodGFyZ2V0X2lkKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvcGljXCIsdGFyZ2V0X2lkKVxuICAgICAgICAgIGNvbnN0IGNvbHVtblBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC90b3BpYz0ke3RhcmdldF9pZH0vY29tcGFueWA7XG4gICAgICAgICAgY29uc3QgY29tcGFuaWVzID0gYXdhaXQgbG9hZENvbXBhbmllcyhjb2x1bW5QYXRoKTtcblxuICAgICAgICAgIGNvbnN0IGNvbXBhbnlEaWN0ID0gY29tcGFuaWVzLnJlZHVjZSgoYWNjLCB2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRTZWFyY2hMaXN0ID0gbmV3U2VhcmNoTGlzdC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgaW4gY29tcGFueURpY3QpO1xuXG4gICAgICAgICAgY29uc3Qgbm9kZV9hbHBoYSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbHRlcmVkU2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG4gICAgICAgICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsdGVyZWRTZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcblxuICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaikgPT4gaiArIDUpLm1hcChhc3luYyAocCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC90b3BpYz0ke3RhcmdldF9pZH0vc3Bhbj0ke3NwYW5JZH0vdGVzdF9vcHRpbWl6ZV8ke3B9YDtcbiAgICAgICAgICAgIGNvbnN0IHsgYWxwaGFfbGksIGJldGFfbGkgfSA9IGF3YWl0IHRvTGlzdChwYXJhbWV0ZXJQYXRoKTtcblxuICAgICAgICAgICAgZmlsdGVyZWRTZWFyY2hMaXN0LmZvckVhY2goKGssIGopID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWR4ID0gY29tcGFuaWVzLmluZGV4T2Yoayk7XG4gICAgICAgICAgICAgIG5vZGVfYWxwaGFbal1bcCAtIDVdID0gYWxwaGFfbGlbaWR4XTtcbiAgICAgICAgICAgICAgbm9kZV9iZXRhW2pdW3AgLSA1XSA9IGJldGFfbGlbaWR4XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHsgbm9kZV9hbHBoYSwgbm9kZV9iZXRhLCBmaWx0ZXJlZFNlYXJjaExpc3QgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKGFsbFByb21pc2VzKTtcblxuICAgICAgICBjb25zdCBjb21iaW5lZEFscGhhID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQubm9kZV9hbHBoYSk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQmV0YSA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0Lm5vZGVfYmV0YSk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkU2VhcmNoTGlzdCA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0LmZpbHRlcmVkU2VhcmNoTGlzdCk7XG5cbiAgICAgICAgc2V0UHJlcGFyZWREYXRhKHsgYWxwaGE6IGNvbWJpbmVkQWxwaGEsIGJldGE6IGNvbWJpbmVkQmV0YSwgc2VhcmNoTGlzdDogY29tYmluZWRTZWFyY2hMaXN0IH0pO1xuICAgICAgICBzZXRUaXRsZShgJHtjb21wYW55feOBrualreeVjOOBp+OBrueri+OBoeS9jee9rmApOyAvLyDliJ3mnJ/jgr/jgqTjg4jjg6vjgpLoqK3lrppcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/mupblgpnkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g5Yid5pyf44Os44Oz44OA44Oq44Oz44Kw5pmC44Gr44KC44OH44O844K/44KS5rqW5YKZXG4gICAgcHJlcGFyZURhdGEoKTtcbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuXSk7XG5cbiAgLy8gcHJlcGFyZWREYXRhIOOBjOaPg+OBo+OBn+OCieiHquWLleOBp+aPj+eUu1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcHJlcGFyZWREYXRhKSByZXR1cm47XG5cbiAgICBjb25zdCBwbG90RGF0YSA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4gKHtcbiAgICAgIHg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXSxcbiAgICAgIHk6IHByZXBhcmVkRGF0YS5iZXRhW2pdLFxuICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgIHRleHQ6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdLFxuICAgICAgdGV4dHBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgICBtYXJrZXI6IHtcbiAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgY29sb3I6IGNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY1tqICUgdG9waWMubGVuZ3RoXV1dLFxuICAgICAgICBzaXplOiA1LFxuICAgICAgfSxcbiAgICAgIG5hbWU6IElkdG9Ub3BpY1t0b3BpY1tqICUgdG9waWMubGVuZ3RoXV0sXG4gICAgfSkpO1xuXG4gICAgY29uc3QgcGxvdEFubm90YXRpb25zID0gcHJlcGFyZWREYXRhLnNlYXJjaExpc3QuZmxhdE1hcCgoaywgaikgPT5cbiAgICAgIEFycmF5KDQpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgICAgICB4OiBwcmVwYXJlZERhdGEuYWxwaGFbal1baSArIDFdLFxuICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXVtpICsgMV0sXG4gICAgICAgIHhyZWY6ICd4JywgeXJlZjogJ3knLFxuICAgICAgICBheHJlZjogJ3gnLCBheXJlZjogJ3knLFxuICAgICAgICBheDogcHJlcGFyZWREYXRhLmFscGhhW2pdW2ldLFxuICAgICAgICBheTogcHJlcGFyZWREYXRhLmJldGFbal1baV0sXG4gICAgICAgIGFycm93Y29sb3I6IGNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY1tqICUgdG9waWMubGVuZ3RoXV1dLFxuICAgICAgICBhcnJvd3NpemU6IDEuMiwgYXJyb3d3aWR0aDogMS4yLCBhcnJvd2hlYWQ6IDUsXG4gICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgIH0pKVxuICAgICk7XG5cbiAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICBzZXRBbm5vdGF0aW9ucyhwbG90QW5ub3RhdGlvbnMpO1xuICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gIH0sIFtwcmVwYXJlZERhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgIHN0eWxlPXt7IHdpZHRoOicxMDB2aCcgLGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgeHJlZjogJ3BhcGVyJyxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuMjUsXG4gICAgICAgICAgICAgIHk6IDEuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgorkvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC43NSxcbiAgICAgICAgICAgICAgeTogMS4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuacquefpeOBruWIhumHjuOBq+aKleizh+OBl+OBpuOBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjI1LFxuICAgICAgICAgICAgICB5OiAtMC4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOeLrOiHqui3r+e3muOCkumAsuOBv+S8nee1seeahOOBquWIhumHjuOBq+WPluOCiue1hOOCk+OBp+OBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjc1LFxuICAgICAgICAgICAgICB5OiAtMC4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOeLrOiHqui3r+e3muOCkumAsuOBv+acquefpeOBruWIhumHjuOBq+aKleizh+OBl+OBpuOBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG5cbiAgICAgICAgIFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi5paw6KaP5oCnXCIsXG4gICAgICAgICAgICByYW5nZTogWy0xLCAxXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlstMSwgMCwgMV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6IDI1LFxuICAgICAgICAgICAgcmFuZ2U6IFstMSwgMV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbLTEsIDAsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiA0MCwgbDogNDUsIHI6IDUwIH0sXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgYmdjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgYm9yZGVyd2lkdGg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMnZoXCIsIHdpZHRoOiBcIjEwMHZoXCIsIGhlaWdodDogXCI0NXZoXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBlcnNvbkNvbXA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuY29uc3QgY29sb3JtYXAgPSB7J+m5v+WztuW7uuioreagquW8j+S8muekvic6J3JnYigyMjksIDEzNCwgNiknLCBcIuagquW8j+S8muekvuWkp+ael+e1hFwiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi5riF5rC05bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgXCLlpKfmiJDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIuagquW8j+S8muekvuerueS4reW3peWLmeW6l1wiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gIFwi5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+XCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuS6lOa0i+W7uuioreagquW8j+S8muekvlwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5qCq5byP5Lya56S+44OV44K444K/XCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gIFwi5oi455Sw5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigyMzcsIDEwMCwgOTApJywgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIjoncmdiKDE2NSwgMTcwLCAxNTMpJ307XG5cbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgbG9hZENvbXBhbmllcyA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgdG9MaXN0ID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuXG4gICAgY29uc3QgYWxwaGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgY29uc3QgYmV0YV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMV0pKTtcblxuICAgIHJldHVybiB7IGFscGhhX2xpLCBiZXRhX2xpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGFscGhhX2xpOiBbXSwgYmV0YV9saTogW10gfTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBlcnNvblRvcGljID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3Bhbiwgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IGFycm93X2NvbG9yID0gWycjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnXTtcbiAgY29uc3QgW2ZpZ0RhdGEsIHNldEZpZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYW5ub3RhdGlvbnMsIHNldEFubm90YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NvbXBhbnlMaXN0LCBzZXRDb21wYW55TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hMaXN0LCBzZXRTZWFyY2hMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gIC8vIOWIneacn+ODh+ODvOOCv+OBruODreODvOODiVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiICYmIHRvcGljKSB7XG4gICAgICBjb25zdCB0YXJnZXRfaWQgPSB0b3BpYzsgLy8g44OI44OU44OD44KvSUTjga7oqK3lrppcbiAgICAgIGNvbnN0IGNvbHVtblBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC90b3BpYz0ke3RhcmdldF9pZH0vY29tcGFueWA7XG5cbiAgICAgIGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDb21wYW55TGlzdChkYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYOalreeVjOWGheOBp+OBruS8gealreOBrueri+OBoeS9jee9rmApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWNdKTtcblxuICAvLyDmpJzntKLlr77osaHjga7jg5XjgqPjg6vjgr/jg6rjg7PjgrBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29tcGFueUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW55TGlzdC5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICBzZXRTZWFyY2hMaXN0KG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KSk7XG4gICAgfVxuICB9LCBbY29tcGFueUxpc3QsIGNvbXBhbnldKTtcblxuICAvLyDjg4fjg7zjgr/jga7mj4/nlLvvvIhzZWFyY2hMaXN044O7c3BhbiDjgYzlpInjgo/jgaPjgZ/jgonoh6rli5Xjgaflho3mj4/nlLvvvIlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoTGlzdC5sZW5ndGggPT09IDAgfHwgIXRvcGljKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXJnZXRfaWQgPSB0b3BpYztcbiAgICBjb25zdCBub2RlX2FscGhhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG4gICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICBjb25zdCBwcm9taXNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGkpID0+IGkgKyA1KS5tYXAoKHApID0+IHtcbiAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvdG9waWM9JHt0YXJnZXRfaWR9L3NwYW49JHtzcGFuSWR9L3Rlc3Rfb3B0aW1pemVfJHtwfWA7XG4gICAgICByZXR1cm4gdG9MaXN0KHBhcmFtZXRlclBhdGgpLnRoZW4oKHsgYWxwaGFfbGksIGJldGFfbGkgfSkgPT4ge1xuICAgICAgICBzZWFyY2hMaXN0LmZvckVhY2goKGssIGopID0+IHtcbiAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW55TGlzdC5pbmRleE9mKGspO1xuICAgICAgICAgIG5vZGVfYWxwaGFbal1bcCAtIDVdID0gYWxwaGFfbGlbaWR4XTtcbiAgICAgICAgICBub2RlX2JldGFbal1bcCAtIDVdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgcGxvdERhdGEgPSBzZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4gKHtcbiAgICAgICAgeDogbm9kZV9hbHBoYVtqXSxcbiAgICAgICAgeTogbm9kZV9iZXRhW2pdLFxuICAgICAgICBtb2RlOiBcImxpbmVzK21hcmtlcnMrdGV4dFwiLFxuICAgICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgICAgdGV4dHBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgICAgIG1hcmtlcjogeyBzeW1ib2w6ICdjaXJjbGUnLCBjb2xvcjogY29sb3JtYXBba10sIHNpemU6IDUgfSxcbiAgICAgICAgbmFtZTogayxcbiAgICAgIH0pKTtcblxuICAgICAgY29uc3QgcGxvdEFubm90YXRpb25zID0gc2VhcmNoTGlzdC5mbGF0TWFwKChrLCBqKSA9PlxuICAgICAgICBBcnJheSg0KS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgICB4OiBub2RlX2FscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgICB5OiBub2RlX2JldGFbal1baSArIDFdLFxuICAgICAgICAgIHhyZWY6ICd4JywgeXJlZjogJ3knLFxuICAgICAgICAgIGF4OiBub2RlX2FscGhhW2pdW2ldLCBheTogbm9kZV9iZXRhW2pdW2ldLFxuICAgICAgICAgIGF4cmVmOiAneCcsIGF5cmVmOiAneScsXG4gICAgICAgICAgYXJyb3djb2xvcjogY29sb3JtYXBba10sXG4gICAgICAgICAgYXJyb3dzaXplOiAxLjIsIGFycm93d2lkdGg6IDEuMiwgYXJyb3doZWFkOiA1LFxuICAgICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgICAgfSkpXG4gICAgICApO1xuXG4gICAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG4gICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgIH0pO1xuICB9LCBbc2VhcmNoTGlzdCwgY29tcGFueUxpc3QsIHRvcGljLCBzcGFuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBzdHlsZT17eyB3aWR0aDonMTAwdmgnICxoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHhyZWY6ICdwYXBlcicsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbm5vdGF0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjI1LFxuICAgICAgICAgICAgICB5OiAxLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNzUsXG4gICAgICAgICAgICAgIHk6IDEuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgormnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC4yNSxcbiAgICAgICAgICAgICAgeTogLTAuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/kvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC43NSxcbiAgICAgICAgICAgICAgeTogLTAuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/mnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFstMSwgMV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbLTEsIDAsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLpoIblv5zmgKdcIixcbiAgICAgICAgICAgIHRpdGxlX3N0YW5kb2ZmOiAyNSxcbiAgICAgICAgICAgIHJhbmdlOiBbLTEsIDFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6Wy0xLCAwLCAxXSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogNDAsIGw6IDQ1LCByOiA1MCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGJvcmRlcndpZHRoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Ub3BpYztcbiIsIi8vIFNpZGViYXIuanN4XG5pbXBvcnQgUmVhY3QgLHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY29yZGlvbiwgQnV0dG9uLCBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IFNpZGViYXIgPSAoeyBvbkFwcGx5LCB2aXN1YWxUeXBlLCBvblZpc3VhbFR5cGVDaGFuZ2UsIHRvcGljTGlzdCwgY29tcGFueUxpc3QsIHNlbGVjdGVkQ29tcGFuaWVzLCBzZWxlY3RlZFRvcGljcywgb25DaGFuZ2VUb3BpYywgb25DaGFuZ2VDb21wYW55LCBzZWxlY3RlZFNwYW4sIG9uU3BhbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtpbnB1dFR5cGUsIHNldElucHV0VHlwZV0gPSB1c2VTdGF0ZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pO1xuICBjb25zdCBbY29tcGFueUZpbHRlciwgc2V0Q29tcGFueUZpbHRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBvblZpc3VhbFR5cGVDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWU9PVwib25lLWNvbXBcIil7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJjaGVja2JveFwiLFwicmFkaW9cIl0pfVxuICAgICAgZWxzZXtcbiAgICAgICAgc2V0SW5wdXRUeXBlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSlcbiAgICAgICAgfVxuXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dFR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG4gIFxuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcsIHBhZGRpbmc6ICcxMHB4JywgYmFja2dyb3VuZENvbG9yOiAnYmctbGlnaHQnIH19PlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgdGV4dC1kYW5nZXIgZm9udC1pdGFsaWNcIiBzdHlsZT17eyBoZWlnaHQ6ICc1JScgfX0+XG4gICAgICAgIDxDb2wgc209ezZ9PlxuICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMCUnIH19IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+XG4gICAgICAgICAgICDlj6/oppbljJbmnaHku7ZcbiAgICAgICAgICA8L2g1PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzbT17NH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJhcHBseVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkFwcGx5fVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTUlJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWPr+imluWMllxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICB7Lyog5pmC6ZaT5bmF6YG45oqe44Oc44K/44OzICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCBteS0yIHB4LTJcIj5cbiAgICAgICAgPENvbCB4cz17MTJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIiBzdHlsZT17eyBmb250U2l6ZTogJzEzcHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICAgICAgICAgICAg5pmC6ZaT44KS6YG45oqeXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPlxuICAgICAgICAgICAgICB7W3t2YWx1ZTonMScsIGxhYmVsOicx5bm0J30sIHt2YWx1ZTonMicsIGxhYmVsOicy5bm0J30sIHt2YWx1ZTonMycsIGxhYmVsOicz5bm0J31dLm1hcCgoe3ZhbHVlLCBsYWJlbH0pID0+IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNwYW5DaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zbSAke3NlbGVjdGVkU3BhbiA9PT0gdmFsdWUgPyAnYnRuLWRhcmsnIDogJ2J0bi1vdXRsaW5lLXNlY29uZGFyeSd9YH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcsIHBhZGRpbmc6ICcycHggMTBweCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIHsvKiBBY2NvcmRpb24gKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHRleHQtZGFuZ2VyIFwiIHN0eWxlPXt7IGhlaWdodDogJzgwJScgfX0+XG4gICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgey8qIFZpc3VhbGl6YXRpb24gVHlwZSAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIwXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPuWPr+imluWMluOCv+OCpOODlzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZCA9IFwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBteC0yXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPjHnpL7jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXgtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID4x44OI44OU44OD44Kv44Gr5rOo55uuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cbiAgICAgICAgICB7LyogVG9waWMgU2VsZWN0aW9uICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjFcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+VG9waWM8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIHt0b3BpY0xpc3QubWFwKCh0b3BpYykgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0b3BpY30+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aW5wdXRUeXBlWzBdfSBcbiAgICAgICAgICAgICAgICAgICAgaWQgPSB7dG9waWN9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkVG9waWNzLmluY2x1ZGVzKHRvcGljKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlVG9waWModG9waWMsaW5wdXRUeXBlWzBdKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dG9waWN9PntJZHRvVG9waWNbdG9waWNdfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG4gICAgICAgICAgey8qIENvbXBhbnkgU2VsZWN0aW9uICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjJcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+Q29tcGFueTwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5LyB5qWt5ZCN44Gn57We44KK6L6844G/Li4uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueUZpbHRlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbXBhbnlGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbWItMlwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JyB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7Y29tcGFueUxpc3RcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNvbXBhbnkgPT4gY29tcGFueS5pbmNsdWRlcyhjb21wYW55RmlsdGVyKSlcbiAgICAgICAgICAgICAgICAubWFwKChjb21wYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVsxXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29tcGFuaWVzLmluY2x1ZGVzKGNvbXBhbnkpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VDb21wYW55KGNvbXBhbnksIGlucHV0VHlwZVsxXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnknXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2NvbXBhbnl9Pntjb21wYW55fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90QmFyQ2hhcnRCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3BhbiwgY2xpY2tkYXRhLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gY2xpY2tkYXRhIHx8IHRvcGljWzBdIHx8IFwiMFwiO1xuICAgICAgICBjb25zdCBzcGFuSWQgPSBzcGFuIHx8IFwiMlwiO1xuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9hcHBfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3BlcnNvbmE9NS9zcGFuJHtzcGFuSWR9L29jY3VweV90b3BpY185Lmpzb25gO1xuICAgICAgICBjb25zdCBmaVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2ZpX3N1YmNsYXNzX3NwbGl0Lmpzb25gO1xuXG4gICAgICAgIGNvbnN0IFtvY2N1cHlKc29uLCBmaUxpc3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgICBmZXRjaERhdGEoZmlQYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgaWYgKCFvY2N1cHlKc29uIHx8ICFvY2N1cHlKc29uLmNvbXBhbmllcyB8fCAhb2NjdXB5SnNvbi5maV9jb2Rlcykge1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cikgPT5cbiAgICAgICAgICB0eXBlb2Ygc3RyID09PSBcInN0cmluZ1wiID8gc3RyLm5vcm1hbGl6ZShcIk5GQ1wiKS50cmltKCkgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbmllcyA9IG9jY3VweUpzb24uY29tcGFuaWVzLm1hcChub3JtYWxpemVTdHJpbmcpO1xuICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBzYW5pdGl6ZWRDb21wYW5pZXMuaW5kZXhPZihub3JtYWxpemVTdHJpbmcoY29tcGFueVswXSkpO1xuICAgICAgICBpZiAoY29tcGFueUluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcGFueSBcIiR7Y29tcGFueVswXX1cIiBub3QgZm91bmQuYCk7XG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlr77osaHkvIHmpa3jga7ooYzjga7jgb/mir3lh7pcbiAgICAgICAgY29uc3QgZmlWYWx1ZXMgPSB7fTtcbiAgICAgICAgb2NjdXB5SnNvbi5kYXRhLmZvckVhY2goKHsgcm93LCBjb2wsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICBpZiAocm93ID09PSBjb21wYW55SW5kZXgpIHtcbiAgICAgICAgICAgIGZpVmFsdWVzW29jY3VweUpzb24uZmlfY29kZXNbY29sXV0gPSB2YWx1ZSAqIDEwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBPYmplY3QuZW50cmllcyhmaVZhbHVlcylcbiAgICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7IGNhdGVnb3J5OiBrZXksIHZhbHVlLCBzdW1tYXJpemU6IGZpTGlzdFtrZXldIH0pKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueVswXX3jga5GSeOBruWIhuW4g2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIEpTT04uc3RyaW5naWZ5KGNsaWNrZGF0YSksIHVwZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgIHg6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgICAgICAgIG1hcmtlcjogeyBjb2xvcjogXCJyb3lhbGJsdWVcIiB9LFxuICAgICAgICAgICAgY3VzdG9tZGF0YTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5zdW1tYXJpemUpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIGhvdmVydGVtcGxhdGU6IGDoqqzmmI46ICV7Y3VzdG9tZGF0YX08YnI+JTogJXt4Oi4yZn0lIDxleHRyYT48L2V4dHJhPmAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aWNrc3VmZml4OiBcIiAlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogXCJGSVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDgwLCByOiA1MCB9LFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMTEsIGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgIGJnY29sb3I6IFwibGlnaHR5ZWxsb3dcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RCYXJDaGFydEEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBzcGFuLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWNbMF07XG4gICAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2FwcF9kYXRhL3RvcGljJHt0YXJnZXRJZH0vcGVyc29uYT01L3NwYW4ke3NwYW5JZH0vb2NjdXB5X3RvcGljXzkuanNvbmA7XG4gICAgICAgIGNvbnN0IGZpUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvZmlfc3ViY2xhc3Nfc3BsaXQuanNvbmA7XG5cbiAgICAgICAgY29uc3QgW29jY3VweUpzb24sIGZpTGlzdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKHBhdGgpLFxuICAgICAgICAgIGZldGNoRGF0YShmaVBhdGgpLFxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoIW9jY3VweUpzb24gfHwgIW9jY3VweUpzb24uZmlfY29kZXMgfHwgIW9jY3VweUpzb24uZGF0YSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIEZJ44Kz44O844OJ5Yil44Gr5YWo5LyB5qWt44Gu5YCk44KS5ZCI566XXG4gICAgICAgIGNvbnN0IGZpU3VtcyA9IHt9O1xuICAgICAgICBvY2N1cHlKc29uLmRhdGEuZm9yRWFjaCgoeyBjb2wsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBmaUNvZGUgPSBvY2N1cHlKc29uLmZpX2NvZGVzW2NvbF07XG4gICAgICAgICAgZmlTdW1zW2ZpQ29kZV0gPSAoZmlTdW1zW2ZpQ29kZV0gfHwgMCkgKyB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdG90YWwgPSBPYmplY3QudmFsdWVzKGZpU3VtcykucmVkdWNlKChzLCB2KSA9PiBzICsgdiwgMCk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBPYmplY3QuZW50cmllcyhmaVN1bXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgIGNhdGVnb3J5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IHRvdGFsID4gMCA/ICh2YWx1ZSAvIHRvdGFsKSAqIDEwMCA6IDAsXG4gICAgICAgICAgc3VtbWFyaXplOiBmaUxpc3Rba2V5XSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBmb3JtYXR0ZWREYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgRknjga7liIbluINgKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwKSkge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBzcGFuLCB1cGRhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHsgY29sb3I6IFwicm95YWxibHVlXCIgfSxcbiAgICAgICAgICAgIGN1c3RvbWRhdGE6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3VtbWFyaXplKS5yZXZlcnNlKCksXG4gICAgICAgICAgICBob3ZlcnRlbXBsYXRlOiBg6Kqs5piOOiAle2N1c3RvbWRhdGF9PGJyPiU6ICV7eDouMmZ9JSA8ZXh0cmE+PC9leHRyYT5gLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGlja3N1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDExLCBjb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImxpZ2h0eWVsbG93XCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbXlfYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtYm9vdHN0cmFwX2VzbV9BY2NvcmRpb25fanMtbm9kZV9tb2R1bGVzX3JlYWN0LWJvb3RzdHJhcF9lc21fQnV0dG9uLWJlMWI0MVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJTaWRlYmFyIiwiQ29udGVudCIsIkFwcCIsImFycm93Q29sb3IiLCJjb21wYW55TGlzdCIsInRvcGljTGlzdCIsInZpc3VhbFR5cGUiLCJzZXRWaXN1YWxUeXBlIiwiaXNBcHBsaWVkIiwic2V0SXNBcHBsaWVkIiwic2VsZWN0ZWRDb21wYW5pZXMiLCJzZXRTZWxlY3RlZENvbXBhbmllcyIsInNlbGVjdGVkVG9waWNzIiwic2V0U2VsZWN0ZWRUb3BpY3MiLCJzZWxlY3RlZFNwYW4iLCJzZXRTZWxlY3RlZFNwYW4iLCJoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVBcHBseSIsInRvZ2dsZVNlbGVjdGlvbiIsIml0ZW0iLCJzZXRTZWxlY3RlZCIsImJ1dHRvbXR5cGUiLCJwcmV2U2VsZWN0ZWQiLCJpbmNsdWRlcyIsImZpbHRlciIsImkiLCJDb21wYW55Q2hlY2tib3hDaGFuZ2UiLCJjb21wYW55IiwiVG9waWNDaGVja2JveENoYW5nZSIsInRvcGljIiwiaGFuZGxlU3BhbkNoYW5nZSIsInJlc2V0SXNBcHBsaWVkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZmx1aWQiLCJjbGFzc05hbWUiLCJtZCIsIm9uQXBwbHkiLCJvblZpc3VhbFR5cGVDaGFuZ2UiLCJvbkNoYW5nZVRvcGljIiwib25DaGFuZ2VDb21wYW55Iiwib25TcGFuQ2hhbmdlIiwic3R5bGUiLCJoZWlnaHQiLCJwbG90Iiwic3BhbiIsInJlc2V0QXBwbHkiLCJDYXJkIiwiUGxvdFBpZUEiLCJQbG90UGllQiIsIlBsb3RQZXJzb25hQ29tcCIsIlBsb3RQZXJzb25hVG9waWMiLCJQbG90QmFyQ2hhcnRBIiwiUGxvdEJhckNoYXJ0QiIsImdldENhcmREYXRhIiwiX3JlZiIsImNsaWNrRGF0YSIsInNldENsaWNrRGF0YSIsImhhbmRsZVBpZUNoYXJ0Q2xpY2siLCJkYXRhIiwiY2FyZERhdGEiLCJzZXRDYXJkRGF0YSIsImZldGNoRGF0YSIsIm1hcmdpbkxlZnQiLCJ1cGRhdGUiLCJvblJlbmRlcmVkIiwibGF5b3V0IiwidGl0bGUiLCJ3aWR0aCIsImNvbmZpZyIsInJlc3BvbnNpdmUiLCJvbkNsaWNrRGF0YSIsImNsaWNrZGF0YSIsIm1hcCIsImluZGV4Iiwia2V5IiwieHMiLCJmbGV4IiwiQm9keSIsIlRpdGxlIiwibGFiZWwiLCJkaXJlY3Rpb24iLCJ0b1VwcGVyQ2FzZSIsIlRleHQiLCJ2YWx1ZXMiLCJqb2luIiwiY2xpY2tlZFRvcGljIiwidGFyZ2V0VG9waWMiLCJBcnJheSIsImlzQXJyYXkiLCJzcGFuSWQiLCJ0YXJnZXRDb21wYW55IiwiZGF0YVBhdGgiLCJwcm9jZXNzIiwiZW52IiwiUFVCTElDX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbkRhdGEiLCJqc29uIiwiY29tcGFueUVudHJ5IiwiZmluZCIsImxlbmd0aCIsIm5vdmVsdHlfdXAiLCJub3ZlbHR5X2Rvd24iLCJhZGFwdF91cCIsImFkYXB0X2Rvd24iLCJlcnJvciIsImNvbnNvbGUiLCJSZWFjdERPTSIsInJlbmRlciIsIlN0cmljdE1vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlUmVmIiwiUGxvdCIsImNvbG9ybWFwIiwiZmV0Y2hKc29uIiwidXJsIiwic3RhdHVzIiwiZ2V0Um93U3VtcyIsIm9jY3VweUpzb24iLCJudW1Sb3dzIiwiY29tcGFuaWVzIiwic3VtcyIsImZpbGwiLCJmb3JFYWNoIiwicm93IiwiX3JlZjIiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJJZHRvVG9waWMiLCJUb3BpY3RvSWQiLCJkYXRhQ2FjaGUiLCJ0YXJnZXRUb3BpY3MiLCJOdW1iZXIiLCJsb2FkRGF0YSIsImFsbFRvcGljc0RhdGEiLCJQcm9taXNlIiwiYWxsIiwidGFyZ2V0X2lkIiwiY2FjaGVLZXkiLCJjdXJyZW50Iiwibm9ybWFsaXplU3RyaW5nIiwic3RyIiwibm9ybWFsaXplIiwidHJpbSIsInNhbml0aXplZENvbXBhbmllcyIsInNhbml0aXplZENvbXBhbnkiLCJjb21wYW55SW5kZXgiLCJpbmRleE9mIiwicm93U3VtcyIsImZpbHRlcmVkRGF0YSIsInRvdGFsVmFsdWUiLCJyZWR1Y2UiLCJzdW0iLCJub3JtYWxpemVkRGF0YSIsImNhdGVnb3J5Iiwic29ydCIsImEiLCJiIiwiaGFuZGxlUGxvdENsaWNrIiwiZXZlbnQiLCJwb2ludHMiLCJ0b3BpY2lkIiwicmVwbGFjZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInR5cGUiLCJsYWJlbHMiLCJTdHJpbmciLCJtYXJrZXIiLCJjb2xvcnMiLCJzaG93bGVnZW5kIiwicGxvdF9iZ2NvbG9yIiwicGFwZXJfYmdjb2xvciIsIm1hcmdpbiIsInQiLCJsIiwiciIsIm9uQ2xpY2siLCJzZXRUaXRsZSIsImxvYWRDaGFydERhdGEiLCJ0aW1lIiwidGFyZ2V0SWQiLCJkYXRhVXJsIiwicmF3RGF0YSIsInNvcnRlZERhdGEiLCJzbGljZSIsImxvYWRDb21wYW5pZXMiLCJ0ZXh0Iiwic3BsaXQiLCJsaW5lIiwidG9MaXN0IiwibGluZXMiLCJhbHBoYV9saSIsInBhcnNlRmxvYXQiLCJiZXRhX2xpIiwiUGxvdFBlcnNvbkNvbXAiLCJhcnJvd19jb2xvciIsInByZXBhcmVkRGF0YSIsInNldFByZXBhcmVkRGF0YSIsImZpZ0RhdGEiLCJzZXRGaWdEYXRhIiwiYW5ub3RhdGlvbnMiLCJzZXRBbm5vdGF0aW9ucyIsInByZXBhcmVEYXRhIiwiYWxsUHJvbWlzZXMiLCJsb2ciLCJjb2x1bW5QYXRoIiwiY29tcGFueURpY3QiLCJhY2MiLCJpZHgiLCJuZXdTZWFyY2hMaXN0IiwiZmlsdGVyZWRTZWFyY2hMaXN0Iiwibm9kZV9hbHBoYSIsImZyb20iLCJub2RlX2JldGEiLCJwcm9taXNlcyIsIl8iLCJqIiwicCIsInBhcmFtZXRlclBhdGgiLCJrIiwicmVzdWx0cyIsImNvbWJpbmVkQWxwaGEiLCJmbGF0TWFwIiwicmVzdWx0IiwiY29tYmluZWRCZXRhIiwiY29tYmluZWRTZWFyY2hMaXN0IiwiYWxwaGEiLCJiZXRhIiwic2VhcmNoTGlzdCIsInBsb3REYXRhIiwieCIsInkiLCJtb2RlIiwidGV4dHBvc2l0aW9uIiwic3ltYm9sIiwiY29sb3IiLCJzaXplIiwibmFtZSIsInBsb3RBbm5vdGF0aW9ucyIsInhyZWYiLCJ5cmVmIiwiYXhyZWYiLCJheXJlZiIsImF4IiwiYXkiLCJhcnJvd2NvbG9yIiwiYXJyb3dzaXplIiwiYXJyb3d3aWR0aCIsImFycm93aGVhZCIsInNob3dhcnJvdyIsImZvbnQiLCJ4YW5jaG9yIiwieWFuY2hvciIsInhheGlzIiwicmFuZ2UiLCJsaW5lY29sb3IiLCJsaW5ld2lkdGgiLCJncmlkY29sb3IiLCJncmlkd2lkdGgiLCJncmlkZGFzaCIsInRpY2ttb2RlIiwidGlja3ZhbHMiLCJ0aWNrdGV4dCIsInplcm9saW5lIiwieWF4aXMiLCJ0aXRsZV9zdGFuZG9mZiIsImxlZ2VuZCIsImJnY29sb3IiLCJib3JkZXJjb2xvciIsImJvcmRlcndpZHRoIiwiUGxvdFBlcnNvblRvcGljIiwic2V0Q29tcGFueUxpc3QiLCJzZXRTZWFyY2hMaXN0IiwidGhlbiIsIkFjY29yZGlvbiIsIkJ1dHRvbiIsImlucHV0VHlwZSIsInNldElucHV0VHlwZSIsImNvbXBhbnlGaWx0ZXIiLCJzZXRDb21wYW55RmlsdGVyIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJ0YXJnZXQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwic20iLCJmb250U2l6ZSIsIndoaXRlU3BhY2UiLCJyb2xlIiwiZGVmYXVsdEFjdGl2ZUtleSIsIkl0ZW0iLCJldmVudEtleSIsIkhlYWRlciIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImh0bWxGb3IiLCJwbGFjZWhvbGRlciIsImUiLCJjb250ZW50VHlwZSIsImhlYWRlcnMiLCJnZXQiLCJwYXRoIiwiZmlQYXRoIiwiZmlMaXN0IiwiZmlfY29kZXMiLCJ3YXJuIiwiZmlWYWx1ZXMiLCJjb2wiLCJPYmplY3QiLCJlbnRyaWVzIiwiX3JlZjMiLCJzdW1tYXJpemUiLCJKU09OIiwic3RyaW5naWZ5IiwicmV2ZXJzZSIsIm9yaWVudGF0aW9uIiwiY3VzdG9tZGF0YSIsImhvdmVydGVtcGxhdGUiLCJtaXJyb3IiLCJ0aWNrc3VmZml4IiwiaG92ZXJsYWJlbCIsImFsaWduIiwiZmlTdW1zIiwiZmlDb2RlIiwidG90YWwiLCJzIiwidiIsImZvcm1hdHRlZERhdGEiXSwic291cmNlUm9vdCI6IiJ9