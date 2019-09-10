/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const SrSkipLink = ({ ...props }) => {
	const {
		typography: { link },
	} = useTheme();

	const common = {
		position: 'absolute',
		width: 1,
		height: 1,
		margin: -1,
		padding: 0,
		overflow: 'hidden',
		clip: 'rect(0,0,0,0)',
		border: 0,
		fontSize: '2.1rem',

		':active, :focus': {
			position: 'fixed',
			top: 0,
			right: 0,
			left: 0,
			height: 'auto',
			width: 'auto',
			margin: 0,
			padding: '2.1rem',
			overflow: 'visible',
			clip: 'auto',
			textAlign: 'center',
			zIndex: 2000,
			backgroundColor: '#fff',
		},

		':focus': {
			outlineOffset: -link.focus.outlineOffset, //override to be inside
		},
	};

	return <a css={common} {...props} />;
};

// ==============================
// Types
// ==============================

SrSkipLink.propTypes = {
	/**
	 * `href` attribute
	 */
	href: PropTypes.string.isRequired,

	/**
	 * Link content
	 */
	children: PropTypes.node.isRequired,
};

SrSkipLink.defaultProps = {};
