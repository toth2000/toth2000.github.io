self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero/HeroStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Hero/HeroStyles.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftSection": function() { return /* binding */ LeftSection; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "LearnMoreButton": function() { return /* binding */ LearnMoreButton; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var LeftSection = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeroStyles__LeftSection",
  componentId: "ggdmsh-0"
})(["width:100%;@media ", "{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ", "{width:100%;display:flex;flex-direction:column;margin:0 auto;}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.theme.breakpoints.md;
});
var ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeroStyles__ButtonBack",
  componentId: "ggdmsh-1"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], function (_ref) {
  var alt = _ref.alt;
  return alt ? "150px" : "262px";
}, function (_ref2) {
  var alt = _ref2.alt;
  return alt ? "52px" : "64px";
}, function (_ref3) {
  var alt = _ref3.alt;
  return alt ? "20px" : "24px";
}, function (_ref4) {
  var alt = _ref4.alt,
      form = _ref4.form;
  return alt || form ? "0" : "0 0 80px";
}, function (_ref5) {
  var alt = _ref5.alt;
  return alt ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)" : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)";
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? ".5" : "1";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref7) {
  var alt = _ref7.alt;
  return alt ? "150px" : "184px";
}, function (_ref8) {
  var alt = _ref8.alt;
  return alt ? "52px" : "48px";
}, function (_ref9) {
  var alt = _ref9.alt;
  return alt ? "20px" : "16px";
}, function (_ref10) {
  var alt = _ref10.alt;
  return alt ? "0" : "64px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref11) {
  var alt = _ref11.alt;
  return alt ? "0" : "32px";
});
var LearnMoreButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeroStyles__LearnMoreButton",
  componentId: "ggdmsh-2"
})(["border:none;border-radius:50px;color:#fff;display:block;top:0;left:0;margin-top:10px;width:100%;padding:15px;background:", ";opacity:", ";transition:0.4s ease;font-size:", ";font-weight:600;align-items:center;cursor:pointer;box-shadow:", ";&:hover{opacity:\".5\";}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00dbd8 0%,#b133ff 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], function (_ref12) {
  var alt = _ref12.alt;
  return alt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
}, function (_ref13) {
  var disabled = _ref13.disabled;
  return disabled ? ".5" : "1";
}, function (_ref14) {
  var alt = _ref14.alt;
  return alt ? "20px" : "24px";
}, function (_ref15) {
  var disabled = _ref15.disabled;
  return disabled ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)" : "none";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref16) {
  var alt = _ref16.alt;
  return alt ? "20px" : "16px";
}, function (props) {
  return props.theme.breakpoints.sm;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvU3R5bGVzLmpzIl0sIm5hbWVzIjpbIkxlZnRTZWN0aW9uIiwic3R5bGVkIiwicHJvcHMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsIkJ1dHRvbkJhY2siLCJhbHQiLCJmb3JtIiwiZGlzYWJsZWQiLCJMZWFybk1vcmVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxXQUFXLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFLQUViLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUZhLEVBU2IsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBVGEsQ0FBakI7QUFrQkEsSUFBTUMsVUFBVSxHQUFHTixtRUFBSDtBQUFBO0FBQUE7QUFBQSwrWUFDWjtBQUFBLE1BQUdPLEdBQUgsUUFBR0EsR0FBSDtBQUFBLFNBQWNBLEdBQUcsR0FBRyxPQUFILEdBQWEsT0FBOUI7QUFBQSxDQURZLEVBRVg7QUFBQSxNQUFHQSxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTdCO0FBQUEsQ0FGVyxFQUlSO0FBQUEsTUFBR0EsR0FBSCxTQUFHQSxHQUFIO0FBQUEsU0FBY0EsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQUE3QjtBQUFBLENBSlEsRUFTWDtBQUFBLE1BQUdBLEdBQUgsU0FBR0EsR0FBSDtBQUFBLE1BQVFDLElBQVIsU0FBUUEsSUFBUjtBQUFBLFNBQW9CRCxHQUFHLElBQUlDLElBQVAsR0FBYyxHQUFkLEdBQW9CLFVBQXhDO0FBQUEsQ0FUVyxFQVdQO0FBQUEsTUFBR0QsR0FBSCxTQUFHQSxHQUFIO0FBQUEsU0FDWkEsR0FBRyxHQUNDLG1EQURELEdBRUMsbURBSFE7QUFBQSxDQVhPLEVBbUJWO0FBQUEsTUFBR0UsUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUJBLFFBQVEsR0FBRyxJQUFILEdBQVUsR0FBckM7QUFBQSxDQW5CVSxFQXFCWixVQUFDUixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FyQlksRUFzQlY7QUFBQSxNQUFHRSxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsT0FBSCxHQUFhLE9BQTlCO0FBQUEsQ0F0QlUsRUF1QlQ7QUFBQSxNQUFHQSxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTdCO0FBQUEsQ0F2QlMsRUF3Qk47QUFBQSxNQUFHQSxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTdCO0FBQUEsQ0F4Qk0sRUF5QkY7QUFBQSxNQUFHQSxHQUFILFVBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsR0FBSCxHQUFTLE1BQTFCO0FBQUEsQ0F6QkUsRUE0QlosVUFBQ04sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBNUJZLEVBZ0NGO0FBQUEsTUFBR0csR0FBSCxVQUFHQSxHQUFIO0FBQUEsU0FBY0EsR0FBRyxHQUFHLEdBQUgsR0FBUyxNQUExQjtBQUFBLENBaENFLENBQWhCO0FBb0NBLElBQU1HLGVBQWUsR0FBR1YsbUVBQUg7QUFBQTtBQUFBO0FBQUEsa25CQVdaO0FBQUEsTUFBR08sR0FBSCxVQUFHQSxHQUFIO0FBQUEsU0FDWkEsR0FBRyxHQUNDLG1EQURELEdBRUMsbURBSFE7QUFBQSxDQVhZLEVBZWY7QUFBQSxNQUFHRSxRQUFILFVBQUdBLFFBQUg7QUFBQSxTQUFtQkEsUUFBUSxHQUFHLElBQUgsR0FBVSxHQUFyQztBQUFBLENBZmUsRUFpQmI7QUFBQSxNQUFHRixHQUFILFVBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTdCO0FBQUEsQ0FqQmEsRUFxQlo7QUFBQSxNQUFHRSxRQUFILFVBQUdBLFFBQUg7QUFBQSxTQUNaQSxRQUFRLEdBQ0osbUZBREksR0FFSixNQUhRO0FBQUEsQ0FyQlksRUE2Q2pCLFVBQUNSLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQTdDaUIsRUE4Q1g7QUFBQSxNQUFHRSxHQUFILFVBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTdCO0FBQUEsQ0E5Q1csRUFpRGpCLFVBQUNOLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQWpEaUIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWY0MDM4MzMxNWFhYTZmYTg2YzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgTGVmdFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uQmFjayA9IHN0eWxlZC5hYFxuICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMTUwcHhcIiA6IFwiMjYycHhcIil9O1xuICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjUycHhcIiA6IFwiNjRweFwiKX07XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIyNHB4XCIpfTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogJHsoeyBhbHQsIGZvcm0gfSkgPT4gKGFsdCB8fCBmb3JtID8gXCIwXCIgOiBcIjAgMCA4MHB4XCIpfTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+XG4gICAgYWx0XG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZmNjIyZSAwJSwgI0IxMzNGRiAxMDAlKVwiXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKVwifTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiAoZGlzYWJsZWQgPyBcIi41XCIgOiBcIjFcIil9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMTUwcHhcIiA6IFwiMTg0cHhcIil9O1xuICAgIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiNTJweFwiIDogXCI0OHB4XCIpfTtcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjIwcHhcIiA6IFwiMTZweFwiKX07XG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMFwiIDogXCI2NHB4XCIpfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjBcIiA6IFwiMzJweFwiKX07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMZWFybk1vcmVCdXR0b24gPSBzdHlsZWQuYWBcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gXG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+XG4gICAgYWx0XG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKVwiXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKVwifTtcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiAoZGlzYWJsZWQgPyBcIi41XCIgOiBcIjFcIil9O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIyNHB4XCIpfTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAkeyh7IGRpc2FibGVkIH0pID0+XG4gICAgZGlzYWJsZWRcbiAgICAgID8gXCJpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMylcIlxuICAgICAgOiBcIm5vbmVcIn07XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogIFwiLjVcIjtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksXG4gICAgICBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBkYmQ4IDAlLCAjYjEzM2ZmIDEwMCUpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLFxuICAgICAgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIxNnB4XCIpfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9