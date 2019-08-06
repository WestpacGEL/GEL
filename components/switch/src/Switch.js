/** @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

/**
 * switch: Switch component for the Westpac GEL
 */

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Switch = ({
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
	const { colors, breakpoints, switchControl } = useTheme();
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

		'&:hover': {
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

	const valuesCss = {
		padding: flipped ? '0 0 0 6px' : '0 6px 0 0',
		width: block ? `calc(100% - ${switchControl.size[size].width})` : null,
	};

	const toggleCss = {
		borderRadius: switchControl.size[size].borderRadius,
		height: switchControl.size[size].height,
		width: switchControl.size[size].width,
		position: 'relative',
		zIndex: 1,
		border: `${switchControl.borderWidth} solid`,
		borderColor: switchControl.appearance.borderColor,
		backgroundColor: switchControl.appearance.backgroundColor,
		overflow: 'hidden',
		lineHeight: 1.5,
		transition: 'border .3s ease, background .3s ease',
		userSelect: 'none',

		'&::after': {
			content: '""',
			height: switchControl.size[size].insideHeight,
			width: switchControl.size[size].insideWidth,
			display: 'block',
			position: 'absolute',
			left: '0px',
			top: '0px',
			borderRadius: '50%',
			boxShadow: '3px 0 6px 0 rgba(0,0,0,0.3)',
			transition: 'all .3s ease',
			backgroundColor: switchControl.appearance.backgroundColor,
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
			height: switchControl.size[size].insideHeight,
			width: switchControl.size[size].insideWidth,
			display: 'block',
			position: 'absolute',
			top: '0px',
			borderRadius: '50%',
			backgroundColor: switchControl.appearance.backgroundColor,
			transition: 'all .3s ease',
		},
	};

	const valuesParamCss = {
		position: 'absolute',
		textAlign: 'center',
		lineHeight: switchControl.size[size].lineHeight,
		fontSize: switchControl.size[size].fontSize,
		width: switchControl.size[size].insideWidth,
		width: `calc(100% - ${switchControl.size[size].insideWidth})`,
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
		<label css={common} onChange={toggle}>
			<input type="checkbox" name={name} id={name} disabled={disabled} />

			{srOnly ? <span css={srOnlyCss}>{children}</span> : <span css={valuesCss}>{children}</span>}

			{on ? (
				<span css={{ ...toggleCss, ...toggleOnCss }}>
					{values && <span css={{ ...valuesParamCss, ...valuesParamOnCss }}>{valArr[0]}</span>}
				</span>
			) : (
				<span css={toggleCss}>
					{values && <span css={{ ...valuesParamCss, ...valuesParamOffCss }}>{valArr[1]}</span>}
				</span>
			)}
		</label>
	);
};

// ==============================
// Types
// ==============================

Switch.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	values: PropTypes.array,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
};

Switch.defaultProps = {
	checked: false,
	disabled: false,
	size: 'medium',
};
