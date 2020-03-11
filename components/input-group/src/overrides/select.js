/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Select as SelectInput } from '@westpac/text-input';

const Select = ({ state: { size, data }, ...rest }) => (
	<SelectInput size={size} data={data} {...rest} />
);

const selectStyles = (_, { position }) => ({
	boxSizing: 'border-box',
	width: 'auto',
	marginLeft: position === 'right' && '-1px',
	marginRight: position === 'left' && '-1px',

	...(position === 'right' && {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	}),
	...(position === 'left' && {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	}),
});

const selectAttributes = () => null;

export const defaultSelect = {
	component: Select,
	styles: selectStyles,
	attributes: selectAttributes,
};
