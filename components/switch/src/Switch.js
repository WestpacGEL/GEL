/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

/**
 * switch: Switch component for the Westpac GEL
 */

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Switch = ({ ...props }) => {
	const common = {
		position: 'relative',
		display: 'inline-table',
		verticalAlign: 'top',
		marginRight: 18,
		height: 36,
		paddingRight: 80,
		borderRadius: 36,
		height: 36,
		width: 80,
		marginBottom: 6,

		input: {
			position: 'absolute',
			zIndex: -1,
			opacity: 0,
		},

		'.switch-sronly': {
			position: 'absolute',
			height: 1,
			width: 1,
			overflow: 'hidden',
			clip: 'rect(1px 1px 1px 1px)',
		},

		'.switch-toggle': {
			borderRadius: 36,
			height: 36,
			width: 80,
			display: 'block',
			position: 'absolute',
			right: 0,
			top: 0,
			zIndex: 1,
			border: '2px solid #d7d2cb',
			backgroundColor: '#fff',
			overflow: 'hidden',
			lineHeight: 1.5,
			transition: 'border .3s ease,background .3s ease',
		},

		'&::before': {
			content: '""',
			display: 'table',
		},

		'.switch-toggle::after': {
			content: '""',
			height: 32,
			width: 32,
			display: 'block',
			position: 'absolute',
			left: 0,
			top: 0,
			borderRadius: '50%',
			backgroundColor: '#fff',
			boxShadow: '3px 0 6px 0 rgba(0,0,0,0.3)',
			transition: 'all .3s ease',
		},
	};

	return (
		// <div css={{}} {...props}>
		// 	Switch
		// </div>

		<label css={{ ...common }}>
			<input type="checkbox" name="ex1" id="ex1" />
			<span className="switch-sronly">text</span>
			<span className="switch-toggle" />
		</label>
	);
};

// ==============================
// Types
// ==============================

Switch.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

Switch.defaultProps = {};
