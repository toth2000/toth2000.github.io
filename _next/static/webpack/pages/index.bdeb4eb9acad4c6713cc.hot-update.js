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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsic2Nyb2xsIiwibm9kZSIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiUHJvamVjdHMiLCJoYW5kbGVTY3JvbGwiLCJjYXJvdXNlbFJlZiIsImN1cnJlbnQiLCJpbmRleCIsIk1hdGgiLCJyb3VuZCIsInNjcm9sbExlZnQiLCJzY3JvbGxXaWR0aCIsIlRpbWVMaW5lRGF0YSIsImxlbmd0aCIsInNldEFjdGl2ZUl0ZW0iLCJ1c2VSZWYiLCJwcm9qZWN0cyIsIngiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJ0YWdzIiwibWFwIiwidGFnIiwiaSIsInZpc2l0Iiwic291cmNlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBYUE7QUFLQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUM3QixTQUFPRCxJQUFJLENBQUNFLFFBQUwsQ0FBYztBQUFFRCxRQUFJLEVBQUpBLElBQUY7QUFBUUUsWUFBUSxFQUFFO0FBQWxCLEdBQWQsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUlDLFdBQVcsQ0FBQ0MsT0FBaEIsRUFBeUI7QUFDdkIsVUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDWEosV0FBVyxDQUFDQyxPQUFaLENBQW9CSSxVQUFwQixJQUNFTCxXQUFXLENBQUNDLE9BQVosQ0FBb0JLLFdBQXBCLEdBQWtDLEdBRHBDLENBQUQsR0FFRUMsWUFBWSxDQUFDQyxNQUhILENBQWQ7QUFLQUMsbUJBQWEsQ0FBQ1AsS0FBRCxDQUFiO0FBQ0Q7QUFDRixHQVREOztBQVdBLE1BQU1GLFdBQVcsR0FBR1UsNkNBQU0sRUFBMUI7QUFFQSxzQkFDRSw4REFBQyw2REFBRDtBQUFTLGFBQVMsTUFBbEI7QUFBbUIsTUFBRSxFQUFDLFVBQXRCO0FBQUEsNEJBQ0UsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsa0VBQUQ7QUFBYyxVQUFJLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQywwREFBRDtBQUFBLGdCQUNHQyw4REFBQSxDQUFhLFVBQUNDLENBQUQsRUFBTztBQUNuQiw0QkFDRSw4REFBQyx1RUFBRDtBQUFtQixhQUFHLEVBQUVaLFdBQXhCO0FBQXFDLGtCQUFRLEVBQUVELFlBQS9DO0FBQUEsaUNBQ0UsOERBQUMscURBQUQ7QUFBQSxvQ0FDRSw4REFBQyxnREFBRDtBQUFLLGlCQUFHLEVBQUVhLENBQUMsQ0FBQ0M7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMseURBQUQ7QUFBQSxzQ0FDRSw4REFBQyx3REFBRDtBQUFhLHFCQUFLLE1BQWxCO0FBQUEsMEJBQW9CRCxDQUFDLENBQUNFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQU1FLDhEQUFDLHFEQUFEO0FBQUEsOEJBQVlGLENBQUMsQ0FBQ0csV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsZUFPRTtBQUFBLHNDQUNFO0FBQUsscUJBQUssRUFBRTtBQUFFQywyQkFBUyxFQUFFO0FBQWIsaUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRSw4REFBQyxvREFBRDtBQUFBLDBCQUNHSixDQUFDLENBQUNLLElBQUYsQ0FBT0MsR0FBUCxDQUFXLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQ3RCLHNDQUFPLDhEQUFDLGdEQUFEO0FBQUEsb0NBQWVELEdBQWY7QUFBQSxxQkFBVUMsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBQ0QsaUJBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQWVFLDhEQUFDLHdEQUFEO0FBQUEsc0NBQ0UsOERBQUMsMERBQUQ7QUFBZSxvQkFBSSxFQUFFUixDQUFDLENBQUNTLEtBQXZCO0FBQThCLHNCQUFNLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRSw4REFBQywwREFBRDtBQUFlLG9CQUFJLEVBQUVULENBQUMsQ0FBQ1UsTUFBdkI7QUFBK0Isc0JBQU0sRUFBQyxRQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkY7QUFBQSxhQUFlVixDQUFDLENBQUNXLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBNEJELE9BN0JBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0NELENBcEREOztHQUFNekIsUTs7S0FBQUEsUTtBQXNETiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZGViNGViOWFjYWQ0YzY3MTNjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBCbG9nQ2FyZCxcbiAgQ2FyZEluZm8sXG4gIEV4dGVybmFsTGlua3MsXG4gIEdyaWRDb250YWluZXIsXG4gIEhlYWRlclRocmVlLFxuICBIcixcbiAgVGFnLFxuICBUYWdMaXN0LFxuICBUaXRsZUNvbnRlbnQsXG4gIFV0aWxpdHlMaXN0LFxuICBJbWcsXG59IGZyb20gXCIuL1Byb2plY3RzU3R5bGVzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcbmltcG9ydCB7IENhcm91c2VsQ29udGFpbmVyIH0gZnJvbSBcIi4uL1RpbWVMaW5lL1RpbWVMaW5lU3R5bGVzXCI7XG5cbmNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XG4gIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG59O1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoXG4gICAgICAgIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgL1xuICAgICAgICAgIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKlxuICAgICAgICAgIFRpbWVMaW5lRGF0YS5sZW5ndGhcbiAgICAgICk7XG4gICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIG5vcGFkZGluZyBpZD1cInByb2plY3RzXCI+XG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICAgIDxTZWN0aW9uVGl0bGUgbWFpbj5Qcm9qZWN0czwvU2VjdGlvblRpdGxlPlxuICAgICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxuICAgICAgICAgICAgICA8QmxvZ0NhcmQga2V5PXt4LmlkfT5cbiAgICAgICAgICAgICAgICA8SW1nIHNyYz17eC5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8VGl0bGVDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPEhlYWRlclRocmVlIHRpdGxlPnt4LnRpdGxlfTwvSGVhZGVyVGhyZWU+XG4gICAgICAgICAgICAgICAgICA8SHIgLz5cbiAgICAgICAgICAgICAgICA8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZEluZm8+IHt4LmRlc2NyaXB0aW9ufSA8L0NhcmRJbmZvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyNXB4XCIgfX0+IFN0YWNrIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFRhZ0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIHt4LnRhZ3MubWFwKCh0YWcsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRhZyBrZXk9e2l9PiB7dGFnfSA8L1RhZz47XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9UYWdMaXN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxVdGlsaXR5TGlzdD5cbiAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3gudmlzaXR9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICBWaXNpdFxuICAgICAgICAgICAgICAgICAgPC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgICAgICAgICAgPEV4dGVybmFsTGlua3MgaHJlZj17eC5zb3VyY2V9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICBDb2RlXG4gICAgICAgICAgICAgICAgICA8L0V4dGVybmFsTGlua3M+XG4gICAgICAgICAgICAgICAgPC9VdGlsaXR5TGlzdD5cbiAgICAgICAgICAgICAgPC9CbG9nQ2FyZD5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9