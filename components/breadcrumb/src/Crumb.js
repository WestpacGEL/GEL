/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';
import { SrOnly } from '@westpac/accessibility-helpers';

// ==============================
// Component
// ==============================

/**
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Crumb = ({ children, last, ...props }) => {
	const { breadcrumb } = useTheme();

	const common = {
		display: 'inline-block',
		position: 'relative',
		color: breadcrumb.color,

		a: {
			color: breadcrumb.color,
			textDecoration: 'none',

			'&:focus, &:hover': {
				textDecoration: 'underline',
			},
		},
	};

	return (
		<li css={common} {...props}>
			{last && <SrOnly>Current page:</SrOnly>}
			{children}
			{!last && (
				<ArrowRightIcon
					aria-hidden="true"
					size="small"
					color={breadcrumb.separator.color}
					css={{
						marginLeft: breadcrumb.separator.marginLeft,
						marginRight: breadcrumb.separator.marginRight,
					}}
				/>
			)}
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
