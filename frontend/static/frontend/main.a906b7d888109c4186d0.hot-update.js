/*! For license information please see main.a906b7d888109c4186d0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/pages/booking/bookingDetail.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ BookingDetail)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios */ "./src/axios.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n/* harmony import */ var _general_mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/mainContent */ "./src/pages/general/mainContent.js");\n/* harmony import */ var _components_contentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contentCard */ "./src/components/contentCard.js");\n/* harmony import */ var _components_pageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/pageTitle */ "./src/components/pageTitle.js");\n/* harmony import */ var _components_imageCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/imageCard */ "./src/components/imageCard.js");\n/* harmony import */ var _components_layoutContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layoutContainer */ "./src/components/layoutContainer.js");\n/* harmony import */ var _helperFunctions_parseDateString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helperFunctions/parseDateString */ "./src/helperFunctions/parseDateString.js");\n\n\n\n\n\n\n\n\n\n\nfunction BookingDetail(props) {\n  const [booking, updateBooking] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    houseName: null,\n    startDate: null,\n    endDate: null,\n    pricePerNight: null,\n    image: null\n  });\n  const {\n    id\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("get-user-booking/?id=" + id).then(response => {\n      console.log(response.data);\n      updateBooking({\n        startDate: response.data.start_date,\n        endDate: response.data.end_date,\n        pricePerNight: response.data.price_per_night,\n        houseName: response.data.house_name,\n        image: response.data.thumbnail.slice(9)\n      });\n    }).catch(error => console.log(error));\n  }, []);\n  console.log(typeof booking.startDate);\n  const checkInDate = booking.startDate ? (0,_helperFunctions_parseDateString__WEBPACK_IMPORTED_MODULE_7__["default"])(booking.startDate) : null;\n  const checkOutDate = booking.endDate ? (0,_helperFunctions_parseDateString__WEBPACK_IMPORTED_MODULE_7__["default"])(booking.endDate) : null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_general_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contentCard__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    style: {\n      border: \'1px solid black\',\n      width: \'550px\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, booking.houseName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_imageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    src: booking.image,\n    style: {\n      height: 150\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "info-item"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Check In:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, checkInDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "info-item"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Check Out:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, checkOutDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "info-item"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Total Price:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$", parseFloat(booking.pricePerNight) * (booking.endDate - booking.startDate) / (1000 * 60 * 60 * 24)))));\n}\n\n//# sourceURL=webpack://frontend/./src/pages/booking/bookingDetail.js?')}},(function(_){_.h=()=>"9cee5b059c37253e60ab"}));