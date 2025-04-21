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
  const topicList = ['0', '1', '2', '3', '5', '6', '7', '8', '9', '11', "15", "17", "13", "14", "16", "19", "23", "24", "31", "12", "10"];
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
    "31": "配管配送",
    "12": "基礎構造",
    "10": "建築設計",
    "5": "トンネル測量",
    "13": "電力管理",
    "16": "屋根構造",
    "14": "構造損傷",
    "24": "電磁波シールド",
    "19": "天井構造",
    "23": "音響検査",
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
    "配管配送": "31",
    "基礎構造": "12",
    "建築設計": "10",
    "トンネル測量": "5",
    "電力管理": "13",
    "屋根構造": "16",
    "照明システム": "15",
    "壁面緑化": "17",
    "構造損傷": "14",
    "電磁波シールド": "24",
    "天井構造": "19",
    "音響検査": "23"
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
    "31": "配管配送",
    "12": "基礎構造",
    "10": "建築設計",
    "5": "トンネル測量",
    "13": "電力管理",
    "16": "屋根構造",
    "14": "構造損傷",
    "24": "電磁波シールド",
    "19": "天井構造",
    "23": "音響検査",
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
    "31": "配管配送",
    "12": "基礎構造",
    "10": "建築設計",
    "5": "トンネル測量",
    "13": "電力管理",
    "16": "屋根構造",
    "14": "構造損傷",
    "24": "電磁波シールド",
    "19": "天井構造",
    "23": "音響検査",
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
    "31": "配管配送",
    "12": "基礎構造",
    "10": "建築設計",
    "5": "トンネル測量",
    "13": "電力管理",
    "16": "屋根構造",
    "14": "構造損傷",
    "24": "電磁波シールド",
    "19": "天井構造",
    "23": "音響検査",
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
    "31": "配管配送",
    "12": "基礎構造",
    "10": "建築設計",
    "5": "トンネル測量",
    "13": "電力管理",
    "16": "屋根構造",
    "14": "構造損傷",
    "24": "電磁波シールド",
    "19": "天井構造",
    "23": "音響検査",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yODBjNmNlZjA4Yzg0NjI4OTFiZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0c7QUFDbEI7QUFDQTtBQUNVO0FBRTlDLE1BQU1TLEdBQUcsR0FBR0EsQ0FBQSxLQUFNO0VBQ2hCLE1BQU07SUFBRUMsaUJBQWlCO0lBQUVDLE1BQU07SUFBRUMsZUFBZTtJQUFFQztFQUFLLENBQUMsR0FBR0wsNERBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN6RSxNQUFNLENBQUNNLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdkLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQzVDLE1BQU0sQ0FBQ2UsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBRTVDLE1BQU1pQixXQUFXLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO0lBQzlCLElBQUk7TUFDRixNQUFNUixpQkFBaUIsQ0FBQztRQUN0QlMsVUFBVSxFQUFFLGtDQUFrQztRQUM5Q0wsUUFBUTtRQUNSRTtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxPQUFPSSxLQUFLLEVBQUU7TUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFQSxLQUFLLENBQUNFLE9BQU8sQ0FBQztJQUMxQztFQUNGLENBQUM7RUFFRCxNQUFNQyxVQUFVLEdBQUcsQ0FDakIsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFDckQsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FDdEQ7RUFDRCxNQUFNQyxXQUFXLEdBQUcsQ0FDbEIsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUM3QyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUM1QyxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQzdDO0VBQ0QsTUFBTUMsU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUM7RUFFNUgsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHMUIsK0NBQVEsQ0FBQyxXQUFXLENBQUM7RUFDekQsTUFBTSxDQUFDMkIsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzVCLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0VBQzdDLE1BQU0sQ0FBQzZCLGlCQUFpQixFQUFFQyxvQkFBb0IsQ0FBQyxHQUFHOUIsK0NBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0VBQ3ZFLE1BQU0sQ0FBQytCLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR2hDLCtDQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUUzRCxNQUFNaUMsc0JBQXNCLEdBQUlDLEtBQUssSUFBSztJQUN4Q1IsYUFBYSxDQUFDUSxLQUFLLENBQUM7RUFDdEIsQ0FBQztFQUVELE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3hCUCxZQUFZLENBQUMsQ0FBQyxDQUFDO0VBQ2pCLENBQUM7RUFFRCxNQUFNUSxlQUFlLEdBQUdBLENBQUNDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEtBQUs7SUFDekQsSUFBSUEsVUFBVSxLQUFLLFVBQVUsRUFBRTtNQUM3QkQsV0FBVyxDQUFFRSxZQUFZLElBQ3ZCQSxZQUFZLENBQUNDLFFBQVEsQ0FBQ0osSUFBSSxDQUFDLEdBQ3ZCRyxZQUFZLENBQUNFLE1BQU0sQ0FBRUMsQ0FBQyxJQUFLQSxDQUFDLEtBQUtOLElBQUksQ0FBQyxHQUN0QyxDQUFDLEdBQUdHLFlBQVksRUFBRUgsSUFBSSxDQUM1QixDQUFDO0lBQ0gsQ0FBQyxNQUFNO01BQ0xDLFdBQVcsQ0FBQyxDQUFDRCxJQUFJLENBQUMsQ0FBQztJQUNyQjtFQUNGLENBQUM7RUFFRCxNQUFNTyxxQkFBcUIsR0FBR0EsQ0FBQ0MsT0FBTyxFQUFFTixVQUFVLEtBQUs7SUFDckRILGVBQWUsQ0FBQ1MsT0FBTyxFQUFFZixvQkFBb0IsRUFBRVMsVUFBVSxDQUFDO0VBQzVELENBQUM7RUFFRCxNQUFNTyxtQkFBbUIsR0FBR0EsQ0FBQ0MsS0FBSyxFQUFFUixVQUFVLEtBQUs7SUFDakRILGVBQWUsQ0FBQ1csS0FBSyxFQUFFZixpQkFBaUIsRUFBRU8sVUFBVSxDQUFDO0VBQ3ZELENBQUM7RUFFRHRDLGdEQUFTLENBQUMsTUFBTTtJQUNkNkIsb0JBQW9CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQ0UsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUMxQixDQUFDLEVBQUUsQ0FBQ1AsVUFBVSxDQUFDLENBQUM7RUFFaEIsTUFBTXVCLGNBQWMsR0FBR0EsQ0FBQSxLQUFNO0lBQzNCcEIsWUFBWSxDQUFDLENBQUMsQ0FBQztFQUNqQixDQUFDO0VBRUQsb0JBQ0U3QiwwREFBQSxDQUFDRyx1REFBUztJQUFDZ0QsRUFBRSxFQUFDLGVBQWU7SUFBQ0MsS0FBSztJQUFDQyxTQUFTLEVBQUM7RUFBVSxnQkFDdERyRCwwREFBQSxDQUFDSSx1REFBRyxRQUNELENBQUNRLGVBQWU7RUFBQTtFQUFLO0VBQ3BCWiwwREFBQSxDQUFDSyx1REFBRyxxQkFDRkwsMERBQUEsMkJBQ0VBLDBEQUFBLGFBQUksd0RBQWEsQ0FBQyxlQUNsQkEsMERBQUE7SUFBUXFELFNBQVMsRUFBQyxpQkFBaUI7SUFBQ0MsT0FBTyxFQUFFcEM7RUFBWSxHQUFDLDBCQUVsRCxDQUNMLENBQ0YsQ0FBQztFQUFBO0VBQ0Y7RUFDSmxCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUVFQSwwREFBQSxDQUFDSyx1REFBRztJQUFDbUQsRUFBRSxFQUFFLENBQUU7SUFBQ0gsU0FBUyxFQUFDO0VBQVksZ0JBQ2hDckQsMERBQUEsQ0FBQ00sb0RBQU87SUFDTm1ELE9BQU8sRUFBRXJCLFdBQVk7SUFDckJWLFVBQVUsRUFBRUEsVUFBVztJQUN2QmdDLGtCQUFrQixFQUFFeEIsc0JBQXVCO0lBQzNDVCxTQUFTLEVBQUVBLFNBQVU7SUFDckJELFdBQVcsRUFBRUEsV0FBWTtJQUN6Qk0saUJBQWlCLEVBQUVBLGlCQUFrQjtJQUNyQ0UsY0FBYyxFQUFFQSxjQUFlO0lBQy9CMkIsYUFBYSxFQUFFWixtQkFBb0I7SUFDbkNhLGVBQWUsRUFBRWY7RUFBc0IsQ0FDeEMsQ0FDRSxDQUFDLGVBR043QywwREFBQSxDQUFDSyx1REFBRztJQUFDbUQsRUFBRSxFQUFFLENBQUU7SUFBQ0gsU0FBUyxFQUFDLFlBQVk7SUFBQ1EsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFRO0VBQUUsZ0JBQzVEOUQsMERBQUEsQ0FBQ08sb0RBQU87SUFDTndELElBQUksRUFBRW5DLFNBQVU7SUFDaEJGLFVBQVUsRUFBRUEsVUFBVztJQUN2QnNCLEtBQUssRUFBRWhCLGNBQWU7SUFDdEJjLE9BQU8sRUFBRWhCLGlCQUFrQjtJQUMzQmtDLFVBQVUsRUFBRWY7RUFBZSxDQUM1QixDQUVFLENBQ0wsQ0FFRCxDQUNJLENBQUM7QUFFaEIsQ0FBQztBQUVELGlFQUFleEMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSCtCO0FBQ1c7QUFDeEI7QUFDUTtBQUNLO0FBQ0U7QUFFTDtBQUNEO0FBQ2lCLENBQUM7QUFDYjtBQU1sRCxNQUFNRixPQUFPLEdBQUdvRSxJQUFBLElBQWdEO0VBQUEsSUFBL0M7SUFBQ1osSUFBSTtJQUFDckMsVUFBVTtJQUFDc0IsS0FBSztJQUFDRixPQUFPO0lBQUNrQjtFQUFVLENBQUMsR0FBQVcsSUFBQTtFQUl2RCxNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUc1RSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlDLE1BQU0sQ0FBQzZFLGdCQUFnQixFQUFFQyxtQkFBbUIsQ0FBQyxHQUFHOUUsK0NBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFNUQsTUFBTStFLG1CQUFtQixHQUFJQyxJQUFJLElBQUs7SUFDcEM1RCxPQUFPLENBQUM2RCxHQUFHLENBQUMsYUFBYSxFQUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xDSixZQUFZLENBQUNJLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUNELE1BQU1FLGtCQUFrQixHQUFJRixJQUFJLElBQUs7SUFDbkM1RCxPQUFPLENBQUM2RCxHQUFHLENBQUMsYUFBYSxFQUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xDRixtQkFBbUIsQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUM3QixDQUFDO0VBRUQsTUFBTSxDQUFDRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHcEYsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFLOUMsb0JBRUVELDBEQUFBLENBQUNHLHVEQUFTO0lBQUNpRCxLQUFLO0lBQUNDLFNBQVMsRUFBQyxVQUFVO0lBQUNRLEtBQUssRUFBRTtNQUFFQyxNQUFNLEVBQUU7SUFBUTtFQUFFLGdCQUUvRDlELDBEQUFBLENBQUNJLHVEQUFHO0lBQUN5RCxLQUFLLEVBQUU7TUFBRUMsTUFBTSxFQUFFO0lBQU87RUFBRSxnQkFFN0I5RCwwREFBQSxDQUFDSyx3REFBRztJQUFDbUQsRUFBRSxFQUFFO0VBQUUsQ0FBTSxDQUFDLGVBQ2xCeEQsMERBQUEsQ0FBQ0ssd0RBQUc7SUFBQ21ELEVBQUUsRUFBRTtFQUFHLEdBR1Y5QixVQUFVLEtBQUssV0FBVyxnQkFDeEIxQiwwREFBQSxDQUFDcUUsMERBQWdCO0lBQ2ZpQixNQUFNLEVBQUV2QixJQUFLO0lBQ2JyQyxVQUFVLEVBQUVBLFVBQVc7SUFDdkJzQixLQUFLLEVBQUVBLEtBQU07SUFDYkYsT0FBTyxFQUFFQSxPQUFRO0lBQ2pCeUMsVUFBVSxFQUFFdkIsVUFBVztJQUN2QndCLFdBQVcsRUFBRUwsa0JBQW1CLENBQUM7SUFBQTtJQUNqQ00sTUFBTSxFQUFFO01BQ05DLEtBQUssRUFBRSxVQUFVO01BQ2pCQyxLQUFLLEVBQUUsTUFBTTtNQUNiN0IsTUFBTSxFQUFFO0lBQ1YsQ0FBRTtJQUNGOEIsTUFBTSxFQUFFO01BQUVDLFVBQVUsRUFBRTtJQUFLLENBQUUsQ0FBQztJQUFBO0lBQzlCaEMsS0FBSyxFQUFFO01BQUU4QixLQUFLLEVBQUUsTUFBTTtNQUFFN0IsTUFBTSxFQUFFO0lBQU8sQ0FBRSxDQUFDO0lBQUE7SUFDMUNULFNBQVMsRUFBQztFQUFVLENBQ3JCLENBQUMsR0FDQTNCLFVBQVUsS0FBSyxVQUFVLGdCQUMzQjFCLDBEQUFBLENBQUNvRSx5REFBZTtJQUNka0IsTUFBTSxFQUFFdkIsSUFBSztJQUNickMsVUFBVSxFQUFFQSxVQUFXO0lBQ3ZCc0IsS0FBSyxFQUFFQSxLQUFNO0lBQ2JGLE9BQU8sRUFBRUEsT0FBUTtJQUNqQnlDLFVBQVUsRUFBRXZCLFVBQVc7SUFDdkJ5QixNQUFNLEVBQUU7TUFDTkMsS0FBSyxFQUFFLFVBQVU7TUFDakJDLEtBQUssRUFBRSxNQUFNO01BQ2I3QixNQUFNLEVBQUU7SUFDVixDQUFFO0lBQ0Y4QixNQUFNLEVBQUU7TUFBRUMsVUFBVSxFQUFFO0lBQUssQ0FBRSxDQUFDO0lBQUE7SUFDOUJoQyxLQUFLLEVBQUU7TUFBRThCLEtBQUssRUFBRSxNQUFNO01BQUU3QixNQUFNLEVBQUU7SUFBTyxDQUFFLENBQUM7SUFBQTtJQUMxQ1QsU0FBUyxFQUFDO0VBQVUsQ0FDckIsQ0FBQyxnQkFFRnJELDBEQUFBLGNBQUssMEVBQWlCLENBSXJCLENBQUMsZUFHTkEsMERBQUEsQ0FBQ0ssd0RBQUc7SUFBQ21ELEVBQUUsRUFBRTtFQUFFLENBRVYsQ0FDRixDQUFDLGVBR0Z4RCwwREFBQSxDQUFDSSx1REFBRztJQUFDeUQsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFPO0VBQUUsZ0JBQzdCOUQsMERBQUEsQ0FBQ0ssd0RBQUc7SUFBQ21ELEVBQUUsRUFBRTtFQUFFLEdBRVQ5QixVQUFVLEtBQUssV0FBVyxnQkFDeEIxQiwwREFBQSxDQUFDa0UsbURBQVE7SUFDUG9CLE1BQU0sRUFBRXZCLElBQUs7SUFDYnJDLFVBQVUsRUFBRUEsVUFBVztJQUN2QnNCLEtBQUssRUFBRUEsS0FBTTtJQUNiRixPQUFPLEVBQUVBLE9BQVE7SUFDakJ5QyxVQUFVLEVBQUV2QixVQUFXO0lBQ3ZCeUIsTUFBTSxFQUFFO01BQ05DLEtBQUssRUFBRSxnQkFBZ0I7TUFDdkJDLEtBQUssRUFBRSxNQUFNO01BQ2I3QixNQUFNLEVBQUU7SUFDVixDQUFFO0lBRUZULFNBQVMsRUFBQztFQUFVLENBQ3JCLENBQUMsR0FDQTNCLFVBQVUsS0FBSyxVQUFVLGdCQUMzQjFCLDBEQUFBLENBQUNtRSwyREFBUTtJQUNQbUIsTUFBTSxFQUFFdkIsSUFBSztJQUNickMsVUFBVSxFQUFFQSxVQUFXO0lBQ3ZCc0IsS0FBSyxFQUFFQSxLQUFNO0lBQ2JGLE9BQU8sRUFBRUEsT0FBUTtJQUNqQnlDLFVBQVUsRUFBRXZCLFVBQVc7SUFDdkJ3QixXQUFXLEVBQUVSLG1CQUFvQixDQUFDO0lBQUE7SUFDbENTLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCQyxLQUFLLEVBQUUsTUFBTTtNQUNiN0IsTUFBTSxFQUFFO0lBQ1YsQ0FBRTtJQUNGVCxTQUFTLEVBQUM7RUFBVSxDQUNyQixDQUFDLGdCQUVGckQsMERBQUEsY0FBSywwRUFBaUIsQ0FPckIsQ0FBQyxlQUNOQSwwREFBQSxDQUFDSyx3REFBRztJQUFDbUQsRUFBRSxFQUFFO0VBQUUsR0FFVDlCLFVBQVUsS0FBSyxXQUFXLGdCQUMxQjFCLDBEQUFBLENBQUNzRSx3REFBYTtJQUNWZ0IsTUFBTSxFQUFFdkIsSUFBSztJQUNickMsVUFBVSxFQUFFQSxVQUFXO0lBQ3ZCc0IsS0FBSyxFQUFFQSxLQUFNO0lBRWJ1QyxVQUFVLEVBQUV2QixVQUFXO0lBQ3pCaUIsSUFBSSxFQUFFLEVBQUcsQ0FBQztJQUFBO0lBQ1ZRLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUUsU0FBUztNQUNoQkMsS0FBSyxFQUFFLE1BQU07TUFDYjdCLE1BQU0sRUFBRTtJQUNWLENBQUU7SUFDRlQsU0FBUyxFQUFDO0VBQVUsQ0FDckIsQ0FBQyxnQkFDRnJELDBEQUFBLENBQUN1RSx1REFBYTtJQUNWZSxNQUFNLEVBQUV2QixJQUFLO0lBQ2JyQyxVQUFVLEVBQUVBLFVBQVc7SUFDdkJzQixLQUFLLEVBQUVBLEtBQU07SUFDYkYsT0FBTyxFQUFFQSxPQUFRO0lBQ2pCZ0QsU0FBUyxFQUFFbEIsU0FBVSxDQUFDO0lBQUE7O0lBR3RCVyxVQUFVLEVBQUV2QixVQUFXO0lBQ3pCaUIsSUFBSSxFQUFFLEVBQUcsQ0FBQztJQUFBO0lBQ1ZRLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUUsU0FBUztNQUNoQkMsS0FBSyxFQUFFLE1BQU07TUFDYjdCLE1BQU0sRUFBRTtJQUNWLENBQUU7SUFDRlQsU0FBUyxFQUFDO0VBQVUsQ0FDckIsQ0FFRSxDQUNGLENBQUMsZUFDTnJELDBEQUFBLENBQUNJLHVEQUFHO0lBQUNpRCxTQUFTLEVBQUM7RUFBTyxnQkFFdEJyRCwwREFBQSxDQUFDSyx3REFBRyxRQUVKcUIsVUFBVSxLQUFLLFdBQVcsZ0JBQ3RCMUIsMERBQUEsQ0FBQzBFLHdEQUFpQjtJQUNkMUIsS0FBSyxFQUFFQSxLQUFNO0lBQ2I0QixTQUFTLEVBQUVFLGdCQUFpQjtJQUM1QlcsTUFBTSxFQUFFO01BQ0ZDLEtBQUssRUFBRSxpQkFBaUI7TUFDeEJDLEtBQUssRUFBRSxNQUFNO01BQ2I3QixNQUFNLEVBQUU7SUFDVixDQUFFO0lBQ1JULFNBQVMsRUFBQztFQUFVLENBQ3JCLENBQUMsZ0JBQ0FyRCwwREFBQSxXQUFRLENBR1AsQ0FFSixDQUNNLENBQUM7QUFFaEIsQ0FBQztBQUVELGlFQUFlTyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RNNkI7QUFDTTtBQUV6RCxNQUFNbUUsaUJBQWlCLEdBQUdDLElBQUEsSUFBMEI7RUFBQSxJQUF6QjtJQUFFM0IsS0FBSztJQUFFNEI7RUFBVSxDQUFDLEdBQUFELElBQUE7RUFDN0MsTUFBTSxDQUFDb0IsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBRy9GLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBQ3RELE1BQU0sQ0FBQ21CLEtBQUssRUFBRTZFLFFBQVEsQ0FBQyxHQUFHaEcsK0NBQVEsQ0FBQyxJQUFJLENBQUM7RUFFeENDLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1nRyxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO01BQzVCLElBQUk7UUFDRixNQUFNQyxRQUFRLEdBQUcsR0FBR0MsU0FBc0IsNkJBQTZCcEQsS0FBSyx5QkFBeUI7UUFDckcsTUFBTXVELFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLFFBQVEsQ0FBQztRQUV0QyxJQUFJLENBQUNJLFFBQVEsQ0FBQ0UsRUFBRSxFQUFFO1VBQ2hCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUNsQztRQUVBLE1BQU1DLFFBQVEsR0FBRyxNQUFNSixRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDOztRQUV0QztRQUNBLE1BQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDL0IsU0FBUyxDQUFDO1FBRXZDLElBQUksQ0FBQ2lDLFdBQVcsRUFBRTtVQUNoQnhGLE9BQU8sQ0FBQ3lGLElBQUksQ0FBQyxrQkFBa0IsR0FBR2xDLFNBQVMsQ0FBQztVQUM1Q29CLGVBQWUsQ0FBQyxFQUFFLENBQUM7VUFDbkI7UUFDRjs7UUFFQTtRQUNBLE1BQU1lLFNBQVMsR0FBR0YsV0FBVyxDQUFDN0QsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQytELFNBQVMsRUFBRTtVQUNkMUYsT0FBTyxDQUFDeUYsSUFBSSxDQUFDLG1CQUFtQixHQUFHOUQsS0FBSyxDQUFDO1VBQ3pDZ0QsZUFBZSxDQUFDLEVBQUUsQ0FBQztVQUNuQjtRQUNGO1FBRUFBLGVBQWUsQ0FBQ2UsU0FBUyxDQUFDO01BQzVCLENBQUMsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7UUFDWjNGLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHVCQUF1QixFQUFFNEYsR0FBRyxDQUFDO1FBQzNDZixRQUFRLENBQUNlLEdBQUcsQ0FBQzFGLE9BQU8sQ0FBQztNQUN2QjtJQUNGLENBQUM7SUFFRDRFLFNBQVMsQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxFQUFFLENBQUNsRCxLQUFLLEVBQUU0QixTQUFTLENBQUMsQ0FBQztFQUV0QixJQUFJeEQsS0FBSyxFQUFFO0lBQ1Qsb0JBQU9wQiwwREFBQSxjQUFLLHNCQUFLLEVBQUNvQixLQUFXLENBQUM7RUFDaEM7RUFFQSxJQUFJLENBQUMyRSxZQUFZLEVBQUU7SUFDakIsb0JBQU8vRiwwREFBQSxjQUFLLDJEQUFpQixDQUFDO0VBQ2hDOztFQUdBO0VBQ0YsTUFBTWlILFVBQVUsR0FBR0EsQ0FBQ0MsU0FBUyxFQUFFQyxNQUFNLEtBQUs7SUFDeEMsSUFBSUMsS0FBSztJQUNULFFBQVFGLFNBQVM7TUFDZixLQUFLLFFBQVE7UUFDWEUsS0FBSyxHQUFHLElBQUk7UUFDWjtNQUNGLEtBQUssU0FBUztRQUNaQSxLQUFLLEdBQUcsSUFBSTtRQUNaO01BQ0YsS0FBSyxVQUFVO1FBQ2JBLEtBQUssR0FBRyxJQUFJO1FBQ1o7TUFDRixLQUFLLFdBQVc7UUFDZEEsS0FBSyxHQUFHLElBQUk7UUFDWjtNQUNGO1FBQ0VBLEtBQUssR0FBRyxLQUFLO0lBQ2pCOztJQUVBO0lBQ0EsTUFBTUMsWUFBWSxHQUFHO01BQ25CQyxPQUFPLEVBQUUsNEJBQTRCO01BQUk7TUFDekNDLE1BQU0sRUFBRSw0QkFBNEI7TUFBRTtNQUN0Q0MsU0FBUyxFQUFFLDRCQUE0QjtNQUFFO01BQ3pDQyxRQUFRLEVBQUUsNEJBQTRCLENBQUM7SUFDekMsQ0FBQztJQUVELE1BQU1DLFNBQVMsR0FBR0wsWUFBWSxDQUFDSCxTQUFTLENBQUM7SUFDekMsTUFBTVMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLE1BQU1DLG1CQUFtQixHQUFHRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxPQUFPLEVBQUVDLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVoRixvQkFFRTNILDBEQUFBLENBQUNpRSx1REFBSTtNQUFDK0QsR0FBRyxFQUFFZCxTQUFVO01BQUM3RCxTQUFTLEVBQUMsS0FBSztNQUFDUSxLQUFLLEVBQUU7UUFBRW9FLGVBQWUsRUFBRUw7TUFBb0I7SUFBRSxnQkFDcEY1SCwwREFBQSxDQUFDaUUsdURBQUksQ0FBQ2lFLElBQUk7TUFBQzdFLFNBQVMsRUFBQztJQUFZLGdCQUMvQnJELDBEQUFBLENBQUNpRSx1REFBSSxDQUFDa0UsS0FBSztNQUFDOUUsU0FBUyxFQUFDO0lBQVksR0FBRStELEtBQWtCLENBQUMsRUFDdERELE1BQU0sQ0FBQ2lCLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxDQUFDbEcsS0FBSyxFQUFFbUcsS0FBSyxLQUFLO01BQ3hDO01BQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUksR0FBR0QsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO01BQ25DLE1BQU1FLG1CQUFtQixHQUFHZCxTQUFTLENBQUNHLE9BQU8sQ0FBQyxPQUFPLEVBQUVDLElBQUksQ0FBQ1csR0FBRyxDQUFDRixLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUU5RSxvQkFDRXZJLDBEQUFBO1FBQ0VnSSxHQUFHLEVBQUVNLEtBQU07UUFDWGpGLFNBQVMsRUFBQyxzQ0FBc0M7UUFDaERRLEtBQUssRUFBRTtVQUFFb0UsZUFBZSxFQUFFTztRQUFvQjtNQUFFLGdCQUVoRHhJLDBEQUFBLGlCQUFTc0ksS0FBSyxHQUFHLENBQUMsRUFBQyxjQUFVLENBQUMsS0FBQyxFQUFDbkcsS0FBSyxJQUFJLEVBQ3RDLENBQUM7SUFFVixDQUFDLENBQ1EsQ0FDUCxDQUFDO0VBR1gsQ0FBQztFQUNDLG9CQUNGbkMsMERBQUEsQ0FBQ0csdURBQVMscUJBQ1JILDBEQUFBLENBQUNpRSx1REFBSTtJQUFDWixTQUFTLEVBQUM7RUFBa0IsZ0JBRWhDckQsMERBQUEsQ0FBQ2lFLHVEQUFJLENBQUN5RSxNQUFNO0lBQUM3RSxLQUFLLEVBQUU7TUFBRW9FLGVBQWUsRUFBRSxTQUFTO01BQUVVLEtBQUssRUFBRSxPQUFPO01BQUVDLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQ3RGNUksMERBQUE7SUFBSXFELFNBQVMsRUFBQztFQUFNLEdBQUV1QixTQUFTLElBQUksR0FBUSxDQUNoQyxDQUFDLGVBR2Q1RSwwREFBQSxDQUFDaUUsdURBQUksQ0FBQ2lFLElBQUkscUJBQ1JsSSwwREFBQSxDQUFDSSx1REFBRyxxQkFDRkosMERBQUEsQ0FBQ0ssdURBQUcsUUFBRTRHLFVBQVUsQ0FBQyxRQUFRLEVBQUVsQixZQUFZLENBQUN3QixNQUFNLElBQUksRUFBRSxDQUFPLENBQUMsZUFDNUR2SCwwREFBQSxDQUFDSyx1REFBRyxRQUFFNEcsVUFBVSxDQUFDLFNBQVMsRUFBRWxCLFlBQVksQ0FBQ3VCLE9BQU8sSUFBSSxFQUFFLENBQU8sQ0FDMUQsQ0FBQyxlQUNOdEgsMERBQUEsQ0FBQ0ksdURBQUcscUJBQ0ZKLDBEQUFBLENBQUNLLHVEQUFHLFFBQUU0RyxVQUFVLENBQUMsVUFBVSxFQUFFbEIsWUFBWSxDQUFDMEIsUUFBUSxJQUFJLEVBQUUsQ0FBTyxDQUFDLGVBQ2hFekgsMERBQUEsQ0FBQ0ssdURBQUcsUUFBRTRHLFVBQVUsQ0FBQyxXQUFXLEVBQUVsQixZQUFZLENBQUN5QixTQUFTLElBQUksRUFBRSxDQUFPLENBQzlELENBQ0ksQ0FDUCxDQUNHLENBQUM7QUFJWixDQUFDO0FBQ0QsaUVBQWU5QyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SU47QUFDTztBQUNMO0FBQ3VCOztBQUVuRDtBQUNBLE1BQU1xRSxNQUFNLEdBQUcsbUNBQW1DLENBQUMsQ0FBQzs7QUFFcEQsTUFBTUMsUUFBUSxHQUFHLGtDQUFrQyxDQUFDLENBQUM7O0FBRXJESCw2Q0FBZSxjQUNiN0ksMERBQUEsQ0FBQ0EseURBQWdCLHFCQUNmQSwwREFBQSxDQUFDOEksNkRBQWE7RUFDWkMsTUFBTSxFQUFFQSxNQUFPO0VBQ2ZDLFFBQVEsRUFBRUEsUUFBUztFQUNuQkcsbUJBQW1CLEVBQUU7SUFDbkJDLFlBQVksRUFBRSxzQ0FBc0MsQ0FBRTtFQUN4RDtBQUFFLGdCQUVGcEosMERBQUEsQ0FBQ1MsZ0RBQUcsTUFBRSxDQUNPLENBQ0MsQ0FBQyxFQUNuQjRJLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FDaEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjBEO0FBQ3hCO0FBS25DLE1BQU1HLFFBQVEsR0FBRztFQUFDLFVBQVUsRUFBQyxrQkFBa0I7RUFBRSxNQUFNLEVBQUMsbUJBQW1CO0VBQUUsUUFBUSxFQUFDLG1CQUFtQjtFQUN2RyxNQUFNLEVBQUMsbUJBQW1CO0VBQUUsUUFBUSxFQUFDLG1CQUFtQjtFQUFFLE9BQU8sRUFBQyxtQkFBbUI7RUFDckYsT0FBTyxFQUFDLG1CQUFtQjtFQUFDLFFBQVEsRUFBQyxtQkFBbUI7RUFBRSxNQUFNLEVBQUM7QUFDbkUsQ0FBQzs7QUFHRDtBQUNBLE1BQU12RCxTQUFTLEdBQUcsTUFBT3dELEdBQUcsSUFBSztFQUMvQixJQUFJO0lBQ0YsTUFBTW5ELFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNrRCxHQUFHLENBQUM7SUFDakMsSUFBSSxDQUFDbkQsUUFBUSxDQUFDRSxFQUFFLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMsdUJBQXVCSCxRQUFRLENBQUNvRCxNQUFNLEVBQUUsQ0FBQztJQUUzRSxNQUFNQyxXQUFXLEdBQUdyRCxRQUFRLENBQUNzRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDeEQsSUFBSUYsV0FBVyxJQUFJQSxXQUFXLENBQUNsSCxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtNQUMzRCxPQUFPLE1BQU02RCxRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLE1BQU07TUFDTCxNQUFNbUQsSUFBSSxHQUFHLE1BQU14RCxRQUFRLENBQUN3RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEMsT0FBT0EsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNySCxNQUFNLENBQUNzSCxJQUFJLElBQUlBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlEO0VBQ0YsQ0FBQyxDQUFDLE9BQU85SSxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDOztBQUVEO0FBQ0EsTUFBTStJLGlCQUFpQixHQUFJQyxVQUFVLElBQUs7RUFFeEMsTUFBTUMsT0FBTyxHQUFHdkMsSUFBSSxDQUFDVyxHQUFHLENBQUMsR0FBRzJCLFVBQVUsQ0FBQy9CLEdBQUcsQ0FBQ2lDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDbkUsTUFBTUMsT0FBTyxHQUFHMUMsSUFBSSxDQUFDVyxHQUFHLENBQUMsR0FBRzJCLFVBQVUsQ0FBQy9CLEdBQUcsQ0FBQ2lDLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFFbkUsTUFBTUMsTUFBTSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQztJQUFFQyxNQUFNLEVBQUVSO0VBQVEsQ0FBQyxFQUFFLE1BQU1NLEtBQUssQ0FBQ0gsT0FBTyxDQUFDLENBQUNNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM1RVYsVUFBVSxDQUFDVyxPQUFPLENBQUNwRyxJQUFBLElBQXlCO0lBQUEsSUFBeEI7TUFBRTRGLEdBQUc7TUFBRUUsR0FBRztNQUFFdEk7SUFBTSxDQUFDLEdBQUF3QyxJQUFBO0lBQ3JDK0YsTUFBTSxDQUFDSCxHQUFHLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLEdBQUd0SSxLQUFLO0VBQzFCLENBQUMsQ0FBQztFQUVGLE9BQU91SSxNQUFNLENBQUNyQyxHQUFHLENBQUNrQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRTlJLEtBQUssS0FBSzhJLEdBQUcsR0FBRzlJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUVELE1BQU1nQyxRQUFRLEdBQUcrRyxLQUFBLElBQXFFO0VBQUEsSUFBcEU7SUFBRTVGLE1BQU07SUFBRTVELFVBQVU7SUFBRXNCLEtBQUs7SUFBRUYsT0FBTztJQUFFeUMsVUFBVTtJQUFFQztFQUFZLENBQUMsR0FBQTBGLEtBQUE7RUFDL0UsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHbkwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDOUMsTUFBTSxDQUFDeUYsS0FBSyxFQUFFMkYsUUFBUSxDQUFDLEdBQUdwTCwrQ0FBUSxDQUFDLG9CQUFvQixDQUFDO0VBQ3hELE1BQU1xTCxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUU3QyxNQUFNQyxTQUFTLEdBQUc7SUFBQyxHQUFHLEVBQUMsVUFBVTtJQUFDLEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDdkQsR0FBRyxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFDL0MsR0FBRyxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFDaEQsSUFBSSxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFDaEQsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsU0FBUztJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFDbEQsSUFBSSxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUM7RUFBTSxDQUFDO0VBRTVCLE1BQU1DLFNBQVMsR0FBRztJQUFDLFVBQVUsRUFBQyxHQUFHO0lBQUMsTUFBTSxFQUFDLEdBQUc7SUFBQyxRQUFRLEVBQUMsR0FBRztJQUNuRCxNQUFNLEVBQUMsR0FBRztJQUFDLFFBQVEsRUFBQyxHQUFHO0lBQUMsT0FBTyxFQUFDLEdBQUc7SUFBQyxPQUFPLEVBQUMsR0FBRztJQUNoRCxRQUFRLEVBQUMsR0FBRztJQUFDLE1BQU0sRUFBQyxJQUFJO0lBQUMsTUFBTSxFQUFDLElBQUk7SUFBQyxNQUFNLEVBQUMsSUFBSTtJQUNoRCxNQUFNLEVBQUMsSUFBSTtJQUFDLFFBQVEsRUFBQyxHQUFHO0lBQUMsTUFBTSxFQUFDLElBQUk7SUFBQyxNQUFNLEVBQUMsSUFBSTtJQUNoRCxRQUFRLEVBQUMsSUFBSTtJQUFDLE1BQU0sRUFBQyxJQUFJO0lBQUMsTUFBTSxFQUFDLElBQUk7SUFBQyxTQUFTLEVBQUMsSUFBSTtJQUNwRCxNQUFNLEVBQUMsSUFBSTtJQUFDLE1BQU0sRUFBQztFQUNwQixDQUFDO0VBQ0w7RUFDQSxNQUFNQyxTQUFTLEdBQUdsQyw2Q0FBTSxDQUFDO0lBQ3ZCbUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNidEIsVUFBVSxFQUFFLENBQUM7RUFDZixDQUFDLENBQUM7RUFFRixNQUFNdUIsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBWTtJQUMzQixJQUFJO01BQ0YsTUFBTUMsYUFBYSxHQUFHLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUNyQ1IsUUFBUSxDQUFDakQsR0FBRyxDQUFDLE1BQU8wRCxTQUFTLElBQUs7UUFDaEMsTUFBTUMsSUFBSSxHQUFHLENBQUM7UUFDZCxNQUFNQyxVQUFVLEdBQUcsR0FBRzdGLFNBQXNCLDZCQUE2QjJGLFNBQVMsc0JBQXNCO1FBQ3hHLE1BQU1HLGFBQWEsR0FBRyxHQUFHOUYsU0FBc0IsNkJBQTZCMkYsU0FBUyx3QkFBd0JDLElBQUksT0FBTzs7UUFFeEg7UUFDQSxJQUFJLENBQUNQLFNBQVMsQ0FBQ1UsT0FBTyxDQUFDVCxTQUFTLENBQUNLLFNBQVMsQ0FBQyxFQUFFO1VBQzNDTixTQUFTLENBQUNVLE9BQU8sQ0FBQ1QsU0FBUyxDQUFDSyxTQUFTLENBQUMsR0FBRyxNQUFNN0YsU0FBUyxDQUFDK0YsVUFBVSxDQUFDO1FBQ3RFO1FBRUEsSUFBSSxDQUFDUixTQUFTLENBQUNVLE9BQU8sQ0FBQy9CLFVBQVUsQ0FBQzJCLFNBQVMsQ0FBQyxFQUFFO1VBQzVDTixTQUFTLENBQUNVLE9BQU8sQ0FBQy9CLFVBQVUsQ0FBQzJCLFNBQVMsQ0FBQyxHQUFHLE1BQU03RixTQUFTLENBQUNnRyxhQUFhLENBQUM7UUFDMUU7UUFFQSxNQUFNUixTQUFTLEdBQUdELFNBQVMsQ0FBQ1UsT0FBTyxDQUFDVCxTQUFTLENBQUNLLFNBQVMsQ0FBQztRQUN4RCxNQUFNM0IsVUFBVSxHQUFHcUIsU0FBUyxDQUFDVSxPQUFPLENBQUMvQixVQUFVLENBQUMyQixTQUFTLENBQUM7O1FBRTFEO1FBQ0EsTUFBTUssZUFBZSxHQUFJQyxHQUFHLElBQUs7VUFDL0IsSUFBSSxPQUFPQSxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCaEwsT0FBTyxDQUFDeUYsSUFBSSxDQUFDLGtCQUFrQixFQUFFdUYsR0FBRyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLENBQUM7VUFDZjtVQUNBLE9BQU9BLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7O1FBRUQ7UUFDQSxNQUFNcUMsa0JBQWtCLEdBQUdiLFNBQVMsQ0FBQ3JELEdBQUcsQ0FBQytELGVBQWUsQ0FBQztRQUN6RCxNQUFNSSxnQkFBZ0IsR0FBR0osZUFBZSxDQUFDdEosT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQ3lKLGtCQUFrQixDQUFDN0osUUFBUSxDQUFDOEosZ0JBQWdCLENBQUMsRUFBRTtVQUNsRG5MLE9BQU8sQ0FBQ3lGLElBQUksQ0FBQyxZQUFZMEYsZ0JBQWdCLHdCQUF3QlQsU0FBUyxFQUFFLENBQUM7VUFDN0UsT0FBTyxJQUFJO1FBQ2I7O1FBRUE7UUFDQSxNQUFNVSxPQUFPLEdBQUd0QyxpQkFBaUIsQ0FBQ0MsVUFBVSxDQUFDO1FBRTdDLE1BQU1zQyxZQUFZLEdBQUdILGtCQUFrQixDQUFDSSxPQUFPLENBQUNILGdCQUFnQixDQUFDO1FBRWpFLE9BQU87VUFBRXhKLEtBQUssRUFBRStJLFNBQVM7VUFBRTVKLEtBQUssRUFBRXNLLE9BQU8sQ0FBQ0MsWUFBWTtRQUFFLENBQUM7TUFDM0QsQ0FBQyxDQUNILENBQUM7TUFFRCxNQUFNRSxZQUFZLEdBQUdoQixhQUFhLENBQUNqSixNQUFNLENBQUVzQyxJQUFJLElBQUtBLElBQUksS0FBSyxJQUFJLENBQUM7O01BRWxFO01BQ0EsTUFBTTRILFVBQVUsR0FBR0QsWUFBWSxDQUFDNUIsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRTNJLElBQUksS0FBSzJJLEdBQUcsR0FBRzNJLElBQUksQ0FBQ0gsS0FBSyxFQUFFLENBQUMsQ0FBQztNQUMxRSxJQUFJMEssVUFBVSxLQUFLLENBQUMsRUFBRTtRQUNwQnhMLE9BQU8sQ0FBQ3lGLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztRQUMzQ3NFLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDaEI7TUFDRjtNQUlBLE1BQU0wQixjQUFjLEdBQUdGLFlBQVksQ0FBQ3ZFLEdBQUcsQ0FBQy9GLElBQUksS0FBSztRQUMvQ3lLLFFBQVEsRUFBRXpLLElBQUksQ0FBQ1UsS0FBSztRQUNwQmIsS0FBSyxFQUFFRyxJQUFJLENBQUNILEtBQUssR0FBRzBLO01BQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0EsQ0FBQyxDQUFDL0ssS0FBSyxHQUFHOEssQ0FBQyxDQUFDOUssS0FBSyxDQUFDO01BRXJDaUosWUFBWSxDQUFDMEIsY0FBYyxDQUFDMUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDM0M3QyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLE9BQU9uRSxLQUFLLEVBQUU7TUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsYUFBYSxFQUFFQSxLQUFLLENBQUM7SUFDckM7RUFDRixDQUFDOztFQUVEO0VBQ0FsQixnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJd0IsVUFBVSxLQUFLLFVBQVUsRUFBRTtNQUM3QmlLLFFBQVEsQ0FBQyxDQUFDO0lBQ1o7RUFDRixDQUFDLEVBQUUsQ0FBQ3JHLE1BQU0sRUFBRTVELFVBQVUsQ0FBQyxDQUFDO0VBRXhCLE1BQU15TCxlQUFlLEdBQUlDLEtBQUssSUFBSztJQUNqQyxJQUFJQSxLQUFLLENBQUNDLE1BQU0sSUFBSUQsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDbkMsTUFBTXZILFNBQVMsR0FBR3NILEtBQUssQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDakcsS0FBSyxDQUFDLENBQUM7TUFDekMsTUFBTUEsS0FBSyxHQUFHb0UsU0FBUyxDQUFDMUYsU0FBUyxDQUFDO01BQ2xDLE1BQU13SCxPQUFPLEdBQUdsRyxLQUFLLENBQUNTLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO01BQzNDckMsV0FBVyxDQUFDLENBQUM4SCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUI7RUFDRixDQUFDO0VBRUQsb0JBQ0V0TiwwREFBQTtJQUFLNkQsS0FBSyxFQUFFO01BQUMwSixTQUFTLEVBQUMsSUFBSTtNQUFDQyxZQUFZLEVBQUMsSUFBSTtNQUFFN0gsS0FBSyxFQUFFLE1BQU07TUFBRTdCLE1BQU0sRUFBRTtJQUFNO0VBQUUsZ0JBQzVFOUQsMERBQUEsQ0FBQ3dKLHVEQUFJO0lBQ0h2RSxJQUFJLEVBQUUsQ0FDSjtNQUNFd0ksSUFBSSxFQUFFLEtBQUs7TUFDWHRHLE1BQU0sRUFBRWdFLFNBQVMsQ0FBQzlDLEdBQUcsQ0FBQy9GLElBQUksSUFBSUEsSUFBSSxDQUFDSCxLQUFLLENBQUM7TUFDekN1TCxNQUFNLEVBQUV2QyxTQUFTLENBQUM5QyxHQUFHLENBQUMvRixJQUFJLElBQUtpSixTQUFTLENBQUNvQyxNQUFNLENBQUNyTCxJQUFJLENBQUN5SyxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQ2hFN0YsU0FBUyxFQUFFLFdBQVc7TUFDdEIwRyxNQUFNLEVBQUU7UUFDTkMsTUFBTSxFQUFFMUMsU0FBUyxDQUFDOUMsR0FBRyxDQUFFL0YsSUFBSSxJQUFLbUgsUUFBUSxDQUFDOEIsU0FBUyxDQUFDb0MsTUFBTSxDQUFDckwsSUFBSSxDQUFDeUssUUFBUSxDQUFDLENBQUMsQ0FBQztNQUM1RTtJQUNGLENBQUMsQ0FDRDtJQUNGdEgsTUFBTSxFQUFFO01BQ05DLEtBQUssRUFBRUEsS0FBSztNQUNab0ksVUFBVSxFQUFFLElBQUk7TUFDaEJDLFlBQVksRUFBRSxPQUFPO01BQ3JCQyxhQUFhLEVBQUUsT0FBTztNQUN0QkMsTUFBTSxFQUFFO1FBQUVDLENBQUMsRUFBRSxFQUFFO1FBQUVoQixDQUFDLEVBQUUsQ0FBQztRQUFFaUIsQ0FBQyxFQUFFLEVBQUU7UUFBRUMsQ0FBQyxFQUFFO01BQUc7SUFDdEMsQ0FBRTtJQUNGdkssS0FBSyxFQUFFO01BQUU4QixLQUFLLEVBQUUsTUFBTTtNQUFFN0IsTUFBTSxFQUFFO0lBQU8sQ0FBRSxDQUFDO0lBQUE7SUFDMUNSLE9BQU8sRUFBRTZKLGVBQWdCLENBQUM7RUFBQSxDQUMzQixDQUVFLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVoSixRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQzFMNEI7QUFDaEI7O0FBRW5DO0FBQ0EsTUFBTStCLFNBQVMsR0FBRyxNQUFPd0QsR0FBRyxJQUFLO0VBQy9CLElBQUk7SUFDRixNQUFNbkQsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ2tELEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUNuRCxRQUFRLENBQUNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyx1QkFBdUJILFFBQVEsQ0FBQ29ELE1BQU0sRUFBRSxDQUFDO0lBQzNFLE9BQU8sTUFBTXBELFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7RUFDOUIsQ0FBQyxDQUFDLE9BQU94RixLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDOztBQUVEO0FBQ0EsTUFBTWlOLGFBQWEsR0FBRyxNQUFPM0UsR0FBRyxJQUFLO0VBQ25DLElBQUk7SUFDRixNQUFNbkQsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ2tELEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUNuRCxRQUFRLENBQUNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyx1QkFBdUJILFFBQVEsQ0FBQ29ELE1BQU0sRUFBRSxDQUFDO0lBQzNFLE1BQU1JLElBQUksR0FBRyxNQUFNeEQsUUFBUSxDQUFDd0QsSUFBSSxDQUFDLENBQUM7SUFDbEMsT0FBT0EsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNySCxNQUFNLENBQUVzSCxJQUFJLElBQUtBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7RUFDOUQsQ0FBQyxDQUFDLE9BQU85SSxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDO0FBRUQsTUFBTThDLFFBQVEsR0FBR1MsSUFBQSxJQUErQztFQUFBLElBQTlDO0lBQUVXLE1BQU07SUFBRTVELFVBQVU7SUFBRXNCLEtBQUs7SUFBRXVDO0VBQVcsQ0FBQyxHQUFBWixJQUFBO0VBQ3pELE1BQU0sQ0FBQ3dHLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUduTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUM5QyxNQUFNLENBQUN5RixLQUFLLEVBQUUyRixRQUFRLENBQUMsR0FBR3BMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3RDLE1BQU1zTCxTQUFTLEdBQUc7SUFBQyxHQUFHLEVBQUMsVUFBVTtJQUFDLEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFDdkQsR0FBRyxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFDL0MsR0FBRyxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFDaEQsSUFBSSxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFDaEQsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsU0FBUztJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFDbEQsSUFBSSxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUM7RUFBTSxDQUFDO0VBRTVCLE1BQU05QixRQUFRLEdBQUc7SUFBQyxVQUFVLEVBQUMsa0JBQWtCO0lBQUUsU0FBUyxFQUFDLG1CQUFtQjtJQUFFLFVBQVUsRUFBQyxtQkFBbUI7SUFDMUcsVUFBVSxFQUFDLG1CQUFtQjtJQUFFLFdBQVcsRUFBQyxtQkFBbUI7SUFBRSxpQkFBaUIsRUFBQyxtQkFBbUI7SUFDdEcsWUFBWSxFQUFDLG1CQUFtQjtJQUFDLFVBQVUsRUFBQyxtQkFBbUI7SUFBRSxTQUFTLEVBQUMsbUJBQW1CO0lBQzlGLFVBQVUsRUFBQyxtQkFBbUI7SUFBRSxTQUFTLEVBQUM7RUFBb0IsQ0FBQztFQUduRXZKLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1vTyxhQUFhLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO01BQ2hDLElBQUk7UUFDRixNQUFNdEMsSUFBSSxHQUFHLENBQUM7UUFDZCxNQUFNdUMsUUFBUSxHQUFHdkwsS0FBSyxJQUFJLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLE1BQU13TCxPQUFPLEdBQUcsR0FBR3BJLFNBQXNCLDZCQUE2Qm1JLFFBQVEsdUJBQXVCdkMsSUFBSSxPQUFPO1FBQ2hILE1BQU15QyxTQUFTLEdBQUcsR0FBR3JJLFNBQXNCLDZCQUE2Qm1JLFFBQVEsc0JBQXNCOztRQUV0RztRQUNBLE1BQU0sQ0FBQ3BILE1BQU0sRUFBRXVHLE1BQU0sQ0FBQyxHQUFHLE1BQU03QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUN6QzVGLFNBQVMsQ0FBQ3NJLE9BQU8sQ0FBQyxFQUNsQkgsYUFBYSxDQUFDSSxTQUFTLENBQUMsQ0FDekIsQ0FBQzs7UUFFRjtRQUNBLE1BQU14SixJQUFJLEdBQUd5SSxNQUFNLENBQUNyRixHQUFHLENBQUMsQ0FBQ2pCLEtBQUssRUFBRWtCLEtBQUssTUFBTTtVQUN6Q2xCLEtBQUs7VUFDTGpGLEtBQUssRUFBRWdGLE1BQU0sQ0FBQ2hGLEtBQUssQ0FBQ21HLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBRTtRQUNuQyxDQUFDLENBQUMsQ0FBQzs7UUFFSDtRQUNBLE1BQU1vRyxVQUFVLEdBQUd6SixJQUFJLENBQ3BCK0gsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLQSxDQUFDLENBQUMvSyxLQUFLLEdBQUc4SyxDQUFDLENBQUM5SyxLQUFLLENBQUMsQ0FDakNpRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUVmZ0QsWUFBWSxDQUFDc0QsVUFBVSxDQUFDO1FBQ3hCckQsUUFBUSxDQUFDLEdBQUdFLFNBQVMsQ0FBQ2dELFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFDOUMsSUFBSWhKLFVBQVUsRUFBRUEsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hDLENBQUMsQ0FBQyxPQUFPbkUsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGtCQUFrQixFQUFFQSxLQUFLLENBQUM7TUFDMUM7SUFDRixDQUFDOztJQUVEO0lBQ0EsSUFBSU0sVUFBVSxLQUFLLFdBQVcsRUFBRTtNQUM5QjRNLGFBQWEsQ0FBQyxDQUFDO0lBQ2pCO0VBQ0YsQ0FBQyxFQUFFLENBQUNoSixNQUFNLEVBQUU1RCxVQUFVLEVBQUVzQixLQUFLLEVBQUV1QyxVQUFVLENBQUMsQ0FBQztFQUUzQyxvQkFDRXZGLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBQzBKLFNBQVMsRUFBQyxJQUFJO01BQUNDLFlBQVksRUFBQyxJQUFJO01BQUU3SCxLQUFLLEVBQUUsTUFBTTtNQUFFN0IsTUFBTSxFQUFFO0lBQU07RUFBRSxnQkFDNUU5RCwwREFBQSxDQUFDd0osdURBQUk7SUFDSHZFLElBQUksRUFBRSxDQUNKO01BQ0V3SSxJQUFJLEVBQUUsS0FBSztNQUNYdEcsTUFBTSxFQUFFZ0UsU0FBUyxDQUFDOUMsR0FBRyxDQUFFL0YsSUFBSSxJQUFLQSxJQUFJLENBQUNILEtBQUssQ0FBQztNQUMzQ3VMLE1BQU0sRUFBRXZDLFNBQVMsQ0FBQzlDLEdBQUcsQ0FBRS9GLElBQUksSUFBS0EsSUFBSSxDQUFDOEUsS0FBSyxDQUFDO01BQzNDRixTQUFTLEVBQUUsV0FBVztNQUN0QjBHLE1BQU0sRUFBRTtRQUNOQyxNQUFNLEVBQUUxQyxTQUFTLENBQUM5QyxHQUFHLENBQUUvRixJQUFJLElBQUttSCxRQUFRLENBQUNuSCxJQUFJLENBQUM4RSxLQUFLLENBQUM7TUFDdEQ7SUFDRixDQUFDLENBQ0Q7SUFDRjNCLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUVBLEtBQUs7TUFDWm9JLFVBQVUsRUFBRSxJQUFJO01BQ2hCQyxZQUFZLEVBQUUsT0FBTztNQUNyQkMsYUFBYSxFQUFFLE9BQU87TUFDdEJDLE1BQU0sRUFBRTtRQUFFQyxDQUFDLEVBQUUsRUFBRTtRQUFFaEIsQ0FBQyxFQUFFLENBQUM7UUFBRWlCLENBQUMsRUFBRSxFQUFFO1FBQUVDLENBQUMsRUFBRTtNQUFHO0lBQ3RDLENBQUU7SUFFRnZLLEtBQUssRUFBRTtNQUFFOEIsS0FBSyxFQUFFLE1BQU07TUFBRTdCLE1BQU0sRUFBRTtJQUFPLENBQUUsQ0FBQztFQUFBLENBQzNDLENBQ0UsQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZUksUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRzRCO0FBQ2hCOztBQUtuQztBQUNBLE1BQU15SyxhQUFhLEdBQUcsTUFBT3hJLFFBQVEsSUFBSztFQUN4QyxJQUFJO0lBQ0YsTUFBTUksUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsUUFBUSxDQUFDO0lBQ3RDLE1BQU00RCxJQUFJLEdBQUcsTUFBTXhELFFBQVEsQ0FBQ3dELElBQUksQ0FBQyxDQUFDO0lBQ2xDLE9BQU9BLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDckgsTUFBTSxDQUFFc0gsSUFBSSxJQUFLQSxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0VBQzlELENBQUMsQ0FBQyxPQUFPOUksS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRUEsS0FBSyxDQUFDO0lBQ3BDLE9BQU8sRUFBRTtFQUNYO0FBQ0YsQ0FBQztBQUVELE1BQU13TixNQUFNLEdBQUcsTUFBT3pJLFFBQVEsSUFBSztFQUNqQyxJQUFJO0lBQ0YsTUFBTUksUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsUUFBUSxDQUFDO0lBQ3RDLE1BQU00RCxJQUFJLEdBQUcsTUFBTXhELFFBQVEsQ0FBQ3dELElBQUksQ0FBQyxDQUFDO0lBQ2xDLE1BQU04RSxLQUFLLEdBQUc5RSxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ3JILE1BQU0sQ0FBQ3NILElBQUksSUFBSUEsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVqRSxNQUFNNEUsUUFBUSxHQUFHRCxLQUFLLENBQUN4RyxHQUFHLENBQUM0QixJQUFJLElBQUk4RSxVQUFVLENBQUM5RSxJQUFJLENBQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLE1BQU1nRixPQUFPLEdBQUdILEtBQUssQ0FBQ3hHLEdBQUcsQ0FBQzRCLElBQUksSUFBSThFLFVBQVUsQ0FBQzlFLElBQUksQ0FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakUsT0FBTztNQUFFOEUsUUFBUTtNQUFFRTtJQUFRLENBQUM7RUFDOUIsQ0FBQyxDQUFDLE9BQU81TixLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTztNQUFFME4sUUFBUSxFQUFFLEVBQUU7TUFBRUUsT0FBTyxFQUFFO0lBQUcsQ0FBQztFQUN0QztBQUNGLENBQUM7QUFFRCxNQUFNQyxjQUFjLEdBQUd0SyxJQUFBLElBQXdEO0VBQUEsSUFBdkQ7SUFBRVcsTUFBTTtJQUFFNUQsVUFBVTtJQUFFc0IsS0FBSztJQUFFRixPQUFPO0lBQUV5QztFQUFXLENBQUMsR0FBQVosSUFBQTtFQUMxRSxNQUFNNEcsU0FBUyxHQUFHO0lBQUMsR0FBRyxFQUFDLFVBQVU7SUFBQyxHQUFHLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQyxRQUFRO0lBQ3ZELEdBQUcsRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFBQyxHQUFHLEVBQUMsT0FBTztJQUFDLEdBQUcsRUFBQyxPQUFPO0lBQy9DLEdBQUcsRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQ2hELElBQUksRUFBQyxNQUFNO0lBQUMsR0FBRyxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQ2hELElBQUksRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLFNBQVM7SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQ2xELElBQUksRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDO0VBQU0sQ0FBQztFQUU1QixNQUFNOUIsUUFBUSxHQUFHO0lBQUMsVUFBVSxFQUFDLGtCQUFrQjtJQUFFLE1BQU0sRUFBQyxtQkFBbUI7SUFBRSxRQUFRLEVBQUMsbUJBQW1CO0lBQy9GLE1BQU0sRUFBQyxtQkFBbUI7SUFBRSxRQUFRLEVBQUMsbUJBQW1CO0lBQUUsT0FBTyxFQUFDLG1CQUFtQjtJQUNyRixPQUFPLEVBQUMsbUJBQW1CO0lBQUMsUUFBUSxFQUFDLG1CQUFtQjtJQUFFLE1BQU0sRUFBQyxtQkFBbUI7SUFDcEYsUUFBUSxFQUFDLG1CQUFtQjtJQUFFLE1BQU0sRUFBQztFQUN2QyxDQUFDO0VBR1AsTUFBTXlGLFdBQVcsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFFM0UsTUFBTSxDQUFDQyxZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHblAsK0NBQVEsQ0FBQyxJQUFJLENBQUM7RUFDdEQsTUFBTSxDQUFDb1AsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3JQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQzFDLE1BQU0sQ0FBQ3NQLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUd2UCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUNsRCxNQUFNLENBQUN5RixLQUFLLEVBQUUyRixRQUFRLENBQUMsR0FBR3BMLCtDQUFRLENBQUMsU0FBUyxDQUFDO0VBQzdDLE1BQU0sQ0FBQ3dQLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd6UCwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBR2hEQyxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNeVAsV0FBVyxHQUFHLE1BQUFBLENBQUEsS0FBWTtNQUM5QixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxHQUFHLENBQUM1TSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRXFGLEdBQUcsQ0FBQyxNQUFPMEQsU0FBUyxJQUFLO1VBQ3RFMUssT0FBTyxDQUFDNkQsR0FBRyxDQUFDLE9BQU8sRUFBQzZHLFNBQVMsQ0FBQztVQUNoQyxNQUFNOEQsVUFBVSxHQUFHLEdBQUd6SixTQUFzQiw2QkFBNkIyRixTQUFTLHNCQUFzQjtVQUN4RyxNQUFNTCxTQUFTLEdBQUcsTUFBTWlELGFBQWEsQ0FBQ2tCLFVBQVUsQ0FBQztVQUVqRCxNQUFNQyxXQUFXLEdBQUdwRSxTQUFTLENBQUNWLE1BQU0sQ0FBQyxDQUFDK0UsR0FBRyxFQUFFNU4sS0FBSyxFQUFFNk4sR0FBRyxLQUFLO1lBQ3hERCxHQUFHLENBQUM1TixLQUFLLENBQUMsR0FBRzZOLEdBQUc7WUFDaEIsT0FBT0QsR0FBRztVQUNaLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUVOLE1BQU1FLGFBQWEsR0FBR3RGLEtBQUssQ0FBQ3VGLE9BQU8sQ0FBQ3BOLE9BQU8sQ0FBQyxHQUFHQSxPQUFPLEdBQUcsQ0FBQ0EsT0FBTyxDQUFDO1VBQ2xFLE1BQU1xTixrQkFBa0IsR0FBR0YsYUFBYSxDQUFDdE4sTUFBTSxDQUFDUixLQUFLLElBQUlBLEtBQUssSUFBSTJOLFdBQVcsQ0FBQztVQUU5RSxNQUFNTSxVQUFVLEdBQUd6RixLQUFLLENBQUNDLElBQUksQ0FBQztZQUFFQyxNQUFNLEVBQUVzRixrQkFBa0IsQ0FBQ3RGO1VBQU8sQ0FBQyxFQUFFLE1BQU1GLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzVGLE1BQU11RixTQUFTLEdBQUcxRixLQUFLLENBQUNDLElBQUksQ0FBQztZQUFFQyxNQUFNLEVBQUVzRixrQkFBa0IsQ0FBQ3RGO1VBQU8sQ0FBQyxFQUFFLE1BQU1GLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBRTNGLE1BQU13RixRQUFRLEdBQUczRixLQUFLLENBQUNDLElBQUksQ0FBQztZQUFFQyxNQUFNLEVBQUU7VUFBRSxDQUFDLEVBQUUsQ0FBQzBGLENBQUMsRUFBRUMsQ0FBQyxLQUFLQSxDQUFFLENBQUMsQ0FBQ25JLEdBQUcsQ0FBQyxNQUFPb0ksQ0FBQyxJQUFLO1lBQ3hFLE1BQU1DLGFBQWEsR0FBRyxHQUFHdEssU0FBc0IsNkJBQTZCMkYsU0FBUywwQkFBMEIwRSxDQUFDLEdBQUMsQ0FBQyxNQUFNO1lBQ3hILE1BQU07Y0FBRTNCLFFBQVE7Y0FBRUU7WUFBUSxDQUFDLEdBQUcsTUFBTUosTUFBTSxDQUFDOEIsYUFBYSxDQUFDO1lBRXpEUCxrQkFBa0IsQ0FBQ3BGLE9BQU8sQ0FBQyxDQUFDNEYsQ0FBQyxFQUFFSCxDQUFDLEtBQUs7Y0FDbkMsTUFBTVIsR0FBRyxHQUFHdEUsU0FBUyxDQUFDaUIsT0FBTyxDQUFDZ0UsQ0FBQyxDQUFDO2NBQ2hDUCxVQUFVLENBQUNJLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBRzNCLFFBQVEsQ0FBQ2tCLEdBQUcsQ0FBQztjQUNoQ0ssU0FBUyxDQUFDRyxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUd6QixPQUFPLENBQUNnQixHQUFHLENBQUM7WUFDaEMsQ0FBQyxDQUFDO1VBQ0osQ0FBQyxDQUFDO1VBRUYsTUFBTW5FLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDd0UsUUFBUSxDQUFDO1VBRTNCLE9BQU87WUFBRUYsVUFBVTtZQUFFQyxTQUFTO1lBQUVGO1VBQW1CLENBQUM7UUFDdEQsQ0FBQyxDQUFDO1FBRUYsTUFBTVMsT0FBTyxHQUFHLE1BQU0vRSxPQUFPLENBQUNDLEdBQUcsQ0FBQzhELFdBQVcsQ0FBQztRQUU5QyxNQUFNaUIsYUFBYSxHQUFHRCxPQUFPLENBQUNFLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJQSxNQUFNLENBQUNYLFVBQVUsQ0FBQztRQUNsRSxNQUFNWSxZQUFZLEdBQUdKLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ1YsU0FBUyxDQUFDO1FBQ2hFLE1BQU1ZLGtCQUFrQixHQUFHTCxPQUFPLENBQUNFLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJQSxNQUFNLENBQUNaLGtCQUFrQixDQUFDO1FBRS9FZixlQUFlLENBQUM7VUFBRTdHLEtBQUssRUFBRXNJLGFBQWE7VUFBRUssSUFBSSxFQUFFRixZQUFZO1VBQUVHLFVBQVUsRUFBRUY7UUFBbUIsQ0FBQyxDQUFDO1FBQzdGNUYsUUFBUSxDQUFDLEdBQUd2SSxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUM7TUFDbkMsQ0FBQyxDQUFDLE9BQU8xQixLQUFLLEVBQUU7UUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsYUFBYSxFQUFFQSxLQUFLLENBQUM7TUFDckM7SUFDRixDQUFDOztJQUVEO0lBQ0F1TyxXQUFXLENBQUMsQ0FBQztFQUNmLENBQUMsRUFBRSxDQUFDak8sVUFBVSxFQUFFc0IsS0FBSyxFQUFFRixPQUFPLENBQUMsQ0FBQztFQUdoQzVDLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1rUixjQUFjLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO01BQ2pDLElBQUl6RyxLQUFLLENBQUN1RixPQUFPLENBQUNwTixPQUFPLENBQUMsSUFBSUEsT0FBTyxDQUFDSixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUlJLE9BQU8sS0FBSyxTQUFTLEVBQUU7UUFDbEYsSUFBSTtVQUNGLE1BQU13TixRQUFRLEdBQUcsQ0FBQ3ROLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFcUYsR0FBRyxDQUFDLE1BQU9nSixPQUFPLElBQUs7WUFDbkUsTUFBTUMsVUFBVSxHQUFHLEdBQUdsTCxTQUFzQiw2QkFBNkJpTCxPQUFPLG9DQUFvQztZQUNwSCxNQUFNOUssUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQzhLLFVBQVUsQ0FBQztZQUN4QyxJQUFJLENBQUMvSyxRQUFRLENBQUNFLEVBQUUsRUFBRTtjQUNoQixNQUFNLElBQUlDLEtBQUssQ0FBQyxrQkFBa0JILFFBQVEsQ0FBQ29ELE1BQU0sRUFBRSxDQUFDO1lBQ3REO1lBQ0EsTUFBTTFFLElBQUksR0FBRyxNQUFNc0IsUUFBUSxDQUFDSyxJQUFJLENBQUMsQ0FBQzs7WUFFbEM7WUFDQSxNQUFNMkssYUFBYSxHQUFHO2NBQ3BCLE1BQU0sRUFBRSxHQUFHO2NBQ1gsTUFBTSxFQUFFLEdBQUc7Y0FDWCxNQUFNLEVBQUUsR0FBRztjQUNYLE1BQU0sRUFBRSxHQUFHO2NBQ1gsTUFBTSxFQUFFO1lBQ1YsQ0FBQzs7WUFFRDtZQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDdEJDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSCxhQUFhLENBQUMsQ0FBQ3hHLE9BQU8sQ0FBQ0csS0FBQSxJQUF3QjtjQUFBLElBQXZCLENBQUN5RyxJQUFJLEVBQUVDLFVBQVUsQ0FBQyxHQUFBMUcsS0FBQTtjQUN2RCxNQUFNMkcsUUFBUSxHQUFHNU0sSUFBSSxDQUFDME0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztjQUVqQztjQUNBLElBQUlGLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDRCxRQUFRLENBQUMsQ0FBQ2hILE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RDMkcsV0FBVyxDQUFDLFdBQVdJLFVBQVUsRUFBRSxDQUFDLEdBQUc7a0JBQ3JDRyxPQUFPLEVBQUUsT0FBTztrQkFDaEJKLElBQUksRUFBRUE7Z0JBQ1IsQ0FBQztjQUNILENBQUMsTUFBTTtnQkFDTDtnQkFDQSxNQUFNSyxVQUFVLEdBQUdQLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDRyxRQUFRLENBQUMsQ0FDeEN6SixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNYQyxHQUFHLENBQUM0SixLQUFBO2tCQUFBLElBQUMsQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLLENBQUMsR0FBQUYsS0FBQTtrQkFBQSxPQUFLLEdBQUdDLE1BQU0sSUFBSUMsS0FBSyxJQUFJO2dCQUFBLEVBQUM7Z0JBRW5EWCxXQUFXLENBQUMsV0FBV0ksVUFBVSxFQUFFLENBQUMsR0FBRztrQkFDckNHLE9BQU8sRUFBRUMsVUFBVSxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDO2tCQUM5QlQsSUFBSSxFQUFFQTtnQkFDUixDQUFDO2NBQ0g7WUFDRixDQUFDLENBQUM7WUFFRixPQUFPO2NBQUVOLE9BQU87Y0FBRXBNLElBQUksRUFBRXVNO1lBQVksQ0FBQztVQUN2QyxDQUFDLENBQUM7VUFFRixNQUFNWixPQUFPLEdBQUcsTUFBTS9FLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDd0UsUUFBUSxDQUFDO1VBQzNDLE1BQU0rQixhQUFhLEdBQUcsQ0FBQyxDQUFDO1VBRXhCekIsT0FBTyxDQUFDN0YsT0FBTyxDQUFDdUgsS0FBQSxJQUF1QjtZQUFBLElBQXRCO2NBQUVqQixPQUFPO2NBQUVwTTtZQUFLLENBQUMsR0FBQXFOLEtBQUE7WUFDaENELGFBQWEsQ0FBQ2hCLE9BQU8sQ0FBQyxHQUFHcE0sSUFBSTtVQUMvQixDQUFDLENBQUM7VUFFRnlLLGFBQWEsQ0FBQzJDLGFBQWEsQ0FBQztRQUM5QixDQUFDLENBQUMsT0FBT2pSLEtBQUssRUFBRTtVQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRUEsS0FBSyxDQUFDO1FBQ3hDO01BQ0Y7SUFDRixDQUFDO0lBRURnUSxjQUFjLENBQUMsQ0FBQztFQUNsQixDQUFDLEVBQUUsQ0FBQ3RPLE9BQU8sRUFBRUUsS0FBSyxDQUFDLENBQUM7RUFHcEI5QyxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJb0YsTUFBTSxJQUFJNkosWUFBWSxFQUFFO01BQzFCLE1BQU1vRCxRQUFRLEdBQUdwRCxZQUFZLENBQUNnQyxVQUFVLENBQUM5SSxHQUFHLENBQUMsQ0FBQ3NJLENBQUMsRUFBRUgsQ0FBQyxLQUFLO1FBQ3JELE1BQU1nQyxZQUFZLEdBQUd4UCxLQUFLLENBQUN3TixDQUFDLENBQUM7UUFDN0IsTUFBTWlDLGFBQWEsR0FBRztVQUVwQixHQUFHLEVBQUUsTUFBTTtVQUNYLEdBQUcsRUFBRSxNQUFNO1VBQ1gsR0FBRyxFQUFFLE1BQU07VUFDWCxHQUFHLEVBQUUsTUFBTTtVQUNYLEdBQUcsRUFBRTtRQUNQLENBQUM7UUFFRCxNQUFNQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUNySyxHQUFHLENBQUVzSyxHQUFHLElBQUs7VUFDeEQsTUFBTUMsUUFBUSxHQUFHLEdBQUdILGFBQWEsQ0FBQ0UsR0FBRyxDQUFDLEdBQUc7VUFDekMsTUFBTWhCLElBQUksR0FBR2tCLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDLENBQUMsQ0FBRTtVQUNsQyxJQUFJakMsQ0FBQyxLQUFLLFNBQVMsSUFBSWxCLFVBQVUsQ0FBQytDLFlBQVksQ0FBQyxJQUFJL0MsVUFBVSxDQUFDK0MsWUFBWSxDQUFDLENBQUMsV0FBV0csR0FBRyxFQUFFLENBQUMsRUFBRTtZQUM3RixNQUFNRyxVQUFVLEdBQUdyRCxVQUFVLENBQUMrQyxZQUFZLENBQUMsQ0FBQyxXQUFXRyxHQUFHLEVBQUUsQ0FBQztZQUM3RCxPQUFPLElBQUloQixJQUFJLEdBQUMsQ0FBQyxJQUFJQSxJQUFJLFlBQVltQixVQUFVLENBQUNmLE9BQU8sRUFBRTtVQUMzRDtVQUNFLE9BQU8sS0FBS0osSUFBSSxHQUFDLENBQUMsSUFBSUEsSUFBSSxHQUFHO1FBQ2pDLENBQUMsQ0FBQztRQUVGLE9BQU87VUFDTG9CLENBQUMsRUFBRTVELFlBQVksQ0FBQzVHLEtBQUssQ0FBQ2lJLENBQUMsQ0FBQztVQUN4QndDLENBQUMsRUFBRTdELFlBQVksQ0FBQytCLElBQUksQ0FBQ1YsQ0FBQyxDQUFDO1VBQ3ZCeUMsSUFBSSxFQUFFLG9CQUFvQjtVQUMxQmxKLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7VUFDL0JtSixZQUFZLEVBQUUsVUFBVTtVQUN4QkMsU0FBUyxFQUFFVCxVQUFVO1VBQ3JCVSxTQUFTLEVBQUUsTUFBTTtVQUNqQkMsVUFBVSxFQUFFO1lBQ1ZDLEtBQUssRUFBRSxNQUFNO1lBQ2JDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCQyxXQUFXLEVBQUUsTUFBTTtZQUNuQkMsSUFBSSxFQUFFO2NBQUVDLElBQUksRUFBRTtZQUFHO1VBQ25CLENBQUM7VUFDRDlGLE1BQU0sRUFBRTtZQUNOK0YsTUFBTSxFQUFFLFFBQVE7WUFDaEJoTCxLQUFLLEVBQUVjLFFBQVEsQ0FBQzhCLFNBQVMsQ0FBQ3ZJLEtBQUssQ0FBQ3dOLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcENrRCxJQUFJLEVBQUU7VUFDUixDQUFDO1VBQ0RFLElBQUksRUFBRXJJLFNBQVMsQ0FBQ3ZJLEtBQUssQ0FBQ3dOLENBQUMsQ0FBQztRQUMxQixDQUFDO01BQ0gsQ0FBQyxDQUFDO01BSUYsTUFBTXFELGVBQWUsR0FBRzFFLFlBQVksQ0FBQ2dDLFVBQVUsQ0FBQ0wsT0FBTyxDQUFDLENBQUNILENBQUMsRUFBRUgsQ0FBQyxLQUMzRDdGLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDekMsR0FBRyxDQUFDLENBQUNrSSxDQUFDLEVBQUUzTixDQUFDLE1BQU07UUFDOUJtUSxDQUFDLEVBQUU1RCxZQUFZLENBQUM1RyxLQUFLLENBQUNpSSxDQUFDLENBQUMsQ0FBQzVOLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0JvUSxDQUFDLEVBQUU3RCxZQUFZLENBQUMrQixJQUFJLENBQUNWLENBQUMsQ0FBQyxDQUFDNU4sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QmtSLElBQUksRUFBRSxHQUFHO1FBQ1RDLElBQUksRUFBRSxHQUFHO1FBQ1RDLEtBQUssRUFBRSxHQUFHO1FBQ1ZDLEtBQUssRUFBRSxHQUFHO1FBQ1ZDLEVBQUUsRUFBRS9FLFlBQVksQ0FBQzVHLEtBQUssQ0FBQ2lJLENBQUMsQ0FBQyxDQUFDNU4sQ0FBQyxDQUFDO1FBQzVCdVIsRUFBRSxFQUFFaEYsWUFBWSxDQUFDK0IsSUFBSSxDQUFDVixDQUFDLENBQUMsQ0FBQzVOLENBQUMsQ0FBQztRQUMzQndSLFVBQVUsRUFBQzNLLFFBQVEsQ0FBQzhCLFNBQVMsQ0FBQ3ZJLEtBQUssQ0FBQ3dOLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEM2RCxTQUFTLEVBQUUsR0FBRztRQUNkQyxVQUFVLEVBQUUsR0FBRztRQUNmQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxTQUFTLEVBQUU7TUFDYixDQUFDLENBQUMsQ0FDSixDQUFDO01BRURsRixVQUFVLENBQUNpRCxRQUFRLENBQUM7TUFDcEIvQyxjQUFjLENBQUNxRSxlQUFlLENBQUM7TUFFL0IsSUFBSXRPLFVBQVUsRUFBRUEsVUFBVSxDQUFDLENBQUM7SUFDOUI7RUFDRixDQUFDLEVBQUUsQ0FBQ0QsTUFBTSxFQUFFNkosWUFBWSxFQUFFTSxVQUFVLENBQUMsQ0FBQztFQUV0QyxvQkFDRXpQLDBEQUFBO0lBQU02RCxLQUFLLEVBQUU7TUFBRThCLEtBQUssRUFBQyxPQUFPO01BQUU3QixNQUFNLEVBQUU7SUFBUTtFQUFFLGdCQUM5QzlELDBEQUFBLENBQUN3Six1REFBSTtJQUNIdkUsSUFBSSxFQUFFb0ssT0FBUTtJQUNkNUosTUFBTSxFQUFFO01BQ05zSSxZQUFZLEVBQUUsT0FBTztNQUNyQkMsYUFBYSxFQUFFLE9BQU87TUFDdEJ1QixXQUFXLEVBQUVBLFdBQVc7TUFDeEI3SixLQUFLLEVBQUU7UUFDTHFFLElBQUksRUFBRXJFLEtBQUs7UUFDWCtOLElBQUksRUFBRTtVQUFFQyxJQUFJLEVBQUUsRUFBRTtVQUFFL0ssS0FBSyxFQUFFO1FBQVEsQ0FBQztRQUNsQ29LLENBQUMsRUFBRSxHQUFHO1FBQ05DLENBQUMsRUFBRSxJQUFJO1FBQ1B5QixPQUFPLEVBQUU7TUFFWCxDQUFDO01BQ0RsRixXQUFXLEVBQUUsQ0FDWDtRQUNFd0QsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmpKLElBQUksRUFBRSx5QkFBeUI7UUFDL0J5SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUUvSyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDOEwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNFM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmpKLElBQUksRUFBRSx1QkFBdUI7UUFDN0J5SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUUvSyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDOEwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNFM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmpKLElBQUksRUFBRSx5QkFBeUI7UUFDL0J5SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUUvSyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDOEwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNFM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmpKLElBQUksRUFBRSx1QkFBdUI7UUFDN0J5SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUUvSyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDOEwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsQ0FDRjtNQUdEQyxLQUFLLEVBQUU7UUFDTGpQLEtBQUssRUFBRyxLQUFLO1FBQ2JrUCxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ2pCQyxTQUFTLEVBQUUsTUFBTTtRQUNqQkMsU0FBUyxFQUFFLENBQUM7UUFDWkMsU0FBUyxFQUFFLFdBQVc7UUFDdEJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLFFBQVEsRUFBQyxPQUFPO1FBQ2hCQyxRQUFRLEVBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUN0QkMsUUFBUSxFQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7UUFDdkJDLFFBQVEsRUFBRTtNQUVaLENBQUM7TUFDREMsS0FBSyxFQUFFO1FBQ0w1UCxLQUFLLEVBQUcsS0FBSztRQUNiNlAsY0FBYyxFQUFDLEVBQUU7UUFBSTtRQUNyQlgsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNqQkMsU0FBUyxFQUFFLE1BQU07UUFDakJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFNBQVMsRUFBRSxXQUFXO1FBQ3RCQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxRQUFRLEVBQUUsS0FBSztRQUNmQyxRQUFRLEVBQUMsT0FBTztRQUNoQkMsUUFBUSxFQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDdEJDLFFBQVEsRUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO1FBQ3ZCQyxRQUFRLEVBQUU7TUFFWixDQUFDO01BQ0RwSCxNQUFNLEVBQUU7UUFBRUMsQ0FBQyxFQUFFLEVBQUU7UUFBRWhCLENBQUMsRUFBRSxFQUFFO1FBQUVpQixDQUFDLEVBQUUsRUFBRTtRQUFFQyxDQUFDLEVBQUU7TUFBRyxDQUFDO01BQ3RDTixVQUFVLEVBQUUsSUFBSTtNQUNoQjBILE1BQU0sRUFBRTtRQUNOekMsQ0FBQyxFQUFFLENBQUM7UUFDSkMsQ0FBQyxFQUFFLENBQUM7UUFDSk8sT0FBTyxFQUFFLHVCQUF1QjtRQUNoQ0MsV0FBVyxFQUFFLE1BQU07UUFDbkJpQyxXQUFXLEVBQUU7TUFDZixDQUFDO01BQ0RDLGFBQWEsRUFBQyxFQUFFO01BQ2hCQyxTQUFTLEVBQUUsU0FBUztNQUNwQnRDLFVBQVUsRUFBRTtRQUNWdUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFFO01BQ2xCO0lBQ0YsQ0FBRTtJQUNGaFEsTUFBTSxFQUFFO01BQ05DLFVBQVUsRUFBRSxJQUFJO01BQ2hCZ1EsY0FBYyxFQUFFLEtBQUssQ0FBRTtJQUN6QixDQUFFO0lBQ0ZoUyxLQUFLLEVBQUU7TUFBQzBKLFNBQVMsRUFBQyxLQUFLO01BQUU1SCxLQUFLLEVBQUUsT0FBTztNQUFFN0IsTUFBTSxFQUFFO0lBQU87RUFBRSxDQUMzRCxDQUNFLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVtTCxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hXc0I7QUFDaEI7QUFHbkMsTUFBTXhGLFFBQVEsR0FBRztFQUFDLFVBQVUsRUFBQyxrQkFBa0I7RUFBRSxTQUFTLEVBQUMsbUJBQW1CO0VBQUUsVUFBVSxFQUFDLG1CQUFtQjtFQUM1RyxVQUFVLEVBQUMsbUJBQW1CO0VBQUUsV0FBVyxFQUFDLG1CQUFtQjtFQUFFLGlCQUFpQixFQUFDLG1CQUFtQjtFQUN0RyxZQUFZLEVBQUMsbUJBQW1CO0VBQUMsVUFBVSxFQUFDLG1CQUFtQjtFQUFFLFNBQVMsRUFBQyxtQkFBbUI7RUFDOUYsVUFBVSxFQUFDLG1CQUFtQjtFQUFFLFNBQVMsRUFBQztBQUFvQixDQUFDOztBQUVqRTtBQUNBLE1BQU1rRixhQUFhLEdBQUcsTUFBT3hJLFFBQVEsSUFBSztFQUN4QyxJQUFJO0lBQ0YsTUFBTUksUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsUUFBUSxDQUFDO0lBQ3RDLE1BQU00RCxJQUFJLEdBQUcsTUFBTXhELFFBQVEsQ0FBQ3dELElBQUksQ0FBQyxDQUFDO0lBQ2xDLE9BQU9BLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDckgsTUFBTSxDQUFFc0gsSUFBSSxJQUFLQSxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0VBQzlELENBQUMsQ0FBQyxPQUFPOUksS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRUEsS0FBSyxDQUFDO0lBQ3BDLE9BQU8sRUFBRTtFQUNYO0FBQ0YsQ0FBQztBQUVELE1BQU13TixNQUFNLEdBQUcsTUFBT3pJLFFBQVEsSUFBSztFQUNqQyxJQUFJO0lBQ0YsTUFBTUksUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsUUFBUSxDQUFDO0lBQ3RDLE1BQU00RCxJQUFJLEdBQUcsTUFBTXhELFFBQVEsQ0FBQ3dELElBQUksQ0FBQyxDQUFDO0lBQ2xDLE1BQU04RSxLQUFLLEdBQUc5RSxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ3JILE1BQU0sQ0FBQ3NILElBQUksSUFBSUEsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVqRSxNQUFNNEUsUUFBUSxHQUFHRCxLQUFLLENBQUN4RyxHQUFHLENBQUM0QixJQUFJLElBQUk4RSxVQUFVLENBQUM5RSxJQUFJLENBQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLE1BQU1nRixPQUFPLEdBQUdILEtBQUssQ0FBQ3hHLEdBQUcsQ0FBQzRCLElBQUksSUFBSThFLFVBQVUsQ0FBQzlFLElBQUksQ0FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakUsT0FBTztNQUFFOEUsUUFBUTtNQUFFRTtJQUFRLENBQUM7RUFDOUIsQ0FBQyxDQUFDLE9BQU81TixLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTztNQUFFME4sUUFBUSxFQUFFLEVBQUU7TUFBRUUsT0FBTyxFQUFFO0lBQUcsQ0FBQztFQUN0QztBQUNGLENBQUM7QUFFRCxNQUFNOEcsZUFBZSxHQUFHblIsSUFBQSxJQUFvRTtFQUFBLElBQW5FO0lBQUVXLE1BQU07SUFBRTVELFVBQVU7SUFBRXNCLEtBQUs7SUFBRUYsT0FBTztJQUFFeUMsVUFBVTtJQUFFQztFQUFXLENBQUMsR0FBQWIsSUFBQTtFQUNyRixNQUFNdUssV0FBVyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztFQUMzRSxNQUFNLENBQUNHLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdyUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUMxQyxNQUFNLENBQUNzUCxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHdlAsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDbEQsTUFBTSxDQUFDdUIsV0FBVyxFQUFFdVUsY0FBYyxDQUFDLEdBQUc5ViwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUNsRCxNQUFNLENBQUNrUixVQUFVLEVBQUU2RSxhQUFhLENBQUMsR0FBRy9WLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2hELE1BQU0sQ0FBQ3lGLEtBQUssRUFBRTJGLFFBQVEsQ0FBQyxHQUFHcEwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDdEMsTUFBTSxDQUFDd1AsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3pQLCtDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFaEQsTUFBTXNMLFNBQVMsR0FBRztJQUFDLEdBQUcsRUFBQyxVQUFVO0lBQUMsR0FBRyxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUN2RCxHQUFHLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQyxRQUFRO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFBQyxHQUFHLEVBQUMsT0FBTztJQUMvQyxHQUFHLEVBQUMsUUFBUTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUNoRCxJQUFJLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUNoRCxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxTQUFTO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUNsRCxJQUFJLEVBQUMsUUFBUTtJQUFDLElBQUksRUFBQztFQUFNLENBQUM7O0VBRTVCO0VBQ0FyTCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJd0IsVUFBVSxLQUFLLFdBQVcsSUFBSXNCLEtBQUssRUFBRTtNQUN2QyxNQUFNK0ksU0FBUyxHQUFHL0ksS0FBSyxDQUFDLENBQUM7TUFDekIsTUFBTTZNLFVBQVUsR0FBRyxHQUFHekosU0FBc0IsNkJBQTZCMkYsU0FBUyxzQkFBc0I7TUFFeEc0QyxhQUFhLENBQUNrQixVQUFVLENBQUMsQ0FBQ29HLElBQUksQ0FBRWhSLElBQUksSUFBSztRQUN2QzhRLGNBQWMsQ0FBQzlRLElBQUksQ0FBQztRQUNwQm9HLFFBQVEsQ0FBQyxjQUFjLENBQUM7TUFDMUIsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLEVBQUUsQ0FBQzNKLFVBQVUsRUFBRXNCLEtBQUssQ0FBQyxDQUFDOztFQUV2QjtFQUNBOUMsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSXNCLFdBQVcsQ0FBQ3FKLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDMUIsTUFBTWlGLFdBQVcsR0FBR3RPLFdBQVcsQ0FBQ3dKLE1BQU0sQ0FBQyxDQUFDK0UsR0FBRyxFQUFFNU4sS0FBSyxFQUFFNk4sR0FBRyxLQUFLO1FBQzFERCxHQUFHLENBQUM1TixLQUFLLENBQUMsR0FBRzZOLEdBQUc7UUFDaEIsT0FBT0QsR0FBRztNQUNaLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUVOLE1BQU1FLGFBQWEsR0FBR3RGLEtBQUssQ0FBQ3VGLE9BQU8sQ0FBQ3BOLE9BQU8sQ0FBQyxHQUFHQSxPQUFPLEdBQUcsQ0FBQ0EsT0FBTyxDQUFDO01BQ2xFa1QsYUFBYSxDQUFDL0YsYUFBYSxDQUFDdE4sTUFBTSxDQUFDUixLQUFLLElBQUlBLEtBQUssSUFBSTJOLFdBQVcsQ0FBQyxDQUFDO0lBQ3BFO0VBQ0YsQ0FBQyxFQUFFLENBQUN0TyxXQUFXLEVBQUVzQixPQUFPLENBQUMsQ0FBQzs7RUFFMUI7RUFDQTVDLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1rUixjQUFjLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO01BQ2pDLElBQUl6RyxLQUFLLENBQUN1RixPQUFPLENBQUNwTixPQUFPLENBQUMsSUFBSUEsT0FBTyxDQUFDSixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUlJLE9BQU8sS0FBSyxTQUFTLEVBQUU7UUFDbEYsSUFBSTtVQUNGLE1BQU13TyxVQUFVLEdBQUcsR0FBR2xMLFNBQXNCLDZCQUE2QnBELEtBQUssb0NBQW9DO1VBQ2xILE1BQU11RCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDOEssVUFBVSxDQUFDO1VBQ3hDLElBQUksQ0FBQy9LLFFBQVEsQ0FBQ0UsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLGtCQUFrQkgsUUFBUSxDQUFDb0QsTUFBTSxFQUFFLENBQUM7VUFDdEQ7VUFDQSxNQUFNMUUsSUFBSSxHQUFHLE1BQU1zQixRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDOztVQUVsQztVQUNBLE1BQU0ySyxhQUFhLEdBQUc7WUFDcEIsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLEVBQUUsR0FBRztZQUNYLE1BQU0sRUFBRSxHQUFHO1lBQ1gsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLEVBQUU7VUFDVixDQUFDOztVQUVEO1VBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUMsQ0FBQztVQUN0QkMsTUFBTSxDQUFDQyxPQUFPLENBQUNILGFBQWEsQ0FBQyxDQUFDeEcsT0FBTyxDQUFDRyxLQUFBLElBQXdCO1lBQUEsSUFBdkIsQ0FBQ3lHLElBQUksRUFBRUMsVUFBVSxDQUFDLEdBQUExRyxLQUFBO1lBQ3ZELE1BQU0yRyxRQUFRLEdBQUc1TSxJQUFJLENBQUMwTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRWpDO1lBQ0EsSUFBSUYsTUFBTSxDQUFDSyxJQUFJLENBQUNELFFBQVEsQ0FBQyxDQUFDaEgsTUFBTSxLQUFLLENBQUMsRUFBRTtjQUN0QzJHLFdBQVcsQ0FBQyxXQUFXSSxVQUFVLEVBQUUsQ0FBQyxHQUFHO2dCQUNyQ0csT0FBTyxFQUFFLE9BQU87Z0JBQ2hCSixJQUFJLEVBQUVBO2NBQ1IsQ0FBQztZQUNILENBQUMsTUFBTTtjQUNMO2NBQ0EsTUFBTUssVUFBVSxHQUFHUCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0csUUFBUSxDQUFDLENBQ3hDekosS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDWEMsR0FBRyxDQUFDNEosS0FBQTtnQkFBQSxJQUFDLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxDQUFDLEdBQUFGLEtBQUE7Z0JBQUEsT0FBSyxHQUFHQyxNQUFNLElBQUlDLEtBQUssSUFBSTtjQUFBLEVBQUM7Y0FFbkRYLFdBQVcsQ0FBQyxXQUFXSSxVQUFVLEVBQUUsQ0FBQyxHQUFHO2dCQUNyQ0csT0FBTyxFQUFFQyxVQUFVLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzlCVCxJQUFJLEVBQUVBO2NBQ1IsQ0FBQztZQUNIO1VBQ0YsQ0FBQyxDQUFDO1VBRUZqQyxhQUFhLENBQUM4QixXQUFXLENBQUM7UUFDNUIsQ0FBQyxDQUFDLE9BQU9wUSxLQUFLLEVBQUU7VUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsZ0JBQWdCLEVBQUVBLEtBQUssQ0FBQztRQUN4QztNQUNGO0lBQ0YsQ0FBQztJQUVEZ1EsY0FBYyxDQUFDLENBQUM7RUFDbEIsQ0FBQyxFQUFFLENBQUN0TyxPQUFPLEVBQUVFLEtBQUssQ0FBQyxDQUFDOztFQUVwQjtFQUNBOUMsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSW9GLE1BQU0sSUFBSTZMLFVBQVUsQ0FBQ3RHLE1BQU0sR0FBRyxDQUFDLElBQUk3SCxLQUFLLEVBQUU7TUFDNUMsTUFBTStJLFNBQVMsR0FBRy9JLEtBQUssQ0FBQyxDQUFDO01BQ3pCLE1BQU1vTixVQUFVLEdBQUd6RixLQUFLLENBQUNDLElBQUksQ0FBQztRQUFFQyxNQUFNLEVBQUVzRyxVQUFVLENBQUN0RztNQUFPLENBQUMsRUFBRSxNQUFNRixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNwRixNQUFNdUYsU0FBUyxHQUFHMUYsS0FBSyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsTUFBTSxFQUFFc0csVUFBVSxDQUFDdEc7TUFBTyxDQUFDLEVBQUUsTUFBTUYsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFFbkYsTUFBTXdGLFFBQVEsR0FBRzNGLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE1BQU0sRUFBRTtNQUFFLENBQUMsRUFBRSxDQUFDMEYsQ0FBQyxFQUFFM04sQ0FBQyxLQUFLQSxDQUFFLENBQUMsQ0FBQ3lGLEdBQUcsQ0FBRW9JLENBQUMsSUFBSztRQUNsRSxNQUFNQyxhQUFhLEdBQUcsR0FBR3RLLFNBQXNCLDZCQUE2QjJGLFNBQVMsMEJBQTBCMEUsQ0FBQyxHQUFDLENBQUMsTUFBTTtRQUN4SCxPQUFPN0IsTUFBTSxDQUFDOEIsYUFBYSxDQUFDLENBQUN1RixJQUFJLENBQUMzRCxLQUFBLElBQTJCO1VBQUEsSUFBMUI7WUFBRXhELFFBQVE7WUFBRUU7VUFBUSxDQUFDLEdBQUFzRCxLQUFBO1VBQ3REbkIsVUFBVSxDQUFDcEcsT0FBTyxDQUFDLENBQUM0RixDQUFDLEVBQUVILENBQUMsS0FBSztZQUMzQixNQUFNUixHQUFHLEdBQUd4TyxXQUFXLENBQUNtTCxPQUFPLENBQUNnRSxDQUFDLENBQUM7WUFDbENQLFVBQVUsQ0FBQ0ksQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxHQUFHM0IsUUFBUSxDQUFDa0IsR0FBRyxDQUFDO1lBQ2hDSyxTQUFTLENBQUNHLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBR3pCLE9BQU8sQ0FBQ2dCLEdBQUcsQ0FBQztVQUNoQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7TUFFRm5FLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDd0UsUUFBUSxDQUFDLENBQUMyRixJQUFJLENBQUMsTUFBTTtRQUMvQixNQUFNeEQsYUFBYSxHQUFHO1VBQ3BCLEdBQUcsRUFBRSxNQUFNO1VBQ1gsR0FBRyxFQUFFLE1BQU07VUFDWCxHQUFHLEVBQUUsTUFBTTtVQUNYLEdBQUcsRUFBRSxNQUFNO1VBQ1gsR0FBRyxFQUFFO1FBQ1AsQ0FBQztRQUVELE1BQU1GLFFBQVEsR0FBR3BCLFVBQVUsQ0FBQzlJLEdBQUcsQ0FBQyxDQUFDc0ksQ0FBQyxFQUFFSCxDQUFDLEtBQUs7VUFDeEMsTUFBTWtDLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQ3JLLEdBQUcsQ0FBRXNLLEdBQUcsSUFBSztZQUN4RCxNQUFNQyxRQUFRLEdBQUcsR0FBR0gsYUFBYSxDQUFDRSxHQUFHLENBQUMsRUFBRTtZQUN4QyxNQUFNaEIsSUFBSSxHQUFHa0IsUUFBUSxDQUFDRCxRQUFRLENBQUMsQ0FBQyxDQUFFO1lBQ2xDLElBQUlqQyxDQUFDLEtBQUssU0FBUyxJQUFJbEIsVUFBVSxDQUFDLFdBQVdrRCxHQUFHLEVBQUUsQ0FBQyxFQUFFO2NBQ25ELE9BQU8sSUFBSWhCLElBQUksR0FBQyxDQUFDLElBQUlBLElBQUksWUFBWWxDLFVBQVUsQ0FBQyxXQUFXa0QsR0FBRyxFQUFFLENBQUMsQ0FBQ1osT0FBTyxFQUFFO1lBQzdFO1lBQ0EsT0FBTyxJQUFJSixJQUFJLEdBQUMsQ0FBQyxJQUFJQSxJQUFJLEdBQUc7VUFDOUIsQ0FBQyxDQUFDO1VBRUYsT0FBTztZQUNMb0IsQ0FBQyxFQUFFM0MsVUFBVSxDQUFDSSxDQUFDLENBQUM7WUFDaEJ3QyxDQUFDLEVBQUUzQyxTQUFTLENBQUNHLENBQUMsQ0FBQztZQUNmeUMsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQmxKLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDL0JtSixZQUFZLEVBQUUsVUFBVTtZQUN4QkMsU0FBUyxFQUFFVCxVQUFVO1lBQ3JCVSxTQUFTLEVBQUUsTUFBTTtZQUNqQkMsVUFBVSxFQUFFO2NBQ1ZDLEtBQUssRUFBRSxNQUFNO2NBQ2JDLE9BQU8sRUFBRSxPQUFPO2NBQ2hCQyxXQUFXLEVBQUUsTUFBTTtjQUNuQkMsSUFBSSxFQUFFO2dCQUFFQyxJQUFJLEVBQUU7Y0FBRyxDQUFDO2NBQ2xCZSxPQUFPLEVBQUUsT0FBTztjQUFHO2NBQ25CQyxPQUFPLEVBQUUsUUFBUSxDQUFLO1lBQ3hCLENBQUM7WUFDRDlHLE1BQU0sRUFBRTtjQUNOK0YsTUFBTSxFQUFFLFFBQVE7Y0FDaEJoTCxLQUFLLEVBQUVjLFFBQVEsQ0FBQ2tILENBQUMsQ0FBQztjQUNsQitDLElBQUksRUFBRTtZQUNSLENBQUM7WUFDREUsSUFBSSxFQUFFakQ7VUFDUixDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsTUFBTWtELGVBQWUsR0FBRzFDLFVBQVUsQ0FBQ0wsT0FBTyxDQUFDLENBQUNILENBQUMsRUFBRUgsQ0FBQyxLQUM5QzdGLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDekMsR0FBRyxDQUFDLENBQUNrSSxDQUFDLEVBQUUzTixDQUFDLE1BQU07VUFDOUJtUSxDQUFDLEVBQUUzQyxVQUFVLENBQUNJLENBQUMsQ0FBQyxDQUFDNU4sQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUN2Qm9RLENBQUMsRUFBRTNDLFNBQVMsQ0FBQ0csQ0FBQyxDQUFDLENBQUM1TixDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQ3RCa1IsSUFBSSxFQUFFLEdBQUc7VUFDVEMsSUFBSSxFQUFFLEdBQUc7VUFDVEcsRUFBRSxFQUFFOUQsVUFBVSxDQUFDSSxDQUFDLENBQUMsQ0FBQzVOLENBQUMsQ0FBQztVQUNwQnVSLEVBQUUsRUFBRTlELFNBQVMsQ0FBQ0csQ0FBQyxDQUFDLENBQUM1TixDQUFDLENBQUM7VUFDbkJvUixLQUFLLEVBQUUsR0FBRztVQUNWQyxLQUFLLEVBQUUsR0FBRztVQUNWRyxVQUFVLEVBQUUzSyxRQUFRLENBQUNrSCxDQUFDLENBQUM7VUFDdkIwRCxTQUFTLEVBQUUsR0FBRztVQUNkQyxVQUFVLEVBQUUsR0FBRztVQUNmQyxTQUFTLEVBQUUsQ0FBQztVQUNaQyxTQUFTLEVBQUU7UUFDYixDQUFDLENBQUMsQ0FDSixDQUFDO1FBRURsRixVQUFVLENBQUNpRCxRQUFRLENBQUM7UUFDcEIvQyxjQUFjLENBQUNxRSxlQUFlLENBQUM7UUFDL0IsSUFBSXRPLFVBQVUsRUFBRUEsVUFBVSxDQUFDLENBQUM7TUFDOUIsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLEVBQUUsQ0FBQ0QsTUFBTSxFQUFFNkwsVUFBVSxFQUFFM1AsV0FBVyxFQUFFd0IsS0FBSyxFQUFFeU0sVUFBVSxDQUFDLENBQUM7RUFFeEQsTUFBTXRLLGtCQUFrQixHQUFJaUksS0FBSyxJQUFLO0lBQ3BDLElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxJQUFJRCxLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUVuQ2hNLE9BQU8sQ0FBQzZELEdBQUcsQ0FBQ2tJLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO01BQzVDLE1BQU12SCxTQUFTLEdBQUdzSCxLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQ25EN0gsV0FBVyxDQUFDLENBQUNNLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QjtFQUNGLENBQUM7RUFFRCxvQkFDRTlGLDBEQUFBO0lBQU02RCxLQUFLLEVBQUU7TUFBRThCLEtBQUssRUFBQyxPQUFPO01BQUU3QixNQUFNLEVBQUU7SUFBUTtFQUFFLGdCQUM5QzlELDBEQUFBLENBQUN3Six1REFBSTtJQUNIdkUsSUFBSSxFQUFFb0ssT0FBUTtJQUNkNUosTUFBTSxFQUFFO01BQ05zSSxZQUFZLEVBQUUsT0FBTztNQUNyQkMsYUFBYSxFQUFFLE9BQU87TUFDdEJ1QixXQUFXLEVBQUVBLFdBQVc7TUFDeEI3SixLQUFLLEVBQUU7UUFDTHFFLElBQUksRUFBRXJFLEtBQUs7UUFDWCtOLElBQUksRUFBRTtVQUFFQyxJQUFJLEVBQUUsRUFBRTtVQUFFL0ssS0FBSyxFQUFFO1FBQVEsQ0FBQztRQUVsQ29LLENBQUMsRUFBRSxHQUFHO1FBQ05DLENBQUMsRUFBRSxJQUFJO1FBQ1B5QixPQUFPLEVBQUU7TUFFWCxDQUFDO01BQ0RsRixXQUFXLEVBQUUsQ0FDWDtRQUNFd0QsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmpKLElBQUksRUFBRSx5QkFBeUI7UUFDL0J5SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUUvSyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDOEwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNFM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmpKLElBQUksRUFBRSx1QkFBdUI7UUFDN0J5SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUUvSyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDOEwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNFM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmpKLElBQUksRUFBRSx5QkFBeUI7UUFDL0J5SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUUvSyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDOEwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNFM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7UUFDTmpKLElBQUksRUFBRSx1QkFBdUI7UUFDN0J5SyxTQUFTLEVBQUUsS0FBSztRQUNoQmYsSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUUvSyxLQUFLLEVBQUU7UUFBTyxDQUFDO1FBQ2hDOEwsT0FBTyxFQUFFLFFBQVE7UUFDakJDLE9BQU8sRUFBRTtNQUNYLENBQUMsQ0FDRjtNQUdEQyxLQUFLLEVBQUU7UUFDTGpQLEtBQUssRUFBRyxLQUFLO1FBQ2JrUCxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ2pCQyxTQUFTLEVBQUUsTUFBTTtRQUNqQkMsU0FBUyxFQUFFLENBQUM7UUFDWkMsU0FBUyxFQUFFLFdBQVc7UUFDdEJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLFFBQVEsRUFBQyxPQUFPO1FBQ2hCQyxRQUFRLEVBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUN0QkMsUUFBUSxFQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7UUFDdkJDLFFBQVEsRUFBRTtNQUVaLENBQUM7TUFDREMsS0FBSyxFQUFFO1FBQ0w1UCxLQUFLLEVBQUcsS0FBSztRQUNiNlAsY0FBYyxFQUFDLEVBQUU7UUFBSTtRQUNyQlgsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNqQkMsU0FBUyxFQUFFLE1BQU07UUFDakJDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFNBQVMsRUFBRSxXQUFXO1FBQ3RCQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxRQUFRLEVBQUUsS0FBSztRQUNmQyxRQUFRLEVBQUMsT0FBTztRQUNoQkMsUUFBUSxFQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDdEJDLFFBQVEsRUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO1FBQ3ZCQyxRQUFRLEVBQUU7TUFFWixDQUFDO01BQ0RwSCxNQUFNLEVBQUU7UUFBRUMsQ0FBQyxFQUFFLEVBQUU7UUFBRWhCLENBQUMsRUFBRSxFQUFFO1FBQUVpQixDQUFDLEVBQUUsRUFBRTtRQUFFQyxDQUFDLEVBQUU7TUFBRyxDQUFDO01BQ3RDTixVQUFVLEVBQUUsSUFBSTtNQUNoQjBILE1BQU0sRUFBRTtRQUNOekMsQ0FBQyxFQUFFLENBQUM7UUFDSkMsQ0FBQyxFQUFFLENBQUM7UUFDSk8sT0FBTyxFQUFFLHVCQUF1QjtRQUNoQ0MsV0FBVyxFQUFFLE1BQU07UUFDbkJpQyxXQUFXLEVBQUU7TUFDZixDQUFDO01BQ0RDLGFBQWEsRUFBRSxFQUFFO01BQ2pCQyxTQUFTLEVBQUUsU0FBUztNQUNwQnRDLFVBQVUsRUFBRTtRQUNWdUMsVUFBVSxFQUFFLENBQUM7TUFDZjtJQUNGLENBQUU7SUFDRmhRLE1BQU0sRUFBRTtNQUNOQyxVQUFVLEVBQUUsSUFBSTtNQUNoQmdRLGNBQWMsRUFBRTtJQUNsQixDQUFFO0lBQ0ZoUyxLQUFLLEVBQUU7TUFBQzBKLFNBQVMsRUFBQyxLQUFLO01BQUU1SCxLQUFLLEVBQUUsT0FBTztNQUFFN0IsTUFBTSxFQUFFO0lBQU8sQ0FBRTtJQUMxRFIsT0FBTyxFQUFFNkI7RUFBbUIsQ0FDN0IsQ0FDRSxDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlMlEsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RWOUI7QUFDZ0Q7QUFDZ0M7QUFFaEYsTUFBTXhWLE9BQU8sR0FBR3FFLElBQUEsSUFBNEk7RUFBQSxJQUEzSTtJQUFFbEIsT0FBTztJQUFFL0IsVUFBVTtJQUFFZ0Msa0JBQWtCO0lBQUVqQyxTQUFTO0lBQUVELFdBQVc7SUFBRU0saUJBQWlCO0lBQUVFLGNBQWM7SUFBRTJCLGFBQWE7SUFBRUM7RUFBZ0IsQ0FBQyxHQUFBZSxJQUFBO0VBQ3JKLE1BQU0sQ0FBQzJSLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUd0VywrQ0FBUSxDQUFDLENBQUMsT0FBTyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNsRSxNQUFNLENBQUN1VyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUd4VywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUMxRCxNQUFNLENBQUN5VyxpQkFBaUIsRUFBRUMsb0JBQW9CLENBQUMsR0FBRzFXLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQzlELE1BQU0yVyxjQUFjLEdBQUdyTiw2Q0FBTSxDQUFDLElBQUksQ0FBQztFQUNuQyxNQUFNc04sZ0JBQWdCLEdBQUd0Tiw2Q0FBTSxDQUFDLElBQUksQ0FBQztFQUVyQyxNQUFNdU4saUJBQWlCLEdBQUkxSixLQUFLLElBQUs7SUFDbkMxSixrQkFBa0IsQ0FBQzBKLEtBQUssQ0FBQzJKLE1BQU0sQ0FBQzVVLEtBQUssQ0FBQztJQUNwQyxJQUFJaUwsS0FBSyxDQUFDMkosTUFBTSxDQUFDNVUsS0FBSyxJQUFFLFVBQVUsRUFBQztNQUNqQ29VLFlBQVksQ0FBQyxDQUFDLFVBQVUsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUFBLENBQUMsTUFDakM7TUFDRkEsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDO0lBRUpsVixPQUFPLENBQUM2RCxHQUFHLENBQUNrSSxLQUFLLENBQUMySixNQUFNLENBQUM1VSxLQUFLLENBQUM7SUFDL0JkLE9BQU8sQ0FBQzZELEdBQUcsQ0FBQ29SLFNBQVMsQ0FBQztFQUN4QixDQUFDO0VBRUQsTUFBTS9LLFNBQVMsR0FBRztJQUFDLEdBQUcsRUFBQyxVQUFVO0lBQUMsR0FBRyxFQUFDLE1BQU07SUFBQyxHQUFHLEVBQUMsUUFBUTtJQUN2RCxHQUFHLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQyxRQUFRO0lBQUMsR0FBRyxFQUFDLE9BQU87SUFBQyxHQUFHLEVBQUMsT0FBTztJQUMvQyxHQUFHLEVBQUMsUUFBUTtJQUFDLElBQUksRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUNoRCxJQUFJLEVBQUMsTUFBTTtJQUFDLEdBQUcsRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUNoRCxJQUFJLEVBQUMsTUFBTTtJQUFDLElBQUksRUFBQyxTQUFTO0lBQUMsSUFBSSxFQUFDLE1BQU07SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUNsRCxJQUFJLEVBQUMsUUFBUTtJQUFDLElBQUksRUFBQztFQUFNLENBQUM7RUFFNUIsTUFBTXlMLHFCQUFxQixHQUFHQSxDQUFBLEtBQU07SUFDbEN2VixTQUFTLENBQUNzSixPQUFPLENBQUMvSCxLQUFLLElBQUk7TUFDekIsSUFBSSxDQUFDaEIsY0FBYyxDQUFDVSxRQUFRLENBQUNNLEtBQUssQ0FBQyxFQUFFO1FBQ25DVyxhQUFhLENBQUNYLEtBQUssRUFBRXNULFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNwQztJQUNGLENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRCxNQUFNVyx1QkFBdUIsR0FBR0EsQ0FBQSxLQUFNO0lBQ3BDeFYsU0FBUyxDQUFDc0osT0FBTyxDQUFDL0gsS0FBSyxJQUFJO01BQ3pCLElBQUloQixjQUFjLENBQUNVLFFBQVEsQ0FBQ00sS0FBSyxDQUFDLEVBQUU7UUFDbENXLGFBQWEsQ0FBQ1gsS0FBSyxFQUFFc1QsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3BDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVELE1BQU1ZLHdCQUF3QixHQUFHQSxDQUFBLEtBQU07SUFDckMxVixXQUFXLENBQUN1SixPQUFPLENBQUNqSSxPQUFPLElBQUk7TUFDN0IsSUFBSSxDQUFDaEIsaUJBQWlCLENBQUNZLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLEVBQUU7UUFDeENjLGVBQWUsQ0FBQ2QsT0FBTyxFQUFFd1QsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3hDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVELE1BQU1hLDBCQUEwQixHQUFHQSxDQUFBLEtBQU07SUFDdkMzVixXQUFXLENBQUN1SixPQUFPLENBQUNqSSxPQUFPLElBQUk7TUFDN0IsSUFBSWhCLGlCQUFpQixDQUFDWSxRQUFRLENBQUNJLE9BQU8sQ0FBQyxFQUFFO1FBQ3ZDYyxlQUFlLENBQUNkLE9BQU8sRUFBRXdULFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN4QztJQUNGLENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRCxNQUFNYyxpQkFBaUIsR0FBSUMsQ0FBQyxJQUFLO0lBQy9CWixrQkFBa0IsQ0FBQ1ksQ0FBQyxDQUFDTixNQUFNLENBQUM1VSxLQUFLLENBQUM7RUFDcEMsQ0FBQztFQUVELE1BQU1tVixtQkFBbUIsR0FBSUQsQ0FBQyxJQUFLO0lBQ2pDVixvQkFBb0IsQ0FBQ1UsQ0FBQyxDQUFDTixNQUFNLENBQUM1VSxLQUFLLENBQUM7RUFDdEMsQ0FBQztFQUVELE1BQU1vVix3QkFBd0IsR0FBSUYsQ0FBQyxJQUFLO0lBQ3RDLElBQUlBLENBQUMsQ0FBQ3JQLEdBQUcsS0FBSyxPQUFPLEVBQUU7TUFDckJxUCxDQUFDLENBQUNHLGNBQWMsQ0FBQyxDQUFDO01BQ2xCLE1BQU1DLGNBQWMsR0FBR2hXLFNBQVMsQ0FBQ2tCLE1BQU0sQ0FBQ0ssS0FBSyxJQUMzQ3VJLFNBQVMsQ0FBQ3ZJLEtBQUssQ0FBQyxDQUFDMFUsV0FBVyxDQUFDLENBQUMsQ0FBQ2hWLFFBQVEsQ0FBQzhULGVBQWUsQ0FBQ2tCLFdBQVcsQ0FBQyxDQUFDLENBQ3ZFLENBQUM7TUFDRCxJQUFJRCxjQUFjLENBQUM1TSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzdCbEgsYUFBYSxDQUFDOFQsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFbkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hEO01BQ0FHLGtCQUFrQixDQUFDLEVBQUUsQ0FBQztJQUN4QjtFQUNGLENBQUM7RUFFRCxNQUFNa0IsMEJBQTBCLEdBQUlOLENBQUMsSUFBSztJQUN4QyxJQUFJQSxDQUFDLENBQUNyUCxHQUFHLEtBQUssT0FBTyxFQUFFO01BQ3JCcVAsQ0FBQyxDQUFDRyxjQUFjLENBQUMsQ0FBQztNQUNsQixNQUFNSSxpQkFBaUIsR0FBR3BXLFdBQVcsQ0FBQ21CLE1BQU0sQ0FBQ0csT0FBTyxJQUNsREEsT0FBTyxDQUFDNFUsV0FBVyxDQUFDLENBQUMsQ0FBQ2hWLFFBQVEsQ0FBQ2dVLGlCQUFpQixDQUFDZ0IsV0FBVyxDQUFDLENBQUMsQ0FDaEUsQ0FBQztNQUNELElBQUlFLGlCQUFpQixDQUFDL00sTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNoQ2pILGVBQWUsQ0FBQ2dVLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFdEIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3JEO01BQ0FLLG9CQUFvQixDQUFDLEVBQUUsQ0FBQztJQUMxQjtFQUNGLENBQUM7O0VBRUQ7RUFDQSxNQUFNYyxjQUFjLEdBQUdoVyxTQUFTLENBQUNrQixNQUFNLENBQUNLLEtBQUssSUFDM0N3VCxlQUFlLEtBQUssRUFBRSxJQUFJakwsU0FBUyxDQUFDdkksS0FBSyxDQUFDLENBQUMwVSxXQUFXLENBQUMsQ0FBQyxDQUFDaFYsUUFBUSxDQUFDOFQsZUFBZSxDQUFDa0IsV0FBVyxDQUFDLENBQUMsQ0FDakcsQ0FBQzs7RUFFRDtFQUNBLE1BQU1FLGlCQUFpQixHQUFHcFcsV0FBVyxDQUFDbUIsTUFBTSxDQUFDRyxPQUFPLElBQ2xENFQsaUJBQWlCLEtBQUssRUFBRSxJQUFJNVQsT0FBTyxDQUFDNFUsV0FBVyxDQUFDLENBQUMsQ0FBQ2hWLFFBQVEsQ0FBQ2dVLGlCQUFpQixDQUFDZ0IsV0FBVyxDQUFDLENBQUMsQ0FDNUYsQ0FBQztFQUVELG9CQUNFMVgsMERBQUE7SUFBSzZELEtBQUssRUFBRTtNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFK1QsT0FBTyxFQUFFLE1BQU07TUFBRTVQLGVBQWUsRUFBRTtJQUFXO0VBQUUsZ0JBRTVFakksMERBQUEsQ0FBQ0ksdURBQUc7SUFBQ2lELFNBQVMsRUFBQyxrQ0FBa0M7SUFBQ1EsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFLO0VBQUUsZ0JBQ3hFOUQsMERBQUEsQ0FBQ0ssdURBQUc7SUFBQ3lYLEVBQUUsRUFBRTtFQUFFLGdCQUNUOVgsMERBQUE7SUFBSTZELEtBQUssRUFBRTtNQUFFMEosU0FBUyxFQUFFO0lBQU0sQ0FBRTtJQUFDbEssU0FBUyxFQUFDO0VBQXlCLEdBQUMsZ0NBRWpFLENBQ0QsQ0FBQyxlQUNOckQsMERBQUEsQ0FBQ0ssdURBQUc7SUFBQ3lYLEVBQUUsRUFBRTtFQUFFLGdCQUNUOVgsMERBQUEsQ0FBQ21XLHVEQUFNO0lBQ0xoVCxFQUFFLEVBQUMsT0FBTztJQUNWRyxPQUFPLEVBQUVHLE9BQVE7SUFDakJJLEtBQUssRUFBRTtNQUFFMEosU0FBUyxFQUFFO0lBQU0sQ0FBRTtJQUM1QmxLLFNBQVMsRUFBQztFQUE0QixHQUN2QyxvQkFFTyxDQUNMLENBQ0YsQ0FBQyxlQUdOckQsMERBQUEsQ0FBQ0ksdURBQUc7SUFBQ2lELFNBQVMsRUFBQyx1QkFBdUI7SUFBQ1EsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFNO0VBQUUsZ0JBQzlEOUQsMERBQUEsQ0FBQ2tXLHVEQUFTO0lBQUM2QixnQkFBZ0IsRUFBQyxHQUFHO0lBQUMxVSxTQUFTLEVBQUM7RUFBTSxnQkFFOUNyRCwwREFBQSxDQUFDa1csdURBQVMsQ0FBQzhCLElBQUk7SUFBQ0MsUUFBUSxFQUFDLEdBQUc7SUFBQzVVLFNBQVMsRUFBQztFQUFPLGdCQUM1Q3JELDBEQUFBLENBQUNrVyx1REFBUyxDQUFDeE4sTUFBTSxRQUFDLHNDQUF3QixDQUFDLGVBQzNDMUksMERBQUEsQ0FBQ2tXLHVEQUFTLENBQUNoTyxJQUFJLHFCQUNibEksMERBQUE7SUFBS3FELFNBQVMsRUFBQztFQUFLLGdCQUNsQnJELDBEQUFBO0lBQUtxRCxTQUFTLEVBQUM7RUFBaUMsZ0JBQzlDckQsMERBQUE7SUFDRXlOLElBQUksRUFBQyxPQUFPO0lBQ1p0SyxFQUFFLEVBQUcsVUFBVTtJQUNmeVEsSUFBSSxFQUFDLGFBQWE7SUFDbEJ6UixLQUFLLEVBQUMsVUFBVTtJQUNoQmtCLFNBQVMsRUFBQyxrQkFBa0I7SUFDNUI2VSxRQUFRLEVBQUVwQixpQkFBa0I7SUFDNUJxQixPQUFPLEVBQUV6VyxVQUFVLEtBQUssVUFBVyxDQUFDO0VBQUEsQ0FDckMsQ0FBQyxlQUNGMUIsMERBQUE7SUFDQW9ZLE9BQU8sRUFBQyxVQUFVO0lBQ2xCL1UsU0FBUyxFQUFDLHVCQUF1QjtJQUNqQ1EsS0FBSyxFQUFFO01BQUV3VSxRQUFRLEVBQUU7SUFBTztFQUFFLEdBQzNCLDJCQUFZLENBQ1YsQ0FBQyxlQUNOclksMERBQUE7SUFBS3FELFNBQVMsRUFBQztFQUFpQyxnQkFDOUNyRCwwREFBQTtJQUNFeU4sSUFBSSxFQUFDLE9BQU87SUFDWnRLLEVBQUUsRUFBQyxXQUFXO0lBQ2R5USxJQUFJLEVBQUMsYUFBYTtJQUNsQnpSLEtBQUssRUFBQyxXQUFXO0lBQ2pCa0IsU0FBUyxFQUFDLGtCQUFrQjtJQUM1QjZVLFFBQVEsRUFBRXBCLGlCQUFrQjtJQUM1QnFCLE9BQU8sRUFBRXpXLFVBQVUsS0FBSyxXQUFZLENBQUM7RUFBQSxDQUN0QyxDQUFDLGVBQ0YxQiwwREFBQTtJQUNBb1ksT0FBTyxFQUFDLFdBQVc7SUFDbkIvVSxTQUFTLEVBQUMsdUJBQXVCO0lBQ2pDUSxLQUFLLEVBQUU7TUFBRXdVLFFBQVEsRUFBRTtJQUFPO0VBQUUsR0FDM0IsNkNBQWUsQ0FDYixDQUNGLENBQ1MsQ0FDRixDQUFDLGVBR2pCclksMERBQUEsQ0FBQ2tXLHVEQUFTLENBQUM4QixJQUFJO0lBQUNDLFFBQVEsRUFBQyxHQUFHO0lBQUM1VSxTQUFTLEVBQUM7RUFBTyxnQkFDNUNyRCwwREFBQSxDQUFDa1csdURBQVMsQ0FBQ3hOLE1BQU0sUUFBQyxPQUF1QixDQUFDLGVBQzFDMUksMERBQUEsQ0FBQ2tXLHVEQUFTLENBQUNoTyxJQUFJLHFCQUNibEksMERBQUE7SUFBS3FELFNBQVMsRUFBQztFQUFxQyxnQkFDbERyRCwwREFBQSxDQUFDbVcsdURBQU07SUFBQ3pDLElBQUksRUFBQyxJQUFJO0lBQUM0RSxPQUFPLEVBQUMsaUJBQWlCO0lBQUNoVixPQUFPLEVBQUUwVDtFQUFzQixHQUFDLG9CQUFXLENBQUMsZUFDeEZoWCwwREFBQSxDQUFDbVcsdURBQU07SUFBQ3pDLElBQUksRUFBQyxJQUFJO0lBQUM0RSxPQUFPLEVBQUMsbUJBQW1CO0lBQUNoVixPQUFPLEVBQUUyVDtFQUF3QixHQUFDLG9CQUFXLENBQ3hGLENBQUMsZUFDTmpYLDBEQUFBLENBQUNxVyx1REFBVTtJQUFDaFQsU0FBUyxFQUFDO0VBQU0sZ0JBQzFCckQsMERBQUEsQ0FBQ29XLHVEQUFJLENBQUNtQyxPQUFPO0lBQ1hDLFdBQVcsRUFBQywrQ0FBWTtJQUN4QnJXLEtBQUssRUFBRXFVLGVBQWdCO0lBQ3ZCMEIsUUFBUSxFQUFFZCxpQkFBa0I7SUFDNUJxQixTQUFTLEVBQUVsQix3QkFBeUI7SUFDcENtQixHQUFHLEVBQUU5QjtFQUFlLENBQ3JCLENBQUMsZUFDRjVXLDBEQUFBLENBQUNtVyx1REFBTTtJQUNMbUMsT0FBTyxFQUFDLG1CQUFtQjtJQUMzQmhWLE9BQU8sRUFBRUEsQ0FBQSxLQUFNbVQsa0JBQWtCLENBQUMsRUFBRTtFQUFFLEdBQ3ZDLG9CQUVPLENBQ0UsQ0FBQyxFQUNaZ0IsY0FBYyxDQUFDcFAsR0FBRyxDQUFFckYsS0FBSyxpQkFDeEJoRCwwREFBQTtJQUFLZ0ksR0FBRyxFQUFFaEY7RUFBTSxnQkFDZGhELDBEQUFBO0lBQ0V5TixJQUFJLEVBQUU2SSxTQUFTLENBQUMsQ0FBQyxDQUFFO0lBQ25CblQsRUFBRSxFQUFJSCxLQUFNO0lBQ1ptVixPQUFPLEVBQUVuVyxjQUFjLENBQUNVLFFBQVEsQ0FBQ00sS0FBSyxDQUFFO0lBQ3hDa1YsUUFBUSxFQUFFQSxDQUFBLEtBQU12VSxhQUFhLENBQUNYLEtBQUssRUFBQ3NULFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRTtJQUNsRDFDLElBQUksRUFBQztFQUFPLENBQ2IsQ0FBQyxlQUNGNVQsMERBQUE7SUFBT29ZLE9BQU8sRUFBRXBWO0VBQU0sR0FBRXVJLFNBQVMsQ0FBQ3ZJLEtBQUssQ0FBUyxDQUM3QyxDQUNOLENBQUMsRUFDRHlVLGNBQWMsQ0FBQzVNLE1BQU0sS0FBSyxDQUFDLGlCQUMxQjdLLDBEQUFBO0lBQUdxRCxTQUFTLEVBQUM7RUFBa0IsR0FBQyxzRkFBaUIsQ0FFckMsQ0FDRixDQUFDLGVBR2pCckQsMERBQUEsQ0FBQ2tXLHVEQUFTLENBQUM4QixJQUFJO0lBQUNDLFFBQVEsRUFBQyxHQUFHO0lBQUM1VSxTQUFTLEVBQUM7RUFBTyxnQkFDNUNyRCwwREFBQSxDQUFDa1csdURBQVMsQ0FBQ3hOLE1BQU0sUUFBQyxTQUF5QixDQUFDLGVBQzVDMUksMERBQUEsQ0FBQ2tXLHVEQUFTLENBQUNoTyxJQUFJLHFCQUNibEksMERBQUE7SUFBS3FELFNBQVMsRUFBQztFQUFxQyxnQkFDbERyRCwwREFBQSxDQUFDbVcsdURBQU07SUFBQ3pDLElBQUksRUFBQyxJQUFJO0lBQUM0RSxPQUFPLEVBQUMsaUJBQWlCO0lBQUNoVixPQUFPLEVBQUU0VDtFQUF5QixHQUFDLG9CQUFXLENBQUMsZUFDM0ZsWCwwREFBQSxDQUFDbVcsdURBQU07SUFBQ3pDLElBQUksRUFBQyxJQUFJO0lBQUM0RSxPQUFPLEVBQUMsbUJBQW1CO0lBQUNoVixPQUFPLEVBQUU2VDtFQUEyQixHQUFDLG9CQUFXLENBQzNGLENBQUMsZUFDTm5YLDBEQUFBLENBQUNxVyx1REFBVTtJQUFDaFQsU0FBUyxFQUFDO0VBQU0sZ0JBQzFCckQsMERBQUEsQ0FBQ29XLHVEQUFJLENBQUNtQyxPQUFPO0lBQ1hDLFdBQVcsRUFBQyxtQ0FBVTtJQUN0QnJXLEtBQUssRUFBRXVVLGlCQUFrQjtJQUN6QndCLFFBQVEsRUFBRVosbUJBQW9CO0lBQzlCbUIsU0FBUyxFQUFFZCwwQkFBMkI7SUFDdENlLEdBQUcsRUFBRTdCO0VBQWlCLENBQ3ZCLENBQUMsZUFDRjdXLDBEQUFBLENBQUNtVyx1REFBTTtJQUNMbUMsT0FBTyxFQUFDLG1CQUFtQjtJQUMzQmhWLE9BQU8sRUFBRUEsQ0FBQSxLQUFNcVQsb0JBQW9CLENBQUMsRUFBRTtFQUFFLEdBQ3pDLG9CQUVPLENBQ0UsQ0FBQyxFQUNaaUIsaUJBQWlCLENBQUN2UCxHQUFHLENBQUV2RixPQUFPLGlCQUM3QjlDLDBEQUFBO0lBQUtnSSxHQUFHLEVBQUVsRjtFQUFRLGdCQUNoQjlDLDBEQUFBO0lBQ0V5TixJQUFJLEVBQUU2SSxTQUFTLENBQUMsQ0FBQyxDQUFFO0lBQ25CblQsRUFBRSxFQUFJTCxPQUFRO0lBQ2RxVixPQUFPLEVBQUVyVyxpQkFBaUIsQ0FBQ1ksUUFBUSxDQUFDSSxPQUFPLENBQUU7SUFDN0NvVixRQUFRLEVBQUVBLENBQUEsS0FBTXRVLGVBQWUsQ0FBQ2QsT0FBTyxFQUFDd1QsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFFO0lBQ3REMUMsSUFBSSxFQUFDO0VBQVMsQ0FDZixDQUFDLGVBQ0Y1VCwwREFBQTtJQUFPb1ksT0FBTyxFQUFFdFY7RUFBUSxHQUFFQSxPQUFlLENBQ3RDLENBQ04sQ0FBQyxFQUNEOFUsaUJBQWlCLENBQUMvTSxNQUFNLEtBQUssQ0FBQyxpQkFDN0I3SywwREFBQTtJQUFHcUQsU0FBUyxFQUFDO0VBQWtCLEdBQUMsMEVBQWUsQ0FFbkMsQ0FDRixDQUdQLENBQ1IsQ0FDRixDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlL0MsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUTZCO0FBQ2hCOztBQUVuQztBQUNBLE1BQU00RixTQUFTLEdBQUcsTUFBT3dELEdBQUcsSUFBSztFQUMvQixJQUFJO0lBQ0YsTUFBTW5ELFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNrRCxHQUFHLENBQUM7SUFDakMsSUFBSSxDQUFDbkQsUUFBUSxDQUFDRSxFQUFFLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMsdUJBQXVCSCxRQUFRLENBQUNvRCxNQUFNLEVBQUUsQ0FBQztJQUMzRSxNQUFNQyxXQUFXLEdBQUdyRCxRQUFRLENBQUNzRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDeEQsSUFBSUYsV0FBVyxJQUFJQSxXQUFXLENBQUNsSCxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtNQUMzRCxPQUFPLE1BQU02RCxRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUMsTUFBTTtNQUNMLE1BQU1tRCxJQUFJLEdBQUcsTUFBTXhELFFBQVEsQ0FBQ3dELElBQUksQ0FBQyxDQUFDO01BQ2xDLE9BQU9BLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDckgsTUFBTSxDQUFFc0gsSUFBSSxJQUFLQSxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlEO0VBQ0YsQ0FBQyxDQUFDLE9BQU85SSxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDOztBQUVEO0FBQ0EsTUFBTXVOLGFBQWEsR0FBRyxNQUFPeEksUUFBUSxJQUFLO0VBQ3hDLElBQUk7SUFDRixNQUFNSSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDTCxRQUFRLENBQUM7SUFDdEMsTUFBTTRELElBQUksR0FBRyxNQUFNeEQsUUFBUSxDQUFDd0QsSUFBSSxDQUFDLENBQUM7SUFDbEMsT0FBT0EsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNySCxNQUFNLENBQUVzSCxJQUFJLElBQUtBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7RUFDOUQsQ0FBQyxDQUFDLE9BQU85SSxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUM7SUFDcEMsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDO0FBRUQsTUFBTW1ELGFBQWEsR0FBR0ksSUFBQSxJQUFtRTtFQUFBLElBQWxFO0lBQUVXLE1BQU07SUFBRTVELFVBQVU7SUFBRXNCLEtBQUs7SUFBRUYsT0FBTztJQUFFZ0QsU0FBUztJQUFFUDtFQUFXLENBQUMsR0FBQVosSUFBQTtFQUNsRixNQUFNLENBQUN3RyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHbkwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDOUMsTUFBTSxDQUFDeUYsS0FBSyxFQUFFMkYsUUFBUSxDQUFDLEdBQUdwTCwrQ0FBUSxDQUFDLE9BQU8sQ0FBQztFQUUzQ0MsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsTUFBTW9PLGFBQWEsR0FBRyxNQUFBQSxDQUFBLEtBQVk7TUFDaEMsSUFBSTtRQUNGLE1BQU10QyxJQUFJLEdBQUcsQ0FBQztRQUNkLE1BQU11QyxRQUFRLEdBQUd6SSxTQUFTLElBQUk5QyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLENBQUM7UUFDM0QsTUFBTTJWLElBQUksR0FBRyxHQUFHdlMsU0FBc0IsNkJBQTZCbUksUUFBUSxpQkFBaUJ2QyxJQUFJLE9BQU87UUFDdkcsTUFBTTRNLFdBQVcsR0FBRyxHQUFHeFMsU0FBc0IsNkJBQTZCbUksUUFBUSxzQkFBc0I7UUFDeEcsTUFBTXNLLE1BQU0sR0FBRyxHQUFHelMsU0FBc0IsOEJBQThCO1FBQ3RFO1FBQ0EsTUFBTSxDQUFDMFMsUUFBUSxFQUFFdFgsV0FBVyxFQUFFdVgsTUFBTSxDQUFDLEdBQUcsTUFBTWxOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQ3hENUYsU0FBUyxDQUFDeVMsSUFBSSxDQUFDLEVBQ2ZoSyxhQUFhLENBQUNpSyxXQUFXLENBQUMsRUFDMUIxUyxTQUFTLENBQUMyUyxNQUFNLENBQUMsQ0FDbEIsQ0FBQztRQUVGLElBQUksQ0FBQ3JYLFdBQVcsQ0FBQ2tCLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDckN6QixPQUFPLENBQUN5RixJQUFJLENBQUMsWUFBWWhFLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1VBQ2xEc0ksWUFBWSxDQUFDLEVBQUUsQ0FBQztVQUNoQjtRQUNGOztRQUVBO1FBQ0EsTUFBTXNCLFlBQVksR0FBR2xMLFdBQVcsQ0FBQ21MLE9BQU8sQ0FBQzdKLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxNQUFNK0QsV0FBVyxHQUFHaVMsUUFBUSxDQUFDcE0sWUFBWSxDQUFDO1FBQzFDLElBQUksQ0FBQzdGLFdBQVcsRUFBRTtVQUNoQnhGLE9BQU8sQ0FBQ3lGLElBQUksQ0FBQyxvQ0FBb0M0RixZQUFZLElBQUksQ0FBQztVQUNsRXRCLFlBQVksQ0FBQyxFQUFFLENBQUM7VUFDaEI7UUFDRjs7UUFFQTtRQUNBLE1BQU00TixhQUFhLEdBQUd2SCxNQUFNLENBQUNDLE9BQU8sQ0FBQzdLLFdBQVcsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDNkMsS0FBQTtVQUFBLElBQUMsQ0FBQ2xELEdBQUcsRUFBRTdGLEtBQUssQ0FBQyxHQUFBK0ksS0FBQTtVQUFBLE9BQU07WUFDdkU2QixRQUFRLEVBQUUvRSxHQUFHO1lBQ2I3RixLQUFLLEVBQUU2RixHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRytHLFVBQVUsQ0FBQzVNLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBRyxDQUFDO1lBQUU7WUFDckQ4VyxTQUFTLEVBQUVGLE1BQU0sQ0FBQy9RLEdBQUc7VUFDdkIsQ0FBQztRQUFBLENBQUMsQ0FBQzs7UUFFSDtRQUNBLE1BQU0wRyxVQUFVLEdBQUdzSyxhQUFhLENBQzdCaE0sSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLQSxDQUFDLENBQUMvSyxLQUFLLEdBQUc4SyxDQUFDLENBQUM5SyxLQUFLLENBQUMsQ0FDakNpRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUVmZ0QsWUFBWSxDQUFDc0QsVUFBVSxDQUFDO1FBQ3hCckQsUUFBUSxDQUFDLEdBQUd2SSxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMvQnlDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNoQixDQUFDLENBQUMsT0FBT25FLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxhQUFhLEVBQUVBLEtBQUssQ0FBQztNQUNyQztJQUNGLENBQUM7O0lBRUQ7SUFDQSxJQUNFTSxVQUFVLEtBQUssVUFBVSxLQUN4QjRELE1BQU0sSUFBSTZGLFNBQVMsQ0FBQ04sTUFBTSxLQUFLLENBQUMsSUFBSS9FLFNBQVMsQ0FBQyxFQUMvQztNQUNBd0ksYUFBYSxDQUFDLENBQUM7SUFDakI7RUFDRixDQUFDLEVBQUUsQ0FBQzVNLFVBQVUsRUFBRXNCLEtBQUssRUFBRUYsT0FBTyxFQUFFb1csSUFBSSxDQUFDQyxTQUFTLENBQUNyVCxTQUFTLENBQUMsRUFBRVIsTUFBTSxDQUFDLENBQUM7RUFFbkUsb0JBQ0V0RiwwREFBQTtJQUFLNkQsS0FBSyxFQUFFO01BQUMwSixTQUFTLEVBQUMsSUFBSTtNQUFDQyxZQUFZLEVBQUMsSUFBSTtNQUFFN0gsS0FBSyxFQUFFLE1BQU07TUFBRTdCLE1BQU0sRUFBRTtJQUFNO0VBQUUsZ0JBQzVFOUQsMERBQUEsQ0FBQ3dKLHVEQUFJO0lBQ0h2RSxJQUFJLEVBQUUsQ0FDSjtNQUNFd0ksSUFBSSxFQUFFLEtBQUs7TUFDWHNGLENBQUMsRUFBRTVILFNBQVMsQ0FBQzlDLEdBQUcsQ0FBRS9GLElBQUksSUFBS0EsSUFBSSxDQUFDSCxLQUFLLENBQUMsQ0FBQ2lYLE9BQU8sQ0FBQyxDQUFDO01BQUU7TUFDbERwRyxDQUFDLEVBQUU3SCxTQUFTLENBQUM5QyxHQUFHLENBQUUvRixJQUFJLElBQUtBLElBQUksQ0FBQ3lLLFFBQVEsQ0FBQyxDQUFDcU0sT0FBTyxDQUFDLENBQUM7TUFBRTtNQUNyREMsVUFBVSxFQUFFbE8sU0FBUyxDQUFDOUMsR0FBRyxDQUFFL0YsSUFBSSxJQUFLQSxJQUFJLENBQUMyVyxTQUFTLENBQUMsQ0FBQ0csT0FBTyxDQUFDLENBQUM7TUFBRTtNQUMvREUsV0FBVyxFQUFFLEdBQUc7TUFBRTtNQUNsQjFMLE1BQU0sRUFBRTtRQUFFakYsS0FBSyxFQUFFO01BQVksQ0FBQztNQUFFO01BQ2hDNFEsYUFBYSxFQUNiLG1EQUFtRCxDQUFFO0lBQ3ZELENBQUMsQ0FDRDtJQUNGOVQsTUFBTSxFQUFFO01BQ05DLEtBQUssRUFBRTtRQUNMcUUsSUFBSSxFQUFFckUsS0FBSztRQUNYcU4sQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLElBQUk7UUFDUHlCLE9BQU8sRUFBRTtNQUNYLENBQUM7TUFDREUsS0FBSyxFQUFFO1FBQ0xFLFNBQVMsRUFBRSxNQUFNO1FBQ2pCQyxTQUFTLEVBQUUsQ0FBQztRQUNaMEUsTUFBTSxFQUFFLEtBQUs7UUFDYkMsVUFBVSxFQUFFO01BQ2QsQ0FBQztNQUNEbkUsS0FBSyxFQUFFO1FBQ0xULFNBQVMsRUFBRSxNQUFNO1FBQ2pCQyxTQUFTLEVBQUUsQ0FBQztRQUNaMEUsTUFBTSxFQUFFLEtBQUs7UUFDYjlULEtBQUssRUFBRTtNQUNULENBQUM7TUFDRHFJLFlBQVksRUFBRSxPQUFPO01BQ3JCQyxhQUFhLEVBQUUsT0FBTztNQUN0QkMsTUFBTSxFQUFFO1FBQUVDLENBQUMsRUFBRSxFQUFFO1FBQUVoQixDQUFDLEVBQUUsRUFBRTtRQUFFaUIsQ0FBQyxFQUFFLEVBQUU7UUFBRUMsQ0FBQyxFQUFFO01BQUcsQ0FBQztNQUN0Q2lGLFVBQVUsRUFBRTtRQUNWQyxLQUFLLEVBQUMsTUFBTTtRQUNaRyxJQUFJLEVBQUU7VUFDSkMsSUFBSSxFQUFFLEVBQUU7VUFBRTtVQUNWL0ssS0FBSyxFQUFFLE9BQU8sQ0FBRTtRQUNsQixDQUFDO1FBQ0Q0SyxPQUFPLEVBQUUsYUFBYTtRQUFFO1FBQ3hCQyxXQUFXLEVBQUUsTUFBTSxDQUFFO01BQ3ZCO0lBQ0YsQ0FBRTtJQUVBM1AsS0FBSyxFQUFFO01BQUU4QixLQUFLLEVBQUUsTUFBTTtNQUFFN0IsTUFBTSxFQUFFO0lBQU8sQ0FBRSxDQUFDO0VBQUEsQ0FDN0MsQ0FDRSxDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlUyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKdUI7QUFDaEI7O0FBRW5DO0FBQ0EsTUFBTTJCLFNBQVMsR0FBRyxNQUFPd0QsR0FBRyxJQUFLO0VBQy9CLElBQUk7SUFDRixNQUFNbkQsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ2tELEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUNuRCxRQUFRLENBQUNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyx1QkFBdUJILFFBQVEsQ0FBQ29ELE1BQU0sRUFBRSxDQUFDO0lBQzNFLE1BQU1DLFdBQVcsR0FBR3JELFFBQVEsQ0FBQ3NELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUN4RCxJQUFJRixXQUFXLElBQUlBLFdBQVcsQ0FBQ2xILFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO01BQzNELE9BQU8sTUFBTTZELFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxNQUFNO01BQ0wsTUFBTW1ELElBQUksR0FBRyxNQUFNeEQsUUFBUSxDQUFDd0QsSUFBSSxDQUFDLENBQUM7TUFDbEMsT0FBT0EsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNySCxNQUFNLENBQUVzSCxJQUFJLElBQUtBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUQ7RUFDRixDQUFDLENBQUMsT0FBTzlJLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxjQUFjLEVBQUVBLEtBQUssQ0FBQztJQUNwQyxPQUFPLEVBQUU7RUFDWDtBQUNGLENBQUM7QUFJRCxNQUFNa0QsYUFBYSxHQUFHSyxJQUFBLElBQStDO0VBQUEsSUFBOUM7SUFBRVcsTUFBTTtJQUFFNUQsVUFBVTtJQUFFc0IsS0FBSztJQUFFdUM7RUFBVyxDQUFDLEdBQUFaLElBQUE7RUFDOUQsTUFBTSxDQUFDd0csU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR25MLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQzlDLE1BQU0sQ0FBQ3lGLEtBQUssRUFBRTJGLFFBQVEsQ0FBQyxHQUFHcEwsK0NBQVEsQ0FBQyxRQUFRLENBQUM7RUFFNUNDLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1vTyxhQUFhLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO01BQ2hDLElBQUk7UUFDRixNQUFNdEMsSUFBSSxHQUFHLENBQUM7UUFDZCxNQUFNdUMsUUFBUSxHQUFHdkwsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTTJWLElBQUksR0FBRyxHQUFHdlMsU0FBc0IsNkJBQTZCbUksUUFBUSx1QkFBdUJ2QyxJQUFJLE9BQU87UUFDN0csTUFBTTZNLE1BQU0sR0FBRyxHQUFHelMsU0FBc0IsOEJBQThCOztRQUV0RTtRQUNBLE1BQU0sQ0FBQzBTLFFBQVEsRUFBRUMsTUFBTSxDQUFDLEdBQUcsTUFBTWxOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQzNDNUYsU0FBUyxDQUFDeVMsSUFBSSxDQUFDLEVBQ2Z6UyxTQUFTLENBQUMyUyxNQUFNLENBQUMsQ0FDbEIsQ0FBQztRQUVGeFgsT0FBTyxDQUFDNkQsR0FBRyxDQUFDLEdBQUcsRUFBQzRULFFBQVEsQ0FBQzs7UUFHekI7UUFDQSxNQUFNRSxhQUFhLEdBQUd2SCxNQUFNLENBQUNDLE9BQU8sQ0FBQ29ILFFBQVEsQ0FBQyxDQUFDelEsR0FBRyxDQUFDNkMsS0FBQTtVQUFBLElBQUMsQ0FBQ2xELEdBQUcsRUFBRTdGLEtBQUssQ0FBQyxHQUFBK0ksS0FBQTtVQUFBLE9BQU07WUFFcEU2QixRQUFRLEVBQUUvRSxHQUFHO1lBQ2I3RixLQUFLLEVBQUU2RixHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRytHLFVBQVUsQ0FBQzVNLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ3BEOFcsU0FBUyxFQUFFRixNQUFNLENBQUMvUSxHQUFHO1VBQ3ZCLENBQUM7UUFBQSxDQUFDLENBQUM7UUFDSDNHLE9BQU8sQ0FBQzZELEdBQUcsQ0FBQyxHQUFHLEVBQUM4VCxhQUFhLENBQUM7O1FBRzlCO1FBQ0EsTUFBTXRLLFVBQVUsR0FBR3NLLGFBQWEsQ0FDN0JoTSxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtBLENBQUMsQ0FBQy9LLEtBQUssR0FBRzhLLENBQUMsQ0FBQzlLLEtBQUssQ0FBQyxDQUNqQ2lHLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRWZnRCxZQUFZLENBQUNzRCxVQUFVLENBQUM7UUFDeEJyRCxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ2pCaEssT0FBTyxDQUFDNkQsR0FBRyxDQUFDaUcsU0FBUyxDQUFDO1FBQ3RCNUYsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hCLENBQUMsQ0FBQyxPQUFPbkUsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGFBQWEsRUFBRUEsS0FBSyxDQUFDO01BQ3JDO0lBQ0YsQ0FBQztJQUVELElBQUlNLFVBQVUsS0FBSyxXQUFXLEtBQUs0RCxNQUFNLElBQUk2RixTQUFTLENBQUNOLE1BQU0sS0FBSyxDQUFDLENBQUUsRUFBRTtNQUNyRXlELGFBQWEsQ0FBQyxDQUFDO0lBQ2pCO0VBQ0YsQ0FBQyxFQUFFLENBQUM1TSxVQUFVLEVBQUVzQixLQUFLLEVBQUVzQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7O0VBRWpDLG9CQUNFdEYsMERBQUE7SUFBSzZELEtBQUssRUFBRTtNQUFDMEosU0FBUyxFQUFDLElBQUk7TUFBQ0MsWUFBWSxFQUFDLElBQUk7TUFBRTdILEtBQUssRUFBRSxNQUFNO01BQUU3QixNQUFNLEVBQUU7SUFBTTtFQUFFLGdCQUM1RTlELDBEQUFBLENBQUN3Six1REFBSTtJQUNIdkUsSUFBSSxFQUFFLENBQ0o7TUFDRXdJLElBQUksRUFBRSxLQUFLO01BQ1hzRixDQUFDLEVBQUU1SCxTQUFTLENBQUM5QyxHQUFHLENBQUUvRixJQUFJLElBQUtBLElBQUksQ0FBQ0gsS0FBSyxDQUFDLENBQUNpWCxPQUFPLENBQUMsQ0FBQztNQUNoRHBHLENBQUMsRUFBRTdILFNBQVMsQ0FBQzlDLEdBQUcsQ0FBRS9GLElBQUksSUFBS0EsSUFBSSxDQUFDeUssUUFBUSxDQUFDLENBQUNxTSxPQUFPLENBQUMsQ0FBQztNQUNuREMsVUFBVSxFQUFFbE8sU0FBUyxDQUFDOUMsR0FBRyxDQUFFL0YsSUFBSSxJQUFLQSxJQUFJLENBQUMyVyxTQUFTLENBQUMsQ0FBQ0csT0FBTyxDQUFDLENBQUM7TUFBRTs7TUFFL0RFLFdBQVcsRUFBRSxHQUFHO01BQ2hCMUwsTUFBTSxFQUFFO1FBQUVqRixLQUFLLEVBQUU7TUFBWSxDQUFDO01BQzlCNFEsYUFBYSxFQUNiLG1EQUFtRCxDQUFFO0lBQ3ZELENBQUMsQ0FDRDtJQUNGOVQsTUFBTSxFQUFFO01BQ05DLEtBQUssRUFBRTtRQUNMcUUsSUFBSSxFQUFFckUsS0FBSztRQUNYcU4sQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLElBQUk7UUFDUHlCLE9BQU8sRUFBRTtNQUNYLENBQUM7TUFDREUsS0FBSyxFQUFFO1FBQ0xFLFNBQVMsRUFBRSxNQUFNO1FBQ2pCQyxTQUFTLEVBQUUsQ0FBQztRQUNaMEUsTUFBTSxFQUFFLEtBQUs7UUFDYkMsVUFBVSxFQUFFO01BQ2QsQ0FBQztNQUNEbkUsS0FBSyxFQUFFO1FBQ0xULFNBQVMsRUFBRSxNQUFNO1FBQ2pCQyxTQUFTLEVBQUUsQ0FBQztRQUNaMEUsTUFBTSxFQUFFLEtBQUs7UUFDYjlULEtBQUssRUFBRTtNQUNULENBQUM7TUFDRHFJLFlBQVksRUFBRSxPQUFPO01BQ3JCQyxhQUFhLEVBQUUsT0FBTztNQUN0QkMsTUFBTSxFQUFFO1FBQUVDLENBQUMsRUFBRSxFQUFFO1FBQUVoQixDQUFDLEVBQUUsRUFBRTtRQUFFaUIsQ0FBQyxFQUFFLEVBQUU7UUFBRUMsQ0FBQyxFQUFFO01BQUcsQ0FBQztNQUN0Q2lGLFVBQVUsRUFBRTtRQUNWQyxLQUFLLEVBQUMsTUFBTTtRQUNaRyxJQUFJLEVBQUU7VUFDSkMsSUFBSSxFQUFFLEVBQUU7VUFBRTtVQUNWL0ssS0FBSyxFQUFFLE9BQU8sQ0FBRTtRQUNsQixDQUFDO1FBQ0Q0SyxPQUFPLEVBQUUsYUFBYTtRQUFFO1FBQ3hCQyxXQUFXLEVBQUUsTUFBTSxDQUFFO01BQ3ZCO0lBQ0YsQ0FBRTtJQUVGM1AsS0FBSyxFQUFFO01BQUU4QixLQUFLLEVBQUUsTUFBTTtNQUFFN0IsTUFBTSxFQUFFO0lBQU8sQ0FBRSxDQUFDO0VBQUEsQ0FDM0MsQ0FDRSxDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlUSxhQUFhOzs7Ozs7VUNoSTVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2FwcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbnRlbnQuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9nby1hbnl3aGVyZS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL215LWFwcC8uL3NyYy9vY2N1cHktY29tcGFueS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL29jY3VweS5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BlcnNvbmEtdG9waWMuanN4Iiwid2VicGFjazovL215LWFwcC8uL3NyYy9zaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvdHJlbmQtY29tcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RyZW5kLXRvcGl4LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215LWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyLmpzeCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQuanN4JztcbmltcG9ydCB7IHVzZUF1dGgwIH0gZnJvbSAnQGF1dGgwL2F1dGgwLXJlYWN0JztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCB7IGxvZ2luV2l0aFJlZGlyZWN0LCBsb2dvdXQsIGlzQXV0aGVudGljYXRlZCwgdXNlciB9ID0gdXNlQXV0aDAoKTsgLy8gQXV0aDDjga7mg4XloLHjgpLlj5blvpdcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBsb2dpbldpdGhSZWRpcmVjdCh7XG4gICAgICAgIGNvbm5lY3Rpb246ICdVc2VybmFtZS1QYXNzd29yZC1BdXRoZW50aWNhdGlvbicsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44Ot44Kw44Kk44Oz44Ko44Op44O8OlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXJyb3dDb2xvciA9IFtcbiAgICAnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJyxcbiAgICAnIzNFOUU2RicsICcjRjM4MTgxJywgJyM1NDVFNzUnLCAnI0ZGQjYyNycsICcjNTc3NTkwJyxcbiAgXTtcbiAgY29uc3QgY29tcGFueUxpc3QgPSBbXG4gICAgJ+m5v+WztuW7uuioreagquW8j+S8muekvicsICfmoKrlvI/kvJrnpL7lpKfmnpfntYQnLCAn5riF5rC05bu66Kit5qCq5byP5Lya56S+JywgJ+Wkp+aIkOW7uuioreagquW8j+S8muekvicsXG4gICAgJ+agquW8j+S8muekvuerueS4reW3peWLmeW6lycsICfmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7MnLCAn5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+JyxcbiAgICAn5LqU5rSL5bu66Kit5qCq5byP5Lya56S+JywgJ+agquW8j+S8muekvuODleOCuOOCvycsICfmiLjnlLDlu7roqK3moKrlvI/kvJrnpL4nLCAn5qCq5byP5Lya56S+54aK6LC357WEJyxcbiAgXTtcbiAgY29uc3QgdG9waWNMaXN0ID0gWycwJywgJzEnLCAnMicsICczJywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMScsXCIxNVwiLFwiMTdcIixcIjEzXCIsXCIxNFwiLFwiMTZcIixcIjE5XCIsXCIyM1wiLFwiMjRcIixcIjMxXCIsXCIxMlwiLFwiMTBcIl07XG5cbiAgY29uc3QgW3Zpc3VhbFR5cGUsIHNldFZpc3VhbFR5cGVdID0gdXNlU3RhdGUoJ29uZS10b3BpYycpO1xuICBjb25zdCBbaXNBcHBsaWVkLCBzZXRJc0FwcGxpZWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzZWxlY3RlZENvbXBhbmllcywgc2V0U2VsZWN0ZWRDb21wYW5pZXNdID0gdXNlU3RhdGUoWyfmoKrlvI/kvJrnpL7nhorosLfntYQnXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFRvcGljcywgc2V0U2VsZWN0ZWRUb3BpY3NdID0gdXNlU3RhdGUoWycwJ10pO1xuXG4gIGNvbnN0IGhhbmRsZVZpc3VhbFR5cGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRWaXN1YWxUeXBlKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcHBseSA9ICgpID0+IHtcbiAgICBzZXRJc0FwcGxpZWQoMSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2VsZWN0aW9uID0gKGl0ZW0sIHNldFNlbGVjdGVkLCBidXR0b210eXBlKSA9PiB7XG4gICAgaWYgKGJ1dHRvbXR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHNldFNlbGVjdGVkKChwcmV2U2VsZWN0ZWQpID0+XG4gICAgICAgIHByZXZTZWxlY3RlZC5pbmNsdWRlcyhpdGVtKVxuICAgICAgICAgID8gcHJldlNlbGVjdGVkLmZpbHRlcigoaSkgPT4gaSAhPT0gaXRlbSlcbiAgICAgICAgICA6IFsuLi5wcmV2U2VsZWN0ZWQsIGl0ZW1dXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZChbaXRlbV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDb21wYW55Q2hlY2tib3hDaGFuZ2UgPSAoY29tcGFueSwgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbihjb21wYW55LCBzZXRTZWxlY3RlZENvbXBhbmllcywgYnV0dG9tdHlwZSk7XG4gIH07XG5cbiAgY29uc3QgVG9waWNDaGVja2JveENoYW5nZSA9ICh0b3BpYywgYnV0dG9tdHlwZSkgPT4ge1xuICAgIHRvZ2dsZVNlbGVjdGlvbih0b3BpYywgc2V0U2VsZWN0ZWRUb3BpY3MsIGJ1dHRvbXR5cGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDb21wYW5pZXMoWyfmoKrlvI/kvJrnpL7nhorosLfntYQnXSk7XG4gICAgc2V0U2VsZWN0ZWRUb3BpY3MoWycwJ10pO1xuICB9LCBbdmlzdWFsVHlwZV0pO1xuXG4gIGNvbnN0IHJlc2V0SXNBcHBsaWVkID0gKCkgPT4ge1xuICAgIHNldElzQXBwbGllZCgwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaWQ9XCJyZWFjdC1jb250ZW50XCIgZmx1aWQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5cbiAgICAgIDxSb3c+XG4gICAgICAgIHshaXNBdXRoZW50aWNhdGVkID8gKCAvLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgarjgYTloLTlkIhcbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxPuODreOCsOOCpOODs+OBjOW/heimgeOBp+OBmTwvaDE+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTG9naW59PlxuICAgICAgICAgICAgICAgIOODreOCsOOCpOODs1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICApIDogKCAvLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgovloLTlkIhcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgey8qIOOCteOCpOODieODkOODvCAqL31cbiAgICAgICAgICAgIDxDb2wgbWQ9ezN9IGNsYXNzTmFtZT1cImJvcmRlci1lbmRcIj5cbiAgICAgICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgICAgICBvbkFwcGx5PXtoYW5kbGVBcHBseX1cbiAgICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICAgIG9uVmlzdWFsVHlwZUNoYW5nZT17aGFuZGxlVmlzdWFsVHlwZUNoYW5nZX1cbiAgICAgICAgICAgICAgICB0b3BpY0xpc3Q9e3RvcGljTGlzdH1cbiAgICAgICAgICAgICAgICBjb21wYW55TGlzdD17Y29tcGFueUxpc3R9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb21wYW5pZXM9e3NlbGVjdGVkQ29tcGFuaWVzfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9waWNzPXtzZWxlY3RlZFRvcGljc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZVRvcGljPXtUb3BpY0NoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGFueT17Q29tcGFueUNoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIHsvKiDjg6HjgqTjg7PjgrPjg7Pjg4bjg7Pjg4QgKi99XG4gICAgICAgICAgICA8Q29sIG1kPXs5fSBjbGFzc05hbWU9XCJib3JkZXItZW5kXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgICAgICAgICA8Q29udGVudFxuICAgICAgICAgICAgICAgIHBsb3Q9e2lzQXBwbGllZH1cbiAgICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICAgIHRvcGljPXtzZWxlY3RlZFRvcGljc31cbiAgICAgICAgICAgICAgICBjb21wYW55PXtzZWxlY3RlZENvbXBhbmllc31cbiAgICAgICAgICAgICAgICByZXNldEFwcGx5PXtyZXNldElzQXBwbGllZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH1mcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBQbG90UGllQSBmcm9tICcuL29jY3VweS5qc3gnO1xuaW1wb3J0IFBsb3RQaWVCIGZyb20gJy4vb2NjdXB5LWNvbXBhbnkuanN4JztcbmltcG9ydCBQbG90UGVyc29uYUNvbXAgZnJvbSAnLi9wZXJzb25hLWNvbXAuanN4JztcbmltcG9ydCBQbG90UGVyc29uYVRvcGljIGZyb20gJy4vcGVyc29uYS10b3BpYy5qc3gnO1xuXG5pbXBvcnQgUGxvdEJhckNoYXJ0QSBmcm9tICcuL3RyZW5kLXRvcGl4LmpzeCc7XG5pbXBvcnQgUGxvdEJhckNoYXJ0QiBmcm9tICcuL3RyZW5kLWNvbXAuanN4JztcbmltcG9ydCBQcm9wb3NlZERhdGEsIHsgZ2V0Q2FyZERhdGEgfSBmcm9tIFwiLi9nby1hbnl3aGVyZS5qc3hcIjsgLy8g5q2j44GX44GE44OR44K544KS5oyH5a6aXG5pbXBvcnQgUHJvcG9zZWRWaXN1YWxpemUgZnJvbSAnLi9nby1hbnl3aGVyZS5qc3gnO1xuXG5cblxuXG5cbmNvbnN0IENvbnRlbnQgPSAoe3Bsb3QsdmlzdWFsVHlwZSx0b3BpYyxjb21wYW55LHJlc2V0QXBwbHl9KSA9PiB7XG5cblxuXG4gICAgY29uc3QgW2NsaWNrRGF0YSwgc2V0Q2xpY2tEYXRhXSA9IHVzZVN0YXRlKCk7IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBrueKtuaFi1xuICAgIGNvbnN0IFtjbGlja0NvbXBhbnlEYXRhLCBzZXRDbGlja0NvbXBhbnlEYXRhXSA9IHVzZVN0YXRlKCk7IC8vIOOCr+ODquODg+OCr+ODh+ODvOOCv+OBrueKtuaFi1xuXG4gICAgY29uc3QgaGFuZGxlUGllQ2hhcnRDbGljayA9IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIuOCr+ODquODg+OCr+OBleOCjOOBn+ODh+ODvOOCvzpcIiwgZGF0YSk7IC8vIOODh+ODkOODg+OCsOeUqFxuICAgICAgc2V0Q2xpY2tEYXRhKGRhdGEpOyAvLyDnirbmhYvjgpLmm7TmlrBcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVBlcnNvbmFDbGljayA9IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIuOCr+ODquODg+OCr+OBleOCjOOBn+ODh+ODvOOCvzpcIiwgZGF0YSk7IC8vIOODh+ODkOODg+OCsOeUqFxuICAgICAgc2V0Q2xpY2tDb21wYW55RGF0YShkYXRhKTsgLy8g54q25oWL44KS5pu05pawXG4gICAgfTtcblxuICAgIGNvbnN0IFtjYXJkRGF0YSwgc2V0Q2FyZERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgXG4gICAgXG4gIHJldHVybiAoXG4gICAgXG4gICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJiZy1saWdodFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIHsvKiBGaXJzdCBSb3cgKi99XG4gICAgICA8Um93IHN0eWxlPXt7IGhlaWdodDogJzUwdmgnIH19PlxuICAgICAgICB7LyogUGVyc29uYSBHcmFwaCAqL31cbiAgICAgICAgPENvbCBtZD17MX0+PC9Db2w+XG4gICAgICAgIDxDb2wgbWQ9ezEwfSA+XG5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBlcnNvbmFUb3BpY1xuICAgICAgICAgICAgICB1cGRhdGU9e3Bsb3R9XG4gICAgICAgICAgICAgIHZpc3VhbFR5cGU9e3Zpc3VhbFR5cGV9XG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgY29tcGFueT17Y29tcGFueX1cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgICAgb25DbGlja0RhdGE9e2hhbmRsZVBlcnNvbmFDbGlja30gLy8g44Kv44Oq44OD44Kv44OH44O844K/44Gu44OP44Oz44OJ44Op44O844KS5rih44GZXG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODmuODq+OCveODiuOBruWPr+imluWMllwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTB2aCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MHZoXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IHZpc3VhbFR5cGUgPT09IFwib25lLWNvbXBcIiA/IChcbiAgICAgICAgICAgIDxQbG90UGVyc29uYUNvbXBcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuODmuODq+OCveODiuOBruWPr+imluWMllwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDJ2aCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNvbmZpZz17eyByZXNwb25zaXZlOiB0cnVlIH19IC8vIFBsb3RseeOBq+ODrOOCueODneODs+OCt+ODluioreWumuOCkuacieWKueWMllxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44Gb44KLXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+6Kmy5b2T44GZ44KL6KGo56S644GM44GC44KK44G+44Gb44KTPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgey8qIFJpZ2h0IENvbHVtbiB3aXRoIENhcmRzICovfVxuICAgICAgICA8Q29sIG1kPXsxfT5cblxuICAgIDwvQ29sPlxuICA8L1Jvdz5cblxuICAgICAgey8qIFNlY29uZCBSb3cgKi99XG4gICAgICA8Um93IHN0eWxlPXt7IGhlaWdodDogJzUwdmgnIH19PlxuICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUFcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rOo55uu5LyB5qWt44Gu5qWt55WM44Gr5a++44GZ44KL5Y2g5pyJ546HJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiB2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCIgPyAoXG4gICAgICAgICAgICA8UGxvdFBpZUJcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgIG9uUmVuZGVyZWQ9e3Jlc2V0QXBwbHl9XG4gICAgICAgICAgICAgIG9uQ2xpY2tEYXRhPXtoYW5kbGVQaWVDaGFydENsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jg4fjg7zjgr/jga7jg4/jg7Pjg4njg6njg7zjgpLmuKHjgZlcbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfms6jnm67kvIHmpa3jga7mpa3nlYzjgavlr77jgZnjgovljaDmnInnjocnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj7oqbLlvZPjgZnjgovooajnpLrjgYzjgYLjgorjgb7jgZvjgpM8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAge1xuICAgICAgICAgIHZpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCIgPyAoXG4gICAgICAgICAgPFBsb3RCYXJDaGFydEFcbiAgICAgICAgICAgICAgdXBkYXRlPXtwbG90fVxuICAgICAgICAgICAgICB2aXN1YWxUeXBlPXt2aXN1YWxUeXBlfVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG5cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgIGRhdGE9e1tdfSAvLyDjg4fjg7zjgr/jgpLov73liqDjgZfjgabjgY/jgaDjgZXjgYRcbiAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICB0aXRsZTogJ0bjgr/jg7zjg6Djga7liIbluIMnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPik6KFxuICAgICAgICAgIDxQbG90QmFyQ2hhcnRCXG4gICAgICAgICAgICAgIHVwZGF0ZT17cGxvdH1cbiAgICAgICAgICAgICAgdmlzdWFsVHlwZT17dmlzdWFsVHlwZX1cbiAgICAgICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgICAgICBjbGlja2RhdGE9e2NsaWNrRGF0YX0gLy8g44Kv44Oq44OD44Kv44OH44O844K/44KS5rih44GZXG4gICAgXG5cbiAgICAgICAgICAgICAgb25SZW5kZXJlZD17cmVzZXRBcHBseX1cbiAgICAgICAgICAgIGRhdGE9e1tdfSAvLyDjg4fjg7zjgr/jgpLov73liqDjgZfjgabjgY/jgaDjgZXjgYRcbiAgICAgICAgICAgIGxheW91dD17e1xuICAgICAgICAgICAgICB0aXRsZTogJ0bjgr/jg7zjg6Djga7liIbluIMnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCJcbiAgICAgICAgICAvPil9XG4gICAgICAgICAgXG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImgtMTAwXCI+XG5cbiAgICAgIDxDb2w+XG4gICAgICB7XG4gICAgICB2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiID8gKFxuICAgICAgICAgIDxQcm9wb3NlZFZpc3VhbGl6ZVxuICAgICAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgICAgIGNsaWNrRGF0YT17Y2xpY2tDb21wYW55RGF0YX1cbiAgICAgICAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Lu75oSP44Gu5L2N572u44G456e75YuV44GZ44KL44Gf44KB44Gu5o+Q5qGIJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFwiXG4gICAgICAgICAgLz4pOihcbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICkgfVxuICBcbiAgICAgICAgPC9Db2w+XG4gICAgICAgICAgXG4gICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCxSb3csQ29sLENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgUHJvcG9zZWRWaXN1YWxpemUgPSAoeyB0b3BpYywgY2xpY2tEYXRhIH0pID0+IHtcbiAgY29uc3QgW3Byb3Bvc2VkRGF0YSwgc2V0UHJvcG9zZWREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0b3BpY30vcHJvcG9zZWQvcHJvcG9zZWQuanNvbmA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLjg4fjg7zjgr/jga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ9cIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAvLyBgY2xpY2tEYXRhYOOBq+WvvuW/nOOBmeOCi+S8muekvuOBruODh+ODvOOCv+OCkuWPluW+l1xuICAgICAgICBjb25zdCBjb21wYW55RGF0YSA9IGpzb25EYXRhW2NsaWNrRGF0YV07XG5cbiAgICAgICAgaWYgKCFjb21wYW55RGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIuaMh+WumuOBl+OBn+ODh+ODvOOCv+OBjOWtmOWcqOOBl+OBvuOBm+OCkzogXCIgKyBjbGlja0RhdGEpO1xuICAgICAgICAgIHNldFByb3Bvc2VkRGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5oyH5a6a44GV44KM44Gf44OI44OU44OD44Kv44Gu44OH44O844K/44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IHRvcGljRGF0YSA9IGNvbXBhbnlEYXRhW3RvcGljXTtcbiAgICAgICAgaWYgKCF0b3BpY0RhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCLmjIflrprjgZfjgZ/jg4jjg5Tjg4Pjgq/jgYzlrZjlnKjjgZfjgb7jgZvjgpM6IFwiICsgdG9waWMpO1xuICAgICAgICAgIHNldFByb3Bvc2VkRGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0UHJvcG9zZWREYXRhKHRvcGljRGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+S4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzpcIiwgZXJyKTtcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3RvcGljLCBjbGlja0RhdGFdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj7jgqjjg6njg7w6IHtlcnJvcn08L2Rpdj47XG4gIH1cblxuICBpZiAoIXByb3Bvc2VkRGF0YSkge1xuICAgIHJldHVybiA8ZGl2PuODh+ODvOOCv+OCkuiqreOBv+i+vOOBv+S4rS4uLjwvZGl2PjtcbiAgfVxuXG4gIFxuICAvLyDjg4fjg7zjgr/jgpLjgqvjg7zjg4nlvaLlvI/jgafooajnpLpcbmNvbnN0IHJlbmRlckNhcmQgPSAoZGlyZWN0aW9uLCB2YWx1ZXMpID0+IHtcbiAgbGV0IGxhYmVsO1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgXCJ1cGxlZnRcIjpcbiAgICAgIGxhYmVsID0gXCLlt6bkuIpcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ1cHJpZ2h0XCI6XG4gICAgICBsYWJlbCA9IFwi5Y+z5LiKXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZG93bmxlZnRcIjpcbiAgICAgIGxhYmVsID0gXCLlt6bkuItcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkb3ducmlnaHRcIjpcbiAgICAgIGxhYmVsID0gXCLlj7PkuItcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsYWJlbCA9IFwi44Gd44Gu5LuWXCI7XG4gIH1cblxuICAvLyDjgqvjg7zjg4nlhajkvZPjga7og4zmma/oibLjgpLoqK3lrprvvIjmlrnlkJHjgavln7rjgaXjgY/jg5njg7zjgrnjgqvjg6njg7zvvIlcbiAgY29uc3QgYmFzZUNvbG9yTWFwID0ge1xuICAgIHVwcmlnaHQ6IFwicmdiYSgyNTUsIDE4OCwgMTg4LCBBTFBIQSlcIiwgICAvLyDotaRcbiAgICB1cGxlZnQ6IFwicmdiYSgyNTUsIDI1NSwgMTg4LCBBTFBIQSlcIiwgLy8g6buEXG4gICAgZG93bnJpZ2h0OiBcInJnYmEoMTg4LCAyMjEsIDI1NSwgQUxQSEEpXCIsIC8vIOmdklxuICAgIGRvd25sZWZ0OiBcInJnYmEoMTg4LCAyNTUsIDE4OCwgQUxQSEEpXCIgLy8g57eRXG4gIH07XG5cbiAgY29uc3QgYmFzZUNvbG9yID0gYmFzZUNvbG9yTWFwW2RpcmVjdGlvbl07XG4gIGNvbnN0IGNhcmRBbHBoYSA9IDAuMzsgLy8g5YaF6YOo44Gu6KaB57Sg5pWw44Gn6YCP5piO5bqm44KS5aSJ5YyWXG4gIGNvbnN0IGNhcmRCYWNrZ3JvdW5kQ29sb3IgPSBiYXNlQ29sb3IucmVwbGFjZShcIkFMUEhBXCIsIE1hdGgubWluKGNhcmRBbHBoYSwgMSkpOyAvLyDog4zmma/oibLjgpLli5XnmoTjgavoqK3lrppcblxuICByZXR1cm4gKFxuXG4gICAgPENhcmQga2V5PXtkaXJlY3Rpb259IGNsYXNzTmFtZT1cIm0tM1wiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY2FyZEJhY2tncm91bmRDb2xvciB9fT5cbiAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPlxuICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCI+e2xhYmVsfTwvQ2FyZC5UaXRsZT5cbiAgICAgICAge3ZhbHVlcy5zbGljZSgwLCA1KS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIC8vIOmghuS9jeOBq+WfuuOBpeOBhOOBpumAj+aYjuW6puOCkuiqv+aVtFxuICAgICAgICAgIGNvbnN0IGFscGhhID0gMC45MCAtIGluZGV4ICogMC4xNTsgLy8g6aCG5L2N44GU44Go44Gr6YCP5piO5bqm44KS5b6Q44CF44Gr5rib5bCRXG4gICAgICAgICAgY29uc3QgaXRlbUJhY2tncm91bmRDb2xvciA9IGJhc2VDb2xvci5yZXBsYWNlKFwiQUxQSEFcIiwgTWF0aC5tYXgoYWxwaGEsIDAuMSkpOyAvLyDlkITjgqLjgqTjg4bjg6Djga7og4zmma/oibJcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhbmtpbmctaXRlbSBweS0yIHB4LTMgYm9yZGVyLWJvdHRvbVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaXRlbUJhY2tncm91bmRDb2xvciB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Ryb25nPntpbmRleCArIDF95L2N77yaPC9zdHJvbmc+IHt2YWx1ZSB8fCBcIlwifVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0NhcmQuQm9keT5cbiAgICA8L0NhcmQ+XG5cbiAgKTtcbn07XG4gIHJldHVybiAoXG48Q29udGFpbmVyPlxuICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS0zXCI+XG4gICAgey8qIENhcmTjg5jjg4Pjg4Djg7zjgafkuK3lpK7kuIrpg6jjgatjbGlja0RhdGHjgpLooajnpLogKi99XG4gICAgPENhcmQuSGVhZGVyIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMzMzMzMzXCIsIGNvbG9yOiBcIndoaXRlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+e2NsaWNrRGF0YSB8fCBcIiBcIn08L2g1PlxuICAgIDwvQ2FyZC5IZWFkZXI+XG5cblxuICAgIDxDYXJkLkJvZHk+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sPntyZW5kZXJDYXJkKFwidXBsZWZ0XCIsIHByb3Bvc2VkRGF0YS51cGxlZnQgfHwgW10pfTwvQ29sPlxuICAgICAgICA8Q29sPntyZW5kZXJDYXJkKFwidXByaWdodFwiLCBwcm9wb3NlZERhdGEudXByaWdodCB8fCBbXSl9PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2w+e3JlbmRlckNhcmQoXCJkb3dubGVmdFwiLCBwcm9wb3NlZERhdGEuZG93bmxlZnQgfHwgW10pfTwvQ29sPlxuICAgICAgICA8Q29sPntyZW5kZXJDYXJkKFwiZG93bnJpZ2h0XCIsIHByb3Bvc2VkRGF0YS5kb3ducmlnaHQgfHwgW10pfTwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9DYXJkLkJvZHk+XG4gIDwvQ2FyZD5cbjwvQ29udGFpbmVyPlxuXG5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9wb3NlZFZpc3VhbGl6ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHAuanN4XCI7XG5pbXBvcnQgeyBBdXRoMFByb3ZpZGVyIH0gZnJvbSBcIkBhdXRoMC9hdXRoMC1yZWFjdFwiO1xuXG4vLyBBdXRoMOOBruioreWumlxuY29uc3QgZG9tYWluID0gXCJkZXYtbDNiZ2VnbmpqeHd4Mm9kNC51cy5hdXRoMC5jb21cIjsgLy8gQXV0aDDjga7jg4njg6HjgqTjg7NcblxuY29uc3QgY2xpZW50SWQgPSBcIml2dGd4MWFyTjVKMDladzh5UENpRWtwUTFEWjNQMjJlXCI7IC8vIEF1dGgw44Gu44Kv44Op44Kk44Ki44Oz44OISURcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8QXV0aDBQcm92aWRlclxuICAgICAgZG9tYWluPXtkb21haW59XG4gICAgICBjbGllbnRJZD17Y2xpZW50SWR9XG4gICAgICBhdXRob3JpemF0aW9uUGFyYW1zPXt7XG4gICAgICAgIHJlZGlyZWN0X3VyaTogXCJodHRwczovL2hpcm9lbW9uLW0uZ2l0aHViLmlvL215LWFwcC9cIiwgLy8g6KqN6Ki85b6M44Gr44Oq44OA44Kk44Os44Kv44OI44GZ44KLVVJMXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxBcHAgLz5cbiAgICA8L0F1dGgwUHJvdmlkZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuXG5cblxuXG5jb25zdCBjb2xvcm1hcCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLlnLDnm6TmlLnoia9cIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIuODiOODs+ODjeODq+aOmOWJilwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gIFwi5YWN6ZyH5qeL6YCgXCI6J3JnYigxNTMsIDIwMSwgNjkpJywgXCLnrqHnkIbjgrfjgrnjg4bjg6BcIjoncmdiKDIwNCwgOTcsIDE3NiknLCBcIuW7g+ajhOeJqeWHpueQhlwiOidyZ2IoMzYsIDEyMSwgMTA4KScsIFxuICBcIuW7uuevieODkeODjeODq1wiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLnqbroqr/jgrfjgrnjg4bjg6BcIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuaOmOWJiuijhee9rlwiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxufTtcblxuXG4vLyBmZXRjaERhdGHplqLmlbDvvJpKU09O44G+44Gf44Gv44OG44Kt44K544OI5b2i5byP44Gr5a++5b+cXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcblxuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gSlNPTuW9ouW8j+OBruWgtOWQiFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpOyAvLyDjg5fjg6zjg7zjg7Pjg4bjgq3jgrnjg4jjga7loLTlkIhcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTsgLy8g5pS56KGM5Yy65YiH44KK44Gu44OH44O844K/44KS6YWN5YiX44Go44GX44Gm6L+U44GZXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbi8vIOOCueODkeODvOOCueODh+ODvOOCv+OCkuWvhuihjOWIl+OBq+WkieaPm+OBl+OAgeihjOaWueWQkeOBruWSjOOCkuioiOeul1xuY29uc3QgcHJvY2Vzc1NwYXJzZURhdGEgPSAoc3BhcnNlRGF0YSkgPT4ge1xuICAgIFxuICBjb25zdCBudW1Sb3dzID0gTWF0aC5tYXgoLi4uc3BhcnNlRGF0YS5tYXAoZW50cnkgPT4gZW50cnkucm93KSkgKyAxO1xuICBjb25zdCBudW1Db2xzID0gTWF0aC5tYXgoLi4uc3BhcnNlRGF0YS5tYXAoZW50cnkgPT4gZW50cnkuY29sKSkgKyAxO1xuXG4gIGNvbnN0IG1hdHJpeCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG51bVJvd3MgfSwgKCkgPT4gQXJyYXkobnVtQ29scykuZmlsbCgwKSk7XG4gIHNwYXJzZURhdGEuZm9yRWFjaCgoeyByb3csIGNvbCwgdmFsdWUgfSkgPT4ge1xuICAgIG1hdHJpeFtyb3ddW2NvbF0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1hdHJpeC5tYXAocm93ID0+IHJvdy5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKSk7IC8vIOihjOaWueWQkeOBruWSjOOCkui/lOOBmVxufTtcblxuY29uc3QgUGxvdFBpZUIgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBvblJlbmRlcmVkLCBvbkNsaWNrRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCLms6jnm67jg4jjg5Tjg4Pjgq/jgavplqLjgZnjgovnibnoqLHjga7kvIHmpa3ljaDmnInnjodcIik7XG4gIGNvbnN0IGFsbFRvcGljID0gWzIsIDMsIDEsIDAsIDksIDYsIDgsIDcsIDExXTtcblxuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMzFcIjpcIumFjeeuoemFjemAgVwiLFwiMTJcIjpcIuWfuuekjuani+mAoFwiLFxuICAgIFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCIsXCIxM1wiOlwi6Zu75Yqb566h55CGXCIsXCIxNlwiOlwi5bGL5qC55qeL6YCgXCIsXG4gICAgXCIxNFwiOlwi5qeL6YCg5pCN5YK3XCIsXCIyNFwiOlwi6Zu756OB5rOi44K344O844Or44OJXCIsXCIxOVwiOlwi5aSp5LqV5qeL6YCgXCIsXCIyM1wiOlwi6Z+z6Z+/5qSc5p+7XCIsXG4gICAgXCIxNVwiOlwi54Wn5piO44K344K544OG44OgXCIsXCIxN1wiOlwi5aOB6Z2i57eR5YyWXCJ9O1xuXG4gIGNvbnN0IFRvcGljdG9JZCA9IHtcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiOlwiMlwiLFwi5Zyw55uk5pS56ImvXCI6XCIzXCIsXCLjg4jjg7Pjg43jg6vmjpjliYpcIjpcIjFcIixcbiAgICAgICAgXCLlhY3pnIfmp4vpgKBcIjpcIjBcIixcIueuoeeQhuOCt+OCueODhuODoFwiOlwiOVwiLFwi5buD5qOE54mp5Yem55CGXCI6XCI2XCIsXCLlu7rnr4njg5Hjg43jg6tcIjpcIjhcIixcbiAgICAgICBcIuepuuiqv+OCt+OCueODhuODoFwiOlwiN1wiLFwi5o6Y5YmK6KOF572uXCI6XCIxMVwiLFwi6YWN566h6YWN6YCBXCI6XCIzMVwiLFwi5Z+656SO5qeL6YCgXCI6XCIxMlwiLFxuICAgICAgIFwi5bu656+J6Kit6KiIXCI6XCIxMFwiLFwi44OI44Oz44ON44Or5ris6YePXCI6XCI1XCIsXCLpm7vlipvnrqHnkIZcIjpcIjEzXCIsXCLlsYvmoLnmp4vpgKBcIjpcIjE2XCIsXG4gICAgICAgXCLnhafmmI7jgrfjgrnjg4bjg6BcIjpcIjE1XCIsXCLlo4HpnaLnt5HljJZcIjpcIjE3XCIsXCLmp4vpgKDmkI3lgrdcIjpcIjE0XCIsXCLpm7vno4Hms6Ljgrfjg7zjg6vjg4lcIjpcIjI0XCIsXG4gICAgICAgXCLlpKnkupXmp4vpgKBcIjpcIjE5XCIsXCLpn7Ppn7/mpJzmn7tcIjpcIjIzXCJcbiAgICAgIH07XG4gIC8vIOOCreODo+ODg+OCt+ODpeeUqOOBruOCquODluOCuOOCp+OCr+ODiFxuICBjb25zdCBkYXRhQ2FjaGUgPSB1c2VSZWYoe1xuICAgIGNvbXBhbmllczoge30sXG4gICAgc3BhcnNlRGF0YToge31cbiAgfSk7XG5cbiAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFsbFRvcGljc0RhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgYWxsVG9waWMubWFwKGFzeW5jICh0YXJnZXRfaWQpID0+IHtcbiAgICAgICAgICBjb25zdCB0aW1lID0gNTtcbiAgICAgICAgICBjb25zdCBjb21wYW55VXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9zZXR0aW5nL2NvbXBhbnkudHh0YDtcbiAgICAgICAgICBjb25zdCBzcGFyc2VEYXRhVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9vY2N1cHkvb2NjdXB5X3RvcGljXyR7dGltZX0uanNvbmA7XG5cbiAgICAgICAgICAvLyDjgq3jg6Pjg4Pjgrfjg6XjgpLnorroqo1cbiAgICAgICAgICBpZiAoIWRhdGFDYWNoZS5jdXJyZW50LmNvbXBhbmllc1t0YXJnZXRfaWRdKSB7XG4gICAgICAgICAgICBkYXRhQ2FjaGUuY3VycmVudC5jb21wYW5pZXNbdGFyZ2V0X2lkXSA9IGF3YWl0IGZldGNoRGF0YShjb21wYW55VXJsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWRhdGFDYWNoZS5jdXJyZW50LnNwYXJzZURhdGFbdGFyZ2V0X2lkXSkge1xuICAgICAgICAgICAgZGF0YUNhY2hlLmN1cnJlbnQuc3BhcnNlRGF0YVt0YXJnZXRfaWRdID0gYXdhaXQgZmV0Y2hEYXRhKHNwYXJzZURhdGFVcmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNvbXBhbmllcyA9IGRhdGFDYWNoZS5jdXJyZW50LmNvbXBhbmllc1t0YXJnZXRfaWRdO1xuICAgICAgICAgIGNvbnN0IHNwYXJzZURhdGEgPSBkYXRhQ2FjaGUuY3VycmVudC5zcGFyc2VEYXRhW3RhcmdldF9pZF07XG5cbiAgICAgICAgICAvLyDmraPopo/ljJbplqLmlbBcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVTdHJpbmcgPSAoc3RyKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0ciAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLpnZ7mloflrZfliJfjg4fjg7zjgr/jgYzmpJzlh7rjgZXjgozjgb7jgZfjgZ86XCIsIHN0cik7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyDpnZ7mloflrZfliJfjg4fjg7zjgr/jga/nhKHoppZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHIubm9ybWFsaXplKFwiTkZDXCIpLnRyaW0oKTsgLy8g5q2j6KaP5YyW44Go44OI44Oq44Og44KS6YGp55SoXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIOato+imj+WMluOBl+OBn+ODh+ODvOOCv+OBp+avlOi8g1xuICAgICAgICAgIGNvbnN0IHNhbml0aXplZENvbXBhbmllcyA9IGNvbXBhbmllcy5tYXAobm9ybWFsaXplU3RyaW5nKTtcbiAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDb21wYW55ID0gbm9ybWFsaXplU3RyaW5nKGNvbXBhbnlbMF0pO1xuXG4gICAgICAgICAgaWYgKCFzYW5pdGl6ZWRDb21wYW5pZXMuaW5jbHVkZXMoc2FuaXRpemVkQ29tcGFueSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcGFueSBcIiR7c2FuaXRpemVkQ29tcGFueX1cIiBub3QgZm91bmQgaW4gdG9waWMgJHt0YXJnZXRfaWR9YCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDjgrnjg5Hjg7zjgrnjg4fjg7zjgr/jgpLlh6bnkIZcbiAgICAgICAgICBjb25zdCByb3dTdW1zID0gcHJvY2Vzc1NwYXJzZURhdGEoc3BhcnNlRGF0YSk7XG5cbiAgICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBzYW5pdGl6ZWRDb21wYW5pZXMuaW5kZXhPZihzYW5pdGl6ZWRDb21wYW55KTtcblxuICAgICAgICAgIHJldHVybiB7IHRvcGljOiB0YXJnZXRfaWQsIHZhbHVlOiByb3dTdW1zW2NvbXBhbnlJbmRleF0gfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGFsbFRvcGljc0RhdGEuZmlsdGVyKChkYXRhKSA9PiBkYXRhICE9PSBudWxsKTtcblxuICAgICAgLy8g5q2j6KaP5YyW44Go44K944O844OIXG4gICAgICBjb25zdCB0b3RhbFZhbHVlID0gZmlsdGVyZWREYXRhLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnZhbHVlLCAwKTtcbiAgICAgIGlmICh0b3RhbFZhbHVlID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk5vIHZhbGlkIGRhdGEgdG8gbm9ybWFsaXplLlwiKTtcbiAgICAgICAgc2V0Q2hhcnREYXRhKFtdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG5cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZERhdGEgPSBmaWx0ZXJlZERhdGEubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgY2F0ZWdvcnk6IGl0ZW0udG9waWMsXG4gICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlIC8gdG90YWxWYWx1ZSxcbiAgICAgIH0pKS5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgIHNldENoYXJ0RGF0YShub3JtYWxpemVkRGF0YS5zbGljZSgwLCAxMCkpOyAvLyDkuIrkvY0xMOS7tuOBruOBv+ihqOekulxuICAgICAgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+WHpueQhuS4reOBruOCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyDliJ3mnJ/jg4fjg7zjgr/oqq3jgb/ovrzjgb/jgah1cGRhdGXjga7lpInmm7TmmYLjgavjg4fjg7zjgr/jgpLjg63jg7zjg4lcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiKSB7XG4gICAgICBsb2FkRGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZV0pO1xuXG4gIGNvbnN0IGhhbmRsZVBsb3RDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5wb2ludHMgJiYgZXZlbnQucG9pbnRzWzBdKSB7XG4gICAgICBjb25zdCBjbGlja2RhdGEgPSBldmVudC5wb2ludHNbMF0ubGFiZWw7IC8vIOOCr+ODquODg+OCr+OBleOCjOOBn+mDqOWIhuOBruODqeODmeODq1xuICAgICAgY29uc3QgbGFiZWwgPSBUb3BpY3RvSWRbY2xpY2tkYXRhXVxuICAgICAgY29uc3QgdG9waWNpZCA9IGxhYmVsLnJlcGxhY2UoXCJUb3BpYyBcIiwgXCJcIik7XG4gICAgICBvbkNsaWNrRGF0YShbdG9waWNpZF0pOyAvLyDopqrjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavjg6njg5njg6vjgpLpgJrnn6VcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBjaGFydERhdGEubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5tYXAoaXRlbSA9PiAgSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV0pLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgIGNvbG9yczogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gY29sb3JtYXBbSWR0b1RvcGljW1N0cmluZyhpdGVtLmNhdGVnb3J5KV1dKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgICAgb25DbGljaz17aGFuZGxlUGxvdENsaWNrfSAvLyDjgq/jg6rjg4Pjgq/jgqTjg5njg7Pjg4jjgpLov73liqBcbiAgICAgIC8+XG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBsb3QgZnJvbSBcInJlYWN0LXBsb3RseS5qc1wiO1xuXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8g44OG44Kt44K544OI44OH44O844K/44KS6Kqt44G/6L6844KA6Zai5pWwXG5jb25zdCBmZXRjaFRleHREYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBQbG90UGllQSA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWQgfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gICAgXCIwXCI6XCLlhY3pnIfmp4vpgKBcIixcIjlcIjpcIueuoeeQhuOCt+OCueODhuODoFwiLFwiNlwiOlwi5buD5qOE54mp5Yem55CGXCIsXCI4XCI6XCLlu7rnr4njg5Hjg43jg6tcIixcbiAgICBcIjdcIjpcIuepuuiqv+OCt+OCueODhuODoFwiLFwiMTFcIjpcIuaOmOWJiuijhee9rlwiLFwiMzFcIjpcIumFjeeuoemFjemAgVwiLFwiMTJcIjpcIuWfuuekjuani+mAoFwiLFxuICAgIFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCIsXCIxM1wiOlwi6Zu75Yqb566h55CGXCIsXCIxNlwiOlwi5bGL5qC55qeL6YCgXCIsXG4gICAgXCIxNFwiOlwi5qeL6YCg5pCN5YK3XCIsXCIyNFwiOlwi6Zu756OB5rOi44K344O844Or44OJXCIsXCIxOVwiOlwi5aSp5LqV5qeL6YCgXCIsXCIyM1wiOlwi6Z+z6Z+/5qSc5p+7XCIsXG4gICAgXCIxNVwiOlwi54Wn5piO44K344K544OG44OgXCIsXCIxN1wiOlwi5aOB6Z2i57eR5YyWXCJ9O1xuXG4gIGNvbnN0IGNvbG9ybWFwID0geyfpub/ls7blu7roqK3moKrlvI/kvJrnpL4nOidyZ2IoMjI5LCAxMzQsIDYpJywgXCLmoKrlvI/kvJrnpL7lpKfmnpfntYRcIjoncmdiKDkzLCAxMDUsIDE3NyknLCBcIua4heawtOW7uuioreagquW8j+S8muekvlwiOidyZ2IoODIsIDE4OCwgMTYzKScsXG4gICAgICBcIuWkp+aIkOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgICAgIFwi5YmN55Sw5bu66Kit5bel5qWt5qCq5byP5Lya56S+XCI6J3JnYigyMTgsIDE2NSwgMjcpJyxcIuS6lOa0i+W7uuioreagquW8j+S8muekvlwiOidyZ2IoNDcsIDEzOCwgMTk2KScsIFwi5qCq5byP5Lya56S+44OV44K444K/XCI6J3JnYigxMTgsIDc4LCAxNTkpJywgXG4gICAgICBcIuaIuOeUsOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMjM3LCAxMDAsIDkwKScsIFwi5qCq5byP5Lya56S+54aK6LC357WEXCI6J3JnYigxNjUsIDE3MCwgMTUzKSd9O1xuICAgICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gNTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b3BpYyB8fCBcImRlZmF1bHRfdG9waWNcIjsgLy8g5Yid5pyf5YCk44Go44GX44GmXCJkZWZhdWx0X3RvcGljXCLjgpLoqK3lrppcbiAgICAgICAgY29uc3QgZGF0YVVybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldElkfS9vY2N1cHkvb2NjdXB5X21lYW5fJHt0aW1lfS5qc29uYDtcbiAgICAgICAgY29uc3QgY29sdW1uVXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3NldHRpbmcvY29tcGFueS50eHRgO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+WPluW+l1xuICAgICAgICBjb25zdCBbdmFsdWVzLCBsYWJlbHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGZldGNoRGF0YShkYXRhVXJsKSxcbiAgICAgICAgICBmZXRjaFRleHREYXRhKGNvbHVtblVybCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8vIOWApOOBqOODqeODmeODq+OBrue1hOOBv+WQiOOCj+OBm+OCkuS9nOaIkFxuICAgICAgICBjb25zdCBkYXRhID0gbGFiZWxzLm1hcCgobGFiZWwsIGluZGV4KSA9PiAoe1xuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZXMudmFsdWVbaW5kZXhdIHx8IDAsIC8vIOWApOOBjOOBquOBhOWgtOWQiOOBrzBcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIOWApOOBq+WfuuOBpeOBhOOBpumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5oq95Ye6XG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBkYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtJZHRvVG9waWNbdGFyZ2V0SWRdfeOBq+mWouOBmeOCi+eJueioseOBruS8gealreWNoOacieeOh2ApO1xuICAgICAgICBpZiAob25SZW5kZXJlZCkgb25SZW5kZXJlZCgpOyAvLyDmj4/nlLvlrozkuobjgpLpgJrnn6VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4Hjg6Pjg7zjg4jjg4fjg7zjgr/jga7lh6bnkIbkuK3jgavjgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g5Yid5Zue44Os44Oz44OA44Oq44Oz44Kw5pmC44GoYHVwZGF0ZWDlpInmm7TmmYLjgavjg4fjg7zjgr/jgpLjg63jg7zjg4lcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIikge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIG9uUmVuZGVyZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICBjb2xvcnM6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGNvbG9ybWFwW2l0ZW0ubGFiZWxdKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgbGF5b3V0PXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgICAgcGxvdF9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1hcmdpbjogeyB0OiA3MCwgYjogNSwgbDogNDAsIHI6IDUwIH0sXG4gICAgICAgIH19XG4gIFxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLy8g5b+F44Ga5YWo5L2T44K144Kk44K644KS6Kaq6KaB57Sg44Gr5ZCI44KP44GbXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxvdFBpZUE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cblxuXG4gXG4vLyDjg4fjg7zjgr/jgpLjg63jg7zjg4njgZnjgovplqLmlbBcbmNvbnN0IGxvYWRDb21wYW5pZXMgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkgIT09IFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHRvTGlzdCA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcblxuICAgIGNvbnN0IGFscGhhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVswXSkpO1xuICAgIGNvbnN0IGJldGFfbGkgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZUZsb2F0KGxpbmUuc3BsaXQoXCIsXCIpWzFdKSk7XG5cbiAgICByZXR1cm4geyBhbHBoYV9saSwgYmV0YV9saSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBhbHBoYV9saTogW10sIGJldGFfbGk6IFtdIH07XG4gIH1cbn07XG5cbmNvbnN0IFBsb3RQZXJzb25Db21wID0gKHsgdXBkYXRlLCB2aXN1YWxUeXBlLCB0b3BpYywgY29tcGFueSwgb25SZW5kZXJlZCB9KSA9PiB7XG5jb25zdCBJZHRvVG9waWMgPSB7XCIyXCI6XCLjgrPjg7Pjgq/jg6rjg7zjg4jmp4vpgKBcIixcIjNcIjpcIuWcsOebpOaUueiJr1wiLFwiMVwiOlwi44OI44Oz44ON44Or5o6Y5YmKXCIsXG4gIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIzMVwiOlwi6YWN566h6YWN6YCBXCIsXCIxMlwiOlwi5Z+656SO5qeL6YCgXCIsXG4gIFwiMTBcIjpcIuW7uuevieioreioiFwiLFwiNVwiOlwi44OI44Oz44ON44Or5ris6YePXCIsXCIxM1wiOlwi6Zu75Yqb566h55CGXCIsXCIxNlwiOlwi5bGL5qC55qeL6YCgXCIsXG4gIFwiMTRcIjpcIuani+mAoOaQjeWCt1wiLFwiMjRcIjpcIumbu+ejgeazouOCt+ODvOODq+ODiVwiLFwiMTlcIjpcIuWkqeS6leani+mAoFwiLFwiMjNcIjpcIumfs+mfv+aknOafu1wiLFxuICBcIjE1XCI6XCLnhafmmI7jgrfjgrnjg4bjg6BcIixcIjE3XCI6XCLlo4HpnaLnt5HljJZcIn07XG5cbmNvbnN0IGNvbG9ybWFwID0ge1wi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCI6J3JnYigyMjksIDEzNCwgNiknLCBcIuWcsOebpOaUueiJr1wiOidyZ2IoOTMsIDEwNSwgMTc3KScsIFwi44OI44Oz44ON44Or5o6Y5YmKXCI6J3JnYig4MiwgMTg4LCAxNjMpJyxcbiAgICAgICAgICBcIuWFjemch+ani+mAoFwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi566h55CG44K344K544OG44OgXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLlu4Pmo4Tnianlh6bnkIZcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgICAgICAgICBcIuW7uuevieODkeODjeODq1wiOidyZ2IoMjE4LCAxNjUsIDI3KScsXCLnqbroqr/jgrfjgrnjg4bjg6BcIjoncmdiKDQ3LCAxMzgsIDE5NiknLCBcIuaOmOWJiuijhee9rlwiOidyZ2IoMTE4LCA3OCwgMTU5KScsIFxuICAgICAgICAgIFwi54Wn5piO44K344K544OG44OgXCI6J3JnYigyNTUsIDEyNywgMTQpJywgXCLlo4HpnaLnt5HljJZcIjoncmdiKDE1MywgMTUzLCAxNTMpJ1xuICAgICAgICB9O1xuXG4gICAgICAgIFxuICBjb25zdCBhcnJvd19jb2xvciA9IFsnI0UyNEU0MicsICcjRTlCMDAwJywgJyNFQjZFODAnLCAnIzlCN0VERScsICcjNjNEMkZGJ107XG5cbiAgY29uc3QgW3ByZXBhcmVkRGF0YSwgc2V0UHJlcGFyZWREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwi5LyB5qWt44Gu56uL44Gh5L2N572uXCIpO1xuICBjb25zdCBbYXV0aG9yRGF0YSwgc2V0QXV0aG9yRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByZXBhcmVEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsUHJvbWlzZXMgPSAodG9waWMgfHwgW1wiZGVmYXVsdF90b3BpY1wiXSkubWFwKGFzeW5jICh0YXJnZXRfaWQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9waWNcIix0YXJnZXRfaWQpXG4gICAgICAgICAgY29uc3QgY29sdW1uUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vc2V0dGluZy9jb21wYW55LnR4dGA7XG4gICAgICAgICAgY29uc3QgY29tcGFuaWVzID0gYXdhaXQgbG9hZENvbXBhbmllcyhjb2x1bW5QYXRoKTtcblxuICAgICAgICAgIGNvbnN0IGNvbXBhbnlEaWN0ID0gY29tcGFuaWVzLnJlZHVjZSgoYWNjLCB2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICBhY2NbdmFsdWVdID0gaWR4O1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICBjb25zdCBuZXdTZWFyY2hMaXN0ID0gQXJyYXkuaXNBcnJheShjb21wYW55KSA/IGNvbXBhbnkgOiBbY29tcGFueV07XG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRTZWFyY2hMaXN0ID0gbmV3U2VhcmNoTGlzdC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgaW4gY29tcGFueURpY3QpO1xuXG4gICAgICAgICAgY29uc3Qgbm9kZV9hbHBoYSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGZpbHRlcmVkU2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG4gICAgICAgICAgY29uc3Qgbm9kZV9iZXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsdGVyZWRTZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcblxuICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaikgPT4gaiApLm1hcChhc3luYyAocCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RhcmdldF9pZH0vcGVyc29uYS90ZXN0X29wdGltaXplXyR7cCsxfS50eHRgO1xuICAgICAgICAgICAgY29uc3QgeyBhbHBoYV9saSwgYmV0YV9saSB9ID0gYXdhaXQgdG9MaXN0KHBhcmFtZXRlclBhdGgpO1xuXG4gICAgICAgICAgICBmaWx0ZXJlZFNlYXJjaExpc3QuZm9yRWFjaCgoaywgaikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZHggPSBjb21wYW5pZXMuaW5kZXhPZihrKTtcbiAgICAgICAgICAgICAgbm9kZV9hbHBoYVtqXVtwXSA9IGFscGhhX2xpW2lkeF07XG4gICAgICAgICAgICAgIG5vZGVfYmV0YVtqXVtwXSA9IGJldGFfbGlbaWR4XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHsgbm9kZV9hbHBoYSwgbm9kZV9iZXRhLCBmaWx0ZXJlZFNlYXJjaExpc3QgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKGFsbFByb21pc2VzKTtcblxuICAgICAgICBjb25zdCBjb21iaW5lZEFscGhhID0gcmVzdWx0cy5mbGF0TWFwKHJlc3VsdCA9PiByZXN1bHQubm9kZV9hbHBoYSk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQmV0YSA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0Lm5vZGVfYmV0YSk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkU2VhcmNoTGlzdCA9IHJlc3VsdHMuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0LmZpbHRlcmVkU2VhcmNoTGlzdCk7XG5cbiAgICAgICAgc2V0UHJlcGFyZWREYXRhKHsgYWxwaGE6IGNvbWJpbmVkQWxwaGEsIGJldGE6IGNvbWJpbmVkQmV0YSwgc2VhcmNoTGlzdDogY29tYmluZWRTZWFyY2hMaXN0IH0pO1xuICAgICAgICBzZXRUaXRsZShgJHtjb21wYW55feOBrualreeVjOOBp+OBrueri+OBoeS9jee9rmApOyAvLyDliJ3mnJ/jgr/jgqTjg4jjg6vjgpLoqK3lrppcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/mupblgpnkuK3jga7jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g5Yid5pyf44Os44Oz44OA44Oq44Oz44Kw5pmC44Gr44KC44OH44O844K/44KS5rqW5YKZXG4gICAgcHJlcGFyZURhdGEoKTtcbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55XSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRBdXRob3JEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29tcGFueSkgJiYgY29tcGFueS5pbmNsdWRlcyhcIuagquW8j+S8muekvueGiuiwt+e1hFwiKSB8fCBjb21wYW55ID09PSBcIuagquW8j+S8muekvueGiuiwt+e1hFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSAodG9waWMgfHwgW1wiZGVmYXVsdF90b3BpY1wiXSkubWFwKGFzeW5jICh0b3BpY0lkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdXRob3JQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dG9waWNJZH0vcGVyc29uYS9rdW1hZ2FpX3RvcGljX2F1dGhvci5qc29uYDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXV0aG9yUGF0aCk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg6JGX6ICF44OH44O844K/44Gu6Kqt44G/6L6844G/44Gr5aSx5pWXOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOW5tOW6puOBqOODmuODq+OCveODiuOBruWvvuW/nOODnuODg+ODl1xuICAgICAgICAgICAgY29uc3QgeWVhclRvUGVyc29uYSA9IHtcbiAgICAgICAgICAgICAgXCIyMDI0XCI6IFwiNVwiLFxuICAgICAgICAgICAgICBcIjIwMjFcIjogXCI0XCIsXG4gICAgICAgICAgICAgIFwiMjAxOVwiOiBcIjNcIixcbiAgICAgICAgICAgICAgXCIyMDE3XCI6IFwiMlwiLFxuICAgICAgICAgICAgICBcIjIwMTVcIjogXCIxXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOWQhOODmuODq+OCveODiuOBruODh+ODvOOCv+OCkuaVtOW9olxuICAgICAgICAgICAgY29uc3QgcGVyc29uYURhdGEgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHllYXJUb1BlcnNvbmEpLmZvckVhY2goKFt5ZWFyLCBwZXJzb25hTnVtXSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB5ZWFyRGF0YSA9IGRhdGFbeWVhcl0gfHwge307XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyDnqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgYvjganjgYbjgYvjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHllYXJEYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwZXJzb25hRGF0YVtgcGVyc29uYV8ke3BlcnNvbmFOdW19YF0gPSB7XG4gICAgICAgICAgICAgICAgICBhdXRob3JzOiAn5Ye66aGY6ICF44Gq44GXJyxcbiAgICAgICAgICAgICAgICAgIHllYXI6IHllYXJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOODh+ODvOOCv+OBjOOBguOCi+WgtOWQiOOBr+S4iuS9jTXku7bjgpLlj5blvpdcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BBdXRob3JzID0gT2JqZWN0LmVudHJpZXMoeWVhckRhdGEpXG4gICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgNSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoKFthdXRob3IsIGNvdW50XSkgPT4gYCR7YXV0aG9yfSgke2NvdW50feS7tilgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwZXJzb25hRGF0YVtgcGVyc29uYV8ke3BlcnNvbmFOdW19YF0gPSB7XG4gICAgICAgICAgICAgICAgICBhdXRob3JzOiB0b3BBdXRob3JzLmpvaW4oJywgJyksXG4gICAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7IHRvcGljSWQsIGRhdGE6IHBlcnNvbmFEYXRhIH07XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICAgIGNvbnN0IGF1dGhvckRhdGFNYXAgPSB7fTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXN1bHRzLmZvckVhY2goKHsgdG9waWNJZCwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBhdXRob3JEYXRhTWFwW3RvcGljSWRdID0gZGF0YTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBzZXRBdXRob3JEYXRhKGF1dGhvckRhdGFNYXApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLokZfogIXjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkQXV0aG9yRGF0YSgpO1xuICB9LCBbY29tcGFueSwgdG9waWNdKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZSAmJiBwcmVwYXJlZERhdGEpIHtcbiAgICAgIGNvbnN0IHBsb3REYXRhID0gcHJlcGFyZWREYXRhLnNlYXJjaExpc3QubWFwKChrLCBqKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3BpYyA9IHRvcGljW2pdO1xuICAgICAgICBjb25zdCBwZXJzb25hVG9ZZWFyID0ge1xuXG4gICAgICAgICAgXCIxXCI6IFwiMjAwOVwiLFxuICAgICAgICAgIFwiMlwiOiBcIjIwMTJcIixcbiAgICAgICAgICBcIjNcIjogXCIyMDE1XCIsXG4gICAgICAgICAgXCI0XCI6IFwiMjAxOFwiLFxuICAgICAgICAgIFwiNVwiOiBcIjIwMjFcIlxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhvdmVyVGV4dHMgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXS5tYXAoKG51bSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHllYXJUZXh0ID0gYCR7cGVyc29uYVRvWWVhcltudW1dfeW5tGA7XG4gICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KHllYXJUZXh0KTsgIC8vIOaWh+Wtl+WIl+OCkuaVsOWApOOBq+WkieaPm1xuICAgICAgICAgIGlmIChrID09PSBcIuagquW8j+S8muekvueGiuiwt+e1hFwiICYmIGF1dGhvckRhdGFbY3VycmVudFRvcGljXSAmJiBhdXRob3JEYXRhW2N1cnJlbnRUb3BpY11bYHBlcnNvbmFfJHtudW19YF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGF1dGhvckluZm8gPSBhdXRob3JEYXRhW2N1cnJlbnRUb3BpY11bYHBlcnNvbmFfJHtudW19YF07XG4gICAgICAgICAgICByZXR1cm4gYCgke3llYXItM31+JHt5ZWFyfSk8YnI+6JGX6ICFOiAke2F1dGhvckluZm8uYXV0aG9yc31gO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgICgke3llYXItM31+JHt5ZWFyfSlgO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXSxcbiAgICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXSxcbiAgICAgICAgICBtb2RlOiBcImxpbmVzK21hcmtlcnMrdGV4dFwiLFxuICAgICAgICAgIHRleHQ6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdLFxuICAgICAgICAgIHRleHRwb3NpdGlvbjogXCJ0b3AgbGVmdFwiLFxuICAgICAgICAgIGhvdmVydGV4dDogaG92ZXJUZXh0cyxcbiAgICAgICAgICBob3ZlcmluZm86IFwidGV4dFwiLFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMTIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgY29sb3I6IGNvbG9ybWFwW0lkdG9Ub3BpY1t0b3BpY1tqXV1dLFxuICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IElkdG9Ub3BpY1t0b3BpY1tqXV0sXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICBcblxuICAgICAgY29uc3QgcGxvdEFubm90YXRpb25zID0gcHJlcGFyZWREYXRhLnNlYXJjaExpc3QuZmxhdE1hcCgoaywgaikgPT5cbiAgICAgICAgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgICAgeDogcHJlcGFyZWREYXRhLmFscGhhW2pdW2kgKyAxXSxcbiAgICAgICAgICB5OiBwcmVwYXJlZERhdGEuYmV0YVtqXVtpICsgMV0sXG4gICAgICAgICAgeHJlZjogJ3gnLFxuICAgICAgICAgIHlyZWY6ICd5JyxcbiAgICAgICAgICBheHJlZjogJ3gnLFxuICAgICAgICAgIGF5cmVmOiAneScsXG4gICAgICAgICAgYXg6IHByZXBhcmVkRGF0YS5hbHBoYVtqXVtpXSxcbiAgICAgICAgICBheTogcHJlcGFyZWREYXRhLmJldGFbal1baV0sXG4gICAgICAgICAgYXJyb3djb2xvcjpjb2xvcm1hcFtJZHRvVG9waWNbdG9waWNbal1dXSxcbiAgICAgICAgICBhcnJvd3NpemU6IDEuMixcbiAgICAgICAgICBhcnJvd3dpZHRoOiAxLjIsXG4gICAgICAgICAgYXJyb3doZWFkOiA1LFxuICAgICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgICAgfSkpXG4gICAgICApO1xuXG4gICAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAgIHNldEFubm90YXRpb25zKHBsb3RBbm5vdGF0aW9ucyk7XG5cbiAgICAgIGlmIChvblJlbmRlcmVkKSBvblJlbmRlcmVkKCk7XG4gICAgfVxuICB9LCBbdXBkYXRlLCBwcmVwYXJlZERhdGEsIGF1dGhvckRhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgIHN0eWxlPXt7IHdpZHRoOicxMDB2aCcgLGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e2ZpZ0RhdGF9XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHBsb3RfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICBmb250OiB7IHNpemU6IDIwLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgICB5OiAxLjgsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgorkvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMS41LFxuICAgICAgICAgICAgICB5OiAxLjgsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgormnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgICB5OiAwLjIsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/kvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMS41LFxuICAgICAgICAgICAgICB5OiAwLjIsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/mnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFswLjEsIDEuOV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMC4xLCAxLCAxLjldLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6MjUsICAgLy8gWei7uOOBi+OCieOBrui3nembou+8iOimi+OChOOBmeOBj+OBmeOCi+OBn+OCge+8iVxuICAgICAgICAgICAgcmFuZ2U6IFswLjEsIDEuOV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMC4xLCAxLCAxLjldLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogMjUsIGI6IDE1LCBsOiAxNSwgcjogMjAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhvdmVyZGlzdGFuY2U6NTAsXG4gICAgICAgICAgaG92ZXJtb2RlOiAnY2xvc2VzdCcsXG4gICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgbmFtZWxlbmd0aDogLTEgIC8vIOWQjeWJjeOBrumVt+OBleWItumZkOOCkuino+mZpFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNvbmZpZz17eyBcbiAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgIGRpc3BsYXlNb2RlQmFyOiBmYWxzZSAgLy8g44OE44O844Or44OQ44O844KS6Z2e6KGo56S644GrXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMnZoXCIsIHdpZHRoOiBcIjEwMHZoXCIsIGhlaWdodDogXCI0NXZoXCIgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90UGVyc29uQ29tcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuXG5jb25zdCBjb2xvcm1hcCA9IHsn6bm/5bO25bu66Kit5qCq5byP5Lya56S+JzoncmdiKDIyOSwgMTM0LCA2KScsIFwi5qCq5byP5Lya56S+5aSn5p6X57WEXCI6J3JnYig5MywgMTA1LCAxNzcpJywgXCLmuIXmsLTlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDgyLCAxODgsIDE2MyknLFxuICBcIuWkp+aIkOW7uuioreagquW8j+S8muekvlwiOidyZ2IoMTUzLCAyMDEsIDY5KScsIFwi5qCq5byP5Lya56S+56u55Lit5bel5YuZ5bqXXCI6J3JnYigyMDQsIDk3LCAxNzYpJywgXCLmoKrlvI/kvJrnpL7plbfosLflt6XjgrPjg7zjg53jg6zjg7zjgrfjg6fjg7NcIjoncmdiKDM2LCAxMjEsIDEwOCknLCBcbiAgXCLliY3nlLDlu7roqK3lt6Xmpa3moKrlvI/kvJrnpL5cIjoncmdiKDIxOCwgMTY1LCAyNyknLFwi5LqU5rSL5bu66Kit5qCq5byP5Lya56S+XCI6J3JnYig0NywgMTM4LCAxOTYpJywgXCLmoKrlvI/kvJrnpL7jg5Xjgrjjgr9cIjoncmdiKDExOCwgNzgsIDE1OSknLCBcbiAgXCLmiLjnlLDlu7roqK3moKrlvI/kvJrnpL5cIjoncmdiKDIzNywgMTAwLCA5MCknLCBcIuagquW8j+S8muekvueGiuiwt+e1hFwiOidyZ2IoMTY1LCAxNzAsIDE1MyknfTtcblxuLy8g44OH44O844K/44KS44Ot44O844OJ44GZ44KL6Zai5pWwXG5jb25zdCBsb2FkQ29tcGFuaWVzID0gYXN5bmMgKGRhdGFQYXRoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhUGF0aCk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCB0b0xpc3QgPSBhc3luYyAoZGF0YVBhdGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFQYXRoKTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG5cbiAgICBjb25zdCBhbHBoYV9saSA9IGxpbmVzLm1hcChsaW5lID0+IHBhcnNlRmxvYXQobGluZS5zcGxpdChcIixcIilbMF0pKTtcbiAgICBjb25zdCBiZXRhX2xpID0gbGluZXMubWFwKGxpbmUgPT4gcGFyc2VGbG9hdChsaW5lLnNwbGl0KFwiLFwiKVsxXSkpO1xuXG4gICAgcmV0dXJuIHsgYWxwaGFfbGksIGJldGFfbGkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/44Gu6Kqt44G/6L6844G/44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgYWxwaGFfbGk6IFtdLCBiZXRhX2xpOiBbXSB9O1xuICB9XG59O1xuXG5jb25zdCBQbG90UGVyc29uVG9waWMgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBvblJlbmRlcmVkLCBvbkNsaWNrRGF0YX0pID0+IHtcbiAgY29uc3QgYXJyb3dfY29sb3IgPSBbJyNFMjRFNDInLCAnI0U5QjAwMCcsICcjRUI2RTgwJywgJyM5QjdFREUnLCAnIzYzRDJGRiddO1xuICBjb25zdCBbZmlnRGF0YSwgc2V0RmlnRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbm5vdGF0aW9ucywgc2V0QW5ub3RhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29tcGFueUxpc3QsIHNldENvbXBhbnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaExpc3QsIHNldFNlYXJjaExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYXV0aG9yRGF0YSwgc2V0QXV0aG9yRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgSWR0b1RvcGljID0ge1wiMlwiOlwi44Kz44Oz44Kv44Oq44O844OI5qeL6YCgXCIsXCIzXCI6XCLlnLDnm6TmlLnoia9cIixcIjFcIjpcIuODiOODs+ODjeODq+aOmOWJilwiLFxuICAgIFwiMFwiOlwi5YWN6ZyH5qeL6YCgXCIsXCI5XCI6XCLnrqHnkIbjgrfjgrnjg4bjg6BcIixcIjZcIjpcIuW7g+ajhOeJqeWHpueQhlwiLFwiOFwiOlwi5bu656+J44OR44ON44OrXCIsXG4gICAgXCI3XCI6XCLnqbroqr/jgrfjgrnjg4bjg6BcIixcIjExXCI6XCLmjpjliYroo4Xnva5cIixcIjMxXCI6XCLphY3nrqHphY3pgIFcIixcIjEyXCI6XCLln7rnpI7mp4vpgKBcIixcbiAgICBcIjEwXCI6XCLlu7rnr4noqK3oqIhcIixcIjVcIjpcIuODiOODs+ODjeODq+a4rOmHj1wiLFwiMTNcIjpcIumbu+WKm+euoeeQhlwiLFwiMTZcIjpcIuWxi+agueani+mAoFwiLFxuICAgIFwiMTRcIjpcIuani+mAoOaQjeWCt1wiLFwiMjRcIjpcIumbu+ejgeazouOCt+ODvOODq+ODiVwiLFwiMTlcIjpcIuWkqeS6leani+mAoFwiLFwiMjNcIjpcIumfs+mfv+aknOafu1wiLFxuICAgIFwiMTVcIjpcIueFp+aYjuOCt+OCueODhuODoFwiLFwiMTdcIjpcIuWjgemdoue3keWMllwifTtcblxuICAvLyDliJ3mnJ/jg4fjg7zjgr/jga7jg63jg7zjg4lcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzdWFsVHlwZSA9PT0gXCJvbmUtdG9waWNcIiAmJiB0b3BpYykge1xuICAgICAgY29uc3QgdGFyZ2V0X2lkID0gdG9waWM7IC8vIOODiOODlOODg+OCr0lE44Gu6Kit5a6aXG4gICAgICBjb25zdCBjb2x1bW5QYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0X2lkfS9zZXR0aW5nL2NvbXBhbnkudHh0YDtcblxuICAgICAgbG9hZENvbXBhbmllcyhjb2x1bW5QYXRoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldENvbXBhbnlMaXN0KGRhdGEpO1xuICAgICAgICBzZXRUaXRsZShg5qWt55WM5YaF44Gn44Gu5LyB5qWt44Gu56uL44Gh5L2N572uYCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt2aXN1YWxUeXBlLCB0b3BpY10pO1xuXG4gIC8vIOaknOe0ouWvvuixoeOBruODleOCo+ODq+OCv+ODquODs+OCsFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb21wYW55TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb21wYW55RGljdCA9IGNvbXBhbnlMaXN0LnJlZHVjZSgoYWNjLCB2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgIGFjY1t2YWx1ZV0gPSBpZHg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGNvbnN0IG5ld1NlYXJjaExpc3QgPSBBcnJheS5pc0FycmF5KGNvbXBhbnkpID8gY29tcGFueSA6IFtjb21wYW55XTtcbiAgICAgIHNldFNlYXJjaExpc3QobmV3U2VhcmNoTGlzdC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgaW4gY29tcGFueURpY3QpKTtcbiAgICB9XG4gIH0sIFtjb21wYW55TGlzdCwgY29tcGFueV0pO1xuXG4gIC8vIOiRl+iAheODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+aWsOOBl+OBhHVzZUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRBdXRob3JEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29tcGFueSkgJiYgY29tcGFueS5pbmNsdWRlcyhcIuagquW8j+S8muekvueGiuiwt+e1hFwiKSB8fCBjb21wYW55ID09PSBcIuagquW8j+S8muekvueGiuiwt+e1hFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgYXV0aG9yUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvdmlzdWFsaXplX2RhdGEvdG9waWMke3RvcGljfS9wZXJzb25hL2t1bWFnYWlfdG9waWNfYXV0aG9yLmpzb25gO1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXV0aG9yUGF0aCk7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDokZfogIXjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgavlpLHmlZc6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIOW5tOW6puOBqOODmuODq+OCveODiuOBruWvvuW/nOODnuODg+ODl1xuICAgICAgICAgIGNvbnN0IHllYXJUb1BlcnNvbmEgPSB7XG4gICAgICAgICAgICBcIjIwMjFcIjogXCIxXCIsXG4gICAgICAgICAgICBcIjIwMTlcIjogXCIyXCIsXG4gICAgICAgICAgICBcIjIwMTdcIjogXCIzXCIsXG4gICAgICAgICAgICBcIjIwMTVcIjogXCI0XCIsXG4gICAgICAgICAgICBcIjIwMTNcIjogXCI1XCJcbiAgICAgICAgICB9O1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIOWQhOODmuODq+OCveODiuOBruODh+ODvOOCv+OCkuaVtOW9olxuICAgICAgICAgIGNvbnN0IHBlcnNvbmFEYXRhID0ge307XG4gICAgICAgICAgT2JqZWN0LmVudHJpZXMoeWVhclRvUGVyc29uYSkuZm9yRWFjaCgoW3llYXIsIHBlcnNvbmFOdW1dKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyRGF0YSA9IGRhdGFbeWVhcl0gfHwge307XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOepuuOBruOCquODluOCuOOCp+OCr+ODiOOBi+OBqeOBhuOBi+OCkuODgeOCp+ODg+OCr1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHllYXJEYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgcGVyc29uYURhdGFbYHBlcnNvbmFfJHtwZXJzb25hTnVtfWBdID0ge1xuICAgICAgICAgICAgICAgIGF1dGhvcnM6ICflh7rpoZjogIXjgarjgZcnLFxuICAgICAgICAgICAgICAgIHllYXI6IHllYXJcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIOODh+ODvOOCv+OBjOOBguOCi+WgtOWQiOOBr+S4iuS9jTXku7bjgpLlj5blvpdcbiAgICAgICAgICAgICAgY29uc3QgdG9wQXV0aG9ycyA9IE9iamVjdC5lbnRyaWVzKHllYXJEYXRhKVxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICAgICAgICAgIC5tYXAoKFthdXRob3IsIGNvdW50XSkgPT4gYCR7YXV0aG9yfSgke2NvdW50feS7tilgKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHBlcnNvbmFEYXRhW2BwZXJzb25hXyR7cGVyc29uYU51bX1gXSA9IHtcbiAgICAgICAgICAgICAgICBhdXRob3JzOiB0b3BBdXRob3JzLmpvaW4oJywgJyksXG4gICAgICAgICAgICAgICAgeWVhcjogeWVhclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgIHNldEF1dGhvckRhdGEocGVyc29uYURhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLokZfogIXjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkQXV0aG9yRGF0YSgpO1xuICB9LCBbY29tcGFueSwgdG9waWNdKTtcblxuICAvLyDjg4fjg7zjgr/jga7mj4/nlLtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXBkYXRlICYmIHNlYXJjaExpc3QubGVuZ3RoID4gMCAmJiB0b3BpYykge1xuICAgICAgY29uc3QgdGFyZ2V0X2lkID0gdG9waWM7IC8vIOODiOODlOODg+OCr0lE44Gu6Kit5a6aXG4gICAgICBjb25zdCBub2RlX2FscGhhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2VhcmNoTGlzdC5sZW5ndGggfSwgKCkgPT4gQXJyYXkoNSkuZmlsbCgwKSk7XG4gICAgICBjb25zdCBub2RlX2JldGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzZWFyY2hMaXN0Lmxlbmd0aCB9LCAoKSA9PiBBcnJheSg1KS5maWxsKDApKTtcblxuICAgICAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBpKSA9PiBpICkubWFwKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlclBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRfaWR9L3BlcnNvbmEvdGVzdF9vcHRpbWl6ZV8ke3ArMX0udHh0YDtcbiAgICAgICAgcmV0dXJuIHRvTGlzdChwYXJhbWV0ZXJQYXRoKS50aGVuKCh7IGFscGhhX2xpLCBiZXRhX2xpIH0pID0+IHtcbiAgICAgICAgICBzZWFyY2hMaXN0LmZvckVhY2goKGssIGopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbXBhbnlMaXN0LmluZGV4T2Yoayk7XG4gICAgICAgICAgICBub2RlX2FscGhhW2pdW3BdID0gYWxwaGFfbGlbaWR4XTtcbiAgICAgICAgICAgIG5vZGVfYmV0YVtqXVtwXSA9IGJldGFfbGlbaWR4XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBwZXJzb25hVG9ZZWFyID0ge1xuICAgICAgICAgIFwiNVwiOiBcIjIwMjFcIixcbiAgICAgICAgICBcIjRcIjogXCIyMDE4XCIsXG4gICAgICAgICAgXCIzXCI6IFwiMjAxNVwiLFxuICAgICAgICAgIFwiMlwiOiBcIjIwMTJcIixcbiAgICAgICAgICBcIjFcIjogXCIyMDA5XCJcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwbG90RGF0YSA9IHNlYXJjaExpc3QubWFwKChrLCBqKSA9PiB7XG4gICAgICAgICAgY29uc3QgaG92ZXJUZXh0cyA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdLm1hcCgobnVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyVGV4dCA9IGAke3BlcnNvbmFUb1llYXJbbnVtXX1gO1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KHllYXJUZXh0KTsgIC8vIOaWh+Wtl+WIl+OCkuaVsOWApOOBq+WkieaPm1xuICAgICAgICAgICAgaWYgKGsgPT09IFwi5qCq5byP5Lya56S+54aK6LC357WEXCIgJiYgYXV0aG9yRGF0YVtgcGVyc29uYV8ke251bX1gXSkge1xuICAgICAgICAgICAgICByZXR1cm4gYCgke3llYXItM31+JHt5ZWFyfSk8YnI+6JGX6ICFOiAke2F1dGhvckRhdGFbYHBlcnNvbmFfJHtudW19YF0uYXV0aG9yc31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGAoJHt5ZWFyLTN9fiR7eWVhcn0pYDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBub2RlX2FscGhhW2pdLFxuICAgICAgICAgICAgeTogbm9kZV9iZXRhW2pdLFxuICAgICAgICAgICAgbW9kZTogXCJsaW5lcyttYXJrZXJzK3RleHRcIixcbiAgICAgICAgICAgIHRleHQ6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdLFxuICAgICAgICAgICAgdGV4dHBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgICAgICAgICBob3ZlcnRleHQ6IGhvdmVyVGV4dHMsXG4gICAgICAgICAgICBob3ZlcmluZm86IFwidGV4dFwiLFxuICAgICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICBib3JkZXJjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDEyIH0sXG4gICAgICAgICAgICAgIHhhbmNob3I6ICdyaWdodCcsICAvLyDjg5vjg5Djg7zjga545L2N572uXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdib3R0b20nICAgICAvLyDjg5vjg5Djg7zjga555L2N572uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgICAgIGNvbG9yOiBjb2xvcm1hcFtrXSxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lOiBrLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHBsb3RBbm5vdGF0aW9ucyA9IHNlYXJjaExpc3QuZmxhdE1hcCgoaywgaikgPT5cbiAgICAgICAgICBBcnJheSg0KS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgICAgIHg6IG5vZGVfYWxwaGFbal1baSArIDFdLFxuICAgICAgICAgICAgeTogbm9kZV9iZXRhW2pdW2kgKyAxXSxcbiAgICAgICAgICAgIHhyZWY6ICd4JyxcbiAgICAgICAgICAgIHlyZWY6ICd5JyxcbiAgICAgICAgICAgIGF4OiBub2RlX2FscGhhW2pdW2ldLFxuICAgICAgICAgICAgYXk6IG5vZGVfYmV0YVtqXVtpXSxcbiAgICAgICAgICAgIGF4cmVmOiAneCcsXG4gICAgICAgICAgICBheXJlZjogJ3knLFxuICAgICAgICAgICAgYXJyb3djb2xvcjogY29sb3JtYXBba10sXG4gICAgICAgICAgICBhcnJvd3NpemU6IDEuMixcbiAgICAgICAgICAgIGFycm93d2lkdGg6IDEuMixcbiAgICAgICAgICAgIGFycm93aGVhZDogNSxcbiAgICAgICAgICAgIHNob3dhcnJvdzogdHJ1ZSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgKTtcblxuICAgICAgICBzZXRGaWdEYXRhKHBsb3REYXRhKTtcbiAgICAgICAgc2V0QW5ub3RhdGlvbnMocGxvdEFubm90YXRpb25zKTtcbiAgICAgICAgaWYgKG9uUmVuZGVyZWQpIG9uUmVuZGVyZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VwZGF0ZSwgc2VhcmNoTGlzdCwgY29tcGFueUxpc3QsIHRvcGljLCBhdXRob3JEYXRhXSk7XG5cbiAgY29uc3QgaGFuZGxlUGVyc29uYUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnBvaW50cyAmJiBldmVudC5wb2ludHNbMF0pIHtcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnBvaW50c1swXVtcImRhdGFcIl1bXCJuYW1lXCJdKVxuICAgICAgY29uc3QgY2xpY2tkYXRhID0gZXZlbnQucG9pbnRzWzBdW1wiZGF0YVwiXVtcIm5hbWVcIl07IC8vIOOCr+ODquODg+OCr+OBleOCjOOBn+mDqOWIhuOBruODqeODmeODq1xuICAgICAgb25DbGlja0RhdGEoW2NsaWNrZGF0YV0pOyAvLyDopqrjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavjg6njg5njg6vjgpLpgJrnn6VcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBzdHlsZT17eyB3aWR0aDonMTAwdmgnICxoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8UGxvdFxuICAgICAgICBkYXRhPXtmaWdEYXRhfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICBwbG90X2JnY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFwZXJfYmdjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgZm9udDogeyBzaXplOiAyMCwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgIFxuICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgeTogMC45NSxcbiAgICAgICAgICAgIHhhbmNob3I6ICdjZW50ZXInLFxuICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgICB5OiAxLjgsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgorkvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMS41LFxuICAgICAgICAgICAgICB5OiAxLjgsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjmpa3nlYzjgpLlvJXjgaPlvLXjgormnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMC41LFxuICAgICAgICAgICAgICB5OiAwLjIsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/kvJ3ntbHnmoTjgarliIbph47jgavlj5bjgorntYTjgpPjgafjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogMS41LFxuICAgICAgICAgICAgICB5OiAwLjIsXG4gICAgICAgICAgICAgIHRleHQ6ICfvvIjni6zoh6rot6/nt5rjgpLpgLLjgb/mnKrnn6Xjga7liIbph47jgavmipXos4fjgZfjgabjgYTjgovvvIknLFxuICAgICAgICAgICAgICBzaG93YXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDksIGNvbG9yOiAnZ3JheScgfSxcbiAgICAgICAgICAgICAgeGFuY2hvcjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHlhbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuXG4gICAgICAgICBcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIuaWsOimj+aAp1wiLFxuICAgICAgICAgICAgcmFuZ2U6IFswLjEsIDEuOV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMC4xLCAxLCAxLjldLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgdGl0bGUgOiBcIumghuW/nOaAp1wiLFxuICAgICAgICAgICAgdGl0bGVfc3RhbmRvZmY6MjUsICAgLy8gWei7uOOBi+OCieOBrui3nembou+8iOimi+OChOOBmeOBj+OBmeOCi+OBn+OCge+8iVxuICAgICAgICAgICAgcmFuZ2U6IFswLjEsIDEuOV0sXG4gICAgICAgICAgICBsaW5lY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGxpbmV3aWR0aDogMSxcbiAgICAgICAgICAgIGdyaWRjb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgICAgICBncmlkd2lkdGg6IDEsXG4gICAgICAgICAgICBncmlkZGFzaDogJ2RvdCcsXG4gICAgICAgICAgICB0aWNrbW9kZTpcImFycmF5XCIsXG4gICAgICAgICAgICB0aWNrdmFsczpbMC4xLCAxLCAxLjldLFxuICAgICAgICAgICAgdGlja3RleHQ6W1wi5L2OXCIsIFwiXCIsIFwi6auYXCJdLFxuICAgICAgICAgICAgemVyb2xpbmU6IGZhbHNlLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHsgdDogMjUsIGI6IDE1LCBsOiAxNSwgcjogMjAgfSxcbiAgICAgICAgICBzaG93bGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBiZ2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBib3JkZXJ3aWR0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhvdmVyZGlzdGFuY2U6IDUwLFxuICAgICAgICAgIGhvdmVybW9kZTogJ2Nsb3Nlc3QnLFxuICAgICAgICAgIGhvdmVybGFiZWw6IHtcbiAgICAgICAgICAgIG5hbWVsZW5ndGg6IC0xXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgY29uZmlnPXt7IFxuICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgZGlzcGxheU1vZGVCYXI6IGZhbHNlXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMnZoXCIsIHdpZHRoOiBcIjEwMHZoXCIsIGhlaWdodDogXCI0NXZoXCIgfX1cbiAgICAgICAgb25DbGljaz17aGFuZGxlUGVyc29uYUNsaWNrfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsb3RQZXJzb25Ub3BpYztcbiIsIi8vIFNpZGViYXIuanN4XG5pbXBvcnQgUmVhY3QgLHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY29yZGlvbiwgQnV0dG9uLCBDb2wsIFJvdywgRm9ybSwgSW5wdXRHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IFNpZGViYXIgPSAoeyBvbkFwcGx5LCB2aXN1YWxUeXBlLCBvblZpc3VhbFR5cGVDaGFuZ2UsIHRvcGljTGlzdCwgY29tcGFueUxpc3QsIHNlbGVjdGVkQ29tcGFuaWVzLCBzZWxlY3RlZFRvcGljcywgb25DaGFuZ2VUb3BpYywgb25DaGFuZ2VDb21wYW55IH0pID0+IHtcbiAgY29uc3QgW2lucHV0VHlwZSwgc2V0SW5wdXRUeXBlXSA9IHVzZVN0YXRlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSk7IC8vIOWIneacn+WApOOBryBcImNoZWNrYm94XCJcbiAgY29uc3QgW3RvcGljU2VhcmNoVGVybSwgc2V0VG9waWNTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NvbXBhbnlTZWFyY2hUZXJtLCBzZXRDb21wYW55U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHRvcGljU2VhcmNoUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBjb21wYW55U2VhcmNoUmVmID0gdXNlUmVmKG51bGwpO1xuICBcbiAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBvblZpc3VhbFR5cGVDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWU9PVwib25lLWNvbXBcIil7XG4gICAgICAgIHNldElucHV0VHlwZShbXCJjaGVja2JveFwiLFwicmFkaW9cIl0pfVxuICAgICAgZWxzZXtcbiAgICAgICAgc2V0SW5wdXRUeXBlKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSlcbiAgICAgICAgfVxuXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dFR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IElkdG9Ub3BpYyA9IHtcIjJcIjpcIuOCs+ODs+OCr+ODquODvOODiOani+mAoFwiLFwiM1wiOlwi5Zyw55uk5pS56ImvXCIsXCIxXCI6XCLjg4jjg7Pjg43jg6vmjpjliYpcIixcbiAgICBcIjBcIjpcIuWFjemch+ani+mAoFwiLFwiOVwiOlwi566h55CG44K344K544OG44OgXCIsXCI2XCI6XCLlu4Pmo4Tnianlh6bnkIZcIixcIjhcIjpcIuW7uuevieODkeODjeODq1wiLFxuICAgIFwiN1wiOlwi56m66Kq/44K344K544OG44OgXCIsXCIxMVwiOlwi5o6Y5YmK6KOF572uXCIsXCIzMVwiOlwi6YWN566h6YWN6YCBXCIsXCIxMlwiOlwi5Z+656SO5qeL6YCgXCIsXG4gICAgXCIxMFwiOlwi5bu656+J6Kit6KiIXCIsXCI1XCI6XCLjg4jjg7Pjg43jg6vmuKzph49cIixcIjEzXCI6XCLpm7vlipvnrqHnkIZcIixcIjE2XCI6XCLlsYvmoLnmp4vpgKBcIixcbiAgICBcIjE0XCI6XCLmp4vpgKDmkI3lgrdcIixcIjI0XCI6XCLpm7vno4Hms6Ljgrfjg7zjg6vjg4lcIixcIjE5XCI6XCLlpKnkupXmp4vpgKBcIixcIjIzXCI6XCLpn7Ppn7/mpJzmn7tcIixcbiAgICBcIjE1XCI6XCLnhafmmI7jgrfjgrnjg4bjg6BcIixcIjE3XCI6XCLlo4HpnaLnt5HljJZcIn07XG4gIFxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGxUb3BpY3MgPSAoKSA9PiB7XG4gICAgdG9waWNMaXN0LmZvckVhY2godG9waWMgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZFRvcGljcy5pbmNsdWRlcyh0b3BpYykpIHtcbiAgICAgICAgb25DaGFuZ2VUb3BpYyh0b3BpYywgaW5wdXRUeXBlWzBdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVVbnNlbGVjdEFsbFRvcGljcyA9ICgpID0+IHtcbiAgICB0b3BpY0xpc3QuZm9yRWFjaCh0b3BpYyA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWRUb3BpY3MuaW5jbHVkZXModG9waWMpKSB7XG4gICAgICAgIG9uQ2hhbmdlVG9waWModG9waWMsIGlucHV0VHlwZVswXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0QWxsQ29tcGFuaWVzID0gKCkgPT4ge1xuICAgIGNvbXBhbnlMaXN0LmZvckVhY2goY29tcGFueSA9PiB7XG4gICAgICBpZiAoIXNlbGVjdGVkQ29tcGFuaWVzLmluY2x1ZGVzKGNvbXBhbnkpKSB7XG4gICAgICAgIG9uQ2hhbmdlQ29tcGFueShjb21wYW55LCBpbnB1dFR5cGVbMV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVuc2VsZWN0QWxsQ29tcGFuaWVzID0gKCkgPT4ge1xuICAgIGNvbXBhbnlMaXN0LmZvckVhY2goY29tcGFueSA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWRDb21wYW5pZXMuaW5jbHVkZXMoY29tcGFueSkpIHtcbiAgICAgICAgb25DaGFuZ2VDb21wYW55KGNvbXBhbnksIGlucHV0VHlwZVsxXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVG9waWNTZWFyY2ggPSAoZSkgPT4ge1xuICAgIHNldFRvcGljU2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29tcGFueVNlYXJjaCA9IChlKSA9PiB7XG4gICAgc2V0Q29tcGFueVNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRvcGljU2VhcmNoS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmaWx0ZXJlZFRvcGljcyA9IHRvcGljTGlzdC5maWx0ZXIodG9waWMgPT4gXG4gICAgICAgIElkdG9Ub3BpY1t0b3BpY10udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0b3BpY1NlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG4gICAgICBpZiAoZmlsdGVyZWRUb3BpY3MubGVuZ3RoID4gMCkge1xuICAgICAgICBvbkNoYW5nZVRvcGljKGZpbHRlcmVkVG9waWNzWzBdLCBpbnB1dFR5cGVbMF0pO1xuICAgICAgfVxuICAgICAgc2V0VG9waWNTZWFyY2hUZXJtKCcnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29tcGFueVNlYXJjaEtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZmlsdGVyZWRDb21wYW5pZXMgPSBjb21wYW55TGlzdC5maWx0ZXIoY29tcGFueSA9PiBcbiAgICAgICAgY29tcGFueS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvbXBhbnlTZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgICAgaWYgKGZpbHRlcmVkQ29tcGFuaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb25DaGFuZ2VDb21wYW55KGZpbHRlcmVkQ29tcGFuaWVzWzBdLCBpbnB1dFR5cGVbMV0pO1xuICAgICAgfVxuICAgICAgc2V0Q29tcGFueVNlYXJjaFRlcm0oJycpO1xuICAgIH1cbiAgfTtcblxuICAvLyDjg4jjg5Tjg4Pjgq/jga7jg5XjgqPjg6vjgr/jg6rjg7PjgrBcbiAgY29uc3QgZmlsdGVyZWRUb3BpY3MgPSB0b3BpY0xpc3QuZmlsdGVyKHRvcGljID0+IFxuICAgIHRvcGljU2VhcmNoVGVybSA9PT0gJycgfHwgSWR0b1RvcGljW3RvcGljXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRvcGljU2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuICApO1xuXG4gIC8vIOS8muekvuOBruODleOCo+ODq+OCv+ODquODs+OCsFxuICBjb25zdCBmaWx0ZXJlZENvbXBhbmllcyA9IGNvbXBhbnlMaXN0LmZpbHRlcihjb21wYW55ID0+IFxuICAgIGNvbXBhbnlTZWFyY2hUZXJtID09PSAnJyB8fCBjb21wYW55LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY29tcGFueVNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCBwYWRkaW5nOiAnMTBweCcsIGJhY2tncm91bmRDb2xvcjogJ2JnLWxpZ2h0JyB9fT5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHRleHQtZGFuZ2VyIGZvbnQtaXRhbGljXCIgc3R5bGU9e3sgaGVpZ2h0OiAnNSUnIH19PlxuICAgICAgICA8Q29sIHNtPXs2fT5cbiAgICAgICAgICA8aDUgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTAlJyB9fSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS1lbXBoYXNpc1wiPlxuICAgICAgICAgICAg5Y+v6KaW5YyW5p2h5Lu2XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc209ezR9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlkPVwiYXBwbHlcIlxuICAgICAgICAgICAgb25DbGljaz17b25BcHBseX1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzE1JScgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYXJrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDlj6/oppbljJZcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgey8qIEFjY29yZGlvbiAqL31cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmctbGlnaHQgdGV4dC1kYW5nZXIgXCIgc3R5bGU9e3sgaGVpZ2h0OiAnODAlJyB9fT5cbiAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiIGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICB7LyogVmlzdWFsaXphdGlvbiBUeXBlICovfVxuICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjBcIiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+5Y+v6KaW5YyW44K/44Kk44OXPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGlkID0gXCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXN1YWxfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwib25lLWNvbXBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aXN1YWxUeXBlID09PSBcIm9uZS1jb21wXCJ9IC8vIOODh+ODleOCqeODq+ODiOODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvbmUtY29tcFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG14LTJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19XG4gICAgICAgICAgICAgICAgICA+MeekvuOBq+azqOebrjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzdWFsX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uZS10b3BpY1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Zpc3VhbFR5cGUgPT09IFwib25lLXRvcGljXCJ9IC8vIOODh+ODleOCqeODq+ODiOODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvbmUtdG9waWNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBteC0yXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPjHjg4jjg5Tjg4Pjgq/jgavms6jnm648L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBUb3BpYyBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMVwiIGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5Ub3BpYzwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMlwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdEFsbFRvcGljc30+5YWo6YG45oqePC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB2YXJpYW50PVwib3V0bGluZS1zZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVVbnNlbGVjdEFsbFRvcGljc30+5YWo6Kej6ZmkPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLjg4jjg5Tjg4Pjgq/jgpLmpJzntKIuLi5cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvcGljU2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUb3BpY1NlYXJjaH1cbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlVG9waWNTZWFyY2hLZXlEb3dufVxuICAgICAgICAgICAgICAgICAgcmVmPXt0b3BpY1NlYXJjaFJlZn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1zZWNvbmRhcnlcIiBcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvcGljU2VhcmNoVGVybSgnJyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg44Kv44Oq44KiXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAge2ZpbHRlcmVkVG9waWNzLm1hcCgodG9waWMpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dG9waWN9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVswXX0gXG4gICAgICAgICAgICAgICAgICAgIGlkID0ge3RvcGljfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFRvcGljcy5pbmNsdWRlcyh0b3BpYyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVRvcGljKHRvcGljLGlucHV0VHlwZVswXSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3BpY1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RvcGljfT57SWR0b1RvcGljW3RvcGljXX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAge2ZpbHRlcmVkVG9waWNzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBzbWFsbFwiPuipsuW9k+OBmeOCi+ODiOODlOODg+OCr+OBjOOBguOCiuOBvuOBm+OCkzwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cblxuICAgICAgICAgIHsvKiBDb21wYW55IFNlbGVjdGlvbiAqL31cbiAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIyXCIgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkNvbXBhbnk8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTZWxlY3RBbGxDb21wYW5pZXN9PuWFqOmBuOaKnjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cIm91dGxpbmUtc2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlVW5zZWxlY3RBbGxDb21wYW5pZXN9PuWFqOino+mZpDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5LyB5qWt44KS5qSc57SiLi4uXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55U2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb21wYW55U2VhcmNofVxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVDb21wYW55U2VhcmNoS2V5RG93bn1cbiAgICAgICAgICAgICAgICAgIHJlZj17Y29tcGFueVNlYXJjaFJlZn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1zZWNvbmRhcnlcIiBcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbXBhbnlTZWFyY2hUZXJtKCcnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDjgq/jg6rjgqJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgICAgICB7ZmlsdGVyZWRDb21wYW5pZXMubWFwKChjb21wYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZVsxXX0gXG4gICAgICAgICAgICAgICAgICAgIGlkID0ge2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29tcGFuaWVzLmluY2x1ZGVzKGNvbXBhbnkpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VDb21wYW55KGNvbXBhbnksaW5wdXRUeXBlWzFdKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nY29tcGFueSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17Y29tcGFueX0+e2NvbXBhbnl9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtmaWx0ZXJlZENvbXBhbmllcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgc21hbGxcIj7oqbLlvZPjgZnjgovkvIHmpa3jgYzjgYLjgorjgb7jgZvjgpM8L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG5cblxuICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwicmVhY3QtcGxvdGx5LmpzXCI7XG5cbi8vIOODh+ODvOOCv+WPluW+l+mWouaVsFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb/jgqjjg6njg7w6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbi8vIOODh+ODvOOCv+OCkuODreODvOODieOBmeOCi+mWouaVsFxuY29uc3QgbG9hZENvbXBhbmllcyA9IGFzeW5jIChkYXRhUGF0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVBhdGgpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRyaW0oKSAhPT0gXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgUGxvdEJhckNoYXJ0QiA9ICh7IHVwZGF0ZSwgdmlzdWFsVHlwZSwgdG9waWMsIGNvbXBhbnksIGNsaWNrZGF0YSwgb25SZW5kZXJlZCB9KSA9PiB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJGSeOBruWIhuW4g1wiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gNTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBjbGlja2RhdGEgfHwgdG9waWNbMF0gfHwgXCJkZWZhdWx0X3RvcGljXCI7IC8vIGBjbGlja2RhdGFg44KS5YSq5YWIXG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRJZH0vdHJlbmQvb3V0cHV0XyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGNvbXBhbnlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vZGF0YS92aXN1YWxpemVfZGF0YS90b3BpYyR7dGFyZ2V0SWR9L3NldHRpbmcvY29tcGFueS50eHRgO1xuICAgICAgICBjb25zdCBmaVBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL2ZpX3N1YmNsYXNzX3NwbGl0Lmpzb25gO1xuICAgICAgICAvLyDjg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgW29yaWdpbmFsLCBjb21wYW55TGlzdCwgZmlMaXN0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEocGF0aCksXG4gICAgICAgICAgbG9hZENvbXBhbmllcyhjb21wYW55UGF0aCksXG4gICAgICAgICAgZmV0Y2hEYXRhKGZpUGF0aCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICghY29tcGFueUxpc3QuaW5jbHVkZXMoY29tcGFueVswXSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBhbnkgXCIke2NvbXBhbnlbMF19XCIgbm90IGZvdW5kLmApO1xuICAgICAgICAgIHNldENoYXJ0RGF0YShbXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29tcGFueeOBruODh+ODvOOCv+WPluW+l1xuICAgICAgICBjb25zdCBjb21wYW55SW5kZXggPSBjb21wYW55TGlzdC5pbmRleE9mKGNvbXBhbnlbMF0pO1xuICAgICAgICBjb25zdCBjb21wYW55RGF0YSA9IG9yaWdpbmFsW2NvbXBhbnlJbmRleF07XG4gICAgICAgIGlmICghY29tcGFueURhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIGRhdGEgZm91bmQgZm9yIGNvbXBhbnkgaW5kZXggXCIke2NvbXBhbnlJbmRleH1cIi5gKTtcbiAgICAgICAgICBzZXRDaGFydERhdGEoW10pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpTT07jg4fjg7zjgr/jga7mlbTlvaJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKGNvbXBhbnlEYXRhKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICBjYXRlZ29yeToga2V5LFxuICAgICAgICAgIHZhbHVlOiBrZXkgPT09IFwiXCIgPyAwIDogcGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDAgfHwwLCAvLyDlgKTjgpLmlbDlgKTjgavlpInmj5vvvIjjgarjgYTloLTlkIjjga8w77yJXG4gICAgICAgICAgc3VtbWFyaXplOiBmaUxpc3Rba2V5XSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIOODh+ODvOOCv+OCkumZjemghuOBq+OCveODvOODiOOBl+OBpuS4iuS9jTEw5Lu244KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBmb3JtYXR0ZWREYXRhXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKVxuICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgc2V0Q2hhcnREYXRhKHNvcnRlZERhdGEpO1xuICAgICAgICBzZXRUaXRsZShgJHtjb21wYW55WzBdfeOBrkZJ44Gu5YiG5biDYCk7XG4gICAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGBjbGlja2RhdGFg44Gu5YCk44GM5aSJ5YyW44GX44Gf44GL44KS5piO56S655qE44Gr5q+U6LyDXG4gICAgaWYgKFxuICAgICAgdmlzdWFsVHlwZSA9PT0gXCJvbmUtY29tcFwiICYmXG4gICAgICAodXBkYXRlIHx8IGNoYXJ0RGF0YS5sZW5ndGggPT09IDAgfHwgY2xpY2tkYXRhKVxuICAgICkge1xuICAgICAgbG9hZENoYXJ0RGF0YSgpO1xuICAgIH1cbiAgfSwgW3Zpc3VhbFR5cGUsIHRvcGljLCBjb21wYW55LCBKU09OLnN0cmluZ2lmeShjbGlja2RhdGEpLCB1cGRhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzJVwiLG1hcmdpbkJvdHRvbTpcIjMlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk0JVwiIH19PlxuICAgICAgPFBsb3RcbiAgICAgICAgZGF0YT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICB4OiBjaGFydERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5yZXZlcnNlKCksIC8vIOaoquWQkeOBjeajkuOCsOODqeODleeUqOOBruWApO+8iOmAhumghu+8iVxuICAgICAgICAgICAgeTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSkucmV2ZXJzZSgpLCAvLyDjgqvjg4bjgrTjg6rvvIjpgIbpoIbvvIlcbiAgICAgICAgICAgIGN1c3RvbWRhdGE6IGNoYXJ0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3VtbWFyaXplKS5yZXZlcnNlKCksIC8vIHN1bW1hcml6ZSDjgpIgY3VzdG9tZGF0YSDjgavmuKHjgZlcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIiwgLy8g5qiq5ZCR44GN5qOS44Kw44Op44OVXG4gICAgICAgICAgICBtYXJrZXI6IHsgY29sb3I6IFwicm95YWxibHVlXCIgfSwgLy8g5qOS44Gu6ImyXG4gICAgICAgICAgICBob3ZlcnRlbXBsYXRlOlxuICAgICAgICAgICAgYOiqrOaYjjogJXtjdXN0b21kYXRhfTxicj4lOiAle3g6LjJmfSUgPGV4dHJhPjwvZXh0cmE+YCwgLy8gY3VzdG9tZGF0YSDjgpLlj4LnhadcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBsYXlvdXQ9e3tcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjk1LFxuICAgICAgICAgICAgeGFuY2hvcjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpY2tzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICBsaW5lY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgbGluZXdpZHRoOiAxLFxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkZJXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbG90X2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBwYXBlcl9iZ2NvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgbWFyZ2luOiB7IHQ6IDQwLCBiOiAzNSwgbDogODAsIHI6IDUwIH0sXG4gICAgICAgICAgaG92ZXJsYWJlbDoge1xuICAgICAgICAgICAgYWxpZ246XCJsZWZ0XCIsXG4gICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgIHNpemU6IDExLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7jg5Xjgqnjg7Pjg4jjgrXjgqTjgrpcbiAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIiwgLy8g44OV44Kp44Oz44OI44Gu6ImyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmdjb2xvcjogXCJsaWdodHllbGxvd1wiLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7og4zmma/oibJcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcImdyYXlcIiwgLy8g44OE44O844Or44OB44OD44OX44Gu5p6g57ea6ImyXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cblxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRCO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbG90IGZyb20gXCJyZWFjdC1wbG90bHkuanNcIjtcblxuLy8g44OH44O844K/5Y+W5b6X6Zai5pWwXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGxpbmUpID0+IGxpbmUudHJpbSgpICE9PSBcIlwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuODh+ODvOOCv+OBruiqreOBv+i+vOOBv+OCqOODqeODvDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuXG5cbmNvbnN0IFBsb3RCYXJDaGFydEEgPSAoeyB1cGRhdGUsIHZpc3VhbFR5cGUsIHRvcGljLCBvblJlbmRlcmVkIH0pID0+IHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZJ44Gu5YiG5biDIVwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDaGFydERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lID0gNTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b3BpY1swXTsgLy8gY2xpY2tkYXRh44KS5YSq5YWIXG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9kYXRhL3Zpc3VhbGl6ZV9kYXRhL3RvcGljJHt0YXJnZXRJZH0vdHJlbmQvb3V0cHV0X3RvcGljXyR7dGltZX0uanNvbmA7XG4gICAgICAgIGNvbnN0IGZpUGF0aCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2RhdGEvZmlfc3ViY2xhc3Nfc3BsaXQuanNvbmA7XG5cbiAgICAgICAgLy8g44OH44O844K/44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IFtvcmlnaW5hbCwgZmlMaXN0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaERhdGEocGF0aCksXG4gICAgICAgICAgZmV0Y2hEYXRhKGZpUGF0aCksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYVwiLG9yaWdpbmFsKTtcbiBcblxuICAgICAgICAvLyBKU09O44OH44O844K/44Gu5pW05b2iXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBPYmplY3QuZW50cmllcyhvcmlnaW5hbCkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgXG4gICAgICAgICAgY2F0ZWdvcnk6IGtleSxcbiAgICAgICAgICB2YWx1ZToga2V5ID09PSBcIlwiID8gMCA6IHBhcnNlRmxvYXQodmFsdWUpICogMTAwIHx8IDAsIFxuICAgICAgICAgIHN1bW1hcml6ZTogZmlMaXN0W2tleV0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhXCIsZm9ybWF0dGVkRGF0YSk7XG5cblxuICAgICAgICAvLyDjg4fjg7zjgr/jgpLpmY3poIbjgavjgr3jg7zjg4jjgZfjgabkuIrkvY0xMOS7tuOCkuWPluW+l1xuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gZm9ybWF0dGVkRGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICAgICAgICAuc2xpY2UoMCwgMTApO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YShzb3J0ZWREYXRhKTtcbiAgICAgICAgc2V0VGl0bGUoYEZJ44Gu5YiG5biDYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYXJ0RGF0YSk7XG4gICAgICAgIG9uUmVuZGVyZWQoKTsgLy8g5o+P55S75a6M5LqG44KS6YCa55+lXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi44OH44O844K/5Yem55CG5Lit44Gu44Ko44Op44O8OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh2aXN1YWxUeXBlID09PSBcIm9uZS10b3BpY1wiICYmICh1cGRhdGUgfHwgY2hhcnREYXRhLmxlbmd0aCA9PT0gMCApKSB7XG4gICAgICBsb2FkQ2hhcnREYXRhKCk7XG4gICAgfVxuICB9LCBbdmlzdWFsVHlwZSwgdG9waWMsIHVwZGF0ZV0pOyAvLyBjbGlja2RhdGEg44KS5L6d5a2Y6Zai5L+C44Gr6L+95YqgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMyVcIixtYXJnaW5Cb3R0b206XCIzJVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NCVcIiB9fT5cbiAgICAgIDxQbG90XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgeDogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgeTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSkucmV2ZXJzZSgpLFxuICAgICAgICAgICAgY3VzdG9tZGF0YTogY2hhcnREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5zdW1tYXJpemUpLnJldmVyc2UoKSwgLy8gc3VtbWFyaXplIOOCkiBjdXN0b21kYXRhIOOBq+a4oeOBmVxuXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsXG4gICAgICAgICAgICBtYXJrZXI6IHsgY29sb3I6IFwicm95YWxibHVlXCIgfSxcbiAgICAgICAgICAgIGhvdmVydGVtcGxhdGU6XG4gICAgICAgICAgICBg6Kqs5piOOiAle2N1c3RvbWRhdGF9PGJyPiU6ICV7eDouMmZ9JSA8ZXh0cmE+PC9leHRyYT5gLCAvLyBjdXN0b21kYXRhIOOCkuWPgueFp1xuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGxheW91dD17e1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuOTUsXG4gICAgICAgICAgICB4YW5jaG9yOiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGlja3N1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxpbmVjb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICBsaW5ld2lkdGg6IDEsXG4gICAgICAgICAgICBtaXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiRklcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsb3RfYmdjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIHBhcGVyX2JnY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBtYXJnaW46IHsgdDogNDAsIGI6IDM1LCBsOiA4MCwgcjogNTAgfSxcbiAgICAgICAgICBob3ZlcmxhYmVsOiB7XG4gICAgICAgICAgICBhbGlnbjpcImxlZnRcIixcbiAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgc2l6ZTogMTEsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruODleOCqeODs+ODiOOCteOCpOOCulxuICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLCAvLyDjg5Xjgqnjg7Pjg4jjga7oibJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImxpZ2h0eWVsbG93XCIsIC8vIOODhOODvOODq+ODgeODg+ODl+OBruiDjOaZr+iJslxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwiZ3JheVwiLCAvLyDjg4Tjg7zjg6vjg4Hjg4Pjg5fjga7mnqDnt5roibJcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvLyDlv4XjgZrlhajkvZPjgrXjgqTjgrrjgpLopqropoHntKDjgavlkIjjgo/jgZtcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbG90QmFyQ2hhcnRBO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua215X2FwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteV9hcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F1dGgwX2F1dGgwLXJlYWN0X2Rpc3RfYXV0aDAtcmVhY3RfZXNtX2pzLW5vZGVfbW9kdWxlc19yZWFjdC1ib290c3RyYXBfZS0xMzgwNmJcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiU2lkZWJhciIsIkNvbnRlbnQiLCJ1c2VBdXRoMCIsIkFwcCIsImxvZ2luV2l0aFJlZGlyZWN0IiwibG9nb3V0IiwiaXNBdXRoZW50aWNhdGVkIiwidXNlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlTG9naW4iLCJjb25uZWN0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsImFycm93Q29sb3IiLCJjb21wYW55TGlzdCIsInRvcGljTGlzdCIsInZpc3VhbFR5cGUiLCJzZXRWaXN1YWxUeXBlIiwiaXNBcHBsaWVkIiwic2V0SXNBcHBsaWVkIiwic2VsZWN0ZWRDb21wYW5pZXMiLCJzZXRTZWxlY3RlZENvbXBhbmllcyIsInNlbGVjdGVkVG9waWNzIiwic2V0U2VsZWN0ZWRUb3BpY3MiLCJoYW5kbGVWaXN1YWxUeXBlQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVBcHBseSIsInRvZ2dsZVNlbGVjdGlvbiIsIml0ZW0iLCJzZXRTZWxlY3RlZCIsImJ1dHRvbXR5cGUiLCJwcmV2U2VsZWN0ZWQiLCJpbmNsdWRlcyIsImZpbHRlciIsImkiLCJDb21wYW55Q2hlY2tib3hDaGFuZ2UiLCJjb21wYW55IiwiVG9waWNDaGVja2JveENoYW5nZSIsInRvcGljIiwicmVzZXRJc0FwcGxpZWQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJmbHVpZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJGcmFnbWVudCIsIm1kIiwib25BcHBseSIsIm9uVmlzdWFsVHlwZUNoYW5nZSIsIm9uQ2hhbmdlVG9waWMiLCJvbkNoYW5nZUNvbXBhbnkiLCJzdHlsZSIsImhlaWdodCIsInBsb3QiLCJyZXNldEFwcGx5IiwiQ2FyZCIsIlBsb3RQaWVBIiwiUGxvdFBpZUIiLCJQbG90UGVyc29uYUNvbXAiLCJQbG90UGVyc29uYVRvcGljIiwiUGxvdEJhckNoYXJ0QSIsIlBsb3RCYXJDaGFydEIiLCJQcm9wb3NlZERhdGEiLCJnZXRDYXJkRGF0YSIsIlByb3Bvc2VkVmlzdWFsaXplIiwiX3JlZiIsImNsaWNrRGF0YSIsInNldENsaWNrRGF0YSIsImNsaWNrQ29tcGFueURhdGEiLCJzZXRDbGlja0NvbXBhbnlEYXRhIiwiaGFuZGxlUGllQ2hhcnRDbGljayIsImRhdGEiLCJsb2ciLCJoYW5kbGVQZXJzb25hQ2xpY2siLCJjYXJkRGF0YSIsInNldENhcmREYXRhIiwidXBkYXRlIiwib25SZW5kZXJlZCIsIm9uQ2xpY2tEYXRhIiwibGF5b3V0IiwidGl0bGUiLCJ3aWR0aCIsImNvbmZpZyIsInJlc3BvbnNpdmUiLCJjbGlja2RhdGEiLCJwcm9wb3NlZERhdGEiLCJzZXRQcm9wb3NlZERhdGEiLCJzZXRFcnJvciIsImZldGNoRGF0YSIsImRhdGFQYXRoIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImpzb25EYXRhIiwianNvbiIsImNvbXBhbnlEYXRhIiwid2FybiIsInRvcGljRGF0YSIsImVyciIsInJlbmRlckNhcmQiLCJkaXJlY3Rpb24iLCJ2YWx1ZXMiLCJsYWJlbCIsImJhc2VDb2xvck1hcCIsInVwcmlnaHQiLCJ1cGxlZnQiLCJkb3ducmlnaHQiLCJkb3dubGVmdCIsImJhc2VDb2xvciIsImNhcmRBbHBoYSIsImNhcmRCYWNrZ3JvdW5kQ29sb3IiLCJyZXBsYWNlIiwiTWF0aCIsIm1pbiIsImtleSIsImJhY2tncm91bmRDb2xvciIsIkJvZHkiLCJUaXRsZSIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJhbHBoYSIsIml0ZW1CYWNrZ3JvdW5kQ29sb3IiLCJtYXgiLCJIZWFkZXIiLCJjb2xvciIsInRleHRBbGlnbiIsIlJlYWN0RE9NIiwiQXV0aDBQcm92aWRlciIsImRvbWFpbiIsImNsaWVudElkIiwicmVuZGVyIiwiU3RyaWN0TW9kZSIsImF1dGhvcml6YXRpb25QYXJhbXMiLCJyZWRpcmVjdF91cmkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlUmVmIiwiUGxvdCIsImNvbG9ybWFwIiwidXJsIiwic3RhdHVzIiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwiZ2V0IiwidGV4dCIsInNwbGl0IiwibGluZSIsInRyaW0iLCJwcm9jZXNzU3BhcnNlRGF0YSIsInNwYXJzZURhdGEiLCJudW1Sb3dzIiwiZW50cnkiLCJyb3ciLCJudW1Db2xzIiwiY29sIiwibWF0cml4IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZmlsbCIsImZvckVhY2giLCJyZWR1Y2UiLCJzdW0iLCJfcmVmMiIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsInNldFRpdGxlIiwiYWxsVG9waWMiLCJJZHRvVG9waWMiLCJUb3BpY3RvSWQiLCJkYXRhQ2FjaGUiLCJjb21wYW5pZXMiLCJsb2FkRGF0YSIsImFsbFRvcGljc0RhdGEiLCJQcm9taXNlIiwiYWxsIiwidGFyZ2V0X2lkIiwidGltZSIsImNvbXBhbnlVcmwiLCJzcGFyc2VEYXRhVXJsIiwiY3VycmVudCIsIm5vcm1hbGl6ZVN0cmluZyIsInN0ciIsIm5vcm1hbGl6ZSIsInNhbml0aXplZENvbXBhbmllcyIsInNhbml0aXplZENvbXBhbnkiLCJyb3dTdW1zIiwiY29tcGFueUluZGV4IiwiaW5kZXhPZiIsImZpbHRlcmVkRGF0YSIsInRvdGFsVmFsdWUiLCJub3JtYWxpemVkRGF0YSIsImNhdGVnb3J5Iiwic29ydCIsImEiLCJiIiwiaGFuZGxlUGxvdENsaWNrIiwiZXZlbnQiLCJwb2ludHMiLCJ0b3BpY2lkIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidHlwZSIsImxhYmVscyIsIlN0cmluZyIsIm1hcmtlciIsImNvbG9ycyIsInNob3dsZWdlbmQiLCJwbG90X2JnY29sb3IiLCJwYXBlcl9iZ2NvbG9yIiwibWFyZ2luIiwidCIsImwiLCJyIiwiZmV0Y2hUZXh0RGF0YSIsImxvYWRDaGFydERhdGEiLCJ0YXJnZXRJZCIsImRhdGFVcmwiLCJjb2x1bW5VcmwiLCJzb3J0ZWREYXRhIiwibG9hZENvbXBhbmllcyIsInRvTGlzdCIsImxpbmVzIiwiYWxwaGFfbGkiLCJwYXJzZUZsb2F0IiwiYmV0YV9saSIsIlBsb3RQZXJzb25Db21wIiwiYXJyb3dfY29sb3IiLCJwcmVwYXJlZERhdGEiLCJzZXRQcmVwYXJlZERhdGEiLCJmaWdEYXRhIiwic2V0RmlnRGF0YSIsImFubm90YXRpb25zIiwic2V0QW5ub3RhdGlvbnMiLCJhdXRob3JEYXRhIiwic2V0QXV0aG9yRGF0YSIsInByZXBhcmVEYXRhIiwiYWxsUHJvbWlzZXMiLCJjb2x1bW5QYXRoIiwiY29tcGFueURpY3QiLCJhY2MiLCJpZHgiLCJuZXdTZWFyY2hMaXN0IiwiaXNBcnJheSIsImZpbHRlcmVkU2VhcmNoTGlzdCIsIm5vZGVfYWxwaGEiLCJub2RlX2JldGEiLCJwcm9taXNlcyIsIl8iLCJqIiwicCIsInBhcmFtZXRlclBhdGgiLCJrIiwicmVzdWx0cyIsImNvbWJpbmVkQWxwaGEiLCJmbGF0TWFwIiwicmVzdWx0IiwiY29tYmluZWRCZXRhIiwiY29tYmluZWRTZWFyY2hMaXN0IiwiYmV0YSIsInNlYXJjaExpc3QiLCJsb2FkQXV0aG9yRGF0YSIsInRvcGljSWQiLCJhdXRob3JQYXRoIiwieWVhclRvUGVyc29uYSIsInBlcnNvbmFEYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsInllYXIiLCJwZXJzb25hTnVtIiwieWVhckRhdGEiLCJrZXlzIiwiYXV0aG9ycyIsInRvcEF1dGhvcnMiLCJfcmVmMyIsImF1dGhvciIsImNvdW50Iiwiam9pbiIsImF1dGhvckRhdGFNYXAiLCJfcmVmNCIsInBsb3REYXRhIiwiY3VycmVudFRvcGljIiwicGVyc29uYVRvWWVhciIsImhvdmVyVGV4dHMiLCJudW0iLCJ5ZWFyVGV4dCIsInBhcnNlSW50IiwiYXV0aG9ySW5mbyIsIngiLCJ5IiwibW9kZSIsInRleHRwb3NpdGlvbiIsImhvdmVydGV4dCIsImhvdmVyaW5mbyIsImhvdmVybGFiZWwiLCJhbGlnbiIsImJnY29sb3IiLCJib3JkZXJjb2xvciIsImZvbnQiLCJzaXplIiwic3ltYm9sIiwibmFtZSIsInBsb3RBbm5vdGF0aW9ucyIsInhyZWYiLCJ5cmVmIiwiYXhyZWYiLCJheXJlZiIsImF4IiwiYXkiLCJhcnJvd2NvbG9yIiwiYXJyb3dzaXplIiwiYXJyb3d3aWR0aCIsImFycm93aGVhZCIsInNob3dhcnJvdyIsInhhbmNob3IiLCJ5YW5jaG9yIiwieGF4aXMiLCJyYW5nZSIsImxpbmVjb2xvciIsImxpbmV3aWR0aCIsImdyaWRjb2xvciIsImdyaWR3aWR0aCIsImdyaWRkYXNoIiwidGlja21vZGUiLCJ0aWNrdmFscyIsInRpY2t0ZXh0IiwiemVyb2xpbmUiLCJ5YXhpcyIsInRpdGxlX3N0YW5kb2ZmIiwibGVnZW5kIiwiYm9yZGVyd2lkdGgiLCJob3ZlcmRpc3RhbmNlIiwiaG92ZXJtb2RlIiwibmFtZWxlbmd0aCIsImRpc3BsYXlNb2RlQmFyIiwiUGxvdFBlcnNvblRvcGljIiwic2V0Q29tcGFueUxpc3QiLCJzZXRTZWFyY2hMaXN0IiwidGhlbiIsIkFjY29yZGlvbiIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dEdyb3VwIiwiaW5wdXRUeXBlIiwic2V0SW5wdXRUeXBlIiwidG9waWNTZWFyY2hUZXJtIiwic2V0VG9waWNTZWFyY2hUZXJtIiwiY29tcGFueVNlYXJjaFRlcm0iLCJzZXRDb21wYW55U2VhcmNoVGVybSIsInRvcGljU2VhcmNoUmVmIiwiY29tcGFueVNlYXJjaFJlZiIsImhhbmRsZVJhZGlvQ2hhbmdlIiwidGFyZ2V0IiwiaGFuZGxlU2VsZWN0QWxsVG9waWNzIiwiaGFuZGxlVW5zZWxlY3RBbGxUb3BpY3MiLCJoYW5kbGVTZWxlY3RBbGxDb21wYW5pZXMiLCJoYW5kbGVVbnNlbGVjdEFsbENvbXBhbmllcyIsImhhbmRsZVRvcGljU2VhcmNoIiwiZSIsImhhbmRsZUNvbXBhbnlTZWFyY2giLCJoYW5kbGVUb3BpY1NlYXJjaEtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlcmVkVG9waWNzIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVDb21wYW55U2VhcmNoS2V5RG93biIsImZpbHRlcmVkQ29tcGFuaWVzIiwicGFkZGluZyIsInNtIiwiZGVmYXVsdEFjdGl2ZUtleSIsIkl0ZW0iLCJldmVudEtleSIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImh0bWxGb3IiLCJmb250U2l6ZSIsInZhcmlhbnQiLCJDb250cm9sIiwicGxhY2Vob2xkZXIiLCJvbktleURvd24iLCJyZWYiLCJwYXRoIiwiY29tcGFueVBhdGgiLCJmaVBhdGgiLCJvcmlnaW5hbCIsImZpTGlzdCIsImZvcm1hdHRlZERhdGEiLCJzdW1tYXJpemUiLCJKU09OIiwic3RyaW5naWZ5IiwicmV2ZXJzZSIsImN1c3RvbWRhdGEiLCJvcmllbnRhdGlvbiIsImhvdmVydGVtcGxhdGUiLCJtaXJyb3IiLCJ0aWNrc3VmZml4Il0sInNvdXJjZVJvb3QiOiIifQ==