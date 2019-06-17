const AnalogDisplay = props => {
	// BUG_FIX: ALWAYS USE FAT ARROWS FOR STATELESS/FUNCTIONAL COMPONENTS.
	let date = new Date(props.time); // Converts string date into object for later parsing
	let dialStyle = {
		position: "relative",
		top: 0,
		left: 0,
		width: 200,
		height: 200,
		borderRadius: 20000, // Uses borderRadius (CSS: border-radius) on a <div> with a high number relative to width, to make it a circle
		borderStyle: "solid",
		borderColor: "black"
	};
	let secondHandStyle = {
		position: "relative",
		top: 100,
		left: 100,
		border: "1px solid red",
		width: "40%",
		height: 1,
		transform: "rotate(" + (date.getSeconds() / 60 * 360 - 90).toString() + "deg)", // Calculates angle and rotates the second hand with minus 90 to offset for the hand's starting horizontal position
		transformOrigin: "0% 0%", // uses transformOrigin to offset the center of the rotation
		backgroundColor: "red"
	};
	let minuteHandStyle = {
		position: "relative",
		top: 100,
		left: 100,
		border: "1px solid grey",
		width: "40%",
		height: 3,
		transform: "rotate(" + (date.getMinutes() / 60 * 360 - 90).toString() + "deg)",
		transformOrigin: "0% 0%",
		backgroundColor: "grey"
	};
	let hourHandStyle = {
		position: "relative",
		top: 92,
		left: 106,
		border: "1px solid grey",
		width: "20%",
		height: 7,
		transform: "rotate(" + (date.getHours() / 12 * 360 - 90).toString() + "deg)",
		transformOrigin: "0% 0%",
		backgroundColor: "grey"
	};
	return (
		// Renders containers with applicable styles relative to the clock dial (large circle)
		React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{ style: dialStyle },
				React.createElement("div", { style: secondHandStyle }),
				React.createElement("div", { style: minuteHandStyle }),
				React.createElement("div", { style: hourHandStyle })
			)
		)
	);
};