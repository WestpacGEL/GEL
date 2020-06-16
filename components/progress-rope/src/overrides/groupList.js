/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const GroupList = ({ state, ...rest }) => <ol {...rest} />;

const groupListStyles = () => ({
	label: getLabel('progressRope-groupList'),
	position: 'relative',
	listStyle: 'none',
	paddingLeft: 0,
	margin: 0,
});

const groupListAttributes = (_, { hidden, groupListId }) => ({
	'aria-hidden': hidden,
	id: groupListId,
});

export const defaultGroupList = {
	component: GroupList,
	styles: groupListStyles,
	attributes: groupListAttributes,
};
