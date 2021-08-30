import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
	const [name, setName] = useState("");
	function handleChange(event) {
		setName(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		onBandSubmit(name);
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					name
					<input type="text" value={name} name="name" onChange={handleChange} />
				</label>
				<button type="submit">add band</button>
			</form>
		</div>
	);
}

export default BandInput;
