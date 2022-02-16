import MeetupList from "../components/meetups/MeetupList";

import { useState, useEffect } from "react";
import { Box } from "@mui/system";

function AllMeetupsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/recipes")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				
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
		<Box sx={{ mt: 15 }}>
			<h1>All Recipe</h1>
			<MeetupList recipes={loadedMeetups} />
		</Box>
	);
}

export default AllMeetupsPage;
