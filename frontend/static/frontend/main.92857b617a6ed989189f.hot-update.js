/*! For license information please see main.92857b617a6ed989189f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/pages/house/houseDetail.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ HouseDetail)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_simple_image_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simple-image-slider */ "./node_modules/react-simple-image-slider/dist/index.js");\n/* harmony import */ var react_simple_image_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_simple_image_slider__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _booking_bookingCalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking/bookingCalendar */ "./src/pages/booking/bookingCalendar.js");\n/* harmony import */ var _components_contentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contentCard */ "./src/components/contentCard.js");\n/* harmony import */ var _components_layoutContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layoutContainer */ "./src/components/layoutContainer.js");\n/* harmony import */ var _general_mainContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general/mainContent */ "./src/pages/general/mainContent.js");\n\n\n\n\n\n\n\n\nclass HouseDetail extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      name: "",\n      address: "",\n      price: "",\n      images: [],\n      pageLoaded: false,\n      startDate: null,\n      endDate: null\n    };\n    this.houseName = this.props.match.params.houseName;\n  }\n\n  componentDidMount() {\n    fetch(\'/api/get-house?name=\' + this.houseName).then(response => response.json()).then(data => {\n      this.setState({\n        name: data.name,\n        address: data.address,\n        price: data.price_per_night,\n        images: this.parseImages(data.images),\n        pageLoaded: true\n      });\n    });\n  }\n\n  handleRedirectToBooking(startDate, endDate) {\n    console.log(startDate);\n    this.setState({\n      startDate: startDate,\n      endDate: endDate\n    }, () => this.props.history.push("/book/" + this.houseName, this.state));\n  }\n\n  parseImages(data_images) {\n    var imageStrings = [];\n\n    for (let i = 0; i < data_images.length; i++) {\n      var imageString = data_images[i][\'image\'];\n      imageString = "/" + imageString.split("/").slice(2, 5).join("/");\n      imageStrings.push(imageString);\n    }\n\n    return imageStrings;\n  }\n\n  render() {\n    if (this.state.pageLoaded === false) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Loading...");\n    }\n\n    var images = [];\n\n    for (let i = 0; i < this.state.images.length; i++) {\n      images.push({\n        url: this.state.images[i]\n      });\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_general_mainContent__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contentCard__WEBPACK_IMPORTED_MODULE_3__["default"], {\n      style: {\n        backgroundColor: "ghostwhite",\n        width: "50%"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, this.state.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.state.address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$" + parseInt(this.state.price).toString() + " per night")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contentCard__WEBPACK_IMPORTED_MODULE_3__["default"], {\n      style: {\n        backgroundColor: "ghostwhite"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_simple_image_slider__WEBPACK_IMPORTED_MODULE_1___default()), {\n      width: 896,\n      height: 504,\n      images: images,\n      showNavs: true,\n      showBullets: true,\n      style: {\n        position: "relative"\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layoutContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {\n      style: {\n        justifyContent: "flex-end"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contentCard__WEBPACK_IMPORTED_MODULE_3__["default"], {\n      style: {\n        flex: "1"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "About This House"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum scelerisque ex, et mattis nunc efficitur ut. Etiam vitae sodales velit. Suspendisse rutrum lorem non augue ultricies efficitur. Quisque porttitor arcu at sapien porttitor mattis. Suspendisse eu bibendum nunc, ac tincidunt purus. Mauris et sapien eu sapien pretium laoreet. Donec ut consequat neque. Morbi vitae tristique orci. Fusce sit amet pulvinar lectus, et interdum velit. Vivamus imperdiet consectetur gravida. Nullam ac elit vel nisl vulputate vestibulum. Sed volutpat vulputate turpis, eu viverra dui vulputate ut. Sed tristique eleifend faucibus. Praesent lacus felis, rhoncus et tempus dapibus, laoreet vitae sem. Praesent quis ex et ante vehicula vehicula vel lobortis dolor. Mauris finibus commodo elit, fermentum suscipit nisl mollis in. Pellentesque est dolor, pharetra pellentesque mi sed, maximus pretium purus. Nunc orci nisi, feugiat bibendum venenatis a, semper ac ipsum. Nunc eu lacinia metus, non semper tortor.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contentCard__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_booking_bookingCalendar__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      houseName: this.houseName,\n      handleRedirect: (startDate, endDate) => this.handleRedirectToBooking(startDate, endDate)\n    }))));\n  }\n\n}\n\n//# sourceURL=webpack://frontend/./src/pages/house/houseDetail.js?')}},(function(e){e.h=()=>"25a656cd64ec3a315810"}));