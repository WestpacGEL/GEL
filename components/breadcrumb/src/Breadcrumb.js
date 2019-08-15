/** @jsx jsx */

import React from 'react';
import { Link } from 'react-router-dom';
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
		padding: breadcrumb.padding,
		marginBottom: breadcrumb.marginBottom,
		fontSize: breadcrumb.fontSize,
		listStyle: 'none',
	};

	const styleItem = {
		display: 'inline-block',
		position: 'relative',
		color: breadcrumb.color,
	};

	const styleLink = {
		color: breadcrumb.color,
		textDecoration: 'none',

		'&:focus, &:hover': {
			textDecoration: 'underline',
		},
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
							<Link to={item[1]} css={styleLink}>
								{item[0]}
							</Link>

							<ArrowRightIcon
								size="small"
								color={breadcrumb.separator.color}
								css={{
									marginLeft: breadcrumb.separator.marginLeft,
									marginRight: breadcrumb.separator.marginRight,
								}}
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
	 * The breadcrumbs list with the name and corresponding link
	 * We are expecting an array of strings, within an array.
	 */
	arrItem: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

Breadcrumb.defaultProps = {};
