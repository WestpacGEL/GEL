/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { paint } from './utils';

// ==============================
// Utils
// ==============================

export const PanelHeader = ({ appearance, responsive, ...props }) => {
	const theme = useTheme();
	const arrayValues = paint(theme.breakpoints);

	return (
		<div
			css={arrayValues({
				padding: responsive ? theme.panel.header.padding.responsive : theme.panel.header.padding.default,
				backgroundColor: theme.panel.header.appearance[appearance].backgroundColor,
				color: theme.panel.header.appearance[appearance].color,
				borderTopRightRadius: (theme.panel.borderRadius - theme.panel.borderWidth),
				borderTopLeftRadius: (theme.panel.borderRadius - theme.panel.borderWidth),
				fontSize: '16px', //TODO rems
			})}
			{...props}
		/>
	);
};

export const PanelBody = ({ responsive, ...props }) => {
	const theme = useTheme();
	const arrayValues = paint(theme.breakpoints);

	return (
		<div
			css={arrayValues({
				padding: responsive ? theme.panel.body.padding.responsive : theme.panel.body.padding.default
		  })}
		  {...props}
		/>
	);
};

export const PanelFooter = ({ responsive, ...props }) => {
	const theme = useTheme();
	const arrayValues = paint(theme.breakpoints);

	return (
		<div
			css={arrayValues({
				padding: responsive ? theme.panel.footer.padding.responsive : theme.panel.footer.padding.default,
				backgroundColor: theme.panel.footer.backgroundColor,
				borderTop: `${theme.panel.borderWidth}px solid ${theme.panel.footer.borderColor}`,
				borderBottomRightRadius: (theme.panel.borderRadius - theme.panel.borderWidth),
				borderBottomLeftRadius: (theme.panel.borderRadius - theme.panel.borderWidth),
			})}
			{...props}
		/>
	);
};

// ==============================
// Component
// ==============================

export const Panel = ({ appearance, responsive, children, ...props }) => {
	const theme = useTheme();

	// Common styles
	const common = {
		marginBottom: '21px',
		backgroundColor: theme.panel.backgroundColor,
		border: `${theme.panel.borderWidth}px solid ${theme.panel.appearance[appearance].borderColor}`,
		borderRadius: theme.panel.borderRadius,
	};

	// Pass these selected props on to children
	const giftedChildren = Children.map(children, child =>
		cloneElement(child, { appearance, responsive, ...child.props })
	);

	return (
		<div
			css={{ ...common }}
			{...props}
		>
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
	 * The panel appearance.
	 *
	 * Defaults to "primary"
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

export const defaultProps = {
	appearance: 'hero',
	responsive: false,
};

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
