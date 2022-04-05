// import classes from "./Card.module.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
// import { Link } from "react-router-dom";

const CardComponent = (props) => {
	return (
<<<<<<< HEAD
	
=======
		<Box>
>>>>>>> e1405c9ffa3be8d3b61cd8357b4aa78ab0a352ba
			<Card
				sx={{
					width: 600,
					marginTop: 20,
				}}
			>
<<<<<<< HEAD
				<CardMedia
					// component="img"
					// height="120"
					// image=""
					// alt=""
				/>
				{props.children}
			</Card>
		
=======
				{props.children}
			</Card>
		</Box>
>>>>>>> e1405c9ffa3be8d3b61cd8357b4aa78ab0a352ba
	);
};

export default CardComponent;
