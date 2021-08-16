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
}, (_ref = {
  title: "CheeryMate",
  description: "Android App to help people suffering from depression",
  image: "https://cdn.discordapp.com/attachments/842298350916993068/848253057350500410/logo.png"
}, (0,C_Users_Tothagata_Desktop_reactJs_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "image", "https://cdn.discordapp.com/attachments/842298350916993068/848253057350500410/logo.png"), (0,C_Users_Tothagata_Desktop_reactJs_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "tags", ["Android Studio", "Firebase", "Java"]), (0,C_Users_Tothagata_Desktop_reactJs_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "source", "https://github.com/toth2000/CheeryMate"), (0,C_Users_Tothagata_Desktop_reactJs_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "visit", "https://cheerymate.page.link/download"), (0,C_Users_Tothagata_Desktop_reactJs_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "id", 2), _ref), {
  title: "Eco Alarmist App",
  description: "An Android app developed for the volunteers of the local NGO. The app helps the users to increase productivity.",
  image: "/images/ecoalarmist.png",
  tags: ["Android Studio", "Firebase", "Java"],
  source: "http://www.ecoalarmist.com/",
  visit: "https://ecoalarmist.page.link/download",
  id: 3
}, {
  title: "OmniFood",
  description: "A simple responsive website",
  image: "https://raw.githubusercontent.com/toth2000/Responsive-Web-development/master/screenshot/omnifood_SS.png",
  tags: ["HTML", "CSS"],
  source: "https://github.com/toth2000/Responsive-Web-development",
  visit: "https://tothagata.me/Responsive-Web-development/",
  id: 4
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLFFBRFQ7QUFFRUMsYUFBVyxFQUNULHlHQUhKO0FBSUVDLE9BQUssRUFDSCxtRkFMSjtBQU1FQyxNQUFJLEVBQUUsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixPQUF4QixFQUFpQyxNQUFqQyxFQUF5QyxPQUF6QyxDQU5SO0FBT0VDLFFBQU0sRUFBRSxvQ0FQVjtBQVFFQyxPQUFLLEVBQUUsNEJBUlQ7QUFTRUMsSUFBRSxFQUFFO0FBVE4sQ0FEc0IsRUFZdEI7QUFDRU4sT0FBSyxFQUFFLFNBRFQ7QUFFRUMsYUFBVyxFQUFFLG1DQUZmO0FBR0VDLE9BQUssRUFDSCxxRkFKSjtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixNQUFyQixFQUE2QixVQUE3QixDQUxSO0FBTUVDLFFBQU0sRUFBRSxxQ0FOVjtBQU9FQyxPQUFLLEVBQUUsK0JBUFQ7QUFRRUMsSUFBRSxFQUFFO0FBUk4sQ0Fac0I7QUF1QnBCTixPQUFLLEVBQUUsWUF2QmE7QUF3QnBCQyxhQUFXLEVBQUUsc0RBeEJPO0FBeUJwQkMsT0FBSyxFQUFFO0FBekJhLDZKQTBCYix1RkExQmEsNEpBMkJaLENBQUMsZ0JBQUQsRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsQ0EzQlksOEpBNEJaLHdDQTVCWSw2SkE2QmIsdUNBN0JhLDBKQThCaEIsQ0E5QmdCLFVBZ0N0QjtBQUNFRixPQUFLLEVBQUUsa0JBRFQ7QUFFRUMsYUFBVyxFQUNULGlIQUhKO0FBSUVDLE9BQUssRUFBRSx5QkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixVQUFuQixFQUErQixNQUEvQixDQUxSO0FBTUVDLFFBQU0sRUFBRSw2QkFOVjtBQU9FQyxPQUFLLEVBQUUsd0NBUFQ7QUFRRUMsSUFBRSxFQUFFO0FBUk4sQ0FoQ3NCLEVBMEN0QjtBQUNFTixPQUFLLEVBQUUsVUFEVDtBQUVFQyxhQUFXLEVBQUUsNkJBRmY7QUFHRUMsT0FBSyxFQUNILHlHQUpKO0FBS0VDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULENBTFI7QUFNRUMsUUFBTSxFQUFFLHdEQU5WO0FBT0VDLE9BQUssRUFBRSxrREFQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQTFDc0IsQ0FBakIsQyxDQXNEUDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MmZjYWJjZWNiMDBmYWU4NjhkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiTWVtUGljXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgRnVsbCBTdGFjayBNRVJOIEFwcGxpY2F0aW9uIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHBvc3QgaW50ZXJlc3RpbmcgZXZlbnRzIHRoYXQgaGFwcGVuZWQgaW4gdGhlaXIgbGl2ZXNcIixcbiAgICBpbWFnZTpcbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RvdGgyMDAwL21lbVBpYy9tYXN0ZXIvc2NyZWVuc2hvdC9NZW1QaWNfU1MucG5nXCIsXG4gICAgdGFnczogW1wiTW9uZ29vc2VcIiwgXCJFeHByZXNzXCIsIFwiUmVhY3RcIiwgXCJOb2RlXCIsIFwiUmVkdXhcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90b3RoMjAwMC9tZW1QaWNcIixcbiAgICB2aXNpdDogXCJodHRwOi8vdG90aGFnYXRhLm1lL21lbVBpY1wiLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ2hhdEJpdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgcmVhbC10aW1lIGNoYXQgcm9vbSBhcHBsaWNhdGlvblwiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdG90aDIwMDAvY2hhdEJpdC9tYXN0ZXIvc2NyZWVuc2hvdC9DaGF0Qml0X1NTLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiRXhwcmVzc1wiLCBcIk5vZGVcIiwgXCJTb2NrZXRJb1wiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RvdGgyMDAwL2NoYXRCaXRcIixcbiAgICB2aXNpdDogXCJodHRwczovL3RvdGhhZ2F0YS5tZS9jaGF0Qml0L1wiLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ2hlZXJ5TWF0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFuZHJvaWQgQXBwIHRvIGhlbHAgcGVvcGxlIHN1ZmZlcmluZyBmcm9tIGRlcHJlc3Npb25cIixcbiAgICBpbWFnZTogXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy84NDIyOTgzNTA5MTY5OTMwNjgvODQ4MjUzMDU3MzUwNTAwNDEwL2xvZ28ucG5nXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvODQyMjk4MzUwOTE2OTkzMDY4Lzg0ODI1MzA1NzM1MDUwMDQxMC9sb2dvLnBuZ1wiLFxuICAgICAgdGFnczogW1wiQW5kcm9pZCBTdHVkaW9cIiwgXCJGaXJlYmFzZVwiLCBcIkphdmFcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90b3RoMjAwMC9DaGVlcnlNYXRlXCIsXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9jaGVlcnltYXRlLnBhZ2UubGluay9kb3dubG9hZFwiLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRWNvIEFsYXJtaXN0IEFwcFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBbiBBbmRyb2lkIGFwcCBkZXZlbG9wZWQgZm9yIHRoZSB2b2x1bnRlZXJzIG9mIHRoZSBsb2NhbCBOR08uIFRoZSBhcHAgaGVscHMgdGhlIHVzZXJzIHRvIGluY3JlYXNlIHByb2R1Y3Rpdml0eS5cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2Vjb2FsYXJtaXN0LnBuZ1wiLFxuICAgIHRhZ3M6IFtcIkFuZHJvaWQgU3R1ZGlvXCIsIFwiRmlyZWJhc2VcIiwgXCJKYXZhXCJdLFxuICAgIHNvdXJjZTogXCJodHRwOi8vd3d3LmVjb2FsYXJtaXN0LmNvbS9cIixcbiAgICB2aXNpdDogXCJodHRwczovL2Vjb2FsYXJtaXN0LnBhZ2UubGluay9kb3dubG9hZFwiLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiT21uaUZvb2RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNpbXBsZSByZXNwb25zaXZlIHdlYnNpdGVcIixcbiAgICBpbWFnZTpcbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RvdGgyMDAwL1Jlc3BvbnNpdmUtV2ViLWRldmVsb3BtZW50L21hc3Rlci9zY3JlZW5zaG90L29tbmlmb29kX1NTLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIkhUTUxcIiwgXCJDU1NcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90b3RoMjAwMC9SZXNwb25zaXZlLVdlYi1kZXZlbG9wbWVudFwiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vdG90aGFnYXRhLm1lL1Jlc3BvbnNpdmUtV2ViLWRldmVsb3BtZW50L1wiLFxuICAgIGlkOiA0LFxuICB9LFxuXTtcblxuLy8gZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbi8vICAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcbi8vICAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnTXkgRmlyc3QgSGFja2F0aG9uJywgfVxuLy8gXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=