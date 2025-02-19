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
  })))));
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
  const [clickCompanyData, setClickCompanyData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // クリックデータの状態

  const handlePieChartClick = data => {
    console.log("クリックされたデータ:", data); // デバッグ用
    setClickData(data); // 状態を更新
  };
  const handlePersonaClick = data => {
    console.log("クリックされたデータ:", data); // デバッグ用
    setClickCompanyData(data); // 状態を更新
  };
  const [cardData, setCardData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
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
    md: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    md: 10
  }, visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_persona_topic_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    update: plot,
    visualType: visualType,
    topic: topic,
    company: company,
    onRendered: resetApply,
    onClickData: handlePersonaClick // クリックデータのハンドラーを渡す
    ,
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
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u8A72\u5F53\u3059\u308B\u8868\u793A\u304C\u3042\u308A\u307E\u305B\u3093")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    md: 1
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, visualType === "one-topic" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_go_anywhere_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    topic: topic,
    clickData: clickCompanyData,
    layout: {
      title: '任意の位置へ移動するための提案',
      width: '100%',
      height: '80%'
    },
    className: "bg-light"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null))));
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");


const ProposedVisualize = _ref => {
  let {
    topic,
    clickData
  } = _ref;
  const [proposedData, setProposedData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchData = async () => {
      try {
        const dataPath = `${"/my-app"}/data/visualize_data/topic${topic}/proposed/proposed.json`;
        const response = await fetch(dataPath);
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }
        const jsonData = await response.json();

        // `clickData`に対応する会社のデータを取得
        const companyData = jsonData[clickData];
        if (!companyData) {
          console.warn("指定したデータが存在しません: " + clickData);
          setProposedData([]);
          return;
        }

        // 指定されたトピックのデータを取得
        const topicData = companyData[topic];
        if (!topicData) {
          console.warn("指定したトピックが存在しません: " + topic);
          setProposedData([]);
          return;
        }
        setProposedData(topicData);
      } catch (err) {
        console.error("データの読み込み中にエラーが発生しました:", err);
        setError(err.message);
      }
    };
    fetchData();
  }, [topic, clickData]);
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u30A8\u30E9\u30FC: ", error);
  }
  if (!proposedData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...");
  }

  // データをカード形式で表示
  const renderCard = (direction, values) => {
    let label;
    switch (direction) {
      case "upleft":
        label = "左上";
        break;
      case "upright":
        label = "右上";
        break;
      case "downleft":
        label = "左下";
        break;
      case "downright":
        label = "右下";
        break;
      default:
        label = "その他";
    }

    // カード全体の背景色を設定（方向に基づくベースカラー）
    const baseColorMap = {
      upright: "rgba(255, 188, 188, ALPHA)",
      // 赤
      upleft: "rgba(255, 255, 188, ALPHA)",
      // 黄
      downright: "rgba(188, 221, 255, ALPHA)",
      // 青
      downleft: "rgba(188, 255, 188, ALPHA)" // 緑
    };
    const baseColor = baseColorMap[direction];
    const cardAlpha = 0.3; // 内部の要素数で透明度を変化
    const cardBackgroundColor = baseColor.replace("ALPHA", Math.min(cardAlpha, 1)); // 背景色を動的に設定

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: direction,
      className: "m-3",
      style: {
        backgroundColor: cardBackgroundColor
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, {
      className: "text-start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Title, {
      className: "text-start"
    }, label), values.slice(0, 5).map((value, index) => {
      // 順位に基づいて透明度を調整
      const alpha = 0.90 - index * 0.15; // 順位ごとに透明度を徐々に減少
      const itemBackgroundColor = baseColor.replace("ALPHA", Math.max(alpha, 0.1)); // 各アイテムの背景色

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "ranking-item py-2 px-3 border-bottom",
        style: {
          backgroundColor: itemBackgroundColor
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, index + 1, "\u4F4D\uFF1A"), " ", value || "");
    })));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "text-center my-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Header, {
    style: {
      backgroundColor: "#333333",
      color: "white",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "mb-0"
  }, clickData || " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, renderCard("upleft", proposedData.upleft || [])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, renderCard("upright", proposedData.upright || []))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, renderCard("downleft", proposedData.downleft || [])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, renderCard("downright", proposedData.downright || []))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProposedVisualize);

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
        const time = 5;
        const companyUrl = `${"/my-app"}/data/visualize_data/topic${target_id}/setting/company.txt`;
        const sparseDataUrl = `${"/my-app"}/data/visualize_data/topic${target_id}/occupy/occupy_topic_${time}.json`;

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
        const time = 5;
        const targetId = topic || "default_topic"; // 初期値として"default_topic"を設定
        const dataUrl = `${"/my-app"}/data/visualize_data/topic${targetId}/occupy/occupy_mean_${time}.json`;
        const columnUrl = `${"/my-app"}/data/visualize_data/topic${targetId}/setting/company.txt`;

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
          const columnPath = `${"/my-app"}/data/visualize_data/topic${target_id}/setting/company.txt`;
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
          }, (_, j) => j).map(async p => {
            const parameterPath = `${"/my-app"}/data/visualize_data/topic${target_id}/persona/test_optimize_${p + 1}.txt`;
            const {
              alpha_li,
              beta_li
            } = await toList(parameterPath);
            filteredSearchList.forEach((k, j) => {
              const idx = companies.indexOf(k);
              node_alpha[j][p] = alpha_li[idx];
              node_beta[j][p] = beta_li[idx];
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
        x: 1,
        y: 2.2,
        xanchor: 'center'
      },
      annotations: [{
        x: 0.5,
        y: 2.05,
        text: '（業界を引っ張り伝統的な分野に取り組んでいる）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 1.5,
        y: 2.05,
        text: '（業界を引っ張り未知の分野に投資している）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 0.5,
        y: 0.05,
        text: '（独自路線を進み伝統的な分野に取り組んでいる）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 1.5,
        y: 0.05,
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
        range: [0, 2.03],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [0, 1, 2],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      yaxis: {
        title: "順応性",
        title_standoff: 25,
        // Y軸からの距離（見やすくするため）
        range: [0, 2.1],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [0, 1, 2],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      margin: {
        t: 10,
        b: 10,
        l: 10,
        r: 10
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
    onRendered,
    onClickData
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
      const columnPath = `${"/my-app"}/data/visualize_data/topic${target_id}/setting/company.txt`;
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
      }, (_, i) => i).map(p => {
        const parameterPath = `${"/my-app"}/data/visualize_data/topic${target_id}/persona/test_optimize_${p + 1}.txt`;
        return toList(parameterPath).then(_ref2 => {
          let {
            alpha_li,
            beta_li
          } = _ref2;
          searchList.forEach((k, j) => {
            const idx = companyList.indexOf(k);
            node_alpha[j][p] = alpha_li[idx];
            node_beta[j][p] = beta_li[idx];
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
  const handlePersonaClick = event => {
    if (event.points && event.points[0]) {
      console.log(event.points[0]["data"]["name"]);
      const clickdata = event.points[0]["data"]["name"]; // クリックされた部分のラベル
      onClickData([clickdata]); // 親コンポーネントにラベルを通知
    }
  };
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
        x: 1,
        y: 2.2,
        xanchor: 'center'
      },
      annotations: [{
        x: 0.5,
        y: 2.05,
        text: '（業界を引っ張り伝統的な分野に取り組んでいる）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 1.5,
        y: 2.05,
        text: '（業界を引っ張り未知の分野に投資している）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 0.5,
        y: 0.05,
        text: '（独自路線を進み伝統的な分野に取り組んでいる）',
        showarrow: false,
        font: {
          size: 9,
          color: 'gray'
        },
        xanchor: 'center',
        yanchor: 'middle'
      }, {
        x: 1.5,
        y: 0.05,
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
        range: [0, 2],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [0, 1, 2],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      yaxis: {
        title: "順応性",
        title_standoff: 25,
        // Y軸からの距離（見やすくするため）
        range: [0, 2],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [0, 1, 2],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      margin: {
        t: 10,
        b: 10,
        l: 10,
        r: 10
      },
      showlegend: true,
      legend: {
        x: 2,
        y: 2,
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
    ,
    onClick: handlePersonaClick // クリックイベントを追加
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
        const time = 5;
        const targetId = clickdata || topic[0] || "default_topic"; // `clickdata`を優先
        const path = `${"/my-app"}/data/visualize_data/topic${targetId}/trend/output_${time}.json`;
        const companyPath = `${"/my-app"}/data/visualize_data/topic${targetId}/setting/company.txt`;
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
      customdata: chartData.map(item => item.summarize).reverse(),
      // summarize を customdata に渡す
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
        const time = 5;
        const targetId = topic[0]; // clickdataを優先
        const path = `${"/my-app"}/data/visualize_data/topic${targetId}/trend/output_topic_${time}.json`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9hcHAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvZ28tYW55d2hlcmUuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvb2NjdXB5LWNvbXBhbnkuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9vY2N1cHkuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9wZXJzb25hLWNvbXAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9wZXJzb25hLXRvcGljLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvc2lkZWJhci5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RyZW5kLWNvbXAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy90cmVuZC10b3BpeC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhci5qc3gnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50LmpzeCc7XG5pbXBvcnQgeyB1c2VBdXRoMCB9IGZyb20gJ0BhdXRoMC9hdXRoMC1yZWFjdCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2dpbldpdGhSZWRpcmVjdCwgbG9nb3V0LCBpc0F1dGhlbnRpY2F0ZWQsIHVzZXIgfSA9IHVzZUF1dGgwKCk7IC8vIEF1dGgw44Gu5oOF5aCx44KS5Y+W5b6XXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbG9naW5XaXRoUmVkaXJlY3Qoe1xuICAgICAgICBjb25uZWN0aW9uOiAnVXNlcm5hbWUtUGFzc3dvcmQtQXV0aGVudGljYXRpb24nLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODreOCsOOCpOODs+OCqOODqeODvDpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFycm93Q29sb3IgPSBbXG4gICAgJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRicsXG4gICAgJyMzRTlFNkYnLCAnI0YzODE4MScsICcjNTQ1RTc1JywgJyNGRkI2MjcnLCAnIzU3NzU5MCcsXG4gIF07XG4gIGNvbnN0IGNvbXBhbnlMaXN0ID0gW1xuICAgICfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+5aSn5p6X57WEJywgJ+a4heawtOW7uuioreagquW8j+S8muekvicsICflpKfmiJDlu7roqK3moKrlvI/kvJrnpL4nLFxuICAgICfmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupcnLCAn5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzJywgJ+WJjeeUsOW7uuioreW3pealreagquW8j+S8muekvicsXG4gICAgJ+S6lOa0i+W7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7jg5Xjgrjjgr8nLCAn5oi455Sw5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvueGiuiwt+e1hCcsXG4gIF07XG4gIGNvbnN0IHRvcGljTGlzdCA9IFsnMCcsICcxJywgJzInLCAnMycsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTEnXTtcblxuICBjb25zdCBbdmlzdWFsVHlwZSwgc2V0VmlzdWFsVHlwZV0gPSB1c2VTdGF0ZSgnb25lLXRvcGljJyk7XG4gIGNvbnN0IFtpc0FwcGxpZWQsIHNldElzQXBwbGllZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29tcGFuaWVzLCBzZXRTZWxlY3RlZENvbXBhbmllc10gPSB1c2VTdGF0ZShbJ+agquW8j+S8muekvueGiuiwt+e1hCddKTtcbiAgY29uc3QgW3NlbGVjdGVkVG9waWNzLCBzZXRTZWxlY3RlZFRvcGljc10gPSB1c2VTdGF0ZShbJzAnXSk7XG5cbiAgY29uc3QgaGFuZGxlVmlzdWFsVHlwZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldFZpc3VhbFR5cGUodmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwcGx5ID0gKCkgPT4ge1xuICAgIHNldElzQXBwbGllZCgxKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTZWxlY3Rpb24gPSAoaXRlbSwgc2V0U2VsZWN0ZWQsIGJ1dHRvbXR5cGUpID0+IHtcbiAgICBpZiAoYnV0dG9tdHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgc2V0U2VsZWN0ZWQoKHByZXZTZWxlY3RlZCkgPT5cbiAgICAgICAgcHJldlNlbGVjdGVkLmluY2x1ZGVzKGl0ZW0pXG4gICAgICAgICAgPyBwcmV2U2VsZWN0ZWQuZmlsdGVyKChpKSA9PiBpICE9PSBpdGVtKVxuICAgICAgICAgIDogWy4uLnByZXZTZWxlY3RlZCwgaXRlbV1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkKFtpdGVtXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IENvbXBhbnlDaGVja2JveENoYW5nZSA9IChjb21wYW55LCBidXR0b210eXBlKSA9PiB7XG4gICAgdG9nZ2xlU2VsZWN0aW9uKGNvbXBhbnksIHNldFNlbGVjdGVkQ29tcGFuaWVzLCBidXR0b210eXBlKTtcbiAgfTtcblxuICBjb25zdCBUb3BpY0NoZWNrYm94Q2hhbmdlID0gKHRvcGljLCBidXR0b210eXBlKSA9PiB7XG4gICAgdG9nZ2xlU2VsZWN0aW9uKHRvcGljLCBzZXRTZWxlY3RlZFRvcGljcywgYnV0dG9tdHlwZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZWxlY3RlZENvbXBhbmllcyhbJ+agquW8j+S8muekvueGiuiwt+e1hCddKTtcbiAgICBzZXRTZWxlY3RlZFRvcGljcyhbJzAnXSk7XG4gIH0sIFt2aXN1YWxUeXBlXSk7XG5cbiAgY29uc3QgcmVzZXRJc0FwcGxpZWQgPSAoKSA9PiB7XG4gICAgc2V0SXNBcHBsaWVkKDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpZD1cInJlYWN0LWNvbnRlbnRcIiBmbHVpZCBjbGFzc05hbWU9XCJiZy1saWdodFwiPlxuICAgICAgPFJvdz5cbiAgICAgICAgeyFpc0F1dGhlbnRpY2F0ZWQgPyAoIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOBquOBhOWgtOWQiFxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDE+44Ot44Kw44Kk44Oz44GM5b+F6KaB44Gn44GZPC9oMT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+XG4gICAgICAgICAgICAgICAg44Ot44Kw44Kk44OzXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICkgOiAoIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+WgtOWQiFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7Lyog44K144Kk44OJ44OQ44O8ICovfVxuICAgICAgICAgICAgPENvbCBtZD17M30gY2xhc3NOYW1lPVwiYm9yZGVyLWVuZFwiPlxuICAgICAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgICAgIG9uQXBwbHk9e2hhbmRsZUFwcGx5fVxuICAgICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgICAgb25WaXN1YWxUeXBlQ2hhbmdlPXtoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHRvcGljTGlzdD17dG9waWNMaXN0fVxuICAgICAgICAgICAgICAgIGNvbXBhbnlMaXN0PXtjb21wYW55TGlzdH1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbXBhbmllcz17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb3BpY3M9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlVG9waWM9e1RvcGljQ2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wYW55PXtDb21wYW55Q2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgey8qIOODoeOCpOODs+OCs+ODs+ODhuODs+ODhCAqL31cbiAgICAgICAgICAgIDxDb2wgbWQ9ezl9IGNsYXNzTmFtZT1cImJvcmRlci1lbmRcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgICAgcGxvdD17aXNBcHBsaWVkfVxuICAgICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgICAgdG9waWM9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgICAgIGNvbXBhbnk9e3NlbGVjdGVkQ29tcGFuaWVzfVxuICAgICAgICAgICAgICAgIHJlc2V0QXBwbHk9e3Jlc2V0SXNBcHBsaWVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfWZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFBsb3RQaWVBIGZyb20gJy4vb2NjdXB5LmpzeCc7XG5pbXBvcnQgUGxvdFBpZUIgZnJvbSAnLi9vY2N1cHktY29tcGFueS5qc3gnO1xuaW1wb3J0IFBsb3RQZXJzb25hQ29tcCBmcm9tICcuL3BlcnNvbmEtY29tcC5qc3gnO1xuaW1wb3J0IFBsb3RQZXJzb25hVG9waWMgZnJvbSAnLi9wZXJzb25hLXRvcGljLmpzeCc7XG5cbmltcG9ydCBQbG90QmFyQ2hhcnRBIGZyb20gJy4vdHJlbmQtdG9waXguanN4JztcbmltcG9ydCBQbG90QmFyQ2hhcnRCIGZyb20gJy4vdHJlbmQtY29tcC5qc3gnO1xuaW1wb3J0IFByb3Bvc2VkRGF0YSwgeyBnZXRDYXJkRGF0YSB9IGZyb20gXCIuL2dvLWFueXdoZXJlLmpzeFwiOyAvLyDmraPjgZfjgYTjg5HjgrnjgpLmjIflrppcbmltcG9ydCBQcm9wb3NlZFZpc3VhbGl6ZSBmcm9tICcuL2dvLWFueXdoZXJlLmpzeCc7XG5cblxuXG5cblxuY29uc3QgQ29udGVudCA9ICh7cGxvdCx2aXN1YWxUeXBlLHRvcGljLGNvbXBhbnkscmVzZXRBcHBseX0pID0+IHtcblxuXG5cbiAgICBjb25zdCBbY2xpY2tEYXRhLCBzZXRDbGlja0RhdGFdID0gdXNlU3RhdGUoKTsgLy8g44Kv44Oq44OD44Kv44OH44O844K/44Gu54q25oWLXG4gICAgY29uc3QgW2NsaWNrQ29tcGFueURhdGEsIHNldENsaWNrQ29tcGFueURhdGFdID0gdXNlU3RhdGUoKTsgLy8g44Kv44Oq44OD44Kv44OH44O844K/44Gu54q25oWLXG5cbiAgICBjb25zdCBoYW5kbGVQaWVDaGFydENsaWNrID0gKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwi44Kv44Oq44OD44Kv44GV44KM44Gf44OH44O844K/OlwiLCBkYXRhKTsgLy8g44OH44OQ44OD44Kw55SoXG4gICAgICBzZXRDbGlja0RhdGEoZGF0YSk7IC8vIOeKtuaFi+OCkuabtOaWsFxuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUGVyc29uYUNsaWNrID0gKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwi44Kv44Oq44OD44Kv44GV44KM44Gf44OH44O844K/OlwiLCBkYXRhKTsgLy8g44OH44OQ44OD44Kw55SoXG4gICAgICBzZXRDbGlja0NvbXBhbnlEYXRhKGRhdGEpOyAvLyDnirbmhYvjgpLmm7TmlrBcbiAgICB9O1xuXG4gICAgY29uc3QgW2NhcmREYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICBcbiAgICBcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgey8qIEZpcnN0IFJvdyAqL31cbiAgICAgIDxSb3cgc3R5bGU9e3sgaGVpZ2h0OiAnNTB2aCcgfX0+XG4gICAgICAgIHsvKiBQZXJzb25hIEdyYXBoICovfVxuICAgICAgICA8Q29sIG1kPXsxfT48L0NvbD5cbiAgICAgICAgPENvbCBtZD17MTB9ID5cblxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYVRvcGljXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBvbkNsaWNrRGF0YT17aGFuZGxlUGVyc29uYUNsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jga7jg4/jg7Pjg4njg6njg7zjgpLmuKHjgZlcbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44Oa44Or44K944OK44Gu5Y+v6KaW5YyWXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHZoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwdmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiID8gKFxuICAgICAgICAgICAgPFBsb3RQZXJzb25hQ29tcFxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44Oa44Or44K944OK44Gu5Y+v6KaW5YyWXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MnZoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICA8L0NvbD5cblxuICAgICAgICB7LyogUmlnaHQgQ29sdW1uIHdpdGggQ2FyZHMgKi99XG4gICAgICAgIDxDb2wgbWQ9ezF9PlxuXG4gICAgPC9Db2w+XG4gIDwvUm93PlxuXG4gICAgICB7LyogU2Vjb25kIFJvdyAqL31cbiAgICAgIDxSb3cgc3R5bGU9e3sgaGVpZ2h0OiAnNTB2aCcgfX0+XG4gICAgICAgIDxDb2wgbWQ9ezZ9PlxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGllQVxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfms6jnm67kvIHmpa3jga7mpa3nlYzjgavlr77jgZnjgovljaDmnInnjocnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGllQlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgb25DbGlja0RhdGE9e2hhbmRsZVBpZUNoYXJ0Q2xpY2t9IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBruODj+ODs+ODieODqeODvOOCkua4oeOBmVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+azqOebruS8gealreOBrualreeVjOOBq+WvvuOBmeOCi+WNoOacieeOhycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgICBcbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgbWQ9ezZ9PlxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QVxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cblxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgZGF0YT17W119IC8vIOODh+ODvOOCv+OCkui/veWKoOOBl+OBpuOBj+OBoOOBleOBhFxuICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgIHRpdGxlOiAnRuOCv+ODvOODoOOBruWIhuW4gycsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KTooXG4gICAgICAgICAgPFBsb3RCYXJDaGFydEJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIGNsaWNrZGF0YT17Y2xpY2tEYXRhfSAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jgpLmuKHjgZlcbiAgICBcblxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgZGF0YT17W119IC8vIOODh+ODvOOCv+OCkui/veWKoOOBl+OBpuOBj+OBoOOBleOBhFxuICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgIHRpdGxlOiAnRuOCv+ODvOODoOOBruWIhuW4gycsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KX1cbiAgICAgICAgICBcbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiaC0xMDBcIj5cblxuICAgICAgPENvbD5cbiAgICAgIHtcbiAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgPFByb3Bvc2VkVmlzdWFsaXplXG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY2xpY2tEYXRhPXtjbGlja0NvbXBhbnlEYXRhfVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfku7vmhI/jga7kvY3nva7jgbjnp7vli5XjgZnjgovjgZ/jgoHjga7mj5DmoYgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPik6KFxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgKSB9XG4gIFxuICAgICAgICA8L0NvbD5cbiAgICAgICAgICBcbiAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG5cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLFJvdyxDb2wsQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBQcm9wb3NlZFZpc3VhbGl6ZSA9ICh7IHRvcGljLCBjbGlja0RhdGEgfSkgPT4ge1xuICBjb25zdCBbcHJvcG9zZWREYXRhLCBzZXRQcm9wb3NlZERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RvcGljfS9wcm9wb3NlZC9wcm9wb3NlZC5qc29uYDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIuODh+ODvOOCv+OBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIC8vIGBjbGlja0RhdGFg44Gr5a++5b+c44GZ44KL5Lya56S+44Gu44OH44O844K/44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IGNvbXBhbnlEYXRhID0ganNvbkRhdGFbY2xpY2tEYXRhXTtcblxuICAgICAgICBpZiAoIWNvbXBhbnlEYXRhKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwi5oyH5a6a44GX44Gf44OH44O844K/44GM5a2Y5Zyo44GX44G+44Gb44KTOiBcIiArIGNsaWNrRGF0YSk7XG4gICAgICAgICAgc2V0UHJvcG9zZWREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmjIflrprjgZXjgozjgZ/jg4jjg5Tjg4Pjgq/jga7jg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgdG9waWNEYXRhID0gY29tcGFueURhdGFbdG9waWNdO1xuICAgICAgICBpZiAoIXRvcGljRGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIuaMh+WumuOBl+OBn+ODiOODlOODg+OCr+OBjOWtmOWcqOOBl+OBvuOBm+OCkzogXCIgKyB0b3BpYyk7XG4gICAgICAgICAgc2V0UHJvcG9zZWREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRQcm9wb3NlZERhdGEodG9waWNEYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfOlwiLCBlcnIpO1xuICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbdG9waWMsIGNsaWNrRGF0YV0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PuOCqOODqeODvDoge2Vycm9yfTwvZGl2PjtcbiAgfVxuXG4gIGlmICghcHJvcG9zZWREYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+44OH44O844K/44KS6Kqt44G/6L6844G/5LitLi4uPC9kaXY+O1xuICB9XG5cbiAgXG4gIC8vIOODh+ODvOOCv+OCkuOCq+ODvOODieW9ouW8j+OBp+ihqOekulxuY29uc3QgcmVuZGVyQ2FyZCA9IChkaXJlY3Rpb24sIHZhbHVlcykgPT4ge1xuICBsZXQgbGFiZWw7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBcInVwbGVmdFwiOlxuICAgICAgbGFiZWwgPSBcIuW3puS4ilwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInVwcmlnaHRcIjpcbiAgICAgIGxhYmVsID0gXCLlj7PkuIpcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkb3dubGVmdFwiOlxuICAgICAgbGFiZWwgPSBcIuW3puS4i1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRvd25yaWdodFwiOlxuICAgICAgbGFiZWwgPSBcIuWPs+S4i1wiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGxhYmVsID0gXCLjgZ3jga7ku5ZcIjtcbiAgfVxuXG4gIC8vIOOCq+ODvOODieWFqOS9k+OBruiDjOaZr+iJsuOCkuioreWumu+8iOaWueWQkeOBq+WfuuOBpeOBj+ODmeODvOOCueOCq+ODqeODvO+8iVxuICBjb25zdCBiYXNlQ29sb3JNYXAgPSB7XG4gICAgdXByaWdodDogXCJyZ2JhKDI1NSwgMTg4LCAxODgsIEFMUEhBKVwiLCAgIC8vIOi1pFxuICAgIHVwbGVmdDogXCJyZ2JhKDI1NSwgMjU1LCAxODgsIEFMUEhBKVwiLCAvLyDpu4RcbiAgICBkb3ducmlnaHQ6IFwicmdiYSgxODgsIDIyMSwgMjU1LCBBTFBIQSlcIiwgLy8g6Z2SXG4gICAgZG93bmxlZnQ6IFwicmdiYSgxODgsIDI1NSwgMTg4LCBBTFBIQSlcIiAvLyDnt5FcbiAgfTtcblxuICBjb25zdCBiYXNlQ29sb3IgPSBiYXNlQ29sb3JNYXBbZGlyZWN0aW9uXTtcbiAgY29uc3QgY2FyZEFscGhhID0gMC4zOyAvLyDlhoXpg6jjga7opoHntKDmlbDjgafpgI/mmI7luqbjgpLlpInljJZcbiAgY29uc3QgY2FyZEJhY2tncm91bmRDb2xvciA9IGJhc2VDb2xvci5yZXBsYWNlKFwiQUxQSEFcIiwgTWF0aC5taW4oY2FyZEFscGhhLCAxKSk7IC8vIOiDjOaZr+iJsuOCkuWLleeahOOBq+ioreWumlxuXG4gIHJldHVybiAoXG5cbiAgICA8Q2FyZCBrZXk9e2RpcmVjdGlvbn0gY2xhc3NOYW1lPVwibS0zXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjYXJkQmFja2dyb3VuZENvbG9yIH19PlxuICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCI+XG4gICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIj57bGFiZWx9PC9DYXJkLlRpdGxlPlxuICAgICAgICB7dmFsdWVzLnNsaWNlKDAsIDUpLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgLy8g6aCG5L2N44Gr5Z+644Gl44GE44Gm6YCP5piO5bqm44KS6Kq/5pW0XG4gICAgICAgICAgY29uc3QgYWxwaGEgPSAwLjkwIC0gaW5kZXggKiAwLjE1OyAvLyDpoIbkvY3jgZTjgajjgavpgI/mmI7luqbjgpLlvpDjgIXjgavmuJvlsJFcbiAgICAgICAgICBjb25zdCBpdGVtQmFja2dyb3VuZENvbG9yID0gYmFzZUNvbG9yLnJlcGxhY2UoXCJBTFBIQVwiLCBNYXRoLm1heChhbHBoYSwgMC4xKSk7IC8vIOWQhOOCouOCpOODhuODoOOBruiDjOaZr+iJslxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFua2luZy1pdGVtIHB5LTIgcHgtMyBib3JkZXItYm90dG9tXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBpdGVtQmFja2dyb3VuZENvbG9yIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e2luZGV4ICsgMX3kvY3vvJo8L3N0cm9uZz4ge3ZhbHVlIHx8IFwiXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgIDwvQ2FyZD5cblxuICApO1xufTtcbiAgcmV0dXJuIChcbjxDb250YWluZXI+XG4gIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTNcIj5cbiAgICB7LyogQ2FyZOODmOODg+ODgOODvOOBp+S4reWkruS4iumDqOOBq2NsaWNrRGF0YeOCkuihqOekuiAqL31cbiAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzMzMzMzNcIiwgY29sb3I6IFwid2hpdGVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTBcIj57Y2xpY2tEYXRhIHx8IFwiIFwifTwvaDU+XG4gICAgPC9DYXJkLkhlYWRlcj5cblxuXG4gICAgPENhcmQuQm9keT5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2w+e3JlbmRlckNhcmQoXCJ1cGxlZnRcIiwgcHJvcG9zZWREYXRhLnVwbGVmdCB8fCBbXSl9PC9Db2w+XG4gICAgICAgIDxDb2w+e3JlbmRlckNhcmQoXCJ1cHJpZ2h0XCIsIHByb3Bvc2VkRGF0YS51cHJpZ2h0IHx8IFtdKX08L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbD57cmVuZGVyQ2FyZChcImRvd25sZWZ0XCIsIHByb3Bvc2VkRGF0YS5kb3dubGVmdCB8fCBbXSl9PC9Db2w+XG4gICAgICAgIDxDb2w+e3JlbmRlckNhcmQoXCJkb3ducmlnaHRcIiwgcHJvcG9zZWREYXRhLmRvd25yaWdodCB8fCBbXSl9PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NhcmQuQm9keT5cbiAgPC9DYXJkPlxuPC9Db250YWluZXI+XG5cblxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb3Bvc2VkVmlzdWFsaXplOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2FwcC5qc3hcIjtcbmltcG9ydCB7IEF1dGgwUHJvdmlkZXIgfSBmcm9tIFwiQGF1dGgwL2F1dGgwLXJlYWN0XCI7XG5cbi8vIEF1dGgw44Gu6Kit5a6aXG5jb25zdCBkb21haW4gPSBcImRldi1sM2JnZWduamp4d3gyb2Q0LnVzLmF1dGgwLmNvbVwiOyAvLyBBdXRoMOOBruODieODoeOCpOODs1xuXG5jb25zdCBjbGllbnRJZCA9IFwiaXZ0Z3gxYXJONUowOVp3OHlQQ2lFa3BRMURaM1AyMmVcIjsgLy8gQXV0aDDjga7jgq/jg6njgqTjgqLjg7Pjg4hJRFxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBdXRoMFByb3ZpZGVyXG4gICAgICBkb21haW49e2RvbWFpbn1cbiAgICAgIGNsaWVudElkPXtjbGllbnRJZH1cbiAgICAgIGF1dGhvcml6YXRpb25QYXJhbXM9e3tcbiAgICAgICAgcmVkaXJlY3RfdXJpOiBcImh0dHBzOi8vaGlyb2Vtb24tbS5naXRodWIuaW8vbXktYXBwL1wiLCAvLyDoqo3oqLzlvozjgavjg6rjg4DjgqTjg6zjgq/jg4jjgZnjgotVUkxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEFwcCAvPlxuICAgIDwvQXV0aDBQcm92aWRlcj5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuXG5cbmNvbnN0IGNvbG9ybWFwID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6J3JnYigyMjksIDEzNCwgNiknLCBcIuWcsOebpOaUueiJr1wiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi44OI44Oz44ON44Or5o6Y5YmKXCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgXCLlhY3pnIfmp4vpgKBcIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIueuoeeQhuOCt+OCueODhuODoFwiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5buD5qOE54mp5Yem55CGXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gIFwi5bu656+J44OR44ON44OrXCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuepuuiqv+OCt+OCueODhuODoFwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5o6Y5YmK6KOF572uXCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG59O1xuXG5cbi8vIGZldGNoRGF0YemWouaVsO+8mkpTT07jgb7jgZ/jga/jg4bjgq3jgrnjg4jlvaLlvI/jgavlr77lv5xcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuXG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBKU09O5b2i5byP44Gu5aC05ZCIXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7IC8vIOODl+ODrOODvOODs+ODhuOCreOCueODiOOBruWgtOWQiFxuICAgICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IFwiXCIpOyAvLyDmlLnooYzljLrliIfjgorjga7jg4fjg7zjgr/jgpLphY3liJfjgajjgZfjgabov5TjgZlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44K544OR44O844K544OH44O844K/44KS5a+G6KGM5YiX44Gr5aSJ5o+b44GX44CB6KGM5pa55ZCR44Gu5ZKM44KS6KiI566XXG5jb25zdCBwcm9jZXNzU3BhcnNlRGF0YSA9IChzcGFyc2VEYXRhKSA9PiB7XG4gICAgXG4gIGNvbnN0IG51bVJvd3MgPSBNYXRoLm1heCguLi5zcGFyc2VEYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5yb3cpKSArIDE7XG4gIGNvbnN0IG51bUNvbHMgPSBNYXRoLm1heCguLi5zcGFyc2VEYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5jb2wpKSArIDE7XG5cbiAgY29uc3QgbWF0cml4ID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogbnVtUm93cyB9LCAoKSA9PiBBcnJheShudW1Db2xzKS5maWxsKDApKTtcbiAgc3BhcnNlRGF0YS5mb3JFYWNoKCh7IHJvdywgY29sLCB2YWx1ZSB9KSA9PiB7XG4gICAgbWF0cml4W3Jvd11bY29sXSA9IHZhbHVlO1xuICB9KTtcblxuICByZXR1cm4gbWF0cml4Lm1hcChyb3cgPT4gcm93LnJlZHVjZSgoc3VtLCB2YWx1ZSkgPT4gc3VtICsgdmFsdWUsIDApKTsgLy8g6KGM5pa55ZCR44Gu5ZKM44KS6L+U44GZXG59O1xuXG5jb25zdCBQbG90UGllQiA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIG9uUmVuZGVyZWQsIG9uQ2xpY2tEYXRhIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIuazqOebruODiOODlOODg+OCr+OBq+mWouOBmeOCi+eJueioseOBruS8gealreWNoOacieeOh1wiKTtcbiAgY29uc3QgYWxsVG9waWMgPSBbMiwgMywgMSwgMCwgOSwgNiwgOCwgNywgMTFdO1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG5cbiAgICBjb25zdCBUb3BpY3RvSWQgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjpcIjJcIixcIuWcsOebpOaUueiJr1wiOlwiM1wiLFwi44OI44Oz44ON44Or5o6Y5YmKXCI6XCIxXCIsXG4gICAgICAgIFwi5YWN6ZyH5qeL6YCgXCI6XCIwXCIsXCLnrqHnkIbjgrfjgrnjg4bjg6BcIjpcIjlcIixcIuW7g+ajhOeJqeWHpueQhlwiOlwiNlwiLFwi5bu656+J44OR44ON44OrXCI6XCI4XCIsXG4gICAgICAgXCLnqbroqr/jgrfjgrnjg4bjg6BcIjpcIjdcIixcIuaOmOWJiuijhee9rlwiOlwiMTFcIixcIuW7uuevieioreioiFwiOlwiMTBcIixcIuODiOODs+ODjeODq+a4rOmHj1wiOlwiNVwifTtcbiAgLy8g44Kt44Oj44OD44K344Ol55So44Gu44Kq44OW44K444Kn44Kv44OIXG4gIGNvbnN0IGRhdGFDYWNoZSA9IHVzZVJlZih7XG4gICAgY29tcGFuaWVzOiB7fSxcbiAgICBzcGFyc2VEYXRhOiB7fVxuICB9KTtcblxuICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWxsVG9waWNzRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBhbGxUb3BpYy5tYXAoYXN5bmMgKHRhcmdldF9pZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRpbWUgPSA1O1xuICAgICAgICAgIGNvbnN0IGNvbXBhbnlVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRfaWR9L3NldHRpbmcvY29tcGFueS50eHRgO1xuICAgICAgICAgIGNvbnN0IHNwYXJzZURhdGFVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRfaWR9L29jY3VweS9vY2N1cHlfdG9waWNfJHt0aW1lfS5qc29uYDtcblxuICAgICAgICAgIC8vIOOCreODo+ODg+OCt+ODpeOCkueiuuiqjVxuICAgICAgICAgIGlmICghZGF0YUNhY2hlLmN1cnJlbnQuY29tcGFuaWVzW3RhcmdldF9pZF0pIHtcbiAgICAgICAgICAgIGRhdGFDYWNoZS5jdXJyZW50LmNvbXBhbmllc1t0YXJnZXRfaWRdID0gYXdhaXQgZmV0Y2hEYXRhKGNvbXBhbnlVcmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZGF0YUNhY2hlLmN1cnJlbnQuc3BhcnNlRGF0YVt0YXJnZXRfaWRdKSB7XG4gICAgICAgICAgICBkYXRhQ2FjaGUuY3VycmVudC5zcGFyc2VEYXRhW3RhcmdldF9pZF0gPSBhd2FpdCBmZXRjaERhdGEoc3BhcnNlRGF0YVVybCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY29tcGFuaWVzID0gZGF0YUNhY2hlLmN1cnJlbnQuY29tcGFuaWVzW3RhcmdldF9pZF07XG4gICAgICAgICAgY29uc3Qgc3BhcnNlRGF0YSA9IGRhdGFDYWNoZS5jdXJyZW50LnNwYXJzZURhdGFbdGFyZ2V0X2lkXTtcblxuICAgICAgICAgIC8vIOato+imj+WMlumWouaVsFxuICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZVN0cmluZyA9IChzdHIpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RyICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIumdnuaWh+Wtl+WIl+ODh+ODvOOCv+OBjOaknOWHuuOBleOCjOOBvuOBl+OBnzpcIiwgc3RyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIOmdnuaWh+Wtl+WIl+ODh+ODvOOCv+OBr+eEoeimllxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0ci5ub3JtYWxpemUoXCJORkNcIikudHJpbSgpOyAvLyDmraPopo/ljJbjgajjg4jjg6rjg6DjgpLpgannlKhcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8g5q2j6KaP5YyW44GX44Gf44OH44O844K/44Gn5q+U6LyDXG4gICAgICAgICAgY29uc3Qgc2FuaXRpemVkQ29tcGFuaWVzID0gY29tcGFuaWVzLm1hcChub3JtYWxpemVTdHJpbmcpO1xuICAgICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbnkgPSBub3JtYWxpemVTdHJpbmcoY29tcGFueVswXSk7XG5cbiAgICAgICAgICBpZiAoIXNhbml0aXplZENvbXBhbmllcy5pbmNsdWRlcyhzYW5pdGl6ZWRDb21wYW55KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDb21wYW55IFwiJHtzYW5pdGl6ZWRDb21wYW55fVwiIG5vdCBmb3VuZCBpbiB0b3BpYyAke3RhcmdldF9pZH1gKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOOCueODkeODvOOCueODh+ODvOOCv+OCkuWHpueQhlxuICAgICAgICAgIGNvbnN0IHJvd1N1bXMgPSBwcm9jZXNzU3BhcnNlRGF0YShzcGFyc2VEYXRhKTtcblxuICAgICAgICAgIGNvbnN0IGNvbXBhbnlJbmRleCA9IHNhbml0aXplZENvbXBhbmllcy5pbmRleE9mKHNhbml0aXplZENvbXBhbnkpO1xuXG4gICAgICAgICAgcmV0dXJuIHsgdG9waWM6IHRhcmdldF9pZCwgdmFsdWU6IHJvd1N1bXNbY29tcGFueUluZGV4XSB9O1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gYWxsVG9waWNzRGF0YS5maWx0ZXIoKGRhdGEpID0+IGRhdGEgIT09IG51bGwpO1xuXG4gICAgICAvLyDmraPopo/ljJbjgajjgr3jg7zjg4hcbiAgICAgIGNvbnN0IHRvdGFsVmFsdWUgPSBmaWx0ZXJlZERhdGEucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0udmFsdWUsIDApO1xuICAgICAgaWYgKHRvdGFsVmFsdWUgPT09IDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiTm8gdmFsaWQgZGF0YSB0byBub3JtYWxpemUuXCIpO1xuICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cblxuXG4gICAgICBjb25zdCBub3JtYWxpemVkRGF0YSA9IGZpbHRlcmVkRGF0YS5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBjYXRlZ29yeTogaXRlbS50b3BpYyxcbiAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUgLyB0b3RhbFZhbHVlLFxuICAgICAgfSkpLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKTtcblxuICAgICAgc2V0Q2hhcnREYXRhKG5vcm1hbGl6ZWREYXRhLnNsaWNlKDAsIDEwKSk7IC8vIOS4iuS9jTEw5Lu244Gu44G/6KGo56S6XG4gICAgICBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIOWIneacn+ODh+ODvOOCv+iqreOBv+i+vOOBv+OBqHVwZGF0ZeOBruWkieabtOaZguOBq+ODh+ODvOOCv+OCkuODreODvOODiVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIpIHtcbiAgICAgIGxvYWREYXRhKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCB2aXN1YWxUeXBlXSk7XG5cbiAgY29uc3QgaGFuZGxlUGxvdENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnBvaW50cyAmJiBldmVudC5wb2ludHNbMF0pIHtcbiAgICAgIGNvbnN0IGNsaWNrZGF0YSA9IGV2ZW50LnBvaW50c1swXS5sYWJlbDsgLy8g44Kv44Oq44OD44Kv44GV44KM44Gf6YOo5YiG44Gu44Op44OZ44OrXG4gICAgICBjb25zdCBsYWJlbCA9IFRvcGljdG9JZFtjbGlja2RhdGFdXG4gICAgICBjb25zdCB0b3BpY2lkID0gbGFiZWwucmVwbGFjZShcIlRvcGljIFwiLCBcIlwiKTtcbiAgICAgIG9uQ2xpY2tEYXRhKFt0b3BpY2lkXSk7IC8vIOimquOCs+ODs+ODneODvOODjeODs+ODiOOBq+ODqeODmeODq+OCkumAmuefpVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IGNoYXJ0RGF0YS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLm1hcChpdGVtID0+ICBJZHRvVG9waWNbU3RyaW5nKGl0ZW0uY2F0ZWdvcnkpXSksXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiY2xvY2t3aXNlXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgY29sb3JzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBjb2xvcm1hcFtJZHRvVG9waWNbU3RyaW5nKGl0ZW0uY2F0ZWdvcnkpXV0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDcwLCBiOiA1LCBsOiA0MCwgcjogNTAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQbG90Q2xpY2t9IC8vIOOCr+ODquODg+OCr+OCpOODmeODs+ODiOOCkui/veWKoFxuICAgICAgLz5cbiAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGllQjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjg4bjgq3jgrnjg4jjg4fjg7zjgr/jgpLoqq3jgb/ovrzjgoDplqLmlbBcbmNvbnN0IGZldGNoVGV4dERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQaWVBID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG5cbiAgY29uc3QgY29sb3JtYXAgPSB7J+m5v+WztuW7uuioreagquW8j+S8muekvic6J3JnYigyMjksIDEzNCwgNiknLCBcIuagquW8j+S8muekvuWkp+ael+e1hFwiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi5riF5rC05bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgICAgIFwi5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupdcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuagquW8j+S8muekvumVt+iwt+W3peOCs+ODvOODneODrOODvOOCt+ODp+ODs1wiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICAgICAgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgICAgIFwi5oi455Sw5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigyMzcsIDEwMCwgOTApJywgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIjoncmdiKDE2NSwgMTcwLCAxNTMpJ307XG4gICAgIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSA1O1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRvcGljIHx8IFwiZGVmYXVsdF90b3BpY1wiOyAvLyDliJ3mnJ/lgKTjgajjgZfjgaZcImRlZmF1bHRfdG9waWNcIuOCkuioreWumlxuICAgICAgICBjb25zdCBkYXRhVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L29jY3VweS9vY2N1cHlfbWVhbl8ke3RpbWV9Lmpzb25gO1xuICAgICAgICBjb25zdCBjb2x1bW5VcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRJZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG5cbiAgICAgICAgLy8g44OH44O844K/5Y+W5b6XXG4gICAgICAgIGNvbnN0IFt2YWx1ZXMsIGxhYmVsc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKGRhdGFVcmwpLFxuICAgICAgICAgIGZldGNoVGV4dERhdGEoY29sdW1uVXJsKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy8g5YCk44Go44Op44OZ44Or44Gu57WE44G/5ZCI44KP44Gb44KS5L2c5oiQXG4gICAgICAgIGNvbnN0IGRhdGEgPSBsYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlcy52YWx1ZVtpbmRleF0gfHwgMCwgLy8g5YCk44GM44Gq44GE5aC05ZCI44GvMFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8g5YCk44Gr5Z+644Gl44GE44Gm6ZmN6aCG44Gr44K944O844OI44GX44Gm5LiK5L2NMTDku7bjgpLmir3lh7pcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGRhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke0lkdG9Ub3BpY1t0YXJnZXRJZF1944Gr6Zai44GZ44KL54m56Kix44Gu5LyB5qWt5Y2g5pyJ546HYCk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODgeODo+ODvOODiOODh+ODvOOCv+OBruWHpueQhuS4reOBq+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDliJ3lm57jg6zjg7Pjg4Djg6rjg7PjgrDmmYLjgahgdXBkYXRlYOWkieabtOaZguOBq+ODh+ODvOOCv+OCkuODreODvOODiVxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgb25SZW5kZXJlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHZhbHVlczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgIGNvbG9yczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gY29sb3JtYXBbaXRlbS5sYWJlbF0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDcwLCBiOiA1LCBsOiA0MCwgcjogNTAgfSxcbiAgICAgICAgfX1cbiAgXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGllQTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5cbiBcbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgbG9hZENvbXBhbmllcyA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgdG9MaXN0ID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuXG4gICAgY29uc3QgYWxwaGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgY29uc3QgYmV0YV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMV0pKTtcblxuICAgIHJldHVybiB7IGFscGhhX2xpLCBiZXRhX2xpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGFscGhhX2xpOiBbXSwgYmV0YV9saTogW10gfTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBlcnNvbkNvbXAgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBvblJlbmRlcmVkIH0pID0+IHtcbmNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICAgICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICAgICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIn07XG5cbmNvbnN0IGNvbG9ybWFwID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6J3JnYigyMjksIDEzNCwgNiknLCBcIuWcsOebpOaUueiJr1wiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi44OI44Oz44ON44Or5o6Y5YmKXCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgICAgICAgICBcIuWFjemch+ani+mAoFwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi566h55CG44K344K544OG44OgXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLlu4Pmo4Tnianlh6bnkIZcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgICAgICAgICBcIuW7uuevieODkeODjeODq1wiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLnqbroqr/jgrfjgrnjg4bjg6BcIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuaOmOWJiuijhee9rlwiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICAgICAgICB9O1xuICAgICAgICBcbiAgY29uc3QgYXJyb3dfY29sb3IgPSBbJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRiddO1xuXG4gIGNvbnN0IFtwcmVwYXJlZERhdGEsIHNldFByZXBhcmVkRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZpZ0RhdGEsIHNldEZpZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYW5ub3RhdGlvbnMsIHNldEFubm90YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIuS8gealreOBrueri+OBoeS9jee9rlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByZXBhcmVEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsUHJvbWlzZXMgPSAodG9waWMgfHwgW1wiZGVmYXVsdF90b3BpY1wiXSkubWFwKGFzeW5jICh0YXJnZXRfaWQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9waWNcIix0YXJnZXRfaWQpXG4gICAgICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG4gICAgICAgICAgY29uc3QgY29tcGFuaWVzID0gYXdhaXQgbG9hZENvbXBhbmllcyhjb2x1bW5QYXRoKTtcblxuICAgICAgICAgIGNvbnN0IGNvbXBhbnlEaWN0ID0gY29tcGFuaWVzLnJlZHVjZSgoYWNjLCB2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRTZWFyY2hMaXN0ID0gbmV3U2VhcmNoTGlzdC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgaW4gY29tcGFueURpY3QpO1xuXG4gICAgICAgICAgY29uc3Qgbm9kZV9hbHBoYSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbHRlcmVkU2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG4gICAgICAgICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsdGVyZWRTZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcblxuICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaikgPT4gaiApLm1hcChhc3luYyAocCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vcGVyc29uYS90ZXN0X29wdGltaXplXyR7cCsxfS50eHRgO1xuICAgICAgICAgICAgY29uc3QgeyBhbHBoYV9saSwgYmV0YV9saSB9ID0gYXdhaXQgdG9MaXN0KHBhcmFtZXRlclBhdGgpO1xuXG4gICAgICAgICAgICBmaWx0ZXJlZFNlYXJjaExpc3QuZm9yRWFjaCgoaywgaikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW5pZXMuaW5kZXhPZihrKTtcbiAgICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwXSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICAgIG5vZGVfYmV0YVtqXVtwXSA9IGJldGFfbGlbaWR4XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHsgbm9kZV9hbHBoYSwgbm9kZV9iZXRhLCBmaWx0ZXJlZFNlYXJjaExpc3QgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKGFsbFByb21pc2VzKTtcblxuICAgICAgICBjb25zdCBjb21iaW5lZEFscGhhID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQubm9kZV9hbHBoYSk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQmV0YSA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0Lm5vZGVfYmV0YSk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkU2VhcmNoTGlzdCA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0LmZpbHRlcmVkU2VhcmNoTGlzdCk7XG5cbiAgICAgICAgc2V0UHJlcGFyZWREYXRhKHsgYWxwaGE6IGNvbWJpbmVkQWxwaGEsIGJldGE6IGNvbWJpbmVkQmV0YSwgc2VhcmNoTGlzdDogY29tYmluZWRTZWFyY2hMaXN0IH0pO1xuICAgICAgICBzZXRUaXRsZShgJHtjb21wYW55feOBrualreeVjOOBp+OBrueri+OBoeS9jee9rmApOyAvLyDliJ3mnJ/jgr/jgqTjg4jjg6vjgpLoqK3lrppcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/mupblgpnkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g5Yid5pyf44Os44Oz44OA44Oq44Oz44Kw5pmC44Gr44KC44OH44O844K/44KS5rqW5YKZXG4gICAgcHJlcGFyZURhdGEoKTtcbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXBkYXRlICYmIHByZXBhcmVkRGF0YSkge1xuICAgICAgY29uc3QgcGxvdERhdGEgPSBwcmVwYXJlZERhdGEuc2VhcmNoTGlzdC5tYXAoKGssIGopID0+ICh7XG4gICAgICAgIHg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXSxcbiAgICAgICAgeTogcHJlcGFyZWREYXRhLmJldGFbal0sXG4gICAgICAgIG1vZGU6IFwibGluZXMrbWFya2Vycyt0ZXh0XCIsXG4gICAgICAgIHRleHQ6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdLFxuICAgICAgICB0ZXh0cG9zaXRpb246IFwidG9wIGxlZnRcIixcbiAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgICBjb2xvcjogY29sb3JtYXBbSWR0b1RvcGljW3RvcGljW2pdXV0sXG4gICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZTogSWR0b1RvcGljW3RvcGljW2pdXSxcbiAgICAgIH0pKTtcblxuICAgICAgY29uc3QgcGxvdEFubm90YXRpb25zID0gcHJlcGFyZWREYXRhLnNlYXJjaExpc3QuZmxhdE1hcCgoaywgaikgPT5cbiAgICAgICAgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgICAgeDogcHJlcGFyZWREYXRhLmFscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXVtpICsgMV0sXG4gICAgICAgICAgeHJlZjogJ3gnLFxuICAgICAgICAgIHlyZWY6ICd5JyxcbiAgICAgICAgICBheHJlZjogJ3gnLFxuICAgICAgICAgIGF5cmVmOiAneScsXG4gICAgICAgICAgYXg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXVtpXSxcbiAgICAgICAgICBheTogcHJlcGFyZWREYXRhLmJldGFbal1baV0sXG4gICAgICAgICAgYXJyb3djb2xvcjpjb2xvcm1hcFtJZHRvVG9waWNbdG9waWNbal1dXSxcbiAgICAgICAgICBhcnJvd3NpemU6IDEuMixcbiAgICAgICAgICBhcnJvd3dpZHRoOiAxLjIsXG4gICAgICAgICAgYXJyb3doZWFkOiA1LFxuICAgICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgICAgfSkpXG4gICAgICApO1xuXG4gICAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG5cbiAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCBwcmVwYXJlZERhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgIHN0eWxlPXt7IHdpZHRoOicxMDB2aCcgLGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgeHJlZjogJ3BhcGVyJyxcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB5OiAyLjIsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgICAgeTogMi4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuS8nee1seeahOOBquWIhumHjuOBq+WPluOCiue1hOOCk+OBp+OBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAxLjUsXG4gICAgICAgICAgICAgIHk6IDIuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgormnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgICB5OiAwLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgeTogMC4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOeLrOiHqui3r+e3muOCkumAsuOBv+acquefpeOBruWIhumHjuOBq+aKleizh+OBl+OBpuOBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG5cbiAgICAgICAgIFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi5paw6KaP5oCnXCIsXG4gICAgICAgICAgICByYW5nZTogWzAsIDIuMDNdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAsIDEsIDJdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6MjUsICAgLy8gWei7uOOBi+OCieOBrui3nembou+8iOimi+OChOOBmeOBj+OBmeOCi+OBn+OCge+8iVxuICAgICAgICAgICAgcmFuZ2U6IFswLCAyLjFdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAsIDEsIDJdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogMTAsIGI6IDEwLCBsOiAxMCwgcjogMTAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIydmhcIiwgd2lkdGg6IFwiMTAwdmhcIiwgaGVpZ2h0OiBcIjQ1dmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGVyc29uQ29tcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5jb25zdCBjb2xvcm1hcCA9IHsn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JzoncmdiKDIyOSwgMTM0LCA2KScsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWkp+aIkOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDIzNywgMTAwLCA5MCknLCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiOidyZ2IoMTY1LCAxNzAsIDE1MyknfTtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCB0b0xpc3QgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICBjb25zdCBhbHBoYV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMF0pKTtcbiAgICBjb25zdCBiZXRhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVsxXSkpO1xuXG4gICAgcmV0dXJuIHsgYWxwaGFfbGksIGJldGFfbGkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYWxwaGFfbGk6IFtdLCBiZXRhX2xpOiBbXSB9O1xuICB9XG59O1xuXG5jb25zdCBQbG90UGVyc29uVG9waWMgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBvblJlbmRlcmVkLCBvbkNsaWNrRGF0YX0pID0+IHtcbiAgY29uc3QgYXJyb3dfY29sb3IgPSBbJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRiddO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29tcGFueUxpc3QsIHNldENvbXBhbnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaExpc3QsIHNldFNlYXJjaExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIn07XG5cbiAgLy8g5Yid5pyf44OH44O844K/44Gu44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG5cbiAgICAgIGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDb21wYW55TGlzdChkYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYOalreeVjOWGheOBp+OBruS8gealreOBrueri+OBoeS9jee9rmApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWNdKTtcblxuICAvLyDmpJzntKLlr77osaHjga7jg5XjgqPjg6vjgr/jg6rjg7PjgrBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29tcGFueUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW55TGlzdC5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICBzZXRTZWFyY2hMaXN0KG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KSk7XG4gICAgfVxuICB9LCBbY29tcGFueUxpc3QsIGNvbXBhbnldKTtcblxuICAvLyDjg4fjg7zjgr/jga7mj4/nlLtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXBkYXRlICYmIHNlYXJjaExpc3QubGVuZ3RoID4gMCAmJiB0b3BpYykge1xuICAgICAgY29uc3QgdGFyZ2V0X2lkID0gdG9waWM7IC8vIOODiOODlOODg+OCr0lE44Gu6Kit5a6aXG4gICAgICBjb25zdCBub2RlX2FscGhhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG4gICAgICBjb25zdCBub2RlX2JldGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcblxuICAgICAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBpKSA9PiBpICkubWFwKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRfaWR9L3BlcnNvbmEvdGVzdF9vcHRpbWl6ZV8ke3ArMX0udHh0YDtcbiAgICAgICAgcmV0dXJuIHRvTGlzdChwYXJhbWV0ZXJQYXRoKS50aGVuKCh7IGFscGhhX2xpLCBiZXRhX2xpIH0pID0+IHtcbiAgICAgICAgICBzZWFyY2hMaXN0LmZvckVhY2goKGssIGopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbnlMaXN0LmluZGV4T2Yoayk7XG4gICAgICAgICAgICBub2RlX2FscGhhW2pdW3BdID0gYWxwaGFfbGlbaWR4XTtcbiAgICAgICAgICAgIG5vZGVfYmV0YVtqXVtwXSA9IGJldGFfbGlbaWR4XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBwbG90RGF0YSA9IHNlYXJjaExpc3QubWFwKChrLCBqKSA9PiAoe1xuICAgICAgICAgIHg6IG5vZGVfYWxwaGFbal0sXG4gICAgICAgICAgeTogbm9kZV9iZXRhW2pdLFxuICAgICAgICAgIG1vZGU6IFwibGluZXMrbWFya2Vycyt0ZXh0XCIsXG4gICAgICAgICAgdGV4dDogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0sXG4gICAgICAgICAgdGV4dHBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgY29sb3I6IGNvbG9ybWFwW2tdLFxuICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IGssXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBzZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICAgICAgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgICAgICB4OiBub2RlX2FscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgICAgIHk6IG5vZGVfYmV0YVtqXVtpICsgMV0sXG4gICAgICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgICAgICB5cmVmOiAneScsXG4gICAgICAgICAgICBheDogbm9kZV9hbHBoYVtqXVtpXSxcbiAgICAgICAgICAgIGF5OiBub2RlX2JldGFbal1baV0sXG4gICAgICAgICAgICBheHJlZjogJ3gnLFxuICAgICAgICAgICAgYXlyZWY6ICd5JyxcbiAgICAgICAgICAgIGFycm93Y29sb3I6IGNvbG9ybWFwW2tdLFxuICAgICAgICAgICAgYXJyb3dzaXplOiAxLjIsXG4gICAgICAgICAgICBhcnJvd3dpZHRoOiAxLjIsXG4gICAgICAgICAgICBhcnJvd2hlYWQ6IDUsXG4gICAgICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICAgICAgfSkpXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHNlYXJjaExpc3QsIGNvbXBhbnlMaXN0LCB0b3BpY10pO1xuXG4gIGNvbnN0IGhhbmRsZVBlcnNvbmFDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5wb2ludHMgJiYgZXZlbnQucG9pbnRzWzBdKSB7XG4gICAgXG4gICAgICBjb25zb2xlLmxvZyhldmVudC5wb2ludHNbMF1bXCJkYXRhXCJdW1wibmFtZVwiXSlcbiAgICAgIGNvbnN0IGNsaWNrZGF0YSA9IGV2ZW50LnBvaW50c1swXVtcImRhdGFcIl1bXCJuYW1lXCJdOyAvLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/pg6jliIbjga7jg6njg5njg6tcbiAgICAgIG9uQ2xpY2tEYXRhKFtjbGlja2RhdGFdKTsgLy8g6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Op44OZ44Or44KS6YCa55+lXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiAgc3R5bGU9e3sgd2lkdGg6JzEwMHZoJyAsaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17ZmlnRGF0YX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMjAsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgICAgICAgICB4cmVmOiAncGFwZXInLFxuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDIuMixcbiAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgICB5OiAyLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgeTogMi4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuacquefpeOBruWIhumHjuOBq+aKleizh+OBl+OBpuOBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICAgIHk6IDAuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/kvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMS41LFxuICAgICAgICAgICAgICB5OiAwLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcblxuICAgICAgICAgXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLmlrDopo/mgKdcIixcbiAgICAgICAgICAgIHJhbmdlOiBbMCwgMl0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMCwgMSwgMl0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi6aCG5b+c5oCnXCIsXG4gICAgICAgICAgICB0aXRsZV9zdGFuZG9mZjoyNSwgICAvLyBZ6Lu444GL44KJ44Gu6Led6Zui77yI6KaL44KE44GZ44GP44GZ44KL44Gf44KB77yJXG4gICAgICAgICAgICByYW5nZTogWzAsIDJdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAsIDEsIDJdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogMTAsIGI6IDEwLCBsOiAxMCwgcjogMTAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMixcbiAgICAgICAgICAgIHk6IDIsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIydmhcIiwgd2lkdGg6IFwiMTAwdmhcIiwgaGVpZ2h0OiBcIjQ1dmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgICAgb25DbGljaz17aGFuZGxlUGVyc29uYUNsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jgqTjg5njg7Pjg4jjgpLov73liqBcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGVyc29uVG9waWM7XG4iLCIvLyBTaWRlYmFyLmpzeFxuaW1wb3J0IFJlYWN0ICx7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiwgQ29sLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5jb25zdCBTaWRlYmFyID0gKHsgb25BcHBseSwgdmlzdWFsVHlwZSwgb25WaXN1YWxUeXBlQ2hhbmdlLCB0b3BpY0xpc3QsIGNvbXBhbnlMaXN0LCBzZWxlY3RlZENvbXBhbmllcywgc2VsZWN0ZWRUb3BpY3MsIG9uQ2hhbmdlVG9waWMsIG9uQ2hhbmdlQ29tcGFueSB9KSA9PiB7XG4gIGNvbnN0IFtpbnB1dFR5cGUsIHNldElucHV0VHlwZV0gPSB1c2VTdGF0ZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pOyAvLyDliJ3mnJ/lgKTjga8gXCJjaGVja2JveFwiXG4gIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgb25WaXN1YWxUeXBlQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlPT1cIm9uZS1jb21wXCIpe1xuICAgICAgICBzZXRJbnB1dFR5cGUoW1wiY2hlY2tib3hcIixcInJhZGlvXCJdKX1cbiAgICAgIGVsc2V7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pXG4gICAgICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coaW5wdXRUeXBlKTtcbiAgfTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuICBcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCBwYWRkaW5nOiAnMTBweCcsIGJhY2tncm91bmRDb2xvcjogJ2JnLWxpZ2h0JyB9fT5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHRleHQtZGFuZ2VyIGZvbnQtaXRhbGljXCIgc3R5bGU9e3sgaGVpZ2h0OiAnNSUnIH19PlxuICAgICAgICA8Q29sIHNtPXs2fT5cbiAgICAgICAgICA8aDUgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTAlJyB9fSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAg5Y+v6KaW5YyW5p2h5Lu2XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc209ezR9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlkPVwiYXBwbHlcIlxuICAgICAgICAgICAgb25DbGljaz17b25BcHBseX1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzE1JScgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYXJrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDlj6/oppbljJZcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgey8qIEFjY29yZGlvbiAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgdGV4dC1kYW5nZXIgXCIgc3R5bGU9e3sgaGVpZ2h0OiAnODAlJyB9fT5cbiAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiIGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICB7LyogVmlzdWFsaXphdGlvbiBUeXBlICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjBcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+5Y+v6KaW5YyW44K/44Kk44OXPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkID0gXCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCJ9IC8vIOODh+ODleOCqeODq+ODiOODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19XG4gICAgICAgICAgICAgICAgICA+MeekvuOBq+azqOebrjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Zpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCJ9IC8vIOODh+ODleOCqeODq+ODiOODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBteC0yXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPjHjg4jjg5Tjg4Pjgq/jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBUb3BpYyBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMVwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Ub3BpYzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAge3RvcGljTGlzdC5tYXAoKHRvcGljKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RvcGljfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dFR5cGVbMF19IFxuICAgICAgICAgICAgICAgICAgICBpZCA9IHt0b3BpY31cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRUb3BpY3MuaW5jbHVkZXModG9waWMpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VUb3BpYyh0b3BpYyxpbnB1dFR5cGVbMF0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9waWNcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0b3BpY30+e0lkdG9Ub3BpY1t0b3BpY119PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cbiAgICAgICAgICB7LyogQ29tcGFueSBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMlwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Db21wYW55PC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICB7Y29tcGFueUxpc3QubWFwKChjb21wYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVsxXX0gXG4gICAgICAgICAgICAgICAgICAgIGlkID0ge2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29tcGFuaWVzLmluY2x1ZGVzKGNvbXBhbnkpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VDb21wYW55KGNvbXBhbnksaW5wdXRUeXBlWzFdKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nY29tcGFueSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17Y29tcGFueX0+e2NvbXBhbnl9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG4gICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/5Y+W5b6X6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90QmFyQ2hhcnRCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgY2xpY2tkYXRhLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSA1O1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGNsaWNrZGF0YSB8fCB0b3BpY1swXSB8fCBcImRlZmF1bHRfdG9waWNcIjsgLy8gYGNsaWNrZGF0YWDjgpLlhKrlhYhcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldElkfS90cmVuZC9vdXRwdXRfJHt0aW1lfS5qc29uYDtcbiAgICAgICAgY29uc3QgY29tcGFueVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRJZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG4gICAgICAgIGNvbnN0IGZpUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvZmlfc3ViY2xhc3Nfc3BsaXQuanNvbmA7XG4gICAgICAgIC8vIOODh+ODvOOCv+OCkuWPluW+l1xuICAgICAgICBjb25zdCBbb3JpZ2luYWwsIGNvbXBhbnlMaXN0LCBmaUxpc3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgICBsb2FkQ29tcGFuaWVzKGNvbXBhbnlQYXRoKSxcbiAgICAgICAgICBmZXRjaERhdGEoZmlQYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgaWYgKCFjb21wYW55TGlzdC5pbmNsdWRlcyhjb21wYW55WzBdKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcGFueSBcIiR7Y29tcGFueVswXX1cIiBub3QgZm91bmQuYCk7XG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb21wYW5544Gu44OH44O844K/5Y+W5b6XXG4gICAgICAgIGNvbnN0IGNvbXBhbnlJbmRleCA9IGNvbXBhbnlMaXN0LmluZGV4T2YoY29tcGFueVswXSk7XG4gICAgICAgIGNvbnN0IGNvbXBhbnlEYXRhID0gb3JpZ2luYWxbY29tcGFueUluZGV4XTtcbiAgICAgICAgaWYgKCFjb21wYW55RGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgTm8gZGF0YSBmb3VuZCBmb3IgY29tcGFueSBpbmRleCBcIiR7Y29tcGFueUluZGV4fVwiLmApO1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlNPTuODh+ODvOOCv+OBruaVtOW9olxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gT2JqZWN0LmVudHJpZXMoY29tcGFueURhdGEpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgIGNhdGVnb3J5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IGtleSA9PT0gXCJcIiA/IDAgOiBwYXJzZUZsb2F0KHZhbHVlKSAqIDEwMCB8fDAsIC8vIOWApOOCkuaVsOWApOOBq+WkieaPm++8iOOBquOBhOWgtOWQiOOBrzDvvIlcbiAgICAgICAgICBzdW1tYXJpemU6IGZpTGlzdFtrZXldLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8g44OH44O844K/44KS6ZmN6aCG44Gr44K944O844OI44GX44Gm5LiK5L2NMTDku7bjgpLlj5blvpdcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGZvcm1hdHRlZERhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnlbMF1944GuRknjga7liIbluINgKTtcbiAgICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYGNsaWNrZGF0YWDjga7lgKTjgYzlpInljJbjgZfjgZ/jgYvjgpLmmI7npLrnmoTjgavmr5TovINcbiAgICBpZiAoXG4gICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgJiZcbiAgICAgICh1cGRhdGUgfHwgY2hhcnREYXRhLmxlbmd0aCA9PT0gMCB8fCBjbGlja2RhdGEpXG4gICAgKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIEpTT04uc3RyaW5naWZ5KGNsaWNrZGF0YSksIHVwZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgIHg6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLnJldmVyc2UoKSwgLy8g5qiq5ZCR44GN5qOS44Kw44Op44OV55So44Gu5YCk77yI6YCG6aCG77yJXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksIC8vIOOCq+ODhuOCtOODqu+8iOmAhumghu+8iVxuICAgICAgICAgICAgY3VzdG9tZGF0YTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5zdW1tYXJpemUpLnJldmVyc2UoKSwgLy8gc3VtbWFyaXplIOOCkiBjdXN0b21kYXRhIOOBq+a4oeOBmVxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaFwiLCAvLyDmqKrlkJHjgY3mo5LjgrDjg6njg5VcbiAgICAgICAgICAgIG1hcmtlcjogeyBjb2xvcjogXCJyb3lhbGJsdWVcIiB9LCAvLyDmo5Ljga7oibJcbiAgICAgICAgICAgIGhvdmVydGVtcGxhdGU6XG4gICAgICAgICAgICBg6Kqs5piOOiAle2N1c3RvbWRhdGF9PGJyPiU6ICV7eDouMmZ9JSA8ZXh0cmE+PC9leHRyYT5gLCAvLyBjdXN0b21kYXRhIOOCkuWPgueFp1xuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGlja3N1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBhbGlnbjpcImxlZnRcIixcbiAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgc2l6ZTogMTEsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruODleOCqeODs+ODiOOCteOCpOOCulxuICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLCAvLyDjg5Xjgqnjg7Pjg4jjga7oibJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImxpZ2h0eWVsbG93XCIsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruiDjOaZr+iJslxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwiZ3JheVwiLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7mnqDnt5roibJcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RCYXJDaGFydEI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/lj5blvpfplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5cblxuY29uc3QgUGxvdEJhckNoYXJ0QSA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiRknjga7liIbluIMhXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSA1O1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRvcGljWzBdOyAvLyBjbGlja2RhdGHjgpLlhKrlhYhcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldElkfS90cmVuZC9vdXRwdXRfdG9waWNfJHt0aW1lfS5qc29uYDtcbiAgICAgICAgY29uc3QgZmlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9maV9zdWJjbGFzc19zcGxpdC5qc29uYDtcblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgW29yaWdpbmFsLCBmaUxpc3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgICBmZXRjaERhdGEoZmlQYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhXCIsb3JpZ2luYWwpO1xuIFxuXG4gICAgICAgIC8vIEpTT07jg4fjg7zjgr/jga7mlbTlvaJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKG9yaWdpbmFsKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICBcbiAgICAgICAgICBjYXRlZ29yeToga2V5LFxuICAgICAgICAgIHZhbHVlOiBrZXkgPT09IFwiXCIgPyAwIDogcGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDAgfHwgMCwgXG4gICAgICAgICAgc3VtbWFyaXplOiBmaUxpc3Rba2V5XSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFcIixmb3JtYXR0ZWREYXRhKTtcblxuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBmb3JtYXR0ZWREYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgRknjga7liIbluINgKTtcbiAgICAgICAgY29uc29sZS5sb2coY2hhcnREYXRhKTtcbiAgICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwICkpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgdXBkYXRlXSk7IC8vIGNsaWNrZGF0YSDjgpLkvp3lrZjplqLkv4Ljgavov73liqBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksXG4gICAgICAgICAgICBjdXN0b21kYXRhOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnN1bW1hcml6ZSkucmV2ZXJzZSgpLCAvLyBzdW1tYXJpemUg44KSIGN1c3RvbWRhdGEg44Gr5rih44GZXG5cbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgICAgICAgIG1hcmtlcjogeyBjb2xvcjogXCJyb3lhbGJsdWVcIiB9LFxuICAgICAgICAgICAgaG92ZXJ0ZW1wbGF0ZTpcbiAgICAgICAgICAgIGDoqqzmmI46ICV7Y3VzdG9tZGF0YX08YnI+JTogJXt4Oi4yZn0lIDxleHRyYT48L2V4dHJhPmAsIC8vIGN1c3RvbWRhdGEg44KS5Y+C54WnXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aWNrc3VmZml4OiBcIiAlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogXCJGSVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDgwLCByOiA1MCB9LFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIGFsaWduOlwibGVmdFwiLFxuICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICBzaXplOiAxMSwgLy8g44OE44O844Or44OB44OD44OX44Gu44OV44Kp44Oz44OI44K144Kk44K6XG4gICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsIC8vIOODleOCqeODs+ODiOOBruiJslxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJnY29sb3I6IFwibGlnaHR5ZWxsb3dcIiwgLy8g44OE44O844Or44OB44OD44OX44Gu6IOM5pmv6ImyXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJncmF5XCIsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruaeoOe3muiJslxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG5cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RCYXJDaGFydEE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbXlfYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYXV0aDBfYXV0aDAtcmVhY3RfZGlzdF9hdXRoMC1yZWFjdF9lc21fanMtbm9kZV9tb2R1bGVzX3JlYWN0LWJvb3RzdHJhcF9lLTk0ZDVmMFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJTaWRlYmFyIiwiQ29udGVudCIsInVzZUF1dGgwIiwiQXBwIiwibG9naW5XaXRoUmVkaXJlY3QiLCJsb2dvdXQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVMb2dpbiIsImNvbm5lY3Rpb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiYXJyb3dDb2xvciIsImNvbXBhbnlMaXN0IiwidG9waWNMaXN0IiwidmlzdWFsVHlwZSIsInNldFZpc3VhbFR5cGUiLCJpc0FwcGxpZWQiLCJzZXRJc0FwcGxpZWQiLCJzZWxlY3RlZENvbXBhbmllcyIsInNldFNlbGVjdGVkQ29tcGFuaWVzIiwic2VsZWN0ZWRUb3BpY3MiLCJzZXRTZWxlY3RlZFRvcGljcyIsImhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUFwcGx5IiwidG9nZ2xlU2VsZWN0aW9uIiwiaXRlbSIsInNldFNlbGVjdGVkIiwiYnV0dG9tdHlwZSIsInByZXZTZWxlY3RlZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaSIsIkNvbXBhbnlDaGVja2JveENoYW5nZSIsImNvbXBhbnkiLCJUb3BpY0NoZWNrYm94Q2hhbmdlIiwidG9waWMiLCJyZXNldElzQXBwbGllZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImZsdWlkIiwiY2xhc3NOYW1lIiwib25DbGljayIsIkZyYWdtZW50IiwibWQiLCJvbkFwcGx5Iiwib25WaXN1YWxUeXBlQ2hhbmdlIiwib25DaGFuZ2VUb3BpYyIsIm9uQ2hhbmdlQ29tcGFueSIsInN0eWxlIiwiaGVpZ2h0IiwicGxvdCIsInJlc2V0QXBwbHkiLCJDYXJkIiwiUGxvdFBpZUEiLCJQbG90UGllQiIsIlBsb3RQZXJzb25hQ29tcCIsIlBsb3RQZXJzb25hVG9waWMiLCJQbG90QmFyQ2hhcnRBIiwiUGxvdEJhckNoYXJ0QiIsIlByb3Bvc2VkRGF0YSIsImdldENhcmREYXRhIiwiUHJvcG9zZWRWaXN1YWxpemUiLCJfcmVmIiwiY2xpY2tEYXRhIiwic2V0Q2xpY2tEYXRhIiwiY2xpY2tDb21wYW55RGF0YSIsInNldENsaWNrQ29tcGFueURhdGEiLCJoYW5kbGVQaWVDaGFydENsaWNrIiwiZGF0YSIsImxvZyIsImhhbmRsZVBlcnNvbmFDbGljayIsImNhcmREYXRhIiwic2V0Q2FyZERhdGEiLCJ1cGRhdGUiLCJvblJlbmRlcmVkIiwib25DbGlja0RhdGEiLCJsYXlvdXQiLCJ0aXRsZSIsIndpZHRoIiwiY29uZmlnIiwicmVzcG9uc2l2ZSIsImNsaWNrZGF0YSIsInByb3Bvc2VkRGF0YSIsInNldFByb3Bvc2VkRGF0YSIsInNldEVycm9yIiwiZmV0Y2hEYXRhIiwiZGF0YVBhdGgiLCJwcm9jZXNzIiwiZW52IiwiUFVCTElDX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbkRhdGEiLCJqc29uIiwiY29tcGFueURhdGEiLCJ3YXJuIiwidG9waWNEYXRhIiwiZXJyIiwicmVuZGVyQ2FyZCIsImRpcmVjdGlvbiIsInZhbHVlcyIsImxhYmVsIiwiYmFzZUNvbG9yTWFwIiwidXByaWdodCIsInVwbGVmdCIsImRvd25yaWdodCIsImRvd25sZWZ0IiwiYmFzZUNvbG9yIiwiY2FyZEFscGhhIiwiY2FyZEJhY2tncm91bmRDb2xvciIsInJlcGxhY2UiLCJNYXRoIiwibWluIiwia2V5IiwiYmFja2dyb3VuZENvbG9yIiwiQm9keSIsIlRpdGxlIiwic2xpY2UiLCJtYXAiLCJpbmRleCIsImFscGhhIiwiaXRlbUJhY2tncm91bmRDb2xvciIsIm1heCIsIkhlYWRlciIsImNvbG9yIiwidGV4dEFsaWduIiwiUmVhY3RET00iLCJBdXRoMFByb3ZpZGVyIiwiZG9tYWluIiwiY2xpZW50SWQiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIiwiYXV0aG9yaXphdGlvblBhcmFtcyIsInJlZGlyZWN0X3VyaSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VSZWYiLCJQbG90IiwiY29sb3JtYXAiLCJ1cmwiLCJzdGF0dXMiLCJjb250ZW50VHlwZSIsImhlYWRlcnMiLCJnZXQiLCJ0ZXh0Iiwic3BsaXQiLCJsaW5lIiwidHJpbSIsInByb2Nlc3NTcGFyc2VEYXRhIiwic3BhcnNlRGF0YSIsIm51bVJvd3MiLCJlbnRyeSIsInJvdyIsIm51bUNvbHMiLCJjb2wiLCJtYXRyaXgiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJmaWxsIiwiZm9yRWFjaCIsInJlZHVjZSIsInN1bSIsIl9yZWYyIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwic2V0VGl0bGUiLCJhbGxUb3BpYyIsIklkdG9Ub3BpYyIsIlRvcGljdG9JZCIsImRhdGFDYWNoZSIsImNvbXBhbmllcyIsImxvYWREYXRhIiwiYWxsVG9waWNzRGF0YSIsIlByb21pc2UiLCJhbGwiLCJ0YXJnZXRfaWQiLCJ0aW1lIiwiY29tcGFueVVybCIsInNwYXJzZURhdGFVcmwiLCJjdXJyZW50Iiwibm9ybWFsaXplU3RyaW5nIiwic3RyIiwibm9ybWFsaXplIiwic2FuaXRpemVkQ29tcGFuaWVzIiwic2FuaXRpemVkQ29tcGFueSIsInJvd1N1bXMiLCJjb21wYW55SW5kZXgiLCJpbmRleE9mIiwiZmlsdGVyZWREYXRhIiwidG90YWxWYWx1ZSIsIm5vcm1hbGl6ZWREYXRhIiwiY2F0ZWdvcnkiLCJzb3J0IiwiYSIsImIiLCJoYW5kbGVQbG90Q2xpY2siLCJldmVudCIsInBvaW50cyIsInRvcGljaWQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ0eXBlIiwibGFiZWxzIiwiU3RyaW5nIiwibWFya2VyIiwiY29sb3JzIiwic2hvd2xlZ2VuZCIsInBsb3RfYmdjb2xvciIsInBhcGVyX2JnY29sb3IiLCJtYXJnaW4iLCJ0IiwibCIsInIiLCJmZXRjaFRleHREYXRhIiwibG9hZENoYXJ0RGF0YSIsInRhcmdldElkIiwiZGF0YVVybCIsImNvbHVtblVybCIsInNvcnRlZERhdGEiLCJsb2FkQ29tcGFuaWVzIiwidG9MaXN0IiwibGluZXMiLCJhbHBoYV9saSIsInBhcnNlRmxvYXQiLCJiZXRhX2xpIiwiUGxvdFBlcnNvbkNvbXAiLCJhcnJvd19jb2xvciIsInByZXBhcmVkRGF0YSIsInNldFByZXBhcmVkRGF0YSIsImZpZ0RhdGEiLCJzZXRGaWdEYXRhIiwiYW5ub3RhdGlvbnMiLCJzZXRBbm5vdGF0aW9ucyIsInByZXBhcmVEYXRhIiwiYWxsUHJvbWlzZXMiLCJjb2x1bW5QYXRoIiwiY29tcGFueURpY3QiLCJhY2MiLCJpZHgiLCJuZXdTZWFyY2hMaXN0IiwiaXNBcnJheSIsImZpbHRlcmVkU2VhcmNoTGlzdCIsIm5vZGVfYWxwaGEiLCJub2RlX2JldGEiLCJwcm9taXNlcyIsIl8iLCJqIiwicCIsInBhcmFtZXRlclBhdGgiLCJrIiwicmVzdWx0cyIsImNvbWJpbmVkQWxwaGEiLCJmbGF0TWFwIiwicmVzdWx0IiwiY29tYmluZWRCZXRhIiwiY29tYmluZWRTZWFyY2hMaXN0IiwiYmV0YSIsInNlYXJjaExpc3QiLCJwbG90RGF0YSIsIngiLCJ5IiwibW9kZSIsInRleHRwb3NpdGlvbiIsInN5bWJvbCIsInNpemUiLCJuYW1lIiwicGxvdEFubm90YXRpb25zIiwieHJlZiIsInlyZWYiLCJheHJlZiIsImF5cmVmIiwiYXgiLCJheSIsImFycm93Y29sb3IiLCJhcnJvd3NpemUiLCJhcnJvd3dpZHRoIiwiYXJyb3doZWFkIiwic2hvd2Fycm93IiwiZm9udCIsInhhbmNob3IiLCJ5YW5jaG9yIiwieGF4aXMiLCJyYW5nZSIsImxpbmVjb2xvciIsImxpbmV3aWR0aCIsImdyaWRjb2xvciIsImdyaWR3aWR0aCIsImdyaWRkYXNoIiwidGlja21vZGUiLCJ0aWNrdmFscyIsInRpY2t0ZXh0IiwiemVyb2xpbmUiLCJ5YXhpcyIsInRpdGxlX3N0YW5kb2ZmIiwibGVnZW5kIiwiYmdjb2xvciIsImJvcmRlcmNvbG9yIiwiYm9yZGVyd2lkdGgiLCJQbG90UGVyc29uVG9waWMiLCJzZXRDb21wYW55TGlzdCIsInNldFNlYXJjaExpc3QiLCJ0aGVuIiwiQWNjb3JkaW9uIiwiQnV0dG9uIiwiaW5wdXRUeXBlIiwic2V0SW5wdXRUeXBlIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJ0YXJnZXQiLCJwYWRkaW5nIiwic20iLCJkZWZhdWx0QWN0aXZlS2V5IiwiSXRlbSIsImV2ZW50S2V5Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaHRtbEZvciIsImZvbnRTaXplIiwicGF0aCIsImNvbXBhbnlQYXRoIiwiZmlQYXRoIiwib3JpZ2luYWwiLCJmaUxpc3QiLCJmb3JtYXR0ZWREYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsInN1bW1hcml6ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXZlcnNlIiwiY3VzdG9tZGF0YSIsIm9yaWVudGF0aW9uIiwiaG92ZXJ0ZW1wbGF0ZSIsIm1pcnJvciIsInRpY2tzdWZmaXgiLCJob3ZlcmxhYmVsIiwiYWxpZ24iXSwic291cmNlUm9vdCI6IiJ9