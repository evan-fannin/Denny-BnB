import React, { Component } from "react";

import { Card,
        CardContent
        } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";

export default class HouseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: [],
            pageLoaded: false
        };
    }

    componentDidMount() {
        fetch('/api/get-houses/')
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                houses: data,
                pageLoaded: true
            });
        });
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
        if (!this.state.pageLoaded) {
            return (<h1>Loading...</h1>);
        }
        return (
            <Grid container spacing={1} style={{overflow: 'auto'}}>
            {this.state.houses.map(house => (
                <HouseCard
                name={house.name}
                price={house.price_per_night}
                image={this.parseImages(house.images)[0]}
                />
            ))}
            </Grid>
        );
    }
}

function HouseCard(props) {
    return(
        <Grid item xs={12} align="center">
            <Card>
                <CardActionArea disableRipple href={"/house/" + props.name}>
                    <CardContent>
                        <Typography variant="h5">
                            {props.name}
                        </Typography>
                    </CardContent>
                    <CardMedia
                    className="card-image"
                    style={{height: '30%', width: '30%'}}
                    component="img"
                    src={props.image}
                    />
                    <CardContent>
                        ${props.price} per night
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}