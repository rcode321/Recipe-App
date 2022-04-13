import classes from "./RecipeStyles.module.css";
import * as React from "react";
import { Box } from "@mui/system";
import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";

const RecipeList = ({
	directions,
	ingredients,
	title,
	servings,
	prepTime,
	cookTime,
	description,
	editDate,
	postDate,
	images,
}) => {

	return (
	<Box>
		<Box className={classes.container}>
	<Box m={4}>
		<Typography variant="h3"> {title}</Typography>
		<Typography variant="subtitle1"> {description}</Typography>
	</Box>
			<Box className={classes.image}>
			<img src={images} alt={title} />
	</Box>
	<Box className={classes.cards}>
	<List sx={{ width: "100%", maxWidth: 360 }}>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<OutdoorGrillIcon color="primary" />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Cooktime" secondary={`${cookTime} minutes`} />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<RestaurantMenuIcon color="primary" />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Servings" secondary={`${servings} persons`} />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<AccessTimeIcon color="primary" />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Preptime" secondary={`${prepTime} minutes`} />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<DateRangeIcon color="primary" />
							</Avatar>
						</ListItemAvatar>
						<ListItemText secondary={`${editDate} `} />
						<ListItemText secondary={`${postDate} `} />
					</ListItem>
				</List>
			</Box>
		</Box>
		<Typography variant="h2" p={2}>Directions</Typography>
		<Box p={2}>
			<Paper elevation={2}>
			<ListItem>
				<Typography>{directions}</Typography>
			</ListItem>
			</Paper>
		</Box>
		<Typography variant="h2" p={2}>Ingredients</Typography>
		<Box p={1}>
			<Box className={classes.ingredientsCard}>
				{ingredients}
			</Box>
		</Box>
	</Box>
	);
};

export default RecipeList;
