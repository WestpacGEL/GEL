/** @jsx jsx */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { Button } from './Button';

// ==============================
// Component
// ==============================

export const ButtonWrap = ({ children, ...props }) => {
	const { button } = useTheme();

	const style = {
		marginLeft: button.wrappedButton.marginLeft,
	};

	const childrenWithProps = Children.map(children, (child, i) => {
		// Apply additional styling on any adjacent (non-block) Button children
		if (
			isValidElement(child) &&
			child.type &&
			child.type === Button &&
			!child.props.isBlock &&
			i > 0
		) {
			return cloneElement(child, { style: { ...style, ...child.props.style } });
		}
		return child;
	});

	return childrenWithProps;
};

// ==============================
// Types
// ==============================

ButtonWrap.propTypes = {
	children: PropTypes.node.isRequired,
};

ButtonWrap.defaultProps = {};
