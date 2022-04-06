import { Grid, Box } from "@mui/material";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import { Link } from "react-router-dom";

function MeetupList(props) {
	// console.log(props.recipes, "recipes");
	return (
		<Grid>
			<Grid className={classes.container}>
				{props.recipes.map((meetup) => (
					<Grid item key={meetup?.id} p={2}>
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
		</Grid>
	);
}

export default MeetupList;
