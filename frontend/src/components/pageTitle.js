import React from "react";
import "./components.scss";

export default function PageTitle(props) {
    return props.subtitle ? (
        <div className="page-title-container" style={props.style}>
            <h1>
                {props.title}
            </h1>
            <h2>
                {props.subtitle}
            </h2>
        </div>
    ) : (
        <div className="page-title-container" style={props.style}>
            <h1>
                {props.title}
            </h1>
        </div>
    )
}