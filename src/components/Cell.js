import React from 'react';

// open, close, foundPath
// const states = [0, 1, 2]

function getStyle(state) {
	if (state === 1)
		return {
			backgroundColor: 'red',
		};
	else if (state === 0)
		return {
			backgroundColor: 'white',
		};
	else if (state === 2)
		return {
			backgroundColor: 'green',
		};
}

function getCellDOM(x, y, mazeSize) {
	let cellDom;

	if (y === 0 && x === 0) cellDom = <img src="rat.png" alt="rat" />;
	else if (y === mazeSize - 1 && x === mazeSize - 1)
		cellDom = <img src="cheese.png" alt="cheese" />;
	else
		cellDom = (
			<p>
				({y}, {x})
			</p>
		);

	return cellDom;
}

export default function Cell(props) {
	const { state, y, x, mazeSize } = props;
	// const [currState, updateState] = React.useState(state);

	return (
		<div className="cell" style={getStyle(state)}>
			{getCellDOM(x, y, mazeSize)}
		</div>
	);
}
