import classes from "./RecipeStyles.module.css";

<<<<<<< HEAD
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
=======
import { Box } from "@mui/system";
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

const RecipeList = ({
	directions,
	ingredients,
	title,
	servings,
	prepTime,
	cookTime,
	description,
	editDate,
	images,
	data,
}) => {
	function generate(element) {
		return [0].map((value) =>
			React.cloneElement(element, {
				key: value,
			})
		);
	}
	const Demo = styled("div")(({ theme }) => ({
		backgroundColor: theme.palette.background.paper,
	}));

	const [dense, setDense] = React.useState(false);
	const [secondary, setSecondary] = React.useState(false);
	// const [name, amount] = ingredients;

	return (
		<Box display={"flex"}>
			<Box className={classes.container}>
				<Typography variant="h3"> {description}</Typography>
				<Box className={classes.image}>
					<img src={images} alt={title} />
				</Box>
			</Box>
			<Paper>
				<Demo>
					<List>
						{generate(
							<ListItem>
								<ListItemIcon>
									<FolderIcon />
								</ListItemIcon>
								<ListItemText
									primary={ingredients?.name}
									secondary={secondary ? "Secondary text" : null}
								/>
							</ListItem>
						)}
					</List>
				</Demo>
			</Paper>
>>>>>>> e1405c9ffa3be8d3b61cd8357b4aa78ab0a352ba
		</Box>
	);
};

export default RecipeList;
