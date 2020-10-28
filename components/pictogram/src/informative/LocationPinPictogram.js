import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const LocationPinPictogram = ({ color, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(color, COLORS);

	return (
		<Pictogram pictogram="LocationPinPictogram" color={color} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M37.5703,39.8833 C45.1373,39.8833 51.2723,33.7483 51.2723,26.1813 C51.2723,18.6133 45.1373,12.4793 37.5703,12.4793 C30.0033,12.4793 23.8683,18.6133 23.8683,26.1813 C23.8683,33.7483 30.0033,39.8833 37.5703,39.8833"
				/>
				<path
					fill={outline}
					d="M37.7139,65.9092 C24.3939,46.7842 17.6439,33.4272 17.6439,26.1962 C17.6439,15.3362 26.6479,6.5002 37.7139,6.5002 C48.7799,6.5002 57.7839,15.3362 57.7839,26.1962 C57.7839,33.4312 51.0319,46.7882 37.7139,65.9092 M52.9459,9.9692 C48.9129,6.2692 43.5079,4.0002 37.5699,4.0002 C25.1249,4.0002 14.9999,13.9572 14.9999,26.1962 C14.9999,33.8372 21.3619,46.7932 34.4049,65.7232 C35.8599,67.8922 37.3969,70.1362 39.0419,72.4772 C39.2759,72.8102 39.6569,73.0082 40.0649,73.0082 C40.4719,73.0082 40.8529,72.8102 41.0869,72.4772 C55.5869,51.8572 62.6359,37.9182 62.6359,29.8652 C62.6359,22.4822 58.7559,14.8592 52.9459,9.9692"
				/>
			</g>
		</Pictogram>
	);
};

LocationPinPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Location pin',
};
LocationPinPictogram.propTypes = propTypes;
