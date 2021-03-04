/** @jsx jsx */

import { jsx } from '@westpac/core';

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
	'aria-hidden': hidden,
	id: groupListId,
});

const blenderGroupListAttributes = (_, { id, open }) => ({
	id,
	'aria-hidden': !open,
	'data-js': 'progressRope-group-list__version__',
	...(open && { 'data-open': '' }),
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
	attributes: blenderGroupListAttributes,
};
