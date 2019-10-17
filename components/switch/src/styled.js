/** @jsx jsx */

import React, { useContext } from 'react';
import { jsx, useTheme, paint } from '@westpac/core';

import { VisuallyHidden } from '@westpac/a11y';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const SwitchText = ({ size, isBlock, isFlipped, isSrOnlyText, ...props }) => {
	const { breakpoints, switch: formSwitch } = useTheme();
	const mq = paint(breakpoints);

	const common = {
		flex: isBlock && 1,
		display: 'flex',
		alignItems: 'center',
		minHeight: asArray(size).map(s => (s !== null ? formSwitch.size[s].height : null)),
		...(isFlipped ? { paddingLeft: formSwitch.text.gap } : { paddingRight: formSwitch.text.gap }),

		'input:disabled ~ &': {
			cursor: 'default',
			...formSwitch.toggleText.disabled,
		},
	};

	return isSrOnlyText ? <VisuallyHidden {...props} /> : <span css={mq(common)} {...props} />;
};

export const SwitchToggle = ({ size, toggleText, ...props }) => {
	const { breakpoints, typography, switch: formSwitch } = useTheme();
	const mq = paint(breakpoints);

	const style = {
		// Responsive size styling
		responsive: (() => {
			const sizeArr = asArray(size);

			return {
				borderRadius: sizeArr.map(s => (s !== null ? formSwitch.size[s].borderRadius : null)),
				width: sizeArr.map(s => (s !== null ? formSwitch.size[s].width : null)),
				height: sizeArr.map(s => (s !== null ? formSwitch.size[s].height : null)),
				fontSize: sizeArr.map(s => (s !== null ? formSwitch.size[s].fontSize : null)),
			};
		})(),

		// On/off toggle switch styling
		toggle: () => ({
			borderRadius: style.responsive.borderRadius,
			width: style.responsive.width,
			height: style.responsive.height,
			position: 'relative',
			zIndex: 1,
			border: `${formSwitch.borderWidth} solid ${formSwitch.borderColor}`,
			backgroundColor: formSwitch.backgroundColor,
			overflow: 'hidden',
			lineHeight: 1.5,
			transition: 'border .3s ease, background .3s ease',
			userSelect: 'none',

			// // Focus state
			// TODO: Rely on body class rather than context
			// 'input:focus ~ &': {
			// 	...(isKeyboardUser && typography.link.focus),
			// },

			// Checked state
			'input:checked ~ &': {
				...formSwitch.toggle.checked,
			},

			// Disabled state
			'input:disabled ~ &': {
				cursor: 'default',
				opacity: 0.5,
			},

			// Knob
			'::after': {
				content: '""',
				display: 'block',
				position: 'absolute',
				left: 0,
				top: 0,
				borderRadius: '50%',
				boxShadow: '3px 0 6px 0 rgba(0,0,0,0.3)',
				transition: 'all .3s ease',
				backgroundColor: formSwitch.backgroundColor,
				...(val => ({ width: val, height: val }))(
					style.responsive.height.map(
						h => `calc(${h} - ${formSwitch.borderWidth} - ${formSwitch.borderWidth})`
					)
				),

				// Checked state
				'input:checked ~ &': {
					left: '100%',
					transform: 'translateX(-100%)',
				},
			},
		}),

		// On/off text styling
		toggleText: () => ({
			position: 'absolute',
			right: 0,
			textAlign: 'center',
			fontSize: style.responsive.fontSize,
			lineHeight: style.responsive.height.map(h =>
				h !== null ? `calc(${h} - (${formSwitch.borderWidth} + ${formSwitch.borderWidth}))` : null
			),
			width: style.responsive.height.map(h =>
				h !== null
					? `calc(100% - (${h} - ${formSwitch.borderWidth} - ${formSwitch.borderWidth}))`
					: null
			),
			...formSwitch.toggleText.default,
		}),

		// Off text styling
		toggleTextOff: {
			right: 0,

			// Checked state
			'input:checked ~ span &': {
				opacity: 0, //hide
			},
		},

		// On text styling
		toggleTextOn: {
			opacity: 0, //hide (default)
			left: 0,
			...formSwitch.toggleText.checked,

			// Checked state
			'input:checked ~ span &': {
				opacity: 1, //show
			},
		},
	};

	return (
		<span css={mq(style.toggle())} {...props}>
			{toggleText && (
				<>
					<span css={mq({ ...style.toggleText(), ...style.toggleTextOff })} aria-hidden="true">
						{toggleText[1]}
					</span>
					<span css={mq({ ...style.toggleText(), ...style.toggleTextOn })} aria-hidden="true">
						{toggleText[0]}
					</span>
				</>
			)}
		</span>
	);
};
