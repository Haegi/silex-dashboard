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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\D070374\\OneDrive - SAP SE\\Programmierung\\Privat\\Dashboard\\components\\Layout.js";



var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.pageTitle || 'Realtime Data Visualization')), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dynamic_doughnut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-doughnut */ "./components/dynamic-doughnut.js");
var _jsxFileName = "C:\\Users\\D070374\\OneDrive - SAP SE\\Programmierung\\Privat\\Dashboard\\components\\Stats.js";





var Stats = function Stats(props) {
  var _props$labels = props.labels,
      labels = _props$labels === void 0 ? [] : _props$labels,
      _props$value = props.value,
      value = _props$value === void 0 ? {} : _props$value,
      _props$titleUp = props.titleUp,
      titleUp = _props$titleUp === void 0 ? prop_types__WEBPACK_IMPORTED_MODULE_2__["string"] : _props$titleUp,
      _props$titleDown = props.titleDown,
      titleDown = _props$titleDown === void 0 ? prop_types__WEBPACK_IMPORTED_MODULE_2__["string"] : _props$titleDown,
      _props$UpData = props.UpData,
      UpData = _props$UpData === void 0 ? {} : _props$UpData,
      _props$urlImage = props.urlImage,
      urlImage = _props$urlImage === void 0 ? prop_types__WEBPACK_IMPORTED_MODULE_2__["string"] : _props$urlImage;
  var counts = labels.map(function (label) {
    return value[label].value || 0;
  });
  var chartDataDown = {
    labels: labels,
    datasets: [{
      lineTension: 0,
      backgroundColor: 'rgba(68, 204, 153, 0.05)',
      borderColor: 'rgba(68, 204, 153, 0.9)',
      borderWidth: 2,
      borderJoinStyle: 'round',
      pointRadius: 5,
      pointBorderColor: '#fff',
      pointBackgroundColor: 'rgba(68, 204, 153, 0.9)',
      pointBorderWidth: 3,
      data: counts
    }]
  };
  var chartOptionsDown = {
    layout: {
      padding: {
        top: 25,
        bottom: 75,
        left: 75,
        right: 75
      }
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    title: {
      display: true,
      text: titleDown,
      padding: 10,
      lineHeight: 4,
      fontSize: 20,
      fontColor: '#677'
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative h-50 w-100 d-flex border-bottom border-gray",
    style: {
      marginTop: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary",
    style: {
      fontSize: '1.25rem',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, titleUp, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary",
    style: {
      fontSize: '1.25rem',
      textAlign: 'center',
      paddingTop: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, UpData.up.icon, " ", UpData.up.value)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary",
    style: {
      fontSize: '1.25rem',
      textAlign: 'center',
      paddingTop: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: urlImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, UpData.middle.icon, " ", UpData.middle.value)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary",
    style: {
      fontSize: '1.25rem',
      textAlign: 'center',
      paddingTop: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, UpData.down.icon, " ", UpData.down.value)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative h-50 w-100 d-flex align-items-center border-bottom border-gray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    data: chartDataDown,
    width: 100,
    height: 50,
    options: chartOptionsDown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative h-50 w-100 d-flex align-items-center border-bottom border-gray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dynamic_doughnut__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "TEST",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Stats);

/***/ }),

/***/ "./components/dynamic-doughnut.js":
/*!****************************************!*\
  !*** ./components/dynamic-doughnut.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\D070374\\OneDrive - SAP SE\\Programmierung\\Privat\\Dashboard\\components\\dynamic-doughnut.js";



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var DynDoughnout = function DynDoughnout(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? string : _props$title;
  var donutTitle = {
    fontSize: '30px',
    textAlign: 'center',
    color: 'red',
    padding: {
      top: 25,
      bottom: 75,
      left: 75,
      right: 75
    },
    fontColor: '#677'
  };
  var options = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [{
      data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
      backgroundColor: ['#CCC', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: donutTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Doughnut"], {
    data: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DynDoughnout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");

var _jsxFileName = "C:\\Users\\D070374\\OneDrive - SAP SE\\Programmierung\\Privat\\Dashboard\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var IndexPage =
/*#__PURE__*/
function (_Component) {
  _inherits(IndexPage, _Component);

  function IndexPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IndexPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      answers: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "city", "Loading...");

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "UpDataLeft", {
      up: {
        icon: "",
        value: "Loading..."
      },
      middle: {
        icon: "",
        value: "Loading..."
      },
      down: {
        icon: "",
        value: "Loading..."
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "UpDataMiddle", {
      up: {
        icon: "",
        value: "Loading..."
      },
      middle: {
        icon: "",
        value: "Loading..."
      },
      down: {
        icon: "",
        value: "Loading..."
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "UpDataRight", {
      up: {
        icon: "",
        value: "No upcoming events found."
      },
      middle: {
        icon: "",
        value: "No upcoming events found."
      },
      down: {
        icon: "",
        value: "No upcoming events found."
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "charts", ["A", "B", "C"]);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "length", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "labels", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "data", {
      A: [],
      B: [],
      C: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "queue", {
      devices: {
        A: {
          values: []
        },
        B: {
          values: []
        },
        C: {
          values: []
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ImageUrl", "");

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "forecastTitle", "Loading...");

    return _this;
  }

  _createClass(IndexPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.fetchData();
      }, 5 * 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "fetchData",
    value: function () {
      var _fetchData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this3 = this;

        var _ref, _ref2, IoTRespoonse, WeatherResponse, ForecastResponse, CalendarResponse, data, weather, forecast, calendar;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all([fetch('/queue'), fetch('http://api.openweathermap.org/data/2.5/weather?zip=69207,de&units=metric&appid=4e632b73bd506b85d6e8d3c892507a94'), fetch('http://api.openweathermap.org/data/2.5/forecast?zip=69207,de&units=metric&appid=4e632b73bd506b85d6e8d3c892507a94'), fetch('/calendar')]);

              case 2:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 4);
                IoTRespoonse = _ref2[0];
                WeatherResponse = _ref2[1];
                ForecastResponse = _ref2[2];
                CalendarResponse = _ref2[3];
                _context.next = 10;
                return IoTRespoonse.json();

              case 10:
                data = _context.sent;
                _context.next = 13;
                return WeatherResponse.json();

              case 13:
                weather = _context.sent;
                _context.next = 16;
                return ForecastResponse.json();

              case 16:
                forecast = _context.sent;
                _context.next = 19;
                return CalendarResponse.json();

              case 19:
                calendar = _context.sent;
                this.city = weather.name;
                this.UpDataLeft.up.value = weather.main.temp + " °C ";
                this.UpDataLeft.up.icon = "\uD83C\uDFDE\uFE0F";
                this.UpDataLeft.middle.icon = "\uD83C\uDFE0";
                this.forecastTitle = forecast.list[5].dt_txt;
                this.UpDataMiddle.up.value = forecast.list[5].weather[0].description;
                this.ImageUrl = "http://openweathermap.org/img/w/".concat(forecast.list[5].weather[0].icon, ".png");
                this.UpDataMiddle.middle.icon = "\uD83C\uDF21\uFE0F";
                this.UpDataMiddle.middle.value = forecast.list[5].main.temp + " °C ";
                this.UpDataMiddle.down.icon = "\t\uD83C\uDF2B\uFE0F";
                this.UpDataMiddle.down.value = forecast.list[5].main.humidity + "% ";
                this.UpDataRight.up.value = calendar[0];
                this.UpDataRight.middle.value = calendar[1];
                this.UpDataRight.down.value = calendar[2];
                this.setState({
                  data: data
                }); // Like For Loop 

                this.charts.map(function (chart) {
                  // ALgo which sends data if new data is in the queue, to the Stats Component
                  var new_length = _this3.state.data.devices[chart].values.length;

                  if (new_length > _this3.length[chart]) {
                    var value = _this3.state.data.devices[chart].values[new_length - 1].data;
                    _this3.UpDataLeft.middle.value = value + " °C ";
                    var time = _this3.state.data.devices[chart].values[new_length - 1].timestamp;

                    _this3.queue.devices[chart].values.push(time);

                    _this3.data[chart][time] = {
                      value: value
                    };
                    var answers = _this3.data;

                    _this3.setState({
                      answers: answers
                    });
                  }

                  _this3.length[chart] = new_length; // Deletes first element if array is bigger than 8
                  // CAN BE BETTER!

                  if (_this3.length[chart] === new_length && _this3.queue.devices[chart].values.length > 8) {
                    console.log("DELETE");

                    _this3.queue.devices[chart].values.shift();
                  }
                  /*if (this.length[chart] > 10) {
                    console.log(new_length);
                    this.queue.devices[chart].values.shift();
                    this.state.data.devices[chart].values.shift();
                    this.data[chart].shift();
                    this.length[chart] = this.state.data.devices[chart].values.length;
                    console.log("DELETE");
                  }*/

                });

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        pageTitle: "\uD83D\uDCC8 Realtime Data Visualization",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
        className: "container-fluid position-absolute h-100 bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "row position-absolute w-100 h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Stats__WEBPACK_IMPORTED_MODULE_3__["default"], {
        labels: this.queue.devices["A"].values,
        value: this.state.answers["A"],
        titleUp: this.city,
        UpData: this.UpDataLeft,
        titleDown: "Device A",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Stats__WEBPACK_IMPORTED_MODULE_3__["default"], {
        labels: this.queue.devices["B"].values,
        value: this.state.answers["B"],
        titleUp: this.forecastTitle,
        UpData: this.UpDataMiddle,
        urlImage: this.ImageUrl,
        titleDown: "Device B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Stats__WEBPACK_IMPORTED_MODULE_3__["default"], {
        labels: this.queue.devices["C"].values,
        value: this.state.answers["C"],
        titleUp: "Calendar",
        UpData: this.UpDataRight,
        titleDown: "Device C",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      })))));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IndexPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "773737355",
    css: ".custom-control-label{background:transparent;color:#999;font-size:2rem;font-weight:500;cursor:pointer;line-height:2.25rem;}.custom-control-label:before,.custom-control-label:after{top:0;left:-10px;height:2.25rem;width:2.25rem;cursor:pointer;box-shadow:none !important;}.custom-control-label.checked{color:#007bff !important;}button.btn{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1rem;font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRDA3MDM3NFxcT25lRHJpdmUgLSBTQVAgU0VcXFByb2dyYW1taWVydW5nXFxQcml2YXRcXERhc2hib2FyZFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZLcUIsQUFHNEIsQUFRakIsQUFRbUIsQUFHTixNQVZSLFdBQ0ksTUFUSixFQWdCWixPQU5lLEVBVEMsWUFVQSxHQVRDLFlBVVcsSUFUWixlQUNLLFFBU3JCLEtBTWdCLE9BZGhCLFFBZWlCLGdCQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXEQwNzAzNzRcXE9uZURyaXZlIC0gU0FQIFNFXFxQcm9ncmFtbWllcnVuZ1xcUHJpdmF0XFxEYXNoYm9hcmRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RhdHMgZnJvbSAnLi4vY29tcG9uZW50cy9TdGF0cyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuXHJcbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IGFuc3dlcnM6IHt9IH07XHJcbiAgICBjaXR5ID0gXCJMb2FkaW5nLi4uXCI7XHJcbiAgICBVcERhdGFMZWZ0ID0geyB1cDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiTG9hZGluZy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbWlkZGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGRvd246IHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgICAgICB9fTtcclxuXHJcbiAgICBVcERhdGFNaWRkbGUgPSB7IHVwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1pZGRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiTG9hZGluZy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBkb3duOiB7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiTG9hZGluZy4uLlwiXHJcbiAgICAgICAgICAgICAgfX07XHJcblxyXG4gICAgVXBEYXRhUmlnaHQgPSB7IHVwOiB7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiTm8gdXBjb21pbmcgZXZlbnRzIGZvdW5kLlwiXHJcbiAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtaWRkbGU6IHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJObyB1cGNvbWluZyBldmVudHMgZm91bmQuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkb3duOiB7XHJcbiAgICAgICAgICAgIGljb246IFwiXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vIHVwY29taW5nIGV2ZW50cyBmb3VuZC5cIlxyXG4gICAgICAgICAgfX07XHJcblxyXG4gICAgY2hhcnRzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCJdO1xyXG4gICAgbGVuZ3RoID0ge307XHJcbiAgICBsYWJlbHMgPSBbXVxyXG4gICAgZGF0YSA9IHsgQTogW10sXHJcbiAgICAgICAgICAgIEI6IFtdLFxyXG4gICAgICAgICAgICBDOiBbXVxyXG4gICAgICAgICAgfTtcclxuICAgIHF1ZXVlID0geyBkZXZpY2VzIDoge1xyXG4gICAgICBBOiB7XHJcbiAgICAgICAgICB2YWx1ZXM6IFtdXHJcbiAgICAgIH0sXHJcbiAgICAgIEI6IHtcclxuICAgICAgICAgIHZhbHVlczogW11cclxuICAgICAgfSxcclxuICAgICAgQzoge1xyXG4gICAgICAgIHZhbHVlczogW11cclxuICAgICAgfVxyXG4gIFxyXG4gIH1cclxuICB9XHJcbiAgSW1hZ2VVcmwgPSBcIlwiO1xyXG4gIGZvcmVjYXN0VGl0bGUgPSBcIkxvYWRpbmcuLi5cIjtcclxuXHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmZldGNoRGF0YSgpLCA1ICoxMDAwKTtcclxuICAgICAgfVxyXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgYXN5bmMgZmV0Y2hEYXRhKCkge1xyXG5cclxuICAgICAgICBsZXQgW0lvVFJlc3Bvb25zZSwgV2VhdGhlclJlc3BvbnNlLCBGb3JlY2FzdFJlc3BvbnNlLCBDYWxlbmRhclJlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGZldGNoKCcvcXVldWUnKSxcclxuICAgICAgICAgIGZldGNoKCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3ppcD02OTIwNyxkZSZ1bml0cz1tZXRyaWMmYXBwaWQ9NGU2MzJiNzNiZDUwNmI4NWQ2ZThkM2M4OTI1MDdhOTQnKSxcclxuICAgICAgICAgIGZldGNoKCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD96aXA9NjkyMDcsZGUmdW5pdHM9bWV0cmljJmFwcGlkPTRlNjMyYjczYmQ1MDZiODVkNmU4ZDNjODkyNTA3YTk0JyksXHJcbiAgICAgICAgICBmZXRjaCgnL2NhbGVuZGFyJylcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IElvVFJlc3Bvb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IFdlYXRoZXJSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBGb3JlY2FzdFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBjYWxlbmRhciA9IGF3YWl0IENhbGVuZGFyUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHRoaXMuY2l0eSA9IHdlYXRoZXIubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5VcERhdGFMZWZ0LnVwLnZhbHVlID0gd2VhdGhlci5tYWluLnRlbXAgKyBcIiDCsEMgXCI7XHJcbiAgICAgICAgdGhpcy5VcERhdGFMZWZ0LnVwLmljb24gPSBcIlxcdWQ4M2NcXHVkZmRlXFx1ZmUwZlwiO1xyXG4gICAgICAgIHRoaXMuVXBEYXRhTGVmdC5taWRkbGUuaWNvbiA9IFwiXFx1ZDgzY1xcdWRmZTBcIjtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZm9yZWNhc3RUaXRsZSA9IGZvcmVjYXN0Lmxpc3RbNV0uZHRfdHh0O1xyXG4gICAgICAgIHRoaXMuVXBEYXRhTWlkZGxlLnVwLnZhbHVlID0gZm9yZWNhc3QubGlzdFs1XS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuSW1hZ2VVcmwgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke2ZvcmVjYXN0Lmxpc3RbNV0ud2VhdGhlclswXS5pY29ufS5wbmdgO1xyXG4gICAgICAgIHRoaXMuVXBEYXRhTWlkZGxlLm1pZGRsZS5pY29uID0gXCJcXHVkODNjXFx1ZGYyMVxcdWZlMGZcIjtcclxuICAgICAgICB0aGlzLlVwRGF0YU1pZGRsZS5taWRkbGUudmFsdWUgPSBmb3JlY2FzdC5saXN0WzVdLm1haW4udGVtcCArIFwiIMKwQyBcIjtcclxuICAgICAgICB0aGlzLlVwRGF0YU1pZGRsZS5kb3duLmljb24gPSBcIlx0XFx1ZDgzY1xcdWRmMmJcXHVmZTBmXCI7XHJcbiAgICAgICAgdGhpcy5VcERhdGFNaWRkbGUuZG93bi52YWx1ZSA9IGZvcmVjYXN0Lmxpc3RbNV0ubWFpbi5odW1pZGl0eSArIFwiJSBcIjtcclxuXHJcbiAgICAgICAgdGhpcy5VcERhdGFSaWdodC51cC52YWx1ZSA9IGNhbGVuZGFyWzBdO1xyXG4gICAgICAgIHRoaXMuVXBEYXRhUmlnaHQubWlkZGxlLnZhbHVlID0gY2FsZW5kYXJbMV07XHJcbiAgICAgICAgdGhpcy5VcERhdGFSaWdodC5kb3duLnZhbHVlID0gY2FsZW5kYXJbMl07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xyXG5cclxuICAgICAgICAvLyBMaWtlIEZvciBMb29wIFxyXG4gICAgICAgIHRoaXMuY2hhcnRzLm1hcCgoY2hhcnQpID0+IHtcclxuICAgICAgICAgIC8vIEFMZ28gd2hpY2ggc2VuZHMgZGF0YSBpZiBuZXcgZGF0YSBpcyBpbiB0aGUgcXVldWUsIHRvIHRoZSBTdGF0cyBDb21wb25lbnRcclxuICAgICAgICAgICBjb25zdCBuZXdfbGVuZ3RoID0gdGhpcy5zdGF0ZS5kYXRhLmRldmljZXNbY2hhcnRdLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgaWYgKG5ld19sZW5ndGggPiB0aGlzLmxlbmd0aFtjaGFydF0pIHsgXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZS5kYXRhLmRldmljZXNbY2hhcnRdLnZhbHVlc1tuZXdfbGVuZ3RoIC0xXS5kYXRhO1xyXG4gICAgICAgICAgICB0aGlzLlVwRGF0YUxlZnQubWlkZGxlLnZhbHVlID0gdmFsdWUgKyBcIiDCsEMgXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLnN0YXRlLmRhdGEuZGV2aWNlc1tjaGFydF0udmFsdWVzW25ld19sZW5ndGggLTFdLnRpbWVzdGFtcDtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZS5kZXZpY2VzW2NoYXJ0XS52YWx1ZXMucHVzaCh0aW1lKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2NoYXJ0XVt0aW1lXSA9IHsgdmFsdWUgfTtcclxuICAgICAgICAgICAgbGV0IGFuc3dlcnMgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbnN3ZXJzIH0pO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICB0aGlzLmxlbmd0aFtjaGFydF0gPSBuZXdfbGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAvLyBEZWxldGVzIGZpcnN0IGVsZW1lbnQgaWYgYXJyYXkgaXMgYmlnZ2VyIHRoYW4gOFxyXG4gICAgICAgICAgIC8vIENBTiBCRSBCRVRURVIhXHJcbiAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoW2NoYXJ0XSA9PT0gbmV3X2xlbmd0aCAmJiB0aGlzLnF1ZXVlLmRldmljZXNbY2hhcnRdLnZhbHVlcy5sZW5ndGggPiA4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiREVMRVRFXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlLmRldmljZXNbY2hhcnRdLnZhbHVlcy5zaGlmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLyppZiAodGhpcy5sZW5ndGhbY2hhcnRdID4gMTApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3X2xlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUuZGV2aWNlc1tjaGFydF0udmFsdWVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS5kZXZpY2VzW2NoYXJ0XS52YWx1ZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2NoYXJ0XS5zaGlmdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aFtjaGFydF0gPSB0aGlzLnN0YXRlLmRhdGEuZGV2aWNlc1tjaGFydF0udmFsdWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJERUxFVEVcIik7XHJcbiAgICAgICAgICB9Ki9cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIiYjeDFGNEM4OyBSZWFsdGltZSBEYXRhIFZpc3VhbGl6YXRpb25cIj5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBvc2l0aW9uLWFic29sdXRlIGgtMTAwIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBvc2l0aW9uLWFic29sdXRlIHctMTAwIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC13cmFwIGgtMTAwIGFsaWduLWl0ZW1zLXN0YXJ0IGFsaWduLWNvbnRlbnQtYmV0d2VlbiBiZy13aGl0ZSBweC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRzIGxhYmVscz17dGhpcy5xdWV1ZS5kZXZpY2VzW1wiQVwiXS52YWx1ZXN9IHZhbHVlPXt0aGlzLnN0YXRlLmFuc3dlcnNbXCJBXCJdfSB0aXRsZVVwPXt0aGlzLmNpdHl9IFVwRGF0YT17dGhpcy5VcERhdGFMZWZ0fSB0aXRsZURvd249XCJEZXZpY2UgQVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC1tZC00IHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBmbGV4LXdyYXAgaC0xMDAgYWxpZ24taXRlbXMtc3RhcnQgYWxpZ24tY29udGVudC1iZXR3ZWVuIGJnLXdoaXRlIHB4LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhdHMgbGFiZWxzPXt0aGlzLnF1ZXVlLmRldmljZXNbXCJCXCJdLnZhbHVlc30gdmFsdWU9e3RoaXMuc3RhdGUuYW5zd2Vyc1tcIkJcIl19IHRpdGxlVXA9e3RoaXMuZm9yZWNhc3RUaXRsZX0gVXBEYXRhPXt0aGlzLlVwRGF0YU1pZGRsZX0gdXJsSW1hZ2U9e3RoaXMuSW1hZ2VVcmx9IHRpdGxlRG93bj1cIkRldmljZSBCXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLW1kLTQgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtd3JhcCBoLTEwMCBhbGlnbi1pdGVtcy1zdGFydCBhbGlnbi1jb250ZW50LWJldHdlZW4gYmctd2hpdGUgcHgtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0cyBsYWJlbHM9e3RoaXMucXVldWUuZGV2aWNlc1tcIkNcIl0udmFsdWVzfSB2YWx1ZT17dGhpcy5zdGF0ZS5hbnN3ZXJzW1wiQ1wiXX0gdGl0bGVVcD1cIkNhbGVuZGFyXCIgVXBEYXRhPXt0aGlzLlVwRGF0YVJpZ2h0fSB0aXRsZURvd249XCJEZXZpY2UgQ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcblx0PEZyYWdtZW50PlxyXG5cdFx0PEluZGV4UGFnZSAvPlxyXG5cdFx0PHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuXHRcdFx0LmN1c3RvbS1jb250cm9sLWxhYmVsIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRjb2xvcjogIzk5OTtcclxuXHRcdFx0XHRmb250LXNpemU6IDJyZW07XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDIuMjVyZW07XHJcblx0XHRcdH1cclxuXHRcdFx0LmN1c3RvbS1jb250cm9sLWxhYmVsOmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLWxhYmVsOmFmdGVyIHtcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0bGVmdDogLTEwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyLjI1cmVtO1xyXG5cdFx0XHRcdHdpZHRoOiAyLjI1cmVtO1xyXG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHRcdFx0LmN1c3RvbS1jb250cm9sLWxhYmVsLmNoZWNrZWQge1xyXG5cdFx0XHRcdGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHRcdFx0YnV0dG9uLmJ0biB7XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdDwvRnJhZ21lbnQ+XHJcbik7Il19 */\n/*@ sourceURL=C:\\Users\\D070374\\OneDrive - SAP SE\\Programmierung\\Privat\\Dashboard\\pages\\index.js */",
    __self: this
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map