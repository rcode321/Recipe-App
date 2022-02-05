// import classes from "./Card.module.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
// import { Link } from "react-router-dom";

const CardComponent = (props) => {
	return (
		<Grid m={2}>
			<Card
				sx={{
					width: 600,
				}}
			>
				<CardMedia
					component="img"
					height="120"
					image="/img/Recipe_Unlimited_logo.png"
					alt="green iguana"
				/>
				{props.children}
			</Card>
		</Grid>
	);
};

export default CardComponent;
