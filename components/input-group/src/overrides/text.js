/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Text = ({ state, ...rest }) => <span {...rest} />;

const textStyles = (_, { size, position }) => {
	const { COLORS } = useBrand();

	const sizeMap = {
		small: {
			fontSize: '0.875rem',
			padding: '0.1875rem 0.5625rem 0.25rem',
			height: '1.875rem',
		},
		medium: {
			fontSize: '1rem',
			padding: '0.3125rem 0.75rem',
			height: '2.25rem',
		},
		large: {
			fontSize: '1rem',
			padding: '0.5rem 0.9375rem',
			height: '2.625rem',
		},
		xlarge: {
			fontSize: '1.125rem',
			padding: '0.5625rem 1.125rem 0.625rem',
			height: '3rem',
		},
	};

	return {
		...sizeMap[size],
		lineHeight: 1.5,
		backgroundColor: COLORS.light,
		border: `1px solid ${COLORS.borderDark}`,
		borderRadius: '0.1875rem',
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		borderRight: position === 'left' && 0,

		...(position === 'right' && {
			borderTopRightRadius: '0.1875rem',
			borderBottomRightRadius: '0.1875rem',
			borderLeft: 0,
		}),
		...(!(position === 'left') && {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		}),
	};
};

const textAttributes = () => null;

export const defaultText = {
	component: Text,
	styles: textStyles,
	attributes: textAttributes,
};
