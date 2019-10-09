/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const SidebarHeading = ({ tag: Tag, ...props }) => {
	const { COLORS } = useTheme();

	return (
		<Tag
			css={{
				margin: 0,
				fontWeight: 'normal',
				fontSize: '0.875rem',
				color: COLORS.text,

				em: {
					color: COLORS.primary,
					fontStyle: 'normal',
				},
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

/**
 * Sidebar heading
 */
SidebarHeading.propTypes = {
	/**
	 * Heading tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
SidebarHeading.defaultProps = {
	tag: 'h4',
};
