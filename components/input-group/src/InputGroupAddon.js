/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

/**
 * Input Group: Styled input fields with attached addons. Addons can be text ($, %, .00 etc) or form controls (buttons or select inputs).
 */
export const InputGroupAddon = ({ size, children, ...props }) => {
	const { COLORS } = useTheme();

	const sizeMap = {
		small: {
			fontSize: '1.4rem',
			padding: '0.3rem 0.9rem 0.4rem',
			height: '3rem',
		},
		medium: {
			fontSize: '1.6rem',
			padding: '0.5rem 1.2rem',
			height: '3.6rem',
		},
		large: {
			fontSize: '1.6rem',
			padding: '0.8rem 1.5rem',
			height: '4.2rem',
		},
		xlarge: {
			fontSize: '1.8rem',
			padding: '0.9rem 1.8rem 1rem',
			height: '4.8rem',
		},
	};

	const style = {
		fontSize: sizeMap[size].fontSize,
		lineHeight: 1.5,
		padding: sizeMap[size].padding,
		height: sizeMap[size].height,
		backgroundColor: COLORS.light,
		border: `1px solid ${COLORS.borderDark}`,
		borderRadius: '3px',
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		whiteSpace: 'nowrap',
	};

	return (
		<span css={style} {...props}>
			{children}
		</span>
	);
};

// ==============================
// Types
// ==============================

InputGroupAddon.propTypes = {
	/**  Component text */
	children: PropTypes.string.isRequired,
};

InputGroupAddon.defaultProps = {};
