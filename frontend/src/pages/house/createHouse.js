import React, { Component } from "react";

import ContentCard from "../../components/contentCard";
import MainContent from "../general/mainContent";
import PageTitle from "../../components/pageTitle";
import Button from '../../components/button';

import axiosInstance from "../../axios";

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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value.trim()
        });
    }

    async handleCreateRoom(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("name", this.state.houseName);
        formData.append("address", this.state.houseAddress);
        formData.append("price_per_night", this.state.housePrice);
        for (let [i, image] of this.state.houseImages.entries()) {
            formData.append("image" + i.toString(), image)
        }
        const requestOptions = {
            method: 'POST',
            body: formData
        };

        for (let pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
        }

        try {
            const response = await axiosInstance.post("create-house/", formData);
            const data = response.data;
            this.props.history.push('/house/' + data.name);
        } catch (error) {
            console.log(error);
        }
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
        if (e.target.files.length !== 0) {
            const houseImages = this.state.houseImages.slice()
            for (const file of e.target.files) {
                houseImages.push(file);
            }
            this.setState({
                houseImages: houseImages
            });
        }
    }

    handleUploadButtonClick = (e) => {
        e.preventDefault();
        document.getElementById('imageInput').click();
    }

    render() {
        return (
            <MainContent>
                <PageTitle title='Create a House' />
                <ContentCard> 
                    <form className='form' noValidate>
                        <label>
                            House Name
                            <input
                                required
                                id="houseName"
                                label="House Name"
                                name="houseName"
                                autoFocus
                                onChange={(e) => this.handleChange(e)}
                            />
                        </label>
                        <label>
                            House Address
                            <input
                                autoComplete="address"
                                required
                                id="houseAddress"
                                label="House Address"
                                name="houseAddress"
                                onChange={(e) => this.handleChange(e)}
                            />
                        </label>
                        <label>
                            Price Per Night
                            <input
                                required
                                id="price"
                                label="Price Per Night"
                                name="housePrice"
                                onChange={(e) => this.handleChange(e)}
                            />
                        </label>
                        <label>
                            House Images
                            <input
                                accept="image/*"
                                hidden
                                onChange={this.handleHouseImageChange}
                                id="imageInput"
                                multiple
                                type="file"
                            />
                                <Button 
                                onClick={(e) => this.handleUploadButtonClick(e)}>Upload</Button>
                        </label>  
                        {this.state.houseImages.map((image, i) => <p key={i}>{image['name']}</p>)}
                        <Button
                        onClick={(e) => this.handleCreateRoom(e)}>
                        Add House
                        </Button>
                    </form>
            </ContentCard>
        </MainContent>
        );
    }
}
