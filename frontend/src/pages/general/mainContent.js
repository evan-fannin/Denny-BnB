import React from "react";

import "./general.scss";

export default function MainContent(props) {
    return(
        <div className="main-content">
            {props.children}
        </div>
    );
}