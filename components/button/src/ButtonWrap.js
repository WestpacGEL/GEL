/** @jsx jsx */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { Button } from './Button';

// ==============================
// Component
// ==============================

export const ButtonWrap = ({ children, ...props }) => {
	const childrenWithProps = Children.map(children, (child, i) => {
		// Apply additional styling on any adjacent (non-block) Button children
		if (
			isValidElement(child) &&
			child.type &&
			child.type === Button &&
			!child.props.isBlock &&
			i > 0
		) {
			return cloneElement(child, {
				style: {
					marginLeft: '0.3125rem',
					...child.props.style,
				},
			});
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
