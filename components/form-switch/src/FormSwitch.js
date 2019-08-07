/** @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

/**
 * switch: Switch component for the Westpac GEL
 */
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
	srOnly,
	values,
	checked,
	disabled,
	size,
	block,
	flipped,
	children,
}) => {
	const { colors, breakpoints, formSwitch } = useTheme();
	const mq = paint(breakpoints);

	const common = {
		position: 'relative',
		display: 'inline-flex',
		flexWrap: 'wrap',
		verticalAlign: 'top',
		marginRight: '18px',
		marginBottom: '6px',
		alignItems: 'center',
		width: block ? '100%' : null,
		flexDirection: flipped ? 'row-reverse' : null,

		':hover': {
			cursor: 'pointer',
		},

		input: {
			position: 'absolute',
			zIndex: -1,
			opacity: 0,
		},
	};

	const srOnlyCss = {
		position: 'absolute',
		height: 1,
		width: 1,
		overflow: 'hidden',
		clip: 'rect(1px 1px 1px 1px)',
	};

	const borderRadiusResponsive = () => {
		const sizeArr = asArray(size);
		const borderRadius = [];

		sizeArr.forEach(s => {
			borderRadius.push(formSwitch.size[s].borderRadius);
		});

		return borderRadius;
	};

	const widthResponsive = () => {
		const sizeArr = asArray(size);
		const width = [];

		sizeArr.forEach(s => {
			width.push(formSwitch.size[s].width);
		});

		return width;
	};

	const heightResponsive = () => {
		const sizeArr = asArray(size);
		const height = [];

		sizeArr.forEach(s => {
			height.push(formSwitch.size[s].height);
		});

		return height;
	};

	const insideWidthResponsive = () => {
		const sizeArr = asArray(size);
		const insideWidth = [];

		sizeArr.forEach(s => {
			insideWidth.push(formSwitch.size[s].insideWidth);
		});

		return insideWidth;
	};

	const insideHeightResponsive = () => {
		const sizeArr = asArray(size);
		const insideHeight = [];

		sizeArr.forEach(s => {
			insideHeight.push(formSwitch.size[s].insideHeight);
		});

		return insideHeight;
	};

	const lineHeightResponsive = () => {
		const sizeArr = asArray(size);
		const lineHeight = [];

		sizeArr.forEach(s => {
			lineHeight.push(formSwitch.size[s].lineHeight);
		});

		return lineHeight;
	};

	const fontSizeResponsive = () => {
		const sizeArr = asArray(size);
		const fontSize = [];

		sizeArr.forEach(s => {
			fontSize.push(formSwitch.size[s].fontSize);
		});

		return fontSize;
	};

	const valuesCss = {
		padding: flipped ? '0 0 0 6px' : '0 6px 0 0',
		width: block
			? (() => {
					const sizeArr = asArray(size);
					const width = [];

					sizeArr.forEach(s => {
						width.push(`calc(100% - ${formSwitch.size[s].width})`);
					});

					return width;
			  })()
			: null,
	};

	const toggleCss = {
		borderRadius: borderRadiusResponsive(),
		height: heightResponsive(),
		width: widthResponsive(),
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
			height: insideHeightResponsive(),
			width: insideWidthResponsive(),
			display: 'block',
			position: 'absolute',
			left: '0px',
			top: '0px',
			borderRadius: '50%',
			boxShadow: '3px 0 6px 0 rgba(0,0,0,0.3)',
			transition: 'all .3s ease',
			backgroundColor: formSwitch.appearance.backgroundColor,
		},

		'input:disabled~&': {
			cursor: 'not-allowed',
			opacity: '.5',
		},
	};

	const toggleOnCss = {
		borderColor: colors.hero.default,
		backgroundColor: colors.hero.default,

		'&::after': {
			left: '100%',
			transform: 'translateX(-100%)',
			boxShadow: '-3px 0 6px 0 rgba(0,0,0,0.3)',
			content: '""',
			height: insideHeightResponsive(),
			width: insideWidthResponsive(),
			display: 'block',
			position: 'absolute',
			top: '0px',
			borderRadius: '50%',
			backgroundColor: formSwitch.appearance.backgroundColor,
			transition: 'all .3s ease',
		},
	};

	const valuesParamCss = {
		position: 'absolute',
		textAlign: 'center',
		lineHeight: lineHeightResponsive(),
		fontSize: fontSizeResponsive(),
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
		left: '0px',
		color: colors.hero.foreground,
	};

	const valuesParamOffCss = {
		right: '0px',
	};

	const [on, setOn] = useState(checked);
	const valArr = Array.isArray(values) ? values : ['On', 'Off'];

	const toggle = () => setOn(!on);

	return (
		<label css={mq(common)} onChange={toggle}>
			<input type="checkbox" name={name} id={name} disabled={disabled} />

			{srOnly ? (
				<span css={srOnlyCss}>{children}</span>
			) : (
				<span css={mq(valuesCss)}>{children}</span>
			)}

			{on ? (
				<span css={mq({ ...toggleCss, ...toggleOnCss })}>
					{values && <span css={mq({ ...valuesParamCss, ...valuesParamOnCss })}>{valArr[0]}</span>}
				</span>
			) : (
				<span css={mq(toggleCss)}>
					{values && <span css={mq({ ...valuesParamCss, ...valuesParamOffCss })}>{valArr[1]}</span>}
				</span>
			)}
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
	 * Describe `someProperty` here
	 */
	values: PropTypes.array,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,

	/**
	 * The switch size.
	 *
	 * Defaults to "medium"
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(options.size),
		PropTypes.arrayOf(PropTypes.oneOf(options.size)),
	]),
};

FormSwitch.defaultProps = {
	checked: false,
	disabled: false,
	size: 'medium',
};
