/** @jsx jsx */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { jsx, useMediaQuery } from '@westpac/core';

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

export const Hide = ({ show, displayCSS, children, ...props }) => {
	const mq = useMediaQuery();

	const showArr = asArray(show);

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
	show: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

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
	show: false,
	displayCSS: 'inline-block',
};
