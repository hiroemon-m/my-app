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
              "2024": "5",
              "2021": "4",
              "2019": "3",
              "2017": "2",
              "2015": "1"
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
          "1": "2009",
          "2": "2012",
          "3": "2015",
          "4": "2018",
          "5": "2021"
        };
        const hoverTexts = ["1", "2", "3", "4", "5"].map(num => {
          const yearText = `${personaToYear[num]}年`;
          const year = parseInt(yearText); // 文字列を数値に変換
          if (k === "株式会社熊谷組" && authorData[currentTopic] && authorData[currentTopic][`persona_${num}`]) {
            const authorInfo = authorData[currentTopic][`persona_${num}`];
            return `(${year - 3}~${year})<br>著者: ${authorInfo.authors}`;
          }
          return ` (${year - 3}~${year})`;
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
      hoverdistance: 50,
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
          "5": "2021",
          "4": "2018",
          "3": "2015",
          "2": "2012",
          "1": "2009"
        };
        const plotData = searchList.map((k, j) => {
          const hoverTexts = ["1", "2", "3", "4", "5"].map(num => {
            const yearText = `${personaToYear[num]}`;
            const year = parseInt(yearText); // 文字列を数値に変換
            if (k === "株式会社熊谷組" && authorData[`persona_${num}`]) {
              return `(${year - 3}~${year})<br>著者: ${authorData[`persona_${num}`].authors}`;
            }
            return `(${year - 3}~${year})`;
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
      hoverdistance: 50,
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
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
  const [topicSearchTerm, setTopicSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [companySearchTerm, setCompanySearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const topicSearchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const companySearchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
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
  const handleSelectAllTopics = () => {
    topicList.forEach(topic => {
      if (!selectedTopics.includes(topic)) {
        onChangeTopic(topic, inputType[0]);
      }
    });
  };
  const handleUnselectAllTopics = () => {
    topicList.forEach(topic => {
      if (selectedTopics.includes(topic)) {
        onChangeTopic(topic, inputType[0]);
      }
    });
  };
  const handleSelectAllCompanies = () => {
    companyList.forEach(company => {
      if (!selectedCompanies.includes(company)) {
        onChangeCompany(company, inputType[1]);
      }
    });
  };
  const handleUnselectAllCompanies = () => {
    companyList.forEach(company => {
      if (selectedCompanies.includes(company)) {
        onChangeCompany(company, inputType[1]);
      }
    });
  };
  const handleTopicSearch = e => {
    setTopicSearchTerm(e.target.value);
  };
  const handleCompanySearch = e => {
    setCompanySearchTerm(e.target.value);
  };
  const handleTopicSearchKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const filteredTopics = topicList.filter(topic => IdtoTopic[topic].toLowerCase().includes(topicSearchTerm.toLowerCase()));
      if (filteredTopics.length > 0) {
        onChangeTopic(filteredTopics[0], inputType[0]);
      }
      setTopicSearchTerm('');
    }
  };
  const handleCompanySearchKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const filteredCompanies = companyList.filter(company => company.toLowerCase().includes(companySearchTerm.toLowerCase()));
      if (filteredCompanies.length > 0) {
        onChangeCompany(filteredCompanies[0], inputType[1]);
      }
      setCompanySearchTerm('');
    }
  };

  // トピックのフィルタリング
  const filteredTopics = topicList.filter(topic => topicSearchTerm === '' || IdtoTopic[topic].toLowerCase().includes(topicSearchTerm.toLowerCase()));

  // 会社のフィルタリング
  const filteredCompanies = companyList.filter(company => companySearchTerm === '' || company.toLowerCase().includes(companySearchTerm.toLowerCase()));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Header, null, "Topic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "sm",
    variant: "outline-primary",
    onClick: handleSelectAllTopics
  }, "\u5168\u9078\u629E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "sm",
    variant: "outline-secondary",
    onClick: handleUnselectAllTopics
  }, "\u5168\u89E3\u9664")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {
    placeholder: "\u30C8\u30D4\u30C3\u30AF\u3092\u691C\u7D22...",
    value: topicSearchTerm,
    onChange: handleTopicSearch,
    onKeyDown: handleTopicSearchKeyDown,
    ref: topicSearchRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "outline-secondary",
    onClick: () => setTopicSearchTerm('')
  }, "\u30AF\u30EA\u30A2")), filteredTopics.map(topic => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: topic
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: inputType[0],
    id: topic,
    checked: selectedTopics.includes(topic),
    onChange: () => onChangeTopic(topic, inputType[0]),
    name: "topic"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: topic
  }, IdtoTopic[topic]))), filteredTopics.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-muted small"
  }, "\u8A72\u5F53\u3059\u308B\u30C8\u30D4\u30C3\u30AF\u304C\u3042\u308A\u307E\u305B\u3093"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    eventKey: "2",
    className: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Header, null, "Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "sm",
    variant: "outline-primary",
    onClick: handleSelectAllCompanies
  }, "\u5168\u9078\u629E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "sm",
    variant: "outline-secondary",
    onClick: handleUnselectAllCompanies
  }, "\u5168\u89E3\u9664")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {
    placeholder: "\u4F01\u696D\u3092\u691C\u7D22...",
    value: companySearchTerm,
    onChange: handleCompanySearch,
    onKeyDown: handleCompanySearchKeyDown,
    ref: companySearchRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "outline-secondary",
    onClick: () => setCompanySearchTerm('')
  }, "\u30AF\u30EA\u30A2")), filteredCompanies.map(company => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: company
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: inputType[1],
    id: company,
    checked: selectedCompanies.includes(company),
    onChange: () => onChangeCompany(company, inputType[1]),
    name: "company"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: company
  }, company))), filteredCompanies.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-muted small"
  }, "\u8A72\u5F53\u3059\u308B\u4F01\u696D\u304C\u3042\u308A\u307E\u305B\u3093"))))));
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_auth0_auth0-react_dist_auth0-react_esm_js-node_modules_react-bootstrap_e-13806b"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2FwcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbnRlbnQuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9nby1hbnl3aGVyZS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9vY2N1cHktY29tcGFueS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtdG9waWMuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9zaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RyZW5kLXRvcGl4LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyLmpzeCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQuanN4JztcbmltcG9ydCB7IHVzZUF1dGgwIH0gZnJvbSAnQGF1dGgwL2F1dGgwLXJlYWN0JztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCB7IGxvZ2luV2l0aFJlZGlyZWN0LCBsb2dvdXQsIGlzQXV0aGVudGljYXRlZCwgdXNlciB9ID0gdXNlQXV0aDAoKTsgLy8gQXV0aDDjga7mg4XloLHjgpLlj5blvpdcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBsb2dpbldpdGhSZWRpcmVjdCh7XG4gICAgICAgIGNvbm5lY3Rpb246ICdVc2VybmFtZS1QYXNzd29yZC1BdXRoZW50aWNhdGlvbicsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44Ot44Kw44Kk44Oz44Ko44Op44O8OlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXJyb3dDb2xvciA9IFtcbiAgICAnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJyxcbiAgICAnIzNFOUU2RicsICcjRjM4MTgxJywgJyM1NDVFNzUnLCAnI0ZGQjYyNycsICcjNTc3NTkwJyxcbiAgXTtcbiAgY29uc3QgY29tcGFueUxpc3QgPSBbXG4gICAgJ+m5v+WztuW7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7lpKfmnpfntYQnLCAn5riF5rC05bu66Kit5qCq5byP5Lya56S+JywgJ+Wkp+aIkOW7uuioreagquW8j+S8muekvicsXG4gICAgJ+agquW8j+S8muekvuerueS4reW3peWLmeW6lycsICfmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7MnLCAn5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+JyxcbiAgICAn5LqU5rSL5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvuODleOCuOOCvycsICfmiLjnlLDlu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+54aK6LC357WEJyxcbiAgXTtcbiAgY29uc3QgdG9waWNMaXN0ID0gWycwJywgJzEnLCAnMicsICczJywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMScsXCIxNVwiLFwiMTdcIl07XG5cbiAgY29uc3QgW3Zpc3VhbFR5cGUsIHNldFZpc3VhbFR5cGVdID0gdXNlU3RhdGUoJ29uZS10b3BpYycpO1xuICBjb25zdCBbaXNBcHBsaWVkLCBzZXRJc0FwcGxpZWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzZWxlY3RlZENvbXBhbmllcywgc2V0U2VsZWN0ZWRDb21wYW5pZXNdID0gdXNlU3RhdGUoWyfmoKrlvI/kvJrnpL7nhorosLfntYQnXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFRvcGljcywgc2V0U2VsZWN0ZWRUb3BpY3NdID0gdXNlU3RhdGUoWycwJ10pO1xuXG4gIGNvbnN0IGhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRWaXN1YWxUeXBlKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcHBseSA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2VsZWN0aW9uID0gKGl0ZW0sIHNldFNlbGVjdGVkLCBidXR0b210eXBlKSA9PiB7XG4gICAgaWYgKGJ1dHRvbXR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHNldFNlbGVjdGVkKChwcmV2U2VsZWN0ZWQpID0+XG4gICAgICAgIHByZXZTZWxlY3RlZC5pbmNsdWRlcyhpdGVtKVxuICAgICAgICAgID8gcHJldlNlbGVjdGVkLmZpbHRlcigoaSkgPT4gaSAhPT0gaXRlbSlcbiAgICAgICAgICA6IFsuLi5wcmV2U2VsZWN0ZWQsIGl0ZW1dXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZChbaXRlbV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDb21wYW55Q2hlY2tib3hDaGFuZ2UgPSAoY29tcGFueSwgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbihjb21wYW55LCBzZXRTZWxlY3RlZENvbXBhbmllcywgYnV0dG9tdHlwZSk7XG4gIH07XG5cbiAgY29uc3QgVG9waWNDaGVja2JveENoYW5nZSA9ICh0b3BpYywgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbih0b3BpYywgc2V0U2VsZWN0ZWRUb3BpY3MsIGJ1dHRvbXR5cGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDb21wYW5pZXMoWyfmoKrlvI/kvJrnpL7nhorosLfntYQnXSk7XG4gICAgc2V0U2VsZWN0ZWRUb3BpY3MoWycwJ10pO1xuICB9LCBbdmlzdWFsVHlwZV0pO1xuXG4gIGNvbnN0IHJlc2V0SXNBcHBsaWVkID0gKCkgPT4ge1xuICAgIHNldElzQXBwbGllZCgwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaWQ9XCJyZWFjdC1jb250ZW50XCIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5cbiAgICAgIDxSb3c+XG4gICAgICAgIHshaXNBdXRoZW50aWNhdGVkID8gKCAvLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgarjgYTloLTlkIhcbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxPuODreOCsOOCpOODs+OBjOW/heimgeOBp+OBmTwvaDE+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTG9naW59PlxuICAgICAgICAgICAgICAgIOODreOCsOOCpOODs1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICApIDogKCAvLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgovloLTlkIhcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgey8qIOOCteOCpOODieODkOODvCAqL31cbiAgICAgICAgICAgIDxDb2wgbWQ9ezN9IGNsYXNzTmFtZT1cImJvcmRlci1lbmRcIj5cbiAgICAgICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgICAgICBvbkFwcGx5PXtoYW5kbGVBcHBseX1cbiAgICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICAgIG9uVmlzdWFsVHlwZUNoYW5nZT17aGFuZGxlVmlzdWFsVHlwZUNoYW5nZX1cbiAgICAgICAgICAgICAgICB0b3BpY0xpc3Q9e3RvcGljTGlzdH1cbiAgICAgICAgICAgICAgICBjb21wYW55TGlzdD17Y29tcGFueUxpc3R9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb21wYW5pZXM9e3NlbGVjdGVkQ29tcGFuaWVzfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9waWNzPXtzZWxlY3RlZFRvcGljc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZVRvcGljPXtUb3BpY0NoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGFueT17Q29tcGFueUNoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIHsvKiDjg6HjgqTjg7PjgrPjg7Pjg4bjg7Pjg4QgKi99XG4gICAgICAgICAgICA8Q29sIG1kPXs5fSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgICAgICAgICA8Q29udGVudFxuICAgICAgICAgICAgICAgIHBsb3Q9e2lzQXBwbGllZH1cbiAgICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICAgIHRvcGljPXtzZWxlY3RlZFRvcGljc31cbiAgICAgICAgICAgICAgICBjb21wYW55PXtzZWxlY3RlZENvbXBhbmllc31cbiAgICAgICAgICAgICAgICByZXNldEFwcGx5PXtyZXNldElzQXBwbGllZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH1mcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBQbG90UGllQSBmcm9tICcuL29jY3VweS5qc3gnO1xuaW1wb3J0IFBsb3RQaWVCIGZyb20gJy4vb2NjdXB5LWNvbXBhbnkuanN4JztcbmltcG9ydCBQbG90UGVyc29uYUNvbXAgZnJvbSAnLi9wZXJzb25hLWNvbXAuanN4JztcbmltcG9ydCBQbG90UGVyc29uYVRvcGljIGZyb20gJy4vcGVyc29uYS10b3BpYy5qc3gnO1xuXG5pbXBvcnQgUGxvdEJhckNoYXJ0QSBmcm9tICcuL3RyZW5kLXRvcGl4LmpzeCc7XG5pbXBvcnQgUGxvdEJhckNoYXJ0QiBmcm9tICcuL3RyZW5kLWNvbXAuanN4JztcbmltcG9ydCBQcm9wb3NlZERhdGEsIHsgZ2V0Q2FyZERhdGEgfSBmcm9tIFwiLi9nby1hbnl3aGVyZS5qc3hcIjsgLy8g5q2j44GX44GE44OR44K544KS5oyH5a6aXG5pbXBvcnQgUHJvcG9zZWRWaXN1YWxpemUgZnJvbSAnLi9nby1hbnl3aGVyZS5qc3gnO1xuXG5cblxuXG5cbmNvbnN0IENvbnRlbnQgPSAoe3Bsb3QsdmlzdWFsVHlwZSx0b3BpYyxjb21wYW55LHJlc2V0QXBwbHl9KSA9PiB7XG5cblxuXG4gICAgY29uc3QgW2NsaWNrRGF0YSwgc2V0Q2xpY2tEYXRhXSA9IHVzZVN0YXRlKCk7IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBrueKtuaFi1xuICAgIGNvbnN0IFtjbGlja0NvbXBhbnlEYXRhLCBzZXRDbGlja0NvbXBhbnlEYXRhXSA9IHVzZVN0YXRlKCk7IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBrueKtuaFi1xuXG4gICAgY29uc3QgaGFuZGxlUGllQ2hhcnRDbGljayA9IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIuOCr+ODquODg+OCr+OBleOCjOOBn+ODh+ODvOOCvzpcIiwgZGF0YSk7IC8vIOODh+ODkOODg+OCsOeUqFxuICAgICAgc2V0Q2xpY2tEYXRhKGRhdGEpOyAvLyDnirbmhYvjgpLmm7TmlrBcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVBlcnNvbmFDbGljayA9IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIuOCr+ODquODg+OCr+OBleOCjOOBn+ODh+ODvOOCvzpcIiwgZGF0YSk7IC8vIOODh+ODkOODg+OCsOeUqFxuICAgICAgc2V0Q2xpY2tDb21wYW55RGF0YShkYXRhKTsgLy8g54q25oWL44KS5pu05pawXG4gICAgfTtcblxuICAgIGNvbnN0IFtjYXJkRGF0YSwgc2V0Q2FyZERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgXG4gICAgXG4gIHJldHVybiAoXG4gICAgXG4gICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJiZy1saWdodFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIHsvKiBGaXJzdCBSb3cgKi99XG4gICAgICA8Um93IHN0eWxlPXt7IGhlaWdodDogJzUwdmgnIH19PlxuICAgICAgICB7LyogUGVyc29uYSBHcmFwaCAqL31cbiAgICAgICAgPENvbCBtZD17MX0+PC9Db2w+XG4gICAgICAgIDxDb2wgbWQ9ezEwfSA+XG5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFUb3BpY1xuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgb25DbGlja0RhdGE9e2hhbmRsZVBlcnNvbmFDbGlja30gLy8g44Kv44Oq44OD44Kv44OH44O844K/44Gu44OP44Oz44OJ44Op44O844KS5rih44GZXG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODmuODq+OCveODiuOBruWPr+imluWMllwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTB2aCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MHZoXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYUNvbXBcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODmuODq+OCveODiuOBruWPr+imluWMllwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDJ2aCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+6Kmy5b2T44GZ44KL6KGo56S644GM44GC44KK44G+44Gb44KTPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgey8qIFJpZ2h0IENvbHVtbiB3aXRoIENhcmRzICovfVxuICAgICAgICA8Q29sIG1kPXsxfT5cblxuICAgIDwvQ29sPlxuICA8L1Jvdz5cblxuICAgICAgey8qIFNlY29uZCBSb3cgKi99XG4gICAgICA8Um93IHN0eWxlPXt7IGhlaWdodDogJzUwdmgnIH19PlxuICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUFcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIG9uQ2xpY2tEYXRhPXtoYW5kbGVQaWVDaGFydENsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jga7jg4/jg7Pjg4njg6njg7zjgpLmuKHjgZlcbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfms6jnm67kvIHmpa3jga7mpa3nlYzjgavlr77jgZnjgovljaDmnInnjocnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgPFBsb3RCYXJDaGFydEFcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG5cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgIGRhdGE9e1tdfSAvLyDjg4fjg7zjgr/jgpLov73liqDjgZfjgabjgY/jgaDjgZXjgYRcbiAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICB0aXRsZTogJ0bjgr/jg7zjg6Djga7liIbluIMnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPik6KFxuICAgICAgICAgIDxQbG90QmFyQ2hhcnRCXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBjbGlja2RhdGE9e2NsaWNrRGF0YX0gLy8g44Kv44Oq44OD44Kv44OH44O844K/44KS5rih44GZXG4gICAgXG5cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgIGRhdGE9e1tdfSAvLyDjg4fjg7zjgr/jgpLov73liqDjgZfjgabjgY/jgaDjgZXjgYRcbiAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICB0aXRsZTogJ0bjgr/jg7zjg6Djga7liIbluIMnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPil9XG4gICAgICAgICAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImgtMTAwXCI+XG5cbiAgICAgIDxDb2w+XG4gICAgICB7XG4gICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgIDxQcm9wb3NlZFZpc3VhbGl6ZVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNsaWNrRGF0YT17Y2xpY2tDb21wYW55RGF0YX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Lu75oSP44Gu5L2N572u44G456e75YuV44GZ44KL44Gf44KB44Gu5o+Q5qGIJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pOihcbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICkgfVxuICBcbiAgICAgICAgPC9Db2w+XG4gICAgICAgICAgXG4gICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCxSb3csQ29sLENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgUHJvcG9zZWRWaXN1YWxpemUgPSAoeyB0b3BpYywgY2xpY2tEYXRhIH0pID0+IHtcbiAgY29uc3QgW3Byb3Bvc2VkRGF0YSwgc2V0UHJvcG9zZWREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0b3BpY30vcHJvcG9zZWQvcHJvcG9zZWQuanNvbmA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLjg4fjg7zjgr/jga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ9cIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAvLyBgY2xpY2tEYXRhYOOBq+WvvuW/nOOBmeOCi+S8muekvuOBruODh+ODvOOCv+OCkuWPluW+l1xuICAgICAgICBjb25zdCBjb21wYW55RGF0YSA9IGpzb25EYXRhW2NsaWNrRGF0YV07XG5cbiAgICAgICAgaWYgKCFjb21wYW55RGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIuaMh+WumuOBl+OBn+ODh+ODvOOCv+OBjOWtmOWcqOOBl+OBvuOBm+OCkzogXCIgKyBjbGlja0RhdGEpO1xuICAgICAgICAgIHNldFByb3Bvc2VkRGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5oyH5a6a44GV44KM44Gf44OI44OU44OD44Kv44Gu44OH44O844K/44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IHRvcGljRGF0YSA9IGNvbXBhbnlEYXRhW3RvcGljXTtcbiAgICAgICAgaWYgKCF0b3BpY0RhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCLmjIflrprjgZfjgZ/jg4jjg5Tjg4Pjgq/jgYzlrZjlnKjjgZfjgb7jgZvjgpM6IFwiICsgdG9waWMpO1xuICAgICAgICAgIHNldFByb3Bvc2VkRGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0UHJvcG9zZWREYXRhKHRvcGljRGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+S4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzpcIiwgZXJyKTtcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3RvcGljLCBjbGlja0RhdGFdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj7jgqjjg6njg7w6IHtlcnJvcn08L2Rpdj47XG4gIH1cblxuICBpZiAoIXByb3Bvc2VkRGF0YSkge1xuICAgIHJldHVybiA8ZGl2PuODh+ODvOOCv+OCkuiqreOBv+i+vOOBv+S4rS4uLjwvZGl2PjtcbiAgfVxuXG4gIFxuICAvLyDjg4fjg7zjgr/jgpLjgqvjg7zjg4nlvaLlvI/jgafooajnpLpcbmNvbnN0IHJlbmRlckNhcmQgPSAoZGlyZWN0aW9uLCB2YWx1ZXMpID0+IHtcbiAgbGV0IGxhYmVsO1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgXCJ1cGxlZnRcIjpcbiAgICAgIGxhYmVsID0gXCLlt6bkuIpcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ1cHJpZ2h0XCI6XG4gICAgICBsYWJlbCA9IFwi5Y+z5LiKXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZG93bmxlZnRcIjpcbiAgICAgIGxhYmVsID0gXCLlt6bkuItcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkb3ducmlnaHRcIjpcbiAgICAgIGxhYmVsID0gXCLlj7PkuItcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsYWJlbCA9IFwi44Gd44Gu5LuWXCI7XG4gIH1cblxuICAvLyDjgqvjg7zjg4nlhajkvZPjga7og4zmma/oibLjgpLoqK3lrprvvIjmlrnlkJHjgavln7rjgaXjgY/jg5njg7zjgrnjgqvjg6njg7zvvIlcbiAgY29uc3QgYmFzZUNvbG9yTWFwID0ge1xuICAgIHVwcmlnaHQ6IFwicmdiYSgyNTUsIDE4OCwgMTg4LCBBTFBIQSlcIiwgICAvLyDotaRcbiAgICB1cGxlZnQ6IFwicmdiYSgyNTUsIDI1NSwgMTg4LCBBTFBIQSlcIiwgLy8g6buEXG4gICAgZG93bnJpZ2h0OiBcInJnYmEoMTg4LCAyMjEsIDI1NSwgQUxQSEEpXCIsIC8vIOmdklxuICAgIGRvd25sZWZ0OiBcInJnYmEoMTg4LCAyNTUsIDE4OCwgQUxQSEEpXCIgLy8g57eRXG4gIH07XG5cbiAgY29uc3QgYmFzZUNvbG9yID0gYmFzZUNvbG9yTWFwW2RpcmVjdGlvbl07XG4gIGNvbnN0IGNhcmRBbHBoYSA9IDAuMzsgLy8g5YaF6YOo44Gu6KaB57Sg5pWw44Gn6YCP5piO5bqm44KS5aSJ5YyWXG4gIGNvbnN0IGNhcmRCYWNrZ3JvdW5kQ29sb3IgPSBiYXNlQ29sb3IucmVwbGFjZShcIkFMUEhBXCIsIE1hdGgubWluKGNhcmRBbHBoYSwgMSkpOyAvLyDog4zmma/oibLjgpLli5XnmoTjgavoqK3lrppcblxuICByZXR1cm4gKFxuXG4gICAgPENhcmQga2V5PXtkaXJlY3Rpb259IGNsYXNzTmFtZT1cIm0tM1wiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY2FyZEJhY2tncm91bmRDb2xvciB9fT5cbiAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPlxuICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCI+e2xhYmVsfTwvQ2FyZC5UaXRsZT5cbiAgICAgICAge3ZhbHVlcy5zbGljZSgwLCA1KS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIC8vIOmghuS9jeOBq+WfuuOBpeOBhOOBpumAj+aYjuW6puOCkuiqv+aVtFxuICAgICAgICAgIGNvbnN0IGFscGhhID0gMC45MCAtIGluZGV4ICogMC4xNTsgLy8g6aCG5L2N44GU44Go44Gr6YCP5piO5bqm44KS5b6Q44CF44Gr5rib5bCRXG4gICAgICAgICAgY29uc3QgaXRlbUJhY2tncm91bmRDb2xvciA9IGJhc2VDb2xvci5yZXBsYWNlKFwiQUxQSEFcIiwgTWF0aC5tYXgoYWxwaGEsIDAuMSkpOyAvLyDlkITjgqLjgqTjg4bjg6Djga7og4zmma/oibJcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhbmtpbmctaXRlbSBweS0yIHB4LTMgYm9yZGVyLWJvdHRvbVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaXRlbUJhY2tncm91bmRDb2xvciB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Ryb25nPntpbmRleCArIDF95L2N77yaPC9zdHJvbmc+IHt2YWx1ZSB8fCBcIlwifVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0NhcmQuQm9keT5cbiAgICA8L0NhcmQ+XG5cbiAgKTtcbn07XG4gIHJldHVybiAoXG48Q29udGFpbmVyPlxuICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS0zXCI+XG4gICAgey8qIENhcmTjg5jjg4Pjg4Djg7zjgafkuK3lpK7kuIrpg6jjgatjbGlja0RhdGHjgpLooajnpLogKi99XG4gICAgPENhcmQuSGVhZGVyIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMzMzMzMzXCIsIGNvbG9yOiBcIndoaXRlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+e2NsaWNrRGF0YSB8fCBcIiBcIn08L2g1PlxuICAgIDwvQ2FyZC5IZWFkZXI+XG5cblxuICAgIDxDYXJkLkJvZHk+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sPntyZW5kZXJDYXJkKFwidXBsZWZ0XCIsIHByb3Bvc2VkRGF0YS51cGxlZnQgfHwgW10pfTwvQ29sPlxuICAgICAgICA8Q29sPntyZW5kZXJDYXJkKFwidXByaWdodFwiLCBwcm9wb3NlZERhdGEudXByaWdodCB8fCBbXSl9PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2w+e3JlbmRlckNhcmQoXCJkb3dubGVmdFwiLCBwcm9wb3NlZERhdGEuZG93bmxlZnQgfHwgW10pfTwvQ29sPlxuICAgICAgICA8Q29sPntyZW5kZXJDYXJkKFwiZG93bnJpZ2h0XCIsIHByb3Bvc2VkRGF0YS5kb3ducmlnaHQgfHwgW10pfTwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9DYXJkLkJvZHk+XG4gIDwvQ2FyZD5cbjwvQ29udGFpbmVyPlxuXG5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9wb3NlZFZpc3VhbGl6ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHAuanN4XCI7XG5pbXBvcnQgeyBBdXRoMFByb3ZpZGVyIH0gZnJvbSBcIkBhdXRoMC9hdXRoMC1yZWFjdFwiO1xuXG4vLyBBdXRoMOOBruioreWumlxuY29uc3QgZG9tYWluID0gXCJkZXYtbDNiZ2VnbmpqeHd4Mm9kNC51cy5hdXRoMC5jb21cIjsgLy8gQXV0aDDjga7jg4njg6HjgqTjg7NcblxuY29uc3QgY2xpZW50SWQgPSBcIml2dGd4MWFyTjVKMDladzh5UENpRWtwUTFEWjNQMjJlXCI7IC8vIEF1dGgw44Gu44Kv44Op44Kk44Ki44Oz44OISURcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8QXV0aDBQcm92aWRlclxuICAgICAgZG9tYWluPXtkb21haW59XG4gICAgICBjbGllbnRJZD17Y2xpZW50SWR9XG4gICAgICBhdXRob3JpemF0aW9uUGFyYW1zPXt7XG4gICAgICAgIHJlZGlyZWN0X3VyaTogXCJodHRwczovL2hpcm9lbW9uLW0uZ2l0aHViLmlvL215LWFwcC9cIiwgLy8g6KqN6Ki85b6M44Gr44Oq44OA44Kk44Os44Kv44OI44GZ44KLVVJMXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxBcHAgLz5cbiAgICA8L0F1dGgwUHJvdmlkZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cblxuXG5jb25zdCBjb2xvcm1hcCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLlnLDnm6TmlLnoia9cIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIuODiOODs+ODjeODq+aOmOWJilwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gIFwi5YWN6ZyH5qeL6YCgXCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLnrqHnkIbjgrfjgrnjg4bjg6BcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuW7g+ajhOeJqeWHpueQhlwiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICBcIuW7uuevieODkeODjeODq1wiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLnqbroqr/jgrfjgrnjg4bjg6BcIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuaOmOWJiuijhee9rlwiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxufTtcblxuXG4vLyBmZXRjaERhdGHplqLmlbDvvJpKU09O44G+44Gf44Gv44OG44Kt44K544OI5b2i5byP44Gr5a++5b+cXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcblxuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gSlNPTuW9ouW8j+OBruWgtOWQiFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpOyAvLyDjg5fjg6zjg7zjg7Pjg4bjgq3jgrnjg4jjga7loLTlkIhcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTsgLy8g5pS56KGM5Yy65YiH44KK44Gu44OH44O844K/44KS6YWN5YiX44Go44GX44Gm6L+U44GZXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbi8vIOOCueODkeODvOOCueODh+ODvOOCv+OCkuWvhuihjOWIl+OBq+WkieaPm+OBl+OAgeihjOaWueWQkeOBruWSjOOCkuioiOeul1xuY29uc3QgcHJvY2Vzc1NwYXJzZURhdGEgPSAoc3BhcnNlRGF0YSkgPT4ge1xuICAgIFxuICBjb25zdCBudW1Sb3dzID0gTWF0aC5tYXgoLi4uc3BhcnNlRGF0YS5tYXAoZW50cnkgPT4gZW50cnkucm93KSkgKyAxO1xuICBjb25zdCBudW1Db2xzID0gTWF0aC5tYXgoLi4uc3BhcnNlRGF0YS5tYXAoZW50cnkgPT4gZW50cnkuY29sKSkgKyAxO1xuXG4gIGNvbnN0IG1hdHJpeCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG51bVJvd3MgfSwgKCkgPT4gQXJyYXkobnVtQ29scykuZmlsbCgwKSk7XG4gIHNwYXJzZURhdGEuZm9yRWFjaCgoeyByb3csIGNvbCwgdmFsdWUgfSkgPT4ge1xuICAgIG1hdHJpeFtyb3ddW2NvbF0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1hdHJpeC5tYXAocm93ID0+IHJvdy5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKSk7IC8vIOihjOaWueWQkeOBruWSjOOCkui/lOOBmVxufTtcblxuY29uc3QgUGxvdFBpZUIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBvblJlbmRlcmVkLCBvbkNsaWNrRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCLms6jnm67jg4jjg5Tjg4Pjgq/jgavplqLjgZnjgovnibnoqLHjga7kvIHmpa3ljaDmnInnjodcIik7XG4gIGNvbnN0IGFsbFRvcGljID0gWzIsIDMsIDEsIDAsIDksIDYsIDgsIDcsIDExXTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCIsXG4gICAgXCIxNVwiOlwi54Wn5piO44K344K544OG44OgXCIsXCIxN1wiOlwi5aOB6Z2i57eR5YyWXCJ9O1xuXG4gIGNvbnN0IFRvcGljdG9JZCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOlwiMlwiLFwi5Zyw55uk5pS56ImvXCI6XCIzXCIsXCLjg4jjg7Pjg43jg6vmjpjliYpcIjpcIjFcIixcbiAgICAgICAgXCLlhY3pnIfmp4vpgKBcIjpcIjBcIixcIueuoeeQhuOCt+OCueODhuODoFwiOlwiOVwiLFwi5buD5qOE54mp5Yem55CGXCI6XCI2XCIsXCLlu7rnr4njg5Hjg43jg6tcIjpcIjhcIixcbiAgICAgICBcIuepuuiqv+OCt+OCueODhuODoFwiOlwiN1wiLFwi5o6Y5YmK6KOF572uXCI6XCIxMVwiLFwi5bu656+J6Kit6KiIXCI6XCIxMFwiLFwi44OI44Oz44ON44Or5ris6YePXCI6XCI1XCIsXG4gICAgICAgXCLnhafmmI7jgrfjgrnjg4bjg6BcIjpcIjE1XCIsXCLlo4HpnaLnt5HljJZcIjpcIjE3XCJcbiAgICAgIH07XG4gIC8vIOOCreODo+ODg+OCt+ODpeeUqOOBruOCquODluOCuOOCp+OCr+ODiFxuICBjb25zdCBkYXRhQ2FjaGUgPSB1c2VSZWYoe1xuICAgIGNvbXBhbmllczoge30sXG4gICAgc3BhcnNlRGF0YToge31cbiAgfSk7XG5cbiAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFsbFRvcGljc0RhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgYWxsVG9waWMubWFwKGFzeW5jICh0YXJnZXRfaWQpID0+IHtcbiAgICAgICAgICBjb25zdCB0aW1lID0gNTtcbiAgICAgICAgICBjb25zdCBjb21wYW55VXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9zZXR0aW5nL2NvbXBhbnkudHh0YDtcbiAgICAgICAgICBjb25zdCBzcGFyc2VEYXRhVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9vY2N1cHkvb2NjdXB5X3RvcGljXyR7dGltZX0uanNvbmA7XG5cbiAgICAgICAgICAvLyDjgq3jg6Pjg4Pjgrfjg6XjgpLnorroqo1cbiAgICAgICAgICBpZiAoIWRhdGFDYWNoZS5jdXJyZW50LmNvbXBhbmllc1t0YXJnZXRfaWRdKSB7XG4gICAgICAgICAgICBkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXSA9IGF3YWl0IGZldGNoRGF0YShjb21wYW55VXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWRhdGFDYWNoZS5jdXJyZW50LnNwYXJzZURhdGFbdGFyZ2V0X2lkXSkge1xuICAgICAgICAgICAgZGF0YUNhY2hlLmN1cnJlbnQuc3BhcnNlRGF0YVt0YXJnZXRfaWRdID0gYXdhaXQgZmV0Y2hEYXRhKHNwYXJzZURhdGFVcmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNvbXBhbmllcyA9IGRhdGFDYWNoZS5jdXJyZW50LmNvbXBhbmllc1t0YXJnZXRfaWRdO1xuICAgICAgICAgIGNvbnN0IHNwYXJzZURhdGEgPSBkYXRhQ2FjaGUuY3VycmVudC5zcGFyc2VEYXRhW3RhcmdldF9pZF07XG5cbiAgICAgICAgICAvLyDmraPopo/ljJbplqLmlbBcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVTdHJpbmcgPSAoc3RyKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0ciAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLpnZ7mloflrZfliJfjg4fjg7zjgr/jgYzmpJzlh7rjgZXjgozjgb7jgZfjgZ86XCIsIHN0cik7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyDpnZ7mloflrZfliJfjg4fjg7zjgr/jga/nhKHoppZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHIubm9ybWFsaXplKFwiTkZDXCIpLnRyaW0oKTsgLy8g5q2j6KaP5YyW44Go44OI44Oq44Og44KS6YGp55SoXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIOato+imj+WMluOBl+OBn+ODh+ODvOOCv+OBp+avlOi8g1xuICAgICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbmllcyA9IGNvbXBhbmllcy5tYXAobm9ybWFsaXplU3RyaW5nKTtcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW55ID0gbm9ybWFsaXplU3RyaW5nKGNvbXBhbnlbMF0pO1xuXG4gICAgICAgICAgaWYgKCFzYW5pdGl6ZWRDb21wYW5pZXMuaW5jbHVkZXMoc2FuaXRpemVkQ29tcGFueSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcGFueSBcIiR7c2FuaXRpemVkQ29tcGFueX1cIiBub3QgZm91bmQgaW4gdG9waWMgJHt0YXJnZXRfaWR9YCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDjgrnjg5Hjg7zjgrnjg4fjg7zjgr/jgpLlh6bnkIZcbiAgICAgICAgICBjb25zdCByb3dTdW1zID0gcHJvY2Vzc1NwYXJzZURhdGEoc3BhcnNlRGF0YSk7XG5cbiAgICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBzYW5pdGl6ZWRDb21wYW5pZXMuaW5kZXhPZihzYW5pdGl6ZWRDb21wYW55KTtcblxuICAgICAgICAgIHJldHVybiB7IHRvcGljOiB0YXJnZXRfaWQsIHZhbHVlOiByb3dTdW1zW2NvbXBhbnlJbmRleF0gfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGFsbFRvcGljc0RhdGEuZmlsdGVyKChkYXRhKSA9PiBkYXRhICE9PSBudWxsKTtcblxuICAgICAgLy8g5q2j6KaP5YyW44Go44K944O844OIXG4gICAgICBjb25zdCB0b3RhbFZhbHVlID0gZmlsdGVyZWREYXRhLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnZhbHVlLCAwKTtcbiAgICAgIGlmICh0b3RhbFZhbHVlID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk5vIHZhbGlkIGRhdGEgdG8gbm9ybWFsaXplLlwiKTtcbiAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG5cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZERhdGEgPSBmaWx0ZXJlZERhdGEubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgY2F0ZWdvcnk6IGl0ZW0udG9waWMsXG4gICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlIC8gdG90YWxWYWx1ZSxcbiAgICAgIH0pKS5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgIHNldENoYXJ0RGF0YShub3JtYWxpemVkRGF0YS5zbGljZSgwLCAxMCkpOyAvLyDkuIrkvY0xMOS7tuOBruOBv+ihqOekulxuICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyDliJ3mnJ/jg4fjg7zjgr/oqq3jgb/ovrzjgb/jgah1cGRhdGXjga7lpInmm7TmmYLjgavjg4fjg7zjgr/jgpLjg63jg7zjg4lcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiKSB7XG4gICAgICBsb2FkRGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZV0pO1xuXG4gIGNvbnN0IGhhbmRsZVBsb3RDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5wb2ludHMgJiYgZXZlbnQucG9pbnRzWzBdKSB7XG4gICAgICBjb25zdCBjbGlja2RhdGEgPSBldmVudC5wb2ludHNbMF0ubGFiZWw7IC8vIOOCr+ODquODg+OCr+OBleOCjOOBn+mDqOWIhuOBruODqeODmeODq1xuICAgICAgY29uc3QgbGFiZWwgPSBUb3BpY3RvSWRbY2xpY2tkYXRhXVxuICAgICAgY29uc3QgdG9waWNpZCA9IGxhYmVsLnJlcGxhY2UoXCJUb3BpYyBcIiwgXCJcIik7XG4gICAgICBvbkNsaWNrRGF0YShbdG9waWNpZF0pOyAvLyDopqrjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavjg6njg5njg6vjgpLpgJrnn6VcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoaXRlbSA9PiAgSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV0pLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgIGNvbG9yczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gY29sb3JtYXBbSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV1dKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgICAgb25DbGljaz17aGFuZGxlUGxvdENsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jgqTjg5njg7Pjg4jjgpLov73liqBcbiAgICAgIC8+XG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44OG44Kt44K544OI44OH44O844K/44KS6Kqt44G/6L6844KA6Zai5pWwXG5jb25zdCBmZXRjaFRleHREYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90UGllQSA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCIsXG4gICAgXCIxNVwiOlwi54Wn5piO44K344K544OG44OgXCIsXCIxN1wiOlwi5aOB6Z2i57eR5YyWXCJ9O1xuXG4gIGNvbnN0IGNvbG9ybWFwID0geyfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLmoKrlvI/kvJrnpL7lpKfmnpfntYRcIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIua4heawtOW7uuioreagquW8j+S8muekvlwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gICAgICBcIuWkp+aIkOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgICAgIFwi5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+XCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuS6lOa0i+W7uuioreagquW8j+S8muekvlwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5qCq5byP5Lya56S+44OV44K444K/XCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gICAgICBcIuaIuOeUsOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMjM3LCAxMDAsIDkwKScsIFwi5qCq5byP5Lya56S+54aK6LC357WEXCI6J3JnYigxNjUsIDE3MCwgMTUzKSd9O1xuICAgICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gNTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b3BpYyB8fCBcImRlZmF1bHRfdG9waWNcIjsgLy8g5Yid5pyf5YCk44Go44GX44GmXCJkZWZhdWx0X3RvcGljXCLjgpLoqK3lrppcbiAgICAgICAgY29uc3QgZGF0YVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldElkfS9vY2N1cHkvb2NjdXB5X21lYW5fJHt0aW1lfS5qc29uYDtcbiAgICAgICAgY29uc3QgY29sdW1uVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3NldHRpbmcvY29tcGFueS50eHRgO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+WPluW+l1xuICAgICAgICBjb25zdCBbdmFsdWVzLCBsYWJlbHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShkYXRhVXJsKSxcbiAgICAgICAgICBmZXRjaFRleHREYXRhKGNvbHVtblVybCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8vIOWApOOBqOODqeODmeODq+OBrue1hOOBv+WQiOOCj+OBm+OCkuS9nOaIkFxuICAgICAgICBjb25zdCBkYXRhID0gbGFiZWxzLm1hcCgobGFiZWwsIGluZGV4KSA9PiAoe1xuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZXMudmFsdWVbaW5kZXhdIHx8IDAsIC8vIOWApOOBjOOBquOBhOWgtOWQiOOBrzBcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIOWApOOBq+WfuuOBpeOBhOOBpumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5oq95Ye6XG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBkYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtJZHRvVG9waWNbdGFyZ2V0SWRdfeOBq+mWouOBmeOCi+eJueioseOBruS8gealreWNoOacieeOh2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4Hjg6Pjg7zjg4jjg4fjg7zjgr/jga7lh6bnkIbkuK3jgavjgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g5Yid5Zue44Os44Oz44OA44Oq44Oz44Kw5pmC44GoYHVwZGF0ZWDlpInmm7TmmYLjgavjg4fjg7zjgr/jgpLjg63jg7zjg4lcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIikge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW2l0ZW0ubGFiZWxdKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gIFxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuXG4gXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Db21wID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCB9KSA9PiB7XG5jb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCIsXG4gICAgXCIxNVwiOlwi54Wn5piO44K344K544OG44OgXCIsXCIxN1wiOlwi5aOB6Z2i57eR5YyWXCJ9O1xuXG5jb25zdCBjb2xvcm1hcCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLlnLDnm6TmlLnoia9cIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIuODiOODs+ODjeODq+aOmOWJilwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gICAgICAgICAgXCLlhY3pnIfmp4vpgKBcIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIueuoeeQhuOCt+OCueODhuODoFwiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5buD5qOE54mp5Yem55CGXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gICAgICAgICAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgICAgICAgICBcIueFp+aYjuOCt+OCueODhuODoFwiOidyZ2IoMjU1LCAxMjcsIDE0KScsIFwi5aOB6Z2i57eR5YyWXCI6J3JnYigxNTMsIDE1MywgMTUzKSdcbiAgICAgICAgfTtcblxuICAgICAgICBcbiAgY29uc3QgYXJyb3dfY29sb3IgPSBbJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRiddO1xuXG4gIGNvbnN0IFtwcmVwYXJlZERhdGEsIHNldFByZXBhcmVkRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZpZ0RhdGEsIHNldEZpZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYW5ub3RhdGlvbnMsIHNldEFubm90YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIuS8gealreOBrueri+OBoeS9jee9rlwiKTtcbiAgY29uc3QgW2F1dGhvckRhdGEsIHNldEF1dGhvckRhdGFdID0gdXNlU3RhdGUoe30pO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmVwYXJlRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbFByb21pc2VzID0gKHRvcGljIHx8IFtcImRlZmF1bHRfdG9waWNcIl0pLm1hcChhc3luYyAodGFyZ2V0X2lkKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvcGljXCIsdGFyZ2V0X2lkKVxuICAgICAgICAgIGNvbnN0IGNvbHVtblBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRfaWR9L3NldHRpbmcvY29tcGFueS50eHRgO1xuICAgICAgICAgIGNvbnN0IGNvbXBhbmllcyA9IGF3YWl0IGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCk7XG5cbiAgICAgICAgICBjb25zdCBjb21wYW55RGljdCA9IGNvbXBhbmllcy5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgYWNjW3ZhbHVlXSA9IGlkeDtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgY29uc3QgbmV3U2VhcmNoTGlzdCA9IEFycmF5LmlzQXJyYXkoY29tcGFueSkgPyBjb21wYW55IDogW2NvbXBhbnldO1xuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkU2VhcmNoTGlzdCA9IG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KTtcblxuICAgICAgICAgIGNvbnN0IG5vZGVfYWxwaGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWx0ZXJlZFNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuICAgICAgICAgIGNvbnN0IG5vZGVfYmV0YSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbHRlcmVkU2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGopID0+IGogKS5tYXAoYXN5bmMgKHApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRfaWR9L3BlcnNvbmEvdGVzdF9vcHRpbWl6ZV8ke3ArMX0udHh0YDtcbiAgICAgICAgICAgIGNvbnN0IHsgYWxwaGFfbGksIGJldGFfbGkgfSA9IGF3YWl0IHRvTGlzdChwYXJhbWV0ZXJQYXRoKTtcblxuICAgICAgICAgICAgZmlsdGVyZWRTZWFyY2hMaXN0LmZvckVhY2goKGssIGopID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWR4ID0gY29tcGFuaWVzLmluZGV4T2Yoayk7XG4gICAgICAgICAgICAgIG5vZGVfYWxwaGFbal1bcF0gPSBhbHBoYV9saVtpZHhdO1xuICAgICAgICAgICAgICBub2RlX2JldGFbal1bcF0gPSBiZXRhX2xpW2lkeF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICAgIHJldHVybiB7IG5vZGVfYWxwaGEsIG5vZGVfYmV0YSwgZmlsdGVyZWRTZWFyY2hMaXN0IH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChhbGxQcm9taXNlcyk7XG5cbiAgICAgICAgY29uc3QgY29tYmluZWRBbHBoYSA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0Lm5vZGVfYWxwaGEpO1xuICAgICAgICBjb25zdCBjb21iaW5lZEJldGEgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5ub2RlX2JldGEpO1xuICAgICAgICBjb25zdCBjb21iaW5lZFNlYXJjaExpc3QgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5maWx0ZXJlZFNlYXJjaExpc3QpO1xuXG4gICAgICAgIHNldFByZXBhcmVkRGF0YSh7IGFscGhhOiBjb21iaW5lZEFscGhhLCBiZXRhOiBjb21iaW5lZEJldGEsIHNlYXJjaExpc3Q6IGNvbWJpbmVkU2VhcmNoTGlzdCB9KTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueX3jga7mpa3nlYzjgafjga7nq4vjgaHkvY3nva5gKTsgLy8g5Yid5pyf44K/44Kk44OI44Or44KS6Kit5a6aXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5rqW5YKZ5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOWIneacn+ODrOODs+ODgOODquODs+OCsOaZguOBq+OCguODh+ODvOOCv+OCkua6luWCmVxuICAgIHByZXBhcmVEYXRhKCk7XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueV0pO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQXV0aG9yRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbXBhbnkpICYmIGNvbXBhbnkuaW5jbHVkZXMoXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIikgfHwgY29tcGFueSA9PT0gXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gKHRvcGljIHx8IFtcImRlZmF1bHRfdG9waWNcIl0pLm1hcChhc3luYyAodG9waWNJZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXV0aG9yUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RvcGljSWR9L3BlcnNvbmEva3VtYWdhaV90b3BpY19hdXRob3IuanNvbmA7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGF1dGhvclBhdGgpO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOiRl+iAheODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OBq+WkseaVlzogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDlubTluqbjgajjg5rjg6vjgr3jg4rjga7lr77lv5zjg57jg4Pjg5dcbiAgICAgICAgICAgIGNvbnN0IHllYXJUb1BlcnNvbmEgPSB7XG4gICAgICAgICAgICAgIFwiMjAyNFwiOiBcIjVcIixcbiAgICAgICAgICAgICAgXCIyMDIxXCI6IFwiNFwiLFxuICAgICAgICAgICAgICBcIjIwMTlcIjogXCIzXCIsXG4gICAgICAgICAgICAgIFwiMjAxN1wiOiBcIjJcIixcbiAgICAgICAgICAgICAgXCIyMDE1XCI6IFwiMVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDlkITjg5rjg6vjgr3jg4rjga7jg4fjg7zjgr/jgpLmlbTlvaJcbiAgICAgICAgICAgIGNvbnN0IHBlcnNvbmFEYXRhID0ge307XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh5ZWFyVG9QZXJzb25hKS5mb3JFYWNoKChbeWVhciwgcGVyc29uYU51bV0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeWVhckRhdGEgPSBkYXRhW3llYXJdIHx8IHt9O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8g56m644Gu44Kq44OW44K444Kn44Kv44OI44GL44Gp44GG44GL44KS44OB44Kn44OD44KvXG4gICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh5ZWFyRGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGVyc29uYURhdGFbYHBlcnNvbmFfJHtwZXJzb25hTnVtfWBdID0ge1xuICAgICAgICAgICAgICAgICAgYXV0aG9yczogJ+WHuumhmOiAheOBquOBlycsXG4gICAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDjg4fjg7zjgr/jgYzjgYLjgovloLTlkIjjga/kuIrkvY015Lu244KS5Y+W5b6XXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wQXV0aG9ycyA9IE9iamVjdC5lbnRyaWVzKHllYXJEYXRhKVxuICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIDUpXG4gICAgICAgICAgICAgICAgICAubWFwKChbYXV0aG9yLCBjb3VudF0pID0+IGAke2F1dGhvcn0oJHtjb3VudH3ku7YpYCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcGVyc29uYURhdGFbYHBlcnNvbmFfJHtwZXJzb25hTnVtfWBdID0ge1xuICAgICAgICAgICAgICAgICAgYXV0aG9yczogdG9wQXV0aG9ycy5qb2luKCcsICcpLFxuICAgICAgICAgICAgICAgICAgeWVhcjogeWVhclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4geyB0b3BpY0lkLCBkYXRhOiBwZXJzb25hRGF0YSB9O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgICBjb25zdCBhdXRob3JEYXRhTWFwID0ge307XG4gICAgICAgICAgXG4gICAgICAgICAgcmVzdWx0cy5mb3JFYWNoKCh7IHRvcGljSWQsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgYXV0aG9yRGF0YU1hcFt0b3BpY0lkXSA9IGRhdGE7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgc2V0QXV0aG9yRGF0YShhdXRob3JEYXRhTWFwKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6JGX6ICF44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZEF1dGhvckRhdGEoKTtcbiAgfSwgW2NvbXBhbnksIHRvcGljXSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1cGRhdGUgJiYgcHJlcGFyZWREYXRhKSB7XG4gICAgICBjb25zdCBwbG90RGF0YSA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VG9waWMgPSB0b3BpY1tqXTtcbiAgICAgICAgY29uc3QgcGVyc29uYVRvWWVhciA9IHtcblxuICAgICAgICAgIFwiMVwiOiBcIjIwMDlcIixcbiAgICAgICAgICBcIjJcIjogXCIyMDEyXCIsXG4gICAgICAgICAgXCIzXCI6IFwiMjAxNVwiLFxuICAgICAgICAgIFwiNFwiOiBcIjIwMThcIixcbiAgICAgICAgICBcIjVcIjogXCIyMDIxXCJcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBob3ZlclRleHRzID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0ubWFwKChudW0pID0+IHtcbiAgICAgICAgICBjb25zdCB5ZWFyVGV4dCA9IGAke3BlcnNvbmFUb1llYXJbbnVtXX3lubRgO1xuICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludCh5ZWFyVGV4dCk7ICAvLyDmloflrZfliJfjgpLmlbDlgKTjgavlpInmj5tcbiAgICAgICAgICBpZiAoayA9PT0gXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIiAmJiBhdXRob3JEYXRhW2N1cnJlbnRUb3BpY10gJiYgYXV0aG9yRGF0YVtjdXJyZW50VG9waWNdW2BwZXJzb25hXyR7bnVtfWBdKSB7XG4gICAgICAgICAgICBjb25zdCBhdXRob3JJbmZvID0gYXV0aG9yRGF0YVtjdXJyZW50VG9waWNdW2BwZXJzb25hXyR7bnVtfWBdO1xuICAgICAgICAgICAgcmV0dXJuIGAoJHt5ZWFyLTN9fiR7eWVhcn0pPGJyPuiRl+iAhTogJHthdXRob3JJbmZvLmF1dGhvcnN9YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYCAoJHt5ZWFyLTN9fiR7eWVhcn0pYDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBwcmVwYXJlZERhdGEuYWxwaGFbal0sXG4gICAgICAgICAgeTogcHJlcGFyZWREYXRhLmJldGFbal0sXG4gICAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgICAgICB0ZXh0cG9zaXRpb246IFwidG9wIGxlZnRcIixcbiAgICAgICAgICBob3ZlcnRleHQ6IGhvdmVyVGV4dHMsXG4gICAgICAgICAgaG92ZXJpbmZvOiBcInRleHRcIixcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDEyIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcm1hcFtJZHRvVG9waWNbdG9waWNbal1dXSxcbiAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lOiBJZHRvVG9waWNbdG9waWNbal1dLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgXG5cbiAgICAgIGNvbnN0IHBsb3RBbm5vdGF0aW9ucyA9IHByZXBhcmVkRGF0YS5zZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICAgIEFycmF5KDQpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgICAgICAgIHg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXVtpICsgMV0sXG4gICAgICAgICAgeTogcHJlcGFyZWREYXRhLmJldGFbal1baSArIDFdLFxuICAgICAgICAgIHhyZWY6ICd4JyxcbiAgICAgICAgICB5cmVmOiAneScsXG4gICAgICAgICAgYXhyZWY6ICd4JyxcbiAgICAgICAgICBheXJlZjogJ3knLFxuICAgICAgICAgIGF4OiBwcmVwYXJlZERhdGEuYWxwaGFbal1baV0sXG4gICAgICAgICAgYXk6IHByZXBhcmVkRGF0YS5iZXRhW2pdW2ldLFxuICAgICAgICAgIGFycm93Y29sb3I6Y29sb3JtYXBbSWR0b1RvcGljW3RvcGljW2pdXV0sXG4gICAgICAgICAgYXJyb3dzaXplOiAxLjIsXG4gICAgICAgICAgYXJyb3d3aWR0aDogMS4yLFxuICAgICAgICAgIGFycm93aGVhZDogNSxcbiAgICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICAgIH0pKVxuICAgICAgKTtcblxuICAgICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgICBzZXRBbm5vdGF0aW9ucyhwbG90QW5ub3RhdGlvbnMpO1xuXG4gICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgcHJlcGFyZWREYXRhLCBhdXRob3JEYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBzdHlsZT17eyB3aWR0aDonMTAwdmgnICxoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgICAgeTogMS44LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgeTogMS44LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgICAgeTogMC4yLFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgeTogMC4yLFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcblxuICAgICAgICAgXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLmlrDopo/mgKdcIixcbiAgICAgICAgICAgIHJhbmdlOiBbMC4xLCAxLjldLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAuMSwgMSwgMS45XSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLpoIblv5zmgKdcIixcbiAgICAgICAgICAgIHRpdGxlX3N0YW5kb2ZmOjI1LCAgIC8vIFnou7jjgYvjgonjga7ot53pm6LvvIjopovjgoTjgZnjgY/jgZnjgovjgZ/jgoHvvIlcbiAgICAgICAgICAgIHJhbmdlOiBbMC4xLCAxLjldLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAuMSwgMSwgMS45XSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDI1LCBiOiAxNSwgbDogMTUsIHI6IDIwIH0sXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgYmdjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgYm9yZGVyd2lkdGg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBob3ZlcmRpc3RhbmNlOjUwLFxuICAgICAgICAgIGhvdmVybW9kZTogJ2Nsb3Nlc3QnLFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIG5hbWVsZW5ndGg6IC0xICAvLyDlkI3liY3jga7plbfjgZXliLbpmZDjgpLop6PpmaRcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgXG4gICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2UgIC8vIOODhOODvOODq+ODkOODvOOCkumdnuihqOekuuOBq1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBlcnNvbkNvbXA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuY29uc3QgY29sb3JtYXAgPSB7J+m5v+WztuW7uuioreagquW8j+S8muekvic6J3JnYigyMjksIDEzNCwgNiknLCBcIuagquW8j+S8muekvuWkp+ael+e1hFwiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi5riF5rC05bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgXCLlpKfmiJDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIuagquW8j+S8muekvuerueS4reW3peWLmeW6l1wiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gIFwi5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+XCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuS6lOa0i+W7uuioreagquW8j+S8muekvlwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5qCq5byP5Lya56S+44OV44K444K/XCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gIFwi5oi455Sw5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigyMzcsIDEwMCwgOTApJywgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIjoncmdiKDE2NSwgMTcwLCAxNTMpJ307XG5cbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgbG9hZENvbXBhbmllcyA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgdG9MaXN0ID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuXG4gICAgY29uc3QgYWxwaGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgY29uc3QgYmV0YV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMV0pKTtcblxuICAgIHJldHVybiB7IGFscGhhX2xpLCBiZXRhX2xpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGFscGhhX2xpOiBbXSwgYmV0YV9saTogW10gfTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBlcnNvblRvcGljID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCwgb25DbGlja0RhdGF9KSA9PiB7XG4gIGNvbnN0IGFycm93X2NvbG9yID0gWycjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnXTtcbiAgY29uc3QgW2ZpZ0RhdGEsIHNldEZpZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYW5ub3RhdGlvbnMsIHNldEFubm90YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NvbXBhbnlMaXN0LCBzZXRDb21wYW55TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hMaXN0LCBzZXRTZWFyY2hMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2F1dGhvckRhdGEsIHNldEF1dGhvckRhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIixcbiAgICBcIjE1XCI6XCLnhafmmI7jgrfjgrnjg4bjg6BcIixcIjE3XCI6XCLlo4HpnaLnt5HljJZcIn07XG5cbiAgLy8g5Yid5pyf44OH44O844K/44Gu44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG5cbiAgICAgIGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDb21wYW55TGlzdChkYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYOalreeVjOWGheOBp+OBruS8gealreOBrueri+OBoeS9jee9rmApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWNdKTtcblxuICAvLyDmpJzntKLlr77osaHjga7jg5XjgqPjg6vjgr/jg6rjg7PjgrBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29tcGFueUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW55TGlzdC5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICBzZXRTZWFyY2hMaXN0KG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KSk7XG4gICAgfVxuICB9LCBbY29tcGFueUxpc3QsIGNvbXBhbnldKTtcblxuICAvLyDokZfogIXjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovmlrDjgZfjgYR1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQXV0aG9yRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbXBhbnkpICYmIGNvbXBhbnkuaW5jbHVkZXMoXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIikgfHwgY29tcGFueSA9PT0gXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGF1dGhvclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0b3BpY30vcGVyc29uYS9rdW1hZ2FpX3RvcGljX2F1dGhvci5qc29uYDtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGF1dGhvclBhdGgpO1xuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg6JGX6ICF44OH44O844K/44Gu6Kqt44G/6L6844G/44Gr5aSx5pWXOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyDlubTluqbjgajjg5rjg6vjgr3jg4rjga7lr77lv5zjg57jg4Pjg5dcbiAgICAgICAgICBjb25zdCB5ZWFyVG9QZXJzb25hID0ge1xuICAgICAgICAgICAgXCIyMDIxXCI6IFwiMVwiLFxuICAgICAgICAgICAgXCIyMDE5XCI6IFwiMlwiLFxuICAgICAgICAgICAgXCIyMDE3XCI6IFwiM1wiLFxuICAgICAgICAgICAgXCIyMDE1XCI6IFwiNFwiLFxuICAgICAgICAgICAgXCIyMDEzXCI6IFwiNVwiXG4gICAgICAgICAgfTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyDlkITjg5rjg6vjgr3jg4rjga7jg4fjg7zjgr/jgpLmlbTlvaJcbiAgICAgICAgICBjb25zdCBwZXJzb25hRGF0YSA9IHt9O1xuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHllYXJUb1BlcnNvbmEpLmZvckVhY2goKFt5ZWFyLCBwZXJzb25hTnVtXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeWVhckRhdGEgPSBkYXRhW3llYXJdIHx8IHt9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDnqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgYvjganjgYbjgYvjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh5ZWFyRGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIHBlcnNvbmFEYXRhW2BwZXJzb25hXyR7cGVyc29uYU51bX1gXSA9IHtcbiAgICAgICAgICAgICAgICBhdXRob3JzOiAn5Ye66aGY6ICF44Gq44GXJyxcbiAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyDjg4fjg7zjgr/jgYzjgYLjgovloLTlkIjjga/kuIrkvY015Lu244KS5Y+W5b6XXG4gICAgICAgICAgICAgIGNvbnN0IHRvcEF1dGhvcnMgPSBPYmplY3QuZW50cmllcyh5ZWFyRGF0YSlcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgNSlcbiAgICAgICAgICAgICAgICAubWFwKChbYXV0aG9yLCBjb3VudF0pID0+IGAke2F1dGhvcn0oJHtjb3VudH3ku7YpYCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBwZXJzb25hRGF0YVtgcGVyc29uYV8ke3BlcnNvbmFOdW19YF0gPSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yczogdG9wQXV0aG9ycy5qb2luKCcsICcpLFxuICAgICAgICAgICAgICAgIHllYXI6IHllYXJcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBzZXRBdXRob3JEYXRhKHBlcnNvbmFEYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6JGX6ICF44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZEF1dGhvckRhdGEoKTtcbiAgfSwgW2NvbXBhbnksIHRvcGljXSk7XG5cbiAgLy8g44OH44O844K/44Gu5o+P55S7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZSAmJiBzZWFyY2hMaXN0Lmxlbmd0aCA+IDAgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3Qgbm9kZV9hbHBoYSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuICAgICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4gaSApLm1hcCgocCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9wZXJzb25hL3Rlc3Rfb3B0aW1pemVfJHtwKzF9LnR4dGA7XG4gICAgICAgIHJldHVybiB0b0xpc3QocGFyYW1ldGVyUGF0aCkudGhlbigoeyBhbHBoYV9saSwgYmV0YV9saSB9KSA9PiB7XG4gICAgICAgICAgc2VhcmNoTGlzdC5mb3JFYWNoKChrLCBqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW55TGlzdC5pbmRleE9mKGspO1xuICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwXSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICBub2RlX2JldGFbal1bcF0gPSBiZXRhX2xpW2lkeF07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGVyc29uYVRvWWVhciA9IHtcbiAgICAgICAgICBcIjVcIjogXCIyMDIxXCIsXG4gICAgICAgICAgXCI0XCI6IFwiMjAxOFwiLFxuICAgICAgICAgIFwiM1wiOiBcIjIwMTVcIixcbiAgICAgICAgICBcIjJcIjogXCIyMDEyXCIsXG4gICAgICAgICAgXCIxXCI6IFwiMjAwOVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGxvdERhdGEgPSBzZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4ge1xuICAgICAgICAgIGNvbnN0IGhvdmVyVGV4dHMgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXS5tYXAoKG51bSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeWVhclRleHQgPSBgJHtwZXJzb25hVG9ZZWFyW251bV19YDtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludCh5ZWFyVGV4dCk7ICAvLyDmloflrZfliJfjgpLmlbDlgKTjgavlpInmj5tcbiAgICAgICAgICAgIGlmIChrID09PSBcIuagquW8j+S8muekvueGiuiwt+e1hFwiICYmIGF1dGhvckRhdGFbYHBlcnNvbmFfJHtudW19YF0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGAoJHt5ZWFyLTN9fiR7eWVhcn0pPGJyPuiRl+iAhTogJHthdXRob3JEYXRhW2BwZXJzb25hXyR7bnVtfWBdLmF1dGhvcnN9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgKCR7eWVhci0zfX4ke3llYXJ9KWA7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogbm9kZV9hbHBoYVtqXSxcbiAgICAgICAgICAgIHk6IG5vZGVfYmV0YVtqXSxcbiAgICAgICAgICAgIG1vZGU6IFwibGluZXMrbWFya2Vycyt0ZXh0XCIsXG4gICAgICAgICAgICB0ZXh0OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSxcbiAgICAgICAgICAgIHRleHRwb3NpdGlvbjogXCJ0b3AgbGVmdFwiLFxuICAgICAgICAgICAgaG92ZXJ0ZXh0OiBob3ZlclRleHRzLFxuICAgICAgICAgICAgaG92ZXJpbmZvOiBcInRleHRcIixcbiAgICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiAxMiB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAncmlnaHQnLCAgLy8g44Ob44OQ44O844GueOS9jee9rlxuICAgICAgICAgICAgICB5YW5jaG9yOiAnYm90dG9tJyAgICAgLy8g44Ob44OQ44O844GueeS9jee9rlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICBjb2xvcjogY29sb3JtYXBba10sXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZTogayxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwbG90QW5ub3RhdGlvbnMgPSBzZWFyY2hMaXN0LmZsYXRNYXAoKGssIGopID0+XG4gICAgICAgICAgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgICAgICB4OiBub2RlX2FscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgICAgIHk6IG5vZGVfYmV0YVtqXVtpICsgMV0sXG4gICAgICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgICAgICB5cmVmOiAneScsXG4gICAgICAgICAgICBheDogbm9kZV9hbHBoYVtqXVtpXSxcbiAgICAgICAgICAgIGF5OiBub2RlX2JldGFbal1baV0sXG4gICAgICAgICAgICBheHJlZjogJ3gnLFxuICAgICAgICAgICAgYXlyZWY6ICd5JyxcbiAgICAgICAgICAgIGFycm93Y29sb3I6IGNvbG9ybWFwW2tdLFxuICAgICAgICAgICAgYXJyb3dzaXplOiAxLjIsXG4gICAgICAgICAgICBhcnJvd3dpZHRoOiAxLjIsXG4gICAgICAgICAgICBhcnJvd2hlYWQ6IDUsXG4gICAgICAgICAgICBzaG93YXJyb3c6IHRydWUsXG4gICAgICAgICAgfSkpXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0RmlnRGF0YShwbG90RGF0YSk7XG4gICAgICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG4gICAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHNlYXJjaExpc3QsIGNvbXBhbnlMaXN0LCB0b3BpYywgYXV0aG9yRGF0YV0pO1xuXG4gIGNvbnN0IGhhbmRsZVBlcnNvbmFDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5wb2ludHMgJiYgZXZlbnQucG9pbnRzWzBdKSB7XG4gICAgXG4gICAgICBjb25zb2xlLmxvZyhldmVudC5wb2ludHNbMF1bXCJkYXRhXCJdW1wibmFtZVwiXSlcbiAgICAgIGNvbnN0IGNsaWNrZGF0YSA9IGV2ZW50LnBvaW50c1swXVtcImRhdGFcIl1bXCJuYW1lXCJdOyAvLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/pg6jliIbjga7jg6njg5njg6tcbiAgICAgIG9uQ2xpY2tEYXRhKFtjbGlja2RhdGFdKTsgLy8g6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Op44OZ44Or44KS6YCa55+lXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiAgc3R5bGU9e3sgd2lkdGg6JzEwMHZoJyAsaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17ZmlnRGF0YX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMjAsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgICBcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFubm90YXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgICAgeTogMS44LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgeTogMS44LFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI5qWt55WM44KS5byV44Gj5by144KK5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgICAgeTogMC4yLFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5Lyd57Wx55qE44Gq5YiG6YeO44Gr5Y+W44KK57WE44KT44Gn44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgeTogMC4yLFxuICAgICAgICAgICAgICB0ZXh0OiAn77yI54us6Ieq6Lev57ea44KS6YCy44G/5pyq55+l44Gu5YiG6YeO44Gr5oqV6LOH44GX44Gm44GE44KL77yJJyxcbiAgICAgICAgICAgICAgc2hvd2Fycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9udDogeyBzaXplOiA5LCBjb2xvcjogJ2dyYXknIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB5YW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcblxuICAgICAgICAgXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLmlrDopo/mgKdcIixcbiAgICAgICAgICAgIHJhbmdlOiBbMC4xLCAxLjldLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAuMSwgMSwgMS45XSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlIDogXCLpoIblv5zmgKdcIixcbiAgICAgICAgICAgIHRpdGxlX3N0YW5kb2ZmOjI1LCAgIC8vIFnou7jjgYvjgonjga7ot53pm6LvvIjopovjgoTjgZnjgY/jgZnjgovjgZ/jgoHvvIlcbiAgICAgICAgICAgIHJhbmdlOiBbMC4xLCAxLjldLFxuICAgICAgICAgICAgbGluZWNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkY29sb3I6ICdsaWdodGdyZXknLFxuICAgICAgICAgICAgZ3JpZHdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGRhc2g6ICdkb3QnLFxuICAgICAgICAgICAgdGlja21vZGU6XCJhcnJheVwiLFxuICAgICAgICAgICAgdGlja3ZhbHM6WzAuMSwgMSwgMS45XSxcbiAgICAgICAgICAgIHRpY2t0ZXh0OltcIuS9jlwiLCBcIlwiLCBcIumrmFwiXSxcbiAgICAgICAgICAgIHplcm9saW5lOiBmYWxzZSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDI1LCBiOiAxNSwgbDogMTUsIHI6IDIwIH0sXG4gICAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgYmdjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgYm9yZGVyd2lkdGg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBob3ZlcmRpc3RhbmNlOiA1MCxcbiAgICAgICAgICBob3Zlcm1vZGU6ICdjbG9zZXN0JyxcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBuYW1lbGVuZ3RoOiAtMVxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNvbmZpZz17eyBcbiAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgIGRpc3BsYXlNb2RlQmFyOiBmYWxzZVxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBlcnNvbmFDbGlja31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGVyc29uVG9waWM7XG4iLCIvLyBTaWRlYmFyLmpzeFxuaW1wb3J0IFJlYWN0ICx7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiwgQ29sLCBSb3csIEZvcm0sIElucHV0R3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5jb25zdCBTaWRlYmFyID0gKHsgb25BcHBseSwgdmlzdWFsVHlwZSwgb25WaXN1YWxUeXBlQ2hhbmdlLCB0b3BpY0xpc3QsIGNvbXBhbnlMaXN0LCBzZWxlY3RlZENvbXBhbmllcywgc2VsZWN0ZWRUb3BpY3MsIG9uQ2hhbmdlVG9waWMsIG9uQ2hhbmdlQ29tcGFueSB9KSA9PiB7XG4gIGNvbnN0IFtpbnB1dFR5cGUsIHNldElucHV0VHlwZV0gPSB1c2VTdGF0ZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pOyAvLyDliJ3mnJ/lgKTjga8gXCJjaGVja2JveFwiXG4gIGNvbnN0IFt0b3BpY1NlYXJjaFRlcm0sIHNldFRvcGljU2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjb21wYW55U2VhcmNoVGVybSwgc2V0Q29tcGFueVNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB0b3BpY1NlYXJjaFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY29tcGFueVNlYXJjaFJlZiA9IHVzZVJlZihudWxsKTtcbiAgXG4gIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgb25WaXN1YWxUeXBlQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlPT1cIm9uZS1jb21wXCIpe1xuICAgICAgICBzZXRJbnB1dFR5cGUoW1wiY2hlY2tib3hcIixcInJhZGlvXCJdKX1cbiAgICAgIGVsc2V7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0pXG4gICAgICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coaW5wdXRUeXBlKTtcbiAgfTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCIsXG4gICAgXCIxNVwiOlwi54Wn5piO44K344K544OG44OgXCIsXCIxN1wiOlwi5aOB6Z2i57eR5YyWXCJ9O1xuICBcbiAgY29uc3QgaGFuZGxlU2VsZWN0QWxsVG9waWNzID0gKCkgPT4ge1xuICAgIHRvcGljTGlzdC5mb3JFYWNoKHRvcGljID0+IHtcbiAgICAgIGlmICghc2VsZWN0ZWRUb3BpY3MuaW5jbHVkZXModG9waWMpKSB7XG4gICAgICAgIG9uQ2hhbmdlVG9waWModG9waWMsIGlucHV0VHlwZVswXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVW5zZWxlY3RBbGxUb3BpY3MgPSAoKSA9PiB7XG4gICAgdG9waWNMaXN0LmZvckVhY2godG9waWMgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkVG9waWNzLmluY2x1ZGVzKHRvcGljKSkge1xuICAgICAgICBvbkNoYW5nZVRvcGljKHRvcGljLCBpbnB1dFR5cGVbMF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbENvbXBhbmllcyA9ICgpID0+IHtcbiAgICBjb21wYW55TGlzdC5mb3JFYWNoKGNvbXBhbnkgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZENvbXBhbmllcy5pbmNsdWRlcyhjb21wYW55KSkge1xuICAgICAgICBvbkNoYW5nZUNvbXBhbnkoY29tcGFueSwgaW5wdXRUeXBlWzFdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVVbnNlbGVjdEFsbENvbXBhbmllcyA9ICgpID0+IHtcbiAgICBjb21wYW55TGlzdC5mb3JFYWNoKGNvbXBhbnkgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkQ29tcGFuaWVzLmluY2x1ZGVzKGNvbXBhbnkpKSB7XG4gICAgICAgIG9uQ2hhbmdlQ29tcGFueShjb21wYW55LCBpbnB1dFR5cGVbMV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRvcGljU2VhcmNoID0gKGUpID0+IHtcbiAgICBzZXRUb3BpY1NlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvbXBhbnlTZWFyY2ggPSAoZSkgPT4ge1xuICAgIHNldENvbXBhbnlTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb3BpY1NlYXJjaEtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZmlsdGVyZWRUb3BpY3MgPSB0b3BpY0xpc3QuZmlsdGVyKHRvcGljID0+IFxuICAgICAgICBJZHRvVG9waWNbdG9waWNdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModG9waWNTZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgICAgaWYgKGZpbHRlcmVkVG9waWNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb25DaGFuZ2VUb3BpYyhmaWx0ZXJlZFRvcGljc1swXSwgaW5wdXRUeXBlWzBdKTtcbiAgICAgIH1cbiAgICAgIHNldFRvcGljU2VhcmNoVGVybSgnJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvbXBhbnlTZWFyY2hLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQ29tcGFuaWVzID0gY29tcGFueUxpc3QuZmlsdGVyKGNvbXBhbnkgPT4gXG4gICAgICAgIGNvbXBhbnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjb21wYW55U2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKTtcbiAgICAgIGlmIChmaWx0ZXJlZENvbXBhbmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9uQ2hhbmdlQ29tcGFueShmaWx0ZXJlZENvbXBhbmllc1swXSwgaW5wdXRUeXBlWzFdKTtcbiAgICAgIH1cbiAgICAgIHNldENvbXBhbnlTZWFyY2hUZXJtKCcnKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g44OI44OU44OD44Kv44Gu44OV44Kj44Or44K/44Oq44Oz44KwXG4gIGNvbnN0IGZpbHRlcmVkVG9waWNzID0gdG9waWNMaXN0LmZpbHRlcih0b3BpYyA9PiBcbiAgICB0b3BpY1NlYXJjaFRlcm0gPT09ICcnIHx8IElkdG9Ub3BpY1t0b3BpY10udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0b3BpY1NlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgKTtcblxuICAvLyDkvJrnpL7jga7jg5XjgqPjg6vjgr/jg6rjg7PjgrBcbiAgY29uc3QgZmlsdGVyZWRDb21wYW5pZXMgPSBjb21wYW55TGlzdC5maWx0ZXIoY29tcGFueSA9PiBcbiAgICBjb21wYW55U2VhcmNoVGVybSA9PT0gJycgfHwgY29tcGFueS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvbXBhbnlTZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgcGFkZGluZzogJzEwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdiZy1saWdodCcgfX0+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBmb250LWl0YWxpY1wiIHN0eWxlPXt7IGhlaWdodDogJzUlJyB9fT5cbiAgICAgICAgPENvbCBzbT17Nn0+XG4gICAgICAgICAgPGg1IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwJScgfX0gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgIOWPr+imluWMluadoeS7tlxuICAgICAgICAgIDwvaDU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNtPXs0fT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpZD1cImFwcGx5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHl9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNSUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZSByb3VuZGVkLXBpbGwgYmctZGFya1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg5Y+v6KaW5YyWXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIHsvKiBBY2NvcmRpb24gKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHRleHQtZGFuZ2VyIFwiIHN0eWxlPXt7IGhlaWdodDogJzgwJScgfX0+XG4gICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgey8qIFZpc3VhbGl6YXRpb24gVHlwZSAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIwXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPuWPr+imluWMluOCv+OCpOODlzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZCA9IFwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBteC0yXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPjHnpL7jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXgtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID4x44OI44OU44OD44Kv44Gr5rOo55uuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cbiAgICAgICAgICB7LyogVG9waWMgU2VsZWN0aW9uICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjFcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+VG9waWM8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTZWxlY3RBbGxUb3BpY3N9PuWFqOmBuOaKnjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cIm91dGxpbmUtc2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlVW5zZWxlY3RBbGxUb3BpY3N9PuWFqOino+mZpDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44OI44OU44OD44Kv44KS5qSc57SiLi4uXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3BpY1NlYXJjaFRlcm19XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9waWNTZWFyY2h9XG4gICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZVRvcGljU2VhcmNoS2V5RG93bn1cbiAgICAgICAgICAgICAgICAgIHJlZj17dG9waWNTZWFyY2hSZWZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtc2Vjb25kYXJ5XCIgXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb3BpY1NlYXJjaFRlcm0oJycpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOOCr+ODquOColxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgICAgICAgIHtmaWx0ZXJlZFRvcGljcy5tYXAoKHRvcGljKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RvcGljfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dFR5cGVbMF19IFxuICAgICAgICAgICAgICAgICAgICBpZCA9IHt0b3BpY31cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRUb3BpY3MuaW5jbHVkZXModG9waWMpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VUb3BpYyh0b3BpYyxpbnB1dFR5cGVbMF0pfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9waWNcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0b3BpY30+e0lkdG9Ub3BpY1t0b3BpY119PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtmaWx0ZXJlZFRvcGljcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgc21hbGxcIj7oqbLlvZPjgZnjgovjg4jjg5Tjg4Pjgq/jgYzjgYLjgorjgb7jgZvjgpM8L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cbiAgICAgICAgICB7LyogQ29tcGFueSBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMlwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Db21wYW55PC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2VsZWN0QWxsQ29tcGFuaWVzfT7lhajpgbjmip48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZVVuc2VsZWN0QWxsQ29tcGFuaWVzfT7lhajop6PpmaQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuS8gealreOCkuaknOe0oi4uLlwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueVNlYXJjaFRlcm19XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29tcGFueVNlYXJjaH1cbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlQ29tcGFueVNlYXJjaEtleURvd259XG4gICAgICAgICAgICAgICAgICByZWY9e2NvbXBhbnlTZWFyY2hSZWZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtc2Vjb25kYXJ5XCIgXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb21wYW55U2VhcmNoVGVybSgnJyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg44Kv44Oq44KiXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAge2ZpbHRlcmVkQ29tcGFuaWVzLm1hcCgoY29tcGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb21wYW55fT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dFR5cGVbMV19IFxuICAgICAgICAgICAgICAgICAgICBpZCA9IHtjb21wYW55fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENvbXBhbmllcy5pbmNsdWRlcyhjb21wYW55KX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlQ29tcGFueShjb21wYW55LGlucHV0VHlwZVsxXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnknXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2NvbXBhbnl9Pntjb21wYW55fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICB7ZmlsdGVyZWRDb21wYW5pZXMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHNtYWxsXCI+6Kmy5b2T44GZ44KL5LyB5qWt44GM44GC44KK44G+44Gb44KTPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/lj5blvpfplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RCYXJDaGFydEIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBjbGlja2RhdGEsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiRknjga7liIbluINcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDU7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gY2xpY2tkYXRhIHx8IHRvcGljWzBdIHx8IFwiZGVmYXVsdF90b3BpY1wiOyAvLyBgY2xpY2tkYXRhYOOCkuWEquWFiFxuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3RyZW5kL291dHB1dF8ke3RpbWV9Lmpzb25gO1xuICAgICAgICBjb25zdCBjb21wYW55UGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldElkfS9zZXR0aW5nL2NvbXBhbnkudHh0YDtcbiAgICAgICAgY29uc3QgZmlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9maV9zdWJjbGFzc19zcGxpdC5qc29uYDtcbiAgICAgICAgLy8g44OH44O844K/44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IFtvcmlnaW5hbCwgY29tcGFueUxpc3QsIGZpTGlzdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKHBhdGgpLFxuICAgICAgICAgIGxvYWRDb21wYW5pZXMoY29tcGFueVBhdGgpLFxuICAgICAgICAgIGZldGNoRGF0YShmaVBhdGgpLFxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoIWNvbXBhbnlMaXN0LmluY2x1ZGVzKGNvbXBhbnlbMF0pKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBDb21wYW55IFwiJHtjb21wYW55WzBdfVwiIG5vdCBmb3VuZC5gKTtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbXBhbnnjga7jg4fjg7zjgr/lj5blvpdcbiAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gY29tcGFueUxpc3QuaW5kZXhPZihjb21wYW55WzBdKTtcbiAgICAgICAgY29uc3QgY29tcGFueURhdGEgPSBvcmlnaW5hbFtjb21wYW55SW5kZXhdO1xuICAgICAgICBpZiAoIWNvbXBhbnlEYXRhKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBObyBkYXRhIGZvdW5kIGZvciBjb21wYW55IGluZGV4IFwiJHtjb21wYW55SW5kZXh9XCIuYCk7XG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKU09O44OH44O844K/44Gu5pW05b2iXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBPYmplY3QuZW50cmllcyhjb21wYW55RGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgY2F0ZWdvcnk6IGtleSxcbiAgICAgICAgICB2YWx1ZToga2V5ID09PSBcIlwiID8gMCA6IHBhcnNlRmxvYXQodmFsdWUpICogMTAwIHx8MCwgLy8g5YCk44KS5pWw5YCk44Gr5aSJ5o+b77yI44Gq44GE5aC05ZCI44GvMO+8iVxuICAgICAgICAgIHN1bW1hcml6ZTogZmlMaXN0W2tleV0sXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLpmY3poIbjgavjgr3jg7zjg4jjgZfjgabkuIrkvY0xMOS7tuOCkuWPluW+l1xuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZm9ybWF0dGVkRGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueVswXX3jga5GSeOBruWIhuW4g2ApO1xuICAgICAgICBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBgY2xpY2tkYXRhYOOBruWApOOBjOWkieWMluOBl+OBn+OBi+OCkuaYjuekuueahOOBq+avlOi8g1xuICAgIGlmIChcbiAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiAmJlxuICAgICAgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwIHx8IGNsaWNrZGF0YSlcbiAgICApIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgSlNPTi5zdHJpbmdpZnkoY2xpY2tkYXRhKSwgdXBkYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLCAvLyDmqKrlkJHjgY3mo5LjgrDjg6njg5XnlKjjga7lgKTvvIjpgIbpoIbvvIlcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSwgLy8g44Kr44OG44K044Oq77yI6YCG6aCG77yJXG4gICAgICAgICAgICBjdXN0b21kYXRhOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnN1bW1hcml6ZSkucmV2ZXJzZSgpLCAvLyBzdW1tYXJpemUg44KSIGN1c3RvbWRhdGEg44Gr5rih44GZXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsIC8vIOaoquWQkeOBjeajkuOCsOODqeODlVxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sIC8vIOajkuOBruiJslxuICAgICAgICAgICAgaG92ZXJ0ZW1wbGF0ZTpcbiAgICAgICAgICAgIGDoqqzmmI46ICV7Y3VzdG9tZGF0YX08YnI+JTogJXt4Oi4yZn0lIDxleHRyYT48L2V4dHJhPmAsIC8vIGN1c3RvbWRhdGEg44KS5Y+C54WnXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aWNrc3VmZml4OiBcIiAlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogXCJGSVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDgwLCByOiA1MCB9LFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIGFsaWduOlwibGVmdFwiLFxuICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICBzaXplOiAxMSwgLy8g44OE44O844Or44OB44OD44OX44Gu44OV44Kp44Oz44OI44K144Kk44K6XG4gICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsIC8vIOODleOCqeODs+ODiOOBruiJslxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJnY29sb3I6IFwibGlnaHR5ZWxsb3dcIiwgLy8g44OE44O844Or44OB44OD44OX44Gu6IOM5pmv6ImyXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJncmF5XCIsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruaeoOe3muiJslxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG5cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbi8vIOODh+ODvOOCv+WPluW+l+mWouaVsFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cblxuXG5jb25zdCBQbG90QmFyQ2hhcnRBID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJGSeOBruWIhuW4gyFcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDU7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWNbMF07IC8vIGNsaWNrZGF0YeOCkuWEquWFiFxuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3RyZW5kL291dHB1dF90b3BpY18ke3RpbWV9Lmpzb25gO1xuICAgICAgICBjb25zdCBmaVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2ZpX3N1YmNsYXNzX3NwbGl0Lmpzb25gO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkuWPluW+l1xuICAgICAgICBjb25zdCBbb3JpZ2luYWwsIGZpTGlzdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKHBhdGgpLFxuICAgICAgICAgIGZldGNoRGF0YShmaVBhdGgpLFxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImFcIixvcmlnaW5hbCk7XG4gXG5cbiAgICAgICAgLy8gSlNPTuODh+ODvOOCv+OBruaVtOW9olxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gT2JqZWN0LmVudHJpZXMob3JpZ2luYWwpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgIFxuICAgICAgICAgIGNhdGVnb3J5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IGtleSA9PT0gXCJcIiA/IDAgOiBwYXJzZUZsb2F0KHZhbHVlKSAqIDEwMCB8fCAwLCBcbiAgICAgICAgICBzdW1tYXJpemU6IGZpTGlzdFtrZXldLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYVwiLGZvcm1hdHRlZERhdGEpO1xuXG5cbiAgICAgICAgLy8g44OH44O844K/44KS6ZmN6aCG44Gr44K944O844OI44GX44Gm5LiK5L2NMTDku7bjgpLlj5blvpdcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGZvcm1hdHRlZERhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGBGSeOBruWIhuW4g2ApO1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFydERhdGEpO1xuICAgICAgICBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiAmJiAodXBkYXRlIHx8IGNoYXJ0RGF0YS5sZW5ndGggPT09IDAgKSkge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCB1cGRhdGVdKTsgLy8gY2xpY2tkYXRhIOOCkuS+neWtmOmWouS/guOBq+i/veWKoFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgIHg6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIGN1c3RvbWRhdGE6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3VtbWFyaXplKS5yZXZlcnNlKCksIC8vIHN1bW1hcml6ZSDjgpIgY3VzdG9tZGF0YSDjgavmuKHjgZlcblxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaFwiLFxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sXG4gICAgICAgICAgICBob3ZlcnRlbXBsYXRlOlxuICAgICAgICAgICAgYOiqrOaYjjogJXtjdXN0b21kYXRhfTxicj4lOiAle3g6LjJmfSUgPGV4dHJhPjwvZXh0cmE+YCwgLy8gY3VzdG9tZGF0YSDjgpLlj4LnhadcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpY2tzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkZJXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiAzNSwgbDogODAsIHI6IDUwIH0sXG4gICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgYWxpZ246XCJsZWZ0XCIsXG4gICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgIHNpemU6IDExLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7jg5Xjgqnjg7Pjg4jjgrXjgqTjgrpcbiAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIiwgLy8g44OV44Kp44Oz44OI44Gu6ImyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmdjb2xvcjogXCJsaWdodHllbGxvd1wiLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7og4zmma/oibJcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcImdyYXlcIiwgLy8g44OE44O844Or44OB44OD44OX44Gu5p6g57ea6ImyXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cblxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteV9hcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbXlfYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hdXRoMF9hdXRoMC1yZWFjdF9kaXN0X2F1dGgwLXJlYWN0X2VzbV9qcy1ub2RlX21vZHVsZXNfcmVhY3QtYm9vdHN0cmFwX2UtMTM4MDZiXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIlNpZGViYXIiLCJDb250ZW50IiwidXNlQXV0aDAiLCJBcHAiLCJsb2dpbldpdGhSZWRpcmVjdCIsImxvZ291dCIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUxvZ2luIiwiY29ubmVjdGlvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJhcnJvd0NvbG9yIiwiY29tcGFueUxpc3QiLCJ0b3BpY0xpc3QiLCJ2aXN1YWxUeXBlIiwic2V0VmlzdWFsVHlwZSIsImlzQXBwbGllZCIsInNldElzQXBwbGllZCIsInNlbGVjdGVkQ29tcGFuaWVzIiwic2V0U2VsZWN0ZWRDb21wYW5pZXMiLCJzZWxlY3RlZFRvcGljcyIsInNldFNlbGVjdGVkVG9waWNzIiwiaGFuZGxlVmlzdWFsVHlwZUNoYW5nZSIsInZhbHVlIiwiaGFuZGxlQXBwbHkiLCJ0b2dnbGVTZWxlY3Rpb24iLCJpdGVtIiwic2V0U2VsZWN0ZWQiLCJidXR0b210eXBlIiwicHJldlNlbGVjdGVkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpIiwiQ29tcGFueUNoZWNrYm94Q2hhbmdlIiwiY29tcGFueSIsIlRvcGljQ2hlY2tib3hDaGFuZ2UiLCJ0b3BpYyIsInJlc2V0SXNBcHBsaWVkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZmx1aWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiRnJhZ21lbnQiLCJtZCIsIm9uQXBwbHkiLCJvblZpc3VhbFR5cGVDaGFuZ2UiLCJvbkNoYW5nZVRvcGljIiwib25DaGFuZ2VDb21wYW55Iiwic3R5bGUiLCJoZWlnaHQiLCJwbG90IiwicmVzZXRBcHBseSIsIkNhcmQiLCJQbG90UGllQSIsIlBsb3RQaWVCIiwiUGxvdFBlcnNvbmFDb21wIiwiUGxvdFBlcnNvbmFUb3BpYyIsIlBsb3RCYXJDaGFydEEiLCJQbG90QmFyQ2hhcnRCIiwiUHJvcG9zZWREYXRhIiwiZ2V0Q2FyZERhdGEiLCJQcm9wb3NlZFZpc3VhbGl6ZSIsIl9yZWYiLCJjbGlja0RhdGEiLCJzZXRDbGlja0RhdGEiLCJjbGlja0NvbXBhbnlEYXRhIiwic2V0Q2xpY2tDb21wYW55RGF0YSIsImhhbmRsZVBpZUNoYXJ0Q2xpY2siLCJkYXRhIiwibG9nIiwiaGFuZGxlUGVyc29uYUNsaWNrIiwiY2FyZERhdGEiLCJzZXRDYXJkRGF0YSIsInVwZGF0ZSIsIm9uUmVuZGVyZWQiLCJvbkNsaWNrRGF0YSIsImxheW91dCIsInRpdGxlIiwid2lkdGgiLCJjb25maWciLCJyZXNwb25zaXZlIiwiY2xpY2tkYXRhIiwicHJvcG9zZWREYXRhIiwic2V0UHJvcG9zZWREYXRhIiwic2V0RXJyb3IiLCJmZXRjaERhdGEiLCJkYXRhUGF0aCIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJqc29uRGF0YSIsImpzb24iLCJjb21wYW55RGF0YSIsIndhcm4iLCJ0b3BpY0RhdGEiLCJlcnIiLCJyZW5kZXJDYXJkIiwiZGlyZWN0aW9uIiwidmFsdWVzIiwibGFiZWwiLCJiYXNlQ29sb3JNYXAiLCJ1cHJpZ2h0IiwidXBsZWZ0IiwiZG93bnJpZ2h0IiwiZG93bmxlZnQiLCJiYXNlQ29sb3IiLCJjYXJkQWxwaGEiLCJjYXJkQmFja2dyb3VuZENvbG9yIiwicmVwbGFjZSIsIk1hdGgiLCJtaW4iLCJrZXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJCb2R5IiwiVGl0bGUiLCJzbGljZSIsIm1hcCIsImluZGV4IiwiYWxwaGEiLCJpdGVtQmFja2dyb3VuZENvbG9yIiwibWF4IiwiSGVhZGVyIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJSZWFjdERPTSIsIkF1dGgwUHJvdmlkZXIiLCJkb21haW4iLCJjbGllbnRJZCIsInJlbmRlciIsIlN0cmljdE1vZGUiLCJhdXRob3JpemF0aW9uUGFyYW1zIiwicmVkaXJlY3RfdXJpIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZVJlZiIsIlBsb3QiLCJjb2xvcm1hcCIsInVybCIsInN0YXR1cyIsImNvbnRlbnRUeXBlIiwiaGVhZGVycyIsImdldCIsInRleHQiLCJzcGxpdCIsImxpbmUiLCJ0cmltIiwicHJvY2Vzc1NwYXJzZURhdGEiLCJzcGFyc2VEYXRhIiwibnVtUm93cyIsImVudHJ5Iiwicm93IiwibnVtQ29scyIsImNvbCIsIm1hdHJpeCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImZpbGwiLCJmb3JFYWNoIiwicmVkdWNlIiwic3VtIiwiX3JlZjIiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJzZXRUaXRsZSIsImFsbFRvcGljIiwiSWR0b1RvcGljIiwiVG9waWN0b0lkIiwiZGF0YUNhY2hlIiwiY29tcGFuaWVzIiwibG9hZERhdGEiLCJhbGxUb3BpY3NEYXRhIiwiUHJvbWlzZSIsImFsbCIsInRhcmdldF9pZCIsInRpbWUiLCJjb21wYW55VXJsIiwic3BhcnNlRGF0YVVybCIsImN1cnJlbnQiLCJub3JtYWxpemVTdHJpbmciLCJzdHIiLCJub3JtYWxpemUiLCJzYW5pdGl6ZWRDb21wYW5pZXMiLCJzYW5pdGl6ZWRDb21wYW55Iiwicm93U3VtcyIsImNvbXBhbnlJbmRleCIsImluZGV4T2YiLCJmaWx0ZXJlZERhdGEiLCJ0b3RhbFZhbHVlIiwibm9ybWFsaXplZERhdGEiLCJjYXRlZ29yeSIsInNvcnQiLCJhIiwiYiIsImhhbmRsZVBsb3RDbGljayIsImV2ZW50IiwicG9pbnRzIiwidG9waWNpZCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInR5cGUiLCJsYWJlbHMiLCJTdHJpbmciLCJtYXJrZXIiLCJjb2xvcnMiLCJzaG93bGVnZW5kIiwicGxvdF9iZ2NvbG9yIiwicGFwZXJfYmdjb2xvciIsIm1hcmdpbiIsInQiLCJsIiwiciIsImZldGNoVGV4dERhdGEiLCJsb2FkQ2hhcnREYXRhIiwidGFyZ2V0SWQiLCJkYXRhVXJsIiwiY29sdW1uVXJsIiwic29ydGVkRGF0YSIsImxvYWRDb21wYW5pZXMiLCJ0b0xpc3QiLCJsaW5lcyIsImFscGhhX2xpIiwicGFyc2VGbG9hdCIsImJldGFfbGkiLCJQbG90UGVyc29uQ29tcCIsImFycm93X2NvbG9yIiwicHJlcGFyZWREYXRhIiwic2V0UHJlcGFyZWREYXRhIiwiZmlnRGF0YSIsInNldEZpZ0RhdGEiLCJhbm5vdGF0aW9ucyIsInNldEFubm90YXRpb25zIiwiYXV0aG9yRGF0YSIsInNldEF1dGhvckRhdGEiLCJwcmVwYXJlRGF0YSIsImFsbFByb21pc2VzIiwiY29sdW1uUGF0aCIsImNvbXBhbnlEaWN0IiwiYWNjIiwiaWR4IiwibmV3U2VhcmNoTGlzdCIsImlzQXJyYXkiLCJmaWx0ZXJlZFNlYXJjaExpc3QiLCJub2RlX2FscGhhIiwibm9kZV9iZXRhIiwicHJvbWlzZXMiLCJfIiwiaiIsInAiLCJwYXJhbWV0ZXJQYXRoIiwiayIsInJlc3VsdHMiLCJjb21iaW5lZEFscGhhIiwiZmxhdE1hcCIsInJlc3VsdCIsImNvbWJpbmVkQmV0YSIsImNvbWJpbmVkU2VhcmNoTGlzdCIsImJldGEiLCJzZWFyY2hMaXN0IiwibG9hZEF1dGhvckRhdGEiLCJ0b3BpY0lkIiwiYXV0aG9yUGF0aCIsInllYXJUb1BlcnNvbmEiLCJwZXJzb25hRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJ5ZWFyIiwicGVyc29uYU51bSIsInllYXJEYXRhIiwia2V5cyIsImF1dGhvcnMiLCJ0b3BBdXRob3JzIiwiX3JlZjMiLCJhdXRob3IiLCJjb3VudCIsImpvaW4iLCJhdXRob3JEYXRhTWFwIiwiX3JlZjQiLCJwbG90RGF0YSIsImN1cnJlbnRUb3BpYyIsInBlcnNvbmFUb1llYXIiLCJob3ZlclRleHRzIiwibnVtIiwieWVhclRleHQiLCJwYXJzZUludCIsImF1dGhvckluZm8iLCJ4IiwieSIsIm1vZGUiLCJ0ZXh0cG9zaXRpb24iLCJob3ZlcnRleHQiLCJob3ZlcmluZm8iLCJob3ZlcmxhYmVsIiwiYWxpZ24iLCJiZ2NvbG9yIiwiYm9yZGVyY29sb3IiLCJmb250Iiwic2l6ZSIsInN5bWJvbCIsIm5hbWUiLCJwbG90QW5ub3RhdGlvbnMiLCJ4cmVmIiwieXJlZiIsImF4cmVmIiwiYXlyZWYiLCJheCIsImF5IiwiYXJyb3djb2xvciIsImFycm93c2l6ZSIsImFycm93d2lkdGgiLCJhcnJvd2hlYWQiLCJzaG93YXJyb3ciLCJ4YW5jaG9yIiwieWFuY2hvciIsInhheGlzIiwicmFuZ2UiLCJsaW5lY29sb3IiLCJsaW5ld2lkdGgiLCJncmlkY29sb3IiLCJncmlkd2lkdGgiLCJncmlkZGFzaCIsInRpY2ttb2RlIiwidGlja3ZhbHMiLCJ0aWNrdGV4dCIsInplcm9saW5lIiwieWF4aXMiLCJ0aXRsZV9zdGFuZG9mZiIsImxlZ2VuZCIsImJvcmRlcndpZHRoIiwiaG92ZXJkaXN0YW5jZSIsImhvdmVybW9kZSIsIm5hbWVsZW5ndGgiLCJkaXNwbGF5TW9kZUJhciIsIlBsb3RQZXJzb25Ub3BpYyIsInNldENvbXBhbnlMaXN0Iiwic2V0U2VhcmNoTGlzdCIsInRoZW4iLCJBY2NvcmRpb24iLCJCdXR0b24iLCJGb3JtIiwiSW5wdXRHcm91cCIsImlucHV0VHlwZSIsInNldElucHV0VHlwZSIsInRvcGljU2VhcmNoVGVybSIsInNldFRvcGljU2VhcmNoVGVybSIsImNvbXBhbnlTZWFyY2hUZXJtIiwic2V0Q29tcGFueVNlYXJjaFRlcm0iLCJ0b3BpY1NlYXJjaFJlZiIsImNvbXBhbnlTZWFyY2hSZWYiLCJoYW5kbGVSYWRpb0NoYW5nZSIsInRhcmdldCIsImhhbmRsZVNlbGVjdEFsbFRvcGljcyIsImhhbmRsZVVuc2VsZWN0QWxsVG9waWNzIiwiaGFuZGxlU2VsZWN0QWxsQ29tcGFuaWVzIiwiaGFuZGxlVW5zZWxlY3RBbGxDb21wYW5pZXMiLCJoYW5kbGVUb3BpY1NlYXJjaCIsImUiLCJoYW5kbGVDb21wYW55U2VhcmNoIiwiaGFuZGxlVG9waWNTZWFyY2hLZXlEb3duIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXJlZFRvcGljcyIsInRvTG93ZXJDYXNlIiwiaGFuZGxlQ29tcGFueVNlYXJjaEtleURvd24iLCJmaWx0ZXJlZENvbXBhbmllcyIsInBhZGRpbmciLCJzbSIsImRlZmF1bHRBY3RpdmVLZXkiLCJJdGVtIiwiZXZlbnRLZXkiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJodG1sRm9yIiwiZm9udFNpemUiLCJ2YXJpYW50IiwiQ29udHJvbCIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIiwicmVmIiwicGF0aCIsImNvbXBhbnlQYXRoIiwiZmlQYXRoIiwib3JpZ2luYWwiLCJmaUxpc3QiLCJmb3JtYXR0ZWREYXRhIiwic3VtbWFyaXplIiwiSlNPTiIsInN0cmluZ2lmeSIsInJldmVyc2UiLCJjdXN0b21kYXRhIiwib3JpZW50YXRpb24iLCJob3ZlcnRlbXBsYXRlIiwibWlycm9yIiwidGlja3N1ZmZpeCJdLCJzb3VyY2VSb290IjoiIn0=