import React from "react";
import "./components.scss";

export default function ImageCard({ src, ...props }) {
    return (
        <div className="image-card">
            <img src={src}/>
        </div>
    )
}