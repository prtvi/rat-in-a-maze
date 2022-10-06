import React from 'react';

import Cell from './Cell.js';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function Maze() {
	// state init
	const mazeSize = 5;
	const [maze, updateMaze] = React.useState([
		[0, 0, 0, 1, 0],
		[1, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 0, 0, 0],
		[1, 0, 1, 1, 0],
	]);

	const isSafe = function (maze, n, x, y) {
		if (x < n && y < n && maze[x][y] === 0) return true;
		return false;
	};

	const ratInAMaze = async function (maze, n, x, y) {
		if (x === n - 1 && y === n - 1) {
			maze[x][y] = 2;
			return true;
		}

		await delay(100);
		updateMaze(maze => maze.slice());

		if (isSafe(maze, n, x, y)) {
			maze[x][y] = 2;

			if (await ratInAMaze(maze, n, x + 1, y)) return true;
			if (await ratInAMaze(maze, n, x, y + 1)) return true;

			maze[x][y] = 0;
			return false;
		}

		return false;
	};

	// event handlers

	const btnOnClick = async function () {
		await ratInAMaze(maze, mazeSize, 0, 0);
	};

	return (
		<div className="maze">
			{maze.map((row, rowNum) => (
				<div className="row" key={rowNum}>
					{row.map((cell, cellNum) => (
						<Cell
							key={`${rowNum}${cellNum}`}
							state={maze[rowNum][cellNum]}
							y={rowNum}
							x={cellNum}
							mazeSize={mazeSize}
						/>
					))}
				</div>
			))}
			<button onClick={btnOnClick}>Click to solve</button>
		</div>
	);
}
