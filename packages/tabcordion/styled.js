import React from 'react';
import styled from '@emotion/styled';

export const TabRow = styled.div({
	borderBottom: '1px solid #ccc',
	display: 'flex',
	whiteSpace: 'nowrap',
});
export const TabItem = styled.button(({ isSelected }) => ({
	backgroundColor: 'white',
	border: 0,
	borderBottom: '1px solid',
	borderBottomColor: isSelected ? 'white' : '#ccc',
	borderRight: '1px solid #ccc',
	borderTop: isSelected ? '2px solid black' : '1px solid #ccc',
	boxShadow: isSelected ? null : 'inset 0 -2px 0 #f9f9f9',
	color: isSelected ? 'black' : '#333',
	cursor: 'pointer',
	flexShrink: 1,
	marginBottom: -1,
	overflow: 'hidden',
	padding: '8px 16px',
	textOverflow: 'ellipsis',

	'&:first-child': {
		borderLeft: '1px solid #ccc',
	},
}));
export const AccordionLabel = styled.button(({ isSelected }) => ({
	border: 0,
	boxShadow: '0 -1px 0 #ccc, 0 1px 0 #ccc',
	cursor: 'pointer',
	padding: '8px 16px',
	textAlign: 'left',
	width: '100%',
}));
export const Pane = styled.div({
	padding: '8px 16px',
});
