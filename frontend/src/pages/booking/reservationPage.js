import React, { Component } from "react";
import axiosInstance from "../../axios";

import MainContent from "../general/mainContent";
import ContentCard from "../../components/contentCard";
import PageTitle from "../../components/pageTitle";
import ImageCard from "../../components/imageCard";
import Button from "../../components/button";
import LayoutContainer from "../../components/layoutContainer";

import parseDateString from "../../helperFunctions/parseDateString";

import "./booking.scss";



export default class ReservationPage extends Component{
    constructor(props) {
        super(props);
    }

    async handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('start_date', this.props.location.state.startDate);
        formData.append('end_date', this.props.location.state.endDate);
        formData.append('price_per_night', parseFloat(this.props.location.state.price));
        formData.append('house_name', this.props.location.state.name);
        formData.append('thumbnail', this.props.location.state.images[0]);

        try {
            const response = await axiosInstance.post('create-booking/', formData);
            this.props.history.push("/user-bookings");
        }
        catch(error) {
            console.log(error);
        }
    }

    render() {
        const checkInDate = parseDateString(this.props.location.state.startDate);
        const checkOutDate = parseDateString(this.props.location.state.endDate);

        return (
            <MainContent>
                <LayoutContainer style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <PageTitle style={{backgroundColor: 'white', height: 'fit-content', marginRight: 150}} title="Confirm Your Reservation"/>
                    <ContentCard style={{border: '1px solid black', width: '550px'}}>

                        <h1 id='houseName' >{this.props.location.state.name}</h1>
                        <ImageCard id='thumbnail' src={this.props.location.state.images[0]} style={{height: 150}} />
                        <div id='checkIn' className='info-item'>
                            <h3>Check In:</h3>
                            <p>{checkInDate}</p>
                        </div>
                        <div id='checkOut' className='info-item'>
                            <h3>Check Out:</h3>
                            <p>{checkOutDate}</p>
                        </div>
                        <div id='price' className='info-item'>
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
