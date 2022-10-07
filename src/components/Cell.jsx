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

	return cellDom;
}

export default function Cell(props) {
	const { state, y, x, mazeSize, updateMaze } = props;

	const onClickAddBarrier = function () {
		if (y === 0 && x === 0) return;
		if (y === mazeSize - 1 && x === mazeSize - 1) return;

		updateMaze(curr => {
			const updatedMaze = curr.slice();

			if (updatedMaze[y][x] === 1) updatedMaze[y][x] = 0;
			else if (updatedMaze[y][x] === 0) updatedMaze[y][x] = 1;

			return updatedMaze;
		});
	};

	return (
		<div className="cell" style={getStyle(state)} onClick={onClickAddBarrier}>
			{getCellDOM(x, y, mazeSize)}
		</div>
	);
}
