/** @jsx jsx */

import { jsx } from '@westpac/core';

export const GroupButtonWrapper = ({
	index,
	groupItemsId,
	text,
	current,
	complete,
	active,
	hidden,
	instanceIdPrefix,
	headingsTag: Tag,
	assistiveText,
	...rest
}) => <Tag {...rest} />;

export const groupButtonWrapperStyles = () => ({
	margin: 0,
	fontSize: 'inherit',
});
