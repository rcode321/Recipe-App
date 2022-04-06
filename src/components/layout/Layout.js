import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { Box } from "@mui/system";

function Layout(props) {
	return (
		<Box>
			<MainNavigation />
			<main className={classes.main}>{props.children}</main>
		</Box>
	);
}

export default Layout;
