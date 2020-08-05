/** @jsx jsx */

import { jsx, classNames, getModifier, styleReconciler } from '@westpac/core';
import { defaultProps } from '../blender/Group';
import { getStyles } from './_utils';

// sub-component style functions
import { groupButtonStyles } from './groupButton';
import { stepButtonStyles } from './stepButton';
import { stepStyles } from './step';

// ==============================
// Component
// ==============================

const Group = ({ state, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const GROUP_LABEL = 'progressRope-group';

const groupStyles = () => ({ label: GROUP_LABEL });

// ==============================
// Blender
// ==============================

const blenderStyles = (_, { active, visited }) => {
	const props = { active, visited };
	const base = baseStyles();

	const modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return base;

	const modifier = modifiers[0];
	const activeStyle = activeStyles();
	const visitedStyle = visitedStyles();

	return {
		label: `${base.label}-${modifier}`,
		...(active && { [`.GEL-${activeStyle.label}`]: activeStyle.styles }),
		...(visited && { [`.GEL-${visitedStyle.label}`]: visitedStyle.styles }),
	};
};

const baseStyles = () => {
	const step = getStyles(stepStyles, { grouped: true });
	const stepBtn = getStyles(stepButtonStyles, { grouped: true });
	const stepBtnVisited = getStyles(stepButtonStyles, { grouped: true, visited: true });

	const stepBtnReconciled = styleReconciler(stepBtn.styles, stepBtnVisited.styles);

	return {
		label: GROUP_LABEL,
		[`.GEL-${step.label}`]: {
			...step.styles,
			[`.GEL-${stepBtn.label}`]: stepBtn.styles,
		},
		[`.GEL-${step.label}-visited`]: {
			[`.GEL-${stepBtn.label}`]: {
				...stepBtnReconciled,
			},
		},
	};
};

const activeStyles = () => getStyles(groupButtonStyles, { active: true });
const visitedStyles = () => getStyles(groupButtonStyles, { complete: true, active: true });

// ==============================
// Attributes
// ==============================

const groupAttributes = () => null;

const blenderAttributes = (_, { active, visited }) => ({
	className: classNames({
		'GEL-progressRope-group': !active || !visited,
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
