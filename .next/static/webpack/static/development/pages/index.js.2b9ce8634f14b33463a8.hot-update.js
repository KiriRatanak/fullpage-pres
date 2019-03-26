webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "D:\\Documents\\Lectures\\Leadership\\pres-web\\pages\\index.js";



var SEL = 'custom-section';
var SECTION_SEL = ".".concat(SEL); // NOTE: if using fullpage extensions/plugins put them here and pass it as props

var pluginWrapper = function pluginWrapper() {
  /**
   * require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
   */
};

var originalColors = ['#282c34', '#ff5f45', '#0798ec'];

var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      sectionsColor: [].concat(originalColors),
      fullpages: [{
        text: 'section 1'
      }, {
        text: 'section 2'
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "onLeave",
    value: function onLeave(origin, destination, direction) {
      console.log('onLeave', {
        origin: origin,
        destination: destination,
        direction: direction
      }); // arguments are mapped in order of fullpage.js callback arguments do something
      // with the event
    }
  }, {
    key: "handleChangeColors",
    value: function handleChangeColors() {
      var newColors = this.state.sectionsColor[0] === 'yellow' ? [].concat(originalColors) : ['yellow', 'blue', 'white'];
      this.setState({
        sectionsColor: newColors
      });
    }
  }, {
    key: "handleAddSection",
    value: function handleAddSection() {
      this.setState(function (state) {
        var fullpages = state.fullpages;
        var length = fullpages.length;
        fullpages.push({
          text: "section ".concat(length + 1),
          id: Math.random()
        });
        return {
          fullpages: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fullpages)
        };
      });
    }
  }, {
    key: "handleRemoveSection",
    value: function handleRemoveSection() {
      this.setState(function (state) {
        var fullpages = state.fullpages;

        var newPages = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fullpages);

        newPages.pop();
        return {
          fullpages: newPages
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var fullpages = this.state.fullpages;

      if (!fullpages.length) {
        return null;
      }

      var Menu = function Menu() {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "menu",
          style: {
            position: 'fixed',
            top: 0,
            zIndex: 100
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.handleAddSection();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, "+ Section"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.handleRemoveSection();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "- Section"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.handleChangeColors();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "Change colors"))));
      };

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8___default.a, {
        debug: true
        /* Debug logging */
        ,
        navigation: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        sectionSelector: SECTION_SEL,
        onLeave: this.onLeave.bind(this),
        sectionsColor: this.state.sectionsColor,
        pluginWrapper: pluginWrapper,
        render: function render(comp) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8___default.a.Wrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }, fullpages.map(function (_ref) {
            var text = _ref.text;
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
              key: text,
              className: SEL,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              },
              __self: this
            }, text));
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); // const rootElement = document.getElementById('react-root');
// ReactDOM.render(<App />, rootElement);


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.2b9ce8634f14b33463a8.hot-update.js.map