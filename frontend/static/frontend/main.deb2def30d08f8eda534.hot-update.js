/*! For license information please see main.deb2def30d08f8eda534.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./node_modules/@material-ui/core/esm/CardContent/CardContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "styles": () => (/* binding */ styles),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");\n/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");\n\n\n\n\n\n\nvar styles = {\n  /* Styles applied to the root element. */\n  root: {\n    padding: 16,\n    \'&:last-child\': {\n      paddingBottom: 24\n    }\n  }\n};\nvar CardContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardContent(props, ref) {\n  var classes = props.classes,\n      className = props.className,\n      _props$component = props.component,\n      Component = _props$component === void 0 ? \'div\' : _props$component,\n      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "component"]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({\n    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),\n    ref: ref\n  }, other));\n});\n true ? CardContent.propTypes = {\n  // ----------------------------- Warning --------------------------------\n  // | These PropTypes are generated from the TypeScript type definitions |\n  // |     To update them edit the d.ts file and run "yarn proptypes"     |\n  // ----------------------------------------------------------------------\n\n  /**\n   * The content of the component.\n   */\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),\n\n  /**\n   * Override or extend the styles applied to the component.\n   * See [CSS API](#css) below for more details.\n   */\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),\n\n  /**\n   * @ignore\n   */\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n\n  /**\n   * The component used for the root node.\n   * Either a string to use a HTML element or a component.\n   */\n  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType)\n} : 0;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {\n  name: \'MuiCardContent\'\n})(CardContent));\n\n//# sourceURL=webpack://frontend/./node_modules/@material-ui/core/esm/CardContent/CardContent.js?')},"./src/pages/booking/userBookings.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ UserBookings)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios */ "./src/axios.js");\n/* harmony import */ var _general_mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/mainContent */ "./src/pages/general/mainContent.js");\n/* harmony import */ var _components_contentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contentCard */ "./src/components/contentCard.js");\n/* harmony import */ var _components_cardLinkArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cardLinkArea */ "./src/components/cardLinkArea.js");\n/* harmony import */ var _components_imageCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/imageCard */ "./src/components/imageCard.js");\n/* harmony import */ var _components_pageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/pageTitle */ "./src/components/pageTitle.js");\n\n\n\n\n\n\n\n\n\nfunction UserBookings(props) {\n  const [bookings, updateBookings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(\'get-user-bookings/\').then(response => {\n      console.log(response.data);\n      updateBookings(response.data);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_general_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_pageTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    title: "Your Trips"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    container: true,\n    spacing: 1,\n    style: {\n      overflow: \'auto\',\n      marginTop: 60\n    }\n  }, console.log(booking.thumbnail), bookings.map(booking => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BookingCard, {\n    houseName: booking.house_name,\n    price: booking.price_per_night,\n    id: booking.id,\n    image: booking.thumbnail\n  }))));\n}\n\nfunction BookingCard(props) {\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();\n\n  const handleClick = e => {\n    history.push("/user-bookings/" + props.id + "/");\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contentCard__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    style: {\n      width: \'40%\',\n      height: \'50%\',\n      backgroundColor: \'ghostwhite\',\n      border: \'1px solid rgba(0,0,0,.5)\'\n    },\n    hover: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_cardLinkArea__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    onClick: handleClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n    style: {\n      textAlign: \'center\'\n    }\n  }, props.houseName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_imageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    src: props.image,\n    style: {\n      width: \'100%\',\n      height: \'70%\'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], null, "$", props.price, " per night")));\n}\n\n//# sourceURL=webpack://frontend/./src/pages/booking/userBookings.js?')}},(function(_){_.h=()=>"bf1503f37ee2adfb28fc"}));