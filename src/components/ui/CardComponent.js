// import classes from "./Card.module.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
// import { Link } from "react-router-dom";

const CardComponent = (props) => {
	return (
	
			<Card
				sx={{
					width: 600,
					marginTop: 20,
				}}
			>
				<CardMedia
					// component="img"
					// height="120"
					// image=""
					// alt=""
				/>
				{props.children}
			</Card>
		
	);
};

export default CardComponent;
