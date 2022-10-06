import React from 'react';

import Cell from './Cell';

export default function Maze(props) {
	const { maze, mazeSize, updateMaze } = props;

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
							updateMaze={updateMaze}
						/>
					))}
				</div>
			))}
		</div>
	);
}
