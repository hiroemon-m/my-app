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

// チャート読み込み中オーバーレイ
const LoadingOverlay = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.75)',
    zIndex: 10,
    fontSize: 15,
    color: '#666',
    pointerEvents: 'none'
  }
}, "\u8AAD\u307F\u8FBC\u307F\u4E2D...");
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
  const [isPieLoading, setIsPieLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isBarLoading, setIsBarLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handlePieChartClick = data => {
    setClickData(data);
  };

  // 会社・トピックが変わったらクリック選択をリセット、ローディング開始
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setClickData(null);
    setIsPieLoading(true);
    setIsBarLoading(true);
  }, [company, topic, span, visualType]);

  // Apply ボタン時もローディング
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (plot === 1) {
      setIsPieLoading(true);
      setIsBarLoading(true);
    }
  }, [plot]);

  // クリックでバーチャートのみローディング
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (clickData !== null) setIsBarLoading(true);
  }, [clickData]);
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
    md: 6,
    style: {
      position: 'relative'
    }
  }, isPieLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadingOverlay, null), visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_occupy_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    span: span,
    onRendered: () => {
      setIsPieLoading(false);
      resetApply();
    },
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
    onRendered: () => {
      setIsPieLoading(false);
      resetApply();
    },
    onClickData: handlePieChartClick,
    layout: {
      title: '注目企業の業界に対する占有率',
      width: '100%',
      height: '80%'
    },
    className: "bg-light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u8A72\u5F53\u3059\u308B\u8868\u793A\u304C\u3042\u308A\u307E\u305B\u3093")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    md: 6,
    style: {
      position: 'relative'
    }
  }, isBarLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadingOverlay, null), visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_trend_topix_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    span: span,
    onRendered: () => setIsBarLoading(false),
    layout: {
      title: 'FIの分布',
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
    onRendered: () => setIsBarLoading(false),
    layout: {
      title: 'FIの分布',
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
    if (visualType !== "one-comp") return [];

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
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // 4象限の固定ラベル（軸の意味に合わせた説明）
  // X=新規性（低:伝統的〜高:革新的）、Y=順応性（低:独自路線〜高:業界追随）
  const quadrantLabels = [{
    x: 0.02,
    y: 0.97,
    text: '業界の流れに乗り<br>伝統的技術を磨く',
    xanchor: 'left',
    yanchor: 'top'
  }, {
    x: 0.98,
    y: 0.97,
    text: '業界の流れに乗り<br>革新的技術に挑戦',
    xanchor: 'right',
    yanchor: 'top'
  }, {
    x: 0.02,
    y: 0.03,
    text: '独自路線で<br>伝統的技術に特化',
    xanchor: 'left',
    yanchor: 'bottom'
  }, {
    x: 0.98,
    y: 0.03,
    text: '独自路線で<br>革新的技術に挑戦',
    xanchor: 'right',
    yanchor: 'bottom'
  }].map(_ref2 => {
    let {
      x,
      y,
      text,
      xanchor,
      yanchor
    } = _ref2;
    return {
      xref: 'paper',
      yref: 'paper',
      x,
      y,
      text,
      xanchor,
      yanchor,
      showarrow: false,
      font: {
        size: 8,
        color: 'gray'
      },
      bgcolor: 'rgba(255,255,255,0.6)',
      borderpad: 2
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const prepareData = async () => {
      setIsLoading(true);
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
        setTitle(`${company}の業界での立ち位置`);
      } catch (error) {
        console.error("データ準備中のエラー:", error);
      } finally {
        setIsLoading(false);
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
    // 矢印アノテーション＋4象限ラベルを合わせて設定
    setAnnotations([...plotAnnotations, ...quadrantLabels]);
    if (onRendered) onRendered();
  }, [preparedData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100vh',
      height: '100vh',
      position: 'relative'
    }
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.75)',
      zIndex: 10,
      fontSize: 16,
      color: '#555'
    }
  }, "\u8AAD\u307F\u8FBC\u307F\u4E2D..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // 4象限の固定ラベル（軸の意味に合わせた説明）
  // X=新規性（低:伝統的〜高:革新的）、Y=順応性（低:独自路線〜高:業界追随）
  const quadrantLabels = [{
    x: 0.02,
    y: 0.97,
    text: '業界の流れに乗り<br>伝統的技術を磨く',
    xanchor: 'left',
    yanchor: 'top'
  }, {
    x: 0.98,
    y: 0.97,
    text: '業界の流れに乗り<br>革新的技術に挑戦',
    xanchor: 'right',
    yanchor: 'top'
  }, {
    x: 0.02,
    y: 0.03,
    text: '独自路線で<br>伝統的技術に特化',
    xanchor: 'left',
    yanchor: 'bottom'
  }, {
    x: 0.98,
    y: 0.03,
    text: '独自路線で<br>革新的技術に挑戦',
    xanchor: 'right',
    yanchor: 'bottom'
  }].map(_ref2 => {
    let {
      x,
      y,
      text,
      xanchor,
      yanchor
    } = _ref2;
    return {
      xref: 'paper',
      yref: 'paper',
      x,
      y,
      text,
      xanchor,
      yanchor,
      showarrow: false,
      font: {
        size: 8,
        color: 'gray'
      },
      bgcolor: 'rgba(255,255,255,0.6)',
      borderpad: 2
    };
  });
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
      setIsLoading(true);
      const target_id = topic;
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
      return toList(parameterPath).then(_ref3 => {
        let {
          alpha_li,
          beta_li
        } = _ref3;
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
      // 矢印アノテーション＋4象限ラベルを合わせて設定
      setAnnotations([...plotAnnotations, ...quadrantLabels]);
      setIsLoading(false);
      if (onRendered) onRendered();
    });
  }, [searchList, companyList, topic, span]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100vh',
      height: '100vh',
      position: 'relative'
    }
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.75)',
      zIndex: 10,
      fontSize: 16,
      color: '#555'
    }
  }, "\u8AAD\u307F\u8FBC\u307F\u4E2D..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzdCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvYXBwLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvY29udGVudC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2dvLWFueXdoZXJlLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS1jb21wYW55LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvb2NjdXB5LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS10b3BpYy5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3NpZGViYXIuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy90cmVuZC1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtdG9waXguanN4Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXIuanN4JztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudC5qc3gnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGFycm93Q29sb3IgPSBbXG4gICAgJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRicsXG4gICAgJyMzRTlFNkYnLCAnI0YzODE4MScsICcjNTQ1RTc1JywgJyNGRkI2MjcnLCAnIzU3NzU5MCcsXG4gIF07XG4gIGNvbnN0IGNvbXBhbnlMaXN0ID0gW1xuICAgICfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+5aSn5p6X57WEJywgJ+a4heawtOW7uuioreagquW8j+S8muekvicsICflpKfmiJDlu7roqK3moKrlvI/kvJrnpL4nLFxuICAgICfmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupcnLCAn5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzJywgJ+WJjeeUsOW7uuioreW3pealreagquW8j+S8muekvicsXG4gICAgJ+S6lOa0i+W7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7jg5Xjgrjjgr8nLCAn5oi455Sw5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvueGiuiwt+e1hCcsXG4gIF07XG4gIGNvbnN0IHRvcGljTGlzdCA9IFsnMCcsICcxJywgJzInLCAnMycsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTEnXTtcblxuICBjb25zdCBbdmlzdWFsVHlwZSwgc2V0VmlzdWFsVHlwZV0gPSB1c2VTdGF0ZSgnb25lLXRvcGljJyk7XG4gIGNvbnN0IFtpc0FwcGxpZWQsIHNldElzQXBwbGllZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29tcGFuaWVzLCBzZXRTZWxlY3RlZENvbXBhbmllc10gPSB1c2VTdGF0ZShbJ+agquW8j+S8muekvueGiuiwt+e1hCddKTtcbiAgY29uc3QgW3NlbGVjdGVkVG9waWNzLCBzZXRTZWxlY3RlZFRvcGljc10gPSB1c2VTdGF0ZShbJzAnXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFNwYW4sIHNldFNlbGVjdGVkU3Bhbl0gPSB1c2VTdGF0ZSgnMicpO1xuXG4gIGNvbnN0IGhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRWaXN1YWxUeXBlKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcHBseSA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2VsZWN0aW9uID0gKGl0ZW0sIHNldFNlbGVjdGVkLCBidXR0b210eXBlKSA9PiB7XG4gICAgaWYgKGJ1dHRvbXR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHNldFNlbGVjdGVkKChwcmV2U2VsZWN0ZWQpID0+XG4gICAgICAgIHByZXZTZWxlY3RlZC5pbmNsdWRlcyhpdGVtKVxuICAgICAgICAgID8gcHJldlNlbGVjdGVkLmZpbHRlcigoaSkgPT4gaSAhPT0gaXRlbSlcbiAgICAgICAgICA6IFsuLi5wcmV2U2VsZWN0ZWQsIGl0ZW1dXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZChbaXRlbV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDb21wYW55Q2hlY2tib3hDaGFuZ2UgPSAoY29tcGFueSwgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbihjb21wYW55LCBzZXRTZWxlY3RlZENvbXBhbmllcywgYnV0dG9tdHlwZSk7XG4gIH07XG5cbiAgY29uc3QgVG9waWNDaGVja2JveENoYW5nZSA9ICh0b3BpYywgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbih0b3BpYywgc2V0U2VsZWN0ZWRUb3BpY3MsIGJ1dHRvbXR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNwYW5DaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRTZWxlY3RlZFNwYW4odmFsdWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDb21wYW5pZXMoWyfmoKrlvI/kvJrnpL7nhorosLfntYQnXSk7XG4gICAgc2V0U2VsZWN0ZWRUb3BpY3MoWycwJ10pO1xuICB9LCBbdmlzdWFsVHlwZV0pO1xuXG4gIGNvbnN0IHJlc2V0SXNBcHBsaWVkID0gKCkgPT4ge1xuICAgIHNldElzQXBwbGllZCgwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaWQ9XCJyZWFjdC1jb250ZW50XCIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5cbiAgICAgIDxSb3c+XG4gICAgICAgIHsvKiDjgrXjgqTjg4njg5Djg7wgKi99XG4gICAgICAgIDxDb2wgbWQ9ezN9IGNsYXNzTmFtZT1cImJvcmRlci1lbmRcIj5cbiAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgb25BcHBseT17aGFuZGxlQXBwbHl9XG4gICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgb25WaXN1YWxUeXBlQ2hhbmdlPXtoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICBjb21wYW55TGlzdD17Y29tcGFueUxpc3R9XG4gICAgICAgICAgICBzZWxlY3RlZENvbXBhbmllcz17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICBzZWxlY3RlZFRvcGljcz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICBvbkNoYW5nZVRvcGljPXtUb3BpY0NoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgb25DaGFuZ2VDb21wYW55PXtDb21wYW55Q2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICBzZWxlY3RlZFNwYW49e3NlbGVjdGVkU3Bhbn1cbiAgICAgICAgICAgIG9uU3BhbkNoYW5nZT17aGFuZGxlU3BhbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICB7Lyog44Oh44Kk44Oz44Kz44Oz44OG44Oz44OEICovfVxuICAgICAgICA8Q29sIG1kPXs5fSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICBwbG90PXtpc0FwcGxpZWR9XG4gICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgdG9waWM9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgY29tcGFueT17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICBzcGFuPXtzZWxlY3RlZFNwYW59XG4gICAgICAgICAgICB0b3BpY0xpc3Q9e3RvcGljTGlzdH1cbiAgICAgICAgICAgIHJlc2V0QXBwbHk9e3Jlc2V0SXNBcHBsaWVkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH1mcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBQbG90UGllQSBmcm9tICcuL29jY3VweS5qc3gnO1xuaW1wb3J0IFBsb3RQaWVCIGZyb20gJy4vb2NjdXB5LWNvbXBhbnkuanN4JztcbmltcG9ydCBQbG90UGVyc29uYUNvbXAgZnJvbSAnLi9wZXJzb25hLWNvbXAuanN4JztcbmltcG9ydCBQbG90UGVyc29uYVRvcGljIGZyb20gJy4vcGVyc29uYS10b3BpYy5qc3gnO1xuXG5pbXBvcnQgUGxvdEJhckNoYXJ0QSBmcm9tICcuL3RyZW5kLXRvcGl4LmpzeCc7XG5pbXBvcnQgUGxvdEJhckNoYXJ0QiBmcm9tICcuL3RyZW5kLWNvbXAuanN4JztcbmltcG9ydCB7IGdldENhcmREYXRhIH0gZnJvbSBcIi4vZ28tYW55d2hlcmUuanN4XCI7IC8vIOato+OBl+OBhOODkeOCueOCkuaMh+WumlxuXG5cblxuXG5cbi8vIOODgeODo+ODvOODiOiqreOBv+i+vOOBv+S4reOCquODvOODkOODvOODrOOCpFxuY29uc3QgTG9hZGluZ092ZXJsYXkgPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3tcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgaW5zZXQ6IDAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNzUpJywgekluZGV4OiAxMCwgZm9udFNpemU6IDE1LCBjb2xvcjogJyM2NjYnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgfX0+XG4gICAg6Kqt44G/6L6844G/5LitLi4uXG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ29udGVudCA9ICh7cGxvdCx2aXN1YWxUeXBlLHRvcGljLGNvbXBhbnksc3Bhbix0b3BpY0xpc3QscmVzZXRBcHBseX0pID0+IHtcblxuICAgIGNvbnN0IFtjbGlja0RhdGEsIHNldENsaWNrRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaXNQaWVMb2FkaW5nLCAgc2V0SXNQaWVMb2FkaW5nXSAgPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzQmFyTG9hZGluZywgIHNldElzQmFyTG9hZGluZ10gID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlUGllQ2hhcnRDbGljayA9IChkYXRhKSA9PiB7XG4gICAgICBzZXRDbGlja0RhdGEoZGF0YSk7XG4gICAgfTtcblxuICAgIC8vIOS8muekvuODu+ODiOODlOODg+OCr+OBjOWkieOCj+OBo+OBn+OCieOCr+ODquODg+OCr+mBuOaKnuOCkuODquOCu+ODg+ODiOOAgeODreODvOODh+OCo+ODs+OCsOmWi+Wni1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRDbGlja0RhdGEobnVsbCk7XG4gICAgICBzZXRJc1BpZUxvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRJc0JhckxvYWRpbmcodHJ1ZSk7XG4gICAgfSwgW2NvbXBhbnksIHRvcGljLCBzcGFuLCB2aXN1YWxUeXBlXSk7XG5cbiAgICAvLyBBcHBseSDjg5zjgr/jg7PmmYLjgoLjg63jg7zjg4fjgqPjg7PjgrBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHBsb3QgPT09IDEpIHtcbiAgICAgICAgc2V0SXNQaWVMb2FkaW5nKHRydWUpO1xuICAgICAgICBzZXRJc0JhckxvYWRpbmcodHJ1ZSk7XG4gICAgICB9XG4gICAgfSwgW3Bsb3RdKTtcblxuICAgIC8vIOOCr+ODquODg+OCr+OBp+ODkOODvOODgeODo+ODvOODiOOBruOBv+ODreODvOODh+OCo+ODs+OCsFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoY2xpY2tEYXRhICE9PSBudWxsKSBzZXRJc0JhckxvYWRpbmcodHJ1ZSk7XG4gICAgfSwgW2NsaWNrRGF0YV0pO1xuXG4gICAgY29uc3QgW2NhcmREYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q2FyZERhdGEocGxvdCwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIGNsaWNrRGF0YSk7XG4gICAgICAgIHNldENhcmREYXRhKGRhdGEpO1xuICAgICAgfTtcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtwbG90LCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3BhbiwgY2xpY2tEYXRhXSk7XG4gIFxuICAgIFxuICByZXR1cm4gKFxuICAgIFxuICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICB7LyogRmlyc3QgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgey8qIFBlcnNvbmEgR3JhcGggKi99XG4gICAgICAgIDxDb2wgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMCUnIH19PlxuXG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgICAgPFBsb3RQZXJzb25hVG9waWNcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIHNwYW49e3NwYW59XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODmuODq+OCveODiuOBruWPr+imluWMllwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTB2aCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MHZoXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYUNvbXBcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIHNwYW49e3NwYW59XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODmuODq+OCveODiuOBruWPr+imluWMllwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDJ2aCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+6Kmy5b2T44GZ44KL6KGo56S644GM44GC44KK44G+44Gb44KTPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIDwvQ29sPlxuICA8L1Jvdz5cblxuICAgICAgey8qIFNlY29uZCBSb3cgKi99XG4gICAgICA8Um93IHN0eWxlPXt7IGhlaWdodDogJzUwdmgnIH19PlxuICAgICAgICA8Q29sIG1kPXs2fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICB7aXNQaWVMb2FkaW5nICYmIDxMb2FkaW5nT3ZlcmxheSAvPn1cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUFcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIHNwYW49e3NwYW59XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9eygpID0+IHsgc2V0SXNQaWVMb2FkaW5nKGZhbHNlKTsgcmVzZXRBcHBseSgpOyB9fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3sgdGl0bGU6ICfms6jnm67kvIHmpa3jga7mpa3nlYzjgavlr77jgZnjgovljaDmnInnjocnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc4MCUnIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGllQlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9eygpID0+IHsgc2V0SXNQaWVMb2FkaW5nKGZhbHNlKTsgcmVzZXRBcHBseSgpOyB9fVxuICAgICAgICAgICAgICBvbkNsaWNrRGF0YT17aGFuZGxlUGllQ2hhcnRDbGlja31cbiAgICAgICAgICAgICAgbGF5b3V0PXt7IHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnODAlJyB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17Nn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAge2lzQmFyTG9hZGluZyAmJiA8TG9hZGluZ092ZXJsYXkgLz59XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgIDxQbG90QmFyQ2hhcnRBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXsoKSA9PiBzZXRJc0JhckxvYWRpbmcoZmFsc2UpfVxuICAgICAgICAgICAgbGF5b3V0PXt7IHRpdGxlOiAnRknjga7liIbluIMnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc4MCUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pOihcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgICAgICAgY2xpY2tkYXRhPXtjbGlja0RhdGF9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9eygpID0+IHNldElzQmFyTG9hZGluZyhmYWxzZSl9XG4gICAgICAgICAgICBsYXlvdXQ9e3sgdGl0bGU6ICdGSeOBruWIhuW4gycsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzgwJScgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPil9XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImgtMTAwXCI+XG4gICAgICB7Y2FyZERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q29sXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICB4cz17MTJ9IC8vIOWQhOOCq+ODvOODieOCkjHooYzjgavooajnpLrjgIHjg6zjgqTjgqLjgqbjg4jjgavlv5zjgZjjgaboqr/mlbTlj6/og71cbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IGZsZXg6IFwiMSAxIGF1dG9cIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidy03NSBoLTc1XCI+XG4gICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsIHx8IGl0ZW0uZGlyZWN0aW9uLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlcy5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbD5cbiAgICAgICkpfVxuICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcblxuIiwiLy8gYW55d2hlcmVfNS5qc29uIOW9ouW8jzpcbi8vIFt7XCJjb21wYW55XCI6IFwiLi4uXCIsIFwiY29sb3JcIjogXCIuLi5cIiwgXCJub3ZlbHR5X3VwXCI6IFsuLi5dLCBcIm5vdmVsdHlfZG93blwiOiBbLi4uXSwgXCJhZGFwdF91cFwiOiBbLi4uXSwgXCJhZGFwdF9kb3duXCI6IFsuLi5dfV1cbi8vIEZJ44Kz44O844OJ44Gv5paH5a2X5YiX44Gn55u05o6l5qC857SN44GV44KM44Gm44GE44KL77yI44Kk44Oz44OH44OD44Kv44K544Gn44Gv44Gq44GE77yJXG5leHBvcnQgY29uc3QgZ2V0Q2FyZERhdGEgPSBhc3luYyAocGxvdCwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIGNsaWNrZWRUb3BpYykgPT4ge1xuICB0cnkge1xuICAgIGlmICh2aXN1YWxUeXBlICE9PSBcIm9uZS1jb21wXCIpIHJldHVybiBbXTtcblxuICAgIC8vIG9uZS1jb21wOiDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/jg4jjg5Tjg4Pjgq/lhKrlhYjjgIHjgarjgZHjgozjgbDpgbjmip7kuK3jg4jjg5Tjg4Pjgq9cbiAgICBjb25zdCB0YXJnZXRUb3BpYyA9IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIlxuICAgICAgPyAoY2xpY2tlZFRvcGljID8gKEFycmF5LmlzQXJyYXkoY2xpY2tlZFRvcGljKSA/IGNsaWNrZWRUb3BpY1swXSA6IGNsaWNrZWRUb3BpYykgOiAoQXJyYXkuaXNBcnJheSh0b3BpYykgPyB0b3BpY1swXSA6IHRvcGljKSlcbiAgICAgIDogKEFycmF5LmlzQXJyYXkodG9waWMpID8gdG9waWNbMF0gOiB0b3BpYyk7XG4gICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICBjb25zdCB0YXJnZXRDb21wYW55ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnlbMF0gOiAoY29tcGFueSB8fCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiKTtcblxuICAgIGNvbnN0IGRhdGFQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9hcHBfZGF0YS90b3BpYyR7dGFyZ2V0VG9waWN9L3BlcnNvbmE9NS9zcGFuJHtzcGFuSWR9L2FueXdoZXJlXzUuanNvbmA7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCLjg4fjg7zjgr/jga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ9cIik7XG5cbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoanNvbkRhdGEpKSByZXR1cm4gW107XG5cbiAgICAvLyDlr77osaHkvIHmpa3jga7jg4fjg7zjgr/jgpLmjqLjgZnvvIjopovjgaTjgYvjgonjgarjgZHjgozjgbDmnIDliJ3jga7kvIHmpa3jgpLkvb/jgYbvvIlcbiAgICBsZXQgY29tcGFueUVudHJ5ID0ganNvbkRhdGEuZmluZChpdGVtID0+IGl0ZW0uY29tcGFueSA9PT0gdGFyZ2V0Q29tcGFueSk7XG4gICAgaWYgKCFjb21wYW55RW50cnkgJiYganNvbkRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29tcGFueUVudHJ5ID0ganNvbkRhdGFbMF07XG4gICAgfVxuICAgIGlmICghY29tcGFueUVudHJ5KSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gW1xuICAgICAgeyBkaXJlY3Rpb246IFwibm92ZWx0eV91cFwiLCAgIGxhYmVsOiBcIuaWsOimj+aAp+KGkVwiLCB2YWx1ZXM6IGNvbXBhbnlFbnRyeS5ub3ZlbHR5X3VwICAgfHwgW10gfSxcbiAgICAgIHsgZGlyZWN0aW9uOiBcIm5vdmVsdHlfZG93blwiLCBsYWJlbDogXCLmlrDopo/mgKfihpNcIiwgdmFsdWVzOiBjb21wYW55RW50cnkubm92ZWx0eV9kb3duIHx8IFtdIH0sXG4gICAgICB7IGRpcmVjdGlvbjogXCJhZGFwdF91cFwiLCAgICAgbGFiZWw6IFwi6aCG5b+c5oCn4oaRXCIsIHZhbHVlczogY29tcGFueUVudHJ5LmFkYXB0X3VwICAgICB8fCBbXSB9LFxuICAgICAgeyBkaXJlY3Rpb246IFwiYWRhcHRfZG93blwiLCAgIGxhYmVsOiBcIumghuW/nOaAp+KGk1wiLCB2YWx1ZXM6IGNvbXBhbnlFbnRyeS5hZGFwdF9kb3duICAgfHwgW10gfSxcbiAgICBdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgavlpLHmlZfjgZfjgb7jgZfjgZ86XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHAuanN4XCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPEFwcCAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuY29uc3QgY29sb3JtYXAgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjoncmdiKDIyOSwgMTM0LCA2KScsIFwi5Zyw55uk5pS56ImvXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLjg4jjg7Pjg43jg6vmjpjliYpcIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWFjemch+ani+mAoFwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi566h55CG44K344K544OG44OgXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLlu4Pmo4Tnianlh6bnkIZcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbn07XG5cbmNvbnN0IGZldGNoSnNvbiA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vLyB7Y29tcGFuaWVzLCBmaV9jb2RlcywgZGF0YX0g5b2i5byP44Gu44K544OR44O844K544OH44O844K/44GL44KJ6KGM5pa55ZCR44Gu5ZKM44KS6KiI566XXG5jb25zdCBnZXRSb3dTdW1zID0gKG9jY3VweUpzb24pID0+IHtcbiAgY29uc3QgbnVtUm93cyA9IG9jY3VweUpzb24uY29tcGFuaWVzLmxlbmd0aDtcbiAgY29uc3Qgc3VtcyA9IEFycmF5KG51bVJvd3MpLmZpbGwoMCk7XG4gIG9jY3VweUpzb24uZGF0YS5mb3JFYWNoKCh7IHJvdywgdmFsdWUgfSkgPT4ge1xuICAgIHN1bXNbcm93XSArPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBzdW1zO1xufTtcblxuY29uc3QgUGxvdFBpZUIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCB0b3BpY0xpc3QsIG9uUmVuZGVyZWQsIG9uQ2xpY2tEYXRhIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gIGNvbnN0IFRvcGljdG9JZCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOlwiMlwiLFwi5Zyw55uk5pS56ImvXCI6XCIzXCIsXCLjg4jjg7Pjg43jg6vmjpjliYpcIjpcIjFcIixcbiAgICBcIuWFjemch+ani+mAoFwiOlwiMFwiLFwi566h55CG44K344K544OG44OgXCI6XCI5XCIsXCLlu4Pmo4Tnianlh6bnkIZcIjpcIjZcIixcIuW7uuevieODkeODjeODq1wiOlwiOFwiLFxuICAgIFwi56m66Kq/44K344K544OG44OgXCI6XCI3XCIsXCLmjpjliYroo4Xnva5cIjpcIjExXCIsXCLlu7rnr4noqK3oqIhcIjpcIjEwXCIsXCLjg4jjg7Pjg43jg6vmuKzph49cIjpcIjVcIn07XG5cbiAgY29uc3QgZGF0YUNhY2hlID0gdXNlUmVmKHt9KTtcblxuICAvLyDjgrXjgqTjg4njg5Djg7zjga50b3BpY0xpc3TjgpLkvb/jgYbvvIjmnKrmjIflrprmmYLjga/jg5Xjgqnjg7zjg6vjg5Djg4Pjgq/vvIlcbiAgY29uc3QgdGFyZ2V0VG9waWNzID0gKHRvcGljTGlzdCAmJiB0b3BpY0xpc3QubGVuZ3RoID4gMClcbiAgICA/IHRvcGljTGlzdC5tYXAoTnVtYmVyKVxuICAgIDogWzIsIDMsIDEsIDAsIDksIDYsIDgsIDcsIDExXTtcblxuICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgIGNvbnN0IGFsbFRvcGljc0RhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgdGFyZ2V0VG9waWNzLm1hcChhc3luYyAodGFyZ2V0X2lkKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBgJHt0YXJnZXRfaWR9LSR7c3BhbklkfS0ke2NvbXBhbnlbMF19YDtcbiAgICAgICAgICBpZiAoIWRhdGFDYWNoZS5jdXJyZW50W2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9hcHBfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS9vY2N1cHlfdG9waWNfOS5qc29uYDtcbiAgICAgICAgICAgIGRhdGFDYWNoZS5jdXJyZW50W2NhY2hlS2V5XSA9IGF3YWl0IGZldGNoSnNvbih1cmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG9jY3VweUpzb24gPSBkYXRhQ2FjaGUuY3VycmVudFtjYWNoZUtleV07XG4gICAgICAgICAgaWYgKCFvY2N1cHlKc29uIHx8ICFvY2N1cHlKc29uLmNvbXBhbmllcykgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICBjb25zdCBub3JtYWxpemVTdHJpbmcgPSAoc3RyKSA9PlxuICAgICAgICAgICAgdHlwZW9mIHN0ciA9PT0gXCJzdHJpbmdcIiA/IHN0ci5ub3JtYWxpemUoXCJORkNcIikudHJpbSgpIDogbnVsbDtcblxuICAgICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbmllcyA9IG9jY3VweUpzb24uY29tcGFuaWVzLm1hcChub3JtYWxpemVTdHJpbmcpO1xuICAgICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbnkgPSBub3JtYWxpemVTdHJpbmcoY29tcGFueVswXSk7XG5cbiAgICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBzYW5pdGl6ZWRDb21wYW5pZXMuaW5kZXhPZihzYW5pdGl6ZWRDb21wYW55KTtcbiAgICAgICAgICBpZiAoY29tcGFueUluZGV4ID09PSAtMSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICBjb25zdCByb3dTdW1zID0gZ2V0Um93U3VtcyhvY2N1cHlKc29uKTtcbiAgICAgICAgICByZXR1cm4geyB0b3BpYzogdGFyZ2V0X2lkLCB2YWx1ZTogcm93U3Vtc1tjb21wYW55SW5kZXhdIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBhbGxUb3BpY3NEYXRhLmZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPT0gbnVsbCk7XG4gICAgICBjb25zdCB0b3RhbFZhbHVlID0gZmlsdGVyZWREYXRhLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnZhbHVlLCAwKTtcbiAgICAgIGlmICh0b3RhbFZhbHVlID09PSAwKSB7XG4gICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZERhdGEgPSBmaWx0ZXJlZERhdGFcbiAgICAgICAgLm1hcChpdGVtID0+ICh7IGNhdGVnb3J5OiBpdGVtLnRvcGljLCB2YWx1ZTogaXRlbS52YWx1ZSAvIHRvdGFsVmFsdWUgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgIHNldENoYXJ0RGF0YShub3JtYWxpemVkRGF0YSk7XG4gICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIikge1xuICAgICAgbG9hZERhdGEoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHZpc3VhbFR5cGUsIHNwYW4sIGNvbXBhbnksIHRvcGljTGlzdF0pO1xuXG4gIGNvbnN0IGhhbmRsZVBsb3RDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5wb2ludHMgJiYgZXZlbnQucG9pbnRzWzBdKSB7XG4gICAgICBjb25zdCBjbGlja2RhdGEgPSBldmVudC5wb2ludHNbMF0ubGFiZWw7IC8vIOOCr+ODquODg+OCr+OBleOCjOOBn+mDqOWIhuOBruODqeODmeODq1xuICAgICAgY29uc3QgbGFiZWwgPSBUb3BpY3RvSWRbY2xpY2tkYXRhXVxuICAgICAgY29uc3QgdG9waWNpZCA9IGxhYmVsLnJlcGxhY2UoXCJUb3BpYyBcIiwgXCJcIik7XG4gICAgICBvbkNsaWNrRGF0YShbdG9waWNpZF0pOyAvLyDopqrjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavjg6njg5njg6vjgpLpgJrnn6VcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoaXRlbSA9PiAgSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV0pLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgIGNvbG9yczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gY29sb3JtYXBbSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV1dKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IGAke2NvbXBhbnlbMF0gfHwgXCJcIn0g44Gu5Ye66aGY54m56KixIOODiOODlOODg+OCr+WIhuW4g2AsXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDcwLCBiOiA1LCBsOiA0MCwgcjogNTAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQbG90Q2xpY2t9IC8vIOOCr+ODquODg+OCr+OCpOODmeODs+ODiOOCkui/veWKoFxuICAgICAgLz5cbiAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGllQjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBpZUEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBzcGFuLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICBjb25zdCBjb2xvcm1hcCA9IHsn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JzoncmdiKDIyOSwgMTM0LCA2KScsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICAgICAgXCLlpKfmiJDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIuagquW8j+S8muekvuerueS4reW3peWLmeW6l1wiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gICAgICBcIuWJjeeUsOW7uuioreW3pealreagquW8j+S8muekvlwiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLkupTmtIvlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuagquW8j+S8muekvuODleOCuOOCv1wiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICAgICAgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDIzNywgMTAwLCA5MCknLCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiOidyZ2IoMTY1LCAxNzAsIDE1MyknfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gMDtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b3BpYyB8fCBcIjBcIjtcbiAgICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgICAgY29uc3QgZGF0YVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvYXBwX2RhdGEvdG9waWMke3RhcmdldElkfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS9vY2N1cHlfbWVhbl8ke3RpbWV9Lmpzb25gO1xuXG4gICAgICAgIC8vIFt7XCJjb21wYW55XCI6IFwiLi4uXCIsIFwidmFsdWVcIjogMC54eHh9LCAuLi5dIOW9ouW8j1xuICAgICAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgZmV0Y2hEYXRhKGRhdGFVcmwpO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmF3RGF0YSkpIHJldHVybjtcblxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gcmF3RGF0YVxuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlICE9PSBudWxsKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApXG4gICAgICAgICAgLm1hcChpdGVtID0+ICh7IGxhYmVsOiBpdGVtLmNvbXBhbnksIHZhbHVlOiBpdGVtLnZhbHVlIH0pKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke0lkdG9Ub3BpY1t0YXJnZXRJZF1944Gr6Zai44GZ44KL54m56Kix44Gu5LyB5qWt5Y2g5pyJ546HYCk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OB44Oj44O844OI44OH44O844K/44Gu5Yem55CG5Lit44Gr44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgc3Bhbiwgb25SZW5kZXJlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHZhbHVlczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgIGNvbG9yczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gY29sb3JtYXBbaXRlbS5sYWJlbF0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDcwLCBiOiA1LCBsOiA0MCwgcjogNTAgfSxcbiAgICAgICAgfX1cbiAgXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGllQTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5cbiBcbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgbG9hZENvbXBhbmllcyA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgdG9MaXN0ID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuXG4gICAgY29uc3QgYWxwaGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgY29uc3QgYmV0YV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMV0pKTtcblxuICAgIHJldHVybiB7IGFscGhhX2xpLCBiZXRhX2xpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGFscGhhX2xpOiBbXSwgYmV0YV9saTogW10gfTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBlcnNvbkNvbXAgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBvblJlbmRlcmVkIH0pID0+IHtcbmNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICAgICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICAgICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIn07XG5cbmNvbnN0IGNvbG9ybWFwID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6J3JnYigyMjksIDEzNCwgNiknLCBcIuWcsOebpOaUueiJr1wiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi44OI44Oz44ON44Or5o6Y5YmKXCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgICAgICAgICBcIuWFjemch+ani+mAoFwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi566h55CG44K344K544OG44OgXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLlu4Pmo4Tnianlh6bnkIZcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgICAgICAgICBcIuW7uuevieODkeODjeODq1wiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLnqbroqr/jgrfjgrnjg4bjg6BcIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuaOmOWJiuijhee9rlwiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICAgICAgICB9O1xuICAgICAgICBcbiAgY29uc3QgYXJyb3dfY29sb3IgPSBbJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRiddO1xuXG4gIGNvbnN0IFtwcmVwYXJlZERhdGEsIHNldFByZXBhcmVkRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZpZ0RhdGEsIHNldEZpZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYW5ub3RhdGlvbnMsIHNldEFubm90YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIuS8gealreOBrueri+OBoeS9jee9rlwiKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyA06LGh6ZmQ44Gu5Zu65a6a44Op44OZ44Or77yI6Lu444Gu5oSP5ZGz44Gr5ZCI44KP44Gb44Gf6Kqs5piO77yJXG4gIC8vIFg95paw6KaP5oCn77yI5L2OOuS8nee1seeahOOAnOmrmDrpnanmlrDnmoTvvInjgIFZPemghuW/nOaAp++8iOS9jjrni6zoh6rot6/nt5rjgJzpq5g65qWt55WM6L+96ZqP77yJXG4gIGNvbnN0IHF1YWRyYW50TGFiZWxzID0gW1xuICAgIHsgeDogMC4wMiwgeTogMC45NywgdGV4dDogJ+alreeVjOOBrua1geOCjOOBq+S5l+OCijxicj7kvJ3ntbHnmoTmioDooZPjgpLno6jjgY8nLCAgIHhhbmNob3I6ICdsZWZ0JywgIHlhbmNob3I6ICd0b3AnICAgIH0sXG4gICAgeyB4OiAwLjk4LCB5OiAwLjk3LCB0ZXh0OiAn5qWt55WM44Gu5rWB44KM44Gr5LmX44KKPGJyPumdqeaWsOeahOaKgOihk+OBq+aMkeaIpicsICAgeGFuY2hvcjogJ3JpZ2h0JywgeWFuY2hvcjogJ3RvcCcgICAgfSxcbiAgICB7IHg6IDAuMDIsIHk6IDAuMDMsIHRleHQ6ICfni6zoh6rot6/nt5rjgac8YnI+5Lyd57Wx55qE5oqA6KGT44Gr54m55YyWJywgICAgICAgICB4YW5jaG9yOiAnbGVmdCcsICB5YW5jaG9yOiAnYm90dG9tJyB9LFxuICAgIHsgeDogMC45OCwgeTogMC4wMywgdGV4dDogJ+eLrOiHqui3r+e3muOBpzxicj7pnanmlrDnmoTmioDooZPjgavmjJHmiKYnLCAgICAgICAgIHhhbmNob3I6ICdyaWdodCcsIHlhbmNob3I6ICdib3R0b20nIH0sXG4gIF0ubWFwKCh7IHgsIHksIHRleHQsIHhhbmNob3IsIHlhbmNob3IgfSkgPT4gKHtcbiAgICB4cmVmOiAncGFwZXInLCB5cmVmOiAncGFwZXInLCB4LCB5LCB0ZXh0LCB4YW5jaG9yLCB5YW5jaG9yLFxuICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgZm9udDogeyBzaXplOiA4LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgYmdjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC42KScsXG4gICAgYm9yZGVycGFkOiAyLFxuICB9KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmVwYXJlRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbFByb21pc2VzID0gKHRvcGljIHx8IFtcImRlZmF1bHRfdG9waWNcIl0pLm1hcChhc3luYyAodGFyZ2V0X2lkKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvcGljXCIsdGFyZ2V0X2lkKVxuICAgICAgICAgIGNvbnN0IGNvbHVtblBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC90b3BpYz0ke3RhcmdldF9pZH0vY29tcGFueWA7XG4gICAgICAgICAgY29uc3QgY29tcGFuaWVzID0gYXdhaXQgbG9hZENvbXBhbmllcyhjb2x1bW5QYXRoKTtcblxuICAgICAgICAgIGNvbnN0IGNvbXBhbnlEaWN0ID0gY29tcGFuaWVzLnJlZHVjZSgoYWNjLCB2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRTZWFyY2hMaXN0ID0gbmV3U2VhcmNoTGlzdC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgaW4gY29tcGFueURpY3QpO1xuXG4gICAgICAgICAgY29uc3Qgbm9kZV9hbHBoYSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbHRlcmVkU2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG4gICAgICAgICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsdGVyZWRTZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcblxuICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaikgPT4gaiArIDUpLm1hcChhc3luYyAocCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC90b3BpYz0ke3RhcmdldF9pZH0vc3Bhbj0ke3NwYW5JZH0vdGVzdF9vcHRpbWl6ZV8ke3B9YDtcbiAgICAgICAgICAgIGNvbnN0IHsgYWxwaGFfbGksIGJldGFfbGkgfSA9IGF3YWl0IHRvTGlzdChwYXJhbWV0ZXJQYXRoKTtcblxuICAgICAgICAgICAgZmlsdGVyZWRTZWFyY2hMaXN0LmZvckVhY2goKGssIGopID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWR4ID0gY29tcGFuaWVzLmluZGV4T2Yoayk7XG4gICAgICAgICAgICAgIG5vZGVfYWxwaGFbal1bcCAtIDVdID0gYWxwaGFfbGlbaWR4XTtcbiAgICAgICAgICAgICAgbm9kZV9iZXRhW2pdW3AgLSA1XSA9IGJldGFfbGlbaWR4XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHsgbm9kZV9hbHBoYSwgbm9kZV9iZXRhLCBmaWx0ZXJlZFNlYXJjaExpc3QgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKGFsbFByb21pc2VzKTtcblxuICAgICAgICBjb25zdCBjb21iaW5lZEFscGhhID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQubm9kZV9hbHBoYSk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQmV0YSA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0Lm5vZGVfYmV0YSk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkU2VhcmNoTGlzdCA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0LmZpbHRlcmVkU2VhcmNoTGlzdCk7XG5cbiAgICAgICAgc2V0UHJlcGFyZWREYXRhKHsgYWxwaGE6IGNvbWJpbmVkQWxwaGEsIGJldGE6IGNvbWJpbmVkQmV0YSwgc2VhcmNoTGlzdDogY29tYmluZWRTZWFyY2hMaXN0IH0pO1xuICAgICAgICBzZXRUaXRsZShgJHtjb21wYW55feOBrualreeVjOOBp+OBrueri+OBoeS9jee9rmApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+a6luWCmeS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g5Yid5pyf44Os44Oz44OA44Oq44Oz44Kw5pmC44Gr44KC44OH44O844K/44KS5rqW5YKZXG4gICAgcHJlcGFyZURhdGEoKTtcbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuXSk7XG5cbiAgLy8gcHJlcGFyZWREYXRhIOOBjOaPg+OBo+OBn+OCieiHquWLleOBp+aPj+eUu1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcHJlcGFyZWREYXRhKSByZXR1cm47XG5cbiAgICBjb25zdCBwbG90RGF0YSA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4gKHtcbiAgICAgIHg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXSxcbiAgICAgIHk6IHByZXBhcmVkRGF0YS5iZXRhW2pdLFxuICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgIHRleHQ6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdLFxuICAgICAgdGV4dHBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgICBtYXJrZXI6IHtcbiAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgY29sb3I6IGNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY1tqICUgdG9waWMubGVuZ3RoXV1dLFxuICAgICAgICBzaXplOiA1LFxuICAgICAgfSxcbiAgICAgIG5hbWU6IElkdG9Ub3BpY1t0b3BpY1tqICUgdG9waWMubGVuZ3RoXV0sXG4gICAgfSkpO1xuXG4gICAgY29uc3QgcGxvdEFubm90YXRpb25zID0gcHJlcGFyZWREYXRhLnNlYXJjaExpc3QuZmxhdE1hcCgoaywgaikgPT5cbiAgICAgIEFycmF5KDQpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgICAgICB4OiBwcmVwYXJlZERhdGEuYWxwaGFbal1baSArIDFdLFxuICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXVtpICsgMV0sXG4gICAgICAgIHhyZWY6ICd4JywgeXJlZjogJ3knLFxuICAgICAgICBheHJlZjogJ3gnLCBheXJlZjogJ3knLFxuICAgICAgICBheDogcHJlcGFyZWREYXRhLmFscGhhW2pdW2ldLFxuICAgICAgICBheTogcHJlcGFyZWREYXRhLmJldGFbal1baV0sXG4gICAgICAgIGFycm93Y29sb3I6IGNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY1tqICUgdG9waWMubGVuZ3RoXV1dLFxuICAgICAgICBhcnJvd3NpemU6IDEuMiwgYXJyb3d3aWR0aDogMS4yLCBhcnJvd2hlYWQ6IDUsXG4gICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgIH0pKVxuICAgICk7XG5cbiAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAvLyDnn6LljbDjgqLjg47jg4bjg7zjgrfjg6fjg7PvvIs06LGh6ZmQ44Op44OZ44Or44KS5ZCI44KP44Gb44Gm6Kit5a6aXG4gICAgc2V0QW5ub3RhdGlvbnMoWy4uLnBsb3RBbm5vdGF0aW9ucywgLi4ucXVhZHJhbnRMYWJlbHNdKTtcbiAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICB9LCBbcHJlcGFyZWREYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwdmgnLCBoZWlnaHQ6ICcxMDB2aCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCBsZWZ0OiAwLCByaWdodDogMCwgYm90dG9tOiAwLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjc1KScsIHpJbmRleDogMTAsIGZvbnRTaXplOiAxNiwgY29sb3I6ICcjNTU1JyxcbiAgICAgICAgfX0+XG4gICAgICAgICAg6Kqt44G/6L6844G/5LitLi4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgeHJlZjogJ3BhcGVyJyxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICB9LFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFstMSwgMV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbLTEsIDAsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLpoIblv5zmgKdcIixcbiAgICAgICAgICAgIHRpdGxlX3N0YW5kb2ZmOiAyNSxcbiAgICAgICAgICAgIHJhbmdlOiBbLTEsIDFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6Wy0xLCAwLCAxXSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogNDAsIGw6IDQ1LCByOiA1MCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGJvcmRlcndpZHRoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Db21wO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cbmNvbnN0IGNvbG9ybWFwID0geyfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLmoKrlvI/kvJrnpL7lpKfmnpfntYRcIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIua4heawtOW7uuioreagquW8j+S8muekvlwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gIFwi5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupdcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuagquW8j+S8muekvumVt+iwt+W3peOCs+ODvOODneODrOODvOOCt+ODp+ODs1wiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICBcIuWJjeeUsOW7uuioreW3pealreagquW8j+S8muekvlwiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLkupTmtIvlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuagquW8j+S8muekvuODleOCuOOCv1wiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICBcIuaIuOeUsOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMjM3LCAxMDAsIDkwKScsIFwi5qCq5byP5Lya56S+54aK6LC357WEXCI6J3JnYigxNjUsIDE3MCwgMTUzKSd9O1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Ub3BpYyA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBhcnJvd19jb2xvciA9IFsnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJ107XG4gIGNvbnN0IFtmaWdEYXRhLCBzZXRGaWdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fubm90YXRpb25zLCBzZXRBbm5vdGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb21wYW55TGlzdCwgc2V0Q29tcGFueUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoTGlzdCwgc2V0U2VhcmNoTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gNOixoemZkOOBruWbuuWumuODqeODmeODq++8iOi7uOOBruaEj+WRs+OBq+WQiOOCj+OBm+OBn+iqrOaYju+8iVxuICAvLyBYPeaWsOimj+aAp++8iOS9jjrkvJ3ntbHnmoTjgJzpq5g66Z2p5paw55qE77yJ44CBWT3poIblv5zmgKfvvIjkvY4654us6Ieq6Lev57ea44Cc6auYOualreeVjOi/vemaj++8iVxuICBjb25zdCBxdWFkcmFudExhYmVscyA9IFtcbiAgICB7IHg6IDAuMDIsIHk6IDAuOTcsIHRleHQ6ICfmpa3nlYzjga7mtYHjgozjgavkuZfjgoo8YnI+5Lyd57Wx55qE5oqA6KGT44KS56Oo44GPJywgICB4YW5jaG9yOiAnbGVmdCcsICB5YW5jaG9yOiAndG9wJyAgICB9LFxuICAgIHsgeDogMC45OCwgeTogMC45NywgdGV4dDogJ+alreeVjOOBrua1geOCjOOBq+S5l+OCijxicj7pnanmlrDnmoTmioDooZPjgavmjJHmiKYnLCAgIHhhbmNob3I6ICdyaWdodCcsIHlhbmNob3I6ICd0b3AnICAgIH0sXG4gICAgeyB4OiAwLjAyLCB5OiAwLjAzLCB0ZXh0OiAn54us6Ieq6Lev57ea44GnPGJyPuS8nee1seeahOaKgOihk+OBq+eJueWMlicsICAgICAgICAgeGFuY2hvcjogJ2xlZnQnLCAgeWFuY2hvcjogJ2JvdHRvbScgfSxcbiAgICB7IHg6IDAuOTgsIHk6IDAuMDMsIHRleHQ6ICfni6zoh6rot6/nt5rjgac8YnI+6Z2p5paw55qE5oqA6KGT44Gr5oyR5oimJywgICAgICAgICB4YW5jaG9yOiAncmlnaHQnLCB5YW5jaG9yOiAnYm90dG9tJyB9LFxuICBdLm1hcCgoeyB4LCB5LCB0ZXh0LCB4YW5jaG9yLCB5YW5jaG9yIH0pID0+ICh7XG4gICAgeHJlZjogJ3BhcGVyJywgeXJlZjogJ3BhcGVyJywgeCwgeSwgdGV4dCwgeGFuY2hvciwgeWFuY2hvcixcbiAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgIGZvbnQ6IHsgc2l6ZTogOCwgY29sb3I6ICdncmF5JyB9LFxuICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNiknLFxuICAgIGJvcmRlcnBhZDogMixcbiAgfSkpO1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG5cbiAgLy8g5Yid5pyf44OH44O844K/44Gu44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgdG9waWMpIHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljO1xuICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L3RvcGljPSR7dGFyZ2V0X2lkfS9jb21wYW55YDtcblxuICAgICAgbG9hZENvbXBhbmllcyhjb2x1bW5QYXRoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldENvbXBhbnlMaXN0KGRhdGEpO1xuICAgICAgICBzZXRUaXRsZShg5qWt55WM5YaF44Gn44Gu5LyB5qWt44Gu56uL44Gh5L2N572uYCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpY10pO1xuXG4gIC8vIOaknOe0ouWvvuixoeOBruODleOCo+ODq+OCv+ODquODs+OCsFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb21wYW55TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb21wYW55RGljdCA9IGNvbXBhbnlMaXN0LnJlZHVjZSgoYWNjLCB2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgIGFjY1t2YWx1ZV0gPSBpZHg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGNvbnN0IG5ld1NlYXJjaExpc3QgPSBBcnJheS5pc0FycmF5KGNvbXBhbnkpID8gY29tcGFueSA6IFtjb21wYW55XTtcbiAgICAgIHNldFNlYXJjaExpc3QobmV3U2VhcmNoTGlzdC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgaW4gY29tcGFueURpY3QpKTtcbiAgICB9XG4gIH0sIFtjb21wYW55TGlzdCwgY29tcGFueV0pO1xuXG4gIC8vIOODh+ODvOOCv+OBruaPj+eUu++8iHNlYXJjaExpc3Tjg7tzcGFuIOOBjOWkieOCj+OBo+OBn+OCieiHquWLleOBp+WGjeaPj+eUu++8iVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2hMaXN0Lmxlbmd0aCA9PT0gMCB8fCAhdG9waWMpIHJldHVybjtcblxuICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljO1xuICAgIGNvbnN0IG5vZGVfYWxwaGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcbiAgICBjb25zdCBub2RlX2JldGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcblxuICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4gaSArIDUpLm1hcCgocCkgPT4ge1xuICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC90b3BpYz0ke3RhcmdldF9pZH0vc3Bhbj0ke3NwYW5JZH0vdGVzdF9vcHRpbWl6ZV8ke3B9YDtcbiAgICAgIHJldHVybiB0b0xpc3QocGFyYW1ldGVyUGF0aCkudGhlbigoeyBhbHBoYV9saSwgYmV0YV9saSB9KSA9PiB7XG4gICAgICAgIHNlYXJjaExpc3QuZm9yRWFjaCgoaywgaikgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbnlMaXN0LmluZGV4T2Yoayk7XG4gICAgICAgICAgbm9kZV9hbHBoYVtqXVtwIC0gNV0gPSBhbHBoYV9saVtpZHhdO1xuICAgICAgICAgIG5vZGVfYmV0YVtqXVtwIC0gNV0gPSBiZXRhX2xpW2lkeF07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBwbG90RGF0YSA9IHNlYXJjaExpc3QubWFwKChrLCBqKSA9PiAoe1xuICAgICAgICB4OiBub2RlX2FscGhhW2pdLFxuICAgICAgICB5OiBub2RlX2JldGFbal0sXG4gICAgICAgIG1vZGU6IFwibGluZXMrbWFya2Vycyt0ZXh0XCIsXG4gICAgICAgIHRleHQ6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdLFxuICAgICAgICB0ZXh0cG9zaXRpb246IFwidG9wIGxlZnRcIixcbiAgICAgICAgbWFya2VyOiB7IHN5bWJvbDogJ2NpcmNsZScsIGNvbG9yOiBjb2xvcm1hcFtrXSwgc2l6ZTogNSB9LFxuICAgICAgICBuYW1lOiBrLFxuICAgICAgfSkpO1xuXG4gICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBzZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICAgIEFycmF5KDQpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgICAgICAgIHg6IG5vZGVfYWxwaGFbal1baSArIDFdLFxuICAgICAgICAgIHk6IG5vZGVfYmV0YVtqXVtpICsgMV0sXG4gICAgICAgICAgeHJlZjogJ3gnLCB5cmVmOiAneScsXG4gICAgICAgICAgYXg6IG5vZGVfYWxwaGFbal1baV0sIGF5OiBub2RlX2JldGFbal1baV0sXG4gICAgICAgICAgYXhyZWY6ICd4JywgYXlyZWY6ICd5JyxcbiAgICAgICAgICBhcnJvd2NvbG9yOiBjb2xvcm1hcFtrXSxcbiAgICAgICAgICBhcnJvd3NpemU6IDEuMiwgYXJyb3d3aWR0aDogMS4yLCBhcnJvd2hlYWQ6IDUsXG4gICAgICAgICAgc2hvd2Fycm93OiB0cnVlLFxuICAgICAgICB9KSlcbiAgICAgICk7XG5cbiAgICAgIHNldEZpZ0RhdGEocGxvdERhdGEpO1xuICAgICAgLy8g55+i5Y2w44Ki44OO44OG44O844K344On44Oz77yLNOixoemZkOODqeODmeODq+OCkuWQiOOCj+OBm+OBpuioreWumlxuICAgICAgc2V0QW5ub3RhdGlvbnMoWy4uLnBsb3RBbm5vdGF0aW9ucywgLi4ucXVhZHJhbnRMYWJlbHNdKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgIH0pO1xuICB9LCBbc2VhcmNoTGlzdCwgY29tcGFueUxpc3QsIHRvcGljLCBzcGFuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwdmgnLCBoZWlnaHQ6ICcxMDB2aCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCBsZWZ0OiAwLCByaWdodDogMCwgYm90dG9tOiAwLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjc1KScsIHpJbmRleDogMTAsIGZvbnRTaXplOiAxNiwgY29sb3I6ICcjNTU1JyxcbiAgICAgICAgfX0+XG4gICAgICAgICAg6Kqt44G/6L6844G/5LitLi4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgeHJlZjogJ3BhcGVyJyxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICB9LFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFstMSwgMV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbLTEsIDAsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLpoIblv5zmgKdcIixcbiAgICAgICAgICAgIHRpdGxlX3N0YW5kb2ZmOiAyNSxcbiAgICAgICAgICAgIHJhbmdlOiBbLTEsIDFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6Wy0xLCAwLCAxXSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogNDAsIGw6IDQ1LCByOiA1MCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGJvcmRlcndpZHRoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Ub3BpYztcbiIsIi8vIFNpZGViYXIuanN4XG5pbXBvcnQgUmVhY3QgLHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY29yZGlvbiwgQnV0dG9uLCBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IFNpZGViYXIgPSAoeyBvbkFwcGx5LCB2aXN1YWxUeXBlLCBvblZpc3VhbFR5cGVDaGFuZ2UsIHRvcGljTGlzdCwgY29tcGFueUxpc3QsIHNlbGVjdGVkQ29tcGFuaWVzLCBzZWxlY3RlZFRvcGljcywgb25DaGFuZ2VUb3BpYywgb25DaGFuZ2VDb21wYW55LCBzZWxlY3RlZFNwYW4sIG9uU3BhbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtpbnB1dFR5cGUsIHNldElucHV0VHlwZV0gPSB1c2VTdGF0ZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pO1xuICBjb25zdCBbY29tcGFueUZpbHRlciwgc2V0Q29tcGFueUZpbHRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBvblZpc3VhbFR5cGVDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWU9PVwib25lLWNvbXBcIil7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJjaGVja2JveFwiLFwicmFkaW9cIl0pfVxuICAgICAgZWxzZXtcbiAgICAgICAgc2V0SW5wdXRUeXBlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSlcbiAgICAgICAgfVxuXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dFR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG4gIFxuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcsIHBhZGRpbmc6ICcxMHB4JywgYmFja2dyb3VuZENvbG9yOiAnYmctbGlnaHQnIH19PlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgdGV4dC1kYW5nZXIgZm9udC1pdGFsaWNcIiBzdHlsZT17eyBoZWlnaHQ6ICc1JScgfX0+XG4gICAgICAgIDxDb2wgc209ezZ9PlxuICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMCUnIH19IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+XG4gICAgICAgICAgICDlj6/oppbljJbmnaHku7ZcbiAgICAgICAgICA8L2g1PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzbT17NH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJhcHBseVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkFwcGx5fVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTUlJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWPr+imluWMllxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICB7Lyog5pmC6ZaT5bmF6YG45oqe44Oc44K/44OzICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCBteS0yIHB4LTJcIj5cbiAgICAgICAgPENvbCB4cz17MTJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIiBzdHlsZT17eyBmb250U2l6ZTogJzEzcHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICAgICAgICAgICAg5pmC6ZaT44KS6YG45oqeXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPlxuICAgICAgICAgICAgICB7W3t2YWx1ZTonMScsIGxhYmVsOicx5bm0J30sIHt2YWx1ZTonMicsIGxhYmVsOicy5bm0J30sIHt2YWx1ZTonMycsIGxhYmVsOicz5bm0J31dLm1hcCgoe3ZhbHVlLCBsYWJlbH0pID0+IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNwYW5DaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zbSAke3NlbGVjdGVkU3BhbiA9PT0gdmFsdWUgPyAnYnRuLWRhcmsnIDogJ2J0bi1vdXRsaW5lLXNlY29uZGFyeSd9YH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcsIHBhZGRpbmc6ICcycHggMTBweCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIHsvKiBBY2NvcmRpb24gKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHRleHQtZGFuZ2VyIFwiIHN0eWxlPXt7IGhlaWdodDogJzgwJScgfX0+XG4gICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgey8qIFZpc3VhbGl6YXRpb24gVHlwZSAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIwXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPuWPr+imluWMluOCv+OCpOODlzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZCA9IFwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBteC0yXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPjHnpL7jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXgtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID4x44OI44OU44OD44Kv44Gr5rOo55uuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cbiAgICAgICAgICB7LyogVG9waWMgU2VsZWN0aW9uICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjFcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+VG9waWM8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIHt0b3BpY0xpc3QubWFwKCh0b3BpYykgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0b3BpY30+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aW5wdXRUeXBlWzBdfSBcbiAgICAgICAgICAgICAgICAgICAgaWQgPSB7dG9waWN9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkVG9waWNzLmluY2x1ZGVzKHRvcGljKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlVG9waWModG9waWMsaW5wdXRUeXBlWzBdKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dG9waWN9PntJZHRvVG9waWNbdG9waWNdfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG4gICAgICAgICAgey8qIENvbXBhbnkgU2VsZWN0aW9uICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjJcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+Q29tcGFueTwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5LyB5qWt5ZCN44Gn57We44KK6L6844G/Li4uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueUZpbHRlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbXBhbnlGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbWItMlwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JyB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7Y29tcGFueUxpc3RcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNvbXBhbnkgPT4gY29tcGFueS5pbmNsdWRlcyhjb21wYW55RmlsdGVyKSlcbiAgICAgICAgICAgICAgICAubWFwKChjb21wYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVsxXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29tcGFuaWVzLmluY2x1ZGVzKGNvbXBhbnkpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VDb21wYW55KGNvbXBhbnksIGlucHV0VHlwZVsxXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnknXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2NvbXBhbnl9Pntjb21wYW55fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90QmFyQ2hhcnRCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3BhbiwgY2xpY2tkYXRhLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gY2xpY2tkYXRhIHx8IHRvcGljWzBdIHx8IFwiMFwiO1xuICAgICAgICBjb25zdCBzcGFuSWQgPSBzcGFuIHx8IFwiMlwiO1xuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9hcHBfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3BlcnNvbmE9NS9zcGFuJHtzcGFuSWR9L29jY3VweV90b3BpY185Lmpzb25gO1xuICAgICAgICBjb25zdCBmaVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2ZpX3N1YmNsYXNzX3NwbGl0Lmpzb25gO1xuXG4gICAgICAgIGNvbnN0IFtvY2N1cHlKc29uLCBmaUxpc3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgICBmZXRjaERhdGEoZmlQYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgaWYgKCFvY2N1cHlKc29uIHx8ICFvY2N1cHlKc29uLmNvbXBhbmllcyB8fCAhb2NjdXB5SnNvbi5maV9jb2Rlcykge1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cikgPT5cbiAgICAgICAgICB0eXBlb2Ygc3RyID09PSBcInN0cmluZ1wiID8gc3RyLm5vcm1hbGl6ZShcIk5GQ1wiKS50cmltKCkgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbmllcyA9IG9jY3VweUpzb24uY29tcGFuaWVzLm1hcChub3JtYWxpemVTdHJpbmcpO1xuICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBzYW5pdGl6ZWRDb21wYW5pZXMuaW5kZXhPZihub3JtYWxpemVTdHJpbmcoY29tcGFueVswXSkpO1xuICAgICAgICBpZiAoY29tcGFueUluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcGFueSBcIiR7Y29tcGFueVswXX1cIiBub3QgZm91bmQuYCk7XG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlr77osaHkvIHmpa3jga7ooYzjga7jgb/mir3lh7pcbiAgICAgICAgY29uc3QgZmlWYWx1ZXMgPSB7fTtcbiAgICAgICAgb2NjdXB5SnNvbi5kYXRhLmZvckVhY2goKHsgcm93LCBjb2wsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICBpZiAocm93ID09PSBjb21wYW55SW5kZXgpIHtcbiAgICAgICAgICAgIGZpVmFsdWVzW29jY3VweUpzb24uZmlfY29kZXNbY29sXV0gPSB2YWx1ZSAqIDEwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBPYmplY3QuZW50cmllcyhmaVZhbHVlcylcbiAgICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7IGNhdGVnb3J5OiBrZXksIHZhbHVlLCBzdW1tYXJpemU6IGZpTGlzdFtrZXldIH0pKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueVswXX3jga5GSeOBruWIhuW4g2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIEpTT04uc3RyaW5naWZ5KGNsaWNrZGF0YSksIHVwZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgIHg6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgICAgICAgIG1hcmtlcjogeyBjb2xvcjogXCJyb3lhbGJsdWVcIiB9LFxuICAgICAgICAgICAgY3VzdG9tZGF0YTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5zdW1tYXJpemUpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIGhvdmVydGVtcGxhdGU6IGDoqqzmmI46ICV7Y3VzdG9tZGF0YX08YnI+JTogJXt4Oi4yZn0lIDxleHRyYT48L2V4dHJhPmAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aWNrc3VmZml4OiBcIiAlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogXCJGSVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDgwLCByOiA1MCB9LFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMTEsIGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgIGJnY29sb3I6IFwibGlnaHR5ZWxsb3dcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RCYXJDaGFydEEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBzcGFuLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWNbMF07XG4gICAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2FwcF9kYXRhL3RvcGljJHt0YXJnZXRJZH0vcGVyc29uYT01L3NwYW4ke3NwYW5JZH0vb2NjdXB5X3RvcGljXzkuanNvbmA7XG4gICAgICAgIGNvbnN0IGZpUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvZmlfc3ViY2xhc3Nfc3BsaXQuanNvbmA7XG5cbiAgICAgICAgY29uc3QgW29jY3VweUpzb24sIGZpTGlzdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKHBhdGgpLFxuICAgICAgICAgIGZldGNoRGF0YShmaVBhdGgpLFxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoIW9jY3VweUpzb24gfHwgIW9jY3VweUpzb24uZmlfY29kZXMgfHwgIW9jY3VweUpzb24uZGF0YSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIEZJ44Kz44O844OJ5Yil44Gr5YWo5LyB5qWt44Gu5YCk44KS5ZCI566XXG4gICAgICAgIGNvbnN0IGZpU3VtcyA9IHt9O1xuICAgICAgICBvY2N1cHlKc29uLmRhdGEuZm9yRWFjaCgoeyBjb2wsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBmaUNvZGUgPSBvY2N1cHlKc29uLmZpX2NvZGVzW2NvbF07XG4gICAgICAgICAgZmlTdW1zW2ZpQ29kZV0gPSAoZmlTdW1zW2ZpQ29kZV0gfHwgMCkgKyB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdG90YWwgPSBPYmplY3QudmFsdWVzKGZpU3VtcykucmVkdWNlKChzLCB2KSA9PiBzICsgdiwgMCk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBPYmplY3QuZW50cmllcyhmaVN1bXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgIGNhdGVnb3J5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IHRvdGFsID4gMCA/ICh2YWx1ZSAvIHRvdGFsKSAqIDEwMCA6IDAsXG4gICAgICAgICAgc3VtbWFyaXplOiBmaUxpc3Rba2V5XSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBmb3JtYXR0ZWREYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgRknjga7liIbluINgKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwKSkge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBzcGFuLCB1cGRhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHsgY29sb3I6IFwicm95YWxibHVlXCIgfSxcbiAgICAgICAgICAgIGN1c3RvbWRhdGE6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3VtbWFyaXplKS5yZXZlcnNlKCksXG4gICAgICAgICAgICBob3ZlcnRlbXBsYXRlOiBg6Kqs5piOOiAle2N1c3RvbWRhdGF9PGJyPiU6ICV7eDouMmZ9JSA8ZXh0cmE+PC9leHRyYT5gLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGlja3N1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDExLCBjb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImxpZ2h0eWVsbG93XCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbXlfYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtYm9vdHN0cmFwX2VzbV9BY2NvcmRpb25fanMtbm9kZV9tb2R1bGVzX3JlYWN0LWJvb3RzdHJhcF9lc21fQnV0dG9uLWJlMWI0MVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJTaWRlYmFyIiwiQ29udGVudCIsIkFwcCIsImFycm93Q29sb3IiLCJjb21wYW55TGlzdCIsInRvcGljTGlzdCIsInZpc3VhbFR5cGUiLCJzZXRWaXN1YWxUeXBlIiwiaXNBcHBsaWVkIiwic2V0SXNBcHBsaWVkIiwic2VsZWN0ZWRDb21wYW5pZXMiLCJzZXRTZWxlY3RlZENvbXBhbmllcyIsInNlbGVjdGVkVG9waWNzIiwic2V0U2VsZWN0ZWRUb3BpY3MiLCJzZWxlY3RlZFNwYW4iLCJzZXRTZWxlY3RlZFNwYW4iLCJoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVBcHBseSIsInRvZ2dsZVNlbGVjdGlvbiIsIml0ZW0iLCJzZXRTZWxlY3RlZCIsImJ1dHRvbXR5cGUiLCJwcmV2U2VsZWN0ZWQiLCJpbmNsdWRlcyIsImZpbHRlciIsImkiLCJDb21wYW55Q2hlY2tib3hDaGFuZ2UiLCJjb21wYW55IiwiVG9waWNDaGVja2JveENoYW5nZSIsInRvcGljIiwiaGFuZGxlU3BhbkNoYW5nZSIsInJlc2V0SXNBcHBsaWVkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZmx1aWQiLCJjbGFzc05hbWUiLCJtZCIsIm9uQXBwbHkiLCJvblZpc3VhbFR5cGVDaGFuZ2UiLCJvbkNoYW5nZVRvcGljIiwib25DaGFuZ2VDb21wYW55Iiwib25TcGFuQ2hhbmdlIiwic3R5bGUiLCJoZWlnaHQiLCJwbG90Iiwic3BhbiIsInJlc2V0QXBwbHkiLCJDYXJkIiwiUGxvdFBpZUEiLCJQbG90UGllQiIsIlBsb3RQZXJzb25hQ29tcCIsIlBsb3RQZXJzb25hVG9waWMiLCJQbG90QmFyQ2hhcnRBIiwiUGxvdEJhckNoYXJ0QiIsImdldENhcmREYXRhIiwiTG9hZGluZ092ZXJsYXkiLCJwb3NpdGlvbiIsImluc2V0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmQiLCJ6SW5kZXgiLCJmb250U2l6ZSIsImNvbG9yIiwicG9pbnRlckV2ZW50cyIsIl9yZWYiLCJjbGlja0RhdGEiLCJzZXRDbGlja0RhdGEiLCJpc1BpZUxvYWRpbmciLCJzZXRJc1BpZUxvYWRpbmciLCJpc0JhckxvYWRpbmciLCJzZXRJc0JhckxvYWRpbmciLCJoYW5kbGVQaWVDaGFydENsaWNrIiwiZGF0YSIsImNhcmREYXRhIiwic2V0Q2FyZERhdGEiLCJmZXRjaERhdGEiLCJtYXJnaW5MZWZ0IiwidXBkYXRlIiwib25SZW5kZXJlZCIsImxheW91dCIsInRpdGxlIiwid2lkdGgiLCJjb25maWciLCJyZXNwb25zaXZlIiwib25DbGlja0RhdGEiLCJjbGlja2RhdGEiLCJtYXAiLCJpbmRleCIsImtleSIsInhzIiwiZmxleCIsIkJvZHkiLCJUaXRsZSIsImxhYmVsIiwiZGlyZWN0aW9uIiwidG9VcHBlckNhc2UiLCJUZXh0IiwidmFsdWVzIiwiam9pbiIsImNsaWNrZWRUb3BpYyIsInRhcmdldFRvcGljIiwiQXJyYXkiLCJpc0FycmF5Iiwic3BhbklkIiwidGFyZ2V0Q29tcGFueSIsImRhdGFQYXRoIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImpzb25EYXRhIiwianNvbiIsImNvbXBhbnlFbnRyeSIsImZpbmQiLCJsZW5ndGgiLCJub3ZlbHR5X3VwIiwibm92ZWx0eV9kb3duIiwiYWRhcHRfdXAiLCJhZGFwdF9kb3duIiwiZXJyb3IiLCJjb25zb2xlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJTdHJpY3RNb2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZVJlZiIsIlBsb3QiLCJjb2xvcm1hcCIsImZldGNoSnNvbiIsInVybCIsInN0YXR1cyIsImdldFJvd1N1bXMiLCJvY2N1cHlKc29uIiwibnVtUm93cyIsImNvbXBhbmllcyIsInN1bXMiLCJmaWxsIiwiZm9yRWFjaCIsInJvdyIsIl9yZWYyIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwiSWR0b1RvcGljIiwiVG9waWN0b0lkIiwiZGF0YUNhY2hlIiwidGFyZ2V0VG9waWNzIiwiTnVtYmVyIiwibG9hZERhdGEiLCJhbGxUb3BpY3NEYXRhIiwiUHJvbWlzZSIsImFsbCIsInRhcmdldF9pZCIsImNhY2hlS2V5IiwiY3VycmVudCIsIm5vcm1hbGl6ZVN0cmluZyIsInN0ciIsIm5vcm1hbGl6ZSIsInRyaW0iLCJzYW5pdGl6ZWRDb21wYW5pZXMiLCJzYW5pdGl6ZWRDb21wYW55IiwiY29tcGFueUluZGV4IiwiaW5kZXhPZiIsInJvd1N1bXMiLCJmaWx0ZXJlZERhdGEiLCJ0b3RhbFZhbHVlIiwicmVkdWNlIiwic3VtIiwibm9ybWFsaXplZERhdGEiLCJjYXRlZ29yeSIsInNvcnQiLCJhIiwiYiIsImhhbmRsZVBsb3RDbGljayIsImV2ZW50IiwicG9pbnRzIiwidG9waWNpZCIsInJlcGxhY2UiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ0eXBlIiwibGFiZWxzIiwiU3RyaW5nIiwibWFya2VyIiwiY29sb3JzIiwic2hvd2xlZ2VuZCIsInBsb3RfYmdjb2xvciIsInBhcGVyX2JnY29sb3IiLCJtYXJnaW4iLCJ0IiwibCIsInIiLCJvbkNsaWNrIiwic2V0VGl0bGUiLCJsb2FkQ2hhcnREYXRhIiwidGltZSIsInRhcmdldElkIiwiZGF0YVVybCIsInJhd0RhdGEiLCJzb3J0ZWREYXRhIiwic2xpY2UiLCJsb2FkQ29tcGFuaWVzIiwidGV4dCIsInNwbGl0IiwibGluZSIsInRvTGlzdCIsImxpbmVzIiwiYWxwaGFfbGkiLCJwYXJzZUZsb2F0IiwiYmV0YV9saSIsIlBsb3RQZXJzb25Db21wIiwiYXJyb3dfY29sb3IiLCJwcmVwYXJlZERhdGEiLCJzZXRQcmVwYXJlZERhdGEiLCJmaWdEYXRhIiwic2V0RmlnRGF0YSIsImFubm90YXRpb25zIiwic2V0QW5ub3RhdGlvbnMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJxdWFkcmFudExhYmVscyIsIngiLCJ5IiwieGFuY2hvciIsInlhbmNob3IiLCJ4cmVmIiwieXJlZiIsInNob3dhcnJvdyIsImZvbnQiLCJzaXplIiwiYmdjb2xvciIsImJvcmRlcnBhZCIsInByZXBhcmVEYXRhIiwiYWxsUHJvbWlzZXMiLCJsb2ciLCJjb2x1bW5QYXRoIiwiY29tcGFueURpY3QiLCJhY2MiLCJpZHgiLCJuZXdTZWFyY2hMaXN0IiwiZmlsdGVyZWRTZWFyY2hMaXN0Iiwibm9kZV9hbHBoYSIsImZyb20iLCJub2RlX2JldGEiLCJwcm9taXNlcyIsIl8iLCJqIiwicCIsInBhcmFtZXRlclBhdGgiLCJrIiwicmVzdWx0cyIsImNvbWJpbmVkQWxwaGEiLCJmbGF0TWFwIiwicmVzdWx0IiwiY29tYmluZWRCZXRhIiwiY29tYmluZWRTZWFyY2hMaXN0IiwiYWxwaGEiLCJiZXRhIiwic2VhcmNoTGlzdCIsInBsb3REYXRhIiwibW9kZSIsInRleHRwb3NpdGlvbiIsInN5bWJvbCIsIm5hbWUiLCJwbG90QW5ub3RhdGlvbnMiLCJheHJlZiIsImF5cmVmIiwiYXgiLCJheSIsImFycm93Y29sb3IiLCJhcnJvd3NpemUiLCJhcnJvd3dpZHRoIiwiYXJyb3doZWFkIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwieGF4aXMiLCJyYW5nZSIsImxpbmVjb2xvciIsImxpbmV3aWR0aCIsImdyaWRjb2xvciIsImdyaWR3aWR0aCIsImdyaWRkYXNoIiwidGlja21vZGUiLCJ0aWNrdmFscyIsInRpY2t0ZXh0IiwiemVyb2xpbmUiLCJ5YXhpcyIsInRpdGxlX3N0YW5kb2ZmIiwibGVnZW5kIiwiYm9yZGVyY29sb3IiLCJib3JkZXJ3aWR0aCIsIlBsb3RQZXJzb25Ub3BpYyIsInNldENvbXBhbnlMaXN0Iiwic2V0U2VhcmNoTGlzdCIsInRoZW4iLCJfcmVmMyIsIkFjY29yZGlvbiIsIkJ1dHRvbiIsImlucHV0VHlwZSIsInNldElucHV0VHlwZSIsImNvbXBhbnlGaWx0ZXIiLCJzZXRDb21wYW55RmlsdGVyIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJ0YXJnZXQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwic20iLCJ3aGl0ZVNwYWNlIiwicm9sZSIsImRlZmF1bHRBY3RpdmVLZXkiLCJJdGVtIiwiZXZlbnRLZXkiLCJIZWFkZXIiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJodG1sRm9yIiwicGxhY2Vob2xkZXIiLCJlIiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwiZ2V0IiwicGF0aCIsImZpUGF0aCIsImZpTGlzdCIsImZpX2NvZGVzIiwid2FybiIsImZpVmFsdWVzIiwiY29sIiwiT2JqZWN0IiwiZW50cmllcyIsInN1bW1hcml6ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXZlcnNlIiwib3JpZW50YXRpb24iLCJjdXN0b21kYXRhIiwiaG92ZXJ0ZW1wbGF0ZSIsIm1pcnJvciIsInRpY2tzdWZmaXgiLCJob3ZlcmxhYmVsIiwiYWxpZ24iLCJmaVN1bXMiLCJmaUNvZGUiLCJ0b3RhbCIsInMiLCJ2IiwiZm9ybWF0dGVkRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=