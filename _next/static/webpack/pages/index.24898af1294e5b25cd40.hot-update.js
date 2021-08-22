self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; }
/* harmony export */ });
/* harmony import */ var C_Users_Tothagata_Desktop_reactJs_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _ref;

var projects = [{
  title: "MemPic",
  description: "A Full Stack MERN Application that allows users to post interesting events that happened in their lives",
  image: "https://raw.githubusercontent.com/toth2000/memPic/master/screenshot/MemPic_SS.png",
  tags: ["Mongoose", "Express", "React", "Node", "Redux"],
  source: "https://github.com/toth2000/memPic",
  visit: "http://tothagata.me/memPic",
  id: 0
}, {
  title: "ChatBit",
  description: "A real-time chat room application",
  image: "https://raw.githubusercontent.com/toth2000/chatBit/master/screenshot/ChatBit_SS.png",
  tags: ["React", "Express", "Node", "SocketIo"],
  source: "https://github.com/toth2000/chatBit",
  visit: "https://tothagata.me/chatBit/",
  id: 1
}, {
  title: "CheeryMate",
  description: "An Android App to help people suffering from depression",
  image: "/images/cheerymate.png",
  tags: ["Android Studio", "Firebase", "Java"],
  source: "https://github.com/toth2000/CheeryMate",
  visit: "https://cheerymate.page.link/download",
  id: 2
}, {
  title: "Eco Alarmist App",
  description: "An Android app developed for the volunteers of the local NGO. The app helps the users to increase productivity.",
  image: "/images/ecoalarmist.png",
  tags: ["Android Studio", "Firebase", "Java"],
  source: "http://www.ecoalarmist.com/",
  visit: "https://ecoalarmist.page.link/download",
  id: 3
}, (_ref = {
  title: "Trackify",
  description: "Trackify is an Android App that predicts when a vehicle will require servicing and the type of servicing.",
  image: "https://raw.githubusercontent.com/toth2000/Responsive-Web-development/master/screenshot/omnifood_SS.png",
  tags: ["Android Studio", "Firebase"],
  source: "https://github.com/toth2000/trackify",
  visit: "https://devpost.com/software/trackify-gsal28"
}, (0,C_Users_Tothagata_Desktop_reactJs_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "image", "https://raw.githubusercontent.com/toth2000/Responsive-Web-development/master/screenshot/omnifood_SS.png"), (0,C_Users_Tothagata_Desktop_reactJs_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "tags", ["HTML", "CSS"]), (0,C_Users_Tothagata_Desktop_reactJs_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "source", "https://github.com/toth2000/Responsive-Web-development"), (0,C_Users_Tothagata_Desktop_reactJs_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "visit", "https://tothagata.me/Responsive-Web-development/"), (0,C_Users_Tothagata_Desktop_reactJs_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "id", 4), _ref), {
  title: "OmniFood",
  description: "A simple responsive website",
  id: 5
}]; // export const TimeLineData = [
//   { year: 2019, text: 'Started my journey', },
//   { year: 2020, text: 'My First Hackathon', }
// ];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLFFBRFQ7QUFFRUMsYUFBVyxFQUNULHlHQUhKO0FBSUVDLE9BQUssRUFDSCxtRkFMSjtBQU1FQyxNQUFJLEVBQUUsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixPQUF4QixFQUFpQyxNQUFqQyxFQUF5QyxPQUF6QyxDQU5SO0FBT0VDLFFBQU0sRUFBRSxvQ0FQVjtBQVFFQyxPQUFLLEVBQUUsNEJBUlQ7QUFTRUMsSUFBRSxFQUFFO0FBVE4sQ0FEc0IsRUFZdEI7QUFDRU4sT0FBSyxFQUFFLFNBRFQ7QUFFRUMsYUFBVyxFQUFFLG1DQUZmO0FBR0VDLE9BQUssRUFDSCxxRkFKSjtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixNQUFyQixFQUE2QixVQUE3QixDQUxSO0FBTUVDLFFBQU0sRUFBRSxxQ0FOVjtBQU9FQyxPQUFLLEVBQUUsK0JBUFQ7QUFRRUMsSUFBRSxFQUFFO0FBUk4sQ0Fac0IsRUFzQnRCO0FBQ0VOLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFBRSx5REFGZjtBQUdFQyxPQUFLLEVBQ0gsd0JBSko7QUFLRUMsTUFBSSxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsd0NBTlY7QUFPRUMsT0FBSyxFQUFFLHVDQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBdEJzQixFQWdDdEI7QUFDRU4sT0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVcsRUFDVCxpSEFISjtBQUlFQyxPQUFLLEVBQUUseUJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsNkJBTlY7QUFPRUMsT0FBSyxFQUFFLHdDQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBaENzQjtBQTJDcEJOLE9BQUssRUFBRSxVQTNDYTtBQTRDcEJDLGFBQVcsRUFBRSwyR0E1Q087QUE2Q3BCQyxPQUFLLEVBQ0gseUdBOUNrQjtBQStDcEJDLE1BQUksRUFBRSxDQUFDLGdCQUFELEVBQW1CLFVBQW5CLENBL0NjO0FBZ0RwQkMsUUFBTSxFQUFFLHNDQWhEWTtBQWlEcEJDLE9BQUssRUFBRTtBQWpEYSw2SkFtRGxCLHlHQW5Ea0IsNEpBb0RkLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FwRGMsOEpBcURaLHdEQXJEWSw2SkFzRGIsa0RBdERhLDBKQXVEaEIsQ0F2RGdCLFVBeUR0QjtBQUNFTCxPQUFLLEVBQUUsVUFEVDtBQUVFQyxhQUFXLEVBQUUsNkJBRmY7QUFHRUssSUFBRSxFQUFFO0FBSE4sQ0F6RHNCLENBQWpCLEMsQ0FnRVA7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjQ4OThhZjEyOTRlNWIyNWNkNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIk1lbVBpY1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIEZ1bGwgU3RhY2sgTUVSTiBBcHBsaWNhdGlvbiB0aGF0IGFsbG93cyB1c2VycyB0byBwb3N0IGludGVyZXN0aW5nIGV2ZW50cyB0aGF0IGhhcHBlbmVkIGluIHRoZWlyIGxpdmVzXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90b3RoMjAwMC9tZW1QaWMvbWFzdGVyL3NjcmVlbnNob3QvTWVtUGljX1NTLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIk1vbmdvb3NlXCIsIFwiRXhwcmVzc1wiLCBcIlJlYWN0XCIsIFwiTm9kZVwiLCBcIlJlZHV4XCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2dpdGh1Yi5jb20vdG90aDIwMDAvbWVtUGljXCIsXG4gICAgdmlzaXQ6IFwiaHR0cDovL3RvdGhhZ2F0YS5tZS9tZW1QaWNcIixcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNoYXRCaXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHJlYWwtdGltZSBjaGF0IHJvb20gYXBwbGljYXRpb25cIixcbiAgICBpbWFnZTpcbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RvdGgyMDAwL2NoYXRCaXQvbWFzdGVyL3NjcmVlbnNob3QvQ2hhdEJpdF9TUy5wbmdcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIkV4cHJlc3NcIiwgXCJOb2RlXCIsIFwiU29ja2V0SW9cIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90b3RoMjAwMC9jaGF0Qml0XCIsXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly90b3RoYWdhdGEubWUvY2hhdEJpdC9cIixcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNoZWVyeU1hdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbiBBbmRyb2lkIEFwcCB0byBoZWxwIHBlb3BsZSBzdWZmZXJpbmcgZnJvbSBkZXByZXNzaW9uXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcIi9pbWFnZXMvY2hlZXJ5bWF0ZS5wbmdcIixcbiAgICB0YWdzOiBbXCJBbmRyb2lkIFN0dWRpb1wiLCBcIkZpcmViYXNlXCIsIFwiSmF2YVwiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RvdGgyMDAwL0NoZWVyeU1hdGVcIixcbiAgICB2aXNpdDogXCJodHRwczovL2NoZWVyeW1hdGUucGFnZS5saW5rL2Rvd25sb2FkXCIsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJFY28gQWxhcm1pc3QgQXBwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFuIEFuZHJvaWQgYXBwIGRldmVsb3BlZCBmb3IgdGhlIHZvbHVudGVlcnMgb2YgdGhlIGxvY2FsIE5HTy4gVGhlIGFwcCBoZWxwcyB0aGUgdXNlcnMgdG8gaW5jcmVhc2UgcHJvZHVjdGl2aXR5LlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvZWNvYWxhcm1pc3QucG5nXCIsXG4gICAgdGFnczogW1wiQW5kcm9pZCBTdHVkaW9cIiwgXCJGaXJlYmFzZVwiLCBcIkphdmFcIl0sXG4gICAgc291cmNlOiBcImh0dHA6Ly93d3cuZWNvYWxhcm1pc3QuY29tL1wiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZWNvYWxhcm1pc3QucGFnZS5saW5rL2Rvd25sb2FkXCIsXG4gICAgaWQ6IDMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUcmFja2lmeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYWNraWZ5IGlzIGFuIEFuZHJvaWQgQXBwIHRoYXQgcHJlZGljdHMgd2hlbiBhIHZlaGljbGUgd2lsbCByZXF1aXJlIHNlcnZpY2luZyBhbmQgdGhlIHR5cGUgb2Ygc2VydmljaW5nLlwiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdG90aDIwMDAvUmVzcG9uc2l2ZS1XZWItZGV2ZWxvcG1lbnQvbWFzdGVyL3NjcmVlbnNob3Qvb21uaWZvb2RfU1MucG5nXCIsXG4gICAgdGFnczogW1wiQW5kcm9pZCBTdHVkaW9cIiwgXCJGaXJlYmFzZVwiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RvdGgyMDAwL3RyYWNraWZ5XCIsXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9kZXZwb3N0LmNvbS9zb2Z0d2FyZS90cmFja2lmeS1nc2FsMjhcIixcbiAgICBpbWFnZTpcbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RvdGgyMDAwL1Jlc3BvbnNpdmUtV2ViLWRldmVsb3BtZW50L21hc3Rlci9zY3JlZW5zaG90L29tbmlmb29kX1NTLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIkhUTUxcIiwgXCJDU1NcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90b3RoMjAwMC9SZXNwb25zaXZlLVdlYi1kZXZlbG9wbWVudFwiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vdG90aGFnYXRhLm1lL1Jlc3BvbnNpdmUtV2ViLWRldmVsb3BtZW50L1wiLFxuICAgIGlkOiA0LFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiT21uaUZvb2RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNpbXBsZSByZXNwb25zaXZlIHdlYnNpdGVcIixcbiAgICBpZDogNSxcbiAgfSxcbl07XG5cbi8vIGV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4vLyAgIHsgeWVhcjogMjAxOSwgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScsIH0sXG4vLyAgIHsgeWVhcjogMjAyMCwgdGV4dDogJ015IEZpcnN0IEhhY2thdGhvbicsIH1cbi8vIF07XG4iXSwic291cmNlUm9vdCI6IiJ9