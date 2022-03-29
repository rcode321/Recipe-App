import { Box } from "@mui/system";
import classes from "./RecipeStyles.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Specials from "../components/meetups/Specials";
import RecipeList from "../components/meetups/RecipeList";

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

	// const [loadedMeetups2, setLoadedMeetups2] = useState({ recipe2: [] });
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const fetchRecipes2 = await axios(`http://localhost:3001/recipes/`);
	// 		setLoadedMeetups2({ ...loadedMeetups2 });
	// 		console.log(fetchRecipes2, "fetchRecipes");
	// 		fetchRecipes2?.data?.map((el) => <li>{el?.data?.directions}</li>);
	// 		console.log(fetchRecipes2, "mapping");
	// 		// console.log(typeof fetchRecipes2);
	// 		console.log(Array.isArray(fetchRecipes2));
	// 	};
	// 	fetchData();
	// }, []);

	return (
		<>
			<Box mt={20}>
				<Box>
					<RecipeList
						servings={loadedMeetups.recipe?.servings}
						prepTime={loadedMeetups.recipe?.prepTime}
						cookTime={loadedMeetups.recipe?.cookTime}
						postDate={loadedMeetups.recipe?.postDate}
						editDate={loadedMeetups.recipe?.editDate}
						// description={loadedMeetups.recipe?.description}
						images={loadedMeetups.recipe.images?.full}
						title={loadedMeetups.recipe?.title}
						directions={loadedMeetups?.recipe?.directions?.map((dir) => (
							<li>{dir?.instructions}</li>
						))}
						ingredients={loadedMeetups?.recipe?.ingredients?.map((ingredients) => (
							<>
								<li>{ingredients?.measurement}</li>
							</>
						))}
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
		</>
	);
}

export default Recipe;
