import classes from "./RecipeStyles.module.css";

import { Box } from "@mui/system";
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useEffect, useState } from "react";
import axios from "axios";

function RecipeList(props) {
	// const [loadedMeetups2, setLoadedMeetups2] = useState({ recipe: [] });

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const fetchRecipes = await axios(`http://localhost:3001/recipes/`);
	// 		setLoadedMeetups2({ recipe: fetchRecipes.data });

	// 		console.log(fetchRecipes);
	// 	};
	// 	fetchData();
	// }, []);

	return (
		<Box display={"flex"}>
			<Box className={classes.container}>
				<Box className={classes.image}>
					<img src={props?.images} alt={props.title} />
				</Box>
			</Box>
			<Box>
				<List>
					<ListItem disablePadding>
						<ListItemIcon sx={{ minWidth: "30px" }}>
							<CircleIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText primary={`Servings: ${props.servings}`} />
					</ListItem>
					<ListItem disablePadding>
						<ListItemIcon sx={{ minWidth: "30px" }}>
							<CircleIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText primary={`PrepTime: ${props.prepTime}`} />
					</ListItem>
					<ListItem disablePadding>
						<ListItemIcon sx={{ minWidth: "30px" }}>
							<CircleIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText primary={`CookTime: ${props.cookTime}`} />
					</ListItem>
					{/* {props.directions.map((direct) => (
						<li>{direct?.directions}</li>
					))} */}
					{/* {props?.recipe?.directions?.map((direct) => (
						<li>{direct?.directions}</li>
					))} */}
					{props.directions}
					{/* {props?.directions[{ ...props }]?.instructions} */}
					sdsss
				</List>
				{props.ingredients}
			</Box>
			{/* <Typography> {`Servings: ${props.servings}`}</Typography> */}
		</Box>

		// <Card sx={{ minWidth: 275 }}>
		// 	<Box className={classes.image}>
		// 		<img src={props?.images} alt={props.title} />
		// 	</Box>
		// 	<CardContent>
		// 		<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
		// 			{props.description}
		// 		</Typography>
		// 		<Typography variant="h5" component="div" mb={2}>
		// 			{props.title}
		// 		</Typography>
		// 		<Typography sx={{ mb: 1.5 }} color="text.primary">
		// 			{`Servings: ${props.servings}`}
		// 		</Typography>
		// 		<Typography sx={{ mb: 1.5 }} color="text.primary">
		// 			{`PrepTime: ${props.prepTime}`}
		// 		</Typography>
		// 		<Typography sx={{ mb: 1.5 }} color="text.primary">
		// 			{`CookTime: ${props.cookTime}`}
		// 		</Typography>
		// 		<Divider />
		// 		<Box sx={{ display: "flex" }}>
		// 			<Typography>Directions</Typography>
		// 			<ExpandMore
		// 				expand={expanded}
		// 				onClick={handleExpandClick}
		// 				aria-expanded={expanded}
		// 				aria-label="show more"
		// 			>
		// 				<ExpandMoreIcon />
		// 			</ExpandMore>
		// 		</Box>
		// 		<Collapse in={expanded} timeout="auto" unmountOnExit>
		// 			<CardContent>
		// 				<Typography paragraph>Method:</Typography>
		// 				<Typography paragraph>
		// 					{props.directions?.map((direction) => (
		// 						<Typography>{direction.instructions}</Typography>
		// 					))}
		// 				</Typography>
		// 				<Typography></Typography>
		// 			</CardContent>
		// 		</Collapse>
		// 		<Typography variant="body2" mt={2}>
		// 			{`Post Date: ${props.postDate}`}
		// 			<br />
		// 			{`Edit Date: ${props.editDate}`}
		// 		</Typography>
		// 	</CardContent>
		// </Card>
	);
}

export default RecipeList;
