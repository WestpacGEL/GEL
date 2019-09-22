/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FooterText = props => {
	const {
		breakpoints,
		template: { footer },
	} = useTheme();
	const mq = paint(breakpoints);

	const style = {
		overflow: [null, 'hidden'], //icon wrapping (SM+)
		...footer.text,

		'p:first-of-type': {
			marginTop: 0,
		},
		'p:last-child': {
			marginBottom: 0,
		},
	};

	return <div css={mq(style)} {...props} />;
};

// ==============================
// Types
// ==============================

FooterText.propTypes = {};

FooterText.defaultProps = {};
