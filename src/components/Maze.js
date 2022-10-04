import React from 'react';

import Cell from './Cell.js';

export default function Maze() {
	const maze = [
		[-1, 0, 0, 7, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 7, 0, 0],
		[0, 7, 0, 0, 0],
		[0, 0, 0, 0, 1],
	];

	return (
		<div className="maze">
			{maze.map((row, rowNum) => (
				<div className="row">
					{row.map((cell, cellNum) => (
						<Cell
							key={(cellNum + 1) * (rowNum + 1)}
							state={maze[rowNum][cellNum]}
							y={rowNum}
							x={cellNum}
						/>
					))}
				</div>
			))}
		</div>
	);
}
