import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
	const history = useHistory();

	const addMeetuphandler = (meetupData) => {
		// console.log(meetupData);
		fetch("http://localhost:3001/recipes", {
			method: "POST",
			body: JSON.stringify(meetupData),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(() => {
			history.replace("/");
		});
	};

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetuphandler} />
		</section>
	);
}

export default NewMeetupPage;
