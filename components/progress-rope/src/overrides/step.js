import { jsx, useBrand, classNames, getModifier } from '@westpac/core';
import { stepButtonStyles } from './stepButton';
import { Step as MainStep } from '../blender/Step';
const defaultProps = MainStep?.defaultProps || {};
import { getStyles } from './_utils';

// ==============================
// Component
// ==============================

const Step = ({ state: _, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const STEP_LABEL = 'progressRope-step';

export const stepStyles = (_, { end, visited, grouped, furthest }) => {
	const { COLORS } = useBrand();

	return {
		label: STEP_LABEL,
		position: 'relative',
		backgroundColor: COLORS.white,

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

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { active, visited, end }) => {
	const { COLORS } = useBrand();
	const props = { active, visited, end };
	const baseStyles = {
		label: STEP_LABEL,
		position: 'relative',
		backgroundColor: COLORS.white,
	};

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifier = modifiers[0];

	const activeStyles = getStyles(stepButtonStyles, { active: true, visited: true, furthest: true });
	const visitedStyles = getStyles(stepButtonStyles, { visited: true });
	const endStyles = getStyles(stepButtonStyles, { end: true });

	const styleMap = {
		active: {
			[`button.__convert__${activeStyles.label}`]: {
				...activeStyles.styles,
			},
		},
		visited: {
			// the visited line, copied from above
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
			[`button.__convert__${visitedStyles.label}`]: visitedStyles.styles, // raising specifity here due to GEL prefixing bug
		},
		end: {
			...endStyles.styles,
		},
	};
	return { label: `${baseStyles.label}-${modifier}`, ...styleMap[modifier] };
};

// ==============================
// Attributes
// ==============================

const stepAttributes = () => null;

const blenderAttributes = (_, { active, visited, end }) => ({
	className: classNames({
		'__convert__progressRope-step': active || visited || end,
		'__convert__progressRope-step-visited': active && visited,
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
