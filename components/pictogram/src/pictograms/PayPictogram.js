import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const PayPictogram = ({ type, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(COLORS)[type];

	return (
		<Pictogram pictogram="PayPictogram" type={type} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M56.974359,5 L56.974359,17.2 L75,17.2 L75,73 L8.6,73 C4.4026359,73 1,69.5973641 1,65.4 L1,12.6 C1,8.4026359 4.4026359,5 8.6,5 L56.974359,5 Z M5,19 L5,63.25 C5,65.8733526 7.12664744,68 9.75,68 L9.75,68 L71,68 L71,21.7318252 L9.17702866,21.7318252 C6.39234289,21.6060665 5,20.6954581 5,19 L5,19 Z"
				/>
				<path
					fill={highlight}
					d="M77.05,32 C77.5746705,32 78,32.4253295 78,32.95 L78,56.05 C78,56.5746705 77.5746705,57 77.05,57 L59.5,57 C52.5964406,57 47,51.4035594 47,44.5 C47,37.5964406 52.5964406,32 59.5,32 L77.05,32 Z M59,40 C56.2385763,40 54,42.2385763 54,45 C54,47.7614237 56.2385763,50 59,50 C61.7614237,50 64,47.7614237 64,45 C64,42.2385763 61.7614237,40 59,40 Z"
				/>
			</g>
		</Pictogram>
	);
};

PayPictogram.defaultProps = {
	...defaultProps,
	assistiveText: 'Pay',
};
PayPictogram.propTypes = propTypes;
