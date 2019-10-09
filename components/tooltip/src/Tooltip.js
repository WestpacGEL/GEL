/** @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import shortid from 'shortid';

// ==============================
// Component
// ==============================
// should I take in a position prop to change the positioning of the bubble

export const Tooltip = ({ text, children, ...props }) => {
	const [visible, setVisible] = useState(false);

	const handleMouseEnter = () => setVisible(true);

	const handleMouseLeave = () => setVisible(false);

	const wrapStyle = {
		position: 'relative',
		cursor: 'help',
	};

	const tipStyle = {
		visibility: 'visible',
		// visibility: visible ? 'visible' : 'hidden',
		position: 'absolute',
		left: '50%',
		bottom: '110%',
		transform: 'translate(-50%)',
		margin: '0 0 6px 0',
		borderRadius: 3,
		padding: '0.4375rem',
		width: '18.75rem',
		color: '#fff',
		backgroundColor: '#000',
		fontSize: '0.75rem',
		textAlign: 'center',
		lineHeight: 1.2,
		whiteSpace: 'normal',
		pointerEvents: 'none',
		transition: 'opacity 0.2 ease, visibility 0.2 ease',
		transitionDelay: '100ms',
		zIndex: 100,

		'::after': {
			content: "''",
			marginLeft: '-5px',
			width: 0,
			borderTop: '5px solid #000',
			borderRight: '5px solid transparent',
			borderLeft: '5px solid transparent',
			fontSize: 0,
			lineHeight: 0,
			position: 'absolute',
			bottom: '-5px',
			left: '50%',
		},
	};

	const tooltipId = `tooltipBubble-${shortid.generate()}`;

	return (
		<span
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			aria-describedby={tooltipId}
			tabIndex={0}
			css={wrapStyle}
			{...props}
		>
			{children}
			<span id={tooltipId} css={tipStyle}>
				{text}
			</span>
		</span>
	);
};

// ==============================
// Types
// ==============================

Tooltip.propTypes = {};

Tooltip.defaultProps = {};
