/** @jsx jsx */

import { jsx, asArray, useMediaQuery } from '@westpac/core';

const ButtonGroup = ({ state, ...rest }) => <div {...rest} />;

const buttonGroupStyles = (_, { block }) => {
	const mq = useMediaQuery();

	const blockArr = asArray(block);

	return mq({
		alignItems: 'center',
		display: blockArr.map(b => b !== null && (b ? 'flex' : 'inline-flex')),
		verticalAlign: 'middle',
	})[0];
};

const buttonGroupAttributes = () => null;

export const defaultButtonGroup = {
	component: ButtonGroup,
	styles: buttonGroupStyles,
	attributes: buttonGroupAttributes,
};
