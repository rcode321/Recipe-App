// import classes from "./Card.module.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
// import { Link } from "react-router-dom";

const CardComponent = (props) => {
	return (
		<Box>
			<Card
				sx={{
					width: 600,
					marginTop: 20,
				}}
			>
				{props.children}
			</Card>
		</Box>
	);
};

export default CardComponent;
