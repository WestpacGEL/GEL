/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';
import { VisuallyHidden } from '@westpac/a11y';

// ==============================
// Component
// ==============================

/**
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const BreadcrumbCrumb = ({ children, last, ...props }) => {
	const { COLORS } = useBrand();

	return (
		<li
			css={{
				display: 'inline-block',
				position: 'relative',
				color: COLORS.text,

				a: {
					color: COLORS.text,
					textDecoration: 'none',

					':focus, :hover': {
						textDecoration: 'underline',
					},
				},
			}}
			{...props}
		>
			{last && <VisuallyHidden>Current page:</VisuallyHidden>}
			{children}
			{!last && (
				<ArrowRightIcon
					aria-hidden="true"
					size="small"
					color={COLORS.primary}
					css={{
						marginLeft: '0.1875rem',
						marginRight: '0.1875rem',
					}}
				/>
			)}
		</li>
	);
};

BreadcrumbCrumb.isCrumb = true;

// ==============================
// Types
// ==============================

BreadcrumbCrumb.propTypes = {
	/**  Enable last prop.
	 *   The system adds a 'last' prop to the last Crumb
	 */
	last: PropTypes.bool,

	/**  Any renderable child */
	children: PropTypes.node,
};

BreadcrumbCrumb.defaultProps = {
	last: false,
};
