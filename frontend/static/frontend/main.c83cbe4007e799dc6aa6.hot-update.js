/*! For license information please see main.c83cbe4007e799dc6aa6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/pages/booking/userBookings.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ UserBookings)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Card/Card.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios */ "./src/axios.js");\n/* harmony import */ var _general_mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/mainContent */ "./src/pages/general/mainContent.js");\n/* harmony import */ var _components_contentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contentCard */ "./src/components/contentCard.js");\n/* harmony import */ var _components_cardLinkArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cardLinkArea */ "./src/components/cardLinkArea.js");\n/* harmony import */ var _components_imageCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/imageCard */ "./src/components/imageCard.js");\n/* harmony import */ var _components_pageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/pageTitle */ "./src/components/pageTitle.js");\n\n\n\n\n\n\n\n\nfunction UserBookings(props) {\n  const [bookings, updateBookings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(\'get-user-bookings/\').then(response => {\n      console.log(response.data);\n      updateBookings(response.data);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_general_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_pageTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    title: "Your Trips"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    container: true,\n    spacing: 1,\n    style: {\n      overflow: \'auto\',\n      marginTop: 60\n    }\n  }, bookings.map(booking => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BookingCard, {\n    houseName: booking.house_name,\n    price: booking.price_per_night,\n    id: booking.id\n  }))));\n}\n\nfunction BookingCard(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contentCard__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    style: {\n      width: \'40%\',\n      height: \'50%\',\n      backgroundColor: \'ghostwhite\',\n      border: \'1px solid rgba(0,0,0,.5)\'\n    },\n    hover: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {\n    disableRipple: true,\n    href: "/user-bookings/" + props.id + "/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {\n    variant: "h5"\n  }, props.houseName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["default"], {\n    className: "card-image",\n    style: {\n      height: \'30%\',\n      width: \'30%\'\n    },\n    component: "img",\n    src: "/static/images/colville_1.jpeg"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], null, "$", props.price, " per night"))));\n}\n\n//# sourceURL=webpack://frontend/./src/pages/booking/userBookings.js?')}},(function(_){_.h=()=>"3dfe06ca9664af138c66"}));