import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";

const CardSpecials = (props) => {
	return (
		<Grid m={2}>
			<Card
				sx={{
					width: 600,
				}}
			>
				<Typography variant="h1" component="div" gutterBottom>
					Specials
				</Typography>
				{props.children}
			</Card>
		</Grid>
	);
};

export default CardSpecials;
