/** @jsx jsx */

import { jsx, asArray, useMediaQuery } from '@westpac/core';

const Item = ({ state, ...rest }) => <label {...rest} />;

export const itemStyles = (_, { block }) => {
	const mq = useMediaQuery();

	const blockArr = asArray(block);

	return mq({
		flex: blockArr.map(b => b !== null && (b ? 1 : null)),
	})[0];
};

const itemAttributes = (_, { buttonGroupItemId }) => ({ htmlFor: buttonGroupItemId }); //a11y: use explicit association

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
