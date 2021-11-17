/*! For license information please see main.cc4933b406c5c56eff99.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/pages/house/houseList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ HouseList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n/* harmony import */ var _general_mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general/mainContent */ "./src/pages/general/mainContent.js");\n/* harmony import */ var _components_contentCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/contentCard */ "./src/components/contentCard.js");\n/* harmony import */ var _components_cardLinkArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cardLinkArea */ "./src/components/cardLinkArea.js");\n/* harmony import */ var _components_imageCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/imageCard */ "./src/components/imageCard.js");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../axios */ "./src/axios.js");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass HouseList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      houses: [],\n      pageLoaded: false\n    };\n  }\n\n  componentDidMount() {\n    _axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(\'get-houses/\').then(response => {\n      console.log(response.data);\n      this.setState({\n        houses: response.data,\n        pageLoaded: true\n      });\n    }); //        fetch(\'/api/get-houses/\')\n    //        .then((response) => response.json())\n    //        .then(data => {\n    //            console.log(data)\n    //            this.setState({\n    //                houses: data,\n    //                pageLoaded: true\n    //            });\n    //        });\n  }\n\n  parseImages(data_images) {\n    var imageStrings = [];\n\n    for (let i = 0; i < data_images.length; i++) {\n      var imageString = data_images[i][\'image\'];\n      imageString = "/" + imageString.split("/").slice(2, 5).join("/");\n      imageStrings.push(imageString);\n    }\n\n    return imageStrings;\n  }\n\n  render() {\n    if (!this.state.pageLoaded) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Loading...");\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_general_mainContent__WEBPACK_IMPORTED_MODULE_1__["default"], null, this.state.houses.map(house => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HouseCard, {\n      key: house.name,\n      name: house.name,\n      price: house.price_per_night,\n      image: this.parseImages(house.images)[0]\n    })));\n  }\n\n}\n\nfunction HouseCard(props) {\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();\n\n  const handleClick = () => {\n    history.push(\'/house/\' + props.name);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contentCard__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    style: {\n      width: \'40%\'\n    },\n    hover: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_cardLinkArea__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    onClick: handleClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_imageCard__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    src: props.image,\n    style: {\n      width: \'100%\'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$", props.price, " per night")));\n}\n\n//# sourceURL=webpack://frontend/./src/pages/house/houseList.js?')}},(function(_){_.h=()=>"db92078f98ebec0b4ece"}));