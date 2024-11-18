/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _navbar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.jsx */ "./src/navbar.jsx");
/* harmony import */ var _sidebar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.jsx */ "./src/sidebar.jsx");
/* harmony import */ var _content_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.jsx */ "./src/content.jsx");





const App = () => {
  // カラーとフォーカス企業リスト
  const arrowColor = ['#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF', '#3E9E6F', '#F38181', '#545E75', '#FFB627', '#577590'];
  const companyList = ['鹿島建設株式会社', "株式会社大林組", "清水建設株式会社", "大成建設株式会社", "株式会社竹中工務店", "株式会社長谷工コーポレーション", "前田建設工業株式会社", "五洋建設株式会社", "株式会社フジタ", "戸田建設株式会社", "株式会社熊谷組"];
  const topicList = ["0", "1", "2", "3", "5", "6", "7", "8", "9", "11"];
  const [visualType, setVisualType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("one-topic"); // 初期値を設定

  // Sidebarからラジオボタンの値を受け取るコールバック関数
  const handleVisualTypeChange = value => {
    setVisualType(value);
  };
  const [isApplied, setIsApplied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  // コールバック関数として渡す関数
  const handleApply = () => {
    setIsApplied(1); // 状態を更新
  };

  // selectedCompaniesを配列の状態として管理
  const [selectedCompanies, setSelectedCompanies] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["株式会社熊谷組"]);
  const [selectedTopics, setSelectedTopics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["0"]);

  // 共通の関数を作成
  const toggleSelection = (item, setSelected, buttomtype) => {
    console.log("BB", buttomtype);
    if (buttomtype == "checkbox") {
      setSelected(prevSelected => {
        if (prevSelected.includes(item)) {
          // 既に選択されている場合は削除
          return prevSelected.filter(i => i !== item);
        } else {
          // 選択されていない場合は追加
          return [...prevSelected, item];
        }
      });
    } else {
      setSelected([item]);
    }
    ;
  };

  // チェックボックス変更時の関数
  const CompanyCheckboxChange = (company, buttomtype) => {
    toggleSelection(company, setSelectedCompanies, buttomtype);
    console.log("company", buttomtype);
  };
  const TopicCheckboxChange = (topic, buttomtype) => {
    toggleSelection(topic, setSelectedTopics, buttomtype);
    console.log("topic", buttomtype);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log("somePropの値が変わりました:", visualType);
    setSelectedCompanies(["株式会社熊谷組"]);
    setSelectedTopics(["0"]);
  }, [visualType]); // somePropが変更されたときだけ実行

  const resetIsApplied = () => {
    setIsApplied(0);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fluid: true,
    className: "bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    md: 2,
    className: "border-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sidebar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onApply: handleApply,
    visualType: visualType,
    onVisualTypeChange: handleVisualTypeChange,
    topicList: topicList,
    companyList: companyList,
    selectedCompanies: selectedCompanies,
    selectedTopics: selectedTopics,
    onChangeTopic: TopicCheckboxChange,
    onChangeCompany: CompanyCheckboxChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    md: 10,
    className: "border-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    plot: isApplied,
    visualType: visualType,
    topic: selectedTopics,
    company: selectedCompanies,
    resetApply: () => setIsApplied(0)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "plot:", isApplied))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/content.jsx":
/*!*************************!*\
  !*** ./src/content.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js");
/* harmony import */ var _occupy_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./occupy.jsx */ "./src/occupy.jsx");
/* harmony import */ var _occupy_company_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./occupy-company.jsx */ "./src/occupy-company.jsx");
/* harmony import */ var _persona_comp_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persona-comp.jsx */ "./src/persona-comp.jsx");
/* harmony import */ var _persona_topic_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./persona-topic.jsx */ "./src/persona-topic.jsx");
/* harmony import */ var plotly_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! plotly.js */ "./node_modules/plotly.js/lib/index.js");
/* harmony import */ var plotly_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(plotly_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _trend_topix_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trend-topix.jsx */ "./src/trend-topix.jsx");
/* harmony import */ var _trend_comp_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trend-comp.jsx */ "./src/trend-comp.jsx");










const Content = _ref => {
  let {
    plot,
    visualType,
    topic,
    company,
    resetApply
  } = _ref;
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [clickData, setClickData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // クリックデータの状態

  const handlePieChartClick = data => {
    console.log("クリックされたデータ:", data); // デバッグ用
    setClickData(data); // 状態を更新
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fluid: true,
    className: "bg-light",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      height: '48%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    md: 10,
    style: {
      marginLeft: '0%'
    }
  }, visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_persona_topic_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    onRendered: resetApply,
    layout: {
      title: "ペルソナの可視化",
      width: '100%',
      height: '42vh'
    },
    className: "bg-light"
  }) : visualType === "one-comp" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_persona_comp_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    onRendered: resetApply,
    layout: {
      title: "ペルソナの可視化",
      width: '100%',
      height: '42vh'
    },
    className: "bg-light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u8A72\u5F53\u3059\u308B\u8868\u793A\u304C\u3042\u308A\u307E\u305B\u3093")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    md: 2,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: 18,
      color: 'gray',
      textAlign: 'center'
    },
    className: "text-secondary-emphasis"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      height: '80%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      height: '29%',
      marginTop: '4%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Title, {
    className: "text-secondary-emphasis"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Text, {
    className: "text-secondary-emphasis"
  }, "ABC")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      height: '29%',
      marginTop: '4%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Title, {
    className: "text-secondary-emphasis"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Text, {
    className: "text-secondary-emphasis"
  }, "DEF")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      height: '29%',
      marginTop: '4%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Title, {
    className: "text-secondary-emphasis"
  }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Text, {
    className: "text-secondary-emphasis"
  }, "GHI"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      height: '48%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    md: 6
  }, visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_occupy_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    onRendered: resetApply,
    layout: {
      title: '注目企業の業界に対する占有率',
      width: '100%',
      height: '80%'
    },
    className: "bg-light"
  }) : visualType === "one-comp" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_occupy_company_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    onRendered: resetApply,
    onClickData: handlePieChartClick // クリックデータのハンドラーを渡す
    ,
    layout: {
      title: '注目企業の業界に対する占有率',
      width: '100%',
      height: '80%'
    },
    className: "bg-light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u8A72\u5F53\u3059\u308B\u8868\u793A\u304C\u3042\u308A\u307E\u305B\u3093")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    md: 6
  }, visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_trend_topix_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    onRendered: resetApply,
    data: [] // データを追加してください
    ,
    layout: {
      title: 'Fタームの分布',
      width: '100%',
      height: '80%'
    },
    className: "bg-light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_trend_comp_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    clickdata: clickData // クリックデータを渡す
    ,
    onRendered: resetApply,
    data: [] // データを追加してください
    ,
    layout: {
      title: 'Fタームの分布',
      width: '100%',
      height: '80%'
    },
    className: "bg-light"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _app_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.jsx */ "./src/app.jsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");




const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/navbar.jsx":
/*!************************!*\
  !*** ./src/navbar.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");


const DashboardNavbar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bg: "light",
    expand: "lg",
    style: {
      height: '5vh'
    },
    className: "text-secondary-emphasis"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Brand, {
    href: "/",
    className: "text-secondary-emphasis"
  }, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "me-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    href: "/",
    className: "text-secondary-emphasis"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    href: "/page-1",
    className: "text-secondary-emphasis"
  }, "Page 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    href: "/page-2",
    className: "text-secondary-emphasis"
  }, "Page 2"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardNavbar);

/***/ }),

/***/ "./src/occupy-company.jsx":
/*!********************************!*\
  !*** ./src/occupy-company.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js");



// fetchData関数：JSONまたはテキスト形式に対応
const fetchData = async url => {
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
const processSparseData = sparseData => {
  const numRows = Math.max(...sparseData.map(entry => entry.row)) + 1;
  const numCols = Math.max(...sparseData.map(entry => entry.col)) + 1;
  const matrix = Array.from({
    length: numRows
  }, () => Array(numCols).fill(0));
  sparseData.forEach(_ref => {
    let {
      row,
      col,
      value
    } = _ref;
    matrix[row][col] = value;
  });
  return matrix.map(row => row.reduce((sum, value) => sum + value, 0)); // 行方向の和を返す
};
const PlotPieB = _ref2 => {
  let {
    update,
    visualType,
    topic,
    company,
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
    "11": "掘削装置"
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
    "掘削装置": "11"
  };
  // キャッシュ用のオブジェクト
  const dataCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    companies: {},
    sparseData: {}
  });
  const loadData = async () => {
    try {
      const allTopicsData = await Promise.all(allTopic.map(async target_id => {
        const time = 9;
        const companyUrl = `/data/param/patent/alpha/topic=${target_id}/company`;
        const sparseDataUrl = `/data/topic${target_id}/persona=5/occupy_topic_${time}.json`;

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
        const normalizeString = str => {
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
        return {
          topic: target_id,
          value: rowSums[companyIndex]
        };
      }));
      const filteredData = allTopicsData.filter(data => data !== null);

      // 正規化とソート
      const totalValue = filteredData.reduce((sum, item) => sum + item.value, 0);
      if (totalValue === 0) {
        console.warn("No valid data to normalize.");
        setChartData([]);
        return;
      }
      const normalizedData = filteredData.map(item => ({
        category: item.topic,
        value: item.value / totalValue
      })).sort((a, b) => b.value - a.value);
      setChartData(normalizedData.slice(0, 10)); // 上位10件のみ表示
      onRendered(); // 描画完了を通知
    } catch (error) {
      console.error("データ処理中のエラー:", error);
    }
  };

  // 初期データ読み込みとupdateの変更時にデータをロード
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (visualType === "one-comp") {
      loadData();
    }
  }, [update, visualType]);
  const handlePlotClick = event => {
    if (event.points && event.points[0]) {
      const clickdata = event.points[0].label; // クリックされた部分のラベル
      const label = TopictoId[clickdata];
      const topicid = label.replace("Topic ", "");
      onClickData([topicid]); // 親コンポーネントにラベルを通知
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: [{
      type: "pie",
      values: chartData.map(item => item.value),
      labels: chartData.map(item => IdtoTopic[String(item.category)]),
      direction: "clockwise",
      marker: {
        colorscale: "Viridis"
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js");



// データをロードする関数
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

// テキストデータを読み込む関数
const fetchTextData = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const text = await response.text();
    return text.split("\n").filter(line => line.trim() !== "");
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
    onRendered
  } = _ref;
  const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadChartData = async () => {
      try {
        const time = 0;
        const targetId = topic || "default_topic"; // 初期値として"default_topic"を設定
        const dataUrl = `/data/topic${targetId}/persona=5/occupy_mean_${time}.json`;
        const columnUrl = `/data/param/patent/alpha/topic=${targetId}/company`;

        // データ取得
        const [values, labels] = await Promise.all([fetchData(dataUrl), fetchTextData(columnUrl)]);

        // 値とラベルの組み合わせを作成
        const data = labels.map((label, index) => ({
          label,
          value: values.value[index] || 0 // 値がない場合は0
        }));

        // 値に基づいて降順にソートして上位10件を抽出
        const sortedData = data.sort((a, b) => b.value - a.value).slice(0, 10);
        setChartData(sortedData);
        setTitle(`${targetId}に関する特許の企業占有率`);
        if (onRendered) onRendered(); // 描画完了を通知
      } catch (error) {
        console.error("チャートデータの処理中にエラー:", error);
      }
    };

    // 初回レンダリング時と`update`変更時にデータをロード
    if (visualType === "one-topic") {
      loadChartData();
    }
  }, [update, visualType, topic, onRendered]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: [{
      type: "pie",
      values: chartData.map(item => item.value),
      labels: chartData.map(item => item.label),
      direction: "clockwise",
      marker: {
        colorscale: "Viridis"
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
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlotPieA);

/***/ }),

/***/ "./src/persona-comp.jsx":
/*!******************************!*\
  !*** ./src/persona-comp.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
          const columnPath = `/data/param/patent/alpha/topic=${target_id}/company`;
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
            const parameterPath = `/data/param/patent/alpha/topic=${target_id}/test_optimize_${p}`;
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
  }, [visualType, topic, company]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (update && preparedData) {
      const plotData = preparedData.searchList.map((k, j) => ({
        x: preparedData.alpha[j],
        y: preparedData.beta[j],
        mode: "lines+markers+text",
        text: ["1", "2", "3", "4", "5"],
        textposition: "top left",
        marker: {
          symbol: 'circle',
          color: arrow_color[j % arrow_color.length],
          size: 5
        },
        name: IdtoTopic[topic[j]]
      }));
      const plotAnnotations = preparedData.searchList.flatMap((_, j) => Array(4).fill(0).map((_, i) => ({
        x: preparedData.alpha[j][i + 1],
        y: preparedData.beta[j][i + 1],
        xref: 'x',
        yref: 'y',
        axref: 'x',
        ayref: 'y',
        ax: preparedData.alpha[j][i],
        ay: preparedData.beta[j][i],
        arrowcolor: arrow_color[j % arrow_color.length],
        arrowsize: 1.2,
        arrowwidth: 1.2,
        arrowhead: 5,
        showarrow: true
      })));
      setFigData(plotData);
      setAnnotations(plotAnnotations);
      if (onRendered) onRendered();
    }
  }, [update, preparedData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: figData,
    layout: {
      plot_bgcolor: 'white',
      paper_bgcolor: 'white',
      annotations: annotations,
      title: {
        text: title,
        font: {
          size: 20,
          color: 'grey'
        },
        xref: 'paper',
        x: 0.5,
        y: 0.95,
        xanchor: 'center'
      },
      xaxis: {
        range: [0, 1.01],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot'
      },
      yaxis: {
        range: [0, 1.01],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot'
      },
      margin: {
        t: 40,
        b: 35,
        l: 40,
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
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlotPersonComp);

/***/ }),

/***/ "./src/persona-topic.jsx":
/*!*******************************!*\
  !*** ./src/persona-topic.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
const PlotPersonTopic = _ref => {
  let {
    update,
    visualType,
    topic,
    company,
    onRendered
  } = _ref;
  const arrow_color = ['#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF'];
  const [figData, setFigData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [annotations, setAnnotations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [companyList, setCompanyList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [searchList, setSearchList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  // 初期データのロード
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (visualType === "one-topic" && topic) {
      const target_id = topic; // トピックIDの設定
      const columnPath = `/data/param/patent/alpha/topic=${target_id}/company`;
      loadCompanies(columnPath).then(data => {
        setCompanyList(data);
        setTitle(`${target_id}のペルソナ`);
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

  // データの描画
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (update && searchList.length > 0 && topic) {
      const target_id = topic; // トピックIDの設定
      const node_alpha = Array.from({
        length: searchList.length
      }, () => Array(5).fill(0));
      const node_beta = Array.from({
        length: searchList.length
      }, () => Array(5).fill(0));
      const promises = Array.from({
        length: 5
      }, (_, i) => i + 5).map(p => {
        const parameterPath = `/data/param/patent/alpha/topic=${target_id}/test_optimize_${p}`;
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
            color: arrow_color[j % arrow_color.length],
            size: 5
          },
          name: k
        }));
        const plotAnnotations = searchList.flatMap((_, j) => Array(4).fill(0).map((_, i) => ({
          x: node_alpha[j][i + 1],
          y: node_beta[j][i + 1],
          xref: 'x',
          yref: 'y',
          ax: node_alpha[j][i],
          ay: node_beta[j][i],
          axref: 'x',
          ayref: 'y',
          arrowcolor: arrow_color[j % arrow_color.length],
          arrowsize: 1.2,
          arrowwidth: 1.2,
          arrowhead: 5,
          showarrow: true
        })));
        setFigData(plotData);
        setAnnotations(plotAnnotations);
        if (onRendered) onRendered();
      });
    }
  }, [update, searchList, companyList, topic]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: figData,
    layout: {
      plot_bgcolor: 'white',
      paper_bgcolor: 'white',
      annotations: annotations,
      title: {
        text: title,
        font: {
          size: 20,
          color: 'grey'
        },
        xref: 'paper',
        x: 0.5,
        y: 0.95,
        xanchor: 'center'
      },
      xaxis: {
        range: [0, 1.01],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot'
      },
      yaxis: {
        range: [0, 1.01],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot'
      },
      margin: {
        t: 40,
        b: 35,
        l: 40,
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
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlotPersonTopic);

/***/ }),

