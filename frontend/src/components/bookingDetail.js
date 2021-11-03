import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axiosInstance from "../axios";
import { useParams } from "react-router-dom";

export default function BookingDetail(props) {
    const [booking, updateBooking] = useState({
        houseName: null,
        startDate: null,
        endDate: null,
        pricePerNight: null,
    });

    const { id } = useParams();

    useEffect(() => {
        axiosInstance.get("get-user-booking/?id=" + id)
        .then(response => {
            console.log(response.data);
            updateBooking({
                startDate: response.data.start_date,
                endDate: response.data.end_date,
                pricePerNight: response.data.price_per_night,
                houseName: response.data.house_name,
            });
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <Grid container spacing>
            <Grid item xs={12}>
                    House: {booking.houseName}
            </Grid>
            <Grid item xs={12}>
                Start: {booking.startDate}
            </Grid>
            <Grid item xs={12}>
                End: {booking.endDate}
            </Grid>
            <Grid item xs={12}>
                Price: {booking.pricePerNight}
            </Grid>
        </Grid>
    )
}