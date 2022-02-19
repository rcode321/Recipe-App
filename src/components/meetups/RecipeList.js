import { Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import CardComponent from "../ui/CardComponent";
import classes from "./RecipeStyles.module.css";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function RecipeList(props) {
	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData(
			`${props.prepTime}`,
			`${props.servings}`,
			`${props.postDate}`,
			`${props.editDate}`
		),
	];

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 550 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="right">PrepTime</TableCell>
						<TableCell align="right">Servings</TableCell>
						<TableCell align="right">PostDate</TableCell>
						<TableCell align="right">EditDate</TableCell>
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
		// <Grid>
		// 	<Box>
		// 		<Box className={classes.image}>
		// 			<img src={props.images} alt={props.title} />
		// 		</Box>
		// 		<Typography>{props.description}</Typography>
		// 		<nav aria-label="secondary mailbox folders">
		// 			<List>
		// 				<Box disablePadding>
		// 					<ListItem>
		// 						<ListItemText primary={`Servings: ${props.servings}`} />
		// 					</ListItem>
		// 					<ListItem>
		// 						<ListItemText primary={`Preperation time: ${props.prepTime}`} />
		// 					</ListItem>
		// 					<ListItem>
		// 						<ListItemText primary={`Cooking time: ${props.cookTime}`} />
		// 					</ListItem>
		// 				</Box>
		// 			</List>
		// 		</nav>
		// 	</Box>
		// </Grid>
	);
}

export default RecipeList;
