import React, { Component } from "react";
import { Button } from "@material-ui/core";
import axiosInstance from "../axios"



export default class ReservationPage extends Component{
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        axiosInstance.post('create-booking/', {
            start_date: this.props.location.state.startDate.toString(),
            end_date: this.props.location.state.endDate.toString(),
            price_per_night: parseFloat(this.props.location.state.price),
            house_name: this.props.location.state.name
        })
        .then(response => {
            console.log(response.data);
            this.props.history.push("/user-bookings");
        })
        .catch(error => console.log(error))

    }

    render() {
        return (
            <div>
                <h1>Confirm your reservation</h1>
                <p>House: {this.props.location.state.name}</p>
                <p>Price Per Night: ${this.props.location.state.price}</p>
                <p>Dates: {this.props.location.state.startDate.toString()}</p>
                <p>to</p>
                <p>{this.props.location.state.endDate.toString()}</p>
                <p>Total Price: ${parseFloat(this.props.location.state.price) *
                (this.props.location.state.endDate - this.props.location.state.startDate) /
                (1000 * 60 * 60 * 24)}</p>
                <Button onClick={(e) => this.handleSubmit(e)}>
                    Reserve Now
                </Button>
            </div>

        );
    }
}
