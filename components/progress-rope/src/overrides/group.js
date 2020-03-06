/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Group = ({
	index,
	groupListId,
	text,
	current,
	complete,
	active,
	hidden,
	instanceId,
	headingsTag,
	assistiveText,
	...rest
}) => <li {...rest} />;

export const groupStyles = () => ({});
