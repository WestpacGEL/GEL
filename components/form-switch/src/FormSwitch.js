/** @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

import { SrOnly } from './SrOnly'; //TODO: move to Core

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const FormSwitch = ({
	name,
	id,
	toggleText,
	size,
	block,
	flip,
	srOnly,
	checked,
	children,
	...props
}) => {
	const { colors, breakpoints, formSwitch } = useTheme();
	const mq = paint(breakpoints);

	const [on, setOn] = useState(checked);
	const toggle = () => setOn(!on);

	// Common styling
	const styleCommon = {
		position: 'relative',
		display: 'inline-flex',
		flexWrap: 'wrap',
		verticalAlign: 'top',
		marginRight: '18px',
		marginBottom: '6px',
		alignItems: 'center',
		width: block ? '100%' : null,
		flexDirection: flip ? 'row-reverse' : null,

		':hover': {
			cursor: 'pointer',
		},
	};

	const styleResponsive = () => {
		const sizeArr = asArray(size);

		return {
			borderRadius: sizeArr.map(s => formSwitch.size[s].borderRadius),
			width: sizeArr.map(s => formSwitch.size[s].width),
			height: sizeArr.map(s => formSwitch.size[s].height),
			insideWidth: sizeArr.map(s => formSwitch.size[s].insideWidth),
			insideHeight: sizeArr.map(s => formSwitch.size[s].insideHeight),
			lineHeight: sizeArr.map(s => formSwitch.size[s].lineHeight),
			fontSize: sizeArr.map(s => formSwitch.size[s].fontSize),
		};
	};

	const styleToggleText = {
		padding: flip ? '0 0 0 6px' : '0 6px 0 0',
		...(block && { width: asArray(size).map(s => `calc(100% - ${formSwitch.size[s].width})`) }),
	};

	const styleToggle = {
		borderRadius: styleResponsive().borderRadius,
		width: styleResponsive().width,
		height: styleResponsive().height,
		position: 'relative',
		zIndex: 1,
		border: `${formSwitch.borderWidth} solid`,
		borderColor: formSwitch.appearance.borderColor,
		backgroundColor: formSwitch.appearance.backgroundColor,
		overflow: 'hidden',
		lineHeight: 1.5,
		transition: 'border .3s ease, background .3s ease',
		userSelect: 'none',

		'::after': {
			content: '""',
			width: styleResponsive().insideWidth,
			height: styleResponsive().insideHeight,
			display: 'block',
			position: 'absolute',
			left: '0px',
			top: '0px',
			borderRadius: '50%',
			boxShadow: '3px 0 6px 0 rgba(0,0,0,0.3)',
			transition: 'all .3s ease',
			backgroundColor: formSwitch.appearance.backgroundColor,
		},

		'input:disabled ~ &': {
			cursor: 'not-allowed',
			opacity: 0.5,
		},
	};

	const styleToggleOn = {
		borderColor: colors.hero.default,
		backgroundColor: colors.hero.default,

		'::after': {
			left: '100%',
			transform: 'translateX(-100%)',
			boxShadow: '-3px 0 6px 0 rgba(0,0,0,0.3)',
			content: '""',
			width: styleResponsive().insideWidth,
			height: styleResponsive().insideHeight,
			display: 'block',
			position: 'absolute',
			top: 0,
			borderRadius: '50%',
			backgroundColor: formSwitch.appearance.backgroundColor,
			transition: 'all .3s ease',
		},
	};

	const valuesParamCss = {
		position: 'absolute',
		textAlign: 'center',
		lineHeight: styleResponsive().lineHeight,
		fontSize: styleResponsive().fontSize,
		width: (() => {
			const sizeArr = asArray(size);
			const insideWidth = [];

			sizeArr.forEach(s => {
				insideWidth.push(`calc(100% - ${formSwitch.size[s].insideWidth})`);
			});

			return insideWidth;
		})(),
	};

	const valuesParamOnCss = {
		left: 0,
		color: colors.hero.foreground,
	};

	const valuesParamOffCss = {
		right: 0,
	};

	return (
		<label css={mq(styleCommon)} onChange={toggle}>
			<input
				type="checkbox"
				css={{
					position: 'absolute',
					zIndex: -1,
					opacity: 0,
				}}
				name={name}
				id={id}
				checked={checked}
				{...props}
			/>

			{srOnly ? <SrOnly>{children}</SrOnly> : <span css={mq(styleToggleText)}>{children}</span>}

			<span css={mq({ ...styleToggle, ...(on && styleToggleOn) })}>
				{toggleText && (
					<span css={mq({ ...valuesParamCss, ...(on ? valuesParamOnCss : valuesParamOffCss) })}>
						{toggleText[on ? 0 : 1]}
					</span>
				)}
			</span>
		</label>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
};

FormSwitch.propTypes = {
	/**
	 * The form switch input element’s name.
	 *
	 * This prop is required.
	 */
	name: PropTypes.string.isRequired,

	/**
	 * The form switch input element’s id.
	 *
	 * This prop is required.
	 */
	id: PropTypes.string.isRequired,

	/**
	 * The form switch on/off text.
	 */
	toggleText: PropTypes.array,

	/**
	 * The form switch size.
	 *
	 * Defaults to "medium"
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(options.size),
		PropTypes.arrayOf(PropTypes.oneOf(options.size)),
	]),

	/**
	 * Form check label text.
	 */
	children: PropTypes.string,
};

FormSwitch.defaultProps = {
	size: 'medium',
	toggleText: ['On', 'Off'],
};
