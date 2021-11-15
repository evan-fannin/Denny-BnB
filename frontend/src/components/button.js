import React from "react";

import { Link } from "react-router-dom";
import "./components.scss";

export default function Button({ to, linkText, style}) {
    return (
        <div className="button" style={style}>
            <Link
            className='linkComponent'
            to={to}>
                {linkText}
            </Link>
        </div>
    );
}