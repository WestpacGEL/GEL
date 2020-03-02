/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Group = ({
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
}) => <li {...rest} />;

export const groupStyles = () => ({});
