/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { SrOnly } from '../../accessibility-helpers/src';
import { ArrowRightIcon } from '../../icon/src';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

/**
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Crumb = ({ children, ...props }) => {
	const { breadcrumb } = useTheme();

	const styleItem = {
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

	console.log(children);

	return (
		<li css={styleItem} {...props}>
			{children}
			<ArrowRightIcon
				size="small"
				color={breadcrumb.separator.color}
				css={{
					marginLeft: breadcrumb.separator.marginLeft,
					marginRight: breadcrumb.separator.marginRight,
				}}
			/>
		</li>
	);
};

// ==============================
// Types
// ==============================

Crumb.propTypes = {};

Crumb.defaultProps = {};
