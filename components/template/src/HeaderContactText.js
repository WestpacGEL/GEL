/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const HeaderContactText = ({ isAccent, tag: Tag, ...props }) => {
	const { colors } = useTheme();

	const style = {
		color: isAccent && colors.primary.default,

		'a:hover &, a:focus &': {
			textDecoration: isAccent && 'underline',
		},
	};

	return <Tag css={style} {...props} />;
};

// ==============================
// Types
// ==============================

HeaderContactText.propTypes = {
	/**
	 * Accent text mode.
	 *
	 * When enabled the text children will be styled as a link.
	 */
	isAccent: PropTypes.bool,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
HeaderContactText.defaultProps = {
	isAccent: false,
	tag: 'div',
};
