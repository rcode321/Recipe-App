import { Grid } from "@mui/material";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import { Link } from "react-router-dom";

function MeetupList(props) {
	// console.log(props.recipes, "recipes");
	return (
		<Grid container>
			{props.recipes.map((meetup) => (
<<<<<<< HEAD
				<Grid item xs={12} md={4} key={meetup?.id}>
=======
				<Grid item xs={12} md={4} pr={2} key={meetup?.id}>
>>>>>>> e1405c9ffa3be8d3b61cd8357b4aa78ab0a352ba
					<Link className={classes.link} to={`/recipes/${meetup.uuid}`}>
						<MeetupItem
							key={meetup.id}
							id={meetup.id}
							images={meetup.images}
							title={meetup.title}
							description={meetup.description}
							servings={meetup.servings}
							prepTime={meetup.prepTime}
							uuid={meetup.uuid}
						/>
					</Link>
				</Grid>
			))}
		</Grid>
	);
}

export default MeetupList;
