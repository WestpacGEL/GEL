/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { blenderReconciler } from './_utils';

// ==============================
// Component
// ==============================

const Step = ({ state, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================
// Blender specific styles
// - visited, end and active are only for the blender
// - need to figure out way to include it in react logic
// ==============================
const endStyles = () => {
	return {
		label: 'GEL-step-end',
		marginTop: '0.125rem',
	};
};

const activeStyles = () => {
	const { COLORS, TYPE } = useBrand();
	return {
		label: 'GEL-step-active',
		'.GEL-step-button': {
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
			label: 'GEL-step-visited',
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
			'.GEL-step-button': {
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

const baseStyles = () => {
	return {
		position: 'relative',
		backgroundColor: '#fff',
	};
};

const blenderStyles = () => {
	return blenderReconciler(baseStyles(), [visitedStyles(true), activeStyles(), endStyles()]);
};

const stepStyles = (_, { end, visited, grouped, furthest }) => {
	const { COLORS } = useBrand();

	return {
		...baseStyles(),

		// not sure of the best way to do below is
		// there is logic that is only tied to the react way which makes it difficult to separate out

		marginTop: end && (grouped ? '0.375rem' : '0.125rem'),
		backgroundColor: '#fff',

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

// ==============================
// Attributes
// ==============================

const stepAttributes = () => null;

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
	attributes: stepAttributes,
};
