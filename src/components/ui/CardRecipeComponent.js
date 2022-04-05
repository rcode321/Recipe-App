// import classes from "./Card.module.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
// import { Link } from "react-router-dom";

const CardRecipeComponent = (props) => {
	return (
<<<<<<< HEAD
		<Grid>
			{/* <Link to={`/recipes/${uuid}`}> */}
			<Card sx={{ maxWidth: 345, mx: 'auto', }} >
				<CardMedia
					component="img"
					height="120"
					image="/img/Recipe_Unlimited_logo.png"
					alt=""
				/>
				{props.children}
			</Card>
			{/* </Link> */}
		</Grid>
=======
		<Card sx={{ maxWidth: 345, mx: "auto" }}>
			<CardMedia
				// component="img"
				height="120"
				image="/img/Recipe_Unlimited_logo.png"
				alt=""
			/>
			{props.children}
		</Card>
>>>>>>> e1405c9ffa3be8d3b61cd8357b4aa78ab0a352ba
	);
};

export default CardRecipeComponent;
