import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";

import MainContent from "../general/mainContent";
import PageTitle from "../../components/pageTitle";
import BookingCard from './bookingCard';

export default function UserBookings(props) {
    const [bookings, updateBookings] = useState([]);
    const [loaded, updateLoaded] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axiosInstance.get('get-user-bookings/');
                updateBookings(response.data);
                updateLoaded(true);
            }
            catch(error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    // useEffect(() => {console.log(bookings)}, [bookings]);

    return loaded && bookings.length < 1 ? (
        <div>None</div>
    ) :
    (
        <MainContent>
            <PageTitle title="Your Trips" />
                {loaded && bookings.length < 1 ?
                (<h2>None</h2>) :
                (
                    bookings.map(booking => (
                    <BookingCard
                    key={booking.id}
                    houseName={booking.house_name}
                    price={booking.price_per_night}
                    id={booking.id}
                    image={booking.thumbnail}
                    />
                    ))
                )}
        </MainContent>
    );
}

