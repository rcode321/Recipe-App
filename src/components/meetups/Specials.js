import CardComponent from "../ui/CardComponent";
import classes from "./NewMeetupForm.module.css";
import Typography from "@mui/material/Typography";
import { CardContent, Grid } from "@mui/material";
// import { Box } from "@mui/system";

function Specials(props) {
	const isHavePromo = props.code;

	return (
		<Grid>
			<CardComponent>
				{/* <Box className={classes.image}>
					<img src={props.images.medium} alt={props.title} />
				</Box> */}
				<CardContent className={classes.content}>
					<Typography>{props.type}</Typography>
					<Typography>{props.title}</Typography>
					<Typography>{props.text}</Typography>
					{isHavePromo ? `PROMO CODE ${props.code}` : ""}
				</CardContent>
			</CardComponent>
		</Grid>
	);
}

export default Specials;