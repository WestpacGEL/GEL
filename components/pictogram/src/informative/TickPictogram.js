import React from 'react';
import { getColors } from '../_utils';
import { propTypes, defaultProps, Pictogram } from '../Pictogram';

export const TickPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="TickPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M33.6216,46.04 L25.7986,40.624 C25.6606,40.528 25.4706,40.563 25.3746,40.701 L23.4446,43.49 C23.3496,43.629 23.3836,43.818 23.5216,43.914 L34.6566,51.622 C34.7956,51.717 34.9846,51.683 35.0806,51.544 L51.5556,27.747 C51.6506,27.608 51.6166,27.418 51.4776,27.323 L48.6676,25.378 C48.5286,25.283 48.3396,25.317 48.2436,25.456 L34.0456,45.963 C33.9496,46.102 33.7596,46.136 33.6216,46.04"
				/>
				<path
					fill={outline}
					d="M37.7109,67.9121 C21.2969,67.9121 7.9429,54.5581 7.9429,38.1441 C7.9429,21.7301 21.2969,8.3771 37.7109,8.3771 C54.1239,8.3771 67.4779,21.7301 67.4779,38.1441 C67.4779,54.5581 54.1239,67.9121 37.7109,67.9121 M64.8799,20.7701 C59.1389,11.8221 49.1089,5.8751 37.7109,5.8751 C19.9189,5.8751 5.4429,20.3501 5.4429,38.1431 C5.4429,45.2761 7.7739,51.8731 11.7089,57.2211 C17.4489,66.1751 27.4819,72.1251 38.8849,72.1251 C56.6769,72.1251 71.1519,57.6501 71.1519,39.8581 C71.1519,32.7201 68.8179,26.1201 64.8799,20.7701"
				/>
			</g>
		</Pictogram>
	);
};

TickPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Tick',
	copyrightYear: '2020',
};
TickPictogram.propTypes = propTypes;
