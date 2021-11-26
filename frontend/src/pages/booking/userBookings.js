import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
    Card,
    CardContent,
    Grid,
    Typography,
    CardActionArea,
    CardMedia
    }
from '@material-ui/core';
import axiosInstance from "../../axios";

import MainContent from "../general/mainContent";
import ContentCard from "../../components/contentCard";
import CardLinkArea from "../../components/cardLinkArea";
import ImageCard from "../../components/imageCard";
import PageTitle from "../../components/pageTitle";

export default function UserBookings(props) {
    const [bookings, updateBookings] = useState([])

    useEffect(() => {
        axiosInstance.get('get-user-bookings/')
        .then(response => {
            updateBookings(response.data)
        });
    }, []);

    return (
        <MainContent>
            <PageTitle title="Your Trips" />
                {bookings.map(booking => (
                    <BookingCard
                    houseName={booking.house_name}
                    price={booking.price_per_night}
                    id={booking.id}
                    image={booking.thumbnail.slice(9)}
                    />
                ))}
        </MainContent>
    );
}

function BookingCard(props) {
    const history = useHistory();

    const handleClick = (e) => {
        history.push("/user-bookings/" + props.id + "/");
    };
    return (
        <ContentCard
        style={{width: '40%', height: '50%', backgroundColor: 'ghostwhite', border: '1px solid rgba(0,0,0,.5)'}}
        hover={true}>
            <CardLinkArea onClick={handleClick}>
                <h3 style={{textAlign: 'center'}}>
                    {props.houseName}
                </h3>
                <ImageCard src={props.image} style={{width: '100%', height: '70%'}}/>
                <p style={{textAlign: 'center'}}>
                    ${parseInt(props.price)} / night
                </p>
            </CardLinkArea>
        </ContentCard>
    );
}