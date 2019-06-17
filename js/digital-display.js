const DigitalDisplay = props => {
	// BUG_FIX: ALWAYS USE FAT ARROWS FOR STATELESS/FUNCTIONAL COMPONENTS.
	return React.createElement(
		"div",
		null,
		props.time
	);
};