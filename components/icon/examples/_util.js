/** @jsx jsx */
import React from 'react';
import { jsx, styled } from '@westpac/core';

export const RowPrimitive = styled.div({
	alignItems: 'end',
	display: 'grid',
	gridAutoFlow: 'column',
	gridGap: 8,
	justifyContent: 'start',
});
export const RowWrap = styled.div({
	marginTop: '1em',

	'&:first-of-type': {
		marginTop: 0,
	},
});
export const RowLabel = styled.h4({
	color: '#6B778C',
	fontSize: '0.85rem',
	fontWeight: 500,
	marginBottom: '0.5em',
	marginTop: 0,
	textTransform: 'uppercase',
});

export const Row = ({ children, label, ...props }) =>
	label ? (
		<RowWrap>
			<RowLabel>{label}</RowLabel>
			<RowPrimitive {...props}>{children}</RowPrimitive>
		</RowWrap>
	) : (
		<RowPrimitive {...props}>{children}</RowPrimitive>
	);

export const Grid = styled.div({
	display: 'grid',
	gridAutoFlow: 'row',
	gridAutoRows: 'minmax(80px,auto)',
	gridGap: 8,
	gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
});

export const Cell = styled.div({
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
});

export const Name = styled.div({
	color: '#6B778C',
	fontSize: 12,
	marginTop: 12,
});
