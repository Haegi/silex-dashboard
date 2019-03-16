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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(4);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(1);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);

// CONCATENATED MODULE: ./components/dynamic-doughnut.js



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var dynamic_doughnut_DynDoughnout = function DynDoughnout(props) {
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
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h2", {
    style: donutTitle
  }, title), external_react_default.a.createElement(external_react_chartjs_2_["Doughnut"], {
    data: options
  }));
};

/* harmony default export */ var dynamic_doughnut = (dynamic_doughnut_DynDoughnout);
// CONCATENATED MODULE: ./components/Stats.js





var Stats_Stats = function Stats(props) {
  var _props$labels = props.labels,
      labels = _props$labels === void 0 ? [] : _props$labels,
      _props$value = props.value,
      value = _props$value === void 0 ? {} : _props$value,
      _props$titleUp = props.titleUp,
      titleUp = _props$titleUp === void 0 ? external_prop_types_["string"] : _props$titleUp,
      _props$titleDown = props.titleDown,
      titleDown = _props$titleDown === void 0 ? external_prop_types_["string"] : _props$titleDown,
      _props$UpData = props.UpData,
      UpData = _props$UpData === void 0 ? {} : _props$UpData,
      _props$urlImage = props.urlImage,
      urlImage = _props$urlImage === void 0 ? external_prop_types_["string"] : _props$urlImage;
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
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", {
    className: "position-relative h-50 w-100 d-flex border-bottom border-gray",
    style: {
      marginTop: '20px'
    }
  }, external_react_default.a.createElement("span", {
    className: "d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary",
    style: {
      fontSize: '1.25rem',
      textAlign: 'center'
    }
  }, titleUp, external_react_default.a.createElement("span", {
    className: "d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary",
    style: {
      fontSize: '1.25rem',
      textAlign: 'center',
      paddingTop: '30px'
    }
  }, external_react_default.a.createElement("p", null, UpData.up.icon, " ", UpData.up.value)), external_react_default.a.createElement("span", {
    className: "d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary",
    style: {
      fontSize: '1.25rem',
      textAlign: 'center',
      paddingTop: '20px'
    }
  }, external_react_default.a.createElement("img", {
    src: urlImage
  }), external_react_default.a.createElement("p", null, UpData.middle.icon, " ", UpData.middle.value)), external_react_default.a.createElement("span", {
    className: "d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary",
    style: {
      fontSize: '1.25rem',
      textAlign: 'center',
      paddingTop: '20px'
    }
  }, external_react_default.a.createElement("p", null, UpData.down.icon, " ", UpData.down.value)))), external_react_default.a.createElement("div", {
    className: "position-relative h-50 w-100 d-flex align-items-center border-bottom border-gray"
  }, external_react_default.a.createElement(external_react_chartjs_2_["Line"], {
    data: chartDataDown,
    width: 100,
    height: 50,
    options: chartOptionsDown
  })), external_react_default.a.createElement("div", {
    className: "position-relative h-50 w-100 d-flex align-items-center border-bottom border-gray"
  }, external_react_default.a.createElement(dynamic_doughnut, {
    title: "TEST"
  })));
};

/* harmony default export */ var components_Stats = (Stats_Stats);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout.js



var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous"
  }), external_react_default.a.createElement("title", null, props.pageTitle || 'Realtime Data Visualization')), props.children);
};

/* harmony default export */ var components_Layout = (Layout_Layout);
// CONCATENATED MODULE: ./pages/index.js



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





var pages_IndexPage =
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
      regenerator_default.a.mark(function _callee() {
        var _this3 = this;

        var _ref, _ref2, IoTRespoonse, WeatherResponse, ForecastResponse, CalendarResponse, data, weather, forecast, calendar;

        return regenerator_default.a.wrap(function _callee$(_context) {
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
      return external_react_default.a.createElement(components_Layout, {
        pageTitle: "\uD83D\uDCC8 Realtime Data Visualization"
      }, external_react_default.a.createElement("main", {
        className: "container-fluid position-absolute h-100 bg-light"
      }, external_react_default.a.createElement("div", {
        className: "row position-absolute w-100 h-100"
      }, external_react_default.a.createElement("section", {
        className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0"
      }, external_react_default.a.createElement(components_Stats, {
        labels: this.queue.devices["A"].values,
        value: this.state.answers["A"],
        titleUp: this.city,
        UpData: this.UpDataLeft,
        titleDown: "Device A"
      })), external_react_default.a.createElement("section", {
        className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0"
      }, external_react_default.a.createElement(components_Stats, {
        labels: this.queue.devices["B"].values,
        value: this.state.answers["B"],
        titleUp: this.forecastTitle,
        UpData: this.UpDataMiddle,
        urlImage: this.ImageUrl,
        titleDown: "Device B"
      })), external_react_default.a.createElement("section", {
        className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0"
      }, external_react_default.a.createElement(components_Stats, {
        labels: this.queue.devices["C"].values,
        value: this.state.answers["C"],
        titleUp: "Calendar",
        UpData: this.UpDataRight,
        titleDown: "Device C"
      })))));
    }
  }]);

  return IndexPage;
}(external_react_["Component"]);

;
/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(pages_IndexPage, null), external_react_default.a.createElement(style_default.a, {
    styleId: "773737355",
    css: [".custom-control-label{background:transparent;color:#999;font-size:2rem;font-weight:500;cursor:pointer;line-height:2.25rem;}", ".custom-control-label:before,.custom-control-label:after{top:0;left:-10px;height:2.25rem;width:2.25rem;cursor:pointer;box-shadow:none !important;}", ".custom-control-label.checked{color:#007bff !important;}", "button.btn{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1rem;font-weight:600;}"]
  }));
});

/***/ })
/******/ ]);