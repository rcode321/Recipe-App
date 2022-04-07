import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";

import classes from "./RecipeStyles.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Specials from "../components/meetups/Specials";
import RecipeList from "../components/meetups/RecipeList";
import { ListItem, Paper } from "@mui/material";

function Recipe(props) {
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
			console.log(fetchRecipes, "fetchRecipes", fetchSpecials, "fetchSpecials");
			console.log(typeof fetchRecipes);
		};
		fetchData();
	}, [id]);

	const direction = loadedMeetups?.recipe?.directions?.map((dir) => (
		<Typography key={dir.instructions}>{dir.instructions}</Typography>
	));

	const ingredient = loadedMeetups?.recipe?.ingredients?.map((keys) => (
		<Box m={2}>
			<Paper>
				<Typography>
					<ListItem>name :{keys.name}</ListItem>
					<ListItem>amount: {keys.amount}</ListItem>
					<ListItem>measurement:{keys.measurement}</ListItem>
				</Typography>		
			</Paper>
		</Box>
	));

	return (
		<Box mt={2}>
			<Box>
				<RecipeList
					servings={loadedMeetups.recipe?.servings}
					prepTime={loadedMeetups.recipe?.prepTime}
					cookTime={loadedMeetups.recipe?.cookTime}
					postDate={loadedMeetups.recipe?.postDate}
					editDate={loadedMeetups.recipe?.editDate}
					description={loadedMeetups.recipe.description}
					images={loadedMeetups.recipe.images?.full}
					title={loadedMeetups.recipe?.title}
					directions={direction}
					ingredients={ingredient}
					geo={specials?.geo}
				/>
			</Box>
			<Specials
				type={specials?.type}
				title={specials?.title}
				text={specials?.text}
				code={specials?.code}
				geo={specials?.geo}
			/>
		</Box>
	);
}

export default Recipe;
