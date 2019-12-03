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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Greet = __webpack_require__(/*! ./public/components/Greet */ \"./src/public/components/Greet.js\");\n\nvar _Greet2 = _interopRequireDefault(_Greet);\n\nvar _NestedRoute = __webpack_require__(/*! ./public/components/NestedRoute */ \"./src/public/components/NestedRoute.js\");\n\nvar _NestedRoute2 = _interopRequireDefault(_NestedRoute);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use((0, _compression2.default)());\n\napp.use('/static', _express2.default.static(_path2.default.resolve(__dirname, 'public')));\n\napp.get('/', function (req, res) {\n  var _req$query$name = req.query.name,\n      name = _req$query$name === undefined ? 'SSR Rendering!' : _req$query$name;\n\n\n  var componentStream = _server2.default.renderToNodeStream(_react2.default.createElement(_Greet2.default, { name: name }));\n\n  var htmlStart = '\\n  <!doctype html>\\n    <html>\\n    <head>\\n      <title>SSR</title>\\n      <link rel=\\'shortcut icon\\' type=\\'image/x-icon\\' href=\\'/static/favicon.ico\\' />\\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\\n      <script>window.__INITIAL__DATA__ = ' + JSON.stringify({ name: name }) + '</script>\\n    </head>\\n    <body>\\n    <div id=\"root\">';\n\n  res.write(htmlStart);\n\n  // node streaming\n  componentStream.pipe(res, { end: false });\n\n  var htmlEnd = '</div>\\n    <script src=\"/static/vendors~home.js~routes.js\"></script>\\n    <script src=\"/static/home.js\"></script>\\n  </body>\\n  </html>';\n\n  componentStream.on('end', function () {\n    res.write(htmlEnd);\n\n    res.end();\n  });\n});\n\n// SPA route\napp.get('/spa*', function (req, res) {\n  var context = {};\n\n  var component = _server2.default.renderToString(_react2.default.createElement(\n    _reactRouterDom.StaticRouter,\n    { location: req.url, context: context },\n    _react2.default.createElement(_NestedRoute2.default, null)\n  ));\n\n  var html = '\\n  <!doctype html>\\n    <html>\\n    <head>\\n      <title>SSR - SPA</title>\\n      <link rel=\\'shortcut icon\\' type=\\'image/x-icon\\' href=\\'/static/favicon.ico\\' />\\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\\n    </head>\\n    <body>\\n      <div id=\"root\">' + component + '</div>\\n\\n      <script src=\"/static/vendors~home.js~routes.js\"></script>\\n      <script src=\"/static/vendors~routes.js\"></script>\\n      <script src=\"/static/routes.js\"></script>\\n    </body>\\n    </html>\\n  ';\n\n  if (context.url) {\n    res.writeHead(301, { Location: context.url });\n    res.end();\n  } else {\n    res.send(html);\n  }\n});\n\napp.get('*', function (req, res) {\n  return res.status(404).send('<body style=\"background-color: #3c3c3c;\"><h1 style=\"font-family: sans-serif; color: #c7c7c7; text-align: center;\">404 - Not Found</h1></body>');\n});\n\nvar _process$env$PORT = process.env.PORT,\n    PORT = _process$env$PORT === undefined ? 3000 : _process$env$PORT;\n\n\napp.listen(PORT, function () {\n  return console.log('######## app running ########');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/components/Greet.js":
/*!****************************************!*\
  !*** ./src/public/components/Greet.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Greet = function Greet(props) {\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(\n      \"h1\",\n      null,\n      \"Welcome, \",\n      props.name,\n      \"!\"\n    ),\n    _react2.default.createElement(\n      \"a\",\n      { href: \"/spa\" },\n      \"SPA\"\n    )\n  );\n};\n\nexports.default = Greet;\n\n//# sourceURL=webpack:///./src/public/components/Greet.js?");

/***/ }),

/***/ "./src/public/components/NestedRoute.js":
/*!**********************************************!*\
  !*** ./src/public/components/NestedRoute.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h2',\n      null,\n      'Home'\n    )\n  );\n};\n\nvar About = function About() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h2',\n      null,\n      'About'\n    )\n  );\n};\n\nvar NestedRoute = function NestedRoute() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'ul',\n      null,\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/spa' },\n          'Home'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/spa/about' },\n          'About'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: '/' },\n          'back'\n        )\n      )\n    ),\n    _react2.default.createElement('hr', null),\n    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/spa', component: Home }),\n    _react2.default.createElement(_reactRouterDom.Route, { path: '/spa/about', component: About })\n  );\n};\n\nexports.default = NestedRoute;\n\n//# sourceURL=webpack:///./src/public/components/NestedRoute.js?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });