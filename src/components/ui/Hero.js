import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";
import styles from "./HeroStyles.module.css";
import HeroFoodBanner from "../ui/HeroFoodBanner.jpg";
import { Box } from "@mui/system";

const Hero = (props) => {
	return (
		<main>
			<div className={styles.heroImg}>
				<div class="container">
					<div className={styles.insideContainer}>
						<div className={styles.heroContent}>
							<h2>Let's Start Cooking Popular Recipes</h2>
							<p>Stop wasting valuable time with projects that just isn't you.</p>
							<a href="#">Learn more start today</a>
						</div>
						<div className={styles.icons}>
							<li>
								<i class="fab fa-facebook-square"></i>
							</li>
							<li>
								<i class="fab fa-instagram"></i>
							</li>
							<li>
								<i class="fab fa-twitter"></i>
							</li>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
