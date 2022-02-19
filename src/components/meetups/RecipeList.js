// import { Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import CardComponent from "../ui/CardComponent";
import classes from "./RecipeStyles.module.css";

import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";

function RecipeList(props) {
	console.log(props.geo)
	const bull = (
		<Box
			component="span"
			sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
		>
			•
		</Box>
	);
	return (
		<Card sx={{ minWidth: 275 }}>
				<Box className={classes.image}>
					<img src={props?.images} alt={props.title} />
				</Box>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.description}
        </Typography>
        <Typography variant="h5" component="div" mb={2}>
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          {`Servings: ${props.servings}`}
        </Typography>
				<Typography sx={{ mb: 1.5 }} color="text.primary">
				{`PrepTime: ${props.prepTime}`}
			</Typography>
			<Typography sx={{ mb: 1.5 }} color="text.primary">
			{`CookTime: ${props.cookTime}`}
		</Typography>
		<Divider />
        <Typography variant="body2" mt={2}>
					{`Post Date: ${props.postDate}`}
          <br />
          {`Edit Date: ${props.editDate}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button target="_blank" 
				href={`https://www.google.com/maps/search/${props.geo}`} 
				size="small">Check Available Location
				</Button>
      </CardActions>
    </Card>
	);
}

export default RecipeList;
