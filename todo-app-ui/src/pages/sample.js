import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`wrapped-tabpanel-${index}`}
			aria-labelledby={`wrapped-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `wrapped-tab-${index}`,
		"aria-controls": `wrapped-tabpanel-${index}`
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper
	},
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	}
}));

export default function TabsWrappedLabel() {
	const classes = useStyles();
	const [value, setValue] = React.useState("one");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.paper}>
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label="wrapped label tabs example"
			>
				<Tab value="one" label="SignUp" {...a11yProps("one")} />
				<Tab value="two" label="SignIn" {...a11yProps("two")} />
			</Tabs>
			<TabPanel value={value} index="one">
				<SignUp />
			</TabPanel>
			<TabPanel value={value} index="two">
				<SignIn />
			</TabPanel>
		</div>
	);
}
