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
	const { inputGroup } = useTheme();

	const style = {
		fontSize: inputGroup.addon.size[size].fontSize,
		lineHeight: inputGroup.addon.lineHeight,
		padding: inputGroup.addon.size[size].padding,
		height: inputGroup.addon.size[size].height,
		backgroundColor: inputGroup.addon.backgroundColor,
		border: `${inputGroup.addon.border} ${inputGroup.addon.borderColor}`,
		borderRadius: inputGroup.addon.borderRadius,
		borderTopRightRadius: '0',
		borderBottomRightRadius: '0',
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
