import React from "react";

import { Link } from "react-router-dom";
import "./components.scss";

export default function Button(props) {
    const isLink = props.to ? true : false
    console.log(props.children);

    return isLink ?
    (
        <div className="button-link" style={props.style}>
            <Link
            className='linkComponent'
            to={props.to}>
                {console.log(props.children)}
                {props.children}
            </Link>
        </div>
    ) :
    (
        <button className="button-submit" style={props.style} onClick={props.onClick}>
            {props.children}
        </button>
    );
}