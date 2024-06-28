/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/States/LoginState.js":
/*!**********************************!*\
  !*** ./src/States/LoginState.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n\nconst LoginState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"loginState\",\n    default: {\n        isLogin: false,\n        userId: \"\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginState);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3RhdGVzL0xvZ2luU3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRTlCLE1BQU1DLGFBQWFELDRDQUFJQSxDQUFDO0lBQ3RCRSxLQUFLO0lBQ0xDLFNBQVM7UUFDUEMsU0FBUztRQUNUQyxRQUFRO0lBQ1Y7QUFDRjtBQUVBLGlFQUFlSixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVtYW5zdGF0cy8uL3NyYy9TdGF0ZXMvTG9naW5TdGF0ZS5qcz8xNzkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tICdyZWNvaWwnO1xuXG5jb25zdCBMb2dpblN0YXRlID0gYXRvbSh7XG4gIGtleTogJ2xvZ2luU3RhdGUnLFxuICBkZWZhdWx0OiB7XG4gICAgaXNMb2dpbjogZmFsc2UsXG4gICAgdXNlcklkOiAnJyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpblN0YXRlO1xuIl0sIm5hbWVzIjpbImF0b20iLCJMb2dpblN0YXRlIiwia2V5IiwiZGVmYXVsdCIsImlzTG9naW4iLCJ1c2VySWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/States/LoginState.js\n");

/***/ }),

/***/ "./src/components/Navigation/Navigation.js":
/*!*************************************************!*\
  !*** ./src/components/Navigation/Navigation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _States_LoginState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../States/LoginState */ \"./src/States/LoginState.js\");\n\n\n\n\nconst Navigation = ()=>{\n    const loginState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_States_LoginState__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    console.log(loginState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-primary p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"text-white text-xl font-bold hover:text-gray-300\",\n                        children: \"HumanStats\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jihun/workspace/humanstats/front/src/components/Navigation/Navigation.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jihun/workspace/humanstats/front/src/components/Navigation/Navigation.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/signup\",\n                                className: \"text-white hover:text-gray-300\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jihun/workspace/humanstats/front/src/components/Navigation/Navigation.js\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/jihun/workspace/humanstats/front/src/components/Navigation/Navigation.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/login\",\n                                className: \"text-white hover:text-gray-300\",\n                                children: loginState.isLogin ? \"Logout\" : \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jihun/workspace/humanstats/front/src/components/Navigation/Navigation.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/jihun/workspace/humanstats/front/src/components/Navigation/Navigation.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jihun/workspace/humanstats/front/src/components/Navigation/Navigation.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jihun/workspace/humanstats/front/src/components/Navigation/Navigation.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jihun/workspace/humanstats/front/src/components/Navigation/Navigation.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFDUztBQUVqRCxNQUFNRyxhQUFhO0lBQ2pCLE1BQU1DLGFBQWFILHNEQUFjQSxDQUFDQywwREFBVUE7SUFDNUNHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDOzhCQUNDLDRFQUFDVCxrREFBSUE7d0JBQ0hVLE1BQUs7d0JBQ0xGLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDRztvQkFBR0gsV0FBVTs7c0NBQ1osOERBQUNJO3NDQUNDLDRFQUFDWixrREFBSUE7Z0NBQUNVLE1BQUs7Z0NBQVVGLFdBQVU7MENBQWlDOzs7Ozs7Ozs7OztzQ0FJbEUsOERBQUNJO3NDQUNDLDRFQUFDWixrREFBSUE7Z0NBQUNVLE1BQUs7Z0NBQVNGLFdBQVU7MENBQzNCSixXQUFXUyxPQUFPLEdBQUcsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQztBQUVBLGlFQUFlVixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVtYW5zdGF0cy8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcz8xZDhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgTG9naW5TdGF0ZSBmcm9tICcuLi8uLi9TdGF0ZXMvTG9naW5TdGF0ZSc7XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGxvZ2luU3RhdGUgPSB1c2VSZWNvaWxWYWx1ZShMb2dpblN0YXRlKTtcbiAgY29uc29sZS5sb2cobG9naW5TdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXByaW1hcnkgcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1ib2xkIGhvdmVyOnRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEh1bWFuU3RhdHNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgIHtsb2dpblN0YXRlLmlzTG9naW4gPyAnTG9nb3V0JyA6ICdMb2dpbid9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUmVjb2lsVmFsdWUiLCJMb2dpblN0YXRlIiwiTmF2aWdhdGlvbiIsImxvZ2luU3RhdGUiLCJjb25zb2xlIiwibG9nIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsInVsIiwibGkiLCJpc0xvZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navigation/Navigation.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _States_LoginState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../States/LoginState */ \"./src/States/LoginState.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navigation/Navigation */ \"./src/components/Navigation/Navigation.js\");\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jihun/workspace/humanstats/front/src/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/jihun/workspace/humanstats/front/src/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jihun/workspace/humanstats/front/src/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDcUI7QUFDVDtBQUNmO0FBQzhCO0FBRTdELFNBQVNLLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNOLDhDQUFVQTs7MEJBQ1QsOERBQUNHLHlFQUFVQTs7Ozs7MEJBQ1gsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVtYW5zdGF0cy8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IExvZ2luU3RhdGUgZnJvbSAnLi4vU3RhdGVzL0xvZ2luU3RhdGUnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UmVjb2lsUm9vdD5cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9SZWNvaWxSb290PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJSZWNvaWxSb290IiwidXNlU2V0UmVjb2lsU3RhdGUiLCJMb2dpblN0YXRlIiwiTmF2aWdhdGlvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();