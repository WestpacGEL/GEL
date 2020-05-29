/** @jsx jsx */
import { jsx } from '@westpac/core';
import { Svg } from './Svg';

export const GitHubLogo = ({ width, height = 'auto', ...rest }) => {
	return (
		<Svg viewBox="0 0 180 180" width="180" height="180" css={{ width, height }} {...rest}>
			<title>GitHub logo</title>
			<path
				fillRule="evenodd"
				d="M89.995 10C45.82 10 10 46.725 10 92.03c0 36.235 22.92 66.98 54.71 77.83 4.005.75 5.465-1.78 5.465-3.955 0-1.945-.07-7.105-.11-13.95-22.255 4.955-26.95-11-26.95-11-3.64-9.47-8.88-11.995-8.88-11.995-7.265-5.09.55-4.985.55-4.985 8.025.58 12.25 8.45 12.25 8.45 7.14 12.535 18.725 8.92 23.285 6.82.725-5.305 2.795-8.92 5.08-10.97-17.765-2.07-36.445-9.105-36.445-40.535 0-8.955 3.12-16.28 8.235-22.01-.82-2.08-3.565-10.415.785-21.71 0 0 6.72-2.21 22 8.405 6.38-1.815 13.225-2.73 20.03-2.755 6.795.025 13.635.94 20.025 2.755 15.275-10.615 21.98-8.405 21.98-8.405 4.365 11.295 1.62 19.63.8 21.71 5.125 5.73 8.22 13.055 8.22 22.01 0 31.51-18.705 38.44-36.525 40.475 2.87 2.53 5.43 7.535 5.43 15.19 0 10.965-.1 19.815-.1 22.5 0 2.195 1.44 4.745 5.5 3.945C147.1 158.98 170 128.255 170 92.03 170 46.725 134.175 10 89.995 10"
			/>
		</Svg>
	);
};
