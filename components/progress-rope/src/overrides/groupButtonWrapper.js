/** @jsx jsx */

import { jsx } from '@westpac/core';

const GroupButtonWrapper = ({
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

const groupButtonWrapperStyles = () => ({
	margin: 0,
	fontSize: 'inherit',
});

const groupButtonWrapperAttributes = () => null;

export const defaultGroupButtonWrapper = {
	component: GroupButtonWrapper,
	styles: groupButtonWrapperStyles,
	attributes: groupButtonWrapperAttributes,
};
