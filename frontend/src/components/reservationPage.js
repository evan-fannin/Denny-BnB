import React, { Component } from "react";
import { Button } from "@material-ui/core";



export default class ReservationPage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Finish Your Reservation</h1>
                <Button onClick={() => console.log(this.props.location.state)}>
                    Log
                </Button>
            </div>

        );
    }
}
