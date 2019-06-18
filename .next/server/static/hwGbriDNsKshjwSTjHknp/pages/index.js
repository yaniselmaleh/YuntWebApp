module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "3jbq":
/***/ (function(module, exports) {

module.exports = require("react-simple-chatbot");

/***/ }),

/***/ "3t8O":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/yunt-recompenses-b79c3d3f754bf160fb01d292ee73f64d.png";

/***/ }),

/***/ "7YEP":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/yunt-concept-2f4af266fd32b5b4ab6ee6e648a81128.png";

/***/ }),

/***/ "9qp6":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "B1Xa":
/***/ (function(module, exports) {



/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "CrVz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/yunt-progression-bbccafd6219b48418ce89321af9fca21.png";

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "NKlM":
/***/ (function(module, exports) {



/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./sass/components/_reset.scss
var _reset = __webpack_require__("B1Xa");

// EXTERNAL MODULE: ./sass/components/_font.scss
var _font = __webpack_require__("dE9K");

// EXTERNAL MODULE: ./sass/components/_grid.scss
var _grid = __webpack_require__("TfqW");

// EXTERNAL MODULE: ./sass/components/_home.scss
var _home = __webpack_require__("T91m");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./sass/components/_cta.scss
var _cta = __webpack_require__("s5SU");

// CONCATENATED MODULE: ./components/Cta.js








var Cta_Cta =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Cta, _Component);

  function Cta() {
    Object(classCallCheck["a" /* default */])(this, Cta);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Cta).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Cta, [{
    key: "render",
    value: function render(props) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("a", {
        href: this.props.url,
        className: "btn-".concat(this.props.className),
        title: this.props.name,
        target: ""
      }, this.props.name));
    }
  }]);

  return Cta;
}(external_react_["Component"]);

/* harmony default export */ var components_Cta = (Cta_Cta);
// CONCATENATED MODULE: ./components/Home.js






function Home() {
  return external_react_default.a.createElement("section", {
    id: "home"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("h1", null, "Yunt, l\u2019escape game", external_react_default.a.createElement("br", null), "en magasin"), external_react_default.a.createElement("p", null, "Une toute nouvelle exp\xE9rience, avec Yunt", external_react_default.a.createElement("br", null), "participez \xE0 un escape game dans le magasin de votre", external_react_default.a.createElement("br", null), "choix, et pro\uFB01tez de r\xE9ductions sur la totalit\xE9 de votre achat !"), external_react_default.a.createElement(components_Cta, {
    name: "D\xE9couvrir",
    className: "filled",
    url: "#concept"
  }), external_react_default.a.createElement(components_Cta, {
    name: "T\xE9l\xE9charger",
    className: "unfilled",
    url: "#telecharger"
  })));
}
// EXTERNAL MODULE: ./sass/components/_main.scss
var _main = __webpack_require__("i3Po");

// EXTERNAL MODULE: ./sass/components/_descriptif.scss
var _descriptif = __webpack_require__("smFg");

// CONCATENATED MODULE: ./components/Descriptif.js








var Descriptif_Descriptif =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Descriptif, _Component);

  function Descriptif() {
    Object(classCallCheck["a" /* default */])(this, Descriptif);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Descriptif).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Descriptif, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h2", null, this.props.title), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("p", null, this.props.description));
    }
  }]);

  return Descriptif;
}(external_react_["Component"]);

/* harmony default export */ var components_Descriptif = (Descriptif_Descriptif);
// EXTERNAL MODULE: ./sass/components/_cards.scss
var _cards = __webpack_require__("nra/");

// CONCATENATED MODULE: ./components/Cards.js








var Cards_Cards =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Cards, _Component);

  function Cards() {
    Object(classCallCheck["a" /* default */])(this, Cards);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Cards).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Cards, [{
    key: "render",
    value: function render(props) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("img", {
        src: this.props.src,
        alt: this.props.title
      }), external_react_default.a.createElement("h3", null, this.props.title), external_react_default.a.createElement("p", null, this.props.description, " "));
    }
  }]);

  return Cards;
}(external_react_["Component"]);

/* harmony default export */ var components_Cards = (Cards_Cards);
// EXTERNAL MODULE: ./static/yunt-concept.png
var yunt_concept = __webpack_require__("7YEP");
var yunt_concept_default = /*#__PURE__*/__webpack_require__.n(yunt_concept);

// EXTERNAL MODULE: ./static/yunt-progression.png
var yunt_progression = __webpack_require__("CrVz");
var yunt_progression_default = /*#__PURE__*/__webpack_require__.n(yunt_progression);

// EXTERNAL MODULE: ./static/yunt-recompenses.png
var yunt_recompenses = __webpack_require__("3t8O");
var yunt_recompenses_default = /*#__PURE__*/__webpack_require__.n(yunt_recompenses);

// CONCATENATED MODULE: ./components/Main.js








