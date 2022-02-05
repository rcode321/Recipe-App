import CardComponent from "../ui/CardComponent";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			images: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};
		props.onAddMeetup(meetupData);
		console.log(meetupData);
	}

	return (
		<CardComponent>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title">Meetup Title</label>
					<input type="text" required id="title" ref={titleInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="images">Meetup Image</label>
					<input type="url" required id="images" ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input type="text" required id="address" ref={addressInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						required
						rows="5"
						ref={descriptionInputRef}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</CardComponent>
	);
}

export default NewMeetupForm;
