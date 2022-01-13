import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import BookingCalendar from "../booking/bookingCalendar";

import ContentCard from "../../components/contentCard";
import LayoutContainer from "../../components/layoutContainer";
import MainContent from "../general/mainContent";
import PageTitle from "../../components/pageTitle";

import parseImageString from "../../helperFunctions/parseImageString";

import axiosInstance from '../../axios';

export default class HouseDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            price: "",
            images: [],
            startDate: null,
            endDate: null,
            loaded: false
        }
        this.houseName = this.props.match.params.houseName;
    }

    async componentDidMount() {
        const response = await axiosInstance.get('/get-house?name=' + this.houseName);
        const data = response.data;
        console.log(response.data);
        this.setState({
            name: data.name,
            address: data.address,
            price: data.price_per_night,
            images: this.parseImages(data.images),
            loaded: true
        });
    }

    handleRedirectToBooking(startDate, endDate) {
        this.setState({
            startDate: startDate,
            endDate: endDate,
        }, () => this.props.history.push("/book/" + this.houseName, this.state));
    }

    parseImages(data_images) {
        var imageStrings = [];
        for (let i = 0; i < data_images.length; i++) {
            var imageString = data_images[i]['image'];
            imageString = parseImageString(imageString);
            imageStrings.push(imageString);
        }
        return imageStrings
    }

    render() {
        if (!this.state.loaded) {
            return <div></div>;
        }
        var images = []
        for (let i = 0; i < this.state.images.length; i++) {
            images.push({url: this.state.images[i]})
        }
        return (
            <MainContent>
                <PageTitle id='title' title={this.state.name} style={{width: '50%'}} />
                <ContentCard style={{backgroundColor: "ghostwhite"}}>
                    <SimpleImageSlider id='imageSlider'
                    width={896}
                    height={504}
                    images={images}
                    showNavs
                    showBullets
                    style={{position: "relative", borderRadius: 20}}
                    />
                </ContentCard>
                <LayoutContainer style={{justifyContent: "center", alignItems: 'center'}}>
                    <ContentCard style={{flex: "1", maxWidth: '40%'}}>
                        <h2>About This House</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum scelerisque ex, et mattis nunc efficitur ut. Etiam vitae sodales velit. Suspendisse rutrum lorem non augue ultricies efficitur. Quisque porttitor arcu at sapien porttitor mattis. Suspendisse eu bibendum nunc, ac tincidunt purus. Mauris et sapien eu sapien pretium laoreet. Donec ut consequat neque. Morbi vitae tristique orci. Fusce sit amet pulvinar lectus, et interdum velit. Vivamus imperdiet consectetur gravida. Nullam ac elit vel nisl vulputate vestibulum.

Sed volutpat vulputate turpis, eu viverra dui vulputate ut. Sed tristique eleifend faucibus. Praesent lacus felis, rhoncus et tempus dapibus, laoreet vitae sem. Praesent quis ex et ante vehicula vehicula vel lobortis dolor. Mauris finibus commodo elit, fermentum suscipit nisl mollis in. Pellentesque est dolor, pharetra pellentesque mi sed, maximus pretium purus. Nunc orci nisi, feugiat bibendum venenatis a, semper ac ipsum. Nunc eu lacinia metus, non semper tortor.</p>
                    </ContentCard>
                    <ContentCard style={{height: 'fit-content',
                    backgroundColor: 'ghostwhite',
                    border: '1px solid black',
                    paddingTop: 0,
                    paddingBottom: 0}}>
                        <h3>
                            Choose Your Dates
                        </h3>
                        <BookingCalendar id='calendar'
                        houseName={this.houseName}
                        handleRedirect={(startDate, endDate) => this.handleRedirectToBooking(startDate, endDate)}
                        />
                    </ContentCard>
                </LayoutContainer>
            </MainContent>
        );
    }
}