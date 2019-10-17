/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { useInputGroupContext } from './InputGroup';

// ==============================
// Component
// ==============================

/**
 * Input Group: Styled input fields with attached addons. Addons can be text ($,
 * %,
 * .00 etc) or form controls (buttons or select inputs).
 */
export const InputGroupAddon = ({ first, last, ...props }) => {
	const { COLORS } = useTheme();
	const { size } = useInputGroupContext();

	const sizeMap = {
		small: {
			fontSize: '0.875rem',
			padding: '0.1875rem 0.5625rem 0.25rem',
			height: '1.875rem',
		},
		medium: {
			fontSize: '1rem',
			padding: '0.3125rem 0.75rem',
			height: '2.25rem',
		},
		large: {
			fontSize: '1rem',
			padding: '0.5rem 0.9375rem',
			height: '2.625rem',
		},
		xlarge: {
			fontSize: '1.125rem',
			padding: '0.5625rem 1.125rem 0.625rem',
			height: '3rem',
		},
	};

	return (
		<span
			css={{
				fontSize: sizeMap[size].fontSize,
				lineHeight: 1.5,
				padding: sizeMap[size].padding,
				height: sizeMap[size].height,
				backgroundColor: COLORS.light,
				border: `1px solid ${COLORS.borderDark}`,
				borderRadius: '0.1875rem',
				borderTopRightRadius: 0,
				borderBottomRightRadius: 0,
				whiteSpace: 'nowrap',

				borderRight: first && 0,
				...(last && {
					borderTopRightRadius: '3px',
					borderBottomRightRadius: '3px',
					borderLeft: 0,
				}),
				...(!first && {
					borderTopLeftRadius: 0,
					borderBottomLeftRadius: 0,
				}),
				...(!last && {
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
				}),
			}}
			{...props}
		/>
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
