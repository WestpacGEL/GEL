import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const WearablesPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="WearablesPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M47.436 52.37h-20.7a1.94 1.94 0 0 1-1.936-1.934V24.54a1.94 1.94 0 0 1 1.935-1.934h20.701a1.94 1.94 0 0 1 1.934 1.934v25.896a1.94 1.94 0 0 1-1.934 1.934"
				/>
				<path
					fill={outline}
					d="M52.674 51.958a3.716 3.716 0 0 1-3.711 3.711h-23.75c-1.38 0-2.573-.768-3.213-1.89v.004c-.01-.017-.016-.036-.026-.053-.1-.18-.185-.37-.253-.568a4.018 4.018 0 0 1-.11-.348 3.48 3.48 0 0 1-.042-.208 3.375 3.375 0 0 1-.07-.648V23.031a3.716 3.716 0 0 1 3.712-3.71h23.752a3.716 3.716 0 0 1 3.71 3.71v28.927zm-7.53 12.405a87.928 87.928 0 0 1-.352 1.76c-.294 1.37-1.537 2.366-2.956 2.366h-9.327c-1.42 0-2.662-.996-2.956-2.367-.12-.554-.234-1.148-.353-1.759-.42-2.17-.871-4.495-1.69-6.194h19.324c-.818 1.7-1.27 4.023-1.69 6.194zM29.198 10.625c.119-.61.234-1.204.353-1.758.294-1.372 1.537-2.367 2.956-2.367h9.327c.162 0 .32.016.476.041.092.015.178.04.267.063.054.013.109.025.16.041.122.04.236.085.349.136l.035.017a2.992 2.992 0 0 1 1.672 2.07c.119.553.235 1.147.353 1.757.42 2.171.87 4.496 1.689 6.195H27.508c.819-1.699 1.27-4.024 1.689-6.195zm27.577 11.532c-2-2.833-3.93-4.113-5.183-4.72-.44-1.426-1.235-5.525-1.356-6.094a5.386 5.386 0 0 0-.981-2.104c-.761-.939-3.434-3.974-5.208-4.754A5.49 5.49 0 0 0 41.833 4h-9.35c-2.58.011-4.84 1.834-5.378 4.343a97.633 97.633 0 0 0-.362 1.807c-.308 1.59-.862 4.445-1.6 5.847-.267.506-.429.817-.87.902-2.98.455-5.273 3.028-5.273 6.132v28.927c0 1.342.243 2.27 1.13 3.527 2 2.833 4.459 4.5 4.459 4.5l-.007-.015c.37.27.77.494 1.196.676.425 1.407 1.206 5.43 1.327 6a5.41 5.41 0 0 0 .593 1.518s1.872 3.655 5.377 5.242a5.535 5.535 0 0 0 2.43.583h9.328c2.59 0 4.862-1.826 5.402-4.343.12-.569 1.103-8.216 2.832-8.576a6.22 6.22 0 0 0 5.104-6.11V26.03c0-1.35-.892-3.158-1.397-3.874z"
				/>
			</g>
		</Pictogram>
	);
};

WearablesPictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Wearables',
	copyrightYear: '2021',
};
WearablesPictogram.propTypes = Pictogram.propTypes;
