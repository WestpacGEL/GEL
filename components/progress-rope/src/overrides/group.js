/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import classNames from 'classnames';
import { blenderReconciler } from './_utils';

// ==============================
// Component
// ==============================

const Group = ({ state, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const groupStyles = () => ({ label: 'progressRope-group' });

const blenderStyles = () => {
	const { COLORS, TYPE, PACKS } = useBrand();

	return blenderReconciler({
		label: 'progressRope-group',
		'&.GEL-progressRope-group-active, &.GEL-progressRope-group-visited': {
			'.GEL-progressRope-group-btn': {
				color: COLORS.neutral,

				// visited line
				'::before': {
					content: '""',
					display: 'block',
					position: 'absolute',
					zIndex: 1,
					borderLeft: `2px solid ${COLORS.primary}`,
					top: 0,
					left: '2.25rem',
					bottom: 0,
					height: 'auto',
					transform: 'translateY(0.875rem)',
				},
			},
		},

		'&.GEL-progressRope-group-active .GEL-progressRope-group-btn::after': {
			borderColor: COLORS.primary,
			borderWidth: '3px',
		},

		'&.GEL-progressRope-group-visited .GEL-progressRope-group-btn::after': {
			borderColor: COLORS.primary,
			borderWidth: '0.4375rem',
		},

		// need to figure out casing
		'.GEL-progressRope-step': {
			'::before': {
				transform: 'translateY(0.875rem)',
			},

			':last-of-type': {
				paddingBottom: '1.875rem',
			},

			'.GEL-progressRope-step-btn': {
				...TYPE.bodyFont[400], // need to double check this
				...PACKS.typeScale.bodyFont[10],

				'::after': {
					top: '0.875rem',
					width: '0.625rem',
					height: '0.625rem',
					left: '2rem',
				},
			},

			'&.GEL-progressRope-step-visited .GEL-progressRope-step-btn::after': {
				borderWidth: '0.3125rem',
			},
		},
	});
};

// ==============================
// Attributes
// ==============================

const groupAttributes = () => null;

const blenderAttributes = (_, { active, visited }) => ({
	className: classNames({
		'GEL-progressRope-group-active': active,
		'GEL-progressRope-group-visited': visited,
	}),
	'data-js': 'progressRope-group__version__',
});

// ==============================
// Exports
// ==============================

export const defaultGroup = {
	component: Group,
	styles: groupStyles,
	attributes: groupAttributes,
};

export const blenderGroup = {
	component: Group,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
