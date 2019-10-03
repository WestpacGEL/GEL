/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const HeaderContactText = ({ accent, tag: Tag, ...props }) => {
	const { COLORS } = useTheme();

	return (
		<Tag
			css={{
				color: accent && COLORS.primary,

				'a:hover &, a:focus &': {
					textDecoration: accent && 'underline',
				},
			}}
			{...props}
		/>
	);
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
	accent: PropTypes.bool,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
HeaderContactText.defaultProps = {
	accent: false,
	tag: 'div',
};
