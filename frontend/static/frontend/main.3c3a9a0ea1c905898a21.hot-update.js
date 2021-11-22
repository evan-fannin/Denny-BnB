/*! For license information please see main.3c3a9a0ea1c905898a21.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/pages/booking/bookingCalendar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ BookingCalendar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/esm/index.js");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ "./node_modules/react-calendar/dist/Calendar.css");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass BookingCalendar extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, "tileDisabled", ({\n      activeStartDate,\n      date,\n      view\n    }) => {\n      const dateToday = new Date();\n      console.log(dateToday);\n\n      if (date.getFullYear() == dateToday.getFullYear() && date.getMonth() == dateToday.getMonth() && date.getDate() == dateToday.getDate()) {\n        return true;\n      }\n\n      for (let i = 0; i < this.state.disabledDates.length; i++) {\n        let disabledDate = this.state.disabledDates[i];\n\n        if (date.getFullYear() == disabledDate.getFullYear() && date.getMonth() == disabledDate.getMonth() && date.getDate() == disabledDate.getDate()) {\n          return true;\n        }\n      }\n\n      return false; //        else { // Second calendar click\n      //            var clickedDate = this.state.startDate;\n      //            var nextBookedDate = this.state.nextBookedDate;\n      //\n      //            if (nextBookedDate === null) return date <= clickedDate;\n      //            return date >= nextBookedDate || date <= clickedDate;\n      //        }\n    });\n\n    this.state = {\n      firstClick: true,\n      startDate: null,\n      nextBookedDate: null,\n      endDate: null,\n      disabledDates: []\n    };\n    this.houseName = this.props.houseName;\n  }\n\n  componentDidMount() {\n    fetch("/api/get-bookings?houseName=" + this.houseName).then(response => response.json()).then(data => {\n      console.log(data);\n      this.setState({\n        disabledDates: this.generateBookedDates(data)\n      });\n    });\n  }\n\n  generateBookedDates(data) {\n    const bookedDates = [];\n\n    for (let i = 0; i < data.length; i++) {\n      const startDate = new Date(data[i][\'start_date\']);\n      const endDate = new Date(data[i][\'end_date\']);\n      var iterDate = new Date(startDate.valueOf());\n      const bookedRange = [];\n      bookedRange.push(startDate);\n\n      while (iterDate < endDate) {\n        iterDate.setDate(iterDate.getDate() + 1);\n        const date = new Date(iterDate.valueOf());\n        bookedRange.push(date);\n      }\n\n      bookedRange.push(endDate);\n      bookedDates.push(...bookedRange);\n    }\n\n    return bookedDates.sort((a, b) => {\n      return a - b;\n    });\n  }\n\n  handleSubmitDates() {\n    if (this.state.startDate === null || this.state.endDate === null) {\n      alert("Select a date range to make a reservation.");\n      return;\n    }\n\n    this.props.handleRedirect(this.state.startDate, this.state.endDate); //        const formData = new FormData();\n    //        formData.append("start_date", this.state.startDate);\n    //        formData.append("end_date", this.state.endDate);\n    //        formData.append("house_name", this.houseName);\n    //\n    //        const requestOptions = {\n    //            method: \'POST\',\n    //            body: formData\n    //        };\n    //\n    //        fetch("/api/create-booking/", requestOptions)\n    //        .then(response => response.json())\n    //        .then(data => {\n    //            console.log(data);\n    //            this.props.handleRedirect();\n    //        });\n  }\n\n  handleClickDay(value, event) {\n    if (this.state.firstClick === true) {\n      this.setState({\n        startDate: value,\n        nextBookedDate: this.getNextBookedDate(value),\n        endDate: null\n      }, () => {\n        console.log("startDate: " + this.state.startDate);\n      });\n    } else {\n      if (this.state.nextBookedDate != null && value > this.state.nextBookedDate) {\n        alert("Some dates in your range are already booked.\\n" + "Please select a valid range.");\n      } else {\n        this.setState({\n          endDate: value\n        }, () => {\n          console.log("endDate: " + this.state.endDate);\n        });\n      }\n    }\n\n    this.setState({\n      firstClick: !this.state.firstClick\n    });\n  }\n\n  getNextBookedDate(clickedDate) {\n    var nextBookedDate = (() => {\n      for (let i = 0; i < this.state.disabledDates.length; i++) {\n        let disabledDate = this.state.disabledDates[i];\n        if (disabledDate > clickedDate) return disabledDate;\n      }\n\n      return null;\n    })();\n\n    return nextBookedDate;\n  }\n\n  handleChange(value, event) {//        const [startYear, startMonth, startDay] = this.parseDate(value[0])\n    //        const [endYear, endMonth, endDay] = this.parseDate(value[1])\n    //\n    //\n    //\n    //        this.setState({\n    //            startDate: [startYear, startMonth, startDay],\n    //            endDate: [endYear, endMonth, endDay]\n    //        });\n  }\n\n  parseDate(dateObject) {//        const stringArray = dateObject.toString().split(" ");\n    //        const year = stringArray[3];\n    //        const month = this.parseMonth(stringArray[1]);\n    //        const day = stringArray[2];\n    //        return new Date(year, month - 1, day);\n  } // Not an efficient function!\n\n\n  parseMonth(string) {\n    const abbreviations = {\n      "Jan": 1,\n      "Feb": 2,\n      "Mar": 3,\n      "Apr": 4,\n      "May": 5,\n      "Jun": 6,\n      "Jul": 7,\n      "Aug": 8,\n      "Sep": 9,\n      "Oct": 10,\n      "Nov": 11,\n      "Dec": 12\n    };\n    return abbreviations[string].toString();\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      container: true,\n      spacing: 1\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      item: true,\n      xs: 12,\n      align: "center"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_calendar__WEBPACK_IMPORTED_MODULE_3__["default"], {\n      style: {\n        display: "flex"\n      },\n      minDetail: "month",\n      next2Label: null,\n      prev2Label: null,\n      selectRange: true,\n      onClickDay: (value, event) => this.handleClickDay(value, event),\n      onChange: (value, event) => this.handleChange(value, event),\n      tileDisabled: this.tileDisabled\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {\n      color: "primary",\n      variant: "contained",\n      onClick: () => this.handleSubmitDates()\n    }, "Reserve")));\n  }\n\n}\n\n//# sourceURL=webpack://frontend/./src/pages/booking/bookingCalendar.js?')}},(function(e){e.h=()=>"aa00d5e0e1f8ce30632e"}));