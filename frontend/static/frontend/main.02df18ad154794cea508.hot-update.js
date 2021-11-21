/*! For license information please see main.02df18ad154794cea508.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/pages/user/login.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n/* harmony import */ var _general_mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general/mainContent */ "./src/pages/general/mainContent.js");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button */ "./src/components/button.js");\n/* harmony import */ var _components_layoutContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layoutContainer */ "./src/components/layoutContainer.js");\n/* harmony import */ var _components_contentCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/contentCard */ "./src/components/contentCard.js");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../axios */ "./src/axios.js");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context */ "./src/context.js");\n/* harmony import */ var _user_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.scss */ "./src/pages/user/user.scss");\n //MaterialUI\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Login(props) {\n  const {\n    authenticated,\n    setAuthenticated\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_6__.AuthContext);\n  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useLocation)();\n  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    email: \'\',\n    password: \'\',\n    redirectToReferrer: false,\n    invalidCredentials: false\n  });\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(\'/token/\', {\n      email: state.email,\n      password: state.password\n    }).then(response => {\n      localStorage.setItem(\'access_token\', response.data.access);\n      localStorage.setItem(\'refresh_token\', response.data.refresh);\n      _axios__WEBPACK_IMPORTED_MODULE_5__["default"].defaults.headers.Authorization = \'Bearer \' + localStorage.getItem(\'access_token\');\n      setAuthenticated(true);\n      setState({ ...state,\n        invalidCredentials: false,\n        redirectToReferrer: true\n      });\n    }).catch(error => {\n      if (error.response.status === 401) {\n        console.log(error.response);\n        setState({ ...state,\n          invalidCredentials: true\n        });\n      }\n    });\n  };\n\n  const handleChange = e => {\n    setState({ ...state,\n      [e.target.name]: e.target.value.trim()\n    });\n  };\n\n  if (state.redirectToReferrer === true) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {\n      to: location.state ? location.state.referrer : "/"\n    });\n  } //    if (localStorage.getItem("access_token") != null\n  //        && localStorage.getItem("refresh_token") != null\n  //        && localStorage.getItem("access_token") != \'undefined\'\n  //        && localStorage.getItem("refresh_token") != \'undefined\'\n  //    ) {\n  //        return <Redirect to="/" />\n  //    }\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_general_mainContent__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contentCard__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    style: {\n      width: \'60%\',\n      backgroundColor: \'white\',\n      border: \'1px solid rgb(64, 84, 75)\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Log In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {\n    className: "form",\n    noValidate: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Email", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    required: true,\n    id: "email",\n    label: "Email Address",\n    name: "email",\n    autoFocus: true,\n    onChange: e => handleChange(e)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Password", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    required: true,\n    name: "password",\n    label: "Password",\n    type: "password",\n    id: "password",\n    onChange: e => handleChange(e)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    onClick: e => handleSubmit(e)\n  }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layoutContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    style: {\n      justifyContent: \'right\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {\n    style: {\n      color: \'black\'\n    },\n    href: "/signup",\n    variant: "body2"\n  }, "Don\'t have an account? Sign Up"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layoutContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InvalidCredentials, {\n    invalidCredentials: state.invalidCredentials\n  }))));\n}\n\nfunction InvalidCredentials(props) {\n  if (props.invalidCredentials === true) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "The email or password you entered is invalid."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Check that you entered them correctly or create an account."));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null));\n}\n\n//# sourceURL=webpack://frontend/./src/pages/user/login.js?')}},(function(_){_.h=()=>"123677f7990be951b578"}));