import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../axios";

import MainContent from "../general/mainContent";
import ContentCard from "../../components/contentCard";
import CardLinkArea from "../../components/cardLinkArea";
import ImageCard from "../../components/imageCard";
import PageTitle from "../../components/pageTitle";
import BookingCard from './bookingCard';

export default function UserBookings(props) {
    const [bookings, updateBookings] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axiosInstance.get('get-user-bookings/');
                updateBookings(response.data);
            }
            catch(error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <MainContent>
            <PageTitle title="Your Trips" />
                {bookings.map(booking => (
                    <BookingCard
                    key={booking.id}
                    houseName={booking.house_name}
                    price={booking.price_per_night}
                    id={booking.id}
                    image={booking.thumbnail.slice(9)}
                    />
                ))}
        </MainContent>
    );
}

