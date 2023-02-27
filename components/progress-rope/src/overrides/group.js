import { jsx, classNames, getModifier, styleReconciler } from '@westpac/core';
import { Group as MainGroup } from '../blender/Group';
const defaultProps = MainGroup?.defaultProps || {};
import { getStyles } from './_utils';

// sub-component style functions
import { groupButtonStyles } from './groupButton';
import { stepButtonStyles } from './stepButton';
import { stepStyles } from './step';

// ==============================
// Component
// ==============================

const Group = ({ state: _, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const GROUP_LABEL = 'progressRope-group';

const groupStyles = () => ({ label: GROUP_LABEL });

// ==============================
// Blender Styles
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
		...(active && { [`.__convert__${activeStyle.label}`]: activeStyle.styles }),
		...(visited && { [`.__convert__${visitedStyle.label}`]: visitedStyle.styles }),
	};
};

const baseStyles = () => {
	const step = getStyles(stepStyles, { grouped: true });
	const stepBtn = getStyles(stepButtonStyles, { grouped: true });
	const stepBtnVisited = getStyles(stepButtonStyles, { grouped: true, visited: true });
	const stepBtnActive = getStyles(stepButtonStyles, {
		grouped: true,
		visited: true,
		furthest: true,
		active: true,
	});
	const stepBtnReconciled = styleReconciler(stepBtn.styles, stepBtnVisited.styles);
	const stepBtnActiveReconciled = styleReconciler(stepBtn.styles, stepBtnActive.styles);
	return {
		label: GROUP_LABEL,
		[`.__convert__${step.label}`]: {
			...step.styles,
			[`.__convert__${stepBtn.label}`]: stepBtn.styles,
		},
		[`.__convert__${step.label}-visited`]: {
			[`.__convert__${stepBtn.label}`]: {
				...stepBtnReconciled,
			},
		},
		[`.__convert__${step.label}-active`]: {
			[`.__convert__${stepBtn.label}`]: {
				...stepBtnActiveReconciled,
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
		'__convert__progressRope-group': active || visited,
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
