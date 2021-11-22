/*! For license information please see main.39d76cb391e88fcea247.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _components_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.scss */ "./src/components/components.scss");\n\n\n\nfunction Button(props) {\n  const isLink = props.to ? true : false;\n  return isLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "button-link",\n    style: props.style\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    className: "linkComponent",\n    to: props.to\n  }, props.children)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    className: "button-submit",\n    style: props.style,\n    onClick: props.onClick\n  }, props.children);\n}\n\n//# sourceURL=webpack://frontend/./src/components/button.js?')}},(function(_){_.h=()=>"a426e9fddd3672ff4cc7"}));