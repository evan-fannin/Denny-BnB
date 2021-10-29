import React, { useEffect } from "react";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import axiosInstance from "../axios";


export default function SignOut() {
    const history = useHistory();

    useEffect(() => {
        const response = axiosInstance.post('users/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token')
        });
        localStorage.removeItem('access_token');
	    localStorage.removeItem('refresh_token');
	    axiosInstance.defaults.headers["Authorization"] = null;
	    history.push('/');
    });

    return(
        <div>
        </div>
    );
}