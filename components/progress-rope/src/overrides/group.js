/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Group = ({
	index,
	groupItemsId,
	text,
	current,
	complete,
	active,
	instanceIdPrefix,
	headingsTag,
	assistiveText,
	...rest
}) => <li {...rest} />;

export const groupStyles = () => ({});
