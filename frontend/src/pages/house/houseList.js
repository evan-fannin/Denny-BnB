import React, { Component } from "react";
import { useHistory } from "react-router-dom";

import { Card,
        CardContent
        } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";

import MainContent from "../general/mainContent";
import ContentCard from "../../components/contentCard";
import CardLinkArea from "../../components/cardLinkArea";
import ImageCard from "../../components/imageCard";

import axiosInstance from "../../axios";

export default class HouseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: [],
            pageLoaded: false
        };
    }

    componentDidMount() {
        axiosInstance.get('get-houses/')
        .then(response => {
            console.log(response.data);
            this.setState({
                houses: response.data,
                pageLoaded: true
            });
        });
//        fetch('/api/get-houses/')
//        .then((response) => response.json())
//        .then(data => {
//            console.log(data)
//            this.setState({
//                houses: data,
//                pageLoaded: true
//            });
//        });
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
            <MainContent>
            {this.state.houses.map(house => (
                <HouseCard
                key={house.name}
                name={house.name}
                price={house.price_per_night}
                image={this.parseImages(house.images)[0]}
                />
            ))}
            </MainContent>
        );
    }
}

function HouseCard(props) {
    const history = useHistory();

    const handleClick = () => {
        history.push('/house/' + props.name);
    };

    return(
        <ContentCard
        style={{width: '40%', height: '50%', backgroundColor: 'ghostwhite', border: '1px solid rgba(0,0,0,.5)'}}
        hover={true}>
            <CardLinkArea onClick={handleClick}>
                <h3 style={{textAlign: 'center'}}>
                    {props.name}
                </h3>
                <ImageCard src={props.image} style={{width: '100%', height: '70%'}}/>
                <p style={{textAlign: 'center'}}>
                    ${parseInt(props.price)} / night
                </p>
            </CardLinkArea>
        </ContentCard>
    );
}