import React from "react";

export default function ContentCard(props) {
    const className = props.hover ?
    (props.hover === true ? "content-card" : "content-card-no-hover") :
    "content-card-no-hover"
    return (
        <div className={className} style={props.style} onClick={props.onClick}>
            {props.children}
        </div>
    )
}