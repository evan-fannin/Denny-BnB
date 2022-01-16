import React from "react";

import PageTitle from "../../components/pageTitle";
import Button from "../../components/button";
import ContentCard from "../../components/contentCard";

import "./general.scss";

import { staticURL } from "../../axios";


export default function HomePage() {
    const backgroundImageURL = staticURL + 'denny_bnb_homepage.jpeg';
    const backgroundImageStyle = {
        backgroundImage: 'url(' + backgroundImageURL + ')'
    };

    return (
        <div className="home-page" style={backgroundImageStyle}>
               <ContentCard style={{width: "60%"}}>
                    <PageTitle
                    title={"Denny B&B"}
                    subtitle={"Like Airbnb But Dumpier \u2122"}
                    style={{color: 'ghostwhite'}}
                    />
                    <Button
                        to={"/list"}
                        style={{height: "30px"}}
                    >
                    View All Houses
                    </Button>
               </ContentCard>
        </div>
    );
}