/** @jsx jsx */

import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';

// ==============================
// Component
// ==============================

const Link = ({ state, ...rest }) => <button type="button" {...rest} />;

const BlenderLink = ({ className, ...rest }) => (
	<Link className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const linkStyles = (_, { active, first, last, disabled }) => {
	const { COLORS } = useBrand();

	return {
		// Normalize
		// ==========

		// 1. Change the font styles in all browsers.
		// 2. Remove the margin in Firefox and Safari.
		// button, input, optgroup, select, textarea:
		fontFamily: 'inherit', // 1
		fontSize: '100%', // 1
		lineHeight: 1.15, // 1
		margin: 0, // 2

		// Show the overflow in IE
		// button, input:
		overflow: 'visible',

		// Remove the inheritance of text transform in Edge, Firefox, and IE.
		// button, select:
		textTransform: 'none',

		// Remove the inner border and padding in Firefox.
		// button::-moz-focus-inner:
		'&::-moz-focus-inner': {
			borderStyle: 'none',
			padding: 0,
		},
		// =========

		label: getLabel('pagination-link'),
		position: 'relative',
		zIndex: active ? 1 : 0,
		appearance: 'none',
		marginLeft: '-1px',
		lineHeight: 1.15,
		display: 'inline-block',
		border: `1px solid ${active ? COLORS.hero : COLORS.border}`,
		backgroundColor: active ? COLORS.hero : '#fff',
		padding: '0.5625rem 0.75rem',
		fontSize: '0.875rem',
		color: active ? '#fff' : COLORS.text, //set default `COLORS.text` because this is a `<button />`
		textDecoration: 'none',
		cursor: 'pointer',
		transition: 'background .2s ease, border .2s ease',

		':hover': {
			backgroundColor: active ? COLORS.hero : COLORS.background,
		},

		...(first && {
			marginLeft: 0,
			borderTopLeftRadius: '0.1875rem',
			borderBottomLeftRadius: '0.1875rem',
		}),
		...(last && {
			borderTopRightRadius: '0.1875rem',
			borderBottomRightRadius: '0.1875rem',
		}),
		...(disabled && {
			color: COLORS.muted,
			backgroundColor: COLORS.light,
			cursor: 'not-allowed',
			opacity: '0.5',
		}),
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { active = false, first = false, last = false, disabled = false }) => {
	const defaultProps = { active: false, first: false, last: false, disabled: false }; // defining defaultProps here since they are all calculated within Pagination
	const props = { active, first, last, disabled };
	const baseStyles = linkStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = linkStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	let modifier;

	if (modifiers.length > 1 && modifiers.includes('disabled')) {
		modifier = 'disabled';
	} else {
		modifier = modifiers[0];
	}

	switch (modifier) {
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const linkAttributes = (_, { active, assistiveText, disabled }) => ({
	'aria-current': active ? 'page' : undefined,
	'aria-label': disabled ? undefined : assistiveText,
	disabled,
});

const blenderAttributes = (_, { active, first, last, assistiveText, disabled }) => ({
	...linkAttributes(_, active, assistiveText, disabled),
	className: classNames({
		[`__convert__pagination-link-active`]: active,
		[`__convert__pagination-link-first`]: first,
		[`__convert__pagination-link-last`]: last,
		[`__convert__pagination-link-disabled`]: disabled,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultLink = {
	component: Link,
	styles: linkStyles,
	attributes: linkAttributes,
};

export const blenderLink = {
	component: BlenderLink,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
