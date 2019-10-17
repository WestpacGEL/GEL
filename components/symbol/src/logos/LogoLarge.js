import React from 'react';
import { useBrand } from '@westpac/core';
import { propTypes, defaultProps, Symbol } from '../Symbol';

export const LogoLarge = props => {
	const { SYMBOLS } = useBrand();

	return (
		<Symbol {...props}>
			<g dangerouslySetInnerHTML={{ __html: SYMBOLS.logos.large }} />
		</Symbol>
	);
};

LogoLarge.defaultProps = {
	...defaultProps,
	viewBoxWidth: 180,
	viewBoxHeight: 65,
};
LogoLarge.propTypes = propTypes;