/***/ "./src/sidebar.jsx":
/*!*************************!*\
  !*** ./src/sidebar.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    onChangeCompany
  } = _ref;
  const [inputType, setInputType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["radio", "checkbox"]); // 初期値は "checkbox"
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
    "11": "掘削装置"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '100vh',
      padding: '10px',
      backgroundColor: 'lightgray'
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
    className: "bg-light text-danger font-italic",
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
    className: "form-check-label mx-2"
  }, "\u4E00\u793E\u306B\u6CE8\u76EE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    className: "form-check-label mx-2"
  }, "\u4E00\u3064\u306E\u30C8\u30D4\u30C3\u30AF\u306B\u6CE8\u76EE"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Header, null, "Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, companyList.map(company => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js");



// データ取得関数
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
const PlotBarChartB = _ref => {
  let {
    update,
    visualType,
    topic,
    company,
    clickdata,
    onRendered
  } = _ref;
  const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("FIの分布");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadChartData = async () => {
      try {
        const time = 9;
        const targetId = clickdata || topic[0] || "default_topic"; // `clickdata`を優先
        const path = `/data/param/patent/alpha/topic=${targetId}/trend/output_${time}.json`;
        const companyPath = `/data/param/patent/alpha/topic=${targetId}/company`;

        // データを取得
        const [original, companyList] = await Promise.all([fetchData(path), loadCompanies(companyPath)]);
        if (!companyList.includes(company[0])) {
          console.warn(`Company "${company[0]}" not found.`);
          setChartData([]);
          return;
        }

        // Companyのデータ取得
        const companyIndex = companyList.indexOf(company[0]);
        const companyData = original[companyIndex];
        if (!companyData) {
          console.warn(`No data found for company index "${companyIndex}".`);
          setChartData([]);
          return;
        }

        // JSONデータの整形
        const formattedData = Object.entries(companyData).map(_ref2 => {
          let [key, value] = _ref2;
          return {
            category: key,
            value: parseFloat(value) || 0 // 値を数値に変換（ない場合は0）
          };
        });

        // データを降順にソートして上位10件を取得
        const sortedData = formattedData.sort((a, b) => b.value - a.value).slice(0, 10);
        setChartData(sortedData);
        setTitle(`${company[0]}のFIの分布`);
        onRendered(); // 描画完了を通知
      } catch (error) {
        console.error("データ処理中のエラー:", error);
      }
    };

    // `clickdata`の値が変化したかを明示的に比較
    if (visualType === "one-comp" && (update || chartData.length === 0 || clickdata)) {
      loadChartData();
    }
  }, [visualType, topic, company, JSON.stringify(clickdata), update]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: [{
      type: "bar",
      x: chartData.map(item => item.value).reverse(),
      // 横向き棒グラフ用の値（逆順）
      y: chartData.map(item => item.category).reverse(),
      // カテゴリ（逆順）
      orientation: "h",
      // 横向き棒グラフ
      marker: {
        color: "royalblue"
      } // 棒の色
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
        mirror: false
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
      }
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js");



// データ取得関数
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
const PlotBarChartB = _ref => {
  let {
    update,
    visualType,
    topic,
    company,
    clickdata,
    onRendered
  } = _ref;
  const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("FIの分布");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadChartData = async () => {
      try {
        const time = 9;
        const targetId = clickdata || topic[0] || "default_topic"; // clickdataを優先
        const path = `/data/param/patent/alpha/topic=${targetId}/trend/output_${time}.json`;
        const companyPath = `/data/param/patent/alpha/topic=${targetId}/company`;

        // データを取得
        const [original, companyList] = await Promise.all([fetchData(path), loadCompanies(companyPath)]);
        if (!companyList.includes(company[0])) {
          console.warn(`Company "${company[0]}" not found.`);
          setChartData([]);
          return;
        }

        // Companyのデータ取得
        const companyIndex = companyList.indexOf(company[0]);
        const companyData = original[companyIndex];
        if (!companyData) {
          console.warn(`No data found for company index "${companyIndex}".`);
          setChartData([]);
          return;
        }

        // JSONデータの整形
        const formattedData = Object.entries(companyData).map(_ref2 => {
          let [key, value] = _ref2;
          return {
            category: key,
            value: parseFloat(value) || 0 // 値を数値に変換（ない場合は0）
          };
        });

        // データを降順にソートして上位10件を取得
        const sortedData = formattedData.sort((a, b) => b.value - a.value).slice(0, 10);
        setChartData(sortedData);
        setTitle(`${company[0]}のFIの分布`);
        onRendered(); // 描画完了を通知
      } catch (error) {
        console.error("データ処理中のエラー:", error);
      }
    };
    if (visualType === "one-comp" && (update || chartData.length === 0 || clickdata)) {
      loadChartData();
    }
  }, [visualType, company, clickdata, update]); // clickdata を依存関係に追加

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: [{
      type: "bar",
      x: chartData.map(item => item.value).reverse(),
      y: chartData.map(item => item.category).reverse(),
      orientation: "h",
      marker: {
        color: "royalblue"
      }
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
        mirror: false
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
      }
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlotBarChartB);

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2722%27 height=%2722%27 fill=%27%23333%27 viewBox=%270 0 22 22%27%3E%3Cpath d=%27m1.754 13.406 4.453-4.851 3.09 3.09 3.281 3.277.969-.969-3.309-3.312 3.844-4.121 6.148 6.886h1.082v-.855l-7.207-8.07-4.84 5.187L6.169 6.57l-5.48 5.965v.871ZM.688 16.844h20.625v1.375H.688Zm0 0%27/%3E%3C/svg%3E":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2722%27 height=%2722%27 fill=%27%23333%27 viewBox=%270 0 22 22%27%3E%3Cpath d=%27m1.754 13.406 4.453-4.851 3.09 3.09 3.281 3.277.969-.969-3.309-3.312 3.844-4.121 6.148 6.886h1.082v-.855l-7.207-8.07-4.84 5.187L6.169 6.57l-5.48 5.965v.871ZM.688 16.844h20.625v1.375H.688Zm0 0%27/%3E%3C/svg%3E ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2722%27 height=%2722%27 fill=%27%23333%27 viewBox=%270 0 22 22%27%3E%3Cpath d=%27m1.754 13.406 4.453-4.851 3.09 3.09 3.281 3.277.969-.969-3.309-3.312 3.844-4.121 6.148 6.886h1.082v-.855l-7.207-8.07-4.84 5.187L6.169 6.57l-5.48 5.965v.871ZM.688 16.844h20.625v1.375H.688Zm0 0%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2722%27 height=%2722%27 fill=%27%2333b5e5%27 viewBox=%270 0 22 22%27%3E%3Cpath d=%27m1.754 13.406 4.453-4.851 3.09 3.09 3.281 3.277.969-.969-3.309-3.312 3.844-4.121 6.148 6.886h1.082v-.855l-7.207-8.07-4.84 5.187L6.169 6.57l-5.48 5.965v.871ZM.688 16.844h20.625v1.375H.688Zm0 0%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2722%27 height=%2722%27 fill=%27%2333b5e5%27 viewBox=%270 0 22 22%27%3E%3Cpath d=%27m1.754 13.406 4.453-4.851 3.09 3.09 3.281 3.277.969-.969-3.309-3.312 3.844-4.121 6.148 6.886h1.082v-.855l-7.207-8.07-4.84 5.187L6.169 6.57l-5.48 5.965v.871ZM.688 16.844h20.625v1.375H.688Zm0 0%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2722%27 height=%2722%27 fill=%27%2333b5e5%27 viewBox=%270 0 22 22%27%3E%3Cpath d=%27m1.754 13.406 4.453-4.851 3.09 3.09 3.281 3.277.969-.969-3.309-3.312 3.844-4.121 6.148 6.886h1.082v-.855l-7.207-8.07-4.84 5.187L6.169 6.57l-5.48 5.965v.871ZM.688 16.844h20.625v1.375H.688Zm0 0%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill-rule=%27evenodd%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill-rule=%27evenodd%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill-rule=%27evenodd%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill=%27%23fff%27 fill-rule=%27evenodd%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill=%27%23fff%27 fill-rule=%27evenodd%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill=%27%23fff%27 fill-rule=%27evenodd%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z%27/%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z%27/%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z%27/%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z%27/%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27m10.5 14 4-8 4 8z%27/%3E%3Cpath fill=%27%23ccc%27 d=%27m10.5 16 4 8 4-8z%27/%3E%3C/svg%3E":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27m10.5 14 4-8 4 8z%27/%3E%3Cpath fill=%27%23ccc%27 d=%27m10.5 16 4 8 4-8z%27/%3E%3C/svg%3E ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27m10.5 14 4-8 4 8z%27/%3E%3Cpath fill=%27%23ccc%27 d=%27m10.5 16 4 8 4-8z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%2333b5e5%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3C/svg%3E":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%2333b5e5%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%2333b5e5%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%2333b5e5%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%2333b5e5%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%2333b5e5%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23666%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath fill=%27red%27 d=%27m14 5 1 1-9 9-1-1z%27/%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23666%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath fill=%27red%27 d=%27m14 5 1 1-9 9-1-1z%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23666%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath fill=%27red%27 d=%27m14 5 1 1-9 9-1-1z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23999%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath fill=%27red%27 d=%27m14 5 1 1-9 9-1-1z%27/%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23999%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath fill=%27red%27 d=%27m14 5 1 1-9 9-1-1z%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23999%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath fill=%27red%27 d=%27m14 5 1 1-9 9-1-1z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23aaa%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath fill=%27red%27 d=%27m14 5 1 1-9 9-1-1z%27/%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23aaa%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath fill=%27red%27 d=%27m14 5 1 1-9 9-1-1z%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23aaa%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath fill=%27red%27 d=%27m14 5 1 1-9 9-1-1z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23e54e33%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3C/svg%3E":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23e54e33%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23e54e33%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23e58978%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23e58978%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23e58978%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z%27/%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z%27/%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1z%27/%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1z%27/%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z%27/%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z%27/%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27m10.5 14 4-8 4 8z%27/%3E%3Cpath fill=%27%23ccc%27 d=%27m10.5 16 4 8 4-8z%27/%3E%3C/svg%3E":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27m10.5 14 4-8 4 8z%27/%3E%3Cpath fill=%27%23ccc%27 d=%27m10.5 16 4 8 4-8z%27/%3E%3C/svg%3E ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27m10.5 14 4-8 4 8z%27/%3E%3Cpath fill=%27%23ccc%27 d=%27m10.5 16 4 8 4-8z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7%27/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z%27/%3E%3C/svg%3E":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5%27/%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1z%27/%3E%3C/svg%3E":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1z%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z%27/%3E%3C/svg%3E":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27m10.5 14 4-8 4 8z%27/%3E%3Cpath fill=%27%23ccc%27 d=%27m10.5 16 4 8 4-8z%27/%3E%3C/svg%3E":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27m10.5 14 4-8 4 8z%27/%3E%3Cpath fill=%27%23ccc%27 d=%27m10.5 16 4 8 4-8z%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2729%27 height=%2729%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27m10.5 14 4-8 4 8z%27/%3E%3Cpath fill=%27%23ccc%27 d=%27m10.5 16 4 8 4-8z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2788%27 height=%2723%27 fill=%27none%27%3E%3Cpath fill=%27%23000%27 fill-opacity=%27.4%27 fill-rule=%27evenodd%27 d=%27M17.408 16.796h-1.827l2.501-12.095h.198l3.324 6.533.988 2.19.988-2.19 3.258-6.533h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.929 5.644h-.098l-2.914-5.644-.757-1.71-.345 1.71zm1.958-3.42-.726 3.663a1.255 1.255 0 0 1-1.232 1.011h-1.827a1.255 1.255 0 0 1-1.229-1.509l2.501-12.095a1.255 1.255 0 0 1 1.23-1.001h.197a1.25 1.25 0 0 1 1.12.685l3.19 6.273 3.125-6.263a1.25 1.25 0 0 1 1.123-.695h.181a1.255 1.255 0 0 1 1.227.991l1.443 6.71a5 5 0 0 1 .314-.787l.009-.016a4.6 4.6 0 0 1 1.777-1.887c.782-.46 1.668-.667 2.611-.667a4.6 4.6 0 0 1 1.7.32l.306.134c.21-.16.474-.256.759-.256h1.694a1.255 1.255 0 0 1 1.212.925 1.255 1.255 0 0 1 1.212-.925h1.711c.284 0 .545.094.755.252.613-.3 1.312-.45 2.075-.45 1.356 0 2.557.445 3.482 1.4q.47.48.763 1.064V4.701a1.255 1.255 0 0 1 1.255-1.255h1.86A1.255 1.255 0 0 1 54.44 4.7v9.194h2.217c.19 0 .37.043.532.118v-4.77c0-.356.147-.678.385-.906a2.42 2.42 0 0 1-.682-1.71c0-.665.267-1.253.735-1.7a2.45 2.45 0 0 1 1.722-.674 2.43 2.43 0 0 1 1.705.675q.318.302.504.683V4.7a1.255 1.255 0 0 1 1.255-1.255h1.744A1.255 1.255 0 0 1 65.812 4.7v3.335a4.8 4.8 0 0 1 1.526-.246c.938 0 1.817.214 2.59.69a4.47 4.47 0 0 1 1.67 1.743v-.98a1.255 1.255 0 0 1 1.256-1.256h1.777c.233 0 .451.064.639.174a3.4 3.4 0 0 1 1.567-.372c.346 0 .861.02 1.285.232a1.25 1.25 0 0 1 .689 1.004 4.7 4.7 0 0 1 .853-.588c.795-.44 1.675-.647 2.61-.647 1.385 0 2.65.39 3.525 1.396.836.938 1.168 2.173 1.168 3.528q-.001.515-.056 1.051a1.255 1.255 0 0 1-.947 1.09l.408.952a1.255 1.255 0 0 1-.477 1.552c-.418.268-.92.463-1.458.612-.613.171-1.304.244-2.049.244-1.06 0-2.043-.207-2.886-.698l-.015-.008c-.798-.48-1.419-1.135-1.818-1.963l-.004-.008a5.8 5.8 0 0 1-.548-2.512q0-.429.053-.843a1.3 1.3 0 0 1-.333-.086l-.166-.004c-.223 0-.426.062-.643.228-.03.024-.142.139-.142.59v3.883a1.255 1.255 0 0 1-1.256 1.256h-1.777a1.255 1.255 0 0 1-1.256-1.256V15.69l-.032.057a4.8 4.8 0 0 1-1.86 1.833 5.04 5.04 0 0 1-2.484.634 4.5 4.5 0 0 1-1.935-.424 1.25 1.25 0 0 1-.764.258h-1.71a1.255 1.255 0 0 1-1.256-1.255V7.687a2.4 2.4 0 0 1-.428.625c.253.23.412.561.412.93v7.553a1.255 1.255 0 0 1-1.256 1.255h-1.843a1.25 1.25 0 0 1-.894-.373c-.228.23-.544.373-.894.373H51.32a1.255 1.255 0 0 1-1.256-1.255v-1.251l-.061.117a4.7 4.7 0 0 1-1.782 1.884 4.77 4.77 0 0 1-2.485.67 5.6 5.6 0 0 1-1.485-.188l.009 2.764a1.255 1.255 0 0 1-1.255 1.259h-1.729a1.255 1.255 0 0 1-1.255-1.255v-3.537a1.255 1.255 0 0 1-1.167.793h-1.679a1.25 1.25 0 0 1-.77-.263 4.5 4.5 0 0 1-1.945.429c-.885 0-1.724-.21-2.495-.632l-.017-.01a5 5 0 0 1-1.081-.836 1.255 1.255 0 0 1-1.254 1.312h-1.81a1.255 1.255 0 0 1-1.228-.99l-.782-3.625-2.044 3.939a1.25 1.25 0 0 1-1.115.676h-.098a1.25 1.25 0 0 1-1.116-.68l-2.061-3.994zM35.92 16.63l.207-.114.223-.15q.493-.356.735-.785l.061-.118.033 1.332h1.678V9.242h-1.694l-.033 1.267q-.133-.329-.526-.658l-.032-.028a3.2 3.2 0 0 0-.668-.428l-.27-.12a3.3 3.3 0 0 0-1.235-.23q-1.136-.001-1.974.493a3.36 3.36 0 0 0-1.3 1.382q-.445.89-.444 2.074 0 1.2.51 2.107a3.8 3.8 0 0 0 1.382 1.381 3.9 3.9 0 0 0 1.893.477q.795 0 1.455-.33zm-2.789-5.38q-.576.675-.575 1.762 0 1.102.559 1.794.576.675 1.645.675a2.25 2.25 0 0 0 .934-.19 2.2 2.2 0 0 0 .468-.29l.178-.161a2.2 2.2 0 0 0 .397-.561q.244-.5.244-1.15v-.115q0-.708-.296-1.267l-.043-.077a2.2 2.2 0 0 0-.633-.709l-.13-.086-.047-.028a2.1 2.1 0 0 0-1.073-.285q-1.052 0-1.629.692zm2.316 2.706c.163-.17.28-.407.28-.83v-.114c0-.292-.06-.508-.15-.68a.96.96 0 0 0-.353-.389.85.85 0 0 0-.464-.127c-.4 0-.56.114-.664.239l-.01.012c-.148.174-.275.45-.275.945 0 .506.122.801.27.99.097.11.266.224.68.224.303 0 .504-.09.687-.269zm7.545 1.705a2.6 2.6 0 0 0 .331.423q.319.33.755.548l.173.074q.65.255 1.49.255 1.02 0 1.844-.493a3.45 3.45 0 0 0 1.316-1.4q.493-.904.493-2.089 0-1.909-.988-2.913-.988-1.02-2.584-1.02-.898 0-1.575.347a3 3 0 0 0-.415.262l-.199.166a3.4 3.4 0 0 0-.64.82V9.242h-1.712v11.553h1.729l-.017-5.134zm.53-1.138q.206.29.48.5l.155.11.053.034q.51.296 1.119.297 1.07 0 1.645-.675.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.435 0-.835.16a2 2 0 0 0-.284.136 2 2 0 0 0-.363.254 2.2 2.2 0 0 0-.46.569l-.082.162a2.6 2.6 0 0 0-.213 1.072v.115q0 .707.296 1.267l.135.211zm.964-.818a1.1 1.1 0 0 0 .367.385.94.94 0 0 0 .476.118c.423 0 .59-.117.687-.23.159-.194.28-.478.28-.95 0-.53-.133-.8-.266-.952l-.021-.025c-.078-.094-.231-.221-.68-.221a1 1 0 0 0-.503.135l-.012.007a.86.86 0 0 0-.335.343c-.073.133-.132.324-.132.614v.115a1.4 1.4 0 0 0 .14.66zm15.7-6.222q.347-.346.346-.856a1.05 1.05 0 0 0-.345-.79 1.18 1.18 0 0 0-.84-.329q-.51 0-.855.33a1.05 1.05 0 0 0-.346.79q0 .51.346.855.345.346.856.346.51 0 .839-.346zm4.337 9.314.033-1.332q.191.403.59.747l.098.081a4 4 0 0 0 .316.224l.223.122a3.2 3.2 0 0 0 1.44.322 3.8 3.8 0 0 0 1.875-.477 3.5 3.5 0 0 0 1.382-1.366q.527-.89.526-2.09 0-1.184-.444-2.073a3.24 3.24 0 0 0-1.283-1.399q-.823-.51-1.942-.51a3.5 3.5 0 0 0-1.527.344l-.086.043-.165.09a3 3 0 0 0-.33.214q-.432.315-.656.707a2 2 0 0 0-.099.198l.082-1.283V4.701h-1.744v12.095zm.473-2.509a2.5 2.5 0 0 0 .566.7q.117.098.245.18l.144.08a2.1 2.1 0 0 0 .975.232q1.07 0 1.645-.675.576-.69.576-1.778 0-1.102-.576-1.777-.56-.691-1.645-.692a2.2 2.2 0 0 0-1.015.235q-.22.113-.415.282l-.15.142a2.1 2.1 0 0 0-.42.594q-.223.479-.223 1.1v.115q0 .705.293 1.26zm2.616-.293c.157-.191.28-.479.28-.967 0-.51-.13-.79-.276-.961l-.021-.026c-.082-.1-.232-.225-.67-.225a.87.87 0 0 0-.681.279l-.012.011c-.154.155-.274.38-.274.807v.115c0 .285.057.499.144.669a1.1 1.1 0 0 0 .367.405c.137.082.28.123.455.123.423 0 .59-.118.686-.23zm8.266-3.013q.345-.13.724-.14l.069-.002q.493 0 .642.099l.247-1.794q-.196-.099-.717-.099a2.3 2.3 0 0 0-.545.063 2 2 0 0 0-.411.148 2.2 2.2 0 0 0-.4.249 2.5 2.5 0 0 0-.485.499 2.7 2.7 0 0 0-.32.581l-.05.137v-1.48h-1.778v7.553h1.777v-3.884q0-.546.159-.943a1.5 1.5 0 0 1 .466-.636 2.5 2.5 0 0 1 .399-.253 2 2 0 0 1 .224-.099zm9.784 2.656.05-.922q0-1.743-.856-2.698-.838-.97-2.584-.97-1.119-.001-2.007.493a3.46 3.46 0 0 0-1.4 1.382q-.493.906-.493 2.106 0 1.07.428 1.975.428.89 1.332 1.432.906.526 2.255.526.973 0 1.668-.185l.044-.012.135-.04q.613-.184.984-.421l-.542-1.267q-.3.162-.642.274l-.297.087q-.51.131-1.3.131-.954 0-1.497-.444a1.6 1.6 0 0 1-.192-.193q-.366-.44-.512-1.234l-.004-.021zm-5.427-1.256-.003.022h3.752v-.138q-.011-.727-.288-1.118a1 1 0 0 0-.156-.176q-.46-.428-1.316-.428-.986 0-1.494.604-.379.45-.494 1.234zm-27.053 2.77V4.7h-1.86v12.095h5.333V15.15zm7.103-5.908v7.553h-1.843V9.242h1.843z%27/%3E%3Cpath fill=%27%23fff%27 d=%27m19.63 11.151-.757-1.71-.345 1.71-1.12 5.644h-1.827L18.083 4.7h.197l3.325 6.533.988 2.19.988-2.19L26.839 4.7h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.93 5.644h-.098l-2.913-5.644zm14.836 5.81q-1.02 0-1.893-.478a3.8 3.8 0 0 1-1.381-1.382q-.51-.906-.51-2.106 0-1.185.444-2.074a3.36 3.36 0 0 1 1.3-1.382q.839-.494 1.974-.494a3.3 3.3 0 0 1 1.234.231 3.3 3.3 0 0 1 .97.575q.396.33.527.659l.033-1.267h1.694v7.553H37.18l-.033-1.332q-.279.593-1.02 1.053a3.17 3.17 0 0 1-1.662.444zm.296-1.482q.938 0 1.58-.642.642-.66.642-1.711v-.115q0-.708-.296-1.267a2.2 2.2 0 0 0-.807-.872 2.1 2.1 0 0 0-1.119-.313q-1.053 0-1.629.692-.575.675-.575 1.76 0 1.103.559 1.795.577.675 1.645.675zm6.521-6.237h1.711v1.4q.906-1.597 2.83-1.597 1.596 0 2.584 1.02.988 1.005.988 2.914 0 1.185-.493 2.09a3.46 3.46 0 0 1-1.316 1.399 3.5 3.5 0 0 1-1.844.493q-.954 0-1.662-.329a2.67 2.67 0 0 1-1.086-.97l.017 5.134h-1.728zm4.048 6.22q1.07 0 1.645-.674.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.592 0-1.12.296-.51.28-.822.823-.296.527-.296 1.234v.115q0 .708.296 1.267.313.543.823.855.51.296 1.119.297z%27/%3E%3Cpath fill=%27%23e1e3e9%27 d=%27M51.325 4.7h1.86v10.45h3.473v1.646h-5.333zm7.12 4.542h1.843v7.553h-1.843zm.905-1.415a1.16 1.16 0 0 1-.856-.346 1.17 1.17 0 0 1-.346-.856 1.05 1.05 0 0 1 .346-.79q.346-.329.856-.329.494 0 .839.33a1.05 1.05 0 0 1 .345.79 1.16 1.16 0 0 1-.345.855q-.33.346-.84.346zm7.875 9.133a3.17 3.17 0 0 1-1.662-.444q-.723-.46-1.004-1.053l-.033 1.332h-1.71V4.701h1.743v4.657l-.082 1.283q.279-.658 1.086-1.119a3.5 3.5 0 0 1 1.778-.477q1.119 0 1.942.51a3.24 3.24 0 0 1 1.283 1.4q.445.888.444 2.072 0 1.201-.526 2.09a3.5 3.5 0 0 1-1.382 1.366 3.8 3.8 0 0 1-1.876.477zm-.296-1.481q1.069 0 1.645-.675.577-.69.577-1.778 0-1.102-.577-1.776-.56-.691-1.645-.692a2.12 2.12 0 0 0-1.58.659q-.642.641-.642 1.694v.115q0 .71.296 1.267a2.4 2.4 0 0 0 .807.872 2.1 2.1 0 0 0 1.119.313zm5.927-6.237h1.777v1.481q.263-.757.856-1.217a2.14 2.14 0 0 1 1.349-.46q.527 0 .724.098l-.247 1.794q-.149-.099-.642-.099-.774 0-1.416.494-.626.493-.626 1.58v3.883h-1.777V9.242zm9.534 7.718q-1.35 0-2.255-.526-.904-.543-1.332-1.432a4.6 4.6 0 0 1-.428-1.975q0-1.2.493-2.106a3.46 3.46 0 0 1 1.4-1.382q.889-.495 2.007-.494 1.744 0 2.584.97.855.956.856 2.7 0 .444-.05.92h-5.43q.18 1.005.708 1.45.542.443 1.497.443.79 0 1.3-.131a4 4 0 0 0 .938-.362l.542 1.267q-.411.263-1.119.46-.708.198-1.711.197zm1.596-4.558q.016-1.02-.444-1.432-.46-.428-1.316-.428-1.728 0-1.991 1.86z%27/%3E%3Cpath d=%27M5.074 15.948a.484.657 0 0 0-.486.659v1.84a.484.657 0 0 0 .486.659h4.101a.484.657 0 0 0 .486-.659v-1.84a.484.657 0 0 0-.486-.659zm3.56 1.16H5.617v.838h3.017z%27 style=%27fill:%23fff;fill-rule:evenodd;stroke-width:1.03600001%27/%3E%3Cg style=%27stroke-width:1.12603545%27%3E%3Cpath d=%27M-9.408-1.416c-3.833-.025-7.056 2.912-7.08 6.615-.02 3.08 1.653 4.832 3.107 6.268.903.892 1.721 1.74 2.32 2.902l-.525-.004c-.543-.003-.992.304-1.24.639a1.87 1.87 0 0 0-.362 1.121l-.011 1.877c-.003.402.104.787.347 1.125.244.338.688.653 1.23.656l4.142.028c.542.003.99-.306 1.238-.641a1.87 1.87 0 0 0 .363-1.121l.012-1.875a1.87 1.87 0 0 0-.348-1.127c-.243-.338-.688-.653-1.23-.656l-.518-.004c.597-1.145 1.425-1.983 2.348-2.87 1.473-1.414 3.18-3.149 3.2-6.226-.016-3.59-2.923-6.684-6.993-6.707m-.006 1.1v.002c3.274.02 5.92 2.532 5.9 5.6-.017 2.706-1.39 4.026-2.863 5.44-1.034.994-2.118 2.033-2.814 3.633-.018.041-.052.055-.075.065q-.013.004-.02.01a.34.34 0 0 1-.226.084.34.34 0 0 1-.224-.086l-.092-.077c-.699-1.615-1.768-2.669-2.781-3.67-1.454-1.435-2.797-2.762-2.78-5.478.02-3.067 2.7-5.545 5.975-5.523m-.02 2.826c-1.62-.01-2.944 1.315-2.955 2.96-.01 1.646 1.295 2.988 2.916 2.999h.002c1.621.01 2.943-1.316 2.953-2.961.011-1.646-1.294-2.988-2.916-2.998m-.005 1.1c1.017.006 1.829.83 1.822 1.89s-.83 1.874-1.848 1.867c-1.018-.006-1.829-.83-1.822-1.89s.83-1.874 1.848-1.868m-2.155 11.857 4.14.025c.271.002.49.305.487.676l-.013 1.875c-.003.37-.224.67-.495.668l-4.14-.025c-.27-.002-.487-.306-.485-.676l.012-1.875c.003-.37.224-.67.494-.668%27 style=%27color:%23000;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:evenodd;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:%23000;solid-opacity:1;vector-effect:none;fill:%23000;fill-opacity:.4;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto%27 transform=%27translate%2815.553 2.85%29scale%28.88807%29%27/%3E%3Cpath d=%27M-9.415-.316C-12.69-.338-15.37 2.14-15.39 5.207c-.017 2.716 1.326 4.041 2.78 5.477 1.013 1 2.081 2.055 2.78 3.67l.092.076a.34.34 0 0 0 .225.086.34.34 0 0 0 .227-.083l.019-.01c.022-.009.057-.024.074-.064.697-1.6 1.78-2.64 2.814-3.634 1.473-1.414 2.847-2.733 2.864-5.44.02-3.067-2.627-5.58-5.901-5.601m-.057 8.784c1.621.011 2.944-1.315 2.955-2.96.01-1.646-1.295-2.988-2.916-2.999-1.622-.01-2.945 1.315-2.955 2.96s1.295 2.989 2.916 3%27 style=%27clip-rule:evenodd;fill:%23e1e3e9;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4%27 transform=%27translate%2815.553 2.85%29scale%28.88807%29%27/%3E%3Cpath d=%27M-11.594 15.465c-.27-.002-.492.297-.494.668l-.012 1.876c-.003.371.214.673.485.675l4.14.027c.271.002.492-.298.495-.668l.012-1.877c.003-.37-.215-.672-.485-.674z%27 style=%27clip-rule:evenodd;fill:%23fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4%27 transform=%27translate%2815.553 2.85%29scale%28.88807%29%27/%3E%3C/g%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2788%27 height=%2723%27 fill=%27none%27%3E%3Cpath fill=%27%23000%27 fill-opacity=%27.4%27 fill-rule=%27evenodd%27 d=%27M17.408 16.796h-1.827l2.501-12.095h.198l3.324 6.533.988 2.19.988-2.19 3.258-6.533h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.929 5.644h-.098l-2.914-5.644-.757-1.71-.345 1.71zm1.958-3.42-.726 3.663a1.255 1.255 0 0 1-1.232 1.011h-1.827a1.255 1.255 0 0 1-1.229-1.509l2.501-12.095a1.255 1.255 0 0 1 1.23-1.001h.197a1.25 1.25 0 0 1 1.12.685l3.19 6.273 3.125-6.263a1.25 1.25 0 0 1 1.123-.695h.181a1.255 1.255 0 0 1 1.227.991l1.443 6.71a5 5 0 0 1 .314-.787l.009-.016a4.6 4.6 0 0 1 1.777-1.887c.782-.46 1.668-.667 2.611-.667a4.6 4.6 0 0 1 1.7.32l.306.134c.21-.16.474-.256.759-.256h1.694a1.255 1.255 0 0 1 1.212.925 1.255 1.255 0 0 1 1.212-.925h1.711c.284 0 .545.094.755.252.613-.3 1.312-.45 2.075-.45 1.356 0 2.557.445 3.482 1.4q.47.48.763 1.064V4.701a1.255 1.255 0 0 1 1.255-1.255h1.86A1.255 1.255 0 0 1 54.44 4.7v9.194h2.217c.19 0 .37.043.532.118v-4.77c0-.356.147-.678.385-.906a2.42 2.42 0 0 1-.682-1.71c0-.665.267-1.253.735-1.7a2.45 2.45 0 0 1 1.722-.674 2.43 2.43 0 0 1 1.705.675q.318.302.504.683V4.7a1.255 1.255 0 0 1 1.255-1.255h1.744A1.255 1.255 0 0 1 65.812 4.7v3.335a4.8 4.8 0 0 1 1.526-.246c.938 0 1.817.214 2.59.69a4.47 4.47 0 0 1 1.67 1.743v-.98a1.255 1.255 0 0 1 1.256-1.256h1.777c.233 0 .451.064.639.174a3.4 3.4 0 0 1 1.567-.372c.346 0 .861.02 1.285.232a1.25 1.25 0 0 1 .689 1.004 4.7 4.7 0 0 1 .853-.588c.795-.44 1.675-.647 2.61-.647 1.385 0 2.65.39 3.525 1.396.836.938 1.168 2.173 1.168 3.528q-.001.515-.056 1.051a1.255 1.255 0 0 1-.947 1.09l.408.952a1.255 1.255 0 0 1-.477 1.552c-.418.268-.92.463-1.458.612-.613.171-1.304.244-2.049.244-1.06 0-2.043-.207-2.886-.698l-.015-.008c-.798-.48-1.419-1.135-1.818-1.963l-.004-.008a5.8 5.8 0 0 1-.548-2.512q0-.429.053-.843a1.3 1.3 0 0 1-.333-.086l-.166-.004c-.223 0-.426.062-.643.228-.03.024-.142.139-.142.59v3.883a1.255 1.255 0 0 1-1.256 1.256h-1.777a1.255 1.255 0 0 1-1.256-1.256V15.69l-.032.057a4.8 4.8 0 0 1-1.86 1.833 5.04 5.04 0 0 1-2.484.634 4.5 4.5 0 0 1-1.935-.424 1.25 1.25 0 0 1-.764.258h-1.71a1.255 1.255 0 0 1-1.256-1.255V7.687a2.4 2.4 0 0 1-.428.625c.253.23.412.561.412.93v7.553a1.255 1.255 0 0 1-1.256 1.255h-1.843a1.25 1.25 0 0 1-.894-.373c-.228.23-.544.373-.894.373H51.32a1.255 1.255 0 0 1-1.256-1.255v-1.251l-.061.117a4.7 4.7 0 0 1-1.782 1.884 4.77 4.77 0 0 1-2.485.67 5.6 5.6 0 0 1-1.485-.188l.009 2.764a1.255 1.255 0 0 1-1.255 1.259h-1.729a1.255 1.255 0 0 1-1.255-1.255v-3.537a1.255 1.255 0 0 1-1.167.793h-1.679a1.25 1.25 0 0 1-.77-.263 4.5 4.5 0 0 1-1.945.429c-.885 0-1.724-.21-2.495-.632l-.017-.01a5 5 0 0 1-1.081-.836 1.255 1.255 0 0 1-1.254 1.312h-1.81a1.255 1.255 0 0 1-1.228-.99l-.782-3.625-2.044 3.939a1.25 1.25 0 0 1-1.115.676h-.098a1.25 1.25 0 0 1-1.116-.68l-2.061-3.994zM35.92 16.63l.207-.114.223-.15q.493-.356.735-.785l.061-.118.033 1.332h1.678V9.242h-1.694l-.033 1.267q-.133-.329-.526-.658l-.032-.028a3.2 3.2 0 0 0-.668-.428l-.27-.12a3.3 3.3 0 0 0-1.235-.23q-1.136-.001-1.974.493a3.36 3.36 0 0 0-1.3 1.382q-.445.89-.444 2.074 0 1.2.51 2.107a3.8 3.8 0 0 0 1.382 1.381 3.9 3.9 0 0 0 1.893.477q.795 0 1.455-.33zm-2.789-5.38q-.576.675-.575 1.762 0 1.102.559 1.794.576.675 1.645.675a2.25 2.25 0 0 0 .934-.19 2.2 2.2 0 0 0 .468-.29l.178-.161a2.2 2.2 0 0 0 .397-.561q.244-.5.244-1.15v-.115q0-.708-.296-1.267l-.043-.077a2.2 2.2 0 0 0-.633-.709l-.13-.086-.047-.028a2.1 2.1 0 0 0-1.073-.285q-1.052 0-1.629.692zm2.316 2.706c.163-.17.28-.407.28-.83v-.114c0-.292-.06-.508-.15-.68a.96.96 0 0 0-.353-.389.85.85 0 0 0-.464-.127c-.4 0-.56.114-.664.239l-.01.012c-.148.174-.275.45-.275.945 0 .506.122.801.27.99.097.11.266.224.68.224.303 0 .504-.09.687-.269zm7.545 1.705a2.6 2.6 0 0 0 .331.423q.319.33.755.548l.173.074q.65.255 1.49.255 1.02 0 1.844-.493a3.45 3.45 0 0 0 1.316-1.4q.493-.904.493-2.089 0-1.909-.988-2.913-.988-1.02-2.584-1.02-.898 0-1.575.347a3 3 0 0 0-.415.262l-.199.166a3.4 3.4 0 0 0-.64.82V9.242h-1.712v11.553h1.729l-.017-5.134zm.53-1.138q.206.29.48.5l.155.11.053.034q.51.296 1.119.297 1.07 0 1.645-.675.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.435 0-.835.16a2 2 0 0 0-.284.136 2 2 0 0 0-.363.254 2.2 2.2 0 0 0-.46.569l-.082.162a2.6 2.6 0 0 0-.213 1.072v.115q0 .707.296 1.267l.135.211zm.964-.818a1.1 1.1 0 0 0 .367.385.94.94 0 0 0 .476.118c.423 0 .59-.117.687-.23.159-.194.28-.478.28-.95 0-.53-.133-.8-.266-.952l-.021-.025c-.078-.094-.231-.221-.68-.221a1 1 0 0 0-.503.135l-.012.007a.86.86 0 0 0-.335.343c-.073.133-.132.324-.132.614v.115a1.4 1.4 0 0 0 .14.66zm15.7-6.222q.347-.346.346-.856a1.05 1.05 0 0 0-.345-.79 1.18 1.18 0 0 0-.84-.329q-.51 0-.855.33a1.05 1.05 0 0 0-.346.79q0 .51.346.855.345.346.856.346.51 0 .839-.346zm4.337 9.314.033-1.332q.191.403.59.747l.098.081a4 4 0 0 0 .316.224l.223.122a3.2 3.2 0 0 0 1.44.322 3.8 3.8 0 0 0 1.875-.477 3.5 3.5 0 0 0 1.382-1.366q.527-.89.526-2.09 0-1.184-.444-2.073a3.24 3.24 0 0 0-1.283-1.399q-.823-.51-1.942-.51a3.5 3.5 0 0 0-1.527.344l-.086.043-.165.09a3 3 0 0 0-.33.214q-.432.315-.656.707a2 2 0 0 0-.099.198l.082-1.283V4.701h-1.744v12.095zm.473-2.509a2.5 2.5 0 0 0 .566.7q.117.098.245.18l.144.08a2.1 2.1 0 0 0 .975.232q1.07 0 1.645-.675.576-.69.576-1.778 0-1.102-.576-1.777-.56-.691-1.645-.692a2.2 2.2 0 0 0-1.015.235q-.22.113-.415.282l-.15.142a2.1 2.1 0 0 0-.42.594q-.223.479-.223 1.1v.115q0 .705.293 1.26zm2.616-.293c.157-.191.28-.479.28-.967 0-.51-.13-.79-.276-.961l-.021-.026c-.082-.1-.232-.225-.67-.225a.87.87 0 0 0-.681.279l-.012.011c-.154.155-.274.38-.274.807v.115c0 .285.057.499.144.669a1.1 1.1 0 0 0 .367.405c.137.082.28.123.455.123.423 0 .59-.118.686-.23zm8.266-3.013q.345-.13.724-.14l.069-.002q.493 0 .642.099l.247-1.794q-.196-.099-.717-.099a2.3 2.3 0 0 0-.545.063 2 2 0 0 0-.411.148 2.2 2.2 0 0 0-.4.249 2.5 2.5 0 0 0-.485.499 2.7 2.7 0 0 0-.32.581l-.05.137v-1.48h-1.778v7.553h1.777v-3.884q0-.546.159-.943a1.5 1.5 0 0 1 .466-.636 2.5 2.5 0 0 1 .399-.253 2 2 0 0 1 .224-.099zm9.784 2.656.05-.922q0-1.743-.856-2.698-.838-.97-2.584-.97-1.119-.001-2.007.493a3.46 3.46 0 0 0-1.4 1.382q-.493.906-.493 2.106 0 1.07.428 1.975.428.89 1.332 1.432.906.526 2.255.526.973 0 1.668-.185l.044-.012.135-.04q.613-.184.984-.421l-.542-1.267q-.3.162-.642.274l-.297.087q-.51.131-1.3.131-.954 0-1.497-.444a1.6 1.6 0 0 1-.192-.193q-.366-.44-.512-1.234l-.004-.021zm-5.427-1.256-.003.022h3.752v-.138q-.011-.727-.288-1.118a1 1 0 0 0-.156-.176q-.46-.428-1.316-.428-.986 0-1.494.604-.379.45-.494 1.234zm-27.053 2.77V4.7h-1.86v12.095h5.333V15.15zm7.103-5.908v7.553h-1.843V9.242h1.843z%27/%3E%3Cpath fill=%27%23fff%27 d=%27m19.63 11.151-.757-1.71-.345 1.71-1.12 5.644h-1.827L18.083 4.7h.197l3.325 6.533.988 2.19.988-2.19L26.839 4.7h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.93 5.644h-.098l-2.913-5.644zm14.836 5.81q-1.02 0-1.893-.478a3.8 3.8 0 0 1-1.381-1.382q-.51-.906-.51-2.106 0-1.185.444-2.074a3.36 3.36 0 0 1 1.3-1.382q.839-.494 1.974-.494a3.3 3.3 0 0 1 1.234.231 3.3 3.3 0 0 1 .97.575q.396.33.527.659l.033-1.267h1.694v7.553H37.18l-.033-1.332q-.279.593-1.02 1.053a3.17 3.17 0 0 1-1.662.444zm.296-1.482q.938 0 1.58-.642.642-.66.642-1.711v-.115q0-.708-.296-1.267a2.2 2.2 0 0 0-.807-.872 2.1 2.1 0 0 0-1.119-.313q-1.053 0-1.629.692-.575.675-.575 1.76 0 1.103.559 1.795.577.675 1.645.675zm6.521-6.237h1.711v1.4q.906-1.597 2.83-1.597 1.596 0 2.584 1.02.988 1.005.988 2.914 0 1.185-.493 2.09a3.46 3.46 0 0 1-1.316 1.399 3.5 3.5 0 0 1-1.844.493q-.954 0-1.662-.329a2.67 2.67 0 0 1-1.086-.97l.017 5.134h-1.728zm4.048 6.22q1.07 0 1.645-.674.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.592 0-1.12.296-.51.28-.822.823-.296.527-.296 1.234v.115q0 .708.296 1.267.313.543.823.855.51.296 1.119.297z%27/%3E%3Cpath fill=%27%23e1e3e9%27 d=%27M51.325 4.7h1.86v10.45h3.473v1.646h-5.333zm7.12 4.542h1.843v7.553h-1.843zm.905-1.415a1.16 1.16 0 0 1-.856-.346 1.17 1.17 0 0 1-.346-.856 1.05 1.05 0 0 1 .346-.79q.346-.329.856-.329.494 0 .839.33a1.05 1.05 0 0 1 .345.79 1.16 1.16 0 0 1-.345.855q-.33.346-.84.346zm7.875 9.133a3.17 3.17 0 0 1-1.662-.444q-.723-.46-1.004-1.053l-.033 1.332h-1.71V4.701h1.743v4.657l-.082 1.283q.279-.658 1.086-1.119a3.5 3.5 0 0 1 1.778-.477q1.119 0 1.942.51a3.24 3.24 0 0 1 1.283 1.4q.445.888.444 2.072 0 1.201-.526 2.09a3.5 3.5 0 0 1-1.382 1.366 3.8 3.8 0 0 1-1.876.477zm-.296-1.481q1.069 0 1.645-.675.577-.69.577-1.778 0-1.102-.577-1.776-.56-.691-1.645-.692a2.12 2.12 0 0 0-1.58.659q-.642.641-.642 1.694v.115q0 .71.296 1.267a2.4 2.4 0 0 0 .807.872 2.1 2.1 0 0 0 1.119.313zm5.927-6.237h1.777v1.481q.263-.757.856-1.217a2.14 2.14 0 0 1 1.349-.46q.527 0 .724.098l-.247 1.794q-.149-.099-.642-.099-.774 0-1.416.494-.626.493-.626 1.58v3.883h-1.777V9.242zm9.534 7.718q-1.35 0-2.255-.526-.904-.543-1.332-1.432a4.6 4.6 0 0 1-.428-1.975q0-1.2.493-2.106a3.46 3.46 0 0 1 1.4-1.382q.889-.495 2.007-.494 1.744 0 2.584.97.855.956.856 2.7 0 .444-.05.92h-5.43q.18 1.005.708 1.45.542.443 1.497.443.79 0 1.3-.131a4 4 0 0 0 .938-.362l.542 1.267q-.411.263-1.119.46-.708.198-1.711.197zm1.596-4.558q.016-1.02-.444-1.432-.46-.428-1.316-.428-1.728 0-1.991 1.86z%27/%3E%3Cpath d=%27M5.074 15.948a.484.657 0 0 0-.486.659v1.84a.484.657 0 0 0 .486.659h4.101a.484.657 0 0 0 .486-.659v-1.84a.484.657 0 0 0-.486-.659zm3.56 1.16H5.617v.838h3.017z%27 style=%27fill:%23fff;fill-rule:evenodd;stroke-width:1.03600001%27/%3E%3Cg style=%27stroke-width:1.12603545%27%3E%3Cpath d=%27M-9.408-1.416c-3.833-.025-7.056 2.912-7.08 6.615-.02 3.08 1.653 4.832 3.107 6.268.903.892 1.721 1.74 2.32 2.902l-.525-.004c-.543-.003-.992.304-1.24.639a1.87 1.87 0 0 0-.362 1.121l-.011 1.877c-.003.402.104.787.347 1.125.244.338.688.653 1.23.656l4.142.028c.542.003.99-.306 1.238-.641a1.87 1.87 0 0 0 .363-1.121l.012-1.875a1.87 1.87 0 0 0-.348-1.127c-.243-.338-.688-.653-1.23-.656l-.518-.004c.597-1.145 1.425-1.983 2.348-2.87 1.473-1.414 3.18-3.149 3.2-6.226-.016-3.59-2.923-6.684-6.993-6.707m-.006 1.1v.002c3.274.02 5.92 2.532 5.9 5.6-.017 2.706-1.39 4.026-2.863 5.44-1.034.994-2.118 2.033-2.814 3.633-.018.041-.052.055-.075.065q-.013.004-.02.01a.34.34 0 0 1-.226.084.34.34 0 0 1-.224-.086l-.092-.077c-.699-1.615-1.768-2.669-2.781-3.67-1.454-1.435-2.797-2.762-2.78-5.478.02-3.067 2.7-5.545 5.975-5.523m-.02 2.826c-1.62-.01-2.944 1.315-2.955 2.96-.01 1.646 1.295 2.988 2.916 2.999h.002c1.621.01 2.943-1.316 2.953-2.961.011-1.646-1.294-2.988-2.916-2.998m-.005 1.1c1.017.006 1.829.83 1.822 1.89s-.83 1.874-1.848 1.867c-1.018-.006-1.829-.83-1.822-1.89s.83-1.874 1.848-1.868m-2.155 11.857 4.14.025c.271.002.49.305.487.676l-.013 1.875c-.003.37-.224.67-.495.668l-4.14-.025c-.27-.002-.487-.306-.485-.676l.012-1.875c.003-.37.224-.67.494-.668%27 style=%27color:%23000;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:evenodd;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:%23000;solid-opacity:1;vector-effect:none;fill:%23000;fill-opacity:.4;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto%27 transform=%27translate%2815.553 2.85%29scale%28.88807%29%27/%3E%3Cpath d=%27M-9.415-.316C-12.69-.338-15.37 2.14-15.39 5.207c-.017 2.716 1.326 4.041 2.78 5.477 1.013 1 2.081 2.055 2.78 3.67l.092.076a.34.34 0 0 0 .225.086.34.34 0 0 0 .227-.083l.019-.01c.022-.009.057-.024.074-.064.697-1.6 1.78-2.64 2.814-3.634 1.473-1.414 2.847-2.733 2.864-5.44.02-3.067-2.627-5.58-5.901-5.601m-.057 8.784c1.621.011 2.944-1.315 2.955-2.96.01-1.646-1.295-2.988-2.916-2.999-1.622-.01-2.945 1.315-2.955 2.96s1.295 2.989 2.916 3%27 style=%27clip-rule:evenodd;fill:%23e1e3e9;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4%27 transform=%27translate%2815.553 2.85%29scale%28.88807%29%27/%3E%3Cpath d=%27M-11.594 15.465c-.27-.002-.492.297-.494.668l-.012 1.876c-.003.371.214.673.485.675l4.14.027c.271.002.492-.298.495-.668l.012-1.877c.003-.37-.215-.672-.485-.674z%27 style=%27clip-rule:evenodd;fill:%23fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4%27 transform=%27translate%2815.553 2.85%29scale%28.88807%29%27/%3E%3C/g%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2788%27 height=%2723%27 fill=%27none%27%3E%3Cpath fill=%27%23000%27 fill-opacity=%27.4%27 fill-rule=%27evenodd%27 d=%27M17.408 16.796h-1.827l2.501-12.095h.198l3.324 6.533.988 2.19.988-2.19 3.258-6.533h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.929 5.644h-.098l-2.914-5.644-.757-1.71-.345 1.71zm1.958-3.42-.726 3.663a1.255 1.255 0 0 1-1.232 1.011h-1.827a1.255 1.255 0 0 1-1.229-1.509l2.501-12.095a1.255 1.255 0 0 1 1.23-1.001h.197a1.25 1.25 0 0 1 1.12.685l3.19 6.273 3.125-6.263a1.25 1.25 0 0 1 1.123-.695h.181a1.255 1.255 0 0 1 1.227.991l1.443 6.71a5 5 0 0 1 .314-.787l.009-.016a4.6 4.6 0 0 1 1.777-1.887c.782-.46 1.668-.667 2.611-.667a4.6 4.6 0 0 1 1.7.32l.306.134c.21-.16.474-.256.759-.256h1.694a1.255 1.255 0 0 1 1.212.925 1.255 1.255 0 0 1 1.212-.925h1.711c.284 0 .545.094.755.252.613-.3 1.312-.45 2.075-.45 1.356 0 2.557.445 3.482 1.4q.47.48.763 1.064V4.701a1.255 1.255 0 0 1 1.255-1.255h1.86A1.255 1.255 0 0 1 54.44 4.7v9.194h2.217c.19 0 .37.043.532.118v-4.77c0-.356.147-.678.385-.906a2.42 2.42 0 0 1-.682-1.71c0-.665.267-1.253.735-1.7a2.45 2.45 0 0 1 1.722-.674 2.43 2.43 0 0 1 1.705.675q.318.302.504.683V4.7a1.255 1.255 0 0 1 1.255-1.255h1.744A1.255 1.255 0 0 1 65.812 4.7v3.335a4.8 4.8 0 0 1 1.526-.246c.938 0 1.817.214 2.59.69a4.47 4.47 0 0 1 1.67 1.743v-.98a1.255 1.255 0 0 1 1.256-1.256h1.777c.233 0 .451.064.639.174a3.4 3.4 0 0 1 1.567-.372c.346 0 .861.02 1.285.232a1.25 1.25 0 0 1 .689 1.004 4.7 4.7 0 0 1 .853-.588c.795-.44 1.675-.647 2.61-.647 1.385 0 2.65.39 3.525 1.396.836.938 1.168 2.173 1.168 3.528q-.001.515-.056 1.051a1.255 1.255 0 0 1-.947 1.09l.408.952a1.255 1.255 0 0 1-.477 1.552c-.418.268-.92.463-1.458.612-.613.171-1.304.244-2.049.244-1.06 0-2.043-.207-2.886-.698l-.015-.008c-.798-.48-1.419-1.135-1.818-1.963l-.004-.008a5.8 5.8 0 0 1-.548-2.512q0-.429.053-.843a1.3 1.3 0 0 1-.333-.086l-.166-.004c-.223 0-.426.062-.643.228-.03.024-.142.139-.142.59v3.883a1.255 1.255 0 0 1-1.256 1.256h-1.777a1.255 1.255 0 0 1-1.256-1.256V15.69l-.032.057a4.8 4.8 0 0 1-1.86 1.833 5.04 5.04 0 0 1-2.484.634 4.5 4.5 0 0 1-1.935-.424 1.25 1.25 0 0 1-.764.258h-1.71a1.255 1.255 0 0 1-1.256-1.255V7.687a2.4 2.4 0 0 1-.428.625c.253.23.412.561.412.93v7.553a1.255 1.255 0 0 1-1.256 1.255h-1.843a1.25 1.25 0 0 1-.894-.373c-.228.23-.544.373-.894.373H51.32a1.255 1.255 0 0 1-1.256-1.255v-1.251l-.061.117a4.7 4.7 0 0 1-1.782 1.884 4.77 4.77 0 0 1-2.485.67 5.6 5.6 0 0 1-1.485-.188l.009 2.764a1.255 1.255 0 0 1-1.255 1.259h-1.729a1.255 1.255 0 0 1-1.255-1.255v-3.537a1.255 1.255 0 0 1-1.167.793h-1.679a1.25 1.25 0 0 1-.77-.263 4.5 4.5 0 0 1-1.945.429c-.885 0-1.724-.21-2.495-.632l-.017-.01a5 5 0 0 1-1.081-.836 1.255 1.255 0 0 1-1.254 1.312h-1.81a1.255 1.255 0 0 1-1.228-.99l-.782-3.625-2.044 3.939a1.25 1.25 0 0 1-1.115.676h-.098a1.25 1.25 0 0 1-1.116-.68l-2.061-3.994zM35.92 16.63l.207-.114.223-.15q.493-.356.735-.785l.061-.118.033 1.332h1.678V9.242h-1.694l-.033 1.267q-.133-.329-.526-.658l-.032-.028a3.2 3.2 0 0 0-.668-.428l-.27-.12a3.3 3.3 0 0 0-1.235-.23q-1.136-.001-1.974.493a3.36 3.36 0 0 0-1.3 1.382q-.445.89-.444 2.074 0 1.2.51 2.107a3.8 3.8 0 0 0 1.382 1.381 3.9 3.9 0 0 0 1.893.477q.795 0 1.455-.33zm-2.789-5.38q-.576.675-.575 1.762 0 1.102.559 1.794.576.675 1.645.675a2.25 2.25 0 0 0 .934-.19 2.2 2.2 0 0 0 .468-.29l.178-.161a2.2 2.2 0 0 0 .397-.561q.244-.5.244-1.15v-.115q0-.708-.296-1.267l-.043-.077a2.2 2.2 0 0 0-.633-.709l-.13-.086-.047-.028a2.1 2.1 0 0 0-1.073-.285q-1.052 0-1.629.692zm2.316 2.706c.163-.17.28-.407.28-.83v-.114c0-.292-.06-.508-.15-.68a.96.96 0 0 0-.353-.389.85.85 0 0 0-.464-.127c-.4 0-.56.114-.664.239l-.01.012c-.148.174-.275.45-.275.945 0 .506.122.801.27.99.097.11.266.224.68.224.303 0 .504-.09.687-.269zm7.545 1.705a2.6 2.6 0 0 0 .331.423q.319.33.755.548l.173.074q.65.255 1.49.255 1.02 0 1.844-.493a3.45 3.45 0 0 0 1.316-1.4q.493-.904.493-2.089 0-1.909-.988-2.913-.988-1.02-2.584-1.02-.898 0-1.575.347a3 3 0 0 0-.415.262l-.199.166a3.4 3.4 0 0 0-.64.82V9.242h-1.712v11.553h1.729l-.017-5.134zm.53-1.138q.206.29.48.5l.155.11.053.034q.51.296 1.119.297 1.07 0 1.645-.675.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.435 0-.835.16a2 2 0 0 0-.284.136 2 2 0 0 0-.363.254 2.2 2.2 0 0 0-.46.569l-.082.162a2.6 2.6 0 0 0-.213 1.072v.115q0 .707.296 1.267l.135.211zm.964-.818a1.1 1.1 0 0 0 .367.385.94.94 0 0 0 .476.118c.423 0 .59-.117.687-.23.159-.194.28-.478.28-.95 0-.53-.133-.8-.266-.952l-.021-.025c-.078-.094-.231-.221-.68-.221a1 1 0 0 0-.503.135l-.012.007a.86.86 0 0 0-.335.343c-.073.133-.132.324-.132.614v.115a1.4 1.4 0 0 0 .14.66zm15.7-6.222q.347-.346.346-.856a1.05 1.05 0 0 0-.345-.79 1.18 1.18 0 0 0-.84-.329q-.51 0-.855.33a1.05 1.05 0 0 0-.346.79q0 .51.346.855.345.346.856.346.51 0 .839-.346zm4.337 9.314.033-1.332q.191.403.59.747l.098.081a4 4 0 0 0 .316.224l.223.122a3.2 3.2 0 0 0 1.44.322 3.8 3.8 0 0 0 1.875-.477 3.5 3.5 0 0 0 1.382-1.366q.527-.89.526-2.09 0-1.184-.444-2.073a3.24 3.24 0 0 0-1.283-1.399q-.823-.51-1.942-.51a3.5 3.5 0 0 0-1.527.344l-.086.043-.165.09a3 3 0 0 0-.33.214q-.432.315-.656.707a2 2 0 0 0-.099.198l.082-1.283V4.701h-1.744v12.095zm.473-2.509a2.5 2.5 0 0 0 .566.7q.117.098.245.18l.144.08a2.1 2.1 0 0 0 .975.232q1.07 0 1.645-.675.576-.69.576-1.778 0-1.102-.576-1.777-.56-.691-1.645-.692a2.2 2.2 0 0 0-1.015.235q-.22.113-.415.282l-.15.142a2.1 2.1 0 0 0-.42.594q-.223.479-.223 1.1v.115q0 .705.293 1.26zm2.616-.293c.157-.191.28-.479.28-.967 0-.51-.13-.79-.276-.961l-.021-.026c-.082-.1-.232-.225-.67-.225a.87.87 0 0 0-.681.279l-.012.011c-.154.155-.274.38-.274.807v.115c0 .285.057.499.144.669a1.1 1.1 0 0 0 .367.405c.137.082.28.123.455.123.423 0 .59-.118.686-.23zm8.266-3.013q.345-.13.724-.14l.069-.002q.493 0 .642.099l.247-1.794q-.196-.099-.717-.099a2.3 2.3 0 0 0-.545.063 2 2 0 0 0-.411.148 2.2 2.2 0 0 0-.4.249 2.5 2.5 0 0 0-.485.499 2.7 2.7 0 0 0-.32.581l-.05.137v-1.48h-1.778v7.553h1.777v-3.884q0-.546.159-.943a1.5 1.5 0 0 1 .466-.636 2.5 2.5 0 0 1 .399-.253 2 2 0 0 1 .224-.099zm9.784 2.656.05-.922q0-1.743-.856-2.698-.838-.97-2.584-.97-1.119-.001-2.007.493a3.46 3.46 0 0 0-1.4 1.382q-.493.906-.493 2.106 0 1.07.428 1.975.428.89 1.332 1.432.906.526 2.255.526.973 0 1.668-.185l.044-.012.135-.04q.613-.184.984-.421l-.542-1.267q-.3.162-.642.274l-.297.087q-.51.131-1.3.131-.954 0-1.497-.444a1.6 1.6 0 0 1-.192-.193q-.366-.44-.512-1.234l-.004-.021zm-5.427-1.256-.003.022h3.752v-.138q-.011-.727-.288-1.118a1 1 0 0 0-.156-.176q-.46-.428-1.316-.428-.986 0-1.494.604-.379.45-.494 1.234zm-27.053 2.77V4.7h-1.86v12.095h5.333V15.15zm7.103-5.908v7.553h-1.843V9.242h1.843z%27/%3E%3Cpath fill=%27%23fff%27 d=%27m19.63 11.151-.757-1.71-.345 1.71-1.12 5.644h-1.827L18.083 4.7h.197l3.325 6.533.988 2.19.988-2.19L26.839 4.7h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.93 5.644h-.098l-2.913-5.644zm14.836 5.81q-1.02 0-1.893-.478a3.8 3.8 0 0 1-1.381-1.382q-.51-.906-.51-2.106 0-1.185.444-2.074a3.36 3.36 0 0 1 1.3-1.382q.839-.494 1.974-.494a3.3 3.3 0 0 1 1.234.231 3.3 3.3 0 0 1 .97.575q.396.33.527.659l.033-1.267h1.694v7.553H37.18l-.033-1.332q-.279.593-1.02 1.053a3.17 3.17 0 0 1-1.662.444zm.296-1.482q.938 0 1.58-.642.642-.66.642-1.711v-.115q0-.708-.296-1.267a2.2 2.2 0 0 0-.807-.872 2.1 2.1 0 0 0-1.119-.313q-1.053 0-1.629.692-.575.675-.575 1.76 0 1.103.559 1.795.577.675 1.645.675zm6.521-6.237h1.711v1.4q.906-1.597 2.83-1.597 1.596 0 2.584 1.02.988 1.005.988 2.914 0 1.185-.493 2.09a3.46 3.46 0 0 1-1.316 1.399 3.5 3.5 0 0 1-1.844.493q-.954 0-1.662-.329a2.67 2.67 0 0 1-1.086-.97l.017 5.134h-1.728zm4.048 6.22q1.07 0 1.645-.674.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.592 0-1.12.296-.51.28-.822.823-.296.527-.296 1.234v.115q0 .708.296 1.267.313.543.823.855.51.296 1.119.297z%27/%3E%3Cpath fill=%27%23e1e3e9%27 d=%27M51.325 4.7h1.86v10.45h3.473v1.646h-5.333zm7.12 4.542h1.843v7.553h-1.843zm.905-1.415a1.16 1.16 0 0 1-.856-.346 1.17 1.17 0 0 1-.346-.856 1.05 1.05 0 0 1 .346-.79q.346-.329.856-.329.494 0 .839.33a1.05 1.05 0 0 1 .345.79 1.16 1.16 0 0 1-.345.855q-.33.346-.84.346zm7.875 9.133a3.17 3.17 0 0 1-1.662-.444q-.723-.46-1.004-1.053l-.033 1.332h-1.71V4.701h1.743v4.657l-.082 1.283q.279-.658 1.086-1.119a3.5 3.5 0 0 1 1.778-.477q1.119 0 1.942.51a3.24 3.24 0 0 1 1.283 1.4q.445.888.444 2.072 0 1.201-.526 2.09a3.5 3.5 0 0 1-1.382 1.366 3.8 3.8 0 0 1-1.876.477zm-.296-1.481q1.069 0 1.645-.675.577-.69.577-1.778 0-1.102-.577-1.776-.56-.691-1.645-.692a2.12 2.12 0 0 0-1.58.659q-.642.641-.642 1.694v.115q0 .71.296 1.267a2.4 2.4 0 0 0 .807.872 2.1 2.1 0 0 0 1.119.313zm5.927-6.237h1.777v1.481q.263-.757.856-1.217a2.14 2.14 0 0 1 1.349-.46q.527 0 .724.098l-.247 1.794q-.149-.099-.642-.099-.774 0-1.416.494-.626.493-.626 1.58v3.883h-1.777V9.242zm9.534 7.718q-1.35 0-2.255-.526-.904-.543-1.332-1.432a4.6 4.6 0 0 1-.428-1.975q0-1.2.493-2.106a3.46 3.46 0 0 1 1.4-1.382q.889-.495 2.007-.494 1.744 0 2.584.97.855.956.856 2.7 0 .444-.05.92h-5.43q.18 1.005.708 1.45.542.443 1.497.443.79 0 1.3-.131a4 4 0 0 0 .938-.362l.542 1.267q-.411.263-1.119.46-.708.198-1.711.197zm1.596-4.558q.016-1.02-.444-1.432-.46-.428-1.316-.428-1.728 0-1.991 1.86z%27/%3E%3Cpath d=%27M5.074 15.948a.484.657 0 0 0-.486.659v1.84a.484.657 0 0 0 .486.659h4.101a.484.657 0 0 0 .486-.659v-1.84a.484.657 0 0 0-.486-.659zm3.56 1.16H5.617v.838h3.017z%27 style=%27fill:%23fff;fill-rule:evenodd;stroke-width:1.03600001%27/%3E%3Cg style=%27stroke-width:1.12603545%27%3E%3Cpath d=%27M-9.408-1.416c-3.833-.025-7.056 2.912-7.08 6.615-.02 3.08 1.653 4.832 3.107 6.268.903.892 1.721 1.74 2.32 2.902l-.525-.004c-.543-.003-.992.304-1.24.639a1.87 1.87 0 0 0-.362 1.121l-.011 1.877c-.003.402.104.787.347 1.125.244.338.688.653 1.23.656l4.142.028c.542.003.99-.306 1.238-.641a1.87 1.87 0 0 0 .363-1.121l.012-1.875a1.87 1.87 0 0 0-.348-1.127c-.243-.338-.688-.653-1.23-.656l-.518-.004c.597-1.145 1.425-1.983 2.348-2.87 1.473-1.414 3.18-3.149 3.2-6.226-.016-3.59-2.923-6.684-6.993-6.707m-.006 1.1v.002c3.274.02 5.92 2.532 5.9 5.6-.017 2.706-1.39 4.026-2.863 5.44-1.034.994-2.118 2.033-2.814 3.633-.018.041-.052.055-.075.065q-.013.004-.02.01a.34.34 0 0 1-.226.084.34.34 0 0 1-.224-.086l-.092-.077c-.699-1.615-1.768-2.669-2.781-3.67-1.454-1.435-2.797-2.762-2.78-5.478.02-3.067 2.7-5.545 5.975-5.523m-.02 2.826c-1.62-.01-2.944 1.315-2.955 2.96-.01 1.646 1.295 2.988 2.916 2.999h.002c1.621.01 2.943-1.316 2.953-2.961.011-1.646-1.294-2.988-2.916-2.998m-.005 1.1c1.017.006 1.829.83 1.822 1.89s-.83 1.874-1.848 1.867c-1.018-.006-1.829-.83-1.822-1.89s.83-1.874 1.848-1.868m-2.155 11.857 4.14.025c.271.002.49.305.487.676l-.013 1.875c-.003.37-.224.67-.495.668l-4.14-.025c-.27-.002-.487-.306-.485-.676l.012-1.875c.003-.37.224-.67.494-.668%27 style=%27color:%23000;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:evenodd;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:%23000;solid-opacity:1;vector-effect:none;fill:%23000;fill-opacity:.4;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto%27 transform=%27translate%2815.553 2.85%29scale%28.88807%29%27/%3E%3Cpath d=%27M-9.415-.316C-12.69-.338-15.37 2.14-15.39 5.207c-.017 2.716 1.326 4.041 2.78 5.477 1.013 1 2.081 2.055 2.78 3.67l.092.076a.34.34 0 0 0 .225.086.34.34 0 0 0 .227-.083l.019-.01c.022-.009.057-.024.074-.064.697-1.6 1.78-2.64 2.814-3.634 1.473-1.414 2.847-2.733 2.864-5.44.02-3.067-2.627-5.58-5.901-5.601m-.057 8.784c1.621.011 2.944-1.315 2.955-2.96.01-1.646-1.295-2.988-2.916-2.999-1.622-.01-2.945 1.315-2.955 2.96s1.295 2.989 2.916 3%27 style=%27clip-rule:evenodd;fill:%23e1e3e9;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4%27 transform=%27translate%2815.553 2.85%29scale%28.88807%29%27/%3E%3Cpath d=%27M-11.594 15.465c-.27-.002-.492.297-.494.668l-.012 1.876c-.003.371.214.673.485.675l4.14.027c.271.002.492-.298.495-.668l.012-1.877c.003-.37-.215-.672-.485-.674z%27 style=%27clip-rule:evenodd;fill:%23fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4%27 transform=%27translate%2815.553 2.85%29scale%28.88807%29%27/%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "?ed1b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d17e":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_plotly_js_lib_index_js-node_modules_react-bootstrap_esm_Accordion_js-nod-a56297"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDN0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NsREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9hcHAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL25hdmJhci5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS1jb21wYW55LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvb2NjdXB5LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS10b3BpYy5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3NpZGViYXIuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy90cmVuZC1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtdG9waXguanN4Iiwid2VicGFjazovL215LWFwcC9pZ25vcmVkfC9Vc2Vycy9tYXRzdW1vdG8taGlyb3RvbW8vbXktYXBwL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXN8dXRpbCIsIndlYnBhY2s6Ly9teS1hcHAvaWdub3JlZHwvVXNlcnMvbWF0c3Vtb3RvLWhpcm90b21vL215LWFwcC9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYnx1dGlsIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9ZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgRGFzaGJvYXJkTmF2YmFyIGZyb20gJy4vbmF2YmFyLmpzeCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXIuanN4JztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudC5qc3gnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIFxuICAvLyDjgqvjg6njg7zjgajjg5Xjgqnjg7zjgqvjgrnkvIHmpa3jg6rjgrnjg4hcbiAgY29uc3QgYXJyb3dDb2xvciA9IFtcbiAgICAnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJywgXG4gICAgJyMzRTlFNkYnLCAnI0YzODE4MScsICcjNTQ1RTc1JywgJyNGRkI2MjcnLCAnIzU3NzU5MCdcbiAgXTtcbiAgY29uc3QgY29tcGFueUxpc3QgPSBbXG4gICAgJ+m5v+WztuW7uuioreagquW8j+S8muekvicsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCIsIFwi5riF5rC05bu66Kit5qCq5byP5Lya56S+XCIsIFwi5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+XCIsIFxuICAgIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCIsIFwi5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzXCIsIFwi5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+XCIsIFxuICAgIFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCIsIFwi5qCq5byP5Lya56S+44OV44K444K/XCIsIFwi5oi455Sw5bu66Kit5qCq5byP5Lya56S+XCIsIFwi5qCq5byP5Lya56S+54aK6LC357WEXCJcbiAgXTtcbiAgY29uc3QgdG9waWNMaXN0ID0gW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTFcIl1cblxuICBjb25zdCBbdmlzdWFsVHlwZSwgc2V0VmlzdWFsVHlwZV0gPSB1c2VTdGF0ZShcIm9uZS10b3BpY1wiKTsgLy8g5Yid5pyf5YCk44KS6Kit5a6aXG5cbiAgLy8gU2lkZWJhcuOBi+OCieODqeOCuOOCquODnOOCv+ODs+OBruWApOOCkuWPl+OBkeWPluOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICBjb25zdCBoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0VmlzdWFsVHlwZSh2YWx1ZSk7XG4gIH07XG5cblxuICBjb25zdCBbaXNBcHBsaWVkLCBzZXRJc0FwcGxpZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8g44Kz44O844Or44OQ44OD44Kv6Zai5pWw44Go44GX44Gm5rih44GZ6Zai5pWwXG4gIGNvbnN0IGhhbmRsZUFwcGx5ID0gKCkgPT4ge1xuICAgIHNldElzQXBwbGllZCgxKTsgIC8vIOeKtuaFi+OCkuabtOaWsFxuICAgIFxuICB9O1xuXG4gIC8vIHNlbGVjdGVkQ29tcGFuaWVz44KS6YWN5YiX44Gu54q25oWL44Go44GX44Gm566h55CGXG4gIGNvbnN0IFtzZWxlY3RlZENvbXBhbmllcywgc2V0U2VsZWN0ZWRDb21wYW5pZXNdID0gdXNlU3RhdGUoW1wi5qCq5byP5Lya56S+54aK6LC357WEXCJdKTtcbiAgY29uc3QgW3NlbGVjdGVkVG9waWNzLCBzZXRTZWxlY3RlZFRvcGljc10gPSB1c2VTdGF0ZShbXCIwXCJdKTtcblxuICAvLyDlhbHpgJrjga7plqLmlbDjgpLkvZzmiJBcbiAgY29uc3QgdG9nZ2xlU2VsZWN0aW9uID0gKGl0ZW0sIHNldFNlbGVjdGVkLGJ1dHRvbXR5cGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkJCXCIsYnV0dG9tdHlwZSk7XG4gICAgaWYoYnV0dG9tdHlwZT09XCJjaGVja2JveFwiKXtcblxuICAgICAgc2V0U2VsZWN0ZWQoKHByZXZTZWxlY3RlZCkgPT4ge1xuICAgICAgICBpZiAocHJldlNlbGVjdGVkLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgLy8g5pei44Gr6YG45oqe44GV44KM44Gm44GE44KL5aC05ZCI44Gv5YmK6ZmkXG4gICAgICAgICAgcmV0dXJuIHByZXZTZWxlY3RlZC5maWx0ZXIoKGkpID0+IGkgIT09IGl0ZW0pO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyDpgbjmip7jgZXjgozjgabjgYTjgarjgYTloLTlkIjjga/ov73liqBcbiAgICAgICAgICByZXR1cm4gWy4uLnByZXZTZWxlY3RlZCwgaXRlbV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBzZXRTZWxlY3RlZChbaXRlbV0pXG4gICAgICB9O1xuXG4gICAgfTtcblxuICAgIFxuICAgIC8vIOODgeOCp+ODg+OCr+ODnOODg+OCr+OCueWkieabtOaZguOBrumWouaVsFxuICAgIGNvbnN0IENvbXBhbnlDaGVja2JveENoYW5nZSA9IChjb21wYW55LGJ1dHRvbXR5cGUpID0+IHtcbiAgICAgIFxuICAgICAgdG9nZ2xlU2VsZWN0aW9uKGNvbXBhbnksIHNldFNlbGVjdGVkQ29tcGFuaWVzLGJ1dHRvbXR5cGUpO1xuICAgICAgY29uc29sZS5sb2coXCJjb21wYW55XCIsYnV0dG9tdHlwZSk7XG4gIFxuICAgIH07XG5cbiAgICBjb25zdCBUb3BpY0NoZWNrYm94Q2hhbmdlID0gKHRvcGljLGJ1dHRvbXR5cGUpID0+IHtcbiAgICAgICAgXG4gICAgICB0b2dnbGVTZWxlY3Rpb24odG9waWMsIHNldFNlbGVjdGVkVG9waWNzLGJ1dHRvbXR5cGUpO1xuICAgICAgY29uc29sZS5sb2coXCJ0b3BpY1wiLGJ1dHRvbXR5cGUpO1xuXG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzb21lUHJvcOOBruWApOOBjOWkieOCj+OCiuOBvuOBl+OBnzpcIiwgdmlzdWFsVHlwZSk7XG4gICAgICBzZXRTZWxlY3RlZENvbXBhbmllcyhbXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIl0pO1xuICAgICAgc2V0U2VsZWN0ZWRUb3BpY3MoW1wiMFwiXSk7XG5cbiAgICB9LCBbdmlzdWFsVHlwZV0pOyAvLyBzb21lUHJvcOOBjOWkieabtOOBleOCjOOBn+OBqOOBjeOBoOOBkeWun+ihjFxuXG5cbiAgICBjb25zdCByZXNldElzQXBwbGllZCA9ICgpID0+IHtcbiAgICAgIHNldElzQXBwbGllZCgwKTtcbiAgICB9O1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5cbiAgICAgIDxSb3c+XG4gICAgICAgIHsvKiDjgrXjgqTjg4njg5Djg7wgKi99XG4gICAgICAgIDxDb2wgbWQ9ezJ9IGNsYXNzTmFtZT1cImJvcmRlci1lbmRcIj5cbiAgICAgICAgICA8U2lkZWJhciBcbiAgICAgICAgICBvbkFwcGx5PXtoYW5kbGVBcHBseX1cbiAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgIG9uVmlzdWFsVHlwZUNoYW5nZT17aGFuZGxlVmlzdWFsVHlwZUNoYW5nZX1cbiAgICAgICAgICB0b3BpY0xpc3Q9e3RvcGljTGlzdH0gXG4gICAgICAgICAgY29tcGFueUxpc3Q9e2NvbXBhbnlMaXN0fSBcbiAgICAgICAgICBzZWxlY3RlZENvbXBhbmllcz17c2VsZWN0ZWRDb21wYW5pZXN9IFxuICAgICAgICAgIHNlbGVjdGVkVG9waWNzPXtzZWxlY3RlZFRvcGljc30gXG4gICAgICAgICAgb25DaGFuZ2VUb3BpYz17VG9waWNDaGVja2JveENoYW5nZX0gXG4gICAgICAgICAgb25DaGFuZ2VDb21wYW55PXtDb21wYW55Q2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIFxuICAgICAgICB7Lyog44OK44OT44Ky44O844K344On44Oz44OQ44O844Go44Oh44Kk44Oz44Kz44Oz44OG44Oz44OEICovfVxuICAgICAgICA8Q29sIG1kPXsxMH0gY2xhc3NOYW1lPVwiYm9yZGVyLWVuZFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxDb250ZW50IFxuICAgICAgICAgIHBsb3Q9e2lzQXBwbGllZH0gXG4gICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX0gXG4gICAgICAgICAgdG9waWM9e3NlbGVjdGVkVG9waWNzfSBcbiAgICAgICAgICBjb21wYW55PXtzZWxlY3RlZENvbXBhbmllc31cbiAgICAgICAgICByZXNldEFwcGx5PXsoKSA9PiBzZXRJc0FwcGxpZWQoMCl9IFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgcGxvdDp7aXNBcHBsaWVkfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfWZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcbmltcG9ydCBQbG90UGllQSBmcm9tICcuL29jY3VweS5qc3gnO1xuaW1wb3J0IFBsb3RQaWVCIGZyb20gJy4vb2NjdXB5LWNvbXBhbnkuanN4JztcbmltcG9ydCBQbG90UGVyc29uYUNvbXAgZnJvbSAnLi9wZXJzb25hLWNvbXAuanN4JztcbmltcG9ydCBQbG90UGVyc29uYVRvcGljIGZyb20gJy4vcGVyc29uYS10b3BpYy5qc3gnO1xuaW1wb3J0IHsgdXBkYXRlIH0gZnJvbSAncGxvdGx5LmpzJztcbmltcG9ydCBQbG90QmFyQ2hhcnRBIGZyb20gJy4vdHJlbmQtdG9waXguanN4JztcbmltcG9ydCBQbG90QmFyQ2hhcnRCIGZyb20gJy4vdHJlbmQtY29tcC5qc3gnO1xuXG5cblxuY29uc3QgQ29udGVudCA9ICh7cGxvdCx2aXN1YWxUeXBlLHRvcGljLGNvbXBhbnkscmVzZXRBcHBseX0pID0+IHtcblxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjbGlja0RhdGEsIHNldENsaWNrRGF0YV0gPSB1c2VTdGF0ZSgpOyAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jga7nirbmhYtcblxuICAgIGNvbnN0IGhhbmRsZVBpZUNoYXJ0Q2xpY2sgPSAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCLjgq/jg6rjg4Pjgq/jgZXjgozjgZ/jg4fjg7zjgr86XCIsIGRhdGEpOyAvLyDjg4fjg5Djg4PjgrDnlKhcbiAgICAgIHNldENsaWNrRGF0YShkYXRhKTsgLy8g54q25oWL44KS5pu05pawXG4gICAgfTtcbiAgICBcbiAgICBcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XG4gICAgICB7LyogRmlyc3QgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc0OCUnIH19PlxuICAgICAgICB7LyogUGVyc29uYSBHcmFwaCAqL31cbiAgICAgICAgPENvbCBtZD17MTB9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwJScgfX0+XG5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFUb3BpY1xuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44Oa44Or44K944OK44Gu5Y+v6KaW5YyWXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MnZoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiID8gKFxuICAgICAgICAgICAgPFBsb3RQZXJzb25hQ29tcFxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44Oa44Or44K944OK44Gu5Y+v6KaW5YyWXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MnZoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICA8L0NvbD5cblxuICAgICAgICB7LyogUmlnaHQgQ29sdW1uIHdpdGggQ2FyZHMgKi99XG4gICAgICAgIDxDb2wgbWQ9ezJ9IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19PlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXG4gICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIlxuICAgICAgICAgID5cblxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8Um93IHN0eWxlPXt7IGhlaWdodDogJzgwJScgfX0+XG4gICAgICAgICAgICA8Q29sIHN0eWxlPXt7IGhlaWdodDogJzI5JScsIG1hcmdpblRvcDogJzQlJyB9fT5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj4xPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPkFCQzwvQ2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgaGVpZ2h0OiAnMjklJywgbWFyZ2luVG9wOiAnNCUnIH19PlxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPjI8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+REVGPC9DYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBzdHlsZT17eyBoZWlnaHQ6ICcyOSUnLCBtYXJnaW5Ub3A6ICc0JScgfX0+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+MzwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5HSEk8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIHsvKiBTZWNvbmQgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc0OCUnIH19PlxuICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUFcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGllQlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgb25DbGlja0RhdGE9e2hhbmRsZVBpZUNoYXJ0Q2xpY2t9IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBruODj+ODs+ODieODqeODvOOCkua4oeOBmVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+azqOebruS8gealreOBrualreeVjOOBq+WvvuOBmeOCi+WNoOacieeOhycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgICBcbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgbWQ9ezZ9PlxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QVxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cblxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgZGF0YT17W119IC8vIOODh+ODvOOCv+OCkui/veWKoOOBl+OBpuOBj+OBoOOBleOBhFxuICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgIHRpdGxlOiAnRuOCv+ODvOODoOOBruWIhuW4gycsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KTooXG4gICAgICAgICAgPFBsb3RCYXJDaGFydEJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIGNsaWNrZGF0YT17Y2xpY2tEYXRhfSAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jgpLmuKHjgZlcbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgIGRhdGE9e1tdfSAvLyDjg4fjg7zjgr/jgpLov73liqDjgZfjgabjgY/jgaDjgZXjgYRcbiAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICB0aXRsZTogJ0bjgr/jg7zjg6Djga7liIbluIMnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPil9XG4gICAgICAgICAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH1mcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzeCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xucm9vdC5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IERhc2hib2FyZE5hdmJhciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBleHBhbmQ9XCJsZ1wiIHN0eWxlPXt7IGhlaWdodDogJzV2aCcgfX0gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPkRhc2hib2FyZDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cbiAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPkhvbWU8L05hdi5MaW5rPlxuICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3BhZ2UtMVwiIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+UGFnZSAxPC9OYXYuTGluaz5cbiAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9wYWdlLTJcIiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlBhZ2UgMjwvTmF2Lkxpbms+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmROYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuLy8gZmV0Y2hEYXRh6Zai5pWw77yaSlNPTuOBvuOBn+OBr+ODhuOCreOCueODiOW9ouW8j+OBq+WvvuW/nFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG5cbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIEpTT07lvaLlvI/jga7loLTlkIhcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgLy8g44OX44Os44O844Oz44OG44Kt44K544OI44Gu5aC05ZCIXG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7IC8vIOaUueihjOWMuuWIh+OCiuOBruODh+ODvOOCv+OCkumFjeWIl+OBqOOBl+OBpui/lOOBmVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjgrnjg5Hjg7zjgrnjg4fjg7zjgr/jgpLlr4booYzliJfjgavlpInmj5vjgZfjgIHooYzmlrnlkJHjga7lkozjgpLoqIjnrpdcbmNvbnN0IHByb2Nlc3NTcGFyc2VEYXRhID0gKHNwYXJzZURhdGEpID0+IHtcbiAgICBcbiAgY29uc3QgbnVtUm93cyA9IE1hdGgubWF4KC4uLnNwYXJzZURhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnJvdykpICsgMTtcbiAgY29uc3QgbnVtQ29scyA9IE1hdGgubWF4KC4uLnNwYXJzZURhdGEubWFwKGVudHJ5ID0+IGVudHJ5LmNvbCkpICsgMTtcblxuICBjb25zdCBtYXRyaXggPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Sb3dzIH0sICgpID0+IEFycmF5KG51bUNvbHMpLmZpbGwoMCkpO1xuICBzcGFyc2VEYXRhLmZvckVhY2goKHsgcm93LCBjb2wsIHZhbHVlIH0pID0+IHtcbiAgICBtYXRyaXhbcm93XVtjb2xdID0gdmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiBtYXRyaXgubWFwKHJvdyA9PiByb3cucmVkdWNlKChzdW0sIHZhbHVlKSA9PiBzdW0gKyB2YWx1ZSwgMCkpOyAvLyDooYzmlrnlkJHjga7lkozjgpLov5TjgZlcbn07XG5cbmNvbnN0IFBsb3RQaWVCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCwgb25DbGlja0RhdGEgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwi5rOo55uu44OI44OU44OD44Kv44Gr6Zai44GZ44KL54m56Kix44Gu5LyB5qWt5Y2g5pyJ546HXCIpO1xuICBjb25zdCBhbGxUb3BpYyA9IFsyLCAzLCAxLCAwLCA5LCA2LCA4LCA3LCAxMV07XG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCJ9O1xuXG4gICAgY29uc3QgVG9waWN0b0lkID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6XCIyXCIsXCLlnLDnm6TmlLnoia9cIjpcIjNcIixcIuODiOODs+ODjeODq+aOmOWJilwiOlwiMVwiLFxuICAgICAgICBcIuWFjemch+ani+mAoFwiOlwiMFwiLFwi566h55CG44K344K544OG44OgXCI6XCI5XCIsXCLlu4Pmo4Tnianlh6bnkIZcIjpcIjZcIixcIuW7uuevieODkeODjeODq1wiOlwiOFwiLFxuICAgICAgIFwi56m66Kq/44K344K544OG44OgXCI6XCI3XCIsXCLmjpjliYroo4Xnva5cIjpcIjExXCJ9O1xuICAvLyDjgq3jg6Pjg4Pjgrfjg6XnlKjjga7jgqrjg5bjgrjjgqfjgq/jg4hcbiAgY29uc3QgZGF0YUNhY2hlID0gdXNlUmVmKHtcbiAgICBjb21wYW5pZXM6IHt9LFxuICAgIHNwYXJzZURhdGE6IHt9XG4gIH0pO1xuXG4gIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhbGxUb3BpY3NEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIGFsbFRvcGljLm1hcChhc3luYyAodGFyZ2V0X2lkKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZSA9IDk7XG4gICAgICAgICAgY29uc3QgY29tcGFueVVybCA9IGAvZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRfaWR9L2NvbXBhbnlgO1xuICAgICAgICAgIGNvbnN0IHNwYXJzZURhdGFVcmwgPSBgL2RhdGEvdG9waWMke3RhcmdldF9pZH0vcGVyc29uYT01L29jY3VweV90b3BpY18ke3RpbWV9Lmpzb25gO1xuXG4gICAgICAgICAgLy8g44Kt44Oj44OD44K344Ol44KS56K66KqNXG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXSkge1xuICAgICAgICAgICAgZGF0YUNhY2hlLmN1cnJlbnQuY29tcGFuaWVzW3RhcmdldF9pZF0gPSBhd2FpdCBmZXRjaERhdGEoY29tcGFueVVybCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudC5zcGFyc2VEYXRhW3RhcmdldF9pZF0pIHtcbiAgICAgICAgICAgIGRhdGFDYWNoZS5jdXJyZW50LnNwYXJzZURhdGFbdGFyZ2V0X2lkXSA9IGF3YWl0IGZldGNoRGF0YShzcGFyc2VEYXRhVXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjb21wYW5pZXMgPSBkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXTtcbiAgICAgICAgICBjb25zdCBzcGFyc2VEYXRhID0gZGF0YUNhY2hlLmN1cnJlbnQuc3BhcnNlRGF0YVt0YXJnZXRfaWRdO1xuXG4gICAgICAgICAgLy8g5q2j6KaP5YyW6Zai5pWwXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cikgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi6Z2e5paH5a2X5YiX44OH44O844K/44GM5qSc5Ye644GV44KM44G+44GX44GfOlwiLCBzdHIpO1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8g6Z2e5paH5a2X5YiX44OH44O844K/44Gv54Sh6KaWXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyLm5vcm1hbGl6ZShcIk5GQ1wiKS50cmltKCk7IC8vIOato+imj+WMluOBqOODiOODquODoOOCkumBqeeUqFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyDmraPopo/ljJbjgZfjgZ/jg4fjg7zjgr/jgafmr5TovINcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW5pZXMgPSBjb21wYW5pZXMubWFwKG5vcm1hbGl6ZVN0cmluZyk7XG4gICAgICAgICAgY29uc3Qgc2FuaXRpemVkQ29tcGFueSA9IG5vcm1hbGl6ZVN0cmluZyhjb21wYW55WzBdKTtcblxuICAgICAgICAgIGlmICghc2FuaXRpemVkQ29tcGFuaWVzLmluY2x1ZGVzKHNhbml0aXplZENvbXBhbnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke3Nhbml0aXplZENvbXBhbnl9XCIgbm90IGZvdW5kIGluIHRvcGljICR7dGFyZ2V0X2lkfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g44K544OR44O844K544OH44O844K/44KS5Yem55CGXG4gICAgICAgICAgY29uc3Qgcm93U3VtcyA9IHByb2Nlc3NTcGFyc2VEYXRhKHNwYXJzZURhdGEpO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gc2FuaXRpemVkQ29tcGFuaWVzLmluZGV4T2Yoc2FuaXRpemVkQ29tcGFueSk7XG5cbiAgICAgICAgICByZXR1cm4geyB0b3BpYzogdGFyZ2V0X2lkLCB2YWx1ZTogcm93U3Vtc1tjb21wYW55SW5kZXhdIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBhbGxUb3BpY3NEYXRhLmZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPT0gbnVsbCk7XG5cbiAgICAgIC8vIOato+imj+WMluOBqOOCveODvOODiFxuICAgICAgY29uc3QgdG90YWxWYWx1ZSA9IGZpbHRlcmVkRGF0YS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS52YWx1ZSwgMCk7XG4gICAgICBpZiAodG90YWxWYWx1ZSA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJObyB2YWxpZCBkYXRhIHRvIG5vcm1hbGl6ZS5cIik7XG4gICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRhID0gZmlsdGVyZWREYXRhLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGNhdGVnb3J5OiBpdGVtLnRvcGljLFxuICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSAvIHRvdGFsVmFsdWUsXG4gICAgICB9KSkuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xuXG4gICAgICBzZXRDaGFydERhdGEobm9ybWFsaXplZERhdGEuc2xpY2UoMCwgMTApKTsgLy8g5LiK5L2NMTDku7bjga7jgb/ooajnpLpcbiAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g5Yid5pyf44OH44O844K/6Kqt44G/6L6844G/44GodXBkYXRl44Gu5aSJ5pu05pmC44Gr44OH44O844K/44KS44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIikge1xuICAgICAgbG9hZERhdGEoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHZpc3VhbFR5cGVdKTtcblxuICBjb25zdCBoYW5kbGVQbG90Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRzICYmIGV2ZW50LnBvaW50c1swXSkge1xuICAgICAgY29uc3QgY2xpY2tkYXRhID0gZXZlbnQucG9pbnRzWzBdLmxhYmVsOyAvLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/pg6jliIbjga7jg6njg5njg6tcbiAgICAgIGNvbnN0IGxhYmVsID0gVG9waWN0b0lkW2NsaWNrZGF0YV1cbiAgICAgIGNvbnN0IHRvcGljaWQgPSBsYWJlbC5yZXBsYWNlKFwiVG9waWMgXCIsIFwiXCIpO1xuICAgICAgb25DbGlja0RhdGEoW3RvcGljaWRdKTsgLy8g6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Op44OZ44Or44KS6YCa55+lXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoaXRlbSA9PiAgSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV0pLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yc2NhbGU6IFwiVmlyaWRpc1wiIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBsb3RDbGlja30gLy8g44Kv44Oq44OD44Kv44Kk44OZ44Oz44OI44KS6L+95YqgXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44OG44Kt44K544OI44OH44O844K/44KS6Kqt44G/6L6844KA6Zai5pWwXG5jb25zdCBmZXRjaFRleHREYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90UGllQSA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSAwO1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRvcGljIHx8IFwiZGVmYXVsdF90b3BpY1wiOyAvLyDliJ3mnJ/lgKTjgajjgZfjgaZcImRlZmF1bHRfdG9waWNcIuOCkuioreWumlxuICAgICAgICBjb25zdCBkYXRhVXJsID0gYC9kYXRhL3RvcGljJHt0YXJnZXRJZH0vcGVyc29uYT01L29jY3VweV9tZWFuXyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGNvbHVtblVybCA9IGAvZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vY29tcGFueWA7XG5cbiAgICAgICAgLy8g44OH44O844K/5Y+W5b6XXG4gICAgICAgIGNvbnN0IFt2YWx1ZXMsIGxhYmVsc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKGRhdGFVcmwpLFxuICAgICAgICAgIGZldGNoVGV4dERhdGEoY29sdW1uVXJsKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy8g5YCk44Go44Op44OZ44Or44Gu57WE44G/5ZCI44KP44Gb44KS5L2c5oiQXG4gICAgICAgIGNvbnN0IGRhdGEgPSBsYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlcy52YWx1ZVtpbmRleF0gfHwgMCwgLy8g5YCk44GM44Gq44GE5aC05ZCI44GvMFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8g5YCk44Gr5Z+644Gl44GE44Gm6ZmN6aCG44Gr44K944O844OI44GX44Gm5LiK5L2NMTDku7bjgpLmir3lh7pcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGRhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke3RhcmdldElkfeOBq+mWouOBmeOCi+eJueioseOBruS8gealreWNoOacieeOh2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4Hjg6Pjg7zjg4jjg4fjg7zjgr/jga7lh6bnkIbkuK3jgavjgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g5Yid5Zue44Os44Oz44OA44Oq44Oz44Kw5pmC44GoYHVwZGF0ZWDlpInmm7TmmYLjgavjg4fjg7zjgr/jgpLjg63jg7zjg4lcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIikge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHZhbHVlczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgIGNvbG9yc2NhbGU6IFwiVmlyaWRpc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDcwLCBiOiA1LCBsOiA0MCwgcjogNTAgfSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGllQTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCB0b0xpc3QgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICBjb25zdCBhbHBoYV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMF0pKTtcbiAgICBjb25zdCBiZXRhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVsxXSkpO1xuXG4gICAgcmV0dXJuIHsgYWxwaGFfbGksIGJldGFfbGkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYWxwaGFfbGk6IFtdLCBiZXRhX2xpOiBbXSB9O1xuICB9XG59O1xuXG5jb25zdCBQbG90UGVyc29uQ29tcCA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIG9uUmVuZGVyZWQgfSkgPT4ge1xuY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgICAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgICAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwifTtcbiAgY29uc3QgYXJyb3dfY29sb3IgPSBbJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRiddO1xuXG4gIGNvbnN0IFtwcmVwYXJlZERhdGEsIHNldFByZXBhcmVkRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZpZ0RhdGEsIHNldEZpZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYW5ub3RhdGlvbnMsIHNldEFubm90YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIuS8gealreOBrueri+OBoeS9jee9rlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByZXBhcmVEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsUHJvbWlzZXMgPSAodG9waWMgfHwgW1wiZGVmYXVsdF90b3BpY1wiXSkubWFwKGFzeW5jICh0YXJnZXRfaWQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9waWNcIix0YXJnZXRfaWQpXG4gICAgICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAvZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRfaWR9L2NvbXBhbnlgO1xuICAgICAgICAgIGNvbnN0IGNvbXBhbmllcyA9IGF3YWl0IGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCk7XG5cbiAgICAgICAgICBjb25zdCBjb21wYW55RGljdCA9IGNvbXBhbmllcy5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgYWNjW3ZhbHVlXSA9IGlkeDtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgY29uc3QgbmV3U2VhcmNoTGlzdCA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55IDogW2NvbXBhbnldO1xuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkU2VhcmNoTGlzdCA9IG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KTtcblxuICAgICAgICAgIGNvbnN0IG5vZGVfYWxwaGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWx0ZXJlZFNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuICAgICAgICAgIGNvbnN0IG5vZGVfYmV0YSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbHRlcmVkU2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGopID0+IGogKyA1KS5tYXAoYXN5bmMgKHApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgL2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0X2lkfS90ZXN0X29wdGltaXplXyR7cH1gO1xuICAgICAgICAgICAgY29uc3QgeyBhbHBoYV9saSwgYmV0YV9saSB9ID0gYXdhaXQgdG9MaXN0KHBhcmFtZXRlclBhdGgpO1xuXG4gICAgICAgICAgICBmaWx0ZXJlZFNlYXJjaExpc3QuZm9yRWFjaCgoaywgaikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW5pZXMuaW5kZXhPZihrKTtcbiAgICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwIC0gNV0gPSBhbHBoYV9saVtpZHhdO1xuICAgICAgICAgICAgICBub2RlX2JldGFbal1bcCAtIDVdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgICByZXR1cm4geyBub2RlX2FscGhhLCBub2RlX2JldGEsIGZpbHRlcmVkU2VhcmNoTGlzdCB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpO1xuXG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQWxwaGEgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5ub2RlX2FscGhhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRCZXRhID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQubm9kZV9iZXRhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRTZWFyY2hMaXN0ID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQuZmlsdGVyZWRTZWFyY2hMaXN0KTtcblxuICAgICAgICBzZXRQcmVwYXJlZERhdGEoeyBhbHBoYTogY29tYmluZWRBbHBoYSwgYmV0YTogY29tYmluZWRCZXRhLCBzZWFyY2hMaXN0OiBjb21iaW5lZFNlYXJjaExpc3QgfSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnl944Gu5qWt55WM44Gn44Gu56uL44Gh5L2N572uYCk7IC8vIOWIneacn+OCv+OCpOODiOODq+OCkuioreWumlxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+a6luWCmeS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDliJ3mnJ/jg6zjg7Pjg4Djg6rjg7PjgrDmmYLjgavjgoLjg4fjg7zjgr/jgpLmupblgplcbiAgICBwcmVwYXJlRGF0YSgpO1xuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1cGRhdGUgJiYgcHJlcGFyZWREYXRhKSB7XG4gICAgICBjb25zdCBwbG90RGF0YSA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4gKHtcbiAgICAgICAgeDogcHJlcGFyZWREYXRhLmFscGhhW2pdLFxuICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXSxcbiAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgICAgdGV4dDogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0sXG4gICAgICAgIHRleHRwb3NpdGlvbjogXCJ0b3AgbGVmdFwiLFxuICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgIGNvbG9yOiBhcnJvd19jb2xvcltqICUgYXJyb3dfY29sb3IubGVuZ3RoXSxcbiAgICAgICAgICBzaXplOiA1LFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiBJZHRvVG9waWNbdG9waWNbal1dLFxuICAgICAgfSkpO1xuXG4gICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBwcmVwYXJlZERhdGEuc2VhcmNoTGlzdC5mbGF0TWFwKChfLCBqKSA9PlxuICAgICAgICBBcnJheSg0KS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgICB4OiBwcmVwYXJlZERhdGEuYWxwaGFbal1baSArIDFdLFxuICAgICAgICAgIHk6IHByZXBhcmVkRGF0YS5iZXRhW2pdW2kgKyAxXSxcbiAgICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgICAgeXJlZjogJ3knLFxuICAgICAgICAgIGF4cmVmOiAneCcsXG4gICAgICAgICAgYXlyZWY6ICd5JyxcbiAgICAgICAgICBheDogcHJlcGFyZWREYXRhLmFscGhhW2pdW2ldLFxuICAgICAgICAgIGF5OiBwcmVwYXJlZERhdGEuYmV0YVtqXVtpXSxcbiAgICAgICAgICBhcnJvd2NvbG9yOiBhcnJvd19jb2xvcltqICUgYXJyb3dfY29sb3IubGVuZ3RoXSxcbiAgICAgICAgICBhcnJvd3NpemU6IDEuMixcbiAgICAgICAgICBhcnJvd3dpZHRoOiAxLjIsXG4gICAgICAgICAgYXJyb3doZWFkOiA1LFxuICAgICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgICAgfSkpXG4gICAgICApO1xuXG4gICAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG5cbiAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCBwcmVwYXJlZERhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdncmV5JyB9LFxuICAgICAgICAgICAgeHJlZjogJ3BhcGVyJyxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICByYW5nZTogWzAsIDEuMDFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHJhbmdlOiBbMCwgMS4wMV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA0MCwgcjogNTAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Db21wO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Ub3BpYyA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBhcnJvd19jb2xvciA9IFsnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJ107XG4gIGNvbnN0IFtmaWdEYXRhLCBzZXRGaWdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fubm90YXRpb25zLCBzZXRBbm5vdGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb21wYW55TGlzdCwgc2V0Q29tcGFueUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoTGlzdCwgc2V0U2VhcmNoTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8g5Yid5pyf44OH44O844K/44Gu44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAvZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRfaWR9L2NvbXBhbnlgO1xuXG4gICAgICBsb2FkQ29tcGFuaWVzKGNvbHVtblBhdGgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0Q29tcGFueUxpc3QoZGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke3RhcmdldF9pZH3jga7jg5rjg6vjgr3jg4pgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljXSk7XG5cbiAgLy8g5qSc57Si5a++6LGh44Gu44OV44Kj44Or44K/44Oq44Oz44KwXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbXBhbnlMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNvbXBhbnlEaWN0ID0gY29tcGFueUxpc3QucmVkdWNlKChhY2MsIHZhbHVlLCBpZHgpID0+IHtcbiAgICAgICAgYWNjW3ZhbHVlXSA9IGlkeDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgY29uc3QgbmV3U2VhcmNoTGlzdCA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55IDogW2NvbXBhbnldO1xuICAgICAgc2V0U2VhcmNoTGlzdChuZXdTZWFyY2hMaXN0LmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSBpbiBjb21wYW55RGljdCkpO1xuICAgIH1cbiAgfSwgW2NvbXBhbnlMaXN0LCBjb21wYW55XSk7XG5cbiAgLy8g44OH44O844K/44Gu5o+P55S7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZSAmJiBzZWFyY2hMaXN0Lmxlbmd0aCA+IDAgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3Qgbm9kZV9hbHBoYSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuICAgICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4gaSArIDUpLm1hcCgocCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYC9kYXRhL3BhcmFtL3BhdGVudC9hbHBoYS90b3BpYz0ke3RhcmdldF9pZH0vdGVzdF9vcHRpbWl6ZV8ke3B9YDtcbiAgICAgICAgcmV0dXJuIHRvTGlzdChwYXJhbWV0ZXJQYXRoKS50aGVuKCh7IGFscGhhX2xpLCBiZXRhX2xpIH0pID0+IHtcbiAgICAgICAgICBzZWFyY2hMaXN0LmZvckVhY2goKGssIGopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbnlMaXN0LmluZGV4T2Yoayk7XG4gICAgICAgICAgICBub2RlX2FscGhhW2pdW3AgLSA1XSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICBub2RlX2JldGFbal1bcCAtIDVdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsb3REYXRhID0gc2VhcmNoTGlzdC5tYXAoKGssIGopID0+ICh7XG4gICAgICAgICAgeDogbm9kZV9hbHBoYVtqXSxcbiAgICAgICAgICB5OiBub2RlX2JldGFbal0sXG4gICAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgICAgICB0ZXh0cG9zaXRpb246IFwidG9wIGxlZnRcIixcbiAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgICBjb2xvcjogYXJyb3dfY29sb3JbaiAlIGFycm93X2NvbG9yLmxlbmd0aF0sXG4gICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogayxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IHBsb3RBbm5vdGF0aW9ucyA9IHNlYXJjaExpc3QuZmxhdE1hcCgoXywgaikgPT5cbiAgICAgICAgICBBcnJheSg0KS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgICAgIHg6IG5vZGVfYWxwaGFbal1baSArIDFdLFxuICAgICAgICAgICAgeTogbm9kZV9iZXRhW2pdW2kgKyAxXSxcbiAgICAgICAgICAgIHhyZWY6ICd4JyxcbiAgICAgICAgICAgIHlyZWY6ICd5JyxcbiAgICAgICAgICAgIGF4OiBub2RlX2FscGhhW2pdW2ldLFxuICAgICAgICAgICAgYXk6IG5vZGVfYmV0YVtqXVtpXSxcbiAgICAgICAgICAgIGF4cmVmOiAneCcsXG4gICAgICAgICAgICBheXJlZjogJ3knLFxuICAgICAgICAgICAgYXJyb3djb2xvcjogYXJyb3dfY29sb3JbaiAlIGFycm93X2NvbG9yLmxlbmd0aF0sXG4gICAgICAgICAgICBhcnJvd3NpemU6IDEuMixcbiAgICAgICAgICAgIGFycm93d2lkdGg6IDEuMixcbiAgICAgICAgICAgIGFycm93aGVhZDogNSxcbiAgICAgICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgKTtcblxuICAgICAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAgICAgc2V0QW5ub3RhdGlvbnMocGxvdEFubm90YXRpb25zKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgc2VhcmNoTGlzdCwgY29tcGFueUxpc3QsIHRvcGljXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17ZmlnRGF0YX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMjAsIGNvbG9yOiAnZ3JleScgfSxcbiAgICAgICAgICAgIHhyZWY6ICdwYXBlcicsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgcmFuZ2U6IFswLCAxLjAxXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICByYW5nZTogWzAsIDEuMDFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiAzNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgYmdjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgYm9yZGVyd2lkdGg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGVyc29uVG9waWM7XG4iLCIvLyBTaWRlYmFyLmpzeFxuaW1wb3J0IFJlYWN0ICx7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiwgQ29sLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5jb25zdCBTaWRlYmFyID0gKHsgb25BcHBseSwgdmlzdWFsVHlwZSwgb25WaXN1YWxUeXBlQ2hhbmdlLCB0b3BpY0xpc3QsIGNvbXBhbnlMaXN0LCBzZWxlY3RlZENvbXBhbmllcywgc2VsZWN0ZWRUb3BpY3MsIG9uQ2hhbmdlVG9waWMsIG9uQ2hhbmdlQ29tcGFueSB9KSA9PiB7XG4gIGNvbnN0IFtpbnB1dFR5cGUsIHNldElucHV0VHlwZV0gPSB1c2VTdGF0ZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pOyAvLyDliJ3mnJ/lgKTjga8gXCJjaGVja2JveFwiXG4gIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgb25WaXN1YWxUeXBlQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlPT1cIm9uZS1jb21wXCIpe1xuICAgICAgICBzZXRJbnB1dFR5cGUoW1wiY2hlY2tib3hcIixcInJhZGlvXCJdKX1cbiAgICAgIGVsc2V7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pXG4gICAgICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coaW5wdXRUeXBlKTtcbiAgfTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwifTtcbiAgXG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgcGFkZGluZzogJzEwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknIH19PlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgdGV4dC1kYW5nZXIgZm9udC1pdGFsaWNcIiBzdHlsZT17eyBoZWlnaHQ6ICc1JScgfX0+XG4gICAgICAgIDxDb2wgc209ezZ9PlxuICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMCUnIH19IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+XG4gICAgICAgICAgICDlj6/oppbljJbmnaHku7ZcbiAgICAgICAgICA8L2g1PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzbT17NH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJhcHBseVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkFwcGx5fVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTUlJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWPr+imluWMllxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICB7LyogQWNjb3JkaW9uICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBmb250LWl0YWxpY1wiIHN0eWxlPXt7IGhlaWdodDogJzgwJScgfX0+XG4gICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgey8qIFZpc3VhbGl6YXRpb24gVHlwZSAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIwXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPuWPr+imluWMluOCv+OCpOODlzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZCA9IFwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9uZS1jb21wXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBteC0yXCI+5LiA56S+44Gr5rOo55uuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIn0gLy8g44OH44OV44Kp44Or44OI44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvbmUtdG9waWNcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIj7kuIDjgaTjga7jg4jjg5Tjg4Pjgq/jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBUb3BpYyBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMVwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Ub3BpYzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAge3RvcGljTGlzdC5tYXAoKHRvcGljKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RvcGljfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dFR5cGVbMF19IFxuICAgICAgICAgICAgICAgICAgICBpZCA9IHt0b3BpY31cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRUb3BpY3MuaW5jbHVkZXModG9waWMpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VUb3BpYyh0b3BpYyxpbnB1dFR5cGVbMF0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9waWNcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0b3BpY30+e0lkdG9Ub3BpY1t0b3BpY119PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cbiAgICAgICAgICB7LyogQ29tcGFueSBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMlwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Db21wYW55PC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICB7Y29tcGFueUxpc3QubWFwKChjb21wYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVsxXX0gXG4gICAgICAgICAgICAgICAgICAgIGlkID0ge2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29tcGFuaWVzLmluY2x1ZGVzKGNvbXBhbnkpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VDb21wYW55KGNvbXBhbnksaW5wdXRUeXBlWzFdKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nY29tcGFueSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17Y29tcGFueX0+e2NvbXBhbnl9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG4gICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/5Y+W5b6X6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90QmFyQ2hhcnRCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgY2xpY2tkYXRhLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSA5O1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGNsaWNrZGF0YSB8fCB0b3BpY1swXSB8fCBcImRlZmF1bHRfdG9waWNcIjsgLy8gYGNsaWNrZGF0YWDjgpLlhKrlhYhcbiAgICAgICAgY29uc3QgcGF0aCA9IGAvZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vdHJlbmQvb3V0cHV0XyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGNvbXBhbnlQYXRoID0gYC9kYXRhL3BhcmFtL3BhdGVudC9hbHBoYS90b3BpYz0ke3RhcmdldElkfS9jb21wYW55YDtcblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgW29yaWdpbmFsLCBjb21wYW55TGlzdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKHBhdGgpLFxuICAgICAgICAgIGxvYWRDb21wYW5pZXMoY29tcGFueVBhdGgpLFxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoIWNvbXBhbnlMaXN0LmluY2x1ZGVzKGNvbXBhbnlbMF0pKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBDb21wYW55IFwiJHtjb21wYW55WzBdfVwiIG5vdCBmb3VuZC5gKTtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbXBhbnnjga7jg4fjg7zjgr/lj5blvpdcbiAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gY29tcGFueUxpc3QuaW5kZXhPZihjb21wYW55WzBdKTtcbiAgICAgICAgY29uc3QgY29tcGFueURhdGEgPSBvcmlnaW5hbFtjb21wYW55SW5kZXhdO1xuICAgICAgICBpZiAoIWNvbXBhbnlEYXRhKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBObyBkYXRhIGZvdW5kIGZvciBjb21wYW55IGluZGV4IFwiJHtjb21wYW55SW5kZXh9XCIuYCk7XG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKU09O44OH44O844K/44Gu5pW05b2iXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBPYmplY3QuZW50cmllcyhjb21wYW55RGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgY2F0ZWdvcnk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMCwgLy8g5YCk44KS5pWw5YCk44Gr5aSJ5o+b77yI44Gq44GE5aC05ZCI44GvMO+8iVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8g44OH44O844K/44KS6ZmN6aCG44Gr44K944O844OI44GX44Gm5LiK5L2NMTDku7bjgpLlj5blvpdcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGZvcm1hdHRlZERhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnlbMF1944GuRknjga7liIbluINgKTtcbiAgICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYGNsaWNrZGF0YWDjga7lgKTjgYzlpInljJbjgZfjgZ/jgYvjgpLmmI7npLrnmoTjgavmr5TovINcbiAgICBpZiAoXG4gICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgJiZcbiAgICAgICh1cGRhdGUgfHwgY2hhcnREYXRhLmxlbmd0aCA9PT0gMCB8fCBjbGlja2RhdGEpXG4gICAgKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIEpTT04uc3RyaW5naWZ5KGNsaWNrZGF0YSksIHVwZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLCAvLyDmqKrlkJHjgY3mo5LjgrDjg6njg5XnlKjjga7lgKTvvIjpgIbpoIbvvIlcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSwgLy8g44Kr44OG44K044Oq77yI6YCG6aCG77yJXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsIC8vIOaoquWQkeOBjeajkuOCsOODqeODlVxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sIC8vIOajkuOBruiJslxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/5Y+W5b6X6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90QmFyQ2hhcnRCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgY2xpY2tkYXRhLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSA5O1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGNsaWNrZGF0YSB8fCB0b3BpY1swXSB8fCBcImRlZmF1bHRfdG9waWNcIjsgLy8gY2xpY2tkYXRh44KS5YSq5YWIXG4gICAgICAgIGNvbnN0IHBhdGggPSBgL2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0SWR9L3RyZW5kL291dHB1dF8ke3RpbWV9Lmpzb25gO1xuICAgICAgICBjb25zdCBjb21wYW55UGF0aCA9IGAvZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vY29tcGFueWA7XG5cbiAgICAgICAgLy8g44OH44O844K/44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IFtvcmlnaW5hbCwgY29tcGFueUxpc3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgICBsb2FkQ29tcGFuaWVzKGNvbXBhbnlQYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgaWYgKCFjb21wYW55TGlzdC5pbmNsdWRlcyhjb21wYW55WzBdKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcGFueSBcIiR7Y29tcGFueVswXX1cIiBub3QgZm91bmQuYCk7XG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb21wYW5544Gu44OH44O844K/5Y+W5b6XXG4gICAgICAgIGNvbnN0IGNvbXBhbnlJbmRleCA9IGNvbXBhbnlMaXN0LmluZGV4T2YoY29tcGFueVswXSk7XG4gICAgICAgIGNvbnN0IGNvbXBhbnlEYXRhID0gb3JpZ2luYWxbY29tcGFueUluZGV4XTtcbiAgICAgICAgaWYgKCFjb21wYW55RGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgTm8gZGF0YSBmb3VuZCBmb3IgY29tcGFueSBpbmRleCBcIiR7Y29tcGFueUluZGV4fVwiLmApO1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlNPTuODh+ODvOOCv+OBruaVtOW9olxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gT2JqZWN0LmVudHJpZXMoY29tcGFueURhdGEpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgIGNhdGVnb3J5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQodmFsdWUpIHx8IDAsIC8vIOWApOOCkuaVsOWApOOBq+WkieaPm++8iOOBquOBhOWgtOWQiOOBrzDvvIlcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBmb3JtYXR0ZWREYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtjb21wYW55WzBdfeOBrkZJ44Gu5YiG5biDYCk7XG4gICAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgJiYgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwIHx8IGNsaWNrZGF0YSkpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCBjb21wYW55LCBjbGlja2RhdGEsIHVwZGF0ZV0pOyAvLyBjbGlja2RhdGEg44KS5L6d5a2Y6Zai5L+C44Gr6L+95YqgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHsgY29sb3I6IFwicm95YWxibHVlXCIgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkZJXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiAzNSwgbDogODAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QjtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteV9hcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfcGxvdGx5X2pzX2xpYl9pbmRleF9qcy1ub2RlX21vZHVsZXNfcmVhY3QtYm9vdHN0cmFwX2VzbV9BY2NvcmRpb25fanMtbm9kLWE1NjI5N1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJEYXNoYm9hcmROYXZiYXIiLCJTaWRlYmFyIiwiQ29udGVudCIsIkFwcCIsImFycm93Q29sb3IiLCJjb21wYW55TGlzdCIsInRvcGljTGlzdCIsInZpc3VhbFR5cGUiLCJzZXRWaXN1YWxUeXBlIiwiaGFuZGxlVmlzdWFsVHlwZUNoYW5nZSIsInZhbHVlIiwiaXNBcHBsaWVkIiwic2V0SXNBcHBsaWVkIiwiaGFuZGxlQXBwbHkiLCJzZWxlY3RlZENvbXBhbmllcyIsInNldFNlbGVjdGVkQ29tcGFuaWVzIiwic2VsZWN0ZWRUb3BpY3MiLCJzZXRTZWxlY3RlZFRvcGljcyIsInRvZ2dsZVNlbGVjdGlvbiIsIml0ZW0iLCJzZXRTZWxlY3RlZCIsImJ1dHRvbXR5cGUiLCJjb25zb2xlIiwibG9nIiwicHJldlNlbGVjdGVkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpIiwiQ29tcGFueUNoZWNrYm94Q2hhbmdlIiwiY29tcGFueSIsIlRvcGljQ2hlY2tib3hDaGFuZ2UiLCJ0b3BpYyIsInJlc2V0SXNBcHBsaWVkIiwiY3JlYXRlRWxlbWVudCIsImZsdWlkIiwiY2xhc3NOYW1lIiwibWQiLCJvbkFwcGx5Iiwib25WaXN1YWxUeXBlQ2hhbmdlIiwib25DaGFuZ2VUb3BpYyIsIm9uQ2hhbmdlQ29tcGFueSIsInBsb3QiLCJyZXNldEFwcGx5IiwiQ2FyZCIsIlBsb3QiLCJQbG90UGllQSIsIlBsb3RQaWVCIiwiUGxvdFBlcnNvbmFDb21wIiwiUGxvdFBlcnNvbmFUb3BpYyIsInVwZGF0ZSIsIlBsb3RCYXJDaGFydEEiLCJQbG90QmFyQ2hhcnRCIiwiX3JlZiIsImRhdGEiLCJzZXREYXRhIiwiY2xpY2tEYXRhIiwic2V0Q2xpY2tEYXRhIiwiaGFuZGxlUGllQ2hhcnRDbGljayIsInN0eWxlIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsIm9uUmVuZGVyZWQiLCJsYXlvdXQiLCJ0aXRsZSIsIndpZHRoIiwiZm9udFNpemUiLCJjb2xvciIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIkJvZHkiLCJUaXRsZSIsIlRleHQiLCJvbkNsaWNrRGF0YSIsImNsaWNrZGF0YSIsIlJlYWN0RE9NIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiU3RyaWN0TW9kZSIsIk5hdmJhciIsIk5hdiIsImJnIiwiZXhwYW5kIiwiQnJhbmQiLCJocmVmIiwiTGluayIsInVzZVJlZiIsImZldGNoRGF0YSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwiZ2V0IiwianNvbiIsInRleHQiLCJzcGxpdCIsImxpbmUiLCJ0cmltIiwiZXJyb3IiLCJwcm9jZXNzU3BhcnNlRGF0YSIsInNwYXJzZURhdGEiLCJudW1Sb3dzIiwiTWF0aCIsIm1heCIsIm1hcCIsImVudHJ5Iiwicm93IiwibnVtQ29scyIsImNvbCIsIm1hdHJpeCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImZpbGwiLCJmb3JFYWNoIiwicmVkdWNlIiwic3VtIiwiX3JlZjIiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJzZXRUaXRsZSIsImFsbFRvcGljIiwiSWR0b1RvcGljIiwiVG9waWN0b0lkIiwiZGF0YUNhY2hlIiwiY29tcGFuaWVzIiwibG9hZERhdGEiLCJhbGxUb3BpY3NEYXRhIiwiUHJvbWlzZSIsImFsbCIsInRhcmdldF9pZCIsInRpbWUiLCJjb21wYW55VXJsIiwic3BhcnNlRGF0YVVybCIsImN1cnJlbnQiLCJub3JtYWxpemVTdHJpbmciLCJzdHIiLCJ3YXJuIiwibm9ybWFsaXplIiwic2FuaXRpemVkQ29tcGFuaWVzIiwic2FuaXRpemVkQ29tcGFueSIsInJvd1N1bXMiLCJjb21wYW55SW5kZXgiLCJpbmRleE9mIiwiZmlsdGVyZWREYXRhIiwidG90YWxWYWx1ZSIsIm5vcm1hbGl6ZWREYXRhIiwiY2F0ZWdvcnkiLCJzb3J0IiwiYSIsImIiLCJzbGljZSIsImhhbmRsZVBsb3RDbGljayIsImV2ZW50IiwicG9pbnRzIiwibGFiZWwiLCJ0b3BpY2lkIiwicmVwbGFjZSIsInR5cGUiLCJ2YWx1ZXMiLCJsYWJlbHMiLCJTdHJpbmciLCJkaXJlY3Rpb24iLCJtYXJrZXIiLCJjb2xvcnNjYWxlIiwic2hvd2xlZ2VuZCIsInBsb3RfYmdjb2xvciIsInBhcGVyX2JnY29sb3IiLCJtYXJnaW4iLCJ0IiwibCIsInIiLCJvbkNsaWNrIiwiZmV0Y2hUZXh0RGF0YSIsImxvYWRDaGFydERhdGEiLCJ0YXJnZXRJZCIsImRhdGFVcmwiLCJjb2x1bW5VcmwiLCJpbmRleCIsInNvcnRlZERhdGEiLCJsb2FkQ29tcGFuaWVzIiwiZGF0YVBhdGgiLCJ0b0xpc3QiLCJsaW5lcyIsImFscGhhX2xpIiwicGFyc2VGbG9hdCIsImJldGFfbGkiLCJQbG90UGVyc29uQ29tcCIsImFycm93X2NvbG9yIiwicHJlcGFyZWREYXRhIiwic2V0UHJlcGFyZWREYXRhIiwiZmlnRGF0YSIsInNldEZpZ0RhdGEiLCJhbm5vdGF0aW9ucyIsInNldEFubm90YXRpb25zIiwicHJlcGFyZURhdGEiLCJhbGxQcm9taXNlcyIsImNvbHVtblBhdGgiLCJjb21wYW55RGljdCIsImFjYyIsImlkeCIsIm5ld1NlYXJjaExpc3QiLCJpc0FycmF5IiwiZmlsdGVyZWRTZWFyY2hMaXN0Iiwibm9kZV9hbHBoYSIsIm5vZGVfYmV0YSIsInByb21pc2VzIiwiXyIsImoiLCJwIiwicGFyYW1ldGVyUGF0aCIsImsiLCJyZXN1bHRzIiwiY29tYmluZWRBbHBoYSIsImZsYXRNYXAiLCJyZXN1bHQiLCJjb21iaW5lZEJldGEiLCJjb21iaW5lZFNlYXJjaExpc3QiLCJhbHBoYSIsImJldGEiLCJzZWFyY2hMaXN0IiwicGxvdERhdGEiLCJ4IiwieSIsIm1vZGUiLCJ0ZXh0cG9zaXRpb24iLCJzeW1ib2wiLCJzaXplIiwibmFtZSIsInBsb3RBbm5vdGF0aW9ucyIsInhyZWYiLCJ5cmVmIiwiYXhyZWYiLCJheXJlZiIsImF4IiwiYXkiLCJhcnJvd2NvbG9yIiwiYXJyb3dzaXplIiwiYXJyb3d3aWR0aCIsImFycm93aGVhZCIsInNob3dhcnJvdyIsImZvbnQiLCJ4YW5jaG9yIiwieGF4aXMiLCJyYW5nZSIsImxpbmVjb2xvciIsImxpbmV3aWR0aCIsImdyaWRjb2xvciIsImdyaWR3aWR0aCIsImdyaWRkYXNoIiwieWF4aXMiLCJsZWdlbmQiLCJiZ2NvbG9yIiwiYm9yZGVyY29sb3IiLCJib3JkZXJ3aWR0aCIsIlBsb3RQZXJzb25Ub3BpYyIsInNldENvbXBhbnlMaXN0Iiwic2V0U2VhcmNoTGlzdCIsInRoZW4iLCJBY2NvcmRpb24iLCJCdXR0b24iLCJpbnB1dFR5cGUiLCJzZXRJbnB1dFR5cGUiLCJoYW5kbGVSYWRpb0NoYW5nZSIsInRhcmdldCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJzbSIsImlkIiwiZGVmYXVsdEFjdGl2ZUtleSIsIkl0ZW0iLCJldmVudEtleSIsIkhlYWRlciIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImh0bWxGb3IiLCJrZXkiLCJwYXRoIiwiY29tcGFueVBhdGgiLCJvcmlnaW5hbCIsImNvbXBhbnlEYXRhIiwiZm9ybWF0dGVkRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJKU09OIiwic3RyaW5naWZ5IiwicmV2ZXJzZSIsIm9yaWVudGF0aW9uIiwibWlycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==