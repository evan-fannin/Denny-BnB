import React, { Component, useContext, useState } from 'react'
import { Redirect, useLocation, Link } from "react-router-dom";

import MainContent from "../general/mainContent";
import Button from "../../components/button";
import LayoutContainer from "../../components/layoutContainer";
import ContentCard from "../../components/contentCard";

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
            if (error.response.status === 401 || error.response.status === 400) {
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
            <ContentCard style={{width: '60%',
            backgroundColor: 'white',
            border: '1px solid rgb(64, 84, 75)'}}>
                <h1>
                    Log In
                </h1>
                <form className="form" noValidate>
                    <label>
                    Email
                        <input
                            autoComplete="email"
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
                            autoComplete="current-password"
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                    <Button
                        style={{width: '100%'}}
                        onClick={(e) => handleSubmit(e)}
                    >
                        Sign In
                    </Button>
                    <LayoutContainer style={{justifyContent: 'right'}}>
                        <Link style={{color: 'black'}} to="/signup" variant="body2">
                            Don't have an account? Sign Up
                        </Link>
                    </LayoutContainer>
                </form>
                <LayoutContainer>
                    <InvalidCredentials invalidCredentials={state.invalidCredentials} />
                </LayoutContainer>
            </ContentCard>
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