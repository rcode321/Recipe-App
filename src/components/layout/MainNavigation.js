import { NavLink } from "react-router-dom";
import { useContext } from "react";
import * as React from "react";

import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Badge from "@mui/material/Badge";
import { Divider } from "@mui/material";

function MainNavigation() {
	const favoritesCtx = useContext(FavoritesContext);

	const Search = styled("div")(({ theme }) => ({
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	}));

	const SearchIconWrapper = styled("div")(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	}));

	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: "inherit",
		"& .MuiInputBase-input": {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(2em + ${theme.spacing(4)})`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				width: "11ch",
				"&:focus": {
					width: "20ch",
				},
			},
		},
	}));
	return (
		<Box className={classes.navbar}>
			<Toolbar>
				<Typography>Recipe App</Typography>
				<Typography
					noWrap
					component="div"
					
				>
					<Box sx={{ display: "flex" }} >
						<Typography pr={2}>
							<NavLink className={classes.links} to="/">
								All Recipe
							</NavLink>
						</Typography>
						<Typography pr={2}>
							<NavLink className={classes.links} to="/new-meetup">
								Add New Recipe
							</NavLink>
						</Typography>
						<Typography>
							<NavLink className={classes.links} to="/favorites">
								My Favorites
								<Badge
									color="secondary"
									badgeContent={favoritesCtx.totalFavorites}
									className={classes.badge}
								>
									<NotificationsNoneOutlinedIcon />
								</Badge>
							</NavLink>
						</Typography>
					</Box>
				</Typography>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
					/>
				</Search>
			</Toolbar>
			<Divider />
		</Box>
	);
}

export default MainNavigation;
