import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class CreateHouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houseName: '',
            houseAddress: '',
            housePrice: 0,
            houseImages: []
        };
    }

    handleCreateRoom() {
        const formData = new FormData();
        formData.append("name", this.state.houseName);
        formData.append("address", this.state.houseAddress);
        formData.append("price_per_night", this.state.housePrice);
        for (let i = 0; i < this.state.houseImages.length; i++) {
            formData.append("image" + i.toString(), this.state.houseImages[i])
        }
        const requestOptions = {
            method: 'POST',
            body: formData
        };

        fetch("/api/create-house/", requestOptions)
        .then((response) => response.json())
        .then((data) => {
        this.props.history.push('/house/' + data.name);
        console.log(data);
        });
    }

    handleHousePriceChange(e) {
        this.setState({
            housePrice: e.target.value
        });
    }

    handleHouseNameChange(e) {
        this.setState({
            houseName: e.target.value
        });
    }

    handleHouseAddressChange(e) {
        this.setState({
            houseAddress: e.target.value
        });
    }

    handleHouseImageChange = e => {
        if (e.target.files.length != 0) {
            const houseImages = this.state.houseImages.slice()
            houseImages.push(e.target.files[0])
            console.log(houseImages)
            this.setState({
                houseImages: houseImages
            });
        }
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4">
                        Create a House
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField
                        required="true"
                        onChange={(e) => {this.handleHouseNameChange(e)}}
                        inputProps={{
                            style: { textAlign: "center" }
                        }}
                        />
                    </FormControl>
                    <FormHelperText>
                        <div align="center">
                            House Name
                        </div>
                    </FormHelperText>
                </Grid>
                                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField
                        required="true"
                        onChange={(e) => {this.handleHouseAddressChange(e)}}
                        inputProps={{
                            style: { textAlign: "center" }
                        }}
                        />
                    </FormControl>
                    <FormHelperText>
                        <div align="center">
                            House Address
                        </div>
                    </FormHelperText>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField
                        required="true"
                        type="number"
                        onChange={(e) => {this.handleHousePriceChange(e)}}
                        inputProps={{
                            min: 1,
                            style: { textAlign: "center" }
                        }}
                        />
                    </FormControl>
                    <FormHelperText>
                        <div align="center">
                            Price Per Night
                        </div>
                    </FormHelperText>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormHelperText>
                        <div align="center">
                            House Images
                        </div>
                    </FormHelperText>
                    <FormControl>
                        <input
                        accept="image/*"
                        hidden
                        onChange={this.handleHouseImageChange}
                        id="raised-button-file"
                        multiple
                        type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="raised" component="span">
                            Upload
                            </Button>
                        </label>
                    </FormControl>
                    <p>{this.state.houseImages.map(image => image['name'] + ", ")}</p>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button
                    color="primary"
                    variant="contained"
                    onClick={() => this.handleCreateRoom()}>
                    Add House
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button
                    color="secondary"
                    variant="contained"
                    to="/"
                    component={Link}>
                    Go Back
                    </Button>
                </Grid>
            </Grid>
        );
    }
}
