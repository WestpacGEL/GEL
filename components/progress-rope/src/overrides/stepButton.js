/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';

// ==============================
// Component
// ==============================

const StepButton = ({ state: { visited, active }, children, ...rest }) => {
	let stateText = ', not started';
	if (active) {
		stateText = ', in progress';
	} else if (visited) {
		stateText = ', complete';
	}

	// disabled attribute is spread to work with the blender
	return (
		<button type="button" {...(!(active || visited) && { disabled: true })} {...rest}>
			{children}
			<VisuallyHidden>{stateText}</VisuallyHidden>
		</button>
	);
};

// ==============================
// Styles
// ==============================

export const stepButtonStyles = (_, { end, grouped, visited, active, furthest }) => {
	const { COLORS, PACKS, TYPE } = useBrand();

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

		label: 'progressRope-stepBtn',
		boxSizing: 'border-box',
		position: 'relative',
		fontSize: '0.875rem',
		lineHeight: 1.428571429, //`<body>` line-height
		textAlign: 'left',
		padding: `0.5rem 1.875rem 0.875rem ${grouped && !end ? '4.25rem' : '3.5rem'}`,
		display: 'block',
		width: '100%',
		border: 0,
		background: 'none',
		...(active ? TYPE.bodyFont[700] : null),
		appearance: 'none',
		cursor: 'pointer',
		touchAction: 'manipulation',
		userSelect: 'none',
		color: active ? COLORS.primary : COLORS.text, //set default `COLORS.text` because this is a `<button />`

		':disabled': {
			color: COLORS.tints.muted90,
			cursor: 'default',
		},

		':focus': {
			outlineOffset: `-${PACKS.focus.outlineWidth}`, // reposition inside
		},

		// circle
		':after': {
			content: '""',
			zIndex: 2,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: grouped && !end ? '0.875rem' : '0.625rem',
			width: grouped && !end ? '0.625rem' : '0.875rem',
			height: grouped && !end ? '0.625rem' : '0.875rem',
			left: grouped && !end ? '2rem' : '1.875rem',
			border: `solid ${visited ? COLORS.primary : COLORS.borderDark}`,
			borderWidth:
				visited && !furthest
					? grouped && !end
						? '0.3125rem'
						: '0.4375rem'
					: visited
					? '3px'
					: '2px', //a11y: filling with border for HCM support
			backgroundColor: '#fff',
			boxSizing: 'border-box',
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = () => stepButtonStyles(null, {});

// ==============================
// Attributes
// ==============================

const stepButtonAttributes = (_, { active }) => ({
	'aria-current': active ? 'step' : undefined,
});

// ==============================
// Exports
// ==============================

export const defaultStepButton = {
	component: StepButton,
	styles: stepButtonStyles,
	attributes: stepButtonAttributes,
};

export const blenderStepButton = {
	component: StepButton,
	styles: blenderStyles,
	attributes: stepButtonAttributes,
};
