import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core//CardContent';
import CardMedia from "@material-ui/core/CardMedia";

import PageTitle from "../../components/pageTitle";
import ImageCard from "../../components/imageCard";

import "./main.scss";


export default function HomePage() {

    return (
        <div className="main">
               <PageTitle title={"Denny B&B"} subtitle={"Like Airbnb But Shittier"} />
               <ImageCard src="/static/images/slum_house.jpeg" />
                <Link to="/list">
                     <button type="button">
                          View All Houses
                     </button>
                </Link>
        </div>
    );
}