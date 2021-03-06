import React, { useState } from "react";

import {
	Typography,
	Toolbar,
	AppBar,
	Link,
	makeStyles
} from "@material-ui/core";
import {} from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { Link as LinkRo, withRouter } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logOut } from "../../state/actions";

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1
	},
	navigationLink: {
		marginLeft: 15,
		"&:hover": {
			color: "#61D0D4",
			textDecoration: "none"
		}
	},
	title_h6: {
		fontSize: 15,
		fontWeight: 900,
		letterSpacing: 1
	},
	user_button: {
		marginLeft: "15px"
	}
}));

function HeaderComponent(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [selectedTab, setSelectedTab] = useState(props.tab);

	const handleClick = tabName => {
		setSelectedTab(tabName);
	};

	const handleLogout = () => {
		dispatch(logOut());
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h5">ToDo Application</Typography>
				<Link
					to="/"
					component={LinkRo}
					className={classes.navigationLink}
					color={selectedTab === "home" ? "secondary" : "inherit"}
					onClick={() => handleClick("home")}
				>
					<Typography variant="h5">Home</Typography>
				</Link>
				<Link
					to="/todos"
					component={LinkRo}
					className={classes.navigationLink}
					color={selectedTab === "todos" ? "secondary" : "inherit"}
					onClick={() => handleClick("todos")}
				>
					<Typography variant="h5">ToDos</Typography>
				</Link>
				<div className={classes.grow} />
				<Link
					to="/logout"
					component={LinkRo}
					className={classes.navigationLink}
					color="inherit"
					onClick={handleLogout}
				>
					<ExitToAppIcon fontSize="large" />
				</Link>
			</Toolbar>
		</AppBar>
	);
}

export default withRouter(HeaderComponent);
