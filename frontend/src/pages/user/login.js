import React, { Component, useContext, useState } from 'react';
//MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect, useLocation } from "react-router-dom";

import MainContent from "../general/mainContent";
import Button from "../../components/button";
import LayoutContainer from "../../components/layoutContainer";

import axiosInstance from "../../axios";
import { AuthContext } from "../../context";

import "./user.scss";


export default function Login(props) {
    const { authenticated, setAuthenticated } = useContext(AuthContext);

    const location = useLocation();

    const [state, setState] = useState({
        email: '',
        password: '',
        redirectToReferrer: false,
        invalidCredentials: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosInstance.post('/token/', {
            email: state.email,
            password: state.password
        })
        .then(response => {
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            axiosInstance.defaults.headers['Authorization'] =
					'Bearer ' + localStorage.getItem('access_token');
			setAuthenticated(true);
			setState({...state, invalidCredentials: false, redirectToReferrer: true});
        })
        .catch(error => {
            if (error.response.status === 401) {
                console.log(error.response);
                setState({...state, invalidCredentials: true});
            }
        });
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value.trim()
        });
    }

    if (state.redirectToReferrer === true) {
        return <Redirect to={location.state
        ? location.state.referrer
        : "/"
        } />;
    }

//    if (localStorage.getItem("access_token") != null
//        && localStorage.getItem("refresh_token") != null
//        && localStorage.getItem("access_token") != 'undefined'
//        && localStorage.getItem("refresh_token") != 'undefined'
//    ) {
//        return <Redirect to="/" />
//    }

    return(
        <MainContent>
            <h1>
                Log In
            </h1>
            <form className="form" noValidate>
                <label>
                Email
                    <input
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label>
                Password
                    <input
                        required
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <Button
                    onClick={(e) => handleSubmit(e)}
                >
                    Sign In
                </Button>
                <LayoutContainer>
                    <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </LayoutContainer>
            </form>
            <LayoutContainer>
                <InvalidCredentials invalidCredentials={state.invalidCredentials} />
            </LayoutContainer>
        </MainContent>
    )
}

function InvalidCredentials(props) {
    if (props.invalidCredentials === true) {
        return (
           <>
              <p>
                The email or password you entered is invalid.
              </p>
              <p>
                Check that you entered them correctly or create an account.
              </p>
            </>
        );
    }

    return (
        <>
            <p></p>
        </>
    );
}