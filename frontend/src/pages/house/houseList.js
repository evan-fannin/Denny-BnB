import React, { Component } from "react";

import MainContent from "../general/mainContent";
import PageTitle from "../../components/pageTitle";
import HouseCard from './houseCard';

import axiosInstance from "../../axios";
import parseImageString from "../../helperFunctions/parseImageString";

export default class HouseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: [],
        };
    }

    async componentDidMount() {
        const response = await axiosInstance.get('get-houses/');
        this.setState({
            houses: response.data
        });
    }

    parseImages(data_images) {
        var imageStrings = [];
        for (let i = 0; i < data_images.length; i++) {
            var imageString = data_images[i]['image']
            imageString = parseImageString(imageString);
            imageStrings.push(imageString);
        }
        return imageStrings;
    }

    render() {
        return (
            <MainContent>
            <PageTitle title='All Houses' />
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

