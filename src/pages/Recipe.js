import {
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import classes from "./RecipeStyles.module.css";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CardComponent from "./../components/ui/CardComponent";
import Typography from "@mui/material/Typography";

function Recipe(props) {
	const { id } = useParams();
	const [loadedMeetups, setLoadedMeetups] = useState([]);
	useEffect(() => {
		console.log(id);
		fetch(`http://localhost:3001/recipes/${id}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				// const meetups = [];

				// for (const key in data) {
				// 	const meetup = {
				// 		id: key,
				// 		...data[key],
				// 	};
				// 	meetups.push(meetup);
				// }
				setLoadedMeetups(data);
			});
	}, []);

	return (
		<Grid className={classes.container}>
			{/* <h1>Recipe Page </h1> */}
			<CardComponent>
				<Box className={classes.image}>
					<img src={loadedMeetups.images?.full} alt={props.title} />
				</Box>
				<Typography>{loadedMeetups.description}</Typography>

				{/* <li>{`Servings: ${loadedMeetups.description}`}</li>
					<li>{`Servings: ${loadedMeetups.servings}`}</li>
					<li>{`Preparation time: ${loadedMeetups.prepTime}`}</li>
					<li>{`Cooking time: ${loadedMeetups.cookTime}`}</li> */}
				<nav aria-label="secondary mailbox folders">
					<List>
						<Box disablePadding>
							<ListItem>
								<ListItemText primary={`Servings: ${loadedMeetups.servings}`} />
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Preperation time: ${loadedMeetups.prepTime}`}
								/>
							</ListItem>
							<ListItem>
								<ListItemText primary={`Cooking time: ${loadedMeetups.cookTime}`} />
							</ListItem>
						</Box>
					</List>
				</nav>
			</CardComponent>
		</Grid>
	);
}

export default Recipe;
