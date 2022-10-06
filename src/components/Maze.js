import React from 'react';

import Cell from './Cell.js';

export default function Maze() {
	// state init
	const mazeSize = 5;

	const [maze, updateMaze] = React.useState([
		[0, 0, 0, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 0, 0, 0],
		[1, 0, 0, 0, 0],
	]);

	const isSafe = function (maze, n, x, y) {
		if (x < n && y < n && maze[x][y] === 0) return true;
		return false;
	};

	const ratInAMaze = function (maze, n, x, y, solMaze) {
		if (x === n - 1 && y === n - 1) {
			solMaze[x][y] = 2;
			return true;
		}

		if (isSafe(maze, n, x, y)) {
			solMaze[x][y] = 2;

			if (ratInAMaze(maze, n, x + 1, y, solMaze)) return true;
			if (ratInAMaze(maze, n, x, y + 1, solMaze)) return true;

			solMaze[x][y] = 0;
			return false;
		}

		return false;
	};

	// event handlers

	const btnOnClick = function () {
		const solMaze = maze.slice();
		ratInAMaze(maze, mazeSize, 0, 0, solMaze);

		updateMaze(maze => solMaze);
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
