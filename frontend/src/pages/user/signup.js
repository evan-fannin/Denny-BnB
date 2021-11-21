import React, { Component } from "react";

import { Link } from 'react-router-dom';

import MainContent from "../general/mainContent";
import Button from "../../components/button";
import LayoutContainer from "../../components/layoutContainer";
import ContentCard from "../../components/contentCard";


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value.trim()
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('first_name', this.state.firstName);
        formData.append('last_name', this.state.lastName);
        formData.append('password', this.state.password);
        const request = {
            method: "POST",
            body: formData
        };

        fetch("/api/users/signup/", request)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.history.push("/login/")
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <MainContent>
            <ContentCard style={{width: '60%',
            backgroundColor: 'white',
            border: '1px solid rgb(64, 84, 75)'}}>
                <h1>
                    Sign Up
                </h1>
                <form className="form" noValidate>
                    <label>
                    First Name
                        <input
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
}