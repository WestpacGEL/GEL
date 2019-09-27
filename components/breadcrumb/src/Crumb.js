/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { ArrowRightIcon } from '../../icon/src';
import { SrOnly } from '../../accessibility-helpers/src';

// ==============================
// Component
// ==============================

/**
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Crumb = ({ children, last, ...props }) => {
	const { COLORS } = useTheme();

	return (
		<li
			css={{
				display: 'inline-block',
				position: 'relative',
				color: COLORS.text,

				a: {
					color: COLORS.text,
					textDecoration: 'none',

					'&:focus, &:hover': {
						textDecoration: 'underline',
					},
				},
			}}
			{...props}
		>
			{last && <SrOnly>Current page:</SrOnly>}
			{children}
			{!last && '>'
			// <ArrowRightIcon
			// 	aria-hidden="true"
			// 	size="small"
			// 	color={COLORS.primary}
			// 	css={{
			// 		marginLeft: '0.1875rem',
			// 		marginRight: '0.1875rem',
			// 	}}
			// />
			}
		</li>
	);
};

// ==============================
// Types
// ==============================

Crumb.propTypes = {
	/**  Any renderable child */
	children: PropTypes.node,
};
