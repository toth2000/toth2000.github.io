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
    _this = undefined,
    _s = $RefreshSig$();







var scroll = function scroll(node, left) {
  return node.scrollTo({
    left: left,
    behavior: "smooth"
  });
};

var Projects = function Projects() {
  _s();

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * TimeLineData.length);
      setActiveItem(index);
    }
  };

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    nopadding: true,
    id: "projects",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      main: true,
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLine_TimeLineStyles__WEBPACK_IMPORTED_MODULE_5__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
            src: x.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
              title: true,
              children: x.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
            children: [" ", x.description, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                marginTop: "25px"
              },
              children: " Stack "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
              children: x.tags.map(function (tag, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                  children: [" ", tag, " "]
                }, i, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 30
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
              href: x.visit,
              target: "_blank",
              children: "Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
              href: x.source,
              target: "_blank",
              children: "Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, _this)]
        }, x.id, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s(Projects, "tFDqjupRFhy2WgqEeSf1lC9Fk5g=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsic2Nyb2xsIiwibm9kZSIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiUHJvamVjdHMiLCJoYW5kbGVTY3JvbGwiLCJjYXJvdXNlbFJlZiIsImN1cnJlbnQiLCJpbmRleCIsIk1hdGgiLCJyb3VuZCIsInNjcm9sbExlZnQiLCJzY3JvbGxXaWR0aCIsIlRpbWVMaW5lRGF0YSIsImxlbmd0aCIsInNldEFjdGl2ZUl0ZW0iLCJ1c2VSZWYiLCJwcm9qZWN0cyIsIngiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJ0YWdzIiwibWFwIiwidGFnIiwiaSIsInZpc2l0Iiwic291cmNlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBYUE7QUFLQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUM3QixTQUFPRCxJQUFJLENBQUNFLFFBQUwsQ0FBYztBQUFFRCxRQUFJLEVBQUpBLElBQUY7QUFBUUUsWUFBUSxFQUFFO0FBQWxCLEdBQWQsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUlDLFdBQVcsQ0FBQ0MsT0FBaEIsRUFBeUI7QUFDdkIsVUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDWEosV0FBVyxDQUFDQyxPQUFaLENBQW9CSSxVQUFwQixJQUNFTCxXQUFXLENBQUNDLE9BQVosQ0FBb0JLLFdBQXBCLEdBQWtDLEdBRHBDLENBQUQsR0FFRUMsWUFBWSxDQUFDQyxNQUhILENBQWQ7QUFLQUMsbUJBQWEsQ0FBQ1AsS0FBRCxDQUFiO0FBQ0Q7QUFDRixHQVREOztBQVdBLE1BQU1GLFdBQVcsR0FBR1UsNkNBQU0sRUFBMUI7QUFFQSxzQkFDRSw4REFBQyw2REFBRDtBQUFTLGFBQVMsTUFBbEI7QUFBbUIsTUFBRSxFQUFDLFVBQXRCO0FBQUEsNEJBQ0UsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsa0VBQUQ7QUFBYyxVQUFJLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHSSw4REFBQyx1RUFBRDtBQUFtQixTQUFHLEVBQUVWLFdBQXhCO0FBQXFDLGNBQVEsRUFBRUQsWUFBL0M7QUFBQSxnQkFDQ1ksOERBQUEsQ0FBYSxVQUFDQyxDQUFELEVBQU87QUFDbkIsNEJBRUksOERBQUMscURBQUQ7QUFBQSxrQ0FDRSw4REFBQyxnREFBRDtBQUFLLGVBQUcsRUFBRUEsQ0FBQyxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyx5REFBRDtBQUFBLG9DQUNFLDhEQUFDLHdEQUFEO0FBQWEsbUJBQUssTUFBbEI7QUFBQSx3QkFBb0JELENBQUMsQ0FBQ0U7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBTUUsOERBQUMscURBQUQ7QUFBQSw0QkFBWUYsQ0FBQyxDQUFDRyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FO0FBQUEsb0NBQ0U7QUFBSyxtQkFBSyxFQUFFO0FBQUVDLHlCQUFTLEVBQUU7QUFBYixlQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFBQSx3QkFDR0osQ0FBQyxDQUFDSyxJQUFGLENBQU9DLEdBQVAsQ0FBVyxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUN0QixvQ0FBTyw4REFBQyxnREFBRDtBQUFBLGtDQUFlRCxHQUFmO0FBQUEsbUJBQVVDLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBUDtBQUNELGVBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQWVFLDhEQUFDLHdEQUFEO0FBQUEsb0NBQ0UsOERBQUMsMERBQUQ7QUFBZSxrQkFBSSxFQUFFUixDQUFDLENBQUNTLEtBQXZCO0FBQThCLG9CQUFNLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRSw4REFBQywwREFBRDtBQUFlLGtCQUFJLEVBQUVULENBQUMsQ0FBQ1UsTUFBdkI7QUFBK0Isb0JBQU0sRUFBQyxRQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkY7QUFBQSxXQUFlVixDQUFDLENBQUNXLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUEyQkQsT0E1QkE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0FuREQ7O0dBQU16QixROztLQUFBQSxRO0FBcUROLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRjOGNkNjYxYWYzZmI2MDk4ODIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEJsb2dDYXJkLFxuICBDYXJkSW5mbyxcbiAgRXh0ZXJuYWxMaW5rcyxcbiAgR3JpZENvbnRhaW5lcixcbiAgSGVhZGVyVGhyZWUsXG4gIEhyLFxuICBUYWcsXG4gIFRhZ0xpc3QsXG4gIFRpdGxlQ29udGVudCxcbiAgVXRpbGl0eUxpc3QsXG4gIEltZyxcbn0gZnJvbSBcIi4vUHJvamVjdHNTdHlsZXNcIjtcbmltcG9ydCB7XG4gIFNlY3Rpb24sXG4gIFNlY3Rpb25EaXZpZGVyLFxuICBTZWN0aW9uVGl0bGUsXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ2Fyb3VzZWxDb250YWluZXIgfSBmcm9tIFwiLi4vVGltZUxpbmUvVGltZUxpbmVTdHlsZXNcIjtcblxuY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgcmV0dXJuIG5vZGUuc2Nyb2xsVG8oeyBsZWZ0LCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbn07XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChcbiAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXG4gICAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqXG4gICAgICAgICAgVGltZUxpbmVEYXRhLmxlbmd0aFxuICAgICAgKTtcbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gbm9wYWRkaW5nIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxTZWN0aW9uRGl2aWRlciAvPlxuICAgICAgPFNlY3Rpb25UaXRsZSBtYWluPlByb2plY3RzPC9TZWN0aW9uVGl0bGU+XG4gICAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cbiAgICAgICAge3Byb2plY3RzLm1hcCgoeCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEJsb2dDYXJkIGtleT17eC5pZH0+XG4gICAgICAgICAgICAgICAgPEltZyBzcmM9e3guaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgPFRpdGxlQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT57eC50aXRsZX08L0hlYWRlclRocmVlPlxuICAgICAgICAgICAgICAgICAgPEhyIC8+XG4gICAgICAgICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmRJbmZvPiB7eC5kZXNjcmlwdGlvbn0gPC9DYXJkSW5mbz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjVweFwiIH19PiBTdGFjayA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxUYWdMaXN0PlxuICAgICAgICAgICAgICAgICAgICB7eC50YWdzLm1hcCgodGFnLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUYWcga2V5PXtpfT4ge3RhZ30gPC9UYWc+O1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvVGFnTGlzdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VXRpbGl0eUxpc3Q+XG4gICAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXt4LnZpc2l0fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgVmlzaXRcbiAgICAgICAgICAgICAgICAgIDwvRXh0ZXJuYWxMaW5rcz5cbiAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3guc291cmNlfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29kZVxuICAgICAgICAgICAgICAgICAgPC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgICAgICAgIDwvVXRpbGl0eUxpc3Q+XG4gICAgICAgICAgICAgIDwvQmxvZ0NhcmQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9