/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FooterLogo = ({ symbol: Symbol, ...props }) => {
	const {
		breakpoints,
		template: { footer },
	} = useTheme();
	const mq = paint(breakpoints);

	const style = {
		float: 'right',
		marginTop: ['1.8rem', 0],
	};

	return <Symbol css={mq(style)} {...props} />;
};

// ==============================
// Types
// ==============================

FooterLogo.propTypes = {};

FooterLogo.defaultProps = {};
