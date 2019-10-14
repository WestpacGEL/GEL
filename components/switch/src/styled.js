/** @jsx jsx */

import React, { useContext } from 'react';
import { jsx, useTheme, paint } from '@westpac/core';

import { SrOnly } from '@westpac/accessibility-helpers';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const SwitchText = ({ size, isBlock, isFlipped, isSrOnlyText, ...props }) => {
	const { breakpoints, COLORS } = useTheme();
	const mq = paint(breakpoints);

	const common = {
		flex: isBlock && 1,
		display: 'flex',
		alignItems: 'center',
		minHeight: asArray(size).map(s => (s !== null ? formSwitch.size[s].height : null)),
		...(isFlipped ? { paddingLeft: '0.375rem' } : { paddingRight: '0.375rem' }),

		'input:disabled ~ &': {
			cursor: 'default',
			color: COLORS.muted,
		},
	};

	return isSrOnlyText ? <SrOnly {...props} /> : <span css={mq(common)} {...props} />;
};

export const SwitchToggle = ({ size, toggleText, ...props }) => {
	const { breakpoints, typography, COLORS } = useTheme();
	const mq = paint(breakpoints);

	const sizeMap = {
		small: {
			width: '7rem',
			height: '3rem',
			borderRadius: '3rem',
			fontSize: '1.4rem',
		},
		medium: {
			width: '8rem',
			height: '3.6rem',
			borderRadius: '3.6rem',
			fontSize: '1.6rem',
		},
		large: {
			width: '8.9rem',
			height: '4.2rem',
			borderRadius: '4.2rem',
			fontSize: '1.6rem',
		},
		xlarge: {
			width: '9.6rem',
			height: '4.8rem',
			borderRadius: '4.8rem',
			fontSize: '1.8rem',
		},
	};

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
			border: `2px solid ${COLORS.border}`,
			backgroundColor: '#fff',
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
				borderColor: COLORS.hero,
				backgroundColor: COLORS.hero,
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
				backgroundColor: '#fff',
				...(val => ({ width: val, height: val }))(
					style.responsive.height.map(h => `calc(${h} - 2px - 2px)`)
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
				h !== null ? `calc(${h} - (2px + 2px))` : null
			),
			width: style.responsive.height.map(h =>
				h !== null ? `calc(100% - (${h} - 2px - 2px))` : null
			),
			color: COLORS.text,
			padding: '0 0.4rem',
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
			color: '#fff',

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
