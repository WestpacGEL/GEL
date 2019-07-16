/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Panel = ({ appearance, responsive, children, ...props }) => {
	const { panel } = useTheme();

	// Common styles
	const common = {
		marginBottom: '21px',
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

	// Pass these selected props on to children
	const giftedChildren = Children.map(children, child =>
		cloneElement(child, { appearance, responsive, ...child.props })
	);

	return (
		<div css={{ ...common }} {...props}>
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

Panel.propTypes = {
	/**
	 * The panel appearance.
	 *
	 * Defaults to "hero"
	 */
	appearance: PropTypes.oneOf(options.appearance),

	/**
	 * Responsive mode.
	 *
	 * Defaults to "false"
	 */
	responsive: PropTypes.bool,

	/**
	 * The content for this panel.
	 */
	children: PropTypes.node,
};

Panel.defaultProps = {
	appearance: 'hero',
	responsive: false,
};
