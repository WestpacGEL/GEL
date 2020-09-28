/** @jsx jsx */

import { jsx, asArray, useMediaQuery, getLabel } from '@westpac/core';

const ButtonGroup = ({ state: _, ...rest }) => <div {...rest} />;

const buttonGroupStyles = (_, { block }) => {
	const mq = useMediaQuery();

	const blockArr = asArray(block);

	return mq({
		label: getLabel('buttonGroup', { block }),
		alignItems: 'center',
		display: blockArr.map((b) => b !== null && (b ? 'flex' : 'inline-flex')),
		verticalAlign: 'middle',
	})[0];
};

const buttonGroupAttributes = () => ({
	'data-js': 'buttonGroup__version__',
});

export const defaultButtonGroup = {
	component: ButtonGroup,
	styles: buttonGroupStyles,
	attributes: buttonGroupAttributes,
};
