import React from 'react';

export default function InputForm(props) {
	const { updateMaze, updateMazeSize, startVis } = props;

	const updateMazeEL = function (e) {
		const [min, max] = [4, 10];
		const newMazeSize = Math.max(min, Math.min(max, +e.target.value));

		updateMazeSize(curr => newMazeSize);
		updateMaze(curr => {
			const newMaze = [];

			for (let i = 0; i < newMazeSize; i++)
				newMaze.push(new Array(newMazeSize).fill(0));

			return newMaze;
		});
	};

	const btnStart = async function () {
		await startVis();
	};

	return (
		<div className="input-form">
			<div className="form-item">
				<label className="form-item-label">Enter the maze size:</label>
				<input
					className="form-item-input"
					type="number"
					step="1"
					min={4}
					max={10}
					onChange={updateMazeEL}
				/>
			</div>

			<div className="form-item">
				<button className="form-item-input" onClick={btnStart}>
					Start
				</button>
			</div>
		</div>
	);
}
