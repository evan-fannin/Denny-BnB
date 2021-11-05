import React, { useEffect, useContext } from "react";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import axiosInstance from "../axios";
import { AuthContext } from "../context";


export default function SignOut(props) {
    const { authenticated, setAuthenticated } = useContext(AuthContext);

    const history = useHistory();

    useEffect(() => {
        const response = axiosInstance.post('users/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token')
        });
        localStorage.removeItem('access_token');
	    localStorage.removeItem('refresh_token');
	    axiosInstance.defaults.headers["Authorization"] = null;
	    setAuthenticated(false);
	    history.push('/');
    });

    return(
        <div>
        </div>
    );
}