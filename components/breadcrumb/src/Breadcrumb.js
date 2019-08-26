/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { SrOnly } from '../../accessibility-helpers/src';

// ==============================
// Component
// ==============================

/**
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Breadcrumb = ({ children, ...props }) => {
	const { breadcrumb } = useTheme();

	const common = {
		padding: breadcrumb.padding,
		marginBottom: breadcrumb.marginBottom,
		fontSize: breadcrumb.fontSize,
		listStyle: 'none',
	};

	const childrenWithProps = Children.map(children, (child, index) =>
		index === Children.count(children) - 1 ? cloneElement(child, { last: 'true' }) : child
	);

	return (
		<div {...props}>
			<SrOnly>Page navigation:</SrOnly>
			<ol css={common}>{childrenWithProps}</ol>
		</div>
	);
};

// ==============================
// Types
// ==============================

Breadcrumb.propTypes = {
	/**  Any renderable child */
	children: PropTypes.node,
};
