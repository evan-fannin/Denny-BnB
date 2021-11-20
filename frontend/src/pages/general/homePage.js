import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import PageTitle from "../../components/pageTitle";
import Button from "../../components/button";
import ContentCard from "../../components/contentCard";

import "./general.scss";


export default function HomePage() {

    return (
        <div className="home-page">
               <ContentCard style={{width: "60%"}}>
                    <PageTitle title={"Denny B&B"} subtitle={"Like Airbnb But Shittier \u2122"} style={{color: 'ghostwhite'}}/>
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