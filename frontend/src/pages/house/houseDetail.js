import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Grid from "@material-ui/core/Grid";
import BookingCalendar from "../booking/bookingCalendar";
import { Button, Container } from "@material-ui/core";

import ContentCard from "../../components/contentCard";
import LayoutContainer from "../../components/layoutContainer";
import MainContent from "../general/mainContent";

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
        }, () => this.props.history.push("/book/" + this.houseName, this.state));
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
            <MainContent>
                <ContentCard style={{backgroundColor: "white", width: "50%"}}>
                    <h1>{this.state.name}</h1>
                </ContentCard>
                <ContentCard style={{backgroundColor: "ghostwhite"}}>
                    <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                    showNavs
                    showBullets
                    style={{position: "relative", borderRadius: 20}}
                    />
                </ContentCard>
                <LayoutContainer style={{justifyContent: "flex-end", alignItems: 'center'}}>
                    <ContentCard style={{flex: "1"}}>
                        <h2>About This House</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum scelerisque ex, et mattis nunc efficitur ut. Etiam vitae sodales velit. Suspendisse rutrum lorem non augue ultricies efficitur. Quisque porttitor arcu at sapien porttitor mattis. Suspendisse eu bibendum nunc, ac tincidunt purus. Mauris et sapien eu sapien pretium laoreet. Donec ut consequat neque. Morbi vitae tristique orci. Fusce sit amet pulvinar lectus, et interdum velit. Vivamus imperdiet consectetur gravida. Nullam ac elit vel nisl vulputate vestibulum.

Sed volutpat vulputate turpis, eu viverra dui vulputate ut. Sed tristique eleifend faucibus. Praesent lacus felis, rhoncus et tempus dapibus, laoreet vitae sem. Praesent quis ex et ante vehicula vehicula vel lobortis dolor. Mauris finibus commodo elit, fermentum suscipit nisl mollis in. Pellentesque est dolor, pharetra pellentesque mi sed, maximus pretium purus. Nunc orci nisi, feugiat bibendum venenatis a, semper ac ipsum. Nunc eu lacinia metus, non semper tortor.</p>
                    </ContentCard>
                    <ContentCard style={{height: '80%', backgroundColor: 'ghostwhite', border: '1px solid black'}}>
                        <h3>
                            Choose Your Dates
                        </h3>
                        <BookingCalendar
                        houseName={this.houseName}
                        handleRedirect={(startDate, endDate) => this.handleRedirectToBooking(startDate, endDate)}
                        />
                    </ContentCard>
                </LayoutContainer>
            </MainContent>
        );
    }
}