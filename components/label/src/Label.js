/* @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Label = ({ appearance, tag: Tag, children, ...props }) => {
	const theme = useTheme();

	const common = {
		display: 'inline',
		padding: theme.label.padding,
		fontSize: theme.label.fontSize,
		fontWeight: 400,
		lineHeight: 1,
		textAlign: 'center',
		whiteSpace: 'nowrap',
		verticalAlign: 'baseline',
		borderRadius: theme.label.borderRadius,
		border: `${theme.label.borderWidth} solid`,

		'&:empty': {
			display: 'none',
		},
		'a&': {
			textDecoration: 'none',
		},

		'@media print': {
			color: '#000',
			backgroundColor: '#fff',
			border: '1px solid #000',
		},
	};

	const styleAppearance = {
		color: theme.label.appearance[appearance].default.color,
		backgroundColor: theme.label.appearance[appearance].default.backgroundColor,
		borderColor: theme.label.appearance[appearance].default.borderColor,

		'a&:hover, a&:focus': {
			cursor: 'pointer',
			backgroundColor: theme.label.appearance[appearance].hover.backgroundColor,
			borderColor: theme.label.appearance[appearance].hover.borderColor,
		},
	};

	if (props.href && Tag === 'span') {
		Tag = 'a';
	}

	return (
		<Tag css={{ ...common, ...styleAppearance }} {...props}>
			{children}
		</Tag>
	);
};

// ==============================
// Types
// ==============================

const options = {
	appearance: [
		'primary',
		'hero',
		'neutral',
		'faint',
		'success',
		'information',
		'warning',
		'danger',
	],
};

export const propTypes = {
	/**
	 * The label appearance.
	 *
	 * Defaults to "primary"
	 */
	appearance: PropTypes.oneOf(options.appearance),

	/**
	 * The label tag.
	 *
	 * Defaults to "span"
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * The content for this label.
	 *
	 * This prop is requried.
	 */
	children: PropTypes.node.isRequired,
};

export const defaultProps = {
	appearance: 'primary',
	tag: 'span',
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
