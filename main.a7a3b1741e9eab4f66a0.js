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
/* harmony import */ var _sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.jsx */ "./src/sidebar.jsx");
/* harmony import */ var _content_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.jsx */ "./src/content.jsx");
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");





const App = () => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user
  } = (0,_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_3__.useAuth0)(); // Auth0の情報を取得
  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const handleLogin = async () => {
    try {
      await loginWithRedirect({
        connection: 'Username-Password-Authentication',
        username,
        password
      });
    } catch (error) {
      console.error("ログインエラー:", error.message);
    }
  };
  const arrowColor = ['#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF', '#3E9E6F', '#F38181', '#545E75', '#FFB627', '#577590'];
  const companyList = ['鹿島建設株式会社', '株式会社大林組', '清水建設株式会社', '大成建設株式会社', '株式会社竹中工務店', '株式会社長谷工コーポレーション', '前田建設工業株式会社', '五洋建設株式会社', '株式会社フジタ', '戸田建設株式会社', '株式会社熊谷組'];
  const topicList = ['0', '1', '2', '3', '5', '6', '7', '8', '9', '11'];
  const [visualType, setVisualType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('one-topic');
  const [isApplied, setIsApplied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [selectedCompanies, setSelectedCompanies] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['株式会社熊谷組']);
  const [selectedTopics, setSelectedTopics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['0']);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSelectedCompanies(['株式会社熊谷組']);
    setSelectedTopics(['0']);
  }, [visualType]);
  const resetIsApplied = () => {
    setIsApplied(0);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "react-content",
    fluid: true,
    className: "bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, !isAuthenticated ?
  /*#__PURE__*/
  // ログインしていない場合
  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "\u30ED\u30B0\u30A4\u30F3\u304C\u5FC5\u8981\u3067\u3059"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary",
    onClick: handleLogin
  }, "\u30ED\u30B0\u30A4\u30F3"))) :
  /*#__PURE__*/
  // ログインしている場合
  react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    onChangeCompany: CompanyCheckboxChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    resetApply: resetIsApplied
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "plot: ", isApplied)))));
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
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      height: '50%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    md: 9,
    style: {
      height: '100%',
      marginLeft: "0%"
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
      height: '45%'
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
      height: '50%'
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _app_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.jsx */ "./src/app.jsx");
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");





// Auth0の設定
const domain = "dev-l3bgegnjjxwx2od4.us.auth0.com"; // Auth0のドメイン

const clientId = "ivtgx1arN5J09Zw8yPCiEkpQ1DZ3P22e"; // Auth0のクライアントID

