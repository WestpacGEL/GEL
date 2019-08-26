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
