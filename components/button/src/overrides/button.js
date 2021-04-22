/** @jsx jsx */

import {
	jsx,
	useBrand,
	asArray,
	useMediaQuery,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';
import { forwardRef } from 'react';

import { defaultProps } from '../Button';

// ==============================
// Component
// ==============================

const Button = forwardRef(({ state: { tag: Tag }, ...rest }, ref) => <Tag ref={ref} {...rest} />);

const BlenderButton = forwardRef(({ state: { tag: Tag }, className, ...rest }, ref) => (
	<Tag ref={ref} className={formatClassName(className)} {...rest} />
));

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

	// Note: backgroundColor values use to increase specificity against <Body />'s `a { background-color: transparent; }`
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
					backgroundColor: COLORS.tints.hero70,
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
				color: COLORS.link,
				backgroundColor: 'transparent',
				borderColor: 'transparent',
				textDecoration: 'underline', //a11y

				':hover, :active, &.active': {
					backgroundColor: 'transparent',
				},
			},
		},
		unstyled: {
			standardCSS: {
				border: 0,
			},
		},
		[key]: {
			standardCSS: { ...bg },
			softCSS: { ...bg },
		},
	};

	const sizeArr = asArray(size);

	const sizeMap = {
		small: {
			padding: '0.1875rem 0.5625rem 0.25rem',
			fontSize: '0.875rem',
			height: '1.875rem',
		},
		medium: {
			padding: '0.3125rem 0.75rem',
			fontSize: '1rem',
			height: '2.25rem',
		},
		large: {
			padding: '0.5rem 0.9375rem',
			fontSize: '1rem',
			height: '2.625rem',
		},
		xlarge: {
			padding: '0.5625rem 1.125rem 0.625rem',
			fontSize: '1.125rem',
			height: '3rem',
		},
	};

	const blockArr = asArray(block);

	return mq({
		// Normalize
		// ==========
		// 1. Remove the margin in Firefox and Safari.
		// 2. Show the overflow in IE.
		'button&, input&': {
			margin: 0, // 1
			overflow: 'visible', // 2
		},

		// Remove the inheritance of text transform in Edge, Firefox, and IE.
		'button&': {
			textTransform: 'none',
		},

		// Correct the inability to style clickable types in iOS and Safari.
		"button&, [type='button']&, [type='reset']&, [type='submit']&": {
			WebkitAppearance: 'button',
		},

		// Remove the inner border and padding in Firefox.
		"button&::-moz-focus-inner, [type='button']&::-moz-focus-inner, [type='reset']&::-moz-focus-inner, [type='submit']&::-moz-focus-inner": {
			borderStyle: 'none',
			padding: 0,
		},
		// =========

		label: 'button',
		alignItems: 'center', //vertical
		appearance: 'none',
		cursor: 'pointer',
		justifyContent: justify ? 'space-between' : 'center', //horizontal
		lineHeight: 1.5,
		textAlign: 'center',
		textDecoration: 'none',
		touchAction: 'manipulation',
		userSelect: 'none',
		verticalAlign: 'middle',
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		display: blockArr.map((b) => b !== null && (b ? 'flex' : 'inline-flex')),
		width: blockArr.map((b) => b !== null && (b ? '100%' : 'auto')),
		...(look !== 'unstyled' && {
			fontSize: sizeArr.map((s) => s && sizeMap[s].fontSize),
			...TYPE.bodyFont[400],
			padding: sizeArr.map((s) => s && sizeMap[s].padding),
			height: sizeArr.map((s) => s && sizeMap[s].height),
			border: '1px solid transparent',
			borderRadius: '0.1875rem',
			transition: 'background 0.2s ease, color 0.2s ease',
		}),
		...styleMap[look][soft ? 'softCSS' : 'standardCSS'],

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
	let brandStyles = {};

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
			brandStyles = styleReconciler(reconciledStyles, styleReconciler(baseStyles, _)); // for brand overrides
			break;
		case 'look':
			label = `${label}-${look}`;
			brandStyles = styleReconciler(reconciledStyles, styleReconciler(baseStyles, _));
			break;
		case 'size':
			label = `${label}-${size}`;
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, '.__convert__button&': { ...reconciledStyles, ...brandStyles } };
};

// ==============================
// Attributes
// ==============================

const buttonAttributes = (_, { assistiveText }) => ({ 'aria-label': assistiveText });

const blenderAttributes = (_, { look, soft, size, block, justify, assistiveText }) => ({
	...buttonAttributes(_, { assistiveText }),
	className: classNames({
		[`__convert__button-${look}`]: look && look !== defaultProps.look && !soft,
		[`__convert__button${look === defaultProps.look ? '' : `-${look}`}-soft`]: soft,
		[`__convert__button-${size}`]: size && size !== defaultProps.size,
		[`__convert__button-block`]: block,
		[`__convert__button-justify`]: justify,
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
	component: BlenderButton,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
