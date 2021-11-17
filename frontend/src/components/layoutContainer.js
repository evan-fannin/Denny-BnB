import React from "react";

export default function(props) {
    return (
        <div className="layout-container" style={props.style}>
            {props.children}
        </div>
    );
}