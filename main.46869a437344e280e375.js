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
      const data = await (0,_go_anywhere_jsx__WEBPACK_IMPORTED_MODULE_7__.getCardData)(plot, visualType, topic);
      setCardData(data);
    };
    fetchData();
  }, [plot, visualType, topic]);
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
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u8A72\u5F53\u3059\u308B\u8868\u793A\u304C\u3042\u308A\u307E\u305B\u3093")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, item.direction.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Text, {
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
// 名前、plot、visualType、topic に応じたデータを取得する関数
const getCardData = async (plot, visualType, topic) => {
  try {
    // visualType が "one-topic" でない場合、何も返さない
    if (visualType !== "one-topic") {
      return [];
    }

    // データのパスを定義
    const dataPath = `${"/my-app"}/data/topic${topic}/persona=5/anywhere_5.json`;
    const columnPath = `${"/my-app"}/data/param/patent/alpha/topic=${topic}/column`;

    // JSONデータを fetch で同時に取得
    const [responseData, responseColumn] = await Promise.all([fetch(dataPath), fetch(columnPath)]);

    // レスポンスのエラーチェック
    if (!responseData.ok || !responseColumn.ok) {
      throw new Error("データの取得に失敗しました");
    }

    // JSONデータをパース
    const jsonDATA = await responseData.json();
    const columnList = (await responseColumn.text()).split("\n").map(line => line.trim());
    console.log(columnList);

    // "株式会社熊谷組" のデータが存在するかチェック
    const companyData = jsonDATA["株式会社熊谷組"];
    if (!companyData || !companyData[topic]) {
      console.warn("指定したデータが存在しません: 株式会社熊谷組");
      return [];
    }
    console.log("YO", companyData[topic]);
    // データを整形して返す
    return processData(companyData[topic], columnList);
  } catch (error) {
    console.error("データの読み込みに失敗しました:", error);
    return [];
  }
};

