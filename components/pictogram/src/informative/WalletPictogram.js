import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const WalletPictogram = ({ color, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(color, COLORS);

	return (
		<Pictogram pictogram="WalletPictogram" color={color} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					fillRule="nonzero"
					d="M55,20 L71,20 L71,69 L12,69 C8.13400675,69 5,65.8659932 5,62 L5,16 L5,15.9042206 C5,12.1768494 8.17018127,9 11.9248505,9 L12,9 L55,9 L55,20 Z M9,62 C9,63.5976809 10.24892,64.9036609 11.8237272,64.9949073 L12,65 L67,65 L67,24 L13.8781739,24 C11.400684,24 9.77462602,23 9,21 L9,62 Z"
				/>
				<path
					fill={highlight}
					d="M73,33 C73.5522847,33 74,33.4477153 74,34 L74,54 C74,54.5522847 73.5522847,55 73,55 L57,55 C50.9248678,55 46,50.0751322 46,44 C46,37.9248678 50.9248678,33 57,33 L73,33 Z M56.5,39.5 C54.0147186,39.5 52,41.5147186 52,44 C52,46.4852814 54.0147186,48.5 56.5,48.5 C58.9852814,48.5 61,46.4852814 61,44 C61,41.5147186 58.9852814,39.5 56.5,39.5 Z"
				/>
			</g>
		</Pictogram>
	);
};

WalletPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Wallet',
};
WalletPictogram.propTypes = propTypes;
