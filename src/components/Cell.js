import React from 'react';

// start, end, open, close, foundPath
// const states = [-1, 1, 0, 7, 2]

export default function Cell(props) {
	const { state, y, x } = props;
	// const [state, updateState] = React.useState(props.state);

	function getStyle(state) {
		if (state === -1)
			return {
				backgroundColor: 'brown',
			};
		else if (state === 1)
			return {
				backgroundColor: 'orange',
			};
		else if (state === 0)
			return {
				backgroundColor: 'white',
			};
		else if (state === 7)
			return {
				backgroundColor: 'red',
			};
	}

	function getImg(state) {
		if (state === -1) return <img src="rat.png" alt="rat" />;
		else if (state === 1) return <img src="cheese.png" alt="cheese" />;
	}

	return (
		<div className="cell" style={getStyle(state)}>
			{state === -1 || state === 1 ? (
				getImg(state)
			) : (
				<p>
					({y}, {x})
				</p>
			)}
		</div>
	);
}
