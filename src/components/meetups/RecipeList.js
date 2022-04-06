import classes from "./RecipeStyles.module.css";

import { Box } from "@mui/system";
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const RecipeList = ({
	directions,
	ingredients,
	title,
	servings,
	prepTime,
	cookTime,
	description,
	editDate,
	images,
	data,
}) => {
	
	return (
		<>
		
		<Typography variant="h3"> {description}</Typography>
		<Box className={classes.image}>
			<img src={images} alt={title} />
	 </Box>

	 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Preparation</TableCell>
            <TableCell align="right">Servings&nbsp;</TableCell>
            <TableCell align="right">Cooktime&nbsp;</TableCell>
            <TableCell align="right">Date&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {prepTime}
              </TableCell>
              <TableCell align="right">{servings}</TableCell>
							<TableCell align="right">{cookTime}</TableCell>
							<TableCell align="right">{editDate}</TableCell>
            </TableRow>
      
        </TableBody>
      </Table>
    </TableContainer>
		</>
		
		// 	<Box className={classes.container} display="flex">
		// 		<Paper>
		// 		<Typography variant="h4" textAlign={'center'}>ingredients</Typography>
		// 				<ListItem>
		// 					<ListItemText
		// 							primary={ingredients}		
		// 						/>
		// 				</ListItem>
		// 		</Paper>
		// 	<Paper>
		// 		<Typography variant="h4" textAlign={'center'}>directions</Typography>
		// 		<ListItem>
		// 			<ListItemText
		// 					primary={directions}		
		// 				/>
		// 		</ListItem>
		// 	</Paper>
		// 	</Box>

	);
};

export default RecipeList;