var Main_Main = function Main() {
  return external_react_default.a.createElement("section", {
    className: "main"
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("section", null, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    id: "concept"
  }, external_react_default.a.createElement("article", null, external_react_default.a.createElement(components_Descriptif, {
    title: "Concept",
    description: "Participez \xE0 un escape game dans nos magasins partenaires partout en France et gagnez de nombreuses r\xE9compenses."
  })), external_react_default.a.createElement("aside", null, external_react_default.a.createElement(components_Cards, {
    src: yunt_concept_default.a,
    title: "Concept",
    description: "Participez \xE0 un escape game dans nos magasins partenaires partout en France et gagnez de nombreuses r\xE9compenses."
  }))))), external_react_default.a.createElement("section", null, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    id: "progression"
  }, external_react_default.a.createElement("aside", null, external_react_default.a.createElement(components_Cards, {
    src: yunt_progression_default.a,
    title: "Progression",
    description: "Choisissez votre niveau de difficult\xE9, surmontez les \xE9preuves et \xE9voluez pour gagner davantage de lots."
  })), external_react_default.a.createElement("article", {
    className: "progression_labeur_left"
  }, external_react_default.a.createElement(components_Descriptif, {
    title: "Progression",
    description: "Choisissez votre niveau de difficult\xE9, surmontez les \xE9preuves et \xE9voluez pour gagner davantage de lots."
  }))))), external_react_default.a.createElement("section", null, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    id: "recompenses"
  }, external_react_default.a.createElement("article", null, external_react_default.a.createElement(components_Descriptif, {
    title: "Recompenses",
    description: "( On sait que c\u2019est ce qui vous int\xE9resse ). Un pourcentage de r\xE9duction en fonction du temps impartis dans nos magasins partenaires !"
  })), external_react_default.a.createElement("aside", null, external_react_default.a.createElement(components_Cards, {
    src: yunt_recompenses_default.a,
    title: "Recompenses",
    description: "Un pourcentage de r\xE9duction en fonction du temps impartis dans nos magasins partenaires."
  })))))));
};

/* harmony default export */ var components_Main = (Main_Main);
// EXTERNAL MODULE: external "react-simple-chatbot"
var external_react_simple_chatbot_ = __webpack_require__("3jbq");
var external_react_simple_chatbot_default = /*#__PURE__*/__webpack_require__.n(external_react_simple_chatbot_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./sass/components/_bot.scss
var _bot = __webpack_require__("NKlM");

// EXTERNAL MODULE: ./static/ourson.png
var ourson = __webpack_require__("9qp6");
var ourson_default = /*#__PURE__*/__webpack_require__.n(ourson);

// EXTERNAL MODULE: ./static/logo-yunt.png
var logo_yunt = __webpack_require__("S9E2");
var logo_yunt_default = /*#__PURE__*/__webpack_require__.n(logo_yunt);

// EXTERNAL MODULE: ./static/hello-bear.gif
var hello_bear = __webpack_require__("i6Dz");
var hello_bear_default = /*#__PURE__*/__webpack_require__.n(hello_bear);

// CONCATENATED MODULE: ./components/Bot.js













var Bot_Bot =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Bot, _Component);

  function Bot(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Bot);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Bot).call(this, props));
    _this.state = {
      name: 'COUCOU'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Bot, [{
    key: "render",
    value: function render() {
      var theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: 'linear-gradient(90deg, #dc6795 25%, #e76b61 100%)',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: 'white',
        botFontColor: 'black',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
        padding: '0px'
      };
      return external_react_default.a.createElement("div", {
        id: "bot"
      }, external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
        theme: theme
      }, external_react_default.a.createElement(external_react_simple_chatbot_default.a, {
        headerTitle: "Yunt, l\u2019escape game en magasin !",
        botAvatar: logo_yunt_default.a // userAvatar={Logo_noir}
        ,
        floatingIcon: ourson_default.a,
        placeholder: "Veuillez saisir votre r\xE9ponse ...",
        botDelay: "1000",
        enableMobileAutoFocus: true,
        floating: true,
        hideSubmitButton: true,
        speechSynthesis: {
          enable: false,
          lang: 'fr'
        },
        width: "350px",
        steps: [{
          // Bonjour
          id: '1',
          component: external_react_default.a.createElement(Bot_HelloComponent, null),
          trigger: 'bear'
        }, {
          // Gif Ours
          id: 'bear',
          component: external_react_default.a.createElement(Bot_CustomComponent, null),
          trigger: '2'
        }, {
          // Question après le Gif
          id: '2',
          message: 'Je suis là pour répondre à tes questions, tu as besoin d\'informations ?',
          trigger: '3'
        }, {
          // Proposition de réponses 3/3
          id: '3',
          options: [{
            value: "Comment télécharger l'application",
            label: 'Comment télécharger l\'application',
            trigger: '4'
          }, {
            value: "Le jeu est adaptée pour quelle tranche d\'âge ?",
            label: 'Le jeu est adaptée pour quelle tranche d\'âge ?',
            trigger: '5'
          }, {
            value: "Qu\'est-ce qu\'un escape game ?",
            label: 'Qu\'est-ce qu\'un escape game ?',
            trigger: '6'
          }]
        }, {
          id: '4',
          message: 'L\'application est en cours de construction, nous sommes encore en train de faire des test utilisateurs.',
          trigger: '4b'
        }, {
          id: '4b',
          message: '(Notre Designer est en plus très pointilleux...), nous vous tiendrons informé lors de sa sortie !',
          trigger: '7'
        }, {
          id: '5',
          message: 'Le jeu est adapté pour toutes les tranches d\'âges, nous prenons soin de créer des énigmes compréhensibles par tous ! Après s\'il y a un soucis, vous pourrez m\'appeler lors du jeu pour vous donner des indices.',
          trigger: '7'
        }, {
          id: '6',
          message: 'L\'escape game, c\'est un jeu d`\'évasion ou vous devez répondre à des énigmes pour sortir d\'une pièce fermée, évidemment vous ne serez pas enfermé dans un magasin mais une fois le jeu lancé, vous devrez répondre aux énigmes proposées dans un temps imparti, votre score et le temps que vous aurez fait définiras votre position dans le classement et votre pourcentage de récompense.',
          trigger: '7'
        }, {
          id: '7',
          message: 'Vous avez d\'autres question ?',
          trigger: '3'
        }]
      })));
    }
  }]);

  return Bot;
}(external_react_["Component"]);

