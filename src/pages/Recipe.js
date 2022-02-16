import {
	dividerClasses,
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
import axios from "axios";

function Recipe({title, text, type, geo, }) {
	console.log(title)
	const { id } = useParams();
	// const {ingredientId} = props
	// console.log(ingredientId)
	const [loadedMeetups, setLoadedMeetups] = useState({ data: [], repos: [] });
	// console.log(loadedMeetups)
	const specialsData = loadedMeetups.repos[0]
	console.log(specialsData)
	const recipesData = loadedMeetups.data.ingredients
	console.log(recipesData)
	
	useEffect(() => {
		const fetchData = async () => {
			const respGlobal = await axios(
				`http://localhost:3001/recipes/${id}`
				);
				const respRepos = await axios(
					`http://localhost:3001/specials/`
					);
					setLoadedMeetups({ data: respGlobal.data, repos: respRepos.data });

				};
				fetchData();
			}, []);

			console.log(loadedMeetups.repos[0]?.text)
			console.log(Object.keys(loadedMeetups))
			if(specialsData === recipesData) {
				console.log(specialsData)
			
			}
			
			
			return (
				<Grid className={classes.container}>
				<CardComponent>
				<Box className={classes.image}>
				<img src={loadedMeetups.data?.images?.full} alt={title} />
				</Box>
				<p>{loadedMeetups.repos.title}</p>
				<h2>{`SPECIALS: ${loadedMeetups.repos[0]?.title}`}</h2>
			
			<Typography>{loadedMeetups.description}</Typography>
				<nav aria-label="secondary mailbox folders">
					<List>
						<Box disablePadding>
							<ListItem>
								<ListItemText primary={`Servings: ${loadedMeetups.data?.servings}`} />
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Preperation time: ${loadedMeetups.data?.prepTime}`}
								/>
							</ListItem>
							<ListItem>
								<ListItemText primary={`Cooking time: ${loadedMeetups.data?.cookTime}`} />
							</ListItem>
						</Box>
					</List>
				</nav>
			</CardComponent>
		</Grid>
	);
}

export default Recipe;
