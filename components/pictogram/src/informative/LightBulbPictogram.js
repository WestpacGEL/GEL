import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const LightBulbPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="LightBulbPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<polygon fill={highlight} points="37.313 11.15 39.813 11.15 39.813 2.001 37.313 2.001" />
				<polygon
					fill={highlight}
					points="61.976 33.873 71.126 33.873 71.126 31.373 61.976 31.373"
				/>
				<polygon fill={highlight} points="6 33.873 15.15 33.873 15.15 31.373 6 31.373" />
				<polygon fill={highlight} points="57.47 48.209 63.94 54.679 65.707 52.911 59.238 46.441" />
				<polygon
					fill={highlight}
					points="14.654 12.421 21.124 18.892 22.891 17.125 16.422 10.653"
				/>
				<polygon
					fill={highlight}
					points="13.218 52.911 14.986 54.679 21.455 48.209 19.688 46.441"
				/>
				<polygon
					fill={highlight}
					points="60.705 10.654 54.235 17.124 56.003 18.892 62.473 12.422"
				/>
				<path
					fill={outline}
					d="M48.475 42.983c-2.846 4.27-3.34 8.91-3.348 11.592h-14.7c-.008-2.681-.503-7.322-3.349-11.592-3.752-5.627-3.828-10.366-3.828-10.41 0-8.027 6.51-14.564 14.527-14.61 8.017.046 14.526 6.582 14.526 14.606 0 .047-.075 4.786-3.828 10.414zm-10.509 28.5c-1.643 0-3.054-1.249-3.712-3.035h7.424c-.657 1.787-2.068 3.035-3.712 3.035zm-7.65-11.558v-1.151c0-.64.008-1.191.022-1.7h14.876c.02.628.024 1.221.025 1.714v1.138H30.316zm14.924 2.5l.001 2.547H30.316v-2.546H45.24zm-.619-45.489a16.981 16.981 0 0 0-6.993-1.472c-9.328.125-16.878 7.752-16.878 17.11 0 .221.048 5.498 4.247 11.797 2.976 4.463 3.018 9.442 2.9 11.375-.057.878-.08 1.813-.08 3.029v7.447c0 .69.558 1.25 1.25 1.25h2.388c.135.943.408 1.83.804 2.628 1.52 3.89 6.125 5.893 9.048 5.893 3.248 0 5.935-2.864 6.354-6.56l2.171.07c.282 0 .55-.11.747-.31a1.05 1.05 0 0 0 .31-.746l-.005-7.436c0-1.189-.025-2.15-.079-3.027-.12-1.953-.077-6.986 2.93-11.495 4.166-6.252 4.215-11.47 4.215-11.69 0-7.331-6.175-14.953-13.329-17.863z"
				/>
			</g>
		</Pictogram>
	);
};

LightBulbPictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Light bulb',
	copyrightYear: '2021',
};
LightBulbPictogram.propTypes = Pictogram.propTypes;
