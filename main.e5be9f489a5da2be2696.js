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
      hoverdistance: 100,
      hovermode: 'x unified',
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
              return `ペルソナ${num} (${yearText})<br>著者: ${authorData[`persona_${num}`].authors}`;
            }
            return `ペルソナ${num} (${yearText})`;
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
              }
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
      hoverdistance: 100,
      hovermode: 'x unified',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDN0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9hcHAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvZ28tYW55d2hlcmUuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvb2NjdXB5LWNvbXBhbnkuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9vY2N1cHkuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9wZXJzb25hLWNvbXAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9wZXJzb25hLXRvcGljLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvc2lkZWJhci5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RyZW5kLWNvbXAuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy90cmVuZC10b3BpeC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhci5qc3gnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50LmpzeCc7XG5pbXBvcnQgeyB1c2VBdXRoMCB9IGZyb20gJ0BhdXRoMC9hdXRoMC1yZWFjdCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2dpbldpdGhSZWRpcmVjdCwgbG9nb3V0LCBpc0F1dGhlbnRpY2F0ZWQsIHVzZXIgfSA9IHVzZUF1dGgwKCk7IC8vIEF1dGgw44Gu5oOF5aCx44KS5Y+W5b6XXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbG9naW5XaXRoUmVkaXJlY3Qoe1xuICAgICAgICBjb25uZWN0aW9uOiAnVXNlcm5hbWUtUGFzc3dvcmQtQXV0aGVudGljYXRpb24nLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODreOCsOOCpOODs+OCqOODqeODvDpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFycm93Q29sb3IgPSBbXG4gICAgJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRicsXG4gICAgJyMzRTlFNkYnLCAnI0YzODE4MScsICcjNTQ1RTc1JywgJyNGRkI2MjcnLCAnIzU3NzU5MCcsXG4gIF07XG4gIGNvbnN0IGNvbXBhbnlMaXN0ID0gW1xuICAgICfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+5aSn5p6X57WEJywgJ+a4heawtOW7uuioreagquW8j+S8muekvicsICflpKfmiJDlu7roqK3moKrlvI/kvJrnpL4nLFxuICAgICfmoKrlvI/kvJrnpL7nq7nkuK3lt6Xli5nlupcnLCAn5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzJywgJ+WJjeeUsOW7uuioreW3pealreagquW8j+S8muekvicsXG4gICAgJ+S6lOa0i+W7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7jg5Xjgrjjgr8nLCAn5oi455Sw5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvueGiuiwt+e1hCcsXG4gIF07XG4gIGNvbnN0IHRvcGljTGlzdCA9IFsnMCcsICcxJywgJzInLCAnMycsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTEnLFwiMTVcIixcIjE3XCJdO1xuXG4gIGNvbnN0IFt2aXN1YWxUeXBlLCBzZXRWaXN1YWxUeXBlXSA9IHVzZVN0YXRlKCdvbmUtdG9waWMnKTtcbiAgY29uc3QgW2lzQXBwbGllZCwgc2V0SXNBcHBsaWVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2VsZWN0ZWRDb21wYW5pZXMsIHNldFNlbGVjdGVkQ29tcGFuaWVzXSA9IHVzZVN0YXRlKFsn5qCq5byP5Lya56S+54aK6LC357WEJ10pO1xuICBjb25zdCBbc2VsZWN0ZWRUb3BpY3MsIHNldFNlbGVjdGVkVG9waWNzXSA9IHVzZVN0YXRlKFsnMCddKTtcblxuICBjb25zdCBoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0VmlzdWFsVHlwZSh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXBwbHkgPSAoKSA9PiB7XG4gICAgc2V0SXNBcHBsaWVkKDEpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGlvbiA9IChpdGVtLCBzZXRTZWxlY3RlZCwgYnV0dG9tdHlwZSkgPT4ge1xuICAgIGlmIChidXR0b210eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBzZXRTZWxlY3RlZCgocHJldlNlbGVjdGVkKSA9PlxuICAgICAgICBwcmV2U2VsZWN0ZWQuaW5jbHVkZXMoaXRlbSlcbiAgICAgICAgICA/IHByZXZTZWxlY3RlZC5maWx0ZXIoKGkpID0+IGkgIT09IGl0ZW0pXG4gICAgICAgICAgOiBbLi4ucHJldlNlbGVjdGVkLCBpdGVtXVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWQoW2l0ZW1dKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgQ29tcGFueUNoZWNrYm94Q2hhbmdlID0gKGNvbXBhbnksIGJ1dHRvbXR5cGUpID0+IHtcbiAgICB0b2dnbGVTZWxlY3Rpb24oY29tcGFueSwgc2V0U2VsZWN0ZWRDb21wYW5pZXMsIGJ1dHRvbXR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ2hlY2tib3hDaGFuZ2UgPSAodG9waWMsIGJ1dHRvbXR5cGUpID0+IHtcbiAgICB0b2dnbGVTZWxlY3Rpb24odG9waWMsIHNldFNlbGVjdGVkVG9waWNzLCBidXR0b210eXBlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ29tcGFuaWVzKFsn5qCq5byP5Lya56S+54aK6LC357WEJ10pO1xuICAgIHNldFNlbGVjdGVkVG9waWNzKFsnMCddKTtcbiAgfSwgW3Zpc3VhbFR5cGVdKTtcblxuICBjb25zdCByZXNldElzQXBwbGllZCA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwicmVhY3QtY29udGVudFwiIGZsdWlkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XG4gICAgICA8Um93PlxuICAgICAgICB7IWlzQXV0aGVudGljYXRlZCA/ICggLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44Gq44GE5aC05ZCIXG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT7jg63jgrDjgqTjg7PjgYzlv4XopoHjgafjgZk8L2gxPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgICAgICAgICDjg63jgrDjgqTjg7NcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSA6ICggLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44KL5aC05ZCIXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiDjgrXjgqTjg4njg5Djg7wgKi99XG4gICAgICAgICAgICA8Q29sIG1kPXszfSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCI+XG4gICAgICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICAgICAgb25BcHBseT17aGFuZGxlQXBwbHl9XG4gICAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgICBvblZpc3VhbFR5cGVDaGFuZ2U9e2hhbmRsZVZpc3VhbFR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdG9waWNMaXN0PXt0b3BpY0xpc3R9XG4gICAgICAgICAgICAgICAgY29tcGFueUxpc3Q9e2NvbXBhbnlMaXN0fVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29tcGFuaWVzPXtzZWxlY3RlZENvbXBhbmllc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRvcGljcz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VUb3BpYz17VG9waWNDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBhbnk9e0NvbXBhbnlDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICB7Lyog44Oh44Kk44Oz44Kz44Oz44OG44Oz44OEICovfVxuICAgICAgICAgICAgPENvbCBtZD17OX0gY2xhc3NOYW1lPVwiYm9yZGVyLWVuZFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgICAgICBwbG90PXtpc0FwcGxpZWR9XG4gICAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgICB0b3BpYz17c2VsZWN0ZWRUb3BpY3N9XG4gICAgICAgICAgICAgICAgY29tcGFueT17c2VsZWN0ZWRDb21wYW5pZXN9XG4gICAgICAgICAgICAgICAgcmVzZXRBcHBseT17cmVzZXRJc0FwcGxpZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9ZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgUGxvdFBpZUEgZnJvbSAnLi9vY2N1cHkuanN4JztcbmltcG9ydCBQbG90UGllQiBmcm9tICcuL29jY3VweS1jb21wYW55LmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFDb21wIGZyb20gJy4vcGVyc29uYS1jb21wLmpzeCc7XG5pbXBvcnQgUGxvdFBlcnNvbmFUb3BpYyBmcm9tICcuL3BlcnNvbmEtdG9waWMuanN4JztcblxuaW1wb3J0IFBsb3RCYXJDaGFydEEgZnJvbSAnLi90cmVuZC10b3BpeC5qc3gnO1xuaW1wb3J0IFBsb3RCYXJDaGFydEIgZnJvbSAnLi90cmVuZC1jb21wLmpzeCc7XG5pbXBvcnQgUHJvcG9zZWREYXRhLCB7IGdldENhcmREYXRhIH0gZnJvbSBcIi4vZ28tYW55d2hlcmUuanN4XCI7IC8vIOato+OBl+OBhOODkeOCueOCkuaMh+WumlxuaW1wb3J0IFByb3Bvc2VkVmlzdWFsaXplIGZyb20gJy4vZ28tYW55d2hlcmUuanN4JztcblxuXG5cblxuXG5jb25zdCBDb250ZW50ID0gKHtwbG90LHZpc3VhbFR5cGUsdG9waWMsY29tcGFueSxyZXNldEFwcGx5fSkgPT4ge1xuXG5cblxuICAgIGNvbnN0IFtjbGlja0RhdGEsIHNldENsaWNrRGF0YV0gPSB1c2VTdGF0ZSgpOyAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jga7nirbmhYtcbiAgICBjb25zdCBbY2xpY2tDb21wYW55RGF0YSwgc2V0Q2xpY2tDb21wYW55RGF0YV0gPSB1c2VTdGF0ZSgpOyAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jga7nirbmhYtcblxuICAgIGNvbnN0IGhhbmRsZVBpZUNoYXJ0Q2xpY2sgPSAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCLjgq/jg6rjg4Pjgq/jgZXjgozjgZ/jg4fjg7zjgr86XCIsIGRhdGEpOyAvLyDjg4fjg5Djg4PjgrDnlKhcbiAgICAgIHNldENsaWNrRGF0YShkYXRhKTsgLy8g54q25oWL44KS5pu05pawXG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVQZXJzb25hQ2xpY2sgPSAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCLjgq/jg6rjg4Pjgq/jgZXjgozjgZ/jg4fjg7zjgr86XCIsIGRhdGEpOyAvLyDjg4fjg5Djg4PjgrDnlKhcbiAgICAgIHNldENsaWNrQ29tcGFueURhdGEoZGF0YSk7IC8vIOeKtuaFi+OCkuabtOaWsFxuICAgIH07XG5cbiAgICBjb25zdCBbY2FyZERhdGEsIHNldENhcmREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gIFxuICAgIFxuICByZXR1cm4gKFxuICAgIFxuICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICB7LyogRmlyc3QgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgey8qIFBlcnNvbmEgR3JhcGggKi99XG4gICAgICAgIDxDb2wgbWQ9ezF9PjwvQ29sPlxuICAgICAgICA8Q29sIG1kPXsxMH0gPlxuXG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgICAgPFBsb3RQZXJzb25hVG9waWNcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIG9uQ2xpY2tEYXRhPXtoYW5kbGVQZXJzb25hQ2xpY2t9IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBruODj+ODs+ODieODqeODvOOCkua4oeOBmVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzUwdmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiNTB2aFwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFDb21wXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLjg5rjg6vjgr3jg4rjga7lj6/oppbljJZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQydmgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgcmVzcG9uc2l2ZTogdHJ1ZSB9fSAvLyBQbG90bHnjgavjg6zjgrnjg53jg7Pjgrfjg5boqK3lrprjgpLmnInlirnljJZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm+OCi1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PuipsuW9k+OBmeOCi+ihqOekuuOBjOOBguOCiuOBvuOBm+OCkzwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIHsvKiBSaWdodCBDb2x1bW4gd2l0aCBDYXJkcyAqL31cbiAgICAgICAgPENvbCBtZD17MX0+XG5cbiAgICA8L0NvbD5cbiAgPC9Sb3c+XG5cbiAgICAgIHsvKiBTZWNvbmQgUm93ICovfVxuICAgICAgPFJvdyBzdHlsZT17eyBoZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgPENvbCBtZD17Nn0+XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgICAgPFBsb3RQaWVBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+azqOebruS8gealreOBrualreeVjOOBq+WvvuOBmeOCi+WNoOacieeOhycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiID8gKFxuICAgICAgICAgICAgPFBsb3RQaWVCXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBvblJlbmRlcmVkPXtyZXNldEFwcGx5fVxuICAgICAgICAgICAgICBvbkNsaWNrRGF0YT17aGFuZGxlUGllQ2hhcnRDbGlja30gLy8g44Kv44Oq44OD44Kv44OH44O844K/44Gu44OP44Oz44OJ44Op44O844KS5rih44GZXG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+6Kmy5b2T44GZ44KL6KGo56S644GM44GC44KK44G+44Gb44KTPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICAgICAgIFxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17Nn0+XG4gICAgICAgIHtcbiAgICAgICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgIDxQbG90QmFyQ2hhcnRBXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuXG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICBkYXRhPXtbXX0gLy8g44OH44O844K/44KS6L+95Yqg44GX44Gm44GP44Gg44GV44GEXG4gICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgdGl0bGU6ICdG44K/44O844Og44Gu5YiG5biDJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pOihcbiAgICAgICAgICA8UGxvdEJhckNoYXJ0QlxuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgY2xpY2tkYXRhPXtjbGlja0RhdGF9IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OCkua4oeOBmVxuICAgIFxuXG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICBkYXRhPXtbXX0gLy8g44OH44O844K/44KS6L+95Yqg44GX44Gm44GP44Gg44GV44GEXG4gICAgICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICAgICAgdGl0bGU6ICdG44K/44O844Og44Gu5YiG5biDJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pfVxuICAgICAgICAgIFxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJoLTEwMFwiPlxuXG4gICAgICA8Q29sPlxuICAgICAge1xuICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiA/IChcbiAgICAgICAgICA8UHJvcG9zZWRWaXN1YWxpemVcbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjbGlja0RhdGE9e2NsaWNrQ29tcGFueURhdGF9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S7u+aEj+OBruS9jee9ruOBuOenu+WLleOBmeOCi+OBn+OCgeOBruaPkOahiCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgIC8+KTooXG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICApIH1cbiAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgICAgIFxuICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQsUm93LENvbCxDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IFByb3Bvc2VkVmlzdWFsaXplID0gKHsgdG9waWMsIGNsaWNrRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtwcm9wb3NlZERhdGEsIHNldFByb3Bvc2VkRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGFQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dG9waWN9L3Byb3Bvc2VkL3Byb3Bvc2VkLmpzb25gO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi44OH44O844K/44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgLy8gYGNsaWNrRGF0YWDjgavlr77lv5zjgZnjgovkvJrnpL7jga7jg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgY29tcGFueURhdGEgPSBqc29uRGF0YVtjbGlja0RhdGFdO1xuXG4gICAgICAgIGlmICghY29tcGFueURhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCLmjIflrprjgZfjgZ/jg4fjg7zjgr/jgYzlrZjlnKjjgZfjgb7jgZvjgpM6IFwiICsgY2xpY2tEYXRhKTtcbiAgICAgICAgICBzZXRQcm9wb3NlZERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaMh+WumuOBleOCjOOBn+ODiOODlOODg+OCr+OBruODh+ODvOOCv+OCkuWPluW+l1xuICAgICAgICBjb25zdCB0b3BpY0RhdGEgPSBjb21wYW55RGF0YVt0b3BpY107XG4gICAgICAgIGlmICghdG9waWNEYXRhKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwi5oyH5a6a44GX44Gf44OI44OU44OD44Kv44GM5a2Y5Zyo44GX44G+44Gb44KTOiBcIiArIHRvcGljKTtcbiAgICAgICAgICBzZXRQcm9wb3NlZERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFByb3Bvc2VkRGF0YSh0b3BpY0RhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/kuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ86XCIsIGVycik7XG4gICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFt0b3BpYywgY2xpY2tEYXRhXSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+44Ko44Op44O8OiB7ZXJyb3J9PC9kaXY+O1xuICB9XG5cbiAgaWYgKCFwcm9wb3NlZERhdGEpIHtcbiAgICByZXR1cm4gPGRpdj7jg4fjg7zjgr/jgpLoqq3jgb/ovrzjgb/kuK0uLi48L2Rpdj47XG4gIH1cblxuICBcbiAgLy8g44OH44O844K/44KS44Kr44O844OJ5b2i5byP44Gn6KGo56S6XG5jb25zdCByZW5kZXJDYXJkID0gKGRpcmVjdGlvbiwgdmFsdWVzKSA9PiB7XG4gIGxldCBsYWJlbDtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIFwidXBsZWZ0XCI6XG4gICAgICBsYWJlbCA9IFwi5bem5LiKXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidXByaWdodFwiOlxuICAgICAgbGFiZWwgPSBcIuWPs+S4ilwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRvd25sZWZ0XCI6XG4gICAgICBsYWJlbCA9IFwi5bem5LiLXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZG93bnJpZ2h0XCI6XG4gICAgICBsYWJlbCA9IFwi5Y+z5LiLXCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbGFiZWwgPSBcIuOBneOBruS7llwiO1xuICB9XG5cbiAgLy8g44Kr44O844OJ5YWo5L2T44Gu6IOM5pmv6Imy44KS6Kit5a6a77yI5pa55ZCR44Gr5Z+644Gl44GP44OZ44O844K544Kr44Op44O877yJXG4gIGNvbnN0IGJhc2VDb2xvck1hcCA9IHtcbiAgICB1cHJpZ2h0OiBcInJnYmEoMjU1LCAxODgsIDE4OCwgQUxQSEEpXCIsICAgLy8g6LWkXG4gICAgdXBsZWZ0OiBcInJnYmEoMjU1LCAyNTUsIDE4OCwgQUxQSEEpXCIsIC8vIOm7hFxuICAgIGRvd25yaWdodDogXCJyZ2JhKDE4OCwgMjIxLCAyNTUsIEFMUEhBKVwiLCAvLyDpnZJcbiAgICBkb3dubGVmdDogXCJyZ2JhKDE4OCwgMjU1LCAxODgsIEFMUEhBKVwiIC8vIOe3kVxuICB9O1xuXG4gIGNvbnN0IGJhc2VDb2xvciA9IGJhc2VDb2xvck1hcFtkaXJlY3Rpb25dO1xuICBjb25zdCBjYXJkQWxwaGEgPSAwLjM7IC8vIOWGhemDqOOBruimgee0oOaVsOOBp+mAj+aYjuW6puOCkuWkieWMllxuICBjb25zdCBjYXJkQmFja2dyb3VuZENvbG9yID0gYmFzZUNvbG9yLnJlcGxhY2UoXCJBTFBIQVwiLCBNYXRoLm1pbihjYXJkQWxwaGEsIDEpKTsgLy8g6IOM5pmv6Imy44KS5YuV55qE44Gr6Kit5a6aXG5cbiAgcmV0dXJuIChcblxuICAgIDxDYXJkIGtleT17ZGlyZWN0aW9ufSBjbGFzc05hbWU9XCJtLTNcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNhcmRCYWNrZ3JvdW5kQ29sb3IgfX0+XG4gICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIj5cbiAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPntsYWJlbH08L0NhcmQuVGl0bGU+XG4gICAgICAgIHt2YWx1ZXMuc2xpY2UoMCwgNSkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAvLyDpoIbkvY3jgavln7rjgaXjgYTjgabpgI/mmI7luqbjgpLoqr/mlbRcbiAgICAgICAgICBjb25zdCBhbHBoYSA9IDAuOTAgLSBpbmRleCAqIDAuMTU7IC8vIOmghuS9jeOBlOOBqOOBq+mAj+aYjuW6puOCkuW+kOOAheOBq+a4m+WwkVxuICAgICAgICAgIGNvbnN0IGl0ZW1CYWNrZ3JvdW5kQ29sb3IgPSBiYXNlQ29sb3IucmVwbGFjZShcIkFMUEhBXCIsIE1hdGgubWF4KGFscGhhLCAwLjEpKTsgLy8g5ZCE44Ki44Kk44OG44Og44Gu6IOM5pmv6ImyXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5raW5nLWl0ZW0gcHktMiBweC0zIGJvcmRlci1ib3R0b21cIlxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW1CYWNrZ3JvdW5kQ29sb3IgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0cm9uZz57aW5kZXggKyAxfeS9je+8mjwvc3Ryb25nPiB7dmFsdWUgfHwgXCJcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9DYXJkLkJvZHk+XG4gICAgPC9DYXJkPlxuXG4gICk7XG59O1xuICByZXR1cm4gKFxuPENvbnRhaW5lcj5cbiAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktM1wiPlxuICAgIHsvKiBDYXJk44OY44OD44OA44O844Gn5Lit5aSu5LiK6YOo44GrY2xpY2tEYXRh44KS6KGo56S6ICovfVxuICAgIDxDYXJkLkhlYWRlciBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMzMzM1wiLCBjb2xvcjogXCJ3aGl0ZVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPntjbGlja0RhdGEgfHwgXCIgXCJ9PC9oNT5cbiAgICA8L0NhcmQuSGVhZGVyPlxuXG5cbiAgICA8Q2FyZC5Cb2R5PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbD57cmVuZGVyQ2FyZChcInVwbGVmdFwiLCBwcm9wb3NlZERhdGEudXBsZWZ0IHx8IFtdKX08L0NvbD5cbiAgICAgICAgPENvbD57cmVuZGVyQ2FyZChcInVwcmlnaHRcIiwgcHJvcG9zZWREYXRhLnVwcmlnaHQgfHwgW10pfTwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sPntyZW5kZXJDYXJkKFwiZG93bmxlZnRcIiwgcHJvcG9zZWREYXRhLmRvd25sZWZ0IHx8IFtdKX08L0NvbD5cbiAgICAgICAgPENvbD57cmVuZGVyQ2FyZChcImRvd25yaWdodFwiLCBwcm9wb3NlZERhdGEuZG93bnJpZ2h0IHx8IFtdKX08L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ2FyZC5Cb2R5PlxuICA8L0NhcmQ+XG48L0NvbnRhaW5lcj5cblxuXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvcG9zZWRWaXN1YWxpemU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwLmpzeFwiO1xuaW1wb3J0IHsgQXV0aDBQcm92aWRlciB9IGZyb20gXCJAYXV0aDAvYXV0aDAtcmVhY3RcIjtcblxuLy8gQXV0aDDjga7oqK3lrppcbmNvbnN0IGRvbWFpbiA9IFwiZGV2LWwzYmdlZ25qanh3eDJvZDQudXMuYXV0aDAuY29tXCI7IC8vIEF1dGgw44Gu44OJ44Oh44Kk44OzXG5cbmNvbnN0IGNsaWVudElkID0gXCJpdnRneDFhck41SjA5Wnc4eVBDaUVrcFExRFozUDIyZVwiOyAvLyBBdXRoMOOBruOCr+ODqeOCpOOCouODs+ODiElEXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPEF1dGgwUHJvdmlkZXJcbiAgICAgIGRvbWFpbj17ZG9tYWlufVxuICAgICAgY2xpZW50SWQ9e2NsaWVudElkfVxuICAgICAgYXV0aG9yaXphdGlvblBhcmFtcz17e1xuICAgICAgICByZWRpcmVjdF91cmk6IFwiaHR0cHM6Ly9oaXJvZW1vbi1tLmdpdGh1Yi5pby9teS1hcHAvXCIsIC8vIOiqjeiovOW+jOOBq+ODquODgOOCpOODrOOCr+ODiOOBmeOCi1VSTFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QXBwIC8+XG4gICAgPC9BdXRoMFByb3ZpZGVyPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5cblxuY29uc3QgY29sb3JtYXAgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjoncmdiKDIyOSwgMTM0LCA2KScsIFwi5Zyw55uk5pS56ImvXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLjg4jjg7Pjg43jg6vmjpjliYpcIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWFjemch+ani+mAoFwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi566h55CG44K344K544OG44OgXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLlu4Pmo4Tnianlh6bnkIZcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLlu7rnr4njg5Hjg43jg6tcIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi56m66Kq/44K344K544OG44OgXCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmjpjliYroo4Xnva5cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbn07XG5cblxuLy8gZmV0Y2hEYXRh6Zai5pWw77yaSlNPTuOBvuOBn+OBr+ODhuOCreOCueODiOW9ouW8j+OBq+WvvuW/nFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG5cbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIEpTT07lvaLlvI/jga7loLTlkIhcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgLy8g44OX44Os44O844Oz44OG44Kt44K544OI44Gu5aC05ZCIXG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7IC8vIOaUueihjOWMuuWIh+OCiuOBruODh+ODvOOCv+OCkumFjeWIl+OBqOOBl+OBpui/lOOBmVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjgrnjg5Hjg7zjgrnjg4fjg7zjgr/jgpLlr4booYzliJfjgavlpInmj5vjgZfjgIHooYzmlrnlkJHjga7lkozjgpLoqIjnrpdcbmNvbnN0IHByb2Nlc3NTcGFyc2VEYXRhID0gKHNwYXJzZURhdGEpID0+IHtcbiAgICBcbiAgY29uc3QgbnVtUm93cyA9IE1hdGgubWF4KC4uLnNwYXJzZURhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnJvdykpICsgMTtcbiAgY29uc3QgbnVtQ29scyA9IE1hdGgubWF4KC4uLnNwYXJzZURhdGEubWFwKGVudHJ5ID0+IGVudHJ5LmNvbCkpICsgMTtcblxuICBjb25zdCBtYXRyaXggPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Sb3dzIH0sICgpID0+IEFycmF5KG51bUNvbHMpLmZpbGwoMCkpO1xuICBzcGFyc2VEYXRhLmZvckVhY2goKHsgcm93LCBjb2wsIHZhbHVlIH0pID0+IHtcbiAgICBtYXRyaXhbcm93XVtjb2xdID0gdmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiBtYXRyaXgubWFwKHJvdyA9PiByb3cucmVkdWNlKChzdW0sIHZhbHVlKSA9PiBzdW0gKyB2YWx1ZSwgMCkpOyAvLyDooYzmlrnlkJHjga7lkozjgpLov5TjgZlcbn07XG5cbmNvbnN0IFBsb3RQaWVCID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCwgb25DbGlja0RhdGEgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwi5rOo55uu44OI44OU44OD44Kv44Gr6Zai44GZ44KL54m56Kix44Gu5LyB5qWt5Y2g5pyJ546HXCIpO1xuICBjb25zdCBhbGxUb3BpYyA9IFsyLCAzLCAxLCAwLCA5LCA2LCA4LCA3LCAxMV07XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wiLFxuICAgIFwiMTVcIjpcIueFp+aYjuOCt+OCueODhuODoFwiLFwiMTdcIjpcIuWjgemdoue3keWMllwifTtcblxuICBjb25zdCBUb3BpY3RvSWQgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjpcIjJcIixcIuWcsOebpOaUueiJr1wiOlwiM1wiLFwi44OI44Oz44ON44Or5o6Y5YmKXCI6XCIxXCIsXG4gICAgICAgIFwi5YWN6ZyH5qeL6YCgXCI6XCIwXCIsXCLnrqHnkIbjgrfjgrnjg4bjg6BcIjpcIjlcIixcIuW7g+ajhOeJqeWHpueQhlwiOlwiNlwiLFwi5bu656+J44OR44ON44OrXCI6XCI4XCIsXG4gICAgICAgXCLnqbroqr/jgrfjgrnjg4bjg6BcIjpcIjdcIixcIuaOmOWJiuijhee9rlwiOlwiMTFcIixcIuW7uuevieioreioiFwiOlwiMTBcIixcIuODiOODs+ODjeODq+a4rOmHj1wiOlwiNVwiLFxuICAgICAgIFwi54Wn5piO44K344K544OG44OgXCI6XCIxNVwiLFwi5aOB6Z2i57eR5YyWXCI6XCIxN1wiXG4gICAgICB9O1xuICAvLyDjgq3jg6Pjg4Pjgrfjg6XnlKjjga7jgqrjg5bjgrjjgqfjgq/jg4hcbiAgY29uc3QgZGF0YUNhY2hlID0gdXNlUmVmKHtcbiAgICBjb21wYW5pZXM6IHt9LFxuICAgIHNwYXJzZURhdGE6IHt9XG4gIH0pO1xuXG4gIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhbGxUb3BpY3NEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIGFsbFRvcGljLm1hcChhc3luYyAodGFyZ2V0X2lkKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZSA9IDU7XG4gICAgICAgICAgY29uc3QgY29tcGFueVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG4gICAgICAgICAgY29uc3Qgc3BhcnNlRGF0YVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vb2NjdXB5L29jY3VweV90b3BpY18ke3RpbWV9Lmpzb25gO1xuXG4gICAgICAgICAgLy8g44Kt44Oj44OD44K344Ol44KS56K66KqNXG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXSkge1xuICAgICAgICAgICAgZGF0YUNhY2hlLmN1cnJlbnQuY29tcGFuaWVzW3RhcmdldF9pZF0gPSBhd2FpdCBmZXRjaERhdGEoY29tcGFueVVybCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFkYXRhQ2FjaGUuY3VycmVudC5zcGFyc2VEYXRhW3RhcmdldF9pZF0pIHtcbiAgICAgICAgICAgIGRhdGFDYWNoZS5jdXJyZW50LnNwYXJzZURhdGFbdGFyZ2V0X2lkXSA9IGF3YWl0IGZldGNoRGF0YShzcGFyc2VEYXRhVXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjb21wYW5pZXMgPSBkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXTtcbiAgICAgICAgICBjb25zdCBzcGFyc2VEYXRhID0gZGF0YUNhY2hlLmN1cnJlbnQuc3BhcnNlRGF0YVt0YXJnZXRfaWRdO1xuXG4gICAgICAgICAgLy8g5q2j6KaP5YyW6Zai5pWwXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cikgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi6Z2e5paH5a2X5YiX44OH44O844K/44GM5qSc5Ye644GV44KM44G+44GX44GfOlwiLCBzdHIpO1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8g6Z2e5paH5a2X5YiX44OH44O844K/44Gv54Sh6KaWXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyLm5vcm1hbGl6ZShcIk5GQ1wiKS50cmltKCk7IC8vIOato+imj+WMluOBqOODiOODquODoOOCkumBqeeUqFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyDmraPopo/ljJbjgZfjgZ/jg4fjg7zjgr/jgafmr5TovINcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW5pZXMgPSBjb21wYW5pZXMubWFwKG5vcm1hbGl6ZVN0cmluZyk7XG4gICAgICAgICAgY29uc3Qgc2FuaXRpemVkQ29tcGFueSA9IG5vcm1hbGl6ZVN0cmluZyhjb21wYW55WzBdKTtcblxuICAgICAgICAgIGlmICghc2FuaXRpemVkQ29tcGFuaWVzLmluY2x1ZGVzKHNhbml0aXplZENvbXBhbnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke3Nhbml0aXplZENvbXBhbnl9XCIgbm90IGZvdW5kIGluIHRvcGljICR7dGFyZ2V0X2lkfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g44K544OR44O844K544OH44O844K/44KS5Yem55CGXG4gICAgICAgICAgY29uc3Qgcm93U3VtcyA9IHByb2Nlc3NTcGFyc2VEYXRhKHNwYXJzZURhdGEpO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gc2FuaXRpemVkQ29tcGFuaWVzLmluZGV4T2Yoc2FuaXRpemVkQ29tcGFueSk7XG5cbiAgICAgICAgICByZXR1cm4geyB0b3BpYzogdGFyZ2V0X2lkLCB2YWx1ZTogcm93U3Vtc1tjb21wYW55SW5kZXhdIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBhbGxUb3BpY3NEYXRhLmZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPT0gbnVsbCk7XG5cbiAgICAgIC8vIOato+imj+WMluOBqOOCveODvOODiFxuICAgICAgY29uc3QgdG90YWxWYWx1ZSA9IGZpbHRlcmVkRGF0YS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS52YWx1ZSwgMCk7XG4gICAgICBpZiAodG90YWxWYWx1ZSA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJObyB2YWxpZCBkYXRhIHRvIG5vcm1hbGl6ZS5cIik7XG4gICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRhID0gZmlsdGVyZWREYXRhLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGNhdGVnb3J5OiBpdGVtLnRvcGljLFxuICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSAvIHRvdGFsVmFsdWUsXG4gICAgICB9KSkuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xuXG4gICAgICBzZXRDaGFydERhdGEobm9ybWFsaXplZERhdGEuc2xpY2UoMCwgMTApKTsgLy8g5LiK5L2NMTDku7bjga7jgb/ooajnpLpcbiAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/lh6bnkIbkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g5Yid5pyf44OH44O844K/6Kqt44G/6L6844G/44GodXBkYXRl44Gu5aSJ5pu05pmC44Gr44OH44O844K/44KS44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIikge1xuICAgICAgbG9hZERhdGEoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHZpc3VhbFR5cGVdKTtcblxuICBjb25zdCBoYW5kbGVQbG90Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRzICYmIGV2ZW50LnBvaW50c1swXSkge1xuICAgICAgY29uc3QgY2xpY2tkYXRhID0gZXZlbnQucG9pbnRzWzBdLmxhYmVsOyAvLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/pg6jliIbjga7jg6njg5njg6tcbiAgICAgIGNvbnN0IGxhYmVsID0gVG9waWN0b0lkW2NsaWNrZGF0YV1cbiAgICAgIGNvbnN0IHRvcGljaWQgPSBsYWJlbC5yZXBsYWNlKFwiVG9waWMgXCIsIFwiXCIpO1xuICAgICAgb25DbGlja0RhdGEoW3RvcGljaWRdKTsgLy8g6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Op44OZ44Or44KS6YCa55+lXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHZhbHVlczogY2hhcnREYXRhLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gIElkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW0lkdG9Ub3BpY1tTdHJpbmcoaXRlbS5jYXRlZ29yeSldXSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNzAsIGI6IDUsIGw6IDQwLCByOiA1MCB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBsb3RDbGlja30gLy8g44Kv44Oq44OD44Kv44Kk44OZ44Oz44OI44KS6L+95YqgXG4gICAgICAvPlxuICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQaWVCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbi8vIOODhuOCreOCueODiOODh+ODvOOCv+OCkuiqreOBv+i+vOOCgOmWouaVsFxuY29uc3QgZmV0Y2hUZXh0RGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBpZUEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wiLFxuICAgIFwiMTVcIjpcIueFp+aYjuOCt+OCueODhuODoFwiLFwiMTdcIjpcIuWjgemdoue3keWMllwifTtcblxuICBjb25zdCBjb2xvcm1hcCA9IHsn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JzoncmdiKDIyOSwgMTM0LCA2KScsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICAgICAgXCLlpKfmiJDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIuagquW8j+S8muekvuerueS4reW3peWLmeW6l1wiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gICAgICBcIuWJjeeUsOW7uuioreW3pealreagquW8j+S8muekvlwiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLkupTmtIvlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuagquW8j+S8muekvuODleOCuOOCv1wiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICAgICAgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDIzNywgMTAwLCA5MCknLCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiOidyZ2IoMTY1LCAxNzAsIDE1MyknfTtcbiAgICAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDU7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWMgfHwgXCJkZWZhdWx0X3RvcGljXCI7IC8vIOWIneacn+WApOOBqOOBl+OBplwiZGVmYXVsdF90b3BpY1wi44KS6Kit5a6aXG4gICAgICAgIGNvbnN0IGRhdGFVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRJZH0vb2NjdXB5L29jY3VweV9tZWFuXyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGNvbHVtblVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldElkfS9zZXR0aW5nL2NvbXBhbnkudHh0YDtcblxuICAgICAgICAvLyDjg4fjg7zjgr/lj5blvpdcbiAgICAgICAgY29uc3QgW3ZhbHVlcywgbGFiZWxzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEoZGF0YVVybCksXG4gICAgICAgICAgZmV0Y2hUZXh0RGF0YShjb2x1bW5VcmwpLFxuICAgICAgICBdKTtcblxuICAgICAgICAvLyDlgKTjgajjg6njg5njg6vjga7ntYTjgb/lkIjjgo/jgZvjgpLkvZzmiJBcbiAgICAgICAgY29uc3QgZGF0YSA9IGxhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVzLnZhbHVlW2luZGV4XSB8fCAwLCAvLyDlgKTjgYzjgarjgYTloLTlkIjjga8wXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyDlgKTjgavln7rjgaXjgYTjgabpmY3poIbjgavjgr3jg7zjg4jjgZfjgabkuIrkvY0xMOS7tuOCkuaKveWHulxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7SWR0b1RvcGljW3RhcmdldElkXX3jgavplqLjgZnjgovnibnoqLHjga7kvIHmpa3ljaDmnInnjodgKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OB44Oj44O844OI44OH44O844K/44Gu5Yem55CG5Lit44Gr44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOWIneWbnuODrOODs+ODgOODquODs+OCsOaZguOBqGB1cGRhdGVg5aSJ5pu05pmC44Gr44OH44O844K/44KS44Ot44O844OJXG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIpIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBvblJlbmRlcmVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5sYWJlbCksXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiY2xvY2t3aXNlXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgY29sb3JzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBjb2xvcm1hcFtpdGVtLmxhYmVsXSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNzAsIGI6IDUsIGw6IDQwLCByOiA1MCB9LFxuICAgICAgICB9fVxuICBcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8vIOW/heOBmuWFqOS9k+OCteOCpOOCuuOCkuimquimgee0oOOBq+WQiOOCj+OBm1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQaWVBO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cblxuIFxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCB0b0xpc3QgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICBjb25zdCBhbHBoYV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMF0pKTtcbiAgICBjb25zdCBiZXRhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVsxXSkpO1xuXG4gICAgcmV0dXJuIHsgYWxwaGFfbGksIGJldGFfbGkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYWxwaGFfbGk6IFtdLCBiZXRhX2xpOiBbXSB9O1xuICB9XG59O1xuXG5jb25zdCBQbG90UGVyc29uQ29tcCA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIG9uUmVuZGVyZWQgfSkgPT4ge1xuY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wiLFxuICAgIFwiMTVcIjpcIueFp+aYjuOCt+OCueODhuODoFwiLFwiMTdcIjpcIuWjgemdoue3keWMllwifTtcblxuY29uc3QgY29sb3JtYXAgPSB7XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIjoncmdiKDIyOSwgMTM0LCA2KScsIFwi5Zyw55uk5pS56ImvXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLjg4jjg7Pjg43jg6vmjpjliYpcIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICAgICAgICAgIFwi5YWN6ZyH5qeL6YCgXCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLnrqHnkIbjgrfjgrnjg4bjg6BcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuW7g+ajhOeJqeWHpueQhlwiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICAgICAgICAgIFwi5bu656+J44OR44ON44OrXCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuepuuiqv+OCt+OCueODhuODoFwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5o6Y5YmK6KOF572uXCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gICAgICAgICAgXCLnhafmmI7jgrfjgrnjg4bjg6BcIjoncmdiKDI1NSwgMTI3LCAxNCknLCBcIuWjgemdoue3keWMllwiOidyZ2IoMTUzLCAxNTMsIDE1MyknXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gIGNvbnN0IGFycm93X2NvbG9yID0gWycjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnXTtcblxuICBjb25zdCBbcHJlcGFyZWREYXRhLCBzZXRQcmVwYXJlZERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmaWdEYXRhLCBzZXRGaWdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fubm90YXRpb25zLCBzZXRBbm5vdGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCLkvIHmpa3jga7nq4vjgaHkvY3nva5cIik7XG4gIGNvbnN0IFthdXRob3JEYXRhLCBzZXRBdXRob3JEYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlcGFyZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxQcm9taXNlcyA9ICh0b3BpYyB8fCBbXCJkZWZhdWx0X3RvcGljXCJdKS5tYXAoYXN5bmMgKHRhcmdldF9pZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b3BpY1wiLHRhcmdldF9pZClcbiAgICAgICAgICBjb25zdCBjb2x1bW5QYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9zZXR0aW5nL2NvbXBhbnkudHh0YDtcbiAgICAgICAgICBjb25zdCBjb21wYW5pZXMgPSBhd2FpdCBsb2FkQ29tcGFuaWVzKGNvbHVtblBhdGgpO1xuXG4gICAgICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW5pZXMucmVkdWNlKChhY2MsIHZhbHVlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGFjY1t2YWx1ZV0gPSBpZHg7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIGNvbnN0IG5ld1NlYXJjaExpc3QgPSBBcnJheS5pc0FycmF5KGNvbXBhbnkpID8gY29tcGFueSA6IFtjb21wYW55XTtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJlZFNlYXJjaExpc3QgPSBuZXdTZWFyY2hMaXN0LmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSBpbiBjb21wYW55RGljdCk7XG5cbiAgICAgICAgICBjb25zdCBub2RlX2FscGhhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsdGVyZWRTZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcbiAgICAgICAgICBjb25zdCBub2RlX2JldGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmaWx0ZXJlZFNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuXG4gICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBqKSA9PiBqICkubWFwKGFzeW5jIChwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9wZXJzb25hL3Rlc3Rfb3B0aW1pemVfJHtwKzF9LnR4dGA7XG4gICAgICAgICAgICBjb25zdCB7IGFscGhhX2xpLCBiZXRhX2xpIH0gPSBhd2FpdCB0b0xpc3QocGFyYW1ldGVyUGF0aCk7XG5cbiAgICAgICAgICAgIGZpbHRlcmVkU2VhcmNoTGlzdC5mb3JFYWNoKChrLCBqKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbmllcy5pbmRleE9mKGspO1xuICAgICAgICAgICAgICBub2RlX2FscGhhW2pdW3BdID0gYWxwaGFfbGlbaWR4XTtcbiAgICAgICAgICAgICAgbm9kZV9iZXRhW2pdW3BdID0gYmV0YV9saVtpZHhdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgICByZXR1cm4geyBub2RlX2FscGhhLCBub2RlX2JldGEsIGZpbHRlcmVkU2VhcmNoTGlzdCB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpO1xuXG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQWxwaGEgPSByZXN1bHRzLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5ub2RlX2FscGhhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRCZXRhID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQubm9kZV9iZXRhKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRTZWFyY2hMaXN0ID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQuZmlsdGVyZWRTZWFyY2hMaXN0KTtcblxuICAgICAgICBzZXRQcmVwYXJlZERhdGEoeyBhbHBoYTogY29tYmluZWRBbHBoYSwgYmV0YTogY29tYmluZWRCZXRhLCBzZWFyY2hMaXN0OiBjb21iaW5lZFNlYXJjaExpc3QgfSk7XG4gICAgICAgIHNldFRpdGxlKGAke2NvbXBhbnl944Gu5qWt55WM44Gn44Gu56uL44Gh5L2N572uYCk7IC8vIOWIneacn+OCv+OCpOODiOODq+OCkuioreWumlxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+a6luWCmeS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDliJ3mnJ/jg6zjg7Pjg4Djg6rjg7PjgrDmmYLjgavjgoLjg4fjg7zjgr/jgpLmupblgplcbiAgICBwcmVwYXJlRGF0YSgpO1xuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnldKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZEF1dGhvckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb21wYW55KSAmJiBjb21wYW55LmluY2x1ZGVzKFwi5qCq5byP5Lya56S+54aK6LC357WEXCIpIHx8IGNvbXBhbnkgPT09IFwi5qCq5byP5Lya56S+54aK6LC357WEXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBwcm9taXNlcyA9ICh0b3BpYyB8fCBbXCJkZWZhdWx0X3RvcGljXCJdKS5tYXAoYXN5bmMgKHRvcGljSWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF1dGhvclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0b3BpY0lkfS9wZXJzb25hL2t1bWFnYWlfdG9waWNfYXV0aG9yLmpzb25gO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhdXRob3JQYXRoKTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDokZfogIXjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgavlpLHmlZc6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g5bm05bqm44Go44Oa44Or44K944OK44Gu5a++5b+c44Oe44OD44OXXG4gICAgICAgICAgICBjb25zdCB5ZWFyVG9QZXJzb25hID0ge1xuICAgICAgICAgICAgICBcIjIwMjFcIjogXCIxXCIsXG4gICAgICAgICAgICAgIFwiMjAxOVwiOiBcIjJcIixcbiAgICAgICAgICAgICAgXCIyMDE3XCI6IFwiM1wiLFxuICAgICAgICAgICAgICBcIjIwMTVcIjogXCI0XCIsXG4gICAgICAgICAgICAgIFwiMjAxM1wiOiBcIjVcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g5ZCE44Oa44Or44K944OK44Gu44OH44O844K/44KS5pW05b2iXG4gICAgICAgICAgICBjb25zdCBwZXJzb25hRGF0YSA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoeWVhclRvUGVyc29uYSkuZm9yRWFjaCgoW3llYXIsIHBlcnNvbmFOdW1dKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHllYXJEYXRhID0gZGF0YVt5ZWFyXSB8fCB7fTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIOepuuOBruOCquODluOCuOOCp+OCr+ODiOOBi+OBqeOBhuOBi+OCkuODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoeWVhckRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBlcnNvbmFEYXRhW2BwZXJzb25hXyR7cGVyc29uYU51bX1gXSA9IHtcbiAgICAgICAgICAgICAgICAgIGF1dGhvcnM6ICflh7rpoZjogIXjgarjgZcnLFxuICAgICAgICAgICAgICAgICAgeWVhcjogeWVhclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g44OH44O844K/44GM44GC44KL5aC05ZCI44Gv5LiK5L2NNeS7tuOCkuWPluW+l1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcEF1dGhvcnMgPSBPYmplY3QuZW50cmllcyh5ZWFyRGF0YSlcbiAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICAgICAgICAgICAgLm1hcCgoW2F1dGhvciwgY291bnRdKSA9PiBgJHthdXRob3J9KCR7Y291bnR95Lu2KWApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHBlcnNvbmFEYXRhW2BwZXJzb25hXyR7cGVyc29uYU51bX1gXSA9IHtcbiAgICAgICAgICAgICAgICAgIGF1dGhvcnM6IHRvcEF1dGhvcnMuam9pbignLCAnKSxcbiAgICAgICAgICAgICAgICAgIHllYXI6IHllYXJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHsgdG9waWNJZCwgZGF0YTogcGVyc29uYURhdGEgfTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgICAgY29uc3QgYXV0aG9yRGF0YU1hcCA9IHt9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaCgoeyB0b3BpY0lkLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGF1dGhvckRhdGFNYXBbdG9waWNJZF0gPSBkYXRhO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgIHNldEF1dGhvckRhdGEoYXV0aG9yRGF0YU1hcCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIuiRl+iAheODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxvYWRBdXRob3JEYXRhKCk7XG4gIH0sIFtjb21wYW55LCB0b3BpY10pO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXBkYXRlICYmIHByZXBhcmVkRGF0YSkge1xuICAgICAgY29uc3QgcGxvdERhdGEgPSBwcmVwYXJlZERhdGEuc2VhcmNoTGlzdC5tYXAoKGssIGopID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRvcGljID0gdG9waWNbal07XG4gICAgICAgIGNvbnN0IHBlcnNvbmFUb1llYXIgPSB7XG4gICAgICAgICAgXCIxXCI6IFwiMjAyMVwiLFxuICAgICAgICAgIFwiMlwiOiBcIjIwMTlcIixcbiAgICAgICAgICBcIjNcIjogXCIyMDE3XCIsXG4gICAgICAgICAgXCI0XCI6IFwiMjAxNVwiLFxuICAgICAgICAgIFwiNVwiOiBcIjIwMTNcIlxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhvdmVyVGV4dHMgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXS5tYXAoKG51bSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHllYXJUZXh0ID0gYCR7cGVyc29uYVRvWWVhcltudW1dfeW5tGA7XG4gICAgICAgICAgaWYgKGsgPT09IFwi5qCq5byP5Lya56S+54aK6LC357WEXCIgJiYgYXV0aG9yRGF0YVtjdXJyZW50VG9waWNdICYmIGF1dGhvckRhdGFbY3VycmVudFRvcGljXVtgcGVyc29uYV8ke251bX1gXSkge1xuICAgICAgICAgICAgY29uc3QgYXV0aG9ySW5mbyA9IGF1dGhvckRhdGFbY3VycmVudFRvcGljXVtgcGVyc29uYV8ke251bX1gXTtcbiAgICAgICAgICAgIHJldHVybiBgKCR7eWVhclRleHR9KTxicj7okZfogIU6ICR7YXV0aG9ySW5mby5hdXRob3JzfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgICgke3llYXJUZXh0fSlgO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXSxcbiAgICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXSxcbiAgICAgICAgICBtb2RlOiBcImxpbmVzK21hcmtlcnMrdGV4dFwiLFxuICAgICAgICAgIHRleHQ6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdLFxuICAgICAgICAgIHRleHRwb3NpdGlvbjogXCJ0b3AgbGVmdFwiLFxuICAgICAgICAgIGhvdmVydGV4dDogaG92ZXJUZXh0cyxcbiAgICAgICAgICBob3ZlcmluZm86IFwidGV4dFwiLFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMTIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgY29sb3I6IGNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY1tqXV1dLFxuICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IElkdG9Ub3BpY1t0b3BpY1tqXV0sXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICBcblxuICAgICAgY29uc3QgcGxvdEFubm90YXRpb25zID0gcHJlcGFyZWREYXRhLnNlYXJjaExpc3QuZmxhdE1hcCgoaywgaikgPT5cbiAgICAgICAgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgICAgeDogcHJlcGFyZWREYXRhLmFscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXVtpICsgMV0sXG4gICAgICAgICAgeHJlZjogJ3gnLFxuICAgICAgICAgIHlyZWY6ICd5JyxcbiAgICAgICAgICBheHJlZjogJ3gnLFxuICAgICAgICAgIGF5cmVmOiAneScsXG4gICAgICAgICAgYXg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXVtpXSxcbiAgICAgICAgICBheTogcHJlcGFyZWREYXRhLmJldGFbal1baV0sXG4gICAgICAgICAgYXJyb3djb2xvcjpjb2xvcm1hcFtJZHRvVG9waWNbdG9waWNbal1dXSxcbiAgICAgICAgICBhcnJvd3NpemU6IDEuMixcbiAgICAgICAgICBhcnJvd3dpZHRoOiAxLjIsXG4gICAgICAgICAgYXJyb3doZWFkOiA1LFxuICAgICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgICAgfSkpXG4gICAgICApO1xuXG4gICAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG5cbiAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCBwcmVwYXJlZERhdGEsIGF1dGhvckRhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgIHN0eWxlPXt7IHdpZHRoOicxMDB2aCcgLGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgICB5OiAxLjgsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgorkvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMS41LFxuICAgICAgICAgICAgICB5OiAxLjgsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgormnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgICB5OiAwLjIsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/kvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMS41LFxuICAgICAgICAgICAgICB5OiAwLjIsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/mnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFswLjEsIDEuOV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMC4xLCAxLCAxLjldLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6MjUsICAgLy8gWei7uOOBi+OCieOBrui3nembou+8iOimi+OChOOBmeOBj+OBmeOCi+OBn+OCge+8iVxuICAgICAgICAgICAgcmFuZ2U6IFswLjEsIDEuOV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMC4xLCAxLCAxLjldLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogMjUsIGI6IDE1LCBsOiAxNSwgcjogMjAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhvdmVyZGlzdGFuY2U6IDEwMCxcbiAgICAgICAgICBob3Zlcm1vZGU6ICd4IHVuaWZpZWQnLFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIG5hbWVsZW5ndGg6IC0xICAvLyDlkI3liY3jga7plbfjgZXliLbpmZDjgpLop6PpmaRcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgXG4gICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2UgIC8vIOODhOODvOODq+ODkOODvOOCkumdnuihqOekuuOBq1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjJ2aFwiLCB3aWR0aDogXCIxMDB2aFwiLCBoZWlnaHQ6IFwiNDV2aFwiIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBlcnNvbkNvbXA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuY29uc3QgY29sb3JtYXAgPSB7J+m5v+WztuW7uuioreagquW8j+S8muekvic6J3JnYigyMjksIDEzNCwgNiknLCBcIuagquW8j+S8muekvuWkp+ael+e1hFwiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi5riF5rC05bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgXCLlpKfmiJDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDE1MywgMjAxLCA2OSknLCBcIuagquW8j+S8muekvuerueS4reW3peWLmeW6l1wiOidyZ2IoMjA0LCA5NywgMTc2KScsIFwi5qCq5byP5Lya56S+6ZW36LC35bel44Kz44O844Od44Os44O844K344On44OzXCI6J3JnYigzNiwgMTIxLCAxMDgpJywgXG4gIFwi5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+XCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuS6lOa0i+W7uuioreagquW8j+S8muekvlwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5qCq5byP5Lya56S+44OV44K444K/XCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gIFwi5oi455Sw5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYigyMzcsIDEwMCwgOTApJywgXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIjoncmdiKDE2NSwgMTcwLCAxNTMpJ307XG5cbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgbG9hZENvbXBhbmllcyA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgdG9MaXN0ID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuXG4gICAgY29uc3QgYWxwaGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgY29uc3QgYmV0YV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMV0pKTtcblxuICAgIHJldHVybiB7IGFscGhhX2xpLCBiZXRhX2xpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGFscGhhX2xpOiBbXSwgYmV0YV9saTogW10gfTtcbiAgfVxufTtcblxuY29uc3QgUGxvdFBlcnNvblRvcGljID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCwgb25DbGlja0RhdGF9KSA9PiB7XG4gIGNvbnN0IGFycm93X2NvbG9yID0gWycjRTI0RTQyJywgJyNFOUIwMDAnLCAnI0VCNkU4MCcsICcjOUI3RURFJywgJyM2M0QyRkYnXTtcbiAgY29uc3QgW2ZpZ0RhdGEsIHNldEZpZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYW5ub3RhdGlvbnMsIHNldEFubm90YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NvbXBhbnlMaXN0LCBzZXRDb21wYW55TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hMaXN0LCBzZXRTZWFyY2hMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2F1dGhvckRhdGEsIHNldEF1dGhvckRhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIixcbiAgICBcIjE1XCI6XCLnhafmmI7jgrfjgrnjg4bjg6BcIixcIjE3XCI6XCLlo4HpnaLnt5HljJZcIn07XG5cbiAgLy8g5Yid5pyf44OH44O844K/44Gu44Ot44O844OJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG5cbiAgICAgIGxvYWRDb21wYW5pZXMoY29sdW1uUGF0aCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDb21wYW55TGlzdChkYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYOalreeVjOWGheOBp+OBruS8gealreOBrueri+OBoeS9jee9rmApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWNdKTtcblxuICAvLyDmpJzntKLlr77osaHjga7jg5XjgqPjg6vjgr/jg6rjg7PjgrBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29tcGFueUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29tcGFueURpY3QgPSBjb21wYW55TGlzdC5yZWR1Y2UoKGFjYywgdmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICBzZXRTZWFyY2hMaXN0KG5ld1NlYXJjaExpc3QuZmlsdGVyKHZhbHVlID0+IHZhbHVlIGluIGNvbXBhbnlEaWN0KSk7XG4gICAgfVxuICB9LCBbY29tcGFueUxpc3QsIGNvbXBhbnldKTtcblxuICAvLyDokZfogIXjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovmlrDjgZfjgYR1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQXV0aG9yRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbXBhbnkpICYmIGNvbXBhbnkuaW5jbHVkZXMoXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIikgfHwgY29tcGFueSA9PT0gXCLmoKrlvI/kvJrnpL7nhorosLfntYRcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGF1dGhvclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0b3BpY30vcGVyc29uYS9rdW1hZ2FpX3RvcGljX2F1dGhvci5qc29uYDtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGF1dGhvclBhdGgpO1xuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg6JGX6ICF44OH44O844K/44Gu6Kqt44G/6L6844G/44Gr5aSx5pWXOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyDlubTluqbjgajjg5rjg6vjgr3jg4rjga7lr77lv5zjg57jg4Pjg5dcbiAgICAgICAgICBjb25zdCB5ZWFyVG9QZXJzb25hID0ge1xuICAgICAgICAgICAgXCIyMDIxXCI6IFwiMVwiLFxuICAgICAgICAgICAgXCIyMDE5XCI6IFwiMlwiLFxuICAgICAgICAgICAgXCIyMDE3XCI6IFwiM1wiLFxuICAgICAgICAgICAgXCIyMDE1XCI6IFwiNFwiLFxuICAgICAgICAgICAgXCIyMDEzXCI6IFwiNVwiXG4gICAgICAgICAgfTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyDlkITjg5rjg6vjgr3jg4rjga7jg4fjg7zjgr/jgpLmlbTlvaJcbiAgICAgICAgICBjb25zdCBwZXJzb25hRGF0YSA9IHt9O1xuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHllYXJUb1BlcnNvbmEpLmZvckVhY2goKFt5ZWFyLCBwZXJzb25hTnVtXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeWVhckRhdGEgPSBkYXRhW3llYXJdIHx8IHt9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDnqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgYvjganjgYbjgYvjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh5ZWFyRGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIHBlcnNvbmFEYXRhW2BwZXJzb25hXyR7cGVyc29uYU51bX1gXSA9IHtcbiAgICAgICAgICAgICAgICBhdXRob3JzOiAn5Ye66aGY6ICF44Gq44GXJyxcbiAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyDjg4fjg7zjgr/jgYzjgYLjgovloLTlkIjjga/kuIrkvY015Lu244KS5Y+W5b6XXG4gICAgICAgICAgICAgIGNvbnN0IHRvcEF1dGhvcnMgPSBPYmplY3QuZW50cmllcyh5ZWFyRGF0YSlcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgNSlcbiAgICAgICAgICAgICAgICAubWFwKChbYXV0aG9yLCBjb3VudF0pID0+IGAke2F1dGhvcn0oJHtjb3VudH3ku7YpYCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBwZXJzb25hRGF0YVtgcGVyc29uYV8ke3BlcnNvbmFOdW19YF0gPSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yczogdG9wQXV0aG9ycy5qb2luKCcsICcpLFxuICAgICAgICAgICAgICAgIHllYXI6IHllYXJcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBzZXRBdXRob3JEYXRhKHBlcnNvbmFEYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6JGX6ICF44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZEF1dGhvckRhdGEoKTtcbiAgfSwgW2NvbXBhbnksIHRvcGljXSk7XG5cbiAgLy8g44OH44O844K/44Gu5o+P55S7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZSAmJiBzZWFyY2hMaXN0Lmxlbmd0aCA+IDAgJiYgdG9waWMpIHtcbiAgICAgIGNvbnN0IHRhcmdldF9pZCA9IHRvcGljOyAvLyDjg4jjg5Tjg4Pjgq9JROOBruioreWumlxuICAgICAgY29uc3Qgbm9kZV9hbHBoYSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNlYXJjaExpc3QubGVuZ3RoIH0sICgpID0+IEFycmF5KDUpLmZpbGwoMCkpO1xuICAgICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG5cbiAgICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4gaSApLm1hcCgocCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9wZXJzb25hL3Rlc3Rfb3B0aW1pemVfJHtwKzF9LnR4dGA7XG4gICAgICAgIHJldHVybiB0b0xpc3QocGFyYW1ldGVyUGF0aCkudGhlbigoeyBhbHBoYV9saSwgYmV0YV9saSB9KSA9PiB7XG4gICAgICAgICAgc2VhcmNoTGlzdC5mb3JFYWNoKChrLCBqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW55TGlzdC5pbmRleE9mKGspO1xuICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwXSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICBub2RlX2JldGFbal1bcF0gPSBiZXRhX2xpW2lkeF07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGVyc29uYVRvWWVhciA9IHtcbiAgICAgICAgICBcIjFcIjogXCIyMDIxXCIsXG4gICAgICAgICAgXCIyXCI6IFwiMjAxOVwiLFxuICAgICAgICAgIFwiM1wiOiBcIjIwMTdcIixcbiAgICAgICAgICBcIjRcIjogXCIyMDE1XCIsXG4gICAgICAgICAgXCI1XCI6IFwiMjAxM1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGxvdERhdGEgPSBzZWFyY2hMaXN0Lm1hcCgoaywgaikgPT4ge1xuICAgICAgICAgIGNvbnN0IGhvdmVyVGV4dHMgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXS5tYXAoKG51bSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeWVhclRleHQgPSBgJHtwZXJzb25hVG9ZZWFyW251bV195bm0YDtcbiAgICAgICAgICAgIGlmIChrID09PSBcIuagquW8j+S8muekvueGiuiwt+e1hFwiICYmIGF1dGhvckRhdGFbYHBlcnNvbmFfJHtudW19YF0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGDjg5rjg6vjgr3jg4oke251bX0gKCR7eWVhclRleHR9KTxicj7okZfogIU6ICR7YXV0aG9yRGF0YVtgcGVyc29uYV8ke251bX1gXS5hdXRob3JzfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYOODmuODq+OCveODiiR7bnVtfSAoJHt5ZWFyVGV4dH0pYDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBub2RlX2FscGhhW2pdLFxuICAgICAgICAgICAgeTogbm9kZV9iZXRhW2pdLFxuICAgICAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgICAgICAgIHRleHQ6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdLFxuICAgICAgICAgICAgdGV4dHBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgICAgICAgICBob3ZlcnRleHQ6IGhvdmVyVGV4dHMsXG4gICAgICAgICAgICBob3ZlcmluZm86IFwidGV4dFwiLFxuICAgICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICBib3JkZXJjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDEyIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgY29sb3I6IGNvbG9ybWFwW2tdLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hbWU6IGssXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcGxvdEFubm90YXRpb25zID0gc2VhcmNoTGlzdC5mbGF0TWFwKChrLCBqKSA9PlxuICAgICAgICAgIEFycmF5KDQpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgICAgICAgICAgeDogbm9kZV9hbHBoYVtqXVtpICsgMV0sXG4gICAgICAgICAgICB5OiBub2RlX2JldGFbal1baSArIDFdLFxuICAgICAgICAgICAgeHJlZjogJ3gnLFxuICAgICAgICAgICAgeXJlZjogJ3knLFxuICAgICAgICAgICAgYXg6IG5vZGVfYWxwaGFbal1baV0sXG4gICAgICAgICAgICBheTogbm9kZV9iZXRhW2pdW2ldLFxuICAgICAgICAgICAgYXhyZWY6ICd4JyxcbiAgICAgICAgICAgIGF5cmVmOiAneScsXG4gICAgICAgICAgICBhcnJvd2NvbG9yOiBjb2xvcm1hcFtrXSxcbiAgICAgICAgICAgIGFycm93c2l6ZTogMS4yLFxuICAgICAgICAgICAgYXJyb3d3aWR0aDogMS4yLFxuICAgICAgICAgICAgYXJyb3doZWFkOiA1LFxuICAgICAgICAgICAgc2hvd2Fycm93OiB0cnVlLFxuICAgICAgICAgIH0pKVxuICAgICAgICApO1xuXG4gICAgICAgIHNldEZpZ0RhdGEocGxvdERhdGEpO1xuICAgICAgICBzZXRBbm5vdGF0aW9ucyhwbG90QW5ub3RhdGlvbnMpO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCBzZWFyY2hMaXN0LCBjb21wYW55TGlzdCwgdG9waWMsIGF1dGhvckRhdGFdKTtcblxuICBjb25zdCBoYW5kbGVQZXJzb25hQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRzICYmIGV2ZW50LnBvaW50c1swXSkge1xuICAgIFxuICAgICAgY29uc29sZS5sb2coZXZlbnQucG9pbnRzWzBdW1wiZGF0YVwiXVtcIm5hbWVcIl0pXG4gICAgICBjb25zdCBjbGlja2RhdGEgPSBldmVudC5wb2ludHNbMF1bXCJkYXRhXCJdW1wibmFtZVwiXTsgLy8g44Kv44Oq44OD44Kv44GV44KM44Gf6YOo5YiG44Gu44Op44OZ44OrXG4gICAgICBvbkNsaWNrRGF0YShbY2xpY2tkYXRhXSk7IC8vIOimquOCs+ODs+ODneODvOODjeODs+ODiOOBq+ODqeODmeODq+OCkumAmuefpVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgIHN0eWxlPXt7IHdpZHRoOicxMDB2aCcgLGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbm5vdGF0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICAgIHk6IDEuOCxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuS8nee1seeahOOBquWIhumHjuOBq+WPluOCiue1hOOCk+OBp+OBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAxLjUsXG4gICAgICAgICAgICAgIHk6IDEuOCxcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOalreeVjOOCkuW8leOBo+W8teOCiuacquefpeOBruWIhumHjuOBq+aKleizh+OBl+OBpuOBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICAgIHk6IDAuMixcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOeLrOiHqui3r+e3muOCkumAsuOBv+S8nee1seeahOOBquWIhumHjuOBq+WPluOCiue1hOOCk+OBp+OBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAxLjUsXG4gICAgICAgICAgICAgIHk6IDAuMixcbiAgICAgICAgICAgICAgdGV4dDogJ++8iOeLrOiHqui3r+e3muOCkumAsuOBv+acquefpeOBruWIhumHjuOBq+aKleizh+OBl+OBpuOBhOOCi++8iScsXG4gICAgICAgICAgICAgIHNob3dhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICB4YW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgeWFuY2hvcjogJ21pZGRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG5cbiAgICAgICAgIFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi5paw6KaP5oCnXCIsXG4gICAgICAgICAgICByYW5nZTogWzAuMSwgMS45XSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlswLjEsIDEsIDEuOV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICB0aXRsZSA6IFwi6aCG5b+c5oCnXCIsXG4gICAgICAgICAgICB0aXRsZV9zdGFuZG9mZjoyNSwgICAvLyBZ6Lu444GL44KJ44Gu6Led6Zui77yI6KaL44KE44GZ44GP44GZ44KL44Gf44KB77yJXG4gICAgICAgICAgICByYW5nZTogWzAuMSwgMS45XSxcbiAgICAgICAgICAgIGxpbmVjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgZ3JpZGNvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRkYXNoOiAnZG90JyxcbiAgICAgICAgICAgIHRpY2ttb2RlOlwiYXJyYXlcIixcbiAgICAgICAgICAgIHRpY2t2YWxzOlswLjEsIDEsIDEuOV0sXG4gICAgICAgICAgICB0aWNrdGV4dDpbXCLkvY5cIiwgXCJcIiwgXCLpq5hcIl0sXG4gICAgICAgICAgICB6ZXJvbGluZTogZmFsc2UsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcmdpbjogeyB0OiAyNSwgYjogMTUsIGw6IDE1LCByOiAyMCB9LFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGJvcmRlcndpZHRoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaG92ZXJkaXN0YW5jZTogMTAwLFxuICAgICAgICAgIGhvdmVybW9kZTogJ3ggdW5pZmllZCcsXG4gICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgbmFtZWxlbmd0aDogLTFcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBjb25maWc9e3sgXG4gICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2VcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIydmhcIiwgd2lkdGg6IFwiMTAwdmhcIiwgaGVpZ2h0OiBcIjQ1dmhcIiB9fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQZXJzb25hQ2xpY2t9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBlcnNvblRvcGljO1xuIiwiLy8gU2lkZWJhci5qc3hcbmltcG9ydCBSZWFjdCAseyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENvbCwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgU2lkZWJhciA9ICh7IG9uQXBwbHksIHZpc3VhbFR5cGUsIG9uVmlzdWFsVHlwZUNoYW5nZSwgdG9waWNMaXN0LCBjb21wYW55TGlzdCwgc2VsZWN0ZWRDb21wYW5pZXMsIHNlbGVjdGVkVG9waWNzLCBvbkNoYW5nZVRvcGljLCBvbkNoYW5nZUNvbXBhbnkgfSkgPT4ge1xuICBjb25zdCBbaW5wdXRUeXBlLCBzZXRJbnB1dFR5cGVdID0gdXNlU3RhdGUoW1wicmFkaW9cIixcImNoZWNrYm94XCJdKTsgLy8g5Yid5pyf5YCk44GvIFwiY2hlY2tib3hcIlxuICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIG9uVmlzdWFsVHlwZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZT09XCJvbmUtY29tcFwiKXtcbiAgICAgICAgc2V0SW5wdXRUeXBlKFtcImNoZWNrYm94XCIsXCJyYWRpb1wiXSl9XG4gICAgICBlbHNle1xuICAgICAgICBzZXRJbnB1dFR5cGUoW1wicmFkaW9cIixcImNoZWNrYm94XCJdKVxuICAgICAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0VHlwZSk7XG4gIH07XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wiLFxuICAgIFwiMTVcIjpcIueFp+aYjuOCt+OCueODhuODoFwiLFwiMTdcIjpcIuWjgemdoue3keWMllwifTtcbiAgXG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgcGFkZGluZzogJzEwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdiZy1saWdodCcgfX0+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWRhbmdlciBmb250LWl0YWxpY1wiIHN0eWxlPXt7IGhlaWdodDogJzUlJyB9fT5cbiAgICAgICAgPENvbCBzbT17Nn0+XG4gICAgICAgICAgPGg1IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwJScgfX0gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktZW1waGFzaXNcIj5cbiAgICAgICAgICAgIOWPr+imluWMluadoeS7tlxuICAgICAgICAgIDwvaDU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNtPXs0fT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpZD1cImFwcGx5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQXBwbHl9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNSUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZSByb3VuZGVkLXBpbGwgYmctZGFya1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg5Y+v6KaW5YyWXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIHsvKiBBY2NvcmRpb24gKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHRleHQtZGFuZ2VyIFwiIHN0eWxlPXt7IGhlaWdodDogJzgwJScgfX0+XG4gICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIiBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgey8qIFZpc3VhbGl6YXRpb24gVHlwZSAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIwXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPuWPr+imluWMluOCv+OCpOODlzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBpZCA9IFwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uZS1jb21wXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBteC0yXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPjHnpL7jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc3VhbF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wifSAvLyDjg4fjg5Xjgqnjg6vjg4jjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwib25lLXRvcGljXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXgtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID4x44OI44OU44OD44Kv44Gr5rOo55uuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cbiAgICAgICAgICB7LyogVG9waWMgU2VsZWN0aW9uICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjFcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+VG9waWM8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIHt0b3BpY0xpc3QubWFwKCh0b3BpYykgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0b3BpY30+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aW5wdXRUeXBlWzBdfSBcbiAgICAgICAgICAgICAgICAgICAgaWQgPSB7dG9waWN9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkVG9waWNzLmluY2x1ZGVzKHRvcGljKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlVG9waWModG9waWMsaW5wdXRUeXBlWzBdKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dG9waWN9PntJZHRvVG9waWNbdG9waWNdfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG4gICAgICAgICAgey8qIENvbXBhbnkgU2VsZWN0aW9uICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjJcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+Q29tcGFueTwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAge2NvbXBhbnlMaXN0Lm1hcCgoY29tcGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb21wYW55fT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dFR5cGVbMV19IFxuICAgICAgICAgICAgICAgICAgICBpZCA9IHtjb21wYW55fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENvbXBhbmllcy5pbmNsdWRlcyhjb21wYW55KX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlQ29tcGFueShjb21wYW55LGlucHV0VHlwZVsxXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnknXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2NvbXBhbnl9Pntjb21wYW55fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuXG5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/lj5blvpfplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RCYXJDaGFydEIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBjbGlja2RhdGEsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiRknjga7liIbluINcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDU7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gY2xpY2tkYXRhIHx8IHRvcGljWzBdIHx8IFwiZGVmYXVsdF90b3BpY1wiOyAvLyBgY2xpY2tkYXRhYOOCkuWEquWFiFxuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3RyZW5kL291dHB1dF8ke3RpbWV9Lmpzb25gO1xuICAgICAgICBjb25zdCBjb21wYW55UGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldElkfS9zZXR0aW5nL2NvbXBhbnkudHh0YDtcbiAgICAgICAgY29uc3QgZmlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS9maV9zdWJjbGFzc19zcGxpdC5qc29uYDtcbiAgICAgICAgLy8g44OH44O844K/44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IFtvcmlnaW5hbCwgY29tcGFueUxpc3QsIGZpTGlzdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKHBhdGgpLFxuICAgICAgICAgIGxvYWRDb21wYW5pZXMoY29tcGFueVBhdGgpLFxuICAgICAgICAgIGZldGNoRGF0YShmaVBhdGgpLFxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoIWNvbXBhbnlMaXN0LmluY2x1ZGVzKGNvbXBhbnlbMF0pKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBDb21wYW55IFwiJHtjb21wYW55WzBdfVwiIG5vdCBmb3VuZC5gKTtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbXBhbnnjga7jg4fjg7zjgr/lj5blvpdcbiAgICAgICAgY29uc3QgY29tcGFueUluZGV4ID0gY29tcGFueUxpc3QuaW5kZXhPZihjb21wYW55WzBdKTtcbiAgICAgICAgY29uc3QgY29tcGFueURhdGEgPSBvcmlnaW5hbFtjb21wYW55SW5kZXhdO1xuICAgICAgICBpZiAoIWNvbXBhbnlEYXRhKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBObyBkYXRhIGZvdW5kIGZvciBjb21wYW55IGluZGV4IFwiJHtjb21wYW55SW5kZXh9XCIuYCk7XG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKU09O44OH44O844K/44Gu5pW05b2iXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBPYmplY3QuZW50cmllcyhjb21wYW55RGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgY2F0ZWdvcnk6IGtleSxcbiAgICAgICAgICB2YWx1ZToga2V5ID09PSBcIlwiID8gMCA6IHBhcnNlRmxvYXQodmFsdWUpICogMTAwIHx8MCwgLy8g5YCk44KS5pWw5YCk44Gr5aSJ5o+b77yI44Gq44GE5aC05ZCI44GvMO+8iVxuICAgICAgICAgIHN1bW1hcml6ZTogZmlMaXN0W2tleV0sXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLpmY3poIbjgavjgr3jg7zjg4jjgZfjgabkuIrkvY0xMOS7tuOCkuWPluW+l1xuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZm9ybWF0dGVkRGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7Y29tcGFueVswXX3jga5GSeOBruWIhuW4g2ApO1xuICAgICAgICBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBgY2xpY2tkYXRhYOOBruWApOOBjOWkieWMluOBl+OBn+OBi+OCkuaYjuekuueahOOBq+avlOi8g1xuICAgIGlmIChcbiAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiAmJlxuICAgICAgKHVwZGF0ZSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwIHx8IGNsaWNrZGF0YSlcbiAgICApIHtcbiAgICAgIGxvYWRDaGFydERhdGEoKTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgSlNPTi5zdHJpbmdpZnkoY2xpY2tkYXRhKSwgdXBkYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLCAvLyDmqKrlkJHjgY3mo5LjgrDjg6njg5XnlKjjga7lgKTvvIjpgIbpoIbvvIlcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSwgLy8g44Kr44OG44K044Oq77yI6YCG6aCG77yJXG4gICAgICAgICAgICBjdXN0b21kYXRhOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnN1bW1hcml6ZSkucmV2ZXJzZSgpLCAvLyBzdW1tYXJpemUg44KSIGN1c3RvbWRhdGEg44Gr5rih44GZXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsIC8vIOaoquWQkeOBjeajkuOCsOODqeODlVxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sIC8vIOajkuOBruiJslxuICAgICAgICAgICAgaG92ZXJ0ZW1wbGF0ZTpcbiAgICAgICAgICAgIGDoqqzmmI46ICV7Y3VzdG9tZGF0YX08YnI+JTogJXt4Oi4yZn0lIDxleHRyYT48L2V4dHJhPmAsIC8vIGN1c3RvbWRhdGEg44KS5Y+C54WnXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aWNrc3VmZml4OiBcIiAlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbGluZWNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogXCJGSVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA0MCwgYjogMzUsIGw6IDgwLCByOiA1MCB9LFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIGFsaWduOlwibGVmdFwiLFxuICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICBzaXplOiAxMSwgLy8g44OE44O844Or44OB44OD44OX44Gu44OV44Kp44Oz44OI44K144Kk44K6XG4gICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsIC8vIOODleOCqeODs+ODiOOBruiJslxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJnY29sb3I6IFwibGlnaHR5ZWxsb3dcIiwgLy8g44OE44O844Or44OB44OD44OX44Gu6IOM5pmv6ImyXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJncmF5XCIsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruaeoOe3muiJslxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG5cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbi8vIOODh+ODvOOCv+WPluW+l+mWouaVsFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cblxuXG5jb25zdCBQbG90QmFyQ2hhcnRBID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJGSeOBruWIhuW4gyFcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ2hhcnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZSA9IDU7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gdG9waWNbMF07IC8vIGNsaWNrZGF0YeOCkuWEquWFiFxuICAgICAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3RyZW5kL291dHB1dF90b3BpY18ke3RpbWV9Lmpzb25gO1xuICAgICAgICBjb25zdCBmaVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2ZpX3N1YmNsYXNzX3NwbGl0Lmpzb25gO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkuWPluW+l1xuICAgICAgICBjb25zdCBbb3JpZ2luYWwsIGZpTGlzdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZmV0Y2hEYXRhKHBhdGgpLFxuICAgICAgICAgIGZldGNoRGF0YShmaVBhdGgpLFxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImFcIixvcmlnaW5hbCk7XG4gXG5cbiAgICAgICAgLy8gSlNPTuODh+ODvOOCv+OBruaVtOW9olxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gT2JqZWN0LmVudHJpZXMob3JpZ2luYWwpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgIFxuICAgICAgICAgIGNhdGVnb3J5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IGtleSA9PT0gXCJcIiA/IDAgOiBwYXJzZUZsb2F0KHZhbHVlKSAqIDEwMCB8fCAwLCBcbiAgICAgICAgICBzdW1tYXJpemU6IGZpTGlzdFtrZXldLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYVwiLGZvcm1hdHRlZERhdGEpO1xuXG5cbiAgICAgICAgLy8g44OH44O844K/44KS6ZmN6aCG44Gr44K944O844OI44GX44Gm5LiK5L2NMTDku7bjgpLlj5blvpdcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGZvcm1hdHRlZERhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpXG4gICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICBzZXRDaGFydERhdGEoc29ydGVkRGF0YSk7XG4gICAgICAgIHNldFRpdGxlKGBGSeOBruWIhuW4g2ApO1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFydERhdGEpO1xuICAgICAgICBvblJlbmRlcmVkKCk7IC8vIOaPj+eUu+WujOS6huOCkumAmuefpVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiAmJiAodXBkYXRlIHx8IGNoYXJ0RGF0YS5sZW5ndGggPT09IDAgKSkge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCB1cGRhdGVdKTsgLy8gY2xpY2tkYXRhIOOCkuS+neWtmOmWouS/guOBq+i/veWKoFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMlXCIsbWFyZ2luQm90dG9tOlwiMyVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTQlXCIgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgIHg6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIHk6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpLnJldmVyc2UoKSxcbiAgICAgICAgICAgIGN1c3RvbWRhdGE6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3VtbWFyaXplKS5yZXZlcnNlKCksIC8vIHN1bW1hcml6ZSDjgpIgY3VzdG9tZGF0YSDjgavmuKHjgZlcblxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaFwiLFxuICAgICAgICAgICAgbWFya2VyOiB7IGNvbG9yOiBcInJveWFsYmx1ZVwiIH0sXG4gICAgICAgICAgICBob3ZlcnRlbXBsYXRlOlxuICAgICAgICAgICAgYOiqrOaYjjogJXtjdXN0b21kYXRhfTxicj4lOiAle3g6LjJmfSUgPGV4dHJhPjwvZXh0cmE+YCwgLy8gY3VzdG9tZGF0YSDjgpLlj4LnhadcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpY2tzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkZJXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiAzNSwgbDogODAsIHI6IDUwIH0sXG4gICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgYWxpZ246XCJsZWZ0XCIsXG4gICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgIHNpemU6IDExLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7jg5Xjgqnjg7Pjg4jjgrXjgqTjgrpcbiAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIiwgLy8g44OV44Kp44Oz44OI44Gu6ImyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmdjb2xvcjogXCJsaWdodHllbGxvd1wiLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7og4zmma/oibJcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcImdyYXlcIiwgLy8g44OE44O844Or44OB44OD44OX44Gu5p6g57ea6ImyXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cblxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdEJhckNoYXJ0QTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteV9hcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbXlfYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hdXRoMF9hdXRoMC1yZWFjdF9kaXN0X2F1dGgwLXJlYWN0X2VzbV9qcy1ub2RlX21vZHVsZXNfcmVhY3QtYm9vdHN0cmFwX2UtOTRkNWYwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIlNpZGViYXIiLCJDb250ZW50IiwidXNlQXV0aDAiLCJBcHAiLCJsb2dpbldpdGhSZWRpcmVjdCIsImxvZ291dCIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUxvZ2luIiwiY29ubmVjdGlvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJhcnJvd0NvbG9yIiwiY29tcGFueUxpc3QiLCJ0b3BpY0xpc3QiLCJ2aXN1YWxUeXBlIiwic2V0VmlzdWFsVHlwZSIsImlzQXBwbGllZCIsInNldElzQXBwbGllZCIsInNlbGVjdGVkQ29tcGFuaWVzIiwic2V0U2VsZWN0ZWRDb21wYW5pZXMiLCJzZWxlY3RlZFRvcGljcyIsInNldFNlbGVjdGVkVG9waWNzIiwiaGFuZGxlVmlzdWFsVHlwZUNoYW5nZSIsInZhbHVlIiwiaGFuZGxlQXBwbHkiLCJ0b2dnbGVTZWxlY3Rpb24iLCJpdGVtIiwic2V0U2VsZWN0ZWQiLCJidXR0b210eXBlIiwicHJldlNlbGVjdGVkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpIiwiQ29tcGFueUNoZWNrYm94Q2hhbmdlIiwiY29tcGFueSIsIlRvcGljQ2hlY2tib3hDaGFuZ2UiLCJ0b3BpYyIsInJlc2V0SXNBcHBsaWVkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZmx1aWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiRnJhZ21lbnQiLCJtZCIsIm9uQXBwbHkiLCJvblZpc3VhbFR5cGVDaGFuZ2UiLCJvbkNoYW5nZVRvcGljIiwib25DaGFuZ2VDb21wYW55Iiwic3R5bGUiLCJoZWlnaHQiLCJwbG90IiwicmVzZXRBcHBseSIsIkNhcmQiLCJQbG90UGllQSIsIlBsb3RQaWVCIiwiUGxvdFBlcnNvbmFDb21wIiwiUGxvdFBlcnNvbmFUb3BpYyIsIlBsb3RCYXJDaGFydEEiLCJQbG90QmFyQ2hhcnRCIiwiUHJvcG9zZWREYXRhIiwiZ2V0Q2FyZERhdGEiLCJQcm9wb3NlZFZpc3VhbGl6ZSIsIl9yZWYiLCJjbGlja0RhdGEiLCJzZXRDbGlja0RhdGEiLCJjbGlja0NvbXBhbnlEYXRhIiwic2V0Q2xpY2tDb21wYW55RGF0YSIsImhhbmRsZVBpZUNoYXJ0Q2xpY2siLCJkYXRhIiwibG9nIiwiaGFuZGxlUGVyc29uYUNsaWNrIiwiY2FyZERhdGEiLCJzZXRDYXJkRGF0YSIsInVwZGF0ZSIsIm9uUmVuZGVyZWQiLCJvbkNsaWNrRGF0YSIsImxheW91dCIsInRpdGxlIiwid2lkdGgiLCJjb25maWciLCJyZXNwb25zaXZlIiwiY2xpY2tkYXRhIiwicHJvcG9zZWREYXRhIiwic2V0UHJvcG9zZWREYXRhIiwic2V0RXJyb3IiLCJmZXRjaERhdGEiLCJkYXRhUGF0aCIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJqc29uRGF0YSIsImpzb24iLCJjb21wYW55RGF0YSIsIndhcm4iLCJ0b3BpY0RhdGEiLCJlcnIiLCJyZW5kZXJDYXJkIiwiZGlyZWN0aW9uIiwidmFsdWVzIiwibGFiZWwiLCJiYXNlQ29sb3JNYXAiLCJ1cHJpZ2h0IiwidXBsZWZ0IiwiZG93bnJpZ2h0IiwiZG93bmxlZnQiLCJiYXNlQ29sb3IiLCJjYXJkQWxwaGEiLCJjYXJkQmFja2dyb3VuZENvbG9yIiwicmVwbGFjZSIsIk1hdGgiLCJtaW4iLCJrZXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJCb2R5IiwiVGl0bGUiLCJzbGljZSIsIm1hcCIsImluZGV4IiwiYWxwaGEiLCJpdGVtQmFja2dyb3VuZENvbG9yIiwibWF4IiwiSGVhZGVyIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJSZWFjdERPTSIsIkF1dGgwUHJvdmlkZXIiLCJkb21haW4iLCJjbGllbnRJZCIsInJlbmRlciIsIlN0cmljdE1vZGUiLCJhdXRob3JpemF0aW9uUGFyYW1zIiwicmVkaXJlY3RfdXJpIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZVJlZiIsIlBsb3QiLCJjb2xvcm1hcCIsInVybCIsInN0YXR1cyIsImNvbnRlbnRUeXBlIiwiaGVhZGVycyIsImdldCIsInRleHQiLCJzcGxpdCIsImxpbmUiLCJ0cmltIiwicHJvY2Vzc1NwYXJzZURhdGEiLCJzcGFyc2VEYXRhIiwibnVtUm93cyIsImVudHJ5Iiwicm93IiwibnVtQ29scyIsImNvbCIsIm1hdHJpeCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImZpbGwiLCJmb3JFYWNoIiwicmVkdWNlIiwic3VtIiwiX3JlZjIiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJzZXRUaXRsZSIsImFsbFRvcGljIiwiSWR0b1RvcGljIiwiVG9waWN0b0lkIiwiZGF0YUNhY2hlIiwiY29tcGFuaWVzIiwibG9hZERhdGEiLCJhbGxUb3BpY3NEYXRhIiwiUHJvbWlzZSIsImFsbCIsInRhcmdldF9pZCIsInRpbWUiLCJjb21wYW55VXJsIiwic3BhcnNlRGF0YVVybCIsImN1cnJlbnQiLCJub3JtYWxpemVTdHJpbmciLCJzdHIiLCJub3JtYWxpemUiLCJzYW5pdGl6ZWRDb21wYW5pZXMiLCJzYW5pdGl6ZWRDb21wYW55Iiwicm93U3VtcyIsImNvbXBhbnlJbmRleCIsImluZGV4T2YiLCJmaWx0ZXJlZERhdGEiLCJ0b3RhbFZhbHVlIiwibm9ybWFsaXplZERhdGEiLCJjYXRlZ29yeSIsInNvcnQiLCJhIiwiYiIsImhhbmRsZVBsb3RDbGljayIsImV2ZW50IiwicG9pbnRzIiwidG9waWNpZCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInR5cGUiLCJsYWJlbHMiLCJTdHJpbmciLCJtYXJrZXIiLCJjb2xvcnMiLCJzaG93bGVnZW5kIiwicGxvdF9iZ2NvbG9yIiwicGFwZXJfYmdjb2xvciIsIm1hcmdpbiIsInQiLCJsIiwiciIsImZldGNoVGV4dERhdGEiLCJsb2FkQ2hhcnREYXRhIiwidGFyZ2V0SWQiLCJkYXRhVXJsIiwiY29sdW1uVXJsIiwic29ydGVkRGF0YSIsImxvYWRDb21wYW5pZXMiLCJ0b0xpc3QiLCJsaW5lcyIsImFscGhhX2xpIiwicGFyc2VGbG9hdCIsImJldGFfbGkiLCJQbG90UGVyc29uQ29tcCIsImFycm93X2NvbG9yIiwicHJlcGFyZWREYXRhIiwic2V0UHJlcGFyZWREYXRhIiwiZmlnRGF0YSIsInNldEZpZ0RhdGEiLCJhbm5vdGF0aW9ucyIsInNldEFubm90YXRpb25zIiwiYXV0aG9yRGF0YSIsInNldEF1dGhvckRhdGEiLCJwcmVwYXJlRGF0YSIsImFsbFByb21pc2VzIiwiY29sdW1uUGF0aCIsImNvbXBhbnlEaWN0IiwiYWNjIiwiaWR4IiwibmV3U2VhcmNoTGlzdCIsImlzQXJyYXkiLCJmaWx0ZXJlZFNlYXJjaExpc3QiLCJub2RlX2FscGhhIiwibm9kZV9iZXRhIiwicHJvbWlzZXMiLCJfIiwiaiIsInAiLCJwYXJhbWV0ZXJQYXRoIiwiayIsInJlc3VsdHMiLCJjb21iaW5lZEFscGhhIiwiZmxhdE1hcCIsInJlc3VsdCIsImNvbWJpbmVkQmV0YSIsImNvbWJpbmVkU2VhcmNoTGlzdCIsImJldGEiLCJzZWFyY2hMaXN0IiwibG9hZEF1dGhvckRhdGEiLCJ0b3BpY0lkIiwiYXV0aG9yUGF0aCIsInllYXJUb1BlcnNvbmEiLCJwZXJzb25hRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJ5ZWFyIiwicGVyc29uYU51bSIsInllYXJEYXRhIiwia2V5cyIsImF1dGhvcnMiLCJ0b3BBdXRob3JzIiwiX3JlZjMiLCJhdXRob3IiLCJjb3VudCIsImpvaW4iLCJhdXRob3JEYXRhTWFwIiwiX3JlZjQiLCJwbG90RGF0YSIsImN1cnJlbnRUb3BpYyIsInBlcnNvbmFUb1llYXIiLCJob3ZlclRleHRzIiwibnVtIiwieWVhclRleHQiLCJhdXRob3JJbmZvIiwieCIsInkiLCJtb2RlIiwidGV4dHBvc2l0aW9uIiwiaG92ZXJ0ZXh0IiwiaG92ZXJpbmZvIiwiaG92ZXJsYWJlbCIsImFsaWduIiwiYmdjb2xvciIsImJvcmRlcmNvbG9yIiwiZm9udCIsInNpemUiLCJzeW1ib2wiLCJuYW1lIiwicGxvdEFubm90YXRpb25zIiwieHJlZiIsInlyZWYiLCJheHJlZiIsImF5cmVmIiwiYXgiLCJheSIsImFycm93Y29sb3IiLCJhcnJvd3NpemUiLCJhcnJvd3dpZHRoIiwiYXJyb3doZWFkIiwic2hvd2Fycm93IiwieGFuY2hvciIsInlhbmNob3IiLCJ4YXhpcyIsInJhbmdlIiwibGluZWNvbG9yIiwibGluZXdpZHRoIiwiZ3JpZGNvbG9yIiwiZ3JpZHdpZHRoIiwiZ3JpZGRhc2giLCJ0aWNrbW9kZSIsInRpY2t2YWxzIiwidGlja3RleHQiLCJ6ZXJvbGluZSIsInlheGlzIiwidGl0bGVfc3RhbmRvZmYiLCJsZWdlbmQiLCJib3JkZXJ3aWR0aCIsImhvdmVyZGlzdGFuY2UiLCJob3Zlcm1vZGUiLCJuYW1lbGVuZ3RoIiwiZGlzcGxheU1vZGVCYXIiLCJQbG90UGVyc29uVG9waWMiLCJzZXRDb21wYW55TGlzdCIsInNldFNlYXJjaExpc3QiLCJ0aGVuIiwiQWNjb3JkaW9uIiwiQnV0dG9uIiwiaW5wdXRUeXBlIiwic2V0SW5wdXRUeXBlIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJ0YXJnZXQiLCJwYWRkaW5nIiwic20iLCJkZWZhdWx0QWN0aXZlS2V5IiwiSXRlbSIsImV2ZW50S2V5Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaHRtbEZvciIsImZvbnRTaXplIiwicGF0aCIsImNvbXBhbnlQYXRoIiwiZmlQYXRoIiwib3JpZ2luYWwiLCJmaUxpc3QiLCJmb3JtYXR0ZWREYXRhIiwic3VtbWFyaXplIiwiSlNPTiIsInN0cmluZ2lmeSIsInJldmVyc2UiLCJjdXN0b21kYXRhIiwib3JpZW50YXRpb24iLCJob3ZlcnRlbXBsYXRlIiwibWlycm9yIiwidGlja3N1ZmZpeCJdLCJzb3VyY2VSb290IjoiIn0=