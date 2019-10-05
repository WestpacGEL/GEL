import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@westpac/core';
import { propTypes, defaultProps, Symbol } from '../Symbol';

export const LogoSmall = ({ align, ...props }) => {
	const { SYMBOLS } = useTheme();

	return (
		<Symbol {...props}>
			<g dangerouslySetInnerHTML={{ __html: SYMBOLS.logos.small[align] }} />
		</Symbol>
	);
};

LogoSmall.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
	align: 'left',
};
LogoSmall.propTypes = {
	...propTypes,
	align: PropTypes.oneOf(['left', 'right', 'center']),
};