var Bot_CustomComponent =
/*#__PURE__*/
function (_Component2) {
  Object(inherits["a" /* default */])(CustomComponent, _Component2);

  function CustomComponent() {
    Object(classCallCheck["a" /* default */])(this, CustomComponent);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CustomComponent).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(CustomComponent, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: hello_bear_default.a,
        alt: "hello"
      }));
    }
  }]);

  return CustomComponent;
}(external_react_["Component"]);

var Bot_HelloComponent =
/*#__PURE__*/
function (_Component3) {
  Object(inherits["a" /* default */])(HelloComponent, _Component3);

  function HelloComponent() {
    Object(classCallCheck["a" /* default */])(this, HelloComponent);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(HelloComponent).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(HelloComponent, [{
    key: "render",
    value: function render() {
      var messages = ['Ici Oursoupidou ! Enchanté', 'Bonjour je suis Oursoupidou, Ravis de faire ta connaissance !', 'Hey ! je suis Oursoupidou, à ton service !'];
      return external_react_default.a.createElement("div", {
        class: "rsc-ts rsc-ts-bot sc-dnqmqq efROPc"
      }, external_react_default.a.createElement("div", {
        class: "rsc-ts-image-container sc-htoDjs vmYlS"
      }, external_react_default.a.createElement("img", {
        class: "rsc-ts-image sc-gzVnrw cwuCQv",
        src: logo_yunt_default.a,
        alt: "avatar"
      })), external_react_default.a.createElement("div", {
        class: "rsc-ts-bubble sc-bZQynM irBnpW"
      }, messages[Math.floor(Math.random() * messages.length)]));
    }
  }]);

  return HelloComponent;
}(external_react_["Component"]);

/* harmony default export */ var components_Bot = (Bot_Bot);
// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });




function Index() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_Bot, null), external_react_default.a.createElement(Home, null), external_react_default.a.createElement(components_Main, null));
}

/***/ }),

/***/ "S9E2":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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Z3zoBV0Ed3kwoScUX1801XpCVZ/v+61MX6r0A/wfEp3KmvYZIUYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDUtMjBUMTQ6MDA6NTkrMDA6MDC+asAlAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA1LTIwVDE0OjAwOjU5KzAwOjAwzzd4mQAAAEZ0RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNi43LjgtOSAyMDE0LTA1LTEyIFExNiBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ9yG7QAAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6aGVpZ2h0ADE5Mg8AcoUAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTky06whCAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTU4MzYwODU5Q+GZ8gAAAA90RVh0VGh1bWI6OlNpemUAMEJClKI+7AAAAFZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL21udGxvZy9mYXZpY29ucy8yMDE5LTA1LTIwL2M3ZTI0OTNkYzFjNjkwYjNiMGNiZDdmYzFmYmI5NzM0Lmljby5wbmfgLXWdAAAAAElFTkSuQmCC"

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "T91m":
/***/ (function(module, exports) {



/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TfqW":
/***/ (function(module, exports) {



/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dE9K":
/***/ (function(module, exports) {



/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "i3Po":
/***/ (function(module, exports) {



/***/ }),

/***/ "i6Dz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hello-bear-a1e34b2993ed6acffe514f644ff00c1d.gif";

/***/ }),

/***/ "nra/":
/***/ (function(module, exports) {



/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "s5SU":
/***/ (function(module, exports) {



/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "smFg":
/***/ (function(module, exports) {



/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });