/** @jsx jsx */

import { jsx } from '@westpac/core';

const GroupList = ({ state, ...rest }) => <ol {...rest} />;

const groupListStyles = () => ({
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
