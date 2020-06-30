/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Group = ({ state, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================
// have to target

const blenderStyles = () => {
	const { COLORS, TYPE, PACKS } = useBrand();

	return {
		'&.GEL-group-active': {
			'.GEL-group-button': {
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

				// group circle
				'::after': {
					borderColor: COLORS.primary,
					borderWidth: '3px',
				},
			},

			'.GEL-Step.GEL-step-visited': {
				'.GEL-step-button': {
					'::after': {
						borderWidth: '0.3125rem',
					},
				},
			},
		},

		// need to see if I can consolidate above better
		'&.GEL-group-visited': {
			'.GEL-group-button': {
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

				// group circle
				'::after': {
					borderColor: COLORS.primary,
					borderWidth: '0.4375rem',
				},
			},

			'.GEL-step-button': {
				'::after': {
					borderWidth: '0.3125rem',
				},
			},
		},

		// need to figure out casing
		'.GEL-Step': {
			'::before': {
				transform: 'translateY(0.875rem)',
			},

			':last-of-type': {
				paddingBottom: '1.875rem',
			},
		},

		'.GEL-step-button': {
			...TYPE.bodyFont[400], // need to double check this
			...PACKS.typeScale.bodyFont[10],

			'::after': {
				top: '0.875rem',
				width: '0.625rem',
				height: '0.625rem',
				left: '2rem',
			},
		},
	};
};

const groupStyles = () => ({});

// ==============================
// Attributes
// ==============================

const groupAttributes = () => null;

const blenderAttributes = () => ({ 'data-js': 'group__version__' });

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
