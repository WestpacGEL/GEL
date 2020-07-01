/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import classNames from 'classnames';

import { blenderReconciler } from './_utils';

// ==============================
// Component
// ==============================

const Step = ({ state, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================
// Blender specific styles
// - visited, end and active styles are only for the blender
// ==============================

const endStyles = () => {
	return {
		label: 'GEL-progressRope-step-end',
		marginTop: '0.125rem',
	};
};

const activeStyles = () => {
	const { COLORS, TYPE } = useBrand();
	return {
		label: 'GEL-progressRope-step-active',
		'.GEL-progressRope-step-btn': {
			color: COLORS.primary,
			...TYPE.bodyFont[700],

			'&::after': {
				borderColor: COLORS.primary,
				borderWidth: '3px',
			},
		},
	};
};

const visitedStyles = (blender = false) => {
	const { COLORS } = useBrand();
	const styles = {
		default: {
			label: 'GEL-progressRope-step-visited',
			// the line
			'::before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				zIndex: 1,
				top: 0,
				bottom: 0,
				left: '2.25rem',
				borderLeft: `2px solid ${COLORS.primary}`,
				transform: 'translateY(0.625rem)',
			},
		},
		blender: {
			'.GEL-progressRope-step-btn': {
				color: COLORS.neutral,

				'&::after': {
					borderColor: COLORS.primary,
					borderWidth: '0.4375rem',
				},
			},
		},
	};

	if (blender) return { ...styles.default, ...styles.blender };

	return { ...styles.default };
};

const baseStyles = () => ({
	label: 'progressRope-step',
	position: 'relative',
	backgroundColor: '#fff',
});

const stepStyles = (_, { end, visited, grouped, furthest }) => {
	const { COLORS } = useBrand();

	return {
		...baseStyles(),
		// there is logic that is only tied to the react way which makes it difficult to separate out so have left as is
		marginTop: end && (grouped ? '0.375rem' : '0.125rem'),

		':last-of-type': {
			paddingBottom: grouped && !end && '1.875rem',
		},

		// visited line
		'::before': {
			content: '""',
			display: visited && !furthest && !end ? 'block' : 'none',
			position: 'absolute',
			zIndex: 1,
			borderLeft: visited && !furthest && `2px solid ${COLORS.primary}`,
			top: 0,
			bottom: 0,
			left: '2.25rem',
			transform: grouped && !end ? 'translateY(0.875rem)' : 'translateY(0.625rem)',
		},
	};
};

const blenderStyles = () => {
	return blenderReconciler(baseStyles(), [visitedStyles(true), activeStyles(), endStyles()]);
};

// ==============================
// Attributes
// ==============================

const stepAttributes = () => null;

const blenderAttributes = (_, { active, visited, end }) => ({
	className: classNames({
		'GEL-progressRope-step-active': active,
		'GEL-progressRope-step-visited': visited,
		'GEL-progressRope-step-end': end,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultStep = {
	component: Step,
	styles: stepStyles,
	attributes: stepAttributes,
};

export const blenderStep = {
	component: Step,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
