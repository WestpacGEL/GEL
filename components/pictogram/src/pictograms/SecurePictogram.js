import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const SecurePictogram = ({ type, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(COLORS)[type];

	return (
		<Pictogram pictogram="SecurePictogram" type={type} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					fillRule="nonzero"
					d="M39.5,0 C48.0604136,0 55,6.93958638 55,15.5 L55,27 L66,27 L66,78 L12,78 L12,27 L23,27 L23,15.5 C23,6.93958638 29.9395864,0 38.5,0 L39.5,0 Z M62,31 L16,31 L16,74 L62,74 L62,31 Z M39.5,4 L38.5,4 C32.2464373,4 27.1587069,8.99152169 27.0036415,15.2077325 L27,15.5 L27,27 L51,27 L51,15.5 C51,9.24643729 46.0084783,4.15870695 39.7922675,4.00364153 L39.5,4 Z"
				/>
				<circle fill={highlight} cx="39" cy="52" r="8" />
			</g>
		</Pictogram>
	);
};

SecurePictogram.defaultProps = {
	...defaultProps,
	assistiveText: 'Secure',
};
SecurePictogram.propTypes = propTypes;
