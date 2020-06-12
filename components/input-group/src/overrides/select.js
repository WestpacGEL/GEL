/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { Select as SelectInput } from '@westpac/text-input';

const Select = ({ state: { size, data }, ...rest }) => (
	<SelectInput size={size} data={data} {...rest} />
);

const selectStyles = (_, { position, size }) => ({
	label: getLabel('inputGroup-select', { position, size }),
	boxSizing: 'border-box',
	width: 'auto',
	marginLeft: position === 'after' && '-1px',
	marginRight: position === 'before' && '-1px',

	...(position === 'after' && {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	}),
	...(position === 'before' && {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	}),
});

const selectAttributes = (_, { instanceId }) => ({ id: instanceId });

export const defaultSelect = {
	component: Select,
	styles: selectStyles,
	attributes: selectAttributes,
};
