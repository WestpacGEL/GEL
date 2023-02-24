import { jsx, classNames } from '@westpac/core';
import { Group as MainGroup } from '../blender/Group';
const defaultProps = MainGroup?.defaultProps || {};

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
	role: 'list',
	id: groupListId,
	'aria-hidden': hidden,
});

const blenderAttributes = (_, { open, groupListId }) => ({
	role: 'list',
	id: groupListId,
	'aria-hidden': !open,
	className: classNames({ [`__convert__progressRope-groupList-show`]: open }),
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
