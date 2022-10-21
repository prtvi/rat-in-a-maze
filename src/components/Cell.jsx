import React from 'react';

// open, closed, tempPath, path, face
// const states = [0, 1, 2, 3, 4]

export const COLOR_CLOSED = '#f05454';
export const COLOR_OPEN = '#e8e8e8';
export const COLOR_TEMP_PATH = '#3cc4fe';
export const COLOR_PATH = '#3ccf4e';
export const COLOR_FACE = '#ffff00';

function getStyle(state, mazeSize) {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	let cellSize = 0;
	const m = 2.5;

	if (windowWidth > windowHeight) cellSize = windowHeight / (mazeSize * m);
	else if (windowWidth <= windowHeight) cellSize = windowWidth / (mazeSize * m);

	if (state === 0)
		// state open
		return {
			backgroundColor: COLOR_OPEN,
			width: cellSize,
			height: cellSize,
		};
	else if (state === 1)
		// state close
		return {
			backgroundColor: COLOR_CLOSED,
			width: cellSize,
			height: cellSize,
		};
	else if (state === 2)
		// state temp path
		return {
			backgroundColor: COLOR_TEMP_PATH,
			border: `1px solid ${COLOR_TEMP_PATH}`,
			width: cellSize,
			height: cellSize,
		};
	else if (state === 3)
		// state path
		return {
			backgroundColor: COLOR_PATH,
			border: `1px solid ${COLOR_PATH}`,
			width: cellSize,
			height: cellSize,
		};
	else if (state === 4)
		// state face
		return {
			backgroundColor: COLOR_FACE,
			border: `1px solid ${COLOR_FACE}`,
			width: cellSize,
			height: cellSize,
		};
}

function getCellDOM(x, y, mazeSize) {
	let cellDom;

	if (y === 0 && x === 0)
		cellDom = (
			<div className="img-container">
				<img src="rat.png" alt="rat" />
			</div>
		);
	else if (y === mazeSize - 1 && x === mazeSize - 1)
		cellDom = (
			<div className="img-container">
				<img src="cheese.png" alt="cheese" />
			</div>
		);

	return cellDom;
}

export default function Cell(props) {
	const { state, y, x, mazeSize, updateMaze } = props;

	const onClickAddBarrier = function (e) {
		if (y === 0 && x === 0) return;
		if (y === mazeSize - 1 && x === mazeSize - 1) return;

		e.target.classList.toggle('barrier');

		updateMaze(curr => {
			const updatedMaze = curr.slice();

			if (updatedMaze[y][x] === 1) updatedMaze[y][x] = 0;
			else if (updatedMaze[y][x] === 0) updatedMaze[y][x] = 1;

			return updatedMaze;
		});
	};

	return (
		<div
			className="cell"
			style={getStyle(state, mazeSize)}
			onClick={onClickAddBarrier}
		>
			{getCellDOM(x, y, mazeSize)}
		</div>
	);
}
