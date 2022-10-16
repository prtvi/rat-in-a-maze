import React from 'react';

// open, close, tempPath, path
// const states = [0, 1, 2, 3]

const colorClose = '#f05454';
const colorOpen = '#e8e8e8';
const colorTempPath = '#3cc4fe';
const colorPath = '#3ccf4e';

function getStyle(state, mazeSize) {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	let finalWidthHeight = 0;

	if (windowWidth > windowHeight) 
		finalWidthHeight = windowHeight / (mazeSize * 2.5);
	else if (windowWidth <= windowHeight) 
		finalWidthHeight = windowWidth / (mazeSize * 2.5);
	
	if (state === 1)
		// state close
		return {
			backgroundColor: colorClose,
			// border: `1px solid ${colorClose}`,
			width: finalWidthHeight,
			height: finalWidthHeight,
		};
	else if (state === 0)
		// state open
		return {
			backgroundColor: colorOpen,
			// border: `1px solid ${colorOpen}`,
			width: finalWidthHeight,
			height: finalWidthHeight,
		};
	else if (state === 2)
		// state temp path
		return {
			backgroundColor: colorTempPath,
			border: `1px solid ${colorTempPath}`,
			width: finalWidthHeight,
			height: finalWidthHeight,
		};
	else if (state === 3)
		// state path
		return {
			backgroundColor: colorPath,
			border: `1px solid ${colorPath}`,
			width: finalWidthHeight,
			height: finalWidthHeight,
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
		<div className="cell" style={getStyle(state, mazeSize)} onClick={onClickAddBarrier}>
			{getCellDOM(x, y, mazeSize)}
		</div>
	);
}
