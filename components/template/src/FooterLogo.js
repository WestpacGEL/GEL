/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useMediaQuery } from '@westpac/core';
import { LogoSmall } from '@westpac/symbol';

// ==============================
// Component
// ==============================

export const FooterLogo = ({ align, ...props }) => {
	const mq = useMediaQuery();

	return (
		<LogoSmall
			css={mq({
				float: 'right',
				marginTop: ['1.8rem', 0],
			})}
			align={align}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

FooterLogo.propTypes = {
	/**
	 * Logo alignment
	 */
	align: PropTypes.oneOf(['left', 'right', 'center']),
};

FooterLogo.defaultProps = {
	align: 'right',
};
