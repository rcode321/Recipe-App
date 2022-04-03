import classes from "./RecipeStyles.module.css";

import { Box } from "@mui/system";
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

const RecipeList = ({
	directions,
	ingredients,
	title,
	servings,
	prepTime,
	cookTime,
	description,
	editDate,
	images,
	data,
}) => {
	function generate(element) {
		return [0].map((value) =>
			React.cloneElement(element, {
				key: value,
			})
		);
	}
	const Demo = styled("div")(({ theme }) => ({
		backgroundColor: theme.palette.background.paper,
	}));

	const [dense, setDense] = React.useState(false);
	const [secondary, setSecondary] = React.useState(false);
	// const [name, amount] = ingredients;

	return (
		<Box display={"flex"}>
			<Box className={classes.container}>
				<Typography variant="h3"> {description}</Typography>
				<Box className={classes.image}>
					<img src={images} alt={title} />
				</Box>
			</Box>
			<Paper>
				<Demo>
					<List>
						{generate(
							<ListItem>
								<ListItemIcon>
									<FolderIcon />
								</ListItemIcon>
								<ListItemText
									primary={ingredients?.name}
									secondary={secondary ? "Secondary text" : null}
								/>
							</ListItem>
						)}
					</List>
				</Demo>
			</Paper>
		</Box>
	);
};

export default RecipeList;
