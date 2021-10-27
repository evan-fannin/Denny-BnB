import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Grid from "@material-ui/core/Grid";
import BookingCalendar from "./bookingCalendar";
import { Button } from "@material-ui/core";

export default class HouseDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            price: "",
            images: [],
            pageLoaded: false,
            startDate: null,
            endDate: null,
        }
        this.houseName = this.props.match.params.houseName;
    }

    componentDidMount() {
        fetch('/api/get-house?name=' + this.houseName)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                name: data.name,
                address: data.address,
                price: data.price_per_night,
                images: this.parseImages(data.images),
                pageLoaded: true
            });
        });
    }

    handleRedirectToBooking(startDate, endDate) {
        console.log(startDate);
        this.setState({
            startDate: startDate,
            endDate: endDate,
        }, () => this.props.history.push("/book", this.state));
    }

    parseImages(data_images) {
        var imageStrings = []
        for (let i = 0; i < data_images.length; i++) {
            var imageString = data_images[i]['image']
            imageString = "/" + imageString.split("/").slice(2, 5).join("/")
            imageStrings.push(imageString)
        }
        return imageStrings
    }

    render() {
        if (this.state.pageLoaded === false) {
            return (
                <h1>Loading...</h1>
            )
        }

        var images = []
        for (let i = 0; i < this.state.images.length; i++) {
            images.push({url: this.state.images[i]})
        }
        return (
            <Grid container spacing={1} style={{overflow: 'auto'}}>
                <Grid item xs={12} align="center">
                    <h1>{this.state.name}</h1>
                    <p>{this.state.address}</p>
                    <p>{"$" + parseInt(this.state.price).toString() + " per night"}</p>

                </Grid>
                <Grid item xs={12} align="center">
                    <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                    showNavs
                    showBullets
                    style={{position: "relative"}}
                    />
                </Grid>
                <Grid item xs={12} container align="center">
                    <BookingCalendar
                    houseName={this.houseName}
                    handleRedirect={(startDate, endDate) => this.handleRedirectToBooking(startDate, endDate)}
                     />
                </Grid>
            </Grid>
        );
    }
}