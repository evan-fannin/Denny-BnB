import React, { Component } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


export default class BookingCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstClick: true,
            startDate: null,
            nextBookedDate: null,
            endDate: null,
            disabledDates: []
        };
        this.houseName = this.props.houseName;
    }

    componentDidMount() {
        fetch("/api/get-bookings?houseName=" + this.houseName)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({disabledDates: this.generateBookedDates(data)});
        });
    }

    generateBookedDates(data) {
        const bookedDates = []
        for (let i = 0; i < data.length; i++) {
            const startDate = new Date(data[i]['start_date']);
            const endDate = new Date(data[i]['end_date']);
            var iterDate = new Date(startDate.valueOf());
            const bookedRange = [];
            bookedRange.push(startDate);

            while (iterDate < endDate) {
                iterDate.setDate(iterDate.getDate() + 1);
                const date = new Date(iterDate.valueOf());
                bookedRange.push(date);
            }
            bookedRange.push(endDate);
            bookedDates.push(...bookedRange);
        }

        return (bookedDates.sort((a, b) => {
                return a - b;
            }));
    }

    handleSubmitDates() {
        if (this.state.startDate === null || this.state.endDate === null) {
            alert("Select a date range to make a reservation.");
            return
        }
        this.props.handleRedirect(this.state.startDate, this.state.endDate);
//        const formData = new FormData();
//        formData.append("start_date", this.state.startDate);
//        formData.append("end_date", this.state.endDate);
//        formData.append("house_name", this.houseName);
//
//        const requestOptions = {
//            method: 'POST',
//            body: formData
//        };
//
//        fetch("/api/create-booking/", requestOptions)
//        .then(response => response.json())
//        .then(data => {
//            console.log(data);
//            this.props.handleRedirect();
//        });

    }

    handleClickDay(value, event) {
        if (this.state.firstClick === true) {
            this.setState({startDate: value,
            nextBookedDate: this.getNextBookedDate(value),
            endDate: null}, () => {
                console.log("startDate: " + this.state.startDate);
            });
        }
        else {
            if (this.state.nextBookedDate != null && value > this.state.nextBookedDate) {
                alert("Some dates in your range are already booked.\n" +
                "Please select a valid range.");
            }
            else {
                this.setState({endDate: value}, () => {
                    console.log("endDate: " + this.state.endDate);
                });
            }
        }
        this.setState({firstClick: !this.state.firstClick})
    }

    getNextBookedDate(clickedDate) {
        var nextBookedDate = (() => {
                for (let i = 0; i < this.state.disabledDates.length; i++) {
                    let disabledDate = this.state.disabledDates[i];
                    if (disabledDate > clickedDate) return disabledDate;
                }
                return null
            })();
        return nextBookedDate;
    }

    handleChange(value, event) {
//        const [startYear, startMonth, startDay] = this.parseDate(value[0])
//        const [endYear, endMonth, endDay] = this.parseDate(value[1])
//
//
//
//        this.setState({
//            startDate: [startYear, startMonth, startDay],
//            endDate: [endYear, endMonth, endDay]
//        });
    }

    parseDate(dateObject) {

//        const stringArray = dateObject.toString().split(" ");
//        const year = stringArray[3];
//        const month = this.parseMonth(stringArray[1]);
//        const day = stringArray[2];
//        return new Date(year, month - 1, day);
    }

    // Not an efficient function!
    tileDisabled = ({activeStartDate, date, view}) => {
        for (let i = 0; i < this.state.disabledDates.length; i++) {
            let disabledDate = this.state.disabledDates[i];

            if (date.getFullYear() == disabledDate.getFullYear() &&
            (date.getMonth()) == disabledDate.getMonth() &&
            date.getDate() == disabledDate.getDate()) {
                return true;
            }
        }
        return false;
//        else { // Second calendar click
//            var clickedDate = this.state.startDate;
//            var nextBookedDate = this.state.nextBookedDate;
//
//            if (nextBookedDate === null) return date <= clickedDate;
//            return date >= nextBookedDate || date <= clickedDate;
//        }
    }

    parseMonth(string) {
        const abbreviations = {
            "Jan": 1,
            "Feb": 2,
            "Mar": 3,
            "Apr": 4,
            "May": 5,
            "Jun": 6,
            "Jul": 7,
            "Aug": 8,
            "Sep": 9,
            "Oct": 10,
            "Nov": 11,
            "Dec": 12
        }

        return abbreviations[string].toString()
    }

    render() {
        return(
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Calendar style={{display: "flex"}}
                minDetail='month'
                next2Label={null}
                prev2Label={null}
                selectRange="true"
                onClickDay={(value, event) => this.handleClickDay(value, event)}
                onChange={(value, event) => this.handleChange(value, event)}
                tileDisabled={this.tileDisabled}
                />
                <Button
                color="primary"
                variant="contained"
                onClick={() => this.handleSubmitDates()}>
                Reserve
                </Button>
            </Grid>
        </Grid>
        )
    }
}