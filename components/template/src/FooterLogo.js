/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FooterLogo = ({ symbol: Symbol, ...props }) => {
	const mq = useMediaQuery();

	return (
		<Symbol
			css={mq({
				float: 'right',
				marginTop: ['1.8rem', 0],
			})}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

FooterLogo.propTypes = {
	/**
	 * Component symbol
	 */
	symbol: PropTypes.func,
};

FooterLogo.defaultProps = {};
