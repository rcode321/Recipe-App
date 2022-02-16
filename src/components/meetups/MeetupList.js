import { Grid } from "@mui/material";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
// import CardRecipeComponent from "./../ui/CardRecipeComponent";
import { Link } from "react-router-dom";

function MeetupList(props) {
	return (
		<Grid container>
			{props.recipes.map((meetup) => (
				<Grid item xs={12} md={6} key={meetup?.id}>
					<Link className={classes.link}to={`/recipes/${meetup.uuid}`}>
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
