// import { Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import CardComponent from "../ui/CardComponent";
import classes from "./RecipeStyles.module.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, IconButton } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";


function RecipeList(props) {

	const ExpandMore = styled((props) => {
		const { expand, ...other } = props;
		return <IconButton {...other} />;
	})(({ theme, expand }) => ({
		transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	}));
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	console.log(props.geo);
	console.log(props.directions);

	const bull = (
		<Box
			component="span"
			sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
		></Box>
	);

	return (
		<Box>
			<Card sx={{ minWidth: 275 }}>
				<Box className={classes.image}>
						<img src={props?.images} alt={props.title} />
				</Box>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							{props.description}
						</Typography>
						<Typography variant="h5" component="div" mb={2}>
							{props.title}
						</Typography>
					</CardContent>
			</Card>

			<Card>
				<Typography variant="h4">Nutrion Facts</Typography>
			</Card>
		</Box>
	);
}

export default RecipeList;
