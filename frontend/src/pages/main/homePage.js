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

import "./main.scss";


export default function HomePage() {

    return (
        <div className="main">
               <ContentCard>
                    <PageTitle title={"Denny B&B"} subtitle={"Like Airbnb But Shittier"} style={{color: 'ghostwhite'}}/>
                    <Button
                        to={"/list"}
                        linkText={"View All Houses"}
                        style={{height: "30px", width: "150px"}}
                    />
               </ContentCard>
        </div>
    );
}