import React, { useState } from "react";

import { Link, useHistory } from 'react-router-dom';

import MainContent from "../general/mainContent";
import Button from "../../components/button";
import LayoutContainer from "../../components/layoutContainer";
import ContentCard from "../../components/contentCard";

import axiosInstance from "../../axios";


export default function SignUp(props) {

    const history = useHistory();

    const [state, setState] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });



    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value.trim()
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', state.email);
        formData.append('first_name', state.firstName);
        formData.append('last_name', state.lastName);
        formData.append('password', state.password);

        axiosInstance.post("users/signup/", formData)
        .then(response => {
            console.log(response.data);
            history.push("/login/")
        })
        .catch(error => console.log(error));
    }
    return (
        <MainContent>
            <ContentCard style={{width: '50%',
            backgroundColor: 'white',
            border: '1px solid rgb(64, 84, 75)'}}>
                <h1>
                    Sign Up
                </h1>
                <form className="form" noValidate>
                    <label>
                    First Name
                        <input
                            autoComplete="given-name"
                            required
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                    <label>
                    Last Name
                        <input
                            autoComplete="family-name"
                            required
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                    <label>
                    Email
                        <input
                            autoComplete="email"
                            required
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                    <label>
                    Password
                        <input
                            autoComplete="new-password"
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
                        Sign Up
                    </Button>
                    <LayoutContainer style={{justifyContent: 'right'}}>
                        <Link style={{color: 'black'}} to="/login" variant="body2">
                            Already have an account? Login
                        </Link>
                    </LayoutContainer>
                </form>
            </ContentCard>
        </MainContent>
    );
}