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
        x: 0.5,
        y: 1.1,
        xanchor: 'center'
      },
      annotations: [{
        x: 0.5,
        y: 1.9,
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
        y: 1.9,
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
        y: 0.1,
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
        y: 0.1,
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
        range: [-0.1, 2.1],
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
        range: [-0.1, 2.1],
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
        x: 1.9,
        y: 1.9,
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
      width: "100%",
      height: "45%"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2FwcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbnRlbnQuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9nby1hbnl3aGVyZS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9vY2N1cHktY29tcGFueS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtdG9waWMuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9zaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RyZW5kLXRvcGl4LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyLmpzeCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQuanN4JztcbmltcG9ydCB7IHVzZUF1dGgwIH0gZnJvbSAnQGF1dGgwL2F1dGgwLXJlYWN0JztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCB7IGxvZ2luV2l0aFJlZGlyZWN0LCBsb2dvdXQsIGlzQXV0aGVudGljYXRlZCwgdXNlciB9ID0gdXNlQXV0aDAoKTsgLy8gQXV0aDDjga7mg4XloLHjgpLlj5blvpdcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBsb2dpbldpdGhSZWRpcmVjdCh7XG4gICAgICAgIGNvbm5lY3Rpb246ICdVc2VybmFtZS1QYXNzd29yZC1BdXRoZW50aWNhdGlvbicsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44Ot44Kw44Kk44Oz44Ko44Op44O8OlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXJyb3dDb2xvciA9IFtcbiAgICAnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJyxcbiAgICAnIzNFOUU2RicsICcjRjM4MTgxJywgJyM1NDVFNzUnLCAnI0ZGQjYyNycsICcjNTc3NTkwJyxcbiAgXTtcbiAgY29uc3QgY29tcGFueUxpc3QgPSBbXG4gICAgJ+m5v+WztuW7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7lpKfmnpfntYQnLCAn5riF5rC05bu66Kit5qCq5byP5Lya56S+JywgJ+Wkp+aIkOW7uuioreagquW8j+S8muekvicsXG4gICAgJ+agquW8j+S8muekvuerueS4reW3peWLmeW6lycsICfmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7MnLCAn5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+JyxcbiAgICAn5LqU5rSL5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvuODleOCuOOCvycsICfmiLjnlLDlu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+54aK6LC357WEJyxcbiAgXTtcbiAgY29uc3QgdG9waWNMaXN0ID0gWycwJywgJzEnLCAnMicsICczJywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMSddO1xuXG4gIGNvbnN0IFt2aXN1YWxUeXBlLCBzZXRWaXN1YWxUeXBlXSA9IHVzZVN0YXRlKCdvbmUtdG9waWMnKTtcbiAgY29uc3QgW2lzQXBwbGllZCwgc2V0SXNBcHBsaWVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2VsZWN0ZWRDb21wYW5pZXMsIHNldFNlbGVjdGVkQ29tcGFuaWVzXSA9IHVzZVN0YXRlKFsn5qCq5byP5Lya56S+54aK6LC357WEJ10pO1xuICBjb25zdCBbc2VsZWN0ZWRUb3BpY3MsIHNldFNlbGVjdGVkVG9waWNzXSA9IHVzZVN0YXRlKFsnMCddKTtcblxuICBjb25zdCBoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0VmlzdWFsVHlwZSh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXBwbHkgPSAoKSA9PiB7XG4gICAgc2V0SXNBcHBsaWVkKDEpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGlvbiA9IChpdGVtLCBzZXRTZWxlY3RlZCwgYnV0dG9tdHlwZSkgPT4ge1xuICAgIGlmIChidXR0b210eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBzZXRTZWxlY3RlZCgocHJldlNlbGVjdGVkKSA9PlxuICAgICAgICBwcmV2U2VsZWN0ZWQuaW5jbHVkZXMoaXRlbSlcbiAgICAgICAgICA/IHByZXZTZWxlY3RlZC5maWx0ZXIoKGkpID0+IGkgIT09IGl0ZW0pXG4gICAgICAgICAgOiBbLi4ucHJldlNlbGVjdGVkLCBpdGVtXVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWQoW2l0ZW1dKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgQ29tcGFueUNoZWNrYm94Q2hhbmdlID0gKGNvbXBhbnksIGJ1dHRvbXR5cGUpID0+IHtcbiAgICB0b2dnbGVTZWxlY3Rpb24oY29tcGFueSwgc2V0U2VsZWN0ZWRDb21wYW5pZXMsIGJ1dHRvbXR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ2hlY2tib3hDaGFuZ2UgPSAodG9waWMsIGJ1dHRvbXR5cGUpID0+IHtcbiAgICB0b2dnbGVTZWxlY3Rpb24odG9waWMsIHNldFNlbGVjdGVkVG9waWNzLCBidXR0b210eXBlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ29tcGFuaWVzKFsn5qCq5byP5Lya56S+54aK6LC357WEJ10pO1xuICAgIHNldFNlbGVjdGVkVG9waWNzKFsnMCddKTtcbiAgfSwgW3Zpc3VhbFR5cGVdKTtcblxuICBjb25zdCByZXNldElzQXBwbGllZCA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicmVhY3QtY29udGVudFwiIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XG4gICAgICA8Um93PlxuICAgICAgICB7IWlzQXV0aGVudGljYXRlZCA/ICggLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44Gq44GE5aC05ZCIXG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT7jg63jgrDjgqTjg7PjgYzlv4XopoHjgafjgZk8L2gxPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgICAgICAgICDjg63jgrDjgqTjg7NcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSA6ICggLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44KL5aC05ZCIXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiDjgrXjgqTjg4njg5Djg7wgKi99XG4gICAgICAgICAgICA8Q29sIG1kPXszfSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCI+XG4gICAgICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICAgICAgb25BcHBseT17aGFuZGxlQXBwbHl9XG4gICAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgICBvblZpc3VhbFR5cGVDaGFuZ2U9e2hhbmRsZVZpc3VhbFR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICAgICAgY29tcGFueUxpc3Q9e2NvbXBhbnlMaXN0fVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29tcGFuaWVzPXtzZWxlY3RlZENvbXBhbmllc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRvcGljcz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VUb3BpYz17VG9waWNDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBhbnk9e0NvbXBhbnlDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICB7Lyog44Oh44Kk44Oz44Kz44Oz44OG44Oz44OEICovfVxuICAgICAgICAgICAgPENvbCBtZD17OX0gY2xhc3NOYW1lPVwiYm9yZGVyLWVuZFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgICAgICBwbG90PXtpc0FwcGxpZWR9XG4gICAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgICB0b3BpYz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICAgICAgY29tcGFueT17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICAgICAgcmVzZXRBcHBseT17cmVzZXRJc0FwcGxpZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9ZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgUGxvdFBpZUEgZnJvbSAnLi9vY2N1cHkuanN4JztcbmltcG9ydCBQbG90UGllQiBmcm9tICcuL29jY3VweS1jb21wYW55LmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFDb21wIGZyb20gJy4vcGVyc29uYS1jb21wLmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFUb3BpYyBmcm9tICcuL3BlcnNvbmEtdG9waWMuanN4JztcblxuaW1wb3J0IFBsb3RCYXJDaGFydEEgZnJvbSAnLi90cmVuZC10b3BpeC5qc3gnO1xuaW1wb3J0IFBsb3RCYXJDaGFydEIgZnJvbSAnLi90cmVuZC1jb21wLmpzeCc7XG5pbXBvcnQgUHJvcG9zZWREYXRhLCB7IGdldENhcmREYXRhIH0gZnJvbSBcIi4vZ28tYW55d2hlcmUuanN4XCI7IC8vIOato+OBl+OBhOODkeOCueOCkuaMh+WumlxuaW1wb3J0IFByb3Bvc2VkVmlzdWFsaXplIGZyb20gJy4vZ28tYW55d2hlcmUuanN4JztcblxuXG5cblxuXG5jb25zdCBDb250ZW50ID0gKHtwbG90LHZpc3VhbFR5cGUsdG9waWMsY29tcGFueSxyZXNldEFwcGx5fSkgPT4ge1xuXG5cblxuICAgIGNvbnN0IFtjbGlja0RhdGEsIHNldENsaWNrRGF0YV0gPSB1c2VTdGF0ZSgpOyAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jga7nirbmhYtcbiAgICBjb25zdCBbY2xpY2tDb21wYW55RGF0YSwgc2V0Q2xpY2tDb21wYW55RGF0YV0gPSB1c2VTdGF0ZSgpOyAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jga7nirbmhYtcblxuICAgIGNvbnN0IGhhbmRsZVBpZUNoYXJ0Q2xpY2sgPSAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCLjgq/jg6rjg4Pjgq/jgZXjgozjgZ/jg4fjg7zjgr86XCIsIGRhdGEpOyAvLyDjg4fjg5Djg4PjgrDnlKhcbiAgICAgIHNldENsaWNrRGF0YShkYXRhKTsgLy8g54q25oWL44KS5pu05pawXG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVQZXJzb25hQ2xpY2sgPSAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCLjgq/jg6rjg4Pjgq/jgZXjgozjgZ/jg4fjg7zjgr86XCIsIGRhdGEpOyAvLyDjg4fjg5Djg4PjgrDnlKhcbiAgICAgIHNldENsaWNrQ29tcGFueURhdGEoZGF0YSk7IC8vIOeKtuaFi+OCkuabtOaWsFxuICAgIH07XG5cbiAgICBjb25zdCBbY2FyZERhdGEsIHNldENhcmREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gIFxuICAgIFxuICByZXR1cm4gKFxuICAgIFxuICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICB7LyogRmlyc3QgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgey8qIFBlcnNvbmEgR3JhcGggKi99XG4gICAgICAgIDxDb2wgbWQ9ezF9PjwvQ29sPlxuICAgICAgICA8Q29sIG1kPXsxMH0gPlxuXG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgICAgPFBsb3RQZXJzb25hVG9waWNcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIG9uQ2xpY2tEYXRhPXtoYW5kbGVQZXJzb25hQ2xpY2t9IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBruODj+ODs+ODieODqeODvOOCkua4oeOBmVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzUwdmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiNTB2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFDb21wXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQydmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIHsvKiBSaWdodCBDb2x1bW4gd2l0aCBDYXJkcyAqL31cbiAgICAgICAgPENvbCBtZD17MX0+XG5cbiAgICA8L0NvbD5cbiAgPC9Sb3c+XG5cbiAgICAgIHsvKiBTZWNvbmQgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgPENvbCBtZD17Nn0+XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgICAgPFBsb3RQaWVBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+azqOebruS8gealreOBrualreeVjOOBq+WvvuOBmeOCi+WNoOacieeOhycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiID8gKFxuICAgICAgICAgICAgPFBsb3RQaWVCXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBvbkNsaWNrRGF0YT17aGFuZGxlUGllQ2hhcnRDbGlja30gLy8g44Kv44Oq44OD44Kv44OH44O844K/44Gu44OP44Oz44OJ44Op44O844KS5rih44GZXG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+6Kmy5b2T44GZ44KL6KGo56S644GM44GC44KK44G+44Gb44KTPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICAgICAgIFxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17Nn0+XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgIDxQbG90QmFyQ2hhcnRBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuXG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICBkYXRhPXtbXX0gLy8g44OH44O844K/44KS6L+95Yqg44GX44Gm44GP44Gg44GV44GEXG4gICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgdGl0bGU6ICdG44K/44O844Og44Gu5YiG5biDJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pOihcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgY2xpY2tkYXRhPXtjbGlja0RhdGF9IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OCkua4oeOBmVxuICAgIFxuXG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICBkYXRhPXtbXX0gLy8g44OH44O844K/44KS6L+95Yqg44GX44Gm44GP44Gg44GV44GEXG4gICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgdGl0bGU6ICdG44K/44O844Og44Gu5YiG5biDJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pfVxuICAgICAgICAgIFxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJoLTEwMFwiPlxuXG4gICAgICA8Q29sPlxuICAgICAge1xuICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICA8UHJvcG9zZWRWaXN1YWxpemVcbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjbGlja0RhdGE9e2NsaWNrQ29tcGFueURhdGF9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S7u+aEj+OBruS9jee9ruOBuOenu+WLleOBmeOCi+OBn+OCgeOBruaPkOahiCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KTooXG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICApIH1cbiAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgICAgIFxuICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQsUm93LENvbCxDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IFByb3Bvc2VkVmlzdWFsaXplID0gKHsgdG9waWMsIGNsaWNrRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtwcm9wb3NlZERhdGEsIHNldFByb3Bvc2VkRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGFQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dG9waWN9L3Byb3Bvc2VkL3Byb3Bvc2VkLmpzb25gO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi44OH44O844K/44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgLy8gYGNsaWNrRGF0YWDjgavlr77lv5zjgZnjgovkvJrnpL7jga7jg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgY29tcGFueURhdGEgPSBqc29uRGF0YVtjbGlja0RhdGFdO1xuXG4gICAgICAgIGlmICghY29tcGFueURhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCLmjIflrprjgZfjgZ/jg4fjg7zjgr/jgYzlrZjlnKjjgZfjgb7jgZvjgpM6IFwiICsgY2xpY2tEYXRhKTtcbiAgICAgICAgICBzZXRQcm9wb3NlZERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaMh+WumuOBleOCjOOBn+ODiOODlOODg+OCr+OBruODh+ODvOOCv+OCkuWPluW+l1xuICAgICAgICBjb25zdCB0b3BpY0RhdGEgPSBjb21wYW55RGF0YVt0b3BpY107XG4gICAgICAgIGlmICghdG9waWNEYXRhKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwi5oyH5a6a44GX44Gf44OI44OU44OD44Kv44GM5a2Y5Zyo44GX44G+44Gb44KTOiBcIiArIHRvcGljKTtcbiAgICAgICAgICBzZXRQcm9wb3NlZERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFByb3Bvc2VkRGF0YSh0b3BpY0RhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/kuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ86XCIsIGVycik7XG4gICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFt0b3BpYywgY2xpY2tEYXRhXSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+44Ko44Op44O8OiB7ZXJyb3J9PC9kaXY+O1xuICB9XG5cbiAgaWYgKCFwcm9wb3NlZERhdGEpIHtcbiAgICByZXR1cm4gPGRpdj7jg4fjg7zjgr/jgpLoqq3jgb/ovrzjgb/kuK0uLi48L2Rpdj47XG4gIH1cblxuICBcbiAgLy8g44OH44O844K/44KS44Kr44O844OJ5b2i5byP44Gn6KGo56S6XG5jb25zdCByZW5kZXJDYXJkID0gKGRpcmVjdGlvbiwgdmFsdWVzKSA9PiB7XG4gIGxldCBsYWJlbDtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIFwidXBsZWZ0XCI6XG4gICAgICBsYWJlbCA9IFwi5bem5LiKXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidXByaWdodFwiOlxuICAgICAgbGFiZWwgPSBcIuWPs+S4ilwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRvd25sZWZ0XCI6XG4gICAgICBsYWJlbCA9IFwi5bem5LiLXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZG93bnJpZ2h0XCI6XG4gICAgICBsYWJlbCA9IFwi5Y+z5LiLXCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbGFiZWwgPSBcIuOBneOBruS7llwiO1xuICB9XG5cbiAgLy8g44Kr44O844OJ5YWo5L2T44Gu6IOM5pmv6Imy44KS6Kit5a6a77yI5pa55ZCR44Gr5Z+644Gl44GP44OZ44O844K544Kr44Op44O877yJXG4gIGNvbnN0IGJhc2VDb2xvck1hcCA9IHtcbiAgICB1cHJpZ2h0OiBcInJnYmEoMjU1LCAxODgsIDE4OCwgQUxQSEEpXCIsICAgLy8g6LWkXG4gICAgdXBsZWZ0OiBcInJnYmEoMjU1LCAyNTUsIDE4OCwgQUxQSEEpXCIsIC8vIOm7hFxuICAgIGRvd25yaWdodDogXCJyZ2JhKDE4OCwgMjIxLCAyNTUsIEFMUEhBKVwiLCAvLyDpnZJcbiAgICBkb3dubGVmdDogXCJyZ2JhKDE4OCwgMjU1LCAxODgsIEFMUEhBKVwiIC8vIOe3kVxuICB9O1xuXG4gIGNvbnN0IGJhc2VDb2xvciA9IGJhc2VDb2xvck1hcFtkaXJlY3Rpb25dO1xuICBjb25zdCBjYXJkQWxwaGEgPSAwLjM7IC8vIOWGhemDqOOBruimgee0oOaVsOOBp+mAj+aYjuW6puOCkuWkieWMllxuICBjb25zdCBjYXJkQmFja2dyb3VuZENvbG9yID0gYmFzZUNvbG9yLnJlcGxhY2UoXCJBTFBIQVwiLCBNYXRoLm1pbihjYXJkQWxwaGEsIDEpKTsgLy8g6IOM5pmv6Imy44KS5YuV55qE44Gr6Kit5a6aXG5cbiAgcmV0dXJuIChcblxuICAgIDxDYXJkIGtleT17ZGlyZWN0aW9ufSBjbGFzc05hbWU9XCJtLTNcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNhcmRCYWNrZ3JvdW5kQ29sb3IgfX0+XG4gICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIj5cbiAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPntsYWJlbH08L0NhcmQuVGl0bGU+XG4gICAgICAgIHt2YWx1ZXMuc2xpY2UoMCwgNSkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAvLyDpoIbkvY3jgavln7rjgaXjgYTjgabpgI/mmI7luqbjgpLoqr/mlbRcbiAgICAgICAgICBjb25zdCBhbHBoYSA9IDAuOTAgLSBpbmRleCAqIDAuMTU7IC8vIOmghuS9jeOBlOOBqOOBq+mAj+aYjuW6puOCkuW+kOOAheOBq+a4m+WwkVxuICAgICAgICAgIGNvbnN0IGl0ZW1CYWNrZ3JvdW5kQ29sb3IgPSBiYXNlQ29sb3IucmVwbGFjZShcIkFMUEhBXCIsIE1hdGgubWF4KGFscGhhLCAwLjEpKTsgLy8g5ZCE44Ki44Kk44OG44Og44Gu6IOM5pmv6ImyXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5raW5nLWl0ZW0gcHktMiBweC0zIGJvcmRlci1ib3R0b21cIlxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW1CYWNrZ3JvdW5kQ29sb3IgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0cm9uZz57aW5kZXggKyAxfeS9je+8mjwvc3Ryb25nPiB7dmFsdWUgfHwgXCJcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9DYXJkLkJvZHk+XG4gICAgPC9DYXJkPlxuXG4gICk7XG59O1xuICByZXR1cm4gKFxuPENvbnRhaW5lcj5cbiAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktM1wiPlxuICAgIHsvKiBDYXJk44OY44OD44OA44O844Gn5Lit5aSu5LiK6YOo44GrY2xpY2tEYXRh44KS6KGo56S6ICovfVxuICAgIDxDYXJkLkhlYWRlciBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMzMzM1wiLCBjb2xvcjogXCJ3aGl0ZVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPntjbGlja0RhdGEgfHwgXCIgXCJ9PC9oNT5cbiAgICA8L0NhcmQuSGVhZGVyPlxuXG5cbiAgICA8Q2FyZC5Cb2R5PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbD57cmVuZGVyQ2FyZChcInVwbGVmdFwiLCBwcm9wb3NlZERhdGEudXBsZWZ0IHx8IFtdKX08L0NvbD5cbiAgICAgICAgPENvbD57cmVuZGVyQ2FyZChcInVwcmlnaHRcIiwgcHJvcG9zZWREYXRhLnVwcmlnaHQgfHwgW10pfTwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sPntyZW5kZXJDYXJkKFwiZG93bmxlZnRcIiwgcHJvcG9zZWREYXRhLmRvd25sZWZ0IHx8IFtdKX08L0NvbD5cbiAgICAgICAgPENvbD57cmVuZGVyQ2FyZChcImRvd25yaWdodFwiLCBwcm9wb3NlZERhdGEuZG93bnJpZ2h0IHx8IFtdKX08L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ2FyZC5Cb2R5PlxuICA8L0NhcmQ+XG48L0NvbnRhaW5lcj5cblxuXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvcG9zZWRWaXN1YWxpemU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwLmpzeFwiO1xuaW1wb3J0IHsgQXV0aDBQcm92aWRlciB9IGZyb20gXCJAYXV0aDAvYXV0aDAtcmVhY3RcIjtcblxuLy8gQXV0aDDjga7oqK3lrppcbmNvbnN0IGRvbWFpbiA9IFwiZGV2LWwzYmdlZ25qanh3eDJvZDQudXMuYXV0aDAuY29tXCI7IC8vIEF1dGgw44Gu44OJ44Oh44Kk44OzXG5cbmNvbnN0IGNsaWVudElkID0gXCJpdnRneDFhck41SjA5Wnc4eVBDaUVrcFExRFozUDIyZVwiOyAvLyBBdXRoMOOBruOCr+ODqeOCpOOCouODs+ODiElEXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPEF1dGgwUHJvdmlkZXJcbiAgICAgIGRvbWFpbj17ZG9tYWlufVxuICAgICAgY2xpZW50SWQ9e2NsaWVudElkfVxuICAgICAgYXV0aG9yaXphdGlvblBhcmFtcz17e1xuICAgICAgICByZWRpcmVjdF91cmk6IFwiaHR0cHM6Ly9oaXJvZW1vbi1tLmdpdGh1Yi5pby9teS1hcHAvXCIsIC8vIOiqjeiovOW+jOOBq+ODquODgOOCpOODrOOCr+ODiOOBmeOCi1VSTFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QXBwIC8+XG4gICAgPC9BdXRoMFByb3ZpZGVyPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5cblxuY29uc3QgY29sb3JtYXAgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjoncmdiKDIyOSwgMTM0LCA2KScsIFwi5Zyw55uk5pS56ImvXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLjg4jjg7Pjg43jg6vmjpjliYpcIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWFjemch+ani+mAoFwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi566h55CG44K344K544OG44OgXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLlu4Pmo4Tnianlh6bnkIZcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbn07XG5cblxuLy8gZmV0Y2hEYXRh6Zai5pWw77yaSlNPTuOBvuOBn+OBr+ODhuOCreOCueODiOW9ouW8j+OBq+WvvuW/nFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG5cbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIEpTT07lvaLlvI/jga7loLTlkIhcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgLy8g44OX44Os44O844Oz44OG44Kt44K544OI44Gu5aC05ZCIXG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7IC8vIOaUueihjOWMuuWIh+OCiuOBruODh+ODvOOCv+OCkumFjeWIl+OBqOOBl+OBpui/lOOBmVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjgrnjg5Hjg7zjgrnjg4fjg7zjgr/jgpLlr4booYzliJfjgavlpInmj5vjgZfjgIHooYzmlrnlkJHjga7lkozjgpLoqIjnrpdcbmNvbnN0IHByb2Nlc3NTcGFyc2VEYXRhID0gKHNwYXJzZURhdGEpID0+IHtcbiAgICBcbiAgY29uc3QgbnVtUm93cyA9IE1hdGgubWF4KC4uLnNwYXJzZURhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnJvdykpICsgMTtcbiAgY29uc3QgbnVtQ29scyA9IE1hdGgubWF4KC4uLnNwYXJzZURhdGEubWFwKGVudHJ5ID0+IGVudHJ5LmNvbCkpICsgMTtcblxuICBjb25zdCBtYXRyaXggPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Sb3dzIH0sICgpID0+IEFycmF5KG51bUNvbHMpLmZpbGwoMCkpO1xuICBzcGFyc2VEYXRhLmZvckVhY2goKHsgcm93LCBjb2wsIHZhbHVlIH0pID0+IHtcbiAgICBtYXRyaXhbcm93XVtjb2xdID0gdmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiBtYXRyaXgubWFwKHJvdyA9PiByb3cucmVkdWNlKChzdW0sIHZhbHVlKSA9PiBzdW0gKyB2YWx1ZSwgMCkpOyAvLyDooYzmlrnlkJHjga7lkozjgpLov5TjgZlcbn07XG5cbmNvbnN0IFBsb3RQaWVCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCwgb25DbGlja0RhdGEgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwi5rOo55uu44OI44OU44OD44Kv44Gr6Zai44GZ44KL54m56Kix44Gu5LyB5qWt5Y2g5pyJ546HXCIpO1xuICBjb25zdCBhbGxUb3BpYyA9IFsyLCAzLCAxLCAwLCA5LCA2LCA4LCA3LCAxMV07XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICAgIGNvbnN0IFRvcGljdG9JZCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOlwiMlwiLFwi5Zyw55uk5pS56ImvXCI6XCIzXCIsXCLjg4jjg7Pjg43jg6vmjpjliYpcIjpcIjFcIixcbiAgICAgICAgXCLlhY3pnIfmp4vpgKBcIjpcIjBcIixcIueuoeeQhuOCt+OCueODhuODoFwiOlwiOVwiLFwi5buD5qOE54mp5Yem55CGXCI6XCI2XCIsXCLlu7rnr4njg5Hjg43jg6tcIjpcIjhcIixcbiAgICAgICBcIuepuuiqv+OCt+OCueODhuODoFwiOlwiN1wiLFwi5o6Y5YmK6KOF572uXCI6XCIxMVwiLFwi5bu656+J6Kit6KiIXCI6XCIxMFwiLFwi44OI44Oz44ON44Or5ris6YePXCI6XCI1XCJ9O1xuICAvLyDjgq3jg6Pjg4Pjgrfjg6XnlKjjga7jgqrjg5bjgrjjgqfjgq/jg4hcbiAgY29uc3QgZGF0YUNhY2hlID0gdXNlUmVmKHtcbiAgICBjb21wYW5pZXM6IHt9LFxuICAgIHNwYXJzZURhdGE6IHt9XG4gIH0pO1xuXG4gIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhbGxUb3BpY3NEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIGFsbFRvcGljLm1hcChhc3luYyAodGFyZ2V0X2lkKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZSA9IDU7XG4gICAgICAgICAgY29uc3QgY29tcGFueVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG4gICAgICAgICAgY29uc3Qgc3BhcnNlRGF0YVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vb2NjdXB5L29jY3VweV90b3BpY18ke3RpbWV9Lmpzb25gO1xuXG4gICAgICAgICAgLy8g44Kt44Oj44OD44K344Ol44KS56K66KqNXG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXSkge1xuICAgICAgICAgICAgZGF0YUNhY2hlLmN1cnJlbnQuY29tcGFuaWVzW3RhcmdldF9pZF0gPSBhd2FpdCBmZXRjaERhdGEoY29tcGFueVVybCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudC5zcGFyc2VEYXRhW3RhcmdldF9pZF0pIHtcbiAgICAgICAgICAgIGRhdGFDYWNoZS5jdXJyZW50LnNwYXJzZURhdGFbdGFyZ2V0X2lkXSA9IGF3YWl0IGZldGNoRGF0YShzcGFyc2VEYXRhVXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjb21wYW5pZXMgPSBkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXTtcbiAgICAgICAgICBjb25zdCBzcGFyc2VEYXRhID0gZGF0YUNhY2hlLmN1cnJlbnQuc3BhcnNlRGF0YVt0YXJnZXRfaWRdO1xuXG4gICAgICAgICAgLy8g5q2j6KaP5YyW6Zai5pWwXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cikgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi6Z2e5paH5a2X5YiX44OH44O844K/44GM5qSc5Ye644GV44KM44G+44GX44GfOlwiLCBzdHIpO1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8g6Z2e5paH5a2X5YiX44OH44O844K/44Gv54Sh6KaWXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyLm5vcm1hbGl6ZShcIk5GQ1wiKS50cmltKCk7IC8vIOato+imj+WMluOBqOODiOODquODoOOCkumBqeeUqFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyDmraPopo/ljJbjgZfjgZ/jg4fjg7zjgr/jgafmr5TovINcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW5pZXMgPSBjb21wYW5pZXMubWFwKG5vcm1hbGl6ZVN0cmluZyk7XG4gICAgICAgICAgY29uc3Qgc2FuaXRpemVkQ29tcGFueSA9IG5vcm1hbGl6ZVN0cmluZyhjb21wYW55WzBdKTtcblxuICAgICAgICAgIGlmICghc2FuaXRpemVkQ29tcGFuaWVzLmluY2x1ZGVzKHNhbml0aXplZENvbXBhbnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke3Nhbml0aXplZENvbXBhbnl9XCIgbm90IGZvdW5kIGluIHRvcGljICR7dGFyZ2V0X2lkfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g44K544OR44O844K544OH44O844K/44KS5Yem55CGXG4gICAgICAgICAgY29uc3Qgcm93U3VtcyA9IHByb2Nlc3NTcGFyc2VEYXRhKHNwYXJzZURhdGEpO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gc2FuaXRpemVkQ29tcGFuaWVzLmluZGV4T2Yoc2FuaXRpemVkQ29tcGFueSk7XG5cbiAgICAgICAgICByZXR1cm4geyB0b3BpYzogdGFyZ2V0X2lkLCB2YWx1ZTogcm93U3Vtc1tjb21wYW55SW5kZXhdIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBhbGxUb3BpY3NEYXRhLmZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPT0gbnVsbCk7XG5cbiAgICAgIC8vIOato+imj+WMluOBqOOCveODvOODiFxuICAgICAgY29uc3QgdG90YWxWYWx1ZSA9IGZpbHRlcmVkRGF0YS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS52YWx1ZSwgMCk7XG4gICAgICBpZiAodG90YWxWYWx1ZSA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJObyB2YWxpZCBkYXRhIHRvIG5vcm1hbGl6ZS5cIik7XG4gICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRhID0gZmlsdGVyZWREYXRhLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGNhdGVnb3J5OiBpdGVtLnRvcGljLFxuICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSAvIHRvdGFsVmFsdWUsXG4gICAgICB9KSkuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xuXG4gICAgICBzZXRDaGFydERhdGEobm9ybWFsaXplZERhdGEuc2xpY2UoMCwgMTApKTsgLy8g5LiK5L2NMTDku7bjga7jgb/ooajnpLpcbiAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g5Yid5pyf44OH44O844K/6Kqt44G/6L6844G/44GodXBkYXRl44Gu5aSJ5pu05pmC44Gr44OH44O844K/44KS44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIikge1xuICAgICAgbG9hZERhdGEoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHZpc3VhbFR5cGVdKTtcblxuICBjb25zdCBoYW5kbGVQbG90Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRzICYmIGV2ZW50LnBvaW50c1swXSkge1xuICAgICAgY29uc3QgY2xpY2tkYXRhID0gZXZlbnQucG9pbnRzWzBdLmxhYmVsOyAvLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/pg6jliIbjga7jg6njg5njg6tcbiAgICAgIGNvbnN0IGxhYmVsID0gVG9waWN0b0lkW2NsaWNrZGF0YV1cbiAgICAgIGNvbnN0IHRvcGljaWQgPSBsYWJlbC5yZXBsYWNlKFwiVG9waWMgXCIsIFwiXCIpO1xuICAgICAgb25DbGlja0RhdGEoW3RvcGljaWRdKTsgLy8g6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Op44OZ44Or44KS6YCa55+lXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHZhbHVlczogY2hhcnREYXRhLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gIElkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW0lkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldXSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNzAsIGI6IDUsIGw6IDQwLCByOiA1MCB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBsb3RDbGlja30gLy8g44Kv44Oq44OD44Kv44Kk44OZ44Oz44OI44KS6L+95YqgXG4gICAgICAvPlxuICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQaWVCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbi8vIOODhuOCreOCueODiOODh+ODvOOCv+OCkuiqreOBv+i+vOOCgOmWouaVsFxuY29uc3QgZmV0Y2hUZXh0RGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBpZUEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcblxuICBjb25zdCBjb2xvcm1hcCA9IHsn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JzoncmdiKDIyOSwgMTM0LCA2KScsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICAgICAgXCLlpKfmiJDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIuagquW8j+S8muekvuerueS4reW3peWLmeW6l1wiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gICAgICBcIuWJjeeUsOW7uuioreW3pealreagquW8j+S8muekvlwiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLkupTmtIvlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuagquW8j+S8muekvuODleOCuOOCv1wiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICAgICAgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDIzNywgMTAwLCA5MCknLCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiOidyZ2IoMTY1LCAxNzAsIDE1MyknfTtcbiAgICAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDU7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWMgfHwgXCJkZWZhdWx0X3RvcGljXCI7IC8vIOWIneacn+WApOOBqOOBl+OBplwiZGVmYXVsdF90b3BpY1wi44KS6Kit5a6aXG4gICAgICAgIGNvbnN0IGRhdGFVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRJZH0vb2NjdXB5L29jY3VweV9tZWFuXyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGNvbHVtblVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldElkfS9zZXR0aW5nL2NvbXBhbnkudHh0YDtcblxuICAgICAgICAvLyDjg4fjg7zjgr/lj5blvpdcbiAgICAgICAgY29uc3QgW3ZhbHVlcywgbGFiZWxzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEoZGF0YVVybCksXG4gICAgICAgICAgZmV0Y2hUZXh0RGF0YShjb2x1bW5VcmwpLFxuICAgICAgICBdKTtcblxuICAgICAgICAvLyDlgKTjgajjg6njg5njg6vjga7ntYTjgb/lkIjjgo/jgZvjgpLkvZzmiJBcbiAgICAgICAgY29uc3QgZGF0YSA9IGxhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVzLnZhbHVlW2luZGV4XSB8fCAwLCAvLyDlgKTjgYzjgarjgYTloLTlkIjjga8wXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyDlgKTjgavln7rjgaXjgYTjgabpmY3poIbjgavjgr3jg7zjg4jjgZfjgabkuIrkvY0xMOS7tuOCkuaKveWHulxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7SWR0b1RvcGljW3RhcmdldElkXX3jgavplqLjgZnjgovnibnoqLHjga7kvIHmpa3ljaDmnInnjodgKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OB44Oj44O844OI44OH44O844K/44Gu5Yem55CG5Lit44Gr44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOWIneWbnuODrOODs+ODgOODquODs+OCsOaZguOBqGB1cGRhdGVg5aSJ5pu05pmC44Gr44OH44O844K/44KS44Ot44O844OJXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBvblJlbmRlcmVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5sYWJlbCksXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiY2xvY2t3aXNlXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgY29sb3JzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBjb2xvcm1hcFtpdGVtLmxhYmVsXSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNzAsIGI6IDUsIGw6IDQwLCByOiA1MCB9LFxuICAgICAgICB9fVxuICBcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQaWVBO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cblxuIFxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCB0b0xpc3QgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICBjb25zdCBhbHBoYV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMF0pKTtcbiAgICBjb25zdCBiZXRhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVsxXSkpO1xuXG4gICAgcmV0dXJuIHsgYWxwaGFfbGksIGJldGFfbGkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYWxwaGFfbGk6IFtdLCBiZXRhX2xpOiBbXSB9O1xuICB9XG59O1xuXG5jb25zdCBQbG90UGVyc29uQ29tcCA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIG9uUmVuZGVyZWQgfSkgPT4ge1xuY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgICAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgICAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwifTtcblxuY29uc3QgY29sb3JtYXAgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjoncmdiKDIyOSwgMTM0LCA2KScsIFwi5Zyw55uk5pS56ImvXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLjg4jjg7Pjg43jg6vmjpjliYpcIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICAgICAgICAgIFwi5YWN6ZyH5qeL6YCgXCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLnrqHnkIbjgrfjgrnjg4bjg6BcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuW7g+ajhOeJqeWHpueQhlwiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICAgICAgICAgIFwi5bu656+J44OR44ON44OrXCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuepuuiqv+OCt+OCueODhuODoFwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5o6Y5YmK6KOF572uXCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gICAgICAgIH07XG4gICAgICAgIFxuICBjb25zdCBhcnJvd19jb2xvciA9IFsnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJ107XG5cbiAgY29uc3QgW3ByZXBhcmVkRGF0YSwgc2V0UHJlcGFyZWREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwi5LyB5qWt44Gu56uL44Gh5L2N572uXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlcGFyZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxQcm9taXNlcyA9ICh0b3BpYyB8fCBbXCJkZWZhdWx0X3RvcGljXCJdKS5tYXAoYXN5bmMgKHRhcmdldF9pZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b3BpY1wiLHRhcmdldF9pZClcbiAgICAgICAgICBjb25zdCBjb2x1bW5QYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9zZXR0aW5nL2NvbXBhbnkudHh0YDtcbiAgICAgICAgICBjb25zdCBjb21wYW5pZXMgPSBhd2FpdCBsb2FkQ29tcGFuaWVzKGNvbHVtblBhdGgpO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW5pZXMucmVkdWNlKChhY2MsIHZhbHVlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGFjY1t2YWx1ZV0gPSBpZHg7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIGNvbnN0IG5ld1NlYXJjaExpc3QgPSBBcnJheS5pc0FycmF5KGNvbXBhbnkpID8gY29tcGFueSA6IFtjb21wYW55XTtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJlZFNlYXJjaExpc3QgPSBuZXdTZWFyY2hMaXN0LmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSBpbiBjb21wYW55RGljdCk7XG5cbiAgICAgICAgICBjb25zdCBub2RlX2FscGhhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsdGVyZWRTZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcbiAgICAgICAgICBjb25zdCBub2RlX2JldGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWx0ZXJlZFNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuXG4gICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBqKSA9PiBqICkubWFwKGFzeW5jIChwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9wZXJzb25hL3Rlc3Rfb3B0aW1pemVfJHtwKzF9LnR4dGA7XG4gICAgICAgICAgICBjb25zdCB7IGFscGhhX2xpLCBiZXRhX2xpIH0gPSBhd2FpdCB0b0xpc3QocGFyYW1ldGVyUGF0aCk7XG5cbiAgICAgICAgICAgIGZpbHRlcmVkU2VhcmNoTGlzdC5mb3JFYWNoKChrLCBqKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbmllcy5pbmRleE9mKGspO1xuICAgICAgICAgICAgICBub2RlX2FscGhhW2pdW3BdID0gYWxwaGFfbGlbaWR4XTtcbiAgICAgICAgICAgICAgbm9kZV9iZXRhW2pdW3BdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgICByZXR1cm4geyBub2RlX2FscGhhLCBub2RlX2JldGEsIGZpbHRlcmVkU2VhcmNoTGlzdCB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpO1xuXG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQWxwaGEgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5ub2RlX2FscGhhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRCZXRhID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQubm9kZV9iZXRhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRTZWFyY2hMaXN0ID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQuZmlsdGVyZWRTZWFyY2hMaXN0KTtcblxuICAgICAgICBzZXRQcmVwYXJlZERhdGEoeyBhbHBoYTogY29tYmluZWRBbHBoYSwgYmV0YTogY29tYmluZWRCZXRhLCBzZWFyY2hMaXN0OiBjb21iaW5lZFNlYXJjaExpc3QgfSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnl944Gu5qWt55WM44Gn44Gu56uL44Gh5L2N572uYCk7IC8vIOWIneacn+OCv+OCpOODiOODq+OCkuioreWumlxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+a6luWCmeS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDliJ3mnJ/jg6zjg7Pjg4Djg6rjg7PjgrDmmYLjgavjgoLjg4fjg7zjgr/jgpLmupblgplcbiAgICBwcmVwYXJlRGF0YSgpO1xuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1cGRhdGUgJiYgcHJlcGFyZWREYXRhKSB7XG4gICAgICBjb25zdCBwbG90RGF0YSA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4gKHtcbiAgICAgICAgeDogcHJlcGFyZWREYXRhLmFscGhhW2pdLFxuICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXSxcbiAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgICAgdGV4dDogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0sXG4gICAgICAgIHRleHRwb3NpdGlvbjogXCJ0b3AgbGVmdFwiLFxuICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgIGNvbG9yOiBjb2xvcm1hcFtJZHRvVG9waWNbdG9waWNbal1dXSxcbiAgICAgICAgICBzaXplOiA1LFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiBJZHRvVG9waWNbdG9waWNbal1dLFxuICAgICAgfSkpO1xuXG4gICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBwcmVwYXJlZERhdGEuc2VhcmNoTGlzdC5mbGF0TWFwKChrLCBqKSA9PlxuICAgICAgICBBcnJheSg0KS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgICB4OiBwcmVwYXJlZERhdGEuYWxwaGFbal1baSArIDFdLFxuICAgICAgICAgIHk6IHByZXBhcmVkRGF0YS5iZXRhW2pdW2kgKyAxXSxcbiAgICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgICAgeXJlZjogJ3knLFxuICAgICAgICAgIGF4cmVmOiAneCcsXG4gICAgICAgICAgYXlyZWY6ICd5JyxcbiAgICAgICAgICBheDogcHJlcGFyZWREYXRhLmFscGhhW2pdW2ldLFxuICAgICAgICAgIGF5OiBwcmVwYXJlZERhdGEuYmV0YVtqXVtpXSxcbiAgICAgICAgICBhcnJvd2NvbG9yOmNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY1tqXV1dLFxuICAgICAgICAgIGFycm93c2l6ZTogMS4yLFxuICAgICAgICAgIGFycm93d2lkdGg6IDEuMixcbiAgICAgICAgICBhcnJvd2hlYWQ6IDUsXG4gICAgICAgICAgc2hvd2Fycm93OiB0cnVlLFxuICAgICAgICB9KSlcbiAgICAgICk7XG5cbiAgICAgIHNldEZpZ0RhdGEocGxvdERhdGEpO1xuICAgICAgc2V0QW5ub3RhdGlvbnMocGxvdEFubm90YXRpb25zKTtcblxuICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHByZXBhcmVkRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiAgc3R5bGU9e3sgd2lkdGg6JzEwMHZoJyAsaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17ZmlnRGF0YX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMjAsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgICAgICAgICB4cmVmOiAncGFwZXInLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMS4xLFxuICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbm5vdGF0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICAgIHk6IDEuOSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuS8nee1seeahOOBquWIhumHjuOBq+WPluOCiue1hOOCk+OBp+OBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAxLjUsXG4gICAgICAgICAgICAgIHk6IDEuOSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuacquefpeOBruWIhumHjuOBq+aKleizh+OBl+OBpuOBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICAgIHk6IDAuMSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOeLrOiHqui3r+e3muOCkumAsuOBv+S8nee1seeahOOBquWIhumHjuOBq+WPluOCiue1hOOCk+OBp+OBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAxLjUsXG4gICAgICAgICAgICAgIHk6IDAuMSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOeLrOiHqui3r+e3muOCkumAsuOBv+acquefpeOBruWIhumHjuOBq+aKleizh+OBl+OBpuOBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG5cbiAgICAgICAgIFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi5paw6KaP5oCnXCIsXG4gICAgICAgICAgICByYW5nZTogWy0wLjEsIDIuMV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMCwgMSwgMl0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi6aCG5b+c5oCnXCIsXG4gICAgICAgICAgICB0aXRsZV9zdGFuZG9mZjoyNSwgICAvLyBZ6Lu444GL44KJ44Gu6Led6Zui77yI6KaL44KE44GZ44GP44GZ44KL44Gf44KB77yJXG4gICAgICAgICAgICByYW5nZTogWy0wLjEsIDIuMV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMCwgMSwgMl0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiAxMCwgYjogMTAsIGw6IDEwLCByOiAxMCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLjksXG4gICAgICAgICAgICB5OiAxLjksXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIydmhcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiNDUlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBlcnNvbkNvbXA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuY29uc3QgY29sb3JtYXAgPSB7J+m5v+WztuW7uuioreagquW8j+S8muekvic6J3JnYigyMjksIDEzNCwgNiknLCBcIuagquW8j+S8muekvuWkp+ael+e1hFwiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi5riF5rC05bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgXCLlpKfmiJDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIuagquW8j+S8muekvuerueS4reW3peWLmeW6l1wiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gIFwi5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+XCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuS6lOa0i+W7uuioreagquW8j+S8muekvlwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5qCq5byP5Lya56S+44OV44K444K/XCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gIFwi5oi455Sw5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigyMzcsIDEwMCwgOTApJywgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIjoncmdiKDE2NSwgMTcwLCAxNTMpJ307XG5cbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgbG9hZENvbXBhbmllcyA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgdG9MaXN0ID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuXG4gICAgY29uc3QgYWxwaGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgY29uc3QgYmV0YV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMV0pKTtcblxuICAgIHJldHVybiB7IGFscGhhX2xpLCBiZXRhX2xpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGFscGhhX2xpOiBbXSwgYmV0YV9saTogW10gfTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBlcnNvblRvcGljID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCwgb25DbGlja0RhdGF9KSA9PiB7XG4gIGNvbnN0IGFycm93X2NvbG9yID0gWycjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnXTtcbiAgY29uc3QgW2ZpZ0RhdGEsIHNldEZpZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYW5ub3RhdGlvbnMsIHNldEFubm90YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NvbXBhbnlMaXN0LCBzZXRDb21wYW55TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hMaXN0LCBzZXRTZWFyY2hMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCJ9O1xuXG4gIC8vIOWIneacn+ODh+ODvOOCv+OBruODreODvOODiVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiICYmIHRvcGljKSB7XG4gICAgICBjb25zdCB0YXJnZXRfaWQgPSB0b3BpYzsgLy8g44OI44OU44OD44KvSUTjga7oqK3lrppcbiAgICAgIGNvbnN0IGNvbHVtblBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRfaWR9L3NldHRpbmcvY29tcGFueS50eHRgO1xuXG4gICAgICBsb2FkQ29tcGFuaWVzKGNvbHVtblBhdGgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0Q29tcGFueUxpc3QoZGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGDmpa3nlYzlhoXjgafjga7kvIHmpa3jga7nq4vjgaHkvY3nva5gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljXSk7XG5cbiAgLy8g5qSc57Si5a++6LGh44Gu44OV44Kj44Or44K/44Oq44Oz44KwXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbXBhbnlMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNvbXBhbnlEaWN0ID0gY29tcGFueUxpc3QucmVkdWNlKChhY2MsIHZhbHVlLCBpZHgpID0+IHtcbiAgICAgICAgYWNjW3ZhbHVlXSA9IGlkeDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgY29uc3QgbmV3U2VhcmNoTGlzdCA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55IDogW2NvbXBhbnldO1xuICAgICAgc2V0U2VhcmNoTGlzdChuZXdTZWFyY2hMaXN0LmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSBpbiBjb21wYW55RGljdCkpO1xuICAgIH1cbiAgfSwgW2NvbXBhbnlMaXN0LCBjb21wYW55XSk7XG5cbiAgLy8g44OH44O844K/44Gu5o+P55S7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZSAmJiBzZWFyY2hMaXN0Lmxlbmd0aCA+IDAgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3Qgbm9kZV9hbHBoYSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuICAgICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4gaSApLm1hcCgocCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9wZXJzb25hL3Rlc3Rfb3B0aW1pemVfJHtwKzF9LnR4dGA7XG4gICAgICAgIHJldHVybiB0b0xpc3QocGFyYW1ldGVyUGF0aCkudGhlbigoeyBhbHBoYV9saSwgYmV0YV9saSB9KSA9PiB7XG4gICAgICAgICAgc2VhcmNoTGlzdC5mb3JFYWNoKChrLCBqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW55TGlzdC5pbmRleE9mKGspO1xuICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwXSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICBub2RlX2JldGFbal1bcF0gPSBiZXRhX2xpW2lkeF07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGxvdERhdGEgPSBzZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4gKHtcbiAgICAgICAgICB4OiBub2RlX2FscGhhW2pdLFxuICAgICAgICAgIHk6IG5vZGVfYmV0YVtqXSxcbiAgICAgICAgICBtb2RlOiBcImxpbmVzK21hcmtlcnMrdGV4dFwiLFxuICAgICAgICAgIHRleHQ6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdLFxuICAgICAgICAgIHRleHRwb3NpdGlvbjogXCJ0b3AgbGVmdFwiLFxuICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcm1hcFtrXSxcbiAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lOiBrLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uc3QgcGxvdEFubm90YXRpb25zID0gc2VhcmNoTGlzdC5mbGF0TWFwKChrLCBqKSA9PlxuICAgICAgICAgIEFycmF5KDQpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgICAgICAgICAgeDogbm9kZV9hbHBoYVtqXVtpICsgMV0sXG4gICAgICAgICAgICB5OiBub2RlX2JldGFbal1baSArIDFdLFxuICAgICAgICAgICAgeHJlZjogJ3gnLFxuICAgICAgICAgICAgeXJlZjogJ3knLFxuICAgICAgICAgICAgYXg6IG5vZGVfYWxwaGFbal1baV0sXG4gICAgICAgICAgICBheTogbm9kZV9iZXRhW2pdW2ldLFxuICAgICAgICAgICAgYXhyZWY6ICd4JyxcbiAgICAgICAgICAgIGF5cmVmOiAneScsXG4gICAgICAgICAgICBhcnJvd2NvbG9yOiBjb2xvcm1hcFtrXSxcbiAgICAgICAgICAgIGFycm93c2l6ZTogMS4yLFxuICAgICAgICAgICAgYXJyb3d3aWR0aDogMS4yLFxuICAgICAgICAgICAgYXJyb3doZWFkOiA1LFxuICAgICAgICAgICAgc2hvd2Fycm93OiB0cnVlLFxuICAgICAgICAgIH0pKVxuICAgICAgICApO1xuXG4gICAgICAgIHNldEZpZ0RhdGEocGxvdERhdGEpO1xuICAgICAgICBzZXRBbm5vdGF0aW9ucyhwbG90QW5ub3RhdGlvbnMpO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCBzZWFyY2hMaXN0LCBjb21wYW55TGlzdCwgdG9waWNdKTtcblxuICBjb25zdCBoYW5kbGVQZXJzb25hQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRzICYmIGV2ZW50LnBvaW50c1swXSkge1xuICAgIFxuICAgICAgY29uc29sZS5sb2coZXZlbnQucG9pbnRzWzBdW1wiZGF0YVwiXVtcIm5hbWVcIl0pXG4gICAgICBjb25zdCBjbGlja2RhdGEgPSBldmVudC5wb2ludHNbMF1bXCJkYXRhXCJdW1wibmFtZVwiXTsgLy8g44Kv44Oq44OD44Kv44GV44KM44Gf6YOo5YiG44Gu44Op44OZ44OrXG4gICAgICBvbkNsaWNrRGF0YShbY2xpY2tkYXRhXSk7IC8vIOimquOCs+ODs+ODneODvOODjeODs+ODiOOBq+ODqeODmeODq+OCkumAmuefpVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgIHN0eWxlPXt7IHdpZHRoOicxMDB2aCcgLGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgeHJlZjogJ3BhcGVyJyxcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB5OiAyLjIsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgICAgeTogMi4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuS8nee1seeahOOBquWIhumHjuOBq+WPluOCiue1hOOCk+OBp+OBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAxLjUsXG4gICAgICAgICAgICAgIHk6IDIuMDUsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgormnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgICB5OiAwLjA1LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgeTogMC4wNSxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOeLrOiHqui3r+e3muOCkumAsuOBv+acquefpeOBruWIhumHjuOBq+aKleizh+OBl+OBpuOBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG5cbiAgICAgICAgIFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi5paw6KaP5oCnXCIsXG4gICAgICAgICAgICByYW5nZTogWzAsIDJdLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAsIDEsIDJdLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6MjUsICAgLy8gWei7uOOBi+OCieOBrui3nembou+8iOimi+OChOOBmeOBj+OBmeOCi+OBn+OCge+8iVxuICAgICAgICAgICAgcmFuZ2U6IFswLCAyXSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlswLCAxLCAyXSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDEwLCBiOiAxMCwgbDogMTAsIHI6IDEwIH0sXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIHg6IDIsXG4gICAgICAgICAgICB5OiAyLFxuICAgICAgICAgICAgYmdjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgYm9yZGVyd2lkdGg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMnZoXCIsIHdpZHRoOiBcIjEwMHZoXCIsIGhlaWdodDogXCI0NXZoXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBlcnNvbmFDbGlja30gLy8g44Kv44Oq44OD44Kv44Kk44OZ44Oz44OI44KS6L+95YqgXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBlcnNvblRvcGljO1xuIiwiLy8gU2lkZWJhci5qc3hcbmltcG9ydCBSZWFjdCAseyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENvbCwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgU2lkZWJhciA9ICh7IG9uQXBwbHksIHZpc3VhbFR5cGUsIG9uVmlzdWFsVHlwZUNoYW5nZSwgdG9waWNMaXN0LCBjb21wYW55TGlzdCwgc2VsZWN0ZWRDb21wYW5pZXMsIHNlbGVjdGVkVG9waWNzLCBvbkNoYW5nZVRvcGljLCBvbkNoYW5nZUNvbXBhbnkgfSkgPT4ge1xuICBjb25zdCBbaW5wdXRUeXBlLCBzZXRJbnB1dFR5cGVdID0gdXNlU3RhdGUoW1wicmFkaW9cIixcImNoZWNrYm94XCJdKTsgLy8g5Yid5pyf5YCk44GvIFwiY2hlY2tib3hcIlxuICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIG9uVmlzdWFsVHlwZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZT09XCJvbmUtY29tcFwiKXtcbiAgICAgICAgc2V0SW5wdXRUeXBlKFtcImNoZWNrYm94XCIsXCJyYWRpb1wiXSl9XG4gICAgICBlbHNle1xuICAgICAgICBzZXRJbnB1dFR5cGUoW1wicmFkaW9cIixcImNoZWNrYm94XCJdKVxuICAgICAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0VHlwZSk7XG4gIH07XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wifTtcbiAgXG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgcGFkZGluZzogJzEwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdiZy1saWdodCcgfX0+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBmb250LWl0YWxpY1wiIHN0eWxlPXt7IGhlaWdodDogJzUlJyB9fT5cbiAgICAgICAgPENvbCBzbT17Nn0+XG4gICAgICAgICAgPGg1IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwJScgfX0gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgIOWPr+imluWMluadoeS7tlxuICAgICAgICAgIDwvaDU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNtPXs0fT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpZD1cImFwcGx5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHl9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNSUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZSByb3VuZGVkLXBpbGwgYmctZGFya1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg5Y+v6KaW5YyWXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIHsvKiBBY2NvcmRpb24gKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHRleHQtZGFuZ2VyIFwiIHN0eWxlPXt7IGhlaWdodDogJzgwJScgfX0+XG4gICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgey8qIFZpc3VhbGl6YXRpb24gVHlwZSAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIwXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPuWPr+imluWMluOCv+OCpOODlzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZCA9IFwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBteC0yXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPjHnpL7jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXgtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID4x44OI44OU44OD44Kv44Gr5rOo55uuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cbiAgICAgICAgICB7LyogVG9waWMgU2VsZWN0aW9uICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjFcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+VG9waWM8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIHt0b3BpY0xpc3QubWFwKCh0b3BpYykgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0b3BpY30+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aW5wdXRUeXBlWzBdfSBcbiAgICAgICAgICAgICAgICAgICAgaWQgPSB7dG9waWN9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkVG9waWNzLmluY2x1ZGVzKHRvcGljKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlVG9waWModG9waWMsaW5wdXRUeXBlWzBdKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dG9waWN9PntJZHRvVG9waWNbdG9waWNdfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG4gICAgICAgICAgey8qIENvbXBhbnkgU2VsZWN0aW9uICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjJcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+Q29tcGFueTwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAge2NvbXBhbnlMaXN0Lm1hcCgoY29tcGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb21wYW55fT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dFR5cGVbMV19IFxuICAgICAgICAgICAgICAgICAgICBpZCA9IHtjb21wYW55fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENvbXBhbmllcy5pbmNsdWRlcyhjb21wYW55KX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlQ29tcGFueShjb21wYW55LGlucHV0VHlwZVsxXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnknXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2NvbXBhbnl9Pntjb21wYW55fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbi8vIOODh+ODvOOCv+WPluW+l+mWouaVsFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgbG9hZENvbXBhbmllcyA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgUGxvdEJhckNoYXJ0QiA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIGNsaWNrZGF0YSwgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJGSeOBruWIhuW4g1wiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gNTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBjbGlja2RhdGEgfHwgdG9waWNbMF0gfHwgXCJkZWZhdWx0X3RvcGljXCI7IC8vIGBjbGlja2RhdGFg44KS5YSq5YWIXG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRJZH0vdHJlbmQvb3V0cHV0XyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGNvbXBhbnlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3NldHRpbmcvY29tcGFueS50eHRgO1xuICAgICAgICBjb25zdCBmaVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2ZpX3N1YmNsYXNzX3NwbGl0Lmpzb25gO1xuICAgICAgICAvLyDjg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgW29yaWdpbmFsLCBjb21wYW55TGlzdCwgZmlMaXN0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEocGF0aCksXG4gICAgICAgICAgbG9hZENvbXBhbmllcyhjb21wYW55UGF0aCksXG4gICAgICAgICAgZmV0Y2hEYXRhKGZpUGF0aCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICghY29tcGFueUxpc3QuaW5jbHVkZXMoY29tcGFueVswXSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke2NvbXBhbnlbMF19XCIgbm90IGZvdW5kLmApO1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29tcGFueeOBruODh+ODvOOCv+WPluW+l1xuICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBjb21wYW55TGlzdC5pbmRleE9mKGNvbXBhbnlbMF0pO1xuICAgICAgICBjb25zdCBjb21wYW55RGF0YSA9IG9yaWdpbmFsW2NvbXBhbnlJbmRleF07XG4gICAgICAgIGlmICghY29tcGFueURhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIGRhdGEgZm91bmQgZm9yIGNvbXBhbnkgaW5kZXggXCIke2NvbXBhbnlJbmRleH1cIi5gKTtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpTT07jg4fjg7zjgr/jga7mlbTlvaJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKGNvbXBhbnlEYXRhKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICBjYXRlZ29yeToga2V5LFxuICAgICAgICAgIHZhbHVlOiBrZXkgPT09IFwiXCIgPyAwIDogcGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDAgfHwwLCAvLyDlgKTjgpLmlbDlgKTjgavlpInmj5vvvIjjgarjgYTloLTlkIjjga8w77yJXG4gICAgICAgICAgc3VtbWFyaXplOiBmaUxpc3Rba2V5XSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBmb3JtYXR0ZWREYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtjb21wYW55WzBdfeOBrkZJ44Gu5YiG5biDYCk7XG4gICAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGBjbGlja2RhdGFg44Gu5YCk44GM5aSJ5YyW44GX44Gf44GL44KS5piO56S655qE44Gr5q+U6LyDXG4gICAgaWYgKFxuICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiICYmXG4gICAgICAodXBkYXRlIHx8IGNoYXJ0RGF0YS5sZW5ndGggPT09IDAgfHwgY2xpY2tkYXRhKVxuICAgICkge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBKU09OLnN0cmluZ2lmeShjbGlja2RhdGEpLCB1cGRhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksIC8vIOaoquWQkeOBjeajkuOCsOODqeODleeUqOOBruWApO+8iOmAhumghu+8iVxuICAgICAgICAgICAgeTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSkucmV2ZXJzZSgpLCAvLyDjgqvjg4bjgrTjg6rvvIjpgIbpoIbvvIlcbiAgICAgICAgICAgIGN1c3RvbWRhdGE6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3VtbWFyaXplKS5yZXZlcnNlKCksIC8vIHN1bW1hcml6ZSDjgpIgY3VzdG9tZGF0YSDjgavmuKHjgZlcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIiwgLy8g5qiq5ZCR44GN5qOS44Kw44Op44OVXG4gICAgICAgICAgICBtYXJrZXI6IHsgY29sb3I6IFwicm95YWxibHVlXCIgfSwgLy8g5qOS44Gu6ImyXG4gICAgICAgICAgICBob3ZlcnRlbXBsYXRlOlxuICAgICAgICAgICAgYOiqrOaYjjogJXtjdXN0b21kYXRhfTxicj4lOiAle3g6LjJmfSUgPGV4dHJhPjwvZXh0cmE+YCwgLy8gY3VzdG9tZGF0YSDjgpLlj4LnhadcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpY2tzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkZJXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiAzNSwgbDogODAsIHI6IDUwIH0sXG4gICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgYWxpZ246XCJsZWZ0XCIsXG4gICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgIHNpemU6IDExLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7jg5Xjgqnjg7Pjg4jjgrXjgqTjgrpcbiAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIiwgLy8g44OV44Kp44Oz44OI44Gu6ImyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmdjb2xvcjogXCJsaWdodHllbGxvd1wiLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7og4zmma/oibJcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcImdyYXlcIiwgLy8g44OE44O844Or44OB44OD44OX44Gu5p6g57ea6ImyXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cblxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/5Y+W5b6X6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuXG5cbmNvbnN0IFBsb3RCYXJDaGFydEEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDIVwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gNTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b3BpY1swXTsgLy8gY2xpY2tkYXRh44KS5YSq5YWIXG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRJZH0vdHJlbmQvb3V0cHV0X3RvcGljXyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGZpUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvZmlfc3ViY2xhc3Nfc3BsaXQuanNvbmA7XG5cbiAgICAgICAgLy8g44OH44O844K/44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IFtvcmlnaW5hbCwgZmlMaXN0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEocGF0aCksXG4gICAgICAgICAgZmV0Y2hEYXRhKGZpUGF0aCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYVwiLG9yaWdpbmFsKTtcbiBcblxuICAgICAgICAvLyBKU09O44OH44O844K/44Gu5pW05b2iXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBPYmplY3QuZW50cmllcyhvcmlnaW5hbCkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgXG4gICAgICAgICAgY2F0ZWdvcnk6IGtleSxcbiAgICAgICAgICB2YWx1ZToga2V5ID09PSBcIlwiID8gMCA6IHBhcnNlRmxvYXQodmFsdWUpICogMTAwIHx8IDAsIFxuICAgICAgICAgIHN1bW1hcml6ZTogZmlMaXN0W2tleV0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhXCIsZm9ybWF0dGVkRGF0YSk7XG5cblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLpmY3poIbjgavjgr3jg7zjg4jjgZfjgabkuIrkvY0xMOS7tuOCkuWPluW+l1xuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZm9ybWF0dGVkRGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYEZJ44Gu5YiG5biDYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYXJ0RGF0YSk7XG4gICAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiICYmICh1cGRhdGUgfHwgY2hhcnREYXRhLmxlbmd0aCA9PT0gMCApKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIHVwZGF0ZV0pOyAvLyBjbGlja2RhdGEg44KS5L6d5a2Y6Zai5L+C44Gr6L+95YqgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgeTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgY3VzdG9tZGF0YTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5zdW1tYXJpemUpLnJldmVyc2UoKSwgLy8gc3VtbWFyaXplIOOCkiBjdXN0b21kYXRhIOOBq+a4oeOBmVxuXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHsgY29sb3I6IFwicm95YWxibHVlXCIgfSxcbiAgICAgICAgICAgIGhvdmVydGVtcGxhdGU6XG4gICAgICAgICAgICBg6Kqs5piOOiAle2N1c3RvbWRhdGF9PGJyPiU6ICV7eDouMmZ9JSA8ZXh0cmE+PC9leHRyYT5gLCAvLyBjdXN0b21kYXRhIOOCkuWPgueFp1xuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGlja3N1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBhbGlnbjpcImxlZnRcIixcbiAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgc2l6ZTogMTEsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruODleOCqeODs+ODiOOCteOCpOOCulxuICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLCAvLyDjg5Xjgqnjg7Pjg4jjga7oibJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImxpZ2h0eWVsbG93XCIsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruiDjOaZr+iJslxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwiZ3JheVwiLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7mnqDnt5roibJcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRBO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteV9hcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F1dGgwX2F1dGgwLXJlYWN0X2Rpc3RfYXV0aDAtcmVhY3RfZXNtX2pzLW5vZGVfbW9kdWxlc19yZWFjdC1ib290c3RyYXBfZS05NGQ1ZjBcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiU2lkZWJhciIsIkNvbnRlbnQiLCJ1c2VBdXRoMCIsIkFwcCIsImxvZ2luV2l0aFJlZGlyZWN0IiwibG9nb3V0IiwiaXNBdXRoZW50aWNhdGVkIiwidXNlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlTG9naW4iLCJjb25uZWN0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsImFycm93Q29sb3IiLCJjb21wYW55TGlzdCIsInRvcGljTGlzdCIsInZpc3VhbFR5cGUiLCJzZXRWaXN1YWxUeXBlIiwiaXNBcHBsaWVkIiwic2V0SXNBcHBsaWVkIiwic2VsZWN0ZWRDb21wYW5pZXMiLCJzZXRTZWxlY3RlZENvbXBhbmllcyIsInNlbGVjdGVkVG9waWNzIiwic2V0U2VsZWN0ZWRUb3BpY3MiLCJoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVBcHBseSIsInRvZ2dsZVNlbGVjdGlvbiIsIml0ZW0iLCJzZXRTZWxlY3RlZCIsImJ1dHRvbXR5cGUiLCJwcmV2U2VsZWN0ZWQiLCJpbmNsdWRlcyIsImZpbHRlciIsImkiLCJDb21wYW55Q2hlY2tib3hDaGFuZ2UiLCJjb21wYW55IiwiVG9waWNDaGVja2JveENoYW5nZSIsInRvcGljIiwicmVzZXRJc0FwcGxpZWQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJmbHVpZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJGcmFnbWVudCIsIm1kIiwib25BcHBseSIsIm9uVmlzdWFsVHlwZUNoYW5nZSIsIm9uQ2hhbmdlVG9waWMiLCJvbkNoYW5nZUNvbXBhbnkiLCJzdHlsZSIsImhlaWdodCIsInBsb3QiLCJyZXNldEFwcGx5IiwiQ2FyZCIsIlBsb3RQaWVBIiwiUGxvdFBpZUIiLCJQbG90UGVyc29uYUNvbXAiLCJQbG90UGVyc29uYVRvcGljIiwiUGxvdEJhckNoYXJ0QSIsIlBsb3RCYXJDaGFydEIiLCJQcm9wb3NlZERhdGEiLCJnZXRDYXJkRGF0YSIsIlByb3Bvc2VkVmlzdWFsaXplIiwiX3JlZiIsImNsaWNrRGF0YSIsInNldENsaWNrRGF0YSIsImNsaWNrQ29tcGFueURhdGEiLCJzZXRDbGlja0NvbXBhbnlEYXRhIiwiaGFuZGxlUGllQ2hhcnRDbGljayIsImRhdGEiLCJsb2ciLCJoYW5kbGVQZXJzb25hQ2xpY2siLCJjYXJkRGF0YSIsInNldENhcmREYXRhIiwidXBkYXRlIiwib25SZW5kZXJlZCIsIm9uQ2xpY2tEYXRhIiwibGF5b3V0IiwidGl0bGUiLCJ3aWR0aCIsImNvbmZpZyIsInJlc3BvbnNpdmUiLCJjbGlja2RhdGEiLCJwcm9wb3NlZERhdGEiLCJzZXRQcm9wb3NlZERhdGEiLCJzZXRFcnJvciIsImZldGNoRGF0YSIsImRhdGFQYXRoIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImpzb25EYXRhIiwianNvbiIsImNvbXBhbnlEYXRhIiwid2FybiIsInRvcGljRGF0YSIsImVyciIsInJlbmRlckNhcmQiLCJkaXJlY3Rpb24iLCJ2YWx1ZXMiLCJsYWJlbCIsImJhc2VDb2xvck1hcCIsInVwcmlnaHQiLCJ1cGxlZnQiLCJkb3ducmlnaHQiLCJkb3dubGVmdCIsImJhc2VDb2xvciIsImNhcmRBbHBoYSIsImNhcmRCYWNrZ3JvdW5kQ29sb3IiLCJyZXBsYWNlIiwiTWF0aCIsIm1pbiIsImtleSIsImJhY2tncm91bmRDb2xvciIsIkJvZHkiLCJUaXRsZSIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJhbHBoYSIsIml0ZW1CYWNrZ3JvdW5kQ29sb3IiLCJtYXgiLCJIZWFkZXIiLCJjb2xvciIsInRleHRBbGlnbiIsIlJlYWN0RE9NIiwiQXV0aDBQcm92aWRlciIsImRvbWFpbiIsImNsaWVudElkIiwicmVuZGVyIiwiU3RyaWN0TW9kZSIsImF1dGhvcml6YXRpb25QYXJhbXMiLCJyZWRpcmVjdF91cmkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlUmVmIiwiUGxvdCIsImNvbG9ybWFwIiwidXJsIiwic3RhdHVzIiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwiZ2V0IiwidGV4dCIsInNwbGl0IiwibGluZSIsInRyaW0iLCJwcm9jZXNzU3BhcnNlRGF0YSIsInNwYXJzZURhdGEiLCJudW1Sb3dzIiwiZW50cnkiLCJyb3ciLCJudW1Db2xzIiwiY29sIiwibWF0cml4IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZmlsbCIsImZvckVhY2giLCJyZWR1Y2UiLCJzdW0iLCJfcmVmMiIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsInNldFRpdGxlIiwiYWxsVG9waWMiLCJJZHRvVG9waWMiLCJUb3BpY3RvSWQiLCJkYXRhQ2FjaGUiLCJjb21wYW5pZXMiLCJsb2FkRGF0YSIsImFsbFRvcGljc0RhdGEiLCJQcm9taXNlIiwiYWxsIiwidGFyZ2V0X2lkIiwidGltZSIsImNvbXBhbnlVcmwiLCJzcGFyc2VEYXRhVXJsIiwiY3VycmVudCIsIm5vcm1hbGl6ZVN0cmluZyIsInN0ciIsIm5vcm1hbGl6ZSIsInNhbml0aXplZENvbXBhbmllcyIsInNhbml0aXplZENvbXBhbnkiLCJyb3dTdW1zIiwiY29tcGFueUluZGV4IiwiaW5kZXhPZiIsImZpbHRlcmVkRGF0YSIsInRvdGFsVmFsdWUiLCJub3JtYWxpemVkRGF0YSIsImNhdGVnb3J5Iiwic29ydCIsImEiLCJiIiwiaGFuZGxlUGxvdENsaWNrIiwiZXZlbnQiLCJwb2ludHMiLCJ0b3BpY2lkIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidHlwZSIsImxhYmVscyIsIlN0cmluZyIsIm1hcmtlciIsImNvbG9ycyIsInNob3dsZWdlbmQiLCJwbG90X2JnY29sb3IiLCJwYXBlcl9iZ2NvbG9yIiwibWFyZ2luIiwidCIsImwiLCJyIiwiZmV0Y2hUZXh0RGF0YSIsImxvYWRDaGFydERhdGEiLCJ0YXJnZXRJZCIsImRhdGFVcmwiLCJjb2x1bW5VcmwiLCJzb3J0ZWREYXRhIiwibG9hZENvbXBhbmllcyIsInRvTGlzdCIsImxpbmVzIiwiYWxwaGFfbGkiLCJwYXJzZUZsb2F0IiwiYmV0YV9saSIsIlBsb3RQZXJzb25Db21wIiwiYXJyb3dfY29sb3IiLCJwcmVwYXJlZERhdGEiLCJzZXRQcmVwYXJlZERhdGEiLCJmaWdEYXRhIiwic2V0RmlnRGF0YSIsImFubm90YXRpb25zIiwic2V0QW5ub3RhdGlvbnMiLCJwcmVwYXJlRGF0YSIsImFsbFByb21pc2VzIiwiY29sdW1uUGF0aCIsImNvbXBhbnlEaWN0IiwiYWNjIiwiaWR4IiwibmV3U2VhcmNoTGlzdCIsImlzQXJyYXkiLCJmaWx0ZXJlZFNlYXJjaExpc3QiLCJub2RlX2FscGhhIiwibm9kZV9iZXRhIiwicHJvbWlzZXMiLCJfIiwiaiIsInAiLCJwYXJhbWV0ZXJQYXRoIiwiayIsInJlc3VsdHMiLCJjb21iaW5lZEFscGhhIiwiZmxhdE1hcCIsInJlc3VsdCIsImNvbWJpbmVkQmV0YSIsImNvbWJpbmVkU2VhcmNoTGlzdCIsImJldGEiLCJzZWFyY2hMaXN0IiwicGxvdERhdGEiLCJ4IiwieSIsIm1vZGUiLCJ0ZXh0cG9zaXRpb24iLCJzeW1ib2wiLCJzaXplIiwibmFtZSIsInBsb3RBbm5vdGF0aW9ucyIsInhyZWYiLCJ5cmVmIiwiYXhyZWYiLCJheXJlZiIsImF4IiwiYXkiLCJhcnJvd2NvbG9yIiwiYXJyb3dzaXplIiwiYXJyb3d3aWR0aCIsImFycm93aGVhZCIsInNob3dhcnJvdyIsImZvbnQiLCJ4YW5jaG9yIiwieWFuY2hvciIsInhheGlzIiwicmFuZ2UiLCJsaW5lY29sb3IiLCJsaW5ld2lkdGgiLCJncmlkY29sb3IiLCJncmlkd2lkdGgiLCJncmlkZGFzaCIsInRpY2ttb2RlIiwidGlja3ZhbHMiLCJ0aWNrdGV4dCIsInplcm9saW5lIiwieWF4aXMiLCJ0aXRsZV9zdGFuZG9mZiIsImxlZ2VuZCIsImJnY29sb3IiLCJib3JkZXJjb2xvciIsImJvcmRlcndpZHRoIiwiUGxvdFBlcnNvblRvcGljIiwic2V0Q29tcGFueUxpc3QiLCJzZXRTZWFyY2hMaXN0IiwidGhlbiIsIkFjY29yZGlvbiIsIkJ1dHRvbiIsImlucHV0VHlwZSIsInNldElucHV0VHlwZSIsImhhbmRsZVJhZGlvQ2hhbmdlIiwidGFyZ2V0IiwicGFkZGluZyIsInNtIiwiZGVmYXVsdEFjdGl2ZUtleSIsIkl0ZW0iLCJldmVudEtleSIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImh0bWxGb3IiLCJmb250U2l6ZSIsInBhdGgiLCJjb21wYW55UGF0aCIsImZpUGF0aCIsIm9yaWdpbmFsIiwiZmlMaXN0IiwiZm9ybWF0dGVkRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJzdW1tYXJpemUiLCJKU09OIiwic3RyaW5naWZ5IiwicmV2ZXJzZSIsImN1c3RvbWRhdGEiLCJvcmllbnRhdGlvbiIsImhvdmVydGVtcGxhdGUiLCJtaXJyb3IiLCJ0aWNrc3VmZml4IiwiaG92ZXJsYWJlbCIsImFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==