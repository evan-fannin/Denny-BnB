import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HouseList from "./pages/house/houseList";
import HouseDetail from "./pages/house/houseDetail";
import CreateHouse from "./pages/house/createHouse";
import BookingCalendar from "./pages/booking/bookingCalendar";
import ReservationPage from "./pages/booking/reservationPage";
import UserBookings from "./pages/booking/userBookings";
import BookingDetail from "./pages/booking/bookingDetail";
import SignUp from "./pages/user/signup";
import Login from "./pages/user/login";
import SignOut from "./pages/user/signout";
import PrivateRoute from "./auth/privateRoute";
import Header from "./pages/main/header";
import HomePage from "./pages/general/homePage";

import { AuthContext } from "./context";

import "./app.scss";

export default function App() {
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        localStorage.getItem('refresh_token') != null ?
        setAuthenticated(true) :
        setAuthenticated(false);
    }, []);
    const value = { authenticated, setAuthenticated }

        return (
            <div className="app">
                <Router>
                    <AuthContext.Provider value={value}>
                        <Header />
                        <Switch>
                        <Route exact path='/'>
                            <HomePage/>
                        </Route>
                        <Route path='/list' component={HouseList}/>
                        <Route path='/create' component={CreateHouse}/>
                        <Route path='/calendar' component={BookingCalendar}/>
                        <Route exact path='/house/:houseName' component={HouseDetail}/>
                        <PrivateRoute path="/book/:houseName" component={ReservationPage} />
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/signout" component={SignOut}/>
                        <PrivateRoute exact path="/user-bookings" component={UserBookings} />
                        <PrivateRoute path="/user-bookings/:id" component={BookingDetail} />
                        </Switch>
                    </AuthContext.Provider>
                </Router>
            </div>
        );
}