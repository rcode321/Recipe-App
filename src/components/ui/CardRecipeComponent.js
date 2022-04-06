// import classes from "./Card.module.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));
const CardRecipeComponent = (props) => {
	return (
		<Box>
			<Grid>
				<Card sx={{ maxWidth: "100%", mx: "auto", height: "40vh" }}>
					<CardMedia
						// component="img"
						height="120"
						image="/img/Recipe_Unlimited_logo.png"
						alt=""
					/>
					{props.children}
				</Card>
			</Grid>
		</Box>
	);
};

export default CardRecipeComponent;
