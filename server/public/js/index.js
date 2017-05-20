/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-polyfill\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _lottery = __webpack_require__(2);

	var _lottery2 = _interopRequireDefault(_lottery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./lottery/base.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	__webpack_require__(4);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./lottery/calculate.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	__webpack_require__(6);

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Timer = function () {
	    function Timer() {
	        _classCallCheck(this, Timer);
	    }

	    _createClass(Timer, [{
	        key: 'countdown',
	        value: function countdown(end, update, handle) {
	            var now = new Date().getTime();
	            var self = this;

	            if (now - end) {
	                handle.call(self);
	            } else {
	                var last_time = end - now;
	                var px_d = 1000 * 60 * 60 * 24;
	                var px_h = 1000 * 60 * 60;
	                var px_m = 1000 * 60;
	                var px_s = 1000;

	                var d = Math.floor(last_time / px_d);
	                var h = Math.floor((last_time - d * px_d) / px_h);
	                var m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
	                var s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);
	                var r = [];

	                if (d > 0) {
	                    r.push('<em>' + d + '</em>\u5929');
	                }
	                if (r.length || h > 0) {
	                    r.push('<em>' + h + '</em>\u65F6');
	                }
	                if (r.length || m > 0) {
	                    r.push('<em>' + s + '</em>\u5206');
	                }
	                if (r.length || s > 0) {
	                    r.push('<em>' + s + '</em>\u79D2');
	                }

	                self.last_time = r.join('');
	                update.call(self, r.join(''));
	                setTimeout(function () {
	                    self.countdown(end, update, handle);
	                }, 1000);
	            }
	        }
	    }]);

	    return Timer;
	}();

	exports.default = Timer;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // 引入模块


	var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// interface.js会继承lottery.js
	var Interface = function () {
	  function Interface() {
	    _classCallCheck(this, Interface);
	  }

	  _createClass(Interface, [{
	    key: 'getOmit',

	    /**
	     * [getOmit 获取逻辑数据]
	     * @param  {[string]} issue [当前期号]
	     * @return {[type]}       [description]
	     */
	    value: function getOmit(issue) {
	      var self = this;
	      return new Promise(function (resolve, reject) {
	        _jquery2.default.ajax({
	          url: '/get/omit',
	          data: {
	            issue: issue
	          },
	          dataType: 'json',
	          success: function success(res) {
	            // Omit是另外一个方法
	            self.setOmit(res, data);
	            resolve.call(self, res);
	          },
	          error: function error(err) {
	            reject.call(err);
	          }
	        });
	      });
	    }

	    /**
	     * [getOpenCode 获取开奖号码]
	     * @param  {[string]} issue [期号]
	     * @return {[type]}       [description]
	     */

	  }, {
	    key: 'getOpenCode',
	    value: function getOpenCode(issue) {
	      var self = this;
	      return new Promise(function (resolve, reject) {
	        _jquery2.default.ajax({
	          url: '/get/opencode',
	          data: {
	            issue: issue
	          },
	          dataType: 'json',
	          success: function success(res) {
	            self.setOpenCode(res.data);
	            resolve.call(self, res);
	          },
	          error: function error(err) {
	            reject.call(err);
	          }
	        });
	      });
	    }

	    /**
	     * [getState 获取当前状态]
	     * @param  {[string]} issue [当前期号]
	     * @return {[type]}       [description]
	     */

	  }, {
	    key: 'getState',
	    value: function getState(issue) {
	      var self = this;
	      return new Promise(function (resolve, reject) {
	        _jquery2.default.ajax({
	          url: '/get/state',
	          data: {
	            issue: issue
	          },
	          dataType: 'json',
	          success: function success(res) {
	            resolve.call(self, res);
	          },
	          error: function error(err) {
	            reject.call(err);
	          }
	        });
	      });
	    }
	  }]);

	  return Interface;
	}();

	exports.default = Interface;

/***/ })
/******/ ]);