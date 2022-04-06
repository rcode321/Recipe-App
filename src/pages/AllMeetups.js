import MeetupList from "../components/meetups/MeetupList";

import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Hero from "../components/ui/Hero";
import Typography from "@mui/material/Typography";

function AllMeetupsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/recipes")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				// console.log(data);

				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				}
				setIsLoading(false);
				setLoadedMeetups(meetups);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading....</p>
			</section>
		);
	}

	return (
		<Box>
			<Hero />
			<Typography variant="h2" textAlign={"center"} m={8}>
				Popular Food{" "}
			</Typography>
			<MeetupList recipes={loadedMeetups} />
		</Box>
	);
}

export default AllMeetupsPage;
