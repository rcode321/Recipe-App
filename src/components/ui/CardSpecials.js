import Card from "@mui/material/Card";
import { Box, Grid, Typography } from "@mui/material";

const CardSpecials = (props) => {
	return (
		<Box>
			<Typography p={1} variant="h2">
				Specials
			</Typography>
			{props.children}
		</Box>
	);
};

export default CardSpecials;
