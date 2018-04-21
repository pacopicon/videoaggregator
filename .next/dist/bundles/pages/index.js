module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(3);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "reactstrap"
var external__reactstrap_ = __webpack_require__(5);
var external__reactstrap__default = /*#__PURE__*/__webpack_require__.n(external__reactstrap_);

// CONCATENATED MODULE: ./components/css.js
var row = {
  paddingLeft: '5%',
  paddingRight: '5%'
};
// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(6);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// CONCATENATED MODULE: ./components/App.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var App_App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      featuredChannel: '',
      data: ''
    };
    _this.handleRequest = _this.handleRequest.bind(_this);
    _this.request = _this.request.bind(_this);
    _this.post = _this.post.bind(_this);
    // this.getAuth = this.getAuth.bind(this)
    return _this;
  }

  _createClass(App, [{
    key: 'handleRequest',
    value: function handleRequest(e) {
      this.setState({
        featuredChannel: e.target.value
      });
    }

    // getAuth() {
    //   // let URL = `https://api.vimeo.com/oauth/authorize/client`
    //   let URL = `https://api.vimeo.com/oauth/authorize/client&grant_type=client_credentials`
    //   let client_id = '2bfaa99affb5992f96a7bd40a8198349dbeb5159',
    //       client_secret = '9Tf7g9z9jHc9AwkEz3OTIJN1cDP5LMrBh5fqVyi9gB29XMo4QAdD/GWk0o5AKdHs8gUZrg1UxcR2H7U6FIX/esUaUxCAxszYjIhDutjGXO0XAaTohDX3rrsrlt7Avwja',
    //       credentials = client_id + ':' + client_secret
    //   fetch(URL, {
    //     method: "POST",
    //     cache: "default",
    //     accept: "application/vnd.vimeo.*+json;version=3.4",
    //     ContentType: "application/json",
    //     Authorization : `basic ${atob(credentials)}`
    //   })
    //   .then( res => {
    //     console.log(`called ${ URL }`)
    //     return res.json()
    //   })
    //   .then(json => {
    //     console.log(`json = ${JSON.stringify(json)}`)
    //   })
    //   .catch(error => {
    //     console.log(`${error}: failed to fetch from ${ URL }`)
    //     console.dir(error)
    //   })
    // }

    // <Button outline color="primary" style={{ width: '100%', height: '180px', fontSize: '80px'}} onClick={ () => this.getAuth()}>getAuth</Button>

    // request() {
    //   let URL = `https://api.vimeo.com/channels`,
    //       // authToken = "7962960ba98f28b871cfe391e88f65f3"
    //       // authToken = "d21ab739c3d0b5c0906ec55ef1d6da28"
    //       authToken = "af9d6f3e23c4aaaa1b3d35a8ea73d25e"
    //   fetch(URL, {
    //     method: "GET",
    //     cache: "default",
    //     accept: "application/vnd.vimeo.*+json;version=3.4",
    //     ContentType: "application/json",
    //     Authorization: `Bearer ${authToken} https://api.vimeo.com`
    //   })
    //   .then( res => {
    //     console.log(`called ${ URL }`)
    //     return res.json()
    //   })
    //   .then(json => {
    //     console.log(`json = ${JSON.stringify(json)}`)
    //   })
    //   .catch(error => {
    //     console.log(`${error}: failed to fetch from ${ URL }`)
    //     console.dir(error)
    //   })
    // }

  }, {
    key: 'post',
    value: function post(d) {
      console.log('requested data = ' + d);
      console.log('typeof data = ' + (typeof d === 'undefined' ? 'undefined' : _typeof(d)));
      var data = { channel: d
        // fetch('/api', {
        //   // body: JSON.stringify(data),
        //   body: d,
        //   cache: "default",
        //   headers: {
        //     "Content-type": "application/x-www-form-urlencoded; charset-UTF-8"
        //     // 'Content-Type': 'application/json'
        //   },
        //   method: "POST"
        // })
        // .then( res => {
        //   console.log(`Accepted response: ${JSON.stringify(res.json())}`)
        //   return res.json()
        // })
        // .then(json => {
        //   console.log(`json = ${JSON.stringify(json)}`)
        // })
        // .catch(error => {
        //   console.log(`${error}: failed to fetch from ${ URL }`)
        //   console.dir(error)
        // })

      };external__axios__default.a.post('/api', {
        data: d
      }).then(function (res) {
        console.log('res = ' + res);
      }).catch(function (error) {
        console.log('error: ' + error);
      });
    }
  }, {
    key: 'request',
    value: function request() {
      var _this2 = this;

      // axios.get('/api', {

      //   })
      //   .then( res => {
      //     console.log('axios get res = ' + res)
      //   })
      //   .catch( error => {
      //     console.log('axios error = ' + error)
      //   })

      fetch('/api', {
        method: "GET",
        cache: "default"
      }).then(function (res) {
        console.log('res -> JSON.stringify(res.json()) = ' + JSON.stringify(res.json()));
        return res.json();
      }).then(function (json) {
        console.log('json = ' + json);
        _this2.setState({
          data: json
        });
      }).catch(function (error) {
        console.log(error + ': failed to fetch from ' + URL);
        console.dir(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var featuredChannel = this.state.featuredChannel;


      return external__react__default.a.createElement(
        'div',
        null,
        external__react__default.a.createElement(
          head__default.a,
          null,
          external__react__default.a.createElement('link', { href: '/static/bootstrap.min.css', rel: 'stylesheet' }),
          external__react__default.a.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Open+Sans' })
        ),
        external__react__default.a.createElement(
          external__reactstrap_["Row"],
          { style: row },
          external__react__default.a.createElement(
            external__reactstrap_["Col"],
            { xs: { size: 4, offset: 4 } },
            external__react__default.a.createElement(external__reactstrap_["Input"], { type: 'text', name: 'text', style: { width: '100%', height: '180px', fontSize: '80px' }, placeholder: 'channel', value: featuredChannel, onChange: this.handleRequest })
          ),
          external__react__default.a.createElement(external__reactstrap_["Col"], { xs: '4' })
        ),
        external__react__default.a.createElement(
          external__reactstrap_["Row"],
          { style: row },
          external__react__default.a.createElement(
            external__reactstrap_["Col"],
            { xs: { size: 4, offset: 4 } },
            external__react__default.a.createElement(
              external__reactstrap_["Button"],
              { outline: true, color: 'primary', style: { width: '100%', height: '180px', fontSize: '80px' }, onClick: function onClick() {
                  return _this3.post(featuredChannel);
                } },
              'Post'
            ),
            external__react__default.a.createElement(
              external__reactstrap_["Button"],
              { outline: true, color: 'primary', style: { width: '100%', height: '180px', fontSize: '80px' }, onClick: function onClick() {
                  return _this3.request(featuredChannel);
                } },
              'Request'
            )
          ),
          external__react__default.a.createElement(external__reactstrap_["Col"], { xs: '4' })
        )
      );
    }
  }]);

  return App;
}(external__react_["Component"]);

/* harmony default export */ var components_App = (App_App);
// CONCATENATED MODULE: ./pages/index.js





// ReactDOM.render(<App />, document.getElementById('root'));

var pages_Index = function Index() {
	return external__react__default.a.createElement(
		'div',
		null,
		external__react__default.a.createElement(components_App, null)
	);
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);