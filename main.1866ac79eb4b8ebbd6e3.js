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
  const topicList = ['0', '1', '2', '3', '5', '6', '7', '8', '9', '11', "15", "17"];
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
    "5": "トンネル測量",
    "15": "照明システム",
    "17": "壁面緑化"
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
    "トンネル測量": "5",
    "照明システム": "15",
    "壁面緑化": "17"
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
    "5": "トンネル測量",
    "15": "照明システム",
    "17": "壁面緑化"
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
    "11": "掘削装置",
    "10": "建築設計",
    "5": "トンネル測量",
    "15": "照明システム",
    "17": "壁面緑化"
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
    "掘削装置": 'rgb(118, 78, 159)',
    "照明システム": 'rgb(255, 127, 14)',
    "壁面緑化": 'rgb(153, 153, 153)'
  };
  const arrow_color = ['#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF'];
  const [preparedData, setPreparedData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [figData, setFigData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [annotations, setAnnotations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("企業の立ち位置");
  const [authorData, setAuthorData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
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
    const loadAuthorData = async () => {
      if (Array.isArray(company) && company.includes("株式会社熊谷組") || company === "株式会社熊谷組") {
        try {
          const promises = (topic || ["default_topic"]).map(async topicId => {
            const authorPath = `${"/my-app"}/data/visualize_data/topic${topicId}/persona/kumagai_topic_author.json`;
            const response = await fetch(authorPath);
            if (!response.ok) {
              throw new Error(`著者データの読み込みに失敗: ${response.status}`);
            }
            const data = await response.json();

            // 年度とペルソナの対応マップ
            const yearToPersona = {
              "2021": "1",
              "2019": "2",
              "2017": "3",
              "2015": "4",
              "2013": "5"
            };

            // 各ペルソナのデータを整形
            const personaData = {};
            Object.entries(yearToPersona).forEach(_ref2 => {
              let [year, personaNum] = _ref2;
              const yearData = data[year] || {};

              // 空のオブジェクトかどうかをチェック
              if (Object.keys(yearData).length === 0) {
                personaData[`persona_${personaNum}`] = {
                  authors: '出願者なし',
                  year: year
                };
              } else {
                // データがある場合は上位5件を取得
                const topAuthors = Object.entries(yearData).slice(0, 5).map(_ref3 => {
                  let [author, count] = _ref3;
                  return `${author}(${count}件)`;
                });
                personaData[`persona_${personaNum}`] = {
                  authors: topAuthors.join(', '),
                  year: year
                };
              }
            });
            return {
              topicId,
              data: personaData
            };
          });
          const results = await Promise.all(promises);
          const authorDataMap = {};
          results.forEach(_ref4 => {
            let {
              topicId,
              data
            } = _ref4;
            authorDataMap[topicId] = data;
          });
          setAuthorData(authorDataMap);
        } catch (error) {
          console.error("著者データの読み込みエラー:", error);
        }
      }
    };
    loadAuthorData();
  }, [company, topic]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (update && preparedData) {
      const plotData = preparedData.searchList.map((k, j) => {
        const currentTopic = topic[j];
        const personaToYear = {
          "1": "2021",
          "2": "2019",
          "3": "2017",
          "4": "2015",
          "5": "2013"
        };
        const hoverTexts = ["1", "2", "3", "4", "5"].map(num => {
          const yearText = `${personaToYear[num]}年`;
          if (k === "株式会社熊谷組" && authorData[currentTopic] && authorData[currentTopic][`persona_${num}`]) {
            const authorInfo = authorData[currentTopic][`persona_${num}`];
            return `(${yearText})<br>著者: ${authorInfo.authors}`;
          }
          return ` (${yearText})`;
        });
        return {
          x: preparedData.alpha[j],
          y: preparedData.beta[j],
          mode: "lines+markers+text",
          text: ["1", "2", "3", "4", "5"],
          textposition: "top left",
          hovertext: hoverTexts,
          hoverinfo: "text",
          hoverlabel: {
            align: 'left',
            bgcolor: 'white',
            bordercolor: 'gray',
            font: {
              size: 12
            }
          },
          marker: {
            symbol: 'circle',
            color: colormap[IdtoTopic[topic[j]]],
            size: 5
          },
          name: IdtoTopic[topic[j]]
        };
      });
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
  }, [update, preparedData, authorData]);
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
        x: 0.5,
        y: 0.95,
        xanchor: 'center'
      },
      annotations: [{
        x: 0.5,
        y: 1.8,
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
        y: 1.8,
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
        y: 0.2,
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
        y: 0.2,
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
        range: [0.1, 1.9],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [0.1, 1, 1.9],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      yaxis: {
        title: "順応性",
        title_standoff: 25,
        // Y軸からの距離（見やすくするため）
        range: [0.1, 1.9],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [0.1, 1, 1.9],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      margin: {
        t: 25,
        b: 15,
        l: 15,
        r: 20
      },
      showlegend: true,
      legend: {
        x: 1,
        y: 1,
        bgcolor: 'rgba(255,255,255,0.5)',
        bordercolor: 'gray',
        borderwidth: 1
      },
      hoverdistance: 5,
      hovermode: 'closest',
      hoverlabel: {
        namelength: -1 // 名前の長さ制限を解除
      }
    },
    config: {
      responsive: true,
      displayModeBar: false // ツールバーを非表示に
    },
    style: {
      marginTop: "2vh",
      width: "100vh",
      height: "45vh"
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
  const [authorData, setAuthorData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
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
    "5": "トンネル測量",
    "15": "照明システム",
    "17": "壁面緑化"
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

  // 著者データをロードする新しいuseEffect
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadAuthorData = async () => {
      if (Array.isArray(company) && company.includes("株式会社熊谷組") || company === "株式会社熊谷組") {
        try {
          const authorPath = `${"/my-app"}/data/visualize_data/topic${topic}/persona/kumagai_topic_author.json`;
          const response = await fetch(authorPath);
          if (!response.ok) {
            throw new Error(`著者データの読み込みに失敗: ${response.status}`);
          }
          const data = await response.json();

          // 年度とペルソナの対応マップ
          const yearToPersona = {
            "2021": "1",
            "2019": "2",
            "2017": "3",
            "2015": "4",
            "2013": "5"
          };

          // 各ペルソナのデータを整形
          const personaData = {};
          Object.entries(yearToPersona).forEach(_ref2 => {
            let [year, personaNum] = _ref2;
            const yearData = data[year] || {};

            // 空のオブジェクトかどうかをチェック
            if (Object.keys(yearData).length === 0) {
              personaData[`persona_${personaNum}`] = {
                authors: '出願者なし',
                year: year
              };
            } else {
              // データがある場合は上位5件を取得
              const topAuthors = Object.entries(yearData).slice(0, 5).map(_ref3 => {
                let [author, count] = _ref3;
                return `${author}(${count}件)`;
              });
              personaData[`persona_${personaNum}`] = {
                authors: topAuthors.join(', '),
                year: year
              };
            }
          });
          setAuthorData(personaData);
        } catch (error) {
          console.error("著者データの読み込みエラー:", error);
        }
      }
    };
    loadAuthorData();
  }, [company, topic]);

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
        return toList(parameterPath).then(_ref4 => {
          let {
            alpha_li,
            beta_li
          } = _ref4;
          searchList.forEach((k, j) => {
            const idx = companyList.indexOf(k);
            node_alpha[j][p] = alpha_li[idx];
            node_beta[j][p] = beta_li[idx];
          });
        });
      });
      Promise.all(promises).then(() => {
        const personaToYear = {
          "1": "2021",
          "2": "2019",
          "3": "2017",
          "4": "2015",
          "5": "2013"
        };
        const plotData = searchList.map((k, j) => {
          const hoverTexts = ["1", "2", "3", "4", "5"].map(num => {
            const yearText = `${personaToYear[num]}年`;
            if (k === "株式会社熊谷組" && authorData[`persona_${num}`]) {
              return `(${yearText})<br>著者: ${authorData[`persona_${num}`].authors}`;
            }
            return `(${yearText})`;
          });
          return {
            x: node_alpha[j],
            y: node_beta[j],
            mode: "lines+markers+text",
            text: ["1", "2", "3", "4", "5"],
            textposition: "top left",
            hovertext: hoverTexts,
            hoverinfo: "text",
            hoverlabel: {
              align: 'left',
              bgcolor: 'white',
              bordercolor: 'gray',
              font: {
                size: 12
              },
              xanchor: 'right',
              // ホバーのx位置
              yanchor: 'bottom' // ホバーのy位置
            },
            marker: {
              symbol: 'circle',
              color: colormap[k],
              size: 5
            },
            name: k
          };
        });
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
  }, [update, searchList, companyList, topic, authorData]);
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
        x: 0.5,
        y: 0.95,
        xanchor: 'center'
      },
      annotations: [{
        x: 0.5,
        y: 1.8,
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
        y: 1.8,
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
        y: 0.2,
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
        y: 0.2,
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
        range: [0.1, 1.9],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [0.1, 1, 1.9],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      yaxis: {
        title: "順応性",
        title_standoff: 25,
        // Y軸からの距離（見やすくするため）
        range: [0.1, 1.9],
        linecolor: 'gray',
        linewidth: 1,
        gridcolor: 'lightgrey',
        gridwidth: 1,
        griddash: 'dot',
        tickmode: "array",
        tickvals: [0.1, 1, 1.9],
        ticktext: ["低", "", "高"],
        zeroline: false
      },
      margin: {
        t: 25,
        b: 15,
        l: 15,
        r: 20
      },
      showlegend: true,
      legend: {
        x: 1,
        y: 1,
        bgcolor: 'rgba(255,255,255,0.5)',
        bordercolor: 'gray',
        borderwidth: 1
      },
      hoverdistance: 5,
      hovermode: 'closest',
      hoverlabel: {
        namelength: -1
      }
    },
    config: {
      responsive: true,
      displayModeBar: false
    },
    style: {
      marginTop: "2vh",
      width: "100vh",
      height: "45vh"
    },
    onClick: handlePersonaClick
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
    "5": "トンネル測量",
    "15": "照明システム",
    "17": "壁面緑化"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xODY2YWM3OWViNGI4ZWJiZDZlMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0c7QUFDbEI7QUFDQTtBQUNVO0FBRTlDLE1BQU1TLEdBQUcsR0FBR0EsQ0FBQSxLQUFNO0VBQ2hCLE1BQU07SUFBRUMsaUJBQWlCO0lBQUVDLE1BQU07SUFBRUMsZUFBZTtJQUFFQztFQUFLLENBQUMsR0FBR0wsNERBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN6RSxNQUFNLENBQUNNLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdkLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQzVDLE1BQU0sQ0FBQ2UsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBRTVDLE1BQU1pQixXQUFXLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO0lBQzlCLElBQUk7TUFDRixNQUFNUixpQkFBaUIsQ0FBQztRQUN0QlMsVUFBVSxFQUFFLGtDQUFrQztRQUM5Q0wsUUFBUTtRQUNSRTtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxPQUFPSSxLQUFLLEVBQUU7TUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFQSxLQUFLLENBQUNFLE9BQU8sQ0FBQztJQUMxQztFQUNGLENBQUM7RUFFRCxNQUFNQyxVQUFVLEdBQUcsQ0FDakIsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFDckQsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FDdEQ7RUFDRCxNQUFNQyxXQUFXLEdBQUcsQ0FDbEIsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUM3QyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUM1QyxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQzdDO0VBQ0QsTUFBTUMsU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUM7RUFFL0UsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHMUIsK0NBQVEsQ0FBQyxXQUFXLENBQUM7RUFDekQsTUFBTSxDQUFDMkIsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzVCLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0VBQzdDLE1BQU0sQ0FBQzZCLGlCQUFpQixFQUFFQyxvQkFBb0IsQ0FBQyxHQUFHOUIsK0NBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0VBQ3ZFLE1BQU0sQ0FBQytCLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR2hDLCtDQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUUzRCxNQUFNaUMsc0JBQXNCLEdBQUlDLEtBQUssSUFBSztJQUN4Q1IsYUFBYSxDQUFDUSxLQUFLLENBQUM7RUFDdEIsQ0FBQztFQUVELE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3hCUCxZQUFZLENBQUMsQ0FBQyxDQUFDO0VBQ2pCLENBQUM7RUFFRCxNQUFNUSxlQUFlLEdBQUdBLENBQUNDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEtBQUs7SUFDekQsSUFBSUEsVUFBVSxLQUFLLFVBQVUsRUFBRTtNQUM3QkQsV0FBVyxDQUFFRSxZQUFZLElBQ3ZCQSxZQUFZLENBQUNDLFFBQVEsQ0FBQ0osSUFBSSxDQUFDLEdBQ3ZCRyxZQUFZLENBQUNFLE1BQU0sQ0FBRUMsQ0FBQyxJQUFLQSxDQUFDLEtBQUtOLElBQUksQ0FBQyxHQUN0QyxDQUFDLEdBQUdHLFlBQVksRUFBRUgsSUFBSSxDQUM1QixDQUFDO0lBQ0gsQ0FBQyxNQUFNO01BQ0xDLFdBQVcsQ0FBQyxDQUFDRCxJQUFJLENBQUMsQ0FBQztJQUNyQjtFQUNGLENBQUM7RUFFRCxNQUFNTyxxQkFBcUIsR0FBR0EsQ0FBQ0MsT0FBTyxFQUFFTixVQUFVLEtBQUs7SUFDckRILGVBQWUsQ0FBQ1MsT0FBTyxFQUFFZixvQkFBb0IsRUFBRVMsVUFBVSxDQUFDO0VBQzVELENBQUM7RUFFRCxNQUFNTyxtQkFBbUIsR0FBR0EsQ0FBQ0MsS0FBSyxFQUFFUixVQUFVLEtBQUs7SUFDakRILGVBQWUsQ0FBQ1csS0FBSyxFQUFFZixpQkFBaUIsRUFBRU8sVUFBVSxDQUFDO0VBQ3ZELENBQUM7RUFFRHRDLGdEQUFTLENBQUMsTUFBTTtJQUNkNkIsb0JBQW9CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQ0UsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUMxQixDQUFDLEVBQUUsQ0FBQ1AsVUFBVSxDQUFDLENBQUM7RUFFaEIsTUFBTXVCLGNBQWMsR0FBR0EsQ0FBQSxLQUFNO0lBQzNCcEIsWUFBWSxDQUFDLENBQUMsQ0FBQztFQUNqQixDQUFDO0VBRUQsb0JBQ0U3QiwwREFBQSxDQUFDRyx1REFBUztJQUFDZ0QsRUFBRSxFQUFDLGVBQWU7SUFBQ0MsS0FBSztJQUFDQyxTQUFTLEVBQUM7RUFBVSxnQkFDdERyRCwwREFBQSxDQUFDSSx1REFBRyxRQUNELENBQUNRLGVBQWU7RUFBQTtFQUFLO0VBQ3BCWiwwREFBQSxDQUFDSyx1REFBRyxxQkFDRkwsMERBQUEsMkJBQ0VBLDBEQUFBLGFBQUksd0RBQWEsQ0FBQyxlQUNsQkEsMERBQUE7SUFBUXFELFNBQVMsRUFBQyxpQkFBaUI7SUFBQ0MsT0FBTyxFQUFFcEM7RUFBWSxHQUFDLDBCQUVsRCxDQUNMLENBQ0YsQ0FBQztFQUFBO0VBQ0Y7RUFDSmxCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUVFQSwwREFBQSxDQUFDSyx1REFBRztJQUFDbUQsRUFBRSxFQUFFLENBQUU7SUFBQ0gsU0FBUyxFQUFDO0VBQVksZ0JBQ2hDckQsMERBQUEsQ0FBQ00sb0RBQU87SUFDTm1ELE9BQU8sRUFBRXJCLFdBQVk7SUFDckJWLFVBQVUsRUFBRUEsVUFBVztJQUN2QmdDLGtCQUFrQixFQUFFeEIsc0JBQXVCO0lBQzNDVCxTQUFTLEVBQUVBLFNBQVU7SUFDckJELFdBQVcsRUFBRUEsV0FBWTtJQUN6Qk0saUJBQWlCLEVBQUVBLGlCQUFrQjtJQUNyQ0UsY0FBYyxFQUFFQSxjQUFlO0lBQy9CMkIsYUFBYSxFQUFFWixtQkFBb0I7SUFDbkNhLGVBQWUsRUFBRWY7RUFBc0IsQ0FDeEMsQ0FDRSxDQUFDLGVBR043QywwREFBQSxDQUFDSyx1REFBRztJQUFDbUQsRUFBRSxFQUFFLENBQUU7SUFBQ0gsU0FBUyxFQUFDLFlBQVk7SUFBQ1EsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFRO0VBQUUsZ0JBQzVEOUQsMERBQUEsQ0FBQ08sb0RBQU87SUFDTndELElBQUksRUFBRW5DLFNBQVU7SUFDaEJGLFVBQVUsRUFBRUEsVUFBVztJQUN2QnNCLEtBQUssRUFBRWhCLGNBQWU7SUFDdEJjLE9BQU8sRUFBRWhCLGlCQUFrQjtJQUMzQmtDLFVBQVUsRUFBRWY7RUFBZSxDQUM1QixDQUVFLENBQ0wsQ0FFRCxDQUNJLENBQUM7QUFFaEIsQ0FBQztBQUVELGlFQUFleEMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSCtCO0FBQ1c7QUFDeEI7QUFDUTtBQUNLO0FBQ0U7QUFFTDtBQUNEO0FBQ2lCLENBQUM7QUFDYjtBQU1sRCxNQUFNRixPQUFPLEdBQUdvRSxJQUFBLElBQWdEO0VBQUEsSUFBL0M7SUFBQ1osSUFBSTtJQUFDckMsVUFBVTtJQUFDc0IsS0FBSztJQUFDRixPQUFPO0lBQUNrQjtFQUFVLENBQUMsR0FBQVcsSUFBQTtFQUl2RCxNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUc1RSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlDLE1BQU0sQ0FBQzZFLGdCQUFnQixFQUFFQyxtQkFBbUIsQ0FBQyxHQUFHOUUsK0NBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFNUQsTUFBTStFLG1CQUFtQixHQUFJQyxJQUFJLElBQUs7SUFDcEM1RCxPQUFPLENBQUM2RCxHQUFHLENBQUMsYUFBYSxFQUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xDSixZQUFZLENBQUNJLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUNELE1BQU1FLGtCQUFrQixHQUFJRixJQUFJLElBQUs7SUFDbkM1RCxPQUFPLENBQUM2RCxHQUFHLENBQUMsYUFBYSxFQUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xDRixtQkFBbUIsQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUM3QixDQUFDO0VBRUQsTUFBTSxDQUFDRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHcEYsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFLOUMsb0JBRUVELDBEQUFBLENBQUNHLHVEQUFTO0lBQUNpRCxLQUFLO0lBQUNDLFNBQVMsRUFBQyxVQUFVO0lBQUNRLEtBQUssRUFBRTtNQUFFQyxNQUFNLEVBQUU7SUFBUTtFQUFFLGdCQUUvRDlELDBEQUFBLENBQUNJLHVEQUFHO0lBQUN5RCxLQUFLLEVBQUU7TUFBRUMsTUFBTSxFQUFFO0lBQU87RUFBRSxnQkFFN0I5RCwwREFBQSxDQUFDSyx3REFBRztJQUFDbUQsRUFBRSxFQUFFO0VBQUUsQ0FBTSxDQUFDLGVBQ2xCeEQsMERBQUEsQ0FBQ0ssd0RBQUc7SUFBQ21ELEVBQUUsRUFBRTtFQUFHLEdBR1Y5QixVQUFVLEtBQUssV0FBVyxnQkFDeEIxQiwwREFBQSxDQUFDcUUsMERBQWdCO0lBQ2ZpQixNQUFNLEVBQUV2QixJQUFLO0lBQ2JyQyxVQUFVLEVBQUVBLFVBQVc7SUFDdkJzQixLQUFLLEVBQUVBLEtBQU07SUFDYkYsT0FBTyxFQUFFQSxPQUFRO0lBQ2pCeUMsVUFBVSxFQUFFdkIsVUFBVztJQUN2QndCLFdBQVcsRUFBRUwsa0JBQW1CLENBQUM7SUFBQTtJQUNqQ00sTUFBTSxFQUFFO01BQ05DLEtBQUssRUFBRSxVQUFVO01BQ2pCQyxLQUFLLEVBQUUsTUFBTTtNQUNiN0IsTUFBTSxFQUFFO0lBQ1YsQ0FBRTtJQUNGOEIsTUFBTSxFQUFFO01BQUVDLFVBQVUsRUFBRTtJQUFLLENBQUUsQ0FBQztJQUFBO0lBQzlCaEMsS0FBSyxFQUFFO01BQUU4QixLQUFLLEVBQUUsTUFBTTtNQUFFN0IsTUFBTSxFQUFFO0lBQU8sQ0FBRSxDQUFDO0lBQUE7SUFDMUNULFNBQVMsRUFBQztFQUFVLENBQ3JCLENBQUMsR0FDQTNCLFVBQVUsS0FBSyxVQUFVLGdCQUMzQjFCLDBEQUFBLENBQUNvRSx5REFBZTtJQUNka0IsTUFBTSxFQUFFdkIsSUFBSztJQUNickMsVUFBVSxFQUFFQSxVQUFXO0lBQ3ZCc0IsS0FBSyxFQUFFQSxLQUFNO0lBQ2JGLE9BQU8sRUFBRUEsT0FBUTtJQUNqQnlDLFVBQVUsRUFBRXZCLFVBQVc7SUFDdkJ5QixNQUFNLEVBQUU7TUFDTkMsS0FBSyxFQUFFLFVBQVU7TUFDakJDLEtBQUssRUFBRSxNQUFNO01BQ2I3QixNQUFNLEVBQUU7SUFDVixDQUFFO0lBQ0Y4QixNQUFNLEVBQUU7TUFBRUMsVUFBVSxFQUFFO0lBQUssQ0FBRSxDQUFDO0lBQUE7SUFDOUJoQyxLQUFLLEVBQUU7TUFBRThCLEtBQUssRUFBRSxNQUFNO01BQUU3QixNQUFNLEVBQUU7SUFBTyxDQUFFLENBQUM7SUFBQTtJQUMxQ1QsU0FBUyxFQUFDO0VBQVUsQ0FDckIsQ0FBQyxnQkFFRnJELDBEQUFBLGNBQUssMEVBQWlCLENBSXJCLENBQUMsZUFHTkEsMERBQUEsQ0FBQ0ssd0RBQUc7SUFBQ21ELEVBQUUsRUFBRTtFQUFFLENBRVYsQ0FDRixDQUFDLGVBR0Z4RCwwREFBQSxDQUFDSSx1REFBRztJQUFDeUQsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFPO0VBQUUsZ0JBQzdCOUQsMERBQUEsQ0FBQ0ssd0RBQUc7SUFBQ21ELEVBQUUsRUFBRTtFQUFFLEdBRVQ5QixVQUFVLEtBQUssV0FBVyxnQkFDeEIxQiwwREFBQSxDQUFDa0UsbURBQVE7SUFDUG9CLE1BQU0sRUFBRXZCLElBQUs7SUFDYnJDLFVBQVUsRUFBRUEsVUFBVztJQUN2QnNCLEtBQUssRUFBRUEsS0FBTTtJQUNiRixPQUFPLEVBQUVBLE9BQVE7SUFDakJ5QyxVQUFVLEVBQUV2QixVQUFXO0lBQ3ZCeUIsTUFBTSxFQUFFO01BQ05DLEtBQUssRUFBRSxnQkFBZ0I7TUFDdkJDLEtBQUssRUFBRSxNQUFNO01BQ2I3QixNQUFNLEVBQUU7SUFDVixDQUFFO0lBRUZULFNBQVMsRUFBQztFQUFVLENBQ3JCLENBQUMsR0FDQTNCLFVBQVUsS0FBSyxVQUFVLGdCQUMzQjFCLDBEQUFBLENBQUNtRSwyREFBUTtJQUNQbUIsTUFBTSxFQUFFdkIsSUFBSztJQUNickMsVUFBVSxFQUFFQSxVQUFXO0lBQ3ZCc0IsS0FBSyxFQUFFQSxLQUFNO0lBQ2JGLE9BQU8sRUFBRUEsT0FBUTtJQUNqQnlDLFVBQVUsRUFBRXZCLFVBQVc7SUFDdkJ3QixXQUFXLEVBQUVSLG1CQUFvQixDQUFDO0lBQUE7SUFDbENTLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCQyxLQUFLLEVBQUUsTUFBTTtNQUNiN0IsTUFBTSxFQUFFO0lBQ1YsQ0FBRTtJQUNGVCxTQUFTLEVBQUM7RUFBVSxDQUNyQixDQUFDLGdCQUVGckQsMERBQUEsY0FBSywwRUFBaUIsQ0FPckIsQ0FBQyxlQUNOQSwwREFBQSxDQUFDSyx3REFBRztJQUFDbUQsRUFBRSxFQUFFO0VBQUUsR0FFVDlCLFVBQVUsS0FBSyxXQUFXLGdCQUMxQjFCLDBEQUFBLENBQUNzRSx3REFBYTtJQUNWZ0IsTUFBTSxFQUFFdkIsSUFBSztJQUNickMsVUFBVSxFQUFFQSxVQUFXO0lBQ3ZCc0IsS0FBSyxFQUFFQSxLQUFNO0lBRWJ1QyxVQUFVLEVBQUV2QixVQUFXO0lBQ3pCaUIsSUFBSSxFQUFFLEVBQUcsQ0FBQztJQUFBO0lBQ1ZRLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUUsU0FBUztNQUNoQkMsS0FBSyxFQUFFLE1BQU07TUFDYjdCLE1BQU0sRUFBRTtJQUNWLENBQUU7SUFDRlQsU0FBUyxFQUFDO0VBQVUsQ0FDckIsQ0FBQyxnQkFDRnJELDBEQUFBLENBQUN1RSx1REFBYTtJQUNWZSxNQUFNLEVBQUV2QixJQUFLO0lBQ2JyQyxVQUFVLEVBQUVBLFVBQVc7SUFDdkJzQixLQUFLLEVBQUVBLEtBQU07SUFDYkYsT0FBTyxFQUFFQSxPQUFRO0lBQ2pCZ0QsU0FBUyxFQUFFbEIsU0FBVSxDQUFDO0lBQUE7O0lBR3RCVyxVQUFVLEVBQUV2QixVQUFXO0lBQ3pCaUIsSUFBSSxFQUFFLEVBQUcsQ0FBQztJQUFBO0lBQ1ZRLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUUsU0FBUztNQUNoQkMsS0FBSyxFQUFFLE1BQU07TUFDYjdCLE1BQU0sRUFBRTtJQUNWLENBQUU7SUFDRlQsU0FBUyxFQUFDO0VBQVUsQ0FDckIsQ0FFRSxDQUNGLENBQUMsZUFDTnJELDBEQUFBLENBQUNJLHVEQUFHO0lBQUNpRCxTQUFTLEVBQUM7RUFBTyxnQkFFdEJyRCwwREFBQSxDQUFDSyx3REFBRyxRQUVKcUIsVUFBVSxLQUFLLFdBQVcsZ0JBQ3RCMUIsMERBQUEsQ0FBQzBFLHdEQUFpQjtJQUNkMUIsS0FBSyxFQUFFQSxLQUFNO0lBQ2I0QixTQUFTLEVBQUVFLGdCQUFpQjtJQUM1QlcsTUFBTSxFQUFFO01BQ0ZDLEtBQUssRUFBRSxpQkFBaUI7TUFDeEJDLEtBQUssRUFBRSxNQUFNO01BQ2I3QixNQUFNLEVBQUU7SUFDVixDQUFFO0lBQ1JULFNBQVMsRUFBQztFQUFVLENBQ3JCLENBQUMsZ0JBQ0FyRCwwREFBQSxXQUFRLENBR1AsQ0FFSixDQUNNLENBQUM7QUFFaEIsQ0FBQztBQUVELGlFQUFlTyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RNNkI7QUFDTTtBQUV6RCxNQUFNbUUsaUJBQWlCLEdBQUdDLElBQUEsSUFBMEI7RUFBQSxJQUF6QjtJQUFFM0IsS0FBSztJQUFFNEI7RUFBVSxDQUFDLEdBQUFELElBQUE7RUFDN0MsTUFBTSxDQUFDb0IsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBRy9GLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBQ3RELE1BQU0sQ0FBQ21CLEtBQUssRUFBRTZFLFFBQVEsQ0FBQyxHQUFHaEcsK0NBQVEsQ0FBQyxJQUFJLENBQUM7RUFFeENDLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1nRyxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO01BQzVCLElBQUk7UUFDRixNQUFNQyxRQUFRLEdBQUcsR0FBR0MsU0FBc0IsNkJBQTZCcEQsS0FBSyx5QkFBeUI7UUFDckcsTUFBTXVELFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLFFBQVEsQ0FBQztRQUV0QyxJQUFJLENBQUNJLFFBQVEsQ0FBQ0UsRUFBRSxFQUFFO1VBQ2hCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUNsQztRQUVBLE1BQU1DLFFBQVEsR0FBRyxNQUFNSixRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDOztRQUV0QztRQUNBLE1BQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDL0IsU0FBUyxDQUFDO1FBRXZDLElBQUksQ0FBQ2lDLFdBQVcsRUFBRTtVQUNoQnhGLE9BQU8sQ0FBQ3lGLElBQUksQ0FBQyxrQkFBa0IsR0FBR2xDLFNBQVMsQ0FBQztVQUM1Q29CLGVBQWUsQ0FBQyxFQUFFLENBQUM7VUFDbkI7UUFDRjs7UUFFQTtRQUNBLE1BQU1lLFNBQVMsR0FBR0YsV0FBVyxDQUFDN0QsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQytELFNBQVMsRUFBRTtVQUNkMUYsT0FBTyxDQUFDeUYsSUFBSSxDQUFDLG1CQUFtQixHQUFHOUQsS0FBSyxDQUFDO1VBQ3pDZ0QsZUFBZSxDQUFDLEVBQUUsQ0FBQztVQUNuQjtRQUNGO1FBRUFBLGVBQWUsQ0FBQ2UsU0FBUyxDQUFDO01BQzVCLENBQUMsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7UUFDWjNGLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHVCQUF1QixFQUFFNEYsR0FBRyxDQUFDO1FBQzNDZixRQUFRLENBQUNlLEdBQUcsQ0FBQzFGLE9BQU8sQ0FBQztNQUN2QjtJQUNGLENBQUM7SUFFRDRFLFNBQVMsQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxFQUFFLENBQUNsRCxLQUFLLEVBQUU0QixTQUFTLENBQUMsQ0FBQztFQUV0QixJQUFJeEQsS0FBSyxFQUFFO0lBQ1Qsb0JBQU9wQiwwREFBQSxjQUFLLHNCQUFLLEVBQUNvQixLQUFXLENBQUM7RUFDaEM7RUFFQSxJQUFJLENBQUMyRSxZQUFZLEVBQUU7SUFDakIsb0JBQU8vRiwwREFBQSxjQUFLLDJEQUFpQixDQUFDO0VBQ2hDOztFQUdBO0VBQ0YsTUFBTWlILFVBQVUsR0FBR0EsQ0FBQ0MsU0FBUyxFQUFFQyxNQUFNLEtBQUs7SUFDeEMsSUFBSUMsS0FBSztJQUNULFFBQVFGLFNBQVM7TUFDZixLQUFLLFFBQVE7UUFDWEUsS0FBSyxHQUFHLElBQUk7UUFDWjtNQUNGLEtBQUssU0FBUztRQUNaQSxLQUFLLEdBQUcsSUFBSTtRQUNaO01BQ0YsS0FBSyxVQUFVO1FBQ2JBLEtBQUssR0FBRyxJQUFJO1FBQ1o7TUFDRixLQUFLLFdBQVc7UUFDZEEsS0FBSyxHQUFHLElBQUk7UUFDWjtNQUNGO1FBQ0VBLEtBQUssR0FBRyxLQUFLO0lBQ2pCOztJQUVBO0lBQ0EsTUFBTUMsWUFBWSxHQUFHO01BQ25CQyxPQUFPLEVBQUUsNEJBQTRCO01BQUk7TUFDekNDLE1BQU0sRUFBRSw0QkFBNEI7TUFBRTtNQUN0Q0MsU0FBUyxFQUFFLDRCQUE0QjtNQUFFO01BQ3pDQyxRQUFRLEVBQUUsNEJBQTRCLENBQUM7SUFDekMsQ0FBQztJQUVELE1BQU1DLFNBQVMsR0FBR0wsWUFBWSxDQUFDSCxTQUFTLENBQUM7SUFDekMsTUFBTVMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLE1BQU1DLG1CQUFtQixHQUFHRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxPQUFPLEVBQUVDLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVoRixvQkFFRTNILDBEQUFBLENBQUNpRSx1REFBSTtNQUFDK0QsR0FBRyxFQUFFZCxTQUFVO01BQUM3RCxTQUFTLEVBQUMsS0FBSztNQUFDUSxLQUFLLEVBQUU7UUFBRW9FLGVBQWUsRUFBRUw7TUFBb0I7SUFBRSxnQkFDcEY1SCwwREFBQSxDQUFDaUUsdURBQUksQ0FBQ2lFLElBQUk7TUFBQzdFLFNBQVMsRUFBQztJQUFZLGdCQUMvQnJELDBEQUFBLENBQUNpRSx1REFBSSxDQUFDa0UsS0FBSztNQUFDOUUsU0FBUyxFQUFDO0lBQVksR0FBRStELEtBQWtCLENBQUMsRUFDdERELE1BQU0sQ0FBQ2lCLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxDQUFDbEcsS0FBSyxFQUFFbUcsS0FBSyxLQUFLO01BQ3hDO01BQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUksR0FBR0QsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO01BQ25DLE1BQU1FLG1CQUFtQixHQUFHZCxTQUFTLENBQUNHLE9BQU8sQ0FBQyxPQUFPLEVBQUVDLElBQUksQ0FBQ1csR0FBRyxDQUFDRixLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUU5RSxvQkFDRXZJLDBEQUFBO1FBQ0VnSSxHQUFHLEVBQUVNLEtBQU07UUFDWGpGLFNBQVMsRUFBQyxzQ0FBc0M7UUFDaERRLEtBQUssRUFBRTtVQUFFb0UsZUFBZSxFQUFFTztRQUFvQjtNQUFFLGdCQUVoRHhJLDBEQUFBLGlCQUFTc0ksS0FBSyxHQUFHLENBQUMsRUFBQyxjQUFVLENBQUMsS0FBQyxFQUFDbkcsS0FBSyxJQUFJLEVBQ3RDLENBQUM7SUFFVixDQUFDLENBQ1EsQ0FDUCxDQUFDO0VBR1gsQ0FBQztFQUNDLG9CQUNGbkMsMERBQUEsQ0FBQ0csdURBQVMscUJBQ1JILDBEQUFBLENBQUNpRSx1REFBSTtJQUFDWixTQUFTLEVBQUM7RUFBa0IsZ0JBRWhDckQsMERBQUEsQ0FBQ2lFLHVEQUFJLENBQUN5RSxNQUFNO0lBQUM3RSxLQUFLLEVBQUU7TUFBRW9FLGVBQWUsRUFBRSxTQUFTO01BQUVVLEtBQUssRUFBRSxPQUFPO01BQUVDLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQ3RGNUksMERBQUE7SUFBSXFELFNBQVMsRUFBQztFQUFNLEdBQUV1QixTQUFTLElBQUksR0FBUSxDQUNoQyxDQUFDLGVBR2Q1RSwwREFBQSxDQUFDaUUsdURBQUksQ0FBQ2lFLElBQUkscUJBQ1JsSSwwREFBQSxDQUFDSSx1REFBRyxxQkFDRkosMERBQUEsQ0FBQ0ssdURBQUcsUUFBRTRHLFVBQVUsQ0FBQyxRQUFRLEVBQUVsQixZQUFZLENBQUN3QixNQUFNLElBQUksRUFBRSxDQUFPLENBQUMsZUFDNUR2SCwwREFBQSxDQUFDSyx1REFBRyxRQUFFNEcsVUFBVSxDQUFDLFNBQVMsRUFBRWxCLFlBQVksQ0FBQ3VCLE9BQU8sSUFBSSxFQUFFLENBQU8sQ0FDMUQsQ0FBQyxlQUNOdEgsMERBQUEsQ0FBQ0ksdURBQUcscUJBQ0ZKLDBEQUFBLENBQUNLLHVEQUFHLFFBQUU0RyxVQUFVLENBQUMsVUFBVSxFQUFFbEIsWUFBWSxDQUFDMEIsUUFBUSxJQUFJLEVBQUUsQ0FBTyxDQUFDLGVBQ2hFekgsMERBQUEsQ0FBQ0ssdURBQUcsUUFBRTRHLFVBQVUsQ0FBQyxXQUFXLEVBQUVsQixZQUFZLENBQUN5QixTQUFTLElBQUksRUFBRSxDQUFPLENBQzlELENBQ0ksQ0FDUCxDQUNHLENBQUM7QUFJWixDQUFDO0FBQ0QsaUVBQWU5QyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SU47QUFDTztBQUNMO0FBQ3VCOztBQUVuRDtBQUNBLE1BQU1xRSxNQUFNLEdBQUcsbUNBQW1DLENBQUMsQ0FBQzs7QUFFcEQsTUFBTUMsUUFBUSxHQUFHLGtDQUFrQyxDQUFDLENBQUM7O0FBRXJESCw2Q0FBZSxjQUNiN0ksMERBQUEsQ0FBQ0EseURBQWdCLHFCQUNmQSwwREFBQSxDQUFDOEksNkRBQWE7RUFDWkMsTUFBTSxFQUFFQSxNQUFPO0VBQ2ZDLFFBQVEsRUFBRUEsUUFBUztFQUNuQkcsbUJBQW1CLEVBQUU7SUFDbkJDLFlBQVksRUFBRSxzQ0FBc0MsQ0FBRTtFQUN4RDtBQUFFLGdCQUVGcEosMERBQUEsQ0FBQ1MsZ0RBQUcsTUFBRSxDQUNPLENBQ0MsQ0FBQyxFQUNuQjRJLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FDaEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjBEO0FBQ3hCO0FBS25DLE1BQU1HLFFBQVEsR0FBRztFQUFDLFVBQVUsRUFBQyxrQkFBa0I7RUFBRSxNQUFNLEVBQUMsbUJBQW1CO0VBQUUsUUFBUSxFQUFDLG1CQUFtQjtFQUN2RyxNQUFNLEVBQUMsbUJBQW1CO0VBQUUsUUFBUSxFQUFDLG1CQUFtQjtFQUFFLE9BQU8sRUFBQyxtQkFBbUI7RUFDckYsT0FBTyxFQUFDLG1CQUFtQjtFQUFDLFFBQVEsRUFBQyxtQkFBbUI7RUFBRSxNQUFNLEVBQUM7QUFDbkUsQ0FBQzs7QUFHRDtBQUNBLE1BQU12RCxTQUFTLEdBQUcsTUFBT3dELEdBQUcsSUFBSztFQUMvQixJQUFJO0lBQ0YsTUFBTW5ELFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNrRCxHQUFHLENBQUM7SUFDakMsSUFBSSxDQUFDbkQsUUFBUSxDQUFDRSxFQUFFLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMsdUJBQXVCSCxRQUFRLENBQUNvRCxNQUFNLEVBQUUsQ0FBQztJQUUzRSxNQUFNQyxXQUFXLEdBQUdyRCxRQUFRLENBQUNzRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDeEQsSUFBSUYsV0FBVyxJQUFJQSxXQUFXLENBQUNsSCxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtNQUMzRCxPQUFPLE1BQU02RCxRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLE1BQU07TUFDTCxNQUFNbUQsSUFBSSxHQUFHLE1BQU14RCxRQUFRLENBQUN3RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEMsT0FBT0EsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNySCxNQUFNLENBQUNzSCxJQUFJLElBQUlBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlEO0VBQ0YsQ0FBQyxDQUFDLE9BQU85SSxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDOztBQUVEO0FBQ0EsTUFBTStJLGlCQUFpQixHQUFJQyxVQUFVLElBQUs7RUFFeEMsTUFBTUMsT0FBTyxHQUFHdkMsSUFBSSxDQUFDVyxHQUFHLENBQUMsR0FBRzJCLFVBQVUsQ0FBQy9CLEdBQUcsQ0FBQ2lDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDbkUsTUFBTUMsT0FBTyxHQUFHMUMsSUFBSSxDQUFDVyxHQUFHLENBQUMsR0FBRzJCLFVBQVUsQ0FBQy9CLEdBQUcsQ0FBQ2lDLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFFbkUsTUFBTUMsTUFBTSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQztJQUFFQyxNQUFNLEVBQUVSO0VBQVEsQ0FBQyxFQUFFLE1BQU1NLEtBQUssQ0FBQ0gsT0FBTyxDQUFDLENBQUNNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM1RVYsVUFBVSxDQUFDVyxPQUFPLENBQUNwRyxJQUFBLElBQXlCO0lBQUEsSUFBeEI7TUFBRTRGLEdBQUc7TUFBRUUsR0FBRztNQUFFdEk7SUFBTSxDQUFDLEdBQUF3QyxJQUFBO0lBQ3JDK0YsTUFBTSxDQUFDSCxHQUFHLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLEdBQUd0SSxLQUFLO0VBQzFCLENBQUMsQ0FBQztFQUVGLE9BQU91SSxNQUFNLENBQUNyQyxHQUFHLENBQUNrQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRTlJLEtBQUssS0FBSzhJLEdBQUcsR0FBRzlJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUVELE1BQU1nQyxRQUFRLEdBQUcrRyxLQUFBLElBQXFFO0VBQUEsSUFBcEU7SUFBRTVGLE1BQU07SUFBRTVELFVBQVU7SUFBRXNCLEtBQUs7SUFBRUYsT0FBTztJQUFFeUMsVUFBVTtJQUFFQztFQUFZLENBQUMsR0FBQTBGLEtBQUE7RUFDL0UsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHbkwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDOUMsTUFBTSxDQUFDeUYsS0FBSyxFQUFFMkYsUUFBUSxDQUFDLEdBQUdwTCwrQ0FBUSxDQUFDLG9CQUFvQixDQUFDO0VBQ3hELE1BQU1xTCxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUU3QyxNQUFNQyxTQUFTLEdBQUc7SUFBQyxHQUFHLEVBQUMsVUFBVTtJQUFDLEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDdkQsR0FBRyxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFDL0MsR0FBRyxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDakQsSUFBSSxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUM7RUFBTSxDQUFDO0VBRTVCLE1BQU1DLFNBQVMsR0FBRztJQUFDLFVBQVUsRUFBQyxHQUFHO0lBQUMsTUFBTSxFQUFDLEdBQUc7SUFBQyxRQUFRLEVBQUMsR0FBRztJQUNuRCxNQUFNLEVBQUMsR0FBRztJQUFDLFFBQVEsRUFBQyxHQUFHO0lBQUMsT0FBTyxFQUFDLEdBQUc7SUFBQyxPQUFPLEVBQUMsR0FBRztJQUNoRCxRQUFRLEVBQUMsR0FBRztJQUFDLE1BQU0sRUFBQyxJQUFJO0lBQUMsTUFBTSxFQUFDLElBQUk7SUFBQyxRQUFRLEVBQUMsR0FBRztJQUNqRCxRQUFRLEVBQUMsSUFBSTtJQUFDLE1BQU0sRUFBQztFQUN0QixDQUFDO0VBQ0w7RUFDQSxNQUFNQyxTQUFTLEdBQUdsQyw2Q0FBTSxDQUFDO0lBQ3ZCbUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNidEIsVUFBVSxFQUFFLENBQUM7RUFDZixDQUFDLENBQUM7RUFFRixNQUFNdUIsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBWTtJQUMzQixJQUFJO01BQ0YsTUFBTUMsYUFBYSxHQUFHLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUNyQ1IsUUFBUSxDQUFDakQsR0FBRyxDQUFDLE1BQU8wRCxTQUFTLElBQUs7UUFDaEMsTUFBTUMsSUFBSSxHQUFHLENBQUM7UUFDZCxNQUFNQyxVQUFVLEdBQUcsR0FBRzdGLFNBQXNCLDZCQUE2QjJGLFNBQVMsc0JBQXNCO1FBQ3hHLE1BQU1HLGFBQWEsR0FBRyxHQUFHOUYsU0FBc0IsNkJBQTZCMkYsU0FBUyx3QkFBd0JDLElBQUksT0FBTzs7UUFFeEg7UUFDQSxJQUFJLENBQUNQLFNBQVMsQ0FBQ1UsT0FBTyxDQUFDVCxTQUFTLENBQUNLLFNBQVMsQ0FBQyxFQUFFO1VBQzNDTixTQUFTLENBQUNVLE9BQU8sQ0FBQ1QsU0FBUyxDQUFDSyxTQUFTLENBQUMsR0FBRyxNQUFNN0YsU0FBUyxDQUFDK0YsVUFBVSxDQUFDO1FBQ3RFO1FBRUEsSUFBSSxDQUFDUixTQUFTLENBQUNVLE9BQU8sQ0FBQy9CLFVBQVUsQ0FBQzJCLFNBQVMsQ0FBQyxFQUFFO1VBQzVDTixTQUFTLENBQUNVLE9BQU8sQ0FBQy9CLFVBQVUsQ0FBQzJCLFNBQVMsQ0FBQyxHQUFHLE1BQU03RixTQUFTLENBQUNnRyxhQUFhLENBQUM7UUFDMUU7UUFFQSxNQUFNUixTQUFTLEdBQUdELFNBQVMsQ0FBQ1UsT0FBTyxDQUFDVCxTQUFTLENBQUNLLFNBQVMsQ0FBQztRQUN4RCxNQUFNM0IsVUFBVSxHQUFHcUIsU0FBUyxDQUFDVSxPQUFPLENBQUMvQixVQUFVLENBQUMyQixTQUFTLENBQUM7O1FBRTFEO1FBQ0EsTUFBTUssZUFBZSxHQUFJQyxHQUFHLElBQUs7VUFDL0IsSUFBSSxPQUFPQSxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCaEwsT0FBTyxDQUFDeUYsSUFBSSxDQUFDLGtCQUFrQixFQUFFdUYsR0FBRyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLENBQUM7VUFDZjtVQUNBLE9BQU9BLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7O1FBRUQ7UUFDQSxNQUFNcUMsa0JBQWtCLEdBQUdiLFNBQVMsQ0FBQ3JELEdBQUcsQ0FBQytELGVBQWUsQ0FBQztRQUN6RCxNQUFNSSxnQkFBZ0IsR0FBR0osZUFBZSxDQUFDdEosT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQ3lKLGtCQUFrQixDQUFDN0osUUFBUSxDQUFDOEosZ0JBQWdCLENBQUMsRUFBRTtVQUNsRG5MLE9BQU8sQ0FBQ3lGLElBQUksQ0FBQyxZQUFZMEYsZ0JBQWdCLHdCQUF3QlQsU0FBUyxFQUFFLENBQUM7VUFDN0UsT0FBTyxJQUFJO1FBQ2I7O1FBRUE7UUFDQSxNQUFNVSxPQUFPLEdBQUd0QyxpQkFBaUIsQ0FBQ0MsVUFBVSxDQUFDO1FBRTdDLE1BQU1zQyxZQUFZLEdBQUdILGtCQUFrQixDQUFDSSxPQUFPLENBQUNILGdCQUFnQixDQUFDO1FBRWpFLE9BQU87VUFBRXhKLEtBQUssRUFBRStJLFNBQVM7VUFBRTVKLEtBQUssRUFBRXNLLE9BQU8sQ0FBQ0MsWUFBWTtRQUFFLENBQUM7TUFDM0QsQ0FBQyxDQUNILENBQUM7TUFFRCxNQUFNRSxZQUFZLEdBQUdoQixhQUFhLENBQUNqSixNQUFNLENBQUVzQyxJQUFJLElBQUtBLElBQUksS0FBSyxJQUFJLENBQUM7O01BRWxFO01BQ0EsTUFBTTRILFVBQVUsR0FBR0QsWUFBWSxDQUFDNUIsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRTNJLElBQUksS0FBSzJJLEdBQUcsR0FBRzNJLElBQUksQ0FBQ0gsS0FBSyxFQUFFLENBQUMsQ0FBQztNQUMxRSxJQUFJMEssVUFBVSxLQUFLLENBQUMsRUFBRTtRQUNwQnhMLE9BQU8sQ0FBQ3lGLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztRQUMzQ3NFLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDaEI7TUFDRjtNQUlBLE1BQU0wQixjQUFjLEdBQUdGLFlBQVksQ0FBQ3ZFLEdBQUcsQ0FBQy9GLElBQUksS0FBSztRQUMvQ3lLLFFBQVEsRUFBRXpLLElBQUksQ0FBQ1UsS0FBSztRQUNwQmIsS0FBSyxFQUFFRyxJQUFJLENBQUNILEtBQUssR0FBRzBLO01BQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0EsQ0FBQyxDQUFDL0ssS0FBSyxHQUFHOEssQ0FBQyxDQUFDOUssS0FBSyxDQUFDO01BRXJDaUosWUFBWSxDQUFDMEIsY0FBYyxDQUFDMUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDM0M3QyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLE9BQU9uRSxLQUFLLEVBQUU7TUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsYUFBYSxFQUFFQSxLQUFLLENBQUM7SUFDckM7RUFDRixDQUFDOztFQUVEO0VBQ0FsQixnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJd0IsVUFBVSxLQUFLLFVBQVUsRUFBRTtNQUM3QmlLLFFBQVEsQ0FBQyxDQUFDO0lBQ1o7RUFDRixDQUFDLEVBQUUsQ0FBQ3JHLE1BQU0sRUFBRTVELFVBQVUsQ0FBQyxDQUFDO0VBRXhCLE1BQU15TCxlQUFlLEdBQUlDLEtBQUssSUFBSztJQUNqQyxJQUFJQSxLQUFLLENBQUNDLE1BQU0sSUFBSUQsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDbkMsTUFBTXZILFNBQVMsR0FBR3NILEtBQUssQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDakcsS0FBSyxDQUFDLENBQUM7TUFDekMsTUFBTUEsS0FBSyxHQUFHb0UsU0FBUyxDQUFDMUYsU0FBUyxDQUFDO01BQ2xDLE1BQU13SCxPQUFPLEdBQUdsRyxLQUFLLENBQUNTLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO01BQzNDckMsV0FBVyxDQUFDLENBQUM4SCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUI7RUFDRixDQUFDO0VBRUQsb0JBQ0V0TiwwREFBQTtJQUFLNkQsS0FBSyxFQUFFO01BQUMwSixTQUFTLEVBQUMsSUFBSTtNQUFDQyxZQUFZLEVBQUMsSUFBSTtNQUFFN0gsS0FBSyxFQUFFLE1BQU07TUFBRTdCLE1BQU0sRUFBRTtJQUFNO0VBQUUsZ0JBQzVFOUQsMERBQUEsQ0FBQ3dKLHVEQUFJO0lBQ0h2RSxJQUFJLEVBQUUsQ0FDSjtNQUNFd0ksSUFBSSxFQUFFLEtBQUs7TUFDWHRHLE1BQU0sRUFBRWdFLFNBQVMsQ0FBQzlDLEdBQUcsQ0FBQy9GLElBQUksSUFBSUEsSUFBSSxDQUFDSCxLQUFLLENBQUM7TUFDekN1TCxNQUFNLEVBQUV2QyxTQUFTLENBQUM5QyxHQUFHLENBQUMvRixJQUFJLElBQUtpSixTQUFTLENBQUNvQyxNQUFNLENBQUNyTCxJQUFJLENBQUN5SyxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQ2hFN0YsU0FBUyxFQUFFLFdBQVc7TUFDdEIwRyxNQUFNLEVBQUU7UUFDTkMsTUFBTSxFQUFFMUMsU0FBUyxDQUFDOUMsR0FBRyxDQUFFL0YsSUFBSSxJQUFLbUgsUUFBUSxDQUFDOEIsU0FBUyxDQUFDb0MsTUFBTSxDQUFDckwsSUFBSSxDQUFDeUssUUFBUSxDQUFDLENBQUMsQ0FBQztNQUM1RTtJQUNGLENBQUMsQ0FDRDtJQUNGdEgsTUFBTSxFQUFFO01BQ05DLEtBQUssRUFBRUEsS0FBSztNQUNab0ksVUFBVSxFQUFFLElBQUk7TUFDaEJDLFlBQVksRUFBRSxPQUFPO01BQ3JCQyxhQUFhLEVBQUUsT0FBTztNQUN0QkMsTUFBTSxFQUFFO1FBQUVDLENBQUMsRUFBRSxFQUFFO1FBQUVoQixDQUFDLEVBQUUsQ0FBQztRQUFFaUIsQ0FBQyxFQUFFLEVBQUU7UUFBRUMsQ0FBQyxFQUFFO01BQUc7SUFDdEMsQ0FBRTtJQUNGdkssS0FBSyxFQUFFO01BQUU4QixLQUFLLEVBQUUsTUFBTTtNQUFFN0IsTUFBTSxFQUFFO0lBQU8sQ0FBRSxDQUFDO0lBQUE7SUFDMUNSLE9BQU8sRUFBRTZKLGVBQWdCLENBQUM7RUFBQSxDQUMzQixDQUVFLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVoSixRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMNEI7QUFDaEI7O0FBRW5DO0FBQ0EsTUFBTStCLFNBQVMsR0FBRyxNQUFPd0QsR0FBRyxJQUFLO0VBQy9CLElBQUk7SUFDRixNQUFNbkQsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ2tELEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUNuRCxRQUFRLENBQUNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyx1QkFBdUJILFFBQVEsQ0FBQ29ELE1BQU0sRUFBRSxDQUFDO0lBQzNFLE9BQU8sTUFBTXBELFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7RUFDOUIsQ0FBQyxDQUFDLE9BQU94RixLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDOztBQUVEO0FBQ0EsTUFBTWlOLGFBQWEsR0FBRyxNQUFPM0UsR0FBRyxJQUFLO0VBQ25DLElBQUk7SUFDRixNQUFNbkQsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ2tELEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUNuRCxRQUFRLENBQUNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyx1QkFBdUJILFFBQVEsQ0FBQ29ELE1BQU0sRUFBRSxDQUFDO0lBQzNFLE1BQU1JLElBQUksR0FBRyxNQUFNeEQsUUFBUSxDQUFDd0QsSUFBSSxDQUFDLENBQUM7SUFDbEMsT0FBT0EsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNySCxNQUFNLENBQUVzSCxJQUFJLElBQUtBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7RUFDOUQsQ0FBQyxDQUFDLE9BQU85SSxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDO0FBRUQsTUFBTThDLFFBQVEsR0FBR1MsSUFBQSxJQUErQztFQUFBLElBQTlDO0lBQUVXLE1BQU07SUFBRTVELFVBQVU7SUFBRXNCLEtBQUs7SUFBRXVDO0VBQVcsQ0FBQyxHQUFBWixJQUFBO0VBQ3pELE1BQU0sQ0FBQ3dHLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUduTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUM5QyxNQUFNLENBQUN5RixLQUFLLEVBQUUyRixRQUFRLENBQUMsR0FBR3BMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3RDLE1BQU1zTCxTQUFTLEdBQUc7SUFBQyxHQUFHLEVBQUMsVUFBVTtJQUFDLEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDdkQsR0FBRyxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFDL0MsR0FBRyxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDakQsSUFBSSxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUM7RUFBTSxDQUFDO0VBRTVCLE1BQU05QixRQUFRLEdBQUc7SUFBQyxVQUFVLEVBQUMsa0JBQWtCO0lBQUUsU0FBUyxFQUFDLG1CQUFtQjtJQUFFLFVBQVUsRUFBQyxtQkFBbUI7SUFDMUcsVUFBVSxFQUFDLG1CQUFtQjtJQUFFLFdBQVcsRUFBQyxtQkFBbUI7SUFBRSxpQkFBaUIsRUFBQyxtQkFBbUI7SUFDdEcsWUFBWSxFQUFDLG1CQUFtQjtJQUFDLFVBQVUsRUFBQyxtQkFBbUI7SUFBRSxTQUFTLEVBQUMsbUJBQW1CO0lBQzlGLFVBQVUsRUFBQyxtQkFBbUI7SUFBRSxTQUFTLEVBQUM7RUFBb0IsQ0FBQztFQUduRXZKLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1vTyxhQUFhLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO01BQ2hDLElBQUk7UUFDRixNQUFNdEMsSUFBSSxHQUFHLENBQUM7UUFDZCxNQUFNdUMsUUFBUSxHQUFHdkwsS0FBSyxJQUFJLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLE1BQU13TCxPQUFPLEdBQUcsR0FBR3BJLFNBQXNCLDZCQUE2Qm1JLFFBQVEsdUJBQXVCdkMsSUFBSSxPQUFPO1FBQ2hILE1BQU15QyxTQUFTLEdBQUcsR0FBR3JJLFNBQXNCLDZCQUE2Qm1JLFFBQVEsc0JBQXNCOztRQUV0RztRQUNBLE1BQU0sQ0FBQ3BILE1BQU0sRUFBRXVHLE1BQU0sQ0FBQyxHQUFHLE1BQU03QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUN6QzVGLFNBQVMsQ0FBQ3NJLE9BQU8sQ0FBQyxFQUNsQkgsYUFBYSxDQUFDSSxTQUFTLENBQUMsQ0FDekIsQ0FBQzs7UUFFRjtRQUNBLE1BQU14SixJQUFJLEdBQUd5SSxNQUFNLENBQUNyRixHQUFHLENBQUMsQ0FBQ2pCLEtBQUssRUFBRWtCLEtBQUssTUFBTTtVQUN6Q2xCLEtBQUs7VUFDTGpGLEtBQUssRUFBRWdGLE1BQU0sQ0FBQ2hGLEtBQUssQ0FBQ21HLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBRTtRQUNuQyxDQUFDLENBQUMsQ0FBQzs7UUFFSDtRQUNBLE1BQU1vRyxVQUFVLEdBQUd6SixJQUFJLENBQ3BCK0gsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLQSxDQUFDLENBQUMvSyxLQUFLLEdBQUc4SyxDQUFDLENBQUM5SyxLQUFLLENBQUMsQ0FDakNpRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUVmZ0QsWUFBWSxDQUFDc0QsVUFBVSxDQUFDO1FBQ3hCckQsUUFBUSxDQUFDLEdBQUdFLFNBQVMsQ0FBQ2dELFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFDOUMsSUFBSWhKLFVBQVUsRUFBRUEsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hDLENBQUMsQ0FBQyxPQUFPbkUsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGtCQUFrQixFQUFFQSxLQUFLLENBQUM7TUFDMUM7SUFDRixDQUFDOztJQUVEO0lBQ0EsSUFBSU0sVUFBVSxLQUFLLFdBQVcsRUFBRTtNQUM5QjRNLGFBQWEsQ0FBQyxDQUFDO0lBQ2pCO0VBQ0YsQ0FBQyxFQUFFLENBQUNoSixNQUFNLEVBQUU1RCxVQUFVLEVBQUVzQixLQUFLLEVBQUV1QyxVQUFVLENBQUMsQ0FBQztFQUUzQyxvQkFDRXZGLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBQzBKLFNBQVMsRUFBQyxJQUFJO01BQUNDLFlBQVksRUFBQyxJQUFJO01BQUU3SCxLQUFLLEVBQUUsTUFBTTtNQUFFN0IsTUFBTSxFQUFFO0lBQU07RUFBRSxnQkFDNUU5RCwwREFBQSxDQUFDd0osdURBQUk7SUFDSHZFLElBQUksRUFBRSxDQUNKO01BQ0V3SSxJQUFJLEVBQUUsS0FBSztNQUNYdEcsTUFBTSxFQUFFZ0UsU0FBUyxDQUFDOUMsR0FBRyxDQUFFL0YsSUFBSSxJQUFLQSxJQUFJLENBQUNILEtBQUssQ0FBQztNQUMzQ3VMLE1BQU0sRUFBRXZDLFNBQVMsQ0FBQzlDLEdBQUcsQ0FBRS9GLElBQUksSUFBS0EsSUFBSSxDQUFDOEUsS0FBSyxDQUFDO01BQzNDRixTQUFTLEVBQUUsV0FBVztNQUN0QjBHLE1BQU0sRUFBRTtRQUNOQyxNQUFNLEVBQUUxQyxTQUFTLENBQUM5QyxHQUFHLENBQUUvRixJQUFJLElBQUttSCxRQUFRLENBQUNuSCxJQUFJLENBQUM4RSxLQUFLLENBQUM7TUFDdEQ7SUFDRixDQUFDLENBQ0Q7SUFDRjNCLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUVBLEtBQUs7TUFDWm9JLFVBQVUsRUFBRSxJQUFJO01BQ2hCQyxZQUFZLEVBQUUsT0FBTztNQUNyQkMsYUFBYSxFQUFFLE9BQU87TUFDdEJDLE1BQU0sRUFBRTtRQUFFQyxDQUFDLEVBQUUsRUFBRTtRQUFFaEIsQ0FBQyxFQUFFLENBQUM7UUFBRWlCLENBQUMsRUFBRSxFQUFFO1FBQUVDLENBQUMsRUFBRTtNQUFHO0lBQ3RDLENBQUU7SUFFRnZLLEtBQUssRUFBRTtNQUFFOEIsS0FBSyxFQUFFLE1BQU07TUFBRTdCLE1BQU0sRUFBRTtJQUFPLENBQUUsQ0FBQztFQUFBLENBQzNDLENBQ0UsQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZUksUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RzRCO0FBQ2hCOztBQUtuQztBQUNBLE1BQU15SyxhQUFhLEdBQUcsTUFBT3hJLFFBQVEsSUFBSztFQUN4QyxJQUFJO0lBQ0YsTUFBTUksUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsUUFBUSxDQUFDO0lBQ3RDLE1BQU00RCxJQUFJLEdBQUcsTUFBTXhELFFBQVEsQ0FBQ3dELElBQUksQ0FBQyxDQUFDO0lBQ2xDLE9BQU9BLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDckgsTUFBTSxDQUFFc0gsSUFBSSxJQUFLQSxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0VBQzlELENBQUMsQ0FBQyxPQUFPOUksS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRUEsS0FBSyxDQUFDO0lBQ3BDLE9BQU8sRUFBRTtFQUNYO0FBQ0YsQ0FBQztBQUVELE1BQU13TixNQUFNLEdBQUcsTUFBT3pJLFFBQVEsSUFBSztFQUNqQyxJQUFJO0lBQ0YsTUFBTUksUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsUUFBUSxDQUFDO0lBQ3RDLE1BQU00RCxJQUFJLEdBQUcsTUFBTXhELFFBQVEsQ0FBQ3dELElBQUksQ0FBQyxDQUFDO0lBQ2xDLE1BQU04RSxLQUFLLEdBQUc5RSxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ3JILE1BQU0sQ0FBQ3NILElBQUksSUFBSUEsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVqRSxNQUFNNEUsUUFBUSxHQUFHRCxLQUFLLENBQUN4RyxHQUFHLENBQUM0QixJQUFJLElBQUk4RSxVQUFVLENBQUM5RSxJQUFJLENBQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLE1BQU1nRixPQUFPLEdBQUdILEtBQUssQ0FBQ3hHLEdBQUcsQ0FBQzRCLElBQUksSUFBSThFLFVBQVUsQ0FBQzlFLElBQUksQ0FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakUsT0FBTztNQUFFOEUsUUFBUTtNQUFFRTtJQUFRLENBQUM7RUFDOUIsQ0FBQyxDQUFDLE9BQU81TixLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTztNQUFFME4sUUFBUSxFQUFFLEVBQUU7TUFBRUUsT0FBTyxFQUFFO0lBQUcsQ0FBQztFQUN0QztBQUNGLENBQUM7QUFFRCxNQUFNQyxjQUFjLEdBQUd0SyxJQUFBLElBQXdEO0VBQUEsSUFBdkQ7SUFBRVcsTUFBTTtJQUFFNUQsVUFBVTtJQUFFc0IsS0FBSztJQUFFRixPQUFPO0lBQUV5QztFQUFXLENBQUMsR0FBQVosSUFBQTtFQUMxRSxNQUFNNEcsU0FBUyxHQUFHO0lBQUMsR0FBRyxFQUFDLFVBQVU7SUFBQyxHQUFHLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQyxRQUFRO0lBQ3JELEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFBQyxHQUFHLEVBQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQy9DLEdBQUcsRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQyxRQUFRO0lBQ2pELElBQUksRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDO0VBQU0sQ0FBQztFQUU5QixNQUFNOUIsUUFBUSxHQUFHO0lBQUMsVUFBVSxFQUFDLGtCQUFrQjtJQUFFLE1BQU0sRUFBQyxtQkFBbUI7SUFBRSxRQUFRLEVBQUMsbUJBQW1CO0lBQy9GLE1BQU0sRUFBQyxtQkFBbUI7SUFBRSxRQUFRLEVBQUMsbUJBQW1CO0lBQUUsT0FBTyxFQUFDLG1CQUFtQjtJQUNyRixPQUFPLEVBQUMsbUJBQW1CO0lBQUMsUUFBUSxFQUFDLG1CQUFtQjtJQUFFLE1BQU0sRUFBQyxtQkFBbUI7SUFDcEYsUUFBUSxFQUFDLG1CQUFtQjtJQUFFLE1BQU0sRUFBQztFQUN2QyxDQUFDO0VBR1AsTUFBTXlGLFdBQVcsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFFM0UsTUFBTSxDQUFDQyxZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHblAsK0NBQVEsQ0FBQyxJQUFJLENBQUM7RUFDdEQsTUFBTSxDQUFDb1AsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3JQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQzFDLE1BQU0sQ0FBQ3NQLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUd2UCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUNsRCxNQUFNLENBQUN5RixLQUFLLEVBQUUyRixRQUFRLENBQUMsR0FBR3BMLCtDQUFRLENBQUMsU0FBUyxDQUFDO0VBQzdDLE1BQU0sQ0FBQ3dQLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd6UCwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBR2hEQyxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNeVAsV0FBVyxHQUFHLE1BQUFBLENBQUEsS0FBWTtNQUM5QixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxHQUFHLENBQUM1TSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRXFGLEdBQUcsQ0FBQyxNQUFPMEQsU0FBUyxJQUFLO1VBQ3RFMUssT0FBTyxDQUFDNkQsR0FBRyxDQUFDLE9BQU8sRUFBQzZHLFNBQVMsQ0FBQztVQUNoQyxNQUFNOEQsVUFBVSxHQUFHLEdBQUd6SixTQUFzQiw2QkFBNkIyRixTQUFTLHNCQUFzQjtVQUN4RyxNQUFNTCxTQUFTLEdBQUcsTUFBTWlELGFBQWEsQ0FBQ2tCLFVBQVUsQ0FBQztVQUVqRCxNQUFNQyxXQUFXLEdBQUdwRSxTQUFTLENBQUNWLE1BQU0sQ0FBQyxDQUFDK0UsR0FBRyxFQUFFNU4sS0FBSyxFQUFFNk4sR0FBRyxLQUFLO1lBQ3hERCxHQUFHLENBQUM1TixLQUFLLENBQUMsR0FBRzZOLEdBQUc7WUFDaEIsT0FBT0QsR0FBRztVQUNaLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUVOLE1BQU1FLGFBQWEsR0FBR3RGLEtBQUssQ0FBQ3VGLE9BQU8sQ0FBQ3BOLE9BQU8sQ0FBQyxHQUFHQSxPQUFPLEdBQUcsQ0FBQ0EsT0FBTyxDQUFDO1VBQ2xFLE1BQU1xTixrQkFBa0IsR0FBR0YsYUFBYSxDQUFDdE4sTUFBTSxDQUFDUixLQUFLLElBQUlBLEtBQUssSUFBSTJOLFdBQVcsQ0FBQztVQUU5RSxNQUFNTSxVQUFVLEdBQUd6RixLQUFLLENBQUNDLElBQUksQ0FBQztZQUFFQyxNQUFNLEVBQUVzRixrQkFBa0IsQ0FBQ3RGO1VBQU8sQ0FBQyxFQUFFLE1BQU1GLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzVGLE1BQU11RixTQUFTLEdBQUcxRixLQUFLLENBQUNDLElBQUksQ0FBQztZQUFFQyxNQUFNLEVBQUVzRixrQkFBa0IsQ0FBQ3RGO1VBQU8sQ0FBQyxFQUFFLE1BQU1GLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBRTNGLE1BQU13RixRQUFRLEdBQUczRixLQUFLLENBQUNDLElBQUksQ0FBQztZQUFFQyxNQUFNLEVBQUU7VUFBRSxDQUFDLEVBQUUsQ0FBQzBGLENBQUMsRUFBRUMsQ0FBQyxLQUFLQSxDQUFFLENBQUMsQ0FBQ25JLEdBQUcsQ0FBQyxNQUFPb0ksQ0FBQyxJQUFLO1lBQ3hFLE1BQU1DLGFBQWEsR0FBRyxHQUFHdEssU0FBc0IsNkJBQTZCMkYsU0FBUywwQkFBMEIwRSxDQUFDLEdBQUMsQ0FBQyxNQUFNO1lBQ3hILE1BQU07Y0FBRTNCLFFBQVE7Y0FBRUU7WUFBUSxDQUFDLEdBQUcsTUFBTUosTUFBTSxDQUFDOEIsYUFBYSxDQUFDO1lBRXpEUCxrQkFBa0IsQ0FBQ3BGLE9BQU8sQ0FBQyxDQUFDNEYsQ0FBQyxFQUFFSCxDQUFDLEtBQUs7Y0FDbkMsTUFBTVIsR0FBRyxHQUFHdEUsU0FBUyxDQUFDaUIsT0FBTyxDQUFDZ0UsQ0FBQyxDQUFDO2NBQ2hDUCxVQUFVLENBQUNJLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBRzNCLFFBQVEsQ0FBQ2tCLEdBQUcsQ0FBQztjQUNoQ0ssU0FBUyxDQUFDRyxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUd6QixPQUFPLENBQUNnQixHQUFHLENBQUM7WUFDaEMsQ0FBQyxDQUFDO1VBQ0osQ0FBQyxDQUFDO1VBRUYsTUFBTW5FLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDd0UsUUFBUSxDQUFDO1VBRTNCLE9BQU87WUFBRUYsVUFBVTtZQUFFQyxTQUFTO1lBQUVGO1VBQW1CLENBQUM7UUFDdEQsQ0FBQyxDQUFDO1FBRUYsTUFBTVMsT0FBTyxHQUFHLE1BQU0vRSxPQUFPLENBQUNDLEdBQUcsQ0FBQzhELFdBQVcsQ0FBQztRQUU5QyxNQUFNaUIsYUFBYSxHQUFHRCxPQUFPLENBQUNFLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJQSxNQUFNLENBQUNYLFVBQVUsQ0FBQztRQUNsRSxNQUFNWSxZQUFZLEdBQUdKLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ1YsU0FBUyxDQUFDO1FBQ2hFLE1BQU1ZLGtCQUFrQixHQUFHTCxPQUFPLENBQUNFLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJQSxNQUFNLENBQUNaLGtCQUFrQixDQUFDO1FBRS9FZixlQUFlLENBQUM7VUFBRTdHLEtBQUssRUFBRXNJLGFBQWE7VUFBRUssSUFBSSxFQUFFRixZQUFZO1VBQUVHLFVBQVUsRUFBRUY7UUFBbUIsQ0FBQyxDQUFDO1FBQzdGNUYsUUFBUSxDQUFDLEdBQUd2SSxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUM7TUFDbkMsQ0FBQyxDQUFDLE9BQU8xQixLQUFLLEVBQUU7UUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsYUFBYSxFQUFFQSxLQUFLLENBQUM7TUFDckM7SUFDRixDQUFDOztJQUVEO0lBQ0F1TyxXQUFXLENBQUMsQ0FBQztFQUNmLENBQUMsRUFBRSxDQUFDak8sVUFBVSxFQUFFc0IsS0FBSyxFQUFFRixPQUFPLENBQUMsQ0FBQztFQUdoQzVDLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1rUixjQUFjLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO01BQ2pDLElBQUl6RyxLQUFLLENBQUN1RixPQUFPLENBQUNwTixPQUFPLENBQUMsSUFBSUEsT0FBTyxDQUFDSixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUlJLE9BQU8sS0FBSyxTQUFTLEVBQUU7UUFDbEYsSUFBSTtVQUNGLE1BQU13TixRQUFRLEdBQUcsQ0FBQ3ROLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFcUYsR0FBRyxDQUFDLE1BQU9nSixPQUFPLElBQUs7WUFDbkUsTUFBTUMsVUFBVSxHQUFHLEdBQUdsTCxTQUFzQiw2QkFBNkJpTCxPQUFPLG9DQUFvQztZQUNwSCxNQUFNOUssUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQzhLLFVBQVUsQ0FBQztZQUN4QyxJQUFJLENBQUMvSyxRQUFRLENBQUNFLEVBQUUsRUFBRTtjQUNoQixNQUFNLElBQUlDLEtBQUssQ0FBQyxrQkFBa0JILFFBQVEsQ0FBQ29ELE1BQU0sRUFBRSxDQUFDO1lBQ3REO1lBQ0EsTUFBTTFFLElBQUksR0FBRyxNQUFNc0IsUUFBUSxDQUFDSyxJQUFJLENBQUMsQ0FBQzs7WUFFbEM7WUFDQSxNQUFNMkssYUFBYSxHQUFHO2NBQ3BCLE1BQU0sRUFBRSxHQUFHO2NBQ1gsTUFBTSxFQUFFLEdBQUc7Y0FDWCxNQUFNLEVBQUUsR0FBRztjQUNYLE1BQU0sRUFBRSxHQUFHO2NBQ1gsTUFBTSxFQUFFO1lBQ1YsQ0FBQzs7WUFFRDtZQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDdEJDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSCxhQUFhLENBQUMsQ0FBQ3hHLE9BQU8sQ0FBQ0csS0FBQSxJQUF3QjtjQUFBLElBQXZCLENBQUN5RyxJQUFJLEVBQUVDLFVBQVUsQ0FBQyxHQUFBMUcsS0FBQTtjQUN2RCxNQUFNMkcsUUFBUSxHQUFHNU0sSUFBSSxDQUFDME0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztjQUVqQztjQUNBLElBQUlGLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDRCxRQUFRLENBQUMsQ0FBQ2hILE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RDMkcsV0FBVyxDQUFDLFdBQVdJLFVBQVUsRUFBRSxDQUFDLEdBQUc7a0JBQ3JDRyxPQUFPLEVBQUUsT0FBTztrQkFDaEJKLElBQUksRUFBRUE7Z0JBQ1IsQ0FBQztjQUNILENBQUMsTUFBTTtnQkFDTDtnQkFDQSxNQUFNSyxVQUFVLEdBQUdQLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDRyxRQUFRLENBQUMsQ0FDeEN6SixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNYQyxHQUFHLENBQUM0SixLQUFBO2tCQUFBLElBQUMsQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLLENBQUMsR0FBQUYsS0FBQTtrQkFBQSxPQUFLLEdBQUdDLE1BQU0sSUFBSUMsS0FBSyxJQUFJO2dCQUFBLEVBQUM7Z0JBRW5EWCxXQUFXLENBQUMsV0FBV0ksVUFBVSxFQUFFLENBQUMsR0FBRztrQkFDckNHLE9BQU8sRUFBRUMsVUFBVSxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDO2tCQUM5QlQsSUFBSSxFQUFFQTtnQkFDUixDQUFDO2NBQ0g7WUFDRixDQUFDLENBQUM7WUFFRixPQUFPO2NBQUVOLE9BQU87Y0FBRXBNLElBQUksRUFBRXVNO1lBQVksQ0FBQztVQUN2QyxDQUFDLENBQUM7VUFFRixNQUFNWixPQUFPLEdBQUcsTUFBTS9FLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDd0UsUUFBUSxDQUFDO1VBQzNDLE1BQU0rQixhQUFhLEdBQUcsQ0FBQyxDQUFDO1VBRXhCekIsT0FBTyxDQUFDN0YsT0FBTyxDQUFDdUgsS0FBQSxJQUF1QjtZQUFBLElBQXRCO2NBQUVqQixPQUFPO2NBQUVwTTtZQUFLLENBQUMsR0FBQXFOLEtBQUE7WUFDaENELGFBQWEsQ0FBQ2hCLE9BQU8sQ0FBQyxHQUFHcE0sSUFBSTtVQUMvQixDQUFDLENBQUM7VUFFRnlLLGFBQWEsQ0FBQzJDLGFBQWEsQ0FBQztRQUM5QixDQUFDLENBQUMsT0FBT2pSLEtBQUssRUFBRTtVQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRUEsS0FBSyxDQUFDO1FBQ3hDO01BQ0Y7SUFDRixDQUFDO0lBRURnUSxjQUFjLENBQUMsQ0FBQztFQUNsQixDQUFDLEVBQUUsQ0FBQ3RPLE9BQU8sRUFBRUUsS0FBSyxDQUFDLENBQUM7RUFHcEI5QyxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJb0YsTUFBTSxJQUFJNkosWUFBWSxFQUFFO01BQzFCLE1BQU1vRCxRQUFRLEdBQUdwRCxZQUFZLENBQUNnQyxVQUFVLENBQUM5SSxHQUFHLENBQUMsQ0FBQ3NJLENBQUMsRUFBRUgsQ0FBQyxLQUFLO1FBQ3JELE1BQU1nQyxZQUFZLEdBQUd4UCxLQUFLLENBQUN3TixDQUFDLENBQUM7UUFDN0IsTUFBTWlDLGFBQWEsR0FBRztVQUNwQixHQUFHLEVBQUUsTUFBTTtVQUNYLEdBQUcsRUFBRSxNQUFNO1VBQ1gsR0FBRyxFQUFFLE1BQU07VUFDWCxHQUFHLEVBQUUsTUFBTTtVQUNYLEdBQUcsRUFBRTtRQUNQLENBQUM7UUFFRCxNQUFNQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUNySyxHQUFHLENBQUVzSyxHQUFHLElBQUs7VUFDeEQsTUFBTUMsUUFBUSxHQUFHLEdBQUdILGFBQWEsQ0FBQ0UsR0FBRyxDQUFDLEdBQUc7VUFDekMsSUFBSWhDLENBQUMsS0FBSyxTQUFTLElBQUlsQixVQUFVLENBQUMrQyxZQUFZLENBQUMsSUFBSS9DLFVBQVUsQ0FBQytDLFlBQVksQ0FBQyxDQUFDLFdBQVdHLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDN0YsTUFBTUUsVUFBVSxHQUFHcEQsVUFBVSxDQUFDK0MsWUFBWSxDQUFDLENBQUMsV0FBV0csR0FBRyxFQUFFLENBQUM7WUFDN0QsT0FBTyxJQUFJQyxRQUFRLFlBQVlDLFVBQVUsQ0FBQ2QsT0FBTyxFQUFFO1VBQ3JEO1VBQ0EsT0FBTyxLQUFLYSxRQUFRLEdBQUc7UUFDekIsQ0FBQyxDQUFDO1FBRUYsT0FBTztVQUNMRSxDQUFDLEVBQUUzRCxZQUFZLENBQUM1RyxLQUFLLENBQUNpSSxDQUFDLENBQUM7VUFDeEJ1QyxDQUFDLEVBQUU1RCxZQUFZLENBQUMrQixJQUFJLENBQUNWLENBQUMsQ0FBQztVQUN2QndDLElBQUksRUFBRSxvQkFBb0I7VUFDMUJqSixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1VBQy9Ca0osWUFBWSxFQUFFLFVBQVU7VUFDeEJDLFNBQVMsRUFBRVIsVUFBVTtVQUNyQlMsU0FBUyxFQUFFLE1BQU07VUFDakJDLFVBQVUsRUFBRTtZQUNWQyxLQUFLLEVBQUUsTUFBTTtZQUNiQyxPQUFPLEVBQUUsT0FBTztZQUNoQkMsV0FBVyxFQUFFLE1BQU07WUFDbkJDLElBQUksRUFBRTtjQUFFQyxJQUFJLEVBQUU7WUFBRztVQUNuQixDQUFDO1VBQ0Q3RixNQUFNLEVBQUU7WUFDTjhGLE1BQU0sRUFBRSxRQUFRO1lBQ2hCL0ssS0FBSyxFQUFFYyxRQUFRLENBQUM4QixTQUFTLENBQUN2SSxLQUFLLENBQUN3TixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDaUQsSUFBSSxFQUFFO1VBQ1IsQ0FBQztVQUNERSxJQUFJLEVBQUVwSSxTQUFTLENBQUN2SSxLQUFLLENBQUN3TixDQUFDLENBQUM7UUFDMUIsQ0FBQztNQUNILENBQUMsQ0FBQztNQUlGLE1BQU1vRCxlQUFlLEdBQUd6RSxZQUFZLENBQUNnQyxVQUFVLENBQUNMLE9BQU8sQ0FBQyxDQUFDSCxDQUFDLEVBQUVILENBQUMsS0FDM0Q3RixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ3pDLEdBQUcsQ0FBQyxDQUFDa0ksQ0FBQyxFQUFFM04sQ0FBQyxNQUFNO1FBQzlCa1EsQ0FBQyxFQUFFM0QsWUFBWSxDQUFDNUcsS0FBSyxDQUFDaUksQ0FBQyxDQUFDLENBQUM1TixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CbVEsQ0FBQyxFQUFFNUQsWUFBWSxDQUFDK0IsSUFBSSxDQUFDVixDQUFDLENBQUMsQ0FBQzVOLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUJpUixJQUFJLEVBQUUsR0FBRztRQUNUQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxLQUFLLEVBQUUsR0FBRztRQUNWQyxLQUFLLEVBQUUsR0FBRztRQUNWQyxFQUFFLEVBQUU5RSxZQUFZLENBQUM1RyxLQUFLLENBQUNpSSxDQUFDLENBQUMsQ0FBQzVOLENBQUMsQ0FBQztRQUM1QnNSLEVBQUUsRUFBRS9FLFlBQVksQ0FBQytCLElBQUksQ0FBQ1YsQ0FBQyxDQUFDLENBQUM1TixDQUFDLENBQUM7UUFDM0J1UixVQUFVLEVBQUMxSyxRQUFRLENBQUM4QixTQUFTLENBQUN2SSxLQUFLLENBQUN3TixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDNEQsU0FBUyxFQUFFLEdBQUc7UUFDZEMsVUFBVSxFQUFFLEdBQUc7UUFDZkMsU0FBUyxFQUFFLENBQUM7UUFDWkMsU0FBUyxFQUFFO01BQ2IsQ0FBQyxDQUFDLENBQ0osQ0FBQztNQUVEakYsVUFBVSxDQUFDaUQsUUFBUSxDQUFDO01BQ3BCL0MsY0FBYyxDQUFDb0UsZUFBZSxDQUFDO01BRS9CLElBQUlyTyxVQUFVLEVBQUVBLFVBQVUsQ0FBQyxDQUFDO0lBQzlCO0VBQ0YsQ0FBQyxFQUFFLENBQUNELE1BQU0sRUFBRTZKLFlBQVksRUFBRU0sVUFBVSxDQUFDLENBQUM7RUFFdEMsb0JBQ0V6UCwwREFBQTtJQUFNNkQsS0FBSyxFQUFFO01BQUU4QixLQUFLLEVBQUMsT0FBTztNQUFFN0IsTUFBTSxFQUFFO0lBQVE7RUFBRSxnQkFDOUM5RCwwREFBQSxDQUFDd0osdURBQUk7SUFDSHZFLElBQUksRUFBRW9LLE9BQVE7SUFDZDVKLE1BQU0sRUFBRTtNQUNOc0ksWUFBWSxFQUFFLE9BQU87TUFDckJDLGFBQWEsRUFBRSxPQUFPO01BQ3RCdUIsV0FBVyxFQUFFQSxXQUFXO01BQ3hCN0osS0FBSyxFQUFFO1FBQ0xxRSxJQUFJLEVBQUVyRSxLQUFLO1FBQ1g4TixJQUFJLEVBQUU7VUFBRUMsSUFBSSxFQUFFLEVBQUU7VUFBRTlLLEtBQUssRUFBRTtRQUFRLENBQUM7UUFDbENtSyxDQUFDLEVBQUUsR0FBRztRQUNOQyxDQUFDLEVBQUUsSUFBSTtRQUNQeUIsT0FBTyxFQUFFO01BRVgsQ0FBQztNQUNEakYsV0FBVyxFQUFFLENBQ1g7UUFDRXVELENBQUMsRUFBRSxHQUFHO1FBQ05DLENBQUMsRUFBRSxHQUFHO1FBQ05oSixJQUFJLEVBQUUseUJBQXlCO1FBQy9Cd0ssU0FBUyxFQUFFLEtBQUs7UUFDaEJmLElBQUksRUFBRTtVQUFFQyxJQUFJLEVBQUUsQ0FBQztVQUFFOUssS0FBSyxFQUFFO1FBQU8sQ0FBQztRQUNoQzZMLE9BQU8sRUFBRSxRQUFRO1FBQ2pCQyxPQUFPLEVBQUU7TUFDWCxDQUFDLEVBQ0Q7UUFDRTNCLENBQUMsRUFBRSxHQUFHO1FBQ05DLENBQUMsRUFBRSxHQUFHO1FBQ05oSixJQUFJLEVBQUUsdUJBQXVCO1FBQzdCd0ssU0FBUyxFQUFFLEtBQUs7UUFDaEJmLElBQUksRUFBRTtVQUFFQyxJQUFJLEVBQUUsQ0FBQztVQUFFOUssS0FBSyxFQUFFO1FBQU8sQ0FBQztRQUNoQzZMLE9BQU8sRUFBRSxRQUFRO1FBQ2pCQyxPQUFPLEVBQUU7TUFDWCxDQUFDLEVBQ0Q7UUFDRTNCLENBQUMsRUFBRSxHQUFHO1FBQ05DLENBQUMsRUFBRSxHQUFHO1FBQ05oSixJQUFJLEVBQUUseUJBQXlCO1FBQy9Cd0ssU0FBUyxFQUFFLEtBQUs7UUFDaEJmLElBQUksRUFBRTtVQUFFQyxJQUFJLEVBQUUsQ0FBQztVQUFFOUssS0FBSyxFQUFFO1FBQU8sQ0FBQztRQUNoQzZMLE9BQU8sRUFBRSxRQUFRO1FBQ2pCQyxPQUFPLEVBQUU7TUFDWCxDQUFDLEVBQ0Q7UUFDRTNCLENBQUMsRUFBRSxHQUFHO1FBQ05DLENBQUMsRUFBRSxHQUFHO1FBQ05oSixJQUFJLEVBQUUsdUJBQXVCO1FBQzdCd0ssU0FBUyxFQUFFLEtBQUs7UUFDaEJmLElBQUksRUFBRTtVQUFFQyxJQUFJLEVBQUUsQ0FBQztVQUFFOUssS0FBSyxFQUFFO1FBQU8sQ0FBQztRQUNoQzZMLE9BQU8sRUFBRSxRQUFRO1FBQ2pCQyxPQUFPLEVBQUU7TUFDWCxDQUFDLENBQ0Y7TUFHREMsS0FBSyxFQUFFO1FBQ0xoUCxLQUFLLEVBQUcsS0FBSztRQUNiaVAsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNqQkMsU0FBUyxFQUFFLE1BQU07UUFDakJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFNBQVMsRUFBRSxXQUFXO1FBQ3RCQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxRQUFRLEVBQUUsS0FBSztRQUNmQyxRQUFRLEVBQUMsT0FBTztRQUNoQkMsUUFBUSxFQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDdEJDLFFBQVEsRUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO1FBQ3ZCQyxRQUFRLEVBQUU7TUFFWixDQUFDO01BQ0RDLEtBQUssRUFBRTtRQUNMM1AsS0FBSyxFQUFHLEtBQUs7UUFDYjRQLGNBQWMsRUFBQyxFQUFFO1FBQUk7UUFDckJYLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDakJDLFNBQVMsRUFBRSxNQUFNO1FBQ2pCQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxTQUFTLEVBQUUsV0FBVztRQUN0QkMsU0FBUyxFQUFFLENBQUM7UUFDWkMsUUFBUSxFQUFFLEtBQUs7UUFDZkMsUUFBUSxFQUFDLE9BQU87UUFDaEJDLFFBQVEsRUFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ3RCQyxRQUFRLEVBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztRQUN2QkMsUUFBUSxFQUFFO01BRVosQ0FBQztNQUNEbkgsTUFBTSxFQUFFO1FBQUVDLENBQUMsRUFBRSxFQUFFO1FBQUVoQixDQUFDLEVBQUUsRUFBRTtRQUFFaUIsQ0FBQyxFQUFFLEVBQUU7UUFBRUMsQ0FBQyxFQUFFO01BQUcsQ0FBQztNQUN0Q04sVUFBVSxFQUFFLElBQUk7TUFDaEJ5SCxNQUFNLEVBQUU7UUFDTnpDLENBQUMsRUFBRSxDQUFDO1FBQ0pDLENBQUMsRUFBRSxDQUFDO1FBQ0pPLE9BQU8sRUFBRSx1QkFBdUI7UUFDaENDLFdBQVcsRUFBRSxNQUFNO1FBQ25CaUMsV0FBVyxFQUFFO01BQ2YsQ0FBQztNQUNEQyxhQUFhLEVBQUUsQ0FBQztNQUNoQkMsU0FBUyxFQUFFLFNBQVM7TUFDcEJ0QyxVQUFVLEVBQUU7UUFDVnVDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBRTtNQUNsQjtJQUNGLENBQUU7SUFDRi9QLE1BQU0sRUFBRTtNQUNOQyxVQUFVLEVBQUUsSUFBSTtNQUNoQitQLGNBQWMsRUFBRSxLQUFLLENBQUU7SUFDekIsQ0FBRTtJQUNGL1IsS0FBSyxFQUFFO01BQUMwSixTQUFTLEVBQUMsS0FBSztNQUFFNUgsS0FBSyxFQUFFLE9BQU87TUFBRTdCLE1BQU0sRUFBRTtJQUFPO0VBQUUsQ0FDM0QsQ0FDRSxDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlbUwsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwV3NCO0FBQ2hCO0FBR25DLE1BQU14RixRQUFRLEdBQUc7RUFBQyxVQUFVLEVBQUMsa0JBQWtCO0VBQUUsU0FBUyxFQUFDLG1CQUFtQjtFQUFFLFVBQVUsRUFBQyxtQkFBbUI7RUFDNUcsVUFBVSxFQUFDLG1CQUFtQjtFQUFFLFdBQVcsRUFBQyxtQkFBbUI7RUFBRSxpQkFBaUIsRUFBQyxtQkFBbUI7RUFDdEcsWUFBWSxFQUFDLG1CQUFtQjtFQUFDLFVBQVUsRUFBQyxtQkFBbUI7RUFBRSxTQUFTLEVBQUMsbUJBQW1CO0VBQzlGLFVBQVUsRUFBQyxtQkFBbUI7RUFBRSxTQUFTLEVBQUM7QUFBb0IsQ0FBQzs7QUFFakU7QUFDQSxNQUFNa0YsYUFBYSxHQUFHLE1BQU94SSxRQUFRLElBQUs7RUFDeEMsSUFBSTtJQUNGLE1BQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLFFBQVEsQ0FBQztJQUN0QyxNQUFNNEQsSUFBSSxHQUFHLE1BQU14RCxRQUFRLENBQUN3RCxJQUFJLENBQUMsQ0FBQztJQUNsQyxPQUFPQSxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ3JILE1BQU0sQ0FBRXNILElBQUksSUFBS0EsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztFQUM5RCxDQUFDLENBQUMsT0FBTzlJLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxjQUFjLEVBQUVBLEtBQUssQ0FBQztJQUNwQyxPQUFPLEVBQUU7RUFDWDtBQUNGLENBQUM7QUFFRCxNQUFNd04sTUFBTSxHQUFHLE1BQU96SSxRQUFRLElBQUs7RUFDakMsSUFBSTtJQUNGLE1BQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLFFBQVEsQ0FBQztJQUN0QyxNQUFNNEQsSUFBSSxHQUFHLE1BQU14RCxRQUFRLENBQUN3RCxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNOEUsS0FBSyxHQUFHOUUsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNySCxNQUFNLENBQUNzSCxJQUFJLElBQUlBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFakUsTUFBTTRFLFFBQVEsR0FBR0QsS0FBSyxDQUFDeEcsR0FBRyxDQUFDNEIsSUFBSSxJQUFJOEUsVUFBVSxDQUFDOUUsSUFBSSxDQUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxNQUFNZ0YsT0FBTyxHQUFHSCxLQUFLLENBQUN4RyxHQUFHLENBQUM0QixJQUFJLElBQUk4RSxVQUFVLENBQUM5RSxJQUFJLENBQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpFLE9BQU87TUFBRThFLFFBQVE7TUFBRUU7SUFBUSxDQUFDO0VBQzlCLENBQUMsQ0FBQyxPQUFPNU4sS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRUEsS0FBSyxDQUFDO0lBQ3BDLE9BQU87TUFBRTBOLFFBQVEsRUFBRSxFQUFFO01BQUVFLE9BQU8sRUFBRTtJQUFHLENBQUM7RUFDdEM7QUFDRixDQUFDO0FBRUQsTUFBTTZHLGVBQWUsR0FBR2xSLElBQUEsSUFBb0U7RUFBQSxJQUFuRTtJQUFFVyxNQUFNO0lBQUU1RCxVQUFVO0lBQUVzQixLQUFLO0lBQUVGLE9BQU87SUFBRXlDLFVBQVU7SUFBRUM7RUFBVyxDQUFDLEdBQUFiLElBQUE7RUFDckYsTUFBTXVLLFdBQVcsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDM0UsTUFBTSxDQUFDRyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHclAsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDMUMsTUFBTSxDQUFDc1AsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR3ZQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2xELE1BQU0sQ0FBQ3VCLFdBQVcsRUFBRXNVLGNBQWMsQ0FBQyxHQUFHN1YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDbEQsTUFBTSxDQUFDa1IsVUFBVSxFQUFFNEUsYUFBYSxDQUFDLEdBQUc5ViwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUNoRCxNQUFNLENBQUN5RixLQUFLLEVBQUUyRixRQUFRLENBQUMsR0FBR3BMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3RDLE1BQU0sQ0FBQ3dQLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd6UCwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRWhELE1BQU1zTCxTQUFTLEdBQUc7SUFBQyxHQUFHLEVBQUMsVUFBVTtJQUFDLEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDdkQsR0FBRyxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFDL0MsR0FBRyxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDakQsSUFBSSxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUM7RUFBTSxDQUFDOztFQUU1QjtFQUNBckwsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSXdCLFVBQVUsS0FBSyxXQUFXLElBQUlzQixLQUFLLEVBQUU7TUFDdkMsTUFBTStJLFNBQVMsR0FBRy9JLEtBQUssQ0FBQyxDQUFDO01BQ3pCLE1BQU02TSxVQUFVLEdBQUcsR0FBR3pKLFNBQXNCLDZCQUE2QjJGLFNBQVMsc0JBQXNCO01BRXhHNEMsYUFBYSxDQUFDa0IsVUFBVSxDQUFDLENBQUNtRyxJQUFJLENBQUUvUSxJQUFJLElBQUs7UUFDdkM2USxjQUFjLENBQUM3USxJQUFJLENBQUM7UUFDcEJvRyxRQUFRLENBQUMsY0FBYyxDQUFDO01BQzFCLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQyxFQUFFLENBQUMzSixVQUFVLEVBQUVzQixLQUFLLENBQUMsQ0FBQzs7RUFFdkI7RUFDQTlDLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUlzQixXQUFXLENBQUNxSixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzFCLE1BQU1pRixXQUFXLEdBQUd0TyxXQUFXLENBQUN3SixNQUFNLENBQUMsQ0FBQytFLEdBQUcsRUFBRTVOLEtBQUssRUFBRTZOLEdBQUcsS0FBSztRQUMxREQsR0FBRyxDQUFDNU4sS0FBSyxDQUFDLEdBQUc2TixHQUFHO1FBQ2hCLE9BQU9ELEdBQUc7TUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFFTixNQUFNRSxhQUFhLEdBQUd0RixLQUFLLENBQUN1RixPQUFPLENBQUNwTixPQUFPLENBQUMsR0FBR0EsT0FBTyxHQUFHLENBQUNBLE9BQU8sQ0FBQztNQUNsRWlULGFBQWEsQ0FBQzlGLGFBQWEsQ0FBQ3ROLE1BQU0sQ0FBQ1IsS0FBSyxJQUFJQSxLQUFLLElBQUkyTixXQUFXLENBQUMsQ0FBQztJQUNwRTtFQUNGLENBQUMsRUFBRSxDQUFDdE8sV0FBVyxFQUFFc0IsT0FBTyxDQUFDLENBQUM7O0VBRTFCO0VBQ0E1QyxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNa1IsY0FBYyxHQUFHLE1BQUFBLENBQUEsS0FBWTtNQUNqQyxJQUFJekcsS0FBSyxDQUFDdUYsT0FBTyxDQUFDcE4sT0FBTyxDQUFDLElBQUlBLE9BQU8sQ0FBQ0osUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJSSxPQUFPLEtBQUssU0FBUyxFQUFFO1FBQ2xGLElBQUk7VUFDRixNQUFNd08sVUFBVSxHQUFHLEdBQUdsTCxTQUFzQiw2QkFBNkJwRCxLQUFLLG9DQUFvQztVQUNsSCxNQUFNdUQsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQzhLLFVBQVUsQ0FBQztVQUN4QyxJQUFJLENBQUMvSyxRQUFRLENBQUNFLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLEtBQUssQ0FBQyxrQkFBa0JILFFBQVEsQ0FBQ29ELE1BQU0sRUFBRSxDQUFDO1VBQ3REO1VBQ0EsTUFBTTFFLElBQUksR0FBRyxNQUFNc0IsUUFBUSxDQUFDSyxJQUFJLENBQUMsQ0FBQzs7VUFFbEM7VUFDQSxNQUFNMkssYUFBYSxHQUFHO1lBQ3BCLE1BQU0sRUFBRSxHQUFHO1lBQ1gsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLEVBQUUsR0FBRztZQUNYLE1BQU0sRUFBRSxHQUFHO1lBQ1gsTUFBTSxFQUFFO1VBQ1YsQ0FBQzs7VUFFRDtVQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLENBQUM7VUFDdEJDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSCxhQUFhLENBQUMsQ0FBQ3hHLE9BQU8sQ0FBQ0csS0FBQSxJQUF3QjtZQUFBLElBQXZCLENBQUN5RyxJQUFJLEVBQUVDLFVBQVUsQ0FBQyxHQUFBMUcsS0FBQTtZQUN2RCxNQUFNMkcsUUFBUSxHQUFHNU0sSUFBSSxDQUFDME0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUVqQztZQUNBLElBQUlGLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDRCxRQUFRLENBQUMsQ0FBQ2hILE1BQU0sS0FBSyxDQUFDLEVBQUU7Y0FDdEMyRyxXQUFXLENBQUMsV0FBV0ksVUFBVSxFQUFFLENBQUMsR0FBRztnQkFDckNHLE9BQU8sRUFBRSxPQUFPO2dCQUNoQkosSUFBSSxFQUFFQTtjQUNSLENBQUM7WUFDSCxDQUFDLE1BQU07Y0FDTDtjQUNBLE1BQU1LLFVBQVUsR0FBR1AsTUFBTSxDQUFDQyxPQUFPLENBQUNHLFFBQVEsQ0FBQyxDQUN4Q3pKLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1hDLEdBQUcsQ0FBQzRKLEtBQUE7Z0JBQUEsSUFBQyxDQUFDQyxNQUFNLEVBQUVDLEtBQUssQ0FBQyxHQUFBRixLQUFBO2dCQUFBLE9BQUssR0FBR0MsTUFBTSxJQUFJQyxLQUFLLElBQUk7Y0FBQSxFQUFDO2NBRW5EWCxXQUFXLENBQUMsV0FBV0ksVUFBVSxFQUFFLENBQUMsR0FBRztnQkFDckNHLE9BQU8sRUFBRUMsVUFBVSxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM5QlQsSUFBSSxFQUFFQTtjQUNSLENBQUM7WUFDSDtVQUNGLENBQUMsQ0FBQztVQUVGakMsYUFBYSxDQUFDOEIsV0FBVyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxPQUFPcFEsS0FBSyxFQUFFO1VBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGdCQUFnQixFQUFFQSxLQUFLLENBQUM7UUFDeEM7TUFDRjtJQUNGLENBQUM7SUFFRGdRLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCLENBQUMsRUFBRSxDQUFDdE8sT0FBTyxFQUFFRSxLQUFLLENBQUMsQ0FBQzs7RUFFcEI7RUFDQTlDLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUlvRixNQUFNLElBQUk2TCxVQUFVLENBQUN0RyxNQUFNLEdBQUcsQ0FBQyxJQUFJN0gsS0FBSyxFQUFFO01BQzVDLE1BQU0rSSxTQUFTLEdBQUcvSSxLQUFLLENBQUMsQ0FBQztNQUN6QixNQUFNb04sVUFBVSxHQUFHekYsS0FBSyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsTUFBTSxFQUFFc0csVUFBVSxDQUFDdEc7TUFBTyxDQUFDLEVBQUUsTUFBTUYsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEYsTUFBTXVGLFNBQVMsR0FBRzFGLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE1BQU0sRUFBRXNHLFVBQVUsQ0FBQ3RHO01BQU8sQ0FBQyxFQUFFLE1BQU1GLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BRW5GLE1BQU13RixRQUFRLEdBQUczRixLQUFLLENBQUNDLElBQUksQ0FBQztRQUFFQyxNQUFNLEVBQUU7TUFBRSxDQUFDLEVBQUUsQ0FBQzBGLENBQUMsRUFBRTNOLENBQUMsS0FBS0EsQ0FBRSxDQUFDLENBQUN5RixHQUFHLENBQUVvSSxDQUFDLElBQUs7UUFDbEUsTUFBTUMsYUFBYSxHQUFHLEdBQUd0SyxTQUFzQiw2QkFBNkIyRixTQUFTLDBCQUEwQjBFLENBQUMsR0FBQyxDQUFDLE1BQU07UUFDeEgsT0FBTzdCLE1BQU0sQ0FBQzhCLGFBQWEsQ0FBQyxDQUFDc0YsSUFBSSxDQUFDMUQsS0FBQSxJQUEyQjtVQUFBLElBQTFCO1lBQUV4RCxRQUFRO1lBQUVFO1VBQVEsQ0FBQyxHQUFBc0QsS0FBQTtVQUN0RG5CLFVBQVUsQ0FBQ3BHLE9BQU8sQ0FBQyxDQUFDNEYsQ0FBQyxFQUFFSCxDQUFDLEtBQUs7WUFDM0IsTUFBTVIsR0FBRyxHQUFHeE8sV0FBVyxDQUFDbUwsT0FBTyxDQUFDZ0UsQ0FBQyxDQUFDO1lBQ2xDUCxVQUFVLENBQUNJLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBRzNCLFFBQVEsQ0FBQ2tCLEdBQUcsQ0FBQztZQUNoQ0ssU0FBUyxDQUFDRyxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUd6QixPQUFPLENBQUNnQixHQUFHLENBQUM7VUFDaEMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO01BRUZuRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ3dFLFFBQVEsQ0FBQyxDQUFDMEYsSUFBSSxDQUFDLE1BQU07UUFDL0IsTUFBTXZELGFBQWEsR0FBRztVQUNwQixHQUFHLEVBQUUsTUFBTTtVQUNYLEdBQUcsRUFBRSxNQUFNO1VBQ1gsR0FBRyxFQUFFLE1BQU07VUFDWCxHQUFHLEVBQUUsTUFBTTtVQUNYLEdBQUcsRUFBRTtRQUNQLENBQUM7UUFFRCxNQUFNRixRQUFRLEdBQUdwQixVQUFVLENBQUM5SSxHQUFHLENBQUMsQ0FBQ3NJLENBQUMsRUFBRUgsQ0FBQyxLQUFLO1VBQ3hDLE1BQU1rQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUNySyxHQUFHLENBQUVzSyxHQUFHLElBQUs7WUFDeEQsTUFBTUMsUUFBUSxHQUFHLEdBQUdILGFBQWEsQ0FBQ0UsR0FBRyxDQUFDLEdBQUc7WUFDekMsSUFBSWhDLENBQUMsS0FBSyxTQUFTLElBQUlsQixVQUFVLENBQUMsV0FBV2tELEdBQUcsRUFBRSxDQUFDLEVBQUU7Y0FDbkQsT0FBTyxJQUFJQyxRQUFRLFlBQVluRCxVQUFVLENBQUMsV0FBV2tELEdBQUcsRUFBRSxDQUFDLENBQUNaLE9BQU8sRUFBRTtZQUN2RTtZQUNBLE9BQU8sSUFBSWEsUUFBUSxHQUFHO1VBQ3hCLENBQUMsQ0FBQztVQUVGLE9BQU87WUFDTEUsQ0FBQyxFQUFFMUMsVUFBVSxDQUFDSSxDQUFDLENBQUM7WUFDaEJ1QyxDQUFDLEVBQUUxQyxTQUFTLENBQUNHLENBQUMsQ0FBQztZQUNmd0MsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQmpKLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDL0JrSixZQUFZLEVBQUUsVUFBVTtZQUN4QkMsU0FBUyxFQUFFUixVQUFVO1lBQ3JCUyxTQUFTLEVBQUUsTUFBTTtZQUNqQkMsVUFBVSxFQUFFO2NBQ1ZDLEtBQUssRUFBRSxNQUFNO2NBQ2JDLE9BQU8sRUFBRSxPQUFPO2NBQ2hCQyxXQUFXLEVBQUUsTUFBTTtjQUNuQkMsSUFBSSxFQUFFO2dCQUFFQyxJQUFJLEVBQUU7Y0FBRyxDQUFDO2NBQ2xCZSxPQUFPLEVBQUUsT0FBTztjQUFHO2NBQ25CQyxPQUFPLEVBQUUsUUFBUSxDQUFLO1lBQ3hCLENBQUM7WUFDRDdHLE1BQU0sRUFBRTtjQUNOOEYsTUFBTSxFQUFFLFFBQVE7Y0FDaEIvSyxLQUFLLEVBQUVjLFFBQVEsQ0FBQ2tILENBQUMsQ0FBQztjQUNsQjhDLElBQUksRUFBRTtZQUNSLENBQUM7WUFDREUsSUFBSSxFQUFFaEQ7VUFDUixDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsTUFBTWlELGVBQWUsR0FBR3pDLFVBQVUsQ0FBQ0wsT0FBTyxDQUFDLENBQUNILENBQUMsRUFBRUgsQ0FBQyxLQUM5QzdGLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDekMsR0FBRyxDQUFDLENBQUNrSSxDQUFDLEVBQUUzTixDQUFDLE1BQU07VUFDOUJrUSxDQUFDLEVBQUUxQyxVQUFVLENBQUNJLENBQUMsQ0FBQyxDQUFDNU4sQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUN2Qm1RLENBQUMsRUFBRTFDLFNBQVMsQ0FBQ0csQ0FBQyxDQUFDLENBQUM1TixDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQ3RCaVIsSUFBSSxFQUFFLEdBQUc7VUFDVEMsSUFBSSxFQUFFLEdBQUc7VUFDVEcsRUFBRSxFQUFFN0QsVUFBVSxDQUFDSSxDQUFDLENBQUMsQ0FBQzVOLENBQUMsQ0FBQztVQUNwQnNSLEVBQUUsRUFBRTdELFNBQVMsQ0FBQ0csQ0FBQyxDQUFDLENBQUM1TixDQUFDLENBQUM7VUFDbkJtUixLQUFLLEVBQUUsR0FBRztVQUNWQyxLQUFLLEVBQUUsR0FBRztVQUNWRyxVQUFVLEVBQUUxSyxRQUFRLENBQUNrSCxDQUFDLENBQUM7VUFDdkJ5RCxTQUFTLEVBQUUsR0FBRztVQUNkQyxVQUFVLEVBQUUsR0FBRztVQUNmQyxTQUFTLEVBQUUsQ0FBQztVQUNaQyxTQUFTLEVBQUU7UUFDYixDQUFDLENBQUMsQ0FDSixDQUFDO1FBRURqRixVQUFVLENBQUNpRCxRQUFRLENBQUM7UUFDcEIvQyxjQUFjLENBQUNvRSxlQUFlLENBQUM7UUFDL0IsSUFBSXJPLFVBQVUsRUFBRUEsVUFBVSxDQUFDLENBQUM7TUFDOUIsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLEVBQUUsQ0FBQ0QsTUFBTSxFQUFFNkwsVUFBVSxFQUFFM1AsV0FBVyxFQUFFd0IsS0FBSyxFQUFFeU0sVUFBVSxDQUFDLENBQUM7RUFFeEQsTUFBTXRLLGtCQUFrQixHQUFJaUksS0FBSyxJQUFLO0lBQ3BDLElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxJQUFJRCxLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUVuQ2hNLE9BQU8sQ0FBQzZELEdBQUcsQ0FBQ2tJLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO01BQzVDLE1BQU12SCxTQUFTLEdBQUdzSCxLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQ25EN0gsV0FBVyxDQUFDLENBQUNNLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QjtFQUNGLENBQUM7RUFFRCxvQkFDRTlGLDBEQUFBO0lBQU02RCxLQUFLLEVBQUU7TUFBRThCLEtBQUssRUFBQyxPQUFPO01BQUU3QixNQUFNLEVBQUU7SUFBUTtFQUFFLGdCQUM5QzlELDBEQUFBLENBQUN3Six1REFBSTtJQUNIdkUsSUFBSSxFQUFFb0ssT0FBUTtJQUNkNUosTUFBTSxFQUFFO01BQ05zSSxZQUFZLEVBQUUsT0FBTztNQUNyQkMsYUFBYSxFQUFFLE9BQU87TUFDdEJ1QixXQUFXLEVBQUVBLFdBQVc7TUFDeEI3SixLQUFLLEVBQUU7UUFDTHFFLElBQUksRUFBRXJFLEtBQUs7UUFDWDhOLElBQUksRUFBRTtVQUFFQyxJQUFJLEVBQUUsRUFBRTtVQUFFOUssS0FBSyxFQUFFO1FBQVEsQ0FBQztRQUVsQ21LLENBQUMsRUFBRSxHQUFHO1FBQ05DLENBQUMsRUFBRSxJQUFJO1FBQ1B5QixPQUFPLEVBQUU7TUFFWCxDQUFDO01BQ0RqRixXQUFXLEVBQUUsQ0FDWDtRQUNFdUQsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmhKLElBQUksRUFBRSx5QkFBeUI7UUFDL0J3SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUU5SyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDNkwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNFM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmhKLElBQUksRUFBRSx1QkFBdUI7UUFDN0J3SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUU5SyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDNkwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNFM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmhKLElBQUksRUFBRSx5QkFBeUI7UUFDL0J3SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUU5SyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDNkwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNFM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmhKLElBQUksRUFBRSx1QkFBdUI7UUFDN0J3SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUU5SyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDNkwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsQ0FDRjtNQUdEQyxLQUFLLEVBQUU7UUFDTGhQLEtBQUssRUFBRyxLQUFLO1FBQ2JpUCxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ2pCQyxTQUFTLEVBQUUsTUFBTTtRQUNqQkMsU0FBUyxFQUFFLENBQUM7UUFDWkMsU0FBUyxFQUFFLFdBQVc7UUFDdEJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLFFBQVEsRUFBQyxPQUFPO1FBQ2hCQyxRQUFRLEVBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUN0QkMsUUFBUSxFQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7UUFDdkJDLFFBQVEsRUFBRTtNQUVaLENBQUM7TUFDREMsS0FBSyxFQUFFO1FBQ0wzUCxLQUFLLEVBQUcsS0FBSztRQUNiNFAsY0FBYyxFQUFDLEVBQUU7UUFBSTtRQUNyQlgsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNqQkMsU0FBUyxFQUFFLE1BQU07UUFDakJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFNBQVMsRUFBRSxXQUFXO1FBQ3RCQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxRQUFRLEVBQUUsS0FBSztRQUNmQyxRQUFRLEVBQUMsT0FBTztRQUNoQkMsUUFBUSxFQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDdEJDLFFBQVEsRUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO1FBQ3ZCQyxRQUFRLEVBQUU7TUFFWixDQUFDO01BQ0RuSCxNQUFNLEVBQUU7UUFBRUMsQ0FBQyxFQUFFLEVBQUU7UUFBRWhCLENBQUMsRUFBRSxFQUFFO1FBQUVpQixDQUFDLEVBQUUsRUFBRTtRQUFFQyxDQUFDLEVBQUU7TUFBRyxDQUFDO01BQ3RDTixVQUFVLEVBQUUsSUFBSTtNQUNoQnlILE1BQU0sRUFBRTtRQUNOekMsQ0FBQyxFQUFFLENBQUM7UUFDSkMsQ0FBQyxFQUFFLENBQUM7UUFDSk8sT0FBTyxFQUFFLHVCQUF1QjtRQUNoQ0MsV0FBVyxFQUFFLE1BQU07UUFDbkJpQyxXQUFXLEVBQUU7TUFDZixDQUFDO01BQ0RDLGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxTQUFTLEVBQUUsU0FBUztNQUNwQnRDLFVBQVUsRUFBRTtRQUNWdUMsVUFBVSxFQUFFLENBQUM7TUFDZjtJQUNGLENBQUU7SUFDRi9QLE1BQU0sRUFBRTtNQUNOQyxVQUFVLEVBQUUsSUFBSTtNQUNoQitQLGNBQWMsRUFBRTtJQUNsQixDQUFFO0lBQ0YvUixLQUFLLEVBQUU7TUFBQzBKLFNBQVMsRUFBQyxLQUFLO01BQUU1SCxLQUFLLEVBQUUsT0FBTztNQUFFN0IsTUFBTSxFQUFFO0lBQU8sQ0FBRTtJQUMxRFIsT0FBTyxFQUFFNkI7RUFBbUIsQ0FDN0IsQ0FDRSxDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlMFEsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuVjlCO0FBQ3VDO0FBQ3VCO0FBRTlELE1BQU12VixPQUFPLEdBQUdxRSxJQUFBLElBQTRJO0VBQUEsSUFBM0k7SUFBRWxCLE9BQU87SUFBRS9CLFVBQVU7SUFBRWdDLGtCQUFrQjtJQUFFakMsU0FBUztJQUFFRCxXQUFXO0lBQUVNLGlCQUFpQjtJQUFFRSxjQUFjO0lBQUUyQixhQUFhO0lBQUVDO0VBQWdCLENBQUMsR0FBQWUsSUFBQTtFQUNySixNQUFNLENBQUN3UixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHblcsK0NBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbEUsTUFBTW9XLGlCQUFpQixHQUFJakosS0FBSyxJQUFLO0lBQ25DMUosa0JBQWtCLENBQUMwSixLQUFLLENBQUNrSixNQUFNLENBQUNuVSxLQUFLLENBQUM7SUFDcEMsSUFBSWlMLEtBQUssQ0FBQ2tKLE1BQU0sQ0FBQ25VLEtBQUssSUFBRSxVQUFVLEVBQUM7TUFDakNpVSxZQUFZLENBQUMsQ0FBQyxVQUFVLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFBQSxDQUFDLE1BQ2pDO01BQ0ZBLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBQyxVQUFVLENBQUMsQ0FBQztJQUNsQztJQUVKL1UsT0FBTyxDQUFDNkQsR0FBRyxDQUFDa0ksS0FBSyxDQUFDa0osTUFBTSxDQUFDblUsS0FBSyxDQUFDO0lBQy9CZCxPQUFPLENBQUM2RCxHQUFHLENBQUNpUixTQUFTLENBQUM7RUFDeEIsQ0FBQztFQUVELE1BQU01SyxTQUFTLEdBQUc7SUFBQyxHQUFHLEVBQUMsVUFBVTtJQUFDLEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDdkQsR0FBRyxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFDL0MsR0FBRyxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDakQsSUFBSSxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUM7RUFBTSxDQUFDO0VBSzVCLG9CQUNFdkwsMERBQUE7SUFBSzZELEtBQUssRUFBRTtNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFeVMsT0FBTyxFQUFFLE1BQU07TUFBRXRPLGVBQWUsRUFBRTtJQUFXO0VBQUUsZ0JBRTVFakksMERBQUEsQ0FBQ0ksdURBQUc7SUFBQ2lELFNBQVMsRUFBQyxrQ0FBa0M7SUFBQ1EsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFLO0VBQUUsZ0JBQ3hFOUQsMERBQUEsQ0FBQ0ssdURBQUc7SUFBQ21XLEVBQUUsRUFBRTtFQUFFLGdCQUNUeFcsMERBQUE7SUFBSTZELEtBQUssRUFBRTtNQUFFMEosU0FBUyxFQUFFO0lBQU0sQ0FBRTtJQUFDbEssU0FBUyxFQUFDO0VBQXlCLEdBQUMsZ0NBRWpFLENBQ0QsQ0FBQyxlQUNOckQsMERBQUEsQ0FBQ0ssdURBQUc7SUFBQ21XLEVBQUUsRUFBRTtFQUFFLGdCQUNUeFcsMERBQUEsQ0FBQ2tXLHVEQUFNO0lBQ0wvUyxFQUFFLEVBQUMsT0FBTztJQUNWRyxPQUFPLEVBQUVHLE9BQVE7SUFDakJJLEtBQUssRUFBRTtNQUFFMEosU0FBUyxFQUFFO0lBQU0sQ0FBRTtJQUM1QmxLLFNBQVMsRUFBQztFQUE0QixHQUN2QyxvQkFFTyxDQUNMLENBQ0YsQ0FBQyxlQUdOckQsMERBQUEsQ0FBQ0ksdURBQUc7SUFBQ2lELFNBQVMsRUFBQyx1QkFBdUI7SUFBQ1EsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFNO0VBQUUsZ0JBQzlEOUQsMERBQUEsQ0FBQ2lXLHVEQUFTO0lBQUNRLGdCQUFnQixFQUFDLEdBQUc7SUFBQ3BULFNBQVMsRUFBQztFQUFNLGdCQUU5Q3JELDBEQUFBLENBQUNpVyx1REFBUyxDQUFDUyxJQUFJO0lBQUNDLFFBQVEsRUFBQyxHQUFHO0lBQUN0VCxTQUFTLEVBQUM7RUFBTyxnQkFDNUNyRCwwREFBQSxDQUFDaVcsdURBQVMsQ0FBQ3ZOLE1BQU0sUUFBQyxzQ0FBd0IsQ0FBQyxlQUMzQzFJLDBEQUFBLENBQUNpVyx1REFBUyxDQUFDL04sSUFBSSxxQkFDYmxJLDBEQUFBO0lBQUtxRCxTQUFTLEVBQUM7RUFBSyxnQkFDbEJyRCwwREFBQTtJQUFLcUQsU0FBUyxFQUFDO0VBQWlDLGdCQUM5Q3JELDBEQUFBO0lBQ0V5TixJQUFJLEVBQUMsT0FBTztJQUNadEssRUFBRSxFQUFHLFVBQVU7SUFDZndRLElBQUksRUFBQyxhQUFhO0lBQ2xCeFIsS0FBSyxFQUFDLFVBQVU7SUFDaEJrQixTQUFTLEVBQUMsa0JBQWtCO0lBQzVCdVQsUUFBUSxFQUFFUCxpQkFBa0I7SUFDNUJRLE9BQU8sRUFBRW5WLFVBQVUsS0FBSyxVQUFXLENBQUM7RUFBQSxDQUNyQyxDQUFDLGVBQ0YxQiwwREFBQTtJQUNBOFcsT0FBTyxFQUFDLFVBQVU7SUFDbEJ6VCxTQUFTLEVBQUMsdUJBQXVCO0lBQ2pDUSxLQUFLLEVBQUU7TUFBRWtULFFBQVEsRUFBRTtJQUFPO0VBQUUsR0FDM0IsMkJBQVksQ0FDVixDQUFDLGVBQ04vVywwREFBQTtJQUFLcUQsU0FBUyxFQUFDO0VBQWlDLGdCQUM5Q3JELDBEQUFBO0lBQ0V5TixJQUFJLEVBQUMsT0FBTztJQUNadEssRUFBRSxFQUFDLFdBQVc7SUFDZHdRLElBQUksRUFBQyxhQUFhO0lBQ2xCeFIsS0FBSyxFQUFDLFdBQVc7SUFDakJrQixTQUFTLEVBQUMsa0JBQWtCO0lBQzVCdVQsUUFBUSxFQUFFUCxpQkFBa0I7SUFDNUJRLE9BQU8sRUFBRW5WLFVBQVUsS0FBSyxXQUFZLENBQUM7RUFBQSxDQUN0QyxDQUFDLGVBQ0YxQiwwREFBQTtJQUNBOFcsT0FBTyxFQUFDLFdBQVc7SUFDbkJ6VCxTQUFTLEVBQUMsdUJBQXVCO0lBQ2pDUSxLQUFLLEVBQUU7TUFBRWtULFFBQVEsRUFBRTtJQUFPO0VBQUUsR0FDM0IsNkNBQWUsQ0FDYixDQUNGLENBQ1MsQ0FDRixDQUFDLGVBR2pCL1csMERBQUEsQ0FBQ2lXLHVEQUFTLENBQUNTLElBQUk7SUFBQ0MsUUFBUSxFQUFDLEdBQUc7SUFBQ3RULFNBQVMsRUFBQztFQUFPLGdCQUM1Q3JELDBEQUFBLENBQUNpVyx1REFBUyxDQUFDdk4sTUFBTSxRQUFDLE9BQXVCLENBQUMsZUFDMUMxSSwwREFBQSxDQUFDaVcsdURBQVMsQ0FBQy9OLElBQUksUUFDWnpHLFNBQVMsQ0FBQzRHLEdBQUcsQ0FBRXJGLEtBQUssaUJBQ25CaEQsMERBQUE7SUFBS2dJLEdBQUcsRUFBRWhGO0VBQU0sZ0JBQ2RoRCwwREFBQTtJQUNFeU4sSUFBSSxFQUFFMEksU0FBUyxDQUFDLENBQUMsQ0FBRTtJQUNuQmhULEVBQUUsRUFBSUgsS0FBTTtJQUNaNlQsT0FBTyxFQUFFN1UsY0FBYyxDQUFDVSxRQUFRLENBQUNNLEtBQUssQ0FBRTtJQUN4QzRULFFBQVEsRUFBRUEsQ0FBQSxLQUFNalQsYUFBYSxDQUFDWCxLQUFLLEVBQUNtVCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUU7SUFDbER4QyxJQUFJLEVBQUM7RUFBTyxDQUNiLENBQUMsZUFDRjNULDBEQUFBO0lBQU84VyxPQUFPLEVBQUU5VDtFQUFNLEdBQUV1SSxTQUFTLENBQUN2SSxLQUFLLENBQVMsQ0FDN0MsQ0FDTixDQUNhLENBQ0YsQ0FBQyxlQUdqQmhELDBEQUFBLENBQUNpVyx1REFBUyxDQUFDUyxJQUFJO0lBQUNDLFFBQVEsRUFBQyxHQUFHO0lBQUN0VCxTQUFTLEVBQUM7RUFBTyxnQkFDNUNyRCwwREFBQSxDQUFDaVcsdURBQVMsQ0FBQ3ZOLE1BQU0sUUFBQyxTQUF5QixDQUFDLGVBQzVDMUksMERBQUEsQ0FBQ2lXLHVEQUFTLENBQUMvTixJQUFJLFFBQ1oxRyxXQUFXLENBQUM2RyxHQUFHLENBQUV2RixPQUFPLGlCQUN2QjlDLDBEQUFBO0lBQUtnSSxHQUFHLEVBQUVsRjtFQUFRLGdCQUNoQjlDLDBEQUFBO0lBQ0V5TixJQUFJLEVBQUUwSSxTQUFTLENBQUMsQ0FBQyxDQUFFO0lBQ25CaFQsRUFBRSxFQUFJTCxPQUFRO0lBQ2QrVCxPQUFPLEVBQUUvVSxpQkFBaUIsQ0FBQ1ksUUFBUSxDQUFDSSxPQUFPLENBQUU7SUFDN0M4VCxRQUFRLEVBQUVBLENBQUEsS0FBTWhULGVBQWUsQ0FBQ2QsT0FBTyxFQUFDcVQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFFO0lBQ3REeEMsSUFBSSxFQUFDO0VBQVMsQ0FDZixDQUFDLGVBQ0YzVCwwREFBQTtJQUFPOFcsT0FBTyxFQUFFaFU7RUFBUSxHQUFFQSxPQUFlLENBQ3RDLENBQ04sQ0FDYSxDQUNGLENBR1AsQ0FDUixDQUNGLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWV4QyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJNkI7QUFDaEI7O0FBRW5DO0FBQ0EsTUFBTTRGLFNBQVMsR0FBRyxNQUFPd0QsR0FBRyxJQUFLO0VBQy9CLElBQUk7SUFDRixNQUFNbkQsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ2tELEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUNuRCxRQUFRLENBQUNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyx1QkFBdUJILFFBQVEsQ0FBQ29ELE1BQU0sRUFBRSxDQUFDO0lBQzNFLE1BQU1DLFdBQVcsR0FBR3JELFFBQVEsQ0FBQ3NELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUN4RCxJQUFJRixXQUFXLElBQUlBLFdBQVcsQ0FBQ2xILFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO01BQzNELE9BQU8sTUFBTTZELFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxNQUFNO01BQ0wsTUFBTW1ELElBQUksR0FBRyxNQUFNeEQsUUFBUSxDQUFDd0QsSUFBSSxDQUFDLENBQUM7TUFDbEMsT0FBT0EsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNySCxNQUFNLENBQUVzSCxJQUFJLElBQUtBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUQ7RUFDRixDQUFDLENBQUMsT0FBTzlJLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxjQUFjLEVBQUVBLEtBQUssQ0FBQztJQUNwQyxPQUFPLEVBQUU7RUFDWDtBQUNGLENBQUM7O0FBRUQ7QUFDQSxNQUFNdU4sYUFBYSxHQUFHLE1BQU94SSxRQUFRLElBQUs7RUFDeEMsSUFBSTtJQUNGLE1BQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLFFBQVEsQ0FBQztJQUN0QyxNQUFNNEQsSUFBSSxHQUFHLE1BQU14RCxRQUFRLENBQUN3RCxJQUFJLENBQUMsQ0FBQztJQUNsQyxPQUFPQSxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ3JILE1BQU0sQ0FBRXNILElBQUksSUFBS0EsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztFQUM5RCxDQUFDLENBQUMsT0FBTzlJLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxjQUFjLEVBQUVBLEtBQUssQ0FBQztJQUNwQyxPQUFPLEVBQUU7RUFDWDtBQUNGLENBQUM7QUFFRCxNQUFNbUQsYUFBYSxHQUFHSSxJQUFBLElBQW1FO0VBQUEsSUFBbEU7SUFBRVcsTUFBTTtJQUFFNUQsVUFBVTtJQUFFc0IsS0FBSztJQUFFRixPQUFPO0lBQUVnRCxTQUFTO0lBQUVQO0VBQVcsQ0FBQyxHQUFBWixJQUFBO0VBQ2xGLE1BQU0sQ0FBQ3dHLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUduTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUM5QyxNQUFNLENBQUN5RixLQUFLLEVBQUUyRixRQUFRLENBQUMsR0FBR3BMLCtDQUFRLENBQUMsT0FBTyxDQUFDO0VBRTNDQyxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNb08sYUFBYSxHQUFHLE1BQUFBLENBQUEsS0FBWTtNQUNoQyxJQUFJO1FBQ0YsTUFBTXRDLElBQUksR0FBRyxDQUFDO1FBQ2QsTUFBTXVDLFFBQVEsR0FBR3pJLFNBQVMsSUFBSTlDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQztRQUMzRCxNQUFNZ1UsSUFBSSxHQUFHLEdBQUc1USxTQUFzQiw2QkFBNkJtSSxRQUFRLGlCQUFpQnZDLElBQUksT0FBTztRQUN2RyxNQUFNaUwsV0FBVyxHQUFHLEdBQUc3USxTQUFzQiw2QkFBNkJtSSxRQUFRLHNCQUFzQjtRQUN4RyxNQUFNMkksTUFBTSxHQUFHLEdBQUc5USxTQUFzQiw4QkFBOEI7UUFDdEU7UUFDQSxNQUFNLENBQUMrUSxRQUFRLEVBQUUzVixXQUFXLEVBQUU0VixNQUFNLENBQUMsR0FBRyxNQUFNdkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FDeEQ1RixTQUFTLENBQUM4USxJQUFJLENBQUMsRUFDZnJJLGFBQWEsQ0FBQ3NJLFdBQVcsQ0FBQyxFQUMxQi9RLFNBQVMsQ0FBQ2dSLE1BQU0sQ0FBQyxDQUNsQixDQUFDO1FBRUYsSUFBSSxDQUFDMVYsV0FBVyxDQUFDa0IsUUFBUSxDQUFDSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUNyQ3pCLE9BQU8sQ0FBQ3lGLElBQUksQ0FBQyxZQUFZaEUsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7VUFDbERzSSxZQUFZLENBQUMsRUFBRSxDQUFDO1VBQ2hCO1FBQ0Y7O1FBRUE7UUFDQSxNQUFNc0IsWUFBWSxHQUFHbEwsV0FBVyxDQUFDbUwsT0FBTyxDQUFDN0osT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0rRCxXQUFXLEdBQUdzUSxRQUFRLENBQUN6SyxZQUFZLENBQUM7UUFDMUMsSUFBSSxDQUFDN0YsV0FBVyxFQUFFO1VBQ2hCeEYsT0FBTyxDQUFDeUYsSUFBSSxDQUFDLG9DQUFvQzRGLFlBQVksSUFBSSxDQUFDO1VBQ2xFdEIsWUFBWSxDQUFDLEVBQUUsQ0FBQztVQUNoQjtRQUNGOztRQUVBO1FBQ0EsTUFBTWlNLGFBQWEsR0FBRzVGLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDN0ssV0FBVyxDQUFDLENBQUN3QixHQUFHLENBQUM2QyxLQUFBO1VBQUEsSUFBQyxDQUFDbEQsR0FBRyxFQUFFN0YsS0FBSyxDQUFDLEdBQUErSSxLQUFBO1VBQUEsT0FBTTtZQUN2RTZCLFFBQVEsRUFBRS9FLEdBQUc7WUFDYjdGLEtBQUssRUFBRTZGLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHK0csVUFBVSxDQUFDNU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFHLENBQUM7WUFBRTtZQUNyRG1WLFNBQVMsRUFBRUYsTUFBTSxDQUFDcFAsR0FBRztVQUN2QixDQUFDO1FBQUEsQ0FBQyxDQUFDOztRQUVIO1FBQ0EsTUFBTTBHLFVBQVUsR0FBRzJJLGFBQWEsQ0FDN0JySyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtBLENBQUMsQ0FBQy9LLEtBQUssR0FBRzhLLENBQUMsQ0FBQzlLLEtBQUssQ0FBQyxDQUNqQ2lHLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRWZnRCxZQUFZLENBQUNzRCxVQUFVLENBQUM7UUFDeEJyRCxRQUFRLENBQUMsR0FBR3ZJLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQy9CeUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hCLENBQUMsQ0FBQyxPQUFPbkUsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGFBQWEsRUFBRUEsS0FBSyxDQUFDO01BQ3JDO0lBQ0YsQ0FBQzs7SUFFRDtJQUNBLElBQ0VNLFVBQVUsS0FBSyxVQUFVLEtBQ3hCNEQsTUFBTSxJQUFJNkYsU0FBUyxDQUFDTixNQUFNLEtBQUssQ0FBQyxJQUFJL0UsU0FBUyxDQUFDLEVBQy9DO01BQ0F3SSxhQUFhLENBQUMsQ0FBQztJQUNqQjtFQUNGLENBQUMsRUFBRSxDQUFDNU0sVUFBVSxFQUFFc0IsS0FBSyxFQUFFRixPQUFPLEVBQUV5VSxJQUFJLENBQUNDLFNBQVMsQ0FBQzFSLFNBQVMsQ0FBQyxFQUFFUixNQUFNLENBQUMsQ0FBQztFQUVuRSxvQkFDRXRGLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBQzBKLFNBQVMsRUFBQyxJQUFJO01BQUNDLFlBQVksRUFBQyxJQUFJO01BQUU3SCxLQUFLLEVBQUUsTUFBTTtNQUFFN0IsTUFBTSxFQUFFO0lBQU07RUFBRSxnQkFDNUU5RCwwREFBQSxDQUFDd0osdURBQUk7SUFDSHZFLElBQUksRUFBRSxDQUNKO01BQ0V3SSxJQUFJLEVBQUUsS0FBSztNQUNYcUYsQ0FBQyxFQUFFM0gsU0FBUyxDQUFDOUMsR0FBRyxDQUFFL0YsSUFBSSxJQUFLQSxJQUFJLENBQUNILEtBQUssQ0FBQyxDQUFDc1YsT0FBTyxDQUFDLENBQUM7TUFBRTtNQUNsRDFFLENBQUMsRUFBRTVILFNBQVMsQ0FBQzlDLEdBQUcsQ0FBRS9GLElBQUksSUFBS0EsSUFBSSxDQUFDeUssUUFBUSxDQUFDLENBQUMwSyxPQUFPLENBQUMsQ0FBQztNQUFFO01BQ3JEQyxVQUFVLEVBQUV2TSxTQUFTLENBQUM5QyxHQUFHLENBQUUvRixJQUFJLElBQUtBLElBQUksQ0FBQ2dWLFNBQVMsQ0FBQyxDQUFDRyxPQUFPLENBQUMsQ0FBQztNQUFFO01BQy9ERSxXQUFXLEVBQUUsR0FBRztNQUFFO01BQ2xCL0osTUFBTSxFQUFFO1FBQUVqRixLQUFLLEVBQUU7TUFBWSxDQUFDO01BQUU7TUFDaENpUCxhQUFhLEVBQ2IsbURBQW1ELENBQUU7SUFDdkQsQ0FBQyxDQUNEO0lBQ0ZuUyxNQUFNLEVBQUU7TUFDTkMsS0FBSyxFQUFFO1FBQ0xxRSxJQUFJLEVBQUVyRSxLQUFLO1FBQ1hvTixDQUFDLEVBQUUsR0FBRztRQUNOQyxDQUFDLEVBQUUsSUFBSTtRQUNQeUIsT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUNERSxLQUFLLEVBQUU7UUFDTEUsU0FBUyxFQUFFLE1BQU07UUFDakJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pnRCxNQUFNLEVBQUUsS0FBSztRQUNiQyxVQUFVLEVBQUU7TUFDZCxDQUFDO01BQ0R6QyxLQUFLLEVBQUU7UUFDTFQsU0FBUyxFQUFFLE1BQU07UUFDakJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pnRCxNQUFNLEVBQUUsS0FBSztRQUNiblMsS0FBSyxFQUFFO01BQ1QsQ0FBQztNQUNEcUksWUFBWSxFQUFFLE9BQU87TUFDckJDLGFBQWEsRUFBRSxPQUFPO01BQ3RCQyxNQUFNLEVBQUU7UUFBRUMsQ0FBQyxFQUFFLEVBQUU7UUFBRWhCLENBQUMsRUFBRSxFQUFFO1FBQUVpQixDQUFDLEVBQUUsRUFBRTtRQUFFQyxDQUFDLEVBQUU7TUFBRyxDQUFDO01BQ3RDZ0YsVUFBVSxFQUFFO1FBQ1ZDLEtBQUssRUFBQyxNQUFNO1FBQ1pHLElBQUksRUFBRTtVQUNKQyxJQUFJLEVBQUUsRUFBRTtVQUFFO1VBQ1Y5SyxLQUFLLEVBQUUsT0FBTyxDQUFFO1FBQ2xCLENBQUM7UUFDRDJLLE9BQU8sRUFBRSxhQUFhO1FBQUU7UUFDeEJDLFdBQVcsRUFBRSxNQUFNLENBQUU7TUFDdkI7SUFDRixDQUFFO0lBRUExUCxLQUFLLEVBQUU7TUFBRThCLEtBQUssRUFBRSxNQUFNO01BQUU3QixNQUFNLEVBQUU7SUFBTyxDQUFFLENBQUM7RUFBQSxDQUM3QyxDQUNFLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVTLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEp1QjtBQUNoQjs7QUFFbkM7QUFDQSxNQUFNMkIsU0FBUyxHQUFHLE1BQU93RCxHQUFHLElBQUs7RUFDL0IsSUFBSTtJQUNGLE1BQU1uRCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDa0QsR0FBRyxDQUFDO0lBQ2pDLElBQUksQ0FBQ25ELFFBQVEsQ0FBQ0UsRUFBRSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHVCQUF1QkgsUUFBUSxDQUFDb0QsTUFBTSxFQUFFLENBQUM7SUFDM0UsTUFBTUMsV0FBVyxHQUFHckQsUUFBUSxDQUFDc0QsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3hELElBQUlGLFdBQVcsSUFBSUEsV0FBVyxDQUFDbEgsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7TUFDM0QsT0FBTyxNQUFNNkQsUUFBUSxDQUFDSyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLE1BQU07TUFDTCxNQUFNbUQsSUFBSSxHQUFHLE1BQU14RCxRQUFRLENBQUN3RCxJQUFJLENBQUMsQ0FBQztNQUNsQyxPQUFPQSxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ3JILE1BQU0sQ0FBRXNILElBQUksSUFBS0EsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5RDtFQUNGLENBQUMsQ0FBQyxPQUFPOUksS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRUEsS0FBSyxDQUFDO0lBQ3BDLE9BQU8sRUFBRTtFQUNYO0FBQ0YsQ0FBQztBQUlELE1BQU1rRCxhQUFhLEdBQUdLLElBQUEsSUFBK0M7RUFBQSxJQUE5QztJQUFFVyxNQUFNO0lBQUU1RCxVQUFVO0lBQUVzQixLQUFLO0lBQUV1QztFQUFXLENBQUMsR0FBQVosSUFBQTtFQUM5RCxNQUFNLENBQUN3RyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHbkwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDOUMsTUFBTSxDQUFDeUYsS0FBSyxFQUFFMkYsUUFBUSxDQUFDLEdBQUdwTCwrQ0FBUSxDQUFDLFFBQVEsQ0FBQztFQUU1Q0MsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsTUFBTW9PLGFBQWEsR0FBRyxNQUFBQSxDQUFBLEtBQVk7TUFDaEMsSUFBSTtRQUNGLE1BQU10QyxJQUFJLEdBQUcsQ0FBQztRQUNkLE1BQU11QyxRQUFRLEdBQUd2TCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNZ1UsSUFBSSxHQUFHLEdBQUc1USxTQUFzQiw2QkFBNkJtSSxRQUFRLHVCQUF1QnZDLElBQUksT0FBTztRQUM3RyxNQUFNa0wsTUFBTSxHQUFHLEdBQUc5USxTQUFzQiw4QkFBOEI7O1FBRXRFO1FBQ0EsTUFBTSxDQUFDK1EsUUFBUSxFQUFFQyxNQUFNLENBQUMsR0FBRyxNQUFNdkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FDM0M1RixTQUFTLENBQUM4USxJQUFJLENBQUMsRUFDZjlRLFNBQVMsQ0FBQ2dSLE1BQU0sQ0FBQyxDQUNsQixDQUFDO1FBRUY3VixPQUFPLENBQUM2RCxHQUFHLENBQUMsR0FBRyxFQUFDaVMsUUFBUSxDQUFDOztRQUd6QjtRQUNBLE1BQU1FLGFBQWEsR0FBRzVGLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDeUYsUUFBUSxDQUFDLENBQUM5TyxHQUFHLENBQUM2QyxLQUFBO1VBQUEsSUFBQyxDQUFDbEQsR0FBRyxFQUFFN0YsS0FBSyxDQUFDLEdBQUErSSxLQUFBO1VBQUEsT0FBTTtZQUVwRTZCLFFBQVEsRUFBRS9FLEdBQUc7WUFDYjdGLEtBQUssRUFBRTZGLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHK0csVUFBVSxDQUFDNU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDcERtVixTQUFTLEVBQUVGLE1BQU0sQ0FBQ3BQLEdBQUc7VUFDdkIsQ0FBQztRQUFBLENBQUMsQ0FBQztRQUNIM0csT0FBTyxDQUFDNkQsR0FBRyxDQUFDLEdBQUcsRUFBQ21TLGFBQWEsQ0FBQzs7UUFHOUI7UUFDQSxNQUFNM0ksVUFBVSxHQUFHMkksYUFBYSxDQUM3QnJLLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0EsQ0FBQyxDQUFDL0ssS0FBSyxHQUFHOEssQ0FBQyxDQUFDOUssS0FBSyxDQUFDLENBQ2pDaUcsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFZmdELFlBQVksQ0FBQ3NELFVBQVUsQ0FBQztRQUN4QnJELFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDakJoSyxPQUFPLENBQUM2RCxHQUFHLENBQUNpRyxTQUFTLENBQUM7UUFDdEI1RixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDaEIsQ0FBQyxDQUFDLE9BQU9uRSxLQUFLLEVBQUU7UUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsYUFBYSxFQUFFQSxLQUFLLENBQUM7TUFDckM7SUFDRixDQUFDO0lBRUQsSUFBSU0sVUFBVSxLQUFLLFdBQVcsS0FBSzRELE1BQU0sSUFBSTZGLFNBQVMsQ0FBQ04sTUFBTSxLQUFLLENBQUMsQ0FBRSxFQUFFO01BQ3JFeUQsYUFBYSxDQUFDLENBQUM7SUFDakI7RUFDRixDQUFDLEVBQUUsQ0FBQzVNLFVBQVUsRUFBRXNCLEtBQUssRUFBRXNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFakMsb0JBQ0V0RiwwREFBQTtJQUFLNkQsS0FBSyxFQUFFO01BQUMwSixTQUFTLEVBQUMsSUFBSTtNQUFDQyxZQUFZLEVBQUMsSUFBSTtNQUFFN0gsS0FBSyxFQUFFLE1BQU07TUFBRTdCLE1BQU0sRUFBRTtJQUFNO0VBQUUsZ0JBQzVFOUQsMERBQUEsQ0FBQ3dKLHVEQUFJO0lBQ0h2RSxJQUFJLEVBQUUsQ0FDSjtNQUNFd0ksSUFBSSxFQUFFLEtBQUs7TUFDWHFGLENBQUMsRUFBRTNILFNBQVMsQ0FBQzlDLEdBQUcsQ0FBRS9GLElBQUksSUFBS0EsSUFBSSxDQUFDSCxLQUFLLENBQUMsQ0FBQ3NWLE9BQU8sQ0FBQyxDQUFDO01BQ2hEMUUsQ0FBQyxFQUFFNUgsU0FBUyxDQUFDOUMsR0FBRyxDQUFFL0YsSUFBSSxJQUFLQSxJQUFJLENBQUN5SyxRQUFRLENBQUMsQ0FBQzBLLE9BQU8sQ0FBQyxDQUFDO01BQ25EQyxVQUFVLEVBQUV2TSxTQUFTLENBQUM5QyxHQUFHLENBQUUvRixJQUFJLElBQUtBLElBQUksQ0FBQ2dWLFNBQVMsQ0FBQyxDQUFDRyxPQUFPLENBQUMsQ0FBQztNQUFFOztNQUUvREUsV0FBVyxFQUFFLEdBQUc7TUFDaEIvSixNQUFNLEVBQUU7UUFBRWpGLEtBQUssRUFBRTtNQUFZLENBQUM7TUFDOUJpUCxhQUFhLEVBQ2IsbURBQW1ELENBQUU7SUFDdkQsQ0FBQyxDQUNEO0lBQ0ZuUyxNQUFNLEVBQUU7TUFDTkMsS0FBSyxFQUFFO1FBQ0xxRSxJQUFJLEVBQUVyRSxLQUFLO1FBQ1hvTixDQUFDLEVBQUUsR0FBRztRQUNOQyxDQUFDLEVBQUUsSUFBSTtRQUNQeUIsT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUNERSxLQUFLLEVBQUU7UUFDTEUsU0FBUyxFQUFFLE1BQU07UUFDakJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pnRCxNQUFNLEVBQUUsS0FBSztRQUNiQyxVQUFVLEVBQUU7TUFDZCxDQUFDO01BQ0R6QyxLQUFLLEVBQUU7UUFDTFQsU0FBUyxFQUFFLE1BQU07UUFDakJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pnRCxNQUFNLEVBQUUsS0FBSztRQUNiblMsS0FBSyxFQUFFO01BQ1QsQ0FBQztNQUNEcUksWUFBWSxFQUFFLE9BQU87TUFDckJDLGFBQWEsRUFBRSxPQUFPO01BQ3RCQyxNQUFNLEVBQUU7UUFBRUMsQ0FBQyxFQUFFLEVBQUU7UUFBRWhCLENBQUMsRUFBRSxFQUFFO1FBQUVpQixDQUFDLEVBQUUsRUFBRTtRQUFFQyxDQUFDLEVBQUU7TUFBRyxDQUFDO01BQ3RDZ0YsVUFBVSxFQUFFO1FBQ1ZDLEtBQUssRUFBQyxNQUFNO1FBQ1pHLElBQUksRUFBRTtVQUNKQyxJQUFJLEVBQUUsRUFBRTtVQUFFO1VBQ1Y5SyxLQUFLLEVBQUUsT0FBTyxDQUFFO1FBQ2xCLENBQUM7UUFDRDJLLE9BQU8sRUFBRSxhQUFhO1FBQUU7UUFDeEJDLFdBQVcsRUFBRSxNQUFNLENBQUU7TUFDdkI7SUFDRixDQUFFO0lBRUYxUCxLQUFLLEVBQUU7TUFBRThCLEtBQUssRUFBRSxNQUFNO01BQUU3QixNQUFNLEVBQUU7SUFBTyxDQUFFLENBQUM7RUFBQSxDQUMzQyxDQUNFLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVRLGFBQWE7Ozs7OztVQ2hJNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzdCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvYXBwLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvY29udGVudC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2dvLWFueXdoZXJlLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS1jb21wYW55LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvb2NjdXB5LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGVyc29uYS10b3BpYy5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3NpZGViYXIuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy90cmVuZC1jb21wLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtdG9waXguanN4Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXIuanN4JztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudC5qc3gnO1xuaW1wb3J0IHsgdXNlQXV0aDAgfSBmcm9tICdAYXV0aDAvYXV0aDAtcmVhY3QnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbG9naW5XaXRoUmVkaXJlY3QsIGxvZ291dCwgaXNBdXRoZW50aWNhdGVkLCB1c2VyIH0gPSB1c2VBdXRoMCgpOyAvLyBBdXRoMOOBruaDheWgseOCkuWPluW+l1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGxvZ2luV2l0aFJlZGlyZWN0KHtcbiAgICAgICAgY29ubmVjdGlvbjogJ1VzZXJuYW1lLVBhc3N3b3JkLUF1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg63jgrDjgqTjg7Pjgqjjg6njg7w6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhcnJvd0NvbG9yID0gW1xuICAgICcjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnLFxuICAgICcjM0U5RTZGJywgJyNGMzgxODEnLCAnIzU0NUU3NScsICcjRkZCNjI3JywgJyM1Nzc1OTAnLFxuICBdO1xuICBjb25zdCBjb21wYW55TGlzdCA9IFtcbiAgICAn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvuWkp+ael+e1hCcsICfmuIXmsLTlu7roqK3moKrlvI/kvJrnpL4nLCAn5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+JyxcbiAgICAn5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXJywgJ+agquW8j+S8muekvumVt+iwt+W3peOCs+ODvOODneODrOODvOOCt+ODp+ODsycsICfliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL4nLFxuICAgICfkupTmtIvlu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+44OV44K444K/JywgJ+aIuOeUsOW7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7nhorosLfntYQnLFxuICBdO1xuICBjb25zdCB0b3BpY0xpc3QgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzExJyxcIjE1XCIsXCIxN1wiXTtcblxuICBjb25zdCBbdmlzdWFsVHlwZSwgc2V0VmlzdWFsVHlwZV0gPSB1c2VTdGF0ZSgnb25lLXRvcGljJyk7XG4gIGNvbnN0IFtpc0FwcGxpZWQsIHNldElzQXBwbGllZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29tcGFuaWVzLCBzZXRTZWxlY3RlZENvbXBhbmllc10gPSB1c2VTdGF0ZShbJ+agquW8j+S8muekvueGiuiwt+e1hCddKTtcbiAgY29uc3QgW3NlbGVjdGVkVG9waWNzLCBzZXRTZWxlY3RlZFRvcGljc10gPSB1c2VTdGF0ZShbJzAnXSk7XG5cbiAgY29uc3QgaGFuZGxlVmlzdWFsVHlwZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldFZpc3VhbFR5cGUodmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwcGx5ID0gKCkgPT4ge1xuICAgIHNldElzQXBwbGllZCgxKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTZWxlY3Rpb24gPSAoaXRlbSwgc2V0U2VsZWN0ZWQsIGJ1dHRvbXR5cGUpID0+IHtcbiAgICBpZiAoYnV0dG9tdHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgc2V0U2VsZWN0ZWQoKHByZXZTZWxlY3RlZCkgPT5cbiAgICAgICAgcHJldlNlbGVjdGVkLmluY2x1ZGVzKGl0ZW0pXG4gICAgICAgICAgPyBwcmV2U2VsZWN0ZWQuZmlsdGVyKChpKSA9PiBpICE9PSBpdGVtKVxuICAgICAgICAgIDogWy4uLnByZXZTZWxlY3RlZCwgaXRlbV1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkKFtpdGVtXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IENvbXBhbnlDaGVja2JveENoYW5nZSA9IChjb21wYW55LCBidXR0b210eXBlKSA9PiB7XG4gICAgdG9nZ2xlU2VsZWN0aW9uKGNvbXBhbnksIHNldFNlbGVjdGVkQ29tcGFuaWVzLCBidXR0b210eXBlKTtcbiAgfTtcblxuICBjb25zdCBUb3BpY0NoZWNrYm94Q2hhbmdlID0gKHRvcGljLCBidXR0b210eXBlKSA9PiB7XG4gICAgdG9nZ2xlU2VsZWN0aW9uKHRvcGljLCBzZXRTZWxlY3RlZFRvcGljcywgYnV0dG9tdHlwZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZWxlY3RlZENvbXBhbmllcyhbJ+agquW8j+S8muekvueGiuiwt+e1hCddKTtcbiAgICBzZXRTZWxlY3RlZFRvcGljcyhbJzAnXSk7XG4gIH0sIFt2aXN1YWxUeXBlXSk7XG5cbiAgY29uc3QgcmVzZXRJc0FwcGxpZWQgPSAoKSA9PiB7XG4gICAgc2V0SXNBcHBsaWVkKDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpZD1cInJlYWN0LWNvbnRlbnRcIiBmbHVpZCBjbGFzc05hbWU9XCJiZy1saWdodFwiPlxuICAgICAgPFJvdz5cbiAgICAgICAgeyFpc0F1dGhlbnRpY2F0ZWQgPyAoIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOBquOBhOWgtOWQiFxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDE+44Ot44Kw44Kk44Oz44GM5b+F6KaB44Gn44GZPC9oMT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+XG4gICAgICAgICAgICAgICAg44Ot44Kw44Kk44OzXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICkgOiAoIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+WgtOWQiFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7Lyog44K144Kk44OJ44OQ44O8ICovfVxuICAgICAgICAgICAgPENvbCBtZD17M30gY2xhc3NOYW1lPVwiYm9yZGVyLWVuZFwiPlxuICAgICAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgICAgIG9uQXBwbHk9e2hhbmRsZUFwcGx5fVxuICAgICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgICAgb25WaXN1YWxUeXBlQ2hhbmdlPXtoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHRvcGljTGlzdD17dG9waWNMaXN0fVxuICAgICAgICAgICAgICAgIGNvbXBhbnlMaXN0PXtjb21wYW55TGlzdH1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbXBhbmllcz17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb3BpY3M9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlVG9waWM9e1RvcGljQ2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wYW55PXtDb21wYW55Q2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgey8qIOODoeOCpOODs+OCs+ODs+ODhuODs+ODhCAqL31cbiAgICAgICAgICAgIDxDb2wgbWQ9ezl9IGNsYXNzTmFtZT1cImJvcmRlci1lbmRcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgICAgcGxvdD17aXNBcHBsaWVkfVxuICAgICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgICAgdG9waWM9e3NlbGVjdGVkVG9waWNzfVxuICAgICAgICAgICAgICAgIGNvbXBhbnk9e3NlbGVjdGVkQ29tcGFuaWVzfVxuICAgICAgICAgICAgICAgIHJlc2V0QXBwbHk9e3Jlc2V0SXNBcHBsaWVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfWZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFBsb3RQaWVBIGZyb20gJy4vb2NjdXB5LmpzeCc7XG5pbXBvcnQgUGxvdFBpZUIgZnJvbSAnLi9vY2N1cHktY29tcGFueS5qc3gnO1xuaW1wb3J0IFBsb3RQZXJzb25hQ29tcCBmcm9tICcuL3BlcnNvbmEtY29tcC5qc3gnO1xuaW1wb3J0IFBsb3RQZXJzb25hVG9waWMgZnJvbSAnLi9wZXJzb25hLXRvcGljLmpzeCc7XG5cbmltcG9ydCBQbG90QmFyQ2hhcnRBIGZyb20gJy4vdHJlbmQtdG9waXguanN4JztcbmltcG9ydCBQbG90QmFyQ2hhcnRCIGZyb20gJy4vdHJlbmQtY29tcC5qc3gnO1xuaW1wb3J0IFByb3Bvc2VkRGF0YSwgeyBnZXRDYXJkRGF0YSB9IGZyb20gXCIuL2dvLWFueXdoZXJlLmpzeFwiOyAvLyDmraPjgZfjgYTjg5HjgrnjgpLmjIflrppcbmltcG9ydCBQcm9wb3NlZFZpc3VhbGl6ZSBmcm9tICcuL2dvLWFueXdoZXJlLmpzeCc7XG5cblxuXG5cblxuY29uc3QgQ29udGVudCA9ICh7cGxvdCx2aXN1YWxUeXBlLHRvcGljLGNvbXBhbnkscmVzZXRBcHBseX0pID0+IHtcblxuXG5cbiAgICBjb25zdCBbY2xpY2tEYXRhLCBzZXRDbGlja0RhdGFdID0gdXNlU3RhdGUoKTsgLy8g44Kv44Oq44OD44Kv44OH44O844K/44Gu54q25oWLXG4gICAgY29uc3QgW2NsaWNrQ29tcGFueURhdGEsIHNldENsaWNrQ29tcGFueURhdGFdID0gdXNlU3RhdGUoKTsgLy8g44Kv44Oq44OD44Kv44OH44O844K/44Gu54q25oWLXG5cbiAgICBjb25zdCBoYW5kbGVQaWVDaGFydENsaWNrID0gKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwi44Kv44Oq44OD44Kv44GV44KM44Gf44OH44O844K/OlwiLCBkYXRhKTsgLy8g44OH44OQ44OD44Kw55SoXG4gICAgICBzZXRDbGlja0RhdGEoZGF0YSk7IC8vIOeKtuaFi+OCkuabtOaWsFxuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUGVyc29uYUNsaWNrID0gKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwi44Kv44Oq44OD44Kv44GV44KM44Gf44OH44O844K/OlwiLCBkYXRhKTsgLy8g44OH44OQ44OD44Kw55SoXG4gICAgICBzZXRDbGlja0NvbXBhbnlEYXRhKGRhdGEpOyAvLyDnirbmhYvjgpLmm7TmlrBcbiAgICB9O1xuXG4gICAgY29uc3QgW2NhcmREYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICBcbiAgICBcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgey8qIEZpcnN0IFJvdyAqL31cbiAgICAgIDxSb3cgc3R5bGU9e3sgaGVpZ2h0OiAnNTB2aCcgfX0+XG4gICAgICAgIHsvKiBQZXJzb25hIEdyYXBoICovfVxuICAgICAgICA8Q29sIG1kPXsxfT48L0NvbD5cbiAgICAgICAgPENvbCBtZD17MTB9ID5cblxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYVRvcGljXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBvbkNsaWNrRGF0YT17aGFuZGxlUGVyc29uYUNsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jga7jg4/jg7Pjg4njg6njg7zjgpLmuKHjgZlcbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44Oa44Or44K944OK44Gu5Y+v6KaW5YyWXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHZoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwdmhcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiID8gKFxuICAgICAgICAgICAgPFBsb3RQZXJzb25hQ29tcFxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi44Oa44Or44K944OK44Gu5Y+v6KaW5YyWXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MnZoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY29uZmlnPXt7IHJlc3BvbnNpdmU6IHRydWUgfX0gLy8gUGxvdGx544Gr44Os44K544Od44Oz44K344OW6Kit5a6a44KS5pyJ5Yq55YyWXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZvjgotcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICA8L0NvbD5cblxuICAgICAgICB7LyogUmlnaHQgQ29sdW1uIHdpdGggQ2FyZHMgKi99XG4gICAgICAgIDxDb2wgbWQ9ezF9PlxuXG4gICAgPC9Db2w+XG4gIDwvUm93PlxuXG4gICAgICB7LyogU2Vjb25kIFJvdyAqL31cbiAgICAgIDxSb3cgc3R5bGU9e3sgaGVpZ2h0OiAnNTB2aCcgfX0+XG4gICAgICAgIDxDb2wgbWQ9ezZ9PlxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGllQVxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfms6jnm67kvIHmpa3jga7mpa3nlYzjgavlr77jgZnjgovljaDmnInnjocnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGllQlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgb25DbGlja0RhdGE9e2hhbmRsZVBpZUNoYXJ0Q2xpY2t9IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBruODj+ODs+ODieODqeODvOOCkua4oeOBmVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+azqOebruS8gealreOBrualreeVjOOBq+WvvuOBmeOCi+WNoOacieeOhycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgICBcbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgbWQ9ezZ9PlxuICAgICAgICB7XG4gICAgICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QVxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cblxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgZGF0YT17W119IC8vIOODh+ODvOOCv+OCkui/veWKoOOBl+OBpuOBj+OBoOOBleOBhFxuICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgIHRpdGxlOiAnRuOCv+ODvOODoOOBruWIhuW4gycsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KTooXG4gICAgICAgICAgPFBsb3RCYXJDaGFydEJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIGNsaWNrZGF0YT17Y2xpY2tEYXRhfSAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jgpLmuKHjgZlcbiAgICBcblxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgZGF0YT17W119IC8vIOODh+ODvOOCv+OCkui/veWKoOOBl+OBpuOBj+OBoOOBleOBhFxuICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgIHRpdGxlOiAnRuOCv+ODvOODoOOBruWIhuW4gycsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KX1cbiAgICAgICAgICBcbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiaC0xMDBcIj5cblxuICAgICAgPENvbD5cbiAgICAgIHtcbiAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgPFByb3Bvc2VkVmlzdWFsaXplXG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY2xpY2tEYXRhPXtjbGlja0NvbXBhbnlEYXRhfVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfku7vmhI/jga7kvY3nva7jgbjnp7vli5XjgZnjgovjgZ/jgoHjga7mj5DmoYgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPik6KFxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgKSB9XG4gIFxuICAgICAgICA8L0NvbD5cbiAgICAgICAgICBcbiAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG5cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLFJvdyxDb2wsQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBQcm9wb3NlZFZpc3VhbGl6ZSA9ICh7IHRvcGljLCBjbGlja0RhdGEgfSkgPT4ge1xuICBjb25zdCBbcHJvcG9zZWREYXRhLCBzZXRQcm9wb3NlZERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RvcGljfS9wcm9wb3NlZC9wcm9wb3NlZC5qc29uYDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIuODh+ODvOOCv+OBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIC8vIGBjbGlja0RhdGFg44Gr5a++5b+c44GZ44KL5Lya56S+44Gu44OH44O844K/44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IGNvbXBhbnlEYXRhID0ganNvbkRhdGFbY2xpY2tEYXRhXTtcblxuICAgICAgICBpZiAoIWNvbXBhbnlEYXRhKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwi5oyH5a6a44GX44Gf44OH44O844K/44GM5a2Y5Zyo44GX44G+44Gb44KTOiBcIiArIGNsaWNrRGF0YSk7XG4gICAgICAgICAgc2V0UHJvcG9zZWREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmjIflrprjgZXjgozjgZ/jg4jjg5Tjg4Pjgq/jga7jg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgdG9waWNEYXRhID0gY29tcGFueURhdGFbdG9waWNdO1xuICAgICAgICBpZiAoIXRvcGljRGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIuaMh+WumuOBl+OBn+ODiOODlOODg+OCr+OBjOWtmOWcqOOBl+OBvuOBm+OCkzogXCIgKyB0b3BpYyk7XG4gICAgICAgICAgc2V0UHJvcG9zZWREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRQcm9wb3NlZERhdGEodG9waWNEYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfOlwiLCBlcnIpO1xuICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbdG9waWMsIGNsaWNrRGF0YV0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PuOCqOODqeODvDoge2Vycm9yfTwvZGl2PjtcbiAgfVxuXG4gIGlmICghcHJvcG9zZWREYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+44OH44O844K/44KS6Kqt44G/6L6844G/5LitLi4uPC9kaXY+O1xuICB9XG5cbiAgXG4gIC8vIOODh+ODvOOCv+OCkuOCq+ODvOODieW9ouW8j+OBp+ihqOekulxuY29uc3QgcmVuZGVyQ2FyZCA9IChkaXJlY3Rpb24sIHZhbHVlcykgPT4ge1xuICBsZXQgbGFiZWw7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBcInVwbGVmdFwiOlxuICAgICAgbGFiZWwgPSBcIuW3puS4ilwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInVwcmlnaHRcIjpcbiAgICAgIGxhYmVsID0gXCLlj7PkuIpcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkb3dubGVmdFwiOlxuICAgICAgbGFiZWwgPSBcIuW3puS4i1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRvd25yaWdodFwiOlxuICAgICAgbGFiZWwgPSBcIuWPs+S4i1wiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGxhYmVsID0gXCLjgZ3jga7ku5ZcIjtcbiAgfVxuXG4gIC8vIOOCq+ODvOODieWFqOS9k+OBruiDjOaZr+iJsuOCkuioreWumu+8iOaWueWQkeOBq+WfuuOBpeOBj+ODmeODvOOCueOCq+ODqeODvO+8iVxuICBjb25zdCBiYXNlQ29sb3JNYXAgPSB7XG4gICAgdXByaWdodDogXCJyZ2JhKDI1NSwgMTg4LCAxODgsIEFMUEhBKVwiLCAgIC8vIOi1pFxuICAgIHVwbGVmdDogXCJyZ2JhKDI1NSwgMjU1LCAxODgsIEFMUEhBKVwiLCAvLyDpu4RcbiAgICBkb3ducmlnaHQ6IFwicmdiYSgxODgsIDIyMSwgMjU1LCBBTFBIQSlcIiwgLy8g6Z2SXG4gICAgZG93bmxlZnQ6IFwicmdiYSgxODgsIDI1NSwgMTg4LCBBTFBIQSlcIiAvLyDnt5FcbiAgfTtcblxuICBjb25zdCBiYXNlQ29sb3IgPSBiYXNlQ29sb3JNYXBbZGlyZWN0aW9uXTtcbiAgY29uc3QgY2FyZEFscGhhID0gMC4zOyAvLyDlhoXpg6jjga7opoHntKDmlbDjgafpgI/mmI7luqbjgpLlpInljJZcbiAgY29uc3QgY2FyZEJhY2tncm91bmRDb2xvciA9IGJhc2VDb2xvci5yZXBsYWNlKFwiQUxQSEFcIiwgTWF0aC5taW4oY2FyZEFscGhhLCAxKSk7IC8vIOiDjOaZr+iJsuOCkuWLleeahOOBq+ioreWumlxuXG4gIHJldHVybiAoXG5cbiAgICA8Q2FyZCBrZXk9e2RpcmVjdGlvbn0gY2xhc3NOYW1lPVwibS0zXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjYXJkQmFja2dyb3VuZENvbG9yIH19PlxuICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCI+XG4gICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIj57bGFiZWx9PC9DYXJkLlRpdGxlPlxuICAgICAgICB7dmFsdWVzLnNsaWNlKDAsIDUpLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgLy8g6aCG5L2N44Gr5Z+644Gl44GE44Gm6YCP5piO5bqm44KS6Kq/5pW0XG4gICAgICAgICAgY29uc3QgYWxwaGEgPSAwLjkwIC0gaW5kZXggKiAwLjE1OyAvLyDpoIbkvY3jgZTjgajjgavpgI/mmI7luqbjgpLlvpDjgIXjgavmuJvlsJFcbiAgICAgICAgICBjb25zdCBpdGVtQmFja2dyb3VuZENvbG9yID0gYmFzZUNvbG9yLnJlcGxhY2UoXCJBTFBIQVwiLCBNYXRoLm1heChhbHBoYSwgMC4xKSk7IC8vIOWQhOOCouOCpOODhuODoOOBruiDjOaZr+iJslxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFua2luZy1pdGVtIHB5LTIgcHgtMyBib3JkZXItYm90dG9tXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBpdGVtQmFja2dyb3VuZENvbG9yIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e2luZGV4ICsgMX3kvY3vvJo8L3N0cm9uZz4ge3ZhbHVlIHx8IFwiXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgIDwvQ2FyZD5cblxuICApO1xufTtcbiAgcmV0dXJuIChcbjxDb250YWluZXI+XG4gIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTNcIj5cbiAgICB7LyogQ2FyZOODmOODg+ODgOODvOOBp+S4reWkruS4iumDqOOBq2NsaWNrRGF0YeOCkuihqOekuiAqL31cbiAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzMzMzMzNcIiwgY29sb3I6IFwid2hpdGVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTBcIj57Y2xpY2tEYXRhIHx8IFwiIFwifTwvaDU+XG4gICAgPC9DYXJkLkhlYWRlcj5cblxuXG4gICAgPENhcmQuQm9keT5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2w+e3JlbmRlckNhcmQoXCJ1cGxlZnRcIiwgcHJvcG9zZWREYXRhLnVwbGVmdCB8fCBbXSl9PC9Db2w+XG4gICAgICAgIDxDb2w+e3JlbmRlckNhcmQoXCJ1cHJpZ2h0XCIsIHByb3Bvc2VkRGF0YS51cHJpZ2h0IHx8IFtdKX08L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbD57cmVuZGVyQ2FyZChcImRvd25sZWZ0XCIsIHByb3Bvc2VkRGF0YS5kb3dubGVmdCB8fCBbXSl9PC9Db2w+XG4gICAgICAgIDxDb2w+e3JlbmRlckNhcmQoXCJkb3ducmlnaHRcIiwgcHJvcG9zZWREYXRhLmRvd25yaWdodCB8fCBbXSl9PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NhcmQuQm9keT5cbiAgPC9DYXJkPlxuPC9Db250YWluZXI+XG5cblxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb3Bvc2VkVmlzdWFsaXplOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2FwcC5qc3hcIjtcbmltcG9ydCB7IEF1dGgwUHJvdmlkZXIgfSBmcm9tIFwiQGF1dGgwL2F1dGgwLXJlYWN0XCI7XG5cbi8vIEF1dGgw44Gu6Kit5a6aXG5jb25zdCBkb21haW4gPSBcImRldi1sM2JnZWduamp4d3gyb2Q0LnVzLmF1dGgwLmNvbVwiOyAvLyBBdXRoMOOBruODieODoeOCpOODs1xuXG5jb25zdCBjbGllbnRJZCA9IFwiaXZ0Z3gxYXJONUowOVp3OHlQQ2lFa3BRMURaM1AyMmVcIjsgLy8gQXV0aDDjga7jgq/jg6njgqTjgqLjg7Pjg4hJRFxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBdXRoMFByb3ZpZGVyXG4gICAgICBkb21haW49e2RvbWFpbn1cbiAgICAgIGNsaWVudElkPXtjbGllbnRJZH1cbiAgICAgIGF1dGhvcml6YXRpb25QYXJhbXM9e3tcbiAgICAgICAgcmVkaXJlY3RfdXJpOiBcImh0dHBzOi8vaGlyb2Vtb24tbS5naXRodWIuaW8vbXktYXBwL1wiLCAvLyDoqo3oqLzlvozjgavjg6rjg4DjgqTjg6zjgq/jg4jjgZnjgotVUkxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEFwcCAvPlxuICAgIDwvQXV0aDBQcm92aWRlcj5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuXG5cbmNvbnN0IGNvbG9ybWFwID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6J3JnYigyMjksIDEzNCwgNiknLCBcIuWcsOebpOaUueiJr1wiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi44OI44Oz44ON44Or5o6Y5YmKXCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgXCLlhY3pnIfmp4vpgKBcIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIueuoeeQhuOCt+OCueODhuODoFwiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5buD5qOE54mp5Yem55CGXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gIFwi5bu656+J44OR44ON44OrXCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuepuuiqv+OCt+OCueODhuODoFwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5o6Y5YmK6KOF572uXCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG59O1xuXG5cbi8vIGZldGNoRGF0YemWouaVsO+8mkpTT07jgb7jgZ/jga/jg4bjgq3jgrnjg4jlvaLlvI/jgavlr77lv5xcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuXG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBKU09O5b2i5byP44Gu5aC05ZCIXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7IC8vIOODl+ODrOODvOODs+ODhuOCreOCueODiOOBruWgtOWQiFxuICAgICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IFwiXCIpOyAvLyDmlLnooYzljLrliIfjgorjga7jg4fjg7zjgr/jgpLphY3liJfjgajjgZfjgabov5TjgZlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44K544OR44O844K544OH44O844K/44KS5a+G6KGM5YiX44Gr5aSJ5o+b44GX44CB6KGM5pa55ZCR44Gu5ZKM44KS6KiI566XXG5jb25zdCBwcm9jZXNzU3BhcnNlRGF0YSA9IChzcGFyc2VEYXRhKSA9PiB7XG4gICAgXG4gIGNvbnN0IG51bVJvd3MgPSBNYXRoLm1heCguLi5zcGFyc2VEYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5yb3cpKSArIDE7XG4gIGNvbnN0IG51bUNvbHMgPSBNYXRoLm1heCguLi5zcGFyc2VEYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5jb2wpKSArIDE7XG5cbiAgY29uc3QgbWF0cml4ID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogbnVtUm93cyB9LCAoKSA9PiBBcnJheShudW1Db2xzKS5maWxsKDApKTtcbiAgc3BhcnNlRGF0YS5mb3JFYWNoKCh7IHJvdywgY29sLCB2YWx1ZSB9KSA9PiB7XG4gICAgbWF0cml4W3Jvd11bY29sXSA9IHZhbHVlO1xuICB9KTtcblxuICByZXR1cm4gbWF0cml4Lm1hcChyb3cgPT4gcm93LnJlZHVjZSgoc3VtLCB2YWx1ZSkgPT4gc3VtICsgdmFsdWUsIDApKTsgLy8g6KGM5pa55ZCR44Gu5ZKM44KS6L+U44GZXG59O1xuXG5jb25zdCBQbG90UGllQiA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIG9uUmVuZGVyZWQsIG9uQ2xpY2tEYXRhIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIuazqOebruODiOODlOODg+OCr+OBq+mWouOBmeOCi+eJueioseOBruS8gealreWNoOacieeOh1wiKTtcbiAgY29uc3QgYWxsVG9waWMgPSBbMiwgMywgMSwgMCwgOSwgNiwgOCwgNywgMTFdO1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIixcbiAgICBcIjE1XCI6XCLnhafmmI7jgrfjgrnjg4bjg6BcIixcIjE3XCI6XCLlo4HpnaLnt5HljJZcIn07XG5cbiAgY29uc3QgVG9waWN0b0lkID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6XCIyXCIsXCLlnLDnm6TmlLnoia9cIjpcIjNcIixcIuODiOODs+ODjeODq+aOmOWJilwiOlwiMVwiLFxuICAgICAgICBcIuWFjemch+ani+mAoFwiOlwiMFwiLFwi566h55CG44K344K544OG44OgXCI6XCI5XCIsXCLlu4Pmo4Tnianlh6bnkIZcIjpcIjZcIixcIuW7uuevieODkeODjeODq1wiOlwiOFwiLFxuICAgICAgIFwi56m66Kq/44K344K544OG44OgXCI6XCI3XCIsXCLmjpjliYroo4Xnva5cIjpcIjExXCIsXCLlu7rnr4noqK3oqIhcIjpcIjEwXCIsXCLjg4jjg7Pjg43jg6vmuKzph49cIjpcIjVcIixcbiAgICAgICBcIueFp+aYjuOCt+OCueODhuODoFwiOlwiMTVcIixcIuWjgemdoue3keWMllwiOlwiMTdcIlxuICAgICAgfTtcbiAgLy8g44Kt44Oj44OD44K344Ol55So44Gu44Kq44OW44K444Kn44Kv44OIXG4gIGNvbnN0IGRhdGFDYWNoZSA9IHVzZVJlZih7XG4gICAgY29tcGFuaWVzOiB7fSxcbiAgICBzcGFyc2VEYXRhOiB7fVxuICB9KTtcblxuICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWxsVG9waWNzRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBhbGxUb3BpYy5tYXAoYXN5bmMgKHRhcmdldF9pZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRpbWUgPSA1O1xuICAgICAgICAgIGNvbnN0IGNvbXBhbnlVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRfaWR9L3NldHRpbmcvY29tcGFueS50eHRgO1xuICAgICAgICAgIGNvbnN0IHNwYXJzZURhdGFVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRfaWR9L29jY3VweS9vY2N1cHlfdG9waWNfJHt0aW1lfS5qc29uYDtcblxuICAgICAgICAgIC8vIOOCreODo+ODg+OCt+ODpeOCkueiuuiqjVxuICAgICAgICAgIGlmICghZGF0YUNhY2hlLmN1cnJlbnQuY29tcGFuaWVzW3RhcmdldF9pZF0pIHtcbiAgICAgICAgICAgIGRhdGFDYWNoZS5jdXJyZW50LmNvbXBhbmllc1t0YXJnZXRfaWRdID0gYXdhaXQgZmV0Y2hEYXRhKGNvbXBhbnlVcmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZGF0YUNhY2hlLmN1cnJlbnQuc3BhcnNlRGF0YVt0YXJnZXRfaWRdKSB7XG4gICAgICAgICAgICBkYXRhQ2FjaGUuY3VycmVudC5zcGFyc2VEYXRhW3RhcmdldF9pZF0gPSBhd2FpdCBmZXRjaERhdGEoc3BhcnNlRGF0YVVybCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY29tcGFuaWVzID0gZGF0YUNhY2hlLmN1cnJlbnQuY29tcGFuaWVzW3RhcmdldF9pZF07XG4gICAgICAgICAgY29uc3Qgc3BhcnNlRGF0YSA9IGRhdGFDYWNoZS5jdXJyZW50LnNwYXJzZURhdGFbdGFyZ2V0X2lkXTtcblxuICAgICAgICAgIC8vIOato+imj+WMlumWouaVsFxuICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZVN0cmluZyA9IChzdHIpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RyICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIumdnuaWh+Wtl+WIl+ODh+ODvOOCv+OBjOaknOWHuuOBleOCjOOBvuOBl+OBnzpcIiwgc3RyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIOmdnuaWh+Wtl+WIl+ODh+ODvOOCv+OBr+eEoeimllxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0ci5ub3JtYWxpemUoXCJORkNcIikudHJpbSgpOyAvLyDmraPopo/ljJbjgajjg4jjg6rjg6DjgpLpgannlKhcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8g5q2j6KaP5YyW44GX44Gf44OH44O844K/44Gn5q+U6LyDXG4gICAgICAgICAgY29uc3Qgc2FuaXRpemVkQ29tcGFuaWVzID0gY29tcGFuaWVzLm1hcChub3JtYWxpemVTdHJpbmcpO1xuICAgICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbnkgPSBub3JtYWxpemVTdHJpbmcoY29tcGFueVswXSk7XG5cbiAgICAgICAgICBpZiAoIXNhbml0aXplZENvbXBhbmllcy5pbmNsdWRlcyhzYW5pdGl6ZWRDb21wYW55KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDb21wYW55IFwiJHtzYW5pdGl6ZWRDb21wYW55fVwiIG5vdCBmb3VuZCBpbiB0b3BpYyAke3RhcmdldF9pZH1gKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOOCueODkeODvOOCueODh+ODvOOCv+OCkuWHpueQhlxuICAgICAgICAgIGNvbnN0IHJvd1N1bXMgPSBwcm9jZXNzU3BhcnNlRGF0YShzcGFyc2VEYXRhKTtcblxuICAgICAgICAgIGNvbnN0IGNvbXBhbnlJbmRleCA9IHNhbml0aXplZENvbXBhbmllcy5pbmRleE9mKHNhbml0aXplZENvbXBhbnkpO1xuXG4gICAgICAgICAgcmV0dXJuIHsgdG9waWM6IHRhcmdldF9pZCwgdmFsdWU6IHJvd1N1bXNbY29tcGFueUluZGV4XSB9O1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gYWxsVG9waWNzRGF0YS5maWx0ZXIoKGRhdGEpID0+IGRhdGEgIT09IG51bGwpO1xuXG4gICAgICAvLyDmraPopo/ljJbjgajjgr3jg7zjg4hcbiAgICAgIGNvbnN0IHRvdGFsVmFsdWUgPSBmaWx0ZXJlZERhdGEucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0udmFsdWUsIDApO1xuICAgICAgaWYgKHRvdGFsVmFsdWUgPT09IDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiTm8gdmFsaWQgZGF0YSB0byBub3JtYWxpemUuXCIpO1xuICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cblxuXG4gICAgICBjb25zdCBub3JtYWxpemVkRGF0YSA9IGZpbHRlcmVkRGF0YS5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBjYXRlZ29yeTogaXRlbS50b3BpYyxcbiAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUgLyB0b3RhbFZhbHVlLFxuICAgICAgfSkpLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKTtcblxuICAgICAgc2V0Q2hhcnREYXRhKG5vcm1hbGl6ZWREYXRhLnNsaWNlKDAsIDEwKSk7IC8vIOS4iuS9jTEw5Lu244Gu44G/6KGo56S6XG4gICAgICBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIOWIneacn+ODh+ODvOOCv+iqreOBv+i+vOOBv+OBqHVwZGF0ZeOBruWkieabtOaZguOBq+ODh+ODvOOCv+OCkuODreODvOODiVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIpIHtcbiAgICAgIGxvYWREYXRhKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCB2aXN1YWxUeXBlXSk7XG5cbiAgY29uc3QgaGFuZGxlUGxvdENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnBvaW50cyAmJiBldmVudC5wb2ludHNbMF0pIHtcbiAgICAgIGNvbnN0IGNsaWNrZGF0YSA9IGV2ZW50LnBvaW50c1swXS5sYWJlbDsgLy8g44Kv44Oq44OD44Kv44GV44KM44Gf6YOo5YiG44Gu44Op44OZ44OrXG4gICAgICBjb25zdCBsYWJlbCA9IFRvcGljdG9JZFtjbGlja2RhdGFdXG4gICAgICBjb25zdCB0b3BpY2lkID0gbGFiZWwucmVwbGFjZShcIlRvcGljIFwiLCBcIlwiKTtcbiAgICAgIG9uQ2xpY2tEYXRhKFt0b3BpY2lkXSk7IC8vIOimquOCs+ODs+ODneODvOODjeODs+ODiOOBq+ODqeODmeODq+OCkumAmuefpVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IGNoYXJ0RGF0YS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLm1hcChpdGVtID0+ICBJZHRvVG9waWNbU3RyaW5nKGl0ZW0uY2F0ZWdvcnkpXSksXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiY2xvY2t3aXNlXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgY29sb3JzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBjb2xvcm1hcFtJZHRvVG9waWNbU3RyaW5nKGl0ZW0uY2F0ZWdvcnkpXV0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDcwLCBiOiA1LCBsOiA0MCwgcjogNTAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQbG90Q2xpY2t9IC8vIOOCr+ODquODg+OCr+OCpOODmeODs+ODiOOCkui/veWKoFxuICAgICAgLz5cbiAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGllQjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjg4bjgq3jgrnjg4jjg4fjg7zjgr/jgpLoqq3jgb/ovrzjgoDplqLmlbBcbmNvbnN0IGZldGNoVGV4dERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQaWVBID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIixcbiAgICBcIjE1XCI6XCLnhafmmI7jgrfjgrnjg4bjg6BcIixcIjE3XCI6XCLlo4HpnaLnt5HljJZcIn07XG5cbiAgY29uc3QgY29sb3JtYXAgPSB7J+m5v+WztuW7uuioreagquW8j+S8muekvic6J3JnYigyMjksIDEzNCwgNiknLCBcIuagquW8j+S8muekvuWkp+ael+e1hFwiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi5riF5rC05bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgICAgIFwi5aSn5oiQ5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupdcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuagquW8j+S8muekvumVt+iwt+W3peOCs+ODvOODneODrOODvOOCt+ODp+ODs1wiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICAgICAgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgICAgIFwi5oi455Sw5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigyMzcsIDEwMCwgOTApJywgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIjoncmdiKDE2NSwgMTcwLCAxNTMpJ307XG4gICAgIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSA1O1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRvcGljIHx8IFwiZGVmYXVsdF90b3BpY1wiOyAvLyDliJ3mnJ/lgKTjgajjgZfjgaZcImRlZmF1bHRfdG9waWNcIuOCkuioreWumlxuICAgICAgICBjb25zdCBkYXRhVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L29jY3VweS9vY2N1cHlfbWVhbl8ke3RpbWV9Lmpzb25gO1xuICAgICAgICBjb25zdCBjb2x1bW5VcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRJZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG5cbiAgICAgICAgLy8g44OH44O844K/5Y+W5b6XXG4gICAgICAgIGNvbnN0IFt2YWx1ZXMsIGxhYmVsc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKGRhdGFVcmwpLFxuICAgICAgICAgIGZldGNoVGV4dERhdGEoY29sdW1uVXJsKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy8g5YCk44Go44Op44OZ44Or44Gu57WE44G/5ZCI44KP44Gb44KS5L2c5oiQXG4gICAgICAgIGNvbnN0IGRhdGEgPSBsYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlcy52YWx1ZVtpbmRleF0gfHwgMCwgLy8g5YCk44GM44Gq44GE5aC05ZCI44GvMFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8g5YCk44Gr5Z+644Gl44GE44Gm6ZmN6aCG44Gr44K944O844OI44GX44Gm5LiK5L2NMTDku7bjgpLmir3lh7pcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGRhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke0lkdG9Ub3BpY1t0YXJnZXRJZF1944Gr6Zai44GZ44KL54m56Kix44Gu5LyB5qWt5Y2g5pyJ546HYCk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODgeODo+ODvOODiOODh+ODvOOCv+OBruWHpueQhuS4reOBq+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDliJ3lm57jg6zjg7Pjg4Djg6rjg7PjgrDmmYLjgahgdXBkYXRlYOWkieabtOaZguOBq+ODh+ODvOOCv+OCkuODreODvOODiVxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgb25SZW5kZXJlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHZhbHVlczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgIGNvbG9yczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gY29sb3JtYXBbaXRlbS5sYWJlbF0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDcwLCBiOiA1LCBsOiA0MCwgcjogNTAgfSxcbiAgICAgICAgfX1cbiAgXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGllQTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5cbiBcbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgbG9hZENvbXBhbmllcyA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgdG9MaXN0ID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuXG4gICAgY29uc3QgYWxwaGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgY29uc3QgYmV0YV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMV0pKTtcblxuICAgIHJldHVybiB7IGFscGhhX2xpLCBiZXRhX2xpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGFscGhhX2xpOiBbXSwgYmV0YV9saTogW10gfTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBlcnNvbkNvbXAgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBvblJlbmRlcmVkIH0pID0+IHtcbmNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIixcbiAgICBcIjE1XCI6XCLnhafmmI7jgrfjgrnjg4bjg6BcIixcIjE3XCI6XCLlo4HpnaLnt5HljJZcIn07XG5cbmNvbnN0IGNvbG9ybWFwID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6J3JnYigyMjksIDEzNCwgNiknLCBcIuWcsOebpOaUueiJr1wiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi44OI44Oz44ON44Or5o6Y5YmKXCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgICAgICAgICBcIuWFjemch+ani+mAoFwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi566h55CG44K344K544OG44OgXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLlu4Pmo4Tnianlh6bnkIZcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgICAgICAgICBcIuW7uuevieODkeODjeODq1wiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLnqbroqr/jgrfjgrnjg4bjg6BcIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuaOmOWJiuijhee9rlwiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICAgICAgICAgIFwi54Wn5piO44K344K544OG44OgXCI6J3JnYigyNTUsIDEyNywgMTQpJywgXCLlo4HpnaLnt5HljJZcIjoncmdiKDE1MywgMTUzLCAxNTMpJ1xuICAgICAgICB9O1xuXG4gICAgICAgIFxuICBjb25zdCBhcnJvd19jb2xvciA9IFsnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJ107XG5cbiAgY29uc3QgW3ByZXBhcmVkRGF0YSwgc2V0UHJlcGFyZWREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwi5LyB5qWt44Gu56uL44Gh5L2N572uXCIpO1xuICBjb25zdCBbYXV0aG9yRGF0YSwgc2V0QXV0aG9yRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByZXBhcmVEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsUHJvbWlzZXMgPSAodG9waWMgfHwgW1wiZGVmYXVsdF90b3BpY1wiXSkubWFwKGFzeW5jICh0YXJnZXRfaWQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9waWNcIix0YXJnZXRfaWQpXG4gICAgICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG4gICAgICAgICAgY29uc3QgY29tcGFuaWVzID0gYXdhaXQgbG9hZENvbXBhbmllcyhjb2x1bW5QYXRoKTtcblxuICAgICAgICAgIGNvbnN0IGNvbXBhbnlEaWN0ID0gY29tcGFuaWVzLnJlZHVjZSgoYWNjLCB2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRTZWFyY2hMaXN0ID0gbmV3U2VhcmNoTGlzdC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgaW4gY29tcGFueURpY3QpO1xuXG4gICAgICAgICAgY29uc3Qgbm9kZV9hbHBoYSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbHRlcmVkU2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG4gICAgICAgICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsdGVyZWRTZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcblxuICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaikgPT4gaiApLm1hcChhc3luYyAocCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vcGVyc29uYS90ZXN0X29wdGltaXplXyR7cCsxfS50eHRgO1xuICAgICAgICAgICAgY29uc3QgeyBhbHBoYV9saSwgYmV0YV9saSB9ID0gYXdhaXQgdG9MaXN0KHBhcmFtZXRlclBhdGgpO1xuXG4gICAgICAgICAgICBmaWx0ZXJlZFNlYXJjaExpc3QuZm9yRWFjaCgoaywgaikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW5pZXMuaW5kZXhPZihrKTtcbiAgICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwXSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICAgIG5vZGVfYmV0YVtqXVtwXSA9IGJldGFfbGlbaWR4XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHsgbm9kZV9hbHBoYSwgbm9kZV9iZXRhLCBmaWx0ZXJlZFNlYXJjaExpc3QgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKGFsbFByb21pc2VzKTtcblxuICAgICAgICBjb25zdCBjb21iaW5lZEFscGhhID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQubm9kZV9hbHBoYSk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQmV0YSA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0Lm5vZGVfYmV0YSk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkU2VhcmNoTGlzdCA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0LmZpbHRlcmVkU2VhcmNoTGlzdCk7XG5cbiAgICAgICAgc2V0UHJlcGFyZWREYXRhKHsgYWxwaGE6IGNvbWJpbmVkQWxwaGEsIGJldGE6IGNvbWJpbmVkQmV0YSwgc2VhcmNoTGlzdDogY29tYmluZWRTZWFyY2hMaXN0IH0pO1xuICAgICAgICBzZXRUaXRsZShgJHtjb21wYW55feOBrualreeVjOOBp+OBrueri+OBoeS9jee9rmApOyAvLyDliJ3mnJ/jgr/jgqTjg4jjg6vjgpLoqK3lrppcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/mupblgpnkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g5Yid5pyf44Os44Oz44OA44Oq44Oz44Kw5pmC44Gr44KC44OH44O844K/44KS5rqW5YKZXG4gICAgcHJlcGFyZURhdGEoKTtcbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55XSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRBdXRob3JEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29tcGFueSkgJiYgY29tcGFueS5pbmNsdWRlcyhcIuagquW8j+S8muekvueGiuiwt+e1hFwiKSB8fCBjb21wYW55ID09PSBcIuagquW8j+S8muekvueGiuiwt+e1hFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSAodG9waWMgfHwgW1wiZGVmYXVsdF90b3BpY1wiXSkubWFwKGFzeW5jICh0b3BpY0lkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdXRob3JQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dG9waWNJZH0vcGVyc29uYS9rdW1hZ2FpX3RvcGljX2F1dGhvci5qc29uYDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXV0aG9yUGF0aCk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg6JGX6ICF44OH44O844K/44Gu6Kqt44G/6L6844G/44Gr5aSx5pWXOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOW5tOW6puOBqOODmuODq+OCveODiuOBruWvvuW/nOODnuODg+ODl1xuICAgICAgICAgICAgY29uc3QgeWVhclRvUGVyc29uYSA9IHtcbiAgICAgICAgICAgICAgXCIyMDIxXCI6IFwiMVwiLFxuICAgICAgICAgICAgICBcIjIwMTlcIjogXCIyXCIsXG4gICAgICAgICAgICAgIFwiMjAxN1wiOiBcIjNcIixcbiAgICAgICAgICAgICAgXCIyMDE1XCI6IFwiNFwiLFxuICAgICAgICAgICAgICBcIjIwMTNcIjogXCI1XCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOWQhOODmuODq+OCveODiuOBruODh+ODvOOCv+OCkuaVtOW9olxuICAgICAgICAgICAgY29uc3QgcGVyc29uYURhdGEgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHllYXJUb1BlcnNvbmEpLmZvckVhY2goKFt5ZWFyLCBwZXJzb25hTnVtXSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB5ZWFyRGF0YSA9IGRhdGFbeWVhcl0gfHwge307XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyDnqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgYvjganjgYbjgYvjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHllYXJEYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwZXJzb25hRGF0YVtgcGVyc29uYV8ke3BlcnNvbmFOdW19YF0gPSB7XG4gICAgICAgICAgICAgICAgICBhdXRob3JzOiAn5Ye66aGY6ICF44Gq44GXJyxcbiAgICAgICAgICAgICAgICAgIHllYXI6IHllYXJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOODh+ODvOOCv+OBjOOBguOCi+WgtOWQiOOBr+S4iuS9jTXku7bjgpLlj5blvpdcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BBdXRob3JzID0gT2JqZWN0LmVudHJpZXMoeWVhckRhdGEpXG4gICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgNSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoKFthdXRob3IsIGNvdW50XSkgPT4gYCR7YXV0aG9yfSgke2NvdW50feS7tilgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwZXJzb25hRGF0YVtgcGVyc29uYV8ke3BlcnNvbmFOdW19YF0gPSB7XG4gICAgICAgICAgICAgICAgICBhdXRob3JzOiB0b3BBdXRob3JzLmpvaW4oJywgJyksXG4gICAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7IHRvcGljSWQsIGRhdGE6IHBlcnNvbmFEYXRhIH07XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICAgIGNvbnN0IGF1dGhvckRhdGFNYXAgPSB7fTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXN1bHRzLmZvckVhY2goKHsgdG9waWNJZCwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBhdXRob3JEYXRhTWFwW3RvcGljSWRdID0gZGF0YTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBzZXRBdXRob3JEYXRhKGF1dGhvckRhdGFNYXApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLokZfogIXjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkQXV0aG9yRGF0YSgpO1xuICB9LCBbY29tcGFueSwgdG9waWNdKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZSAmJiBwcmVwYXJlZERhdGEpIHtcbiAgICAgIGNvbnN0IHBsb3REYXRhID0gcHJlcGFyZWREYXRhLnNlYXJjaExpc3QubWFwKChrLCBqKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3BpYyA9IHRvcGljW2pdO1xuICAgICAgICBjb25zdCBwZXJzb25hVG9ZZWFyID0ge1xuICAgICAgICAgIFwiMVwiOiBcIjIwMjFcIixcbiAgICAgICAgICBcIjJcIjogXCIyMDE5XCIsXG4gICAgICAgICAgXCIzXCI6IFwiMjAxN1wiLFxuICAgICAgICAgIFwiNFwiOiBcIjIwMTVcIixcbiAgICAgICAgICBcIjVcIjogXCIyMDEzXCJcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBob3ZlclRleHRzID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0ubWFwKChudW0pID0+IHtcbiAgICAgICAgICBjb25zdCB5ZWFyVGV4dCA9IGAke3BlcnNvbmFUb1llYXJbbnVtXX3lubRgO1xuICAgICAgICAgIGlmIChrID09PSBcIuagquW8j+S8muekvueGiuiwt+e1hFwiICYmIGF1dGhvckRhdGFbY3VycmVudFRvcGljXSAmJiBhdXRob3JEYXRhW2N1cnJlbnRUb3BpY11bYHBlcnNvbmFfJHtudW19YF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGF1dGhvckluZm8gPSBhdXRob3JEYXRhW2N1cnJlbnRUb3BpY11bYHBlcnNvbmFfJHtudW19YF07XG4gICAgICAgICAgICByZXR1cm4gYCgke3llYXJUZXh0fSk8YnI+6JGX6ICFOiAke2F1dGhvckluZm8uYXV0aG9yc31gO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCAoJHt5ZWFyVGV4dH0pYDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBwcmVwYXJlZERhdGEuYWxwaGFbal0sXG4gICAgICAgICAgeTogcHJlcGFyZWREYXRhLmJldGFbal0sXG4gICAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgICAgICB0ZXh0cG9zaXRpb246IFwidG9wIGxlZnRcIixcbiAgICAgICAgICBob3ZlcnRleHQ6IGhvdmVyVGV4dHMsXG4gICAgICAgICAgaG92ZXJpbmZvOiBcInRleHRcIixcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDEyIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcm1hcFtJZHRvVG9waWNbdG9waWNbal1dXSxcbiAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lOiBJZHRvVG9waWNbdG9waWNbal1dLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgXG5cbiAgICAgIGNvbnN0IHBsb3RBbm5vdGF0aW9ucyA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICAgIEFycmF5KDQpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgICAgICAgIHg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXVtpICsgMV0sXG4gICAgICAgICAgeTogcHJlcGFyZWREYXRhLmJldGFbal1baSArIDFdLFxuICAgICAgICAgIHhyZWY6ICd4JyxcbiAgICAgICAgICB5cmVmOiAneScsXG4gICAgICAgICAgYXhyZWY6ICd4JyxcbiAgICAgICAgICBheXJlZjogJ3knLFxuICAgICAgICAgIGF4OiBwcmVwYXJlZERhdGEuYWxwaGFbal1baV0sXG4gICAgICAgICAgYXk6IHByZXBhcmVkRGF0YS5iZXRhW2pdW2ldLFxuICAgICAgICAgIGFycm93Y29sb3I6Y29sb3JtYXBbSWR0b1RvcGljW3RvcGljW2pdXV0sXG4gICAgICAgICAgYXJyb3dzaXplOiAxLjIsXG4gICAgICAgICAgYXJyb3d3aWR0aDogMS4yLFxuICAgICAgICAgIGFycm93aGVhZDogNSxcbiAgICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICAgIH0pKVxuICAgICAgKTtcblxuICAgICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgICBzZXRBbm5vdGF0aW9ucyhwbG90QW5ub3RhdGlvbnMpO1xuXG4gICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgcHJlcGFyZWREYXRhLCBhdXRob3JEYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBzdHlsZT17eyB3aWR0aDonMTAwdmgnICxoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgICAgeTogMS44LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgeTogMS44LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgICAgeTogMC4yLFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgeTogMC4yLFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcblxuICAgICAgICAgXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLmlrDopo/mgKdcIixcbiAgICAgICAgICAgIHJhbmdlOiBbMC4xLCAxLjldLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAuMSwgMSwgMS45XSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLpoIblv5zmgKdcIixcbiAgICAgICAgICAgIHRpdGxlX3N0YW5kb2ZmOjI1LCAgIC8vIFnou7jjgYvjgonjga7ot53pm6LvvIjopovjgoTjgZnjgY/jgZnjgovjgZ/jgoHvvIlcbiAgICAgICAgICAgIHJhbmdlOiBbMC4xLCAxLjldLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAuMSwgMSwgMS45XSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDI1LCBiOiAxNSwgbDogMTUsIHI6IDIwIH0sXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgYmdjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgYm9yZGVyd2lkdGg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBob3ZlcmRpc3RhbmNlOiA1LFxuICAgICAgICAgIGhvdmVybW9kZTogJ2Nsb3Nlc3QnLFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIG5hbWVsZW5ndGg6IC0xICAvLyDlkI3liY3jga7plbfjgZXliLbpmZDjgpLop6PpmaRcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgXG4gICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2UgIC8vIOODhOODvOODq+ODkOODvOOCkumdnuihqOekuuOBq1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBlcnNvbkNvbXA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuY29uc3QgY29sb3JtYXAgPSB7J+m5v+WztuW7uuioreagquW8j+S8muekvic6J3JnYigyMjksIDEzNCwgNiknLCBcIuagquW8j+S8muekvuWkp+ael+e1hFwiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi5riF5rC05bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgXCLlpKfmiJDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIuagquW8j+S8muekvuerueS4reW3peWLmeW6l1wiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gIFwi5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+XCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuS6lOa0i+W7uuioreagquW8j+S8muekvlwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5qCq5byP5Lya56S+44OV44K444K/XCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gIFwi5oi455Sw5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigyMzcsIDEwMCwgOTApJywgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIjoncmdiKDE2NSwgMTcwLCAxNTMpJ307XG5cbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgbG9hZENvbXBhbmllcyA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgdG9MaXN0ID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuXG4gICAgY29uc3QgYWxwaGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgY29uc3QgYmV0YV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMV0pKTtcblxuICAgIHJldHVybiB7IGFscGhhX2xpLCBiZXRhX2xpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGFscGhhX2xpOiBbXSwgYmV0YV9saTogW10gfTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBlcnNvblRvcGljID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCwgb25DbGlja0RhdGF9KSA9PiB7XG4gIGNvbnN0IGFycm93X2NvbG9yID0gWycjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnXTtcbiAgY29uc3QgW2ZpZ0RhdGEsIHNldEZpZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYW5ub3RhdGlvbnMsIHNldEFubm90YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NvbXBhbnlMaXN0LCBzZXRDb21wYW55TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hMaXN0LCBzZXRTZWFyY2hMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2F1dGhvckRhdGEsIHNldEF1dGhvckRhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIixcbiAgICBcIjE1XCI6XCLnhafmmI7jgrfjgrnjg4bjg6BcIixcIjE3XCI6XCLlo4HpnaLnt5HljJZcIn07XG5cbiAgLy8g5Yid5pyf44OH44O844K/44Gu44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG5cbiAgICAgIGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDb21wYW55TGlzdChkYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYOalreeVjOWGheOBp+OBruS8gealreOBrueri+OBoeS9jee9rmApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWNdKTtcblxuICAvLyDmpJzntKLlr77osaHjga7jg5XjgqPjg6vjgr/jg6rjg7PjgrBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29tcGFueUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW55TGlzdC5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICBzZXRTZWFyY2hMaXN0KG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KSk7XG4gICAgfVxuICB9LCBbY29tcGFueUxpc3QsIGNvbXBhbnldKTtcblxuICAvLyDokZfogIXjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovmlrDjgZfjgYR1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQXV0aG9yRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbXBhbnkpICYmIGNvbXBhbnkuaW5jbHVkZXMoXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIikgfHwgY29tcGFueSA9PT0gXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGF1dGhvclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0b3BpY30vcGVyc29uYS9rdW1hZ2FpX3RvcGljX2F1dGhvci5qc29uYDtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGF1dGhvclBhdGgpO1xuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg6JGX6ICF44OH44O844K/44Gu6Kqt44G/6L6844G/44Gr5aSx5pWXOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyDlubTluqbjgajjg5rjg6vjgr3jg4rjga7lr77lv5zjg57jg4Pjg5dcbiAgICAgICAgICBjb25zdCB5ZWFyVG9QZXJzb25hID0ge1xuICAgICAgICAgICAgXCIyMDIxXCI6IFwiMVwiLFxuICAgICAgICAgICAgXCIyMDE5XCI6IFwiMlwiLFxuICAgICAgICAgICAgXCIyMDE3XCI6IFwiM1wiLFxuICAgICAgICAgICAgXCIyMDE1XCI6IFwiNFwiLFxuICAgICAgICAgICAgXCIyMDEzXCI6IFwiNVwiXG4gICAgICAgICAgfTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyDlkITjg5rjg6vjgr3jg4rjga7jg4fjg7zjgr/jgpLmlbTlvaJcbiAgICAgICAgICBjb25zdCBwZXJzb25hRGF0YSA9IHt9O1xuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHllYXJUb1BlcnNvbmEpLmZvckVhY2goKFt5ZWFyLCBwZXJzb25hTnVtXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeWVhckRhdGEgPSBkYXRhW3llYXJdIHx8IHt9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDnqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgYvjganjgYbjgYvjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh5ZWFyRGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIHBlcnNvbmFEYXRhW2BwZXJzb25hXyR7cGVyc29uYU51bX1gXSA9IHtcbiAgICAgICAgICAgICAgICBhdXRob3JzOiAn5Ye66aGY6ICF44Gq44GXJyxcbiAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyDjg4fjg7zjgr/jgYzjgYLjgovloLTlkIjjga/kuIrkvY015Lu244KS5Y+W5b6XXG4gICAgICAgICAgICAgIGNvbnN0IHRvcEF1dGhvcnMgPSBPYmplY3QuZW50cmllcyh5ZWFyRGF0YSlcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgNSlcbiAgICAgICAgICAgICAgICAubWFwKChbYXV0aG9yLCBjb3VudF0pID0+IGAke2F1dGhvcn0oJHtjb3VudH3ku7YpYCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBwZXJzb25hRGF0YVtgcGVyc29uYV8ke3BlcnNvbmFOdW19YF0gPSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yczogdG9wQXV0aG9ycy5qb2luKCcsICcpLFxuICAgICAgICAgICAgICAgIHllYXI6IHllYXJcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBzZXRBdXRob3JEYXRhKHBlcnNvbmFEYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6JGX6ICF44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZEF1dGhvckRhdGEoKTtcbiAgfSwgW2NvbXBhbnksIHRvcGljXSk7XG5cbiAgLy8g44OH44O844K/44Gu5o+P55S7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZSAmJiBzZWFyY2hMaXN0Lmxlbmd0aCA+IDAgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3Qgbm9kZV9hbHBoYSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuICAgICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4gaSApLm1hcCgocCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9wZXJzb25hL3Rlc3Rfb3B0aW1pemVfJHtwKzF9LnR4dGA7XG4gICAgICAgIHJldHVybiB0b0xpc3QocGFyYW1ldGVyUGF0aCkudGhlbigoeyBhbHBoYV9saSwgYmV0YV9saSB9KSA9PiB7XG4gICAgICAgICAgc2VhcmNoTGlzdC5mb3JFYWNoKChrLCBqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW55TGlzdC5pbmRleE9mKGspO1xuICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwXSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICBub2RlX2JldGFbal1bcF0gPSBiZXRhX2xpW2lkeF07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGVyc29uYVRvWWVhciA9IHtcbiAgICAgICAgICBcIjFcIjogXCIyMDIxXCIsXG4gICAgICAgICAgXCIyXCI6IFwiMjAxOVwiLFxuICAgICAgICAgIFwiM1wiOiBcIjIwMTdcIixcbiAgICAgICAgICBcIjRcIjogXCIyMDE1XCIsXG4gICAgICAgICAgXCI1XCI6IFwiMjAxM1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGxvdERhdGEgPSBzZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4ge1xuICAgICAgICAgIGNvbnN0IGhvdmVyVGV4dHMgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXS5tYXAoKG51bSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeWVhclRleHQgPSBgJHtwZXJzb25hVG9ZZWFyW251bV195bm0YDtcbiAgICAgICAgICAgIGlmIChrID09PSBcIuagquW8j+S8muekvueGiuiwt+e1hFwiICYmIGF1dGhvckRhdGFbYHBlcnNvbmFfJHtudW19YF0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGAoJHt5ZWFyVGV4dH0pPGJyPuiRl+iAhTogJHthdXRob3JEYXRhW2BwZXJzb25hXyR7bnVtfWBdLmF1dGhvcnN9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgKCR7eWVhclRleHR9KWA7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogbm9kZV9hbHBoYVtqXSxcbiAgICAgICAgICAgIHk6IG5vZGVfYmV0YVtqXSxcbiAgICAgICAgICAgIG1vZGU6IFwibGluZXMrbWFya2Vycyt0ZXh0XCIsXG4gICAgICAgICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgICAgICAgIHRleHRwb3NpdGlvbjogXCJ0b3AgbGVmdFwiLFxuICAgICAgICAgICAgaG92ZXJ0ZXh0OiBob3ZlclRleHRzLFxuICAgICAgICAgICAgaG92ZXJpbmZvOiBcInRleHRcIixcbiAgICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiAxMiB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAncmlnaHQnLCAgLy8g44Ob44OQ44O844GueOS9jee9rlxuICAgICAgICAgICAgICB5YW5jaG9yOiAnYm90dG9tJyAgICAgLy8g44Ob44OQ44O844GueeS9jee9rlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICBjb2xvcjogY29sb3JtYXBba10sXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZTogayxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBzZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICAgICAgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgICAgICB4OiBub2RlX2FscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgICAgIHk6IG5vZGVfYmV0YVtqXVtpICsgMV0sXG4gICAgICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgICAgICB5cmVmOiAneScsXG4gICAgICAgICAgICBheDogbm9kZV9hbHBoYVtqXVtpXSxcbiAgICAgICAgICAgIGF5OiBub2RlX2JldGFbal1baV0sXG4gICAgICAgICAgICBheHJlZjogJ3gnLFxuICAgICAgICAgICAgYXlyZWY6ICd5JyxcbiAgICAgICAgICAgIGFycm93Y29sb3I6IGNvbG9ybWFwW2tdLFxuICAgICAgICAgICAgYXJyb3dzaXplOiAxLjIsXG4gICAgICAgICAgICBhcnJvd3dpZHRoOiAxLjIsXG4gICAgICAgICAgICBhcnJvd2hlYWQ6IDUsXG4gICAgICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICAgICAgfSkpXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHNlYXJjaExpc3QsIGNvbXBhbnlMaXN0LCB0b3BpYywgYXV0aG9yRGF0YV0pO1xuXG4gIGNvbnN0IGhhbmRsZVBlcnNvbmFDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5wb2ludHMgJiYgZXZlbnQucG9pbnRzWzBdKSB7XG4gICAgXG4gICAgICBjb25zb2xlLmxvZyhldmVudC5wb2ludHNbMF1bXCJkYXRhXCJdW1wibmFtZVwiXSlcbiAgICAgIGNvbnN0IGNsaWNrZGF0YSA9IGV2ZW50LnBvaW50c1swXVtcImRhdGFcIl1bXCJuYW1lXCJdOyAvLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/pg6jliIbjga7jg6njg5njg6tcbiAgICAgIG9uQ2xpY2tEYXRhKFtjbGlja2RhdGFdKTsgLy8g6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Op44OZ44Or44KS6YCa55+lXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiAgc3R5bGU9e3sgd2lkdGg6JzEwMHZoJyAsaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17ZmlnRGF0YX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMjAsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgICBcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgICAgeTogMS44LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgeTogMS44LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgICAgeTogMC4yLFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgeTogMC4yLFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcblxuICAgICAgICAgXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLmlrDopo/mgKdcIixcbiAgICAgICAgICAgIHJhbmdlOiBbMC4xLCAxLjldLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAuMSwgMSwgMS45XSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLpoIblv5zmgKdcIixcbiAgICAgICAgICAgIHRpdGxlX3N0YW5kb2ZmOjI1LCAgIC8vIFnou7jjgYvjgonjga7ot53pm6LvvIjopovjgoTjgZnjgY/jgZnjgovjgZ/jgoHvvIlcbiAgICAgICAgICAgIHJhbmdlOiBbMC4xLCAxLjldLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAuMSwgMSwgMS45XSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDI1LCBiOiAxNSwgbDogMTUsIHI6IDIwIH0sXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgYmdjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgYm9yZGVyd2lkdGg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBob3ZlcmRpc3RhbmNlOiA1LFxuICAgICAgICAgIGhvdmVybW9kZTogJ2Nsb3Nlc3QnLFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIG5hbWVsZW5ndGg6IC0xXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgY29uZmlnPXt7IFxuICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgZGlzcGxheU1vZGVCYXI6IGZhbHNlXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMnZoXCIsIHdpZHRoOiBcIjEwMHZoXCIsIGhlaWdodDogXCI0NXZoXCIgfX1cbiAgICAgICAgb25DbGljaz17aGFuZGxlUGVyc29uYUNsaWNrfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Ub3BpYztcbiIsIi8vIFNpZGViYXIuanN4XG5pbXBvcnQgUmVhY3QgLHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY29yZGlvbiwgQnV0dG9uLCBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IFNpZGViYXIgPSAoeyBvbkFwcGx5LCB2aXN1YWxUeXBlLCBvblZpc3VhbFR5cGVDaGFuZ2UsIHRvcGljTGlzdCwgY29tcGFueUxpc3QsIHNlbGVjdGVkQ29tcGFuaWVzLCBzZWxlY3RlZFRvcGljcywgb25DaGFuZ2VUb3BpYywgb25DaGFuZ2VDb21wYW55IH0pID0+IHtcbiAgY29uc3QgW2lucHV0VHlwZSwgc2V0SW5wdXRUeXBlXSA9IHVzZVN0YXRlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSk7IC8vIOWIneacn+WApOOBryBcImNoZWNrYm94XCJcbiAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBvblZpc3VhbFR5cGVDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWU9PVwib25lLWNvbXBcIil7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJjaGVja2JveFwiLFwicmFkaW9cIl0pfVxuICAgICAgZWxzZXtcbiAgICAgICAgc2V0SW5wdXRUeXBlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSlcbiAgICAgICAgfVxuXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dFR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIixcbiAgICBcIjE1XCI6XCLnhafmmI7jgrfjgrnjg4bjg6BcIixcIjE3XCI6XCLlo4HpnaLnt5HljJZcIn07XG4gIFxuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcsIHBhZGRpbmc6ICcxMHB4JywgYmFja2dyb3VuZENvbG9yOiAnYmctbGlnaHQnIH19PlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgdGV4dC1kYW5nZXIgZm9udC1pdGFsaWNcIiBzdHlsZT17eyBoZWlnaHQ6ICc1JScgfX0+XG4gICAgICAgIDxDb2wgc209ezZ9PlxuICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMCUnIH19IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LWVtcGhhc2lzXCI+XG4gICAgICAgICAgICDlj6/oppbljJbmnaHku7ZcbiAgICAgICAgICA8L2g1PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzbT17NH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJhcHBseVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkFwcGx5fVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTUlJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWPr+imluWMllxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICB7LyogQWNjb3JkaW9uICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBcIiBzdHlsZT17eyBoZWlnaHQ6ICc4MCUnIH19PlxuICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgIHsvKiBWaXN1YWxpemF0aW9uIFR5cGUgKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMFwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj7lj6/oppbljJbjgr/jgqTjg5c8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBcIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Zpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIn0gLy8g44OH44OV44Kp44Or44OI44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXgtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID4x56S+44Gr5rOo55uuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIn0gLy8g44OH44OV44Kp44Or44OI44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19XG4gICAgICAgICAgICAgICAgICA+MeODiOODlOODg+OCr+OBq+azqOebrjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG4gICAgICAgICAgey8qIFRvcGljIFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIxXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlRvcGljPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICB7dG9waWNMaXN0Lm1hcCgodG9waWMpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dG9waWN9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVswXX0gXG4gICAgICAgICAgICAgICAgICAgIGlkID0ge3RvcGljfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFRvcGljcy5pbmNsdWRlcyh0b3BpYyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVRvcGljKHRvcGljLGlucHV0VHlwZVswXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3BpY1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RvcGljfT57SWR0b1RvcGljW3RvcGljXX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBDb21wYW55IFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIyXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkNvbXBhbnk8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIHtjb21wYW55TGlzdC5tYXAoKGNvbXBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29tcGFueX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aW5wdXRUeXBlWzFdfSBcbiAgICAgICAgICAgICAgICAgICAgaWQgPSB7Y29tcGFueX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDb21wYW5pZXMuaW5jbHVkZXMoY29tcGFueSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUNvbXBhbnkoY29tcGFueSxpbnB1dFR5cGVbMV0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdjb21wYW55J1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtjb21wYW55fT57Y29tcGFueX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuXG4gICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/5Y+W5b6X6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90QmFyQ2hhcnRCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgY2xpY2tkYXRhLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSA1O1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGNsaWNrZGF0YSB8fCB0b3BpY1swXSB8fCBcImRlZmF1bHRfdG9waWNcIjsgLy8gYGNsaWNrZGF0YWDjgpLlhKrlhYhcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldElkfS90cmVuZC9vdXRwdXRfJHt0aW1lfS5qc29uYDtcbiAgICAgICAgY29uc3QgY29tcGFueVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRJZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG4gICAgICAgIGNvbnN0IGZpUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvZmlfc3ViY2xhc3Nfc3BsaXQuanNvbmA7XG4gICAgICAgIC8vIOODh+ODvOOCv+OCkuWPluW+l1xuICAgICAgICBjb25zdCBbb3JpZ2luYWwsIGNvbXBhbnlMaXN0LCBmaUxpc3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgICBsb2FkQ29tcGFuaWVzKGNvbXBhbnlQYXRoKSxcbiAgICAgICAgICBmZXRjaERhdGEoZmlQYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgaWYgKCFjb21wYW55TGlzdC5pbmNsdWRlcyhjb21wYW55WzBdKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcGFueSBcIiR7Y29tcGFueVswXX1cIiBub3QgZm91bmQuYCk7XG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb21wYW5544Gu44OH44O844K/5Y+W5b6XXG4gICAgICAgIGNvbnN0IGNvbXBhbnlJbmRleCA9IGNvbXBhbnlMaXN0LmluZGV4T2YoY29tcGFueVswXSk7XG4gICAgICAgIGNvbnN0IGNvbXBhbnlEYXRhID0gb3JpZ2luYWxbY29tcGFueUluZGV4XTtcbiAgICAgICAgaWYgKCFjb21wYW55RGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgTm8gZGF0YSBmb3VuZCBmb3IgY29tcGFueSBpbmRleCBcIiR7Y29tcGFueUluZGV4fVwiLmApO1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlNPTuODh+ODvOOCv+OBruaVtOW9olxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gT2JqZWN0LmVudHJpZXMoY29tcGFueURhdGEpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgIGNhdGVnb3J5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IGtleSA9PT0gXCJcIiA/IDAgOiBwYXJzZUZsb2F0KHZhbHVlKSAqIDEwMCB8fDAsIC8vIOWApOOCkuaVsOWApOOBq+WkieaPm++8iOOBquOBhOWgtOWQiOOBrzDvvIlcbiAgICAgICAgICBzdW1tYXJpemU6IGZpTGlzdFtrZXldLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8g44OH44O844K/44KS6ZmN6aCG44Gr44K944O844OI44GX44Gm5LiK5L2NMTDku7bjgpLlj5blvpdcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGZvcm1hdHRlZERhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnlbMF1944GuRknjga7liIbluINgKTtcbiAgICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYGNsaWNrZGF0YWDjga7lgKTjgYzlpInljJbjgZfjgZ/jgYvjgpLmmI7npLrnmoTjgavmr5TovINcbiAgICBpZiAoXG4gICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgJiZcbiAgICAgICh1cGRhdGUgfHwgY2hhcnREYXRhLmxlbmd0aCA9PT0gMCB8fCBjbGlja2RhdGEpXG4gICAgKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIEpTT04uc3RyaW5naWZ5KGNsaWNrZGF0YSksIHVwZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgIHg6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLnJldmVyc2UoKSwgLy8g5qiq5ZCR44GN5qOS44Kw44Op44OV55So44Gu5YCk77yI6YCG6aCG77yJXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksIC8vIOOCq+ODhuOCtOODqu+8iOmAhumghu+8iVxuICAgICAgICAgICAgY3VzdG9tZGF0YTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5zdW1tYXJpemUpLnJldmVyc2UoKSwgLy8gc3VtbWFyaXplIOOCkiBjdXN0b21kYXRhIOOBq+a4oeOBmVxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaFwiLCAvLyDmqKrlkJHjgY3mo5LjgrDjg6njg5VcbiAgICAgICAgICAgIG1hcmtlcjogeyBjb2xvcjogXCJyb3lhbGJsdWVcIiB9LCAvLyDmo5Ljga7oibJcbiAgICAgICAgICAgIGhvdmVydGVtcGxhdGU6XG4gICAgICAgICAgICBg6Kqs5piOOiAle2N1c3RvbWRhdGF9PGJyPiU6ICV7eDouMmZ9JSA8ZXh0cmE+PC9leHRyYT5gLCAvLyBjdXN0b21kYXRhIOOCkuWPgueFp1xuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGlja3N1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBhbGlnbjpcImxlZnRcIixcbiAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgc2l6ZTogMTEsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruODleOCqeODs+ODiOOCteOCpOOCulxuICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLCAvLyDjg5Xjgqnjg7Pjg4jjga7oibJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImxpZ2h0eWVsbG93XCIsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruiDjOaZr+iJslxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwiZ3JheVwiLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7mnqDnt5roibJcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RCYXJDaGFydEI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/lj5blvpfplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5cblxuY29uc3QgUGxvdEJhckNoYXJ0QSA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiRknjga7liIbluIMhXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENoYXJ0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSA1O1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRvcGljWzBdOyAvLyBjbGlja2RhdGHjgpLlhKrlhYhcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldElkfS90cmVuZC9vdXRwdXRfdG9waWNfJHt0aW1lfS5qc29uYDtcbiAgICAgICAgY29uc3QgZmlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9maV9zdWJjbGFzc19zcGxpdC5qc29uYDtcblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgW29yaWdpbmFsLCBmaUxpc3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShwYXRoKSxcbiAgICAgICAgICBmZXRjaERhdGEoZmlQYXRoKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhXCIsb3JpZ2luYWwpO1xuIFxuXG4gICAgICAgIC8vIEpTT07jg4fjg7zjgr/jga7mlbTlvaJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKG9yaWdpbmFsKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICBcbiAgICAgICAgICBjYXRlZ29yeToga2V5LFxuICAgICAgICAgIHZhbHVlOiBrZXkgPT09IFwiXCIgPyAwIDogcGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDAgfHwgMCwgXG4gICAgICAgICAgc3VtbWFyaXplOiBmaUxpc3Rba2V5XSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFcIixmb3JtYXR0ZWREYXRhKTtcblxuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBmb3JtYXR0ZWREYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgRknjga7liIbluINgKTtcbiAgICAgICAgY29uc29sZS5sb2coY2hhcnREYXRhKTtcbiAgICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwICkpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgdXBkYXRlXSk7IC8vIGNsaWNrZGF0YSDjgpLkvp3lrZjplqLkv4Ljgavov73liqBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksXG4gICAgICAgICAgICB5OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KS5yZXZlcnNlKCksXG4gICAgICAgICAgICBjdXN0b21kYXRhOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnN1bW1hcml6ZSkucmV2ZXJzZSgpLCAvLyBzdW1tYXJpemUg44KSIGN1c3RvbWRhdGEg44Gr5rih44GZXG5cbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcbiAgICAgICAgICAgIG1hcmtlcjogeyBjb2xvcjogXCJyb3lhbGJsdWVcIiB9LFxuICAgICAgICAgICAgaG92ZXJ0ZW1wbGF0ZTpcbiAgICAgICAgICAgIGDoqqzmmI46ICV7Y3VzdG9tZGF0YX08YnI+JTogJXt4Oi4yZn0lIDxleHRyYT48L2V4dHJhPmAsIC8vIGN1c3RvbWRhdGEg44KS5Y+C54WnXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aWNrc3VmZml4OiBcIiAlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogXCJGSVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDgwLCByOiA1MCB9LFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIGFsaWduOlwibGVmdFwiLFxuICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICBzaXplOiAxMSwgLy8g44OE44O844Or44OB44OD44OX44Gu44OV44Kp44Oz44OI44K144Kk44K6XG4gICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsIC8vIOODleOCqeODs+ODiOOBruiJslxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJnY29sb3I6IFwibGlnaHR5ZWxsb3dcIiwgLy8g44OE44O844Or44OB44OD44OX44Gu6IOM5pmv6ImyXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJncmF5XCIsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruaeoOe3muiJslxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG5cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RCYXJDaGFydEE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbXlfYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYXV0aDBfYXV0aDAtcmVhY3RfZGlzdF9hdXRoMC1yZWFjdF9lc21fanMtbm9kZV9tb2R1bGVzX3JlYWN0LWJvb3RzdHJhcF9lLTk0ZDVmMFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJTaWRlYmFyIiwiQ29udGVudCIsInVzZUF1dGgwIiwiQXBwIiwibG9naW5XaXRoUmVkaXJlY3QiLCJsb2dvdXQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVMb2dpbiIsImNvbm5lY3Rpb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiYXJyb3dDb2xvciIsImNvbXBhbnlMaXN0IiwidG9waWNMaXN0IiwidmlzdWFsVHlwZSIsInNldFZpc3VhbFR5cGUiLCJpc0FwcGxpZWQiLCJzZXRJc0FwcGxpZWQiLCJzZWxlY3RlZENvbXBhbmllcyIsInNldFNlbGVjdGVkQ29tcGFuaWVzIiwic2VsZWN0ZWRUb3BpY3MiLCJzZXRTZWxlY3RlZFRvcGljcyIsImhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUFwcGx5IiwidG9nZ2xlU2VsZWN0aW9uIiwiaXRlbSIsInNldFNlbGVjdGVkIiwiYnV0dG9tdHlwZSIsInByZXZTZWxlY3RlZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaSIsIkNvbXBhbnlDaGVja2JveENoYW5nZSIsImNvbXBhbnkiLCJUb3BpY0NoZWNrYm94Q2hhbmdlIiwidG9waWMiLCJyZXNldElzQXBwbGllZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImZsdWlkIiwiY2xhc3NOYW1lIiwib25DbGljayIsIkZyYWdtZW50IiwibWQiLCJvbkFwcGx5Iiwib25WaXN1YWxUeXBlQ2hhbmdlIiwib25DaGFuZ2VUb3BpYyIsIm9uQ2hhbmdlQ29tcGFueSIsInN0eWxlIiwiaGVpZ2h0IiwicGxvdCIsInJlc2V0QXBwbHkiLCJDYXJkIiwiUGxvdFBpZUEiLCJQbG90UGllQiIsIlBsb3RQZXJzb25hQ29tcCIsIlBsb3RQZXJzb25hVG9waWMiLCJQbG90QmFyQ2hhcnRBIiwiUGxvdEJhckNoYXJ0QiIsIlByb3Bvc2VkRGF0YSIsImdldENhcmREYXRhIiwiUHJvcG9zZWRWaXN1YWxpemUiLCJfcmVmIiwiY2xpY2tEYXRhIiwic2V0Q2xpY2tEYXRhIiwiY2xpY2tDb21wYW55RGF0YSIsInNldENsaWNrQ29tcGFueURhdGEiLCJoYW5kbGVQaWVDaGFydENsaWNrIiwiZGF0YSIsImxvZyIsImhhbmRsZVBlcnNvbmFDbGljayIsImNhcmREYXRhIiwic2V0Q2FyZERhdGEiLCJ1cGRhdGUiLCJvblJlbmRlcmVkIiwib25DbGlja0RhdGEiLCJsYXlvdXQiLCJ0aXRsZSIsIndpZHRoIiwiY29uZmlnIiwicmVzcG9uc2l2ZSIsImNsaWNrZGF0YSIsInByb3Bvc2VkRGF0YSIsInNldFByb3Bvc2VkRGF0YSIsInNldEVycm9yIiwiZmV0Y2hEYXRhIiwiZGF0YVBhdGgiLCJwcm9jZXNzIiwiZW52IiwiUFVCTElDX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbkRhdGEiLCJqc29uIiwiY29tcGFueURhdGEiLCJ3YXJuIiwidG9waWNEYXRhIiwiZXJyIiwicmVuZGVyQ2FyZCIsImRpcmVjdGlvbiIsInZhbHVlcyIsImxhYmVsIiwiYmFzZUNvbG9yTWFwIiwidXByaWdodCIsInVwbGVmdCIsImRvd25yaWdodCIsImRvd25sZWZ0IiwiYmFzZUNvbG9yIiwiY2FyZEFscGhhIiwiY2FyZEJhY2tncm91bmRDb2xvciIsInJlcGxhY2UiLCJNYXRoIiwibWluIiwia2V5IiwiYmFja2dyb3VuZENvbG9yIiwiQm9keSIsIlRpdGxlIiwic2xpY2UiLCJtYXAiLCJpbmRleCIsImFscGhhIiwiaXRlbUJhY2tncm91bmRDb2xvciIsIm1heCIsIkhlYWRlciIsImNvbG9yIiwidGV4dEFsaWduIiwiUmVhY3RET00iLCJBdXRoMFByb3ZpZGVyIiwiZG9tYWluIiwiY2xpZW50SWQiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIiwiYXV0aG9yaXphdGlvblBhcmFtcyIsInJlZGlyZWN0X3VyaSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VSZWYiLCJQbG90IiwiY29sb3JtYXAiLCJ1cmwiLCJzdGF0dXMiLCJjb250ZW50VHlwZSIsImhlYWRlcnMiLCJnZXQiLCJ0ZXh0Iiwic3BsaXQiLCJsaW5lIiwidHJpbSIsInByb2Nlc3NTcGFyc2VEYXRhIiwic3BhcnNlRGF0YSIsIm51bVJvd3MiLCJlbnRyeSIsInJvdyIsIm51bUNvbHMiLCJjb2wiLCJtYXRyaXgiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJmaWxsIiwiZm9yRWFjaCIsInJlZHVjZSIsInN1bSIsIl9yZWYyIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwic2V0VGl0bGUiLCJhbGxUb3BpYyIsIklkdG9Ub3BpYyIsIlRvcGljdG9JZCIsImRhdGFDYWNoZSIsImNvbXBhbmllcyIsImxvYWREYXRhIiwiYWxsVG9waWNzRGF0YSIsIlByb21pc2UiLCJhbGwiLCJ0YXJnZXRfaWQiLCJ0aW1lIiwiY29tcGFueVVybCIsInNwYXJzZURhdGFVcmwiLCJjdXJyZW50Iiwibm9ybWFsaXplU3RyaW5nIiwic3RyIiwibm9ybWFsaXplIiwic2FuaXRpemVkQ29tcGFuaWVzIiwic2FuaXRpemVkQ29tcGFueSIsInJvd1N1bXMiLCJjb21wYW55SW5kZXgiLCJpbmRleE9mIiwiZmlsdGVyZWREYXRhIiwidG90YWxWYWx1ZSIsIm5vcm1hbGl6ZWREYXRhIiwiY2F0ZWdvcnkiLCJzb3J0IiwiYSIsImIiLCJoYW5kbGVQbG90Q2xpY2siLCJldmVudCIsInBvaW50cyIsInRvcGljaWQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ0eXBlIiwibGFiZWxzIiwiU3RyaW5nIiwibWFya2VyIiwiY29sb3JzIiwic2hvd2xlZ2VuZCIsInBsb3RfYmdjb2xvciIsInBhcGVyX2JnY29sb3IiLCJtYXJnaW4iLCJ0IiwibCIsInIiLCJmZXRjaFRleHREYXRhIiwibG9hZENoYXJ0RGF0YSIsInRhcmdldElkIiwiZGF0YVVybCIsImNvbHVtblVybCIsInNvcnRlZERhdGEiLCJsb2FkQ29tcGFuaWVzIiwidG9MaXN0IiwibGluZXMiLCJhbHBoYV9saSIsInBhcnNlRmxvYXQiLCJiZXRhX2xpIiwiUGxvdFBlcnNvbkNvbXAiLCJhcnJvd19jb2xvciIsInByZXBhcmVkRGF0YSIsInNldFByZXBhcmVkRGF0YSIsImZpZ0RhdGEiLCJzZXRGaWdEYXRhIiwiYW5ub3RhdGlvbnMiLCJzZXRBbm5vdGF0aW9ucyIsImF1dGhvckRhdGEiLCJzZXRBdXRob3JEYXRhIiwicHJlcGFyZURhdGEiLCJhbGxQcm9taXNlcyIsImNvbHVtblBhdGgiLCJjb21wYW55RGljdCIsImFjYyIsImlkeCIsIm5ld1NlYXJjaExpc3QiLCJpc0FycmF5IiwiZmlsdGVyZWRTZWFyY2hMaXN0Iiwibm9kZV9hbHBoYSIsIm5vZGVfYmV0YSIsInByb21pc2VzIiwiXyIsImoiLCJwIiwicGFyYW1ldGVyUGF0aCIsImsiLCJyZXN1bHRzIiwiY29tYmluZWRBbHBoYSIsImZsYXRNYXAiLCJyZXN1bHQiLCJjb21iaW5lZEJldGEiLCJjb21iaW5lZFNlYXJjaExpc3QiLCJiZXRhIiwic2VhcmNoTGlzdCIsImxvYWRBdXRob3JEYXRhIiwidG9waWNJZCIsImF1dGhvclBhdGgiLCJ5ZWFyVG9QZXJzb25hIiwicGVyc29uYURhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwieWVhciIsInBlcnNvbmFOdW0iLCJ5ZWFyRGF0YSIsImtleXMiLCJhdXRob3JzIiwidG9wQXV0aG9ycyIsIl9yZWYzIiwiYXV0aG9yIiwiY291bnQiLCJqb2luIiwiYXV0aG9yRGF0YU1hcCIsIl9yZWY0IiwicGxvdERhdGEiLCJjdXJyZW50VG9waWMiLCJwZXJzb25hVG9ZZWFyIiwiaG92ZXJUZXh0cyIsIm51bSIsInllYXJUZXh0IiwiYXV0aG9ySW5mbyIsIngiLCJ5IiwibW9kZSIsInRleHRwb3NpdGlvbiIsImhvdmVydGV4dCIsImhvdmVyaW5mbyIsImhvdmVybGFiZWwiLCJhbGlnbiIsImJnY29sb3IiLCJib3JkZXJjb2xvciIsImZvbnQiLCJzaXplIiwic3ltYm9sIiwibmFtZSIsInBsb3RBbm5vdGF0aW9ucyIsInhyZWYiLCJ5cmVmIiwiYXhyZWYiLCJheXJlZiIsImF4IiwiYXkiLCJhcnJvd2NvbG9yIiwiYXJyb3dzaXplIiwiYXJyb3d3aWR0aCIsImFycm93aGVhZCIsInNob3dhcnJvdyIsInhhbmNob3IiLCJ5YW5jaG9yIiwieGF4aXMiLCJyYW5nZSIsImxpbmVjb2xvciIsImxpbmV3aWR0aCIsImdyaWRjb2xvciIsImdyaWR3aWR0aCIsImdyaWRkYXNoIiwidGlja21vZGUiLCJ0aWNrdmFscyIsInRpY2t0ZXh0IiwiemVyb2xpbmUiLCJ5YXhpcyIsInRpdGxlX3N0YW5kb2ZmIiwibGVnZW5kIiwiYm9yZGVyd2lkdGgiLCJob3ZlcmRpc3RhbmNlIiwiaG92ZXJtb2RlIiwibmFtZWxlbmd0aCIsImRpc3BsYXlNb2RlQmFyIiwiUGxvdFBlcnNvblRvcGljIiwic2V0Q29tcGFueUxpc3QiLCJzZXRTZWFyY2hMaXN0IiwidGhlbiIsIkFjY29yZGlvbiIsIkJ1dHRvbiIsImlucHV0VHlwZSIsInNldElucHV0VHlwZSIsImhhbmRsZVJhZGlvQ2hhbmdlIiwidGFyZ2V0IiwicGFkZGluZyIsInNtIiwiZGVmYXVsdEFjdGl2ZUtleSIsIkl0ZW0iLCJldmVudEtleSIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImh0bWxGb3IiLCJmb250U2l6ZSIsInBhdGgiLCJjb21wYW55UGF0aCIsImZpUGF0aCIsIm9yaWdpbmFsIiwiZmlMaXN0IiwiZm9ybWF0dGVkRGF0YSIsInN1bW1hcml6ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXZlcnNlIiwiY3VzdG9tZGF0YSIsIm9yaWVudGF0aW9uIiwiaG92ZXJ0ZW1wbGF0ZSIsIm1pcnJvciIsInRpY2tzdWZmaXgiXSwic291cmNlUm9vdCI6IiJ9