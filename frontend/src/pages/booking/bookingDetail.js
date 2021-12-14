import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axiosInstance from "../../axios";
import { useParams } from "react-router-dom";

import MainContent from "../general/mainContent";
import ContentCard from "../../components/contentCard";
import PageTitle from "../../components/pageTitle";
import ImageCard from "../../components/imageCard";
import LayoutContainer from "../../components/layoutContainer";

import parseDateString from "../../helperFunctions/parseDateString";

export default function BookingDetail(props) {
    const [booking, updateBooking] = useState({
        houseName: null,
        startDate: null,
        endDate: null,
        pricePerNight: null,
        image: null,
    });

    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axiosInstance.get("get-user-booking/?id=" + id);
                const data = response.data;
                updateBooking({
                    startDate: new Date(data.start_date),
                    endDate: new Date (data.end_date),
                    pricePerNight: data.price_per_night,
                    houseName: data.house_name,
                    image: data.thumbnail.slice(9)
                });
            }
            catch(error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const checkInDate = booking.startDate ?
        parseDateString(booking.startDate) :
        null;
    const checkOutDate = booking.endDate ?
        parseDateString(booking.endDate) :
        null;

    return (
        <MainContent>
            <ContentCard style={{border: '1px solid black', width: '550px'}}>
                <h1 id='houseName'>{booking.houseName}</h1>
                <ImageCard id='thumbnail' src={booking.image} style={{height: 150}} />
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
                    ${parseFloat(booking.pricePerNight) *
                    (booking.endDate - booking.startDate) /
                    (1000 * 60 * 60 * 24)}
                    </p>
                </div>
            </ContentCard>
        </MainContent>
    )
}