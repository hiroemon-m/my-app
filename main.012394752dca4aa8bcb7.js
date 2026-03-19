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
const normalize = s => typeof s === 'string' ? s.normalize('NFC').trim() : '';
const fetchJson = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
};
const PlotPieB = _ref => {
  let {
    update,
    visualType,
    topic,
    company,
    span,
    topicList,
    onRendered,
    onClickData
  } = _ref;
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

  // spanごとの最終時点ファイル名（occupy_mean は小さくて高速）
  const getLastMeanFile = spanId => {
    const map = {
      '1': 'occupy_mean_20.json',
      '2': 'occupy_mean_9.json',
      '3': 'occupy_mean_6.json'
    };
    return map[String(spanId)] || 'occupy_mean_9.json';
  };

  // サイドバーのtopicListを使う
  const targetTopics = topicList && topicList.length > 0 ? topicList.map(Number) : [2, 3, 1, 0, 9, 6, 8, 7, 11];

  // ファイルキャッシュ（span × topicId ごと）
  const fileCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const loadData = async () => {
    if (!company || !company[0]) return;
    try {
      const spanId = String(span || '2');
      const meanFile = getLastMeanFile(spanId);
      const targetCompany = normalize(company[0]);
      const results = await Promise.all(targetTopics.map(async topicId => {
        const cacheKey = `${topicId}-${spanId}`;
        if (!fileCache.current[cacheKey]) {
          const url = `${"/my-app"}/data/app_data/topic${topicId}/persona=5/span${spanId}/${meanFile}`;
          fileCache.current[cacheKey] = await fetchJson(url);
        }
        const data = fileCache.current[cacheKey];
        if (!Array.isArray(data)) return null;
        // [{company, value}] から対象会社を検索
        const entry = data.find(d => normalize(d.company) === targetCompany);
        return entry && entry.value > 0 ? {
          topic: topicId,
          value: entry.value
        } : null;
      }));
      const filtered = results.filter(d => d !== null);
      const total = filtered.reduce((s, d) => s + d.value, 0);
      if (total === 0) {
        setChartData([]);
        if (onRendered) onRendered();
        return;
      }
      setChartData(filtered.map(d => ({
        category: d.topic,
        value: d.value / total
      })).sort((a, b) => b.value - a.value));
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

  // データロード: 各トピックのcompanyファイルから選択会社のインデックスを特定し、
  // そのインデックスのデータをtest_optimize_Nから取得して軌跡を構築
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!topic || topic.length === 0 || !company) return;
    const normalize = s => typeof s === 'string' ? s.normalize('NFC').trim() : '';
    const selectedCompanies = (Array.isArray(company) ? company : [company]).map(normalize);
    const spanId = String(span || '2');
    const spanToMaxP = {
      '1': 20,
      '2': 9,
      '3': 6
    };
    const maxP = spanToMaxP[spanId] ?? 9;
    const loadAll = async () => {
      setIsLoading(true);
      try {
        const allTraces = [];
        for (const topicId of topic) {
          // 1. そのトピックのcompanyリストを読み込む
          const companyUrl = `${"/my-app"}/param/patent/topic=${topicId}/company`;
          const rawCompanies = await loadCompanies(companyUrl);
          const normalizedCompanies = rawCompanies.map(normalize);

          // 2. サイドバーで選択した各会社のインデックスをcompanyリストから特定
          const companyIndexMap = selectedCompanies.map(cn => ({
            name: cn,
            idx: normalizedCompanies.indexOf(cn)
          })).filter(_ref3 => {
            let {
              idx
            } = _ref3;
            return idx !== -1;
          });
          if (companyIndexMap.length === 0) continue;

          // 3. 全時点のtest_optimize_Nファイルを並列取得
          const timeDataList = await Promise.all(Array.from({
            length: maxP + 1
          }, (_, p) => toList(`${"/my-app"}/param/patent/topic=${topicId}/span=${spanId}/test_optimize_${p}`)));

          // 4. 各会社について、各時点のインデックス行のデータで軌跡を構築
          for (const {
            name,
            idx
          } of companyIndexMap) {
            allTraces.push({
              topicId,
              companyName: name,
              alpha: timeDataList.map(_ref4 => {
                let {
                  alpha_li
                } = _ref4;
                return alpha_li[idx];
              }),
              beta: timeDataList.map(_ref5 => {
                let {
                  beta_li
                } = _ref5;
                return beta_li[idx];
              })
            });
          }
        }
        setPreparedData({
          traces: allTraces
        });
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!preparedData) return;
    if (!preparedData.traces || preparedData.traces.length === 0) {
      setFigData([]);
      setAnnotations([...quadrantLabels]);
      if (onRendered) onRendered();
      return;
    }
    const plotData = preparedData.traces.map(_ref6 => {
      let {
        topicId,
        companyName,
        alpha,
        beta
      } = _ref6;
      const n = alpha.length;
      return {
        x: alpha,
        y: beta,
        mode: 'lines+markers',
        type: 'scatter',
        marker: {
          symbol: alpha.map((_, i) => i === 0 ? 'square' : i === n - 1 ? 'star' : 'circle'),
          color: colormap[IdtoTopic[topicId]] || 'gray',
          size: alpha.map((_, i) => i === 0 || i === n - 1 ? 9 : 5)
        },
        name: `${companyName} (${IdtoTopic[topicId] || topicId})`
      };
    });

    // 全連続時点間に進行方向の矢印を描画
    const plotAnnotations = preparedData.traces.flatMap(_ref7 => {
      let {
        topicId,
        alpha,
        beta
      } = _ref7;
      return Array.from({
        length: alpha.length - 1
      }, (_, i) => ({
        x: alpha[i + 1],
        y: beta[i + 1],
        ax: alpha[i],
        ay: beta[i],
        xref: 'x',
        yref: 'y',
        axref: 'x',
        ayref: 'y',
        arrowcolor: colormap[IdtoTopic[topicId]] || 'gray',
        arrowsize: 1.2,
        arrowwidth: 1.2,
        arrowhead: 5,
        showarrow: true
      }));
    });
    setFigData(plotData);
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
  const [figData, setFigData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [annotations, setAnnotations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [preparedData, setPreparedData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
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

  // データロード: トピックのcompanyファイルから選択会社のインデックスを特定し、
  // そのインデックスのデータをtest_optimize_Nから取得して軌跡を構築
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (visualType !== 'one-topic' || !topic || !company) return;
    const normalize = s => typeof s === 'string' ? s.normalize('NFC').trim() : '';
    const topicId = Array.isArray(topic) ? topic[0] : topic;
    const selectedCompanies = (Array.isArray(company) ? company : [company]).map(normalize);
    const spanId = String(span || '2');
    const spanToMaxP = {
      '1': 20,
      '2': 9,
      '3': 6
    };
    const maxP = spanToMaxP[spanId] ?? 9;
    const loadAll = async () => {
      setIsLoading(true);
      try {
        // 1. そのトピックのcompanyリストを読み込む
        const companyUrl = `${"/my-app"}/param/patent/topic=${topicId}/company`;
        const rawCompanies = await loadCompanies(companyUrl);
        const normalizedCompanies = rawCompanies.map(normalize);

        // 2. サイドバーで選択した各会社のインデックスをcompanyリストから特定
        const companyIndexMap = selectedCompanies.map(cn => ({
          name: cn,
          idx: normalizedCompanies.indexOf(cn)
        })).filter(_ref3 => {
          let {
            idx
          } = _ref3;
          return idx !== -1;
        });
        if (companyIndexMap.length === 0) {
          setPreparedData({
            traces: []
          });
          setTitle('業界内での企業の立ち位置');
          return;
        }

        // 3. 全時点のtest_optimize_Nファイルを並列取得
        const timeDataList = await Promise.all(Array.from({
          length: maxP + 1
        }, (_, p) => toList(`${"/my-app"}/param/patent/topic=${topicId}/span=${spanId}/test_optimize_${p}`)));

        // 4. 各会社について、各時点のインデックス行のデータで軌跡を構築
        const traces = companyIndexMap.map(_ref4 => {
          let {
            name,
            idx
          } = _ref4;
          return {
            companyName: name,
            alpha: timeDataList.map(_ref5 => {
              let {
                alpha_li
              } = _ref5;
              return alpha_li[idx];
            }),
            beta: timeDataList.map(_ref6 => {
              let {
                beta_li
              } = _ref6;
              return beta_li[idx];
            })
          };
        });
        setPreparedData({
          traces
        });
        setTitle('業界内での企業の立ち位置');
      } catch (error) {
        console.error('データ準備中のエラー:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadAll();
  }, [visualType, topic, company, span]);

  // 描画: preparedData が更新されたらPlotlyのデータ・アノテーションを生成
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!preparedData) return;
    if (!preparedData.traces || preparedData.traces.length === 0) {
      setFigData([]);
      setAnnotations([...quadrantLabels]);
      if (onRendered) onRendered();
      return;
    }
    const plotData = preparedData.traces.map(_ref7 => {
      let {
        companyName,
        alpha,
        beta
      } = _ref7;
      const n = alpha.length;
      return {
        x: alpha,
        y: beta,
        mode: 'lines+markers',
        type: 'scatter',
        marker: {
          symbol: alpha.map((_, i) => i === 0 ? 'square' : i === n - 1 ? 'star' : 'circle'),
          color: colormap[companyName] || 'gray',
          size: alpha.map((_, i) => i === 0 || i === n - 1 ? 9 : 5)
        },
        name: companyName
      };
    });

    // 全連続時点間に進行方向の矢印を描画
    const plotAnnotations = preparedData.traces.flatMap(_ref8 => {
      let {
        companyName,
        alpha,
        beta
      } = _ref8;
      return Array.from({
        length: alpha.length - 1
      }, (_, i) => ({
        x: alpha[i + 1],
        y: beta[i + 1],
        ax: alpha[i],
        ay: beta[i],
        xref: 'x',
        yref: 'y',
        axref: 'x',
        ayref: 'y',
        arrowcolor: colormap[companyName] || 'gray',
        arrowsize: 1.2,
        arrowwidth: 1.2,
        arrowhead: 5,
        showarrow: true
      }));
    });
    setFigData(plotData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDN0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9hcHAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvZ28tYW55d2hlcmUuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvb2NjdXB5LWNvbXBhbnkuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9vY2N1cHkuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9wZXJzb25hLWNvbXAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9wZXJzb25hLXRvcGljLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvc2lkZWJhci5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RyZW5kLWNvbXAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy90cmVuZC10b3BpeC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhci5qc3gnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50LmpzeCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgYXJyb3dDb2xvciA9IFtcbiAgICAnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJyxcbiAgICAnIzNFOUU2RicsICcjRjM4MTgxJywgJyM1NDVFNzUnLCAnI0ZGQjYyNycsICcjNTc3NTkwJyxcbiAgXTtcbiAgY29uc3QgY29tcGFueUxpc3QgPSBbXG4gICAgJ+m5v+WztuW7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7lpKfmnpfntYQnLCAn5riF5rC05bu66Kit5qCq5byP5Lya56S+JywgJ+Wkp+aIkOW7uuioreagquW8j+S8muekvicsXG4gICAgJ+agquW8j+S8muekvuerueS4reW3peWLmeW6lycsICfmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7MnLCAn5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+JyxcbiAgICAn5LqU5rSL5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvuODleOCuOOCvycsICfmiLjnlLDlu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+54aK6LC357WEJyxcbiAgXTtcbiAgY29uc3QgdG9waWNMaXN0ID0gWycwJywgJzEnLCAnMicsICczJywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMSddO1xuXG4gIGNvbnN0IFt2aXN1YWxUeXBlLCBzZXRWaXN1YWxUeXBlXSA9IHVzZVN0YXRlKCdvbmUtdG9waWMnKTtcbiAgY29uc3QgW2lzQXBwbGllZCwgc2V0SXNBcHBsaWVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2VsZWN0ZWRDb21wYW5pZXMsIHNldFNlbGVjdGVkQ29tcGFuaWVzXSA9IHVzZVN0YXRlKFsn5qCq5byP5Lya56S+54aK6LC357WEJ10pO1xuICBjb25zdCBbc2VsZWN0ZWRUb3BpY3MsIHNldFNlbGVjdGVkVG9waWNzXSA9IHVzZVN0YXRlKFsnMCddKTtcbiAgY29uc3QgW3NlbGVjdGVkU3Bhbiwgc2V0U2VsZWN0ZWRTcGFuXSA9IHVzZVN0YXRlKCcyJyk7XG5cbiAgY29uc3QgaGFuZGxlVmlzdWFsVHlwZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldFZpc3VhbFR5cGUodmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwcGx5ID0gKCkgPT4ge1xuICAgIHNldElzQXBwbGllZCgxKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTZWxlY3Rpb24gPSAoaXRlbSwgc2V0U2VsZWN0ZWQsIGJ1dHRvbXR5cGUpID0+IHtcbiAgICBpZiAoYnV0dG9tdHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgc2V0U2VsZWN0ZWQoKHByZXZTZWxlY3RlZCkgPT5cbiAgICAgICAgcHJldlNlbGVjdGVkLmluY2x1ZGVzKGl0ZW0pXG4gICAgICAgICAgPyBwcmV2U2VsZWN0ZWQuZmlsdGVyKChpKSA9PiBpICE9PSBpdGVtKVxuICAgICAgICAgIDogWy4uLnByZXZTZWxlY3RlZCwgaXRlbV1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkKFtpdGVtXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IENvbXBhbnlDaGVja2JveENoYW5nZSA9IChjb21wYW55LCBidXR0b210eXBlKSA9PiB7XG4gICAgdG9nZ2xlU2VsZWN0aW9uKGNvbXBhbnksIHNldFNlbGVjdGVkQ29tcGFuaWVzLCBidXR0b210eXBlKTtcbiAgfTtcblxuICBjb25zdCBUb3BpY0NoZWNrYm94Q2hhbmdlID0gKHRvcGljLCBidXR0b210eXBlKSA9PiB7XG4gICAgdG9nZ2xlU2VsZWN0aW9uKHRvcGljLCBzZXRTZWxlY3RlZFRvcGljcywgYnV0dG9tdHlwZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3BhbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkU3Bhbih2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0QWxsQ29tcGFuaWVzID0gKCkgPT4gc2V0U2VsZWN0ZWRDb21wYW5pZXMoWy4uLmNvbXBhbnlMaXN0XSk7XG4gIGNvbnN0IGhhbmRsZURlc2VsZWN0QWxsQ29tcGFuaWVzID0gKCkgPT4gc2V0U2VsZWN0ZWRDb21wYW5pZXMoW10pO1xuICBjb25zdCBoYW5kbGVTZWxlY3RBbGxUb3BpY3MgPSAoKSA9PiBzZXRTZWxlY3RlZFRvcGljcyhbLi4udG9waWNMaXN0XSk7XG4gIGNvbnN0IGhhbmRsZURlc2VsZWN0QWxsVG9waWNzID0gKCkgPT4gc2V0U2VsZWN0ZWRUb3BpY3MoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDb21wYW5pZXMoWyfmoKrlvI/kvJrnpL7nhorosLfntYQnXSk7XG4gICAgc2V0U2VsZWN0ZWRUb3BpY3MoWycwJ10pO1xuICB9LCBbdmlzdWFsVHlwZV0pO1xuXG4gIGNvbnN0IHJlc2V0SXNBcHBsaWVkID0gKCkgPT4ge1xuICAgIHNldElzQXBwbGllZCgwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaWQ9XCJyZWFjdC1jb250ZW50XCIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5cbiAgICAgIDxSb3c+XG4gICAgICAgIHsvKiDjgrXjgqTjg4njg5Djg7wgKi99XG4gICAgICAgIDxDb2wgbWQ9ezN9IGNsYXNzTmFtZT1cImJvcmRlci1lbmRcIj5cbiAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgb25BcHBseT17aGFuZGxlQXBwbHl9XG4gICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgb25WaXN1YWxUeXBlQ2hhbmdlPXtoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICBjb21wYW55TGlzdD17Y29tcGFueUxpc3R9XG4gICAgICAgICAgICBzZWxlY3RlZENvbXBhbmllcz17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICBzZWxlY3RlZFRvcGljcz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICBvbkNoYW5nZVRvcGljPXtUb3BpY0NoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgb25DaGFuZ2VDb21wYW55PXtDb21wYW55Q2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICBzZWxlY3RlZFNwYW49e3NlbGVjdGVkU3Bhbn1cbiAgICAgICAgICAgIG9uU3BhbkNoYW5nZT17aGFuZGxlU3BhbkNoYW5nZX1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ29tcGFuaWVzPXtoYW5kbGVTZWxlY3RBbGxDb21wYW5pZXN9XG4gICAgICAgICAgICBvbkRlc2VsZWN0QWxsQ29tcGFuaWVzPXtoYW5kbGVEZXNlbGVjdEFsbENvbXBhbmllc31cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsVG9waWNzPXtoYW5kbGVTZWxlY3RBbGxUb3BpY3N9XG4gICAgICAgICAgICBvbkRlc2VsZWN0QWxsVG9waWNzPXtoYW5kbGVEZXNlbGVjdEFsbFRvcGljc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICB7Lyog44Oh44Kk44Oz44Kz44Oz44OG44Oz44OEICovfVxuICAgICAgICA8Q29sIG1kPXs5fSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICBwbG90PXtpc0FwcGxpZWR9XG4gICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgdG9waWM9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgY29tcGFueT17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICBzcGFuPXtzZWxlY3RlZFNwYW59XG4gICAgICAgICAgICB0b3BpY0xpc3Q9e3RvcGljTGlzdH1cbiAgICAgICAgICAgIHJlc2V0QXBwbHk9e3Jlc2V0SXNBcHBsaWVkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH1mcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBQbG90UGllQSBmcm9tICcuL29jY3VweS5qc3gnO1xuaW1wb3J0IFBsb3RQaWVCIGZyb20gJy4vb2NjdXB5LWNvbXBhbnkuanN4JztcbmltcG9ydCBQbG90UGVyc29uYUNvbXAgZnJvbSAnLi9wZXJzb25hLWNvbXAuanN4JztcbmltcG9ydCBQbG90UGVyc29uYVRvcGljIGZyb20gJy4vcGVyc29uYS10b3BpYy5qc3gnO1xuXG5pbXBvcnQgUGxvdEJhckNoYXJ0QSBmcm9tICcuL3RyZW5kLXRvcGl4LmpzeCc7XG5pbXBvcnQgUGxvdEJhckNoYXJ0QiBmcm9tICcuL3RyZW5kLWNvbXAuanN4JztcbmltcG9ydCB7IGdldENhcmREYXRhIH0gZnJvbSBcIi4vZ28tYW55d2hlcmUuanN4XCI7IC8vIOato+OBl+OBhOODkeOCueOCkuaMh+WumlxuXG5cblxuXG5cbi8vIOODgeODo+ODvOODiOiqreOBv+i+vOOBv+S4reOCquODvOODkOODvOODrOOCpFxuY29uc3QgTG9hZGluZ092ZXJsYXkgPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3tcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgaW5zZXQ6IDAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNzUpJywgekluZGV4OiAxMCwgZm9udFNpemU6IDE1LCBjb2xvcjogJyM2NjYnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgfX0+XG4gICAg6Kqt44G/6L6844G/5LitLi4uXG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ29udGVudCA9ICh7cGxvdCx2aXN1YWxUeXBlLHRvcGljLGNvbXBhbnksc3Bhbix0b3BpY0xpc3QscmVzZXRBcHBseX0pID0+IHtcblxuICAgIGNvbnN0IFtjbGlja0RhdGEsIHNldENsaWNrRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaXNQaWVMb2FkaW5nLCAgc2V0SXNQaWVMb2FkaW5nXSAgPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzQmFyTG9hZGluZywgIHNldElzQmFyTG9hZGluZ10gID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlUGllQ2hhcnRDbGljayA9IChkYXRhKSA9PiB7XG4gICAgICBzZXRDbGlja0RhdGEoZGF0YSk7XG4gICAgfTtcblxuICAgIC8vIOS8muekvuODu+ODiOODlOODg+OCr+OBjOWkieOCj+OBo+OBn+OCieOCr+ODquODg+OCr+mBuOaKnuOCkuODquOCu+ODg+ODiOOAgeODreODvOODh+OCo+ODs+OCsOmWi+Wni1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRDbGlja0RhdGEobnVsbCk7XG4gICAgICBzZXRJc1BpZUxvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRJc0JhckxvYWRpbmcodHJ1ZSk7XG4gICAgfSwgW2NvbXBhbnksIHRvcGljLCBzcGFuLCB2aXN1YWxUeXBlXSk7XG5cbiAgICAvLyBBcHBseSDjg5zjgr/jg7PmmYLjgoLjg63jg7zjg4fjgqPjg7PjgrBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHBsb3QgPT09IDEpIHtcbiAgICAgICAgc2V0SXNQaWVMb2FkaW5nKHRydWUpO1xuICAgICAgICBzZXRJc0JhckxvYWRpbmcodHJ1ZSk7XG4gICAgICB9XG4gICAgfSwgW3Bsb3RdKTtcblxuICAgIC8vIOOCr+ODquODg+OCr+OBp+ODkOODvOODgeODo+ODvOODiOOBruOBv+ODreODvOODh+OCo+ODs+OCsFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoY2xpY2tEYXRhICE9PSBudWxsKSBzZXRJc0JhckxvYWRpbmcodHJ1ZSk7XG4gICAgfSwgW2NsaWNrRGF0YV0pO1xuXG4gICAgY29uc3QgW2NhcmREYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q2FyZERhdGEocGxvdCwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIGNsaWNrRGF0YSk7XG4gICAgICAgIHNldENhcmREYXRhKGRhdGEpO1xuICAgICAgfTtcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtwbG90LCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3BhbiwgY2xpY2tEYXRhXSk7XG4gIFxuICAgIFxuICByZXR1cm4gKFxuICAgIFxuICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICB7LyogRmlyc3QgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgey8qIFBlcnNvbmEgR3JhcGggKi99XG4gICAgICAgIDxDb2wgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMCUnIH19PlxuXG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgICAgPFBsb3RQZXJzb25hVG9waWNcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIHNwYW49e3NwYW59XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODmuODq+OCveODiuOBruWPr+imluWMllwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTB2aCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MHZoXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYUNvbXBcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIHNwYW49e3NwYW59XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODmuODq+OCveODiuOBruWPr+imluWMllwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDJ2aCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+6Kmy5b2T44GZ44KL6KGo56S644GM44GC44KK44G+44Gb44KTPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIDwvQ29sPlxuICA8L1Jvdz5cblxuICAgICAgey8qIFNlY29uZCBSb3cgKi99XG4gICAgICA8Um93IHN0eWxlPXt7IGhlaWdodDogJzUwdmgnIH19PlxuICAgICAgICA8Q29sIG1kPXs2fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICB7aXNQaWVMb2FkaW5nICYmIDxMb2FkaW5nT3ZlcmxheSAvPn1cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUFcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIHNwYW49e3NwYW59XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9eygpID0+IHsgc2V0SXNQaWVMb2FkaW5nKGZhbHNlKTsgcmVzZXRBcHBseSgpOyB9fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3sgdGl0bGU6ICfms6jnm67kvIHmpa3jga7mpa3nlYzjgavlr77jgZnjgovljaDmnInnjocnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc4MCUnIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGllQlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9eygpID0+IHsgc2V0SXNQaWVMb2FkaW5nKGZhbHNlKTsgcmVzZXRBcHBseSgpOyB9fVxuICAgICAgICAgICAgICBvbkNsaWNrRGF0YT17aGFuZGxlUGllQ2hhcnRDbGlja31cbiAgICAgICAgICAgICAgbGF5b3V0PXt7IHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnODAlJyB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17Nn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAge2lzQmFyTG9hZGluZyAmJiA8TG9hZGluZ092ZXJsYXkgLz59XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgIDxQbG90QmFyQ2hhcnRBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBzcGFuPXtzcGFufVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXsoKSA9PiBzZXRJc0JhckxvYWRpbmcoZmFsc2UpfVxuICAgICAgICAgICAgbGF5b3V0PXt7IHRpdGxlOiAnRknjga7liIbluIMnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc4MCUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pOihcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgc3Bhbj17c3Bhbn1cbiAgICAgICAgICAgICAgY2xpY2tkYXRhPXtjbGlja0RhdGF9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9eygpID0+IHNldElzQmFyTG9hZGluZyhmYWxzZSl9XG4gICAgICAgICAgICBsYXlvdXQ9e3sgdGl0bGU6ICdGSeOBruWIhuW4gycsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzgwJScgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPil9XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImgtMTAwXCI+XG4gICAgICB7Y2FyZERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q29sXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICB4cz17MTJ9IC8vIOWQhOOCq+ODvOODieOCkjHooYzjgavooajnpLrjgIHjg6zjgqTjgqLjgqbjg4jjgavlv5zjgZjjgaboqr/mlbTlj6/og71cbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IGZsZXg6IFwiMSAxIGF1dG9cIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidy03NSBoLTc1XCI+XG4gICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsIHx8IGl0ZW0uZGlyZWN0aW9uLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlcy5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbD5cbiAgICAgICkpfVxuICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcblxuIiwiLy8gYW55d2hlcmVfNS5qc29uIOW9ouW8jzpcbi8vIFt7XCJjb21wYW55XCI6IFwiLi4uXCIsIFwiY29sb3JcIjogXCIuLi5cIiwgXCJub3ZlbHR5X3VwXCI6IFsuLi5dLCBcIm5vdmVsdHlfZG93blwiOiBbLi4uXSwgXCJhZGFwdF91cFwiOiBbLi4uXSwgXCJhZGFwdF9kb3duXCI6IFsuLi5dfV1cbi8vIEZJ44Kz44O844OJ44Gv5paH5a2X5YiX44Gn55u05o6l5qC857SN44GV44KM44Gm44GE44KL77yI44Kk44Oz44OH44OD44Kv44K544Gn44Gv44Gq44GE77yJXG5leHBvcnQgY29uc3QgZ2V0Q2FyZERhdGEgPSBhc3luYyAocGxvdCwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIGNsaWNrZWRUb3BpYykgPT4ge1xuICB0cnkge1xuICAgIGlmICh2aXN1YWxUeXBlICE9PSBcIm9uZS1jb21wXCIpIHJldHVybiBbXTtcblxuICAgIC8vIG9uZS1jb21wOiDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/jg4jjg5Tjg4Pjgq/lhKrlhYjjgIHjgarjgZHjgozjgbDpgbjmip7kuK3jg4jjg5Tjg4Pjgq9cbiAgICBjb25zdCB0YXJnZXRUb3BpYyA9IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIlxuICAgICAgPyAoY2xpY2tlZFRvcGljID8gKEFycmF5LmlzQXJyYXkoY2xpY2tlZFRvcGljKSA/IGNsaWNrZWRUb3BpY1swXSA6IGNsaWNrZWRUb3BpYykgOiAoQXJyYXkuaXNBcnJheSh0b3BpYykgPyB0b3BpY1swXSA6IHRvcGljKSlcbiAgICAgIDogKEFycmF5LmlzQXJyYXkodG9waWMpID8gdG9waWNbMF0gOiB0b3BpYyk7XG4gICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICBjb25zdCB0YXJnZXRDb21wYW55ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnlbMF0gOiAoY29tcGFueSB8fCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiKTtcblxuICAgIGNvbnN0IGRhdGFQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9hcHBfZGF0YS90b3BpYyR7dGFyZ2V0VG9waWN9L3BlcnNvbmE9NS9zcGFuJHtzcGFuSWR9L2FueXdoZXJlXzUuanNvbmA7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCLjg4fjg7zjgr/jga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ9cIik7XG5cbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoanNvbkRhdGEpKSByZXR1cm4gW107XG5cbiAgICAvLyDlr77osaHkvIHmpa3jga7jg4fjg7zjgr/jgpLmjqLjgZnvvIjopovjgaTjgYvjgonjgarjgZHjgozjgbDmnIDliJ3jga7kvIHmpa3jgpLkvb/jgYbvvIlcbiAgICBsZXQgY29tcGFueUVudHJ5ID0ganNvbkRhdGEuZmluZChpdGVtID0+IGl0ZW0uY29tcGFueSA9PT0gdGFyZ2V0Q29tcGFueSk7XG4gICAgaWYgKCFjb21wYW55RW50cnkgJiYganNvbkRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29tcGFueUVudHJ5ID0ganNvbkRhdGFbMF07XG4gICAgfVxuICAgIGlmICghY29tcGFueUVudHJ5KSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gW1xuICAgICAgeyBkaXJlY3Rpb246IFwibm92ZWx0eV91cFwiLCAgIGxhYmVsOiBcIuaWsOimj+aAp+KGkVwiLCB2YWx1ZXM6IGNvbXBhbnlFbnRyeS5ub3ZlbHR5X3VwICAgfHwgW10gfSxcbiAgICAgIHsgZGlyZWN0aW9uOiBcIm5vdmVsdHlfZG93blwiLCBsYWJlbDogXCLmlrDopo/mgKfihpNcIiwgdmFsdWVzOiBjb21wYW55RW50cnkubm92ZWx0eV9kb3duIHx8IFtdIH0sXG4gICAgICB7IGRpcmVjdGlvbjogXCJhZGFwdF91cFwiLCAgICAgbGFiZWw6IFwi6aCG5b+c5oCn4oaRXCIsIHZhbHVlczogY29tcGFueUVudHJ5LmFkYXB0X3VwICAgICB8fCBbXSB9LFxuICAgICAgeyBkaXJlY3Rpb246IFwiYWRhcHRfZG93blwiLCAgIGxhYmVsOiBcIumghuW/nOaAp+KGk1wiLCB2YWx1ZXM6IGNvbXBhbnlFbnRyeS5hZGFwdF9kb3duICAgfHwgW10gfSxcbiAgICBdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgavlpLHmlZfjgZfjgb7jgZfjgZ86XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHAuanN4XCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPEFwcCAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuY29uc3QgY29sb3JtYXAgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjoncmdiKDIyOSwgMTM0LCA2KScsIFwi5Zyw55uk5pS56ImvXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLjg4jjg7Pjg43jg6vmjpjliYpcIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWFjemch+ani+mAoFwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi566h55CG44K344K544OG44OgXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLlu4Pmo4Tnianlh6bnkIZcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZSA9IChzKSA9PiB0eXBlb2YgcyA9PT0gJ3N0cmluZycgPyBzLm5vcm1hbGl6ZSgnTkZDJykudHJpbSgpIDogJyc7XG5cbmNvbnN0IGZldGNoSnNvbiA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQaWVCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3BhbiwgdG9waWNMaXN0LCBvblJlbmRlcmVkLCBvbkNsaWNrRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICBjb25zdCBUb3BpY3RvSWQgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjpcIjJcIixcIuWcsOebpOaUueiJr1wiOlwiM1wiLFwi44OI44Oz44ON44Or5o6Y5YmKXCI6XCIxXCIsXG4gICAgXCLlhY3pnIfmp4vpgKBcIjpcIjBcIixcIueuoeeQhuOCt+OCueODhuODoFwiOlwiOVwiLFwi5buD5qOE54mp5Yem55CGXCI6XCI2XCIsXCLlu7rnr4njg5Hjg43jg6tcIjpcIjhcIixcbiAgICBcIuepuuiqv+OCt+OCueODhuODoFwiOlwiN1wiLFwi5o6Y5YmK6KOF572uXCI6XCIxMVwiLFwi5bu656+J6Kit6KiIXCI6XCIxMFwiLFwi44OI44Oz44ON44Or5ris6YePXCI6XCI1XCJ9O1xuXG4gIC8vIHNwYW7jgZTjgajjga7mnIDntYLmmYLngrnjg5XjgqHjgqTjg6vlkI3vvIhvY2N1cHlfbWVhbiDjga/lsI/jgZXjgY/jgabpq5jpgJ/vvIlcbiAgY29uc3QgZ2V0TGFzdE1lYW5GaWxlID0gKHNwYW5JZCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IHsgJzEnOiAnb2NjdXB5X21lYW5fMjAuanNvbicsICcyJzogJ29jY3VweV9tZWFuXzkuanNvbicsICczJzogJ29jY3VweV9tZWFuXzYuanNvbicgfTtcbiAgICByZXR1cm4gbWFwW1N0cmluZyhzcGFuSWQpXSB8fCAnb2NjdXB5X21lYW5fOS5qc29uJztcbiAgfTtcblxuICAvLyDjgrXjgqTjg4njg5Djg7zjga50b3BpY0xpc3TjgpLkvb/jgYZcbiAgY29uc3QgdGFyZ2V0VG9waWNzID0gKHRvcGljTGlzdCAmJiB0b3BpY0xpc3QubGVuZ3RoID4gMClcbiAgICA/IHRvcGljTGlzdC5tYXAoTnVtYmVyKVxuICAgIDogWzIsIDMsIDEsIDAsIDksIDYsIDgsIDcsIDExXTtcblxuICAvLyDjg5XjgqHjgqTjg6vjgq3jg6Pjg4Pjgrfjg6XvvIhzcGFuIMOXIHRvcGljSWQg44GU44Go77yJXG4gIGNvbnN0IGZpbGVDYWNoZSA9IHVzZVJlZih7fSk7XG5cbiAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFjb21wYW55IHx8ICFjb21wYW55WzBdKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNwYW5JZCA9IFN0cmluZyhzcGFuIHx8ICcyJyk7XG4gICAgICBjb25zdCBtZWFuRmlsZSA9IGdldExhc3RNZWFuRmlsZShzcGFuSWQpO1xuICAgICAgY29uc3QgdGFyZ2V0Q29tcGFueSA9IG5vcm1hbGl6ZShjb21wYW55WzBdKTtcblxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICB0YXJnZXRUb3BpY3MubWFwKGFzeW5jICh0b3BpY0lkKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBgJHt0b3BpY0lkfS0ke3NwYW5JZH1gO1xuICAgICAgICAgIGlmICghZmlsZUNhY2hlLmN1cnJlbnRbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2FwcF9kYXRhL3RvcGljJHt0b3BpY0lkfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS8ke21lYW5GaWxlfWA7XG4gICAgICAgICAgICBmaWxlQ2FjaGUuY3VycmVudFtjYWNoZUtleV0gPSBhd2FpdCBmZXRjaEpzb24odXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGZpbGVDYWNoZS5jdXJyZW50W2NhY2hlS2V5XTtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHJldHVybiBudWxsO1xuICAgICAgICAgIC8vIFt7Y29tcGFueSwgdmFsdWV9XSDjgYvjgonlr77osaHkvJrnpL7jgpLmpJzntKJcbiAgICAgICAgICBjb25zdCBlbnRyeSA9IGRhdGEuZmluZChkID0+IG5vcm1hbGl6ZShkLmNvbXBhbnkpID09PSB0YXJnZXRDb21wYW55KTtcbiAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudmFsdWUgPiAwID8geyB0b3BpYzogdG9waWNJZCwgdmFsdWU6IGVudHJ5LnZhbHVlIH0gOiBudWxsO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgY29uc3QgZmlsdGVyZWQgPSByZXN1bHRzLmZpbHRlcihkID0+IGQgIT09IG51bGwpO1xuICAgICAgY29uc3QgdG90YWwgPSBmaWx0ZXJlZC5yZWR1Y2UoKHMsIGQpID0+IHMgKyBkLnZhbHVlLCAwKTtcbiAgICAgIGlmICh0b3RhbCA9PT0gMCkge1xuICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldENoYXJ0RGF0YShcbiAgICAgICAgZmlsdGVyZWRcbiAgICAgICAgICAubWFwKGQgPT4gKHsgY2F0ZWdvcnk6IGQudG9waWMsIHZhbHVlOiBkLnZhbHVlIC8gdG90YWwgfSkpXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgKTtcbiAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiKSB7XG4gICAgICBsb2FkRGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZSwgc3BhbiwgY29tcGFueSwgdG9waWNMaXN0XSk7XG5cbiAgY29uc3QgaGFuZGxlUGxvdENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnBvaW50cyAmJiBldmVudC5wb2ludHNbMF0pIHtcbiAgICAgIGNvbnN0IGNsaWNrZGF0YSA9IGV2ZW50LnBvaW50c1swXS5sYWJlbDsgLy8g44Kv44Oq44OD44Kv44GV44KM44Gf6YOo5YiG44Gu44Op44OZ44OrXG4gICAgICBjb25zdCBsYWJlbCA9IFRvcGljdG9JZFtjbGlja2RhdGFdXG4gICAgICBjb25zdCB0b3BpY2lkID0gbGFiZWwucmVwbGFjZShcIlRvcGljIFwiLCBcIlwiKTtcbiAgICAgIG9uQ2xpY2tEYXRhKFt0b3BpY2lkXSk7IC8vIOimquOCs+ODs+ODneODvOODjeODs+ODiOOBq+ODqeODmeODq+OCkumAmuefpVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IGNoYXJ0RGF0YS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLm1hcChpdGVtID0+ICBJZHRvVG9waWNbU3RyaW5nKGl0ZW0uY2F0ZWdvcnkpXSksXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiY2xvY2t3aXNlXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgY29sb3JzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBjb2xvcm1hcFtJZHRvVG9waWNbU3RyaW5nKGl0ZW0uY2F0ZWdvcnkpXV0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZTogYCR7Y29tcGFueVswXSB8fCBcIlwifSDjga7lh7rpoZjnibnoqLEg44OI44OU44OD44Kv5YiG5biDYCxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNzAsIGI6IDUsIGw6IDQwLCByOiA1MCB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBsb3RDbGlja30gLy8g44Kv44Oq44OD44Kv44Kk44OZ44Oz44OI44KS6L+95YqgXG4gICAgICAvPlxuICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQaWVCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90UGllQSA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIHNwYW4sIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gIGNvbnN0IGNvbG9ybWFwID0geyfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLmoKrlvI/kvJrnpL7lpKfmnpfntYRcIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIua4heawtOW7uuioreagquW8j+S8muekvlwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gICAgICBcIuWkp+aIkOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgICAgIFwi5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+XCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuS6lOa0i+W7uuioreagquW8j+S8muekvlwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5qCq5byP5Lya56S+44OV44K444K/XCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gICAgICBcIuaIuOeUsOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMjM3LCAxMDAsIDkwKScsIFwi5qCq5byP5Lya56S+54aK6LC357WEXCI6J3JnYigxNjUsIDE3MCwgMTUzKSd9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSAwO1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRvcGljIHx8IFwiMFwiO1xuICAgICAgICBjb25zdCBzcGFuSWQgPSBzcGFuIHx8IFwiMlwiO1xuICAgICAgICBjb25zdCBkYXRhVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9hcHBfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3BlcnNvbmE9NS9zcGFuJHtzcGFuSWR9L29jY3VweV9tZWFuXyR7dGltZX0uanNvbmA7XG5cbiAgICAgICAgLy8gW3tcImNvbXBhbnlcIjogXCIuLi5cIiwgXCJ2YWx1ZVwiOiAwLnh4eH0sIC4uLl0g5b2i5byPXG4gICAgICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBmZXRjaERhdGEoZGF0YVVybCk7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyYXdEYXRhKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSByYXdEYXRhXG4gICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgIT09IG51bGwpXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMClcbiAgICAgICAgICAubWFwKGl0ZW0gPT4gKHsgbGFiZWw6IGl0ZW0uY29tcGFueSwgdmFsdWU6IGl0ZW0udmFsdWUgfSkpO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7SWR0b1RvcGljW3RhcmdldElkXX3jgavplqLjgZnjgovnibnoqLHjga7kvIHmpa3ljaDmnInnjodgKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4Hjg6Pjg7zjg4jjg4fjg7zjgr/jga7lh6bnkIbkuK3jgavjgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBzcGFuLCBvblJlbmRlcmVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5sYWJlbCksXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiY2xvY2t3aXNlXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgY29sb3JzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBjb2xvcm1hcFtpdGVtLmxhYmVsXSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNzAsIGI6IDUsIGw6IDQwLCByOiA1MCB9LFxuICAgICAgICB9fVxuICBcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQaWVBO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cblxuIFxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCB0b0xpc3QgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICBjb25zdCBhbHBoYV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMF0pKTtcbiAgICBjb25zdCBiZXRhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVsxXSkpO1xuXG4gICAgcmV0dXJuIHsgYWxwaGFfbGksIGJldGFfbGkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYWxwaGFfbGk6IFtdLCBiZXRhX2xpOiBbXSB9O1xuICB9XG59O1xuXG5jb25zdCBQbG90UGVyc29uQ29tcCA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIG9uUmVuZGVyZWQgfSkgPT4ge1xuY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgICAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgICAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwifTtcblxuY29uc3QgY29sb3JtYXAgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjoncmdiKDIyOSwgMTM0LCA2KScsIFwi5Zyw55uk5pS56ImvXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLjg4jjg7Pjg43jg6vmjpjliYpcIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICAgICAgICAgIFwi5YWN6ZyH5qeL6YCgXCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLnrqHnkIbjgrfjgrnjg4bjg6BcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuW7g+ajhOeJqeWHpueQhlwiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICAgICAgICAgIFwi5bu656+J44OR44ON44OrXCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuepuuiqv+OCt+OCueODhuODoFwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5o6Y5YmK6KOF572uXCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gICAgICAgIH07XG4gICAgICAgIFxuICBjb25zdCBhcnJvd19jb2xvciA9IFsnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJ107XG5cbiAgY29uc3QgW3ByZXBhcmVkRGF0YSwgc2V0UHJlcGFyZWREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwi5LyB5qWt44Gu56uL44Gh5L2N572uXCIpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIDTosaHpmZDjga7lm7rlrprjg6njg5njg6vvvIjou7jjga7mhI/lkbPjgavlkIjjgo/jgZvjgZ/oqqzmmI7vvIlcbiAgLy8gWD3mlrDopo/mgKfvvIjkvY465Lyd57Wx55qE44Cc6auYOumdqeaWsOeahO+8ieOAgVk96aCG5b+c5oCn77yI5L2OOueLrOiHqui3r+e3muOAnOmrmDrmpa3nlYzov73pmo/vvIlcbiAgY29uc3QgcXVhZHJhbnRMYWJlbHMgPSBbXG4gICAgeyB4OiAwLjAyLCB5OiAwLjk3LCB0ZXh0OiAn5qWt55WM44Gu5rWB44KM44Gr5LmX44KKPGJyPuS8nee1seeahOaKgOihk+OCkuejqOOBjycsICAgeGFuY2hvcjogJ2xlZnQnLCAgeWFuY2hvcjogJ3RvcCcgICAgfSxcbiAgICB7IHg6IDAuOTgsIHk6IDAuOTcsIHRleHQ6ICfmpa3nlYzjga7mtYHjgozjgavkuZfjgoo8YnI+6Z2p5paw55qE5oqA6KGT44Gr5oyR5oimJywgICB4YW5jaG9yOiAncmlnaHQnLCB5YW5jaG9yOiAndG9wJyAgICB9LFxuICAgIHsgeDogMC4wMiwgeTogMC4wMywgdGV4dDogJ+eLrOiHqui3r+e3muOBpzxicj7kvJ3ntbHnmoTmioDooZPjgavnibnljJYnLCAgICAgICAgIHhhbmNob3I6ICdsZWZ0JywgIHlhbmNob3I6ICdib3R0b20nIH0sXG4gICAgeyB4OiAwLjk4LCB5OiAwLjAzLCB0ZXh0OiAn54us6Ieq6Lev57ea44GnPGJyPumdqeaWsOeahOaKgOihk+OBq+aMkeaIpicsICAgICAgICAgeGFuY2hvcjogJ3JpZ2h0JywgeWFuY2hvcjogJ2JvdHRvbScgfSxcbiAgXS5tYXAoKHsgeCwgeSwgdGV4dCwgeGFuY2hvciwgeWFuY2hvciB9KSA9PiAoe1xuICAgIHhyZWY6ICdwYXBlcicsIHlyZWY6ICdwYXBlcicsIHgsIHksIHRleHQsIHhhbmNob3IsIHlhbmNob3IsXG4gICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICBmb250OiB7IHNpemU6IDgsIGNvbG9yOiAnZ3JheScgfSxcbiAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjYpJyxcbiAgICBib3JkZXJwYWQ6IDIsXG4gIH0pKTtcblxuICAvLyDjg4fjg7zjgr/jg63jg7zjg4k6IOWQhOODiOODlOODg+OCr+OBrmNvbXBhbnnjg5XjgqHjgqTjg6vjgYvjgonpgbjmip7kvJrnpL7jga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpLnibnlrprjgZfjgIFcbiAgLy8g44Gd44Gu44Kk44Oz44OH44OD44Kv44K544Gu44OH44O844K/44KSdGVzdF9vcHRpbWl6ZV9O44GL44KJ5Y+W5b6X44GX44Gm6LuM6Leh44KS5qeL56+JXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF0b3BpYyB8fCB0b3BpYy5sZW5ndGggPT09IDAgfHwgIWNvbXBhbnkpIHJldHVybjtcblxuICAgIGNvbnN0IG5vcm1hbGl6ZSA9IChzKSA9PiB0eXBlb2YgcyA9PT0gJ3N0cmluZycgPyBzLm5vcm1hbGl6ZSgnTkZDJykudHJpbSgpIDogJyc7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb21wYW5pZXMgPSAoQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV0pLm1hcChub3JtYWxpemUpO1xuICAgIGNvbnN0IHNwYW5JZCA9IFN0cmluZyhzcGFuIHx8ICcyJyk7XG4gICAgY29uc3Qgc3BhblRvTWF4UCA9IHsgJzEnOiAyMCwgJzInOiA5LCAnMyc6IDYgfTtcbiAgICBjb25zdCBtYXhQID0gc3BhblRvTWF4UFtzcGFuSWRdID8/IDk7XG5cbiAgICBjb25zdCBsb2FkQWxsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsVHJhY2VzID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCB0b3BpY0lkIG9mIHRvcGljKSB7XG4gICAgICAgICAgLy8gMS4g44Gd44Gu44OI44OU44OD44Kv44GuY29tcGFueeODquOCueODiOOCkuiqreOBv+i+vOOCgFxuICAgICAgICAgIGNvbnN0IGNvbXBhbnlVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9wYXJhbS9wYXRlbnQvdG9waWM9JHt0b3BpY0lkfS9jb21wYW55YDtcbiAgICAgICAgICBjb25zdCByYXdDb21wYW5pZXMgPSBhd2FpdCBsb2FkQ29tcGFuaWVzKGNvbXBhbnlVcmwpO1xuICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRDb21wYW5pZXMgPSByYXdDb21wYW5pZXMubWFwKG5vcm1hbGl6ZSk7XG5cbiAgICAgICAgICAvLyAyLiDjgrXjgqTjg4njg5Djg7zjgafpgbjmip7jgZfjgZ/lkITkvJrnpL7jga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpJjb21wYW5544Oq44K544OI44GL44KJ54m55a6aXG4gICAgICAgICAgY29uc3QgY29tcGFueUluZGV4TWFwID0gc2VsZWN0ZWRDb21wYW5pZXNcbiAgICAgICAgICAgIC5tYXAoY24gPT4gKHsgbmFtZTogY24sIGlkeDogbm9ybWFsaXplZENvbXBhbmllcy5pbmRleE9mKGNuKSB9KSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWR4IH0pID0+IGlkeCAhPT0gLTEpO1xuXG4gICAgICAgICAgaWYgKGNvbXBhbnlJbmRleE1hcC5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgLy8gMy4g5YWo5pmC54K544GudGVzdF9vcHRpbWl6ZV9O44OV44Kh44Kk44Or44KS5Lim5YiX5Y+W5b6XXG4gICAgICAgICAgY29uc3QgdGltZURhdGFMaXN0ID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBtYXhQICsgMSB9LCAoXywgcCkgPT5cbiAgICAgICAgICAgICAgdG9MaXN0KGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3BhcmFtL3BhdGVudC90b3BpYz0ke3RvcGljSWR9L3NwYW49JHtzcGFuSWR9L3Rlc3Rfb3B0aW1pemVfJHtwfWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vIDQuIOWQhOS8muekvuOBq+OBpOOBhOOBpuOAgeWQhOaZgueCueOBruOCpOODs+ODh+ODg+OCr+OCueihjOOBruODh+ODvOOCv+OBp+i7jOi3oeOCkuani+eviVxuICAgICAgICAgIGZvciAoY29uc3QgeyBuYW1lLCBpZHggfSBvZiBjb21wYW55SW5kZXhNYXApIHtcbiAgICAgICAgICAgIGFsbFRyYWNlcy5wdXNoKHtcbiAgICAgICAgICAgICAgdG9waWNJZCxcbiAgICAgICAgICAgICAgY29tcGFueU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGFscGhhOiB0aW1lRGF0YUxpc3QubWFwKCh7IGFscGhhX2xpIH0pID0+IGFscGhhX2xpW2lkeF0pLFxuICAgICAgICAgICAgICBiZXRhOiAgdGltZURhdGFMaXN0Lm1hcCgoeyBiZXRhX2xpICB9KSA9PiBiZXRhX2xpW2lkeF0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0UHJlcGFyZWREYXRhKHsgdHJhY2VzOiBhbGxUcmFjZXMgfSk7XG4gICAgICAgIHNldFRpdGxlKGAke3NlbGVjdGVkQ29tcGFuaWVzLmpvaW4oJywgJyl9IOOBrualreeVjOOBp+OBrueri+OBoeS9jee9rmApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+a6luWCmeS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZEFsbCgpO1xuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW5dKTtcblxuICAvLyDmj4/nlLs6IHByZXBhcmVkRGF0YSDjgYzmm7TmlrDjgZXjgozjgZ/jgolQbG90bHnjga7jg4fjg7zjgr/jg7vjgqLjg47jg4bjg7zjgrfjg6fjg7PjgpLnlJ/miJBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByZXBhcmVkRGF0YSkgcmV0dXJuO1xuXG4gICAgaWYgKCFwcmVwYXJlZERhdGEudHJhY2VzIHx8IHByZXBhcmVkRGF0YS50cmFjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRGaWdEYXRhKFtdKTtcbiAgICAgIHNldEFubm90YXRpb25zKFsuLi5xdWFkcmFudExhYmVsc10pO1xuICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwbG90RGF0YSA9IHByZXBhcmVkRGF0YS50cmFjZXMubWFwKCh7IHRvcGljSWQsIGNvbXBhbnlOYW1lLCBhbHBoYSwgYmV0YSB9KSA9PiB7XG4gICAgICBjb25zdCBuID0gYWxwaGEubGVuZ3RoO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogYWxwaGEsXG4gICAgICAgIHk6IGJldGEsXG4gICAgICAgIG1vZGU6ICdsaW5lcyttYXJrZXJzJyxcbiAgICAgICAgdHlwZTogJ3NjYXR0ZXInLFxuICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICBzeW1ib2w6IGFscGhhLm1hcCgoXywgaSkgPT4gaSA9PT0gMCA/ICdzcXVhcmUnIDogaSA9PT0gbiAtIDEgPyAnc3RhcicgOiAnY2lyY2xlJyksXG4gICAgICAgICAgY29sb3I6IGNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY0lkXV0gfHwgJ2dyYXknLFxuICAgICAgICAgIHNpemU6ICAgYWxwaGEubWFwKChfLCBpKSA9PiAoaSA9PT0gMCB8fCBpID09PSBuIC0gMSkgPyA5IDogNSksXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IGAke2NvbXBhbnlOYW1lfSAoJHtJZHRvVG9waWNbdG9waWNJZF0gfHwgdG9waWNJZH0pYCxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyDlhajpgKPntprmmYLngrnplpPjgavpgLLooYzmlrnlkJHjga7nn6LljbDjgpLmj4/nlLtcbiAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBwcmVwYXJlZERhdGEudHJhY2VzLmZsYXRNYXAoKHsgdG9waWNJZCwgYWxwaGEsIGJldGEgfSkgPT5cbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IGFscGhhLmxlbmd0aCAtIDEgfSwgKF8sIGkpID0+ICh7XG4gICAgICAgIHg6IGFscGhhW2kgKyAxXSwgeTogYmV0YVtpICsgMV0sXG4gICAgICAgIGF4OiBhbHBoYVtpXSwgICAgYXk6IGJldGFbaV0sXG4gICAgICAgIHhyZWY6ICd4JywgeXJlZjogJ3knLCBheHJlZjogJ3gnLCBheXJlZjogJ3knLFxuICAgICAgICBhcnJvd2NvbG9yOiBjb2xvcm1hcFtJZHRvVG9waWNbdG9waWNJZF1dIHx8ICdncmF5JyxcbiAgICAgICAgYXJyb3dzaXplOiAxLjIsIGFycm93d2lkdGg6IDEuMiwgYXJyb3doZWFkOiA1LFxuICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICB9KSlcbiAgICApO1xuXG4gICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgc2V0QW5ub3RhdGlvbnMoWy4uLnBsb3RBbm5vdGF0aW9ucywgLi4ucXVhZHJhbnRMYWJlbHNdKTtcbiAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICB9LCBbcHJlcGFyZWREYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwdmgnLCBoZWlnaHQ6ICcxMDB2aCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCBsZWZ0OiAwLCByaWdodDogMCwgYm90dG9tOiAwLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjc1KScsIHpJbmRleDogMTAsIGZvbnRTaXplOiAxNiwgY29sb3I6ICcjNTU1JyxcbiAgICAgICAgfX0+XG4gICAgICAgICAg6Kqt44G/6L6844G/5LitLi4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgeHJlZjogJ3BhcGVyJyxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICB9LFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFstMC4wNSwgMS4xNV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMCwgMC41LCAxXSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi6aCG5b+c5oCnXCIsXG4gICAgICAgICAgICB0aXRsZV9zdGFuZG9mZjogMjUsXG4gICAgICAgICAgICByYW5nZTogWzAuOCwgMi4xNV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMSwgMS41LCAyXSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogNDAsIGw6IDQ1LCByOiA1MCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGJvcmRlcndpZHRoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Db21wO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cbmNvbnN0IGNvbG9ybWFwID0geyfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLmoKrlvI/kvJrnpL7lpKfmnpfntYRcIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIua4heawtOW7uuioreagquW8j+S8muekvlwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gIFwi5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupdcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuagquW8j+S8muekvumVt+iwt+W3peOCs+ODvOODneODrOODvOOCt+ODp+ODs1wiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICBcIuWJjeeUsOW7uuioreW3pealreagquW8j+S8muekvlwiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLkupTmtIvlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuagquW8j+S8muekvuODleOCuOOCv1wiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICBcIuaIuOeUsOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMjM3LCAxMDAsIDkwKScsIFwi5qCq5byP5Lya56S+54aK6LC357WEXCI6J3JnYigxNjUsIDE3MCwgMTUzKSd9O1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Ub3BpYyA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJlcGFyZWREYXRhLCBzZXRQcmVwYXJlZERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gNOixoemZkOOBruWbuuWumuODqeODmeODq++8iOi7uOOBruaEj+WRs+OBq+WQiOOCj+OBm+OBn+iqrOaYju+8iVxuICAvLyBYPeaWsOimj+aAp++8iOS9jjrkvJ3ntbHnmoTjgJzpq5g66Z2p5paw55qE77yJ44CBWT3poIblv5zmgKfvvIjkvY4654us6Ieq6Lev57ea44Cc6auYOualreeVjOi/vemaj++8iVxuICBjb25zdCBxdWFkcmFudExhYmVscyA9IFtcbiAgICB7IHg6IDAuMDIsIHk6IDAuOTcsIHRleHQ6ICfmpa3nlYzjga7mtYHjgozjgavkuZfjgoo8YnI+5Lyd57Wx55qE5oqA6KGT44KS56Oo44GPJywgICB4YW5jaG9yOiAnbGVmdCcsICB5YW5jaG9yOiAndG9wJyAgICB9LFxuICAgIHsgeDogMC45OCwgeTogMC45NywgdGV4dDogJ+alreeVjOOBrua1geOCjOOBq+S5l+OCijxicj7pnanmlrDnmoTmioDooZPjgavmjJHmiKYnLCAgIHhhbmNob3I6ICdyaWdodCcsIHlhbmNob3I6ICd0b3AnICAgIH0sXG4gICAgeyB4OiAwLjAyLCB5OiAwLjAzLCB0ZXh0OiAn54us6Ieq6Lev57ea44GnPGJyPuS8nee1seeahOaKgOihk+OBq+eJueWMlicsICAgICAgICAgeGFuY2hvcjogJ2xlZnQnLCAgeWFuY2hvcjogJ2JvdHRvbScgfSxcbiAgICB7IHg6IDAuOTgsIHk6IDAuMDMsIHRleHQ6ICfni6zoh6rot6/nt5rjgac8YnI+6Z2p5paw55qE5oqA6KGT44Gr5oyR5oimJywgICAgICAgICB4YW5jaG9yOiAncmlnaHQnLCB5YW5jaG9yOiAnYm90dG9tJyB9LFxuICBdLm1hcCgoeyB4LCB5LCB0ZXh0LCB4YW5jaG9yLCB5YW5jaG9yIH0pID0+ICh7XG4gICAgeHJlZjogJ3BhcGVyJywgeXJlZjogJ3BhcGVyJywgeCwgeSwgdGV4dCwgeGFuY2hvciwgeWFuY2hvcixcbiAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgIGZvbnQ6IHsgc2l6ZTogOCwgY29sb3I6ICdncmF5JyB9LFxuICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNiknLFxuICAgIGJvcmRlcnBhZDogMixcbiAgfSkpO1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG5cbiAgLy8g44OH44O844K/44Ot44O844OJOiDjg4jjg5Tjg4Pjgq/jga5jb21wYW5544OV44Kh44Kk44Or44GL44KJ6YG45oqe5Lya56S+44Gu44Kk44Oz44OH44OD44Kv44K544KS54m55a6a44GX44CBXG4gIC8vIOOBneOBruOCpOODs+ODh+ODg+OCr+OCueOBruODh+ODvOOCv+OCknRlc3Rfb3B0aW1pemVfTuOBi+OCieWPluW+l+OBl+OBpui7jOi3oeOCkuani+eviVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXN1YWxUeXBlICE9PSAnb25lLXRvcGljJyB8fCAhdG9waWMgfHwgIWNvbXBhbnkpIHJldHVybjtcblxuICAgIGNvbnN0IG5vcm1hbGl6ZSA9IChzKSA9PiB0eXBlb2YgcyA9PT0gJ3N0cmluZycgPyBzLm5vcm1hbGl6ZSgnTkZDJykudHJpbSgpIDogJyc7XG4gICAgY29uc3QgdG9waWNJZCA9IEFycmF5LmlzQXJyYXkodG9waWMpID8gdG9waWNbMF0gOiB0b3BpYztcbiAgICBjb25zdCBzZWxlY3RlZENvbXBhbmllcyA9IChBcnJheS5pc0FycmF5KGNvbXBhbnkpID8gY29tcGFueSA6IFtjb21wYW55XSkubWFwKG5vcm1hbGl6ZSk7XG4gICAgY29uc3Qgc3BhbklkID0gU3RyaW5nKHNwYW4gfHwgJzInKTtcbiAgICBjb25zdCBzcGFuVG9NYXhQID0geyAnMSc6IDIwLCAnMic6IDksICczJzogNiB9O1xuICAgIGNvbnN0IG1heFAgPSBzcGFuVG9NYXhQW3NwYW5JZF0gPz8gOTtcblxuICAgIGNvbnN0IGxvYWRBbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICAvLyAxLiDjgZ3jga7jg4jjg5Tjg4Pjgq/jga5jb21wYW5544Oq44K544OI44KS6Kqt44G/6L6844KAXG4gICAgICAgIGNvbnN0IGNvbXBhbnlVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9wYXJhbS9wYXRlbnQvdG9waWM9JHt0b3BpY0lkfS9jb21wYW55YDtcbiAgICAgICAgY29uc3QgcmF3Q29tcGFuaWVzID0gYXdhaXQgbG9hZENvbXBhbmllcyhjb21wYW55VXJsKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZENvbXBhbmllcyA9IHJhd0NvbXBhbmllcy5tYXAobm9ybWFsaXplKTtcblxuICAgICAgICAvLyAyLiDjgrXjgqTjg4njg5Djg7zjgafpgbjmip7jgZfjgZ/lkITkvJrnpL7jga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpJjb21wYW5544Oq44K544OI44GL44KJ54m55a6aXG4gICAgICAgIGNvbnN0IGNvbXBhbnlJbmRleE1hcCA9IHNlbGVjdGVkQ29tcGFuaWVzXG4gICAgICAgICAgLm1hcChjbiA9PiAoeyBuYW1lOiBjbiwgaWR4OiBub3JtYWxpemVkQ29tcGFuaWVzLmluZGV4T2YoY24pIH0pKVxuICAgICAgICAgIC5maWx0ZXIoKHsgaWR4IH0pID0+IGlkeCAhPT0gLTEpO1xuXG4gICAgICAgIGlmIChjb21wYW55SW5kZXhNYXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2V0UHJlcGFyZWREYXRhKHsgdHJhY2VzOiBbXSB9KTtcbiAgICAgICAgICBzZXRUaXRsZSgn5qWt55WM5YaF44Gn44Gu5LyB5qWt44Gu56uL44Gh5L2N572uJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMy4g5YWo5pmC54K544GudGVzdF9vcHRpbWl6ZV9O44OV44Kh44Kk44Or44KS5Lim5YiX5Y+W5b6XXG4gICAgICAgIGNvbnN0IHRpbWVEYXRhTGlzdCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IG1heFAgKyAxIH0sIChfLCBwKSA9PlxuICAgICAgICAgICAgdG9MaXN0KGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3BhcmFtL3BhdGVudC90b3BpYz0ke3RvcGljSWR9L3NwYW49JHtzcGFuSWR9L3Rlc3Rfb3B0aW1pemVfJHtwfWApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIDQuIOWQhOS8muekvuOBq+OBpOOBhOOBpuOAgeWQhOaZgueCueOBruOCpOODs+ODh+ODg+OCr+OCueihjOOBruODh+ODvOOCv+OBp+i7jOi3oeOCkuani+eviVxuICAgICAgICBjb25zdCB0cmFjZXMgPSBjb21wYW55SW5kZXhNYXAubWFwKCh7IG5hbWUsIGlkeCB9KSA9PiAoe1xuICAgICAgICAgIGNvbXBhbnlOYW1lOiBuYW1lLFxuICAgICAgICAgIGFscGhhOiB0aW1lRGF0YUxpc3QubWFwKCh7IGFscGhhX2xpIH0pID0+IGFscGhhX2xpW2lkeF0pLFxuICAgICAgICAgIGJldGE6ICB0aW1lRGF0YUxpc3QubWFwKCh7IGJldGFfbGkgIH0pID0+IGJldGFfbGlbaWR4XSksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRQcmVwYXJlZERhdGEoeyB0cmFjZXMgfSk7XG4gICAgICAgIHNldFRpdGxlKCfmpa3nlYzlhoXjgafjga7kvIHmpa3jga7nq4vjgaHkvY3nva4nKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ODh+ODvOOCv+a6luWCmeS4reOBruOCqOODqeODvDonLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkQWxsKCk7XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgc3Bhbl0pO1xuXG4gIC8vIOaPj+eUuzogcHJlcGFyZWREYXRhIOOBjOabtOaWsOOBleOCjOOBn+OCiVBsb3RseeOBruODh+ODvOOCv+ODu+OCouODjuODhuODvOOCt+ODp+ODs+OCkueUn+aIkFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcHJlcGFyZWREYXRhKSByZXR1cm47XG5cbiAgICBpZiAoIXByZXBhcmVkRGF0YS50cmFjZXMgfHwgcHJlcGFyZWREYXRhLnRyYWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEZpZ0RhdGEoW10pO1xuICAgICAgc2V0QW5ub3RhdGlvbnMoWy4uLnF1YWRyYW50TGFiZWxzXSk7XG4gICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBsb3REYXRhID0gcHJlcGFyZWREYXRhLnRyYWNlcy5tYXAoKHsgY29tcGFueU5hbWUsIGFscGhhLCBiZXRhIH0pID0+IHtcbiAgICAgIGNvbnN0IG4gPSBhbHBoYS5sZW5ndGg7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBhbHBoYSxcbiAgICAgICAgeTogYmV0YSxcbiAgICAgICAgbW9kZTogJ2xpbmVzK21hcmtlcnMnLFxuICAgICAgICB0eXBlOiAnc2NhdHRlcicsXG4gICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgIHN5bWJvbDogYWxwaGEubWFwKChfLCBpKSA9PiBpID09PSAwID8gJ3NxdWFyZScgOiBpID09PSBuIC0gMSA/ICdzdGFyJyA6ICdjaXJjbGUnKSxcbiAgICAgICAgICBjb2xvcjogY29sb3JtYXBbY29tcGFueU5hbWVdIHx8ICdncmF5JyxcbiAgICAgICAgICBzaXplOiAgIGFscGhhLm1hcCgoXywgaSkgPT4gKGkgPT09IDAgfHwgaSA9PT0gbiAtIDEpID8gOSA6IDUpLFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiBjb21wYW55TmFtZSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyDlhajpgKPntprmmYLngrnplpPjgavpgLLooYzmlrnlkJHjga7nn6LljbDjgpLmj4/nlLtcbiAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBwcmVwYXJlZERhdGEudHJhY2VzLmZsYXRNYXAoKHsgY29tcGFueU5hbWUsIGFscGhhLCBiZXRhIH0pID0+XG4gICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBhbHBoYS5sZW5ndGggLSAxIH0sIChfLCBpKSA9PiAoe1xuICAgICAgICB4OiBhbHBoYVtpICsgMV0sIHk6IGJldGFbaSArIDFdLFxuICAgICAgICBheDogYWxwaGFbaV0sICAgIGF5OiBiZXRhW2ldLFxuICAgICAgICB4cmVmOiAneCcsIHlyZWY6ICd5JywgYXhyZWY6ICd4JywgYXlyZWY6ICd5JyxcbiAgICAgICAgYXJyb3djb2xvcjogY29sb3JtYXBbY29tcGFueU5hbWVdIHx8ICdncmF5JyxcbiAgICAgICAgYXJyb3dzaXplOiAxLjIsIGFycm93d2lkdGg6IDEuMiwgYXJyb3doZWFkOiA1LFxuICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICB9KSlcbiAgICApO1xuXG4gICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgc2V0QW5ub3RhdGlvbnMoWy4uLnBsb3RBbm5vdGF0aW9ucywgLi4ucXVhZHJhbnRMYWJlbHNdKTtcbiAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICB9LCBbcHJlcGFyZWREYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwdmgnLCBoZWlnaHQ6ICcxMDB2aCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCBsZWZ0OiAwLCByaWdodDogMCwgYm90dG9tOiAwLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjc1KScsIHpJbmRleDogMTAsIGZvbnRTaXplOiAxNiwgY29sb3I6ICcjNTU1JyxcbiAgICAgICAgfX0+XG4gICAgICAgICAg6Kqt44G/6L6844G/5LitLi4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgeHJlZjogJ3BhcGVyJyxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICB9LFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFstMC4wNSwgMS4xNV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMCwgMC41LCAxXSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi6aCG5b+c5oCnXCIsXG4gICAgICAgICAgICB0aXRsZV9zdGFuZG9mZjogMjUsXG4gICAgICAgICAgICByYW5nZTogWzAuOCwgMi4xNV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMSwgMS41LCAyXSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogNDAsIGw6IDQ1LCByOiA1MCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGJvcmRlcndpZHRoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Ub3BpYztcbiIsIi8vIFNpZGViYXIuanN4XG5pbXBvcnQgUmVhY3QgLHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY29yZGlvbiwgQnV0dG9uLCBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IFNpZGViYXIgPSAoeyBvbkFwcGx5LCB2aXN1YWxUeXBlLCBvblZpc3VhbFR5cGVDaGFuZ2UsIHRvcGljTGlzdCwgY29tcGFueUxpc3QsIHNlbGVjdGVkQ29tcGFuaWVzLCBzZWxlY3RlZFRvcGljcywgb25DaGFuZ2VUb3BpYywgb25DaGFuZ2VDb21wYW55LCBzZWxlY3RlZFNwYW4sIG9uU3BhbkNoYW5nZSwgb25TZWxlY3RBbGxDb21wYW5pZXMsIG9uRGVzZWxlY3RBbGxDb21wYW5pZXMsIG9uU2VsZWN0QWxsVG9waWNzLCBvbkRlc2VsZWN0QWxsVG9waWNzIH0pID0+IHtcbiAgY29uc3QgW2lucHV0VHlwZSwgc2V0SW5wdXRUeXBlXSA9IHVzZVN0YXRlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSk7XG4gIGNvbnN0IFtjb21wYW55RmlsdGVyLCBzZXRDb21wYW55RmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIG9uVmlzdWFsVHlwZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZT09XCJvbmUtY29tcFwiKXtcbiAgICAgICAgc2V0SW5wdXRUeXBlKFtcImNoZWNrYm94XCIsXCJyYWRpb1wiXSl9XG4gICAgICBlbHNle1xuICAgICAgICBzZXRJbnB1dFR5cGUoW1wicmFkaW9cIixcImNoZWNrYm94XCJdKVxuICAgICAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0VHlwZSk7XG4gIH07XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcbiAgXG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgcGFkZGluZzogJzEwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdiZy1saWdodCcgfX0+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBmb250LWl0YWxpY1wiIHN0eWxlPXt7IGhlaWdodDogJzUlJyB9fT5cbiAgICAgICAgPENvbCBzbT17Nn0+XG4gICAgICAgICAgPGg1IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwJScgfX0gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgIOWPr+imluWMluadoeS7tlxuICAgICAgICAgIDwvaDU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNtPXs0fT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpZD1cImFwcGx5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHl9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNSUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZSByb3VuZGVkLXBpbGwgYmctZGFya1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg5Y+v6KaW5YyWXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIHsvKiDmmYLplpPluYXpgbjmip7jg5zjgr/jg7MgKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IG15LTIgcHgtMlwiPlxuICAgICAgICA8Q29sIHhzPXsxMn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgICAgICAgICAgICDmmYLplpPjgpLpgbjmip5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCI+XG4gICAgICAgICAgICAgIHtbe3ZhbHVlOicxJywgbGFiZWw6JzHlubQnfSwge3ZhbHVlOicyJywgbGFiZWw6JzLlubQnfSwge3ZhbHVlOiczJywgbGFiZWw6JzPlubQnfV0ubWFwKCh7dmFsdWUsIGxhYmVsfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU3BhbkNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNtICR7c2VsZWN0ZWRTcGFuID09PSB2YWx1ZSA/ICdidG4tZGFyaycgOiAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5J31gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JywgcGFkZGluZzogJzJweCAxMHB4JyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgey8qIEFjY29yZGlvbiAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgdGV4dC1kYW5nZXIgXCIgc3R5bGU9e3sgaGVpZ2h0OiAnODAlJyB9fT5cbiAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiIGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICB7LyogVmlzdWFsaXphdGlvbiBUeXBlICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjBcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+5Y+v6KaW5YyW44K/44Kk44OXPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkID0gXCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCJ9IC8vIOODh+ODleOCqeODq+ODiOODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19XG4gICAgICAgICAgICAgICAgICA+MeekvuOBq+azqOebrjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Zpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCJ9IC8vIOODh+ODleOCqeODq+ODiOODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBteC0yXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPjHjg4jjg5Tjg4Pjgq/jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBUb3BpYyBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMVwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Ub3BpYzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgey8qIG9uZS1jb21w44Oi44O844OJ5pmC44Gr5YWo6YG45oqeL+WFqOino+mZpOOCkuihqOekuiAqL31cbiAgICAgICAgICAgICAge3Zpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZ2FwLTIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBwYWRkaW5nOiAnMnB4IDhweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TZWxlY3RBbGxUb3BpY3N9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOWFqOmBuOaKnlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIHBhZGRpbmc6ICcycHggOHB4JyB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkRlc2VsZWN0QWxsVG9waWNzfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDlhajop6PpmaRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7dG9waWNMaXN0Lm1hcCgodG9waWMpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dG9waWN9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVswXX0gXG4gICAgICAgICAgICAgICAgICAgIGlkPXt0b3BpY31cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRUb3BpY3MuaW5jbHVkZXModG9waWMpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VUb3BpYyh0b3BpYywgaW5wdXRUeXBlWzBdKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dG9waWN9PntJZHRvVG9waWNbdG9waWNdfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG4gICAgICAgICAgey8qIENvbXBhbnkgU2VsZWN0aW9uICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjJcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+Q29tcGFueTwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgey8qIG9uZS10b3BpY+ODouODvOODieaZguOBq+WFqOmBuOaKni/lhajop6PpmaTjgpLooajnpLogKi99XG4gICAgICAgICAgICAgIHt2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBnYXAtMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIHBhZGRpbmc6ICcycHggOHB4JyB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblNlbGVjdEFsbENvbXBhbmllc31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg5YWo6YG45oqeXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgcGFkZGluZzogJzJweCA4cHgnIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRGVzZWxlY3RBbGxDb21wYW5pZXN9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOWFqOino+mZpFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuS8gealreWQjeOBp+e1nuOCiui+vOOBvy4uLlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21wYW55RmlsdGVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIG1iLTJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2NvbXBhbnlMaXN0XG4gICAgICAgICAgICAgICAgLmZpbHRlcihjb21wYW55ID0+IGNvbXBhbnkuaW5jbHVkZXMoY29tcGFueUZpbHRlcikpXG4gICAgICAgICAgICAgICAgLm1hcCgoY29tcGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb21wYW55fT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dFR5cGVbMV19XG4gICAgICAgICAgICAgICAgICAgIGlkPXtjb21wYW55fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENvbXBhbmllcy5pbmNsdWRlcyhjb21wYW55KX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlQ29tcGFueShjb21wYW55LCBpbnB1dFR5cGVbMV0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdjb21wYW55J1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtjb21wYW55fT57Y29tcGFueX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgUGxvdEJhckNoYXJ0QiA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIHNwYW4sIGNsaWNrZGF0YSwgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJGSeOBruWIhuW4g1wiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGNsaWNrZGF0YSB8fCB0b3BpY1swXSB8fCBcIjBcIjtcbiAgICAgICAgY29uc3Qgc3BhbklkID0gc3BhbiB8fCBcIjJcIjtcbiAgICAgICAgY29uc3Qgb2NjdXB5VG9waWNNYXAgPSB7ICcxJzogJ29jY3VweV90b3BpY18yMC5qc29uJywgJzInOiAnb2NjdXB5X3RvcGljXzkuanNvbicsICczJzogJ29jY3VweV90b3BpY182Lmpzb24nIH07XG4gICAgICAgIGNvbnN0IG9jY3VweVRvcGljRmlsZSA9IG9jY3VweVRvcGljTWFwW1N0cmluZyhzcGFuSWQpXSB8fCAnb2NjdXB5X3RvcGljXzkuanNvbic7XG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2FwcF9kYXRhL3RvcGljJHt0YXJnZXRJZH0vcGVyc29uYT01L3NwYW4ke3NwYW5JZH0vJHtvY2N1cHlUb3BpY0ZpbGV9YDtcbiAgICAgICAgY29uc3QgZmlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9maV9zdWJjbGFzc19zcGxpdC5qc29uYDtcblxuICAgICAgICBjb25zdCBbb2NjdXB5SnNvbiwgZmlMaXN0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEocGF0aCksXG4gICAgICAgICAgZmV0Y2hEYXRhKGZpUGF0aCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICghb2NjdXB5SnNvbiB8fCAhb2NjdXB5SnNvbi5jb21wYW5pZXMgfHwgIW9jY3VweUpzb24uZmlfY29kZXMpIHtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZVN0cmluZyA9IChzdHIpID0+XG4gICAgICAgICAgdHlwZW9mIHN0ciA9PT0gXCJzdHJpbmdcIiA/IHN0ci5ub3JtYWxpemUoXCJORkNcIikudHJpbSgpIDogbnVsbDtcblxuICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW5pZXMgPSBvY2N1cHlKc29uLmNvbXBhbmllcy5tYXAobm9ybWFsaXplU3RyaW5nKTtcbiAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gc2FuaXRpemVkQ29tcGFuaWVzLmluZGV4T2Yobm9ybWFsaXplU3RyaW5nKGNvbXBhbnlbMF0pKTtcbiAgICAgICAgaWYgKGNvbXBhbnlJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke2NvbXBhbnlbMF19XCIgbm90IGZvdW5kLmApO1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5a++6LGh5LyB5qWt44Gu6KGM44Gu44G/5oq95Ye6XG4gICAgICAgIGNvbnN0IGZpVmFsdWVzID0ge307XG4gICAgICAgIG9jY3VweUpzb24uZGF0YS5mb3JFYWNoKCh7IHJvdywgY29sLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgaWYgKHJvdyA9PT0gY29tcGFueUluZGV4KSB7XG4gICAgICAgICAgICBmaVZhbHVlc1tvY2N1cHlKc29uLmZpX2NvZGVzW2NvbF1dID0gdmFsdWUgKiAxMDA7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gT2JqZWN0LmVudHJpZXMoZmlWYWx1ZXMpXG4gICAgICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoeyBjYXRlZ29yeToga2V5LCB2YWx1ZSwgc3VtbWFyaXplOiBmaUxpc3Rba2V5XSB9KSlcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnlbMF1944GuRknjga7liIbluINgKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIikge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBzcGFuLCBKU09OLnN0cmluZ2lmeShjbGlja2RhdGEpLCB1cGRhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHsgY29sb3I6IFwicm95YWxibHVlXCIgfSxcbiAgICAgICAgICAgIGN1c3RvbWRhdGE6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3VtbWFyaXplKS5yZXZlcnNlKCksXG4gICAgICAgICAgICBob3ZlcnRlbXBsYXRlOiBg6Kqs5piOOiAle2N1c3RvbWRhdGF9PGJyPiU6ICV7eDouMmZ9JSA8ZXh0cmE+PC9leHRyYT5gLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGlja3N1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDExLCBjb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImxpZ2h0eWVsbG93XCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90QmFyQ2hhcnRBID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgc3Bhbiwgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJGSeOBruWIhuW4g1wiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRvcGljWzBdO1xuICAgICAgICBjb25zdCBzcGFuSWQgPSBzcGFuIHx8IFwiMlwiO1xuICAgICAgICBjb25zdCBvY2N1cHlUb3BpY01hcCA9IHsgJzEnOiAnb2NjdXB5X3RvcGljXzIwLmpzb24nLCAnMic6ICdvY2N1cHlfdG9waWNfOS5qc29uJywgJzMnOiAnb2NjdXB5X3RvcGljXzYuanNvbicgfTtcbiAgICAgICAgY29uc3Qgb2NjdXB5VG9waWNGaWxlID0gb2NjdXB5VG9waWNNYXBbU3RyaW5nKHNwYW5JZCldIHx8ICdvY2N1cHlfdG9waWNfOS5qc29uJztcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvYXBwX2RhdGEvdG9waWMke3RhcmdldElkfS9wZXJzb25hPTUvc3BhbiR7c3BhbklkfS8ke29jY3VweVRvcGljRmlsZX1gO1xuICAgICAgICBjb25zdCBmaVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2ZpX3N1YmNsYXNzX3NwbGl0Lmpzb25gO1xuXG4gICAgICAgIGNvbnN0IFtvY2N1cHlKc29uLCBmaUxpc3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgICBmZXRjaERhdGEoZmlQYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgaWYgKCFvY2N1cHlKc29uIHx8ICFvY2N1cHlKc29uLmZpX2NvZGVzIHx8ICFvY2N1cHlKc29uLmRhdGEpIHJldHVybjtcblxuICAgICAgICAvLyBGSeOCs+ODvOODieWIpeOBq+WFqOS8gealreOBruWApOOCkuWQiOeul1xuICAgICAgICBjb25zdCBmaVN1bXMgPSB7fTtcbiAgICAgICAgb2NjdXB5SnNvbi5kYXRhLmZvckVhY2goKHsgY29sLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlDb2RlID0gb2NjdXB5SnNvbi5maV9jb2Rlc1tjb2xdO1xuICAgICAgICAgIGZpU3Vtc1tmaUNvZGVdID0gKGZpU3Vtc1tmaUNvZGVdIHx8IDApICsgdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRvdGFsID0gT2JqZWN0LnZhbHVlcyhmaVN1bXMpLnJlZHVjZSgocywgdikgPT4gcyArIHYsIDApO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gT2JqZWN0LmVudHJpZXMoZmlTdW1zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICBjYXRlZ29yeToga2V5LFxuICAgICAgICAgIHZhbHVlOiB0b3RhbCA+IDAgPyAodmFsdWUgLyB0b3RhbCkgKiAxMDAgOiAwLFxuICAgICAgICAgIHN1bW1hcml6ZTogZmlMaXN0W2tleV0sXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZm9ybWF0dGVkRGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYEZJ44Gu5YiG5biDYCk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiICYmICh1cGRhdGUgfHwgY2hhcnREYXRhLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgc3BhbiwgdXBkYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgeTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaFwiLFxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sXG4gICAgICAgICAgICBjdXN0b21kYXRhOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnN1bW1hcml6ZSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgaG92ZXJ0ZW1wbGF0ZTogYOiqrOaYjjogJXtjdXN0b21kYXRhfTxicj4lOiAle3g6LjJmfSUgPGV4dHJhPjwvZXh0cmE+YCxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpY2tzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkZJXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiAzNSwgbDogODAsIHI6IDUwIH0sXG4gICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAxMSwgY29sb3I6IFwiYmxhY2tcIiB9LFxuICAgICAgICAgICAgYmdjb2xvcjogXCJsaWdodHllbGxvd1wiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RCYXJDaGFydEE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteV9hcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWJvb3RzdHJhcF9lc21fQWNjb3JkaW9uX2pzLW5vZGVfbW9kdWxlc19yZWFjdC1ib290c3RyYXBfZXNtX0J1dHRvbi1iZTFiNDFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiU2lkZWJhciIsIkNvbnRlbnQiLCJBcHAiLCJhcnJvd0NvbG9yIiwiY29tcGFueUxpc3QiLCJ0b3BpY0xpc3QiLCJ2aXN1YWxUeXBlIiwic2V0VmlzdWFsVHlwZSIsImlzQXBwbGllZCIsInNldElzQXBwbGllZCIsInNlbGVjdGVkQ29tcGFuaWVzIiwic2V0U2VsZWN0ZWRDb21wYW5pZXMiLCJzZWxlY3RlZFRvcGljcyIsInNldFNlbGVjdGVkVG9waWNzIiwic2VsZWN0ZWRTcGFuIiwic2V0U2VsZWN0ZWRTcGFuIiwiaGFuZGxlVmlzdWFsVHlwZUNoYW5nZSIsInZhbHVlIiwiaGFuZGxlQXBwbHkiLCJ0b2dnbGVTZWxlY3Rpb24iLCJpdGVtIiwic2V0U2VsZWN0ZWQiLCJidXR0b210eXBlIiwicHJldlNlbGVjdGVkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpIiwiQ29tcGFueUNoZWNrYm94Q2hhbmdlIiwiY29tcGFueSIsIlRvcGljQ2hlY2tib3hDaGFuZ2UiLCJ0b3BpYyIsImhhbmRsZVNwYW5DaGFuZ2UiLCJoYW5kbGVTZWxlY3RBbGxDb21wYW5pZXMiLCJoYW5kbGVEZXNlbGVjdEFsbENvbXBhbmllcyIsImhhbmRsZVNlbGVjdEFsbFRvcGljcyIsImhhbmRsZURlc2VsZWN0QWxsVG9waWNzIiwicmVzZXRJc0FwcGxpZWQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJmbHVpZCIsImNsYXNzTmFtZSIsIm1kIiwib25BcHBseSIsIm9uVmlzdWFsVHlwZUNoYW5nZSIsIm9uQ2hhbmdlVG9waWMiLCJvbkNoYW5nZUNvbXBhbnkiLCJvblNwYW5DaGFuZ2UiLCJvblNlbGVjdEFsbENvbXBhbmllcyIsIm9uRGVzZWxlY3RBbGxDb21wYW5pZXMiLCJvblNlbGVjdEFsbFRvcGljcyIsIm9uRGVzZWxlY3RBbGxUb3BpY3MiLCJzdHlsZSIsImhlaWdodCIsInBsb3QiLCJzcGFuIiwicmVzZXRBcHBseSIsIkNhcmQiLCJQbG90UGllQSIsIlBsb3RQaWVCIiwiUGxvdFBlcnNvbmFDb21wIiwiUGxvdFBlcnNvbmFUb3BpYyIsIlBsb3RCYXJDaGFydEEiLCJQbG90QmFyQ2hhcnRCIiwiZ2V0Q2FyZERhdGEiLCJMb2FkaW5nT3ZlcmxheSIsInBvc2l0aW9uIiwiaW5zZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsInpJbmRleCIsImZvbnRTaXplIiwiY29sb3IiLCJwb2ludGVyRXZlbnRzIiwiX3JlZiIsImNsaWNrRGF0YSIsInNldENsaWNrRGF0YSIsImlzUGllTG9hZGluZyIsInNldElzUGllTG9hZGluZyIsImlzQmFyTG9hZGluZyIsInNldElzQmFyTG9hZGluZyIsImhhbmRsZVBpZUNoYXJ0Q2xpY2siLCJkYXRhIiwiY2FyZERhdGEiLCJzZXRDYXJkRGF0YSIsImZldGNoRGF0YSIsIm1hcmdpbkxlZnQiLCJ1cGRhdGUiLCJvblJlbmRlcmVkIiwibGF5b3V0IiwidGl0bGUiLCJ3aWR0aCIsImNvbmZpZyIsInJlc3BvbnNpdmUiLCJvbkNsaWNrRGF0YSIsImNsaWNrZGF0YSIsIm1hcCIsImluZGV4Iiwia2V5IiwieHMiLCJmbGV4IiwiQm9keSIsIlRpdGxlIiwibGFiZWwiLCJkaXJlY3Rpb24iLCJ0b1VwcGVyQ2FzZSIsIlRleHQiLCJ2YWx1ZXMiLCJqb2luIiwiY2xpY2tlZFRvcGljIiwidGFyZ2V0VG9waWMiLCJBcnJheSIsImlzQXJyYXkiLCJzcGFuSWQiLCJ0YXJnZXRDb21wYW55IiwiZGF0YVBhdGgiLCJwcm9jZXNzIiwiZW52IiwiUFVCTElDX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbkRhdGEiLCJqc29uIiwiY29tcGFueUVudHJ5IiwiZmluZCIsImxlbmd0aCIsIm5vdmVsdHlfdXAiLCJub3ZlbHR5X2Rvd24iLCJhZGFwdF91cCIsImFkYXB0X2Rvd24iLCJlcnJvciIsImNvbnNvbGUiLCJSZWFjdERPTSIsInJlbmRlciIsIlN0cmljdE1vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlUmVmIiwiUGxvdCIsImNvbG9ybWFwIiwibm9ybWFsaXplIiwicyIsInRyaW0iLCJmZXRjaEpzb24iLCJ1cmwiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJJZHRvVG9waWMiLCJUb3BpY3RvSWQiLCJnZXRMYXN0TWVhbkZpbGUiLCJTdHJpbmciLCJ0YXJnZXRUb3BpY3MiLCJOdW1iZXIiLCJmaWxlQ2FjaGUiLCJsb2FkRGF0YSIsIm1lYW5GaWxlIiwicmVzdWx0cyIsIlByb21pc2UiLCJhbGwiLCJ0b3BpY0lkIiwiY2FjaGVLZXkiLCJjdXJyZW50IiwiZW50cnkiLCJkIiwiZmlsdGVyZWQiLCJ0b3RhbCIsInJlZHVjZSIsImNhdGVnb3J5Iiwic29ydCIsImEiLCJiIiwiaGFuZGxlUGxvdENsaWNrIiwiZXZlbnQiLCJwb2ludHMiLCJ0b3BpY2lkIiwicmVwbGFjZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInR5cGUiLCJsYWJlbHMiLCJtYXJrZXIiLCJjb2xvcnMiLCJzaG93bGVnZW5kIiwicGxvdF9iZ2NvbG9yIiwicGFwZXJfYmdjb2xvciIsIm1hcmdpbiIsInQiLCJsIiwiciIsIm9uQ2xpY2siLCJzdGF0dXMiLCJzZXRUaXRsZSIsImxvYWRDaGFydERhdGEiLCJ0aW1lIiwidGFyZ2V0SWQiLCJkYXRhVXJsIiwicmF3RGF0YSIsInNvcnRlZERhdGEiLCJzbGljZSIsImxvYWRDb21wYW5pZXMiLCJ0ZXh0Iiwic3BsaXQiLCJsaW5lIiwidG9MaXN0IiwibGluZXMiLCJhbHBoYV9saSIsInBhcnNlRmxvYXQiLCJiZXRhX2xpIiwiUGxvdFBlcnNvbkNvbXAiLCJhcnJvd19jb2xvciIsInByZXBhcmVkRGF0YSIsInNldFByZXBhcmVkRGF0YSIsImZpZ0RhdGEiLCJzZXRGaWdEYXRhIiwiYW5ub3RhdGlvbnMiLCJzZXRBbm5vdGF0aW9ucyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInF1YWRyYW50TGFiZWxzIiwieCIsInkiLCJ4YW5jaG9yIiwieWFuY2hvciIsIl9yZWYyIiwieHJlZiIsInlyZWYiLCJzaG93YXJyb3ciLCJmb250Iiwic2l6ZSIsImJnY29sb3IiLCJib3JkZXJwYWQiLCJzcGFuVG9NYXhQIiwibWF4UCIsImxvYWRBbGwiLCJhbGxUcmFjZXMiLCJjb21wYW55VXJsIiwicmF3Q29tcGFuaWVzIiwibm9ybWFsaXplZENvbXBhbmllcyIsImNvbXBhbnlJbmRleE1hcCIsImNuIiwibmFtZSIsImlkeCIsImluZGV4T2YiLCJfcmVmMyIsInRpbWVEYXRhTGlzdCIsImZyb20iLCJfIiwicCIsInB1c2giLCJjb21wYW55TmFtZSIsImFscGhhIiwiX3JlZjQiLCJiZXRhIiwiX3JlZjUiLCJ0cmFjZXMiLCJwbG90RGF0YSIsIl9yZWY2IiwibiIsIm1vZGUiLCJzeW1ib2wiLCJwbG90QW5ub3RhdGlvbnMiLCJmbGF0TWFwIiwiX3JlZjciLCJheCIsImF5IiwiYXhyZWYiLCJheXJlZiIsImFycm93Y29sb3IiLCJhcnJvd3NpemUiLCJhcnJvd3dpZHRoIiwiYXJyb3doZWFkIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwieGF4aXMiLCJyYW5nZSIsImxpbmVjb2xvciIsImxpbmV3aWR0aCIsImdyaWRjb2xvciIsImdyaWR3aWR0aCIsImdyaWRkYXNoIiwidGlja21vZGUiLCJ0aWNrdmFscyIsInRpY2t0ZXh0IiwiemVyb2xpbmUiLCJ5YXhpcyIsInRpdGxlX3N0YW5kb2ZmIiwibGVnZW5kIiwiYm9yZGVyY29sb3IiLCJib3JkZXJ3aWR0aCIsIlBsb3RQZXJzb25Ub3BpYyIsIl9yZWY4IiwiQWNjb3JkaW9uIiwiQnV0dG9uIiwiaW5wdXRUeXBlIiwic2V0SW5wdXRUeXBlIiwiY29tcGFueUZpbHRlciIsInNldENvbXBhbnlGaWx0ZXIiLCJoYW5kbGVSYWRpb0NoYW5nZSIsInRhcmdldCIsImxvZyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJzbSIsIndoaXRlU3BhY2UiLCJyb2xlIiwiZGVmYXVsdEFjdGl2ZUtleSIsIkl0ZW0iLCJldmVudEtleSIsIkhlYWRlciIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImh0bWxGb3IiLCJwbGFjZWhvbGRlciIsImUiLCJjb250ZW50VHlwZSIsImhlYWRlcnMiLCJnZXQiLCJvY2N1cHlUb3BpY01hcCIsIm9jY3VweVRvcGljRmlsZSIsInBhdGgiLCJmaVBhdGgiLCJvY2N1cHlKc29uIiwiZmlMaXN0IiwiY29tcGFuaWVzIiwiZmlfY29kZXMiLCJub3JtYWxpemVTdHJpbmciLCJzdHIiLCJzYW5pdGl6ZWRDb21wYW5pZXMiLCJjb21wYW55SW5kZXgiLCJ3YXJuIiwiZmlWYWx1ZXMiLCJmb3JFYWNoIiwicm93IiwiY29sIiwiT2JqZWN0IiwiZW50cmllcyIsInN1bW1hcml6ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXZlcnNlIiwib3JpZW50YXRpb24iLCJjdXN0b21kYXRhIiwiaG92ZXJ0ZW1wbGF0ZSIsIm1pcnJvciIsInRpY2tzdWZmaXgiLCJob3ZlcmxhYmVsIiwiYWxpZ24iLCJmaVN1bXMiLCJmaUNvZGUiLCJ2IiwiZm9ybWF0dGVkRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=