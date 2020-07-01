/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import merge from 'lodash.merge';
import { blenderReconciler } from './_utils';

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

	return (
		<button type="button" disabled={!visited} {...rest}>
			{children}
			<VisuallyHidden>{stateText}</VisuallyHidden>
		</button>
	);
};

const BlenderStepButton = ({ state: { visited, active }, children, ...rest }) => {
	let stateText = ', not started';
	if (active) {
		stateText = ', in progress';
	} else if (visited) {
		stateText = ', complete';
	}

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

const baseStyles = () => {
	const { COLORS, PACKS } = useBrand();

	return {
		label: 'progressRope-step-btn',
		position: 'relative',
		fontSize: '0.875rem', //really need to fix specificity on this, being overriden by core
		lineHeight: 1.428571429, //`<body>` line-height
		textAlign: 'left',
		padding: '0.5rem 1.875rem 0.875rem 3.5rem',
		border: 0,
		background: 'none',
		display: 'block',
		width: '100%',
		appearance: 'none',
		cursor: 'pointer',
		touchAction: 'manipulation',
		userSelect: 'none',
		boxSizing: 'border-box',
		color: COLORS.tints.muted90,

		':disabled': {
			color: COLORS.tints.muted90,
			cursor: 'default',
		},

		':focus': {
			outlineOffset: `-${PACKS.focus.outlineWidth}`, // reposition inside
		},

		// circle
		'::after': {
			content: '""',
			zIndex: 2,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: '0.625rem',
			width: '0.875rem',
			height: '0.875rem',
			left: '1.875rem',
			border: `solid ${COLORS.borderDark}`,
			borderWidth: '2px',
			backgroundColor: '#fff',
			boxSizing: 'border-box',
		},
	};
};

const stepButtonStyles = (_, { end, grouped, visited, active, furthest }) => {
	const { COLORS, TYPE } = useBrand();

	return merge({}, baseStyles(), {
		// merge here because of the double '::after'
		padding: `0.5rem 1.875rem 0.875rem ${grouped && !end ? '4.25rem' : '3.5rem'}`,
		color: active ? COLORS.primary : visited ? COLORS.neutral : COLORS.tints.muted90,
		...(active ? TYPE.bodyFont[700] : null),

		// circle
		'::after': {
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
		},
	});
};

const blenderStyles = () => blenderReconciler(baseStyles());

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
	component: BlenderStepButton,
	styles: blenderStyles,
	attributes: stepButtonAttributes,
};
