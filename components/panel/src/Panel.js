/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Panel = ({ appearance, responsive, children, ...props }) => {
	const { panel } = useTheme();

	const common = {
		marginBottom: panel.marginBottom,
		backgroundColor: panel.backgroundColor,
		border: `${panel.borderWidth} solid ${panel.appearance[appearance].borderColor}`,
		borderRadius: panel.borderRadius,

		// Child table styling
		'.table-wrapper': {
			border: 'none',
			marginBottom: 0,
		},
		'.table': {
			overflow: 'hidden', //clip overflow for rounded corners
			marginBottom: 0,
			borderBottomRightRadius: `calc(${panel.borderRadius} - ${panel.borderWidth})`,
			borderBottomLeftRadius: `calc(${panel.borderRadius} - ${panel.borderWidth})`,
		},
		'.table caption': {
			padding: `${panel.body.padding.default} ${panel.body.padding.default} 0 ${
				panel.body.padding.default
			}`,
		},
	};

	// Pass the selected props on to children
	const giftedChildren = Children.map(children, child =>
		cloneElement(child, { appearance, responsive })
	);

	return (
		<div css={common} {...props}>
			{giftedChildren}
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
	 * Responsive mode.
	 *
	 * This option extends padding in larger breakpoints (SM+).
	 */
	responsive: PropTypes.bool,

	/**
	 * Panel content
	 */
	children: PropTypes.node,
};

export const defaultProps = {
	appearance: 'hero',
	responsive: false,
};

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
