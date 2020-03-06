/** @jsx jsx */

import { jsx } from '@westpac/core';

export const GroupButtonWrapper = ({
	index,
	groupListId,
	text,
	current,
	complete,
	active,
	hidden,
	instanceId,
	headingsTag: Tag,
	assistiveText,
	...rest
}) => <Tag {...rest} />;

export const groupButtonWrapperStyles = () => ({
	margin: 0,
	fontSize: 'inherit',
});
