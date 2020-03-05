/** @jsx jsx */

import { jsx } from '@westpac/core';

export const GroupList = ({
	index,
	groupListId,
	text,
	current,
	active,
	complete,
	hidden,
	instanceIdPrefix,
	headingsTag,
	assistiveText,
	...rest
}) => <ol {...rest} />;

export const groupListStyles = (_, { hidden }) => ({
	position: 'relative',
	listStyle: 'none',
	paddingLeft: 0,
	margin: 0,
});
