/** @jsx jsx */

import { jsx, asArray, useMediaQuery } from '@westpac/core';
import React from 'react';

export const ButtonGroup = ({ block, ...rest }) => <div {...rest} />;

export const buttonGroupStyles = (_, { block }) => {
	const mq = useMediaQuery();

	const blockArr = asArray(block);

	return mq({
		alignItems: 'center',
		display: blockArr.map(b => b !== null && (b ? 'flex' : 'inline-flex')),
		verticalAlign: 'middle',

		'& > *': {
			flex: blockArr.map(b => b !== null && (b ? 1 : null)),
		},
		'& > *:not(:last-of-type)': {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
			borderRight: 0,
		},
		'& > *:not(:first-of-type)': {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
		},
	})[0];
};
