import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import HouseList from "./houseList";
import HouseDetail from "./houseDetail";
import CreateHouse from "./createHouse";
import BookingCalendar from "./bookingCalendar";
import HouseImages from "./houseImages";
import ReservationPage from "./reservationPage";
import SignUp from "./signup";
import Login from "./login";
import SignOut from "./signout";
import PrivateRoute from "./privateRoute";
import UserBookings from "./userBookings";
import BookingDetail from "./bookingDetail";
import Header from "./header";

import { AuthContext } from "../context";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core//CardContent';
import CardMedia from "@material-ui/core/CardMedia";


export default function HomePage() {
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        localStorage.getItem('refresh_token') != null ?
        setAuthenticated(true) :
        setAuthenticated(false);
    }, []);
    const value = { authenticated, setAuthenticated }

    return (
        <Router>
            <AuthContext.Provider value={value}>
                <Header />
                <Switch>
                <Route exact path='/'>
                    <HomePageMenu/>
                </Route>
                <Route path='/list' component={HouseList}/>
                <Route path='/create' component={CreateHouse}/>
                <Route path='/calendar' component={BookingCalendar}/>
                <Route exact path='/house/:houseName' component={HouseDetail}/>
                <Route path='/house/:houseName/images' component={HouseImages}/>
                <PrivateRoute path="/book/:houseName" component={ReservationPage} />
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={Login}/>
                <Route path="/signout" component={SignOut}/>
                <PrivateRoute exact path="/user-bookings" component={UserBookings} />
                <PrivateRoute path="/user-bookings/:id" component={BookingDetail} />
                </Switch>
            </AuthContext.Provider>
        </Router>
    );
}

    function HomePageMenu(props) {
        return(
            <Grid container spacing={1} style={{overflow: 'auto', marginTop: 65}}>
                <Grid item xs={12} align="center">
                    <Typography component="h2" variant="h2">
                        Denny BnB
                    </Typography>
                    <div></div>
                    <Typography component="h4" variant="h4">
                        Like Airbnb but shittier.
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Card>
                        <CardMedia
                        className="card-image"
                        style={{height: '50%', width: '50%'}}
                        component="img"
                        src="/static/images/slum_house.jpeg"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button
                    color="primary"
                    variant="contained"
                    to="/list"
                    component={Link}>
                    View All Houses
                    </Button>
                </Grid>
            </Grid>
        );
    }