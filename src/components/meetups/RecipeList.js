import classes from "./RecipeStyles.module.css";

import * as React from "react";
import { Box } from "@mui/system";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";

const RecipeList = ({
	directions,
	ingredients,
	title,
	servings,
	prepTime,
	cookTime,
	description,
	editDate,
	postDate,
	images,
	data,
}) => {
	const bull = (
		<Box
			component="span"
			sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
		>
			•
		</Box>
	);
	return (
		<Box>
			<Typography variant="h3"> {title}</Typography>
			<Box className={classes.image}>
				<img src={images} alt={title} />
			</Box>

			<Card sx={{ maxWidth: 275 }} className={classes.card}>
				<CardContent>
					<Typography variant="h4" color="text.primary" gutterBottom>
						{description}
					</Typography>
					<Typography variant="body1" component="div">
						{`Cooktime - ${cookTime} min `}
					</Typography>
					<Typography variant="body1" component="div">
						{`Servings - ${servings} Person`}
					</Typography>
					<Typography variant="body1" component="div">
						{`Preptime - ${prepTime} min`}
					</Typography>
					<br />
					<Typography variant="subtitle2" sx={{ mb: 1.5 }} color="text.secondary">
						{editDate}
					</Typography>

					<Typography variant="subtitle2" sx={{ mb: 1.5 }} color="text.secondary">
						{postDate}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default RecipeList;
