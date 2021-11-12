import React from "react";

import { Link } from "react-router-dom";
import "./components.scss";

export default function Button({ to, linkText }) {
    return (
        <div className="button">
            <Link
            style={{'text-decoration': 'none'}}
            to={to}>
                {linkText}
            </Link>
        </div>
    );
}