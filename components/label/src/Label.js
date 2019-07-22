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
	const { label } = useTheme();

	const common = {
		border: `${label.borderWidth} solid`,
		borderRadius: label.borderRadius,
		display: 'inline',
		fontSize: label.fontSize,
		fontWeight: label.fontWeight,
		lineHeight: label.lineHeight,
		padding: label.padding,
		textAlign: 'center',
		verticalAlign: 'baseline',
		whiteSpace: 'nowrap',

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
		color: label.appearance[appearance].default.color,
		backgroundColor: label.appearance[appearance].default.backgroundColor,
		borderColor: label.appearance[appearance].default.borderColor,

		'a&:hover, a&:focus': {
			cursor: 'pointer',
			backgroundColor: label.appearance[appearance].hover.backgroundColor,
			borderColor: label.appearance[appearance].hover.borderColor,
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

Label.propTypes = {
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

Label.defaultProps = {
	appearance: 'primary',
	tag: 'span',
};
