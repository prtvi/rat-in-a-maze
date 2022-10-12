import React from 'react';

const [minSize, maxSize, stepSize] = [3, 8, 1];
const [minSpeed, maxSpeed, stepSpeed] = [50, 500, 50];

export default function InputForm(props) {
	const { updateMaze, updateMazeSize, startVis, setSpeed } = props;

	const [ifRunning, changeIfRunning] = React.useState(false);
	const [inputMazeSize, setInputMazeSize] = React.useState(5);
	const [inputSpeed, setInputSpeed] = React.useState(200);

	const updateMazeEL = function (e) {
		const newMazeSize = Math.max(minSize, Math.min(maxSize, +e.target.value));

		setInputMazeSize(newMazeSize);
		updateMazeSize(newMazeSize);
		updateMaze(curr => {
			const newMaze = [];
			for (let i = 0; i < newMazeSize; i++)
				newMaze.push(new Array(newMazeSize).fill(0));

			return newMaze;
		});
	};

	const updateSpeedEL = function (e) {
		setSpeed(+e.target.value);
		setInputSpeed(+e.target.value);
	};

	const btnStart = async function () {
		changeIfRunning(true);
		await startVis();
	};

	const btnReload = () => window.location.reload();

	return (
		<div className="input-form">
			<div className="form-item">
				<label>Enter the maze size:</label>
				<input
					type="number"
					step={stepSize}
					min={minSize}
					max={maxSize}
					onChange={updateMazeEL}
					disabled={ifRunning ? true : false}
				/>
				<span>
					{inputMazeSize} × {inputMazeSize}
				</span>
			</div>

			<div className="form-item">
				<label>Speed:</label>
				<input
					type="range"
					step={stepSpeed}
					min={minSpeed}
					max={maxSpeed}
					onChange={updateSpeedEL}
					value={inputSpeed}
					disabled={ifRunning ? true : false}
				/>
				<span>{inputSpeed} ms</span>
			</div>

			<div className="form-item">
				<button
					className="btn"
					onClick={btnStart}
					disabled={ifRunning ? true : false}
				>
					Start
				</button>

				<button className="btn" onClick={btnReload}>
					Reload
				</button>
			</div>
		</div>
	);
}
