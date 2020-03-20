import * as React from 'react';

const HeaderImageRight = ({ height, width }) => {
	return (
		<svg aria-labelledby="title-energy-right" width={width} height={height} viewBox="0 0 268 228">
			<title>{'Slack'}</title>
			<path fill="#DD3A46" d="M104 0h124v96H104z" />
			<path fill="#B6000B" d="M110 96h118v132H110z" />
			<path
				fill="#D5002B"
				d="M180.6 33.4l-20 62.6 34.1 107.9s8.3 22.7 16 24.1H268V0h-52.1c-19.8 0-27.7 7.4-35.3 33.4z"
			/>
			<path
				fill="#C30019"
				d="M126.6 203.9l34-107.9-20-62.6C133 7.4 120.1 0 100.3 0H0c7.9 3.3 13.1 24 13.1 24l48.4 171.2c5.6 21.5 23 32.8 42.8 32.8h6.3c7.6-1.4 16-24.1 16-24.1z"
			/>
		</svg>
	);
};

export default HeaderImageRight;
