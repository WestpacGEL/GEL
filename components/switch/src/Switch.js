/** @jsx jsx */

import React, { useState } from 'react';
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

export const Switch = ({ children, name, srOnly, ...props }) => {
	const [on, setOn] = useState(false);

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

		'&:hover': {
			cursor: 'pointer',
		},

		input: {
			position: 'absolute',
			zIndex: -1,
			opacity: 0,
		},
	};

	const srOnlyCss = {
		position: 'absolute',
		height: 1,
		width: 1,
		overflow: 'hidden',
		clip: 'rect(1px 1px 1px 1px)',
	};

	const toggleCss = {
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

		'&::after': {
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

	const toggleOnCss = {
		borderColor: '#621a4b',
		backgroundColor: '#621a4b',

		'&::after': {
			transform: 'translateX(100%)',
			boxShadow: '-3px 0 6px 0 rgba(0,0,0,0.3)',
			content: '""',
			height: 32,
			width: 32,
			display: 'block',
			position: 'absolute',
			left: 0,
			top: 0,
			borderRadius: '50%',
			backgroundColor: '#fff',
			transition: 'all .3s ease',
		},
	};

	return (
		<label
			css={{ ...common }}
			onClick={() => {
				setOn(true);
			}}
		>
			<input type="checkbox" name={name} id={name} />
			{srOnly ? <span css={{ ...srOnlyCss }}>text</span> : <span>{children}</span>}

			{on ? <span css={{ ...toggleCss, ...toggleOnCss }} /> : <span css={{ ...toggleCss }} />}
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
