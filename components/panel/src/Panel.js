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
				padding: responsive
					? theme.panel.header.padding.responsive
					: theme.panel.header.padding.default,
				backgroundColor: theme.panel.header.appearance[appearance].backgroundColor,
				borderBottom: `${theme.panel.borderWidth} solid ${
					theme.panel.header.appearance[appearance].borderColor
				}`,
				color: theme.panel.header.appearance[appearance].color,
				borderTopRightRadius: `calc(${theme.panel.borderRadius} - ${theme.panel.borderWidth})`,
				borderTopLeftRadius: `calc(${theme.panel.borderRadius} - ${theme.panel.borderWidth})`,
				fontSize: '16px', //TODO rems

				'@media print': {
					borderBottom: '1px solid #000',
				},
			})}
			{...props}
		/>
	);
};

export const PanelBody = ({ appearance, responsive, ...props }) => {
	const theme = useTheme();
	const arrayValues = paint(theme.breakpoints);

	return (
		<div
			css={arrayValues({
				padding: responsive
					? theme.panel.body.padding.responsive
					: theme.panel.body.padding.default,
			})}
			{...props}
		/>
	);
};

export const PanelFooter = ({ appearance, responsive, ...props }) => {
	const theme = useTheme();
	const arrayValues = paint(theme.breakpoints);

	return (
		<div
			css={arrayValues({
				padding: responsive
					? theme.panel.footer.padding.responsive
					: theme.panel.footer.padding.default,
				backgroundColor: theme.panel.footer.backgroundColor,
				borderTop: `${theme.panel.borderWidth} solid ${theme.panel.footer.borderColor}`,
				borderBottomRightRadius: `calc(${theme.panel.borderRadius} - ${theme.panel.borderWidth})`,
				borderBottomLeftRadius: `calc(${theme.panel.borderRadius} - ${theme.panel.borderWidth})`,
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
		border: `${theme.panel.borderWidth} solid ${theme.panel.appearance[appearance].borderColor}`,
		borderRadius: theme.panel.borderRadius,

		// Child table styling
		'.table-wrapper': {
			border: 'none',
			marginBottom: 0,
		},
		'.table': {
			overflow: 'hidden', //clip overflow for rounded corners
			marginBottom: 0,
			borderBottomRightRadius: `calc(${theme.panel.borderRadius} - ${theme.panel.borderWidth})`,
			borderBottomLeftRadius: `calc(${theme.panel.borderRadius} - ${theme.panel.borderWidth})`,
		},
		'.table caption': {
			padding: `${theme.panel.body.padding.default} ${theme.panel.body.padding.default} 0 ${
				theme.panel.body.padding.default
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

export const propTypes = {
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

export const defaultProps = {
	appearance: 'hero',
	responsive: false,
};

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
