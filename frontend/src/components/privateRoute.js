import React from "react";
import {
Route,
Redirect
 } from "react-router-dom";


export default function PrivateRoute({ component: Component, ...rest }) {
    return(
        <Route { ...rest } render={(props) => {
            console.log(localStorage.getItem('access_token'));
            return localStorage.getItem('access_token') === null
            ? <Redirect to={{
                pathname: "/login",
                state: { referrer: props.location }
            }} />
            : <Component {...props} />;
        }} />
    );
}