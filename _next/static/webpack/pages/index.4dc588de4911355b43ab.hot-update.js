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







var handleScroll = function handleScroll() {
  if (carouselRef.current) {
    var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * TimeLineData.length);
    setActiveItem(index);
  }
};

var Projects = function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    nopadding: true,
    id: "projects",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      main: true,
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
              lineNumber: 47,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
                title: true,
                children: x.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
              children: [" ", x.description, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginTop: "25px"
                },
                children: " Stack "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
                children: x.tags.map(function (tag, i) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                    children: [" ", tag, " "]
                  }, i, true, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 26
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
                href: x.visit,
                target: "_blank",
                children: "Visit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
                href: x.source,
                target: "_blank",
                children: "Code"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 13
            }, _this)]
          }, x.id, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiaGFuZGxlU2Nyb2xsIiwiY2Fyb3VzZWxSZWYiLCJjdXJyZW50IiwiaW5kZXgiLCJNYXRoIiwicm91bmQiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiLCJUaW1lTGluZURhdGEiLCJsZW5ndGgiLCJzZXRBY3RpdmVJdGVtIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsIngiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJ0YWdzIiwibWFwIiwidGFnIiwiaSIsInZpc2l0Iiwic291cmNlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFhQTtBQUtBO0FBQ0E7O0FBR0UsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixNQUFJQyxXQUFXLENBQUNDLE9BQWhCLEVBQXlCO0FBQ3ZCLFFBQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQ1hKLFdBQVcsQ0FBQ0MsT0FBWixDQUFvQkksVUFBcEIsSUFDRUwsV0FBVyxDQUFDQyxPQUFaLENBQW9CSyxXQUFwQixHQUFrQyxHQURwQyxDQUFELEdBRUVDLFlBQVksQ0FBQ0MsTUFISCxDQUFkO0FBT0FDLGlCQUFhLENBQUNQLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsQ0FYRDs7QUFhRixJQUFNUSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLHNCQUNmLDhEQUFDLDZEQUFEO0FBQVMsYUFBUyxNQUFsQjtBQUFtQixNQUFFLEVBQUMsVUFBdEI7QUFBQSw0QkFDRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxrRUFBRDtBQUFjLFVBQUksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLDBEQUFEO0FBQUEsZ0JBQ0dDLDhEQUFBLENBQWEsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25CLDRCQUNFLDhEQUFDLHVFQUFEO0FBQW1CLGFBQUcsRUFBRVosV0FBeEI7QUFBcUMsa0JBQVEsRUFBRUQsWUFBL0M7QUFBQSxpQ0FDQSw4REFBQyxxREFBRDtBQUFBLG9DQUNFLDhEQUFDLGdEQUFEO0FBQUssaUJBQUcsRUFBRWEsQ0FBQyxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyx5REFBRDtBQUFBLHNDQUNFLDhEQUFDLHdEQUFEO0FBQWEscUJBQUssTUFBbEI7QUFBQSwwQkFBb0JELENBQUMsQ0FBQ0U7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBTUUsOERBQUMscURBQUQ7QUFBQSw4QkFBWUYsQ0FBQyxDQUFDRyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FO0FBQUEsc0NBQ0U7QUFBSyxxQkFBSyxFQUFFO0FBQUVDLDJCQUFTLEVBQUU7QUFBYixpQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLDhEQUFDLG9EQUFEO0FBQUEsMEJBQ0dKLENBQUMsQ0FBQ0ssSUFBRixDQUFPQyxHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDdEIsc0NBQU8sOERBQUMsZ0RBQUQ7QUFBQSxvQ0FBZUQsR0FBZjtBQUFBLHFCQUFVQyxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVA7QUFDRCxpQkFGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBZUUsOERBQUMsd0RBQUQ7QUFBQSxzQ0FDRSw4REFBQywwREFBRDtBQUFlLG9CQUFJLEVBQUVSLENBQUMsQ0FBQ1MsS0FBdkI7QUFBOEIsc0JBQU0sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFLDhEQUFDLDBEQUFEO0FBQWUsb0JBQUksRUFBRVQsQ0FBQyxDQUFDVSxNQUF2QjtBQUErQixzQkFBTSxFQUFDLFFBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBLGFBQWVWLENBQUMsQ0FBQ1csRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUE0QkQsT0E3QkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGU7QUFBQSxDQUFqQjs7S0FBTWIsUTtBQXVDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZGM1ODhkZTQ5MTEzNTViNDNhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBCbG9nQ2FyZCxcbiAgQ2FyZEluZm8sXG4gIEV4dGVybmFsTGlua3MsXG4gIEdyaWRDb250YWluZXIsXG4gIEhlYWRlclRocmVlLFxuICBIcixcbiAgVGFnLFxuICBUYWdMaXN0LFxuICBUaXRsZUNvbnRlbnQsXG4gIFV0aWxpdHlMaXN0LFxuICBJbWcsXG59IGZyb20gXCIuL1Byb2plY3RzU3R5bGVzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcbmltcG9ydCB7IENhcm91c2VsQ29udGFpbmVyIH0gZnJvbSBcIi4uL1RpbWVMaW5lL1RpbWVMaW5lU3R5bGVzXCI7XG5cblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChcbiAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXG4gICAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqXG4gICAgICAgICAgVGltZUxpbmVEYXRhLmxlbmd0aFxuICAgICAgKTtcblxuICAgICAgXG4gICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgICB9XG4gIH07XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuICA8U2VjdGlvbiBub3BhZGRpbmcgaWQ9XCJwcm9qZWN0c1wiPlxuICAgIDxTZWN0aW9uRGl2aWRlciAvPlxuICAgIDxTZWN0aW9uVGl0bGUgbWFpbj5Qcm9qZWN0czwvU2VjdGlvblRpdGxlPlxuICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAge3Byb2plY3RzLm1hcCgoeCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cbiAgICAgICAgICA8QmxvZ0NhcmQga2V5PXt4LmlkfT5cbiAgICAgICAgICAgIDxJbWcgc3JjPXt4LmltYWdlfSAvPlxuICAgICAgICAgICAgPFRpdGxlQ29udGVudD5cbiAgICAgICAgICAgICAgPEhlYWRlclRocmVlIHRpdGxlPnt4LnRpdGxlfTwvSGVhZGVyVGhyZWU+XG4gICAgICAgICAgICAgIDxIciAvPlxuICAgICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZEluZm8+IHt4LmRlc2NyaXB0aW9ufSA8L0NhcmRJbmZvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjVweFwiIH19PiBTdGFjayA8L2Rpdj5cbiAgICAgICAgICAgICAgPFRhZ0xpc3Q+XG4gICAgICAgICAgICAgICAge3gudGFncy5tYXAoKHRhZywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUYWcga2V5PXtpfT4ge3RhZ30gPC9UYWc+O1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L1RhZ0xpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxVdGlsaXR5TGlzdD5cbiAgICAgICAgICAgICAgPEV4dGVybmFsTGlua3MgaHJlZj17eC52aXNpdH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgVmlzaXRcbiAgICAgICAgICAgICAgPC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXt4LnNvdXJjZX0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgQ29kZVxuICAgICAgICAgICAgICA8L0V4dGVybmFsTGlua3M+XG4gICAgICAgICAgICA8L1V0aWxpdHlMaXN0PlxuICAgICAgICAgIDwvQmxvZ0NhcmQ+XG4gICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9HcmlkQ29udGFpbmVyPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=