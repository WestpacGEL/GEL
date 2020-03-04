/** @jsx jsx */

import { jsx } from '@westpac/core';

export const GroupItems = ({ state, ...rest }) => <ol {...rest} />;

export const groupItemsStyles = () => ({
	position: 'relative',
	listStyle: 'none',
	paddingLeft: 0,
	margin: 0,
});

export const defaultGroupItems = {
	component: GroupItems,
	styles: groupItemsStyles,
	attributes: () => null,
};
