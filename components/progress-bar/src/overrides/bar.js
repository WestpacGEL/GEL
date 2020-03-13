/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Bar = ({ state, ...rest }) => <div {...rest} />;

const barStyles = (_, { look, value }) => {
	const { COLORS, TYPE } = useBrand();

	return {
		position: 'relative',
		float: 'left',
		width: `${value}%`,
		borderRadius: look === 'skinny' ? '0.625rem' : '1.5rem',
		border: value > 0 && '1px solid transparent', //for high contrast mode
		height: '100%',
		fontSize: '0.875rem',
		lineHeight: value > 0 ? '1.125rem' : '1.25rem',
		color: value === 0 ? COLORS.text : '#fff',
		textAlign: 'right',
		backgroundColor: COLORS.hero,
		zIndex: 2,
		boxSizing: 'border-box',
		transition: 'width .6s ease',
		...TYPE.bodyFont[700],

		'@media print': {
			backgroundColor: '#000 !important',
		},
	};
};

const barAttributes = () => null;

export const defaultBar = {
	component: Bar,
	styles: barStyles,
	attributes: barAttributes,
};
