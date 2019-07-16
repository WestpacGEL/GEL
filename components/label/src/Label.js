/* @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// import Color from 'color';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Label = ({ appearance, tag: Tag, children, ...props }) => {
	const { label } = useTheme();
	// const { colors, label } = useTheme();

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

		// Or if we don't use verbose tokens...
		// color: colors[appearance].foreground,
		// backgroundColor: colors[appearance].default,
		// borderColor: appearance === 'faint' ? colors.border : colors[appearance].default,

		'a&:hover, a&:focus': {
			cursor: 'pointer',
			backgroundColor: label.appearance[appearance].hover.backgroundColor,
			borderColor: label.appearance[appearance].hover.borderColor,

			// Or if we don't use verbose tokens...
			/*backgroundColor:
				appearance === 'faint'
					? '#fff'
					: Color('white')
							.mix(Color(colors[appearance].default), 0.5)
							.hex(),
			borderColor:
				appearance === 'faint'
					? null
					: Color('white')
							.mix(Color(colors[appearance].default), 0.5)
							.hex(),*/
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
