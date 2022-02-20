// import { Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import CardComponent from "../ui/CardComponent";
import classes from "./RecipeStyles.module.css";

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Divider, IconButton } from "@mui/material";
// import { useState } from "react";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import Collapse from "@mui/material/Collapse";
// import { styled } from "@mui/material/styles";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

function RecipeList(props) {
	const rows = [
		createData(
			"Frozen yoghurt",
			`${props.servings} person`,
			`${props.prepTime} minutes`,
			`${props.cookTime} minutes`
		),
		createData("Ingredients", `${props.ingredients?.amount}`, 9.0, 37),
		// createData("Eclair", 262, 16.0, 24, 6.0),
		// createData("Cupcake", 305, 3.7, 67, 4.3),
		// createData("Gingerbread", 356, 16.0, 49, 3.9),
	];
	// const ExpandMore = styled((props) => {
	// 	const { expand, ...other } = props;
	// 	return <IconButton {...other} />;
	// })(({ theme, expand }) => ({
	// 	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	// 	marginLeft: "auto",
	// 	transition: theme.transitions.create("transform", {
	// 		duration: theme.transitions.duration.shortest,
	// 	}),
	// }));
	// const [expanded, setExpanded] = useState(false);

	// const handleExpandClick = () => {
	// 	setExpanded(!expanded);
	// };

	// console.log(props.geo);
	// console.log(props.directions);

	// const bull = (
	// 	<Box
	// 		component="span"
	// 		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	// 	></Box>
	// );

	return (
		<TableContainer component={Paper}>
			<Box className={classes.image}>
				<img src={props?.images} alt={props.title} />
			</Box>
			<Table sx={{ minWidth: 550 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Dessert</TableCell>
						<TableCell align="right">Servings</TableCell>
						<TableCell align="right">Prep Time&nbsp;(g)</TableCell>
						<TableCell align="right">Cook Time&nbsp;(g)</TableCell>
						{/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.calories}</TableCell>
							<TableCell align="right">{row.fat}</TableCell>
							<TableCell align="right">{row.carbs}</TableCell>
							<TableCell align="right">{row.protein}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
		// <Card sx={{ minWidth: 275 }}>
		// 	<Box className={classes.image}>
		// 		<img src={props?.images} alt={props.title} />
		// 	</Box>
		// 	<CardContent>
		// 		<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
		// 			{props.description}
		// 		</Typography>
		// 		<Typography variant="h5" component="div" mb={2}>
		// 			{props.title}
		// 		</Typography>
		// 		<Typography sx={{ mb: 1.5 }} color="text.primary">
		// 			{`Servings: ${props.servings}`}
		// 		</Typography>
		// 		<Typography sx={{ mb: 1.5 }} color="text.primary">
		// 			{`PrepTime: ${props.prepTime}`}
		// 		</Typography>
		// 		<Typography sx={{ mb: 1.5 }} color="text.primary">
		// 			{`CookTime: ${props.cookTime}`}
		// 		</Typography>
		// 		<Divider />
		// 		<Box sx={{ display: "flex" }}>
		// 			<Typography>Directions</Typography>
		// 			<ExpandMore
		// 				expand={expanded}
		// 				onClick={handleExpandClick}
		// 				aria-expanded={expanded}
		// 				aria-label="show more"
		// 			>
		// 				<ExpandMoreIcon />
		// 			</ExpandMore>
		// 		</Box>
		// 		<Collapse in={expanded} timeout="auto" unmountOnExit>
		// 			<CardContent>
		// 				<Typography paragraph>Method:</Typography>
		// 				<Typography paragraph>
		// 					{props.directions?.map((direction) => (
		// 						<Typography>{direction.instructions}</Typography>
		// 					))}
		// 				</Typography>
		// 				<Typography></Typography>
		// 			</CardContent>
		// 		</Collapse>
		// 		<Typography variant="body2" mt={2}>
		// 			{`Post Date: ${props.postDate}`}
		// 			<br />
		// 			{`Edit Date: ${props.editDate}`}
		// 		</Typography>
		// 	</CardContent>
		// </Card>
	);
}

export default RecipeList;
