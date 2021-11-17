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
                <LogInOut style={{width: "7%", height: '50%'}}/>
            </div>
        </div>
    )
}

function LogInOut(props) {
    const { authenticated, setAuthenticated } = useContext(AuthContext);

    return authenticated ?
    (<Button
        to="/signout"
        linkText="Sign Out"
        style={props.style}
    />) :
    (<Button
        to="/login"
        linkText="Login"
        style={props.style}
    />);
}