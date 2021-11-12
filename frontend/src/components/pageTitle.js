import React from "react";
import "./components.scss";

export default function PageTitle(props) {
    return (
        <div className="page-title-container">
            <h1>
                {props.title}
            </h1>
            <h2>
                {props.subtitle ? props.subtitle : ""}
            </h2>
        </div>
    )
}