// データ整形関数: up, down, right, left を columnList の値で置き換えて返す
const processData = (data, columnList) => {
  if (!data || !columnList) return [];
  const {
    up = [],
    down = [],
    right = [],
    left = []
  } = data;
  // 配列の値を columnList のインデックスで置き換える
  const replaceValuesWithColumns = (values, columnList) => values.map(index => {
    console.log(index);
    console.log(columnList[index]);
    const replacedValue = columnList[index];
    return replacedValue;
  });
  return [{
    direction: "順応性UP",
    values: replaceValuesWithColumns(down, columnList)
  }, {
    direction: "順応性DOWN",
    values: replaceValuesWithColumns(up, columnList)
  }, {
    direction: "新規性UP",
    values: replaceValuesWithColumns(right, columnList)
  }, {
    direction: "順応性DOWN",
    values: replaceValuesWithColumns(left, columnList)
  }];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9hcHAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvZ28tYW55d2hlcmUuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvb2NjdXB5LWNvbXBhbnkuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9vY2N1cHkuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9wZXJzb25hLWNvbXAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9wZXJzb25hLXRvcGljLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvc2lkZWJhci5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RyZW5kLWNvbXAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy90cmVuZC10b3BpeC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhci5qc3gnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50LmpzeCc7XG5pbXBvcnQgeyB1c2VBdXRoMCB9IGZyb20gJ0BhdXRoMC9hdXRoMC1yZWFjdCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2dpbldpdGhSZWRpcmVjdCwgbG9nb3V0LCBpc0F1dGhlbnRpY2F0ZWQsIHVzZXIgfSA9IHVzZUF1dGgwKCk7IC8vIEF1dGgw44Gu5oOF5aCx44KS5Y+W5b6XXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbG9naW5XaXRoUmVkaXJlY3Qoe1xuICAgICAgICBjb25uZWN0aW9uOiAnVXNlcm5hbWUtUGFzc3dvcmQtQXV0aGVudGljYXRpb24nLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODreOCsOOCpOODs+OCqOODqeODvDpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFycm93Q29sb3IgPSBbXG4gICAgJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRicsXG4gICAgJyMzRTlFNkYnLCAnI0YzODE4MScsICcjNTQ1RTc1JywgJyNGRkI2MjcnLCAnIzU3NzU5MCcsXG4gIF07XG4gIGNvbnN0IGNvbXBhbnlMaXN0ID0gW1xuICAgICfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+5aSn5p6X57WEJywgJ+a4heawtOW7uuioreagquW8j+S8muekvicsICflpKfmiJDlu7roqK3moKrlvI/kvJrnpL4nLFxuICAgICfmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupcnLCAn5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzJywgJ+WJjeeUsOW7uuioreW3pealreagquW8j+S8muekvicsXG4gICAgJ+S6lOa0i+W7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7jg5Xjgrjjgr8nLCAn5oi455Sw5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvueGiuiwt+e1hCcsXG4gIF07XG4gIGNvbnN0IHRvcGljTGlzdCA9IFsnMCcsICcxJywgJzInLCAnMycsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTEnXTtcblxuICBjb25zdCBbdmlzdWFsVHlwZSwgc2V0VmlzdWFsVHlwZV0gPSB1c2VTdGF0ZSgnb25lLXRvcGljJyk7XG4gIGNvbnN0IFtpc0FwcGxpZWQsIHNldElzQXBwbGllZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29tcGFuaWVzLCBzZXRTZWxlY3RlZENvbXBhbmllc10gPSB1c2VTdGF0ZShbJ+agquW8j+S8muekvueGiuiwt+e1hCddKTtcbiAgY29uc3QgW3NlbGVjdGVkVG9waWNzLCBzZXRTZWxlY3RlZFRvcGljc10gPSB1c2VTdGF0ZShbJzAnXSk7XG5cbiAgY29uc3QgaGFuZGxlVmlzdWFsVHlwZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldFZpc3VhbFR5cGUodmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwcGx5ID0gKCkgPT4ge1xuICAgIHNldElzQXBwbGllZCgxKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTZWxlY3Rpb24gPSAoaXRlbSwgc2V0U2VsZWN0ZWQsIGJ1dHRvbXR5cGUpID0+IHtcbiAgICBpZiAoYnV0dG9tdHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgc2V0U2VsZWN0ZWQoKHByZXZTZWxlY3RlZCkgPT5cbiAgICAgICAgcHJldlNlbGVjdGVkLmluY2x1ZGVzKGl0ZW0pXG4gICAgICAgICAgPyBwcmV2U2VsZWN0ZWQuZmlsdGVyKChpKSA9PiBpICE9PSBpdGVtKVxuICAgICAgICAgIDogWy4uLnByZXZTZWxlY3RlZCwgaXRlbV1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkKFtpdGVtXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IENvbXBhbnlDaGVja2JveENoYW5nZSA9IChjb21wYW55LCBidXR0b210eXBlKSA9PiB7XG4gICAgdG9nZ2xlU2VsZWN0aW9uKGNvbXBhbnksIHNldFNlbGVjdGVkQ29tcGFuaWVzLCBidXR0b210eXBlKTtcbiAgfTtcblxuICBjb25zdCBUb3BpY0NoZWNrYm94Q2hhbmdlID0gKHRvcGljLCBidXR0b210eXBlKSA9PiB7XG4gICAgdG9nZ2xlU2VsZWN0aW9uKHRvcGljLCBzZXRTZWxlY3RlZFRvcGljcywgYnV0dG9tdHlwZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZWxlY3RlZENvbXBhbmllcyhbJ+agquW8j+S8muekvueGiuiwt+e1hCddKTtcbiAgICBzZXRTZWxlY3RlZFRvcGljcyhbJzAnXSk7XG4gIH0sIFt2aXN1YWxUeXBlXSk7XG5cbiAgY29uc3QgcmVzZXRJc0FwcGxpZWQgPSAoKSA9PiB7XG4gICAgc2V0SXNBcHBsaWVkKDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpZD1cInJlYWN0LWNvbnRlbnRcIiBmbHVpZCBjbGFzc05hbWU9XCJiZy1saWdodFwiPlxuICAgICAgPFJvdz5cbiAgICAgICAgeyFpc0F1dGhlbnRpY2F0ZWQgPyAoIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOBquOBhOWgtOWQiFxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDE+44Ot44Kw44Kk44Oz44GM5b+F6KaB44Gn44GZPC9oMT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+XG4gICAgICAgICAgICAgICAg44Ot44Kw44Kk44OzXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICkgOiAoIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+WgtOWQiFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7Lyog44K144Kk44OJ44OQ44O8ICovfVxuICAgICAgICAgICAgPENvbCBtZD17M30gY2xhc3NOYW1lPVwiYm9yZGVyLWVuZFwiPlxuICAgICAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgICAgIG9uQXBwbHk9e2hhbmRsZUFwcGx5fVxuICAgICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgICAgb25WaXN1YWxUeXBlQ2hhbmdlPXtoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHRvcGljTGlzdD17dG9waWNMaXN0fVxuICAgICAgICAgICAgICAgIGNvbXBhbnlMaXN0PXtjb21wYW55TGlzdH1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbXBhbmllcz17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb3BpY3M9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlVG9waWM9e1RvcGljQ2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wYW55PXtDb21wYW55Q2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgey8qIOODoeOCpOODs+OCs+ODs+ODhuODs+ODhCAqL31cbiAgICAgICAgICAgIDxDb2wgbWQ9ezl9IGNsYXNzTmFtZT1cImJvcmRlci1lbmRcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgICAgcGxvdD17aXNBcHBsaWVkfVxuICAgICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgICAgdG9waWM9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgICAgIGNvbXBhbnk9e3NlbGVjdGVkQ29tcGFuaWVzfVxuICAgICAgICAgICAgICAgIHJlc2V0QXBwbHk9e3Jlc2V0SXNBcHBsaWVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cD5wbG90OiB7aXNBcHBsaWVkfTwvcD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH1mcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBQbG90UGllQSBmcm9tICcuL29jY3VweS5qc3gnO1xuaW1wb3J0IFBsb3RQaWVCIGZyb20gJy4vb2NjdXB5LWNvbXBhbnkuanN4JztcbmltcG9ydCBQbG90UGVyc29uYUNvbXAgZnJvbSAnLi9wZXJzb25hLWNvbXAuanN4JztcbmltcG9ydCBQbG90UGVyc29uYVRvcGljIGZyb20gJy4vcGVyc29uYS10b3BpYy5qc3gnO1xuXG5pbXBvcnQgUGxvdEJhckNoYXJ0QSBmcm9tICcuL3RyZW5kLXRvcGl4LmpzeCc7XG5pbXBvcnQgUGxvdEJhckNoYXJ0QiBmcm9tICcuL3RyZW5kLWNvbXAuanN4JztcbmltcG9ydCB7IGdldENhcmREYXRhIH0gZnJvbSBcIi4vZ28tYW55d2hlcmUuanN4XCI7IC8vIOato+OBl+OBhOODkeOCueOCkuaMh+WumlxuXG5cblxuXG5cbmNvbnN0IENvbnRlbnQgPSAoe3Bsb3QsdmlzdWFsVHlwZSx0b3BpYyxjb21wYW55LHJlc2V0QXBwbHl9KSA9PiB7XG5cblxuXG4gICAgY29uc3QgW2NsaWNrRGF0YSwgc2V0Q2xpY2tEYXRhXSA9IHVzZVN0YXRlKCk7IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBrueKtuaFi1xuXG4gICAgY29uc3QgaGFuZGxlUGllQ2hhcnRDbGljayA9IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIuOCr+ODquODg+OCr+OBleOCjOOBn+ODh+ODvOOCvzpcIiwgZGF0YSk7IC8vIOODh+ODkOODg+OCsOeUqFxuICAgICAgc2V0Q2xpY2tEYXRhKGRhdGEpOyAvLyDnirbmhYvjgpLmm7TmlrBcbiAgICB9O1xuXG4gICAgY29uc3QgW2NhcmREYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q2FyZERhdGEocGxvdCwgdmlzdWFsVHlwZSwgdG9waWMpO1xuICAgICAgICBzZXRDYXJkRGF0YShkYXRhKTtcbiAgICAgIH07XG4gICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbcGxvdCwgdmlzdWFsVHlwZSwgdG9waWNdKTtcbiAgXG4gICAgXG4gIHJldHVybiAoXG4gICAgXG4gICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJiZy1saWdodFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIHsvKiBGaXJzdCBSb3cgKi99XG4gICAgICA8Um93IHN0eWxlPXt7IGhlaWdodDogJzUwdmgnIH19PlxuICAgICAgICB7LyogUGVyc29uYSBHcmFwaCAqL31cbiAgICAgICAgPENvbCBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwJScgfX0+XG5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFUb3BpY1xuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44Oa44Or44K944OK44Gu5Y+v6KaW5YyWXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHZoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwdmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiID8gKFxuICAgICAgICAgICAgPFBsb3RQZXJzb25hQ29tcFxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44Oa44Or44K944OK44Gu5Y+v6KaW5YyWXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MnZoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPC9Db2w+XG4gIDwvUm93PlxuXG4gICAgICB7LyogU2Vjb25kIFJvdyAqL31cbiAgICAgIDxSb3cgc3R5bGU9e3sgaGVpZ2h0OiAnNTB2aCcgfX0+XG4gICAgICAgIDxDb2wgbWQ9ezZ9PlxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGllQVxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfms6jnm67kvIHmpa3jga7mpa3nlYzjgavlr77jgZnjgovljaDmnInnjocnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGllQlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgb25DbGlja0RhdGE9e2hhbmRsZVBpZUNoYXJ0Q2xpY2t9IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBruODj+ODs+ODieODqeODvOOCkua4oeOBmVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+azqOebruS8gealreOBrualreeVjOOBq+WvvuOBmeOCi+WNoOacieeOhycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgICBcbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgbWQ9ezZ9PlxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QVxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cblxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgZGF0YT17W119IC8vIOODh+ODvOOCv+OCkui/veWKoOOBl+OBpuOBj+OBoOOBleOBhFxuICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgIHRpdGxlOiAnRuOCv+ODvOODoOOBruWIhuW4gycsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KTooXG4gICAgICAgICAgPFBsb3RCYXJDaGFydEJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIGNsaWNrZGF0YT17Y2xpY2tEYXRhfSAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jgpLmuKHjgZlcbiAgICBcblxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgZGF0YT17W119IC8vIOODh+ODvOOCv+OCkui/veWKoOOBl+OBpuOBj+OBoOOBleOBhFxuICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgIHRpdGxlOiAnRuOCv+ODvOODoOOBruWIhuW4gycsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KX1cbiAgICAgICAgICBcbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiaC0xMDBcIj5cbiAgICAgIHtjYXJkRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxDb2xcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIHhzPXsxMn0gLy8g5ZCE44Kr44O844OJ44KSMeihjOOBq+ihqOekuuOAgeODrOOCpOOCouOCpuODiOOBq+W/nOOBmOOBpuiqv+aVtOWPr+iDvVxuICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgICAgICAgc3R5bGU9e3sgZmxleDogXCIxIDEgYXV0b1wiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTc1IGgtNzVcIj5cbiAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+XG4gICAgICAgICAgICAgICAge2l0ZW0uZGlyZWN0aW9uLnRvVXBwZXJDYXNlKCl9IFxuICAgICAgICAgICAgICA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZXMuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICApKX1cbiAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG5cbiIsIi8vIOWQjeWJjeOAgXBsb3TjgIF2aXN1YWxUeXBl44CBdG9waWMg44Gr5b+c44GY44Gf44OH44O844K/44KS5Y+W5b6X44GZ44KL6Zai5pWwXG5leHBvcnQgY29uc3QgZ2V0Q2FyZERhdGEgPSBhc3luYyAocGxvdCwgdmlzdWFsVHlwZSwgdG9waWMpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gdmlzdWFsVHlwZSDjgYwgXCJvbmUtdG9waWNcIiDjgafjgarjgYTloLTlkIjjgIHkvZXjgoLov5TjgZXjgarjgYRcbiAgICAgIGlmICh2aXN1YWxUeXBlICE9PSBcIm9uZS10b3BpY1wiKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgXG4gICAgICAvLyDjg4fjg7zjgr/jga7jg5HjgrnjgpLlrprnvqlcbiAgICAgIGNvbnN0IGRhdGFQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS90b3BpYyR7dG9waWN9L3BlcnNvbmE9NS9hbnl3aGVyZV81Lmpzb25gO1xuICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dG9waWN9L2NvbHVtbmA7XG4gIFxuICAgICAgLy8gSlNPTuODh+ODvOOCv+OCkiBmZXRjaCDjgaflkIzmmYLjgavlj5blvpdcbiAgICAgIGNvbnN0IFtyZXNwb25zZURhdGEsIHJlc3BvbnNlQ29sdW1uXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2goZGF0YVBhdGgpLFxuICAgICAgICBmZXRjaChjb2x1bW5QYXRoKSxcbiAgICAgIF0pO1xuICBcbiAgICAgIC8vIOODrOOCueODneODs+OCueOBruOCqOODqeODvOODgeOCp+ODg+OCr1xuICAgICAgaWYgKCFyZXNwb25zZURhdGEub2sgfHwgIXJlc3BvbnNlQ29sdW1uLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIuODh+ODvOOCv+OBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn1wiKTtcbiAgICAgIH1cbiAgXG4gICAgICAvLyBKU09O44OH44O844K/44KS44OR44O844K5XG4gICAgICBjb25zdCBqc29uREFUQSA9IGF3YWl0IHJlc3BvbnNlRGF0YS5qc29uKCk7XG4gICAgICBjb25zdCBjb2x1bW5MaXN0ID0gKGF3YWl0IHJlc3BvbnNlQ29sdW1uLnRleHQoKSkuc3BsaXQoXCJcXG5cIikubWFwKGxpbmUgPT4gbGluZS50cmltKCkpO1xuICAgICAgY29uc29sZS5sb2coY29sdW1uTGlzdClcbiAgXG4gICAgICAvLyBcIuagquW8j+S8muekvueGiuiwt+e1hFwiIOOBruODh+ODvOOCv+OBjOWtmOWcqOOBmeOCi+OBi+ODgeOCp+ODg+OCr1xuICAgICAgY29uc3QgY29tcGFueURhdGEgPSBqc29uREFUQVtcIuagquW8j+S8muekvueGiuiwt+e1hFwiXTtcbiAgICAgIGlmICghY29tcGFueURhdGEgfHwgIWNvbXBhbnlEYXRhW3RvcGljXSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCLmjIflrprjgZfjgZ/jg4fjg7zjgr/jgYzlrZjlnKjjgZfjgb7jgZvjgpM6IOagquW8j+S8muekvueGiuiwt+e1hFwiKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhcIllPXCIsY29tcGFueURhdGFbdG9waWNdKVxuICAgICAgLy8g44OH44O844K/44KS5pW05b2i44GX44Gm6L+U44GZXG4gICAgICByZXR1cm4gcHJvY2Vzc0RhdGEoY29tcGFueURhdGFbdG9waWNdLCBjb2x1bW5MaXN0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OBq+WkseaVl+OBl+OBvuOBl+OBnzpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcbiAgXG4gIC8vIOODh+ODvOOCv+aVtOW9oumWouaVsDogdXAsIGRvd24sIHJpZ2h0LCBsZWZ0IOOCkiBjb2x1bW5MaXN0IOOBruWApOOBp+e9ruOBjeaPm+OBiOOBpui/lOOBmVxuICBjb25zdCBwcm9jZXNzRGF0YSA9IChkYXRhLCBjb2x1bW5MaXN0KSA9PiB7XG4gICAgaWYgKCFkYXRhIHx8ICFjb2x1bW5MaXN0KSByZXR1cm4gW107XG4gIFxuIGNvbnN0IHsgdXAgPSBbXSwgZG93biA9IFtdLCByaWdodCA9IFtdLCBsZWZ0ID0gW10gfSA9IGRhdGE7XG4gLy8g6YWN5YiX44Gu5YCk44KSIGNvbHVtbkxpc3Qg44Gu44Kk44Oz44OH44OD44Kv44K544Gn572u44GN5o+b44GI44KLXG4gICAgY29uc3QgcmVwbGFjZVZhbHVlc1dpdGhDb2x1bW5zID0gKHZhbHVlcywgY29sdW1uTGlzdCkgPT5cbiAgICAgICAgdmFsdWVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbkxpc3RbaW5kZXhdKVxuICAgICAgICBjb25zdCByZXBsYWNlZFZhbHVlID0gY29sdW1uTGlzdFtpbmRleF07XG4gICAgICAgIHJldHVybiByZXBsYWNlZFZhbHVlO1xuICAgICAgICB9KTtcbiAgXG4gICAgIFxuXG4gIFxuICAgIHJldHVybiBbXG4gICAgICB7IGRpcmVjdGlvbjogXCLpoIblv5zmgKdVUFwiLCB2YWx1ZXM6IHJlcGxhY2VWYWx1ZXNXaXRoQ29sdW1ucyhkb3duLGNvbHVtbkxpc3QpIH0sXG4gICAgICB7IGRpcmVjdGlvbjogXCLpoIblv5zmgKdET1dOXCIsIHZhbHVlczogcmVwbGFjZVZhbHVlc1dpdGhDb2x1bW5zKHVwLGNvbHVtbkxpc3QpIH0sXG4gICAgICB7IGRpcmVjdGlvbjogXCLmlrDopo/mgKdVUFwiLCB2YWx1ZXM6IHJlcGxhY2VWYWx1ZXNXaXRoQ29sdW1ucyhyaWdodCxjb2x1bW5MaXN0KSB9LFxuICAgICAgeyBkaXJlY3Rpb246IFwi6aCG5b+c5oCnRE9XTlwiLCB2YWx1ZXM6IHJlcGxhY2VWYWx1ZXNXaXRoQ29sdW1ucyhsZWZ0LGNvbHVtbkxpc3QpIH0sXG4gICAgXTtcbiAgfTtcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwLmpzeFwiO1xuaW1wb3J0IHsgQXV0aDBQcm92aWRlciB9IGZyb20gXCJAYXV0aDAvYXV0aDAtcmVhY3RcIjtcblxuLy8gQXV0aDDjga7oqK3lrppcbmNvbnN0IGRvbWFpbiA9IFwiZGV2LWwzYmdlZ25qanh3eDJvZDQudXMuYXV0aDAuY29tXCI7IC8vIEF1dGgw44Gu44OJ44Oh44Kk44OzXG5cbmNvbnN0IGNsaWVudElkID0gXCJpdnRneDFhck41SjA5Wnc4eVBDaUVrcFExRFozUDIyZVwiOyAvLyBBdXRoMOOBruOCr+ODqeOCpOOCouODs+ODiElEXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPEF1dGgwUHJvdmlkZXJcbiAgICAgIGRvbWFpbj17ZG9tYWlufVxuICAgICAgY2xpZW50SWQ9e2NsaWVudElkfVxuICAgICAgYXV0aG9yaXphdGlvblBhcmFtcz17e1xuICAgICAgICByZWRpcmVjdF91cmk6IFwiaHR0cHM6Ly9oaXJvZW1vbi1tLmdpdGh1Yi5pby9teS1hcHAvXCIsIC8vIOiqjeiovOW+jOOBq+ODquODgOOCpOODrOOCr+ODiOOBmeOCi1VSTFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QXBwIC8+XG4gICAgPC9BdXRoMFByb3ZpZGVyPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5cblxuY29uc3QgY29sb3JtYXAgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjoncmdiKDIyOSwgMTM0LCA2KScsIFwi5Zyw55uk5pS56ImvXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLjg4jjg7Pjg43jg6vmjpjliYpcIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWFjemch+ani+mAoFwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi566h55CG44K344K544OG44OgXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLlu4Pmo4Tnianlh6bnkIZcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbn07XG5cblxuLy8gZmV0Y2hEYXRh6Zai5pWw77yaSlNPTuOBvuOBn+OBr+ODhuOCreOCueODiOW9ouW8j+OBq+WvvuW/nFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG5cbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIEpTT07lvaLlvI/jga7loLTlkIhcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgLy8g44OX44Os44O844Oz44OG44Kt44K544OI44Gu5aC05ZCIXG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7IC8vIOaUueihjOWMuuWIh+OCiuOBruODh+ODvOOCv+OCkumFjeWIl+OBqOOBl+OBpui/lOOBmVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjgrnjg5Hjg7zjgrnjg4fjg7zjgr/jgpLlr4booYzliJfjgavlpInmj5vjgZfjgIHooYzmlrnlkJHjga7lkozjgpLoqIjnrpdcbmNvbnN0IHByb2Nlc3NTcGFyc2VEYXRhID0gKHNwYXJzZURhdGEpID0+IHtcbiAgICBcbiAgY29uc3QgbnVtUm93cyA9IE1hdGgubWF4KC4uLnNwYXJzZURhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnJvdykpICsgMTtcbiAgY29uc3QgbnVtQ29scyA9IE1hdGgubWF4KC4uLnNwYXJzZURhdGEubWFwKGVudHJ5ID0+IGVudHJ5LmNvbCkpICsgMTtcblxuICBjb25zdCBtYXRyaXggPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Sb3dzIH0sICgpID0+IEFycmF5KG51bUNvbHMpLmZpbGwoMCkpO1xuICBzcGFyc2VEYXRhLmZvckVhY2goKHsgcm93LCBjb2wsIHZhbHVlIH0pID0+IHtcbiAgICBtYXRyaXhbcm93XVtjb2xdID0gdmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiBtYXRyaXgubWFwKHJvdyA9PiByb3cucmVkdWNlKChzdW0sIHZhbHVlKSA9PiBzdW0gKyB2YWx1ZSwgMCkpOyAvLyDooYzmlrnlkJHjga7lkozjgpLov5TjgZlcbn07XG5cbmNvbnN0IFBsb3RQaWVCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCwgb25DbGlja0RhdGEgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwi5rOo55uu44OI44OU44OD44Kv44Gr6Zai44GZ44KL54m56Kix44Gu5LyB5qWt5Y2g5pyJ546HXCIpO1xuICBjb25zdCBhbGxUb3BpYyA9IFsyLCAzLCAxLCAwLCA5LCA2LCA4LCA3LCAxMV07XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICAgIGNvbnN0IFRvcGljdG9JZCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOlwiMlwiLFwi5Zyw55uk5pS56ImvXCI6XCIzXCIsXCLjg4jjg7Pjg43jg6vmjpjliYpcIjpcIjFcIixcbiAgICAgICAgXCLlhY3pnIfmp4vpgKBcIjpcIjBcIixcIueuoeeQhuOCt+OCueODhuODoFwiOlwiOVwiLFwi5buD5qOE54mp5Yem55CGXCI6XCI2XCIsXCLlu7rnr4njg5Hjg43jg6tcIjpcIjhcIixcbiAgICAgICBcIuepuuiqv+OCt+OCueODhuODoFwiOlwiN1wiLFwi5o6Y5YmK6KOF572uXCI6XCIxMVwiLFwi5bu656+J6Kit6KiIXCI6XCIxMFwiLFwi44OI44Oz44ON44Or5ris6YePXCI6XCI1XCJ9O1xuICAvLyDjgq3jg6Pjg4Pjgrfjg6XnlKjjga7jgqrjg5bjgrjjgqfjgq/jg4hcbiAgY29uc3QgZGF0YUNhY2hlID0gdXNlUmVmKHtcbiAgICBjb21wYW5pZXM6IHt9LFxuICAgIHNwYXJzZURhdGE6IHt9XG4gIH0pO1xuXG4gIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhbGxUb3BpY3NEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIGFsbFRvcGljLm1hcChhc3luYyAodGFyZ2V0X2lkKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZSA9IDk7XG4gICAgICAgICAgY29uc3QgY29tcGFueVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0X2lkfS9jb21wYW55LnR4dGA7XG4gICAgICAgICAgY29uc3Qgc3BhcnNlRGF0YVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdG9waWMke3RhcmdldF9pZH0vcGVyc29uYT01L29jY3VweV90b3BpY18ke3RpbWV9Lmpzb25gO1xuXG4gICAgICAgICAgLy8g44Kt44Oj44OD44K344Ol44KS56K66KqNXG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXSkge1xuICAgICAgICAgICAgZGF0YUNhY2hlLmN1cnJlbnQuY29tcGFuaWVzW3RhcmdldF9pZF0gPSBhd2FpdCBmZXRjaERhdGEoY29tcGFueVVybCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudC5zcGFyc2VEYXRhW3RhcmdldF9pZF0pIHtcbiAgICAgICAgICAgIGRhdGFDYWNoZS5jdXJyZW50LnNwYXJzZURhdGFbdGFyZ2V0X2lkXSA9IGF3YWl0IGZldGNoRGF0YShzcGFyc2VEYXRhVXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjb21wYW5pZXMgPSBkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXTtcbiAgICAgICAgICBjb25zdCBzcGFyc2VEYXRhID0gZGF0YUNhY2hlLmN1cnJlbnQuc3BhcnNlRGF0YVt0YXJnZXRfaWRdO1xuXG4gICAgICAgICAgLy8g5q2j6KaP5YyW6Zai5pWwXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cikgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi6Z2e5paH5a2X5YiX44OH44O844K/44GM5qSc5Ye644GV44KM44G+44GX44GfOlwiLCBzdHIpO1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8g6Z2e5paH5a2X5YiX44OH44O844K/44Gv54Sh6KaWXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyLm5vcm1hbGl6ZShcIk5GQ1wiKS50cmltKCk7IC8vIOato+imj+WMluOBqOODiOODquODoOOCkumBqeeUqFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyDmraPopo/ljJbjgZfjgZ/jg4fjg7zjgr/jgafmr5TovINcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW5pZXMgPSBjb21wYW5pZXMubWFwKG5vcm1hbGl6ZVN0cmluZyk7XG4gICAgICAgICAgY29uc3Qgc2FuaXRpemVkQ29tcGFueSA9IG5vcm1hbGl6ZVN0cmluZyhjb21wYW55WzBdKTtcblxuICAgICAgICAgIGlmICghc2FuaXRpemVkQ29tcGFuaWVzLmluY2x1ZGVzKHNhbml0aXplZENvbXBhbnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke3Nhbml0aXplZENvbXBhbnl9XCIgbm90IGZvdW5kIGluIHRvcGljICR7dGFyZ2V0X2lkfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g44K544OR44O844K544OH44O844K/44KS5Yem55CGXG4gICAgICAgICAgY29uc3Qgcm93U3VtcyA9IHByb2Nlc3NTcGFyc2VEYXRhKHNwYXJzZURhdGEpO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gc2FuaXRpemVkQ29tcGFuaWVzLmluZGV4T2Yoc2FuaXRpemVkQ29tcGFueSk7XG5cbiAgICAgICAgICByZXR1cm4geyB0b3BpYzogdGFyZ2V0X2lkLCB2YWx1ZTogcm93U3Vtc1tjb21wYW55SW5kZXhdIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBhbGxUb3BpY3NEYXRhLmZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPT0gbnVsbCk7XG5cbiAgICAgIC8vIOato+imj+WMluOBqOOCveODvOODiFxuICAgICAgY29uc3QgdG90YWxWYWx1ZSA9IGZpbHRlcmVkRGF0YS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS52YWx1ZSwgMCk7XG4gICAgICBpZiAodG90YWxWYWx1ZSA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJObyB2YWxpZCBkYXRhIHRvIG5vcm1hbGl6ZS5cIik7XG4gICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRhID0gZmlsdGVyZWREYXRhLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGNhdGVnb3J5OiBpdGVtLnRvcGljLFxuICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSAvIHRvdGFsVmFsdWUsXG4gICAgICB9KSkuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xuXG4gICAgICBzZXRDaGFydERhdGEobm9ybWFsaXplZERhdGEuc2xpY2UoMCwgMTApKTsgLy8g5LiK5L2NMTDku7bjga7jgb/ooajnpLpcbiAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g5Yid5pyf44OH44O844K/6Kqt44G/6L6844G/44GodXBkYXRl44Gu5aSJ5pu05pmC44Gr44OH44O844K/44KS44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIikge1xuICAgICAgbG9hZERhdGEoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHZpc3VhbFR5cGVdKTtcblxuICBjb25zdCBoYW5kbGVQbG90Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRzICYmIGV2ZW50LnBvaW50c1swXSkge1xuICAgICAgY29uc3QgY2xpY2tkYXRhID0gZXZlbnQucG9pbnRzWzBdLmxhYmVsOyAvLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/pg6jliIbjga7jg6njg5njg6tcbiAgICAgIGNvbnN0IGxhYmVsID0gVG9waWN0b0lkW2NsaWNrZGF0YV1cbiAgICAgIGNvbnN0IHRvcGljaWQgPSBsYWJlbC5yZXBsYWNlKFwiVG9waWMgXCIsIFwiXCIpO1xuICAgICAgb25DbGlja0RhdGEoW3RvcGljaWRdKTsgLy8g6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Op44OZ44Or44KS6YCa55+lXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHZhbHVlczogY2hhcnREYXRhLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gIElkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW0lkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldXSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNzAsIGI6IDUsIGw6IDQwLCByOiA1MCB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBsb3RDbGlja30gLy8g44Kv44Oq44OD44Kv44Kk44OZ44Oz44OI44KS6L+95YqgXG4gICAgICAvPlxuICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQaWVCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbi8vIOODhuOCreOCueODiOODh+ODvOOCv+OCkuiqreOBv+i+vOOCgOmWouaVsFxuY29uc3QgZmV0Y2hUZXh0RGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBpZUEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICBjb25zdCBjb2xvcm1hcCA9IHsn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JzoncmdiKDIyOSwgMTM0LCA2KScsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICAgICAgXCLlpKfmiJDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIuagquW8j+S8muekvuerueS4reW3peWLmeW6l1wiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gICAgICBcIuWJjeeUsOW7uuioreW3pealreagquW8j+S8muekvlwiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLkupTmtIvlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuagquW8j+S8muekvuODleOCuOOCv1wiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICAgICAgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDIzNywgMTAwLCA5MCknLCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiOidyZ2IoMTY1LCAxNzAsIDE1MyknfTtcbiAgICAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDA7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWMgfHwgXCJkZWZhdWx0X3RvcGljXCI7IC8vIOWIneacn+WApOOBqOOBl+OBplwiZGVmYXVsdF90b3BpY1wi44KS6Kit5a6aXG4gICAgICAgIGNvbnN0IGRhdGFVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3RvcGljJHt0YXJnZXRJZH0vcGVyc29uYT01L29jY3VweV9tZWFuXyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGNvbHVtblVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0SWR9L2NvbXBhbnkudHh0YDtcblxuICAgICAgICAvLyDjg4fjg7zjgr/lj5blvpdcbiAgICAgICAgY29uc3QgW3ZhbHVlcywgbGFiZWxzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEoZGF0YVVybCksXG4gICAgICAgICAgZmV0Y2hUZXh0RGF0YShjb2x1bW5VcmwpLFxuICAgICAgICBdKTtcblxuICAgICAgICAvLyDlgKTjgajjg6njg5njg6vjga7ntYTjgb/lkIjjgo/jgZvjgpLkvZzmiJBcbiAgICAgICAgY29uc3QgZGF0YSA9IGxhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVzLnZhbHVlW2luZGV4XSB8fCAwLCAvLyDlgKTjgYzjgarjgYTloLTlkIjjga8wXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyDlgKTjgavln7rjgaXjgYTjgabpmY3poIbjgavjgr3jg7zjg4jjgZfjgabkuIrkvY0xMOS7tuOCkuaKveWHulxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7SWR0b1RvcGljW3RhcmdldElkXX3jgavplqLjgZnjgovnibnoqLHjga7kvIHmpa3ljaDmnInnjodgKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OB44Oj44O844OI44OH44O844K/44Gu5Yem55CG5Lit44Gr44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOWIneWbnuODrOODs+ODgOODquODs+OCsOaZguOBqGB1cGRhdGVg5aSJ5pu05pmC44Gr44OH44O844K/44KS44Ot44O844OJXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBvblJlbmRlcmVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5sYWJlbCksXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiY2xvY2t3aXNlXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgY29sb3JzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBjb2xvcm1hcFtpdGVtLmxhYmVsXSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNzAsIGI6IDUsIGw6IDQwLCByOiA1MCB9LFxuICAgICAgICB9fVxuICBcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQaWVBO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cblxuIFxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCB0b0xpc3QgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICBjb25zdCBhbHBoYV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMF0pKTtcbiAgICBjb25zdCBiZXRhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVsxXSkpO1xuXG4gICAgcmV0dXJuIHsgYWxwaGFfbGksIGJldGFfbGkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYWxwaGFfbGk6IFtdLCBiZXRhX2xpOiBbXSB9O1xuICB9XG59O1xuXG5jb25zdCBQbG90UGVyc29uQ29tcCA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIG9uUmVuZGVyZWQgfSkgPT4ge1xuY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgICAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgICAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwifTtcblxuY29uc3QgY29sb3JtYXAgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjoncmdiKDIyOSwgMTM0LCA2KScsIFwi5Zyw55uk5pS56ImvXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLjg4jjg7Pjg43jg6vmjpjliYpcIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICAgICAgICAgIFwi5YWN6ZyH5qeL6YCgXCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLnrqHnkIbjgrfjgrnjg4bjg6BcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuW7g+ajhOeJqeWHpueQhlwiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICAgICAgICAgIFwi5bu656+J44OR44ON44OrXCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuepuuiqv+OCt+OCueODhuODoFwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5o6Y5YmK6KOF572uXCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gICAgICAgIH07XG4gICAgICAgIFxuICBjb25zdCBhcnJvd19jb2xvciA9IFsnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJ107XG5cbiAgY29uc3QgW3ByZXBhcmVkRGF0YSwgc2V0UHJlcGFyZWREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwi5LyB5qWt44Gu56uL44Gh5L2N572uXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlcGFyZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxQcm9taXNlcyA9ICh0b3BpYyB8fCBbXCJkZWZhdWx0X3RvcGljXCJdKS5tYXAoYXN5bmMgKHRhcmdldF9pZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b3BpY1wiLHRhcmdldF9pZClcbiAgICAgICAgICBjb25zdCBjb2x1bW5QYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRfaWR9L2NvbXBhbnkudHh0YDtcbiAgICAgICAgICBjb25zdCBjb21wYW5pZXMgPSBhd2FpdCBsb2FkQ29tcGFuaWVzKGNvbHVtblBhdGgpO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW5pZXMucmVkdWNlKChhY2MsIHZhbHVlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGFjY1t2YWx1ZV0gPSBpZHg7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIGNvbnN0IG5ld1NlYXJjaExpc3QgPSBBcnJheS5pc0FycmF5KGNvbXBhbnkpID8gY29tcGFueSA6IFtjb21wYW55XTtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJlZFNlYXJjaExpc3QgPSBuZXdTZWFyY2hMaXN0LmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSBpbiBjb21wYW55RGljdCk7XG5cbiAgICAgICAgICBjb25zdCBub2RlX2FscGhhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsdGVyZWRTZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcbiAgICAgICAgICBjb25zdCBub2RlX2JldGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWx0ZXJlZFNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuXG4gICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBqKSA9PiBqICsgNSkubWFwKGFzeW5jIChwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRfaWR9L3Rlc3Rfb3B0aW1pemVfJHtwfS50eHRgO1xuICAgICAgICAgICAgY29uc3QgeyBhbHBoYV9saSwgYmV0YV9saSB9ID0gYXdhaXQgdG9MaXN0KHBhcmFtZXRlclBhdGgpO1xuXG4gICAgICAgICAgICBmaWx0ZXJlZFNlYXJjaExpc3QuZm9yRWFjaCgoaywgaikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW5pZXMuaW5kZXhPZihrKTtcbiAgICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwIC0gNV0gPSBhbHBoYV9saVtpZHhdO1xuICAgICAgICAgICAgICBub2RlX2JldGFbal1bcCAtIDVdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgICByZXR1cm4geyBub2RlX2FscGhhLCBub2RlX2JldGEsIGZpbHRlcmVkU2VhcmNoTGlzdCB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpO1xuXG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQWxwaGEgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5ub2RlX2FscGhhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRCZXRhID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQubm9kZV9iZXRhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRTZWFyY2hMaXN0ID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQuZmlsdGVyZWRTZWFyY2hMaXN0KTtcblxuICAgICAgICBzZXRQcmVwYXJlZERhdGEoeyBhbHBoYTogY29tYmluZWRBbHBoYSwgYmV0YTogY29tYmluZWRCZXRhLCBzZWFyY2hMaXN0OiBjb21iaW5lZFNlYXJjaExpc3QgfSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnl944Gu5qWt55WM44Gn44Gu56uL44Gh5L2N572uYCk7IC8vIOWIneacn+OCv+OCpOODiOODq+OCkuioreWumlxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+a6luWCmeS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDliJ3mnJ/jg6zjg7Pjg4Djg6rjg7PjgrDmmYLjgavjgoLjg4fjg7zjgr/jgpLmupblgplcbiAgICBwcmVwYXJlRGF0YSgpO1xuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1cGRhdGUgJiYgcHJlcGFyZWREYXRhKSB7XG4gICAgICBjb25zdCBwbG90RGF0YSA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4gKHtcbiAgICAgICAgeDogcHJlcGFyZWREYXRhLmFscGhhW2pdLFxuICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXSxcbiAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgICAgdGV4dDogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0sXG4gICAgICAgIHRleHRwb3NpdGlvbjogXCJ0b3AgbGVmdFwiLFxuICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgIGNvbG9yOiBjb2xvcm1hcFtJZHRvVG9waWNbdG9waWNbal1dXSxcbiAgICAgICAgICBzaXplOiA1LFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiBJZHRvVG9waWNbdG9waWNbal1dLFxuICAgICAgfSkpO1xuXG4gICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBwcmVwYXJlZERhdGEuc2VhcmNoTGlzdC5mbGF0TWFwKChrLCBqKSA9PlxuICAgICAgICBBcnJheSg0KS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgICB4OiBwcmVwYXJlZERhdGEuYWxwaGFbal1baSArIDFdLFxuICAgICAgICAgIHk6IHByZXBhcmVkRGF0YS5iZXRhW2pdW2kgKyAxXSxcbiAgICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgICAgeXJlZjogJ3knLFxuICAgICAgICAgIGF4cmVmOiAneCcsXG4gICAgICAgICAgYXlyZWY6ICd5JyxcbiAgICAgICAgICBheDogcHJlcGFyZWREYXRhLmFscGhhW2pdW2ldLFxuICAgICAgICAgIGF5OiBwcmVwYXJlZERhdGEuYmV0YVtqXVtpXSxcbiAgICAgICAgICBhcnJvd2NvbG9yOmNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY1tqXV1dLFxuICAgICAgICAgIGFycm93c2l6ZTogMS4yLFxuICAgICAgICAgIGFycm93d2lkdGg6IDEuMixcbiAgICAgICAgICBhcnJvd2hlYWQ6IDUsXG4gICAgICAgICAgc2hvd2Fycm93OiB0cnVlLFxuICAgICAgICB9KSlcbiAgICAgICk7XG5cbiAgICAgIHNldEZpZ0RhdGEocGxvdERhdGEpO1xuICAgICAgc2V0QW5ub3RhdGlvbnMocGxvdEFubm90YXRpb25zKTtcblxuICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHByZXBhcmVkRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiAgc3R5bGU9e3sgd2lkdGg6JzEwMHZoJyAsaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17ZmlnRGF0YX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMjAsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgICAgICAgICB4cmVmOiAncGFwZXInLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC4yNSxcbiAgICAgICAgICAgICAgeTogMS4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuS8nee1seeahOOBquWIhumHjuOBq+WPluOCiue1hOOCk+OBp+OBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjc1LFxuICAgICAgICAgICAgICB5OiAxLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuMjUsXG4gICAgICAgICAgICAgIHk6IC0wLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNzUsXG4gICAgICAgICAgICAgIHk6IC0wLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcblxuICAgICAgICAgXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLmlrDopo/mgKdcIixcbiAgICAgICAgICAgIHJhbmdlOiBbMCwgMS4wM10sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMCwgMC41LCAxXSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLpoIblv5zmgKdcIixcbiAgICAgICAgICAgIHRpdGxlX3N0YW5kb2ZmOjI1LCAgIC8vIFnou7jjgYvjgonjga7ot53pm6LvvIjopovjgoTjgZnjgY/jgZnjgovjgZ/jgoHvvIlcbiAgICAgICAgICAgIHJhbmdlOiBbLTAuMSwgMS4xXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlstMC4xLCAwLjUsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDQwLCBsOiA0NSwgcjogNTAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIydmhcIiwgd2lkdGg6IFwiMTAwdmhcIiwgaGVpZ2h0OiBcIjQ1dmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGVyc29uQ29tcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5jb25zdCBjb2xvcm1hcCA9IHsn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JzoncmdiKDIyOSwgMTM0LCA2KScsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWkp+aIkOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDIzNywgMTAwLCA5MCknLCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiOidyZ2IoMTY1LCAxNzAsIDE1MyknfTtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCB0b0xpc3QgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICBjb25zdCBhbHBoYV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMF0pKTtcbiAgICBjb25zdCBiZXRhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVsxXSkpO1xuXG4gICAgcmV0dXJuIHsgYWxwaGFfbGksIGJldGFfbGkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYWxwaGFfbGk6IFtdLCBiZXRhX2xpOiBbXSB9O1xuICB9XG59O1xuXG5jb25zdCBQbG90UGVyc29uVG9waWMgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgYXJyb3dfY29sb3IgPSBbJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRiddO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29tcGFueUxpc3QsIHNldENvbXBhbnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaExpc3QsIHNldFNlYXJjaExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG5cbiAgLy8g5Yid5pyf44OH44O844K/44Gu44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0X2lkfS9jb21wYW55LnR4dGA7XG5cbiAgICAgIGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDb21wYW55TGlzdChkYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYOalreeVjOWGheOBp+OBruS8gealreOBrueri+OBoeS9jee9rmApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWNdKTtcblxuICAvLyDmpJzntKLlr77osaHjga7jg5XjgqPjg6vjgr/jg6rjg7PjgrBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29tcGFueUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW55TGlzdC5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICBzZXRTZWFyY2hMaXN0KG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KSk7XG4gICAgfVxuICB9LCBbY29tcGFueUxpc3QsIGNvbXBhbnldKTtcblxuICAvLyDjg4fjg7zjgr/jga7mj4/nlLtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXBkYXRlICYmIHNlYXJjaExpc3QubGVuZ3RoID4gMCAmJiB0b3BpYykge1xuICAgICAgY29uc3QgdGFyZ2V0X2lkID0gdG9waWM7IC8vIOODiOODlOODg+OCr0lE44Gu6Kit5a6aXG4gICAgICBjb25zdCBub2RlX2FscGhhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG4gICAgICBjb25zdCBub2RlX2JldGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcblxuICAgICAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBpKSA9PiBpICsgNSkubWFwKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC9hbHBoYS90b3BpYz0ke3RhcmdldF9pZH0vdGVzdF9vcHRpbWl6ZV8ke3B9LnR4dGA7XG4gICAgICAgIHJldHVybiB0b0xpc3QocGFyYW1ldGVyUGF0aCkudGhlbigoeyBhbHBoYV9saSwgYmV0YV9saSB9KSA9PiB7XG4gICAgICAgICAgc2VhcmNoTGlzdC5mb3JFYWNoKChrLCBqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW55TGlzdC5pbmRleE9mKGspO1xuICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwIC0gNV0gPSBhbHBoYV9saVtpZHhdO1xuICAgICAgICAgICAgbm9kZV9iZXRhW2pdW3AgLSA1XSA9IGJldGFfbGlbaWR4XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBwbG90RGF0YSA9IHNlYXJjaExpc3QubWFwKChrLCBqKSA9PiAoe1xuICAgICAgICAgIHg6IG5vZGVfYWxwaGFbal0sXG4gICAgICAgICAgeTogbm9kZV9iZXRhW2pdLFxuICAgICAgICAgIG1vZGU6IFwibGluZXMrbWFya2Vycyt0ZXh0XCIsXG4gICAgICAgICAgdGV4dDogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0sXG4gICAgICAgICAgdGV4dHBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgY29sb3I6IGNvbG9ybWFwW2tdLFxuICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IGssXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBzZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICAgICAgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgICAgICB4OiBub2RlX2FscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgICAgIHk6IG5vZGVfYmV0YVtqXVtpICsgMV0sXG4gICAgICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgICAgICB5cmVmOiAneScsXG4gICAgICAgICAgICBheDogbm9kZV9hbHBoYVtqXVtpXSxcbiAgICAgICAgICAgIGF5OiBub2RlX2JldGFbal1baV0sXG4gICAgICAgICAgICBheHJlZjogJ3gnLFxuICAgICAgICAgICAgYXlyZWY6ICd5JyxcbiAgICAgICAgICAgIGFycm93Y29sb3I6IGNvbG9ybWFwW2tdLFxuICAgICAgICAgICAgYXJyb3dzaXplOiAxLjIsXG4gICAgICAgICAgICBhcnJvd3dpZHRoOiAxLjIsXG4gICAgICAgICAgICBhcnJvd2hlYWQ6IDUsXG4gICAgICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICAgICAgfSkpXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHNlYXJjaExpc3QsIGNvbXBhbnlMaXN0LCB0b3BpY10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiAgc3R5bGU9e3sgd2lkdGg6JzEwMHZoJyAsaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17ZmlnRGF0YX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMjAsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgICAgICAgICB4cmVmOiAncGFwZXInLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC4yNSxcbiAgICAgICAgICAgICAgeTogMS4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuS8nee1seeahOOBquWIhumHjuOBq+WPluOCiue1hOOCk+OBp+OBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjc1LFxuICAgICAgICAgICAgICB5OiAxLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuMjUsXG4gICAgICAgICAgICAgIHk6IC0wLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNzUsXG4gICAgICAgICAgICAgIHk6IC0wLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcblxuICAgICAgICAgXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLmlrDopo/mgKdcIixcbiAgICAgICAgICAgIHJhbmdlOiBbMCwgMS4wM10sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMCwgMC41LCAxXSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLpoIblv5zmgKdcIixcbiAgICAgICAgICAgIHRpdGxlX3N0YW5kb2ZmOjI1LCAgIC8vIFnou7jjgYvjgonjga7ot53pm6LvvIjopovjgoTjgZnjgY/jgZnjgovjgZ/jgoHvvIlcbiAgICAgICAgICAgIHJhbmdlOiBbLTAuMSwgMS4xXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlstMC4xLCAwLjUsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDQwLCBsOiA0NSwgcjogNTAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIydmhcIiwgd2lkdGg6IFwiMTAwdmhcIiwgaGVpZ2h0OiBcIjQ1dmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGVyc29uVG9waWM7XG4iLCIvLyBTaWRlYmFyLmpzeFxuaW1wb3J0IFJlYWN0ICx7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiwgQ29sLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5jb25zdCBTaWRlYmFyID0gKHsgb25BcHBseSwgdmlzdWFsVHlwZSwgb25WaXN1YWxUeXBlQ2hhbmdlLCB0b3BpY0xpc3QsIGNvbXBhbnlMaXN0LCBzZWxlY3RlZENvbXBhbmllcywgc2VsZWN0ZWRUb3BpY3MsIG9uQ2hhbmdlVG9waWMsIG9uQ2hhbmdlQ29tcGFueSB9KSA9PiB7XG4gIGNvbnN0IFtpbnB1dFR5cGUsIHNldElucHV0VHlwZV0gPSB1c2VTdGF0ZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pOyAvLyDliJ3mnJ/lgKTjga8gXCJjaGVja2JveFwiXG4gIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgb25WaXN1YWxUeXBlQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlPT1cIm9uZS1jb21wXCIpe1xuICAgICAgICBzZXRJbnB1dFR5cGUoW1wiY2hlY2tib3hcIixcInJhZGlvXCJdKX1cbiAgICAgIGVsc2V7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pXG4gICAgICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coaW5wdXRUeXBlKTtcbiAgfTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuICBcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCBwYWRkaW5nOiAnMTBweCcsIGJhY2tncm91bmRDb2xvcjogJ2JnLWxpZ2h0JyB9fT5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHRleHQtZGFuZ2VyIGZvbnQtaXRhbGljXCIgc3R5bGU9e3sgaGVpZ2h0OiAnNSUnIH19PlxuICAgICAgICA8Q29sIHNtPXs2fT5cbiAgICAgICAgICA8aDUgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTAlJyB9fSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAg5Y+v6KaW5YyW5p2h5Lu2XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc209ezR9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlkPVwiYXBwbHlcIlxuICAgICAgICAgICAgb25DbGljaz17b25BcHBseX1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzE1JScgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYXJrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDlj6/oppbljJZcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgey8qIEFjY29yZGlvbiAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgdGV4dC1kYW5nZXIgXCIgc3R5bGU9e3sgaGVpZ2h0OiAnODAlJyB9fT5cbiAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiIGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICB7LyogVmlzdWFsaXphdGlvbiBUeXBlICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjBcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+5Y+v6KaW5YyW44K/44Kk44OXPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkID0gXCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCJ9IC8vIOODh+ODleOCqeODq+ODiOODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19XG4gICAgICAgICAgICAgICAgICA+MeekvuOBq+azqOebrjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Zpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCJ9IC8vIOODh+ODleOCqeODq+ODiOODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBteC0yXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPjHjg4jjg5Tjg4Pjgq/jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBUb3BpYyBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMVwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Ub3BpYzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAge3RvcGljTGlzdC5tYXAoKHRvcGljKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RvcGljfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dFR5cGVbMF19IFxuICAgICAgICAgICAgICAgICAgICBpZCA9IHt0b3BpY31cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRUb3BpY3MuaW5jbHVkZXModG9waWMpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VUb3BpYyh0b3BpYyxpbnB1dFR5cGVbMF0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9waWNcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0b3BpY30+e0lkdG9Ub3BpY1t0b3BpY119PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cbiAgICAgICAgICB7LyogQ29tcGFueSBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMlwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Db21wYW55PC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICB7Y29tcGFueUxpc3QubWFwKChjb21wYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVsxXX0gXG4gICAgICAgICAgICAgICAgICAgIGlkID0ge2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29tcGFuaWVzLmluY2x1ZGVzKGNvbXBhbnkpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VDb21wYW55KGNvbXBhbnksaW5wdXRUeXBlWzFdKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nY29tcGFueSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17Y29tcGFueX0+e2NvbXBhbnl9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG4gICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/5Y+W5b6X6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90QmFyQ2hhcnRCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgY2xpY2tkYXRhLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSA5O1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGNsaWNrZGF0YSB8fCB0b3BpY1swXSB8fCBcImRlZmF1bHRfdG9waWNcIjsgLy8gYGNsaWNrZGF0YWDjgpLlhKrlhYhcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0SWR9L3RyZW5kL291dHB1dF8ke3RpbWV9Lmpzb25gO1xuICAgICAgICBjb25zdCBjb21wYW55UGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0SWR9L2NvbXBhbnkudHh0YDtcblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgW29yaWdpbmFsLCBjb21wYW55TGlzdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKHBhdGgpLFxuICAgICAgICAgIGxvYWRDb21wYW5pZXMoY29tcGFueVBhdGgpLFxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoIWNvbXBhbnlMaXN0LmluY2x1ZGVzKGNvbXBhbnlbMF0pKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBDb21wYW55IFwiJHtjb21wYW55WzBdfVwiIG5vdCBmb3VuZC5gKTtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbXBhbnnjga7jg4fjg7zjgr/lj5blvpdcbiAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gY29tcGFueUxpc3QuaW5kZXhPZihjb21wYW55WzBdKTtcbiAgICAgICAgY29uc3QgY29tcGFueURhdGEgPSBvcmlnaW5hbFtjb21wYW55SW5kZXhdO1xuICAgICAgICBpZiAoIWNvbXBhbnlEYXRhKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBObyBkYXRhIGZvdW5kIGZvciBjb21wYW55IGluZGV4IFwiJHtjb21wYW55SW5kZXh9XCIuYCk7XG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKU09O44OH44O844K/44Gu5pW05b2iXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBPYmplY3QuZW50cmllcyhjb21wYW55RGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgY2F0ZWdvcnk6IGtleSxcbiAgICAgICAgICB2YWx1ZToga2V5ID09PSBcIlwiID8gMCA6IHBhcnNlRmxvYXQodmFsdWUpICogMTAwIHx8MCwgLy8g5YCk44KS5pWw5YCk44Gr5aSJ5o+b77yI44Gq44GE5aC05ZCI44GvMO+8iVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8g44OH44O844K/44KS6ZmN6aCG44Gr44K944O844OI44GX44Gm5LiK5L2NMTDku7bjgpLlj5blvpdcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGZvcm1hdHRlZERhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnlbMF1944GuRknjga7liIbluINgKTtcbiAgICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYGNsaWNrZGF0YWDjga7lgKTjgYzlpInljJbjgZfjgZ/jgYvjgpLmmI7npLrnmoTjgavmr5TovINcbiAgICBpZiAoXG4gICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgJiZcbiAgICAgICh1cGRhdGUgfHwgY2hhcnREYXRhLmxlbmd0aCA9PT0gMCB8fCBjbGlja2RhdGEpXG4gICAgKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIEpTT04uc3RyaW5naWZ5KGNsaWNrZGF0YSksIHVwZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgIHg6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLnJldmVyc2UoKSwgLy8g5qiq5ZCR44GN5qOS44Kw44Op44OV55So44Gu5YCk77yI6YCG6aCG77yJXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksIC8vIOOCq+ODhuOCtOODqu+8iOmAhumghu+8iVxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaFwiLCAvLyDmqKrlkJHjgY3mo5LjgrDjg6njg5VcbiAgICAgICAgICAgIG1hcmtlcjogeyBjb2xvcjogXCJyb3lhbGJsdWVcIiB9LCAvLyDmo5Ljga7oibJcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpY2tzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkZJXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiAzNSwgbDogODAsIHI6IDUwIH0sXG4gICAgICAgIH19XG5cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbi8vIOODh+ODvOOCv+WPluW+l+mWouaVsFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cblxuXG5jb25zdCBQbG90QmFyQ2hhcnRBID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJGSeOBruWIhuW4gyFcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDk7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWNbMF07IC8vIGNsaWNrZGF0YeOCkuWEquWFiFxuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vdHJlbmQvb3V0cHV0X3RvcGljXyR7dGltZX0uanNvbmA7XG5cblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgW29yaWdpbmFsXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEocGF0aCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYVwiLG9yaWdpbmFsKTtcbiBcblxuICAgICAgICAvLyBKU09O44OH44O844K/44Gu5pW05b2iXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBPYmplY3QuZW50cmllcyhvcmlnaW5hbCkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgXG4gICAgICAgICAgY2F0ZWdvcnk6IGtleSxcbiAgICAgICAgICB2YWx1ZToga2V5ID09PSBcIlwiID8gMCA6IHBhcnNlRmxvYXQodmFsdWUpICogMTAwIHx8IDAsIFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYVwiLGZvcm1hdHRlZERhdGEpO1xuXG5cbiAgICAgICAgLy8g44OH44O844K/44KS6ZmN6aCG44Gr44K944O844OI44GX44Gm5LiK5L2NMTDku7bjgpLlj5blvpdcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGZvcm1hdHRlZERhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGBGSeOBruWIhuW4g2ApO1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFydERhdGEpO1xuICAgICAgICBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiAmJiAodXBkYXRlIHx8IGNoYXJ0RGF0YS5sZW5ndGggPT09IDAgKSkge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCB1cGRhdGVdKTsgLy8gY2xpY2tkYXRhIOOCkuS+neWtmOmWouS/guOBq+i/veWKoFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgIHg6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgICAgICAgIG1hcmtlcjogeyBjb2xvcjogXCJyb3lhbGJsdWVcIiB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGlja3N1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgfX1cblxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteV9hcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbXlfYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hdXRoMF9hdXRoMC1yZWFjdF9kaXN0X2F1dGgwLXJlYWN0X2VzbV9qcy1ub2RlX21vZHVsZXNfcmVhY3QtYm9vdHN0cmFwX2UtOTRkNWYwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIlNpZGViYXIiLCJDb250ZW50IiwidXNlQXV0aDAiLCJBcHAiLCJsb2dpbldpdGhSZWRpcmVjdCIsImxvZ291dCIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUxvZ2luIiwiY29ubmVjdGlvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJhcnJvd0NvbG9yIiwiY29tcGFueUxpc3QiLCJ0b3BpY0xpc3QiLCJ2aXN1YWxUeXBlIiwic2V0VmlzdWFsVHlwZSIsImlzQXBwbGllZCIsInNldElzQXBwbGllZCIsInNlbGVjdGVkQ29tcGFuaWVzIiwic2V0U2VsZWN0ZWRDb21wYW5pZXMiLCJzZWxlY3RlZFRvcGljcyIsInNldFNlbGVjdGVkVG9waWNzIiwiaGFuZGxlVmlzdWFsVHlwZUNoYW5nZSIsInZhbHVlIiwiaGFuZGxlQXBwbHkiLCJ0b2dnbGVTZWxlY3Rpb24iLCJpdGVtIiwic2V0U2VsZWN0ZWQiLCJidXR0b210eXBlIiwicHJldlNlbGVjdGVkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpIiwiQ29tcGFueUNoZWNrYm94Q2hhbmdlIiwiY29tcGFueSIsIlRvcGljQ2hlY2tib3hDaGFuZ2UiLCJ0b3BpYyIsInJlc2V0SXNBcHBsaWVkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZmx1aWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiRnJhZ21lbnQiLCJtZCIsIm9uQXBwbHkiLCJvblZpc3VhbFR5cGVDaGFuZ2UiLCJvbkNoYW5nZVRvcGljIiwib25DaGFuZ2VDb21wYW55Iiwic3R5bGUiLCJoZWlnaHQiLCJwbG90IiwicmVzZXRBcHBseSIsIkNhcmQiLCJQbG90UGllQSIsIlBsb3RQaWVCIiwiUGxvdFBlcnNvbmFDb21wIiwiUGxvdFBlcnNvbmFUb3BpYyIsIlBsb3RCYXJDaGFydEEiLCJQbG90QmFyQ2hhcnRCIiwiZ2V0Q2FyZERhdGEiLCJfcmVmIiwiY2xpY2tEYXRhIiwic2V0Q2xpY2tEYXRhIiwiaGFuZGxlUGllQ2hhcnRDbGljayIsImRhdGEiLCJsb2ciLCJjYXJkRGF0YSIsInNldENhcmREYXRhIiwiZmV0Y2hEYXRhIiwibWFyZ2luTGVmdCIsInVwZGF0ZSIsIm9uUmVuZGVyZWQiLCJsYXlvdXQiLCJ0aXRsZSIsIndpZHRoIiwiY29uZmlnIiwicmVzcG9uc2l2ZSIsIm9uQ2xpY2tEYXRhIiwiY2xpY2tkYXRhIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJ4cyIsImZsZXgiLCJCb2R5IiwiVGl0bGUiLCJkaXJlY3Rpb24iLCJ0b1VwcGVyQ2FzZSIsIlRleHQiLCJ2YWx1ZXMiLCJqb2luIiwiZGF0YVBhdGgiLCJwcm9jZXNzIiwiZW52IiwiUFVCTElDX1VSTCIsImNvbHVtblBhdGgiLCJyZXNwb25zZURhdGEiLCJyZXNwb25zZUNvbHVtbiIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJqc29uREFUQSIsImpzb24iLCJjb2x1bW5MaXN0IiwidGV4dCIsInNwbGl0IiwibGluZSIsInRyaW0iLCJjb21wYW55RGF0YSIsIndhcm4iLCJwcm9jZXNzRGF0YSIsInVwIiwiZG93biIsInJpZ2h0IiwibGVmdCIsInJlcGxhY2VWYWx1ZXNXaXRoQ29sdW1ucyIsInJlcGxhY2VkVmFsdWUiLCJSZWFjdERPTSIsIkF1dGgwUHJvdmlkZXIiLCJkb21haW4iLCJjbGllbnRJZCIsInJlbmRlciIsIlN0cmljdE1vZGUiLCJhdXRob3JpemF0aW9uUGFyYW1zIiwicmVkaXJlY3RfdXJpIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZVJlZiIsIlBsb3QiLCJjb2xvcm1hcCIsInVybCIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwiZ2V0IiwicHJvY2Vzc1NwYXJzZURhdGEiLCJzcGFyc2VEYXRhIiwibnVtUm93cyIsIk1hdGgiLCJtYXgiLCJlbnRyeSIsInJvdyIsIm51bUNvbHMiLCJjb2wiLCJtYXRyaXgiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJmaWxsIiwiZm9yRWFjaCIsInJlZHVjZSIsInN1bSIsIl9yZWYyIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwic2V0VGl0bGUiLCJhbGxUb3BpYyIsIklkdG9Ub3BpYyIsIlRvcGljdG9JZCIsImRhdGFDYWNoZSIsImNvbXBhbmllcyIsImxvYWREYXRhIiwiYWxsVG9waWNzRGF0YSIsInRhcmdldF9pZCIsInRpbWUiLCJjb21wYW55VXJsIiwic3BhcnNlRGF0YVVybCIsImN1cnJlbnQiLCJub3JtYWxpemVTdHJpbmciLCJzdHIiLCJub3JtYWxpemUiLCJzYW5pdGl6ZWRDb21wYW5pZXMiLCJzYW5pdGl6ZWRDb21wYW55Iiwicm93U3VtcyIsImNvbXBhbnlJbmRleCIsImluZGV4T2YiLCJmaWx0ZXJlZERhdGEiLCJ0b3RhbFZhbHVlIiwibm9ybWFsaXplZERhdGEiLCJjYXRlZ29yeSIsInNvcnQiLCJhIiwiYiIsInNsaWNlIiwiaGFuZGxlUGxvdENsaWNrIiwiZXZlbnQiLCJwb2ludHMiLCJsYWJlbCIsInRvcGljaWQiLCJyZXBsYWNlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidHlwZSIsImxhYmVscyIsIlN0cmluZyIsIm1hcmtlciIsImNvbG9ycyIsInNob3dsZWdlbmQiLCJwbG90X2JnY29sb3IiLCJwYXBlcl9iZ2NvbG9yIiwibWFyZ2luIiwidCIsImwiLCJyIiwiZmV0Y2hUZXh0RGF0YSIsImxvYWRDaGFydERhdGEiLCJ0YXJnZXRJZCIsImRhdGFVcmwiLCJjb2x1bW5VcmwiLCJzb3J0ZWREYXRhIiwibG9hZENvbXBhbmllcyIsInRvTGlzdCIsImxpbmVzIiwiYWxwaGFfbGkiLCJwYXJzZUZsb2F0IiwiYmV0YV9saSIsIlBsb3RQZXJzb25Db21wIiwiYXJyb3dfY29sb3IiLCJwcmVwYXJlZERhdGEiLCJzZXRQcmVwYXJlZERhdGEiLCJmaWdEYXRhIiwic2V0RmlnRGF0YSIsImFubm90YXRpb25zIiwic2V0QW5ub3RhdGlvbnMiLCJwcmVwYXJlRGF0YSIsImFsbFByb21pc2VzIiwiY29tcGFueURpY3QiLCJhY2MiLCJpZHgiLCJuZXdTZWFyY2hMaXN0IiwiaXNBcnJheSIsImZpbHRlcmVkU2VhcmNoTGlzdCIsIm5vZGVfYWxwaGEiLCJub2RlX2JldGEiLCJwcm9taXNlcyIsIl8iLCJqIiwicCIsInBhcmFtZXRlclBhdGgiLCJrIiwicmVzdWx0cyIsImNvbWJpbmVkQWxwaGEiLCJmbGF0TWFwIiwicmVzdWx0IiwiY29tYmluZWRCZXRhIiwiY29tYmluZWRTZWFyY2hMaXN0IiwiYWxwaGEiLCJiZXRhIiwic2VhcmNoTGlzdCIsInBsb3REYXRhIiwieCIsInkiLCJtb2RlIiwidGV4dHBvc2l0aW9uIiwic3ltYm9sIiwiY29sb3IiLCJzaXplIiwibmFtZSIsInBsb3RBbm5vdGF0aW9ucyIsInhyZWYiLCJ5cmVmIiwiYXhyZWYiLCJheXJlZiIsImF4IiwiYXkiLCJhcnJvd2NvbG9yIiwiYXJyb3dzaXplIiwiYXJyb3d3aWR0aCIsImFycm93aGVhZCIsInNob3dhcnJvdyIsImZvbnQiLCJ4YW5jaG9yIiwieWFuY2hvciIsInhheGlzIiwicmFuZ2UiLCJsaW5lY29sb3IiLCJsaW5ld2lkdGgiLCJncmlkY29sb3IiLCJncmlkd2lkdGgiLCJncmlkZGFzaCIsInRpY2ttb2RlIiwidGlja3ZhbHMiLCJ0aWNrdGV4dCIsInplcm9saW5lIiwieWF4aXMiLCJ0aXRsZV9zdGFuZG9mZiIsImxlZ2VuZCIsImJnY29sb3IiLCJib3JkZXJjb2xvciIsImJvcmRlcndpZHRoIiwiUGxvdFBlcnNvblRvcGljIiwic2V0Q29tcGFueUxpc3QiLCJzZXRTZWFyY2hMaXN0IiwidGhlbiIsIkFjY29yZGlvbiIsIkJ1dHRvbiIsImlucHV0VHlwZSIsInNldElucHV0VHlwZSIsImhhbmRsZVJhZGlvQ2hhbmdlIiwidGFyZ2V0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInNtIiwiZGVmYXVsdEFjdGl2ZUtleSIsIkl0ZW0iLCJldmVudEtleSIsIkhlYWRlciIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImh0bWxGb3IiLCJmb250U2l6ZSIsInBhdGgiLCJjb21wYW55UGF0aCIsIm9yaWdpbmFsIiwiZm9ybWF0dGVkRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJKU09OIiwic3RyaW5naWZ5IiwicmV2ZXJzZSIsIm9yaWVudGF0aW9uIiwibWlycm9yIiwidGlja3N1ZmZpeCJdLCJzb3VyY2VSb290IjoiIn0=