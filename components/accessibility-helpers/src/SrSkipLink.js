/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

export const SrSkipLink = props => (
	<a
		css={{
			position: 'absolute',
			width: 1,
			height: 1,
			margin: -1,
			padding: 0,
			overflow: 'hidden',
			clip: 'rect(0,0,0,0)',
			border: 0,
			fontSize: '1.3125rem',

			':active, :focus': {
				position: 'fixed',
				top: 0,
				right: 0,
				left: 0,
				height: 'auto',
				width: 'auto',
				margin: 0,
				padding: '1em',
				overflow: 'visible',
				clip: 'auto',
				textAlign: 'center',
				zIndex: 2000,
				backgroundColor: '#fff',
			},

			':focus': {
				outlineOffset: -2, //override to be inside
			},
		}}
		{...props}
	/>
);

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
