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
        range: [-0.05, 1.15],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [0, 0.5, 1],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      yaxis: {
        title: "順応性",
        title_standoff: 25,
        range: [0.8, 2.15],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [1, 1.5, 2],
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
        range: [-0.05, 1.15],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [0, 0.5, 1],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      yaxis: {
        title: "順応性",
        title_standoff: 25,
        range: [0.8, 2.15],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [1, 1.5, 2],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2FwcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbnRlbnQuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9nby1hbnl3aGVyZS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9vY2N1cHktY29tcGFueS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtdG9waWMuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9zaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RyZW5kLXRvcGl4LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyLmpzeCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQuanN4JztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBhcnJvd0NvbG9yID0gW1xuICAgICcjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnLFxuICAgICcjM0U5RTZGJywgJyNGMzgxODEnLCAnIzU0NUU3NScsICcjRkZCNjI3JywgJyM1Nzc1OTAnLFxuICBdO1xuICBjb25zdCBjb21wYW55TGlzdCA9IFtcbiAgICAn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvuWkp+ael+e1hCcsICfmuIXmsLTlu7roqK3moKrlvI/kvJrnpL4nLCAn5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+JyxcbiAgICAn5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXJywgJ+agquW8j+S8muekvumVt+iwt+W3peOCs+ODvOODneODrOODvOOCt+ODp+ODsycsICfliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL4nLFxuICAgICfkupTmtIvlu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+44OV44K444K/JywgJ+aIuOeUsOW7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7nhorosLfntYQnLFxuICBdO1xuICBjb25zdCB0b3BpY0xpc3QgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzExJ107XG5cbiAgY29uc3QgW3Zpc3VhbFR5cGUsIHNldFZpc3VhbFR5cGVdID0gdXNlU3RhdGUoJ29uZS10b3BpYycpO1xuICBjb25zdCBbaXNBcHBsaWVkLCBzZXRJc0FwcGxpZWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzZWxlY3RlZENvbXBhbmllcywgc2V0U2VsZWN0ZWRDb21wYW5pZXNdID0gdXNlU3RhdGUoWyfmoKrlvI/kvJrnpL7nhorosLfntYQnXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFRvcGljcywgc2V0U2VsZWN0ZWRUb3BpY3NdID0gdXNlU3RhdGUoWycwJ10pO1xuICBjb25zdCBbc2VsZWN0ZWRTcGFuLCBzZXRTZWxlY3RlZFNwYW5dID0gdXNlU3RhdGUoJzInKTtcblxuICBjb25zdCBoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0VmlzdWFsVHlwZSh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXBwbHkgPSAoKSA9PiB7XG4gICAgc2V0SXNBcHBsaWVkKDEpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGlvbiA9IChpdGVtLCBzZXRTZWxlY3RlZCwgYnV0dG9tdHlwZSkgPT4ge1xuICAgIGlmIChidXR0b210eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBzZXRTZWxlY3RlZCgocHJldlNlbGVjdGVkKSA9PlxuICAgICAgICBwcmV2U2VsZWN0ZWQuaW5jbHVkZXMoaXRlbSlcbiAgICAgICAgICA/IHByZXZTZWxlY3RlZC5maWx0ZXIoKGkpID0+IGkgIT09IGl0ZW0pXG4gICAgICAgICAgOiBbLi4ucHJldlNlbGVjdGVkLCBpdGVtXVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWQoW2l0ZW1dKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgQ29tcGFueUNoZWNrYm94Q2hhbmdlID0gKGNvbXBhbnksIGJ1dHRvbXR5cGUpID0+IHtcbiAgICB0b2dnbGVTZWxlY3Rpb24oY29tcGFueSwgc2V0U2VsZWN0ZWRDb21wYW5pZXMsIGJ1dHRvbXR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ2hlY2tib3hDaGFuZ2UgPSAodG9waWMsIGJ1dHRvbXR5cGUpID0+IHtcbiAgICB0b2dnbGVTZWxlY3Rpb24odG9waWMsIHNldFNlbGVjdGVkVG9waWNzLCBidXR0b210eXBlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTcGFuQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRTcGFuKHZhbHVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ29tcGFuaWVzKFsn5qCq5byP5Lya56S+54aK6LC357WEJ10pO1xuICAgIHNldFNlbGVjdGVkVG9waWNzKFsnMCddKTtcbiAgfSwgW3Zpc3VhbFR5cGVdKTtcblxuICBjb25zdCByZXNldElzQXBwbGllZCA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicmVhY3QtY29udGVudFwiIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XG4gICAgICA8Um93PlxuICAgICAgICB7Lyog44K144Kk44OJ44OQ44O8ICovfVxuICAgICAgICA8Q29sIG1kPXszfSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCI+XG4gICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgIG9uQXBwbHk9e2hhbmRsZUFwcGx5fVxuICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgIG9uVmlzdWFsVHlwZUNoYW5nZT17aGFuZGxlVmlzdWFsVHlwZUNoYW5nZX1cbiAgICAgICAgICAgIHRvcGljTGlzdD17dG9waWNMaXN0fVxuICAgICAgICAgICAgY29tcGFueUxpc3Q9e2NvbXBhbnlMaXN0fVxuICAgICAgICAgICAgc2VsZWN0ZWRDb21wYW5pZXM9e3NlbGVjdGVkQ29tcGFuaWVzfVxuICAgICAgICAgICAgc2VsZWN0ZWRUb3BpY3M9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgb25DaGFuZ2VUb3BpYz17VG9waWNDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGFueT17Q29tcGFueUNoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgc2VsZWN0ZWRTcGFuPXtzZWxlY3RlZFNwYW59XG4gICAgICAgICAgICBvblNwYW5DaGFuZ2U9e2hhbmRsZVNwYW5DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgey8qIOODoeOCpOODs+OCs+ODs+ODhuODs+ODhCAqL31cbiAgICAgICAgPENvbCBtZD17OX0gY2xhc3NOYW1lPVwiYm9yZGVyLWVuZFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgICA8Q29udGVudFxuICAgICAgICAgICAgcGxvdD17aXNBcHBsaWVkfVxuICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgIHRvcGljPXtzZWxlY3RlZFRvcGljc31cbiAgICAgICAgICAgIGNvbXBhbnk9e3NlbGVjdGVkQ29tcGFuaWVzfVxuICAgICAgICAgICAgc3Bhbj17c2VsZWN0ZWRTcGFufVxuICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICByZXNldEFwcGx5PXtyZXNldElzQXBwbGllZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9ZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgUGxvdFBpZUEgZnJvbSAnLi9vY2N1cHkuanN4JztcbmltcG9ydCBQbG90UGllQiBmcm9tICcuL29jY3VweS1jb21wYW55LmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFDb21wIGZyb20gJy4vcGVyc29uYS1jb21wLmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFUb3BpYyBmcm9tICcuL3BlcnNvbmEtdG9waWMuanN4JztcblxuaW1wb3J0IFBsb3RCYXJDaGFydEEgZnJvbSAnLi90cmVuZC10b3BpeC5qc3gnO1xuaW1wb3J0IFBsb3RCYXJDaGFydEIgZnJvbSAnLi90cmVuZC1jb21wLmpzeCc7XG5pbXBvcnQgeyBnZXRDYXJkRGF0YSB9IGZyb20gXCIuL2dvLWFueXdoZXJlLmpzeFwiOyAvLyDmraPjgZfjgYTjg5HjgrnjgpLmjIflrppcblxuXG5cblxuXG4vLyDjg4Hjg6Pjg7zjg4joqq3jgb/ovrzjgb/kuK3jgqrjg7zjg5Djg7zjg6zjgqRcbmNvbnN0IExvYWRpbmdPdmVybGF5ID0gKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIGluc2V0OiAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjc1KScsIHpJbmRleDogMTAsIGZvbnRTaXplOiAxNSwgY29sb3I6ICcjNjY2JyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH19PlxuICAgIOiqreOBv+i+vOOBv+S4rS4uLlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENvbnRlbnQgPSAoe3Bsb3QsdmlzdWFsVHlwZSx0b3BpYyxjb21wYW55LHNwYW4sdG9waWNMaXN0LHJlc2V0QXBwbHl9KSA9PiB7XG5cbiAgICBjb25zdCBbY2xpY2tEYXRhLCBzZXRDbGlja0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lzUGllTG9hZGluZywgIHNldElzUGllTG9hZGluZ10gID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0JhckxvYWRpbmcsICBzZXRJc0JhckxvYWRpbmddICA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVBpZUNoYXJ0Q2xpY2sgPSAoZGF0YSkgPT4ge1xuICAgICAgc2V0Q2xpY2tEYXRhKGRhdGEpO1xuICAgIH07XG5cbiAgICAvLyDkvJrnpL7jg7vjg4jjg5Tjg4Pjgq/jgYzlpInjgo/jgaPjgZ/jgonjgq/jg6rjg4Pjgq/pgbjmip7jgpLjg6rjgrvjg4Pjg4jjgIHjg63jg7zjg4fjgqPjg7PjgrDplovlp4tcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0Q2xpY2tEYXRhKG51bGwpO1xuICAgICAgc2V0SXNQaWVMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0SXNCYXJMb2FkaW5nKHRydWUpO1xuICAgIH0sIFtjb21wYW55LCB0b3BpYywgc3BhbiwgdmlzdWFsVHlwZV0pO1xuXG4gICAgLy8gQXBwbHkg44Oc44K/44Oz5pmC44KC44Ot44O844OH44Kj44Oz44KwXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChwbG90ID09PSAxKSB7XG4gICAgICAgIHNldElzUGllTG9hZGluZyh0cnVlKTtcbiAgICAgICAgc2V0SXNCYXJMb2FkaW5nKHRydWUpO1xuICAgICAgfVxuICAgIH0sIFtwbG90XSk7XG5cbiAgICAvLyDjgq/jg6rjg4Pjgq/jgafjg5Djg7zjg4Hjg6Pjg7zjg4jjga7jgb/jg63jg7zjg4fjgqPjg7PjgrBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKGNsaWNrRGF0YSAhPT0gbnVsbCkgc2V0SXNCYXJMb2FkaW5nKHRydWUpO1xuICAgIH0sIFtjbGlja0RhdGFdKTtcblxuICAgIGNvbnN0IFtjYXJkRGF0YSwgc2V0Q2FyZERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENhcmREYXRhKHBsb3QsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBjbGlja0RhdGEpO1xuICAgICAgICBzZXRDYXJkRGF0YShkYXRhKTtcbiAgICAgIH07XG4gICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbcGxvdCwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIGNsaWNrRGF0YV0pO1xuICBcbiAgICBcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgey8qIEZpcnN0IFJvdyAqL31cbiAgICAgIDxSb3cgc3R5bGU9e3sgaGVpZ2h0OiAnNTB2aCcgfX0+XG4gICAgICAgIHsvKiBQZXJzb25hIEdyYXBoICovfVxuICAgICAgICA8Q29sIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAlJyB9fT5cblxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYVRvcGljXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzUwdmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiNTB2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFDb21wXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQydmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8L0NvbD5cbiAgPC9Sb3c+XG5cbiAgICAgIHsvKiBTZWNvbmQgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgPENvbCBtZD17Nn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAge2lzUGllTG9hZGluZyAmJiA8TG9hZGluZ092ZXJsYXkgLz59XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgICAgPFBsb3RQaWVBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXsoKSA9PiB7IHNldElzUGllTG9hZGluZyhmYWxzZSk7IHJlc2V0QXBwbHkoKTsgfX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7IHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnODAlJyB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIHNwYW49e3NwYW59XG4gICAgICAgICAgICAgIHRvcGljTGlzdD17dG9waWNMaXN0fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXsoKSA9PiB7IHNldElzUGllTG9hZGluZyhmYWxzZSk7IHJlc2V0QXBwbHkoKTsgfX1cbiAgICAgICAgICAgICAgb25DbGlja0RhdGE9e2hhbmRsZVBpZUNoYXJ0Q2xpY2t9XG4gICAgICAgICAgICAgIGxheW91dD17eyB0aXRsZTogJ+azqOebruS8gealreOBrualreeVjOOBq+WvvuOBmeOCi+WNoOacieeOhycsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzgwJScgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgbWQ9ezZ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIHtpc0JhckxvYWRpbmcgJiYgPExvYWRpbmdPdmVybGF5IC8+fVxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QVxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17KCkgPT4gc2V0SXNCYXJMb2FkaW5nKGZhbHNlKX1cbiAgICAgICAgICAgIGxheW91dD17eyB0aXRsZTogJ0ZJ44Gu5YiG5biDJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnODAlJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KTooXG4gICAgICAgICAgPFBsb3RCYXJDaGFydEJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIHNwYW49e3NwYW59XG4gICAgICAgICAgICAgIGNsaWNrZGF0YT17Y2xpY2tEYXRhfVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXsoKSA9PiBzZXRJc0JhckxvYWRpbmcoZmFsc2UpfVxuICAgICAgICAgICAgbGF5b3V0PXt7IHRpdGxlOiAnRknjga7liIbluIMnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc4MCUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pfVxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAge2NhcmREYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPENvbFxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgeHM9ezEyfSAvLyDlkITjgqvjg7zjg4njgpIx6KGM44Gr6KGo56S644CB44Os44Kk44Ki44Km44OI44Gr5b+c44GY44Gm6Kq/5pW05Y+v6IO9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4OiBcIjEgMSBhdXRvXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInctNzUgaC03NVwiPlxuICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbCB8fCBpdGVtLmRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZXMuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICApKX1cbiAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG5cbiIsIi8vIGFueXdoZXJlXzUuanNvbiDlvaLlvI86XG4vLyBbe1wiY29tcGFueVwiOiBcIi4uLlwiLCBcImNvbG9yXCI6IFwiLi4uXCIsIFwibm92ZWx0eV91cFwiOiBbLi4uXSwgXCJub3ZlbHR5X2Rvd25cIjogWy4uLl0sIFwiYWRhcHRfdXBcIjogWy4uLl0sIFwiYWRhcHRfZG93blwiOiBbLi4uXX1dXG4vLyBGSeOCs+ODvOODieOBr+aWh+Wtl+WIl+OBp+ebtOaOpeagvOe0jeOBleOCjOOBpuOBhOOCi++8iOOCpOODs+ODh+ODg+OCr+OCueOBp+OBr+OBquOBhO+8iVxuZXhwb3J0IGNvbnN0IGdldENhcmREYXRhID0gYXN5bmMgKHBsb3QsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBjbGlja2VkVG9waWMpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAodmlzdWFsVHlwZSAhPT0gXCJvbmUtY29tcFwiKSByZXR1cm4gW107XG5cbiAgICAvLyBvbmUtY29tcDog44Kv44Oq44OD44Kv44GV44KM44Gf44OI44OU44OD44Kv5YSq5YWI44CB44Gq44GR44KM44Gw6YG45oqe5Lit44OI44OU44OD44KvXG4gICAgY29uc3QgdGFyZ2V0VG9waWMgPSB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCJcbiAgICAgID8gKGNsaWNrZWRUb3BpYyA/IChBcnJheS5pc0FycmF5KGNsaWNrZWRUb3BpYykgPyBjbGlja2VkVG9waWNbMF0gOiBjbGlja2VkVG9waWMpIDogKEFycmF5LmlzQXJyYXkodG9waWMpID8gdG9waWNbMF0gOiB0b3BpYykpXG4gICAgICA6IChBcnJheS5pc0FycmF5KHRvcGljKSA/IHRvcGljWzBdIDogdG9waWMpO1xuICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgY29uc3QgdGFyZ2V0Q29tcGFueSA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55WzBdIDogKGNvbXBhbnkgfHwgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIik7XG5cbiAgICBjb25zdCBkYXRhUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvYXBwX2RhdGEvdG9waWMke3RhcmdldFRvcGljfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS9hbnl3aGVyZV81Lmpzb25gO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwi44OH44O844K/44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfXCIpO1xuXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGpzb25EYXRhKSkgcmV0dXJuIFtdO1xuXG4gICAgLy8g5a++6LGh5LyB5qWt44Gu44OH44O844K/44KS5o6i44GZ77yI6KaL44Gk44GL44KJ44Gq44GR44KM44Gw5pyA5Yid44Gu5LyB5qWt44KS5L2/44GG77yJXG4gICAgbGV0IGNvbXBhbnlFbnRyeSA9IGpzb25EYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmNvbXBhbnkgPT09IHRhcmdldENvbXBhbnkpO1xuICAgIGlmICghY29tcGFueUVudHJ5ICYmIGpzb25EYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbXBhbnlFbnRyeSA9IGpzb25EYXRhWzBdO1xuICAgIH1cbiAgICBpZiAoIWNvbXBhbnlFbnRyeSkgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHsgZGlyZWN0aW9uOiBcIm5vdmVsdHlfdXBcIiwgICBsYWJlbDogXCLmlrDopo/mgKfihpFcIiwgdmFsdWVzOiBjb21wYW55RW50cnkubm92ZWx0eV91cCAgIHx8IFtdIH0sXG4gICAgICB7IGRpcmVjdGlvbjogXCJub3ZlbHR5X2Rvd25cIiwgbGFiZWw6IFwi5paw6KaP5oCn4oaTXCIsIHZhbHVlczogY29tcGFueUVudHJ5Lm5vdmVsdHlfZG93biB8fCBbXSB9LFxuICAgICAgeyBkaXJlY3Rpb246IFwiYWRhcHRfdXBcIiwgICAgIGxhYmVsOiBcIumghuW/nOaAp+KGkVwiLCB2YWx1ZXM6IGNvbXBhbnlFbnRyeS5hZGFwdF91cCAgICAgfHwgW10gfSxcbiAgICAgIHsgZGlyZWN0aW9uOiBcImFkYXB0X2Rvd25cIiwgICBsYWJlbDogXCLpoIblv5zmgKfihpNcIiwgdmFsdWVzOiBjb21wYW55RW50cnkuYWRhcHRfZG93biAgIHx8IFtdIH0sXG4gICAgXTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Gr5aSx5pWX44GX44G+44GX44GfOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwLmpzeFwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cbmNvbnN0IGNvbG9ybWFwID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6J3JnYigyMjksIDEzNCwgNiknLCBcIuWcsOebpOaUueiJr1wiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi44OI44Oz44ON44Or5o6Y5YmKXCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgXCLlhY3pnIfmp4vpgKBcIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIueuoeeQhuOCt+OCueODhuODoFwiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5buD5qOE54mp5Yem55CGXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gIFwi5bu656+J44OR44ON44OrXCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuepuuiqv+OCt+OCueODhuODoFwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5o6Y5YmK6KOF572uXCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG59O1xuXG5jb25zdCBmZXRjaEpzb24gPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLy8ge2NvbXBhbmllcywgZmlfY29kZXMsIGRhdGF9IOW9ouW8j+OBruOCueODkeODvOOCueODh+ODvOOCv+OBi+OCieihjOaWueWQkeOBruWSjOOCkuioiOeul1xuY29uc3QgZ2V0Um93U3VtcyA9IChvY2N1cHlKc29uKSA9PiB7XG4gIGNvbnN0IG51bVJvd3MgPSBvY2N1cHlKc29uLmNvbXBhbmllcy5sZW5ndGg7XG4gIGNvbnN0IHN1bXMgPSBBcnJheShudW1Sb3dzKS5maWxsKDApO1xuICBvY2N1cHlKc29uLmRhdGEuZm9yRWFjaCgoeyByb3csIHZhbHVlIH0pID0+IHtcbiAgICBzdW1zW3Jvd10gKz0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gc3Vtcztcbn07XG5cbmNvbnN0IFBsb3RQaWVCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3BhbiwgdG9waWNMaXN0LCBvblJlbmRlcmVkLCBvbkNsaWNrRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICBjb25zdCBUb3BpY3RvSWQgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjpcIjJcIixcIuWcsOebpOaUueiJr1wiOlwiM1wiLFwi44OI44Oz44ON44Or5o6Y5YmKXCI6XCIxXCIsXG4gICAgXCLlhY3pnIfmp4vpgKBcIjpcIjBcIixcIueuoeeQhuOCt+OCueODhuODoFwiOlwiOVwiLFwi5buD5qOE54mp5Yem55CGXCI6XCI2XCIsXCLlu7rnr4njg5Hjg43jg6tcIjpcIjhcIixcbiAgICBcIuepuuiqv+OCt+OCueODhuODoFwiOlwiN1wiLFwi5o6Y5YmK6KOF572uXCI6XCIxMVwiLFwi5bu656+J6Kit6KiIXCI6XCIxMFwiLFwi44OI44Oz44ON44Or5ris6YePXCI6XCI1XCJ9O1xuXG4gIGNvbnN0IGRhdGFDYWNoZSA9IHVzZVJlZih7fSk7XG5cbiAgLy8g44K144Kk44OJ44OQ44O844GudG9waWNMaXN044KS5L2/44GG77yI5pyq5oyH5a6a5pmC44Gv44OV44Kp44O844Or44OQ44OD44Kv77yJXG4gIGNvbnN0IHRhcmdldFRvcGljcyA9ICh0b3BpY0xpc3QgJiYgdG9waWNMaXN0Lmxlbmd0aCA+IDApXG4gICAgPyB0b3BpY0xpc3QubWFwKE51bWJlcilcbiAgICA6IFsyLCAzLCAxLCAwLCA5LCA2LCA4LCA3LCAxMV07XG5cbiAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICBjb25zdCBhbGxUb3BpY3NEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHRhcmdldFRvcGljcy5tYXAoYXN5bmMgKHRhcmdldF9pZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gYCR7dGFyZ2V0X2lkfS0ke3NwYW5JZH0tJHtjb21wYW55WzBdfWA7XG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudFtjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvYXBwX2RhdGEvdG9waWMke3RhcmdldF9pZH0vcGVyc29uYT01L3NwYW4ke3NwYW5JZH0vb2NjdXB5X3RvcGljXzkuanNvbmA7XG4gICAgICAgICAgICBkYXRhQ2FjaGUuY3VycmVudFtjYWNoZUtleV0gPSBhd2FpdCBmZXRjaEpzb24odXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBvY2N1cHlKc29uID0gZGF0YUNhY2hlLmN1cnJlbnRbY2FjaGVLZXldO1xuICAgICAgICAgIGlmICghb2NjdXB5SnNvbiB8fCAhb2NjdXB5SnNvbi5jb21wYW5pZXMpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cikgPT5cbiAgICAgICAgICAgIHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIgPyBzdHIubm9ybWFsaXplKFwiTkZDXCIpLnRyaW0oKSA6IG51bGw7XG5cbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW5pZXMgPSBvY2N1cHlKc29uLmNvbXBhbmllcy5tYXAobm9ybWFsaXplU3RyaW5nKTtcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW55ID0gbm9ybWFsaXplU3RyaW5nKGNvbXBhbnlbMF0pO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gc2FuaXRpemVkQ29tcGFuaWVzLmluZGV4T2Yoc2FuaXRpemVkQ29tcGFueSk7XG4gICAgICAgICAgaWYgKGNvbXBhbnlJbmRleCA9PT0gLTEpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgY29uc3Qgcm93U3VtcyA9IGdldFJvd1N1bXMob2NjdXB5SnNvbik7XG4gICAgICAgICAgcmV0dXJuIHsgdG9waWM6IHRhcmdldF9pZCwgdmFsdWU6IHJvd1N1bXNbY29tcGFueUluZGV4XSB9O1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gYWxsVG9waWNzRGF0YS5maWx0ZXIoKGRhdGEpID0+IGRhdGEgIT09IG51bGwpO1xuICAgICAgY29uc3QgdG90YWxWYWx1ZSA9IGZpbHRlcmVkRGF0YS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS52YWx1ZSwgMCk7XG4gICAgICBpZiAodG90YWxWYWx1ZSA9PT0gMCkge1xuICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRhID0gZmlsdGVyZWREYXRhXG4gICAgICAgIC5tYXAoaXRlbSA9PiAoeyBjYXRlZ29yeTogaXRlbS50b3BpYywgdmFsdWU6IGl0ZW0udmFsdWUgLyB0b3RhbFZhbHVlIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xuXG4gICAgICBzZXRDaGFydERhdGEobm9ybWFsaXplZERhdGEpO1xuICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIpIHtcbiAgICAgIGxvYWREYXRhKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCB2aXN1YWxUeXBlLCBzcGFuLCBjb21wYW55LCB0b3BpY0xpc3RdKTtcblxuICBjb25zdCBoYW5kbGVQbG90Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRzICYmIGV2ZW50LnBvaW50c1swXSkge1xuICAgICAgY29uc3QgY2xpY2tkYXRhID0gZXZlbnQucG9pbnRzWzBdLmxhYmVsOyAvLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/pg6jliIbjga7jg6njg5njg6tcbiAgICAgIGNvbnN0IGxhYmVsID0gVG9waWN0b0lkW2NsaWNrZGF0YV1cbiAgICAgIGNvbnN0IHRvcGljaWQgPSBsYWJlbC5yZXBsYWNlKFwiVG9waWMgXCIsIFwiXCIpO1xuICAgICAgb25DbGlja0RhdGEoW3RvcGljaWRdKTsgLy8g6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Op44OZ44Or44KS6YCa55+lXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHZhbHVlczogY2hhcnREYXRhLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gIElkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW0lkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldXSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiBgJHtjb21wYW55WzBdIHx8IFwiXCJ9IOOBruWHuumhmOeJueiosSDjg4jjg5Tjg4Pjgq/liIbluINgLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgICAgb25DbGljaz17aGFuZGxlUGxvdENsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jgqTjg5njg7Pjg4jjgpLov73liqBcbiAgICAgIC8+XG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQaWVBID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgc3Bhbiwgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG5cbiAgY29uc3QgY29sb3JtYXAgPSB7J+m5v+WztuW7uuioreagquW8j+S8muekvic6J3JnYigyMjksIDEzNCwgNiknLCBcIuagquW8j+S8muekvuWkp+ael+e1hFwiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi5riF5rC05bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgICAgIFwi5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupdcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuagquW8j+S8muekvumVt+iwt+W3peOCs+ODvOODneODrOODvOOCt+ODp+ODs1wiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICAgICAgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgICAgIFwi5oi455Sw5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigyMzcsIDEwMCwgOTApJywgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIjoncmdiKDE2NSwgMTcwLCAxNTMpJ307XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDA7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWMgfHwgXCIwXCI7XG4gICAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICAgIGNvbnN0IGRhdGFVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2FwcF9kYXRhL3RvcGljJHt0YXJnZXRJZH0vcGVyc29uYT01L3NwYW4ke3NwYW5JZH0vb2NjdXB5X21lYW5fJHt0aW1lfS5qc29uYDtcblxuICAgICAgICAvLyBbe1wiY29tcGFueVwiOiBcIi4uLlwiLCBcInZhbHVlXCI6IDAueHh4fSwgLi4uXSDlvaLlvI9cbiAgICAgICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGZldGNoRGF0YShkYXRhVXJsKTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJhd0RhdGEpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IHJhd0RhdGFcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS52YWx1ZSAhPT0gbnVsbClcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKVxuICAgICAgICAgIC5tYXAoaXRlbSA9PiAoeyBsYWJlbDogaXRlbS5jb21wYW55LCB2YWx1ZTogaXRlbS52YWx1ZSB9KSk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtJZHRvVG9waWNbdGFyZ2V0SWRdfeOBq+mWouOBmeOCi+eJueioseOBruS8gealreWNoOacieeOh2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODgeODo+ODvOODiOODh+ODvOOCv+OBruWHpueQhuS4reOBq+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIikge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIHNwYW4sIG9uUmVuZGVyZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW2l0ZW0ubGFiZWxdKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gIFxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuXG4gXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Db21wID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3Bhbiwgb25SZW5kZXJlZCB9KSA9PiB7XG5jb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCJ9O1xuXG5jb25zdCBjb2xvcm1hcCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLlnLDnm6TmlLnoia9cIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIuODiOODs+ODjeODq+aOmOWJilwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gICAgICAgICAgXCLlhY3pnIfmp4vpgKBcIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIueuoeeQhuOCt+OCueODhuODoFwiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5buD5qOE54mp5Yem55CGXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gICAgICAgICAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gIGNvbnN0IGFycm93X2NvbG9yID0gWycjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnXTtcblxuICBjb25zdCBbcHJlcGFyZWREYXRhLCBzZXRQcmVwYXJlZERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmaWdEYXRhLCBzZXRGaWdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fubm90YXRpb25zLCBzZXRBbm5vdGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCLkvIHmpa3jga7nq4vjgaHkvY3nva5cIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gNOixoemZkOOBruWbuuWumuODqeODmeODq++8iOi7uOOBruaEj+WRs+OBq+WQiOOCj+OBm+OBn+iqrOaYju+8iVxuICAvLyBYPeaWsOimj+aAp++8iOS9jjrkvJ3ntbHnmoTjgJzpq5g66Z2p5paw55qE77yJ44CBWT3poIblv5zmgKfvvIjkvY4654us6Ieq6Lev57ea44Cc6auYOualreeVjOi/vemaj++8iVxuICBjb25zdCBxdWFkcmFudExhYmVscyA9IFtcbiAgICB7IHg6IDAuMDIsIHk6IDAuOTcsIHRleHQ6ICfmpa3nlYzjga7mtYHjgozjgavkuZfjgoo8YnI+5Lyd57Wx55qE5oqA6KGT44KS56Oo44GPJywgICB4YW5jaG9yOiAnbGVmdCcsICB5YW5jaG9yOiAndG9wJyAgICB9LFxuICAgIHsgeDogMC45OCwgeTogMC45NywgdGV4dDogJ+alreeVjOOBrua1geOCjOOBq+S5l+OCijxicj7pnanmlrDnmoTmioDooZPjgavmjJHmiKYnLCAgIHhhbmNob3I6ICdyaWdodCcsIHlhbmNob3I6ICd0b3AnICAgIH0sXG4gICAgeyB4OiAwLjAyLCB5OiAwLjAzLCB0ZXh0OiAn54us6Ieq6Lev57ea44GnPGJyPuS8nee1seeahOaKgOihk+OBq+eJueWMlicsICAgICAgICAgeGFuY2hvcjogJ2xlZnQnLCAgeWFuY2hvcjogJ2JvdHRvbScgfSxcbiAgICB7IHg6IDAuOTgsIHk6IDAuMDMsIHRleHQ6ICfni6zoh6rot6/nt5rjgac8YnI+6Z2p5paw55qE5oqA6KGT44Gr5oyR5oimJywgICAgICAgICB4YW5jaG9yOiAncmlnaHQnLCB5YW5jaG9yOiAnYm90dG9tJyB9LFxuICBdLm1hcCgoeyB4LCB5LCB0ZXh0LCB4YW5jaG9yLCB5YW5jaG9yIH0pID0+ICh7XG4gICAgeHJlZjogJ3BhcGVyJywgeXJlZjogJ3BhcGVyJywgeCwgeSwgdGV4dCwgeGFuY2hvciwgeWFuY2hvcixcbiAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgIGZvbnQ6IHsgc2l6ZTogOCwgY29sb3I6ICdncmF5JyB9LFxuICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNiknLFxuICAgIGJvcmRlcnBhZDogMixcbiAgfSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlcGFyZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxQcm9taXNlcyA9ICh0b3BpYyB8fCBbXCJkZWZhdWx0X3RvcGljXCJdKS5tYXAoYXN5bmMgKHRhcmdldF9pZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b3BpY1wiLHRhcmdldF9pZClcbiAgICAgICAgICBjb25zdCBjb2x1bW5QYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvdG9waWM9JHt0YXJnZXRfaWR9L2NvbXBhbnlgO1xuICAgICAgICAgIGNvbnN0IGNvbXBhbmllcyA9IGF3YWl0IGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCk7XG5cbiAgICAgICAgICBjb25zdCBjb21wYW55RGljdCA9IGNvbXBhbmllcy5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgYWNjW3ZhbHVlXSA9IGlkeDtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgY29uc3QgbmV3U2VhcmNoTGlzdCA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55IDogW2NvbXBhbnldO1xuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkU2VhcmNoTGlzdCA9IG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KTtcblxuICAgICAgICAgIGNvbnN0IG5vZGVfYWxwaGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWx0ZXJlZFNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuICAgICAgICAgIGNvbnN0IG5vZGVfYmV0YSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbHRlcmVkU2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGopID0+IGogKyA1KS5tYXAoYXN5bmMgKHApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvdG9waWM9JHt0YXJnZXRfaWR9L3NwYW49JHtzcGFuSWR9L3Rlc3Rfb3B0aW1pemVfJHtwfWA7XG4gICAgICAgICAgICBjb25zdCB7IGFscGhhX2xpLCBiZXRhX2xpIH0gPSBhd2FpdCB0b0xpc3QocGFyYW1ldGVyUGF0aCk7XG5cbiAgICAgICAgICAgIGZpbHRlcmVkU2VhcmNoTGlzdC5mb3JFYWNoKChrLCBqKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbmllcy5pbmRleE9mKGspO1xuICAgICAgICAgICAgICBub2RlX2FscGhhW2pdW3AgLSA1XSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICAgIG5vZGVfYmV0YVtqXVtwIC0gNV0gPSBiZXRhX2xpW2lkeF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICAgIHJldHVybiB7IG5vZGVfYWxwaGEsIG5vZGVfYmV0YSwgZmlsdGVyZWRTZWFyY2hMaXN0IH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChhbGxQcm9taXNlcyk7XG5cbiAgICAgICAgY29uc3QgY29tYmluZWRBbHBoYSA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0Lm5vZGVfYWxwaGEpO1xuICAgICAgICBjb25zdCBjb21iaW5lZEJldGEgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5ub2RlX2JldGEpO1xuICAgICAgICBjb25zdCBjb21iaW5lZFNlYXJjaExpc3QgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5maWx0ZXJlZFNlYXJjaExpc3QpO1xuXG4gICAgICAgIHNldFByZXBhcmVkRGF0YSh7IGFscGhhOiBjb21iaW5lZEFscGhhLCBiZXRhOiBjb21iaW5lZEJldGEsIHNlYXJjaExpc3Q6IGNvbWJpbmVkU2VhcmNoTGlzdCB9KTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueX3jga7mpa3nlYzjgafjga7nq4vjgaHkvY3nva5gKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/mupblgpnkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOWIneacn+ODrOODs+ODgOODquODs+OCsOaZguOBq+OCguODh+ODvOOCv+OCkua6luWCmVxuICAgIHByZXBhcmVEYXRhKCk7XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3Bhbl0pO1xuXG4gIC8vIHByZXBhcmVkRGF0YSDjgYzmj4PjgaPjgZ/jgonoh6rli5Xjgafmj4/nlLtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByZXBhcmVkRGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcGxvdERhdGEgPSBwcmVwYXJlZERhdGEuc2VhcmNoTGlzdC5tYXAoKGssIGopID0+ICh7XG4gICAgICB4OiBwcmVwYXJlZERhdGEuYWxwaGFbal0sXG4gICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXSxcbiAgICAgIG1vZGU6IFwibGluZXMrbWFya2Vycyt0ZXh0XCIsXG4gICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgIHRleHRwb3NpdGlvbjogXCJ0b3AgbGVmdFwiLFxuICAgICAgbWFya2VyOiB7XG4gICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgIGNvbG9yOiBjb2xvcm1hcFtJZHRvVG9waWNbdG9waWNbaiAlIHRvcGljLmxlbmd0aF1dXSxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgIH0sXG4gICAgICBuYW1lOiBJZHRvVG9waWNbdG9waWNbaiAlIHRvcGljLmxlbmd0aF1dLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHBsb3RBbm5vdGF0aW9ucyA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICBBcnJheSg0KS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgeDogcHJlcGFyZWREYXRhLmFscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgeTogcHJlcGFyZWREYXRhLmJldGFbal1baSArIDFdLFxuICAgICAgICB4cmVmOiAneCcsIHlyZWY6ICd5JyxcbiAgICAgICAgYXhyZWY6ICd4JywgYXlyZWY6ICd5JyxcbiAgICAgICAgYXg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXVtpXSxcbiAgICAgICAgYXk6IHByZXBhcmVkRGF0YS5iZXRhW2pdW2ldLFxuICAgICAgICBhcnJvd2NvbG9yOiBjb2xvcm1hcFtJZHRvVG9waWNbdG9waWNbaiAlIHRvcGljLmxlbmd0aF1dXSxcbiAgICAgICAgYXJyb3dzaXplOiAxLjIsIGFycm93d2lkdGg6IDEuMiwgYXJyb3doZWFkOiA1LFxuICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICB9KSlcbiAgICApO1xuXG4gICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgLy8g55+i5Y2w44Ki44OO44OG44O844K344On44Oz77yLNOixoemZkOODqeODmeODq+OCkuWQiOOCj+OBm+OBpuioreWumlxuICAgIHNldEFubm90YXRpb25zKFsuLi5wbG90QW5ub3RhdGlvbnMsIC4uLnF1YWRyYW50TGFiZWxzXSk7XG4gICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgfSwgW3ByZXBhcmVkRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHZoJywgaGVpZ2h0OiAnMTAwdmgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC43NSknLCB6SW5kZXg6IDEwLCBmb250U2l6ZTogMTYsIGNvbG9yOiAnIzU1NScsXG4gICAgICAgIH19PlxuICAgICAgICAgIOiqreOBv+i+vOOBv+S4rS4uLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHhyZWY6ICdwYXBlcicsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgfSxcblxuICAgICAgICAgXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLmlrDopo/mgKdcIixcbiAgICAgICAgICAgIHJhbmdlOiBbLTAuMDUsIDEuMTVdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAsIDAuNSwgMV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6IDI1LFxuICAgICAgICAgICAgcmFuZ2U6IFswLjgsIDIuMTVdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzEsIDEuNSwgMl0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDQwLCBsOiA0NSwgcjogNTAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIydmhcIiwgd2lkdGg6IFwiMTAwdmhcIiwgaGVpZ2h0OiBcIjQ1dmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGVyc29uQ29tcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5jb25zdCBjb2xvcm1hcCA9IHsn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JzoncmdiKDIyOSwgMTM0LCA2KScsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWkp+aIkOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDIzNywgMTAwLCA5MCknLCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiOidyZ2IoMTY1LCAxNzAsIDE1MyknfTtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCB0b0xpc3QgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICBjb25zdCBhbHBoYV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMF0pKTtcbiAgICBjb25zdCBiZXRhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVsxXSkpO1xuXG4gICAgcmV0dXJuIHsgYWxwaGFfbGksIGJldGFfbGkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYWxwaGFfbGk6IFtdLCBiZXRhX2xpOiBbXSB9O1xuICB9XG59O1xuXG5jb25zdCBQbG90UGVyc29uVG9waWMgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgYXJyb3dfY29sb3IgPSBbJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRiddO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29tcGFueUxpc3QsIHNldENvbXBhbnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaExpc3QsIHNldFNlYXJjaExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIDTosaHpmZDjga7lm7rlrprjg6njg5njg6vvvIjou7jjga7mhI/lkbPjgavlkIjjgo/jgZvjgZ/oqqzmmI7vvIlcbiAgLy8gWD3mlrDopo/mgKfvvIjkvY465Lyd57Wx55qE44Cc6auYOumdqeaWsOeahO+8ieOAgVk96aCG5b+c5oCn77yI5L2OOueLrOiHqui3r+e3muOAnOmrmDrmpa3nlYzov73pmo/vvIlcbiAgY29uc3QgcXVhZHJhbnRMYWJlbHMgPSBbXG4gICAgeyB4OiAwLjAyLCB5OiAwLjk3LCB0ZXh0OiAn5qWt55WM44Gu5rWB44KM44Gr5LmX44KKPGJyPuS8nee1seeahOaKgOihk+OCkuejqOOBjycsICAgeGFuY2hvcjogJ2xlZnQnLCAgeWFuY2hvcjogJ3RvcCcgICAgfSxcbiAgICB7IHg6IDAuOTgsIHk6IDAuOTcsIHRleHQ6ICfmpa3nlYzjga7mtYHjgozjgavkuZfjgoo8YnI+6Z2p5paw55qE5oqA6KGT44Gr5oyR5oimJywgICB4YW5jaG9yOiAncmlnaHQnLCB5YW5jaG9yOiAndG9wJyAgICB9LFxuICAgIHsgeDogMC4wMiwgeTogMC4wMywgdGV4dDogJ+eLrOiHqui3r+e3muOBpzxicj7kvJ3ntbHnmoTmioDooZPjgavnibnljJYnLCAgICAgICAgIHhhbmNob3I6ICdsZWZ0JywgIHlhbmNob3I6ICdib3R0b20nIH0sXG4gICAgeyB4OiAwLjk4LCB5OiAwLjAzLCB0ZXh0OiAn54us6Ieq6Lev57ea44GnPGJyPumdqeaWsOeahOaKgOihk+OBq+aMkeaIpicsICAgICAgICAgeGFuY2hvcjogJ3JpZ2h0JywgeWFuY2hvcjogJ2JvdHRvbScgfSxcbiAgXS5tYXAoKHsgeCwgeSwgdGV4dCwgeGFuY2hvciwgeWFuY2hvciB9KSA9PiAoe1xuICAgIHhyZWY6ICdwYXBlcicsIHlyZWY6ICdwYXBlcicsIHgsIHksIHRleHQsIHhhbmNob3IsIHlhbmNob3IsXG4gICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICBmb250OiB7IHNpemU6IDgsIGNvbG9yOiAnZ3JheScgfSxcbiAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjYpJyxcbiAgICBib3JkZXJwYWQ6IDIsXG4gIH0pKTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gIC8vIOWIneacn+ODh+ODvOOCv+OBruODreODvOODiVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiICYmIHRvcGljKSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCB0YXJnZXRfaWQgPSB0b3BpYztcbiAgICAgIGNvbnN0IGNvbHVtblBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC90b3BpYz0ke3RhcmdldF9pZH0vY29tcGFueWA7XG5cbiAgICAgIGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDb21wYW55TGlzdChkYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYOalreeVjOWGheOBp+OBruS8gealreOBrueri+OBoeS9jee9rmApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWNdKTtcblxuICAvLyDmpJzntKLlr77osaHjga7jg5XjgqPjg6vjgr/jg6rjg7PjgrBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29tcGFueUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW55TGlzdC5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICBzZXRTZWFyY2hMaXN0KG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KSk7XG4gICAgfVxuICB9LCBbY29tcGFueUxpc3QsIGNvbXBhbnldKTtcblxuICAvLyDjg4fjg7zjgr/jga7mj4/nlLvvvIhzZWFyY2hMaXN044O7c3BhbiDjgYzlpInjgo/jgaPjgZ/jgonoh6rli5Xjgaflho3mj4/nlLvvvIlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoTGlzdC5sZW5ndGggPT09IDAgfHwgIXRvcGljKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXJnZXRfaWQgPSB0b3BpYztcbiAgICBjb25zdCBub2RlX2FscGhhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG4gICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICBjb25zdCBwcm9taXNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGkpID0+IGkgKyA1KS5tYXAoKHApID0+IHtcbiAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvdG9waWM9JHt0YXJnZXRfaWR9L3NwYW49JHtzcGFuSWR9L3Rlc3Rfb3B0aW1pemVfJHtwfWA7XG4gICAgICByZXR1cm4gdG9MaXN0KHBhcmFtZXRlclBhdGgpLnRoZW4oKHsgYWxwaGFfbGksIGJldGFfbGkgfSkgPT4ge1xuICAgICAgICBzZWFyY2hMaXN0LmZvckVhY2goKGssIGopID0+IHtcbiAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW55TGlzdC5pbmRleE9mKGspO1xuICAgICAgICAgIG5vZGVfYWxwaGFbal1bcCAtIDVdID0gYWxwaGFfbGlbaWR4XTtcbiAgICAgICAgICBub2RlX2JldGFbal1bcCAtIDVdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgcGxvdERhdGEgPSBzZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4gKHtcbiAgICAgICAgeDogbm9kZV9hbHBoYVtqXSxcbiAgICAgICAgeTogbm9kZV9iZXRhW2pdLFxuICAgICAgICBtb2RlOiBcImxpbmVzK21hcmtlcnMrdGV4dFwiLFxuICAgICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgICAgdGV4dHBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgICAgIG1hcmtlcjogeyBzeW1ib2w6ICdjaXJjbGUnLCBjb2xvcjogY29sb3JtYXBba10sIHNpemU6IDUgfSxcbiAgICAgICAgbmFtZTogayxcbiAgICAgIH0pKTtcblxuICAgICAgY29uc3QgcGxvdEFubm90YXRpb25zID0gc2VhcmNoTGlzdC5mbGF0TWFwKChrLCBqKSA9PlxuICAgICAgICBBcnJheSg0KS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgICB4OiBub2RlX2FscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgICB5OiBub2RlX2JldGFbal1baSArIDFdLFxuICAgICAgICAgIHhyZWY6ICd4JywgeXJlZjogJ3knLFxuICAgICAgICAgIGF4OiBub2RlX2FscGhhW2pdW2ldLCBheTogbm9kZV9iZXRhW2pdW2ldLFxuICAgICAgICAgIGF4cmVmOiAneCcsIGF5cmVmOiAneScsXG4gICAgICAgICAgYXJyb3djb2xvcjogY29sb3JtYXBba10sXG4gICAgICAgICAgYXJyb3dzaXplOiAxLjIsIGFycm93d2lkdGg6IDEuMiwgYXJyb3doZWFkOiA1LFxuICAgICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgICAgfSkpXG4gICAgICApO1xuXG4gICAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAgIC8vIOefouWNsOOCouODjuODhuODvOOCt+ODp+ODs++8izTosaHpmZDjg6njg5njg6vjgpLlkIjjgo/jgZvjgaboqK3lrppcbiAgICAgIHNldEFubm90YXRpb25zKFsuLi5wbG90QW5ub3RhdGlvbnMsIC4uLnF1YWRyYW50TGFiZWxzXSk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICB9KTtcbiAgfSwgW3NlYXJjaExpc3QsIGNvbXBhbnlMaXN0LCB0b3BpYywgc3Bhbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHZoJywgaGVpZ2h0OiAnMTAwdmgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC43NSknLCB6SW5kZXg6IDEwLCBmb250U2l6ZTogMTYsIGNvbG9yOiAnIzU1NScsXG4gICAgICAgIH19PlxuICAgICAgICAgIOiqreOBv+i+vOOBv+S4rS4uLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHhyZWY6ICdwYXBlcicsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgfSxcblxuICAgICAgICAgXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLmlrDopo/mgKdcIixcbiAgICAgICAgICAgIHJhbmdlOiBbLTAuMDUsIDEuMTVdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAsIDAuNSwgMV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6IDI1LFxuICAgICAgICAgICAgcmFuZ2U6IFswLjgsIDIuMTVdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzEsIDEuNSwgMl0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDQwLCBsOiA0NSwgcjogNTAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIydmhcIiwgd2lkdGg6IFwiMTAwdmhcIiwgaGVpZ2h0OiBcIjQ1dmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGVyc29uVG9waWM7XG4iLCIvLyBTaWRlYmFyLmpzeFxuaW1wb3J0IFJlYWN0ICx7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiwgQ29sLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5jb25zdCBTaWRlYmFyID0gKHsgb25BcHBseSwgdmlzdWFsVHlwZSwgb25WaXN1YWxUeXBlQ2hhbmdlLCB0b3BpY0xpc3QsIGNvbXBhbnlMaXN0LCBzZWxlY3RlZENvbXBhbmllcywgc2VsZWN0ZWRUb3BpY3MsIG9uQ2hhbmdlVG9waWMsIG9uQ2hhbmdlQ29tcGFueSwgc2VsZWN0ZWRTcGFuLCBvblNwYW5DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCBbaW5wdXRUeXBlLCBzZXRJbnB1dFR5cGVdID0gdXNlU3RhdGUoW1wicmFkaW9cIixcImNoZWNrYm94XCJdKTtcbiAgY29uc3QgW2NvbXBhbnlGaWx0ZXIsIHNldENvbXBhbnlGaWx0ZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgb25WaXN1YWxUeXBlQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlPT1cIm9uZS1jb21wXCIpe1xuICAgICAgICBzZXRJbnB1dFR5cGUoW1wiY2hlY2tib3hcIixcInJhZGlvXCJdKX1cbiAgICAgIGVsc2V7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pXG4gICAgICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coaW5wdXRUeXBlKTtcbiAgfTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuICBcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCBwYWRkaW5nOiAnMTBweCcsIGJhY2tncm91bmRDb2xvcjogJ2JnLWxpZ2h0JyB9fT5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHRleHQtZGFuZ2VyIGZvbnQtaXRhbGljXCIgc3R5bGU9e3sgaGVpZ2h0OiAnNSUnIH19PlxuICAgICAgICA8Q29sIHNtPXs2fT5cbiAgICAgICAgICA8aDUgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTAlJyB9fSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAg5Y+v6KaW5YyW5p2h5Lu2XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc209ezR9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlkPVwiYXBwbHlcIlxuICAgICAgICAgICAgb25DbGljaz17b25BcHBseX1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzE1JScgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYXJrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDlj6/oppbljJZcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgey8qIOaZgumWk+W5hemBuOaKnuODnOOCv+ODsyAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgbXktMiBweC0yXCI+XG4gICAgICAgIDxDb2wgeHM9ezEyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAgICAgICAgICAgIOaZgumWk+OCkumBuOaKnlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAge1t7dmFsdWU6JzEnLCBsYWJlbDonMeW5tCd9LCB7dmFsdWU6JzInLCBsYWJlbDonMuW5tCd9LCB7dmFsdWU6JzMnLCBsYWJlbDonM+W5tCd9XS5tYXAoKHt2YWx1ZSwgbGFiZWx9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TcGFuQ2hhbmdlKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc20gJHtzZWxlY3RlZFNwYW4gPT09IHZhbHVlID8gJ2J0bi1kYXJrJyA6ICdidG4tb3V0bGluZS1zZWNvbmRhcnknfWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEzcHgnLCBwYWRkaW5nOiAnMnB4IDEwcHgnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICB7LyogQWNjb3JkaW9uICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBcIiBzdHlsZT17eyBoZWlnaHQ6ICc4MCUnIH19PlxuICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgIHsvKiBWaXN1YWxpemF0aW9uIFR5cGUgKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMFwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj7lj6/oppbljJbjgr/jgqTjg5c8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBcIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Zpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIn0gLy8g44OH44OV44Kp44Or44OI44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXgtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID4x56S+44Gr5rOo55uuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIn0gLy8g44OH44OV44Kp44Or44OI44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19XG4gICAgICAgICAgICAgICAgICA+MeODiOODlOODg+OCr+OBq+azqOebrjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG4gICAgICAgICAgey8qIFRvcGljIFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIxXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlRvcGljPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICB7dG9waWNMaXN0Lm1hcCgodG9waWMpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dG9waWN9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVswXX0gXG4gICAgICAgICAgICAgICAgICAgIGlkID0ge3RvcGljfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFRvcGljcy5pbmNsdWRlcyh0b3BpYyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVRvcGljKHRvcGljLGlucHV0VHlwZVswXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3BpY1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RvcGljfT57SWR0b1RvcGljW3RvcGljXX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBDb21wYW55IFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIyXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkNvbXBhbnk8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuS8gealreWQjeOBp+e1nuOCiui+vOOBvy4uLlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21wYW55RmlsdGVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIG1iLTJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2NvbXBhbnlMaXN0XG4gICAgICAgICAgICAgICAgLmZpbHRlcihjb21wYW55ID0+IGNvbXBhbnkuaW5jbHVkZXMoY29tcGFueUZpbHRlcikpXG4gICAgICAgICAgICAgICAgLm1hcCgoY29tcGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb21wYW55fT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dFR5cGVbMV19XG4gICAgICAgICAgICAgICAgICAgIGlkPXtjb21wYW55fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENvbXBhbmllcy5pbmNsdWRlcyhjb21wYW55KX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlQ29tcGFueShjb21wYW55LCBpbnB1dFR5cGVbMV0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdjb21wYW55J1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtjb21wYW55fT57Y29tcGFueX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgUGxvdEJhckNoYXJ0QiA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIGNsaWNrZGF0YSwgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJGSeOBruWIhuW4g1wiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGNsaWNrZGF0YSB8fCB0b3BpY1swXSB8fCBcIjBcIjtcbiAgICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvYXBwX2RhdGEvdG9waWMke3RhcmdldElkfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS9vY2N1cHlfdG9waWNfOS5qc29uYDtcbiAgICAgICAgY29uc3QgZmlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9maV9zdWJjbGFzc19zcGxpdC5qc29uYDtcblxuICAgICAgICBjb25zdCBbb2NjdXB5SnNvbiwgZmlMaXN0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEocGF0aCksXG4gICAgICAgICAgZmV0Y2hEYXRhKGZpUGF0aCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICghb2NjdXB5SnNvbiB8fCAhb2NjdXB5SnNvbi5jb21wYW5pZXMgfHwgIW9jY3VweUpzb24uZmlfY29kZXMpIHtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZVN0cmluZyA9IChzdHIpID0+XG4gICAgICAgICAgdHlwZW9mIHN0ciA9PT0gXCJzdHJpbmdcIiA/IHN0ci5ub3JtYWxpemUoXCJORkNcIikudHJpbSgpIDogbnVsbDtcblxuICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW5pZXMgPSBvY2N1cHlKc29uLmNvbXBhbmllcy5tYXAobm9ybWFsaXplU3RyaW5nKTtcbiAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gc2FuaXRpemVkQ29tcGFuaWVzLmluZGV4T2Yobm9ybWFsaXplU3RyaW5nKGNvbXBhbnlbMF0pKTtcbiAgICAgICAgaWYgKGNvbXBhbnlJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke2NvbXBhbnlbMF19XCIgbm90IGZvdW5kLmApO1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5a++6LGh5LyB5qWt44Gu6KGM44Gu44G/5oq95Ye6XG4gICAgICAgIGNvbnN0IGZpVmFsdWVzID0ge307XG4gICAgICAgIG9jY3VweUpzb24uZGF0YS5mb3JFYWNoKCh7IHJvdywgY29sLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgaWYgKHJvdyA9PT0gY29tcGFueUluZGV4KSB7XG4gICAgICAgICAgICBmaVZhbHVlc1tvY2N1cHlKc29uLmZpX2NvZGVzW2NvbF1dID0gdmFsdWUgKiAxMDA7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gT2JqZWN0LmVudHJpZXMoZmlWYWx1ZXMpXG4gICAgICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoeyBjYXRlZ29yeToga2V5LCB2YWx1ZSwgc3VtbWFyaXplOiBmaUxpc3Rba2V5XSB9KSlcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnlbMF1944GuRknjga7liIbluINgKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIikge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBKU09OLnN0cmluZ2lmeShjbGlja2RhdGEpLCB1cGRhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHsgY29sb3I6IFwicm95YWxibHVlXCIgfSxcbiAgICAgICAgICAgIGN1c3RvbWRhdGE6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3VtbWFyaXplKS5yZXZlcnNlKCksXG4gICAgICAgICAgICBob3ZlcnRlbXBsYXRlOiBg6Kqs5piOOiAle2N1c3RvbWRhdGF9PGJyPiU6ICV7eDouMmZ9JSA8ZXh0cmE+PC9leHRyYT5gLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGlja3N1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDExLCBjb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImxpZ2h0eWVsbG93XCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90QmFyQ2hhcnRBID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgc3Bhbiwgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJGSeOBruWIhuW4g1wiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRvcGljWzBdO1xuICAgICAgICBjb25zdCBzcGFuSWQgPSBzcGFuIHx8IFwiMlwiO1xuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9hcHBfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3BlcnNvbmE9NS9zcGFuJHtzcGFuSWR9L29jY3VweV90b3BpY185Lmpzb25gO1xuICAgICAgICBjb25zdCBmaVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2ZpX3N1YmNsYXNzX3NwbGl0Lmpzb25gO1xuXG4gICAgICAgIGNvbnN0IFtvY2N1cHlKc29uLCBmaUxpc3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgICBmZXRjaERhdGEoZmlQYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgaWYgKCFvY2N1cHlKc29uIHx8ICFvY2N1cHlKc29uLmZpX2NvZGVzIHx8ICFvY2N1cHlKc29uLmRhdGEpIHJldHVybjtcblxuICAgICAgICAvLyBGSeOCs+ODvOODieWIpeOBq+WFqOS8gealreOBruWApOOCkuWQiOeul1xuICAgICAgICBjb25zdCBmaVN1bXMgPSB7fTtcbiAgICAgICAgb2NjdXB5SnNvbi5kYXRhLmZvckVhY2goKHsgY29sLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlDb2RlID0gb2NjdXB5SnNvbi5maV9jb2Rlc1tjb2xdO1xuICAgICAgICAgIGZpU3Vtc1tmaUNvZGVdID0gKGZpU3Vtc1tmaUNvZGVdIHx8IDApICsgdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRvdGFsID0gT2JqZWN0LnZhbHVlcyhmaVN1bXMpLnJlZHVjZSgocywgdikgPT4gcyArIHYsIDApO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gT2JqZWN0LmVudHJpZXMoZmlTdW1zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICBjYXRlZ29yeToga2V5LFxuICAgICAgICAgIHZhbHVlOiB0b3RhbCA+IDAgPyAodmFsdWUgLyB0b3RhbCkgKiAxMDAgOiAwLFxuICAgICAgICAgIHN1bW1hcml6ZTogZmlMaXN0W2tleV0sXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZm9ybWF0dGVkRGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYEZJ44Gu5YiG5biDYCk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiICYmICh1cGRhdGUgfHwgY2hhcnREYXRhLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgc3BhbiwgdXBkYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgeTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaFwiLFxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sXG4gICAgICAgICAgICBjdXN0b21kYXRhOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnN1bW1hcml6ZSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgaG92ZXJ0ZW1wbGF0ZTogYOiqrOaYjjogJXtjdXN0b21kYXRhfTxicj4lOiAle3g6LjJmfSUgPGV4dHJhPjwvZXh0cmE+YCxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpY2tzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkZJXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiAzNSwgbDogODAsIHI6IDUwIH0sXG4gICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAxMSwgY29sb3I6IFwiYmxhY2tcIiB9LFxuICAgICAgICAgICAgYmdjb2xvcjogXCJsaWdodHllbGxvd1wiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RCYXJDaGFydEE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteV9hcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWJvb3RzdHJhcF9lc21fQWNjb3JkaW9uX2pzLW5vZGVfbW9kdWxlc19yZWFjdC1ib290c3RyYXBfZXNtX0J1dHRvbi1iZTFiNDFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiU2lkZWJhciIsIkNvbnRlbnQiLCJBcHAiLCJhcnJvd0NvbG9yIiwiY29tcGFueUxpc3QiLCJ0b3BpY0xpc3QiLCJ2aXN1YWxUeXBlIiwic2V0VmlzdWFsVHlwZSIsImlzQXBwbGllZCIsInNldElzQXBwbGllZCIsInNlbGVjdGVkQ29tcGFuaWVzIiwic2V0U2VsZWN0ZWRDb21wYW5pZXMiLCJzZWxlY3RlZFRvcGljcyIsInNldFNlbGVjdGVkVG9waWNzIiwic2VsZWN0ZWRTcGFuIiwic2V0U2VsZWN0ZWRTcGFuIiwiaGFuZGxlVmlzdWFsVHlwZUNoYW5nZSIsInZhbHVlIiwiaGFuZGxlQXBwbHkiLCJ0b2dnbGVTZWxlY3Rpb24iLCJpdGVtIiwic2V0U2VsZWN0ZWQiLCJidXR0b210eXBlIiwicHJldlNlbGVjdGVkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpIiwiQ29tcGFueUNoZWNrYm94Q2hhbmdlIiwiY29tcGFueSIsIlRvcGljQ2hlY2tib3hDaGFuZ2UiLCJ0b3BpYyIsImhhbmRsZVNwYW5DaGFuZ2UiLCJyZXNldElzQXBwbGllZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImZsdWlkIiwiY2xhc3NOYW1lIiwibWQiLCJvbkFwcGx5Iiwib25WaXN1YWxUeXBlQ2hhbmdlIiwib25DaGFuZ2VUb3BpYyIsIm9uQ2hhbmdlQ29tcGFueSIsIm9uU3BhbkNoYW5nZSIsInN0eWxlIiwiaGVpZ2h0IiwicGxvdCIsInNwYW4iLCJyZXNldEFwcGx5IiwiQ2FyZCIsIlBsb3RQaWVBIiwiUGxvdFBpZUIiLCJQbG90UGVyc29uYUNvbXAiLCJQbG90UGVyc29uYVRvcGljIiwiUGxvdEJhckNoYXJ0QSIsIlBsb3RCYXJDaGFydEIiLCJnZXRDYXJkRGF0YSIsIkxvYWRpbmdPdmVybGF5IiwicG9zaXRpb24iLCJpbnNldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwiekluZGV4IiwiZm9udFNpemUiLCJjb2xvciIsInBvaW50ZXJFdmVudHMiLCJfcmVmIiwiY2xpY2tEYXRhIiwic2V0Q2xpY2tEYXRhIiwiaXNQaWVMb2FkaW5nIiwic2V0SXNQaWVMb2FkaW5nIiwiaXNCYXJMb2FkaW5nIiwic2V0SXNCYXJMb2FkaW5nIiwiaGFuZGxlUGllQ2hhcnRDbGljayIsImRhdGEiLCJjYXJkRGF0YSIsInNldENhcmREYXRhIiwiZmV0Y2hEYXRhIiwibWFyZ2luTGVmdCIsInVwZGF0ZSIsIm9uUmVuZGVyZWQiLCJsYXlvdXQiLCJ0aXRsZSIsIndpZHRoIiwiY29uZmlnIiwicmVzcG9uc2l2ZSIsIm9uQ2xpY2tEYXRhIiwiY2xpY2tkYXRhIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJ4cyIsImZsZXgiLCJCb2R5IiwiVGl0bGUiLCJsYWJlbCIsImRpcmVjdGlvbiIsInRvVXBwZXJDYXNlIiwiVGV4dCIsInZhbHVlcyIsImpvaW4iLCJjbGlja2VkVG9waWMiLCJ0YXJnZXRUb3BpYyIsIkFycmF5IiwiaXNBcnJheSIsInNwYW5JZCIsInRhcmdldENvbXBhbnkiLCJkYXRhUGF0aCIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJqc29uRGF0YSIsImpzb24iLCJjb21wYW55RW50cnkiLCJmaW5kIiwibGVuZ3RoIiwibm92ZWx0eV91cCIsIm5vdmVsdHlfZG93biIsImFkYXB0X3VwIiwiYWRhcHRfZG93biIsImVycm9yIiwiY29uc29sZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiU3RyaWN0TW9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VSZWYiLCJQbG90IiwiY29sb3JtYXAiLCJmZXRjaEpzb24iLCJ1cmwiLCJzdGF0dXMiLCJnZXRSb3dTdW1zIiwib2NjdXB5SnNvbiIsIm51bVJvd3MiLCJjb21wYW5pZXMiLCJzdW1zIiwiZmlsbCIsImZvckVhY2giLCJyb3ciLCJfcmVmMiIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsIklkdG9Ub3BpYyIsIlRvcGljdG9JZCIsImRhdGFDYWNoZSIsInRhcmdldFRvcGljcyIsIk51bWJlciIsImxvYWREYXRhIiwiYWxsVG9waWNzRGF0YSIsIlByb21pc2UiLCJhbGwiLCJ0YXJnZXRfaWQiLCJjYWNoZUtleSIsImN1cnJlbnQiLCJub3JtYWxpemVTdHJpbmciLCJzdHIiLCJub3JtYWxpemUiLCJ0cmltIiwic2FuaXRpemVkQ29tcGFuaWVzIiwic2FuaXRpemVkQ29tcGFueSIsImNvbXBhbnlJbmRleCIsImluZGV4T2YiLCJyb3dTdW1zIiwiZmlsdGVyZWREYXRhIiwidG90YWxWYWx1ZSIsInJlZHVjZSIsInN1bSIsIm5vcm1hbGl6ZWREYXRhIiwiY2F0ZWdvcnkiLCJzb3J0IiwiYSIsImIiLCJoYW5kbGVQbG90Q2xpY2siLCJldmVudCIsInBvaW50cyIsInRvcGljaWQiLCJyZXBsYWNlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidHlwZSIsImxhYmVscyIsIlN0cmluZyIsIm1hcmtlciIsImNvbG9ycyIsInNob3dsZWdlbmQiLCJwbG90X2JnY29sb3IiLCJwYXBlcl9iZ2NvbG9yIiwibWFyZ2luIiwidCIsImwiLCJyIiwib25DbGljayIsInNldFRpdGxlIiwibG9hZENoYXJ0RGF0YSIsInRpbWUiLCJ0YXJnZXRJZCIsImRhdGFVcmwiLCJyYXdEYXRhIiwic29ydGVkRGF0YSIsInNsaWNlIiwibG9hZENvbXBhbmllcyIsInRleHQiLCJzcGxpdCIsImxpbmUiLCJ0b0xpc3QiLCJsaW5lcyIsImFscGhhX2xpIiwicGFyc2VGbG9hdCIsImJldGFfbGkiLCJQbG90UGVyc29uQ29tcCIsImFycm93X2NvbG9yIiwicHJlcGFyZWREYXRhIiwic2V0UHJlcGFyZWREYXRhIiwiZmlnRGF0YSIsInNldEZpZ0RhdGEiLCJhbm5vdGF0aW9ucyIsInNldEFubm90YXRpb25zIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicXVhZHJhbnRMYWJlbHMiLCJ4IiwieSIsInhhbmNob3IiLCJ5YW5jaG9yIiwieHJlZiIsInlyZWYiLCJzaG93YXJyb3ciLCJmb250Iiwic2l6ZSIsImJnY29sb3IiLCJib3JkZXJwYWQiLCJwcmVwYXJlRGF0YSIsImFsbFByb21pc2VzIiwibG9nIiwiY29sdW1uUGF0aCIsImNvbXBhbnlEaWN0IiwiYWNjIiwiaWR4IiwibmV3U2VhcmNoTGlzdCIsImZpbHRlcmVkU2VhcmNoTGlzdCIsIm5vZGVfYWxwaGEiLCJmcm9tIiwibm9kZV9iZXRhIiwicHJvbWlzZXMiLCJfIiwiaiIsInAiLCJwYXJhbWV0ZXJQYXRoIiwiayIsInJlc3VsdHMiLCJjb21iaW5lZEFscGhhIiwiZmxhdE1hcCIsInJlc3VsdCIsImNvbWJpbmVkQmV0YSIsImNvbWJpbmVkU2VhcmNoTGlzdCIsImFscGhhIiwiYmV0YSIsInNlYXJjaExpc3QiLCJwbG90RGF0YSIsIm1vZGUiLCJ0ZXh0cG9zaXRpb24iLCJzeW1ib2wiLCJuYW1lIiwicGxvdEFubm90YXRpb25zIiwiYXhyZWYiLCJheXJlZiIsImF4IiwiYXkiLCJhcnJvd2NvbG9yIiwiYXJyb3dzaXplIiwiYXJyb3d3aWR0aCIsImFycm93aGVhZCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInhheGlzIiwicmFuZ2UiLCJsaW5lY29sb3IiLCJsaW5ld2lkdGgiLCJncmlkY29sb3IiLCJncmlkd2lkdGgiLCJncmlkZGFzaCIsInRpY2ttb2RlIiwidGlja3ZhbHMiLCJ0aWNrdGV4dCIsInplcm9saW5lIiwieWF4aXMiLCJ0aXRsZV9zdGFuZG9mZiIsImxlZ2VuZCIsImJvcmRlcmNvbG9yIiwiYm9yZGVyd2lkdGgiLCJQbG90UGVyc29uVG9waWMiLCJzZXRDb21wYW55TGlzdCIsInNldFNlYXJjaExpc3QiLCJ0aGVuIiwiX3JlZjMiLCJBY2NvcmRpb24iLCJCdXR0b24iLCJpbnB1dFR5cGUiLCJzZXRJbnB1dFR5cGUiLCJjb21wYW55RmlsdGVyIiwic2V0Q29tcGFueUZpbHRlciIsImhhbmRsZVJhZGlvQ2hhbmdlIiwidGFyZ2V0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInNtIiwid2hpdGVTcGFjZSIsInJvbGUiLCJkZWZhdWx0QWN0aXZlS2V5IiwiSXRlbSIsImV2ZW50S2V5IiwiSGVhZGVyIiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaHRtbEZvciIsInBsYWNlaG9sZGVyIiwiZSIsImNvbnRlbnRUeXBlIiwiaGVhZGVycyIsImdldCIsInBhdGgiLCJmaVBhdGgiLCJmaUxpc3QiLCJmaV9jb2RlcyIsIndhcm4iLCJmaVZhbHVlcyIsImNvbCIsIk9iamVjdCIsImVudHJpZXMiLCJzdW1tYXJpemUiLCJKU09OIiwic3RyaW5naWZ5IiwicmV2ZXJzZSIsIm9yaWVudGF0aW9uIiwiY3VzdG9tZGF0YSIsImhvdmVydGVtcGxhdGUiLCJtaXJyb3IiLCJ0aWNrc3VmZml4IiwiaG92ZXJsYWJlbCIsImFsaWduIiwiZmlTdW1zIiwiZmlDb2RlIiwidG90YWwiLCJzIiwidiIsImZvcm1hdHRlZERhdGEiXSwic291cmNlUm9vdCI6IiJ9