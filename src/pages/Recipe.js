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

function Recipe({ title, text, type, geo }) {
	const { id } = useParams();
	const [loadedMeetups, setLoadedMeetups] = useState({ data: [], repos: [] });
	const [specials, setSpecials] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const respGlobal = await axios(`http://localhost:3001/recipes/${id}`);
			const respRepos = await axios(`http://localhost:3001/specials/`);
			setLoadedMeetups({ data: respGlobal.data, repos: respRepos.data });

			let hasSpecial = false;
			respGlobal?.data?.ingredients.forEach((ingr) => {
				if (!hasSpecial) {
					respRepos?.data?.forEach((e) => {
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
		<Grid className={classes.container}>
			<CardComponent>
				<Box className={classes.image}>
					<img src={loadedMeetups.data?.images?.full} alt={title} />
				</Box>
				<p>{loadedMeetups.repos.title}</p>
				<h2>{`SPECIALS: ${specials?.title ? specials.title : "None"}`}</h2>

				<Typography>{loadedMeetups.description}</Typography>
				<nav aria-label="secondary mailbox folders">
					<List>
						<Box disablePadding>
							<ListItem>
								<ListItemText
									primary={`Servings: ${loadedMeetups.data?.servings}`}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Preperation time: ${loadedMeetups.data?.prepTime}`}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Cooking time: ${loadedMeetups.data?.cookTime}`}
								/>
							</ListItem>
						</Box>
					</List>
				</nav>
			</CardComponent>
		</Grid>
	);
}

export default Recipe;
