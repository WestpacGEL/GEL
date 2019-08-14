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
export const Breadcrumb = ({ arrItem, ...props }) => {
	const { breadcrumb } = useTheme();

	const common = {
		padding: '6px 18px',
		marginBottom: '21px',
		listStyle: 'none',
		fontSize: '13px',
	};

	const styleItem = {
		display: 'inline-block',
		position: 'relative',
	};

	const styleLink = {
		color: '#2d373e',
		textDecoration: 'none',

		'&:focus, &:hover': {
			textDecoration: 'underline',
		},
	};

	const styleSeparator = {
		marginLeft: 3,
		marginRight: 3,
	};

	return (
		<div {...props}>
			<SrOnly>Page navigation:</SrOnly>

			<ol css={common}>
				{/* {test()} */}
				{arrItem.map((item, index) =>
					index === arrItem.length - 1 ? (
						// Last breadcrumb
						<li key={`breadcrumb-${index}`} css={styleItem}>
							<span>
								<SrOnly>Current page:</SrOnly>
								{item[0]}
							</span>
						</li>
					) : (
						<li key={`breadcrumb-${index}`} css={styleItem}>
							<a href={item[1]} css={styleLink}>
								{item[0]}
							</a>
							<ArrowRightIcon
								size="small"
								color={breadcrumb.separator.color}
								css={styleSeparator}
							/>
						</li>
					)
				)}
			</ol>
		</div>
	);
};

// ==============================
// Types
// ==============================

Breadcrumb.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

Breadcrumb.defaultProps = {};
