/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Option = ({ state, ...rest }) => <div {...rest} />;

const optionStyles = (_, { size, inline }) => {
	const sizeMap = {
		medium: {
			marginRight: '1.125rem',
			marginBottom: '0.375rem',
			width: '1.5rem',
			height: '1.5rem',
		},
		large: {
			marginRight: '1.125rem',
			marginBottom: '0.75rem',
			width: '1.875rem',
			height: '1.875rem',
		},
	};

	return {
		label: getLabel('formCheck-option', { size, inline }),
		position: 'relative',
		display: inline ? 'inline-block' : 'block',
		verticalAlign: inline && 'top',
		marginRight: inline && sizeMap[size].marginRight,
		marginBottom: sizeMap[size].marginBottom,
		minHeight: sizeMap[size].height,
		paddingLeft: sizeMap[size].width,
	};
};

const optionAttributes = () => null;

export const defaultOption = {
	component: Option,
	styles: optionStyles,
	attributes: optionAttributes,
};
