import { Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import CardComponent from "../ui/CardComponent";
import classes from "./RecipeStyles.module.css";

function RecipeList(props) {
	return (
		<Grid>
			<Box>
				<Box className={classes.image}>
					<img src={props.images} alt={props.title} />
				</Box>
				<Typography>{props.description}</Typography>
				<nav aria-label="secondary mailbox folders">
					<List>
						<Box disablePadding>
							<ListItem>
								<ListItemText primary={`Servings: ${props.servings}`} />
							</ListItem>
							<ListItem>
								<ListItemText primary={`Preperation time: ${props.prepTime}`} />
							</ListItem>
							<ListItem>
								<ListItemText primary={`Cooking time: ${props.cookTime}`} />
							</ListItem>
						</Box>
					</List>
				</nav>
			</Box>
		</Grid>
	);
}

export default RecipeList;
