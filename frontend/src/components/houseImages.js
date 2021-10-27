import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Grid from "@material-ui/core/Grid";

export default class HouseImages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            pageLoaded: false
        }
        this.houseName = this.props.match.params.houseName;
    }

    componentDidMount() {
        fetch("/api/get-house?name=" + this.houseName)
        .then(response => response.json())
        .then(data => {
            this.setState({
                images: this.parseImages(data.images),
                pageLoaded: true
            })
        })
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
                <p></p>
            )
        }

        var images = []
        for (let i = 0; i < this.state.images.length; i++) {
            images.push({url: this.state.images[i]})
        }

        return(
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                        <SimpleImageSlider
                        height={500}
                        width={800}
                        images={images}
                        showNavs
                        showBullets
                        style={{display: "flex"}}
                        />
                    </Grid>
            </Grid>
        )
    }
}