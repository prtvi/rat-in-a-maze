import React from 'react';

export default function InputForm(props) {
	const { updateMaze, updateMazeSize, startVis, setSpeed } = props;

	const [ifRunning, changeIfRunning] = React.useState(false);
	const [inputMazeSize, setInputMazeSize] = React.useState(5);
	const [inputSpeed, setInputSpeed] = React.useState(300);

	const updateMazeEL = function (e) {
		const [min, max] = [4, 10];
		const newMazeSize = Math.max(min, Math.min(max, +e.target.value));

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

	const btnReload = function () {
		window.location.reload();
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
					disabled={ifRunning ? true : false}
				/>
				<span>
					{inputMazeSize} × {inputMazeSize}
				</span>
			</div>

			<div className="form-item">
				<label className="form-item-label">Speed:</label>
				<input
					className="form-item-input"
					type="range"
					step="100"
					min={100}
					max={1000}
					onChange={updateSpeedEL}
					value={inputSpeed}
					disabled={ifRunning ? true : false}
				/>
				<span>{inputSpeed} ms</span>
			</div>

			<div className="form-item">
				<button
					className="btn form-item-input"
					onClick={btnStart}
					disabled={ifRunning ? true : false}
				>
					Start
				</button>

				<button className="btn form-item-input" onClick={btnReload}>
					Reload
				</button>
			</div>
		</div>
	);
}
