webpackHotUpdate(4,{

/***/ "./components/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_js__ = __webpack_require__("./components/css.js");
var _jsxFileName = '/Users/fjp2106/Desktop/videoaggregator/components/App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      query: '',
      data: ''
    };
    _this.handleRequest = _this.handleRequest.bind(_this);
    _this.request = _this.request.bind(_this);
    _this.getAuth = _this.getAuth.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleRequest',
    value: function handleRequest(e) {
      this.setState({
        query: e.target.value
      });
    }
  }, {
    key: 'getAuth',
    value: function getAuth() {
      // let URL = `https://api.vimeo.com/oauth/authorize/client`
      var URL = 'https://api.vimeo.com/oauth/authorize/client&grant_type=client_credentials';
      var client_id = '2bfaa99affb5992f96a7bd40a8198349dbeb5159',
          client_secret = '9Tf7g9z9jHc9AwkEz3OTIJN1cDP5LMrBh5fqVyi9gB29XMo4QAdD/GWk0o5AKdHs8gUZrg1UxcR2H7U6FIX/esUaUxCAxszYjIhDutjGXO0XAaTohDX3rrsrlt7Avwja',
          credentials = client_id + ':' + client_secret;
      fetch(URL, {
        method: "POST",
        cache: "default",
        accept: "application/vnd.vimeo.*+json;version=3.4",
        ContentType: "application/json",
        Authorization: 'basic ' + atob(credentials)
      }).then(function (res) {
        console.log('called ' + URL);
        return res.json();
      }).then(function (json) {
        console.log('json = ' + JSON.stringify(json));
      }).catch(function (error) {
        console.log(error + ': failed to fetch from ' + URL);
        console.dir(error);
      });
    }
  }, {
    key: 'request',
    value: function request() {
      var URL = 'https://api.vimeo.com/channels',

      // authToken = "7962960ba98f28b871cfe391e88f65f3"
      // authToken = "d21ab739c3d0b5c0906ec55ef1d6da28"
      authToken = "af9d6f3e23c4aaaa1b3d35a8ea73d25e";
      fetch(URL, {
        method: "GET",
        cache: "default",
        accept: "application/vnd.vimeo.*+json;version=3.4",
        ContentType: "application/json",
        Authorization: 'Bearer ' + authToken + ' https://api.vimeo.com'
      }).then(function (res) {
        console.log('called ' + URL);
        return res.json();
      }).then(function (json) {
        console.log('json = ' + JSON.stringify(json));
      }).catch(function (error) {
        console.log(error + ': failed to fetch from ' + URL);
        console.dir(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var query = this.state.query;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/static/bootstrap.min.css', rel: 'stylesheet', __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Open+Sans', __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Row */],
          { style: __WEBPACK_IMPORTED_MODULE_3__css_js__["a" /* row */], __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Col */],
            { xs: { size: 4, offset: 4 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["c" /* Input */], { type: 'text', name: 'text', style: { width: '100%', height: '180px', fontSize: '80px' }, value: query, onChange: this.handleRequest, __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Col */], { xs: '4', __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* Row */],
          { style: __WEBPACK_IMPORTED_MODULE_3__css_js__["a" /* row */], __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Col */],
            { xs: { size: 4, offset: 4 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_reactstrap__["a" /* Button */],
              { outline: true, color: 'primary', style: { width: '100%', height: '180px', fontSize: '80px' }, onClick: function onClick() {
                  return _this2.getAuth();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95
                }
              },
              'getAuth'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_reactstrap__["a" /* Button */],
              { outline: true, color: 'primary', style: { width: '100%', height: '180px', fontSize: '80px' }, onClick: function onClick() {
                  return _this2.request();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96
                }
              },
              'Request'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Col */], { xs: '4', __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = App;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', '/Users/fjp2106/Desktop/videoaggregator/components/App.js');
  reactHotLoader.register(_default, 'default', '/Users/fjp2106/Desktop/videoaggregator/components/App.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.089b32b9eaed711b6523.hot-update.js.map