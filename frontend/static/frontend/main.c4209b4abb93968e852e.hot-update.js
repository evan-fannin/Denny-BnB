/*! For license information please see main.c4209b4abb93968e852e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/pages/booking/reservationPage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ ReservationPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios */ "./src/axios.js");\n/* harmony import */ var _general_mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/mainContent */ "./src/pages/general/mainContent.js");\n/* harmony import */ var _components_contentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contentCard */ "./src/components/contentCard.js");\n/* harmony import */ var _components_pageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/pageTitle */ "./src/components/pageTitle.js");\n/* harmony import */ var _components_imageCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/imageCard */ "./src/components/imageCard.js");\n/* harmony import */ var _booking_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking.scss */ "./src/pages/booking/booking.scss");\n\n\n\n\n\n\n\n\nclass ReservationPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  handleSubmit(e) {\n    e.preventDefault();\n    const formData = new FormData();\n    formData.append(\'start_date\', this.props.location.state.startDate);\n    formData.append(\'end_date\', this.props.location.state.endDate);\n    formData.append(\'price_per_night\', parseFloat(this.props.location.state.price));\n    formData.append(\'house_name\', this.props.location.state.name);\n    _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(\'create-booking/\', formData).then(response => {\n      console.log(response.data);\n      this.props.history.push("/user-bookings");\n    }).catch(error => console.log(error));\n  }\n\n  render() {\n    console.log(this.props.location.state);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_general_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_pageTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {\n      title: "Confirm Your Reservation"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contentCard__WEBPACK_IMPORTED_MODULE_3__["default"], {\n      style: {\n        border: \'1px solid black\'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, this.props.location.state.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_imageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {\n      src: this.props.location.state.images[0],\n      style: {\n        height: 150\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "info-item"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Check In:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.location.state.startDate.toString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Check Out: ", this.props.location.state.endDate.toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Total Price: $", parseFloat(this.props.location.state.price) * (this.props.location.state.endDate - this.props.location.state.startDate) / (1000 * 60 * 60 * 24)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {\n      onClick: e => this.handleSubmit(e)\n    }, "Reserve Now")));\n  }\n\n}\n\nfunction parseDateString(date) {\n  const namedDay = date.getDay();\n  const month = date.getMonth();\n  const day = date.getDate();\n  return namedDa;\n}\n\n//# sourceURL=webpack://frontend/./src/pages/booking/reservationPage.js?')}},(function(_){_.h=()=>"78db855f5112ba0fce94"}));