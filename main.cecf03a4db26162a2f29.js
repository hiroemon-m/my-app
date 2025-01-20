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
        const fiPath = `${"/my-app"}/data/fi_subclass_split.json`;
        // データを取得
        const [original, companyList, fiList] = await Promise.all([fetchData(path), loadCompanies(companyPath), fetchData(fiPath)]);
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
            value: key === "" ? 0 : parseFloat(value) * 100 || 0,
            // 値を数値に変換（ない場合は0）
            summarize: fiList[key]
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
      },
      // 棒の色
      hovertemplate: `説明: %{customdata}<br>%: %{x:.2f}% <extra></extra>` // customdata を参照
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
          // ツールチップのフォントサイズ
          color: "black" // フォントの色
        },
        bgcolor: "lightyellow",
        // ツールチップの背景色
        bordercolor: "gray" // ツールチップの枠線色
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
        const fiPath = `${"/my-app"}/data/fi_subclass_split.json`;

        // データを取得
        const [original, fiList] = await Promise.all([fetchData(path), fetchData(fiPath)]);
        console.log("a", original);

        // JSONデータの整形
        const formattedData = Object.entries(original).map(_ref2 => {
          let [key, value] = _ref2;
          return {
            category: key,
            value: key === "" ? 0 : parseFloat(value) * 100 || 0,
            summarize: fiList[key]
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
      customdata: chartData.map(item => item.summarize).reverse(),
      // summarize を customdata に渡す

      orientation: "h",
      marker: {
        color: "royalblue"
      },
      hovertemplate: `説明: %{customdata}<br>%: %{x:.2f}% <extra></extra>` // customdata を参照
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
          // ツールチップのフォントサイズ
          color: "black" // フォントの色
        },
        bgcolor: "lightyellow",
        // ツールチップの背景色
        bordercolor: "gray" // ツールチップの枠線色
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2FwcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbnRlbnQuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9nby1hbnl3aGVyZS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9vY2N1cHktY29tcGFueS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtdG9waWMuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9zaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RyZW5kLXRvcGl4LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyLmpzeCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQuanN4JztcbmltcG9ydCB7IHVzZUF1dGgwIH0gZnJvbSAnQGF1dGgwL2F1dGgwLXJlYWN0JztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCB7IGxvZ2luV2l0aFJlZGlyZWN0LCBsb2dvdXQsIGlzQXV0aGVudGljYXRlZCwgdXNlciB9ID0gdXNlQXV0aDAoKTsgLy8gQXV0aDDjga7mg4XloLHjgpLlj5blvpdcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBsb2dpbldpdGhSZWRpcmVjdCh7XG4gICAgICAgIGNvbm5lY3Rpb246ICdVc2VybmFtZS1QYXNzd29yZC1BdXRoZW50aWNhdGlvbicsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44Ot44Kw44Kk44Oz44Ko44Op44O8OlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXJyb3dDb2xvciA9IFtcbiAgICAnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJyxcbiAgICAnIzNFOUU2RicsICcjRjM4MTgxJywgJyM1NDVFNzUnLCAnI0ZGQjYyNycsICcjNTc3NTkwJyxcbiAgXTtcbiAgY29uc3QgY29tcGFueUxpc3QgPSBbXG4gICAgJ+m5v+WztuW7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7lpKfmnpfntYQnLCAn5riF5rC05bu66Kit5qCq5byP5Lya56S+JywgJ+Wkp+aIkOW7uuioreagquW8j+S8muekvicsXG4gICAgJ+agquW8j+S8muekvuerueS4reW3peWLmeW6lycsICfmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7MnLCAn5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+JyxcbiAgICAn5LqU5rSL5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvuODleOCuOOCvycsICfmiLjnlLDlu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+54aK6LC357WEJyxcbiAgXTtcbiAgY29uc3QgdG9waWNMaXN0ID0gWycwJywgJzEnLCAnMicsICczJywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMSddO1xuXG4gIGNvbnN0IFt2aXN1YWxUeXBlLCBzZXRWaXN1YWxUeXBlXSA9IHVzZVN0YXRlKCdvbmUtdG9waWMnKTtcbiAgY29uc3QgW2lzQXBwbGllZCwgc2V0SXNBcHBsaWVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2VsZWN0ZWRDb21wYW5pZXMsIHNldFNlbGVjdGVkQ29tcGFuaWVzXSA9IHVzZVN0YXRlKFsn5qCq5byP5Lya56S+54aK6LC357WEJ10pO1xuICBjb25zdCBbc2VsZWN0ZWRUb3BpY3MsIHNldFNlbGVjdGVkVG9waWNzXSA9IHVzZVN0YXRlKFsnMCddKTtcblxuICBjb25zdCBoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0VmlzdWFsVHlwZSh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXBwbHkgPSAoKSA9PiB7XG4gICAgc2V0SXNBcHBsaWVkKDEpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGlvbiA9IChpdGVtLCBzZXRTZWxlY3RlZCwgYnV0dG9tdHlwZSkgPT4ge1xuICAgIGlmIChidXR0b210eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBzZXRTZWxlY3RlZCgocHJldlNlbGVjdGVkKSA9PlxuICAgICAgICBwcmV2U2VsZWN0ZWQuaW5jbHVkZXMoaXRlbSlcbiAgICAgICAgICA/IHByZXZTZWxlY3RlZC5maWx0ZXIoKGkpID0+IGkgIT09IGl0ZW0pXG4gICAgICAgICAgOiBbLi4ucHJldlNlbGVjdGVkLCBpdGVtXVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWQoW2l0ZW1dKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgQ29tcGFueUNoZWNrYm94Q2hhbmdlID0gKGNvbXBhbnksIGJ1dHRvbXR5cGUpID0+IHtcbiAgICB0b2dnbGVTZWxlY3Rpb24oY29tcGFueSwgc2V0U2VsZWN0ZWRDb21wYW5pZXMsIGJ1dHRvbXR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ2hlY2tib3hDaGFuZ2UgPSAodG9waWMsIGJ1dHRvbXR5cGUpID0+IHtcbiAgICB0b2dnbGVTZWxlY3Rpb24odG9waWMsIHNldFNlbGVjdGVkVG9waWNzLCBidXR0b210eXBlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ29tcGFuaWVzKFsn5qCq5byP5Lya56S+54aK6LC357WEJ10pO1xuICAgIHNldFNlbGVjdGVkVG9waWNzKFsnMCddKTtcbiAgfSwgW3Zpc3VhbFR5cGVdKTtcblxuICBjb25zdCByZXNldElzQXBwbGllZCA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicmVhY3QtY29udGVudFwiIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XG4gICAgICA8Um93PlxuICAgICAgICB7IWlzQXV0aGVudGljYXRlZCA/ICggLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44Gq44GE5aC05ZCIXG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT7jg63jgrDjgqTjg7PjgYzlv4XopoHjgafjgZk8L2gxPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgICAgICAgICDjg63jgrDjgqTjg7NcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSA6ICggLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44KL5aC05ZCIXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiDjgrXjgqTjg4njg5Djg7wgKi99XG4gICAgICAgICAgICA8Q29sIG1kPXszfSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCI+XG4gICAgICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICAgICAgb25BcHBseT17aGFuZGxlQXBwbHl9XG4gICAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgICBvblZpc3VhbFR5cGVDaGFuZ2U9e2hhbmRsZVZpc3VhbFR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICAgICAgY29tcGFueUxpc3Q9e2NvbXBhbnlMaXN0fVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29tcGFuaWVzPXtzZWxlY3RlZENvbXBhbmllc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRvcGljcz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VUb3BpYz17VG9waWNDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBhbnk9e0NvbXBhbnlDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICB7Lyog44Oh44Kk44Oz44Kz44Oz44OG44Oz44OEICovfVxuICAgICAgICAgICAgPENvbCBtZD17OX0gY2xhc3NOYW1lPVwiYm9yZGVyLWVuZFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgICAgICBwbG90PXtpc0FwcGxpZWR9XG4gICAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgICB0b3BpYz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICAgICAgY29tcGFueT17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICAgICAgcmVzZXRBcHBseT17cmVzZXRJc0FwcGxpZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwPnBsb3Q6IHtpc0FwcGxpZWR9PC9wPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfWZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFBsb3RQaWVBIGZyb20gJy4vb2NjdXB5LmpzeCc7XG5pbXBvcnQgUGxvdFBpZUIgZnJvbSAnLi9vY2N1cHktY29tcGFueS5qc3gnO1xuaW1wb3J0IFBsb3RQZXJzb25hQ29tcCBmcm9tICcuL3BlcnNvbmEtY29tcC5qc3gnO1xuaW1wb3J0IFBsb3RQZXJzb25hVG9waWMgZnJvbSAnLi9wZXJzb25hLXRvcGljLmpzeCc7XG5cbmltcG9ydCBQbG90QmFyQ2hhcnRBIGZyb20gJy4vdHJlbmQtdG9waXguanN4JztcbmltcG9ydCBQbG90QmFyQ2hhcnRCIGZyb20gJy4vdHJlbmQtY29tcC5qc3gnO1xuaW1wb3J0IHsgZ2V0Q2FyZERhdGEgfSBmcm9tIFwiLi9nby1hbnl3aGVyZS5qc3hcIjsgLy8g5q2j44GX44GE44OR44K544KS5oyH5a6aXG5cblxuXG5cblxuY29uc3QgQ29udGVudCA9ICh7cGxvdCx2aXN1YWxUeXBlLHRvcGljLGNvbXBhbnkscmVzZXRBcHBseX0pID0+IHtcblxuXG5cbiAgICBjb25zdCBbY2xpY2tEYXRhLCBzZXRDbGlja0RhdGFdID0gdXNlU3RhdGUoKTsgLy8g44Kv44Oq44OD44Kv44OH44O844K/44Gu54q25oWLXG5cbiAgICBjb25zdCBoYW5kbGVQaWVDaGFydENsaWNrID0gKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwi44Kv44Oq44OD44Kv44GV44KM44Gf44OH44O844K/OlwiLCBkYXRhKTsgLy8g44OH44OQ44OD44Kw55SoXG4gICAgICBzZXRDbGlja0RhdGEoZGF0YSk7IC8vIOeKtuaFi+OCkuabtOaWsFxuICAgIH07XG5cbiAgICBjb25zdCBbY2FyZERhdGEsIHNldENhcmREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDYXJkRGF0YShwbG90LCB2aXN1YWxUeXBlLCB0b3BpYyk7XG4gICAgICAgIHNldENhcmREYXRhKGRhdGEpO1xuICAgICAgfTtcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtwbG90LCB2aXN1YWxUeXBlLCB0b3BpY10pO1xuICBcbiAgICBcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgey8qIEZpcnN0IFJvdyAqL31cbiAgICAgIDxSb3cgc3R5bGU9e3sgaGVpZ2h0OiAnNTB2aCcgfX0+XG4gICAgICAgIHsvKiBQZXJzb25hIEdyYXBoICovfVxuICAgICAgICA8Q29sIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAlJyB9fT5cblxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYVRvcGljXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzUwdmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiNTB2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFDb21wXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQydmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8L0NvbD5cbiAgPC9Sb3c+XG5cbiAgICAgIHsvKiBTZWNvbmQgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgPENvbCBtZD17Nn0+XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgICAgPFBsb3RQaWVBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+azqOebruS8gealreOBrualreeVjOOBq+WvvuOBmeOCi+WNoOacieeOhycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiID8gKFxuICAgICAgICAgICAgPFBsb3RQaWVCXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBvbkNsaWNrRGF0YT17aGFuZGxlUGllQ2hhcnRDbGlja30gLy8g44Kv44Oq44OD44Kv44OH44O844K/44Gu44OP44Oz44OJ44Op44O844KS5rih44GZXG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+6Kmy5b2T44GZ44KL6KGo56S644GM44GC44KK44G+44Gb44KTPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICAgICAgIFxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17Nn0+XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgIDxQbG90QmFyQ2hhcnRBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuXG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICBkYXRhPXtbXX0gLy8g44OH44O844K/44KS6L+95Yqg44GX44Gm44GP44Gg44GV44GEXG4gICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgdGl0bGU6ICdG44K/44O844Og44Gu5YiG5biDJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pOihcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgY2xpY2tkYXRhPXtjbGlja0RhdGF9IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OCkua4oeOBmVxuICAgIFxuXG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICBkYXRhPXtbXX0gLy8g44OH44O844K/44KS6L+95Yqg44GX44Gm44GP44Gg44GV44GEXG4gICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgdGl0bGU6ICdG44K/44O844Og44Gu5YiG5biDJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pfVxuICAgICAgICAgIFxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAge2NhcmREYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPENvbFxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgeHM9ezEyfSAvLyDlkITjgqvjg7zjg4njgpIx6KGM44Gr6KGo56S644CB44Os44Kk44Ki44Km44OI44Gr5b+c44GY44Gm6Kq/5pW05Y+v6IO9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4OiBcIjEgMSBhdXRvXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInctNzUgaC03NVwiPlxuICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS5kaXJlY3Rpb24udG9VcHBlckNhc2UoKX0gXG4gICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlcy5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbD5cbiAgICAgICkpfVxuICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcblxuIiwiLy8g5ZCN5YmN44CBcGxvdOOAgXZpc3VhbFR5cGXjgIF0b3BpYyDjgavlv5zjgZjjgZ/jg4fjg7zjgr/jgpLlj5blvpfjgZnjgovplqLmlbBcbmV4cG9ydCBjb25zdCBnZXRDYXJkRGF0YSA9IGFzeW5jIChwbG90LCB2aXN1YWxUeXBlLCB0b3BpYykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyB2aXN1YWxUeXBlIOOBjCBcIm9uZS10b3BpY1wiIOOBp+OBquOBhOWgtOWQiOOAgeS9leOCgui/lOOBleOBquOBhFxuICAgICAgaWYgKHZpc3VhbFR5cGUgIT09IFwib25lLXRvcGljXCIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICBcbiAgICAgIC8vIOODh+ODvOOCv+OBruODkeOCueOCkuWumue+qVxuICAgICAgY29uc3QgZGF0YVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3RvcGljJHt0b3BpY30vcGVyc29uYT01L2FueXdoZXJlXzUuanNvbmA7XG4gICAgICBjb25zdCBjb2x1bW5QYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0b3BpY30vY29sdW1uYDtcbiAgXG4gICAgICAvLyBKU09O44OH44O844K/44KSIGZldGNoIOOBp+WQjOaZguOBq+WPluW+l1xuICAgICAgY29uc3QgW3Jlc3BvbnNlRGF0YSwgcmVzcG9uc2VDb2x1bW5dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBmZXRjaChkYXRhUGF0aCksXG4gICAgICAgIGZldGNoKGNvbHVtblBhdGgpLFxuICAgICAgXSk7XG4gIFxuICAgICAgLy8g44Os44K544Od44Oz44K544Gu44Ko44Op44O844OB44Kn44OD44KvXG4gICAgICBpZiAoIXJlc3BvbnNlRGF0YS5vayB8fCAhcmVzcG9uc2VDb2x1bW4ub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi44OH44O844K/44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfXCIpO1xuICAgICAgfVxuICBcbiAgICAgIC8vIEpTT07jg4fjg7zjgr/jgpLjg5Hjg7zjgrlcbiAgICAgIGNvbnN0IGpzb25EQVRBID0gYXdhaXQgcmVzcG9uc2VEYXRhLmpzb24oKTtcbiAgICAgIGNvbnN0IGNvbHVtbkxpc3QgPSAoYXdhaXQgcmVzcG9uc2VDb2x1bW4udGV4dCgpKS5zcGxpdChcIlxcblwiKS5tYXAobGluZSA9PiBsaW5lLnRyaW0oKSk7XG4gICAgICBjb25zb2xlLmxvZyhjb2x1bW5MaXN0KVxuICBcbiAgICAgIC8vIFwi5qCq5byP5Lya56S+54aK6LC357WEXCIg44Gu44OH44O844K/44GM5a2Y5Zyo44GZ44KL44GL44OB44Kn44OD44KvXG4gICAgICBjb25zdCBjb21wYW55RGF0YSA9IGpzb25EQVRBW1wi5qCq5byP5Lya56S+54aK6LC357WEXCJdO1xuICAgICAgaWYgKCFjb21wYW55RGF0YSB8fCAhY29tcGFueURhdGFbdG9waWNdKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIuaMh+WumuOBl+OBn+ODh+ODvOOCv+OBjOWtmOWcqOOBl+OBvuOBm+OCkzog5qCq5byP5Lya56S+54aK6LC357WEXCIpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiWU9cIixjb21wYW55RGF0YVt0b3BpY10pXG4gICAgICAvLyDjg4fjg7zjgr/jgpLmlbTlvaLjgZfjgabov5TjgZlcbiAgICAgIHJldHVybiBwcm9jZXNzRGF0YShjb21wYW55RGF0YVt0b3BpY10sIGNvbHVtbkxpc3QpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Gr5aSx5pWX44GX44G+44GX44GfOlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuICBcbiAgLy8g44OH44O844K/5pW05b2i6Zai5pWwOiB1cCwgZG93biwgcmlnaHQsIGxlZnQg44KSIGNvbHVtbkxpc3Qg44Gu5YCk44Gn572u44GN5o+b44GI44Gm6L+U44GZXG4gIGNvbnN0IHByb2Nlc3NEYXRhID0gKGRhdGEsIGNvbHVtbkxpc3QpID0+IHtcbiAgICBpZiAoIWRhdGEgfHwgIWNvbHVtbkxpc3QpIHJldHVybiBbXTtcbiAgXG4gY29uc3QgeyB1cCA9IFtdLCBkb3duID0gW10sIHJpZ2h0ID0gW10sIGxlZnQgPSBbXSB9ID0gZGF0YTtcbiAvLyDphY3liJfjga7lgKTjgpIgY29sdW1uTGlzdCDjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgafnva7jgY3mj5vjgYjjgotcbiAgICBjb25zdCByZXBsYWNlVmFsdWVzV2l0aENvbHVtbnMgPSAodmFsdWVzLCBjb2x1bW5MaXN0KSA9PlxuICAgICAgICB2YWx1ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICAgICAgY29uc29sZS5sb2coY29sdW1uTGlzdFtpbmRleF0pXG4gICAgICAgIGNvbnN0IHJlcGxhY2VkVmFsdWUgPSBjb2x1bW5MaXN0W2luZGV4XTtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VkVmFsdWU7XG4gICAgICAgIH0pO1xuICBcbiAgICAgXG5cbiAgXG4gICAgcmV0dXJuIFtcbiAgICAgIHsgZGlyZWN0aW9uOiBcIumghuW/nOaAp1VQXCIsIHZhbHVlczogcmVwbGFjZVZhbHVlc1dpdGhDb2x1bW5zKGRvd24sY29sdW1uTGlzdCkgfSxcbiAgICAgIHsgZGlyZWN0aW9uOiBcIumghuW/nOaAp0RPV05cIiwgdmFsdWVzOiByZXBsYWNlVmFsdWVzV2l0aENvbHVtbnModXAsY29sdW1uTGlzdCkgfSxcbiAgICAgIHsgZGlyZWN0aW9uOiBcIuaWsOimj+aAp1VQXCIsIHZhbHVlczogcmVwbGFjZVZhbHVlc1dpdGhDb2x1bW5zKHJpZ2h0LGNvbHVtbkxpc3QpIH0sXG4gICAgICB7IGRpcmVjdGlvbjogXCLpoIblv5zmgKdET1dOXCIsIHZhbHVlczogcmVwbGFjZVZhbHVlc1dpdGhDb2x1bW5zKGxlZnQsY29sdW1uTGlzdCkgfSxcbiAgICBdO1xuICB9O1xuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHAuanN4XCI7XG5pbXBvcnQgeyBBdXRoMFByb3ZpZGVyIH0gZnJvbSBcIkBhdXRoMC9hdXRoMC1yZWFjdFwiO1xuXG4vLyBBdXRoMOOBruioreWumlxuY29uc3QgZG9tYWluID0gXCJkZXYtbDNiZ2VnbmpqeHd4Mm9kNC51cy5hdXRoMC5jb21cIjsgLy8gQXV0aDDjga7jg4njg6HjgqTjg7NcblxuY29uc3QgY2xpZW50SWQgPSBcIml2dGd4MWFyTjVKMDladzh5UENpRWtwUTFEWjNQMjJlXCI7IC8vIEF1dGgw44Gu44Kv44Op44Kk44Ki44Oz44OISURcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8QXV0aDBQcm92aWRlclxuICAgICAgZG9tYWluPXtkb21haW59XG4gICAgICBjbGllbnRJZD17Y2xpZW50SWR9XG4gICAgICBhdXRob3JpemF0aW9uUGFyYW1zPXt7XG4gICAgICAgIHJlZGlyZWN0X3VyaTogXCJodHRwczovL2hpcm9lbW9uLW0uZ2l0aHViLmlvL215LWFwcC9cIiwgLy8g6KqN6Ki85b6M44Gr44Oq44OA44Kk44Os44Kv44OI44GZ44KLVVJMXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxBcHAgLz5cbiAgICA8L0F1dGgwUHJvdmlkZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cblxuXG5jb25zdCBjb2xvcm1hcCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLlnLDnm6TmlLnoia9cIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIuODiOODs+ODjeODq+aOmOWJilwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gIFwi5YWN6ZyH5qeL6YCgXCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLnrqHnkIbjgrfjgrnjg4bjg6BcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuW7g+ajhOeJqeWHpueQhlwiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICBcIuW7uuevieODkeODjeODq1wiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLnqbroqr/jgrfjgrnjg4bjg6BcIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuaOmOWJiuijhee9rlwiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxufTtcblxuXG4vLyBmZXRjaERhdGHplqLmlbDvvJpKU09O44G+44Gf44Gv44OG44Kt44K544OI5b2i5byP44Gr5a++5b+cXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcblxuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gSlNPTuW9ouW8j+OBruWgtOWQiFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpOyAvLyDjg5fjg6zjg7zjg7Pjg4bjgq3jgrnjg4jjga7loLTlkIhcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTsgLy8g5pS56KGM5Yy65YiH44KK44Gu44OH44O844K/44KS6YWN5YiX44Go44GX44Gm6L+U44GZXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbi8vIOOCueODkeODvOOCueODh+ODvOOCv+OCkuWvhuihjOWIl+OBq+WkieaPm+OBl+OAgeihjOaWueWQkeOBruWSjOOCkuioiOeul1xuY29uc3QgcHJvY2Vzc1NwYXJzZURhdGEgPSAoc3BhcnNlRGF0YSkgPT4ge1xuICAgIFxuICBjb25zdCBudW1Sb3dzID0gTWF0aC5tYXgoLi4uc3BhcnNlRGF0YS5tYXAoZW50cnkgPT4gZW50cnkucm93KSkgKyAxO1xuICBjb25zdCBudW1Db2xzID0gTWF0aC5tYXgoLi4uc3BhcnNlRGF0YS5tYXAoZW50cnkgPT4gZW50cnkuY29sKSkgKyAxO1xuXG4gIGNvbnN0IG1hdHJpeCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG51bVJvd3MgfSwgKCkgPT4gQXJyYXkobnVtQ29scykuZmlsbCgwKSk7XG4gIHNwYXJzZURhdGEuZm9yRWFjaCgoeyByb3csIGNvbCwgdmFsdWUgfSkgPT4ge1xuICAgIG1hdHJpeFtyb3ddW2NvbF0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1hdHJpeC5tYXAocm93ID0+IHJvdy5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKSk7IC8vIOihjOaWueWQkeOBruWSjOOCkui/lOOBmVxufTtcblxuY29uc3QgUGxvdFBpZUIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBvblJlbmRlcmVkLCBvbkNsaWNrRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCLms6jnm67jg4jjg5Tjg4Pjgq/jgavplqLjgZnjgovnibnoqLHjga7kvIHmpa3ljaDmnInnjodcIik7XG4gIGNvbnN0IGFsbFRvcGljID0gWzIsIDMsIDEsIDAsIDksIDYsIDgsIDcsIDExXTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gICAgY29uc3QgVG9waWN0b0lkID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6XCIyXCIsXCLlnLDnm6TmlLnoia9cIjpcIjNcIixcIuODiOODs+ODjeODq+aOmOWJilwiOlwiMVwiLFxuICAgICAgICBcIuWFjemch+ani+mAoFwiOlwiMFwiLFwi566h55CG44K344K544OG44OgXCI6XCI5XCIsXCLlu4Pmo4Tnianlh6bnkIZcIjpcIjZcIixcIuW7uuevieODkeODjeODq1wiOlwiOFwiLFxuICAgICAgIFwi56m66Kq/44K344K544OG44OgXCI6XCI3XCIsXCLmjpjliYroo4Xnva5cIjpcIjExXCIsXCLlu7rnr4noqK3oqIhcIjpcIjEwXCIsXCLjg4jjg7Pjg43jg6vmuKzph49cIjpcIjVcIn07XG4gIC8vIOOCreODo+ODg+OCt+ODpeeUqOOBruOCquODluOCuOOCp+OCr+ODiFxuICBjb25zdCBkYXRhQ2FjaGUgPSB1c2VSZWYoe1xuICAgIGNvbXBhbmllczoge30sXG4gICAgc3BhcnNlRGF0YToge31cbiAgfSk7XG5cbiAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFsbFRvcGljc0RhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgYWxsVG9waWMubWFwKGFzeW5jICh0YXJnZXRfaWQpID0+IHtcbiAgICAgICAgICBjb25zdCB0aW1lID0gOTtcbiAgICAgICAgICBjb25zdCBjb21wYW55VXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRfaWR9L2NvbXBhbnkudHh0YDtcbiAgICAgICAgICBjb25zdCBzcGFyc2VEYXRhVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9wZXJzb25hPTUvb2NjdXB5X3RvcGljXyR7dGltZX0uanNvbmA7XG5cbiAgICAgICAgICAvLyDjgq3jg6Pjg4Pjgrfjg6XjgpLnorroqo1cbiAgICAgICAgICBpZiAoIWRhdGFDYWNoZS5jdXJyZW50LmNvbXBhbmllc1t0YXJnZXRfaWRdKSB7XG4gICAgICAgICAgICBkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXSA9IGF3YWl0IGZldGNoRGF0YShjb21wYW55VXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWRhdGFDYWNoZS5jdXJyZW50LnNwYXJzZURhdGFbdGFyZ2V0X2lkXSkge1xuICAgICAgICAgICAgZGF0YUNhY2hlLmN1cnJlbnQuc3BhcnNlRGF0YVt0YXJnZXRfaWRdID0gYXdhaXQgZmV0Y2hEYXRhKHNwYXJzZURhdGFVcmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNvbXBhbmllcyA9IGRhdGFDYWNoZS5jdXJyZW50LmNvbXBhbmllc1t0YXJnZXRfaWRdO1xuICAgICAgICAgIGNvbnN0IHNwYXJzZURhdGEgPSBkYXRhQ2FjaGUuY3VycmVudC5zcGFyc2VEYXRhW3RhcmdldF9pZF07XG5cbiAgICAgICAgICAvLyDmraPopo/ljJbplqLmlbBcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVTdHJpbmcgPSAoc3RyKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0ciAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLpnZ7mloflrZfliJfjg4fjg7zjgr/jgYzmpJzlh7rjgZXjgozjgb7jgZfjgZ86XCIsIHN0cik7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyDpnZ7mloflrZfliJfjg4fjg7zjgr/jga/nhKHoppZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHIubm9ybWFsaXplKFwiTkZDXCIpLnRyaW0oKTsgLy8g5q2j6KaP5YyW44Go44OI44Oq44Og44KS6YGp55SoXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIOato+imj+WMluOBl+OBn+ODh+ODvOOCv+OBp+avlOi8g1xuICAgICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbmllcyA9IGNvbXBhbmllcy5tYXAobm9ybWFsaXplU3RyaW5nKTtcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW55ID0gbm9ybWFsaXplU3RyaW5nKGNvbXBhbnlbMF0pO1xuXG4gICAgICAgICAgaWYgKCFzYW5pdGl6ZWRDb21wYW5pZXMuaW5jbHVkZXMoc2FuaXRpemVkQ29tcGFueSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcGFueSBcIiR7c2FuaXRpemVkQ29tcGFueX1cIiBub3QgZm91bmQgaW4gdG9waWMgJHt0YXJnZXRfaWR9YCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDjgrnjg5Hjg7zjgrnjg4fjg7zjgr/jgpLlh6bnkIZcbiAgICAgICAgICBjb25zdCByb3dTdW1zID0gcHJvY2Vzc1NwYXJzZURhdGEoc3BhcnNlRGF0YSk7XG5cbiAgICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBzYW5pdGl6ZWRDb21wYW5pZXMuaW5kZXhPZihzYW5pdGl6ZWRDb21wYW55KTtcblxuICAgICAgICAgIHJldHVybiB7IHRvcGljOiB0YXJnZXRfaWQsIHZhbHVlOiByb3dTdW1zW2NvbXBhbnlJbmRleF0gfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGFsbFRvcGljc0RhdGEuZmlsdGVyKChkYXRhKSA9PiBkYXRhICE9PSBudWxsKTtcblxuICAgICAgLy8g5q2j6KaP5YyW44Go44K944O844OIXG4gICAgICBjb25zdCB0b3RhbFZhbHVlID0gZmlsdGVyZWREYXRhLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnZhbHVlLCAwKTtcbiAgICAgIGlmICh0b3RhbFZhbHVlID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk5vIHZhbGlkIGRhdGEgdG8gbm9ybWFsaXplLlwiKTtcbiAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG5cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZERhdGEgPSBmaWx0ZXJlZERhdGEubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgY2F0ZWdvcnk6IGl0ZW0udG9waWMsXG4gICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlIC8gdG90YWxWYWx1ZSxcbiAgICAgIH0pKS5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgIHNldENoYXJ0RGF0YShub3JtYWxpemVkRGF0YS5zbGljZSgwLCAxMCkpOyAvLyDkuIrkvY0xMOS7tuOBruOBv+ihqOekulxuICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyDliJ3mnJ/jg4fjg7zjgr/oqq3jgb/ovrzjgb/jgah1cGRhdGXjga7lpInmm7TmmYLjgavjg4fjg7zjgr/jgpLjg63jg7zjg4lcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiKSB7XG4gICAgICBsb2FkRGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZV0pO1xuXG4gIGNvbnN0IGhhbmRsZVBsb3RDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5wb2ludHMgJiYgZXZlbnQucG9pbnRzWzBdKSB7XG4gICAgICBjb25zdCBjbGlja2RhdGEgPSBldmVudC5wb2ludHNbMF0ubGFiZWw7IC8vIOOCr+ODquODg+OCr+OBleOCjOOBn+mDqOWIhuOBruODqeODmeODq1xuICAgICAgY29uc3QgbGFiZWwgPSBUb3BpY3RvSWRbY2xpY2tkYXRhXVxuICAgICAgY29uc3QgdG9waWNpZCA9IGxhYmVsLnJlcGxhY2UoXCJUb3BpYyBcIiwgXCJcIik7XG4gICAgICBvbkNsaWNrRGF0YShbdG9waWNpZF0pOyAvLyDopqrjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavjg6njg5njg6vjgpLpgJrnn6VcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoaXRlbSA9PiAgSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV0pLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgIGNvbG9yczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gY29sb3JtYXBbSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV1dKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgICAgb25DbGljaz17aGFuZGxlUGxvdENsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jgqTjg5njg7Pjg4jjgpLov73liqBcbiAgICAgIC8+XG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44OG44Kt44K544OI44OH44O844K/44KS6Kqt44G/6L6844KA6Zai5pWwXG5jb25zdCBmZXRjaFRleHREYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90UGllQSA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gIGNvbnN0IGNvbG9ybWFwID0geyfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLmoKrlvI/kvJrnpL7lpKfmnpfntYRcIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIua4heawtOW7uuioreagquW8j+S8muekvlwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gICAgICBcIuWkp+aIkOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgICAgIFwi5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+XCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuS6lOa0i+W7uuioreagquW8j+S8muekvlwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5qCq5byP5Lya56S+44OV44K444K/XCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gICAgICBcIuaIuOeUsOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMjM3LCAxMDAsIDkwKScsIFwi5qCq5byP5Lya56S+54aK6LC357WEXCI6J3JnYigxNjUsIDE3MCwgMTUzKSd9O1xuICAgICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gMDtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b3BpYyB8fCBcImRlZmF1bHRfdG9waWNcIjsgLy8g5Yid5pyf5YCk44Go44GX44GmXCJkZWZhdWx0X3RvcGljXCLjgpLoqK3lrppcbiAgICAgICAgY29uc3QgZGF0YVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdG9waWMke3RhcmdldElkfS9wZXJzb25hPTUvb2NjdXB5X21lYW5fJHt0aW1lfS5qc29uYDtcbiAgICAgICAgY29uc3QgY29sdW1uVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vY29tcGFueS50eHRgO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+WPluW+l1xuICAgICAgICBjb25zdCBbdmFsdWVzLCBsYWJlbHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShkYXRhVXJsKSxcbiAgICAgICAgICBmZXRjaFRleHREYXRhKGNvbHVtblVybCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8vIOWApOOBqOODqeODmeODq+OBrue1hOOBv+WQiOOCj+OBm+OCkuS9nOaIkFxuICAgICAgICBjb25zdCBkYXRhID0gbGFiZWxzLm1hcCgobGFiZWwsIGluZGV4KSA9PiAoe1xuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZXMudmFsdWVbaW5kZXhdIHx8IDAsIC8vIOWApOOBjOOBquOBhOWgtOWQiOOBrzBcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIOWApOOBq+WfuuOBpeOBhOOBpumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5oq95Ye6XG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBkYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtJZHRvVG9waWNbdGFyZ2V0SWRdfeOBq+mWouOBmeOCi+eJueioseOBruS8gealreWNoOacieeOh2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4Hjg6Pjg7zjg4jjg4fjg7zjgr/jga7lh6bnkIbkuK3jgavjgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g5Yid5Zue44Os44Oz44OA44Oq44Oz44Kw5pmC44GoYHVwZGF0ZWDlpInmm7TmmYLjgavjg4fjg7zjgr/jgpLjg63jg7zjg4lcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIikge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW2l0ZW0ubGFiZWxdKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gIFxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuXG4gXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Db21wID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCB9KSA9PiB7XG5jb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCJ9O1xuXG5jb25zdCBjb2xvcm1hcCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLlnLDnm6TmlLnoia9cIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIuODiOODs+ODjeODq+aOmOWJilwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gICAgICAgICAgXCLlhY3pnIfmp4vpgKBcIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIueuoeeQhuOCt+OCueODhuODoFwiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5buD5qOE54mp5Yem55CGXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gICAgICAgICAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gIGNvbnN0IGFycm93X2NvbG9yID0gWycjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnXTtcblxuICBjb25zdCBbcHJlcGFyZWREYXRhLCBzZXRQcmVwYXJlZERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmaWdEYXRhLCBzZXRGaWdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fubm90YXRpb25zLCBzZXRBbm5vdGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCLkvIHmpa3jga7nq4vjgaHkvY3nva5cIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmVwYXJlRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbFByb21pc2VzID0gKHRvcGljIHx8IFtcImRlZmF1bHRfdG9waWNcIl0pLm1hcChhc3luYyAodGFyZ2V0X2lkKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvcGljXCIsdGFyZ2V0X2lkKVxuICAgICAgICAgIGNvbnN0IGNvbHVtblBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC9hbHBoYS90b3BpYz0ke3RhcmdldF9pZH0vY29tcGFueS50eHRgO1xuICAgICAgICAgIGNvbnN0IGNvbXBhbmllcyA9IGF3YWl0IGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCk7XG5cbiAgICAgICAgICBjb25zdCBjb21wYW55RGljdCA9IGNvbXBhbmllcy5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgYWNjW3ZhbHVlXSA9IGlkeDtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgY29uc3QgbmV3U2VhcmNoTGlzdCA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55IDogW2NvbXBhbnldO1xuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkU2VhcmNoTGlzdCA9IG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KTtcblxuICAgICAgICAgIGNvbnN0IG5vZGVfYWxwaGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWx0ZXJlZFNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuICAgICAgICAgIGNvbnN0IG5vZGVfYmV0YSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbHRlcmVkU2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGopID0+IGogKyA1KS5tYXAoYXN5bmMgKHApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC9hbHBoYS90b3BpYz0ke3RhcmdldF9pZH0vdGVzdF9vcHRpbWl6ZV8ke3B9LnR4dGA7XG4gICAgICAgICAgICBjb25zdCB7IGFscGhhX2xpLCBiZXRhX2xpIH0gPSBhd2FpdCB0b0xpc3QocGFyYW1ldGVyUGF0aCk7XG5cbiAgICAgICAgICAgIGZpbHRlcmVkU2VhcmNoTGlzdC5mb3JFYWNoKChrLCBqKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbmllcy5pbmRleE9mKGspO1xuICAgICAgICAgICAgICBub2RlX2FscGhhW2pdW3AgLSA1XSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICAgIG5vZGVfYmV0YVtqXVtwIC0gNV0gPSBiZXRhX2xpW2lkeF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICAgIHJldHVybiB7IG5vZGVfYWxwaGEsIG5vZGVfYmV0YSwgZmlsdGVyZWRTZWFyY2hMaXN0IH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChhbGxQcm9taXNlcyk7XG5cbiAgICAgICAgY29uc3QgY29tYmluZWRBbHBoYSA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0Lm5vZGVfYWxwaGEpO1xuICAgICAgICBjb25zdCBjb21iaW5lZEJldGEgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5ub2RlX2JldGEpO1xuICAgICAgICBjb25zdCBjb21iaW5lZFNlYXJjaExpc3QgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5maWx0ZXJlZFNlYXJjaExpc3QpO1xuXG4gICAgICAgIHNldFByZXBhcmVkRGF0YSh7IGFscGhhOiBjb21iaW5lZEFscGhhLCBiZXRhOiBjb21iaW5lZEJldGEsIHNlYXJjaExpc3Q6IGNvbWJpbmVkU2VhcmNoTGlzdCB9KTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueX3jga7mpa3nlYzjgafjga7nq4vjgaHkvY3nva5gKTsgLy8g5Yid5pyf44K/44Kk44OI44Or44KS6Kit5a6aXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5rqW5YKZ5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOWIneacn+ODrOODs+ODgOODquODs+OCsOaZguOBq+OCguODh+ODvOOCv+OCkua6luWCmVxuICAgIHByZXBhcmVEYXRhKCk7XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZSAmJiBwcmVwYXJlZERhdGEpIHtcbiAgICAgIGNvbnN0IHBsb3REYXRhID0gcHJlcGFyZWREYXRhLnNlYXJjaExpc3QubWFwKChrLCBqKSA9PiAoe1xuICAgICAgICB4OiBwcmVwYXJlZERhdGEuYWxwaGFbal0sXG4gICAgICAgIHk6IHByZXBhcmVkRGF0YS5iZXRhW2pdLFxuICAgICAgICBtb2RlOiBcImxpbmVzK21hcmtlcnMrdGV4dFwiLFxuICAgICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgICAgdGV4dHBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgY29sb3I6IGNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY1tqXV1dLFxuICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IElkdG9Ub3BpY1t0b3BpY1tqXV0sXG4gICAgICB9KSk7XG5cbiAgICAgIGNvbnN0IHBsb3RBbm5vdGF0aW9ucyA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICAgIEFycmF5KDQpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgICAgICAgIHg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXVtpICsgMV0sXG4gICAgICAgICAgeTogcHJlcGFyZWREYXRhLmJldGFbal1baSArIDFdLFxuICAgICAgICAgIHhyZWY6ICd4JyxcbiAgICAgICAgICB5cmVmOiAneScsXG4gICAgICAgICAgYXhyZWY6ICd4JyxcbiAgICAgICAgICBheXJlZjogJ3knLFxuICAgICAgICAgIGF4OiBwcmVwYXJlZERhdGEuYWxwaGFbal1baV0sXG4gICAgICAgICAgYXk6IHByZXBhcmVkRGF0YS5iZXRhW2pdW2ldLFxuICAgICAgICAgIGFycm93Y29sb3I6Y29sb3JtYXBbSWR0b1RvcGljW3RvcGljW2pdXV0sXG4gICAgICAgICAgYXJyb3dzaXplOiAxLjIsXG4gICAgICAgICAgYXJyb3d3aWR0aDogMS4yLFxuICAgICAgICAgIGFycm93aGVhZDogNSxcbiAgICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICAgIH0pKVxuICAgICAgKTtcblxuICAgICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgICBzZXRBbm5vdGF0aW9ucyhwbG90QW5ub3RhdGlvbnMpO1xuXG4gICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgcHJlcGFyZWREYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBzdHlsZT17eyB3aWR0aDonMTAwdmgnICxoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHhyZWY6ICdwYXBlcicsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbm5vdGF0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjI1LFxuICAgICAgICAgICAgICB5OiAxLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNzUsXG4gICAgICAgICAgICAgIHk6IDEuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgormnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC4yNSxcbiAgICAgICAgICAgICAgeTogLTAuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/kvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC43NSxcbiAgICAgICAgICAgICAgeTogLTAuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/mnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxLjAzXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlswLCAwLjUsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6MjUsICAgLy8gWei7uOOBi+OCieOBrui3nembou+8iOimi+OChOOBmeOBj+OBmeOCi+OBn+OCge+8iVxuICAgICAgICAgICAgcmFuZ2U6IFstMC4xLCAxLjFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6Wy0wLjEsIDAuNSwgMV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogNDAsIGw6IDQ1LCByOiA1MCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGJvcmRlcndpZHRoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Db21wO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cbmNvbnN0IGNvbG9ybWFwID0geyfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLmoKrlvI/kvJrnpL7lpKfmnpfntYRcIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIua4heawtOW7uuioreagquW8j+S8muekvlwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gIFwi5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupdcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuagquW8j+S8muekvumVt+iwt+W3peOCs+ODvOODneODrOODvOOCt+ODp+ODs1wiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICBcIuWJjeeUsOW7uuioreW3pealreagquW8j+S8muekvlwiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLkupTmtIvlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuagquW8j+S8muekvuODleOCuOOCv1wiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICBcIuaIuOeUsOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMjM3LCAxMDAsIDkwKScsIFwi5qCq5byP5Lya56S+54aK6LC357WEXCI6J3JnYigxNjUsIDE3MCwgMTUzKSd9O1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Ub3BpYyA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBhcnJvd19jb2xvciA9IFsnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJ107XG4gIGNvbnN0IFtmaWdEYXRhLCBzZXRGaWdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fubm90YXRpb25zLCBzZXRBbm5vdGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb21wYW55TGlzdCwgc2V0Q29tcGFueUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoTGlzdCwgc2V0U2VhcmNoTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICAvLyDliJ3mnJ/jg4fjg7zjgr/jga7jg63jg7zjg4lcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiAmJiB0b3BpYykge1xuICAgICAgY29uc3QgdGFyZ2V0X2lkID0gdG9waWM7IC8vIOODiOODlOODg+OCr0lE44Gu6Kit5a6aXG4gICAgICBjb25zdCBjb2x1bW5QYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRfaWR9L2NvbXBhbnkudHh0YDtcblxuICAgICAgbG9hZENvbXBhbmllcyhjb2x1bW5QYXRoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldENvbXBhbnlMaXN0KGRhdGEpO1xuICAgICAgICBzZXRUaXRsZShg5qWt55WM5YaF44Gn44Gu5LyB5qWt44Gu56uL44Gh5L2N572uYCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpY10pO1xuXG4gIC8vIOaknOe0ouWvvuixoeOBruODleOCo+ODq+OCv+ODquODs+OCsFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb21wYW55TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb21wYW55RGljdCA9IGNvbXBhbnlMaXN0LnJlZHVjZSgoYWNjLCB2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgIGFjY1t2YWx1ZV0gPSBpZHg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGNvbnN0IG5ld1NlYXJjaExpc3QgPSBBcnJheS5pc0FycmF5KGNvbXBhbnkpID8gY29tcGFueSA6IFtjb21wYW55XTtcbiAgICAgIHNldFNlYXJjaExpc3QobmV3U2VhcmNoTGlzdC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgaW4gY29tcGFueURpY3QpKTtcbiAgICB9XG4gIH0sIFtjb21wYW55TGlzdCwgY29tcGFueV0pO1xuXG4gIC8vIOODh+ODvOOCv+OBruaPj+eUu1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1cGRhdGUgJiYgc2VhcmNoTGlzdC5sZW5ndGggPiAwICYmIHRvcGljKSB7XG4gICAgICBjb25zdCB0YXJnZXRfaWQgPSB0b3BpYzsgLy8g44OI44OU44OD44KvSUTjga7oqK3lrppcbiAgICAgIGNvbnN0IG5vZGVfYWxwaGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcbiAgICAgIGNvbnN0IG5vZGVfYmV0YSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuXG4gICAgICBjb25zdCBwcm9taXNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGkpID0+IGkgKyA1KS5tYXAoKHApID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvcGFyYW0vcGF0ZW50L2FscGhhL3RvcGljPSR7dGFyZ2V0X2lkfS90ZXN0X29wdGltaXplXyR7cH0udHh0YDtcbiAgICAgICAgcmV0dXJuIHRvTGlzdChwYXJhbWV0ZXJQYXRoKS50aGVuKCh7IGFscGhhX2xpLCBiZXRhX2xpIH0pID0+IHtcbiAgICAgICAgICBzZWFyY2hMaXN0LmZvckVhY2goKGssIGopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbnlMaXN0LmluZGV4T2Yoayk7XG4gICAgICAgICAgICBub2RlX2FscGhhW2pdW3AgLSA1XSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICBub2RlX2JldGFbal1bcCAtIDVdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsb3REYXRhID0gc2VhcmNoTGlzdC5tYXAoKGssIGopID0+ICh7XG4gICAgICAgICAgeDogbm9kZV9hbHBoYVtqXSxcbiAgICAgICAgICB5OiBub2RlX2JldGFbal0sXG4gICAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgICAgICB0ZXh0cG9zaXRpb246IFwidG9wIGxlZnRcIixcbiAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JtYXBba10sXG4gICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogayxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IHBsb3RBbm5vdGF0aW9ucyA9IHNlYXJjaExpc3QuZmxhdE1hcCgoaywgaikgPT5cbiAgICAgICAgICBBcnJheSg0KS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgICAgIHg6IG5vZGVfYWxwaGFbal1baSArIDFdLFxuICAgICAgICAgICAgeTogbm9kZV9iZXRhW2pdW2kgKyAxXSxcbiAgICAgICAgICAgIHhyZWY6ICd4JyxcbiAgICAgICAgICAgIHlyZWY6ICd5JyxcbiAgICAgICAgICAgIGF4OiBub2RlX2FscGhhW2pdW2ldLFxuICAgICAgICAgICAgYXk6IG5vZGVfYmV0YVtqXVtpXSxcbiAgICAgICAgICAgIGF4cmVmOiAneCcsXG4gICAgICAgICAgICBheXJlZjogJ3knLFxuICAgICAgICAgICAgYXJyb3djb2xvcjogY29sb3JtYXBba10sXG4gICAgICAgICAgICBhcnJvd3NpemU6IDEuMixcbiAgICAgICAgICAgIGFycm93d2lkdGg6IDEuMixcbiAgICAgICAgICAgIGFycm93aGVhZDogNSxcbiAgICAgICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgKTtcblxuICAgICAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAgICAgc2V0QW5ub3RhdGlvbnMocGxvdEFubm90YXRpb25zKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgc2VhcmNoTGlzdCwgY29tcGFueUxpc3QsIHRvcGljXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBzdHlsZT17eyB3aWR0aDonMTAwdmgnICxoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHhyZWY6ICdwYXBlcicsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbm5vdGF0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjI1LFxuICAgICAgICAgICAgICB5OiAxLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNzUsXG4gICAgICAgICAgICAgIHk6IDEuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgormnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC4yNSxcbiAgICAgICAgICAgICAgeTogLTAuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/kvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC43NSxcbiAgICAgICAgICAgICAgeTogLTAuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/mnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxLjAzXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlswLCAwLjUsIDFdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6MjUsICAgLy8gWei7uOOBi+OCieOBrui3nembou+8iOimi+OChOOBmeOBj+OBmeOCi+OBn+OCge+8iVxuICAgICAgICAgICAgcmFuZ2U6IFstMC4xLCAxLjFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6Wy0wLjEsIDAuNSwgMV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogNDAsIGw6IDQ1LCByOiA1MCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGJvcmRlcndpZHRoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Ub3BpYztcbiIsIi8vIFNpZGViYXIuanN4XG5pbXBvcnQgUmVhY3QgLHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY29yZGlvbiwgQnV0dG9uLCBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IFNpZGViYXIgPSAoeyBvbkFwcGx5LCB2aXN1YWxUeXBlLCBvblZpc3VhbFR5cGVDaGFuZ2UsIHRvcGljTGlzdCwgY29tcGFueUxpc3QsIHNlbGVjdGVkQ29tcGFuaWVzLCBzZWxlY3RlZFRvcGljcywgb25DaGFuZ2VUb3BpYywgb25DaGFuZ2VDb21wYW55IH0pID0+IHtcbiAgY29uc3QgW2lucHV0VHlwZSwgc2V0SW5wdXRUeXBlXSA9IHVzZVN0YXRlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSk7IC8vIOWIneacn+WApOOBryBcImNoZWNrYm94XCJcbiAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBvblZpc3VhbFR5cGVDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWU9PVwib25lLWNvbXBcIil7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJjaGVja2JveFwiLFwicmFkaW9cIl0pfVxuICAgICAgZWxzZXtcbiAgICAgICAgc2V0SW5wdXRUeXBlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSlcbiAgICAgICAgfVxuXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dFR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG4gIFxuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcsIHBhZGRpbmc6ICcxMHB4JywgYmFja2dyb3VuZENvbG9yOiAnYmctbGlnaHQnIH19PlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgdGV4dC1kYW5nZXIgZm9udC1pdGFsaWNcIiBzdHlsZT17eyBoZWlnaHQ6ICc1JScgfX0+XG4gICAgICAgIDxDb2wgc209ezZ9PlxuICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMCUnIH19IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+XG4gICAgICAgICAgICDlj6/oppbljJbmnaHku7ZcbiAgICAgICAgICA8L2g1PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzbT17NH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJhcHBseVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkFwcGx5fVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTUlJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWPr+imluWMllxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICB7LyogQWNjb3JkaW9uICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBcIiBzdHlsZT17eyBoZWlnaHQ6ICc4MCUnIH19PlxuICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgIHsvKiBWaXN1YWxpemF0aW9uIFR5cGUgKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMFwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj7lj6/oppbljJbjgr/jgqTjg5c8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBcIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Zpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIn0gLy8g44OH44OV44Kp44Or44OI44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXgtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID4x56S+44Gr5rOo55uuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIn0gLy8g44OH44OV44Kp44Or44OI44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19XG4gICAgICAgICAgICAgICAgICA+MeODiOODlOODg+OCr+OBq+azqOebrjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG4gICAgICAgICAgey8qIFRvcGljIFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIxXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlRvcGljPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICB7dG9waWNMaXN0Lm1hcCgodG9waWMpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dG9waWN9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVswXX0gXG4gICAgICAgICAgICAgICAgICAgIGlkID0ge3RvcGljfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFRvcGljcy5pbmNsdWRlcyh0b3BpYyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVRvcGljKHRvcGljLGlucHV0VHlwZVswXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3BpY1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RvcGljfT57SWR0b1RvcGljW3RvcGljXX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBDb21wYW55IFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIyXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkNvbXBhbnk8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIHtjb21wYW55TGlzdC5tYXAoKGNvbXBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29tcGFueX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aW5wdXRUeXBlWzFdfSBcbiAgICAgICAgICAgICAgICAgICAgaWQgPSB7Y29tcGFueX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDb21wYW5pZXMuaW5jbHVkZXMoY29tcGFueSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUNvbXBhbnkoY29tcGFueSxpbnB1dFR5cGVbMV0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdjb21wYW55J1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtjb21wYW55fT57Y29tcGFueX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/lj5blvpfplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RCYXJDaGFydEIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBjbGlja2RhdGEsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiRknjga7liIbluINcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDk7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gY2xpY2tkYXRhIHx8IHRvcGljWzBdIHx8IFwiZGVmYXVsdF90b3BpY1wiOyAvLyBgY2xpY2tkYXRhYOOCkuWEquWFiFxuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vdHJlbmQvb3V0cHV0XyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGNvbXBhbnlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9wYXJhbS9wYXRlbnQvYWxwaGEvdG9waWM9JHt0YXJnZXRJZH0vY29tcGFueS50eHRgO1xuICAgICAgICBjb25zdCBmaVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2ZpX3N1YmNsYXNzX3NwbGl0Lmpzb25gO1xuICAgICAgICAvLyDjg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgW29yaWdpbmFsLCBjb21wYW55TGlzdCwgZmlMaXN0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEocGF0aCksXG4gICAgICAgICAgbG9hZENvbXBhbmllcyhjb21wYW55UGF0aCksXG4gICAgICAgICAgZmV0Y2hEYXRhKGZpUGF0aCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICghY29tcGFueUxpc3QuaW5jbHVkZXMoY29tcGFueVswXSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke2NvbXBhbnlbMF19XCIgbm90IGZvdW5kLmApO1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29tcGFueeOBruODh+ODvOOCv+WPluW+l1xuICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBjb21wYW55TGlzdC5pbmRleE9mKGNvbXBhbnlbMF0pO1xuICAgICAgICBjb25zdCBjb21wYW55RGF0YSA9IG9yaWdpbmFsW2NvbXBhbnlJbmRleF07XG4gICAgICAgIGlmICghY29tcGFueURhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIGRhdGEgZm91bmQgZm9yIGNvbXBhbnkgaW5kZXggXCIke2NvbXBhbnlJbmRleH1cIi5gKTtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpTT07jg4fjg7zjgr/jga7mlbTlvaJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKGNvbXBhbnlEYXRhKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICBjYXRlZ29yeToga2V5LFxuICAgICAgICAgIHZhbHVlOiBrZXkgPT09IFwiXCIgPyAwIDogcGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDAgfHwwLCAvLyDlgKTjgpLmlbDlgKTjgavlpInmj5vvvIjjgarjgYTloLTlkIjjga8w77yJXG4gICAgICAgICAgc3VtbWFyaXplOiBmaUxpc3Rba2V5XSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBmb3JtYXR0ZWREYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtjb21wYW55WzBdfeOBrkZJ44Gu5YiG5biDYCk7XG4gICAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGBjbGlja2RhdGFg44Gu5YCk44GM5aSJ5YyW44GX44Gf44GL44KS5piO56S655qE44Gr5q+U6LyDXG4gICAgaWYgKFxuICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiICYmXG4gICAgICAodXBkYXRlIHx8IGNoYXJ0RGF0YS5sZW5ndGggPT09IDAgfHwgY2xpY2tkYXRhKVxuICAgICkge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBKU09OLnN0cmluZ2lmeShjbGlja2RhdGEpLCB1cGRhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksIC8vIOaoquWQkeOBjeajkuOCsOODqeODleeUqOOBruWApO+8iOmAhumghu+8iVxuICAgICAgICAgICAgeTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSkucmV2ZXJzZSgpLCAvLyDjgqvjg4bjgrTjg6rvvIjpgIbpoIbvvIlcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIiwgLy8g5qiq5ZCR44GN5qOS44Kw44Op44OVXG4gICAgICAgICAgICBtYXJrZXI6IHsgY29sb3I6IFwicm95YWxibHVlXCIgfSwgLy8g5qOS44Gu6ImyXG4gICAgICAgICAgICBob3ZlcnRlbXBsYXRlOlxuICAgICAgICAgICAgYOiqrOaYjjogJXtjdXN0b21kYXRhfTxicj4lOiAle3g6LjJmfSUgPGV4dHJhPjwvZXh0cmE+YCwgLy8gY3VzdG9tZGF0YSDjgpLlj4LnhadcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpY2tzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkZJXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiAzNSwgbDogODAsIHI6IDUwIH0sXG4gICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgYWxpZ246XCJsZWZ0XCIsXG4gICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgIHNpemU6IDExLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7jg5Xjgqnjg7Pjg4jjgrXjgqTjgrpcbiAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIiwgLy8g44OV44Kp44Oz44OI44Gu6ImyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmdjb2xvcjogXCJsaWdodHllbGxvd1wiLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7og4zmma/oibJcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcImdyYXlcIiwgLy8g44OE44O844Or44OB44OD44OX44Gu5p6g57ea6ImyXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cblxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/5Y+W5b6X6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuXG5cbmNvbnN0IFBsb3RCYXJDaGFydEEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDIVwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gOTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b3BpY1swXTsgLy8gY2xpY2tkYXRh44KS5YSq5YWIXG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3BhcmFtL3BhdGVudC9hbHBoYS90b3BpYz0ke3RhcmdldElkfS90cmVuZC9vdXRwdXRfdG9waWNfJHt0aW1lfS5qc29uYDtcbiAgICAgICAgY29uc3QgZmlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9maV9zdWJjbGFzc19zcGxpdC5qc29uYDtcblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgW29yaWdpbmFsLCBmaUxpc3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgICBmZXRjaERhdGEoZmlQYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhXCIsb3JpZ2luYWwpO1xuIFxuXG4gICAgICAgIC8vIEpTT07jg4fjg7zjgr/jga7mlbTlvaJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKG9yaWdpbmFsKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICBcbiAgICAgICAgICBjYXRlZ29yeToga2V5LFxuICAgICAgICAgIHZhbHVlOiBrZXkgPT09IFwiXCIgPyAwIDogcGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDAgfHwgMCwgXG4gICAgICAgICAgc3VtbWFyaXplOiBmaUxpc3Rba2V5XSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFcIixmb3JtYXR0ZWREYXRhKTtcblxuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBmb3JtYXR0ZWREYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgRknjga7liIbluINgKTtcbiAgICAgICAgY29uc29sZS5sb2coY2hhcnREYXRhKTtcbiAgICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwICkpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgdXBkYXRlXSk7IC8vIGNsaWNrZGF0YSDjgpLkvp3lrZjplqLkv4Ljgavov73liqBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksXG4gICAgICAgICAgICBjdXN0b21kYXRhOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnN1bW1hcml6ZSkucmV2ZXJzZSgpLCAvLyBzdW1tYXJpemUg44KSIGN1c3RvbWRhdGEg44Gr5rih44GZXG5cbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgICAgICAgIG1hcmtlcjogeyBjb2xvcjogXCJyb3lhbGJsdWVcIiB9LFxuICAgICAgICAgICAgaG92ZXJ0ZW1wbGF0ZTpcbiAgICAgICAgICAgIGDoqqzmmI46ICV7Y3VzdG9tZGF0YX08YnI+JTogJXt4Oi4yZn0lIDxleHRyYT48L2V4dHJhPmAsIC8vIGN1c3RvbWRhdGEg44KS5Y+C54WnXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aWNrc3VmZml4OiBcIiAlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogXCJGSVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDgwLCByOiA1MCB9LFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIGFsaWduOlwibGVmdFwiLFxuICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICBzaXplOiAxMSwgLy8g44OE44O844Or44OB44OD44OX44Gu44OV44Kp44Oz44OI44K144Kk44K6XG4gICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsIC8vIOODleOCqeODs+ODiOOBruiJslxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJnY29sb3I6IFwibGlnaHR5ZWxsb3dcIiwgLy8g44OE44O844Or44OB44OD44OX44Gu6IOM5pmv6ImyXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJncmF5XCIsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruaeoOe3muiJslxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG5cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RCYXJDaGFydEE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbXlfYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYXV0aDBfYXV0aDAtcmVhY3RfZGlzdF9hdXRoMC1yZWFjdF9lc21fanMtbm9kZV9tb2R1bGVzX3JlYWN0LWJvb3RzdHJhcF9lLTk0ZDVmMFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJTaWRlYmFyIiwiQ29udGVudCIsInVzZUF1dGgwIiwiQXBwIiwibG9naW5XaXRoUmVkaXJlY3QiLCJsb2dvdXQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVMb2dpbiIsImNvbm5lY3Rpb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiYXJyb3dDb2xvciIsImNvbXBhbnlMaXN0IiwidG9waWNMaXN0IiwidmlzdWFsVHlwZSIsInNldFZpc3VhbFR5cGUiLCJpc0FwcGxpZWQiLCJzZXRJc0FwcGxpZWQiLCJzZWxlY3RlZENvbXBhbmllcyIsInNldFNlbGVjdGVkQ29tcGFuaWVzIiwic2VsZWN0ZWRUb3BpY3MiLCJzZXRTZWxlY3RlZFRvcGljcyIsImhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUFwcGx5IiwidG9nZ2xlU2VsZWN0aW9uIiwiaXRlbSIsInNldFNlbGVjdGVkIiwiYnV0dG9tdHlwZSIsInByZXZTZWxlY3RlZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaSIsIkNvbXBhbnlDaGVja2JveENoYW5nZSIsImNvbXBhbnkiLCJUb3BpY0NoZWNrYm94Q2hhbmdlIiwidG9waWMiLCJyZXNldElzQXBwbGllZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImZsdWlkIiwiY2xhc3NOYW1lIiwib25DbGljayIsIkZyYWdtZW50IiwibWQiLCJvbkFwcGx5Iiwib25WaXN1YWxUeXBlQ2hhbmdlIiwib25DaGFuZ2VUb3BpYyIsIm9uQ2hhbmdlQ29tcGFueSIsInN0eWxlIiwiaGVpZ2h0IiwicGxvdCIsInJlc2V0QXBwbHkiLCJDYXJkIiwiUGxvdFBpZUEiLCJQbG90UGllQiIsIlBsb3RQZXJzb25hQ29tcCIsIlBsb3RQZXJzb25hVG9waWMiLCJQbG90QmFyQ2hhcnRBIiwiUGxvdEJhckNoYXJ0QiIsImdldENhcmREYXRhIiwiX3JlZiIsImNsaWNrRGF0YSIsInNldENsaWNrRGF0YSIsImhhbmRsZVBpZUNoYXJ0Q2xpY2siLCJkYXRhIiwibG9nIiwiY2FyZERhdGEiLCJzZXRDYXJkRGF0YSIsImZldGNoRGF0YSIsIm1hcmdpbkxlZnQiLCJ1cGRhdGUiLCJvblJlbmRlcmVkIiwibGF5b3V0IiwidGl0bGUiLCJ3aWR0aCIsImNvbmZpZyIsInJlc3BvbnNpdmUiLCJvbkNsaWNrRGF0YSIsImNsaWNrZGF0YSIsIm1hcCIsImluZGV4Iiwia2V5IiwieHMiLCJmbGV4IiwiQm9keSIsIlRpdGxlIiwiZGlyZWN0aW9uIiwidG9VcHBlckNhc2UiLCJUZXh0IiwidmFsdWVzIiwiam9pbiIsImRhdGFQYXRoIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJjb2x1bW5QYXRoIiwicmVzcG9uc2VEYXRhIiwicmVzcG9uc2VDb2x1bW4iLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbkRBVEEiLCJqc29uIiwiY29sdW1uTGlzdCIsInRleHQiLCJzcGxpdCIsImxpbmUiLCJ0cmltIiwiY29tcGFueURhdGEiLCJ3YXJuIiwicHJvY2Vzc0RhdGEiLCJ1cCIsImRvd24iLCJyaWdodCIsImxlZnQiLCJyZXBsYWNlVmFsdWVzV2l0aENvbHVtbnMiLCJyZXBsYWNlZFZhbHVlIiwiUmVhY3RET00iLCJBdXRoMFByb3ZpZGVyIiwiZG9tYWluIiwiY2xpZW50SWQiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIiwiYXV0aG9yaXphdGlvblBhcmFtcyIsInJlZGlyZWN0X3VyaSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VSZWYiLCJQbG90IiwiY29sb3JtYXAiLCJ1cmwiLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnRlbnRUeXBlIiwiaGVhZGVycyIsImdldCIsInByb2Nlc3NTcGFyc2VEYXRhIiwic3BhcnNlRGF0YSIsIm51bVJvd3MiLCJNYXRoIiwibWF4IiwiZW50cnkiLCJyb3ciLCJudW1Db2xzIiwiY29sIiwibWF0cml4IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZmlsbCIsImZvckVhY2giLCJyZWR1Y2UiLCJzdW0iLCJfcmVmMiIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsInNldFRpdGxlIiwiYWxsVG9waWMiLCJJZHRvVG9waWMiLCJUb3BpY3RvSWQiLCJkYXRhQ2FjaGUiLCJjb21wYW5pZXMiLCJsb2FkRGF0YSIsImFsbFRvcGljc0RhdGEiLCJ0YXJnZXRfaWQiLCJ0aW1lIiwiY29tcGFueVVybCIsInNwYXJzZURhdGFVcmwiLCJjdXJyZW50Iiwibm9ybWFsaXplU3RyaW5nIiwic3RyIiwibm9ybWFsaXplIiwic2FuaXRpemVkQ29tcGFuaWVzIiwic2FuaXRpemVkQ29tcGFueSIsInJvd1N1bXMiLCJjb21wYW55SW5kZXgiLCJpbmRleE9mIiwiZmlsdGVyZWREYXRhIiwidG90YWxWYWx1ZSIsIm5vcm1hbGl6ZWREYXRhIiwiY2F0ZWdvcnkiLCJzb3J0IiwiYSIsImIiLCJzbGljZSIsImhhbmRsZVBsb3RDbGljayIsImV2ZW50IiwicG9pbnRzIiwibGFiZWwiLCJ0b3BpY2lkIiwicmVwbGFjZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInR5cGUiLCJsYWJlbHMiLCJTdHJpbmciLCJtYXJrZXIiLCJjb2xvcnMiLCJzaG93bGVnZW5kIiwicGxvdF9iZ2NvbG9yIiwicGFwZXJfYmdjb2xvciIsIm1hcmdpbiIsInQiLCJsIiwiciIsImZldGNoVGV4dERhdGEiLCJsb2FkQ2hhcnREYXRhIiwidGFyZ2V0SWQiLCJkYXRhVXJsIiwiY29sdW1uVXJsIiwic29ydGVkRGF0YSIsImxvYWRDb21wYW5pZXMiLCJ0b0xpc3QiLCJsaW5lcyIsImFscGhhX2xpIiwicGFyc2VGbG9hdCIsImJldGFfbGkiLCJQbG90UGVyc29uQ29tcCIsImFycm93X2NvbG9yIiwicHJlcGFyZWREYXRhIiwic2V0UHJlcGFyZWREYXRhIiwiZmlnRGF0YSIsInNldEZpZ0RhdGEiLCJhbm5vdGF0aW9ucyIsInNldEFubm90YXRpb25zIiwicHJlcGFyZURhdGEiLCJhbGxQcm9taXNlcyIsImNvbXBhbnlEaWN0IiwiYWNjIiwiaWR4IiwibmV3U2VhcmNoTGlzdCIsImlzQXJyYXkiLCJmaWx0ZXJlZFNlYXJjaExpc3QiLCJub2RlX2FscGhhIiwibm9kZV9iZXRhIiwicHJvbWlzZXMiLCJfIiwiaiIsInAiLCJwYXJhbWV0ZXJQYXRoIiwiayIsInJlc3VsdHMiLCJjb21iaW5lZEFscGhhIiwiZmxhdE1hcCIsInJlc3VsdCIsImNvbWJpbmVkQmV0YSIsImNvbWJpbmVkU2VhcmNoTGlzdCIsImFscGhhIiwiYmV0YSIsInNlYXJjaExpc3QiLCJwbG90RGF0YSIsIngiLCJ5IiwibW9kZSIsInRleHRwb3NpdGlvbiIsInN5bWJvbCIsImNvbG9yIiwic2l6ZSIsIm5hbWUiLCJwbG90QW5ub3RhdGlvbnMiLCJ4cmVmIiwieXJlZiIsImF4cmVmIiwiYXlyZWYiLCJheCIsImF5IiwiYXJyb3djb2xvciIsImFycm93c2l6ZSIsImFycm93d2lkdGgiLCJhcnJvd2hlYWQiLCJzaG93YXJyb3ciLCJmb250IiwieGFuY2hvciIsInlhbmNob3IiLCJ4YXhpcyIsInJhbmdlIiwibGluZWNvbG9yIiwibGluZXdpZHRoIiwiZ3JpZGNvbG9yIiwiZ3JpZHdpZHRoIiwiZ3JpZGRhc2giLCJ0aWNrbW9kZSIsInRpY2t2YWxzIiwidGlja3RleHQiLCJ6ZXJvbGluZSIsInlheGlzIiwidGl0bGVfc3RhbmRvZmYiLCJsZWdlbmQiLCJiZ2NvbG9yIiwiYm9yZGVyY29sb3IiLCJib3JkZXJ3aWR0aCIsIlBsb3RQZXJzb25Ub3BpYyIsInNldENvbXBhbnlMaXN0Iiwic2V0U2VhcmNoTGlzdCIsInRoZW4iLCJBY2NvcmRpb24iLCJCdXR0b24iLCJpbnB1dFR5cGUiLCJzZXRJbnB1dFR5cGUiLCJoYW5kbGVSYWRpb0NoYW5nZSIsInRhcmdldCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJzbSIsImRlZmF1bHRBY3RpdmVLZXkiLCJJdGVtIiwiZXZlbnRLZXkiLCJIZWFkZXIiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJodG1sRm9yIiwiZm9udFNpemUiLCJwYXRoIiwiY29tcGFueVBhdGgiLCJmaVBhdGgiLCJvcmlnaW5hbCIsImZpTGlzdCIsImZvcm1hdHRlZERhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwic3VtbWFyaXplIiwiSlNPTiIsInN0cmluZ2lmeSIsInJldmVyc2UiLCJvcmllbnRhdGlvbiIsImhvdmVydGVtcGxhdGUiLCJtaXJyb3IiLCJ0aWNrc3VmZml4IiwiaG92ZXJsYWJlbCIsImFsaWduIiwiY3VzdG9tZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=