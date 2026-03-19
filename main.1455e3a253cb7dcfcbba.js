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
  const handleSelectAllCompanies = () => setSelectedCompanies([...companyList]);
  const handleDeselectAllCompanies = () => setSelectedCompanies([]);
  const handleSelectAllTopics = () => setSelectedTopics([...topicList]);
  const handleDeselectAllTopics = () => setSelectedTopics([]);
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
    onSpanChange: handleSpanChange,
    onSelectAllCompanies: handleSelectAllCompanies,
    onDeselectAllCompanies: handleDeselectAllCompanies,
    onSelectAllTopics: handleSelectAllTopics,
    onDeselectAllTopics: handleDeselectAllTopics
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

  // spanによってoccupy_topicのファイル名が異なる
  const getOccupyTopicFile = spanId => {
    const map = {
      '1': 'occupy_topic_20.json',
      '2': 'occupy_topic_9.json',
      '3': 'occupy_topic_6.json'
    };
    return map[String(spanId)] || 'occupy_topic_9.json';
  };
  const loadData = async () => {
    try {
      const spanId = span || "2";
      const occupyTopicFile = getOccupyTopicFile(spanId);
      const allTopicsData = await Promise.all(targetTopics.map(async target_id => {
        const cacheKey = `${target_id}-${spanId}-${company[0]}`;
        if (!dataCache.current[cacheKey]) {
          const url = `${"/my-app"}/data/app_data/topic${target_id}/persona=5/span${spanId}/${occupyTopicFile}`;
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
          const columnPath = `${"/my-app"}/param/patent/topic=${target_id}/company`;
          const companies = await loadCompanies(columnPath);

          // NFC正規化で確実にマッチング
          const normalize = s => typeof s === 'string' ? s.normalize('NFC').trim() : '';
          const normalizedCompanies = companies.map(normalize);
          const companyDict = normalizedCompanies.reduce((acc, value, idx) => {
            acc[value] = idx;
            return acc;
          }, {});
          const newSearchList = Array.isArray(company) ? company : [company];
          const filteredSearchList = newSearchList.filter(value => normalize(value) in companyDict);

          // span別に存在するファイル数を決定
          const spanId = span || "2";
          const spanToMaxP = {
            '1': 20,
            '2': 9,
            '3': 6
          };
          const maxP = spanToMaxP[String(spanId)] ?? 9;
          const numPoints = maxP + 1;
          const node_alpha = Array.from({
            length: filteredSearchList.length
          }, () => Array(numPoints).fill(0));
          const node_beta = Array.from({
            length: filteredSearchList.length
          }, () => Array(numPoints).fill(0));
          const promises = Array.from({
            length: numPoints
          }, (_, p) => p).map(async p => {
            const parameterPath = `${"/my-app"}/param/patent/topic=${target_id}/span=${spanId}/test_optimize_${p}`;
            const {
              alpha_li,
              beta_li
            } = await toList(parameterPath);
            filteredSearchList.forEach((k, j) => {
              const idx = normalizedCompanies.indexOf(normalize(k));
              if (idx !== -1) {
                node_alpha[j][p] = alpha_li[idx];
                node_beta[j][p] = beta_li[idx];
              }
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
    const plotData = preparedData.searchList.map((k, j) => {
      const n = preparedData.alpha[j].length;
      return {
        x: preparedData.alpha[j],
        y: preparedData.beta[j],
        mode: "lines+markers",
        marker: {
          symbol: preparedData.alpha[j].map((_, i) => i === 0 ? 'square' : i === n - 1 ? 'star' : 'circle'),
          color: colormap[IdtoTopic[topic[j % topic.length]]],
          size: preparedData.alpha[j].map((_, i) => i === 0 || i === n - 1 ? 9 : 5)
        },
        name: IdtoTopic[topic[j % topic.length]]
      };
    });

    // 全時点間に矢印を描画
    const plotAnnotations = preparedData.searchList.flatMap((k, j) => Array(preparedData.alpha[j].length - 1).fill(0).map((_, i) => ({
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
      const columnPath = `${"/my-app"}/param/patent/topic=${target_id}/company`;
      loadCompanies(columnPath).then(data => {
        setCompanyList(data);
        setTitle(`業界内での企業の立ち位置`);
      });
    }
  }, [visualType, topic]);

  // 検索対象のフィルタリング
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (companyList.length > 0) {
      // NFC正規化とtrimで確実にマッチング
      const normalize = s => typeof s === 'string' ? s.normalize('NFC').trim() : '';
      const companyDict = companyList.reduce((acc, value, idx) => {
        acc[normalize(value)] = idx;
        return acc;
      }, {});
      const newSearchList = Array.isArray(company) ? company : [company];
      const matched = newSearchList.filter(value => normalize(value) in companyDict);
      setSearchList(matched);
      // マッチしなかった場合もisLoadingを解除
      if (matched.length === 0) setIsLoading(false);
    }
  }, [companyList, company]);

  // データの描画（searchList・span が変わったら自動で再描画）
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (searchList.length === 0 || !topic) return;
    const target_id = topic;
    // span別に存在するファイル数を決定
    const spanId = span || "2";
    const spanToMaxP = {
      '1': 20,
      '2': 9,
      '3': 6
    };
    const maxP = spanToMaxP[String(spanId)] ?? 9;
    const numPoints = maxP + 1;
    const node_alpha = Array.from({
      length: searchList.length
    }, () => Array(numPoints).fill(0));
    const node_beta = Array.from({
      length: searchList.length
    }, () => Array(numPoints).fill(0));
    const normalize = s => typeof s === 'string' ? s.normalize('NFC').trim() : '';
    const normalizedCompanyList = companyList.map(normalize);
    const promises = Array.from({
      length: numPoints
    }, (_, p) => p).map(p => {
      const parameterPath = `${"/my-app"}/param/patent/topic=${target_id}/span=${spanId}/test_optimize_${p}`;
      return toList(parameterPath).then(_ref3 => {
        let {
          alpha_li,
          beta_li
        } = _ref3;
        searchList.forEach((k, j) => {
          const idx = normalizedCompanyList.indexOf(normalize(k));
          if (idx !== -1) {
            node_alpha[j][p] = alpha_li[idx];
            node_beta[j][p] = beta_li[idx];
          }
        });
      });
    });
    Promise.all(promises).then(() => {
      const plotData = searchList.map((k, j) => {
        const n = node_alpha[j].length;
        return {
          x: node_alpha[j],
          y: node_beta[j],
          mode: "lines+markers",
          marker: {
            symbol: node_alpha[j].map((_, i) => i === 0 ? 'square' : i === n - 1 ? 'star' : 'circle'),
            color: colormap[k],
            size: node_alpha[j].map((_, i) => i === 0 || i === n - 1 ? 9 : 5)
          },
          name: k
        };
      });

      // 全時点間に矢印を描画
      const plotAnnotations = searchList.flatMap((k, j) => Array(node_alpha[j].length - 1).fill(0).map((_, i) => ({
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
    onSpanChange,
    onSelectAllCompanies,
    onDeselectAllCompanies,
    onSelectAllTopics,
    onDeselectAllTopics
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Header, null, "Topic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, visualType === "one-comp" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex gap-2 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-secondary",
    style: {
      fontSize: '12px',
      padding: '2px 8px'
    },
    onClick: onSelectAllTopics
  }, "\u5168\u9078\u629E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-secondary",
    style: {
      fontSize: '12px',
      padding: '2px 8px'
    },
    onClick: onDeselectAllTopics
  }, "\u5168\u89E3\u9664")), topicList.map(topic => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Header, null, "Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, visualType === "one-topic" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex gap-2 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-secondary",
    style: {
      fontSize: '12px',
      padding: '2px 8px'
    },
    onClick: onSelectAllCompanies
  }, "\u5168\u9078\u629E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-secondary",
    style: {
      fontSize: '12px',
      padding: '2px 8px'
    },
    onClick: onDeselectAllCompanies
  }, "\u5168\u89E3\u9664")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
        const occupyTopicMap = {
          '1': 'occupy_topic_20.json',
          '2': 'occupy_topic_9.json',
          '3': 'occupy_topic_6.json'
        };
        const occupyTopicFile = occupyTopicMap[String(spanId)] || 'occupy_topic_9.json';
        const path = `${"/my-app"}/data/app_data/topic${targetId}/persona=5/span${spanId}/${occupyTopicFile}`;
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
        const occupyTopicMap = {
          '1': 'occupy_topic_20.json',
          '2': 'occupy_topic_9.json',
          '3': 'occupy_topic_6.json'
        };
        const occupyTopicFile = occupyTopicMap[String(spanId)] || 'occupy_topic_9.json';
        const path = `${"/my-app"}/data/app_data/topic${targetId}/persona=5/span${spanId}/${occupyTopicFile}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNDU1ZTNhMjUzY2I3ZGNmY2JiYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRztBQUNsQjtBQUNBO0FBRXBDLE1BQU1RLEdBQUcsR0FBR0EsQ0FBQSxLQUFNO0VBQ2hCLE1BQU1DLFVBQVUsR0FBRyxDQUNqQixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUNyRCxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUN0RDtFQUNELE1BQU1DLFdBQVcsR0FBRyxDQUNsQixVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQzdDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQzVDLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FDN0M7RUFDRCxNQUFNQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7RUFFckUsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHWiwrQ0FBUSxDQUFDLFdBQVcsQ0FBQztFQUN6RCxNQUFNLENBQUNhLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdkLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0VBQzdDLE1BQU0sQ0FBQ2UsaUJBQWlCLEVBQUVDLG9CQUFvQixDQUFDLEdBQUdoQiwrQ0FBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDdkUsTUFBTSxDQUFDaUIsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHbEIsK0NBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQzNELE1BQU0sQ0FBQ21CLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUdwQiwrQ0FBUSxDQUFDLEdBQUcsQ0FBQztFQUVyRCxNQUFNcUIsc0JBQXNCLEdBQUlDLEtBQUssSUFBSztJQUN4Q1YsYUFBYSxDQUFDVSxLQUFLLENBQUM7RUFDdEIsQ0FBQztFQUVELE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3hCVCxZQUFZLENBQUMsQ0FBQyxDQUFDO0VBQ2pCLENBQUM7RUFFRCxNQUFNVSxlQUFlLEdBQUdBLENBQUNDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEtBQUs7SUFDekQsSUFBSUEsVUFBVSxLQUFLLFVBQVUsRUFBRTtNQUM3QkQsV0FBVyxDQUFFRSxZQUFZLElBQ3ZCQSxZQUFZLENBQUNDLFFBQVEsQ0FBQ0osSUFBSSxDQUFDLEdBQ3ZCRyxZQUFZLENBQUNFLE1BQU0sQ0FBRUMsQ0FBQyxJQUFLQSxDQUFDLEtBQUtOLElBQUksQ0FBQyxHQUN0QyxDQUFDLEdBQUdHLFlBQVksRUFBRUgsSUFBSSxDQUM1QixDQUFDO0lBQ0gsQ0FBQyxNQUFNO01BQ0xDLFdBQVcsQ0FBQyxDQUFDRCxJQUFJLENBQUMsQ0FBQztJQUNyQjtFQUNGLENBQUM7RUFFRCxNQUFNTyxxQkFBcUIsR0FBR0EsQ0FBQ0MsT0FBTyxFQUFFTixVQUFVLEtBQUs7SUFDckRILGVBQWUsQ0FBQ1MsT0FBTyxFQUFFakIsb0JBQW9CLEVBQUVXLFVBQVUsQ0FBQztFQUM1RCxDQUFDO0VBRUQsTUFBTU8sbUJBQW1CLEdBQUdBLENBQUNDLEtBQUssRUFBRVIsVUFBVSxLQUFLO0lBQ2pESCxlQUFlLENBQUNXLEtBQUssRUFBRWpCLGlCQUFpQixFQUFFUyxVQUFVLENBQUM7RUFDdkQsQ0FBQztFQUVELE1BQU1TLGdCQUFnQixHQUFJZCxLQUFLLElBQUs7SUFDbENGLGVBQWUsQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hCLENBQUM7RUFFRCxNQUFNZSx3QkFBd0IsR0FBR0EsQ0FBQSxLQUFNckIsb0JBQW9CLENBQUMsQ0FBQyxHQUFHUCxXQUFXLENBQUMsQ0FBQztFQUM3RSxNQUFNNkIsMEJBQTBCLEdBQUdBLENBQUEsS0FBTXRCLG9CQUFvQixDQUFDLEVBQUUsQ0FBQztFQUNqRSxNQUFNdUIscUJBQXFCLEdBQUdBLENBQUEsS0FBTXJCLGlCQUFpQixDQUFDLENBQUMsR0FBR1IsU0FBUyxDQUFDLENBQUM7RUFDckUsTUFBTThCLHVCQUF1QixHQUFHQSxDQUFBLEtBQU10QixpQkFBaUIsQ0FBQyxFQUFFLENBQUM7RUFFM0RqQixnREFBUyxDQUFDLE1BQU07SUFDZGUsb0JBQW9CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQ0UsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUMxQixDQUFDLEVBQUUsQ0FBQ1AsVUFBVSxDQUFDLENBQUM7RUFFaEIsTUFBTThCLGNBQWMsR0FBR0EsQ0FBQSxLQUFNO0lBQzNCM0IsWUFBWSxDQUFDLENBQUMsQ0FBQztFQUNqQixDQUFDO0VBRUQsb0JBQ0VmLDBEQUFBLENBQUNHLHVEQUFTO0lBQUN5QyxFQUFFLEVBQUMsZUFBZTtJQUFDQyxLQUFLO0lBQUNDLFNBQVMsRUFBQztFQUFVLGdCQUN0RDlDLDBEQUFBLENBQUNJLHVEQUFHLHFCQUVGSiwwREFBQSxDQUFDSyx1REFBRztJQUFDMEMsRUFBRSxFQUFFLENBQUU7SUFBQ0QsU0FBUyxFQUFDO0VBQVksZ0JBQ2hDOUMsMERBQUEsQ0FBQ00sb0RBQU87SUFDTjBDLE9BQU8sRUFBRXhCLFdBQVk7SUFDckJaLFVBQVUsRUFBRUEsVUFBVztJQUN2QnFDLGtCQUFrQixFQUFFM0Isc0JBQXVCO0lBQzNDWCxTQUFTLEVBQUVBLFNBQVU7SUFDckJELFdBQVcsRUFBRUEsV0FBWTtJQUN6Qk0saUJBQWlCLEVBQUVBLGlCQUFrQjtJQUNyQ0UsY0FBYyxFQUFFQSxjQUFlO0lBQy9CZ0MsYUFBYSxFQUFFZixtQkFBb0I7SUFDbkNnQixlQUFlLEVBQUVsQixxQkFBc0I7SUFDdkNiLFlBQVksRUFBRUEsWUFBYTtJQUMzQmdDLFlBQVksRUFBRWYsZ0JBQWlCO0lBQy9CZ0Isb0JBQW9CLEVBQUVmLHdCQUF5QjtJQUMvQ2dCLHNCQUFzQixFQUFFZiwwQkFBMkI7SUFDbkRnQixpQkFBaUIsRUFBRWYscUJBQXNCO0lBQ3pDZ0IsbUJBQW1CLEVBQUVmO0VBQXdCLENBQzlDLENBQ0UsQ0FBQyxlQUdOekMsMERBQUEsQ0FBQ0ssdURBQUc7SUFBQzBDLEVBQUUsRUFBRSxDQUFFO0lBQUNELFNBQVMsRUFBQyxZQUFZO0lBQUNXLEtBQUssRUFBRTtNQUFFQyxNQUFNLEVBQUU7SUFBUTtFQUFFLGdCQUM1RDFELDBEQUFBLENBQUNPLG9EQUFPO0lBQ05vRCxJQUFJLEVBQUU3QyxTQUFVO0lBQ2hCRixVQUFVLEVBQUVBLFVBQVc7SUFDdkJ3QixLQUFLLEVBQUVsQixjQUFlO0lBQ3RCZ0IsT0FBTyxFQUFFbEIsaUJBQWtCO0lBQzNCNEMsSUFBSSxFQUFFeEMsWUFBYTtJQUNuQlQsU0FBUyxFQUFFQSxTQUFVO0lBQ3JCa0QsVUFBVSxFQUFFbkI7RUFBZSxDQUM1QixDQUNFLENBQ0YsQ0FDSSxDQUFDO0FBRWhCLENBQUM7QUFFRCxpRUFBZWxDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHK0I7QUFDVztBQUN4QjtBQUNRO0FBQ0s7QUFDRTtBQUVMO0FBQ0Q7QUFDRyxDQUFDOztBQU1qRDtBQUNBLE1BQU04RCxjQUFjLEdBQUdBLENBQUEsa0JBQ3JCdEUsMERBQUE7RUFBS3lELEtBQUssRUFBRTtJQUNWYyxRQUFRLEVBQUUsVUFBVTtJQUFFQyxLQUFLLEVBQUUsQ0FBQztJQUM5QkMsT0FBTyxFQUFFLE1BQU07SUFBRUMsVUFBVSxFQUFFLFFBQVE7SUFBRUMsY0FBYyxFQUFFLFFBQVE7SUFDL0RDLFVBQVUsRUFBRSx3QkFBd0I7SUFBRUMsTUFBTSxFQUFFLEVBQUU7SUFBRUMsUUFBUSxFQUFFLEVBQUU7SUFBRUMsS0FBSyxFQUFFLE1BQU07SUFDN0VDLGFBQWEsRUFBRTtFQUNqQjtBQUFFLEdBQUMsbUNBRUUsQ0FDTjtBQUVELE1BQU16RSxPQUFPLEdBQUcwRSxJQUFBLElBQStEO0VBQUEsSUFBOUQ7SUFBQ3RCLElBQUk7SUFBQy9DLFVBQVU7SUFBQ3dCLEtBQUs7SUFBQ0YsT0FBTztJQUFDMEIsSUFBSTtJQUFDakQsU0FBUztJQUFDa0Q7RUFBVSxDQUFDLEdBQUFvQixJQUFBO0VBRXRFLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR2xGLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBQ2hELE1BQU0sQ0FBQ21GLFlBQVksRUFBR0MsZUFBZSxDQUFDLEdBQUlwRiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztFQUN6RCxNQUFNLENBQUNxRixZQUFZLEVBQUdDLGVBQWUsQ0FBQyxHQUFJdEYsK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFFekQsTUFBTXVGLG1CQUFtQixHQUFJQyxJQUFJLElBQUs7SUFDcENOLFlBQVksQ0FBQ00sSUFBSSxDQUFDO0VBQ3BCLENBQUM7O0VBRUQ7RUFDQXZGLGdEQUFTLENBQUMsTUFBTTtJQUNkaUYsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNsQkUsZUFBZSxDQUFDLElBQUksQ0FBQztJQUNyQkUsZUFBZSxDQUFDLElBQUksQ0FBQztFQUN2QixDQUFDLEVBQUUsQ0FBQ3JELE9BQU8sRUFBRUUsS0FBSyxFQUFFd0IsSUFBSSxFQUFFaEQsVUFBVSxDQUFDLENBQUM7O0VBRXRDO0VBQ0FWLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUl5RCxJQUFJLEtBQUssQ0FBQyxFQUFFO01BQ2QwQixlQUFlLENBQUMsSUFBSSxDQUFDO01BQ3JCRSxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQ3ZCO0VBQ0YsQ0FBQyxFQUFFLENBQUM1QixJQUFJLENBQUMsQ0FBQzs7RUFFVjtFQUNBekQsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSWdGLFNBQVMsS0FBSyxJQUFJLEVBQUVLLGVBQWUsQ0FBQyxJQUFJLENBQUM7RUFDL0MsQ0FBQyxFQUFFLENBQUNMLFNBQVMsQ0FBQyxDQUFDO0VBRWYsTUFBTSxDQUFDUSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHMUYsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFFNUNDLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU0wRixTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO01BQzVCLE1BQU1ILElBQUksR0FBRyxNQUFNcEIsNkRBQVcsQ0FBQ1YsSUFBSSxFQUFFL0MsVUFBVSxFQUFFd0IsS0FBSyxFQUFFRixPQUFPLEVBQUUwQixJQUFJLEVBQUVzQixTQUFTLENBQUM7TUFDakZTLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDREcsU0FBUyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsQ0FBQ2pDLElBQUksRUFBRS9DLFVBQVUsRUFBRXdCLEtBQUssRUFBRUYsT0FBTyxFQUFFMEIsSUFBSSxFQUFFc0IsU0FBUyxDQUFDLENBQUM7RUFHekQsb0JBRUVsRiwwREFBQSxDQUFDRyx1REFBUztJQUFDMEMsS0FBSztJQUFDQyxTQUFTLEVBQUMsVUFBVTtJQUFDVyxLQUFLLEVBQUU7TUFBRUMsTUFBTSxFQUFFO0lBQVE7RUFBRSxnQkFFL0QxRCwwREFBQSxDQUFDSSx1REFBRztJQUFDcUQsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFPO0VBQUUsZ0JBRTdCMUQsMERBQUEsQ0FBQ0ssd0RBQUc7SUFBQzBDLEVBQUUsRUFBRSxFQUFHO0lBQUNVLEtBQUssRUFBRTtNQUFFb0MsVUFBVSxFQUFFO0lBQUs7RUFBRSxHQUd2Q2pGLFVBQVUsS0FBSyxXQUFXLGdCQUN4QlosMERBQUEsQ0FBQ2tFLDBEQUFnQjtJQUNmNEIsTUFBTSxFQUFFbkMsSUFBSztJQUNiL0MsVUFBVSxFQUFFQSxVQUFXO0lBQ3ZCd0IsS0FBSyxFQUFFQSxLQUFNO0lBQ2JGLE9BQU8sRUFBRUEsT0FBUTtJQUNqQjBCLElBQUksRUFBRUEsSUFBSztJQUNYbUMsVUFBVSxFQUFFbEMsVUFBVztJQUN2Qm1DLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUUsVUFBVTtNQUNqQkMsS0FBSyxFQUFFLE1BQU07TUFDYnhDLE1BQU0sRUFBRTtJQUNWLENBQUU7SUFDRnlDLE1BQU0sRUFBRTtNQUFFQyxVQUFVLEVBQUU7SUFBSyxDQUFFLENBQUM7SUFBQTtJQUM5QjNDLEtBQUssRUFBRTtNQUFFeUMsS0FBSyxFQUFFLE1BQU07TUFBRXhDLE1BQU0sRUFBRTtJQUFPLENBQUUsQ0FBQztJQUFBO0lBQzFDWixTQUFTLEVBQUM7RUFBVSxDQUNyQixDQUFDLEdBQ0FsQyxVQUFVLEtBQUssVUFBVSxnQkFDM0JaLDBEQUFBLENBQUNpRSx5REFBZTtJQUNkNkIsTUFBTSxFQUFFbkMsSUFBSztJQUNiL0MsVUFBVSxFQUFFQSxVQUFXO0lBQ3ZCd0IsS0FBSyxFQUFFQSxLQUFNO0lBQ2JGLE9BQU8sRUFBRUEsT0FBUTtJQUNqQjBCLElBQUksRUFBRUEsSUFBSztJQUNYbUMsVUFBVSxFQUFFbEMsVUFBVztJQUN2Qm1DLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUUsVUFBVTtNQUNqQkMsS0FBSyxFQUFFLE1BQU07TUFDYnhDLE1BQU0sRUFBRTtJQUNWLENBQUU7SUFDRnlDLE1BQU0sRUFBRTtNQUFFQyxVQUFVLEVBQUU7SUFBSyxDQUFFLENBQUM7SUFBQTtJQUM5QjNDLEtBQUssRUFBRTtNQUFFeUMsS0FBSyxFQUFFLE1BQU07TUFBRXhDLE1BQU0sRUFBRTtJQUFPLENBQUUsQ0FBQztJQUFBO0lBQzFDWixTQUFTLEVBQUM7RUFBVSxDQUNyQixDQUFDLGdCQUVGOUMsMERBQUEsY0FBSywwRUFBaUIsQ0FHckIsQ0FDTixDQUFDLGVBR0ZBLDBEQUFBLENBQUNJLHVEQUFHO0lBQUNxRCxLQUFLLEVBQUU7TUFBRUMsTUFBTSxFQUFFO0lBQU87RUFBRSxnQkFDN0IxRCwwREFBQSxDQUFDSyx3REFBRztJQUFDMEMsRUFBRSxFQUFFLENBQUU7SUFBQ1UsS0FBSyxFQUFFO01BQUVjLFFBQVEsRUFBRTtJQUFXO0VBQUUsR0FDekNhLFlBQVksaUJBQUlwRiwwREFBQSxDQUFDc0UsY0FBYyxNQUFFLENBQUMsRUFFbkMxRCxVQUFVLEtBQUssV0FBVyxnQkFDeEJaLDBEQUFBLENBQUMrRCxtREFBUTtJQUNQK0IsTUFBTSxFQUFFbkMsSUFBSztJQUNiL0MsVUFBVSxFQUFFQSxVQUFXO0lBQ3ZCd0IsS0FBSyxFQUFFQSxLQUFNO0lBQ2JGLE9BQU8sRUFBRUEsT0FBUTtJQUNqQjBCLElBQUksRUFBRUEsSUFBSztJQUNYbUMsVUFBVSxFQUFFQSxDQUFBLEtBQU07TUFBRVYsZUFBZSxDQUFDLEtBQUssQ0FBQztNQUFFeEIsVUFBVSxDQUFDLENBQUM7SUFBRSxDQUFFO0lBQzVEbUMsTUFBTSxFQUFFO01BQUVDLEtBQUssRUFBRSxnQkFBZ0I7TUFBRUMsS0FBSyxFQUFFLE1BQU07TUFBRXhDLE1BQU0sRUFBRTtJQUFNLENBQUU7SUFDbEVaLFNBQVMsRUFBQztFQUFVLENBQ3JCLENBQUMsR0FDQWxDLFVBQVUsS0FBSyxVQUFVLGdCQUMzQlosMERBQUEsQ0FBQ2dFLDJEQUFRO0lBQ1A4QixNQUFNLEVBQUVuQyxJQUFLO0lBQ2IvQyxVQUFVLEVBQUVBLFVBQVc7SUFDdkJ3QixLQUFLLEVBQUVBLEtBQU07SUFDYkYsT0FBTyxFQUFFQSxPQUFRO0lBQ2pCMEIsSUFBSSxFQUFFQSxJQUFLO0lBQ1hqRCxTQUFTLEVBQUVBLFNBQVU7SUFDckJvRixVQUFVLEVBQUVBLENBQUEsS0FBTTtNQUFFVixlQUFlLENBQUMsS0FBSyxDQUFDO01BQUV4QixVQUFVLENBQUMsQ0FBQztJQUFFLENBQUU7SUFDNUR3QyxXQUFXLEVBQUViLG1CQUFvQjtJQUNqQ1EsTUFBTSxFQUFFO01BQUVDLEtBQUssRUFBRSxnQkFBZ0I7TUFBRUMsS0FBSyxFQUFFLE1BQU07TUFBRXhDLE1BQU0sRUFBRTtJQUFNLENBQUU7SUFDbEVaLFNBQVMsRUFBQztFQUFVLENBQ3JCLENBQUMsZ0JBRUY5QywwREFBQSxjQUFLLDBFQUFpQixDQUdyQixDQUFDLGVBQ05BLDBEQUFBLENBQUNLLHdEQUFHO0lBQUMwQyxFQUFFLEVBQUUsQ0FBRTtJQUFDVSxLQUFLLEVBQUU7TUFBRWMsUUFBUSxFQUFFO0lBQVc7RUFBRSxHQUN6Q2UsWUFBWSxpQkFBSXRGLDBEQUFBLENBQUNzRSxjQUFjLE1BQUUsQ0FBQyxFQUVuQzFELFVBQVUsS0FBSyxXQUFXLGdCQUMxQlosMERBQUEsQ0FBQ21FLHdEQUFhO0lBQ1YyQixNQUFNLEVBQUVuQyxJQUFLO0lBQ2IvQyxVQUFVLEVBQUVBLFVBQVc7SUFDdkJ3QixLQUFLLEVBQUVBLEtBQU07SUFDYndCLElBQUksRUFBRUEsSUFBSztJQUNYbUMsVUFBVSxFQUFFQSxDQUFBLEtBQU1SLGVBQWUsQ0FBQyxLQUFLLENBQUU7SUFDM0NTLE1BQU0sRUFBRTtNQUFFQyxLQUFLLEVBQUUsT0FBTztNQUFFQyxLQUFLLEVBQUUsTUFBTTtNQUFFeEMsTUFBTSxFQUFFO0lBQU0sQ0FBRTtJQUN6RFosU0FBUyxFQUFDO0VBQVUsQ0FDckIsQ0FBQyxnQkFDRjlDLDBEQUFBLENBQUNvRSx1REFBYTtJQUNWMEIsTUFBTSxFQUFFbkMsSUFBSztJQUNiL0MsVUFBVSxFQUFFQSxVQUFXO0lBQ3ZCd0IsS0FBSyxFQUFFQSxLQUFNO0lBQ2JGLE9BQU8sRUFBRUEsT0FBUTtJQUNqQjBCLElBQUksRUFBRUEsSUFBSztJQUNYMEMsU0FBUyxFQUFFcEIsU0FBVTtJQUNyQmEsVUFBVSxFQUFFQSxDQUFBLEtBQU1SLGVBQWUsQ0FBQyxLQUFLLENBQUU7SUFDM0NTLE1BQU0sRUFBRTtNQUFFQyxLQUFLLEVBQUUsT0FBTztNQUFFQyxLQUFLLEVBQUUsTUFBTTtNQUFFeEMsTUFBTSxFQUFFO0lBQU0sQ0FBRTtJQUN6RFosU0FBUyxFQUFDO0VBQVUsQ0FDckIsQ0FDRSxDQUNGLENBQUMsZUFDTjlDLDBEQUFBLENBQUNJLHVEQUFHO0lBQUMwQyxTQUFTLEVBQUM7RUFBTyxHQUNyQjRDLFFBQVEsQ0FBQ2EsR0FBRyxDQUFDLENBQUM3RSxJQUFJLEVBQUU4RSxLQUFLLGtCQUN4QnhHLDBEQUFBLENBQUNLLHdEQUFHO0lBQ0ZvRyxHQUFHLEVBQUVELEtBQU07SUFDWEUsRUFBRSxFQUFFLEVBQUcsQ0FBQztJQUFBO0lBQ1I1RCxTQUFTLEVBQUMsa0RBQWtEO0lBQzVEVyxLQUFLLEVBQUU7TUFBRWtELElBQUksRUFBRTtJQUFXO0VBQUUsZ0JBRTVCM0csMERBQUEsQ0FBQzhELHdEQUFJO0lBQUNoQixTQUFTLEVBQUM7RUFBVyxnQkFDekI5QywwREFBQSxDQUFDOEQsd0RBQUksQ0FBQzhDLElBQUk7SUFBQzlELFNBQVMsRUFBQztFQUE4RCxnQkFDakY5QywwREFBQSxDQUFDOEQsd0RBQUksQ0FBQytDLEtBQUs7SUFBQy9ELFNBQVMsRUFBQztFQUF5QixHQUM1Q3BCLElBQUksQ0FBQ29GLEtBQUssSUFBSXBGLElBQUksQ0FBQ3FGLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLENBQ2hDLENBQUMsZUFDYmhILDBEQUFBLENBQUM4RCx3REFBSSxDQUFDbUQsSUFBSTtJQUFDbkUsU0FBUyxFQUFDO0VBQXlCLEdBQzNDcEIsSUFBSSxDQUFDd0YsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUNiLENBQ0YsQ0FDUCxDQUNILENBQ04sQ0FDRSxDQUNNLENBQUM7QUFFaEIsQ0FBQztBQUVELGlFQUFlNUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUMzTXRCO0FBQ0E7QUFDQTtBQUNPLE1BQU04RCxXQUFXLEdBQUcsTUFBQUEsQ0FBT1YsSUFBSSxFQUFFL0MsVUFBVSxFQUFFd0IsS0FBSyxFQUFFRixPQUFPLEVBQUUwQixJQUFJLEVBQUV3RCxZQUFZLEtBQUs7RUFDekYsSUFBSTtJQUNGLElBQUl4RyxVQUFVLEtBQUssVUFBVSxFQUFFLE9BQU8sRUFBRTs7SUFFeEM7SUFDQSxNQUFNeUcsV0FBVyxHQUFHekcsVUFBVSxLQUFLLFVBQVUsR0FDeEN3RyxZQUFZLEdBQUlFLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSCxZQUFZLENBQUMsR0FBR0EsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxZQUFZLEdBQUtFLEtBQUssQ0FBQ0MsT0FBTyxDQUFDbkYsS0FBSyxDQUFDLEdBQUdBLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR0EsS0FBTSxHQUN6SGtGLEtBQUssQ0FBQ0MsT0FBTyxDQUFDbkYsS0FBSyxDQUFDLEdBQUdBLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR0EsS0FBTTtJQUM3QyxNQUFNb0YsTUFBTSxHQUFHNUQsSUFBSSxJQUFJLEdBQUc7SUFDMUIsTUFBTTZELGFBQWEsR0FBR0gsS0FBSyxDQUFDQyxPQUFPLENBQUNyRixPQUFPLENBQUMsR0FBR0EsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFJQSxPQUFPLElBQUksU0FBVTtJQUVsRixNQUFNd0YsUUFBUSxHQUFHLEdBQUdDLFNBQXNCLHVCQUF1Qk4sV0FBVyxrQkFBa0JHLE1BQU0sa0JBQWtCO0lBRXRILE1BQU1NLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLFFBQVEsQ0FBQztJQUN0QyxJQUFJLENBQUNJLFFBQVEsQ0FBQ0UsRUFBRSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUVsRCxNQUFNQyxRQUFRLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxJQUFJLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUNiLEtBQUssQ0FBQ0MsT0FBTyxDQUFDVyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUU7O0lBRXZDO0lBQ0EsSUFBSUUsWUFBWSxHQUFHRixRQUFRLENBQUNHLElBQUksQ0FBQzNHLElBQUksSUFBSUEsSUFBSSxDQUFDUSxPQUFPLEtBQUt1RixhQUFhLENBQUM7SUFDeEUsSUFBSSxDQUFDVyxZQUFZLElBQUlGLFFBQVEsQ0FBQ0ksTUFBTSxHQUFHLENBQUMsRUFBRTtNQUN4Q0YsWUFBWSxHQUFHRixRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVCO0lBQ0EsSUFBSSxDQUFDRSxZQUFZLEVBQUUsT0FBTyxFQUFFO0lBRTVCLE9BQU8sQ0FDTDtNQUFFckIsU0FBUyxFQUFFLFlBQVk7TUFBSUQsS0FBSyxFQUFFLE1BQU07TUFBRUksTUFBTSxFQUFFa0IsWUFBWSxDQUFDRyxVQUFVLElBQU07SUFBRyxDQUFDLEVBQ3JGO01BQUV4QixTQUFTLEVBQUUsY0FBYztNQUFFRCxLQUFLLEVBQUUsTUFBTTtNQUFFSSxNQUFNLEVBQUVrQixZQUFZLENBQUNJLFlBQVksSUFBSTtJQUFHLENBQUMsRUFDckY7TUFBRXpCLFNBQVMsRUFBRSxVQUFVO01BQU1ELEtBQUssRUFBRSxNQUFNO01BQUVJLE1BQU0sRUFBRWtCLFlBQVksQ0FBQ0ssUUFBUSxJQUFRO0lBQUcsQ0FBQyxFQUNyRjtNQUFFMUIsU0FBUyxFQUFFLFlBQVk7TUFBSUQsS0FBSyxFQUFFLE1BQU07TUFBRUksTUFBTSxFQUFFa0IsWUFBWSxDQUFDTSxVQUFVLElBQU07SUFBRyxDQUFDLENBQ3RGO0VBQ0gsQ0FBQyxDQUFDLE9BQU9DLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxrQkFBa0IsRUFBRUEsS0FBSyxDQUFDO0lBQ3hDLE9BQU8sRUFBRTtFQUNYO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkN5QjtBQUNPO0FBQ0w7QUFFNUJFLDZDQUFlLGNBQ2I3SSwwREFBQSxDQUFDQSx5REFBZ0IscUJBQ2ZBLDBEQUFBLENBQUNRLGdEQUFHLE1BQUUsQ0FDVSxDQUFDLEVBQ25Cd0ksUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUNoQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1QwRDtBQUN4QjtBQUVuQyxNQUFNRyxRQUFRLEdBQUc7RUFBQyxVQUFVLEVBQUMsa0JBQWtCO0VBQUUsTUFBTSxFQUFDLG1CQUFtQjtFQUFFLFFBQVEsRUFBQyxtQkFBbUI7RUFDdkcsTUFBTSxFQUFDLG1CQUFtQjtFQUFFLFFBQVEsRUFBQyxtQkFBbUI7RUFBRSxPQUFPLEVBQUMsbUJBQW1CO0VBQ3JGLE9BQU8sRUFBQyxtQkFBbUI7RUFBQyxRQUFRLEVBQUMsbUJBQW1CO0VBQUUsTUFBTSxFQUFDO0FBQ25FLENBQUM7QUFFRCxNQUFNQyxTQUFTLEdBQUcsTUFBT0MsR0FBRyxJQUFLO0VBQy9CLElBQUk7SUFDRixNQUFNeEIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ3VCLEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUN4QixRQUFRLENBQUNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyx1QkFBdUJILFFBQVEsQ0FBQ3lCLE1BQU0sRUFBRSxDQUFDO0lBQzNFLE9BQU8sTUFBTXpCLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7RUFDOUIsQ0FBQyxDQUFDLE9BQU9RLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxjQUFjLEVBQUVBLEtBQUssQ0FBQztJQUNwQyxPQUFPLElBQUk7RUFDYjtBQUNGLENBQUM7O0FBRUQ7QUFDQSxNQUFNYSxVQUFVLEdBQUlDLFVBQVUsSUFBSztFQUNqQyxNQUFNQyxPQUFPLEdBQUdELFVBQVUsQ0FBQ0UsU0FBUyxDQUFDckIsTUFBTTtFQUMzQyxNQUFNc0IsSUFBSSxHQUFHdEMsS0FBSyxDQUFDb0MsT0FBTyxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDbkNKLFVBQVUsQ0FBQ2hFLElBQUksQ0FBQ3FFLE9BQU8sQ0FBQzdFLElBQUEsSUFBb0I7SUFBQSxJQUFuQjtNQUFFOEUsR0FBRztNQUFFeEk7SUFBTSxDQUFDLEdBQUEwRCxJQUFBO0lBQ3JDMkUsSUFBSSxDQUFDRyxHQUFHLENBQUMsSUFBSXhJLEtBQUs7RUFDcEIsQ0FBQyxDQUFDO0VBQ0YsT0FBT3FJLElBQUk7QUFDYixDQUFDO0FBRUQsTUFBTTVGLFFBQVEsR0FBR2dHLEtBQUEsSUFBc0Y7RUFBQSxJQUFyRjtJQUFFbEUsTUFBTTtJQUFFbEYsVUFBVTtJQUFFd0IsS0FBSztJQUFFRixPQUFPO0lBQUUwQixJQUFJO0lBQUVqRCxTQUFTO0lBQUVvRixVQUFVO0lBQUVNO0VBQVksQ0FBQyxHQUFBMkQsS0FBQTtFQUNoRyxNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdqSywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUU5QyxNQUFNa0ssU0FBUyxHQUFHO0lBQUMsR0FBRyxFQUFDLFVBQVU7SUFBQyxHQUFHLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQyxRQUFRO0lBQ3ZELEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFBQyxHQUFHLEVBQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQy9DLEdBQUcsRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQztFQUFRLENBQUM7RUFFcEQsTUFBTUMsU0FBUyxHQUFHO0lBQUMsVUFBVSxFQUFDLEdBQUc7SUFBQyxNQUFNLEVBQUMsR0FBRztJQUFDLFFBQVEsRUFBQyxHQUFHO0lBQ3ZELE1BQU0sRUFBQyxHQUFHO0lBQUMsUUFBUSxFQUFDLEdBQUc7SUFBQyxPQUFPLEVBQUMsR0FBRztJQUFDLE9BQU8sRUFBQyxHQUFHO0lBQy9DLFFBQVEsRUFBQyxHQUFHO0lBQUMsTUFBTSxFQUFDLElBQUk7SUFBQyxNQUFNLEVBQUMsSUFBSTtJQUFDLFFBQVEsRUFBQztFQUFHLENBQUM7RUFFcEQsTUFBTUMsU0FBUyxHQUFHbkIsNkNBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFNUI7RUFDQSxNQUFNb0IsWUFBWSxHQUFJM0osU0FBUyxJQUFJQSxTQUFTLENBQUMySCxNQUFNLEdBQUcsQ0FBQyxHQUNuRDNILFNBQVMsQ0FBQzRGLEdBQUcsQ0FBQ2dFLE1BQU0sQ0FBQyxHQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOztFQUVoQztFQUNBLE1BQU1DLGtCQUFrQixHQUFJaEQsTUFBTSxJQUFLO0lBQ3JDLE1BQU1qQixHQUFHLEdBQUc7TUFBRSxHQUFHLEVBQUUsc0JBQXNCO01BQUUsR0FBRyxFQUFFLHFCQUFxQjtNQUFFLEdBQUcsRUFBRTtJQUFzQixDQUFDO0lBQ25HLE9BQU9BLEdBQUcsQ0FBQ2tFLE1BQU0sQ0FBQ2pELE1BQU0sQ0FBQyxDQUFDLElBQUkscUJBQXFCO0VBQ3JELENBQUM7RUFFRCxNQUFNa0QsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBWTtJQUMzQixJQUFJO01BQ0YsTUFBTWxELE1BQU0sR0FBRzVELElBQUksSUFBSSxHQUFHO01BQzFCLE1BQU0rRyxlQUFlLEdBQUdILGtCQUFrQixDQUFDaEQsTUFBTSxDQUFDO01BQ2xELE1BQU1vRCxhQUFhLEdBQUcsTUFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQ3JDUixZQUFZLENBQUMvRCxHQUFHLENBQUMsTUFBT3dFLFNBQVMsSUFBSztRQUNwQyxNQUFNQyxRQUFRLEdBQUcsR0FBR0QsU0FBUyxJQUFJdkQsTUFBTSxJQUFJdEYsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3ZELElBQUksQ0FBQ21JLFNBQVMsQ0FBQ1ksT0FBTyxDQUFDRCxRQUFRLENBQUMsRUFBRTtVQUNoQyxNQUFNMUIsR0FBRyxHQUFHLEdBQUczQixTQUFzQix1QkFBdUJvRCxTQUFTLGtCQUFrQnZELE1BQU0sSUFBSW1ELGVBQWUsRUFBRTtVQUNsSE4sU0FBUyxDQUFDWSxPQUFPLENBQUNELFFBQVEsQ0FBQyxHQUFHLE1BQU0zQixTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUNwRDtRQUVBLE1BQU1HLFVBQVUsR0FBR1ksU0FBUyxDQUFDWSxPQUFPLENBQUNELFFBQVEsQ0FBQztRQUM5QyxJQUFJLENBQUN2QixVQUFVLElBQUksQ0FBQ0EsVUFBVSxDQUFDRSxTQUFTLEVBQUUsT0FBTyxJQUFJO1FBRXJELE1BQU11QixlQUFlLEdBQUlDLEdBQUcsSUFDMUIsT0FBT0EsR0FBRyxLQUFLLFFBQVEsR0FBR0EsR0FBRyxDQUFDQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSTtRQUU5RCxNQUFNQyxrQkFBa0IsR0FBRzdCLFVBQVUsQ0FBQ0UsU0FBUyxDQUFDcEQsR0FBRyxDQUFDMkUsZUFBZSxDQUFDO1FBQ3BFLE1BQU1LLGdCQUFnQixHQUFHTCxlQUFlLENBQUNoSixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEQsTUFBTXNKLFlBQVksR0FBR0Ysa0JBQWtCLENBQUNHLE9BQU8sQ0FBQ0YsZ0JBQWdCLENBQUM7UUFDakUsSUFBSUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSTtRQUVwQyxNQUFNRSxPQUFPLEdBQUdsQyxVQUFVLENBQUNDLFVBQVUsQ0FBQztRQUN0QyxPQUFPO1VBQUVySCxLQUFLLEVBQUUySSxTQUFTO1VBQUV4SixLQUFLLEVBQUVtSyxPQUFPLENBQUNGLFlBQVk7UUFBRSxDQUFDO01BQzNELENBQUMsQ0FDSCxDQUFDO01BRUQsTUFBTUcsWUFBWSxHQUFHZixhQUFhLENBQUM3SSxNQUFNLENBQUUwRCxJQUFJLElBQUtBLElBQUksS0FBSyxJQUFJLENBQUM7TUFDbEUsTUFBTW1HLFVBQVUsR0FBR0QsWUFBWSxDQUFDRSxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFcEssSUFBSSxLQUFLb0ssR0FBRyxHQUFHcEssSUFBSSxDQUFDSCxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQzFFLElBQUlxSyxVQUFVLEtBQUssQ0FBQyxFQUFFO1FBQ3BCMUIsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUNoQjtNQUNGO01BRUEsTUFBTTZCLGNBQWMsR0FBR0osWUFBWSxDQUNoQ3BGLEdBQUcsQ0FBQzdFLElBQUksS0FBSztRQUFFc0ssUUFBUSxFQUFFdEssSUFBSSxDQUFDVSxLQUFLO1FBQUViLEtBQUssRUFBRUcsSUFBSSxDQUFDSCxLQUFLLEdBQUdxSztNQUFXLENBQUMsQ0FBQyxDQUFDLENBQ3ZFSyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtBLENBQUMsQ0FBQzVLLEtBQUssR0FBRzJLLENBQUMsQ0FBQzNLLEtBQUssQ0FBQztNQUVwQzJJLFlBQVksQ0FBQzZCLGNBQWMsQ0FBQztNQUM1QixJQUFJaEcsVUFBVSxFQUFFQSxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsT0FBTzRDLEtBQUssRUFBRTtNQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxhQUFhLEVBQUVBLEtBQUssQ0FBQztJQUNyQztFQUNGLENBQUM7RUFFRHpJLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUlVLFVBQVUsS0FBSyxVQUFVLEVBQUU7TUFDN0I4SixRQUFRLENBQUMsQ0FBQztJQUNaO0VBQ0YsQ0FBQyxFQUFFLENBQUM1RSxNQUFNLEVBQUVsRixVQUFVLEVBQUVnRCxJQUFJLEVBQUUxQixPQUFPLEVBQUV2QixTQUFTLENBQUMsQ0FBQztFQUVsRCxNQUFNeUwsZUFBZSxHQUFJQyxLQUFLLElBQUs7SUFDakMsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLElBQUlELEtBQUssQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ25DLE1BQU1oRyxTQUFTLEdBQUcrRixLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ3hGLEtBQUssQ0FBQyxDQUFDO01BQ3pDLE1BQU1BLEtBQUssR0FBR3NELFNBQVMsQ0FBQzlELFNBQVMsQ0FBQztNQUNsQyxNQUFNaUcsT0FBTyxHQUFHekYsS0FBSyxDQUFDMEYsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7TUFDM0NuRyxXQUFXLENBQUMsQ0FBQ2tHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQjtFQUNGLENBQUM7RUFFRCxvQkFDRXZNLDBEQUFBO0lBQUt5RCxLQUFLLEVBQUU7TUFBQ2dKLFNBQVMsRUFBQyxJQUFJO01BQUNDLFlBQVksRUFBQyxJQUFJO01BQUV4RyxLQUFLLEVBQUUsTUFBTTtNQUFFeEMsTUFBTSxFQUFFO0lBQU07RUFBRSxnQkFDNUUxRCwwREFBQSxDQUFDbUosdURBQUk7SUFDSDFELElBQUksRUFBRSxDQUNKO01BQ0VrSCxJQUFJLEVBQUUsS0FBSztNQUNYekYsTUFBTSxFQUFFK0MsU0FBUyxDQUFDMUQsR0FBRyxDQUFDN0UsSUFBSSxJQUFJQSxJQUFJLENBQUNILEtBQUssQ0FBQztNQUN6Q3FMLE1BQU0sRUFBRTNDLFNBQVMsQ0FBQzFELEdBQUcsQ0FBQzdFLElBQUksSUFBS3lJLFNBQVMsQ0FBQ00sTUFBTSxDQUFDL0ksSUFBSSxDQUFDc0ssUUFBUSxDQUFDLENBQUMsQ0FBQztNQUNoRWpGLFNBQVMsRUFBRSxXQUFXO01BQ3RCOEYsTUFBTSxFQUFFO1FBQ05DLE1BQU0sRUFBRTdDLFNBQVMsQ0FBQzFELEdBQUcsQ0FBRTdFLElBQUksSUFBSzBILFFBQVEsQ0FBQ2UsU0FBUyxDQUFDTSxNQUFNLENBQUMvSSxJQUFJLENBQUNzSyxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQzVFO0lBQ0YsQ0FBQyxDQUNEO0lBQ0ZoRyxNQUFNLEVBQUU7TUFDTkMsS0FBSyxFQUFFLEdBQUcvRCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxlQUFlO01BQ3pDNkssVUFBVSxFQUFFLElBQUk7TUFDaEJDLFlBQVksRUFBRSxPQUFPO01BQ3JCQyxhQUFhLEVBQUUsT0FBTztNQUN0QkMsTUFBTSxFQUFFO1FBQUVDLENBQUMsRUFBRSxFQUFFO1FBQUVoQixDQUFDLEVBQUUsQ0FBQztRQUFFaUIsQ0FBQyxFQUFFLEVBQUU7UUFBRUMsQ0FBQyxFQUFFO01BQUc7SUFDdEMsQ0FBRTtJQUNGNUosS0FBSyxFQUFFO01BQUV5QyxLQUFLLEVBQUUsTUFBTTtNQUFFeEMsTUFBTSxFQUFFO0lBQU8sQ0FBRSxDQUFDO0lBQUE7SUFDMUM0SixPQUFPLEVBQUVsQixlQUFnQixDQUFDO0VBQUEsQ0FDM0IsQ0FFRSxDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlcEksUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSjRCO0FBQ2hCO0FBRW5DLE1BQU00QixTQUFTLEdBQUcsTUFBTzBELEdBQUcsSUFBSztFQUMvQixJQUFJO0lBQ0YsTUFBTXhCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUN1QixHQUFHLENBQUM7SUFDakMsSUFBSSxDQUFDeEIsUUFBUSxDQUFDRSxFQUFFLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMsdUJBQXVCSCxRQUFRLENBQUN5QixNQUFNLEVBQUUsQ0FBQztJQUMzRSxPQUFPLE1BQU16QixRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDO0VBQzlCLENBQUMsQ0FBQyxPQUFPUSxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDO0FBRUQsTUFBTTVFLFFBQVEsR0FBR2tCLElBQUEsSUFBcUQ7RUFBQSxJQUFwRDtJQUFFYSxNQUFNO0lBQUVsRixVQUFVO0lBQUV3QixLQUFLO0lBQUV3QixJQUFJO0lBQUVtQztFQUFXLENBQUMsR0FBQWQsSUFBQTtFQUMvRCxNQUFNLENBQUNnRixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHakssK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDOUMsTUFBTSxDQUFDZ0csS0FBSyxFQUFFc0gsUUFBUSxDQUFDLEdBQUd0TiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUN0QyxNQUFNa0ssU0FBUyxHQUFHO0lBQUMsR0FBRyxFQUFDLFVBQVU7SUFBQyxHQUFHLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQyxRQUFRO0lBQ3ZELEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFBQyxHQUFHLEVBQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQy9DLEdBQUcsRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQztFQUFRLENBQUM7RUFFcEQsTUFBTWYsUUFBUSxHQUFHO0lBQUMsVUFBVSxFQUFDLGtCQUFrQjtJQUFFLFNBQVMsRUFBQyxtQkFBbUI7SUFBRSxVQUFVLEVBQUMsbUJBQW1CO0lBQzFHLFVBQVUsRUFBQyxtQkFBbUI7SUFBRSxXQUFXLEVBQUMsbUJBQW1CO0lBQUUsaUJBQWlCLEVBQUMsbUJBQW1CO0lBQ3RHLFlBQVksRUFBQyxtQkFBbUI7SUFBQyxVQUFVLEVBQUMsbUJBQW1CO0lBQUUsU0FBUyxFQUFDLG1CQUFtQjtJQUM5RixVQUFVLEVBQUMsbUJBQW1CO0lBQUUsU0FBUyxFQUFDO0VBQW9CLENBQUM7RUFFbkVsSixnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNc04sYUFBYSxHQUFHLE1BQUFBLENBQUEsS0FBWTtNQUNoQyxJQUFJO1FBQ0YsTUFBTUMsSUFBSSxHQUFHLENBQUM7UUFDZCxNQUFNQyxRQUFRLEdBQUd0TCxLQUFLLElBQUksR0FBRztRQUM3QixNQUFNb0YsTUFBTSxHQUFHNUQsSUFBSSxJQUFJLEdBQUc7UUFDMUIsTUFBTStKLE9BQU8sR0FBRyxHQUFHaEcsU0FBc0IsdUJBQXVCK0YsUUFBUSxrQkFBa0JsRyxNQUFNLGdCQUFnQmlHLElBQUksT0FBTzs7UUFFM0g7UUFDQSxNQUFNRyxPQUFPLEdBQUcsTUFBTWhJLFNBQVMsQ0FBQytILE9BQU8sQ0FBQztRQUN4QyxJQUFJLENBQUNyRyxLQUFLLENBQUNDLE9BQU8sQ0FBQ3FHLE9BQU8sQ0FBQyxFQUFFO1FBRTdCLE1BQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUN2QjdMLE1BQU0sQ0FBQ0wsSUFBSSxJQUFJQSxJQUFJLENBQUNILEtBQUssS0FBSyxJQUFJLENBQUMsQ0FDbkMwSyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtBLENBQUMsQ0FBQzVLLEtBQUssR0FBRzJLLENBQUMsQ0FBQzNLLEtBQUssQ0FBQyxDQUNqQ3VNLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ1p2SCxHQUFHLENBQUM3RSxJQUFJLEtBQUs7VUFBRW9GLEtBQUssRUFBRXBGLElBQUksQ0FBQ1EsT0FBTztVQUFFWCxLQUFLLEVBQUVHLElBQUksQ0FBQ0g7UUFBTSxDQUFDLENBQUMsQ0FBQztRQUU1RDJJLFlBQVksQ0FBQzJELFVBQVUsQ0FBQztRQUN4Qk4sUUFBUSxDQUFDLEdBQUdwRCxTQUFTLENBQUN1RCxRQUFRLENBQUMsY0FBYyxDQUFDO1FBQzlDLElBQUkzSCxVQUFVLEVBQUVBLFVBQVUsQ0FBQyxDQUFDO01BQzlCLENBQUMsQ0FBQyxPQUFPNEMsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGtCQUFrQixFQUFFQSxLQUFLLENBQUM7TUFDMUM7SUFDRixDQUFDO0lBRUQsSUFBSS9ILFVBQVUsS0FBSyxXQUFXLEVBQUU7TUFDOUI0TSxhQUFhLENBQUMsQ0FBQztJQUNqQjtFQUNGLENBQUMsRUFBRSxDQUFDMUgsTUFBTSxFQUFFbEYsVUFBVSxFQUFFd0IsS0FBSyxFQUFFd0IsSUFBSSxFQUFFbUMsVUFBVSxDQUFDLENBQUM7RUFFakQsb0JBQ0UvRiwwREFBQTtJQUFLeUQsS0FBSyxFQUFFO01BQUNnSixTQUFTLEVBQUMsSUFBSTtNQUFDQyxZQUFZLEVBQUMsSUFBSTtNQUFFeEcsS0FBSyxFQUFFLE1BQU07TUFBRXhDLE1BQU0sRUFBRTtJQUFNO0VBQUUsZ0JBQzVFMUQsMERBQUEsQ0FBQ21KLHVEQUFJO0lBQ0gxRCxJQUFJLEVBQUUsQ0FDSjtNQUNFa0gsSUFBSSxFQUFFLEtBQUs7TUFDWHpGLE1BQU0sRUFBRStDLFNBQVMsQ0FBQzFELEdBQUcsQ0FBRTdFLElBQUksSUFBS0EsSUFBSSxDQUFDSCxLQUFLLENBQUM7TUFDM0NxTCxNQUFNLEVBQUUzQyxTQUFTLENBQUMxRCxHQUFHLENBQUU3RSxJQUFJLElBQUtBLElBQUksQ0FBQ29GLEtBQUssQ0FBQztNQUMzQ0MsU0FBUyxFQUFFLFdBQVc7TUFDdEI4RixNQUFNLEVBQUU7UUFDTkMsTUFBTSxFQUFFN0MsU0FBUyxDQUFDMUQsR0FBRyxDQUFFN0UsSUFBSSxJQUFLMEgsUUFBUSxDQUFDMUgsSUFBSSxDQUFDb0YsS0FBSyxDQUFDO01BQ3REO0lBQ0YsQ0FBQyxDQUNEO0lBQ0ZkLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUVBLEtBQUs7TUFDWjhHLFVBQVUsRUFBRSxJQUFJO01BQ2hCQyxZQUFZLEVBQUUsT0FBTztNQUNyQkMsYUFBYSxFQUFFLE9BQU87TUFDdEJDLE1BQU0sRUFBRTtRQUFFQyxDQUFDLEVBQUUsRUFBRTtRQUFFaEIsQ0FBQyxFQUFFLENBQUM7UUFBRWlCLENBQUMsRUFBRSxFQUFFO1FBQUVDLENBQUMsRUFBRTtNQUFHO0lBQ3RDLENBQUU7SUFFRjVKLEtBQUssRUFBRTtNQUFFeUMsS0FBSyxFQUFFLE1BQU07TUFBRXhDLE1BQU0sRUFBRTtJQUFPLENBQUUsQ0FBQztFQUFBLENBQzNDLENBQ0UsQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZUssUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRjRCO0FBQ2hCOztBQUtuQztBQUNBLE1BQU1nSyxhQUFhLEdBQUcsTUFBT3JHLFFBQVEsSUFBSztFQUN4QyxJQUFJO0lBQ0YsTUFBTUksUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsUUFBUSxDQUFDO0lBQ3RDLE1BQU1zRyxJQUFJLEdBQUcsTUFBTWxHLFFBQVEsQ0FBQ2tHLElBQUksQ0FBQyxDQUFDO0lBQ2xDLE9BQU9BLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDbE0sTUFBTSxDQUFFbU0sSUFBSSxJQUFLQSxJQUFJLENBQUM3QyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztFQUM5RCxDQUFDLENBQUMsT0FBTzFDLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxjQUFjLEVBQUVBLEtBQUssQ0FBQztJQUNwQyxPQUFPLEVBQUU7RUFDWDtBQUNGLENBQUM7QUFFRCxNQUFNd0YsTUFBTSxHQUFHLE1BQU96RyxRQUFRLElBQUs7RUFDakMsSUFBSTtJQUNGLE1BQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLFFBQVEsQ0FBQztJQUN0QyxNQUFNc0csSUFBSSxHQUFHLE1BQU1sRyxRQUFRLENBQUNrRyxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNSSxLQUFLLEdBQUdKLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDbE0sTUFBTSxDQUFDbU0sSUFBSSxJQUFJQSxJQUFJLENBQUM3QyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVqRSxNQUFNZ0QsUUFBUSxHQUFHRCxLQUFLLENBQUM3SCxHQUFHLENBQUMySCxJQUFJLElBQUlJLFVBQVUsQ0FBQ0osSUFBSSxDQUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxNQUFNTSxPQUFPLEdBQUdILEtBQUssQ0FBQzdILEdBQUcsQ0FBQzJILElBQUksSUFBSUksVUFBVSxDQUFDSixJQUFJLENBQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpFLE9BQU87TUFBRUksUUFBUTtNQUFFRTtJQUFRLENBQUM7RUFDOUIsQ0FBQyxDQUFDLE9BQU81RixLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTztNQUFFMEYsUUFBUSxFQUFFLEVBQUU7TUFBRUUsT0FBTyxFQUFFO0lBQUcsQ0FBQztFQUN0QztBQUNGLENBQUM7QUFFRCxNQUFNQyxjQUFjLEdBQUd2SixJQUFBLElBQThEO0VBQUEsSUFBN0Q7SUFBRWEsTUFBTTtJQUFFbEYsVUFBVTtJQUFFd0IsS0FBSztJQUFFRixPQUFPO0lBQUUwQixJQUFJO0lBQUVtQztFQUFXLENBQUMsR0FBQWQsSUFBQTtFQUNoRixNQUFNa0YsU0FBUyxHQUFHO0lBQUMsR0FBRyxFQUFDLFVBQVU7SUFBQyxHQUFHLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQyxRQUFRO0lBQ2pELEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFBQyxHQUFHLEVBQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQy9DLEdBQUcsRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDO0VBQU0sQ0FBQztFQUVqQyxNQUFNZixRQUFRLEdBQUc7SUFBQyxVQUFVLEVBQUMsa0JBQWtCO0lBQUUsTUFBTSxFQUFDLG1CQUFtQjtJQUFFLFFBQVEsRUFBQyxtQkFBbUI7SUFDL0YsTUFBTSxFQUFDLG1CQUFtQjtJQUFFLFFBQVEsRUFBQyxtQkFBbUI7SUFBRSxPQUFPLEVBQUMsbUJBQW1CO0lBQ3JGLE9BQU8sRUFBQyxtQkFBbUI7SUFBQyxRQUFRLEVBQUMsbUJBQW1CO0lBQUUsTUFBTSxFQUFDO0VBQ25FLENBQUM7RUFFUCxNQUFNcUYsV0FBVyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztFQUUzRSxNQUFNLENBQUNDLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUcxTywrQ0FBUSxDQUFDLElBQUksQ0FBQztFQUN0RCxNQUFNLENBQUMyTyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHNU8sK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDMUMsTUFBTSxDQUFDNk8sV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBRzlPLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2xELE1BQU0sQ0FBQ2dHLEtBQUssRUFBRXNILFFBQVEsQ0FBQyxHQUFHdE4sK0NBQVEsQ0FBQyxTQUFTLENBQUM7RUFDN0MsTUFBTSxDQUFDK08sU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR2hQLCtDQUFRLENBQUMsS0FBSyxDQUFDOztFQUVqRDtFQUNBO0VBQ0EsTUFBTWlQLGNBQWMsR0FBRyxDQUNyQjtJQUFFQyxDQUFDLEVBQUUsSUFBSTtJQUFFQyxDQUFDLEVBQUUsSUFBSTtJQUFFcEIsSUFBSSxFQUFFLHNCQUFzQjtJQUFJcUIsT0FBTyxFQUFFLE1BQU07SUFBR0MsT0FBTyxFQUFFO0VBQVMsQ0FBQyxFQUN6RjtJQUFFSCxDQUFDLEVBQUUsSUFBSTtJQUFFQyxDQUFDLEVBQUUsSUFBSTtJQUFFcEIsSUFBSSxFQUFFLHNCQUFzQjtJQUFJcUIsT0FBTyxFQUFFLE9BQU87SUFBRUMsT0FBTyxFQUFFO0VBQVMsQ0FBQyxFQUN6RjtJQUFFSCxDQUFDLEVBQUUsSUFBSTtJQUFFQyxDQUFDLEVBQUUsSUFBSTtJQUFFcEIsSUFBSSxFQUFFLG1CQUFtQjtJQUFVcUIsT0FBTyxFQUFFLE1BQU07SUFBR0MsT0FBTyxFQUFFO0VBQVMsQ0FBQyxFQUM1RjtJQUFFSCxDQUFDLEVBQUUsSUFBSTtJQUFFQyxDQUFDLEVBQUUsSUFBSTtJQUFFcEIsSUFBSSxFQUFFLG1CQUFtQjtJQUFVcUIsT0FBTyxFQUFFLE9BQU87SUFBRUMsT0FBTyxFQUFFO0VBQVMsQ0FBQyxDQUM3RixDQUFDL0ksR0FBRyxDQUFDeUQsS0FBQTtJQUFBLElBQUM7TUFBRW1GLENBQUM7TUFBRUMsQ0FBQztNQUFFcEIsSUFBSTtNQUFFcUIsT0FBTztNQUFFQztJQUFRLENBQUMsR0FBQXRGLEtBQUE7SUFBQSxPQUFNO01BQzNDdUYsSUFBSSxFQUFFLE9BQU87TUFBRUMsSUFBSSxFQUFFLE9BQU87TUFBRUwsQ0FBQztNQUFFQyxDQUFDO01BQUVwQixJQUFJO01BQUVxQixPQUFPO01BQUVDLE9BQU87TUFDMURHLFNBQVMsRUFBRSxLQUFLO01BQ2hCQyxJQUFJLEVBQUU7UUFBRUMsSUFBSSxFQUFFLENBQUM7UUFBRTVLLEtBQUssRUFBRTtNQUFPLENBQUM7TUFDaEM2SyxPQUFPLEVBQUUsdUJBQXVCO01BQ2hDQyxTQUFTLEVBQUU7SUFDYixDQUFDO0VBQUEsQ0FBQyxDQUFDO0VBRUgzUCxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNNFAsV0FBVyxHQUFHLE1BQUFBLENBQUEsS0FBWTtNQUM5QmIsWUFBWSxDQUFDLElBQUksQ0FBQztNQUNsQixJQUFJO1FBQ0YsTUFBTWMsV0FBVyxHQUFHLENBQUMzTixLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRW1FLEdBQUcsQ0FBQyxNQUFPd0UsU0FBUyxJQUFLO1VBQ3RFbkMsT0FBTyxDQUFDb0gsR0FBRyxDQUFDLE9BQU8sRUFBQ2pGLFNBQVMsQ0FBQztVQUNoQyxNQUFNa0YsVUFBVSxHQUFHLEdBQUd0SSxTQUFzQix1QkFBdUJvRCxTQUFTLFVBQVU7VUFDdEYsTUFBTXBCLFNBQVMsR0FBRyxNQUFNb0UsYUFBYSxDQUFDa0MsVUFBVSxDQUFDOztVQUVqRDtVQUNBLE1BQU03RSxTQUFTLEdBQUk4RSxDQUFDLElBQUssT0FBT0EsQ0FBQyxLQUFLLFFBQVEsR0FBR0EsQ0FBQyxDQUFDOUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7VUFDL0UsTUFBTThFLG1CQUFtQixHQUFHeEcsU0FBUyxDQUFDcEQsR0FBRyxDQUFDNkUsU0FBUyxDQUFDO1VBQ3BELE1BQU1nRixXQUFXLEdBQUdELG1CQUFtQixDQUFDdEUsTUFBTSxDQUFDLENBQUN3RSxHQUFHLEVBQUU5TyxLQUFLLEVBQUUrTyxHQUFHLEtBQUs7WUFDbEVELEdBQUcsQ0FBQzlPLEtBQUssQ0FBQyxHQUFHK08sR0FBRztZQUNoQixPQUFPRCxHQUFHO1VBQ1osQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1VBRU4sTUFBTUUsYUFBYSxHQUFHakosS0FBSyxDQUFDQyxPQUFPLENBQUNyRixPQUFPLENBQUMsR0FBR0EsT0FBTyxHQUFHLENBQUNBLE9BQU8sQ0FBQztVQUNsRSxNQUFNc08sa0JBQWtCLEdBQUdELGFBQWEsQ0FBQ3hPLE1BQU0sQ0FBQ1IsS0FBSyxJQUFJNkosU0FBUyxDQUFDN0osS0FBSyxDQUFDLElBQUk2TyxXQUFXLENBQUM7O1VBRXpGO1VBQ0EsTUFBTTVJLE1BQU0sR0FBRzVELElBQUksSUFBSSxHQUFHO1VBQzFCLE1BQU02TSxVQUFVLEdBQUc7WUFBRSxHQUFHLEVBQUUsRUFBRTtZQUFFLEdBQUcsRUFBRSxDQUFDO1lBQUUsR0FBRyxFQUFFO1VBQUUsQ0FBQztVQUM5QyxNQUFNQyxJQUFJLEdBQUdELFVBQVUsQ0FBQ2hHLE1BQU0sQ0FBQ2pELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztVQUM1QyxNQUFNbUosU0FBUyxHQUFHRCxJQUFJLEdBQUcsQ0FBQztVQUUxQixNQUFNRSxVQUFVLEdBQUd0SixLQUFLLENBQUN1SixJQUFJLENBQUM7WUFBRXZJLE1BQU0sRUFBRWtJLGtCQUFrQixDQUFDbEk7VUFBTyxDQUFDLEVBQUUsTUFBTWhCLEtBQUssQ0FBQ3FKLFNBQVMsQ0FBQyxDQUFDOUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3BHLE1BQU1pSCxTQUFTLEdBQUd4SixLQUFLLENBQUN1SixJQUFJLENBQUM7WUFBRXZJLE1BQU0sRUFBRWtJLGtCQUFrQixDQUFDbEk7VUFBTyxDQUFDLEVBQUUsTUFBTWhCLEtBQUssQ0FBQ3FKLFNBQVMsQ0FBQyxDQUFDOUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBRW5HLE1BQU1rSCxRQUFRLEdBQUd6SixLQUFLLENBQUN1SixJQUFJLENBQUM7WUFBRXZJLE1BQU0sRUFBRXFJO1VBQVUsQ0FBQyxFQUFFLENBQUNLLENBQUMsRUFBRUMsQ0FBQyxLQUFLQSxDQUFDLENBQUMsQ0FBQzFLLEdBQUcsQ0FBQyxNQUFPMEssQ0FBQyxJQUFLO1lBQy9FLE1BQU1DLGFBQWEsR0FBRyxHQUFHdkosU0FBc0IsdUJBQXVCb0QsU0FBUyxTQUFTdkQsTUFBTSxrQkFBa0J5SixDQUFDLEVBQUU7WUFDbkgsTUFBTTtjQUFFNUMsUUFBUTtjQUFFRTtZQUFRLENBQUMsR0FBRyxNQUFNSixNQUFNLENBQUMrQyxhQUFhLENBQUM7WUFFekRWLGtCQUFrQixDQUFDMUcsT0FBTyxDQUFDLENBQUNxSCxDQUFDLEVBQUVDLENBQUMsS0FBSztjQUNuQyxNQUFNZCxHQUFHLEdBQUdILG1CQUFtQixDQUFDMUUsT0FBTyxDQUFDTCxTQUFTLENBQUMrRixDQUFDLENBQUMsQ0FBQztjQUNyRCxJQUFJYixHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2RNLFVBQVUsQ0FBQ1EsQ0FBQyxDQUFDLENBQUNILENBQUMsQ0FBQyxHQUFHNUMsUUFBUSxDQUFDaUMsR0FBRyxDQUFDO2dCQUNoQ1EsU0FBUyxDQUFDTSxDQUFDLENBQUMsQ0FBQ0gsQ0FBQyxDQUFDLEdBQUcxQyxPQUFPLENBQUMrQixHQUFHLENBQUM7Y0FDaEM7WUFDRixDQUFDLENBQUM7VUFDSixDQUFDLENBQUM7VUFFRixNQUFNekYsT0FBTyxDQUFDQyxHQUFHLENBQUNpRyxRQUFRLENBQUM7VUFFM0IsT0FBTztZQUFFSCxVQUFVO1lBQUVFLFNBQVM7WUFBRU47VUFBbUIsQ0FBQztRQUN0RCxDQUFDLENBQUM7UUFFRixNQUFNYSxPQUFPLEdBQUcsTUFBTXhHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaUYsV0FBVyxDQUFDO1FBRTlDLE1BQU11QixhQUFhLEdBQUdELE9BQU8sQ0FBQ0UsT0FBTyxDQUFDQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ1osVUFBVSxDQUFDO1FBQ2xFLE1BQU1hLFlBQVksR0FBR0osT0FBTyxDQUFDRSxPQUFPLENBQUNDLE1BQU0sSUFBSUEsTUFBTSxDQUFDVixTQUFTLENBQUM7UUFDaEUsTUFBTVksa0JBQWtCLEdBQUdMLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ2hCLGtCQUFrQixDQUFDO1FBRS9FN0IsZUFBZSxDQUFDO1VBQUVnRCxLQUFLLEVBQUVMLGFBQWE7VUFBRU0sSUFBSSxFQUFFSCxZQUFZO1VBQUVJLFVBQVUsRUFBRUg7UUFBbUIsQ0FBQyxDQUFDO1FBQzdGbkUsUUFBUSxDQUFDLEdBQUdyTCxPQUFPLFdBQVcsQ0FBQztNQUNqQyxDQUFDLENBQUMsT0FBT3lHLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxhQUFhLEVBQUVBLEtBQUssQ0FBQztNQUNyQyxDQUFDLFNBQVM7UUFDUnNHLFlBQVksQ0FBQyxLQUFLLENBQUM7TUFDckI7SUFDRixDQUFDOztJQUVEO0lBQ0FhLFdBQVcsQ0FBQyxDQUFDO0VBQ2YsQ0FBQyxFQUFFLENBQUNsUCxVQUFVLEVBQUV3QixLQUFLLEVBQUVGLE9BQU8sRUFBRTBCLElBQUksQ0FBQyxDQUFDOztFQUV0QztFQUNBMUQsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSSxDQUFDd08sWUFBWSxFQUFFO0lBRW5CLE1BQU1vRCxRQUFRLEdBQUdwRCxZQUFZLENBQUNtRCxVQUFVLENBQUN0TCxHQUFHLENBQUMsQ0FBQzRLLENBQUMsRUFBRUMsQ0FBQyxLQUFLO01BQ3JELE1BQU1XLENBQUMsR0FBR3JELFlBQVksQ0FBQ2lELEtBQUssQ0FBQ1AsQ0FBQyxDQUFDLENBQUM5SSxNQUFNO01BQ3RDLE9BQU87UUFDTDZHLENBQUMsRUFBRVQsWUFBWSxDQUFDaUQsS0FBSyxDQUFDUCxDQUFDLENBQUM7UUFDeEJoQyxDQUFDLEVBQUVWLFlBQVksQ0FBQ2tELElBQUksQ0FBQ1IsQ0FBQyxDQUFDO1FBQ3ZCWSxJQUFJLEVBQUUsZUFBZTtRQUNyQm5GLE1BQU0sRUFBRTtVQUNOb0YsTUFBTSxFQUFFdkQsWUFBWSxDQUFDaUQsS0FBSyxDQUFDUCxDQUFDLENBQUMsQ0FBQzdLLEdBQUcsQ0FBQyxDQUFDeUssQ0FBQyxFQUFFaFAsQ0FBQyxLQUFLQSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsR0FBR0EsQ0FBQyxLQUFLK1AsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDO1VBQ2pHaE4sS0FBSyxFQUFFcUUsUUFBUSxDQUFDZSxTQUFTLENBQUMvSCxLQUFLLENBQUNnUCxDQUFDLEdBQUdoUCxLQUFLLENBQUNrRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1VBQ25EcUgsSUFBSSxFQUFFakIsWUFBWSxDQUFDaUQsS0FBSyxDQUFDUCxDQUFDLENBQUMsQ0FBQzdLLEdBQUcsQ0FBQyxDQUFDeUssQ0FBQyxFQUFFaFAsQ0FBQyxLQUFLQSxDQUFDLEtBQUssQ0FBQyxJQUFJQSxDQUFDLEtBQUsrUCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzFFLENBQUM7UUFDREcsSUFBSSxFQUFFL0gsU0FBUyxDQUFDL0gsS0FBSyxDQUFDZ1AsQ0FBQyxHQUFHaFAsS0FBSyxDQUFDa0csTUFBTSxDQUFDO01BQ3pDLENBQUM7SUFDSCxDQUFDLENBQUM7O0lBRUY7SUFDQSxNQUFNNkosZUFBZSxHQUFHekQsWUFBWSxDQUFDbUQsVUFBVSxDQUFDTixPQUFPLENBQUMsQ0FBQ0osQ0FBQyxFQUFFQyxDQUFDLEtBQzNEOUosS0FBSyxDQUFDb0gsWUFBWSxDQUFDaUQsS0FBSyxDQUFDUCxDQUFDLENBQUMsQ0FBQzlJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ3RELEdBQUcsQ0FBQyxDQUFDeUssQ0FBQyxFQUFFaFAsQ0FBQyxNQUFNO01BQzdEbU4sQ0FBQyxFQUFFVCxZQUFZLENBQUNpRCxLQUFLLENBQUNQLENBQUMsQ0FBQyxDQUFDcFAsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUMvQm9OLENBQUMsRUFBRVYsWUFBWSxDQUFDa0QsSUFBSSxDQUFDUixDQUFDLENBQUMsQ0FBQ3BQLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDOUJ1TixJQUFJLEVBQUUsR0FBRztNQUFFQyxJQUFJLEVBQUUsR0FBRztNQUNwQjRDLEtBQUssRUFBRSxHQUFHO01BQUVDLEtBQUssRUFBRSxHQUFHO01BQ3RCQyxFQUFFLEVBQUU1RCxZQUFZLENBQUNpRCxLQUFLLENBQUNQLENBQUMsQ0FBQyxDQUFDcFAsQ0FBQyxDQUFDO01BQzVCdVEsRUFBRSxFQUFFN0QsWUFBWSxDQUFDa0QsSUFBSSxDQUFDUixDQUFDLENBQUMsQ0FBQ3BQLENBQUMsQ0FBQztNQUMzQndRLFVBQVUsRUFBRXBKLFFBQVEsQ0FBQ2UsU0FBUyxDQUFDL0gsS0FBSyxDQUFDZ1AsQ0FBQyxHQUFHaFAsS0FBSyxDQUFDa0csTUFBTSxDQUFDLENBQUMsQ0FBQztNQUN4RG1LLFNBQVMsRUFBRSxHQUFHO01BQUVDLFVBQVUsRUFBRSxHQUFHO01BQUVDLFNBQVMsRUFBRSxDQUFDO01BQzdDbEQsU0FBUyxFQUFFO0lBQ2IsQ0FBQyxDQUFDLENBQ0osQ0FBQztJQUVEWixVQUFVLENBQUNpRCxRQUFRLENBQUM7SUFDcEI7SUFDQS9DLGNBQWMsQ0FBQyxDQUFDLEdBQUdvRCxlQUFlLEVBQUUsR0FBR2pELGNBQWMsQ0FBQyxDQUFDO0lBQ3ZELElBQUluSixVQUFVLEVBQUVBLFVBQVUsQ0FBQyxDQUFDO0VBQzlCLENBQUMsRUFBRSxDQUFDMkksWUFBWSxDQUFDLENBQUM7RUFFbEIsb0JBQ0UxTywwREFBQTtJQUFLeUQsS0FBSyxFQUFFO01BQUV5QyxLQUFLLEVBQUUsT0FBTztNQUFFeEMsTUFBTSxFQUFFLE9BQU87TUFBRWEsUUFBUSxFQUFFO0lBQVc7RUFBRSxHQUNuRXlLLFNBQVMsaUJBQ1JoUCwwREFBQTtJQUFLeUQsS0FBSyxFQUFFO01BQ1ZjLFFBQVEsRUFBRSxVQUFVO01BQUVxTyxHQUFHLEVBQUUsQ0FBQztNQUFFQyxJQUFJLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsQ0FBQztNQUMxRHRPLE9BQU8sRUFBRSxNQUFNO01BQUVDLFVBQVUsRUFBRSxRQUFRO01BQUVDLGNBQWMsRUFBRSxRQUFRO01BQy9EQyxVQUFVLEVBQUUsd0JBQXdCO01BQUVDLE1BQU0sRUFBRSxFQUFFO01BQUVDLFFBQVEsRUFBRSxFQUFFO01BQUVDLEtBQUssRUFBRTtJQUN6RTtFQUFFLEdBQUMsbUNBRUUsQ0FDTixlQUNEL0UsMERBQUEsQ0FBQ21KLHVEQUFJO0lBQ0gxRCxJQUFJLEVBQUVtSixPQUFRO0lBQ2Q1SSxNQUFNLEVBQUU7TUFDTmdILFlBQVksRUFBRSxPQUFPO01BQ3JCQyxhQUFhLEVBQUUsT0FBTztNQUN0QjZCLFdBQVcsRUFBRUEsV0FBVztNQUN4QjdJLEtBQUssRUFBRTtRQUNMK0gsSUFBSSxFQUFFL0gsS0FBSztRQUNYeUosSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxFQUFFO1VBQUU1SyxLQUFLLEVBQUU7UUFBUSxDQUFDO1FBQ2xDd0ssSUFBSSxFQUFFLE9BQU87UUFDYkosQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLElBQUk7UUFDUEMsT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUdEMkQsS0FBSyxFQUFFO1FBQ0wvTSxLQUFLLEVBQUcsS0FBSztRQUNiZ04sS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ3BCQyxTQUFTLEVBQUUsTUFBTTtRQUNqQkMsU0FBUyxFQUFFLENBQUM7UUFDWkMsU0FBUyxFQUFFLFdBQVc7UUFDdEJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLFFBQVEsRUFBQyxPQUFPO1FBQ2hCQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwQkMsUUFBUSxFQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7UUFDdkJDLFFBQVEsRUFBRTtNQUNaLENBQUM7TUFDREMsS0FBSyxFQUFFO1FBQ0wxTixLQUFLLEVBQUcsS0FBSztRQUNiMk4sY0FBYyxFQUFFLEVBQUU7UUFDbEJYLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDbEJDLFNBQVMsRUFBRSxNQUFNO1FBQ2pCQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxTQUFTLEVBQUUsV0FBVztRQUN0QkMsU0FBUyxFQUFFLENBQUM7UUFDWkMsUUFBUSxFQUFFLEtBQUs7UUFDZkMsUUFBUSxFQUFDLE9BQU87UUFDaEJDLFFBQVEsRUFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCQyxRQUFRLEVBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztRQUN2QkMsUUFBUSxFQUFFO01BQ1osQ0FBQztNQUNEeEcsTUFBTSxFQUFFO1FBQUVDLENBQUMsRUFBRSxFQUFFO1FBQUVoQixDQUFDLEVBQUUsRUFBRTtRQUFFaUIsQ0FBQyxFQUFFLEVBQUU7UUFBRUMsQ0FBQyxFQUFFO01BQUcsQ0FBQztNQUN0Q04sVUFBVSxFQUFFLElBQUk7TUFDaEI4RyxNQUFNLEVBQUU7UUFDTjFFLENBQUMsRUFBRSxDQUFDO1FBQ0pDLENBQUMsRUFBRSxDQUFDO1FBQ0pRLE9BQU8sRUFBRSx1QkFBdUI7UUFDaENrRSxXQUFXLEVBQUUsTUFBTTtRQUNuQkMsV0FBVyxFQUFFO01BQ2Y7SUFDRixDQUFFO0lBQ0Y1TixNQUFNLEVBQUU7TUFBRUMsVUFBVSxFQUFFO0lBQUssQ0FBRSxDQUFDO0lBQUE7SUFDeEIzQyxLQUFLLEVBQUU7TUFBQ2dKLFNBQVMsRUFBQyxLQUFLO01BQUV2RyxLQUFLLEVBQUUsT0FBTztNQUFFeEMsTUFBTSxFQUFFO0lBQU8sQ0FBRSxDQUFDO0VBQUEsQ0FDbEUsQ0FDRSxDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlOEssY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUHNCO0FBQ2hCO0FBR25DLE1BQU1wRixRQUFRLEdBQUc7RUFBQyxVQUFVLEVBQUMsa0JBQWtCO0VBQUUsU0FBUyxFQUFDLG1CQUFtQjtFQUFFLFVBQVUsRUFBQyxtQkFBbUI7RUFDNUcsVUFBVSxFQUFDLG1CQUFtQjtFQUFFLFdBQVcsRUFBQyxtQkFBbUI7RUFBRSxpQkFBaUIsRUFBQyxtQkFBbUI7RUFDdEcsWUFBWSxFQUFDLG1CQUFtQjtFQUFDLFVBQVUsRUFBQyxtQkFBbUI7RUFBRSxTQUFTLEVBQUMsbUJBQW1CO0VBQzlGLFVBQVUsRUFBQyxtQkFBbUI7RUFBRSxTQUFTLEVBQUM7QUFBb0IsQ0FBQzs7QUFFakU7QUFDQSxNQUFNMkUsYUFBYSxHQUFHLE1BQU9yRyxRQUFRLElBQUs7RUFDeEMsSUFBSTtJQUNGLE1BQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLFFBQVEsQ0FBQztJQUN0QyxNQUFNc0csSUFBSSxHQUFHLE1BQU1sRyxRQUFRLENBQUNrRyxJQUFJLENBQUMsQ0FBQztJQUNsQyxPQUFPQSxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ2xNLE1BQU0sQ0FBRW1NLElBQUksSUFBS0EsSUFBSSxDQUFDN0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7RUFDOUQsQ0FBQyxDQUFDLE9BQU8xQyxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDO0FBRUQsTUFBTXdGLE1BQU0sR0FBRyxNQUFPekcsUUFBUSxJQUFLO0VBQ2pDLElBQUk7SUFDRixNQUFNSSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDTCxRQUFRLENBQUM7SUFDdEMsTUFBTXNHLElBQUksR0FBRyxNQUFNbEcsUUFBUSxDQUFDa0csSUFBSSxDQUFDLENBQUM7SUFDbEMsTUFBTUksS0FBSyxHQUFHSixJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ2xNLE1BQU0sQ0FBQ21NLElBQUksSUFBSUEsSUFBSSxDQUFDN0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFakUsTUFBTWdELFFBQVEsR0FBR0QsS0FBSyxDQUFDN0gsR0FBRyxDQUFDMkgsSUFBSSxJQUFJSSxVQUFVLENBQUNKLElBQUksQ0FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsTUFBTU0sT0FBTyxHQUFHSCxLQUFLLENBQUM3SCxHQUFHLENBQUMySCxJQUFJLElBQUlJLFVBQVUsQ0FBQ0osSUFBSSxDQUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqRSxPQUFPO01BQUVJLFFBQVE7TUFBRUU7SUFBUSxDQUFDO0VBQzlCLENBQUMsQ0FBQyxPQUFPNUYsS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRUEsS0FBSyxDQUFDO0lBQ3BDLE9BQU87TUFBRTBGLFFBQVEsRUFBRSxFQUFFO01BQUVFLE9BQU8sRUFBRTtJQUFHLENBQUM7RUFDdEM7QUFDRixDQUFDO0FBRUQsTUFBTXlGLGVBQWUsR0FBRy9PLElBQUEsSUFBOEQ7RUFBQSxJQUE3RDtJQUFFYSxNQUFNO0lBQUVsRixVQUFVO0lBQUV3QixLQUFLO0lBQUVGLE9BQU87SUFBRTBCLElBQUk7SUFBRW1DO0VBQVcsQ0FBQyxHQUFBZCxJQUFBO0VBQy9FLE1BQU13SixXQUFXLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0VBQzNFLE1BQU0sQ0FBQ0csT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzVPLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQzFDLE1BQU0sQ0FBQzZPLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUc5TywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUNsRCxNQUFNLENBQUNTLFdBQVcsRUFBRXVULGNBQWMsQ0FBQyxHQUFHaFUsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDbEQsTUFBTSxDQUFDNFIsVUFBVSxFQUFFcUMsYUFBYSxDQUFDLEdBQUdqVSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUNoRCxNQUFNLENBQUNnRyxLQUFLLEVBQUVzSCxRQUFRLENBQUMsR0FBR3ROLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3RDLE1BQU0sQ0FBQytPLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdoUCwrQ0FBUSxDQUFDLEtBQUssQ0FBQzs7RUFFakQ7RUFDQTtFQUNBLE1BQU1pUCxjQUFjLEdBQUcsQ0FDckI7SUFBRUMsQ0FBQyxFQUFFLElBQUk7SUFBRUMsQ0FBQyxFQUFFLElBQUk7SUFBRXBCLElBQUksRUFBRSxzQkFBc0I7SUFBSXFCLE9BQU8sRUFBRSxNQUFNO0lBQUdDLE9BQU8sRUFBRTtFQUFTLENBQUMsRUFDekY7SUFBRUgsQ0FBQyxFQUFFLElBQUk7SUFBRUMsQ0FBQyxFQUFFLElBQUk7SUFBRXBCLElBQUksRUFBRSxzQkFBc0I7SUFBSXFCLE9BQU8sRUFBRSxPQUFPO0lBQUVDLE9BQU8sRUFBRTtFQUFTLENBQUMsRUFDekY7SUFBRUgsQ0FBQyxFQUFFLElBQUk7SUFBRUMsQ0FBQyxFQUFFLElBQUk7SUFBRXBCLElBQUksRUFBRSxtQkFBbUI7SUFBVXFCLE9BQU8sRUFBRSxNQUFNO0lBQUdDLE9BQU8sRUFBRTtFQUFTLENBQUMsRUFDNUY7SUFBRUgsQ0FBQyxFQUFFLElBQUk7SUFBRUMsQ0FBQyxFQUFFLElBQUk7SUFBRXBCLElBQUksRUFBRSxtQkFBbUI7SUFBVXFCLE9BQU8sRUFBRSxPQUFPO0lBQUVDLE9BQU8sRUFBRTtFQUFTLENBQUMsQ0FDN0YsQ0FBQy9JLEdBQUcsQ0FBQ3lELEtBQUE7SUFBQSxJQUFDO01BQUVtRixDQUFDO01BQUVDLENBQUM7TUFBRXBCLElBQUk7TUFBRXFCLE9BQU87TUFBRUM7SUFBUSxDQUFDLEdBQUF0RixLQUFBO0lBQUEsT0FBTTtNQUMzQ3VGLElBQUksRUFBRSxPQUFPO01BQUVDLElBQUksRUFBRSxPQUFPO01BQUVMLENBQUM7TUFBRUMsQ0FBQztNQUFFcEIsSUFBSTtNQUFFcUIsT0FBTztNQUFFQyxPQUFPO01BQzFERyxTQUFTLEVBQUUsS0FBSztNQUNoQkMsSUFBSSxFQUFFO1FBQUVDLElBQUksRUFBRSxDQUFDO1FBQUU1SyxLQUFLLEVBQUU7TUFBTyxDQUFDO01BQ2hDNkssT0FBTyxFQUFFLHVCQUF1QjtNQUNoQ0MsU0FBUyxFQUFFO0lBQ2IsQ0FBQztFQUFBLENBQUMsQ0FBQztFQUVILE1BQU0xRixTQUFTLEdBQUc7SUFBQyxHQUFHLEVBQUMsVUFBVTtJQUFDLEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDdkQsR0FBRyxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFDL0MsR0FBRyxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDO0VBQVEsQ0FBQzs7RUFFcEQ7RUFDQWpLLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUlVLFVBQVUsS0FBSyxXQUFXLElBQUl3QixLQUFLLEVBQUU7TUFDdkM2TSxZQUFZLENBQUMsSUFBSSxDQUFDO01BQ2xCLE1BQU1sRSxTQUFTLEdBQUczSSxLQUFLO01BQ3ZCLE1BQU02TixVQUFVLEdBQUcsR0FBR3RJLFNBQXNCLHVCQUF1Qm9ELFNBQVMsVUFBVTtNQUV0RmdELGFBQWEsQ0FBQ2tDLFVBQVUsQ0FBQyxDQUFDa0UsSUFBSSxDQUFFMU8sSUFBSSxJQUFLO1FBQ3ZDd08sY0FBYyxDQUFDeE8sSUFBSSxDQUFDO1FBQ3BCOEgsUUFBUSxDQUFDLGNBQWMsQ0FBQztNQUMxQixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUMsRUFBRSxDQUFDM00sVUFBVSxFQUFFd0IsS0FBSyxDQUFDLENBQUM7O0VBRXZCO0VBQ0FsQyxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJUSxXQUFXLENBQUM0SCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzFCO01BQ0EsTUFBTThDLFNBQVMsR0FBSThFLENBQUMsSUFBSyxPQUFPQSxDQUFDLEtBQUssUUFBUSxHQUFHQSxDQUFDLENBQUM5RSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTtNQUMvRSxNQUFNK0UsV0FBVyxHQUFHMVAsV0FBVyxDQUFDbUwsTUFBTSxDQUFDLENBQUN3RSxHQUFHLEVBQUU5TyxLQUFLLEVBQUUrTyxHQUFHLEtBQUs7UUFDMURELEdBQUcsQ0FBQ2pGLFNBQVMsQ0FBQzdKLEtBQUssQ0FBQyxDQUFDLEdBQUcrTyxHQUFHO1FBQzNCLE9BQU9ELEdBQUc7TUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFFTixNQUFNRSxhQUFhLEdBQUdqSixLQUFLLENBQUNDLE9BQU8sQ0FBQ3JGLE9BQU8sQ0FBQyxHQUFHQSxPQUFPLEdBQUcsQ0FBQ0EsT0FBTyxDQUFDO01BQ2xFLE1BQU1rUyxPQUFPLEdBQUc3RCxhQUFhLENBQUN4TyxNQUFNLENBQUNSLEtBQUssSUFBSTZKLFNBQVMsQ0FBQzdKLEtBQUssQ0FBQyxJQUFJNk8sV0FBVyxDQUFDO01BQzlFOEQsYUFBYSxDQUFDRSxPQUFPLENBQUM7TUFDdEI7TUFDQSxJQUFJQSxPQUFPLENBQUM5TCxNQUFNLEtBQUssQ0FBQyxFQUFFMkcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUMvQztFQUNGLENBQUMsRUFBRSxDQUFDdk8sV0FBVyxFQUFFd0IsT0FBTyxDQUFDLENBQUM7O0VBRTFCO0VBQ0FoQyxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJMlIsVUFBVSxDQUFDdkosTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDbEcsS0FBSyxFQUFFO0lBRXZDLE1BQU0ySSxTQUFTLEdBQUczSSxLQUFLO0lBQ3ZCO0lBQ0EsTUFBTW9GLE1BQU0sR0FBRzVELElBQUksSUFBSSxHQUFHO0lBQzFCLE1BQU02TSxVQUFVLEdBQUc7TUFBRSxHQUFHLEVBQUUsRUFBRTtNQUFFLEdBQUcsRUFBRSxDQUFDO01BQUUsR0FBRyxFQUFFO0lBQUUsQ0FBQztJQUM5QyxNQUFNQyxJQUFJLEdBQUdELFVBQVUsQ0FBQ2hHLE1BQU0sQ0FBQ2pELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1QyxNQUFNbUosU0FBUyxHQUFHRCxJQUFJLEdBQUcsQ0FBQztJQUUxQixNQUFNRSxVQUFVLEdBQUd0SixLQUFLLENBQUN1SixJQUFJLENBQUM7TUFBRXZJLE1BQU0sRUFBRXVKLFVBQVUsQ0FBQ3ZKO0lBQU8sQ0FBQyxFQUFFLE1BQU1oQixLQUFLLENBQUNxSixTQUFTLENBQUMsQ0FBQzlHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixNQUFNaUgsU0FBUyxHQUFHeEosS0FBSyxDQUFDdUosSUFBSSxDQUFDO01BQUV2SSxNQUFNLEVBQUV1SixVQUFVLENBQUN2SjtJQUFPLENBQUMsRUFBRSxNQUFNaEIsS0FBSyxDQUFDcUosU0FBUyxDQUFDLENBQUM5RyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFM0YsTUFBTXVCLFNBQVMsR0FBSThFLENBQUMsSUFBSyxPQUFPQSxDQUFDLEtBQUssUUFBUSxHQUFHQSxDQUFDLENBQUM5RSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTtJQUMvRSxNQUFNZ0oscUJBQXFCLEdBQUczVCxXQUFXLENBQUM2RixHQUFHLENBQUM2RSxTQUFTLENBQUM7SUFFeEQsTUFBTTJGLFFBQVEsR0FBR3pKLEtBQUssQ0FBQ3VKLElBQUksQ0FBQztNQUFFdkksTUFBTSxFQUFFcUk7SUFBVSxDQUFDLEVBQUUsQ0FBQ0ssQ0FBQyxFQUFFQyxDQUFDLEtBQUtBLENBQUMsQ0FBQyxDQUFDMUssR0FBRyxDQUFFMEssQ0FBQyxJQUFLO01BQ3pFLE1BQU1DLGFBQWEsR0FBRyxHQUFHdkosU0FBc0IsdUJBQXVCb0QsU0FBUyxTQUFTdkQsTUFBTSxrQkFBa0J5SixDQUFDLEVBQUU7TUFDbkgsT0FBTzlDLE1BQU0sQ0FBQytDLGFBQWEsQ0FBQyxDQUFDaUQsSUFBSSxDQUFDRyxLQUFBLElBQTJCO1FBQUEsSUFBMUI7VUFBRWpHLFFBQVE7VUFBRUU7UUFBUSxDQUFDLEdBQUErRixLQUFBO1FBQ3REekMsVUFBVSxDQUFDL0gsT0FBTyxDQUFDLENBQUNxSCxDQUFDLEVBQUVDLENBQUMsS0FBSztVQUMzQixNQUFNZCxHQUFHLEdBQUcrRCxxQkFBcUIsQ0FBQzVJLE9BQU8sQ0FBQ0wsU0FBUyxDQUFDK0YsQ0FBQyxDQUFDLENBQUM7VUFDdkQsSUFBSWIsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2RNLFVBQVUsQ0FBQ1EsQ0FBQyxDQUFDLENBQUNILENBQUMsQ0FBQyxHQUFHNUMsUUFBUSxDQUFDaUMsR0FBRyxDQUFDO1lBQ2hDUSxTQUFTLENBQUNNLENBQUMsQ0FBQyxDQUFDSCxDQUFDLENBQUMsR0FBRzFDLE9BQU8sQ0FBQytCLEdBQUcsQ0FBQztVQUNoQztRQUNGLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGekYsT0FBTyxDQUFDQyxHQUFHLENBQUNpRyxRQUFRLENBQUMsQ0FBQ29ELElBQUksQ0FBQyxNQUFNO01BQy9CLE1BQU1yQyxRQUFRLEdBQUdELFVBQVUsQ0FBQ3RMLEdBQUcsQ0FBQyxDQUFDNEssQ0FBQyxFQUFFQyxDQUFDLEtBQUs7UUFDeEMsTUFBTVcsQ0FBQyxHQUFHbkIsVUFBVSxDQUFDUSxDQUFDLENBQUMsQ0FBQzlJLE1BQU07UUFDOUIsT0FBTztVQUNMNkcsQ0FBQyxFQUFFeUIsVUFBVSxDQUFDUSxDQUFDLENBQUM7VUFDaEJoQyxDQUFDLEVBQUUwQixTQUFTLENBQUNNLENBQUMsQ0FBQztVQUNmWSxJQUFJLEVBQUUsZUFBZTtVQUNyQm5GLE1BQU0sRUFBRTtZQUNOb0YsTUFBTSxFQUFFckIsVUFBVSxDQUFDUSxDQUFDLENBQUMsQ0FBQzdLLEdBQUcsQ0FBQyxDQUFDeUssQ0FBQyxFQUFFaFAsQ0FBQyxLQUFLQSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsR0FBR0EsQ0FBQyxLQUFLK1AsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3pGaE4sS0FBSyxFQUFFcUUsUUFBUSxDQUFDK0gsQ0FBQyxDQUFDO1lBQ2xCeEIsSUFBSSxFQUFFaUIsVUFBVSxDQUFDUSxDQUFDLENBQUMsQ0FBQzdLLEdBQUcsQ0FBQyxDQUFDeUssQ0FBQyxFQUFFaFAsQ0FBQyxLQUFLQSxDQUFDLEtBQUssQ0FBQyxJQUFJQSxDQUFDLEtBQUsrUCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1VBQ2xFLENBQUM7VUFDREcsSUFBSSxFQUFFZjtRQUNSLENBQUM7TUFDSCxDQUFDLENBQUM7O01BRUY7TUFDQSxNQUFNZ0IsZUFBZSxHQUFHTixVQUFVLENBQUNOLE9BQU8sQ0FBQyxDQUFDSixDQUFDLEVBQUVDLENBQUMsS0FDOUM5SixLQUFLLENBQUNzSixVQUFVLENBQUNRLENBQUMsQ0FBQyxDQUFDOUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDdEQsR0FBRyxDQUFDLENBQUN5SyxDQUFDLEVBQUVoUCxDQUFDLE1BQU07UUFDckRtTixDQUFDLEVBQUV5QixVQUFVLENBQUNRLENBQUMsQ0FBQyxDQUFDcFAsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2Qm9OLENBQUMsRUFBRTBCLFNBQVMsQ0FBQ00sQ0FBQyxDQUFDLENBQUNwUCxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCdU4sSUFBSSxFQUFFLEdBQUc7UUFBRUMsSUFBSSxFQUFFLEdBQUc7UUFDcEI4QyxFQUFFLEVBQUUxQixVQUFVLENBQUNRLENBQUMsQ0FBQyxDQUFDcFAsQ0FBQyxDQUFDO1FBQUV1USxFQUFFLEVBQUV6QixTQUFTLENBQUNNLENBQUMsQ0FBQyxDQUFDcFAsQ0FBQyxDQUFDO1FBQ3pDb1EsS0FBSyxFQUFFLEdBQUc7UUFBRUMsS0FBSyxFQUFFLEdBQUc7UUFDdEJHLFVBQVUsRUFBRXBKLFFBQVEsQ0FBQytILENBQUMsQ0FBQztRQUN2QnNCLFNBQVMsRUFBRSxHQUFHO1FBQUVDLFVBQVUsRUFBRSxHQUFHO1FBQUVDLFNBQVMsRUFBRSxDQUFDO1FBQzdDbEQsU0FBUyxFQUFFO01BQ2IsQ0FBQyxDQUFDLENBQ0osQ0FBQztNQUVEWixVQUFVLENBQUNpRCxRQUFRLENBQUM7TUFDcEI7TUFDQS9DLGNBQWMsQ0FBQyxDQUFDLEdBQUdvRCxlQUFlLEVBQUUsR0FBR2pELGNBQWMsQ0FBQyxDQUFDO01BQ3ZERCxZQUFZLENBQUMsS0FBSyxDQUFDO01BQ25CLElBQUlsSixVQUFVLEVBQUVBLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxDQUFDOEwsVUFBVSxFQUFFblIsV0FBVyxFQUFFMEIsS0FBSyxFQUFFd0IsSUFBSSxDQUFDLENBQUM7RUFFMUMsb0JBQ0U1RCwwREFBQTtJQUFLeUQsS0FBSyxFQUFFO01BQUV5QyxLQUFLLEVBQUUsT0FBTztNQUFFeEMsTUFBTSxFQUFFLE9BQU87TUFBRWEsUUFBUSxFQUFFO0lBQVc7RUFBRSxHQUNuRXlLLFNBQVMsaUJBQ1JoUCwwREFBQTtJQUFLeUQsS0FBSyxFQUFFO01BQ1ZjLFFBQVEsRUFBRSxVQUFVO01BQUVxTyxHQUFHLEVBQUUsQ0FBQztNQUFFQyxJQUFJLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsQ0FBQztNQUMxRHRPLE9BQU8sRUFBRSxNQUFNO01BQUVDLFVBQVUsRUFBRSxRQUFRO01BQUVDLGNBQWMsRUFBRSxRQUFRO01BQy9EQyxVQUFVLEVBQUUsd0JBQXdCO01BQUVDLE1BQU0sRUFBRSxFQUFFO01BQUVDLFFBQVEsRUFBRSxFQUFFO01BQUVDLEtBQUssRUFBRTtJQUN6RTtFQUFFLEdBQUMsbUNBRUUsQ0FDTixlQUNEL0UsMERBQUEsQ0FBQ21KLHVEQUFJO0lBQ0gxRCxJQUFJLEVBQUVtSixPQUFRO0lBQ2Q1SSxNQUFNLEVBQUU7TUFDTmdILFlBQVksRUFBRSxPQUFPO01BQ3JCQyxhQUFhLEVBQUUsT0FBTztNQUN0QjZCLFdBQVcsRUFBRUEsV0FBVztNQUN4QjdJLEtBQUssRUFBRTtRQUNMK0gsSUFBSSxFQUFFL0gsS0FBSztRQUNYeUosSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxFQUFFO1VBQUU1SyxLQUFLLEVBQUU7UUFBUSxDQUFDO1FBQ2xDd0ssSUFBSSxFQUFFLE9BQU87UUFDYkosQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLElBQUk7UUFDUEMsT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUdEMkQsS0FBSyxFQUFFO1FBQ0wvTSxLQUFLLEVBQUcsS0FBSztRQUNiZ04sS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ3BCQyxTQUFTLEVBQUUsTUFBTTtRQUNqQkMsU0FBUyxFQUFFLENBQUM7UUFDWkMsU0FBUyxFQUFFLFdBQVc7UUFDdEJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLFFBQVEsRUFBQyxPQUFPO1FBQ2hCQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwQkMsUUFBUSxFQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7UUFDdkJDLFFBQVEsRUFBRTtNQUNaLENBQUM7TUFDREMsS0FBSyxFQUFFO1FBQ0wxTixLQUFLLEVBQUcsS0FBSztRQUNiMk4sY0FBYyxFQUFFLEVBQUU7UUFDbEJYLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDbEJDLFNBQVMsRUFBRSxNQUFNO1FBQ2pCQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxTQUFTLEVBQUUsV0FBVztRQUN0QkMsU0FBUyxFQUFFLENBQUM7UUFDWkMsUUFBUSxFQUFFLEtBQUs7UUFDZkMsUUFBUSxFQUFDLE9BQU87UUFDaEJDLFFBQVEsRUFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCQyxRQUFRLEVBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztRQUN2QkMsUUFBUSxFQUFFO01BQ1osQ0FBQztNQUNEeEcsTUFBTSxFQUFFO1FBQUVDLENBQUMsRUFBRSxFQUFFO1FBQUVoQixDQUFDLEVBQUUsRUFBRTtRQUFFaUIsQ0FBQyxFQUFFLEVBQUU7UUFBRUMsQ0FBQyxFQUFFO01BQUcsQ0FBQztNQUN0Q04sVUFBVSxFQUFFLElBQUk7TUFDaEI4RyxNQUFNLEVBQUU7UUFDTjFFLENBQUMsRUFBRSxDQUFDO1FBQ0pDLENBQUMsRUFBRSxDQUFDO1FBQ0pRLE9BQU8sRUFBRSx1QkFBdUI7UUFDaENrRSxXQUFXLEVBQUUsTUFBTTtRQUNuQkMsV0FBVyxFQUFFO01BQ2Y7SUFDRixDQUFFO0lBQ0Y1TixNQUFNLEVBQUU7TUFBRUMsVUFBVSxFQUFFO0lBQUssQ0FBRSxDQUFDO0lBQUE7SUFDeEIzQyxLQUFLLEVBQUU7TUFBQ2dKLFNBQVMsRUFBQyxLQUFLO01BQUV2RyxLQUFLLEVBQUUsT0FBTztNQUFFeEMsTUFBTSxFQUFFO0lBQU8sQ0FBRSxDQUFDO0VBQUEsQ0FDbEUsQ0FDRSxDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlc1EsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TzlCO0FBQ3VDO0FBQ3VCO0FBRTlELE1BQU0xVCxPQUFPLEdBQUcyRSxJQUFBLElBQThQO0VBQUEsSUFBN1A7SUFBRWpDLE9BQU87SUFBRXBDLFVBQVU7SUFBRXFDLGtCQUFrQjtJQUFFdEMsU0FBUztJQUFFRCxXQUFXO0lBQUVNLGlCQUFpQjtJQUFFRSxjQUFjO0lBQUVnQyxhQUFhO0lBQUVDLGVBQWU7SUFBRS9CLFlBQVk7SUFBRWdDLFlBQVk7SUFBRUMsb0JBQW9CO0lBQUVDLHNCQUFzQjtJQUFFQyxpQkFBaUI7SUFBRUM7RUFBb0IsQ0FBQyxHQUFBeUIsSUFBQTtFQUN2USxNQUFNLENBQUN3UCxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHelUsK0NBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBQyxVQUFVLENBQUMsQ0FBQztFQUNoRSxNQUFNLENBQUMwVSxhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUczVSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUN0RCxNQUFNNFUsaUJBQWlCLEdBQUl4SSxLQUFLLElBQUs7SUFDbkNwSixrQkFBa0IsQ0FBQ29KLEtBQUssQ0FBQ3lJLE1BQU0sQ0FBQ3ZULEtBQUssQ0FBQztJQUNwQyxJQUFJOEssS0FBSyxDQUFDeUksTUFBTSxDQUFDdlQsS0FBSyxJQUFFLFVBQVUsRUFBQztNQUNqQ21ULFlBQVksQ0FBQyxDQUFDLFVBQVUsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUFBLENBQUMsTUFDakM7TUFDRkEsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDO0lBRUo5TCxPQUFPLENBQUNvSCxHQUFHLENBQUMzRCxLQUFLLENBQUN5SSxNQUFNLENBQUN2VCxLQUFLLENBQUM7SUFDL0JxSCxPQUFPLENBQUNvSCxHQUFHLENBQUN5RSxTQUFTLENBQUM7RUFDeEIsQ0FBQztFQUVELE1BQU10SyxTQUFTLEdBQUc7SUFBQyxHQUFHLEVBQUMsVUFBVTtJQUFDLEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDdkQsR0FBRyxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFDL0MsR0FBRyxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDO0VBQVEsQ0FBQztFQUtwRCxvQkFDRW5LLDBEQUFBO0lBQUt5RCxLQUFLLEVBQUU7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRXFSLE9BQU8sRUFBRSxNQUFNO01BQUVDLGVBQWUsRUFBRTtJQUFXO0VBQUUsZ0JBRTVFaFYsMERBQUEsQ0FBQ0ksdURBQUc7SUFBQzBDLFNBQVMsRUFBQyxrQ0FBa0M7SUFBQ1csS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFLO0VBQUUsZ0JBQ3hFMUQsMERBQUEsQ0FBQ0ssdURBQUc7SUFBQzRVLEVBQUUsRUFBRTtFQUFFLGdCQUNUalYsMERBQUE7SUFBSXlELEtBQUssRUFBRTtNQUFFZ0osU0FBUyxFQUFFO0lBQU0sQ0FBRTtJQUFDM0osU0FBUyxFQUFDO0VBQXlCLEdBQUMsZ0NBRWpFLENBQ0QsQ0FBQyxlQUNOOUMsMERBQUEsQ0FBQ0ssdURBQUc7SUFBQzRVLEVBQUUsRUFBRTtFQUFFLGdCQUNUalYsMERBQUEsQ0FBQ3dVLHVEQUFNO0lBQ0w1UixFQUFFLEVBQUMsT0FBTztJQUNWMEssT0FBTyxFQUFFdEssT0FBUTtJQUNqQlMsS0FBSyxFQUFFO01BQUVnSixTQUFTLEVBQUU7SUFBTSxDQUFFO0lBQzVCM0osU0FBUyxFQUFDO0VBQTRCLEdBQ3ZDLG9CQUVPLENBQ0wsQ0FDRixDQUFDLGVBR045QywwREFBQSxDQUFDSSx1REFBRztJQUFDMEMsU0FBUyxFQUFDO0VBQW9CLGdCQUNqQzlDLDBEQUFBLENBQUNLLHVEQUFHO0lBQUNxRyxFQUFFLEVBQUU7RUFBRyxnQkFDVjFHLDBEQUFBO0lBQUs4QyxTQUFTLEVBQUM7RUFBaUMsZ0JBQzlDOUMsMERBQUE7SUFBTThDLFNBQVMsRUFBQyx5QkFBeUI7SUFBQ1csS0FBSyxFQUFFO01BQUVxQixRQUFRLEVBQUUsTUFBTTtNQUFFb1EsVUFBVSxFQUFFO0lBQVM7RUFBRSxHQUFDLGdDQUV2RixDQUFDLGVBQ1BsViwwREFBQTtJQUFLOEMsU0FBUyxFQUFDLFdBQVc7SUFBQ3FTLElBQUksRUFBQztFQUFPLEdBQ3BDLENBQUM7SUFBQzVULEtBQUssRUFBQyxHQUFHO0lBQUV1RixLQUFLLEVBQUM7RUFBSSxDQUFDLEVBQUU7SUFBQ3ZGLEtBQUssRUFBQyxHQUFHO0lBQUV1RixLQUFLLEVBQUM7RUFBSSxDQUFDLEVBQUU7SUFBQ3ZGLEtBQUssRUFBQyxHQUFHO0lBQUV1RixLQUFLLEVBQUM7RUFBSSxDQUFDLENBQUMsQ0FBQ1AsR0FBRyxDQUFDeUQsS0FBQTtJQUFBLElBQUM7TUFBQ3pJLEtBQUs7TUFBRXVGO0lBQUssQ0FBQyxHQUFBa0QsS0FBQTtJQUFBLG9CQUM5RmhLLDBEQUFBO01BQ0V5RyxHQUFHLEVBQUVsRixLQUFNO01BQ1hvTCxJQUFJLEVBQUMsUUFBUTtNQUNiVyxPQUFPLEVBQUVBLENBQUEsS0FBTWxLLFlBQVksQ0FBQzdCLEtBQUssQ0FBRTtNQUNuQ3VCLFNBQVMsRUFBRSxjQUFjMUIsWUFBWSxLQUFLRyxLQUFLLEdBQUcsVUFBVSxHQUFHLHVCQUF1QixFQUFHO01BQ3pGa0MsS0FBSyxFQUFFO1FBQUVxQixRQUFRLEVBQUUsTUFBTTtRQUFFaVEsT0FBTyxFQUFFO01BQVc7SUFBRSxHQUVoRGpPLEtBQ0ssQ0FBQztFQUFBLENBQ1YsQ0FDRSxDQUNGLENBQ0YsQ0FDRixDQUFDLGVBR045RywwREFBQSxDQUFDSSx1REFBRztJQUFDMEMsU0FBUyxFQUFDLHVCQUF1QjtJQUFDVyxLQUFLLEVBQUU7TUFBRUMsTUFBTSxFQUFFO0lBQU07RUFBRSxnQkFDOUQxRCwwREFBQSxDQUFDdVUsdURBQVM7SUFBQ2EsZ0JBQWdCLEVBQUMsR0FBRztJQUFDdFMsU0FBUyxFQUFDO0VBQU0sZ0JBRTlDOUMsMERBQUEsQ0FBQ3VVLHVEQUFTLENBQUNjLElBQUk7SUFBQ0MsUUFBUSxFQUFDLEdBQUc7SUFBQ3hTLFNBQVMsRUFBQztFQUFPLGdCQUM1QzlDLDBEQUFBLENBQUN1VSx1REFBUyxDQUFDZ0IsTUFBTSxRQUFDLHNDQUF3QixDQUFDLGVBQzNDdlYsMERBQUEsQ0FBQ3VVLHVEQUFTLENBQUMzTixJQUFJLHFCQUNiNUcsMERBQUE7SUFBSzhDLFNBQVMsRUFBQztFQUFLLGdCQUNsQjlDLDBEQUFBO0lBQUs4QyxTQUFTLEVBQUM7RUFBaUMsZ0JBQzlDOUMsMERBQUE7SUFDRTJNLElBQUksRUFBQyxPQUFPO0lBQ1ovSixFQUFFLEVBQUcsVUFBVTtJQUNmc1AsSUFBSSxFQUFDLGFBQWE7SUFDbEIzUSxLQUFLLEVBQUMsVUFBVTtJQUNoQnVCLFNBQVMsRUFBQyxrQkFBa0I7SUFDNUIwUyxRQUFRLEVBQUVYLGlCQUFrQjtJQUM1QlksT0FBTyxFQUFFN1UsVUFBVSxLQUFLLFVBQVcsQ0FBQztFQUFBLENBQ3JDLENBQUMsZUFDRlosMERBQUE7SUFDQTBWLE9BQU8sRUFBQyxVQUFVO0lBQ2xCNVMsU0FBUyxFQUFDLHVCQUF1QjtJQUNqQ1csS0FBSyxFQUFFO01BQUVxQixRQUFRLEVBQUU7SUFBTztFQUFFLEdBQzNCLDJCQUFZLENBQ1YsQ0FBQyxlQUNOOUUsMERBQUE7SUFBSzhDLFNBQVMsRUFBQztFQUFpQyxnQkFDOUM5QywwREFBQTtJQUNFMk0sSUFBSSxFQUFDLE9BQU87SUFDWi9KLEVBQUUsRUFBQyxXQUFXO0lBQ2RzUCxJQUFJLEVBQUMsYUFBYTtJQUNsQjNRLEtBQUssRUFBQyxXQUFXO0lBQ2pCdUIsU0FBUyxFQUFDLGtCQUFrQjtJQUM1QjBTLFFBQVEsRUFBRVgsaUJBQWtCO0lBQzVCWSxPQUFPLEVBQUU3VSxVQUFVLEtBQUssV0FBWSxDQUFDO0VBQUEsQ0FDdEMsQ0FBQyxlQUNGWiwwREFBQTtJQUNBMFYsT0FBTyxFQUFDLFdBQVc7SUFDbkI1UyxTQUFTLEVBQUMsdUJBQXVCO0lBQ2pDVyxLQUFLLEVBQUU7TUFBRXFCLFFBQVEsRUFBRTtJQUFPO0VBQUUsR0FDM0IsNkNBQWUsQ0FDYixDQUNGLENBQ1MsQ0FDRixDQUFDLGVBR2pCOUUsMERBQUEsQ0FBQ3VVLHVEQUFTLENBQUNjLElBQUk7SUFBQ0MsUUFBUSxFQUFDLEdBQUc7SUFBQ3hTLFNBQVMsRUFBQztFQUFPLGdCQUM1QzlDLDBEQUFBLENBQUN1VSx1REFBUyxDQUFDZ0IsTUFBTSxRQUFDLE9BQXVCLENBQUMsZUFDMUN2ViwwREFBQSxDQUFDdVUsdURBQVMsQ0FBQzNOLElBQUksUUFFWmhHLFVBQVUsS0FBSyxVQUFVLGlCQUN4QlosMERBQUE7SUFBSzhDLFNBQVMsRUFBQztFQUFtQixnQkFDaEM5QywwREFBQTtJQUNFMk0sSUFBSSxFQUFDLFFBQVE7SUFDYjdKLFNBQVMsRUFBQyxrQ0FBa0M7SUFDNUNXLEtBQUssRUFBRTtNQUFFcUIsUUFBUSxFQUFFLE1BQU07TUFBRWlRLE9BQU8sRUFBRTtJQUFVLENBQUU7SUFDaER6SCxPQUFPLEVBQUUvSjtFQUFrQixHQUM1QixvQkFFTyxDQUFDLGVBQ1R2RCwwREFBQTtJQUNFMk0sSUFBSSxFQUFDLFFBQVE7SUFDYjdKLFNBQVMsRUFBQyxrQ0FBa0M7SUFDNUNXLEtBQUssRUFBRTtNQUFFcUIsUUFBUSxFQUFFLE1BQU07TUFBRWlRLE9BQU8sRUFBRTtJQUFVLENBQUU7SUFDaER6SCxPQUFPLEVBQUU5SjtFQUFvQixHQUM5QixvQkFFTyxDQUNMLENBQ04sRUFDQTdDLFNBQVMsQ0FBQzRGLEdBQUcsQ0FBRW5FLEtBQUssaUJBQ25CcEMsMERBQUE7SUFBS3lHLEdBQUcsRUFBRXJFO0VBQU0sZ0JBQ2RwQywwREFBQTtJQUNFMk0sSUFBSSxFQUFFOEgsU0FBUyxDQUFDLENBQUMsQ0FBRTtJQUNuQjdSLEVBQUUsRUFBRVIsS0FBTTtJQUNWcVQsT0FBTyxFQUFFdlUsY0FBYyxDQUFDWSxRQUFRLENBQUNNLEtBQUssQ0FBRTtJQUN4Q29ULFFBQVEsRUFBRUEsQ0FBQSxLQUFNdFMsYUFBYSxDQUFDZCxLQUFLLEVBQUVxUyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUU7SUFDbkR2QyxJQUFJLEVBQUM7RUFBTyxDQUNiLENBQUMsZUFDRmxTLDBEQUFBO0lBQU8wVixPQUFPLEVBQUV0VDtFQUFNLEdBQUUrSCxTQUFTLENBQUMvSCxLQUFLLENBQVMsQ0FDN0MsQ0FDTixDQUNhLENBQ0YsQ0FBQyxlQUdqQnBDLDBEQUFBLENBQUN1VSx1REFBUyxDQUFDYyxJQUFJO0lBQUNDLFFBQVEsRUFBQyxHQUFHO0lBQUN4UyxTQUFTLEVBQUM7RUFBTyxnQkFDNUM5QywwREFBQSxDQUFDdVUsdURBQVMsQ0FBQ2dCLE1BQU0sUUFBQyxTQUF5QixDQUFDLGVBQzVDdlYsMERBQUEsQ0FBQ3VVLHVEQUFTLENBQUMzTixJQUFJLFFBRVpoRyxVQUFVLEtBQUssV0FBVyxpQkFDekJaLDBEQUFBO0lBQUs4QyxTQUFTLEVBQUM7RUFBbUIsZ0JBQ2hDOUMsMERBQUE7SUFDRTJNLElBQUksRUFBQyxRQUFRO0lBQ2I3SixTQUFTLEVBQUMsa0NBQWtDO0lBQzVDVyxLQUFLLEVBQUU7TUFBRXFCLFFBQVEsRUFBRSxNQUFNO01BQUVpUSxPQUFPLEVBQUU7SUFBVSxDQUFFO0lBQ2hEekgsT0FBTyxFQUFFaks7RUFBcUIsR0FDL0Isb0JBRU8sQ0FBQyxlQUNUckQsMERBQUE7SUFDRTJNLElBQUksRUFBQyxRQUFRO0lBQ2I3SixTQUFTLEVBQUMsa0NBQWtDO0lBQzVDVyxLQUFLLEVBQUU7TUFBRXFCLFFBQVEsRUFBRSxNQUFNO01BQUVpUSxPQUFPLEVBQUU7SUFBVSxDQUFFO0lBQ2hEekgsT0FBTyxFQUFFaEs7RUFBdUIsR0FDakMsb0JBRU8sQ0FDTCxDQUNOLGVBQ0R0RCwwREFBQTtJQUNFMk0sSUFBSSxFQUFDLE1BQU07SUFDWGdKLFdBQVcsRUFBQyxxREFBYTtJQUN6QnBVLEtBQUssRUFBRW9ULGFBQWM7SUFDckJhLFFBQVEsRUFBR0ksQ0FBQyxJQUFLaEIsZ0JBQWdCLENBQUNnQixDQUFDLENBQUNkLE1BQU0sQ0FBQ3ZULEtBQUssQ0FBRTtJQUNsRHVCLFNBQVMsRUFBQyxtQ0FBbUM7SUFDN0NXLEtBQUssRUFBRTtNQUFFcUIsUUFBUSxFQUFFO0lBQU87RUFBRSxDQUM3QixDQUFDLEVBQ0RwRSxXQUFXLENBQ1RxQixNQUFNLENBQUNHLE9BQU8sSUFBSUEsT0FBTyxDQUFDSixRQUFRLENBQUM2UyxhQUFhLENBQUMsQ0FBQyxDQUNsRHBPLEdBQUcsQ0FBRXJFLE9BQU8saUJBQ2JsQywwREFBQTtJQUFLeUcsR0FBRyxFQUFFdkU7RUFBUSxnQkFDaEJsQywwREFBQTtJQUNFMk0sSUFBSSxFQUFFOEgsU0FBUyxDQUFDLENBQUMsQ0FBRTtJQUNuQjdSLEVBQUUsRUFBRVYsT0FBUTtJQUNadVQsT0FBTyxFQUFFelUsaUJBQWlCLENBQUNjLFFBQVEsQ0FBQ0ksT0FBTyxDQUFFO0lBQzdDc1QsUUFBUSxFQUFFQSxDQUFBLEtBQU1yUyxlQUFlLENBQUNqQixPQUFPLEVBQUV1UyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUU7SUFDdkR2QyxJQUFJLEVBQUM7RUFBUyxDQUNmLENBQUMsZUFDRmxTLDBEQUFBO0lBQU8wVixPQUFPLEVBQUV4VDtFQUFRLEdBQUVBLE9BQWUsQ0FDdEMsQ0FDTixDQUNhLENBQ0YsQ0FDUCxDQUNSLENBQ0YsQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZTVCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE42QjtBQUNoQjtBQUVuQyxNQUFNc0YsU0FBUyxHQUFHLE1BQU8wRCxHQUFHLElBQUs7RUFDL0IsSUFBSTtJQUNGLE1BQU14QixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDdUIsR0FBRyxDQUFDO0lBQ2pDLElBQUksQ0FBQ3hCLFFBQVEsQ0FBQ0UsRUFBRSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHVCQUF1QkgsUUFBUSxDQUFDeUIsTUFBTSxFQUFFLENBQUM7SUFDM0UsTUFBTXNNLFdBQVcsR0FBRy9OLFFBQVEsQ0FBQ2dPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUN4RCxJQUFJRixXQUFXLElBQUlBLFdBQVcsQ0FBQy9ULFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO01BQzNELE9BQU8sTUFBTWdHLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxNQUFNO01BQ0wsTUFBTTZGLElBQUksR0FBRyxNQUFNbEcsUUFBUSxDQUFDa0csSUFBSSxDQUFDLENBQUM7TUFDbEMsT0FBT0EsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNsTSxNQUFNLENBQUVtTSxJQUFJLElBQUtBLElBQUksQ0FBQzdDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlEO0VBQ0YsQ0FBQyxDQUFDLE9BQU8xQyxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDO0FBRUQsTUFBTXZFLGFBQWEsR0FBR2EsSUFBQSxJQUF5RTtFQUFBLElBQXhFO0lBQUVhLE1BQU07SUFBRWxGLFVBQVU7SUFBRXdCLEtBQUs7SUFBRUYsT0FBTztJQUFFMEIsSUFBSTtJQUFFMEMsU0FBUztJQUFFUDtFQUFXLENBQUMsR0FBQWQsSUFBQTtFQUN4RixNQUFNLENBQUNnRixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHakssK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDOUMsTUFBTSxDQUFDZ0csS0FBSyxFQUFFc0gsUUFBUSxDQUFDLEdBQUd0TiwrQ0FBUSxDQUFDLE9BQU8sQ0FBQztFQUUzQ0MsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsTUFBTXNOLGFBQWEsR0FBRyxNQUFBQSxDQUFBLEtBQVk7TUFDaEMsSUFBSTtRQUNGLE1BQU1FLFFBQVEsR0FBR3BILFNBQVMsSUFBSWxFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO1FBQzdDLE1BQU1vRixNQUFNLEdBQUc1RCxJQUFJLElBQUksR0FBRztRQUMxQixNQUFNb1MsY0FBYyxHQUFHO1VBQUUsR0FBRyxFQUFFLHNCQUFzQjtVQUFFLEdBQUcsRUFBRSxxQkFBcUI7VUFBRSxHQUFHLEVBQUU7UUFBc0IsQ0FBQztRQUM5RyxNQUFNckwsZUFBZSxHQUFHcUwsY0FBYyxDQUFDdkwsTUFBTSxDQUFDakQsTUFBTSxDQUFDLENBQUMsSUFBSSxxQkFBcUI7UUFDL0UsTUFBTXlPLElBQUksR0FBRyxHQUFHdE8sU0FBc0IsdUJBQXVCK0YsUUFBUSxrQkFBa0JsRyxNQUFNLElBQUltRCxlQUFlLEVBQUU7UUFDbEgsTUFBTXVMLE1BQU0sR0FBRyxHQUFHdk8sU0FBc0IsOEJBQThCO1FBRXRFLE1BQU0sQ0FBQzhCLFVBQVUsRUFBRTBNLE1BQU0sQ0FBQyxHQUFHLE1BQU10TCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUM3Q2xGLFNBQVMsQ0FBQ3FRLElBQUksQ0FBQyxFQUNmclEsU0FBUyxDQUFDc1EsTUFBTSxDQUFDLENBQ2xCLENBQUM7UUFFRixJQUFJLENBQUN6TSxVQUFVLElBQUksQ0FBQ0EsVUFBVSxDQUFDRSxTQUFTLElBQUksQ0FBQ0YsVUFBVSxDQUFDMk0sUUFBUSxFQUFFO1VBQ2hFbE0sWUFBWSxDQUFDLEVBQUUsQ0FBQztVQUNoQjtRQUNGO1FBRUEsTUFBTWdCLGVBQWUsR0FBSUMsR0FBRyxJQUMxQixPQUFPQSxHQUFHLEtBQUssUUFBUSxHQUFHQSxHQUFHLENBQUNDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJO1FBRTlELE1BQU1DLGtCQUFrQixHQUFHN0IsVUFBVSxDQUFDRSxTQUFTLENBQUNwRCxHQUFHLENBQUMyRSxlQUFlLENBQUM7UUFDcEUsTUFBTU0sWUFBWSxHQUFHRixrQkFBa0IsQ0FBQ0csT0FBTyxDQUFDUCxlQUFlLENBQUNoSixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJc0osWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFFO1VBQ3ZCNUMsT0FBTyxDQUFDeU4sSUFBSSxDQUFDLFlBQVluVSxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztVQUNsRGdJLFlBQVksQ0FBQyxFQUFFLENBQUM7VUFDaEI7UUFDRjs7UUFFQTtRQUNBLE1BQU1vTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CN00sVUFBVSxDQUFDaEUsSUFBSSxDQUFDcUUsT0FBTyxDQUFDRSxLQUFBLElBQXlCO1VBQUEsSUFBeEI7WUFBRUQsR0FBRztZQUFFd00sR0FBRztZQUFFaFY7VUFBTSxDQUFDLEdBQUF5SSxLQUFBO1VBQzFDLElBQUlELEdBQUcsS0FBS3lCLFlBQVksRUFBRTtZQUN4QjhLLFFBQVEsQ0FBQzdNLFVBQVUsQ0FBQzJNLFFBQVEsQ0FBQ0csR0FBRyxDQUFDLENBQUMsR0FBR2hWLEtBQUssR0FBRyxHQUFHO1VBQ2xEO1FBQ0YsQ0FBQyxDQUFDO1FBRUYsTUFBTXNNLFVBQVUsR0FBRzJJLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSCxRQUFRLENBQUMsQ0FDeEMvUCxHQUFHLENBQUMrTixLQUFBO1VBQUEsSUFBQyxDQUFDN04sR0FBRyxFQUFFbEYsS0FBSyxDQUFDLEdBQUErUyxLQUFBO1VBQUEsT0FBTTtZQUFFdEksUUFBUSxFQUFFdkYsR0FBRztZQUFFbEYsS0FBSztZQUFFbVYsU0FBUyxFQUFFUCxNQUFNLENBQUMxUCxHQUFHO1VBQUUsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUN6RXdGLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0EsQ0FBQyxDQUFDNUssS0FBSyxHQUFHMkssQ0FBQyxDQUFDM0ssS0FBSyxDQUFDLENBQ2pDdU0sS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFZjVELFlBQVksQ0FBQzJELFVBQVUsQ0FBQztRQUN4Qk4sUUFBUSxDQUFDLEdBQUdyTCxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJNkQsVUFBVSxFQUFFQSxVQUFVLENBQUMsQ0FBQztNQUM5QixDQUFDLENBQUMsT0FBTzRDLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxhQUFhLEVBQUVBLEtBQUssQ0FBQztNQUNyQztJQUNGLENBQUM7SUFFRCxJQUFJL0gsVUFBVSxLQUFLLFVBQVUsRUFBRTtNQUM3QjRNLGFBQWEsQ0FBQyxDQUFDO0lBQ2pCO0VBQ0YsQ0FBQyxFQUFFLENBQUM1TSxVQUFVLEVBQUV3QixLQUFLLEVBQUVGLE9BQU8sRUFBRTBCLElBQUksRUFBRStTLElBQUksQ0FBQ0MsU0FBUyxDQUFDdFEsU0FBUyxDQUFDLEVBQUVSLE1BQU0sQ0FBQyxDQUFDO0VBRXpFLG9CQUNFOUYsMERBQUE7SUFBS3lELEtBQUssRUFBRTtNQUFDZ0osU0FBUyxFQUFDLElBQUk7TUFBQ0MsWUFBWSxFQUFDLElBQUk7TUFBRXhHLEtBQUssRUFBRSxNQUFNO01BQUV4QyxNQUFNLEVBQUU7SUFBTTtFQUFFLGdCQUM1RTFELDBEQUFBLENBQUNtSix1REFBSTtJQUNIMUQsSUFBSSxFQUFFLENBQ0o7TUFDRWtILElBQUksRUFBRSxLQUFLO01BQ1h3QyxDQUFDLEVBQUVsRixTQUFTLENBQUMxRCxHQUFHLENBQUU3RSxJQUFJLElBQUtBLElBQUksQ0FBQ0gsS0FBSyxDQUFDLENBQUNzVixPQUFPLENBQUMsQ0FBQztNQUNoRHpILENBQUMsRUFBRW5GLFNBQVMsQ0FBQzFELEdBQUcsQ0FBRTdFLElBQUksSUFBS0EsSUFBSSxDQUFDc0ssUUFBUSxDQUFDLENBQUM2SyxPQUFPLENBQUMsQ0FBQztNQUNuREMsV0FBVyxFQUFFLEdBQUc7TUFDaEJqSyxNQUFNLEVBQUU7UUFBRTlILEtBQUssRUFBRTtNQUFZLENBQUM7TUFDOUJnUyxVQUFVLEVBQUU5TSxTQUFTLENBQUMxRCxHQUFHLENBQUU3RSxJQUFJLElBQUtBLElBQUksQ0FBQ2dWLFNBQVMsQ0FBQyxDQUFDRyxPQUFPLENBQUMsQ0FBQztNQUM3REcsYUFBYSxFQUFFO0lBQ2pCLENBQUMsQ0FDRDtJQUNGaFIsTUFBTSxFQUFFO01BQ05DLEtBQUssRUFBRTtRQUNMK0gsSUFBSSxFQUFFL0gsS0FBSztRQUNYa0osQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLElBQUk7UUFDUEMsT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUNEMkQsS0FBSyxFQUFFO1FBQ0xFLFNBQVMsRUFBRSxNQUFNO1FBQ2pCQyxTQUFTLEVBQUUsQ0FBQztRQUNaOEQsTUFBTSxFQUFFLEtBQUs7UUFDYkMsVUFBVSxFQUFFO01BQ2QsQ0FBQztNQUNEdkQsS0FBSyxFQUFFO1FBQ0xULFNBQVMsRUFBRSxNQUFNO1FBQ2pCQyxTQUFTLEVBQUUsQ0FBQztRQUNaOEQsTUFBTSxFQUFFLEtBQUs7UUFDYmhSLEtBQUssRUFBRTtNQUNULENBQUM7TUFDRCtHLFlBQVksRUFBRSxPQUFPO01BQ3JCQyxhQUFhLEVBQUUsT0FBTztNQUN0QkMsTUFBTSxFQUFFO1FBQUVDLENBQUMsRUFBRSxFQUFFO1FBQUVoQixDQUFDLEVBQUUsRUFBRTtRQUFFaUIsQ0FBQyxFQUFFLEVBQUU7UUFBRUMsQ0FBQyxFQUFFO01BQUcsQ0FBQztNQUN0QzhKLFVBQVUsRUFBRTtRQUNWQyxLQUFLLEVBQUUsTUFBTTtRQUNiMUgsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxFQUFFO1VBQUU1SyxLQUFLLEVBQUU7UUFBUSxDQUFDO1FBQ2xDNkssT0FBTyxFQUFFLGFBQWE7UUFDdEJrRSxXQUFXLEVBQUU7TUFDZjtJQUNGLENBQUU7SUFDRnJRLEtBQUssRUFBRTtNQUFFeUMsS0FBSyxFQUFFLE1BQU07TUFBRXhDLE1BQU0sRUFBRTtJQUFPO0VBQUUsQ0FDMUMsQ0FDRSxDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlVSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xJdUI7QUFDaEI7QUFFbkMsTUFBTXdCLFNBQVMsR0FBRyxNQUFPMEQsR0FBRyxJQUFLO0VBQy9CLElBQUk7SUFDRixNQUFNeEIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ3VCLEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUN4QixRQUFRLENBQUNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyx1QkFBdUJILFFBQVEsQ0FBQ3lCLE1BQU0sRUFBRSxDQUFDO0lBQzNFLE1BQU1zTSxXQUFXLEdBQUcvTixRQUFRLENBQUNnTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDeEQsSUFBSUYsV0FBVyxJQUFJQSxXQUFXLENBQUMvVCxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtNQUMzRCxPQUFPLE1BQU1nRyxRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUMsTUFBTTtNQUNMLE1BQU02RixJQUFJLEdBQUcsTUFBTWxHLFFBQVEsQ0FBQ2tHLElBQUksQ0FBQyxDQUFDO01BQ2xDLE9BQU9BLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDbE0sTUFBTSxDQUFFbU0sSUFBSSxJQUFLQSxJQUFJLENBQUM3QyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5RDtFQUNGLENBQUMsQ0FBQyxPQUFPMUMsS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRUEsS0FBSyxDQUFDO0lBQ3BDLE9BQU8sRUFBRTtFQUNYO0FBQ0YsQ0FBQztBQUVELE1BQU14RSxhQUFhLEdBQUdjLElBQUEsSUFBcUQ7RUFBQSxJQUFwRDtJQUFFYSxNQUFNO0lBQUVsRixVQUFVO0lBQUV3QixLQUFLO0lBQUV3QixJQUFJO0lBQUVtQztFQUFXLENBQUMsR0FBQWQsSUFBQTtFQUNwRSxNQUFNLENBQUNnRixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHakssK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDOUMsTUFBTSxDQUFDZ0csS0FBSyxFQUFFc0gsUUFBUSxDQUFDLEdBQUd0TiwrQ0FBUSxDQUFDLE9BQU8sQ0FBQztFQUUzQ0MsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsTUFBTXNOLGFBQWEsR0FBRyxNQUFBQSxDQUFBLEtBQVk7TUFDaEMsSUFBSTtRQUNGLE1BQU1FLFFBQVEsR0FBR3RMLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekIsTUFBTW9GLE1BQU0sR0FBRzVELElBQUksSUFBSSxHQUFHO1FBQzFCLE1BQU1vUyxjQUFjLEdBQUc7VUFBRSxHQUFHLEVBQUUsc0JBQXNCO1VBQUUsR0FBRyxFQUFFLHFCQUFxQjtVQUFFLEdBQUcsRUFBRTtRQUFzQixDQUFDO1FBQzlHLE1BQU1yTCxlQUFlLEdBQUdxTCxjQUFjLENBQUN2TCxNQUFNLENBQUNqRCxNQUFNLENBQUMsQ0FBQyxJQUFJLHFCQUFxQjtRQUMvRSxNQUFNeU8sSUFBSSxHQUFHLEdBQUd0TyxTQUFzQix1QkFBdUIrRixRQUFRLGtCQUFrQmxHLE1BQU0sSUFBSW1ELGVBQWUsRUFBRTtRQUNsSCxNQUFNdUwsTUFBTSxHQUFHLEdBQUd2TyxTQUFzQiw4QkFBOEI7UUFFdEUsTUFBTSxDQUFDOEIsVUFBVSxFQUFFME0sTUFBTSxDQUFDLEdBQUcsTUFBTXRMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQzdDbEYsU0FBUyxDQUFDcVEsSUFBSSxDQUFDLEVBQ2ZyUSxTQUFTLENBQUNzUSxNQUFNLENBQUMsQ0FDbEIsQ0FBQztRQUVGLElBQUksQ0FBQ3pNLFVBQVUsSUFBSSxDQUFDQSxVQUFVLENBQUMyTSxRQUFRLElBQUksQ0FBQzNNLFVBQVUsQ0FBQ2hFLElBQUksRUFBRTs7UUFFN0Q7UUFDQSxNQUFNNFIsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqQjVOLFVBQVUsQ0FBQ2hFLElBQUksQ0FBQ3FFLE9BQU8sQ0FBQ0UsS0FBQSxJQUFvQjtVQUFBLElBQW5CO1lBQUV1TSxHQUFHO1lBQUVoVjtVQUFNLENBQUMsR0FBQXlJLEtBQUE7VUFDckMsTUFBTXNOLE1BQU0sR0FBRzdOLFVBQVUsQ0FBQzJNLFFBQVEsQ0FBQ0csR0FBRyxDQUFDO1VBQ3ZDYyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUNELE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJL1YsS0FBSztRQUNoRCxDQUFDLENBQUM7UUFFRixNQUFNZ1csS0FBSyxHQUFHZixNQUFNLENBQUN0UCxNQUFNLENBQUNtUSxNQUFNLENBQUMsQ0FBQ3hMLE1BQU0sQ0FBQyxDQUFDcUUsQ0FBQyxFQUFFc0gsQ0FBQyxLQUFLdEgsQ0FBQyxHQUFHc0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5RCxNQUFNQyxhQUFhLEdBQUdqQixNQUFNLENBQUNDLE9BQU8sQ0FBQ1ksTUFBTSxDQUFDLENBQUM5USxHQUFHLENBQUMrTixLQUFBO1VBQUEsSUFBQyxDQUFDN04sR0FBRyxFQUFFbEYsS0FBSyxDQUFDLEdBQUErUyxLQUFBO1VBQUEsT0FBTTtZQUNsRXRJLFFBQVEsRUFBRXZGLEdBQUc7WUFDYmxGLEtBQUssRUFBRWdXLEtBQUssR0FBRyxDQUFDLEdBQUloVyxLQUFLLEdBQUdnVyxLQUFLLEdBQUksR0FBRyxHQUFHLENBQUM7WUFDNUNiLFNBQVMsRUFBRVAsTUFBTSxDQUFDMVAsR0FBRztVQUN2QixDQUFDO1FBQUEsQ0FBQyxDQUFDO1FBRUgsTUFBTW9ILFVBQVUsR0FBRzRKLGFBQWEsQ0FDN0J4TCxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtBLENBQUMsQ0FBQzVLLEtBQUssR0FBRzJLLENBQUMsQ0FBQzNLLEtBQUssQ0FBQyxDQUNqQ3VNLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRWY1RCxZQUFZLENBQUMyRCxVQUFVLENBQUM7UUFDeEJOLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDakIsSUFBSXhILFVBQVUsRUFBRUEsVUFBVSxDQUFDLENBQUM7TUFDOUIsQ0FBQyxDQUFDLE9BQU80QyxLQUFLLEVBQUU7UUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsYUFBYSxFQUFFQSxLQUFLLENBQUM7TUFDckM7SUFDRixDQUFDO0lBRUQsSUFBSS9ILFVBQVUsS0FBSyxXQUFXLEtBQUtrRixNQUFNLElBQUltRSxTQUFTLENBQUMzQixNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7TUFDcEVrRixhQUFhLENBQUMsQ0FBQztJQUNqQjtFQUNGLENBQUMsRUFBRSxDQUFDNU0sVUFBVSxFQUFFd0IsS0FBSyxFQUFFd0IsSUFBSSxFQUFFa0MsTUFBTSxDQUFDLENBQUM7RUFFckMsb0JBQ0U5RiwwREFBQTtJQUFLeUQsS0FBSyxFQUFFO01BQUNnSixTQUFTLEVBQUMsSUFBSTtNQUFDQyxZQUFZLEVBQUMsSUFBSTtNQUFFeEcsS0FBSyxFQUFFLE1BQU07TUFBRXhDLE1BQU0sRUFBRTtJQUFNO0VBQUUsZ0JBQzVFMUQsMERBQUEsQ0FBQ21KLHVEQUFJO0lBQ0gxRCxJQUFJLEVBQUUsQ0FDSjtNQUNFa0gsSUFBSSxFQUFFLEtBQUs7TUFDWHdDLENBQUMsRUFBRWxGLFNBQVMsQ0FBQzFELEdBQUcsQ0FBRTdFLElBQUksSUFBS0EsSUFBSSxDQUFDSCxLQUFLLENBQUMsQ0FBQ3NWLE9BQU8sQ0FBQyxDQUFDO01BQ2hEekgsQ0FBQyxFQUFFbkYsU0FBUyxDQUFDMUQsR0FBRyxDQUFFN0UsSUFBSSxJQUFLQSxJQUFJLENBQUNzSyxRQUFRLENBQUMsQ0FBQzZLLE9BQU8sQ0FBQyxDQUFDO01BQ25EQyxXQUFXLEVBQUUsR0FBRztNQUNoQmpLLE1BQU0sRUFBRTtRQUFFOUgsS0FBSyxFQUFFO01BQVksQ0FBQztNQUM5QmdTLFVBQVUsRUFBRTlNLFNBQVMsQ0FBQzFELEdBQUcsQ0FBRTdFLElBQUksSUFBS0EsSUFBSSxDQUFDZ1YsU0FBUyxDQUFDLENBQUNHLE9BQU8sQ0FBQyxDQUFDO01BQzdERyxhQUFhLEVBQUU7SUFDakIsQ0FBQyxDQUNEO0lBQ0ZoUixNQUFNLEVBQUU7TUFDTkMsS0FBSyxFQUFFO1FBQ0wrSCxJQUFJLEVBQUUvSCxLQUFLO1FBQ1hrSixDQUFDLEVBQUUsR0FBRztRQUNOQyxDQUFDLEVBQUUsSUFBSTtRQUNQQyxPQUFPLEVBQUU7TUFDWCxDQUFDO01BQ0QyRCxLQUFLLEVBQUU7UUFDTEUsU0FBUyxFQUFFLE1BQU07UUFDakJDLFNBQVMsRUFBRSxDQUFDO1FBQ1o4RCxNQUFNLEVBQUUsS0FBSztRQUNiQyxVQUFVLEVBQUU7TUFDZCxDQUFDO01BQ0R2RCxLQUFLLEVBQUU7UUFDTFQsU0FBUyxFQUFFLE1BQU07UUFDakJDLFNBQVMsRUFBRSxDQUFDO1FBQ1o4RCxNQUFNLEVBQUUsS0FBSztRQUNiaFIsS0FBSyxFQUFFO01BQ1QsQ0FBQztNQUNEK0csWUFBWSxFQUFFLE9BQU87TUFDckJDLGFBQWEsRUFBRSxPQUFPO01BQ3RCQyxNQUFNLEVBQUU7UUFBRUMsQ0FBQyxFQUFFLEVBQUU7UUFBRWhCLENBQUMsRUFBRSxFQUFFO1FBQUVpQixDQUFDLEVBQUUsRUFBRTtRQUFFQyxDQUFDLEVBQUU7TUFBRyxDQUFDO01BQ3RDOEosVUFBVSxFQUFFO1FBQ1ZDLEtBQUssRUFBRSxNQUFNO1FBQ2IxSCxJQUFJLEVBQUU7VUFBRUMsSUFBSSxFQUFFLEVBQUU7VUFBRTVLLEtBQUssRUFBRTtRQUFRLENBQUM7UUFDbEM2SyxPQUFPLEVBQUUsYUFBYTtRQUN0QmtFLFdBQVcsRUFBRTtNQUNmO0lBQ0YsQ0FBRTtJQUNGclEsS0FBSyxFQUFFO01BQUV5QyxLQUFLLEVBQUUsTUFBTTtNQUFFeEMsTUFBTSxFQUFFO0lBQU87RUFBRSxDQUMxQyxDQUNFLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVTLGFBQWE7Ozs7OztVQ3pINUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzdCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvYXBwLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvY29udGVudC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2dvLWFueXdoZXJlLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS1jb21wYW55LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvb2NjdXB5LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS10b3BpYy5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3NpZGViYXIuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy90cmVuZC1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtdG9waXguanN4Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXIuanN4JztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudC5qc3gnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGFycm93Q29sb3IgPSBbXG4gICAgJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRicsXG4gICAgJyMzRTlFNkYnLCAnI0YzODE4MScsICcjNTQ1RTc1JywgJyNGRkI2MjcnLCAnIzU3NzU5MCcsXG4gIF07XG4gIGNvbnN0IGNvbXBhbnlMaXN0ID0gW1xuICAgICfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+5aSn5p6X57WEJywgJ+a4heawtOW7uuioreagquW8j+S8muekvicsICflpKfmiJDlu7roqK3moKrlvI/kvJrnpL4nLFxuICAgICfmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupcnLCAn5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzJywgJ+WJjeeUsOW7uuioreW3pealreagquW8j+S8muekvicsXG4gICAgJ+S6lOa0i+W7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7jg5Xjgrjjgr8nLCAn5oi455Sw5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvueGiuiwt+e1hCcsXG4gIF07XG4gIGNvbnN0IHRvcGljTGlzdCA9IFsnMCcsICcxJywgJzInLCAnMycsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTEnXTtcblxuICBjb25zdCBbdmlzdWFsVHlwZSwgc2V0VmlzdWFsVHlwZV0gPSB1c2VTdGF0ZSgnb25lLXRvcGljJyk7XG4gIGNvbnN0IFtpc0FwcGxpZWQsIHNldElzQXBwbGllZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29tcGFuaWVzLCBzZXRTZWxlY3RlZENvbXBhbmllc10gPSB1c2VTdGF0ZShbJ+agquW8j+S8muekvueGiuiwt+e1hCddKTtcbiAgY29uc3QgW3NlbGVjdGVkVG9waWNzLCBzZXRTZWxlY3RlZFRvcGljc10gPSB1c2VTdGF0ZShbJzAnXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFNwYW4sIHNldFNlbGVjdGVkU3Bhbl0gPSB1c2VTdGF0ZSgnMicpO1xuXG4gIGNvbnN0IGhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRWaXN1YWxUeXBlKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcHBseSA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2VsZWN0aW9uID0gKGl0ZW0sIHNldFNlbGVjdGVkLCBidXR0b210eXBlKSA9PiB7XG4gICAgaWYgKGJ1dHRvbXR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHNldFNlbGVjdGVkKChwcmV2U2VsZWN0ZWQpID0+XG4gICAgICAgIHByZXZTZWxlY3RlZC5pbmNsdWRlcyhpdGVtKVxuICAgICAgICAgID8gcHJldlNlbGVjdGVkLmZpbHRlcigoaSkgPT4gaSAhPT0gaXRlbSlcbiAgICAgICAgICA6IFsuLi5wcmV2U2VsZWN0ZWQsIGl0ZW1dXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZChbaXRlbV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDb21wYW55Q2hlY2tib3hDaGFuZ2UgPSAoY29tcGFueSwgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbihjb21wYW55LCBzZXRTZWxlY3RlZENvbXBhbmllcywgYnV0dG9tdHlwZSk7XG4gIH07XG5cbiAgY29uc3QgVG9waWNDaGVja2JveENoYW5nZSA9ICh0b3BpYywgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbih0b3BpYywgc2V0U2VsZWN0ZWRUb3BpY3MsIGJ1dHRvbXR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNwYW5DaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRTZWxlY3RlZFNwYW4odmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbENvbXBhbmllcyA9ICgpID0+IHNldFNlbGVjdGVkQ29tcGFuaWVzKFsuLi5jb21wYW55TGlzdF0pO1xuICBjb25zdCBoYW5kbGVEZXNlbGVjdEFsbENvbXBhbmllcyA9ICgpID0+IHNldFNlbGVjdGVkQ29tcGFuaWVzKFtdKTtcbiAgY29uc3QgaGFuZGxlU2VsZWN0QWxsVG9waWNzID0gKCkgPT4gc2V0U2VsZWN0ZWRUb3BpY3MoWy4uLnRvcGljTGlzdF0pO1xuICBjb25zdCBoYW5kbGVEZXNlbGVjdEFsbFRvcGljcyA9ICgpID0+IHNldFNlbGVjdGVkVG9waWNzKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ29tcGFuaWVzKFsn5qCq5byP5Lya56S+54aK6LC357WEJ10pO1xuICAgIHNldFNlbGVjdGVkVG9waWNzKFsnMCddKTtcbiAgfSwgW3Zpc3VhbFR5cGVdKTtcblxuICBjb25zdCByZXNldElzQXBwbGllZCA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicmVhY3QtY29udGVudFwiIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XG4gICAgICA8Um93PlxuICAgICAgICB7Lyog44K144Kk44OJ44OQ44O8ICovfVxuICAgICAgICA8Q29sIG1kPXszfSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCI+XG4gICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgIG9uQXBwbHk9e2hhbmRsZUFwcGx5fVxuICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgIG9uVmlzdWFsVHlwZUNoYW5nZT17aGFuZGxlVmlzdWFsVHlwZUNoYW5nZX1cbiAgICAgICAgICAgIHRvcGljTGlzdD17dG9waWNMaXN0fVxuICAgICAgICAgICAgY29tcGFueUxpc3Q9e2NvbXBhbnlMaXN0fVxuICAgICAgICAgICAgc2VsZWN0ZWRDb21wYW5pZXM9e3NlbGVjdGVkQ29tcGFuaWVzfVxuICAgICAgICAgICAgc2VsZWN0ZWRUb3BpY3M9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgb25DaGFuZ2VUb3BpYz17VG9waWNDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGFueT17Q29tcGFueUNoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgc2VsZWN0ZWRTcGFuPXtzZWxlY3RlZFNwYW59XG4gICAgICAgICAgICBvblNwYW5DaGFuZ2U9e2hhbmRsZVNwYW5DaGFuZ2V9XG4gICAgICAgICAgICBvblNlbGVjdEFsbENvbXBhbmllcz17aGFuZGxlU2VsZWN0QWxsQ29tcGFuaWVzfVxuICAgICAgICAgICAgb25EZXNlbGVjdEFsbENvbXBhbmllcz17aGFuZGxlRGVzZWxlY3RBbGxDb21wYW5pZXN9XG4gICAgICAgICAgICBvblNlbGVjdEFsbFRvcGljcz17aGFuZGxlU2VsZWN0QWxsVG9waWNzfVxuICAgICAgICAgICAgb25EZXNlbGVjdEFsbFRvcGljcz17aGFuZGxlRGVzZWxlY3RBbGxUb3BpY3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgey8qIOODoeOCpOODs+OCs+ODs+ODhuODs+ODhCAqL31cbiAgICAgICAgPENvbCBtZD17OX0gY2xhc3NOYW1lPVwiYm9yZGVyLWVuZFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgICA8Q29udGVudFxuICAgICAgICAgICAgcGxvdD17aXNBcHBsaWVkfVxuICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgIHRvcGljPXtzZWxlY3RlZFRvcGljc31cbiAgICAgICAgICAgIGNvbXBhbnk9e3NlbGVjdGVkQ29tcGFuaWVzfVxuICAgICAgICAgICAgc3Bhbj17c2VsZWN0ZWRTcGFufVxuICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICByZXNldEFwcGx5PXtyZXNldElzQXBwbGllZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9ZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgUGxvdFBpZUEgZnJvbSAnLi9vY2N1cHkuanN4JztcbmltcG9ydCBQbG90UGllQiBmcm9tICcuL29jY3VweS1jb21wYW55LmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFDb21wIGZyb20gJy4vcGVyc29uYS1jb21wLmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFUb3BpYyBmcm9tICcuL3BlcnNvbmEtdG9waWMuanN4JztcblxuaW1wb3J0IFBsb3RCYXJDaGFydEEgZnJvbSAnLi90cmVuZC10b3BpeC5qc3gnO1xuaW1wb3J0IFBsb3RCYXJDaGFydEIgZnJvbSAnLi90cmVuZC1jb21wLmpzeCc7XG5pbXBvcnQgeyBnZXRDYXJkRGF0YSB9IGZyb20gXCIuL2dvLWFueXdoZXJlLmpzeFwiOyAvLyDmraPjgZfjgYTjg5HjgrnjgpLmjIflrppcblxuXG5cblxuXG4vLyDjg4Hjg6Pjg7zjg4joqq3jgb/ovrzjgb/kuK3jgqrjg7zjg5Djg7zjg6zjgqRcbmNvbnN0IExvYWRpbmdPdmVybGF5ID0gKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIGluc2V0OiAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjc1KScsIHpJbmRleDogMTAsIGZvbnRTaXplOiAxNSwgY29sb3I6ICcjNjY2JyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH19PlxuICAgIOiqreOBv+i+vOOBv+S4rS4uLlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENvbnRlbnQgPSAoe3Bsb3QsdmlzdWFsVHlwZSx0b3BpYyxjb21wYW55LHNwYW4sdG9waWNMaXN0LHJlc2V0QXBwbHl9KSA9PiB7XG5cbiAgICBjb25zdCBbY2xpY2tEYXRhLCBzZXRDbGlja0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lzUGllTG9hZGluZywgIHNldElzUGllTG9hZGluZ10gID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0JhckxvYWRpbmcsICBzZXRJc0JhckxvYWRpbmddICA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVBpZUNoYXJ0Q2xpY2sgPSAoZGF0YSkgPT4ge1xuICAgICAgc2V0Q2xpY2tEYXRhKGRhdGEpO1xuICAgIH07XG5cbiAgICAvLyDkvJrnpL7jg7vjg4jjg5Tjg4Pjgq/jgYzlpInjgo/jgaPjgZ/jgonjgq/jg6rjg4Pjgq/pgbjmip7jgpLjg6rjgrvjg4Pjg4jjgIHjg63jg7zjg4fjgqPjg7PjgrDplovlp4tcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0Q2xpY2tEYXRhKG51bGwpO1xuICAgICAgc2V0SXNQaWVMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0SXNCYXJMb2FkaW5nKHRydWUpO1xuICAgIH0sIFtjb21wYW55LCB0b3BpYywgc3BhbiwgdmlzdWFsVHlwZV0pO1xuXG4gICAgLy8gQXBwbHkg44Oc44K/44Oz5pmC44KC44Ot44O844OH44Kj44Oz44KwXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChwbG90ID09PSAxKSB7XG4gICAgICAgIHNldElzUGllTG9hZGluZyh0cnVlKTtcbiAgICAgICAgc2V0SXNCYXJMb2FkaW5nKHRydWUpO1xuICAgICAgfVxuICAgIH0sIFtwbG90XSk7XG5cbiAgICAvLyDjgq/jg6rjg4Pjgq/jgafjg5Djg7zjg4Hjg6Pjg7zjg4jjga7jgb/jg63jg7zjg4fjgqPjg7PjgrBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKGNsaWNrRGF0YSAhPT0gbnVsbCkgc2V0SXNCYXJMb2FkaW5nKHRydWUpO1xuICAgIH0sIFtjbGlja0RhdGFdKTtcblxuICAgIGNvbnN0IFtjYXJkRGF0YSwgc2V0Q2FyZERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENhcmREYXRhKHBsb3QsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBjbGlja0RhdGEpO1xuICAgICAgICBzZXRDYXJkRGF0YShkYXRhKTtcbiAgICAgIH07XG4gICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbcGxvdCwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIGNsaWNrRGF0YV0pO1xuICBcbiAgICBcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgey8qIEZpcnN0IFJvdyAqL31cbiAgICAgIDxSb3cgc3R5bGU9e3sgaGVpZ2h0OiAnNTB2aCcgfX0+XG4gICAgICAgIHsvKiBQZXJzb25hIEdyYXBoICovfVxuICAgICAgICA8Q29sIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAlJyB9fT5cblxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYVRvcGljXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzUwdmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiNTB2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFDb21wXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQydmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8L0NvbD5cbiAgPC9Sb3c+XG5cbiAgICAgIHsvKiBTZWNvbmQgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgPENvbCBtZD17Nn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAge2lzUGllTG9hZGluZyAmJiA8TG9hZGluZ092ZXJsYXkgLz59XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgICAgPFBsb3RQaWVBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXsoKSA9PiB7IHNldElzUGllTG9hZGluZyhmYWxzZSk7IHJlc2V0QXBwbHkoKTsgfX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7IHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnODAlJyB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIHNwYW49e3NwYW59XG4gICAgICAgICAgICAgIHRvcGljTGlzdD17dG9waWNMaXN0fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXsoKSA9PiB7IHNldElzUGllTG9hZGluZyhmYWxzZSk7IHJlc2V0QXBwbHkoKTsgfX1cbiAgICAgICAgICAgICAgb25DbGlja0RhdGE9e2hhbmRsZVBpZUNoYXJ0Q2xpY2t9XG4gICAgICAgICAgICAgIGxheW91dD17eyB0aXRsZTogJ+azqOebruS8gealreOBrualreeVjOOBq+WvvuOBmeOCi+WNoOacieeOhycsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzgwJScgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgbWQ9ezZ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIHtpc0JhckxvYWRpbmcgJiYgPExvYWRpbmdPdmVybGF5IC8+fVxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QVxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17KCkgPT4gc2V0SXNCYXJMb2FkaW5nKGZhbHNlKX1cbiAgICAgICAgICAgIGxheW91dD17eyB0aXRsZTogJ0ZJ44Gu5YiG5biDJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnODAlJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KTooXG4gICAgICAgICAgPFBsb3RCYXJDaGFydEJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIHNwYW49e3NwYW59XG4gICAgICAgICAgICAgIGNsaWNrZGF0YT17Y2xpY2tEYXRhfVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXsoKSA9PiBzZXRJc0JhckxvYWRpbmcoZmFsc2UpfVxuICAgICAgICAgICAgbGF5b3V0PXt7IHRpdGxlOiAnRknjga7liIbluIMnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc4MCUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pfVxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAge2NhcmREYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPENvbFxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgeHM9ezEyfSAvLyDlkITjgqvjg7zjg4njgpIx6KGM44Gr6KGo56S644CB44Os44Kk44Ki44Km44OI44Gr5b+c44GY44Gm6Kq/5pW05Y+v6IO9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4OiBcIjEgMSBhdXRvXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInctNzUgaC03NVwiPlxuICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbCB8fCBpdGVtLmRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZXMuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICApKX1cbiAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG5cbiIsIi8vIGFueXdoZXJlXzUuanNvbiDlvaLlvI86XG4vLyBbe1wiY29tcGFueVwiOiBcIi4uLlwiLCBcImNvbG9yXCI6IFwiLi4uXCIsIFwibm92ZWx0eV91cFwiOiBbLi4uXSwgXCJub3ZlbHR5X2Rvd25cIjogWy4uLl0sIFwiYWRhcHRfdXBcIjogWy4uLl0sIFwiYWRhcHRfZG93blwiOiBbLi4uXX1dXG4vLyBGSeOCs+ODvOODieOBr+aWh+Wtl+WIl+OBp+ebtOaOpeagvOe0jeOBleOCjOOBpuOBhOOCi++8iOOCpOODs+ODh+ODg+OCr+OCueOBp+OBr+OBquOBhO+8iVxuZXhwb3J0IGNvbnN0IGdldENhcmREYXRhID0gYXN5bmMgKHBsb3QsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBjbGlja2VkVG9waWMpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAodmlzdWFsVHlwZSAhPT0gXCJvbmUtY29tcFwiKSByZXR1cm4gW107XG5cbiAgICAvLyBvbmUtY29tcDog44Kv44Oq44OD44Kv44GV44KM44Gf44OI44OU44OD44Kv5YSq5YWI44CB44Gq44GR44KM44Gw6YG45oqe5Lit44OI44OU44OD44KvXG4gICAgY29uc3QgdGFyZ2V0VG9waWMgPSB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCJcbiAgICAgID8gKGNsaWNrZWRUb3BpYyA/IChBcnJheS5pc0FycmF5KGNsaWNrZWRUb3BpYykgPyBjbGlja2VkVG9waWNbMF0gOiBjbGlja2VkVG9waWMpIDogKEFycmF5LmlzQXJyYXkodG9waWMpID8gdG9waWNbMF0gOiB0b3BpYykpXG4gICAgICA6IChBcnJheS5pc0FycmF5KHRvcGljKSA/IHRvcGljWzBdIDogdG9waWMpO1xuICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgY29uc3QgdGFyZ2V0Q29tcGFueSA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55WzBdIDogKGNvbXBhbnkgfHwgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIik7XG5cbiAgICBjb25zdCBkYXRhUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvYXBwX2RhdGEvdG9waWMke3RhcmdldFRvcGljfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS9hbnl3aGVyZV81Lmpzb25gO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwi44OH44O844K/44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfXCIpO1xuXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGpzb25EYXRhKSkgcmV0dXJuIFtdO1xuXG4gICAgLy8g5a++6LGh5LyB5qWt44Gu44OH44O844K/44KS5o6i44GZ77yI6KaL44Gk44GL44KJ44Gq44GR44KM44Gw5pyA5Yid44Gu5LyB5qWt44KS5L2/44GG77yJXG4gICAgbGV0IGNvbXBhbnlFbnRyeSA9IGpzb25EYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmNvbXBhbnkgPT09IHRhcmdldENvbXBhbnkpO1xuICAgIGlmICghY29tcGFueUVudHJ5ICYmIGpzb25EYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbXBhbnlFbnRyeSA9IGpzb25EYXRhWzBdO1xuICAgIH1cbiAgICBpZiAoIWNvbXBhbnlFbnRyeSkgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHsgZGlyZWN0aW9uOiBcIm5vdmVsdHlfdXBcIiwgICBsYWJlbDogXCLmlrDopo/mgKfihpFcIiwgdmFsdWVzOiBjb21wYW55RW50cnkubm92ZWx0eV91cCAgIHx8IFtdIH0sXG4gICAgICB7IGRpcmVjdGlvbjogXCJub3ZlbHR5X2Rvd25cIiwgbGFiZWw6IFwi5paw6KaP5oCn4oaTXCIsIHZhbHVlczogY29tcGFueUVudHJ5Lm5vdmVsdHlfZG93biB8fCBbXSB9LFxuICAgICAgeyBkaXJlY3Rpb246IFwiYWRhcHRfdXBcIiwgICAgIGxhYmVsOiBcIumghuW/nOaAp+KGkVwiLCB2YWx1ZXM6IGNvbXBhbnlFbnRyeS5hZGFwdF91cCAgICAgfHwgW10gfSxcbiAgICAgIHsgZGlyZWN0aW9uOiBcImFkYXB0X2Rvd25cIiwgICBsYWJlbDogXCLpoIblv5zmgKfihpNcIiwgdmFsdWVzOiBjb21wYW55RW50cnkuYWRhcHRfZG93biAgIHx8IFtdIH0sXG4gICAgXTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Gr5aSx5pWX44GX44G+44GX44GfOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwLmpzeFwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cbmNvbnN0IGNvbG9ybWFwID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6J3JnYigyMjksIDEzNCwgNiknLCBcIuWcsOebpOaUueiJr1wiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi44OI44Oz44ON44Or5o6Y5YmKXCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgXCLlhY3pnIfmp4vpgKBcIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIueuoeeQhuOCt+OCueODhuODoFwiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5buD5qOE54mp5Yem55CGXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gIFwi5bu656+J44OR44ON44OrXCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuepuuiqv+OCt+OCueODhuODoFwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5o6Y5YmK6KOF572uXCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG59O1xuXG5jb25zdCBmZXRjaEpzb24gPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLy8ge2NvbXBhbmllcywgZmlfY29kZXMsIGRhdGF9IOW9ouW8j+OBruOCueODkeODvOOCueODh+ODvOOCv+OBi+OCieihjOaWueWQkeOBruWSjOOCkuioiOeul1xuY29uc3QgZ2V0Um93U3VtcyA9IChvY2N1cHlKc29uKSA9PiB7XG4gIGNvbnN0IG51bVJvd3MgPSBvY2N1cHlKc29uLmNvbXBhbmllcy5sZW5ndGg7XG4gIGNvbnN0IHN1bXMgPSBBcnJheShudW1Sb3dzKS5maWxsKDApO1xuICBvY2N1cHlKc29uLmRhdGEuZm9yRWFjaCgoeyByb3csIHZhbHVlIH0pID0+IHtcbiAgICBzdW1zW3Jvd10gKz0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gc3Vtcztcbn07XG5cbmNvbnN0IFBsb3RQaWVCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3BhbiwgdG9waWNMaXN0LCBvblJlbmRlcmVkLCBvbkNsaWNrRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICBjb25zdCBUb3BpY3RvSWQgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjpcIjJcIixcIuWcsOebpOaUueiJr1wiOlwiM1wiLFwi44OI44Oz44ON44Or5o6Y5YmKXCI6XCIxXCIsXG4gICAgXCLlhY3pnIfmp4vpgKBcIjpcIjBcIixcIueuoeeQhuOCt+OCueODhuODoFwiOlwiOVwiLFwi5buD5qOE54mp5Yem55CGXCI6XCI2XCIsXCLlu7rnr4njg5Hjg43jg6tcIjpcIjhcIixcbiAgICBcIuepuuiqv+OCt+OCueODhuODoFwiOlwiN1wiLFwi5o6Y5YmK6KOF572uXCI6XCIxMVwiLFwi5bu656+J6Kit6KiIXCI6XCIxMFwiLFwi44OI44Oz44ON44Or5ris6YePXCI6XCI1XCJ9O1xuXG4gIGNvbnN0IGRhdGFDYWNoZSA9IHVzZVJlZih7fSk7XG5cbiAgLy8g44K144Kk44OJ44OQ44O844GudG9waWNMaXN044KS5L2/44GG77yI5pyq5oyH5a6a5pmC44Gv44OV44Kp44O844Or44OQ44OD44Kv77yJXG4gIGNvbnN0IHRhcmdldFRvcGljcyA9ICh0b3BpY0xpc3QgJiYgdG9waWNMaXN0Lmxlbmd0aCA+IDApXG4gICAgPyB0b3BpY0xpc3QubWFwKE51bWJlcilcbiAgICA6IFsyLCAzLCAxLCAwLCA5LCA2LCA4LCA3LCAxMV07XG5cbiAgLy8gc3BhbuOBq+OCiOOBo+OBpm9jY3VweV90b3BpY+OBruODleOCoeOCpOODq+WQjeOBjOeVsOOBquOCi1xuICBjb25zdCBnZXRPY2N1cHlUb3BpY0ZpbGUgPSAoc3BhbklkKSA9PiB7XG4gICAgY29uc3QgbWFwID0geyAnMSc6ICdvY2N1cHlfdG9waWNfMjAuanNvbicsICcyJzogJ29jY3VweV90b3BpY185Lmpzb24nLCAnMyc6ICdvY2N1cHlfdG9waWNfNi5qc29uJyB9O1xuICAgIHJldHVybiBtYXBbU3RyaW5nKHNwYW5JZCldIHx8ICdvY2N1cHlfdG9waWNfOS5qc29uJztcbiAgfTtcblxuICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgIGNvbnN0IG9jY3VweVRvcGljRmlsZSA9IGdldE9jY3VweVRvcGljRmlsZShzcGFuSWQpO1xuICAgICAgY29uc3QgYWxsVG9waWNzRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICB0YXJnZXRUb3BpY3MubWFwKGFzeW5jICh0YXJnZXRfaWQpID0+IHtcbiAgICAgICAgICBjb25zdCBjYWNoZUtleSA9IGAke3RhcmdldF9pZH0tJHtzcGFuSWR9LSR7Y29tcGFueVswXX1gO1xuICAgICAgICAgIGlmICghZGF0YUNhY2hlLmN1cnJlbnRbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2FwcF9kYXRhL3RvcGljJHt0YXJnZXRfaWR9L3BlcnNvbmE9NS9zcGFuJHtzcGFuSWR9LyR7b2NjdXB5VG9waWNGaWxlfWA7XG4gICAgICAgICAgICBkYXRhQ2FjaGUuY3VycmVudFtjYWNoZUtleV0gPSBhd2FpdCBmZXRjaEpzb24odXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBvY2N1cHlKc29uID0gZGF0YUNhY2hlLmN1cnJlbnRbY2FjaGVLZXldO1xuICAgICAgICAgIGlmICghb2NjdXB5SnNvbiB8fCAhb2NjdXB5SnNvbi5jb21wYW5pZXMpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cikgPT5cbiAgICAgICAgICAgIHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIgPyBzdHIubm9ybWFsaXplKFwiTkZDXCIpLnRyaW0oKSA6IG51bGw7XG5cbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW5pZXMgPSBvY2N1cHlKc29uLmNvbXBhbmllcy5tYXAobm9ybWFsaXplU3RyaW5nKTtcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW55ID0gbm9ybWFsaXplU3RyaW5nKGNvbXBhbnlbMF0pO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gc2FuaXRpemVkQ29tcGFuaWVzLmluZGV4T2Yoc2FuaXRpemVkQ29tcGFueSk7XG4gICAgICAgICAgaWYgKGNvbXBhbnlJbmRleCA9PT0gLTEpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgY29uc3Qgcm93U3VtcyA9IGdldFJvd1N1bXMob2NjdXB5SnNvbik7XG4gICAgICAgICAgcmV0dXJuIHsgdG9waWM6IHRhcmdldF9pZCwgdmFsdWU6IHJvd1N1bXNbY29tcGFueUluZGV4XSB9O1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gYWxsVG9waWNzRGF0YS5maWx0ZXIoKGRhdGEpID0+IGRhdGEgIT09IG51bGwpO1xuICAgICAgY29uc3QgdG90YWxWYWx1ZSA9IGZpbHRlcmVkRGF0YS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS52YWx1ZSwgMCk7XG4gICAgICBpZiAodG90YWxWYWx1ZSA9PT0gMCkge1xuICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRhID0gZmlsdGVyZWREYXRhXG4gICAgICAgIC5tYXAoaXRlbSA9PiAoeyBjYXRlZ29yeTogaXRlbS50b3BpYywgdmFsdWU6IGl0ZW0udmFsdWUgLyB0b3RhbFZhbHVlIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xuXG4gICAgICBzZXRDaGFydERhdGEobm9ybWFsaXplZERhdGEpO1xuICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIpIHtcbiAgICAgIGxvYWREYXRhKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCB2aXN1YWxUeXBlLCBzcGFuLCBjb21wYW55LCB0b3BpY0xpc3RdKTtcblxuICBjb25zdCBoYW5kbGVQbG90Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRzICYmIGV2ZW50LnBvaW50c1swXSkge1xuICAgICAgY29uc3QgY2xpY2tkYXRhID0gZXZlbnQucG9pbnRzWzBdLmxhYmVsOyAvLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/pg6jliIbjga7jg6njg5njg6tcbiAgICAgIGNvbnN0IGxhYmVsID0gVG9waWN0b0lkW2NsaWNrZGF0YV1cbiAgICAgIGNvbnN0IHRvcGljaWQgPSBsYWJlbC5yZXBsYWNlKFwiVG9waWMgXCIsIFwiXCIpO1xuICAgICAgb25DbGlja0RhdGEoW3RvcGljaWRdKTsgLy8g6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Op44OZ44Or44KS6YCa55+lXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHZhbHVlczogY2hhcnREYXRhLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gIElkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW0lkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldXSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiBgJHtjb21wYW55WzBdIHx8IFwiXCJ9IOOBruWHuumhmOeJueiosSDjg4jjg5Tjg4Pjgq/liIbluINgLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgICAgb25DbGljaz17aGFuZGxlUGxvdENsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jgqTjg5njg7Pjg4jjgpLov73liqBcbiAgICAgIC8+XG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQaWVBID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgc3Bhbiwgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG5cbiAgY29uc3QgY29sb3JtYXAgPSB7J+m5v+WztuW7uuioreagquW8j+S8muekvic6J3JnYigyMjksIDEzNCwgNiknLCBcIuagquW8j+S8muekvuWkp+ael+e1hFwiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi5riF5rC05bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgICAgIFwi5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupdcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuagquW8j+S8muekvumVt+iwt+W3peOCs+ODvOODneODrOODvOOCt+ODp+ODs1wiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICAgICAgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgICAgIFwi5oi455Sw5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigyMzcsIDEwMCwgOTApJywgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIjoncmdiKDE2NSwgMTcwLCAxNTMpJ307XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDA7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWMgfHwgXCIwXCI7XG4gICAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICAgIGNvbnN0IGRhdGFVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2FwcF9kYXRhL3RvcGljJHt0YXJnZXRJZH0vcGVyc29uYT01L3NwYW4ke3NwYW5JZH0vb2NjdXB5X21lYW5fJHt0aW1lfS5qc29uYDtcblxuICAgICAgICAvLyBbe1wiY29tcGFueVwiOiBcIi4uLlwiLCBcInZhbHVlXCI6IDAueHh4fSwgLi4uXSDlvaLlvI9cbiAgICAgICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGZldGNoRGF0YShkYXRhVXJsKTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJhd0RhdGEpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IHJhd0RhdGFcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS52YWx1ZSAhPT0gbnVsbClcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKVxuICAgICAgICAgIC5tYXAoaXRlbSA9PiAoeyBsYWJlbDogaXRlbS5jb21wYW55LCB2YWx1ZTogaXRlbS52YWx1ZSB9KSk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtJZHRvVG9waWNbdGFyZ2V0SWRdfeOBq+mWouOBmeOCi+eJueioseOBruS8gealreWNoOacieeOh2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODgeODo+ODvOODiOODh+ODvOOCv+OBruWHpueQhuS4reOBq+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIikge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIHNwYW4sIG9uUmVuZGVyZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW2l0ZW0ubGFiZWxdKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gIFxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuXG4gXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Db21wID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3Bhbiwgb25SZW5kZXJlZCB9KSA9PiB7XG5jb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCJ9O1xuXG5jb25zdCBjb2xvcm1hcCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLlnLDnm6TmlLnoia9cIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIuODiOODs+ODjeODq+aOmOWJilwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gICAgICAgICAgXCLlhY3pnIfmp4vpgKBcIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIueuoeeQhuOCt+OCueODhuODoFwiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5buD5qOE54mp5Yem55CGXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gICAgICAgICAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gIGNvbnN0IGFycm93X2NvbG9yID0gWycjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnXTtcblxuICBjb25zdCBbcHJlcGFyZWREYXRhLCBzZXRQcmVwYXJlZERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmaWdEYXRhLCBzZXRGaWdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fubm90YXRpb25zLCBzZXRBbm5vdGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCLkvIHmpa3jga7nq4vjgaHkvY3nva5cIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gNOixoemZkOOBruWbuuWumuODqeODmeODq++8iOi7uOOBruaEj+WRs+OBq+WQiOOCj+OBm+OBn+iqrOaYju+8iVxuICAvLyBYPeaWsOimj+aAp++8iOS9jjrkvJ3ntbHnmoTjgJzpq5g66Z2p5paw55qE77yJ44CBWT3poIblv5zmgKfvvIjkvY4654us6Ieq6Lev57ea44Cc6auYOualreeVjOi/vemaj++8iVxuICBjb25zdCBxdWFkcmFudExhYmVscyA9IFtcbiAgICB7IHg6IDAuMDIsIHk6IDAuOTcsIHRleHQ6ICfmpa3nlYzjga7mtYHjgozjgavkuZfjgoo8YnI+5Lyd57Wx55qE5oqA6KGT44KS56Oo44GPJywgICB4YW5jaG9yOiAnbGVmdCcsICB5YW5jaG9yOiAndG9wJyAgICB9LFxuICAgIHsgeDogMC45OCwgeTogMC45NywgdGV4dDogJ+alreeVjOOBrua1geOCjOOBq+S5l+OCijxicj7pnanmlrDnmoTmioDooZPjgavmjJHmiKYnLCAgIHhhbmNob3I6ICdyaWdodCcsIHlhbmNob3I6ICd0b3AnICAgIH0sXG4gICAgeyB4OiAwLjAyLCB5OiAwLjAzLCB0ZXh0OiAn54us6Ieq6Lev57ea44GnPGJyPuS8nee1seeahOaKgOihk+OBq+eJueWMlicsICAgICAgICAgeGFuY2hvcjogJ2xlZnQnLCAgeWFuY2hvcjogJ2JvdHRvbScgfSxcbiAgICB7IHg6IDAuOTgsIHk6IDAuMDMsIHRleHQ6ICfni6zoh6rot6/nt5rjgac8YnI+6Z2p5paw55qE5oqA6KGT44Gr5oyR5oimJywgICAgICAgICB4YW5jaG9yOiAncmlnaHQnLCB5YW5jaG9yOiAnYm90dG9tJyB9LFxuICBdLm1hcCgoeyB4LCB5LCB0ZXh0LCB4YW5jaG9yLCB5YW5jaG9yIH0pID0+ICh7XG4gICAgeHJlZjogJ3BhcGVyJywgeXJlZjogJ3BhcGVyJywgeCwgeSwgdGV4dCwgeGFuY2hvciwgeWFuY2hvcixcbiAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgIGZvbnQ6IHsgc2l6ZTogOCwgY29sb3I6ICdncmF5JyB9LFxuICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNiknLFxuICAgIGJvcmRlcnBhZDogMixcbiAgfSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlcGFyZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxQcm9taXNlcyA9ICh0b3BpYyB8fCBbXCJkZWZhdWx0X3RvcGljXCJdKS5tYXAoYXN5bmMgKHRhcmdldF9pZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b3BpY1wiLHRhcmdldF9pZClcbiAgICAgICAgICBjb25zdCBjb2x1bW5QYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vcGFyYW0vcGF0ZW50L3RvcGljPSR7dGFyZ2V0X2lkfS9jb21wYW55YDtcbiAgICAgICAgICBjb25zdCBjb21wYW5pZXMgPSBhd2FpdCBsb2FkQ29tcGFuaWVzKGNvbHVtblBhdGgpO1xuXG4gICAgICAgICAgLy8gTkZD5q2j6KaP5YyW44Gn56K65a6f44Gr44Oe44OD44OB44Oz44KwXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplID0gKHMpID0+IHR5cGVvZiBzID09PSAnc3RyaW5nJyA/IHMubm9ybWFsaXplKCdORkMnKS50cmltKCkgOiAnJztcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVkQ29tcGFuaWVzID0gY29tcGFuaWVzLm1hcChub3JtYWxpemUpO1xuICAgICAgICAgIGNvbnN0IGNvbXBhbnlEaWN0ID0gbm9ybWFsaXplZENvbXBhbmllcy5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgYWNjW3ZhbHVlXSA9IGlkeDtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgY29uc3QgbmV3U2VhcmNoTGlzdCA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55IDogW2NvbXBhbnldO1xuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkU2VhcmNoTGlzdCA9IG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IG5vcm1hbGl6ZSh2YWx1ZSkgaW4gY29tcGFueURpY3QpO1xuXG4gICAgICAgICAgLy8gc3BhbuWIpeOBq+WtmOWcqOOBmeOCi+ODleOCoeOCpOODq+aVsOOCkuaxuuWumlxuICAgICAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICAgICAgY29uc3Qgc3BhblRvTWF4UCA9IHsgJzEnOiAyMCwgJzInOiA5LCAnMyc6IDYgfTtcbiAgICAgICAgICBjb25zdCBtYXhQID0gc3BhblRvTWF4UFtTdHJpbmcoc3BhbklkKV0gPz8gOTtcbiAgICAgICAgICBjb25zdCBudW1Qb2ludHMgPSBtYXhQICsgMTtcblxuICAgICAgICAgIGNvbnN0IG5vZGVfYWxwaGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWx0ZXJlZFNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KG51bVBvaW50cykuZmlsbCgwKSk7XG4gICAgICAgICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsdGVyZWRTZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheShudW1Qb2ludHMpLmZpbGwoMCkpO1xuXG4gICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Qb2ludHMgfSwgKF8sIHApID0+IHApLm1hcChhc3luYyAocCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3BhcmFtL3BhdGVudC90b3BpYz0ke3RhcmdldF9pZH0vc3Bhbj0ke3NwYW5JZH0vdGVzdF9vcHRpbWl6ZV8ke3B9YDtcbiAgICAgICAgICAgIGNvbnN0IHsgYWxwaGFfbGksIGJldGFfbGkgfSA9IGF3YWl0IHRvTGlzdChwYXJhbWV0ZXJQYXRoKTtcblxuICAgICAgICAgICAgZmlsdGVyZWRTZWFyY2hMaXN0LmZvckVhY2goKGssIGopID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWR4ID0gbm9ybWFsaXplZENvbXBhbmllcy5pbmRleE9mKG5vcm1hbGl6ZShrKSk7XG4gICAgICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwXSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICAgICAgbm9kZV9iZXRhW2pdW3BdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICAgIHJldHVybiB7IG5vZGVfYWxwaGEsIG5vZGVfYmV0YSwgZmlsdGVyZWRTZWFyY2hMaXN0IH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChhbGxQcm9taXNlcyk7XG5cbiAgICAgICAgY29uc3QgY29tYmluZWRBbHBoYSA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0Lm5vZGVfYWxwaGEpO1xuICAgICAgICBjb25zdCBjb21iaW5lZEJldGEgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5ub2RlX2JldGEpO1xuICAgICAgICBjb25zdCBjb21iaW5lZFNlYXJjaExpc3QgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5maWx0ZXJlZFNlYXJjaExpc3QpO1xuXG4gICAgICAgIHNldFByZXBhcmVkRGF0YSh7IGFscGhhOiBjb21iaW5lZEFscGhhLCBiZXRhOiBjb21iaW5lZEJldGEsIHNlYXJjaExpc3Q6IGNvbWJpbmVkU2VhcmNoTGlzdCB9KTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueX3jga7mpa3nlYzjgafjga7nq4vjgaHkvY3nva5gKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/mupblgpnkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOWIneacn+ODrOODs+ODgOODquODs+OCsOaZguOBq+OCguODh+ODvOOCv+OCkua6luWCmVxuICAgIHByZXBhcmVEYXRhKCk7XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3Bhbl0pO1xuXG4gIC8vIHByZXBhcmVkRGF0YSDjgYzmj4PjgaPjgZ/jgonoh6rli5Xjgafmj4/nlLtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByZXBhcmVkRGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcGxvdERhdGEgPSBwcmVwYXJlZERhdGEuc2VhcmNoTGlzdC5tYXAoKGssIGopID0+IHtcbiAgICAgIGNvbnN0IG4gPSBwcmVwYXJlZERhdGEuYWxwaGFbal0ubGVuZ3RoO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogcHJlcGFyZWREYXRhLmFscGhhW2pdLFxuICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXSxcbiAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzXCIsXG4gICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgIHN5bWJvbDogcHJlcGFyZWREYXRhLmFscGhhW2pdLm1hcCgoXywgaSkgPT4gaSA9PT0gMCA/ICdzcXVhcmUnIDogaSA9PT0gbiAtIDEgPyAnc3RhcicgOiAnY2lyY2xlJyksXG4gICAgICAgICAgY29sb3I6IGNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY1tqICUgdG9waWMubGVuZ3RoXV1dLFxuICAgICAgICAgIHNpemU6IHByZXBhcmVkRGF0YS5hbHBoYVtqXS5tYXAoKF8sIGkpID0+IGkgPT09IDAgfHwgaSA9PT0gbiAtIDEgPyA5IDogNSksXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IElkdG9Ub3BpY1t0b3BpY1tqICUgdG9waWMubGVuZ3RoXV0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8g5YWo5pmC54K56ZaT44Gr55+i5Y2w44KS5o+P55S7XG4gICAgY29uc3QgcGxvdEFubm90YXRpb25zID0gcHJlcGFyZWREYXRhLnNlYXJjaExpc3QuZmxhdE1hcCgoaywgaikgPT5cbiAgICAgIEFycmF5KHByZXBhcmVkRGF0YS5hbHBoYVtqXS5sZW5ndGggLSAxKS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgeDogcHJlcGFyZWREYXRhLmFscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgeTogcHJlcGFyZWREYXRhLmJldGFbal1baSArIDFdLFxuICAgICAgICB4cmVmOiAneCcsIHlyZWY6ICd5JyxcbiAgICAgICAgYXhyZWY6ICd4JywgYXlyZWY6ICd5JyxcbiAgICAgICAgYXg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXVtpXSxcbiAgICAgICAgYXk6IHByZXBhcmVkRGF0YS5iZXRhW2pdW2ldLFxuICAgICAgICBhcnJvd2NvbG9yOiBjb2xvcm1hcFtJZHRvVG9waWNbdG9waWNbaiAlIHRvcGljLmxlbmd0aF1dXSxcbiAgICAgICAgYXJyb3dzaXplOiAxLjIsIGFycm93d2lkdGg6IDEuMiwgYXJyb3doZWFkOiA1LFxuICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICB9KSlcbiAgICApO1xuXG4gICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgLy8g55+i5Y2w44Ki44OO44OG44O844K344On44Oz77yLNOixoemZkOODqeODmeODq+OCkuWQiOOCj+OBm+OBpuioreWumlxuICAgIHNldEFubm90YXRpb25zKFsuLi5wbG90QW5ub3RhdGlvbnMsIC4uLnF1YWRyYW50TGFiZWxzXSk7XG4gICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgfSwgW3ByZXBhcmVkRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHZoJywgaGVpZ2h0OiAnMTAwdmgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC43NSknLCB6SW5kZXg6IDEwLCBmb250U2l6ZTogMTYsIGNvbG9yOiAnIzU1NScsXG4gICAgICAgIH19PlxuICAgICAgICAgIOiqreOBv+i+vOOBv+S4rS4uLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHhyZWY6ICdwYXBlcicsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgfSxcblxuICAgICAgICAgXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLmlrDopo/mgKdcIixcbiAgICAgICAgICAgIHJhbmdlOiBbLTAuMDUsIDEuMTVdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAsIDAuNSwgMV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6IDI1LFxuICAgICAgICAgICAgcmFuZ2U6IFswLjgsIDIuMTVdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzEsIDEuNSwgMl0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDQwLCBsOiA0NSwgcjogNTAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIydmhcIiwgd2lkdGg6IFwiMTAwdmhcIiwgaGVpZ2h0OiBcIjQ1dmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGVyc29uQ29tcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5jb25zdCBjb2xvcm1hcCA9IHsn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JzoncmdiKDIyOSwgMTM0LCA2KScsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWkp+aIkOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDIzNywgMTAwLCA5MCknLCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiOidyZ2IoMTY1LCAxNzAsIDE1MyknfTtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCB0b0xpc3QgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICBjb25zdCBhbHBoYV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMF0pKTtcbiAgICBjb25zdCBiZXRhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVsxXSkpO1xuXG4gICAgcmV0dXJuIHsgYWxwaGFfbGksIGJldGFfbGkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYWxwaGFfbGk6IFtdLCBiZXRhX2xpOiBbXSB9O1xuICB9XG59O1xuXG5jb25zdCBQbG90UGVyc29uVG9waWMgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgYXJyb3dfY29sb3IgPSBbJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRiddO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29tcGFueUxpc3QsIHNldENvbXBhbnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaExpc3QsIHNldFNlYXJjaExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIDTosaHpmZDjga7lm7rlrprjg6njg5njg6vvvIjou7jjga7mhI/lkbPjgavlkIjjgo/jgZvjgZ/oqqzmmI7vvIlcbiAgLy8gWD3mlrDopo/mgKfvvIjkvY465Lyd57Wx55qE44Cc6auYOumdqeaWsOeahO+8ieOAgVk96aCG5b+c5oCn77yI5L2OOueLrOiHqui3r+e3muOAnOmrmDrmpa3nlYzov73pmo/vvIlcbiAgY29uc3QgcXVhZHJhbnRMYWJlbHMgPSBbXG4gICAgeyB4OiAwLjAyLCB5OiAwLjk3LCB0ZXh0OiAn5qWt55WM44Gu5rWB44KM44Gr5LmX44KKPGJyPuS8nee1seeahOaKgOihk+OCkuejqOOBjycsICAgeGFuY2hvcjogJ2xlZnQnLCAgeWFuY2hvcjogJ3RvcCcgICAgfSxcbiAgICB7IHg6IDAuOTgsIHk6IDAuOTcsIHRleHQ6ICfmpa3nlYzjga7mtYHjgozjgavkuZfjgoo8YnI+6Z2p5paw55qE5oqA6KGT44Gr5oyR5oimJywgICB4YW5jaG9yOiAncmlnaHQnLCB5YW5jaG9yOiAndG9wJyAgICB9LFxuICAgIHsgeDogMC4wMiwgeTogMC4wMywgdGV4dDogJ+eLrOiHqui3r+e3muOBpzxicj7kvJ3ntbHnmoTmioDooZPjgavnibnljJYnLCAgICAgICAgIHhhbmNob3I6ICdsZWZ0JywgIHlhbmNob3I6ICdib3R0b20nIH0sXG4gICAgeyB4OiAwLjk4LCB5OiAwLjAzLCB0ZXh0OiAn54us6Ieq6Lev57ea44GnPGJyPumdqeaWsOeahOaKgOihk+OBq+aMkeaIpicsICAgICAgICAgeGFuY2hvcjogJ3JpZ2h0JywgeWFuY2hvcjogJ2JvdHRvbScgfSxcbiAgXS5tYXAoKHsgeCwgeSwgdGV4dCwgeGFuY2hvciwgeWFuY2hvciB9KSA9PiAoe1xuICAgIHhyZWY6ICdwYXBlcicsIHlyZWY6ICdwYXBlcicsIHgsIHksIHRleHQsIHhhbmNob3IsIHlhbmNob3IsXG4gICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICBmb250OiB7IHNpemU6IDgsIGNvbG9yOiAnZ3JheScgfSxcbiAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjYpJyxcbiAgICBib3JkZXJwYWQ6IDIsXG4gIH0pKTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gIC8vIOWIneacn+ODh+ODvOOCv+OBruODreODvOODiVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiICYmIHRvcGljKSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCB0YXJnZXRfaWQgPSB0b3BpYztcbiAgICAgIGNvbnN0IGNvbHVtblBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9wYXJhbS9wYXRlbnQvdG9waWM9JHt0YXJnZXRfaWR9L2NvbXBhbnlgO1xuXG4gICAgICBsb2FkQ29tcGFuaWVzKGNvbHVtblBhdGgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0Q29tcGFueUxpc3QoZGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGDmpa3nlYzlhoXjgafjga7kvIHmpa3jga7nq4vjgaHkvY3nva5gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljXSk7XG5cbiAgLy8g5qSc57Si5a++6LGh44Gu44OV44Kj44Or44K/44Oq44Oz44KwXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbXBhbnlMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIE5GQ+ato+imj+WMluOBqHRyaW3jgafnorrlrp/jgavjg57jg4Pjg4Hjg7PjgrBcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZSA9IChzKSA9PiB0eXBlb2YgcyA9PT0gJ3N0cmluZycgPyBzLm5vcm1hbGl6ZSgnTkZDJykudHJpbSgpIDogJyc7XG4gICAgICBjb25zdCBjb21wYW55RGljdCA9IGNvbXBhbnlMaXN0LnJlZHVjZSgoYWNjLCB2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgIGFjY1tub3JtYWxpemUodmFsdWUpXSA9IGlkeDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgY29uc3QgbmV3U2VhcmNoTGlzdCA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55IDogW2NvbXBhbnldO1xuICAgICAgY29uc3QgbWF0Y2hlZCA9IG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IG5vcm1hbGl6ZSh2YWx1ZSkgaW4gY29tcGFueURpY3QpO1xuICAgICAgc2V0U2VhcmNoTGlzdChtYXRjaGVkKTtcbiAgICAgIC8vIOODnuODg+ODgeOBl+OBquOBi+OBo+OBn+WgtOWQiOOCgmlzTG9hZGluZ+OCkuino+mZpFxuICAgICAgaWYgKG1hdGNoZWQubGVuZ3RoID09PSAwKSBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW2NvbXBhbnlMaXN0LCBjb21wYW55XSk7XG5cbiAgLy8g44OH44O844K/44Gu5o+P55S777yIc2VhcmNoTGlzdOODu3NwYW4g44GM5aSJ44KP44Gj44Gf44KJ6Ieq5YuV44Gn5YaN5o+P55S777yJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaExpc3QubGVuZ3RoID09PSAwIHx8ICF0b3BpYykgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0X2lkID0gdG9waWM7XG4gICAgLy8gc3BhbuWIpeOBq+WtmOWcqOOBmeOCi+ODleOCoeOCpOODq+aVsOOCkuaxuuWumlxuICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgY29uc3Qgc3BhblRvTWF4UCA9IHsgJzEnOiAyMCwgJzInOiA5LCAnMyc6IDYgfTtcbiAgICBjb25zdCBtYXhQID0gc3BhblRvTWF4UFtTdHJpbmcoc3BhbklkKV0gPz8gOTtcbiAgICBjb25zdCBudW1Qb2ludHMgPSBtYXhQICsgMTtcblxuICAgIGNvbnN0IG5vZGVfYWxwaGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheShudW1Qb2ludHMpLmZpbGwoMCkpO1xuICAgIGNvbnN0IG5vZGVfYmV0YSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KG51bVBvaW50cykuZmlsbCgwKSk7XG5cbiAgICBjb25zdCBub3JtYWxpemUgPSAocykgPT4gdHlwZW9mIHMgPT09ICdzdHJpbmcnID8gcy5ub3JtYWxpemUoJ05GQycpLnRyaW0oKSA6ICcnO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRDb21wYW55TGlzdCA9IGNvbXBhbnlMaXN0Lm1hcChub3JtYWxpemUpO1xuXG4gICAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Qb2ludHMgfSwgKF8sIHApID0+IHApLm1hcCgocCkgPT4ge1xuICAgICAgY29uc3QgcGFyYW1ldGVyUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3BhcmFtL3BhdGVudC90b3BpYz0ke3RhcmdldF9pZH0vc3Bhbj0ke3NwYW5JZH0vdGVzdF9vcHRpbWl6ZV8ke3B9YDtcbiAgICAgIHJldHVybiB0b0xpc3QocGFyYW1ldGVyUGF0aCkudGhlbigoeyBhbHBoYV9saSwgYmV0YV9saSB9KSA9PiB7XG4gICAgICAgIHNlYXJjaExpc3QuZm9yRWFjaCgoaywgaikgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkeCA9IG5vcm1hbGl6ZWRDb21wYW55TGlzdC5pbmRleE9mKG5vcm1hbGl6ZShrKSk7XG4gICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG5vZGVfYWxwaGFbal1bcF0gPSBhbHBoYV9saVtpZHhdO1xuICAgICAgICAgICAgbm9kZV9iZXRhW2pdW3BdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHBsb3REYXRhID0gc2VhcmNoTGlzdC5tYXAoKGssIGopID0+IHtcbiAgICAgICAgY29uc3QgbiA9IG5vZGVfYWxwaGFbal0ubGVuZ3RoO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IG5vZGVfYWxwaGFbal0sXG4gICAgICAgICAgeTogbm9kZV9iZXRhW2pdLFxuICAgICAgICAgIG1vZGU6IFwibGluZXMrbWFya2Vyc1wiLFxuICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgc3ltYm9sOiBub2RlX2FscGhhW2pdLm1hcCgoXywgaSkgPT4gaSA9PT0gMCA/ICdzcXVhcmUnIDogaSA9PT0gbiAtIDEgPyAnc3RhcicgOiAnY2lyY2xlJyksXG4gICAgICAgICAgICBjb2xvcjogY29sb3JtYXBba10sXG4gICAgICAgICAgICBzaXplOiBub2RlX2FscGhhW2pdLm1hcCgoXywgaSkgPT4gaSA9PT0gMCB8fCBpID09PSBuIC0gMSA/IDkgOiA1KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IGssXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgLy8g5YWo5pmC54K56ZaT44Gr55+i5Y2w44KS5o+P55S7XG4gICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBzZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICAgIEFycmF5KG5vZGVfYWxwaGFbal0ubGVuZ3RoIC0gMSkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgICAgeDogbm9kZV9hbHBoYVtqXVtpICsgMV0sXG4gICAgICAgICAgeTogbm9kZV9iZXRhW2pdW2kgKyAxXSxcbiAgICAgICAgICB4cmVmOiAneCcsIHlyZWY6ICd5JyxcbiAgICAgICAgICBheDogbm9kZV9hbHBoYVtqXVtpXSwgYXk6IG5vZGVfYmV0YVtqXVtpXSxcbiAgICAgICAgICBheHJlZjogJ3gnLCBheXJlZjogJ3knLFxuICAgICAgICAgIGFycm93Y29sb3I6IGNvbG9ybWFwW2tdLFxuICAgICAgICAgIGFycm93c2l6ZTogMS4yLCBhcnJvd3dpZHRoOiAxLjIsIGFycm93aGVhZDogNSxcbiAgICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICAgIH0pKVxuICAgICAgKTtcblxuICAgICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgICAvLyDnn6LljbDjgqLjg47jg4bjg7zjgrfjg6fjg7PvvIs06LGh6ZmQ44Op44OZ44Or44KS5ZCI44KP44Gb44Gm6Kit5a6aXG4gICAgICBzZXRBbm5vdGF0aW9ucyhbLi4ucGxvdEFubm90YXRpb25zLCAuLi5xdWFkcmFudExhYmVsc10pO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgfSk7XG4gIH0sIFtzZWFyY2hMaXN0LCBjb21wYW55TGlzdCwgdG9waWMsIHNwYW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDB2aCcsIGhlaWdodDogJzEwMHZoJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNzUpJywgekluZGV4OiAxMCwgZm9udFNpemU6IDE2LCBjb2xvcjogJyM1NTUnLFxuICAgICAgICB9fT5cbiAgICAgICAgICDoqq3jgb/ovrzjgb/kuK0uLi5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17ZmlnRGF0YX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMjAsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgICAgICAgICB4cmVmOiAncGFwZXInLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgIH0sXG5cbiAgICAgICAgIFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi5paw6KaP5oCnXCIsXG4gICAgICAgICAgICByYW5nZTogWy0wLjA1LCAxLjE1XSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlswLCAwLjUsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLpoIblv5zmgKdcIixcbiAgICAgICAgICAgIHRpdGxlX3N0YW5kb2ZmOiAyNSxcbiAgICAgICAgICAgIHJhbmdlOiBbMC44LCAyLjE1XSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlsxLCAxLjUsIDJdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiA0MCwgbDogNDUsIHI6IDUwIH0sXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgYmdjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgYm9yZGVyd2lkdGg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMnZoXCIsIHdpZHRoOiBcIjEwMHZoXCIsIGhlaWdodDogXCI0NXZoXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBlcnNvblRvcGljO1xuIiwiLy8gU2lkZWJhci5qc3hcbmltcG9ydCBSZWFjdCAseyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENvbCwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgU2lkZWJhciA9ICh7IG9uQXBwbHksIHZpc3VhbFR5cGUsIG9uVmlzdWFsVHlwZUNoYW5nZSwgdG9waWNMaXN0LCBjb21wYW55TGlzdCwgc2VsZWN0ZWRDb21wYW5pZXMsIHNlbGVjdGVkVG9waWNzLCBvbkNoYW5nZVRvcGljLCBvbkNoYW5nZUNvbXBhbnksIHNlbGVjdGVkU3Bhbiwgb25TcGFuQ2hhbmdlLCBvblNlbGVjdEFsbENvbXBhbmllcywgb25EZXNlbGVjdEFsbENvbXBhbmllcywgb25TZWxlY3RBbGxUb3BpY3MsIG9uRGVzZWxlY3RBbGxUb3BpY3MgfSkgPT4ge1xuICBjb25zdCBbaW5wdXRUeXBlLCBzZXRJbnB1dFR5cGVdID0gdXNlU3RhdGUoW1wicmFkaW9cIixcImNoZWNrYm94XCJdKTtcbiAgY29uc3QgW2NvbXBhbnlGaWx0ZXIsIHNldENvbXBhbnlGaWx0ZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgb25WaXN1YWxUeXBlQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlPT1cIm9uZS1jb21wXCIpe1xuICAgICAgICBzZXRJbnB1dFR5cGUoW1wiY2hlY2tib3hcIixcInJhZGlvXCJdKX1cbiAgICAgIGVsc2V7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pXG4gICAgICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coaW5wdXRUeXBlKTtcbiAgfTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuICBcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCBwYWRkaW5nOiAnMTBweCcsIGJhY2tncm91bmRDb2xvcjogJ2JnLWxpZ2h0JyB9fT5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHRleHQtZGFuZ2VyIGZvbnQtaXRhbGljXCIgc3R5bGU9e3sgaGVpZ2h0OiAnNSUnIH19PlxuICAgICAgICA8Q29sIHNtPXs2fT5cbiAgICAgICAgICA8aDUgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTAlJyB9fSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAg5Y+v6KaW5YyW5p2h5Lu2XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc209ezR9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlkPVwiYXBwbHlcIlxuICAgICAgICAgICAgb25DbGljaz17b25BcHBseX1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzE1JScgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYXJrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDlj6/oppbljJZcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgey8qIOaZgumWk+W5hemBuOaKnuODnOOCv+ODsyAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgbXktMiBweC0yXCI+XG4gICAgICAgIDxDb2wgeHM9ezEyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAgICAgICAgICAgIOaZgumWk+OCkumBuOaKnlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAge1t7dmFsdWU6JzEnLCBsYWJlbDonMeW5tCd9LCB7dmFsdWU6JzInLCBsYWJlbDonMuW5tCd9LCB7dmFsdWU6JzMnLCBsYWJlbDonM+W5tCd9XS5tYXAoKHt2YWx1ZSwgbGFiZWx9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TcGFuQ2hhbmdlKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc20gJHtzZWxlY3RlZFNwYW4gPT09IHZhbHVlID8gJ2J0bi1kYXJrJyA6ICdidG4tb3V0bGluZS1zZWNvbmRhcnknfWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEzcHgnLCBwYWRkaW5nOiAnMnB4IDEwcHgnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICB7LyogQWNjb3JkaW9uICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBcIiBzdHlsZT17eyBoZWlnaHQ6ICc4MCUnIH19PlxuICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgIHsvKiBWaXN1YWxpemF0aW9uIFR5cGUgKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMFwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj7lj6/oppbljJbjgr/jgqTjg5c8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBcIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Zpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIn0gLy8g44OH44OV44Kp44Or44OI44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXgtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID4x56S+44Gr5rOo55uuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIn0gLy8g44OH44OV44Kp44Or44OI44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19XG4gICAgICAgICAgICAgICAgICA+MeODiOODlOODg+OCr+OBq+azqOebrjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG4gICAgICAgICAgey8qIFRvcGljIFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIxXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlRvcGljPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICB7Lyogb25lLWNvbXDjg6Ljg7zjg4nmmYLjgavlhajpgbjmip4v5YWo6Kej6Zmk44KS6KGo56S6ICovfVxuICAgICAgICAgICAgICB7dmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBnYXAtMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIHBhZGRpbmc6ICcycHggOHB4JyB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblNlbGVjdEFsbFRvcGljc31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg5YWo6YG45oqeXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgcGFkZGluZzogJzJweCA4cHgnIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRGVzZWxlY3RBbGxUb3BpY3N9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOWFqOino+mZpFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHt0b3BpY0xpc3QubWFwKCh0b3BpYykgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0b3BpY30+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aW5wdXRUeXBlWzBdfSBcbiAgICAgICAgICAgICAgICAgICAgaWQ9e3RvcGljfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFRvcGljcy5pbmNsdWRlcyh0b3BpYyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVRvcGljKHRvcGljLCBpbnB1dFR5cGVbMF0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9waWNcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0b3BpY30+e0lkdG9Ub3BpY1t0b3BpY119PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cbiAgICAgICAgICB7LyogQ29tcGFueSBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMlwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Db21wYW55PC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICB7Lyogb25lLXRvcGlj44Oi44O844OJ5pmC44Gr5YWo6YG45oqeL+WFqOino+mZpOOCkuihqOekuiAqL31cbiAgICAgICAgICAgICAge3Zpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGdhcC0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgcGFkZGluZzogJzJweCA4cHgnIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU2VsZWN0QWxsQ29tcGFuaWVzfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDlhajpgbjmip5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBwYWRkaW5nOiAnMnB4IDhweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25EZXNlbGVjdEFsbENvbXBhbmllc31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg5YWo6Kej6ZmkXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5LyB5qWt5ZCN44Gn57We44KK6L6844G/Li4uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueUZpbHRlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbXBhbnlGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbWItMlwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JyB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7Y29tcGFueUxpc3RcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNvbXBhbnkgPT4gY29tcGFueS5pbmNsdWRlcyhjb21wYW55RmlsdGVyKSlcbiAgICAgICAgICAgICAgICAubWFwKChjb21wYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVsxXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29tcGFuaWVzLmluY2x1ZGVzKGNvbXBhbnkpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VDb21wYW55KGNvbXBhbnksIGlucHV0VHlwZVsxXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnknXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2NvbXBhbnl9Pntjb21wYW55fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90QmFyQ2hhcnRCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3BhbiwgY2xpY2tkYXRhLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gY2xpY2tkYXRhIHx8IHRvcGljWzBdIHx8IFwiMFwiO1xuICAgICAgICBjb25zdCBzcGFuSWQgPSBzcGFuIHx8IFwiMlwiO1xuICAgICAgICBjb25zdCBvY2N1cHlUb3BpY01hcCA9IHsgJzEnOiAnb2NjdXB5X3RvcGljXzIwLmpzb24nLCAnMic6ICdvY2N1cHlfdG9waWNfOS5qc29uJywgJzMnOiAnb2NjdXB5X3RvcGljXzYuanNvbicgfTtcbiAgICAgICAgY29uc3Qgb2NjdXB5VG9waWNGaWxlID0gb2NjdXB5VG9waWNNYXBbU3RyaW5nKHNwYW5JZCldIHx8ICdvY2N1cHlfdG9waWNfOS5qc29uJztcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvYXBwX2RhdGEvdG9waWMke3RhcmdldElkfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS8ke29jY3VweVRvcGljRmlsZX1gO1xuICAgICAgICBjb25zdCBmaVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2ZpX3N1YmNsYXNzX3NwbGl0Lmpzb25gO1xuXG4gICAgICAgIGNvbnN0IFtvY2N1cHlKc29uLCBmaUxpc3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgICBmZXRjaERhdGEoZmlQYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgaWYgKCFvY2N1cHlKc29uIHx8ICFvY2N1cHlKc29uLmNvbXBhbmllcyB8fCAhb2NjdXB5SnNvbi5maV9jb2Rlcykge1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cikgPT5cbiAgICAgICAgICB0eXBlb2Ygc3RyID09PSBcInN0cmluZ1wiID8gc3RyLm5vcm1hbGl6ZShcIk5GQ1wiKS50cmltKCkgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbmllcyA9IG9jY3VweUpzb24uY29tcGFuaWVzLm1hcChub3JtYWxpemVTdHJpbmcpO1xuICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBzYW5pdGl6ZWRDb21wYW5pZXMuaW5kZXhPZihub3JtYWxpemVTdHJpbmcoY29tcGFueVswXSkpO1xuICAgICAgICBpZiAoY29tcGFueUluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcGFueSBcIiR7Y29tcGFueVswXX1cIiBub3QgZm91bmQuYCk7XG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlr77osaHkvIHmpa3jga7ooYzjga7jgb/mir3lh7pcbiAgICAgICAgY29uc3QgZmlWYWx1ZXMgPSB7fTtcbiAgICAgICAgb2NjdXB5SnNvbi5kYXRhLmZvckVhY2goKHsgcm93LCBjb2wsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICBpZiAocm93ID09PSBjb21wYW55SW5kZXgpIHtcbiAgICAgICAgICAgIGZpVmFsdWVzW29jY3VweUpzb24uZmlfY29kZXNbY29sXV0gPSB2YWx1ZSAqIDEwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBPYmplY3QuZW50cmllcyhmaVZhbHVlcylcbiAgICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7IGNhdGVnb3J5OiBrZXksIHZhbHVlLCBzdW1tYXJpemU6IGZpTGlzdFtrZXldIH0pKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueVswXX3jga5GSeOBruWIhuW4g2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIEpTT04uc3RyaW5naWZ5KGNsaWNrZGF0YSksIHVwZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgIHg6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgICAgICAgIG1hcmtlcjogeyBjb2xvcjogXCJyb3lhbGJsdWVcIiB9LFxuICAgICAgICAgICAgY3VzdG9tZGF0YTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5zdW1tYXJpemUpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIGhvdmVydGVtcGxhdGU6IGDoqqzmmI46ICV7Y3VzdG9tZGF0YX08YnI+JTogJXt4Oi4yZn0lIDxleHRyYT48L2V4dHJhPmAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aWNrc3VmZml4OiBcIiAlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogXCJGSVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDgwLCByOiA1MCB9LFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMTEsIGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgIGJnY29sb3I6IFwibGlnaHR5ZWxsb3dcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RCYXJDaGFydEEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBzcGFuLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWNbMF07XG4gICAgICAgIGNvbnN0IHNwYW5JZCA9IHNwYW4gfHwgXCIyXCI7XG4gICAgICAgIGNvbnN0IG9jY3VweVRvcGljTWFwID0geyAnMSc6ICdvY2N1cHlfdG9waWNfMjAuanNvbicsICcyJzogJ29jY3VweV90b3BpY185Lmpzb24nLCAnMyc6ICdvY2N1cHlfdG9waWNfNi5qc29uJyB9O1xuICAgICAgICBjb25zdCBvY2N1cHlUb3BpY0ZpbGUgPSBvY2N1cHlUb3BpY01hcFtTdHJpbmcoc3BhbklkKV0gfHwgJ29jY3VweV90b3BpY185Lmpzb24nO1xuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9hcHBfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3BlcnNvbmE9NS9zcGFuJHtzcGFuSWR9LyR7b2NjdXB5VG9waWNGaWxlfWA7XG4gICAgICAgIGNvbnN0IGZpUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvZmlfc3ViY2xhc3Nfc3BsaXQuanNvbmA7XG5cbiAgICAgICAgY29uc3QgW29jY3VweUpzb24sIGZpTGlzdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKHBhdGgpLFxuICAgICAgICAgIGZldGNoRGF0YShmaVBhdGgpLFxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoIW9jY3VweUpzb24gfHwgIW9jY3VweUpzb24uZmlfY29kZXMgfHwgIW9jY3VweUpzb24uZGF0YSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIEZJ44Kz44O844OJ5Yil44Gr5YWo5LyB5qWt44Gu5YCk44KS5ZCI566XXG4gICAgICAgIGNvbnN0IGZpU3VtcyA9IHt9O1xuICAgICAgICBvY2N1cHlKc29uLmRhdGEuZm9yRWFjaCgoeyBjb2wsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBmaUNvZGUgPSBvY2N1cHlKc29uLmZpX2NvZGVzW2NvbF07XG4gICAgICAgICAgZmlTdW1zW2ZpQ29kZV0gPSAoZmlTdW1zW2ZpQ29kZV0gfHwgMCkgKyB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdG90YWwgPSBPYmplY3QudmFsdWVzKGZpU3VtcykucmVkdWNlKChzLCB2KSA9PiBzICsgdiwgMCk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBPYmplY3QuZW50cmllcyhmaVN1bXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgIGNhdGVnb3J5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IHRvdGFsID4gMCA/ICh2YWx1ZSAvIHRvdGFsKSAqIDEwMCA6IDAsXG4gICAgICAgICAgc3VtbWFyaXplOiBmaUxpc3Rba2V5XSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBmb3JtYXR0ZWREYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgRknjga7liIbluINgKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwKSkge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBzcGFuLCB1cGRhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHsgY29sb3I6IFwicm95YWxibHVlXCIgfSxcbiAgICAgICAgICAgIGN1c3RvbWRhdGE6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3VtbWFyaXplKS5yZXZlcnNlKCksXG4gICAgICAgICAgICBob3ZlcnRlbXBsYXRlOiBg6Kqs5piOOiAle2N1c3RvbWRhdGF9PGJyPiU6ICV7eDouMmZ9JSA8ZXh0cmE+PC9leHRyYT5gLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGlja3N1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDExLCBjb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImxpZ2h0eWVsbG93XCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbXlfYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtYm9vdHN0cmFwX2VzbV9BY2NvcmRpb25fanMtbm9kZV9tb2R1bGVzX3JlYWN0LWJvb3RzdHJhcF9lc21fQnV0dG9uLWJlMWI0MVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJTaWRlYmFyIiwiQ29udGVudCIsIkFwcCIsImFycm93Q29sb3IiLCJjb21wYW55TGlzdCIsInRvcGljTGlzdCIsInZpc3VhbFR5cGUiLCJzZXRWaXN1YWxUeXBlIiwiaXNBcHBsaWVkIiwic2V0SXNBcHBsaWVkIiwic2VsZWN0ZWRDb21wYW5pZXMiLCJzZXRTZWxlY3RlZENvbXBhbmllcyIsInNlbGVjdGVkVG9waWNzIiwic2V0U2VsZWN0ZWRUb3BpY3MiLCJzZWxlY3RlZFNwYW4iLCJzZXRTZWxlY3RlZFNwYW4iLCJoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVBcHBseSIsInRvZ2dsZVNlbGVjdGlvbiIsIml0ZW0iLCJzZXRTZWxlY3RlZCIsImJ1dHRvbXR5cGUiLCJwcmV2U2VsZWN0ZWQiLCJpbmNsdWRlcyIsImZpbHRlciIsImkiLCJDb21wYW55Q2hlY2tib3hDaGFuZ2UiLCJjb21wYW55IiwiVG9waWNDaGVja2JveENoYW5nZSIsInRvcGljIiwiaGFuZGxlU3BhbkNoYW5nZSIsImhhbmRsZVNlbGVjdEFsbENvbXBhbmllcyIsImhhbmRsZURlc2VsZWN0QWxsQ29tcGFuaWVzIiwiaGFuZGxlU2VsZWN0QWxsVG9waWNzIiwiaGFuZGxlRGVzZWxlY3RBbGxUb3BpY3MiLCJyZXNldElzQXBwbGllZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImZsdWlkIiwiY2xhc3NOYW1lIiwibWQiLCJvbkFwcGx5Iiwib25WaXN1YWxUeXBlQ2hhbmdlIiwib25DaGFuZ2VUb3BpYyIsIm9uQ2hhbmdlQ29tcGFueSIsIm9uU3BhbkNoYW5nZSIsIm9uU2VsZWN0QWxsQ29tcGFuaWVzIiwib25EZXNlbGVjdEFsbENvbXBhbmllcyIsIm9uU2VsZWN0QWxsVG9waWNzIiwib25EZXNlbGVjdEFsbFRvcGljcyIsInN0eWxlIiwiaGVpZ2h0IiwicGxvdCIsInNwYW4iLCJyZXNldEFwcGx5IiwiQ2FyZCIsIlBsb3RQaWVBIiwiUGxvdFBpZUIiLCJQbG90UGVyc29uYUNvbXAiLCJQbG90UGVyc29uYVRvcGljIiwiUGxvdEJhckNoYXJ0QSIsIlBsb3RCYXJDaGFydEIiLCJnZXRDYXJkRGF0YSIsIkxvYWRpbmdPdmVybGF5IiwicG9zaXRpb24iLCJpbnNldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwiekluZGV4IiwiZm9udFNpemUiLCJjb2xvciIsInBvaW50ZXJFdmVudHMiLCJfcmVmIiwiY2xpY2tEYXRhIiwic2V0Q2xpY2tEYXRhIiwiaXNQaWVMb2FkaW5nIiwic2V0SXNQaWVMb2FkaW5nIiwiaXNCYXJMb2FkaW5nIiwic2V0SXNCYXJMb2FkaW5nIiwiaGFuZGxlUGllQ2hhcnRDbGljayIsImRhdGEiLCJjYXJkRGF0YSIsInNldENhcmREYXRhIiwiZmV0Y2hEYXRhIiwibWFyZ2luTGVmdCIsInVwZGF0ZSIsIm9uUmVuZGVyZWQiLCJsYXlvdXQiLCJ0aXRsZSIsIndpZHRoIiwiY29uZmlnIiwicmVzcG9uc2l2ZSIsIm9uQ2xpY2tEYXRhIiwiY2xpY2tkYXRhIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJ4cyIsImZsZXgiLCJCb2R5IiwiVGl0bGUiLCJsYWJlbCIsImRpcmVjdGlvbiIsInRvVXBwZXJDYXNlIiwiVGV4dCIsInZhbHVlcyIsImpvaW4iLCJjbGlja2VkVG9waWMiLCJ0YXJnZXRUb3BpYyIsIkFycmF5IiwiaXNBcnJheSIsInNwYW5JZCIsInRhcmdldENvbXBhbnkiLCJkYXRhUGF0aCIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJqc29uRGF0YSIsImpzb24iLCJjb21wYW55RW50cnkiLCJmaW5kIiwibGVuZ3RoIiwibm92ZWx0eV91cCIsIm5vdmVsdHlfZG93biIsImFkYXB0X3VwIiwiYWRhcHRfZG93biIsImVycm9yIiwiY29uc29sZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiU3RyaWN0TW9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VSZWYiLCJQbG90IiwiY29sb3JtYXAiLCJmZXRjaEpzb24iLCJ1cmwiLCJzdGF0dXMiLCJnZXRSb3dTdW1zIiwib2NjdXB5SnNvbiIsIm51bVJvd3MiLCJjb21wYW5pZXMiLCJzdW1zIiwiZmlsbCIsImZvckVhY2giLCJyb3ciLCJfcmVmMiIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsIklkdG9Ub3BpYyIsIlRvcGljdG9JZCIsImRhdGFDYWNoZSIsInRhcmdldFRvcGljcyIsIk51bWJlciIsImdldE9jY3VweVRvcGljRmlsZSIsIlN0cmluZyIsImxvYWREYXRhIiwib2NjdXB5VG9waWNGaWxlIiwiYWxsVG9waWNzRGF0YSIsIlByb21pc2UiLCJhbGwiLCJ0YXJnZXRfaWQiLCJjYWNoZUtleSIsImN1cnJlbnQiLCJub3JtYWxpemVTdHJpbmciLCJzdHIiLCJub3JtYWxpemUiLCJ0cmltIiwic2FuaXRpemVkQ29tcGFuaWVzIiwic2FuaXRpemVkQ29tcGFueSIsImNvbXBhbnlJbmRleCIsImluZGV4T2YiLCJyb3dTdW1zIiwiZmlsdGVyZWREYXRhIiwidG90YWxWYWx1ZSIsInJlZHVjZSIsInN1bSIsIm5vcm1hbGl6ZWREYXRhIiwiY2F0ZWdvcnkiLCJzb3J0IiwiYSIsImIiLCJoYW5kbGVQbG90Q2xpY2siLCJldmVudCIsInBvaW50cyIsInRvcGljaWQiLCJyZXBsYWNlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidHlwZSIsImxhYmVscyIsIm1hcmtlciIsImNvbG9ycyIsInNob3dsZWdlbmQiLCJwbG90X2JnY29sb3IiLCJwYXBlcl9iZ2NvbG9yIiwibWFyZ2luIiwidCIsImwiLCJyIiwib25DbGljayIsInNldFRpdGxlIiwibG9hZENoYXJ0RGF0YSIsInRpbWUiLCJ0YXJnZXRJZCIsImRhdGFVcmwiLCJyYXdEYXRhIiwic29ydGVkRGF0YSIsInNsaWNlIiwibG9hZENvbXBhbmllcyIsInRleHQiLCJzcGxpdCIsImxpbmUiLCJ0b0xpc3QiLCJsaW5lcyIsImFscGhhX2xpIiwicGFyc2VGbG9hdCIsImJldGFfbGkiLCJQbG90UGVyc29uQ29tcCIsImFycm93X2NvbG9yIiwicHJlcGFyZWREYXRhIiwic2V0UHJlcGFyZWREYXRhIiwiZmlnRGF0YSIsInNldEZpZ0RhdGEiLCJhbm5vdGF0aW9ucyIsInNldEFubm90YXRpb25zIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicXVhZHJhbnRMYWJlbHMiLCJ4IiwieSIsInhhbmNob3IiLCJ5YW5jaG9yIiwieHJlZiIsInlyZWYiLCJzaG93YXJyb3ciLCJmb250Iiwic2l6ZSIsImJnY29sb3IiLCJib3JkZXJwYWQiLCJwcmVwYXJlRGF0YSIsImFsbFByb21pc2VzIiwibG9nIiwiY29sdW1uUGF0aCIsInMiLCJub3JtYWxpemVkQ29tcGFuaWVzIiwiY29tcGFueURpY3QiLCJhY2MiLCJpZHgiLCJuZXdTZWFyY2hMaXN0IiwiZmlsdGVyZWRTZWFyY2hMaXN0Iiwic3BhblRvTWF4UCIsIm1heFAiLCJudW1Qb2ludHMiLCJub2RlX2FscGhhIiwiZnJvbSIsIm5vZGVfYmV0YSIsInByb21pc2VzIiwiXyIsInAiLCJwYXJhbWV0ZXJQYXRoIiwiayIsImoiLCJyZXN1bHRzIiwiY29tYmluZWRBbHBoYSIsImZsYXRNYXAiLCJyZXN1bHQiLCJjb21iaW5lZEJldGEiLCJjb21iaW5lZFNlYXJjaExpc3QiLCJhbHBoYSIsImJldGEiLCJzZWFyY2hMaXN0IiwicGxvdERhdGEiLCJuIiwibW9kZSIsInN5bWJvbCIsIm5hbWUiLCJwbG90QW5ub3RhdGlvbnMiLCJheHJlZiIsImF5cmVmIiwiYXgiLCJheSIsImFycm93Y29sb3IiLCJhcnJvd3NpemUiLCJhcnJvd3dpZHRoIiwiYXJyb3doZWFkIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwieGF4aXMiLCJyYW5nZSIsImxpbmVjb2xvciIsImxpbmV3aWR0aCIsImdyaWRjb2xvciIsImdyaWR3aWR0aCIsImdyaWRkYXNoIiwidGlja21vZGUiLCJ0aWNrdmFscyIsInRpY2t0ZXh0IiwiemVyb2xpbmUiLCJ5YXhpcyIsInRpdGxlX3N0YW5kb2ZmIiwibGVnZW5kIiwiYm9yZGVyY29sb3IiLCJib3JkZXJ3aWR0aCIsIlBsb3RQZXJzb25Ub3BpYyIsInNldENvbXBhbnlMaXN0Iiwic2V0U2VhcmNoTGlzdCIsInRoZW4iLCJtYXRjaGVkIiwibm9ybWFsaXplZENvbXBhbnlMaXN0IiwiX3JlZjMiLCJBY2NvcmRpb24iLCJCdXR0b24iLCJpbnB1dFR5cGUiLCJzZXRJbnB1dFR5cGUiLCJjb21wYW55RmlsdGVyIiwic2V0Q29tcGFueUZpbHRlciIsImhhbmRsZVJhZGlvQ2hhbmdlIiwidGFyZ2V0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInNtIiwid2hpdGVTcGFjZSIsInJvbGUiLCJkZWZhdWx0QWN0aXZlS2V5IiwiSXRlbSIsImV2ZW50S2V5IiwiSGVhZGVyIiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaHRtbEZvciIsInBsYWNlaG9sZGVyIiwiZSIsImNvbnRlbnRUeXBlIiwiaGVhZGVycyIsImdldCIsIm9jY3VweVRvcGljTWFwIiwicGF0aCIsImZpUGF0aCIsImZpTGlzdCIsImZpX2NvZGVzIiwid2FybiIsImZpVmFsdWVzIiwiY29sIiwiT2JqZWN0IiwiZW50cmllcyIsInN1bW1hcml6ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXZlcnNlIiwib3JpZW50YXRpb24iLCJjdXN0b21kYXRhIiwiaG92ZXJ0ZW1wbGF0ZSIsIm1pcnJvciIsInRpY2tzdWZmaXgiLCJob3ZlcmxhYmVsIiwiYWxpZ24iLCJmaVN1bXMiLCJmaUNvZGUiLCJ0b3RhbCIsInYiLCJmb3JtYXR0ZWREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==