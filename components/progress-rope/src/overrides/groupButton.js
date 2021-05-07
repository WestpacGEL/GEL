/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';

// ==============================
// Component
// ==============================

const GroupBtn = ({ state: { complete, active }, children, ...rest }) => {
	let stateText = ', not started';
	if (complete) {
		stateText = ', complete';
	} else if (active) {
		stateText = ', in progress';
	}

	return (
		<button type="button" {...rest}>
			{children}
			<VisuallyHidden>{stateText}</VisuallyHidden>
		</button>
	);
};

// ==============================
// Styles
// ==============================

export const groupButtonStyles = (_, { complete, active }) => {
	const { COLORS, PACKS } = useBrand();

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

		label: 'progressRope-groupBtn',
		boxSizing: 'border-box',
		position: 'relative',
		fontSize: '1rem',
		lineHeight: '1.428571429', //`<body>` line-height
		textAlign: 'left',
		padding: '0.375rem 1.875rem 1.625rem 3.5rem',
		display: 'block',
		width: '100%',
		border: 0,
		background: 'none',
		appearance: 'none',
		cursor: 'pointer',
		touchAction: 'manipulation',
		userSelect: 'none',
		color: active ? COLORS.text : COLORS.tints.muted70, //set default `COLORS.text` because this is a `<button />`

		':focus': {
			outlineOffset: `-${PACKS.focus.outlineWidth}`, // reposition inside
		},

		// visited line
		'::before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			zIndex: 1,
			borderLeft: active && `2px solid ${COLORS.primary}`,
			top: 0,
			left: '2.25rem',
			bottom: 0,
			height: 'auto',
			transform: 'translateY(0.875rem)',
		},

		// circle
		'::after': {
			content: '""',
			zIndex: 1,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: '0.625rem',
			width: '0.875rem',
			height: '0.875rem',
			left: '1.875rem',
			border: `solid ${active ? COLORS.primary : COLORS.borderDark}`,
			borderWidth: complete ? '0.4375rem' : active ? '3px' : '2px', //a11y: filling with border for HCM support
			backgroundColor: '#fff',
			boxSizing: 'border-box',
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = () => groupButtonStyles(null, {});

// ==============================
// Attributes
// ==============================

const groupButtonAttributes = (_, { hidden, groupListId }) => ({
	'aria-expanded': !hidden,
	'aria-controls': groupListId,
});

const blenderAttributes = (_, { open, groupListId }) => ({
	'aria-expanded': open,
	'aria-controls': groupListId,
	'data-js': 'progressRope-groupBtn__version__',
});

// ==============================
// Exports
// ==============================

export const defaultGroupBtn = {
	component: GroupBtn,
	styles: groupButtonStyles,
	attributes: groupButtonAttributes,
};

export const blenderGroupBtn = {
	component: GroupBtn,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
