import React from 'react';

import {
	COLOR_CLOSED,
	COLOR_OPEN,
	COLOR_PATH,
	COLOR_TEMP_PATH,
	COLOR_FACE,
} from './Cell';

const legendData = [
	{
		style: { backgroundColor: COLOR_OPEN },
		data: 'Open (default unset node)',
	},
	{
		style: { backgroundColor: COLOR_CLOSED },
		data: 'Closed or barrier node',
	},
	{
		style: { backgroundColor: COLOR_FACE },
		data: 'Start and end node',
	},
	{
		style: { backgroundColor: COLOR_TEMP_PATH },
		data: 'Temporary path',
	},
	{
		style: { backgroundColor: COLOR_PATH },
		data: 'Final path',
	},
];

export default function Legend() {
	return (
		<details open>
			<summary>Legend</summary>
			<div className="legend">
				{legendData.map((ld, i) => (
					<div className="legend-cell" key={i}>
						<div style={ld.style}></div>
						<span>{ld.data}</span>
					</div>
				))}
			</div>

			<div className="info">
				<p>
					This algorithm is built in way that the rat can only make new moves in
					only 'down' and 'right' directions.{' '}
					<a
						href="https://github.com/prtvi/rat-in-a-maze"
						target="_blank"
						rel="noreferrer"
					>
						Click here
					</a>{' '}
					to go the github repository.
				</p>
			</div>
		</details>
	);
}
