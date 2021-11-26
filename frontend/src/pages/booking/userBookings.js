import React, { useState, useEffect } from "react";
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

import PageTitle from "../../components/pageTitle";

export default function UserBookings(props) {
    const [bookings, updateBookings] = useState([])

    useEffect(() => {
        axiosInstance.get('get-user-bookings/')
        .then(response => {
            console.log(response.data);
            updateBookings(response.data)
        });
    }, []);

    return (
        <ContentCard
        style={{width: '40%', height: '50%', backgroundColor: 'ghostwhite', border: '1px solid rgba(0,0,0,.5)'}}
        hover={true}>
            <PageTitle title="Your Trips" />
            <Grid container spacing={1} style={{overflow: 'auto', marginTop: 60}}>
                {bookings.map(booking => (
                        <BookingCard
                        houseName={booking.house_name}
                        price={booking.price_per_night}
                        id={booking.id}
                        />
                    ))}
            </Grid>
        </ContentCard>
    );
}

function BookingCard(props) {
    return (
        <Grid item xs={12} align="center">
            <Card>
                <CardActionArea disableRipple href={"/user-bookings/" + props.id + "/"}>
                    <CardContent>
                        <Typography variant="h5">
                            {props.houseName}
                        </Typography>
                    </CardContent>
                    <CardMedia
                    className="card-image"
                    style={{height: '30%', width: '30%'}}
                    component="img"
                    src={"/static/images/colville_1.jpeg"}
                    />
                    <CardContent>
                        ${props.price} per night
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}