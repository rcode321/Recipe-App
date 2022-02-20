import CardComponent from "../ui/CardComponent";
import classes from "./NewMeetupForm.module.css";
import Typography from "@mui/material/Typography";
import { Button, CardContent, Grid } from "@mui/material";
import CardSpecials from "../ui/CardSpecials";
// import { Box } from "@mui/system";

function Specials(props) {
	const isHavePromo = props.code;

	return (
		<Grid>
			<CardSpecials>
				{/* <Box className={classes.image}>
					<img src={props.images.medium} alt={props.title} />
				</Box> */}
				<CardContent className={classes.content}>
					<Typography variant="h4">{props.type}</Typography>
					<Typography>{props.title}</Typography>
					<Typography>{props.text}</Typography>
					{isHavePromo ? `PROMO CODE ${props.code}` : ""}
					<Button
						target="_blank"
						href={`https://www.google.com/maps/search/${props.geo}`}
						size="small"
					>
						Check Available Location
					</Button>
				</CardContent>
			</CardSpecials>
		</Grid>
	);
}

export default Specials;
