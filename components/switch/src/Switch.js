/** @jsx jsx */

import React, { useState, Children, cloneElement } from 'react';
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

export const Switch = ({ children, name, srOnly, text, ...props }) => {
	const common = {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		marginRight: 18,
		height: 36,
		paddingRight: 80,
		borderRadius: 36,
		height: 36,
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

	const textCss = {
		paddingRight: 6,
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
			left: '100%',
			transform: 'translateX(-100%)',
			boxShadow: '-3px 0 6px 0 rgba(0,0,0,0.3)',
			content: '""',
			height: 32,
			width: 32,
			display: 'block',
			position: 'absolute',
			top: 0,
			borderRadius: '50%',
			backgroundColor: '#fff',
			transition: 'all .3s ease',
		},
	};

	const textParamCss = {
		position: 'absolute',
		textAlign: 'center',
		lineHeight: 2,
		fontSize: 16,
		width: 44,
		width: 'calc(100% - 32px)',
	};

	const textParamOnCss = {
		left: 0,
	};

	const textParamOffCss = {
		right: 0,
	};

	const [on, setOn] = useState(false);
	const toggle = () => setOn(!on);

	console.log(on);

	const textParam = text.map((t, i) => (
		<>
			{i === 0 ? (
				<span key={i} css={{ ...textParamCss, ...textParamOnCss }}>
					{t}
				</span>
			) : (
				<span key={i} css={{ ...textParamCss, ...textParamOffCss }}>
					{t}
				</span>
			)}
		</>
	));

	return (
		<label css={{ ...common }} onClick={toggle}>
			<input type="checkbox" name={name} id={name} />
			{srOnly ? (
				<span css={{ ...srOnlyCss }}>{children}</span>
			) : (
				<span css={{ ...textCss }}>{children}</span>
			)}

			{on ? (
				<span css={{ ...toggleCss, ...toggleOnCss }} />
			) : (
				<span css={{ ...toggleCss }}>{textParam}</span>
			)}
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

Switch.defaultProps = {
	text: ['On', 'Off'],
};
