import { jsx, useBrand } from '@westpac/core';
import { Cell, Grid } from '../src';

export const Box = (props) => {
	const { COLORS } = useBrand();

	return (
		<div
			css={{
				display: 'grid',
				alignItems: 'center',
				textAlign: 'center',
				color: COLORS.hero,
				minHeight: 60,
			}}
			{...props}
		/>
	);
};

export const Wrapper = (props) => (
	<div
		{...props}
		css={{
			'& div[class$="cell"]': {
				backgroundColor: 'rgba(86,61,124,.15)',
				border: '1px solid rgba(86,61,124,.2)',
			},
		}}
	/>
);
