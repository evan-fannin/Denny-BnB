import React, { Component } from 'react';
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

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirectToReferrer: false,
            invalidCredentials: false
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        axiosInstance.post('/token/', {
            email: this.state.email,
            password: this.state.password
        })
        .then(response => {
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            axiosInstance.defaults.headers['Authorization'] =
					'Bearer ' + localStorage.getItem('access_token');
		    this.setState({
		        invalidCredentials: false,
		        redirectToReferrer: true
		    });
        })
        .catch(error => {
            if (error.response.status === 401) {
                this.setState({invalidCredentials: true});
            }
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value.trim()
        });
    }

    render() {
        if (localStorage.getItem("access_token") != null) {
            return <Redirect to="/" />
        }

        if (this.state.redirectToReferrer === true) {
            return <Redirect to={this.props.location.state
            ? this.props.location.state.referrer
            : "/"
            } />;
        }
        return(
            <Container component="main" maxWidth="xs">
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
                            onChange={(e) => this.handleChange(e)}
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
                            onChange={(e) => this.handleChange(e)}
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
                            onClick={(e) => this.handleSubmit(e)}
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
                        <InvalidCredentials invalidCredentials={this.state.invalidCredentials} />
                    </Grid>
                </div>
            </Container>
        )
    }
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