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
                            to="/"
                            style={{ textDecoration: 'none' }}
                        >
                            Denny B&B
                        </Link>
                </div>
                <div className="auth-button">
                    <LogInOut />
                </div>
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
    />) :
    (<Button
        to="/login"
        linkText="Login"
    />);
}