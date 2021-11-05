import React, { useContext } from "react";
import {
    AppBar,
    Button,
    CssBaseline,
    Toolbar,
    Typography,
     makeStyles
} from "@material-ui/core";
import {
    Link
} from "react-router-dom";
import { AuthContext } from "../context";


const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	toolbarTitle: {
		flexGrow: 1,
	},
}));


export default function Header() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
				color="default"
				elevation={0}
				className={classes.appBar}>
                <Toolbar>
                    <Typography
                        style={{flex: 1}}
                        variant="h6"
						color="inherit"
						noWrap
                    >
						<Link
							to="/"
							color="textPrimary"
							style={{ textDecoration: 'none' }}
						>
							Denny B&B
						</Link>
					</Typography>
					<LogInOut />
                </Toolbar>
            </AppBar>
        </>
    )
}

function LogInOut(props) {
    const { authenticated, setAuthenticated } = useContext(AuthContext);

    return authenticated ?
    (<Button
        justify="right"
        color="primary"
        variant="outlined"
        component={Link}
        to="/signout"
    >
        Sign Out
    </Button>) :
    (<Button
        justify="right"
        color="primary"
        variant="outlined"
        component={Link}
        to="/login"
    >
        Login
    </Button>);
}