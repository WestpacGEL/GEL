/** @jsx jsx */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { Button } from '@westpac/button';

// ==============================
// Component
// ==============================
/* 
- can the popover be attached to anything or is it just a button?
- what can be in a popover?
	- is it just text?
- do i create a custom button just to add forward ref?
- should I be using portal for this?
*/
export const Popover = ({ title, content, ...props }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();
	const popoverRef = useRef();

	const popoverStyle = {
		boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
		border: `1px solid #575f65`,
		borderRadius: 3,
		width: '17.625rem',
		backgroundColor: '#fff',
		pointerEvents: 'all',
		textAlign: 'left',
	};

	const titleStyle = {
		margin: 0,
		padding: '0.625rem 0.75rem',
		backgroundColor: '#575f65',
		color: '#fff',
		fontSize: '1rem',
		// fontWeight: 400,
	};

	const bodyStyle = {
		margin: 0,
		padding: '0.625rem 0.75rem',
		color: '#2d373e',
	};

	const handleClick = () => {
		console.log(ref.current.getBoundingClientRect());
		console.log(popoverRef.current.getBoundingClientRect());
		setOpen(!open);
	};

	return (
		<div css={{ display: 'inline-block', position: 'relative' }}>
			{open && (
				<div ref={popoverRef} css={popoverStyle} {...props}>
					<p css={titleStyle}>{title}</p>
					<p css={bodyStyle}>{content}</p>
				</div>
			)}
			<button ref={ref} onClick={handleClick}>
				Test
			</button>
		</div>
	);
};

// ==============================
// Types
// ==============================

Popover.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

Popover.defaultProps = {};
