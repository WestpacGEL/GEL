import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const Number1Pictogram = ({ color, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(color, COLORS);

	return (
		<Pictogram pictogram="Number1Pictogram" color={color} {...rest}>
			<g fill="none" fill-rule="evenodd">
				<path
					fill={highlight}
					d="M42.7621,52.1602 L37.4111,52.1602 L37.4111,31.9942 C35.4561,33.8222 33.1521,35.1742 30.4981,36.0502 L30.4981,31.1932 C31.8951,30.7362 33.4121,29.8702 35.0501,28.5952 C36.6881,27.3182 37.8111,25.8302 38.4201,24.1292 L42.7621,24.1292 L42.7621,52.1602 Z"
				/>
				<path
					fill={outline}
					d="M38.7104,67.9121 C22.2974,67.9121 8.9424,54.5581 8.9424,38.1441 C8.9424,21.7301 22.2974,8.3771 38.7104,8.3771 C55.1234,8.3771 68.4784,21.7301 68.4784,38.1441 C68.4784,54.5581 55.1234,67.9121 38.7104,67.9121 M65.8804,20.7701 C60.1394,11.8221 50.1084,5.8751 38.7104,5.8751 C20.9184,5.8751 6.4424,20.3501 6.4424,38.1431 C6.4424,45.2761 8.7734,51.8731 12.7084,57.2211 C18.4484,66.1751 28.4814,72.1251 39.8854,72.1251 C57.6774,72.1251 72.1514,57.6501 72.1514,39.8581 C72.1514,32.7201 69.8174,26.1201 65.8804,20.7701"
				/>
			</g>
		</Pictogram>
	);
};

Number1Pictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Number 1',
};
Number1Pictogram.propTypes = propTypes;
