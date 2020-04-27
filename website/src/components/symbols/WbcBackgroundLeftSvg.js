/** @jsx jsx */
import { jsx, useMediaQuery } from '@westpac/core';

export const WbcBackgroundLeftSvg = ({ width, height }) => {
	const mq = useMediaQuery();
	return (
		<svg
			aria-labelledby="westpac-header-image-left"
			width={width}
			height={height}
			viewBox="0 0 360 228"
			css={mq({ height: ['66px', '66px', '228px'] })}
		>
			<title>Westpac background image</title>
			<path fill="#C30019" d="M343.6 203.9l-34-107.5-50 131.6h100c-7.7-1.4-16-24.1-16-24.1" />
			<path fill="#DD3A46" d="M309.5 96.4L340.1 0h-90.8z" />
			<path
				fill="#D5002B"
				d="M259.6 228c7.9 0 15.2-22 15.9-24.1.8-2.1 34-107.5 34-107.5l-19.9-63C282 7.4 269 0 249.3 0H109v228h150.6z"
			/>
			<path
				fill="#B6000B"
				d="M210.5 195.2L162.1 24S156.9 3.3 149 0H0v228h253.3c-19.8 0-37.2-11.3-42.8-32.8"
			/>
		</svg>
	);
};
