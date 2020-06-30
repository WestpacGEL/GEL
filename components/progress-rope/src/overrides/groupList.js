/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const GroupList = ({ state, ...rest }) => <ol {...rest} />;

// ==============================
// Styles
// ==============================

const groupListStyles = () => ({
	label: 'group-list',
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

const blenderGroupListAttributes = () => ({ 'data-js': 'group-list__version__' });
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
