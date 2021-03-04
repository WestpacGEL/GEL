/** @jsx jsx */

import { jsx, classNames } from '@westpac/core';
import { defaultProps } from '../blender/Group';

// ==============================
// Component
// ==============================

const GroupList = ({ state: _, ...rest }) => <ol {...rest} />;

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
// Attributes
// ==============================

const groupListAttributes = (_, { hidden, groupListId }) => ({
	id: groupListId,
	'aria-hidden': hidden,
});

const blenderAttributes = (_, { id, open }) => ({
	id,
	'aria-hidden': !open,
	className: classNames({ [`__convert__progressRope-groupList-show`]: open }),
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
	component: GroupList,
	styles: groupListStyles,
	attributes: blenderAttributes,
};
