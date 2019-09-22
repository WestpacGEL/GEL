/** @jsx jsx */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// Custom cloneElement function
const cloneElement = (element, props) =>
	jsx(element.type, {
		key: element.key,
		ref: element.ref,
		...element.props,
		...props,
	});

// ==============================
// Component
// ==============================

export const Hide = ({ isShow, displayCSS, children, ...props }) => {
	const { breakpoints } = useTheme();
	const mq = paint(breakpoints);

	const showArr = asArray(isShow);

	// Pass the selected props on to children
	const childrenWithProps = Children.map(children, child =>
		cloneElement(child, {
			css: mq({ display: showArr.map(s => (s ? displayCSS : 'none')) }),
			...props,
		})
	);

	return childrenWithProps;
};

// ==============================
// Types
// ==============================

Hide.propTypes = {
	/**
	 * When to visibly show the child element.
	 *
	 * For responsive control, pass an array of boolean values to use at each breakpoint.
	 */
	isShow: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * The CSS `display` property value to use when making the child element visible.
	 */
	displayCSS: PropTypes.string,

	/**
	 * Component children
	 */
	children: PropTypes.node.isRequired,
};

Hide.defaultProps = {
	isShow: false,
	displayCSS: 'inline-block',
};
