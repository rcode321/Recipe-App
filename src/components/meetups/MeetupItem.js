import CardRecipeComponent from "../ui/CardRecipeComponent";

import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";
import { Box, Button, CardActions, CardContent, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

function MeetupItem(props) {
	const favoritesCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

	const toggleFavoriteStatusHandler = (e) => {
		e.preventDefault();
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(props.id);
		} else {
			favoritesCtx.addFavorite({
				id: props.id,
				title: props.title,
				description: props.description,
				images: props.images,
				address: props.address,
				uuid: props.uuid,
			});
		}
	};

	return (
		<Grid>
			<CardRecipeComponent>
				<Box className={classes.image}>
					<img src={props.images?.full || props.images} alt={props.title} />
				</Box>
				<CardContent className={classes.content}>
					<Typography sx={{ pb: 0.5 }}>{props.title}</Typography>
					<Divider />
				</CardContent>
				<CardActions style={{ display: "flex", justifyContent: "center" }}>
					<Button
						onMouseDown={(event) => event.stopPropagation()}
						onClick={toggleFavoriteStatusHandler}
					>
						{itemIsFavorite ? "Remove from favorites" : "To Favorites"}
					</Button>
				</CardActions>
			</CardRecipeComponent>
		</Grid>
	);
}

export default MeetupItem;
