/** @jsx jsx */

import { jsx, classNames, getModifier, formatClassName } from '@westpac/core';
import { defaultProps } from '../blender/Group';

// ==============================
// Component
// ==============================

const GroupList = ({ state: _, ...rest }) => <ol {...rest} />;

const BlenderGroupList = ({ state: _, className, ...rest }) => (
	<ol className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const groupListStyles = () => ({
	label: 'progressRope-groupList',
	position: 'relative',
	listStyle: 'none',
	paddingLeft: 0,
	margin: 0,
});

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { open }) => {
	const props = { open };
	const baseStyles = groupListStyles(_, defaultProps);

	let modifiers = getModifier({ ...defaultProps, open: false }, props);
	if (!modifiers.length) return baseStyles;

	let label = baseStyles.label;
	const modifier = modifiers[0];

	let modifierStyles = {};

	switch (modifier) {
		case 'open':
			label = `${label}-show`;
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...modifierStyles };
};

// ==============================
// Attributes
// ==============================

const groupListAttributes = (_, { hidden, groupListId }) => ({
	id: groupListId,
	'aria-hidden': hidden,
});

const blenderAttributes = (_, { id, open }) => ({
	id,
	'aria-hidden': !open,
	className: classNames({ [`__convert__progress-rope-groupList-show`]: open }),
	// 'data-js': 'progressRope-groupList__version__',
	// ...(open && { 'data-open': '' }),
});

// ==============================
// Exports
// ==============================

export const defaultGroupList = {
	component: GroupList,
	styles: groupListStyles,
	attributes: groupListAttributes,
};

export const blenderGroupList = {
	component: BlenderGroupList,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
