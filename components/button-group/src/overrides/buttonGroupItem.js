/** @jsx jsx */

import { jsx, asArray, useMediaQuery } from '@westpac/core';

export const ButtonGroupItem = ({
	name,
	value,
	onChange,
	data,
	checked,
	look,
	size,
	block,
	disabled,
	...rest
}) => <label {...rest} />;

export const buttonGroupItemStyles = (_, { block }) => {
	const mq = useMediaQuery();

	const blockArr = asArray(block);

	return mq({
		flex: blockArr.map(b => b !== null && (b ? 1 : null)),
	})[0];
};
