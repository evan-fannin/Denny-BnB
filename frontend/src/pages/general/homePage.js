import React from "react";

import PageTitle from "../../components/pageTitle";
import Button from "../../components/button";
import ContentCard from "../../components/contentCard";

import "./general.scss";


export default function HomePage() {

    return (
        <div className="home-page">
               <ContentCard style={{width: "60%"}}>
                    <PageTitle
                    title={"Denny B&B"}
                    subtitle={"Like Airbnb... Sort Of \u2122"}
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