react_dom__WEBPACK_IMPORTED_MODULE_1__.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_3__.Auth0Provider, {
  domain: domain,
  clientId: clientId,
  authorizationParams: {
    redirect_uri: "https://hiroemon-m.github.io/my-app/" // 認証後にリダイレクトするURL
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null))), document.getElementById("root"));

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
          color: colormap[IdtoTopic[topic[j]]],
          size: 5
        },
        name: IdtoTopic[topic[j]]
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
        arrowcolor: colormap[IdtoTopic[topic[j]]],
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
        range: [0, 1.03],
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
        // Y軸からの距離（見やすくするため）
        range: [-0.1, 1.1],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [-0.1, 0.5, 1],
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
    }
  }, [update, searchList, companyList, topic]);
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
        range: [0, 1.03],
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
        // Y軸からの距離（見やすくするため）
        range: [-0.1, 1.1],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [-0.1, 0.5, 1],
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
            value: key === "" ? 0 : parseFloat(value) * 100 || 0 // 値を数値に変換（ない場合は0）
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
      marginTop: "3%",
      marginBottom: "3%",
      width: "100%",
      height: "94%"
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
      }
    },
    style: {
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
      }
    },
    style: {
      width: "100%",
      height: "100%"
    } // 必ず全体サイズを親要素に合わせ
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_auth0_auth0-react_dist_auth0-react_esm_js-node_modules_react-bootstrap_e-94d5f0"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzdCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvYXBwLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvY29udGVudC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9vY2N1cHktY29tcGFueS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtdG9waWMuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9zaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RyZW5kLXRvcGl4LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyLmpzeCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQuanN4JztcbmltcG9ydCB7IHVzZUF1dGgwIH0gZnJvbSAnQGF1dGgwL2F1dGgwLXJlYWN0JztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCB7IGxvZ2luV2l0aFJlZGlyZWN0LCBsb2dvdXQsIGlzQXV0aGVudGljYXRlZCwgdXNlciB9ID0gdXNlQXV0aDAoKTsgLy8gQXV0aDDjga7mg4XloLHjgpLlj5blvpdcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBsb2dpbldpdGhSZWRpcmVjdCh7XG4gICAgICAgIGNvbm5lY3Rpb246ICdVc2VybmFtZS1QYXNzd29yZC1BdXRoZW50aWNhdGlvbicsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44Ot44Kw44Kk44Oz44Ko44Op44O8OlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXJyb3dDb2xvciA9IFtcbiAgICAnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJyxcbiAgICAnIzNFOUU2RicsICcjRjM4MTgxJywgJyM1NDVFNzUnLCAnI0ZGQjYyNycsICcjNTc3NTkwJyxcbiAgXTtcbiAgY29uc3QgY29tcGFueUxpc3QgPSBbXG4gICAgJ+m5v+WztuW7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7lpKfmnpfntYQnLCAn5riF5rC05bu66Kit5qCq5byP5Lya56S+JywgJ+Wkp+aIkOW7uuioreagquW8j+S8muekvicsXG4gICAgJ+agquW8j+S8muekvuerueS4reW3peWLmeW6lycsICfmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7MnLCAn5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+JyxcbiAgICAn5LqU5rSL5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvuODleOCuOOCvycsICfmiLjnlLDlu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+54aK6LC357WEJyxcbiAgXTtcbiAgY29uc3QgdG9waWNMaXN0ID0gWycwJywgJzEnLCAnMicsICczJywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMSddO1xuXG4gIGNvbnN0IFt2aXN1YWxUeXBlLCBzZXRWaXN1YWxUeXBlXSA9IHVzZVN0YXRlKCdvbmUtdG9waWMnKTtcbiAgY29uc3QgW2lzQXBwbGllZCwgc2V0SXNBcHBsaWVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2VsZWN0ZWRDb21wYW5pZXMsIHNldFNlbGVjdGVkQ29tcGFuaWVzXSA9IHVzZVN0YXRlKFsn5qCq5byP5Lya56S+54aK6LC357WEJ10pO1xuICBjb25zdCBbc2VsZWN0ZWRUb3BpY3MsIHNldFNlbGVjdGVkVG9waWNzXSA9IHVzZVN0YXRlKFsnMCddKTtcblxuICBjb25zdCBoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0VmlzdWFsVHlwZSh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXBwbHkgPSAoKSA9PiB7XG4gICAgc2V0SXNBcHBsaWVkKDEpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGlvbiA9IChpdGVtLCBzZXRTZWxlY3RlZCwgYnV0dG9tdHlwZSkgPT4ge1xuICAgIGlmIChidXR0b210eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBzZXRTZWxlY3RlZCgocHJldlNlbGVjdGVkKSA9PlxuICAgICAgICBwcmV2U2VsZWN0ZWQuaW5jbHVkZXMoaXRlbSlcbiAgICAgICAgICA/IHByZXZTZWxlY3RlZC5maWx0ZXIoKGkpID0+IGkgIT09IGl0ZW0pXG4gICAgICAgICAgOiBbLi4ucHJldlNlbGVjdGVkLCBpdGVtXVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWQoW2l0ZW1dKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgQ29tcGFueUNoZWNrYm94Q2hhbmdlID0gKGNvbXBhbnksIGJ1dHRvbXR5cGUpID0+IHtcbiAgICB0b2dnbGVTZWxlY3Rpb24oY29tcGFueSwgc2V0U2VsZWN0ZWRDb21wYW5pZXMsIGJ1dHRvbXR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ2hlY2tib3hDaGFuZ2UgPSAodG9waWMsIGJ1dHRvbXR5cGUpID0+IHtcbiAgICB0b2dnbGVTZWxlY3Rpb24odG9waWMsIHNldFNlbGVjdGVkVG9waWNzLCBidXR0b210eXBlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ29tcGFuaWVzKFsn5qCq5byP5Lya56S+54aK6LC357WEJ10pO1xuICAgIHNldFNlbGVjdGVkVG9waWNzKFsnMCddKTtcbiAgfSwgW3Zpc3VhbFR5cGVdKTtcblxuICBjb25zdCByZXNldElzQXBwbGllZCA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicmVhY3QtY29udGVudFwiIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XG4gICAgICA8Um93PlxuICAgICAgICB7IWlzQXV0aGVudGljYXRlZCA/ICggLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44Gq44GE5aC05ZCIXG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT7jg63jgrDjgqTjg7PjgYzlv4XopoHjgafjgZk8L2gxPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgICAgICAgICDjg63jgrDjgqTjg7NcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSA6ICggLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44KL5aC05ZCIXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiDjgrXjgqTjg4njg5Djg7wgKi99XG4gICAgICAgICAgICA8Q29sIG1kPXszfSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCI+XG4gICAgICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICAgICAgb25BcHBseT17aGFuZGxlQXBwbHl9XG4gICAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgICBvblZpc3VhbFR5cGVDaGFuZ2U9e2hhbmRsZVZpc3VhbFR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICAgICAgY29tcGFueUxpc3Q9e2NvbXBhbnlMaXN0fVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29tcGFuaWVzPXtzZWxlY3RlZENvbXBhbmllc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRvcGljcz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VUb3BpYz17VG9waWNDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBhbnk9e0NvbXBhbnlDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICB7Lyog44Oh44Kk44Oz44Kz44Oz44OG44Oz44OEICovfVxuICAgICAgICAgICAgPENvbCBtZD17OX0gY2xhc3NOYW1lPVwiYm9yZGVyLWVuZFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgICAgICBwbG90PXtpc0FwcGxpZWR9XG4gICAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgICB0b3BpYz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICAgICAgY29tcGFueT17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICAgICAgcmVzZXRBcHBseT17cmVzZXRJc0FwcGxpZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwPnBsb3Q6IHtpc0FwcGxpZWR9PC9wPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfWZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFBsb3RQaWVBIGZyb20gJy4vb2NjdXB5LmpzeCc7XG5pbXBvcnQgUGxvdFBpZUIgZnJvbSAnLi9vY2N1cHktY29tcGFueS5qc3gnO1xuaW1wb3J0IFBsb3RQZXJzb25hQ29tcCBmcm9tICcuL3BlcnNvbmEtY29tcC5qc3gnO1xuaW1wb3J0IFBsb3RQZXJzb25hVG9waWMgZnJvbSAnLi9wZXJzb25hLXRvcGljLmpzeCc7XG5cbmltcG9ydCBQbG90QmFyQ2hhcnRBIGZyb20gJy4vdHJlbmQtdG9waXguanN4JztcbmltcG9ydCBQbG90QmFyQ2hhcnRCIGZyb20gJy4vdHJlbmQtY29tcC5qc3gnO1xuXG5cblxuY29uc3QgQ29udGVudCA9ICh7cGxvdCx2aXN1YWxUeXBlLHRvcGljLGNvbXBhbnkscmVzZXRBcHBseX0pID0+IHtcblxuXG4gICAgY29uc3QgW2NsaWNrRGF0YSwgc2V0Q2xpY2tEYXRhXSA9IHVzZVN0YXRlKCk7IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBrueKtuaFi1xuXG4gICAgY29uc3QgaGFuZGxlUGllQ2hhcnRDbGljayA9IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIuOCr+ODquODg+OCr+OBleOCjOOBn+ODh+ODvOOCvzpcIiwgZGF0YSk7IC8vIOODh+ODkOODg+OCsOeUqFxuICAgICAgc2V0Q2xpY2tEYXRhKGRhdGEpOyAvLyDnirbmhYvjgpLmm7TmlrBcbiAgICB9O1xuICAgIFxuICAgIFxuICByZXR1cm4gKFxuICAgIFxuICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICB7LyogRmlyc3QgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17e2hlaWdodDogJzUwJScgfX0+XG4gICAgICAgIHsvKiBQZXJzb25hIEdyYXBoICovfVxuICAgICAgICA8Q29sIG1kPXs5fSBzdHlsZT17e2hlaWdodDogJzEwMCUnLCBtYXJnaW5MZWZ0OlwiMCVcIn19PlxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYVRvcGljXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQydmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFDb21wXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQydmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+6Kmy5b2T44GZ44KL6KGo56S644GM44GC44KK44G+44Gb44KTPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgey8qIFJpZ2h0IENvbHVtbiB3aXRoIENhcmRzICovfVxuICAgICAgICA8Q29sIG1kPXszfSBzdHlsZT17eyBoZWlnaHQ6ICc0NSUnIH19PlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiaC0xMDBcIj5cbiAgICAgICAgICAgIHtbXCJBQkNcIiwgXCJERUZcIiwgXCJHSElcIl0ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICB4cz17MTJ9IC8vIOaoquW5heWFqOS9k+OCkuS9v+OBhlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxleDogXCIxIDEgYXV0b1wiIH19IC8vIOmrmOOBleOCkuWdh+etieOBq+WIhuWJslxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidy03NSBoLTc1XCI+IHsvKiDjgqvjg7zjg4njgpLopqropoHntKDjgavlj47jgoHjgosgKi99XG4gICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPntpbmRleCArIDF9PC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+e3RleHR9PC9DYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Sb3c+XG48L0NvbD5cblxuXG4gIFxuICAgICAgPC9Sb3c+XG5cbiAgICAgIHsvKiBTZWNvbmQgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc1MCUnIH19PlxuICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUFcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIG9uQ2xpY2tEYXRhPXtoYW5kbGVQaWVDaGFydENsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jga7jg4/jg7Pjg4njg6njg7zjgpLmuKHjgZlcbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfms6jnm67kvIHmpa3jga7mpa3nlYzjgavlr77jgZnjgovljaDmnInnjocnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgPFBsb3RCYXJDaGFydEFcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG5cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgIGRhdGE9e1tdfSAvLyDjg4fjg7zjgr/jgpLov73liqDjgZfjgabjgY/jgaDjgZXjgYRcbiAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICB0aXRsZTogJ0bjgr/jg7zjg6Djga7liIbluIMnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPik6KFxuICAgICAgICAgIDxQbG90QmFyQ2hhcnRCXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBjbGlja2RhdGE9e2NsaWNrRGF0YX0gLy8g44Kv44Oq44OD44Kv44OH44O844K/44KS5rih44GZXG4gICAgXG5cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgIGRhdGE9e1tdfSAvLyDjg4fjg7zjgr/jgpLov73liqDjgZfjgabjgY/jgaDjgZXjgYRcbiAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICB0aXRsZTogJ0bjgr/jg7zjg6Djga7liIbluIMnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPil9XG4gICAgICAgICAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHAuanN4XCI7XG5pbXBvcnQgeyBBdXRoMFByb3ZpZGVyIH0gZnJvbSBcIkBhdXRoMC9hdXRoMC1yZWFjdFwiO1xuXG4vLyBBdXRoMOOBruioreWumlxuY29uc3QgZG9tYWluID0gXCJkZXYtbDNiZ2VnbmpqeHd4Mm9kNC51cy5hdXRoMC5jb21cIjsgLy8gQXV0aDDjga7jg4njg6HjgqTjg7NcblxuY29uc3QgY2xpZW50SWQgPSBcIml2dGd4MWFyTjVKMDladzh5UENpRWtwUTFEWjNQMjJlXCI7IC8vIEF1dGgw44Gu44Kv44Op44Kk44Ki44Oz44OISURcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8QXV0aDBQcm92aWRlclxuICAgICAgZG9tYWluPXtkb21haW59XG4gICAgICBjbGllbnRJZD17Y2xpZW50SWR9XG4gICAgICBhdXRob3JpemF0aW9uUGFyYW1zPXt7XG4gICAgICAgIHJlZGlyZWN0X3VyaTogXCJodHRwczovL2hpcm9lbW9uLW0uZ2l0aHViLmlvL215LWFwcC9cIiwgLy8g6KqN6Ki85b6M44Gr44Oq44OA44Kk44Os44Kv44OI44GZ44KLVVJMXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxBcHAgLz5cbiAgICA8L0F1dGgwUHJvdmlkZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cblxuXG5jb25zdCBjb2xvcm1hcCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLlnLDnm6TmlLnoia9cIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIuODiOODs+ODjeODq+aOmOWJilwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gIFwi5YWN6ZyH5qeL6YCgXCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLnrqHnkIbjgrfjgrnjg4bjg6BcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuW7g+ajhOeJqeWHpueQhlwiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICBcIuW7uuevieODkeODjeODq1wiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLnqbroqr/jgrfjgrnjg4bjg6BcIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuaOmOWJiuijhee9rlwiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxufTtcblxuXG4vLyBmZXRjaERhdGHplqLmlbDvvJpKU09O44G+44Gf44Gv44OG44Kt44K544OI5b2i5byP44Gr5a++5b+cXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcblxuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gSlNPTuW9ouW8j+OBruWgtOWQiFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpOyAvLyDjg5fjg6zjg7zjg7Pjg4bjgq3jgrnjg4jjga7loLTlkIhcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTsgLy8g5pS56KGM5Yy65YiH44KK44Gu44OH44O844K/44KS6YWN5YiX44Go44GX44Gm6L+U44GZXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbi8vIOOCueODkeODvOOCueODh+ODvOOCv+OCkuWvhuihjOWIl+OBq+WkieaPm+OBl+OAgeihjOaWueWQkeOBruWSjOOCkuioiOeul1xuY29uc3QgcHJvY2Vzc1NwYXJzZURhdGEgPSAoc3BhcnNlRGF0YSkgPT4ge1xuICAgIFxuICBjb25zdCBudW1Sb3dzID0gTWF0aC5tYXgoLi4uc3BhcnNlRGF0YS5tYXAoZW50cnkgPT4gZW50cnkucm93KSkgKyAxO1xuICBjb25zdCBudW1Db2xzID0gTWF0aC5tYXgoLi4uc3BhcnNlRGF0YS5tYXAoZW50cnkgPT4gZW50cnkuY29sKSkgKyAxO1xuXG4gIGNvbnN0IG1hdHJpeCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG51bVJvd3MgfSwgKCkgPT4gQXJyYXkobnVtQ29scykuZmlsbCgwKSk7XG4gIHNwYXJzZURhdGEuZm9yRWFjaCgoeyByb3csIGNvbCwgdmFsdWUgfSkgPT4ge1xuICAgIG1hdHJpeFtyb3ddW2NvbF0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1hdHJpeC5tYXAocm93ID0+IHJvdy5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKSk7IC8vIOihjOaWueWQkeOBruWSjOOCkui/lOOBmVxufTtcblxuY29uc3QgUGxvdFBpZUIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBvblJlbmRlcmVkLCBvbkNsaWNrRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCLms6jnm67jg4jjg5Tjg4Pjgq/jgavplqLjgZnjgovnibnoqLHjga7kvIHmpa3ljaDmnInnjodcIik7XG4gIGNvbnN0IGFsbFRvcGljID0gWzIsIDMsIDEsIDAsIDksIDYsIDgsIDcsIDExXTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gICAgY29uc3QgVG9waWN0b0lkID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6XCIyXCIsXCLlnLDnm6TmlLnoia9cIjpcIjNcIixcIuODiOODs+ODjeODq+aOmOWJilwiOlwiMVwiLFxuICAgICAgICBcIuWFjemch+ani+mAoFwiOlwiMFwiLFwi566h55CG44K344K544OG44OgXCI6XCI5XCIsXCLlu4Pmo4Tnianlh6bnkIZcIjpcIjZcIixcIuW7uuevieODkeODjeODq1wiOlwiOFwiLFxuICAgICAgIFwi56m66Kq/44K344K544OG44OgXCI6XCI3XCIsXCLmjpjliYroo4Xnva5cIjpcIjExXCIsXCLlu7rnr4noqK3oqIhcIjpcIjEwXCIsXCLjg4jjg7Pjg43jg6vmuKzph49cIjpcIjVcIn07XG4gIC8vIOOCreODo+ODg+OCt+ODpeeUqOOBruOCquODluOCuOOCp+OCr+ODiFxuICBjb25zdCBkYXRhQ2FjaGUgPSB1c2VSZWYoe1xuICAgIGNvbXBhbmllczoge30sXG4gICAgc3BhcnNlRGF0YToge31cbiAgfSk7XG5cbiAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFsbFRvcGljc0RhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgYWxsVG9waWMubWFwKGFzeW5jICh0YXJnZXRfaWQpID0+IHtcbiAgICAgICAgICBjb25zdCB0aW1lID0gOTtcbiAgICAgICAgICBjb25zdCBjb21wYW55VXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRfaWR9L2NvbXBhbnkudHh0YDtcbiAgICAgICAgICBjb25zdCBzcGFyc2VEYXRhVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9wZXJzb25hPTUvb2NjdXB5X3RvcGljXyR7dGltZX0uanNvbmA7XG5cbiAgICAgICAgICAvLyDjgq3jg6Pjg4Pjgrfjg6XjgpLnorroqo1cbiAgICAgICAgICBpZiAoIWRhdGFDYWNoZS5jdXJyZW50LmNvbXBhbmllc1t0YXJnZXRfaWRdKSB7XG4gICAgICAgICAgICBkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXSA9IGF3YWl0IGZldGNoRGF0YShjb21wYW55VXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWRhdGFDYWNoZS5jdXJyZW50LnNwYXJzZURhdGFbdGFyZ2V0X2lkXSkge1xuICAgICAgICAgICAgZGF0YUNhY2hlLmN1cnJlbnQuc3BhcnNlRGF0YVt0YXJnZXRfaWRdID0gYXdhaXQgZmV0Y2hEYXRhKHNwYXJzZURhdGFVcmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNvbXBhbmllcyA9IGRhdGFDYWNoZS5jdXJyZW50LmNvbXBhbmllc1t0YXJnZXRfaWRdO1xuICAgICAgICAgIGNvbnN0IHNwYXJzZURhdGEgPSBkYXRhQ2FjaGUuY3VycmVudC5zcGFyc2VEYXRhW3RhcmdldF9pZF07XG5cbiAgICAgICAgICAvLyDmraPopo/ljJbplqLmlbBcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVTdHJpbmcgPSAoc3RyKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0ciAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLpnZ7mloflrZfliJfjg4fjg7zjgr/jgYzmpJzlh7rjgZXjgozjgb7jgZfjgZ86XCIsIHN0cik7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyDpnZ7mloflrZfliJfjg4fjg7zjgr/jga/nhKHoppZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHIubm9ybWFsaXplKFwiTkZDXCIpLnRyaW0oKTsgLy8g5q2j6KaP5YyW44Go44OI44Oq44Og44KS6YGp55SoXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIOato+imj+WMluOBl+OBn+ODh+ODvOOCv+OBp+avlOi8g1xuICAgICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbmllcyA9IGNvbXBhbmllcy5tYXAobm9ybWFsaXplU3RyaW5nKTtcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW55ID0gbm9ybWFsaXplU3RyaW5nKGNvbXBhbnlbMF0pO1xuXG4gICAgICAgICAgaWYgKCFzYW5pdGl6ZWRDb21wYW5pZXMuaW5jbHVkZXMoc2FuaXRpemVkQ29tcGFueSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcGFueSBcIiR7c2FuaXRpemVkQ29tcGFueX1cIiBub3QgZm91bmQgaW4gdG9waWMgJHt0YXJnZXRfaWR9YCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDjgrnjg5Hjg7zjgrnjg4fjg7zjgr/jgpLlh6bnkIZcbiAgICAgICAgICBjb25zdCByb3dTdW1zID0gcHJvY2Vzc1NwYXJzZURhdGEoc3BhcnNlRGF0YSk7XG5cbiAgICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBzYW5pdGl6ZWRDb21wYW5pZXMuaW5kZXhPZihzYW5pdGl6ZWRDb21wYW55KTtcblxuICAgICAgICAgIHJldHVybiB7IHRvcGljOiB0YXJnZXRfaWQsIHZhbHVlOiByb3dTdW1zW2NvbXBhbnlJbmRleF0gfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGFsbFRvcGljc0RhdGEuZmlsdGVyKChkYXRhKSA9PiBkYXRhICE9PSBudWxsKTtcblxuICAgICAgLy8g5q2j6KaP5YyW44Go44K944O844OIXG4gICAgICBjb25zdCB0b3RhbFZhbHVlID0gZmlsdGVyZWREYXRhLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnZhbHVlLCAwKTtcbiAgICAgIGlmICh0b3RhbFZhbHVlID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk5vIHZhbGlkIGRhdGEgdG8gbm9ybWFsaXplLlwiKTtcbiAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG5cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZERhdGEgPSBmaWx0ZXJlZERhdGEubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgY2F0ZWdvcnk6IGl0ZW0udG9waWMsXG4gICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlIC8gdG90YWxWYWx1ZSxcbiAgICAgIH0pKS5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgIHNldENoYXJ0RGF0YShub3JtYWxpemVkRGF0YS5zbGljZSgwLCAxMCkpOyAvLyDkuIrkvY0xMOS7tuOBruOBv+ihqOekulxuICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyDliJ3mnJ/jg4fjg7zjgr/oqq3jgb/ovrzjgb/jgah1cGRhdGXjga7lpInmm7TmmYLjgavjg4fjg7zjgr/jgpLjg63jg7zjg4lcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiKSB7XG4gICAgICBsb2FkRGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZV0pO1xuXG4gIGNvbnN0IGhhbmRsZVBsb3RDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5wb2ludHMgJiYgZXZlbnQucG9pbnRzWzBdKSB7XG4gICAgICBjb25zdCBjbGlja2RhdGEgPSBldmVudC5wb2ludHNbMF0ubGFiZWw7IC8vIOOCr+ODquODg+OCr+OBleOCjOOBn+mDqOWIhuOBruODqeODmeODq1xuICAgICAgY29uc3QgbGFiZWwgPSBUb3BpY3RvSWRbY2xpY2tkYXRhXVxuICAgICAgY29uc3QgdG9waWNpZCA9IGxhYmVsLnJlcGxhY2UoXCJUb3BpYyBcIiwgXCJcIik7XG4gICAgICBvbkNsaWNrRGF0YShbdG9waWNpZF0pOyAvLyDopqrjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavjg6njg5njg6vjgpLpgJrnn6VcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoaXRlbSA9PiAgSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV0pLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgIGNvbG9yczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gY29sb3JtYXBbSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV1dKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgICAgb25DbGljaz17aGFuZGxlUGxvdENsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jgqTjg5njg7Pjg4jjgpLov73liqBcbiAgICAgIC8+XG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44OG44Kt44K544OI44OH44O844K/44KS6Kqt44G/6L6844KA6Zai5pWwXG5jb25zdCBmZXRjaFRleHREYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90UGllQSA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gIGNvbnN0IGNvbG9ybWFwID0geyfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLmoKrlvI/kvJrnpL7lpKfmnpfntYRcIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIua4heawtOW7uuioreagquW8j+S8muekvlwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gICAgICBcIuWkp+aIkOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgICAgIFwi5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+XCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuS6lOa0i+W7uuioreagquW8j+S8muekvlwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5qCq5byP5Lya56S+44OV44K444K/XCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gICAgICBcIuaIuOeUsOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMjM3LCAxMDAsIDkwKScsIFwi5qCq5byP5Lya56S+54aK6LC357WEXCI6J3JnYigxNjUsIDE3MCwgMTUzKSd9O1xuICAgICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gMDtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b3BpYyB8fCBcImRlZmF1bHRfdG9waWNcIjsgLy8g5Yid5pyf5YCk44Go44GX44GmXCJkZWZhdWx0X3RvcGljXCLjgpLoqK3lrppcbiAgICAgICAgY29uc3QgZGF0YVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdG9waWMke3RhcmdldElkfS9wZXJzb25hPTUvb2NjdXB5X21lYW5fJHt0aW1lfS5qc29uYDtcbiAgICAgICAgY29uc3QgY29sdW1uVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vY29tcGFueS50eHRgO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+WPluW+l1xuICAgICAgICBjb25zdCBbdmFsdWVzLCBsYWJlbHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShkYXRhVXJsKSxcbiAgICAgICAgICBmZXRjaFRleHREYXRhKGNvbHVtblVybCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8vIOWApOOBqOODqeODmeODq+OBrue1hOOBv+WQiOOCj+OBm+OCkuS9nOaIkFxuICAgICAgICBjb25zdCBkYXRhID0gbGFiZWxzLm1hcCgobGFiZWwsIGluZGV4KSA9PiAoe1xuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZXMudmFsdWVbaW5kZXhdIHx8IDAsIC8vIOWApOOBjOOBquOBhOWgtOWQiOOBrzBcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIOWApOOBq+WfuuOBpeOBhOOBpumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5oq95Ye6XG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBkYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtJZHRvVG9waWNbdGFyZ2V0SWRdfeOBq+mWouOBmeOCi+eJueioseOBruS8gealreWNoOacieeOh2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4Hjg6Pjg7zjg4jjg4fjg7zjgr/jga7lh6bnkIbkuK3jgavjgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g5Yid5Zue44Os44Oz44OA44Oq44Oz44Kw5pmC44GoYHVwZGF0ZWDlpInmm7TmmYLjgavjg4fjg7zjgr/jgpLjg63jg7zjg4lcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIikge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW2l0ZW0ubGFiZWxdKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gIFxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuXG4gXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Db21wID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCB9KSA9PiB7XG5jb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCJ9O1xuXG5jb25zdCBjb2xvcm1hcCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLlnLDnm6TmlLnoia9cIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIuODiOODs+ODjeODq+aOmOWJilwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gICAgICAgICAgXCLlhY3pnIfmp4vpgKBcIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIueuoeeQhuOCt+OCueODhuODoFwiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5buD5qOE54mp5Yem55CGXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gICAgICAgICAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gIGNvbnN0IGFycm93X2NvbG9yID0gWycjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnXTtcblxuICBjb25zdCBbcHJlcGFyZWREYXRhLCBzZXRQcmVwYXJlZERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmaWdEYXRhLCBzZXRGaWdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fubm90YXRpb25zLCBzZXRBbm5vdGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCLkvIHmpa3jga7nq4vjgaHkvY3nva5cIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmVwYXJlRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbFByb21pc2VzID0gKHRvcGljIHx8IFtcImRlZmF1bHRfdG9waWNcIl0pLm1hcChhc3luYyAodGFyZ2V0X2lkKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvcGljXCIsdGFyZ2V0X2lkKVxuICAgICAgICAgIGNvbnN0IGNvbHVtblBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC9hbHBoYS90b3BpYz0ke3RhcmdldF9pZH0vY29tcGFueS50eHRgO1xuICAgICAgICAgIGNvbnN0IGNvbXBhbmllcyA9IGF3YWl0IGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCk7XG5cbiAgICAgICAgICBjb25zdCBjb21wYW55RGljdCA9IGNvbXBhbmllcy5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgYWNjW3ZhbHVlXSA9IGlkeDtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgY29uc3QgbmV3U2VhcmNoTGlzdCA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55IDogW2NvbXBhbnldO1xuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkU2VhcmNoTGlzdCA9IG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KTtcblxuICAgICAgICAgIGNvbnN0IG5vZGVfYWxwaGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWx0ZXJlZFNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuICAgICAgICAgIGNvbnN0IG5vZGVfYmV0YSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbHRlcmVkU2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGopID0+IGogKyA1KS5tYXAoYXN5bmMgKHApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC9hbHBoYS90b3BpYz0ke3RhcmdldF9pZH0vdGVzdF9vcHRpbWl6ZV8ke3B9LnR4dGA7XG4gICAgICAgICAgICBjb25zdCB7IGFscGhhX2xpLCBiZXRhX2xpIH0gPSBhd2FpdCB0b0xpc3QocGFyYW1ldGVyUGF0aCk7XG5cbiAgICAgICAgICAgIGZpbHRlcmVkU2VhcmNoTGlzdC5mb3JFYWNoKChrLCBqKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbmllcy5pbmRleE9mKGspO1xuICAgICAgICAgICAgICBub2RlX2FscGhhW2pdW3AgLSA1XSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICAgIG5vZGVfYmV0YVtqXVtwIC0gNV0gPSBiZXRhX2xpW2lkeF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICAgIHJldHVybiB7IG5vZGVfYWxwaGEsIG5vZGVfYmV0YSwgZmlsdGVyZWRTZWFyY2hMaXN0IH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChhbGxQcm9taXNlcyk7XG5cbiAgICAgICAgY29uc3QgY29tYmluZWRBbHBoYSA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0Lm5vZGVfYWxwaGEpO1xuICAgICAgICBjb25zdCBjb21iaW5lZEJldGEgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5ub2RlX2JldGEpO1xuICAgICAgICBjb25zdCBjb21iaW5lZFNlYXJjaExpc3QgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5maWx0ZXJlZFNlYXJjaExpc3QpO1xuXG4gICAgICAgIHNldFByZXBhcmVkRGF0YSh7IGFscGhhOiBjb21iaW5lZEFscGhhLCBiZXRhOiBjb21iaW5lZEJldGEsIHNlYXJjaExpc3Q6IGNvbWJpbmVkU2VhcmNoTGlzdCB9KTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueX3jga7mpa3nlYzjgafjga7nq4vjgaHkvY3nva5gKTsgLy8g5Yid5pyf44K/44Kk44OI44Or44KS6Kit5a6aXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5rqW5YKZ5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOWIneacn+ODrOODs+ODgOODquODs+OCsOaZguOBq+OCguODh+ODvOOCv+OCkua6luWCmVxuICAgIHByZXBhcmVEYXRhKCk7XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZSAmJiBwcmVwYXJlZERhdGEpIHtcbiAgICAgIGNvbnN0IHBsb3REYXRhID0gcHJlcGFyZWREYXRhLnNlYXJjaExpc3QubWFwKChrLCBqKSA9PiAoe1xuICAgICAgICB4OiBwcmVwYXJlZERhdGEuYWxwaGFbal0sXG4gICAgICAgIHk6IHByZXBhcmVkRGF0YS5iZXRhW2pdLFxuICAgICAgICBtb2RlOiBcImxpbmVzK21hcmtlcnMrdGV4dFwiLFxuICAgICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgICAgdGV4dHBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgY29sb3I6IGNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY1tqXV1dLFxuICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IElkdG9Ub3BpY1t0b3BpY1tqXV0sXG4gICAgICB9KSk7XG5cbiAgICAgIGNvbnN0IHBsb3RBbm5vdGF0aW9ucyA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICAgIEFycmF5KDQpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgICAgICAgIHg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXVtpICsgMV0sXG4gICAgICAgICAgeTogcHJlcGFyZWREYXRhLmJldGFbal1baSArIDFdLFxuICAgICAgICAgIHhyZWY6ICd4JyxcbiAgICAgICAgICB5cmVmOiAneScsXG4gICAgICAgICAgYXhyZWY6ICd4JyxcbiAgICAgICAgICBheXJlZjogJ3knLFxuICAgICAgICAgIGF4OiBwcmVwYXJlZERhdGEuYWxwaGFbal1baV0sXG4gICAgICAgICAgYXk6IHByZXBhcmVkRGF0YS5iZXRhW2pdW2ldLFxuICAgICAgICAgIGFycm93Y29sb3I6Y29sb3JtYXBbSWR0b1RvcGljW3RvcGljW2pdXV0sXG4gICAgICAgICAgYXJyb3dzaXplOiAxLjIsXG4gICAgICAgICAgYXJyb3d3aWR0aDogMS4yLFxuICAgICAgICAgIGFycm93aGVhZDogNSxcbiAgICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICAgIH0pKVxuICAgICAgKTtcblxuICAgICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgICBzZXRBbm5vdGF0aW9ucyhwbG90QW5ub3RhdGlvbnMpO1xuXG4gICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgcHJlcGFyZWREYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBzdHlsZT17eyB3aWR0aDonMTAwdmgnICxoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHhyZWY6ICdwYXBlcicsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbm5vdGF0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjI1LFxuICAgICAgICAgICAgICB5OiAxLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNzUsXG4gICAgICAgICAgICAgIHk6IDEuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgormnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC4yNSxcbiAgICAgICAgICAgICAgeTogLTAuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/kvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC43NSxcbiAgICAgICAgICAgICAgeTogLTAuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/mnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxLjAzXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlswLCAwLjUsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6MjUsICAgLy8gWei7uOOBi+OCieOBrui3nembou+8iOimi+OChOOBmeOBj+OBmeOCi+OBn+OCge+8iVxuICAgICAgICAgICAgcmFuZ2U6IFstMC4xLCAxLjFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6Wy0wLjEsIDAuNSwgMV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogNDAsIGw6IDQ1LCByOiA1MCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGJvcmRlcndpZHRoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Db21wO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cbmNvbnN0IGNvbG9ybWFwID0geyfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLmoKrlvI/kvJrnpL7lpKfmnpfntYRcIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIua4heawtOW7uuioreagquW8j+S8muekvlwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gIFwi5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupdcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuagquW8j+S8muekvumVt+iwt+W3peOCs+ODvOODneODrOODvOOCt+ODp+ODs1wiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICBcIuWJjeeUsOW7uuioreW3pealreagquW8j+S8muekvlwiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLkupTmtIvlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuagquW8j+S8muekvuODleOCuOOCv1wiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICBcIuaIuOeUsOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMjM3LCAxMDAsIDkwKScsIFwi5qCq5byP5Lya56S+54aK6LC357WEXCI6J3JnYigxNjUsIDE3MCwgMTUzKSd9O1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Ub3BpYyA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBhcnJvd19jb2xvciA9IFsnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJ107XG4gIGNvbnN0IFtmaWdEYXRhLCBzZXRGaWdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fubm90YXRpb25zLCBzZXRBbm5vdGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb21wYW55TGlzdCwgc2V0Q29tcGFueUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoTGlzdCwgc2V0U2VhcmNoTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICAvLyDliJ3mnJ/jg4fjg7zjgr/jga7jg63jg7zjg4lcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiAmJiB0b3BpYykge1xuICAgICAgY29uc3QgdGFyZ2V0X2lkID0gdG9waWM7IC8vIOODiOODlOODg+OCr0lE44Gu6Kit5a6aXG4gICAgICBjb25zdCBjb2x1bW5QYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRfaWR9L2NvbXBhbnkudHh0YDtcblxuICAgICAgbG9hZENvbXBhbmllcyhjb2x1bW5QYXRoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldENvbXBhbnlMaXN0KGRhdGEpO1xuICAgICAgICBzZXRUaXRsZShg5qWt55WM5YaF44Gn44Gu5LyB5qWt44Gu56uL44Gh5L2N572uYCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpY10pO1xuXG4gIC8vIOaknOe0ouWvvuixoeOBruODleOCo+ODq+OCv+ODquODs+OCsFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb21wYW55TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb21wYW55RGljdCA9IGNvbXBhbnlMaXN0LnJlZHVjZSgoYWNjLCB2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgIGFjY1t2YWx1ZV0gPSBpZHg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGNvbnN0IG5ld1NlYXJjaExpc3QgPSBBcnJheS5pc0FycmF5KGNvbXBhbnkpID8gY29tcGFueSA6IFtjb21wYW55XTtcbiAgICAgIHNldFNlYXJjaExpc3QobmV3U2VhcmNoTGlzdC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgaW4gY29tcGFueURpY3QpKTtcbiAgICB9XG4gIH0sIFtjb21wYW55TGlzdCwgY29tcGFueV0pO1xuXG4gIC8vIOODh+ODvOOCv+OBruaPj+eUu1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1cGRhdGUgJiYgc2VhcmNoTGlzdC5sZW5ndGggPiAwICYmIHRvcGljKSB7XG4gICAgICBjb25zdCB0YXJnZXRfaWQgPSB0b3BpYzsgLy8g44OI44OU44OD44KvSUTjga7oqK3lrppcbiAgICAgIGNvbnN0IG5vZGVfYWxwaGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcbiAgICAgIGNvbnN0IG5vZGVfYmV0YSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuXG4gICAgICBjb25zdCBwcm9taXNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGkpID0+IGkgKyA1KS5tYXAoKHApID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0X2lkfS90ZXN0X29wdGltaXplXyR7cH0udHh0YDtcbiAgICAgICAgcmV0dXJuIHRvTGlzdChwYXJhbWV0ZXJQYXRoKS50aGVuKCh7IGFscGhhX2xpLCBiZXRhX2xpIH0pID0+IHtcbiAgICAgICAgICBzZWFyY2hMaXN0LmZvckVhY2goKGssIGopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbnlMaXN0LmluZGV4T2Yoayk7XG4gICAgICAgICAgICBub2RlX2FscGhhW2pdW3AgLSA1XSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICBub2RlX2JldGFbal1bcCAtIDVdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsb3REYXRhID0gc2VhcmNoTGlzdC5tYXAoKGssIGopID0+ICh7XG4gICAgICAgICAgeDogbm9kZV9hbHBoYVtqXSxcbiAgICAgICAgICB5OiBub2RlX2JldGFbal0sXG4gICAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgICAgICB0ZXh0cG9zaXRpb246IFwidG9wIGxlZnRcIixcbiAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JtYXBba10sXG4gICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogayxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IHBsb3RBbm5vdGF0aW9ucyA9IHNlYXJjaExpc3QuZmxhdE1hcCgoaywgaikgPT5cbiAgICAgICAgICBBcnJheSg0KS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgICAgIHg6IG5vZGVfYWxwaGFbal1baSArIDFdLFxuICAgICAgICAgICAgeTogbm9kZV9iZXRhW2pdW2kgKyAxXSxcbiAgICAgICAgICAgIHhyZWY6ICd4JyxcbiAgICAgICAgICAgIHlyZWY6ICd5JyxcbiAgICAgICAgICAgIGF4OiBub2RlX2FscGhhW2pdW2ldLFxuICAgICAgICAgICAgYXk6IG5vZGVfYmV0YVtqXVtpXSxcbiAgICAgICAgICAgIGF4cmVmOiAneCcsXG4gICAgICAgICAgICBheXJlZjogJ3knLFxuICAgICAgICAgICAgYXJyb3djb2xvcjogY29sb3JtYXBba10sXG4gICAgICAgICAgICBhcnJvd3NpemU6IDEuMixcbiAgICAgICAgICAgIGFycm93d2lkdGg6IDEuMixcbiAgICAgICAgICAgIGFycm93aGVhZDogNSxcbiAgICAgICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgKTtcblxuICAgICAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAgICAgc2V0QW5ub3RhdGlvbnMocGxvdEFubm90YXRpb25zKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgc2VhcmNoTGlzdCwgY29tcGFueUxpc3QsIHRvcGljXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBzdHlsZT17eyB3aWR0aDonMTAwdmgnICxoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHhyZWY6ICdwYXBlcicsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbm5vdGF0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjI1LFxuICAgICAgICAgICAgICB5OiAxLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNzUsXG4gICAgICAgICAgICAgIHk6IDEuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgormnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC4yNSxcbiAgICAgICAgICAgICAgeTogLTAuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/kvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC43NSxcbiAgICAgICAgICAgICAgeTogLTAuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/mnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxLjAzXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlswLCAwLjUsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6MjUsICAgLy8gWei7uOOBi+OCieOBrui3nembou+8iOimi+OChOOBmeOBj+OBmeOCi+OBn+OCge+8iVxuICAgICAgICAgICAgcmFuZ2U6IFstMC4xLCAxLjFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6Wy0wLjEsIDAuNSwgMV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogNDAsIGw6IDQ1LCByOiA1MCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGJvcmRlcndpZHRoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Ub3BpYztcbiIsIi8vIFNpZGViYXIuanN4XG5pbXBvcnQgUmVhY3QgLHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY29yZGlvbiwgQnV0dG9uLCBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IFNpZGViYXIgPSAoeyBvbkFwcGx5LCB2aXN1YWxUeXBlLCBvblZpc3VhbFR5cGVDaGFuZ2UsIHRvcGljTGlzdCwgY29tcGFueUxpc3QsIHNlbGVjdGVkQ29tcGFuaWVzLCBzZWxlY3RlZFRvcGljcywgb25DaGFuZ2VUb3BpYywgb25DaGFuZ2VDb21wYW55IH0pID0+IHtcbiAgY29uc3QgW2lucHV0VHlwZSwgc2V0SW5wdXRUeXBlXSA9IHVzZVN0YXRlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSk7IC8vIOWIneacn+WApOOBryBcImNoZWNrYm94XCJcbiAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBvblZpc3VhbFR5cGVDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWU9PVwib25lLWNvbXBcIil7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJjaGVja2JveFwiLFwicmFkaW9cIl0pfVxuICAgICAgZWxzZXtcbiAgICAgICAgc2V0SW5wdXRUeXBlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSlcbiAgICAgICAgfVxuXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dFR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG4gIFxuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcsIHBhZGRpbmc6ICcxMHB4JywgYmFja2dyb3VuZENvbG9yOiAnYmctbGlnaHQnIH19PlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgdGV4dC1kYW5nZXIgZm9udC1pdGFsaWNcIiBzdHlsZT17eyBoZWlnaHQ6ICc1JScgfX0+XG4gICAgICAgIDxDb2wgc209ezZ9PlxuICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMCUnIH19IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+XG4gICAgICAgICAgICDlj6/oppbljJbmnaHku7ZcbiAgICAgICAgICA8L2g1PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzbT17NH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJhcHBseVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkFwcGx5fVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTUlJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWPr+imluWMllxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICB7LyogQWNjb3JkaW9uICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBcIiBzdHlsZT17eyBoZWlnaHQ6ICc4MCUnIH19PlxuICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgIHsvKiBWaXN1YWxpemF0aW9uIFR5cGUgKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMFwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj7lj6/oppbljJbjgr/jgqTjg5c8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBcIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Zpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIn0gLy8g44OH44OV44Kp44Or44OI44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXgtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID4x56S+44Gr5rOo55uuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIn0gLy8g44OH44OV44Kp44Or44OI44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19XG4gICAgICAgICAgICAgICAgICA+MeODiOODlOODg+OCr+OBq+azqOebrjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG4gICAgICAgICAgey8qIFRvcGljIFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIxXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlRvcGljPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICB7dG9waWNMaXN0Lm1hcCgodG9waWMpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dG9waWN9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVswXX0gXG4gICAgICAgICAgICAgICAgICAgIGlkID0ge3RvcGljfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFRvcGljcy5pbmNsdWRlcyh0b3BpYyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVRvcGljKHRvcGljLGlucHV0VHlwZVswXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3BpY1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RvcGljfT57SWR0b1RvcGljW3RvcGljXX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBDb21wYW55IFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIyXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkNvbXBhbnk8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIHtjb21wYW55TGlzdC5tYXAoKGNvbXBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29tcGFueX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aW5wdXRUeXBlWzFdfSBcbiAgICAgICAgICAgICAgICAgICAgaWQgPSB7Y29tcGFueX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDb21wYW5pZXMuaW5jbHVkZXMoY29tcGFueSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUNvbXBhbnkoY29tcGFueSxpbnB1dFR5cGVbMV0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdjb21wYW55J1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtjb21wYW55fT57Y29tcGFueX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/lj5blvpfplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RCYXJDaGFydEIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBjbGlja2RhdGEsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiRknjga7liIbluINcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDk7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gY2xpY2tkYXRhIHx8IHRvcGljWzBdIHx8IFwiZGVmYXVsdF90b3BpY1wiOyAvLyBgY2xpY2tkYXRhYOOCkuWEquWFiFxuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vdHJlbmQvb3V0cHV0XyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGNvbXBhbnlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vY29tcGFueS50eHRgO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkuWPluW+l1xuICAgICAgICBjb25zdCBbb3JpZ2luYWwsIGNvbXBhbnlMaXN0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEocGF0aCksXG4gICAgICAgICAgbG9hZENvbXBhbmllcyhjb21wYW55UGF0aCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICghY29tcGFueUxpc3QuaW5jbHVkZXMoY29tcGFueVswXSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke2NvbXBhbnlbMF19XCIgbm90IGZvdW5kLmApO1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29tcGFueeOBruODh+ODvOOCv+WPluW+l1xuICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBjb21wYW55TGlzdC5pbmRleE9mKGNvbXBhbnlbMF0pO1xuICAgICAgICBjb25zdCBjb21wYW55RGF0YSA9IG9yaWdpbmFsW2NvbXBhbnlJbmRleF07XG4gICAgICAgIGlmICghY29tcGFueURhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIGRhdGEgZm91bmQgZm9yIGNvbXBhbnkgaW5kZXggXCIke2NvbXBhbnlJbmRleH1cIi5gKTtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpTT07jg4fjg7zjgr/jga7mlbTlvaJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKGNvbXBhbnlEYXRhKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICBjYXRlZ29yeToga2V5LFxuICAgICAgICAgIHZhbHVlOiBrZXkgPT09IFwiXCIgPyAwIDogcGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDAgfHwwLCAvLyDlgKTjgpLmlbDlgKTjgavlpInmj5vvvIjjgarjgYTloLTlkIjjga8w77yJXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLpmY3poIbjgavjgr3jg7zjg4jjgZfjgabkuIrkvY0xMOS7tuOCkuWPluW+l1xuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZm9ybWF0dGVkRGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueVswXX3jga5GSeOBruWIhuW4g2ApO1xuICAgICAgICBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBgY2xpY2tkYXRhYOOBruWApOOBjOWkieWMluOBl+OBn+OBi+OCkuaYjuekuueahOOBq+avlOi8g1xuICAgIGlmIChcbiAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiAmJlxuICAgICAgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwIHx8IGNsaWNrZGF0YSlcbiAgICApIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgSlNPTi5zdHJpbmdpZnkoY2xpY2tkYXRhKSwgdXBkYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLCAvLyDmqKrlkJHjgY3mo5LjgrDjg6njg5XnlKjjga7lgKTvvIjpgIbpoIbvvIlcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSwgLy8g44Kr44OG44K044Oq77yI6YCG6aCG77yJXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsIC8vIOaoquWQkeOBjeajkuOCsOODqeODlVxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sIC8vIOajkuOBruiJslxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGlja3N1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgfX1cblxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/5Y+W5b6X6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuXG5cbmNvbnN0IFBsb3RCYXJDaGFydEEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDIVwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gOTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b3BpY1swXTsgLy8gY2xpY2tkYXRh44KS5YSq5YWIXG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC9hbHBoYS90b3BpYz0ke3RhcmdldElkfS90cmVuZC9vdXRwdXRfdG9waWNfJHt0aW1lfS5qc29uYDtcblxuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkuWPluW+l1xuICAgICAgICBjb25zdCBbb3JpZ2luYWxdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhXCIsb3JpZ2luYWwpO1xuIFxuXG4gICAgICAgIC8vIEpTT07jg4fjg7zjgr/jga7mlbTlvaJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKG9yaWdpbmFsKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICBcbiAgICAgICAgICBjYXRlZ29yeToga2V5LFxuICAgICAgICAgIHZhbHVlOiBrZXkgPT09IFwiXCIgPyAwIDogcGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDAgfHwgMCwgXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhXCIsZm9ybWF0dGVkRGF0YSk7XG5cblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLpmY3poIbjgavjgr3jg7zjg4jjgZfjgabkuIrkvY0xMOS7tuOCkuWPluW+l1xuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZm9ybWF0dGVkRGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYEZJ44Gu5YiG5biDYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYXJ0RGF0YSk7XG4gICAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiICYmICh1cGRhdGUgfHwgY2hhcnREYXRhLmxlbmd0aCA9PT0gMCApKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIHVwZGF0ZV0pOyAvLyBjbGlja2RhdGEg44KS5L6d5a2Y6Zai5L+C44Gr6L+95YqgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgeTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaFwiLFxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aWNrc3VmZml4OiBcIiAlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogXCJGSVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDgwLCByOiA1MCB9LFxuICAgICAgICB9fVxuXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRBO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteV9hcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F1dGgwX2F1dGgwLXJlYWN0X2Rpc3RfYXV0aDAtcmVhY3RfZXNtX2pzLW5vZGVfbW9kdWxlc19yZWFjdC1ib290c3RyYXBfZS05NGQ1ZjBcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiU2lkZWJhciIsIkNvbnRlbnQiLCJ1c2VBdXRoMCIsIkFwcCIsImxvZ2luV2l0aFJlZGlyZWN0IiwibG9nb3V0IiwiaXNBdXRoZW50aWNhdGVkIiwidXNlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlTG9naW4iLCJjb25uZWN0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsImFycm93Q29sb3IiLCJjb21wYW55TGlzdCIsInRvcGljTGlzdCIsInZpc3VhbFR5cGUiLCJzZXRWaXN1YWxUeXBlIiwiaXNBcHBsaWVkIiwic2V0SXNBcHBsaWVkIiwic2VsZWN0ZWRDb21wYW5pZXMiLCJzZXRTZWxlY3RlZENvbXBhbmllcyIsInNlbGVjdGVkVG9waWNzIiwic2V0U2VsZWN0ZWRUb3BpY3MiLCJoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVBcHBseSIsInRvZ2dsZVNlbGVjdGlvbiIsIml0ZW0iLCJzZXRTZWxlY3RlZCIsImJ1dHRvbXR5cGUiLCJwcmV2U2VsZWN0ZWQiLCJpbmNsdWRlcyIsImZpbHRlciIsImkiLCJDb21wYW55Q2hlY2tib3hDaGFuZ2UiLCJjb21wYW55IiwiVG9waWNDaGVja2JveENoYW5nZSIsInRvcGljIiwicmVzZXRJc0FwcGxpZWQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJmbHVpZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJGcmFnbWVudCIsIm1kIiwib25BcHBseSIsIm9uVmlzdWFsVHlwZUNoYW5nZSIsIm9uQ2hhbmdlVG9waWMiLCJvbkNoYW5nZUNvbXBhbnkiLCJzdHlsZSIsImhlaWdodCIsInBsb3QiLCJyZXNldEFwcGx5IiwiQ2FyZCIsIlBsb3RQaWVBIiwiUGxvdFBpZUIiLCJQbG90UGVyc29uYUNvbXAiLCJQbG90UGVyc29uYVRvcGljIiwiUGxvdEJhckNoYXJ0QSIsIlBsb3RCYXJDaGFydEIiLCJfcmVmIiwiY2xpY2tEYXRhIiwic2V0Q2xpY2tEYXRhIiwiaGFuZGxlUGllQ2hhcnRDbGljayIsImRhdGEiLCJsb2ciLCJtYXJnaW5MZWZ0IiwidXBkYXRlIiwib25SZW5kZXJlZCIsImxheW91dCIsInRpdGxlIiwid2lkdGgiLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJrZXkiLCJ4cyIsImZsZXgiLCJCb2R5IiwiVGl0bGUiLCJUZXh0Iiwib25DbGlja0RhdGEiLCJjbGlja2RhdGEiLCJSZWFjdERPTSIsIkF1dGgwUHJvdmlkZXIiLCJkb21haW4iLCJjbGllbnRJZCIsInJlbmRlciIsIlN0cmljdE1vZGUiLCJhdXRob3JpemF0aW9uUGFyYW1zIiwicmVkaXJlY3RfdXJpIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZVJlZiIsIlBsb3QiLCJjb2xvcm1hcCIsImZldGNoRGF0YSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwiZ2V0IiwianNvbiIsInNwbGl0IiwibGluZSIsInRyaW0iLCJwcm9jZXNzU3BhcnNlRGF0YSIsInNwYXJzZURhdGEiLCJudW1Sb3dzIiwiTWF0aCIsIm1heCIsImVudHJ5Iiwicm93IiwibnVtQ29scyIsImNvbCIsIm1hdHJpeCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImZpbGwiLCJmb3JFYWNoIiwicmVkdWNlIiwic3VtIiwiX3JlZjIiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJzZXRUaXRsZSIsImFsbFRvcGljIiwiSWR0b1RvcGljIiwiVG9waWN0b0lkIiwiZGF0YUNhY2hlIiwiY29tcGFuaWVzIiwibG9hZERhdGEiLCJhbGxUb3BpY3NEYXRhIiwiUHJvbWlzZSIsImFsbCIsInRhcmdldF9pZCIsInRpbWUiLCJjb21wYW55VXJsIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJzcGFyc2VEYXRhVXJsIiwiY3VycmVudCIsIm5vcm1hbGl6ZVN0cmluZyIsInN0ciIsIndhcm4iLCJub3JtYWxpemUiLCJzYW5pdGl6ZWRDb21wYW5pZXMiLCJzYW5pdGl6ZWRDb21wYW55Iiwicm93U3VtcyIsImNvbXBhbnlJbmRleCIsImluZGV4T2YiLCJmaWx0ZXJlZERhdGEiLCJ0b3RhbFZhbHVlIiwibm9ybWFsaXplZERhdGEiLCJjYXRlZ29yeSIsInNvcnQiLCJhIiwiYiIsInNsaWNlIiwiaGFuZGxlUGxvdENsaWNrIiwiZXZlbnQiLCJwb2ludHMiLCJsYWJlbCIsInRvcGljaWQiLCJyZXBsYWNlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidHlwZSIsInZhbHVlcyIsImxhYmVscyIsIlN0cmluZyIsImRpcmVjdGlvbiIsIm1hcmtlciIsImNvbG9ycyIsInNob3dsZWdlbmQiLCJwbG90X2JnY29sb3IiLCJwYXBlcl9iZ2NvbG9yIiwibWFyZ2luIiwidCIsImwiLCJyIiwiZmV0Y2hUZXh0RGF0YSIsImxvYWRDaGFydERhdGEiLCJ0YXJnZXRJZCIsImRhdGFVcmwiLCJjb2x1bW5VcmwiLCJzb3J0ZWREYXRhIiwibG9hZENvbXBhbmllcyIsImRhdGFQYXRoIiwidG9MaXN0IiwibGluZXMiLCJhbHBoYV9saSIsInBhcnNlRmxvYXQiLCJiZXRhX2xpIiwiUGxvdFBlcnNvbkNvbXAiLCJhcnJvd19jb2xvciIsInByZXBhcmVkRGF0YSIsInNldFByZXBhcmVkRGF0YSIsImZpZ0RhdGEiLCJzZXRGaWdEYXRhIiwiYW5ub3RhdGlvbnMiLCJzZXRBbm5vdGF0aW9ucyIsInByZXBhcmVEYXRhIiwiYWxsUHJvbWlzZXMiLCJjb2x1bW5QYXRoIiwiY29tcGFueURpY3QiLCJhY2MiLCJpZHgiLCJuZXdTZWFyY2hMaXN0IiwiaXNBcnJheSIsImZpbHRlcmVkU2VhcmNoTGlzdCIsIm5vZGVfYWxwaGEiLCJub2RlX2JldGEiLCJwcm9taXNlcyIsIl8iLCJqIiwicCIsInBhcmFtZXRlclBhdGgiLCJrIiwicmVzdWx0cyIsImNvbWJpbmVkQWxwaGEiLCJmbGF0TWFwIiwicmVzdWx0IiwiY29tYmluZWRCZXRhIiwiY29tYmluZWRTZWFyY2hMaXN0IiwiYWxwaGEiLCJiZXRhIiwic2VhcmNoTGlzdCIsInBsb3REYXRhIiwieCIsInkiLCJtb2RlIiwidGV4dHBvc2l0aW9uIiwic3ltYm9sIiwiY29sb3IiLCJzaXplIiwibmFtZSIsInBsb3RBbm5vdGF0aW9ucyIsInhyZWYiLCJ5cmVmIiwiYXhyZWYiLCJheXJlZiIsImF4IiwiYXkiLCJhcnJvd2NvbG9yIiwiYXJyb3dzaXplIiwiYXJyb3d3aWR0aCIsImFycm93aGVhZCIsInNob3dhcnJvdyIsImZvbnQiLCJ4YW5jaG9yIiwieWFuY2hvciIsInhheGlzIiwicmFuZ2UiLCJsaW5lY29sb3IiLCJsaW5ld2lkdGgiLCJncmlkY29sb3IiLCJncmlkd2lkdGgiLCJncmlkZGFzaCIsInRpY2ttb2RlIiwidGlja3ZhbHMiLCJ0aWNrdGV4dCIsInplcm9saW5lIiwieWF4aXMiLCJ0aXRsZV9zdGFuZG9mZiIsImxlZ2VuZCIsImJnY29sb3IiLCJib3JkZXJjb2xvciIsImJvcmRlcndpZHRoIiwiY29uZmlnIiwicmVzcG9uc2l2ZSIsIlBsb3RQZXJzb25Ub3BpYyIsInNldENvbXBhbnlMaXN0Iiwic2V0U2VhcmNoTGlzdCIsInRoZW4iLCJBY2NvcmRpb24iLCJCdXR0b24iLCJpbnB1dFR5cGUiLCJzZXRJbnB1dFR5cGUiLCJoYW5kbGVSYWRpb0NoYW5nZSIsInRhcmdldCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJzbSIsImRlZmF1bHRBY3RpdmVLZXkiLCJJdGVtIiwiZXZlbnRLZXkiLCJIZWFkZXIiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJodG1sRm9yIiwiZm9udFNpemUiLCJwYXRoIiwiY29tcGFueVBhdGgiLCJvcmlnaW5hbCIsImNvbXBhbnlEYXRhIiwiZm9ybWF0dGVkRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJKU09OIiwic3RyaW5naWZ5IiwicmV2ZXJzZSIsIm9yaWVudGF0aW9uIiwibWlycm9yIiwidGlja3N1ZmZpeCJdLCJzb3VyY2VSb290IjoiIn0=