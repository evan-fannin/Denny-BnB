import React, { Component } from "react";
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


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
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
        formData.append('user_name', this.state.username);
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
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <Grid container spacing={1}>
                        <Grid item align="center" xs={12}>
                            <Avatar color="primary" justify='center'></Avatar>
                        </Grid>
                    </Grid>

                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    onClick={(e) => this.handleSubmit(e)}
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
		    </Container>
        );
    }
}