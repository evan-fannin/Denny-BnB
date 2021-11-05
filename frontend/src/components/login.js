import React, { Component, useContext, useState } from 'react';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from "react-router-dom";
import axiosInstance from "../axios";
import { AuthContext } from "../context";

export default function Login(props) {
    const { authenticated, setAuthenticated } = useContext(AuthContext);

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

    if (localStorage.getItem("access_token") != null
        && localStorage.getItem("refresh_token") != null
        && localStorage.getItem("access_token") != 'undefined'
        && localStorage.getItem("refresh_token") != 'undefined'
    ) {
        return <Redirect to="/" />
    }

    if (state.redirectToReferrer === true) {
        return <Redirect to={props.location.state
        ? props.location.state.referrer
        : "/"
        } />;
    }
    return(
        <Container component="main" maxWidth="xs" style={{ marginTop: 60 }}>
            <CssBaseline />
            <div>
                <Grid container spacing={1}>
                    <Grid item align="center" xs={12}>
                        <Avatar color="primary" justify='center'></Avatar>
                    </Grid>
                </Grid>
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>
                <form noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => handleChange(e)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                <Grid container>
                    <InvalidCredentials invalidCredentials={state.invalidCredentials} />
                </Grid>
            </div>
        </Container>
    )
}

function InvalidCredentials(props) {
    if (props.invalidCredentials === true) {
        return (
           <Grid item xs>
              <p>
                The email or password you entered is invalid.
              </p>
              <p>
                Check that you entered them correctly or create an account.
              </p>
            </Grid>
        );
    }

    return (
        <Grid item xs>
            <p></p>
        </Grid>
    );
}