self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _TimeLine_TimeLineStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TimeLine/TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Tothagata\\Desktop\\reactJs\\portfolio\\src\\components\\Projects\\Projects.js",
    _this = undefined;







var scroll = function scroll(node, left) {
  return node.scrollTo({
    left: left,
    behavior: "smooth"
  });
};

var Projects = function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    nopadding: true,
    id: "projects",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      main: true,
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLine_TimeLineStyles__WEBPACK_IMPORTED_MODULE_5__.CarouselContainer, {
          ref: carouselRef,
          onScroll: handleScroll,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
              src: x.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
                title: true,
                children: x.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
              children: [" ", x.description, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginTop: "25px"
                },
                children: " Stack "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
                children: x.tags.map(function (tag, i) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                    children: [" ", tag, " "]
                  }, i, true, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 28
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
                href: x.visit,
                target: "_blank",
                children: "Visit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
                href: x.source,
                target: "_blank",
                children: "Code"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this)]
          }, x.id, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 11
  }, _this);
};

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsic2Nyb2xsIiwibm9kZSIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsIngiLCJjYXJvdXNlbFJlZiIsImhhbmRsZVNjcm9sbCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hcmdpblRvcCIsInRhZ3MiLCJtYXAiLCJ0YWciLCJpIiwidmlzaXQiLCJzb3VyY2UiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQWFBO0FBS0E7QUFDQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDN0IsU0FBT0QsSUFBSSxDQUFDRSxRQUFMLENBQWM7QUFBRUQsUUFBSSxFQUFKQSxJQUFGO0FBQVFFLFlBQVEsRUFBRTtBQUFsQixHQUFkLENBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFLdEIsc0JBQVMsOERBQUMsNkRBQUQ7QUFBUyxhQUFTLE1BQWxCO0FBQW1CLE1BQUUsRUFBQyxVQUF0QjtBQUFBLDRCQUNOLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETSxlQUVOLDhEQUFDLGtFQUFEO0FBQWMsVUFBSSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZNLGVBR04sOERBQUMsMERBQUQ7QUFBQSxnQkFDR0MsOERBQUEsQ0FBYSxVQUFDQyxDQUFELEVBQU87QUFDbkIsNEJBQ0UsOERBQUMsdUVBQUQ7QUFBbUIsYUFBRyxFQUFFQyxXQUF4QjtBQUFxQyxrQkFBUSxFQUFFQyxZQUEvQztBQUFBLGlDQUNFLDhEQUFDLHFEQUFEO0FBQUEsb0NBQ0UsOERBQUMsZ0RBQUQ7QUFBSyxpQkFBRyxFQUFFRixDQUFDLENBQUNHO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLHlEQUFEO0FBQUEsc0NBQ0UsOERBQUMsd0RBQUQ7QUFBYSxxQkFBSyxNQUFsQjtBQUFBLDBCQUFvQkgsQ0FBQyxDQUFDSTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFNRSw4REFBQyxxREFBRDtBQUFBLDhCQUFZSixDQUFDLENBQUNLLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBT0U7QUFBQSxzQ0FDRTtBQUFLLHFCQUFLLEVBQUU7QUFBRUMsMkJBQVMsRUFBRTtBQUFiLGlCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFBQSwwQkFDR04sQ0FBQyxDQUFDTyxJQUFGLENBQU9DLEdBQVAsQ0FBVyxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUN0QixzQ0FBTyw4REFBQyxnREFBRDtBQUFBLG9DQUFlRCxHQUFmO0FBQUEscUJBQVVDLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQUNELGlCQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFlRSw4REFBQyx3REFBRDtBQUFBLHNDQUNFLDhEQUFDLDBEQUFEO0FBQWUsb0JBQUksRUFBRVYsQ0FBQyxDQUFDVyxLQUF2QjtBQUE4QixzQkFBTSxFQUFDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUUsOERBQUMsMERBQUQ7QUFBZSxvQkFBSSxFQUFFWCxDQUFDLENBQUNZLE1BQXZCO0FBQStCLHNCQUFNLEVBQUMsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZGO0FBQUEsYUFBZVosQ0FBQyxDQUFDYSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQTRCRCxPQTdCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFITTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVDtBQW9DQSxDQXpDRDs7S0FBTWYsUTtBQTJDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YzRhMzJkNTdjMzI3ODk2ODNmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBCbG9nQ2FyZCxcbiAgQ2FyZEluZm8sXG4gIEV4dGVybmFsTGlua3MsXG4gIEdyaWRDb250YWluZXIsXG4gIEhlYWRlclRocmVlLFxuICBIcixcbiAgVGFnLFxuICBUYWdMaXN0LFxuICBUaXRsZUNvbnRlbnQsXG4gIFV0aWxpdHlMaXN0LFxuICBJbWcsXG59IGZyb20gXCIuL1Byb2plY3RzU3R5bGVzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcbmltcG9ydCB7IENhcm91c2VsQ29udGFpbmVyIH0gZnJvbSBcIi4uL1RpbWVMaW5lL1RpbWVMaW5lU3R5bGVzXCI7XG5cblxuY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgcmV0dXJuIG5vZGUuc2Nyb2xsVG8oeyBsZWZ0LCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbn07XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuXG5cblxuXG4gcmV0dXJuICAoPFNlY3Rpb24gbm9wYWRkaW5nIGlkPVwicHJvamVjdHNcIj5cbiAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8U2VjdGlvblRpdGxlIG1haW4+UHJvamVjdHM8L1NlY3Rpb25UaXRsZT5cbiAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgIHtwcm9qZWN0cy5tYXAoKHgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q2Fyb3VzZWxDb250YWluZXIgcmVmPXtjYXJvdXNlbFJlZn0gb25TY3JvbGw9e2hhbmRsZVNjcm9sbH0+XG4gICAgICAgICAgICA8QmxvZ0NhcmQga2V5PXt4LmlkfT5cbiAgICAgICAgICAgICAgPEltZyBzcmM9e3guaW1hZ2V9IC8+XG4gICAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlclRocmVlIHRpdGxlPnt4LnRpdGxlfTwvSGVhZGVyVGhyZWU+XG4gICAgICAgICAgICAgICAgPEhyIC8+XG4gICAgICAgICAgICAgIDwvVGl0bGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2FyZEluZm8+IHt4LmRlc2NyaXB0aW9ufSA8L0NhcmRJbmZvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiB9fT4gU3RhY2sgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFRhZ0xpc3Q+XG4gICAgICAgICAgICAgICAgICB7eC50YWdzLm1hcCgodGFnLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFnIGtleT17aX0+IHt0YWd9IDwvVGFnPjtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvVGFnTGlzdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxVdGlsaXR5TGlzdD5cbiAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXt4LnZpc2l0fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIFZpc2l0XG4gICAgICAgICAgICAgICAgPC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3guc291cmNlfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIENvZGVcbiAgICAgICAgICAgICAgICA8L0V4dGVybmFsTGlua3M+XG4gICAgICAgICAgICAgIDwvVXRpbGl0eUxpc3Q+XG4gICAgICAgICAgICA8L0Jsb2dDYXJkPlxuICAgICAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0dyaWRDb250YWluZXI+XG4gIDwvU2VjdGlvbj4pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=