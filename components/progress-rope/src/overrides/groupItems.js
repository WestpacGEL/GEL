/** @jsx jsx */

import { jsx } from '@westpac/core';

export const GroupItems = ({
	index,
	groupItemsId,
	text,
	current,
	complete,
	active,
	hidden,
	instanceIdPrefix,
	headingsTag,
	assistiveText,
	...rest
}) => <ol {...rest} />;

export const groupItemsStyles = (_, { hidden }) => ({
	position: 'relative',
	listStyle: 'none',
	paddingLeft: 0,
	margin: 0,
});
