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
    md: 3,
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
    md: 9,
    className: "border-end",
    style: {
      height: '100vh'
    }
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var _occupy_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./occupy.jsx */ "./src/occupy.jsx");
/* harmony import */ var _occupy_company_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./occupy-company.jsx */ "./src/occupy-company.jsx");
/* harmony import */ var _persona_comp_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persona-comp.jsx */ "./src/persona-comp.jsx");
/* harmony import */ var _persona_topic_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persona-topic.jsx */ "./src/persona-topic.jsx");
/* harmony import */ var _trend_topix_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trend-topix.jsx */ "./src/trend-topix.jsx");
/* harmony import */ var _trend_comp_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trend-comp.jsx */ "./src/trend-comp.jsx");








const Content = _ref => {
  let {
    plot,
    visualType,
    topic,
    company,
    resetApply
  } = _ref;
  const [clickData, setClickData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // クリックデータの状態

  const handlePieChartClick = data => {
    console.log("クリックされたデータ:", data); // デバッグ用
    setClickData(data); // 状態を更新
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fluid: true,
    className: "bg-light",
    style: {
      width: '100vh',
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: '100vh',
      height: '50vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    md: 9,
    style: {
      width: '100vh',
      height: '100vh'
    }
  }, visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_persona_topic_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }) : visualType === "one-comp" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_persona_comp_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u8A72\u5F53\u3059\u308B\u8868\u793A\u304C\u3042\u308A\u307E\u305B\u3093")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    md: 3,
    style: {
      height: '40%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "h-100"
  }, ["ABC", "DEF", "GHI"].map((text, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: index,
    xs: 12 // 横幅全体を使う
    ,
    className: "d-flex align-items-center justify-content-center",
    style: {
      flex: "1 1 auto"
    } // 高さを均等に分割
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "w-75 h-75"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
    className: "d-flex flex-column align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
    className: "text-secondary-emphasis"
  }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Text, {
    className: "text-secondary-emphasis"
  }, text)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      height: '40vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    md: 6
  }, visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_occupy_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  }) : visualType === "one-comp" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_occupy_company_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u8A72\u5F53\u3059\u308B\u8868\u793A\u304C\u3042\u308A\u307E\u305B\u3093")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    md: 6
  }, visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_trend_topix_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_trend_comp_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  // キャッシュ用のオブジェクト
  const dataCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    companies: {},
    sparseData: {}
  });
  const loadData = async () => {
    try {
      const allTopicsData = await Promise.all(allTopic.map(async target_id => {
        const time = 9;
        const companyUrl = `${"/my-app"}/data/param/patent/alpha/topic=${target_id}/company.txt`;
        const sparseDataUrl = `${"/my-app"}/data/topic${target_id}/persona=5/occupy_topic_${time}.json`;

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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadChartData = async () => {
      try {
        const time = 0;
        const targetId = topic || "default_topic"; // 初期値として"default_topic"を設定
        const dataUrl = `${"/my-app"}/data/topic${targetId}/persona=5/occupy_mean_${time}.json`;
        const columnUrl = `${"/my-app"}/data/param/patent/alpha/topic=${targetId}/company.txt`;

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
        setTitle(`${IdtoTopic[targetId]}に関する特許の企業占有率`);
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
          const columnPath = `${"/my-app"}/data/param/patent/alpha/topic=${target_id}/company.txt`;
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
            const parameterPath = `${"/my-app"}/data/param/patent/alpha/topic=${target_id}/test_optimize_${p}.txt`;
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
      const columnPath = `${"/my-app"}/data/param/patent/alpha/topic=${target_id}/company.txt`;
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
        const parameterPath = `${"/my-app"}/data/param/patent/alpha/topic=${target_id}/test_optimize_${p}.txt`;
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
        const path = `${"/my-app"}/data/param/patent/alpha/topic=${targetId}/trend/output_${time}.json`;
        const companyPath = `${"/my-app"}/data/param/patent/alpha/topic=${targetId}/company.txt`;

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
            value: key === "" ? 0 : parseFloat(value) * 100 // 値を数値に変換（ない場合は0）
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    },
    config: {
      responsive: true
    } // Plotlyにレスポンシブ設定を有効化
    ,
    style: {
      marginTop: "3vh",
      width: "100%",
      height: "100%"
    } // 必ず全体サイズを親要素に合わせ
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
const PlotBarChartA = _ref => {
  let {
    update,
    visualType,
    topic,
    onRendered
  } = _ref;
  const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("FIの分布!");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadChartData = async () => {
      try {
        const time = 9;
        const targetId = topic[0]; // clickdataを優先
        const path = `${"/my-app"}/data/param/patent/alpha/topic=${targetId}/trend/output_topic_${time}.json`;

        // データを取得
        const [original] = await Promise.all([fetchData(path)]);
        console.log("a", original);

        // JSONデータの整形
        const formattedData = Object.entries(original).map(_ref2 => {
          let [key, value] = _ref2;
          return {
            category: key,
            value: key === "" ? 0 : parseFloat(value) * 100 || 0
          };
        });
        console.log("a", formattedData);

        // データを降順にソートして上位10件を取得
        const sortedData = formattedData.sort((a, b) => b.value - a.value).slice(0, 10);
        setChartData(sortedData);
        setTitle(`FIの分布`);
        console.log(chartData);
        onRendered(); // 描画完了を通知
      } catch (error) {
        console.error("データ処理中のエラー:", error);
      }
    };
    if (visualType === "one-topic" && (update || chartData.length === 0)) {
      loadChartData();
    }
  }, [visualType, topic, update]); // clickdata を依存関係に追加

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "3vh",
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    },
    config: {
      responsive: true
    } // Plotlyにレスポンシブ設定を有効化
    ,
    style: {
      marginTop: "3vh",
      width: "100%",
      height: "100%"
    } // 必ず全体サイズを親要素に合わせ
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlotBarChartA);

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-bootstrap_esm_Accordion_js-node_modules_react-bootstrap_esm_Button-4a5d15"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2xEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2FwcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbnRlbnQuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvbmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvb2NjdXB5LWNvbXBhbnkuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9vY2N1cHkuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9wZXJzb25hLWNvbXAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9wZXJzb25hLXRvcGljLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvc2lkZWJhci5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RyZW5kLWNvbXAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy90cmVuZC10b3BpeC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH1mcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBEYXNoYm9hcmROYXZiYXIgZnJvbSAnLi9uYXZiYXIuanN4JztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhci5qc3gnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50LmpzeCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgXG4gIC8vIOOCq+ODqeODvOOBqOODleOCqeODvOOCq+OCueS8gealreODquOCueODiFxuICBjb25zdCBhcnJvd0NvbG9yID0gW1xuICAgICcjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnLCBcbiAgICAnIzNFOUU2RicsICcjRjM4MTgxJywgJyM1NDVFNzUnLCAnI0ZGQjYyNycsICcjNTc3NTkwJ1xuICBdO1xuICBjb25zdCBjb21wYW55TGlzdCA9IFtcbiAgICAn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JywgXCLmoKrlvI/kvJrnpL7lpKfmnpfntYRcIiwgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIiwgXCLlpKfmiJDlu7roqK3moKrlvI/kvJrnpL5cIiwgXG4gICAgXCLmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupdcIiwgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIiwgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIiwgXG4gICAgXCLkupTmtIvlu7roqK3moKrlvI/kvJrnpL5cIiwgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIiwgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIiwgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIlxuICBdO1xuICBjb25zdCB0b3BpY0xpc3QgPSBbXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMVwiXVxuXG4gIGNvbnN0IFt2aXN1YWxUeXBlLCBzZXRWaXN1YWxUeXBlXSA9IHVzZVN0YXRlKFwib25lLXRvcGljXCIpOyAvLyDliJ3mnJ/lgKTjgpLoqK3lrppcblxuICAvLyBTaWRlYmFy44GL44KJ44Op44K444Kq44Oc44K/44Oz44Gu5YCk44KS5Y+X44GR5Y+W44KL44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG4gIGNvbnN0IGhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRWaXN1YWxUeXBlKHZhbHVlKTtcbiAgfTtcblxuXG4gIGNvbnN0IFtpc0FwcGxpZWQsIHNldElzQXBwbGllZF0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyDjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDjgajjgZfjgabmuKHjgZnplqLmlbBcbiAgY29uc3QgaGFuZGxlQXBwbHkgPSAoKSA9PiB7XG4gICAgc2V0SXNBcHBsaWVkKDEpOyAgLy8g54q25oWL44KS5pu05pawXG4gICAgXG4gIH07XG5cbiAgLy8gc2VsZWN0ZWRDb21wYW5pZXPjgpLphY3liJfjga7nirbmhYvjgajjgZfjgabnrqHnkIZcbiAgY29uc3QgW3NlbGVjdGVkQ29tcGFuaWVzLCBzZXRTZWxlY3RlZENvbXBhbmllc10gPSB1c2VTdGF0ZShbXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIl0pO1xuICBjb25zdCBbc2VsZWN0ZWRUb3BpY3MsIHNldFNlbGVjdGVkVG9waWNzXSA9IHVzZVN0YXRlKFtcIjBcIl0pO1xuXG4gIC8vIOWFsemAmuOBrumWouaVsOOCkuS9nOaIkFxuICBjb25zdCB0b2dnbGVTZWxlY3Rpb24gPSAoaXRlbSwgc2V0U2VsZWN0ZWQsYnV0dG9tdHlwZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQkJcIixidXR0b210eXBlKTtcbiAgICBpZihidXR0b210eXBlPT1cImNoZWNrYm94XCIpe1xuXG4gICAgICBzZXRTZWxlY3RlZCgocHJldlNlbGVjdGVkKSA9PiB7XG4gICAgICAgIGlmIChwcmV2U2VsZWN0ZWQuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAvLyDml6Ljgavpgbjmip7jgZXjgozjgabjgYTjgovloLTlkIjjga/liYrpmaRcbiAgICAgICAgICByZXR1cm4gcHJldlNlbGVjdGVkLmZpbHRlcigoaSkgPT4gaSAhPT0gaXRlbSk7XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIOmBuOaKnuOBleOCjOOBpuOBhOOBquOBhOWgtOWQiOOBr+i/veWKoFxuICAgICAgICAgIHJldHVybiBbLi4ucHJldlNlbGVjdGVkLCBpdGVtXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHNldFNlbGVjdGVkKFtpdGVtXSlcbiAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgXG4gICAgLy8g44OB44Kn44OD44Kv44Oc44OD44Kv44K55aSJ5pu05pmC44Gu6Zai5pWwXG4gICAgY29uc3QgQ29tcGFueUNoZWNrYm94Q2hhbmdlID0gKGNvbXBhbnksYnV0dG9tdHlwZSkgPT4ge1xuICAgICAgXG4gICAgICB0b2dnbGVTZWxlY3Rpb24oY29tcGFueSwgc2V0U2VsZWN0ZWRDb21wYW5pZXMsYnV0dG9tdHlwZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbXBhbnlcIixidXR0b210eXBlKTtcbiAgXG4gICAgfTtcblxuICAgIGNvbnN0IFRvcGljQ2hlY2tib3hDaGFuZ2UgPSAodG9waWMsYnV0dG9tdHlwZSkgPT4ge1xuICAgICAgICBcbiAgICAgIHRvZ2dsZVNlbGVjdGlvbih0b3BpYywgc2V0U2VsZWN0ZWRUb3BpY3MsYnV0dG9tdHlwZSk7XG4gICAgICBjb25zb2xlLmxvZyhcInRvcGljXCIsYnV0dG9tdHlwZSk7XG5cbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInNvbWVQcm9w44Gu5YCk44GM5aSJ44KP44KK44G+44GX44GfOlwiLCB2aXN1YWxUeXBlKTtcbiAgICAgIHNldFNlbGVjdGVkQ29tcGFuaWVzKFtcIuagquW8j+S8muekvueGiuiwt+e1hFwiXSk7XG4gICAgICBzZXRTZWxlY3RlZFRvcGljcyhbXCIwXCJdKTtcblxuICAgIH0sIFt2aXN1YWxUeXBlXSk7IC8vIHNvbWVQcm9w44GM5aSJ5pu044GV44KM44Gf44Go44GN44Gg44GR5a6f6KGMXG5cblxuICAgIGNvbnN0IHJlc2V0SXNBcHBsaWVkID0gKCkgPT4ge1xuICAgICAgc2V0SXNBcHBsaWVkKDApO1xuICAgIH07XG5cblxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJiZy1saWdodFwiPlxuICAgICAgPFJvdz5cbiAgICAgICAgey8qIOOCteOCpOODieODkOODvCAqL31cbiAgICAgICAgPENvbCBtZD17M30gY2xhc3NOYW1lPVwiYm9yZGVyLWVuZFwiPlxuICAgICAgICAgIDxTaWRlYmFyIFxuICAgICAgICAgIG9uQXBwbHk9e2hhbmRsZUFwcGx5fVxuICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgb25WaXN1YWxUeXBlQ2hhbmdlPXtoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlfVxuICAgICAgICAgIHRvcGljTGlzdD17dG9waWNMaXN0fSBcbiAgICAgICAgICBjb21wYW55TGlzdD17Y29tcGFueUxpc3R9IFxuICAgICAgICAgIHNlbGVjdGVkQ29tcGFuaWVzPXtzZWxlY3RlZENvbXBhbmllc30gXG4gICAgICAgICAgc2VsZWN0ZWRUb3BpY3M9e3NlbGVjdGVkVG9waWNzfSBcbiAgICAgICAgICBvbkNoYW5nZVRvcGljPXtUb3BpY0NoZWNrYm94Q2hhbmdlfSBcbiAgICAgICAgICBvbkNoYW5nZUNvbXBhbnk9e0NvbXBhbnlDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgXG4gICAgICAgIHsvKiDjg4rjg5PjgrLjg7zjgrfjg6fjg7Pjg5Djg7zjgajjg6HjgqTjg7PjgrPjg7Pjg4bjg7Pjg4QgKi99XG4gICAgICAgIDxDb2wgbWQ9ezl9IGNsYXNzTmFtZT1cImJvcmRlci1lbmRcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgICAgXG4gICAgICAgICAgPENvbnRlbnQgXG4gICAgICAgICAgcGxvdD17aXNBcHBsaWVkfSBcbiAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfSBcbiAgICAgICAgICB0b3BpYz17c2VsZWN0ZWRUb3BpY3N9IFxuICAgICAgICAgIGNvbXBhbnk9e3NlbGVjdGVkQ29tcGFuaWVzfVxuICAgICAgICAgIHJlc2V0QXBwbHk9eygpID0+IHNldElzQXBwbGllZCgwKX0gXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBwbG90Ontpc0FwcGxpZWR9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9ZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgUGxvdFBpZUEgZnJvbSAnLi9vY2N1cHkuanN4JztcbmltcG9ydCBQbG90UGllQiBmcm9tICcuL29jY3VweS1jb21wYW55LmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFDb21wIGZyb20gJy4vcGVyc29uYS1jb21wLmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFUb3BpYyBmcm9tICcuL3BlcnNvbmEtdG9waWMuanN4JztcblxuaW1wb3J0IFBsb3RCYXJDaGFydEEgZnJvbSAnLi90cmVuZC10b3BpeC5qc3gnO1xuaW1wb3J0IFBsb3RCYXJDaGFydEIgZnJvbSAnLi90cmVuZC1jb21wLmpzeCc7XG5cblxuXG5jb25zdCBDb250ZW50ID0gKHtwbG90LHZpc3VhbFR5cGUsdG9waWMsY29tcGFueSxyZXNldEFwcGx5fSkgPT4ge1xuXG5cbiAgICBjb25zdCBbY2xpY2tEYXRhLCBzZXRDbGlja0RhdGFdID0gdXNlU3RhdGUoKTsgLy8g44Kv44Oq44OD44Kv44OH44O844K/44Gu54q25oWLXG5cbiAgICBjb25zdCBoYW5kbGVQaWVDaGFydENsaWNrID0gKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwi44Kv44Oq44OD44Kv44GV44KM44Gf44OH44O844K/OlwiLCBkYXRhKTsgLy8g44OH44OQ44OD44Kw55SoXG4gICAgICBzZXRDbGlja0RhdGEoZGF0YSk7IC8vIOeKtuaFi+OCkuabtOaWsFxuICAgIH07XG4gICAgXG4gICAgXG4gIHJldHVybiAoXG4gICAgXG4gICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJiZy1saWdodFwiIHN0eWxlPXt7IHdpZHRoOicxMDB2aCcsaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgey8qIEZpcnN0IFJvdyAqL31cbiAgICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6JzEwMHZoJyxoZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgey8qIFBlcnNvbmEgR3JhcGggKi99XG4gICAgICAgIDxDb2wgbWQ9ezl9IHN0eWxlPXt7d2lkdGg6JzEwMHZoJyxoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgICAgPFBsb3RQZXJzb25hVG9waWNcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODmuODq+OCveODiuOBruWPr+imluWMllwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDJ2aCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYUNvbXBcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODmuODq+OCveODiuOBruWPr+imluWMllwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDJ2aCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICA8L0NvbD5cblxuICAgICAgICB7LyogUmlnaHQgQ29sdW1uIHdpdGggQ2FyZHMgKi99XG4gICAgICAgIDxDb2wgbWQ9ezN9IHN0eWxlPXt7IGhlaWdodDogJzQwJScgfX0+XG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAgICAgICAge1tcIkFCQ1wiLCBcIkRFRlwiLCBcIkdISVwiXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxDb2xcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIHhzPXsxMn0gLy8g5qiq5bmF5YWo5L2T44KS5L2/44GGXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4OiBcIjEgMSBhdXRvXCIgfX0gLy8g6auY44GV44KS5Z2H562J44Gr5YiG5YmyXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTc1IGgtNzVcIj4gey8qIOOCq+ODvOODieOCkuimquimgee0oOOBq+WPjuOCgeOCiyAqL31cbiAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+e2luZGV4ICsgMX08L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj57dGV4dH08L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1Jvdz5cbjwvQ29sPlxuXG5cbiAgXG4gICAgICA8L1Jvdz5cblxuICAgICAgey8qIFNlY29uZCBSb3cgKi99XG4gICAgICA8Um93IHN0eWxlPXt7IGhlaWdodDogJzQwdmgnIH19PlxuICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUFcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIG9uQ2xpY2tEYXRhPXtoYW5kbGVQaWVDaGFydENsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jga7jg4/jg7Pjg4njg6njg7zjgpLmuKHjgZlcbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfms6jnm67kvIHmpa3jga7mpa3nlYzjgavlr77jgZnjgovljaDmnInnjocnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgPFBsb3RCYXJDaGFydEFcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG5cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgIGRhdGE9e1tdfSAvLyDjg4fjg7zjgr/jgpLov73liqDjgZfjgabjgY/jgaDjgZXjgYRcbiAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICB0aXRsZTogJ0bjgr/jg7zjg6Djga7liIbluIMnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPik6KFxuICAgICAgICAgIDxQbG90QmFyQ2hhcnRCXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBjbGlja2RhdGE9e2NsaWNrRGF0YX0gLy8g44Kv44Oq44OD44Kv44OH44O844K/44KS5rih44GZXG4gICAgXG5cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgIGRhdGE9e1tdfSAvLyDjg4fjg7zjgr/jgpLov73liqDjgZfjgabjgY/jgaDjgZXjgYRcbiAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICB0aXRsZTogJ0bjgr/jg7zjg6Djga7liIbluIMnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPil9XG4gICAgICAgICAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH1mcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzeCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xucm9vdC5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IERhc2hib2FyZE5hdmJhciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBleHBhbmQ9XCJsZ1wiIHN0eWxlPXt7IGhlaWdodDogJzV2aCcgfX0gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPkRhc2hib2FyZDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cbiAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPkhvbWU8L05hdi5MaW5rPlxuICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3BhZ2UtMVwiIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+UGFnZSAxPC9OYXYuTGluaz5cbiAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9wYWdlLTJcIiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlBhZ2UgMjwvTmF2Lkxpbms+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmROYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuLy8gZmV0Y2hEYXRh6Zai5pWw77yaSlNPTuOBvuOBn+OBr+ODhuOCreOCueODiOW9ouW8j+OBq+WvvuW/nFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG5cbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIEpTT07lvaLlvI/jga7loLTlkIhcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgLy8g44OX44Os44O844Oz44OG44Kt44K544OI44Gu5aC05ZCIXG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7IC8vIOaUueihjOWMuuWIh+OCiuOBruODh+ODvOOCv+OCkumFjeWIl+OBqOOBl+OBpui/lOOBmVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjgrnjg5Hjg7zjgrnjg4fjg7zjgr/jgpLlr4booYzliJfjgavlpInmj5vjgZfjgIHooYzmlrnlkJHjga7lkozjgpLoqIjnrpdcbmNvbnN0IHByb2Nlc3NTcGFyc2VEYXRhID0gKHNwYXJzZURhdGEpID0+IHtcbiAgICBcbiAgY29uc3QgbnVtUm93cyA9IE1hdGgubWF4KC4uLnNwYXJzZURhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnJvdykpICsgMTtcbiAgY29uc3QgbnVtQ29scyA9IE1hdGgubWF4KC4uLnNwYXJzZURhdGEubWFwKGVudHJ5ID0+IGVudHJ5LmNvbCkpICsgMTtcblxuICBjb25zdCBtYXRyaXggPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Sb3dzIH0sICgpID0+IEFycmF5KG51bUNvbHMpLmZpbGwoMCkpO1xuICBzcGFyc2VEYXRhLmZvckVhY2goKHsgcm93LCBjb2wsIHZhbHVlIH0pID0+IHtcbiAgICBtYXRyaXhbcm93XVtjb2xdID0gdmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiBtYXRyaXgubWFwKHJvdyA9PiByb3cucmVkdWNlKChzdW0sIHZhbHVlKSA9PiBzdW0gKyB2YWx1ZSwgMCkpOyAvLyDooYzmlrnlkJHjga7lkozjgpLov5TjgZlcbn07XG5cbmNvbnN0IFBsb3RQaWVCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCwgb25DbGlja0RhdGEgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwi5rOo55uu44OI44OU44OD44Kv44Gr6Zai44GZ44KL54m56Kix44Gu5LyB5qWt5Y2g5pyJ546HXCIpO1xuICBjb25zdCBhbGxUb3BpYyA9IFsyLCAzLCAxLCAwLCA5LCA2LCA4LCA3LCAxMV07XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICAgIGNvbnN0IFRvcGljdG9JZCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOlwiMlwiLFwi5Zyw55uk5pS56ImvXCI6XCIzXCIsXCLjg4jjg7Pjg43jg6vmjpjliYpcIjpcIjFcIixcbiAgICAgICAgXCLlhY3pnIfmp4vpgKBcIjpcIjBcIixcIueuoeeQhuOCt+OCueODhuODoFwiOlwiOVwiLFwi5buD5qOE54mp5Yem55CGXCI6XCI2XCIsXCLlu7rnr4njg5Hjg43jg6tcIjpcIjhcIixcbiAgICAgICBcIuepuuiqv+OCt+OCueODhuODoFwiOlwiN1wiLFwi5o6Y5YmK6KOF572uXCI6XCIxMVwiLFwi5bu656+J6Kit6KiIXCI6XCIxMFwiLFwi44OI44Oz44ON44Or5ris6YePXCI6XCI1XCJ9O1xuICAvLyDjgq3jg6Pjg4Pjgrfjg6XnlKjjga7jgqrjg5bjgrjjgqfjgq/jg4hcbiAgY29uc3QgZGF0YUNhY2hlID0gdXNlUmVmKHtcbiAgICBjb21wYW5pZXM6IHt9LFxuICAgIHNwYXJzZURhdGE6IHt9XG4gIH0pO1xuXG4gIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhbGxUb3BpY3NEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIGFsbFRvcGljLm1hcChhc3luYyAodGFyZ2V0X2lkKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZSA9IDk7XG4gICAgICAgICAgY29uc3QgY29tcGFueVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0X2lkfS9jb21wYW55LnR4dGA7XG4gICAgICAgICAgY29uc3Qgc3BhcnNlRGF0YVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdG9waWMke3RhcmdldF9pZH0vcGVyc29uYT01L29jY3VweV90b3BpY18ke3RpbWV9Lmpzb25gO1xuXG4gICAgICAgICAgLy8g44Kt44Oj44OD44K344Ol44KS56K66KqNXG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXSkge1xuICAgICAgICAgICAgZGF0YUNhY2hlLmN1cnJlbnQuY29tcGFuaWVzW3RhcmdldF9pZF0gPSBhd2FpdCBmZXRjaERhdGEoY29tcGFueVVybCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudC5zcGFyc2VEYXRhW3RhcmdldF9pZF0pIHtcbiAgICAgICAgICAgIGRhdGFDYWNoZS5jdXJyZW50LnNwYXJzZURhdGFbdGFyZ2V0X2lkXSA9IGF3YWl0IGZldGNoRGF0YShzcGFyc2VEYXRhVXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjb21wYW5pZXMgPSBkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXTtcbiAgICAgICAgICBjb25zdCBzcGFyc2VEYXRhID0gZGF0YUNhY2hlLmN1cnJlbnQuc3BhcnNlRGF0YVt0YXJnZXRfaWRdO1xuXG4gICAgICAgICAgLy8g5q2j6KaP5YyW6Zai5pWwXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cikgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi6Z2e5paH5a2X5YiX44OH44O844K/44GM5qSc5Ye644GV44KM44G+44GX44GfOlwiLCBzdHIpO1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8g6Z2e5paH5a2X5YiX44OH44O844K/44Gv54Sh6KaWXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyLm5vcm1hbGl6ZShcIk5GQ1wiKS50cmltKCk7IC8vIOato+imj+WMluOBqOODiOODquODoOOCkumBqeeUqFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyDmraPopo/ljJbjgZfjgZ/jg4fjg7zjgr/jgafmr5TovINcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW5pZXMgPSBjb21wYW5pZXMubWFwKG5vcm1hbGl6ZVN0cmluZyk7XG4gICAgICAgICAgY29uc3Qgc2FuaXRpemVkQ29tcGFueSA9IG5vcm1hbGl6ZVN0cmluZyhjb21wYW55WzBdKTtcblxuICAgICAgICAgIGlmICghc2FuaXRpemVkQ29tcGFuaWVzLmluY2x1ZGVzKHNhbml0aXplZENvbXBhbnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke3Nhbml0aXplZENvbXBhbnl9XCIgbm90IGZvdW5kIGluIHRvcGljICR7dGFyZ2V0X2lkfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g44K544OR44O844K544OH44O844K/44KS5Yem55CGXG4gICAgICAgICAgY29uc3Qgcm93U3VtcyA9IHByb2Nlc3NTcGFyc2VEYXRhKHNwYXJzZURhdGEpO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gc2FuaXRpemVkQ29tcGFuaWVzLmluZGV4T2Yoc2FuaXRpemVkQ29tcGFueSk7XG5cbiAgICAgICAgICByZXR1cm4geyB0b3BpYzogdGFyZ2V0X2lkLCB2YWx1ZTogcm93U3Vtc1tjb21wYW55SW5kZXhdIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBhbGxUb3BpY3NEYXRhLmZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPT0gbnVsbCk7XG5cbiAgICAgIC8vIOato+imj+WMluOBqOOCveODvOODiFxuICAgICAgY29uc3QgdG90YWxWYWx1ZSA9IGZpbHRlcmVkRGF0YS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS52YWx1ZSwgMCk7XG4gICAgICBpZiAodG90YWxWYWx1ZSA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJObyB2YWxpZCBkYXRhIHRvIG5vcm1hbGl6ZS5cIik7XG4gICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRhID0gZmlsdGVyZWREYXRhLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGNhdGVnb3J5OiBpdGVtLnRvcGljLFxuICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSAvIHRvdGFsVmFsdWUsXG4gICAgICB9KSkuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xuXG4gICAgICBzZXRDaGFydERhdGEobm9ybWFsaXplZERhdGEuc2xpY2UoMCwgMTApKTsgLy8g5LiK5L2NMTDku7bjga7jgb/ooajnpLpcbiAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g5Yid5pyf44OH44O844K/6Kqt44G/6L6844G/44GodXBkYXRl44Gu5aSJ5pu05pmC44Gr44OH44O844K/44KS44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIikge1xuICAgICAgbG9hZERhdGEoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHZpc3VhbFR5cGVdKTtcblxuICBjb25zdCBoYW5kbGVQbG90Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRzICYmIGV2ZW50LnBvaW50c1swXSkge1xuICAgICAgY29uc3QgY2xpY2tkYXRhID0gZXZlbnQucG9pbnRzWzBdLmxhYmVsOyAvLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/pg6jliIbjga7jg6njg5njg6tcbiAgICAgIGNvbnN0IGxhYmVsID0gVG9waWN0b0lkW2NsaWNrZGF0YV1cbiAgICAgIGNvbnN0IHRvcGljaWQgPSBsYWJlbC5yZXBsYWNlKFwiVG9waWMgXCIsIFwiXCIpO1xuICAgICAgb25DbGlja0RhdGEoW3RvcGljaWRdKTsgLy8g6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Op44OZ44Or44KS6YCa55+lXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoaXRlbSA9PiAgSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV0pLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yc2NhbGU6IFwiVmlyaWRpc1wiIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBsb3RDbGlja30gLy8g44Kv44Oq44OD44Kv44Kk44OZ44Oz44OI44KS6L+95YqgXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44OG44Kt44K544OI44OH44O844K/44KS6Kqt44G/6L6844KA6Zai5pWwXG5jb25zdCBmZXRjaFRleHREYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90UGllQSA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSAwO1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRvcGljIHx8IFwiZGVmYXVsdF90b3BpY1wiOyAvLyDliJ3mnJ/lgKTjgajjgZfjgaZcImRlZmF1bHRfdG9waWNcIuOCkuioreWumlxuICAgICAgICBjb25zdCBkYXRhVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3BlcnNvbmE9NS9vY2N1cHlfbWVhbl8ke3RpbWV9Lmpzb25gO1xuICAgICAgICBjb25zdCBjb2x1bW5VcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC9hbHBoYS90b3BpYz0ke3RhcmdldElkfS9jb21wYW55LnR4dGA7XG5cbiAgICAgICAgLy8g44OH44O844K/5Y+W5b6XXG4gICAgICAgIGNvbnN0IFt2YWx1ZXMsIGxhYmVsc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKGRhdGFVcmwpLFxuICAgICAgICAgIGZldGNoVGV4dERhdGEoY29sdW1uVXJsKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy8g5YCk44Go44Op44OZ44Or44Gu57WE44G/5ZCI44KP44Gb44KS5L2c5oiQXG4gICAgICAgIGNvbnN0IGRhdGEgPSBsYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlcy52YWx1ZVtpbmRleF0gfHwgMCwgLy8g5YCk44GM44Gq44GE5aC05ZCI44GvMFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8g5YCk44Gr5Z+644Gl44GE44Gm6ZmN6aCG44Gr44K944O844OI44GX44Gm5LiK5L2NMTDku7bjgpLmir3lh7pcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGRhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke0lkdG9Ub3BpY1t0YXJnZXRJZF1944Gr6Zai44GZ44KL54m56Kix44Gu5LyB5qWt5Y2g5pyJ546HYCk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODgeODo+ODvOODiOODh+ODvOOCv+OBruWHpueQhuS4reOBq+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDliJ3lm57jg6zjg7Pjg4Djg6rjg7PjgrDmmYLjgahgdXBkYXRlYOWkieabtOaZguOBq+ODh+ODvOOCv+OCkuODreODvOODiVxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgb25SZW5kZXJlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5sYWJlbCksXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiY2xvY2t3aXNlXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgY29sb3JzY2FsZTogXCJWaXJpZGlzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNzAsIGI6IDUsIGw6IDQwLCByOiA1MCB9LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQaWVBO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Db21wID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCB9KSA9PiB7XG5jb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCJ9O1xuICBjb25zdCBhcnJvd19jb2xvciA9IFsnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJ107XG5cbiAgY29uc3QgW3ByZXBhcmVkRGF0YSwgc2V0UHJlcGFyZWREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwi5LyB5qWt44Gu56uL44Gh5L2N572uXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlcGFyZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxQcm9taXNlcyA9ICh0b3BpYyB8fCBbXCJkZWZhdWx0X3RvcGljXCJdKS5tYXAoYXN5bmMgKHRhcmdldF9pZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b3BpY1wiLHRhcmdldF9pZClcbiAgICAgICAgICBjb25zdCBjb2x1bW5QYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRfaWR9L2NvbXBhbnkudHh0YDtcbiAgICAgICAgICBjb25zdCBjb21wYW5pZXMgPSBhd2FpdCBsb2FkQ29tcGFuaWVzKGNvbHVtblBhdGgpO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW5pZXMucmVkdWNlKChhY2MsIHZhbHVlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGFjY1t2YWx1ZV0gPSBpZHg7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIGNvbnN0IG5ld1NlYXJjaExpc3QgPSBBcnJheS5pc0FycmF5KGNvbXBhbnkpID8gY29tcGFueSA6IFtjb21wYW55XTtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJlZFNlYXJjaExpc3QgPSBuZXdTZWFyY2hMaXN0LmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSBpbiBjb21wYW55RGljdCk7XG5cbiAgICAgICAgICBjb25zdCBub2RlX2FscGhhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsdGVyZWRTZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcbiAgICAgICAgICBjb25zdCBub2RlX2JldGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWx0ZXJlZFNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuXG4gICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBqKSA9PiBqICsgNSkubWFwKGFzeW5jIChwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRfaWR9L3Rlc3Rfb3B0aW1pemVfJHtwfS50eHRgO1xuICAgICAgICAgICAgY29uc3QgeyBhbHBoYV9saSwgYmV0YV9saSB9ID0gYXdhaXQgdG9MaXN0KHBhcmFtZXRlclBhdGgpO1xuXG4gICAgICAgICAgICBmaWx0ZXJlZFNlYXJjaExpc3QuZm9yRWFjaCgoaywgaikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW5pZXMuaW5kZXhPZihrKTtcbiAgICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwIC0gNV0gPSBhbHBoYV9saVtpZHhdO1xuICAgICAgICAgICAgICBub2RlX2JldGFbal1bcCAtIDVdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgICByZXR1cm4geyBub2RlX2FscGhhLCBub2RlX2JldGEsIGZpbHRlcmVkU2VhcmNoTGlzdCB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpO1xuXG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQWxwaGEgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5ub2RlX2FscGhhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRCZXRhID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQubm9kZV9iZXRhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRTZWFyY2hMaXN0ID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQuZmlsdGVyZWRTZWFyY2hMaXN0KTtcblxuICAgICAgICBzZXRQcmVwYXJlZERhdGEoeyBhbHBoYTogY29tYmluZWRBbHBoYSwgYmV0YTogY29tYmluZWRCZXRhLCBzZWFyY2hMaXN0OiBjb21iaW5lZFNlYXJjaExpc3QgfSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnl944Gu5qWt55WM44Gn44Gu56uL44Gh5L2N572uYCk7IC8vIOWIneacn+OCv+OCpOODiOODq+OCkuioreWumlxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+a6luWCmeS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDliJ3mnJ/jg6zjg7Pjg4Djg6rjg7PjgrDmmYLjgavjgoLjg4fjg7zjgr/jgpLmupblgplcbiAgICBwcmVwYXJlRGF0YSgpO1xuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1cGRhdGUgJiYgcHJlcGFyZWREYXRhKSB7XG4gICAgICBjb25zdCBwbG90RGF0YSA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4gKHtcbiAgICAgICAgeDogcHJlcGFyZWREYXRhLmFscGhhW2pdLFxuICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXSxcbiAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgICAgdGV4dDogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0sXG4gICAgICAgIHRleHRwb3NpdGlvbjogXCJ0b3AgbGVmdFwiLFxuICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgIGNvbG9yOiBhcnJvd19jb2xvcltqICUgYXJyb3dfY29sb3IubGVuZ3RoXSxcbiAgICAgICAgICBzaXplOiA1LFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiBJZHRvVG9waWNbdG9waWNbal1dLFxuICAgICAgfSkpO1xuXG4gICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBwcmVwYXJlZERhdGEuc2VhcmNoTGlzdC5mbGF0TWFwKChfLCBqKSA9PlxuICAgICAgICBBcnJheSg0KS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgICB4OiBwcmVwYXJlZERhdGEuYWxwaGFbal1baSArIDFdLFxuICAgICAgICAgIHk6IHByZXBhcmVkRGF0YS5iZXRhW2pdW2kgKyAxXSxcbiAgICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgICAgeXJlZjogJ3knLFxuICAgICAgICAgIGF4cmVmOiAneCcsXG4gICAgICAgICAgYXlyZWY6ICd5JyxcbiAgICAgICAgICBheDogcHJlcGFyZWREYXRhLmFscGhhW2pdW2ldLFxuICAgICAgICAgIGF5OiBwcmVwYXJlZERhdGEuYmV0YVtqXVtpXSxcbiAgICAgICAgICBhcnJvd2NvbG9yOiBhcnJvd19jb2xvcltqICUgYXJyb3dfY29sb3IubGVuZ3RoXSxcbiAgICAgICAgICBhcnJvd3NpemU6IDEuMixcbiAgICAgICAgICBhcnJvd3dpZHRoOiAxLjIsXG4gICAgICAgICAgYXJyb3doZWFkOiA1LFxuICAgICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgICAgfSkpXG4gICAgICApO1xuXG4gICAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG5cbiAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCBwcmVwYXJlZERhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdncmV5JyB9LFxuICAgICAgICAgICAgeHJlZjogJ3BhcGVyJyxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICByYW5nZTogWzAsIDEuMDFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHJhbmdlOiBbMCwgMS4wMV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA0MCwgcjogNTAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Db21wO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Ub3BpYyA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBhcnJvd19jb2xvciA9IFsnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJ107XG4gIGNvbnN0IFtmaWdEYXRhLCBzZXRGaWdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fubm90YXRpb25zLCBzZXRBbm5vdGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb21wYW55TGlzdCwgc2V0Q29tcGFueUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoTGlzdCwgc2V0U2VhcmNoTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG5cbiAgLy8g5Yid5pyf44OH44O844K/44Gu44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0X2lkfS9jb21wYW55LnR4dGA7XG5cbiAgICAgIGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDb21wYW55TGlzdChkYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYOalreeVjOWGheOBp+OBruS8gealreOBrueri+OBoeS9jee9rmApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWNdKTtcblxuICAvLyDmpJzntKLlr77osaHjga7jg5XjgqPjg6vjgr/jg6rjg7PjgrBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29tcGFueUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW55TGlzdC5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICBzZXRTZWFyY2hMaXN0KG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KSk7XG4gICAgfVxuICB9LCBbY29tcGFueUxpc3QsIGNvbXBhbnldKTtcblxuICAvLyDjg4fjg7zjgr/jga7mj4/nlLtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXBkYXRlICYmIHNlYXJjaExpc3QubGVuZ3RoID4gMCAmJiB0b3BpYykge1xuICAgICAgY29uc3QgdGFyZ2V0X2lkID0gdG9waWM7IC8vIOODiOODlOODg+OCr0lE44Gu6Kit5a6aXG4gICAgICBjb25zdCBub2RlX2FscGhhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG4gICAgICBjb25zdCBub2RlX2JldGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcblxuICAgICAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBpKSA9PiBpICsgNSkubWFwKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC9hbHBoYS90b3BpYz0ke3RhcmdldF9pZH0vdGVzdF9vcHRpbWl6ZV8ke3B9LnR4dGA7XG4gICAgICAgIHJldHVybiB0b0xpc3QocGFyYW1ldGVyUGF0aCkudGhlbigoeyBhbHBoYV9saSwgYmV0YV9saSB9KSA9PiB7XG4gICAgICAgICAgc2VhcmNoTGlzdC5mb3JFYWNoKChrLCBqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW55TGlzdC5pbmRleE9mKGspO1xuICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwIC0gNV0gPSBhbHBoYV9saVtpZHhdO1xuICAgICAgICAgICAgbm9kZV9iZXRhW2pdW3AgLSA1XSA9IGJldGFfbGlbaWR4XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBwbG90RGF0YSA9IHNlYXJjaExpc3QubWFwKChrLCBqKSA9PiAoe1xuICAgICAgICAgIHg6IG5vZGVfYWxwaGFbal0sXG4gICAgICAgICAgeTogbm9kZV9iZXRhW2pdLFxuICAgICAgICAgIG1vZGU6IFwibGluZXMrbWFya2Vycyt0ZXh0XCIsXG4gICAgICAgICAgdGV4dDogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0sXG4gICAgICAgICAgdGV4dHBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgY29sb3I6IGFycm93X2NvbG9yW2ogJSBhcnJvd19jb2xvci5sZW5ndGhdLFxuICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IGssXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBzZWFyY2hMaXN0LmZsYXRNYXAoKF8sIGopID0+XG4gICAgICAgICAgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgICAgICB4OiBub2RlX2FscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgICAgIHk6IG5vZGVfYmV0YVtqXVtpICsgMV0sXG4gICAgICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgICAgICB5cmVmOiAneScsXG4gICAgICAgICAgICBheDogbm9kZV9hbHBoYVtqXVtpXSxcbiAgICAgICAgICAgIGF5OiBub2RlX2JldGFbal1baV0sXG4gICAgICAgICAgICBheHJlZjogJ3gnLFxuICAgICAgICAgICAgYXlyZWY6ICd5JyxcbiAgICAgICAgICAgIGFycm93Y29sb3I6IGFycm93X2NvbG9yW2ogJSBhcnJvd19jb2xvci5sZW5ndGhdLFxuICAgICAgICAgICAgYXJyb3dzaXplOiAxLjIsXG4gICAgICAgICAgICBhcnJvd3dpZHRoOiAxLjIsXG4gICAgICAgICAgICBhcnJvd2hlYWQ6IDUsXG4gICAgICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICAgICAgfSkpXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHNlYXJjaExpc3QsIGNvbXBhbnlMaXN0LCB0b3BpY10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2dyZXknIH0sXG4gICAgICAgICAgICB4cmVmOiAncGFwZXInLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHJhbmdlOiBbMCwgMS4wMV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgcmFuZ2U6IFswLCAxLjAxXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDQwLCByOiA1MCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGJvcmRlcndpZHRoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBlcnNvblRvcGljO1xuIiwiLy8gU2lkZWJhci5qc3hcbmltcG9ydCBSZWFjdCAseyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENvbCwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgU2lkZWJhciA9ICh7IG9uQXBwbHksIHZpc3VhbFR5cGUsIG9uVmlzdWFsVHlwZUNoYW5nZSwgdG9waWNMaXN0LCBjb21wYW55TGlzdCwgc2VsZWN0ZWRDb21wYW5pZXMsIHNlbGVjdGVkVG9waWNzLCBvbkNoYW5nZVRvcGljLCBvbkNoYW5nZUNvbXBhbnkgfSkgPT4ge1xuICBjb25zdCBbaW5wdXRUeXBlLCBzZXRJbnB1dFR5cGVdID0gdXNlU3RhdGUoW1wicmFkaW9cIixcImNoZWNrYm94XCJdKTsgLy8g5Yid5pyf5YCk44GvIFwiY2hlY2tib3hcIlxuICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIG9uVmlzdWFsVHlwZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZT09XCJvbmUtY29tcFwiKXtcbiAgICAgICAgc2V0SW5wdXRUeXBlKFtcImNoZWNrYm94XCIsXCJyYWRpb1wiXSl9XG4gICAgICBlbHNle1xuICAgICAgICBzZXRJbnB1dFR5cGUoW1wicmFkaW9cIixcImNoZWNrYm94XCJdKVxuICAgICAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0VHlwZSk7XG4gIH07XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcbiAgXG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgcGFkZGluZzogJzEwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdiZy1saWdodCcgfX0+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBmb250LWl0YWxpY1wiIHN0eWxlPXt7IGhlaWdodDogJzUlJyB9fT5cbiAgICAgICAgPENvbCBzbT17Nn0+XG4gICAgICAgICAgPGg1IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwJScgfX0gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgIOWPr+imluWMluadoeS7tlxuICAgICAgICAgIDwvaDU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNtPXs0fT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpZD1cImFwcGx5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHl9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNSUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZSByb3VuZGVkLXBpbGwgYmctZGFya1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg5Y+v6KaW5YyWXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIHsvKiBBY2NvcmRpb24gKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHRleHQtZGFuZ2VyIGZvbnQtaXRhbGljXCIgc3R5bGU9e3sgaGVpZ2h0OiAnODAlJyB9fT5cbiAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiIGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICB7LyogVmlzdWFsaXphdGlvbiBUeXBlICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjBcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+5Y+v6KaW5YyW44K/44Kk44OXPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkID0gXCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCJ9IC8vIOODh+ODleOCqeODq+ODiOODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib25lLWNvbXBcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIj7kuIDnpL7jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9uZS10b3BpY1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXgtMlwiPuS4gOOBpOOBruODiOODlOODg+OCr+OBq+azqOebrjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG4gICAgICAgICAgey8qIFRvcGljIFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIxXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlRvcGljPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICB7dG9waWNMaXN0Lm1hcCgodG9waWMpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dG9waWN9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVswXX0gXG4gICAgICAgICAgICAgICAgICAgIGlkID0ge3RvcGljfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFRvcGljcy5pbmNsdWRlcyh0b3BpYyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVRvcGljKHRvcGljLGlucHV0VHlwZVswXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3BpY1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RvcGljfT57SWR0b1RvcGljW3RvcGljXX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBDb21wYW55IFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIyXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkNvbXBhbnk8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIHtjb21wYW55TGlzdC5tYXAoKGNvbXBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29tcGFueX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aW5wdXRUeXBlWzFdfSBcbiAgICAgICAgICAgICAgICAgICAgaWQgPSB7Y29tcGFueX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDb21wYW5pZXMuaW5jbHVkZXMoY29tcGFueSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUNvbXBhbnkoY29tcGFueSxpbnB1dFR5cGVbMV0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdjb21wYW55J1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtjb21wYW55fT57Y29tcGFueX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/lj5blvpfplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RCYXJDaGFydEIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBjbGlja2RhdGEsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiRknjga7liIbluINcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDk7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gY2xpY2tkYXRhIHx8IHRvcGljWzBdIHx8IFwiZGVmYXVsdF90b3BpY1wiOyAvLyBgY2xpY2tkYXRhYOOCkuWEquWFiFxuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vdHJlbmQvb3V0cHV0XyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGNvbXBhbnlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vY29tcGFueS50eHRgO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkuWPluW+l1xuICAgICAgICBjb25zdCBbb3JpZ2luYWwsIGNvbXBhbnlMaXN0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEocGF0aCksXG4gICAgICAgICAgbG9hZENvbXBhbmllcyhjb21wYW55UGF0aCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICghY29tcGFueUxpc3QuaW5jbHVkZXMoY29tcGFueVswXSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke2NvbXBhbnlbMF19XCIgbm90IGZvdW5kLmApO1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29tcGFueeOBruODh+ODvOOCv+WPluW+l1xuICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBjb21wYW55TGlzdC5pbmRleE9mKGNvbXBhbnlbMF0pO1xuICAgICAgICBjb25zdCBjb21wYW55RGF0YSA9IG9yaWdpbmFsW2NvbXBhbnlJbmRleF07XG4gICAgICAgIGlmICghY29tcGFueURhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIGRhdGEgZm91bmQgZm9yIGNvbXBhbnkgaW5kZXggXCIke2NvbXBhbnlJbmRleH1cIi5gKTtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpTT07jg4fjg7zjgr/jga7mlbTlvaJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKGNvbXBhbnlEYXRhKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICBjYXRlZ29yeToga2V5LFxuICAgICAgICAgIHZhbHVlOiBrZXkgPT09IFwiXCIgPyAwIDogcGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDAgLCAvLyDlgKTjgpLmlbDlgKTjgavlpInmj5vvvIjjgarjgYTloLTlkIjjga8w77yJXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLpmY3poIbjgavjgr3jg7zjg4jjgZfjgabkuIrkvY0xMOS7tuOCkuWPluW+l1xuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZm9ybWF0dGVkRGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueVswXX3jga5GSeOBruWIhuW4g2ApO1xuICAgICAgICBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBgY2xpY2tkYXRhYOOBruWApOOBjOWkieWMluOBl+OBn+OBi+OCkuaYjuekuueahOOBq+avlOi8g1xuICAgIGlmIChcbiAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiAmJlxuICAgICAgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwIHx8IGNsaWNrZGF0YSlcbiAgICApIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgSlNPTi5zdHJpbmdpZnkoY2xpY2tkYXRhKSwgdXBkYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gPiBcbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLCAvLyDmqKrlkJHjgY3mo5LjgrDjg6njg5XnlKjjga7lgKTvvIjpgIbpoIbvvIlcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSwgLy8g44Kr44OG44K044Oq77yI6YCG6aCG77yJXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsIC8vIOaoquWQkeOBjeajkuOCsOODqeODlVxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sIC8vIOajkuOBruiJslxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzdmhcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RCYXJDaGFydEI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/lj5blvpfplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5cblxuY29uc3QgUGxvdEJhckNoYXJ0QSA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiRknjga7liIbluIMhXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSA5O1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRvcGljWzBdOyAvLyBjbGlja2RhdGHjgpLlhKrlhYhcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0SWR9L3RyZW5kL291dHB1dF90b3BpY18ke3RpbWV9Lmpzb25gO1xuXG5cbiAgICAgICAgLy8g44OH44O844K/44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IFtvcmlnaW5hbF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKHBhdGgpLFxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImFcIixvcmlnaW5hbCk7XG4gXG5cbiAgICAgICAgLy8gSlNPTuODh+ODvOOCv+OBruaVtOW9olxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gT2JqZWN0LmVudHJpZXMob3JpZ2luYWwpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgIFxuICAgICAgICAgIGNhdGVnb3J5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IGtleSA9PT0gXCJcIiA/IDAgOiBwYXJzZUZsb2F0KHZhbHVlKSAqIDEwMCB8fCAwLCBcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFcIixmb3JtYXR0ZWREYXRhKTtcblxuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBmb3JtYXR0ZWREYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgRknjga7liIbluINgKTtcbiAgICAgICAgY29uc29sZS5sb2coY2hhcnREYXRhKTtcbiAgICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwICkpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgdXBkYXRlXSk7IC8vIGNsaWNrZGF0YSDjgpLkvp3lrZjplqLkv4Ljgavov73liqBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzdmhcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19ID5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgeTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaFwiLFxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogXCJGSVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDgwLCByOiA1MCB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzdmhcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RCYXJDaGFydEE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteV9hcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbXlfYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWJvb3RzdHJhcF9lc21fQWNjb3JkaW9uX2pzLW5vZGVfbW9kdWxlc19yZWFjdC1ib290c3RyYXBfZXNtX0J1dHRvbi00YTVkMTVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiRGFzaGJvYXJkTmF2YmFyIiwiU2lkZWJhciIsIkNvbnRlbnQiLCJBcHAiLCJhcnJvd0NvbG9yIiwiY29tcGFueUxpc3QiLCJ0b3BpY0xpc3QiLCJ2aXN1YWxUeXBlIiwic2V0VmlzdWFsVHlwZSIsImhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UiLCJ2YWx1ZSIsImlzQXBwbGllZCIsInNldElzQXBwbGllZCIsImhhbmRsZUFwcGx5Iiwic2VsZWN0ZWRDb21wYW5pZXMiLCJzZXRTZWxlY3RlZENvbXBhbmllcyIsInNlbGVjdGVkVG9waWNzIiwic2V0U2VsZWN0ZWRUb3BpY3MiLCJ0b2dnbGVTZWxlY3Rpb24iLCJpdGVtIiwic2V0U2VsZWN0ZWQiLCJidXR0b210eXBlIiwiY29uc29sZSIsImxvZyIsInByZXZTZWxlY3RlZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaSIsIkNvbXBhbnlDaGVja2JveENoYW5nZSIsImNvbXBhbnkiLCJUb3BpY0NoZWNrYm94Q2hhbmdlIiwidG9waWMiLCJyZXNldElzQXBwbGllZCIsImNyZWF0ZUVsZW1lbnQiLCJmbHVpZCIsImNsYXNzTmFtZSIsIm1kIiwib25BcHBseSIsIm9uVmlzdWFsVHlwZUNoYW5nZSIsIm9uQ2hhbmdlVG9waWMiLCJvbkNoYW5nZUNvbXBhbnkiLCJzdHlsZSIsImhlaWdodCIsInBsb3QiLCJyZXNldEFwcGx5IiwiQ2FyZCIsIlBsb3RQaWVBIiwiUGxvdFBpZUIiLCJQbG90UGVyc29uYUNvbXAiLCJQbG90UGVyc29uYVRvcGljIiwiUGxvdEJhckNoYXJ0QSIsIlBsb3RCYXJDaGFydEIiLCJfcmVmIiwiY2xpY2tEYXRhIiwic2V0Q2xpY2tEYXRhIiwiaGFuZGxlUGllQ2hhcnRDbGljayIsImRhdGEiLCJ3aWR0aCIsInVwZGF0ZSIsIm9uUmVuZGVyZWQiLCJsYXlvdXQiLCJ0aXRsZSIsIm1hcCIsInRleHQiLCJpbmRleCIsImtleSIsInhzIiwiZmxleCIsIkJvZHkiLCJUaXRsZSIsIlRleHQiLCJvbkNsaWNrRGF0YSIsImNsaWNrZGF0YSIsIlJlYWN0RE9NIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiU3RyaWN0TW9kZSIsIk5hdmJhciIsIk5hdiIsImJnIiwiZXhwYW5kIiwiQnJhbmQiLCJocmVmIiwiTGluayIsInVzZVJlZiIsIlBsb3QiLCJmZXRjaERhdGEiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsImNvbnRlbnRUeXBlIiwiaGVhZGVycyIsImdldCIsImpzb24iLCJzcGxpdCIsImxpbmUiLCJ0cmltIiwiZXJyb3IiLCJwcm9jZXNzU3BhcnNlRGF0YSIsInNwYXJzZURhdGEiLCJudW1Sb3dzIiwiTWF0aCIsIm1heCIsImVudHJ5Iiwicm93IiwibnVtQ29scyIsImNvbCIsIm1hdHJpeCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImZpbGwiLCJmb3JFYWNoIiwicmVkdWNlIiwic3VtIiwiX3JlZjIiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJzZXRUaXRsZSIsImFsbFRvcGljIiwiSWR0b1RvcGljIiwiVG9waWN0b0lkIiwiZGF0YUNhY2hlIiwiY29tcGFuaWVzIiwibG9hZERhdGEiLCJhbGxUb3BpY3NEYXRhIiwiUHJvbWlzZSIsImFsbCIsInRhcmdldF9pZCIsInRpbWUiLCJjb21wYW55VXJsIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJzcGFyc2VEYXRhVXJsIiwiY3VycmVudCIsIm5vcm1hbGl6ZVN0cmluZyIsInN0ciIsIndhcm4iLCJub3JtYWxpemUiLCJzYW5pdGl6ZWRDb21wYW5pZXMiLCJzYW5pdGl6ZWRDb21wYW55Iiwicm93U3VtcyIsImNvbXBhbnlJbmRleCIsImluZGV4T2YiLCJmaWx0ZXJlZERhdGEiLCJ0b3RhbFZhbHVlIiwibm9ybWFsaXplZERhdGEiLCJjYXRlZ29yeSIsInNvcnQiLCJhIiwiYiIsInNsaWNlIiwiaGFuZGxlUGxvdENsaWNrIiwiZXZlbnQiLCJwb2ludHMiLCJsYWJlbCIsInRvcGljaWQiLCJyZXBsYWNlIiwidHlwZSIsInZhbHVlcyIsImxhYmVscyIsIlN0cmluZyIsImRpcmVjdGlvbiIsIm1hcmtlciIsImNvbG9yc2NhbGUiLCJzaG93bGVnZW5kIiwicGxvdF9iZ2NvbG9yIiwicGFwZXJfYmdjb2xvciIsIm1hcmdpbiIsInQiLCJsIiwiciIsIm9uQ2xpY2siLCJmZXRjaFRleHREYXRhIiwibG9hZENoYXJ0RGF0YSIsInRhcmdldElkIiwiZGF0YVVybCIsImNvbHVtblVybCIsInNvcnRlZERhdGEiLCJsb2FkQ29tcGFuaWVzIiwiZGF0YVBhdGgiLCJ0b0xpc3QiLCJsaW5lcyIsImFscGhhX2xpIiwicGFyc2VGbG9hdCIsImJldGFfbGkiLCJQbG90UGVyc29uQ29tcCIsImFycm93X2NvbG9yIiwicHJlcGFyZWREYXRhIiwic2V0UHJlcGFyZWREYXRhIiwiZmlnRGF0YSIsInNldEZpZ0RhdGEiLCJhbm5vdGF0aW9ucyIsInNldEFubm90YXRpb25zIiwicHJlcGFyZURhdGEiLCJhbGxQcm9taXNlcyIsImNvbHVtblBhdGgiLCJjb21wYW55RGljdCIsImFjYyIsImlkeCIsIm5ld1NlYXJjaExpc3QiLCJpc0FycmF5IiwiZmlsdGVyZWRTZWFyY2hMaXN0Iiwibm9kZV9hbHBoYSIsIm5vZGVfYmV0YSIsInByb21pc2VzIiwiXyIsImoiLCJwIiwicGFyYW1ldGVyUGF0aCIsImsiLCJyZXN1bHRzIiwiY29tYmluZWRBbHBoYSIsImZsYXRNYXAiLCJyZXN1bHQiLCJjb21iaW5lZEJldGEiLCJjb21iaW5lZFNlYXJjaExpc3QiLCJhbHBoYSIsImJldGEiLCJzZWFyY2hMaXN0IiwicGxvdERhdGEiLCJ4IiwieSIsIm1vZGUiLCJ0ZXh0cG9zaXRpb24iLCJzeW1ib2wiLCJjb2xvciIsInNpemUiLCJuYW1lIiwicGxvdEFubm90YXRpb25zIiwieHJlZiIsInlyZWYiLCJheHJlZiIsImF5cmVmIiwiYXgiLCJheSIsImFycm93Y29sb3IiLCJhcnJvd3NpemUiLCJhcnJvd3dpZHRoIiwiYXJyb3doZWFkIiwic2hvd2Fycm93IiwiZm9udCIsInhhbmNob3IiLCJ4YXhpcyIsInJhbmdlIiwibGluZWNvbG9yIiwibGluZXdpZHRoIiwiZ3JpZGNvbG9yIiwiZ3JpZHdpZHRoIiwiZ3JpZGRhc2giLCJ5YXhpcyIsImxlZ2VuZCIsImJnY29sb3IiLCJib3JkZXJjb2xvciIsImJvcmRlcndpZHRoIiwiUGxvdFBlcnNvblRvcGljIiwic2V0Q29tcGFueUxpc3QiLCJzZXRTZWFyY2hMaXN0IiwidGhlbiIsIkFjY29yZGlvbiIsIkJ1dHRvbiIsImlucHV0VHlwZSIsInNldElucHV0VHlwZSIsImhhbmRsZVJhZGlvQ2hhbmdlIiwidGFyZ2V0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInNtIiwibWFyZ2luVG9wIiwiaWQiLCJkZWZhdWx0QWN0aXZlS2V5IiwiSXRlbSIsImV2ZW50S2V5IiwiSGVhZGVyIiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaHRtbEZvciIsInBhdGgiLCJjb21wYW55UGF0aCIsIm9yaWdpbmFsIiwiY29tcGFueURhdGEiLCJmb3JtYXR0ZWREYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXZlcnNlIiwib3JpZW50YXRpb24iLCJtaXJyb3IiLCJjb25maWciLCJyZXNwb25zaXZlIl0sInNvdXJjZVJvb3QiOiIifQ==