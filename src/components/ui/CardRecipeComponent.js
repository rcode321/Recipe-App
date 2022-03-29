// import classes from "./Card.module.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
// import { Link } from "react-router-dom";

const CardRecipeComponent = (props) => {
	return (
		<Card sx={{ maxWidth: 345, mx: "auto" }}>
			<CardMedia
				// component="img"
				height="120"
				image="/img/Recipe_Unlimited_logo.png"
				alt=""
			/>
			{props.children}
		</Card>
	);
};

export default CardRecipeComponent;
