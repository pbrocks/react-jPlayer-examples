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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactJPlayer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactJplayer = __webpack_require__(1);

var _reactJplayer2 = _interopRequireDefault(_reactJplayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  id: 'AudioPlayer',
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: 'BubbleFFS',
    artist: 'ffsMiaow',
    sources: {
      m4a: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
      oga: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg'
    },
    free: true
  }
};

(0, _reactJplayer.initializeOptions)(defaultOptions);

var AudioPlayer = function AudioPlayer() {
  return _react2.default.createElement(
    _reactJplayer2.default,
    { id: defaultOptions.id, className: 'jp-sleek' },
    _react2.default.createElement(_reactJplayer.Audio, null),
    _react2.default.createElement(
      _reactJplayer.Gui,
      null,
      _react2.default.createElement(
        'div',
        { className: 'jp-controls jp-icon-controls' },
        _react2.default.createElement(
          _reactJplayer.Play,
          null,
          _react2.default.createElement('i', { className: 'fa' })
        ),
        _react2.default.createElement(
          _reactJplayer.Repeat,
          null,
          _react2.default.createElement('i', { className: 'fa fa-repeat' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'jp-progress' },
          _react2.default.createElement(
            _reactJplayer.SeekBar,
            null,
            _react2.default.createElement(_reactJplayer.BufferBar, null),
            _react2.default.createElement(_reactJplayer.PlayBar, null),
            _react2.default.createElement(_reactJplayer.CurrentTime, null),
            _react2.default.createElement(_reactJplayer.Duration, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'jp-volume-container' },
          _react2.default.createElement(
            _reactJplayer.Mute,
            null,
            _react2.default.createElement('i', { className: 'fa' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'jp-volume-slider' },
            _react2.default.createElement(
              'div',
              { className: 'jp-volume-bar-container' },
              _react2.default.createElement(_reactJplayer.VolumeBar, null)
            )
          )
        ),
        _react2.default.createElement(
          _reactJplayer.FullScreen,
          null,
          _react2.default.createElement('i', { className: 'fa fa-expand' })
        ),
        _react2.default.createElement(
          _reactJplayer.Download,
          null,
          _react2.default.createElement('i', { className: 'fa fa-download' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'jp-title-container' },
          _react2.default.createElement(_reactJplayer.Poster, null),
          _react2.default.createElement(_reactJplayer.Title, null)
        )
      ),
      _react2.default.createElement(_reactJplayer.BrowserUnsupported, null)
    )
  );
};

exports.default = AudioPlayer;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _reactJplayer = __webpack_require__(1);

var _audioPlayer = __webpack_require__(2);

var _audioPlayer2 = _interopRequireDefault(_audioPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Pass the jPlayer reducer and it's initialStates to the store */
var store = (0, _redux.createStore)((0, _redux.combineReducers)({ jPlayers: _reactJplayer.reducer }));

/* Wrap our player in the Redux Provider and render the jPlayer.
The provider should go at the root of your App, just like Redux documentation recommends,
so that all components below the Provider have access to the jPlayers state
*/
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_audioPlayer2.default, null)
), document.getElementById('app'));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDA3ZWUzZTQwMTY1NzM0MTk3MDEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdEpQbGF5ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXVkaW9QbGF5ZXIuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RSZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qc3giXSwibmFtZXMiOlsiZGVmYXVsdE9wdGlvbnMiLCJpZCIsImtleUVuYWJsZWQiLCJ2ZXJ0aWNhbFZvbHVtZSIsIm1lZGlhIiwidGl0bGUiLCJhcnRpc3QiLCJzb3VyY2VzIiwibTRhIiwib2dhIiwiZnJlZSIsIkF1ZGlvUGxheWVyIiwic3RvcmUiLCJqUGxheWVycyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQSwyQ0FBMkMsY0FBYzs7UUFFekQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7O0FDaEVBLHVCOzs7Ozs7QUNBQSw4Qjs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7OztBQU1BLElBQU1BLGlCQUFpQjtBQUNyQkMsTUFBSSxhQURpQjtBQUVyQkMsY0FBWSxJQUZTO0FBR3JCQyxrQkFBZ0IsSUFISztBQUlyQkMsU0FBTztBQUNMQyxXQUFPLFFBREY7QUFFTEMsWUFBUSxPQUZIO0FBR0xDLGFBQVM7QUFDUEMsV0FBSyxrREFERTtBQUVQQyxXQUFLO0FBRkUsS0FISjtBQU9MQyxVQUFNO0FBUEQ7QUFKYyxDQUF2Qjs7QUFlQSxxQ0FBa0JWLGNBQWxCOztBQUVBLElBQU1XLGNBQWMsU0FBZEEsV0FBYztBQUFBLFNBQ2xCO0FBQUMsMEJBQUQ7QUFBQSxNQUFTLElBQUlYLGVBQWVDLEVBQTVCLEVBQWdDLFdBQVUsVUFBMUM7QUFDRSxrQ0FBQyxtQkFBRCxPQURGO0FBRUU7QUFBQyx1QkFBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSw4QkFBZjtBQUNFO0FBQUMsNEJBQUQ7QUFBQTtBQUFNLCtDQUFHLFdBQVUsSUFBYjtBQUFOLFNBREY7QUFFRTtBQUFDLDhCQUFEO0FBQUE7QUFBUSwrQ0FBRyxXQUFVLGNBQWI7QUFBUixTQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQyxpQ0FBRDtBQUFBO0FBQ0UsMENBQUMsdUJBQUQsT0FERjtBQUVFLDBDQUFDLHFCQUFELE9BRkY7QUFHRSwwQ0FBQyx5QkFBRCxPQUhGO0FBSUUsMENBQUMsc0JBQUQ7QUFKRjtBQURGLFNBSEY7QUFXRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQyw4QkFBRDtBQUFBO0FBQ0UsaURBQUcsV0FBVSxJQUFiO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSx5QkFBZjtBQUNFLDRDQUFDLHVCQUFEO0FBREY7QUFERjtBQUpGLFNBWEY7QUFxQkU7QUFBQyxrQ0FBRDtBQUFBO0FBQVksK0NBQUcsV0FBVSxjQUFiO0FBQVosU0FyQkY7QUFzQkU7QUFBQyxnQ0FBRDtBQUFBO0FBQVUsK0NBQUcsV0FBVSxnQkFBYjtBQUFWLFNBdEJGO0FBdUJFO0FBQUE7QUFBQSxZQUFLLFdBQVUsb0JBQWY7QUFDRSx3Q0FBQyxvQkFBRCxPQURGO0FBRUUsd0NBQUMsbUJBQUQ7QUFGRjtBQXZCRixPQURGO0FBNkJFLG9DQUFDLGdDQUFEO0FBN0JGO0FBRkYsR0FEa0I7QUFBQSxDQUFwQjs7a0JBcUNlVSxXOzs7Ozs7QUM3RGYsMEI7Ozs7OztBQ0FBLDRCOzs7Ozs7QUNBQSx1Qjs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7QUFFQTtBQUNBLElBQU1DLFFBQVEsd0JBQVksNEJBQWdCLEVBQUVDLCtCQUFGLEVBQWhCLENBQVosQ0FBZDs7QUFFQTs7OztBQUlBQyxtQkFBU0MsTUFBVCxDQUNFO0FBQUMsc0JBQUQ7QUFBQSxJQUFVLE9BQU9ILEtBQWpCO0FBQ0UsZ0NBQUMscUJBQUQ7QUFERixDQURGLEVBSUdJLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FKSCxFIiwiZmlsZSI6InVtZFBsYXllci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAwN2VlM2U0MDE2NTczNDE5NzAxIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEpQbGF5ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdEpQbGF5ZXJcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEpQbGF5ZXIsIHtcbiAgaW5pdGlhbGl6ZU9wdGlvbnMsIEd1aSwgU2Vla0JhciwgQnVmZmVyQmFyLFxuICBQb3N0ZXIsIEF1ZGlvLCBUaXRsZSwgRnVsbFNjcmVlbiwgTXV0ZSwgUGxheSwgUGxheUJhciwgUmVwZWF0LFxuICBWb2x1bWVCYXIsIER1cmF0aW9uLCBDdXJyZW50VGltZSwgRG93bmxvYWQsIEJyb3dzZXJVbnN1cHBvcnRlZCxcbn0gZnJvbSAncmVhY3QtanBsYXllcic7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBpZDogJ0F1ZGlvUGxheWVyJyxcbiAga2V5RW5hYmxlZDogdHJ1ZSxcbiAgdmVydGljYWxWb2x1bWU6IHRydWUsXG4gIG1lZGlhOiB7XG4gICAgdGl0bGU6ICdCdWJibGUnLFxuICAgIGFydGlzdDogJ01pYW93JyxcbiAgICBzb3VyY2VzOiB7XG4gICAgICBtNGE6ICdodHRwOi8vanBsYXllci5vcmcvYXVkaW8vbTRhL01pYW93LTA3LUJ1YmJsZS5tNGEnLFxuICAgICAgb2dhOiAnaHR0cDovL2pwbGF5ZXIub3JnL2F1ZGlvL29nZy9NaWFvdy0wNy1CdWJibGUub2dnJyxcbiAgICB9LFxuICAgIGZyZWU6IHRydWUsXG4gIH0sXG59O1xuXG5pbml0aWFsaXplT3B0aW9ucyhkZWZhdWx0T3B0aW9ucyk7XG5cbmNvbnN0IEF1ZGlvUGxheWVyID0gKCkgPT4gKFxuICA8SlBsYXllciBpZD17ZGVmYXVsdE9wdGlvbnMuaWR9IGNsYXNzTmFtZT1cImpwLXNsZWVrXCI+XG4gICAgPEF1ZGlvIC8+XG4gICAgPEd1aT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianAtY29udHJvbHMganAtaWNvbi1jb250cm9sc1wiPlxuICAgICAgICA8UGxheT48aSBjbGFzc05hbWU9XCJmYVwiPnsvKiBJY29uIHNldCBpbiBjc3MgKi99PC9pPjwvUGxheT5cbiAgICAgICAgPFJlcGVhdD48aSBjbGFzc05hbWU9XCJmYSBmYS1yZXBlYXRcIiAvPjwvUmVwZWF0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLXByb2dyZXNzXCI+XG4gICAgICAgICAgPFNlZWtCYXI+XG4gICAgICAgICAgICA8QnVmZmVyQmFyIC8+XG4gICAgICAgICAgICA8UGxheUJhciAvPlxuICAgICAgICAgICAgPEN1cnJlbnRUaW1lIC8+XG4gICAgICAgICAgICA8RHVyYXRpb24gLz5cbiAgICAgICAgICA8L1NlZWtCYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLXZvbHVtZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8TXV0ZT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhXCI+ey8qIEljb24gc2V0IGluIGNzcyAqL308L2k+XG4gICAgICAgICAgPC9NdXRlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianAtdm9sdW1lLXNsaWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC12b2x1bWUtYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8Vm9sdW1lQmFyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGdWxsU2NyZWVuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWV4cGFuZFwiIC8+PC9GdWxsU2NyZWVuPlxuICAgICAgICA8RG93bmxvYWQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZG93bmxvYWRcIiAvPjwvRG93bmxvYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianAtdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgPFBvc3RlciAvPlxuICAgICAgICAgIDxUaXRsZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJyb3dzZXJVbnN1cHBvcnRlZCAvPlxuICAgIDwvR3VpPlxuICA8L0pQbGF5ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1BsYXllcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hdWRpb1BsYXllci5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWR1eDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBqUGxheWVycyB9IGZyb20gJ3JlYWN0LWpwbGF5ZXInO1xuXG5pbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSAnLi9hdWRpb1BsYXllcic7XG5cbi8qIFBhc3MgdGhlIGpQbGF5ZXIgcmVkdWNlciBhbmQgaXQncyBpbml0aWFsU3RhdGVzIHRvIHRoZSBzdG9yZSAqL1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lUmVkdWNlcnMoeyBqUGxheWVycyB9KSk7XG5cbi8qIFdyYXAgb3VyIHBsYXllciBpbiB0aGUgUmVkdXggUHJvdmlkZXIgYW5kIHJlbmRlciB0aGUgalBsYXllci5cblRoZSBwcm92aWRlciBzaG91bGQgZ28gYXQgdGhlIHJvb3Qgb2YgeW91ciBBcHAsIGp1c3QgbGlrZSBSZWR1eCBkb2N1bWVudGF0aW9uIHJlY29tbWVuZHMsXG5zbyB0aGF0IGFsbCBjb21wb25lbnRzIGJlbG93IHRoZSBQcm92aWRlciBoYXZlIGFjY2VzcyB0byB0aGUgalBsYXllcnMgc3RhdGVcbiovXG5SZWFjdERPTS5yZW5kZXIoKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXVkaW9QbGF5ZXIgLz5cbiAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=