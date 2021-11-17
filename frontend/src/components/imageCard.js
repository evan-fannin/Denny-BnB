import React from "react";
import "./components.scss";

export default function ImageCard(props) {
    return (
        <div className="image-card" style={props.style}>
            <img src={props.src}/>
        </div>
    )
}