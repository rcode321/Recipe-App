import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";

const CardSpecials = (props) => {
	return (
		<Grid m={1}>
			<Card
				sx={{
					width: 600,
				}}
			>
				<Typography mb={0} p={1} variant="h2" component="div" gutterBottom>
					Specials
				</Typography>
				{props.children}
			</Card>
		</Grid>
	);
};

export default CardSpecials;
