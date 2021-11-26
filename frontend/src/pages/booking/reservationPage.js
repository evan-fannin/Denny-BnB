import React, { Component } from "react";
import axiosInstance from "../../axios";

import MainContent from "../general/mainContent";
import ContentCard from "../../components/contentCard";
import PageTitle from "../../components/pageTitle";
import ImageCard from "../../components/imageCard";
import Button from "../../components/button";
import LayoutContainer from "../../components/layoutContainer";

import "./booking.scss";



export default class ReservationPage extends Component{
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('start_date', this.props.location.state.startDate);
        formData.append('end_date', this.props.location.state.endDate);
        formData.append('price_per_night', parseFloat(this.props.location.state.price));
        formData.append('house_name', this.props.location.state.name);

        axiosInstance.post('create-booking/', formData)
        .then(response => {
            console.log(response.data);
            this.props.history.push("/user-bookings");
        })
        .catch(error => console.log(error))
    }

    render() {
        const checkInDate = parseDateString(this.props.location.state.startDate);
        const checkOutDate = parseDateString(this.props.location.state.endDate);

        return (
            <MainContent>
                <LayoutContainer style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <PageTitle style={{backgroundColor: 'white', height: 'fit-content', marginRight: 150}} title="Confirm Your Reservation"/>
                    <ContentCard style={{border: '1px solid black', width: '550px'}}>

                        <h1>{this.props.location.state.name}</h1>
                        <ImageCard src={this.props.location.state.images[0]} style={{height: 150}} />
                        <div className='info-item'>
                            <h3>Check In:</h3>
                            <p>{checkInDate}</p>
                        </div>
                        <div className='info-item'>
                            <h3>Check Out:</h3>
                            <p>{checkOutDate}</p>
                        </div>
                        <div className='info-item'>
                            <h3>Total Price:</h3>
                            <p>
                            ${parseFloat(this.props.location.state.price) *
                            (this.props.location.state.endDate - this.props.location.state.startDate) /
                            (1000 * 60 * 60 * 24)}
                            </p>
                        </div>
                        <Button style={{border: '1px solid black'}} onClick={(e) => this.handleSubmit(e)}>
                            Reserve Now
                        </Button>
                    </ContentCard>
                </LayoutContainer>
            </MainContent>

        );
    }
}

function parseDateString(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const namedDay = dayNames[date.getDay()];
    const month = monthNames[date.getMonth()];
    const day = date.getDate().toString();




    return (
        namedDay.concat(', ', month, ' ', day)
    );
}
