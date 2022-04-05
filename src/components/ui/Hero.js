import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";
import styles from './HeroStyles.module.css'
import HeroFoodBanner from '../ui/HeroFoodBanner.jpg'
import { Box } from "@mui/system";

const Hero = (props) => {
	return (
    <Box>    
    <img className={styles.image} src={HeroFoodBanner} alt="Chef image" />
		<Grid mb={2}>
        
        </Grid>
    </Box>
	);
};

export default Hero;