/** @jsx jsx */

import {
	jsx,
	useBrand,
	asArray,
	useMediaQuery,
	classNames,
	getModifier,
	styleReconciler,
} from '@westpac/core';
import { forwardRef } from 'react';

import { defaultProps } from '../Button';

// ==============================
// Component
// ==============================

const Button = forwardRef(({ state: { tag: Tag }, ...rest }, ref) => <Tag ref={ref} {...rest} />);

// ==============================
// Styles
// ==============================

const buttonStyles = (_, { look, size, soft, block, justify, disabled }) => {
	const mq = useMediaQuery();
	const { COLORS, TYPE } = useBrand();

	const bg = {
		background:
			'linear-gradient(to bottom,rgb(255, 62, 24) 16.66666666666667%,rgb(252, 154, 0) 16.66666666666667%,rgb(252, 154, 0) 33.33333333333333%,rgb(255, 216, 0) 33.33333333333333%,rgb(255, 216, 0) 33.33333333333333%,rgb(255, 216, 0) 50.00000000000001%,rgb(57, 234, 124) 50.00000000000001%,rgb(57, 234, 124) 66.66666666666668%,rgb(11, 178, 255) 66.66666666666668%,rgb(11, 178, 255) 83.33333333333335%,rgb(152, 90, 255) 83.33333333333335%)',
		color: COLORS.text,
	};

	let key;
	if (typeof window === 'undefined') {
		key = Buffer.from('cHJpZGU=', 'base64').toString();
	} else {
		key = atob('cHJpZGU=');
	}

	const styleMap = {
		primary: {
			standardCSS: {
				color: '#fff',
				backgroundColor: COLORS.primary,
				borderColor: COLORS.primary,

				':hover': {
					backgroundColor: COLORS.tints.primary70,
				},
				':active, &.active': {
					backgroundColor: COLORS.tints.primary50,
				},
			},
			softCSS: {
				color: COLORS.text,
				backgroundColor: '#fff',
				borderColor: COLORS.primary,

				':hover': {
					color: '#fff',
					backgroundColor: COLORS.tints.primary70,
				},
				':active, &.active': {
					color: '#fff',
					backgroundColor: COLORS.tints.primary50,
				},
			},
		},
		hero: {
			standardCSS: {
				color: '#fff',
				backgroundColor: COLORS.hero,
				borderColor: COLORS.hero,

				':hover': {
					backgroundColor: COLORS.tints.hero70,
				},
				':active, &.active': {
					backgroundColor: COLORS.tints.hero50,
				},
			},
			softCSS: {
				color: COLORS.text,
				backgroundColor: '#fff',
				borderColor: COLORS.hero,

				':hover': {
					color: '#fff',
					backgroundColor: `${COLORS.tints.hero70} !important`,
				},
				':active, &.active': {
					color: '#fff',
					backgroundColor: COLORS.tints.hero50,
				},
			},
		},
		faint: {
			standardCSS: {
				color: COLORS.muted,
				backgroundColor: COLORS.light,
				borderColor: COLORS.border,

				':hover, :active, &.active': {
					backgroundColor: '#fff',
				},
			},
			softCSS: {
				color: COLORS.muted,
				backgroundColor: '#fff',
				borderColor: COLORS.border,

				':hover, :active, &.active': {
					backgroundColor: COLORS.light,
				},
			},
		},
		link: {
			standardCSS: {
				color: COLORS.primary,
				backgroundColor: 'transparent',
				borderColor: 'transparent',
				textDecoration: 'underline', //a11y

				':hover, :active, &.active': {
					backgroundColor: 'transparent',
				},
			},
		},
		[key]: {
			standardCSS: { ...bg },
			soft: { ...bg },
		},
	};

	const sizeArr = asArray(size);

	const sizeMap = {
		small: {
			padding: ['0.1875rem', '0.5625rem', '0.25rem'],
			fontSize: '0.875rem',
			height: '1.875rem',
		},
		medium: {
			padding: ['0.3125rem', '0.75rem'],
			fontSize: '1rem',
			height: '2.25rem',
		},
		large: {
			padding: ['0.5rem', '0.9375rem'],
			fontSize: '1rem',
			height: '2.625rem',
		},
		xlarge: {
			padding: ['0.5625rem', '1.125rem', '0.625rem'],
			fontSize: '1.125rem',
			height: '3rem',
		},
	};

	const blockArr = asArray(block);

	return mq({
		label: 'button',
		alignItems: 'center', //vertical
		appearance: 'none',
		border: '1px solid transparent',
		borderRadius: '0.1875rem',
		cursor: 'pointer',
		justifyContent: justify ? 'space-between' : 'center', //horizontal
		lineHeight: 1.5,
		textAlign: 'center',
		textDecoration: 'none',
		touchAction: 'manipulation',
		transition: 'background 0.2s ease, color 0.2s ease',
		userSelect: 'none',
		verticalAlign: 'middle',
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...TYPE.bodyFont[400],

		// Hover state (but excluded if disabled or inside a disabled fieldset)
		':hover:not(:disabled), fieldset:not(:disabled) &:hover': {
			textDecoration: look === 'link' ? 'underline' : 'none',
		},

		// Disabled via `disabled` attribute or inside a disabled fieldset
		':disabled, fieldset:disabled &': {
			opacity: '0.5',
			pointerEvents: 'none',
		},

		// for non input tags
		...(disabled && { opacity: '0.5', pointerEvents: 'none' }),

		padding: sizeArr.map((s) => {
			if (!s) return null;
			let p = [...sizeMap[s].padding];
			return p.join(' ');
		}),
		fontSize: sizeArr.map((s) => s && sizeMap[s].fontSize),
		height: sizeArr.map((s) => s && sizeMap[s].height),
		display: blockArr.map((b) => b !== null && (b ? 'flex' : 'inline-flex')),
		width: blockArr.map((b) => b !== null && (b ? '100%' : 'auto')),

		...styleMap[look][soft ? 'softCSS' : 'standardCSS'],
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { look, size, soft, block, justify, disabled }) => {
	const props = { look, size, soft, block, justify, disabled };
	const baseStyles = buttonStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = buttonStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	let modifier;

	if (modifiers.length > 1 && modifiers.includes('soft')) {
		modifier = 'soft';
	} else {
		modifier = modifiers[0];
	}

	switch (modifier) {
		case 'soft':
			label = look === defaultProps.look ? `${label}-soft` : `${label}-${look}-soft`;
			break;
		case 'look':
			label = `${label}-${look}`;
			break;
		case 'size':
			label = `${label}-${size}`;
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const buttonAttributes = (_, { assistiveText }) => ({ 'aria-label': assistiveText });

const blenderAttributes = (_, { look, soft, size, block, justify, disabled }) => ({
	className: classNames({
		[`__convert__button-${look}`]: look && look !== defaultProps.look && !soft,
		[`__convert__button${look === defaultProps.look ? '' : `-${look}`}-soft`]: soft,
		[`__convert__button-${size}`]: size && size !== defaultProps.size,
		[`__convert__button-block`]: block,
		[`__convert__button-justify`]: justify,
		[`__convert__button-disabled`]: disabled,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultButton = {
	component: Button,
	styles: buttonStyles,
	attributes: buttonAttributes,
};

export const blenderButton = {
	component: Button,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
