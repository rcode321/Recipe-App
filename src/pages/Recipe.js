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
import { useParams } from "react-router-dom";
import CardComponent from "./../components/ui/CardComponent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Specials from "../components/meetups/Specials";
import RecipeList from "../components/meetups/RecipeList";

function Recipe({ title, text, type, geo }) {
	const { id } = useParams();
	const [loadedMeetups, setLoadedMeetups] = useState({ recipe: [], special: [] });
	const [specials, setSpecials] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const fetchRecipes = await axios(`http://localhost:3001/recipes/${id}`);
			const fetchSpecials = await axios(`http://localhost:3001/specials/`);
			setLoadedMeetups({ recipe: fetchRecipes.data, special: fetchSpecials.data });

			let hasSpecial = false;
			fetchRecipes?.data?.ingredients.forEach((ingr) => {
				if (!hasSpecial) {
					fetchSpecials?.data?.forEach((e) => {
						if (e.ingredientId === ingr.uuid) {
							setSpecials({ ...e });
							hasSpecial = true;
						}
					});
				}
			});
			// console.log(respGlobal, respRepos, "datauus");
		};
		fetchData();
	}, [id]);

	console.log(specials, "specials");
	return (
		<>
			<CardComponent>
				<RecipeList
					servings={loadedMeetups.recipe?.servings}
					prepTime={loadedMeetups.recipe?.prepTime}
					cookTime={loadedMeetups.recipe?.cookTime}
					images={loadedMeetups.recipe.images?.full}
				/>
			</CardComponent>
			<Box>
				<Specials
					type={specials?.type}
					title={specials?.title}
					text={specials?.text}
					code={specials?.code}
				/>
			</Box>
		</>

		// <Grid className={classes.container}>
		// 	<CardComponent>
		// 		<Box className={classes.image}>
		// 			<img src={loadedMeetups.recipe?.images?.full} alt={title} />
		// 		</Box>
		// 		<p>{loadedMeetups.recipe.title}</p>
		// 		{/* <h2>{`SPECIALS: ${specials?.title ? specials.title : "None"}`}</h2> */}

		// 		<Typography>{loadedMeetups.description}</Typography>
		// 		<nav aria-label="secondary mailbox folders">
		// 			<List>
		// 				<Box disablePadding>
		// 					<ListItem>
		// 						<ListItemText
		// 							primary={`Servings: ${loadedMeetups.recipe?.servings}`}
		// 						/>
		// 					</ListItem>
		// 					<ListItem>
		// 						<ListItemText
		// 							primary={`Preperation time: ${loadedMeetups.recipe?.prepTime}`}
		// 						/>
		// 					</ListItem>
		// 					<ListItem>
		// 						<ListItemText
		// 							primary={`Cooking time: ${loadedMeetups.recipe?.cookTime}`}
		// 						/>
		// 					</ListItem>
		// 				</Box>
		// 			</List>
		// 		</nav>
		// 	</CardComponent>
		// </Grid>
	);
}

export default Recipe;
