/** @jsx jsx */

import { jsx, asArray, useMediaQuery } from '@westpac/core';

export const ButtonGroup = ({
	block,
	data,
	defaultValue,
	look,
	name,
	disabled,
	value: controlledValue,
	size,
	onChange,
	...rest
}) => <div {...rest} />;

export const buttonGroupStyles = (_, { block }) => {
	const mq = useMediaQuery();

	const blockArr = asArray(block);

	return mq({
		alignItems: 'center',
		display: blockArr.map(b => b !== null && (b ? 'flex' : 'inline-flex')),
		verticalAlign: 'middle',
	})[0];
};
