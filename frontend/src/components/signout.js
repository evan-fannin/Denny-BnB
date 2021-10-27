import React, { useEffect } from "react";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


export default function SignOut() {
    const history = useHistory();

    useEffect(() => {
        localStorage.removeItem('access_token');
	    localStorage.removeItem('refresh_token');
	    history.push('/');
    });

    return(
        <div>
        </div>
    );
}