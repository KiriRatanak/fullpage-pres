webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7__);





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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "onLeave",
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     sectionsColor: [...originalColors],
    //     fullpages: [
    //       {
    //         text: 'section 1',
    //       },
    //       {
    //         text: 'section 2',
    //       },
    //     ],
    //   };
    // }
    value: function onLeave(origin, destination, direction) {
      console.log('onLeave', {
        origin: origin,
        destination: destination,
        direction: direction
      }); // arguments are mapped in order of fullpage.js callback arguments do something
      // with the event
    }
    /*
    handleChangeColors() {
      const newColors =
        this.state.sectionsColor[0] === 'yellow'
          ? [...originalColors]
          : ['yellow', 'blue', 'white'];
      this.setState({
        sectionsColor: newColors,
      });
    }
    */

    /*
     handleAddSection() {
       this.setState(state => {
         const { fullpages } = state;
         const { length } = fullpages;
         fullpages.push({
           text: `section ${length + 1}`,
           id: Math.random(),
         });
    
         return {
           fullpages: [...fullpages],
         };
       });
     }
    
     handleRemoveSection() {
       this.setState(state => {
         const { fullpages } = state;
         const newPages = [...fullpages];
         newPages.pop();
    
         return { fullpages: newPages };
       });
     }
     */

  }, {
    key: "render",
    value: function render() {
      // const { fullpages } = this.state;
      // if (!fullpages.length) {
      //   return null;
      // }
      // const Menu = () => (
      //   <div
      //     className="menu"
      //     style={{
      //       position: 'fixed',
      //       top: 0,
      //       zIndex: 100,
      //     }}
      //   >
      //     <ul>
      //       <li>
      //         <button onClick={() => this.handleAddSection()}>+ Section</button>
      //         <button onClick={() => this.handleRemoveSection()}>
      //           - Section
      //         </button>
      //         <button onClick={() => this.handleChangeColors()}>
      //           Change colors
      //         </button>
      //       </li>
      //     </ul>
      //   </div>
      // );
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default.a, {
        debug: true
        /* Debug logging */
        ,
        navigation: true // anchors={['firstPage', 'secondPage', 'thirdPage']}
        ,
        sectionSelector: SECTION_SEL // onLeave={this.onLeave.bind(this)}
        // sectionsColor={this.state.sectionsColor}
        // pluginWrapper={pluginWrapper}
        ,
        render: function render(comp) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default.a.Wrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // const rootElement = document.getElementById('react-root');
// ReactDOM.render(<App />, rootElement);


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.5c84052997f37310cd10.hot-update.js.map