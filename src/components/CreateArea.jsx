import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: ""
	});
	const [initialLook, setInitialLook] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;
		setNote(prevNote => {
			return {
				...prevNote,
				[name]: value
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: "",
			content: ""
		});
		event.preventDefault();
	}

	return (
		<div>
			<form className="create-note">
				{initialLook && (
					<input
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
					/>
				)}
				<textarea
					name="content"
					onChange={handleChange}
					onClick={() => setInitialLook(true)}
					value={note.content}
					placeholder="Take a note..."
					rows={initialLook ? 3 : 1}
				/>
				<Zoom in={initialLook}>
					<Fab onClick={submitNote}>
						<AddCircleIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
