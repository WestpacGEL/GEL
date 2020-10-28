import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const BirthCertificatePictogram = ({ color, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(color, COLORS);

	return (
		<Pictogram pictogram="BirthCertificatePictogram" color={color} {...rest}>
			<g fill="none" fillRule="evenodd">
				<circle fill={highlight} cx="28.5" cy="53.5" r="7.5" />
				<path
					fill={outline}
					d="M57.5,9 L57.5,51.5004883 L68,51.5004883 L67.9835977,61.6072699 L67.9835977,62 C67.9835977,65.7429662 64.8520557,68.9835977 61,68.9835977 L61,68.9835977 L60.5017595,68.9835977 L18,69 C14.1340068,69 11,65.8659932 11,62 L11,62 L11,9 L57.5,9 Z M53.7,13 L15,13 L15,62 L15.0050927,62.1762728 C15.0963391,63.75108 16.4023191,65 18,65 L18,65 L56.7,65 C54.7,64.225374 53.7,62.599316 53.7,60.1218261 L53.7,60.1218261 L53.7,13 Z M46.9997527,36.9057971 L46.9997527,41.1086957 L21.530516,41.1086957 L21.530516,36.9057971 L46.9997527,36.9057971 Z M47.0341932,27.7028986 L47.0341932,31.9057971 L21.5649564,31.9057971 L21.5649564,27.7028986 L47.0341932,27.7028986 Z M46.9997527,18.5 L46.9997527,22.7028986 L21.530516,22.7028986 L21.530516,18.5 L46.9997527,18.5 Z"
				/>
			</g>
		</Pictogram>
	);
};

BirthCertificatePictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Birth certificate',
};
BirthCertificatePictogram.propTypes = propTypes;
