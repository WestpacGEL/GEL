/** @jsx jsx */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Panel = ({ appearance, children, ...props }) => {
	const { panel } = useTheme();

	const common = {
		marginBottom: panel.marginBottom,
		backgroundColor: panel.backgroundColor,
		border: `${panel.borderWidth} solid ${panel.appearance[appearance].borderColor}`,
		borderRadius: panel.borderRadius,

		// Child table styling
		'.table-responsive': {
			border: 0,
			marginBottom: 0,
		},
		table: {
			overflow: 'hidden', //clip overflow for rounded corners
			marginBottom: 0,
			borderBottomRightRadius: `calc(${panel.borderRadius} - ${panel.borderWidth})`,
			borderBottomLeftRadius: `calc(${panel.borderRadius} - ${panel.borderWidth})`,
		},
		'table caption': {
			padding: panel.body.padding.map(p => `${p} ${p} 0 ${p}`),
		},
	};

	// Pass the selected props on to children
	const childrenWithProps = Children.map(children, child => {
		return isValidElement(child) ? cloneElement(child, { appearance }) : child;
	});

	return (
		<div css={common} {...props}>
			{childrenWithProps}
		</div>
	);
};

// ==============================
// Types
// ==============================

const options = {
	appearance: ['hero', 'faint'],
};

export const propTypes = {
	/**
	 * Panel appearance
	 */
	appearance: PropTypes.oneOf(options.appearance),

	/**
	 * Panel content
	 */
	children: PropTypes.node,
};

export const defaultProps = {
	appearance: 'hero',
};

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
