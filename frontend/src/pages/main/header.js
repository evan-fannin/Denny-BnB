import React, { useContext } from "react";
import {
    Link
} from "react-router-dom";
import { AuthContext } from "../../context";
import Button from "../../components/button";
import "./main.scss";



export default function Header() {

    return (
        <div className="header">
            <div className="header-option-bar">
                <div className="homepage-button">
                        <Link
                            className="linkComponent"
                            to="/"
                        >
                            Denny B&B
                        </Link>
                </div>
                <MyBookings style={{height: '50%', marginRight: '1rem'}} />
                <LogInOut style={{height: '50%'}}/>
            </div>
        </div>
    )
}

function MyBookings(props) {
    const { authenticated, setAuthenticated } = useContext(AuthContext);

    return authenticated ? 
    (
        <Button
            to="/user-bookings"
            style={props.style}
        >
        My Bookings
        </Button>
    ) :
    (
        null
    )
}

function LogInOut(props) {
    const { authenticated, setAuthenticated } = useContext(AuthContext);

    return authenticated ?
    (
        <Button
            to="/signout"
            style={props.style}
        >
        Sign Out
        </Button>
    ) :
    (
        <Button
            to="/login"
            style={props.style}
        >
        Login
        </Button>
    );
}