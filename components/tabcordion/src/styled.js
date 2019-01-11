import React from 'react';
import { styled } from '@westpac/core';

const borderColor = '#ddd';

export const TabRow = styled.div({
	borderBottom: `1px solid ${borderColor}`,
	display: 'flex',
	whiteSpace: 'nowrap',
});
export const TabItem = styled.button(({ isSelected }) => ({
	backgroundColor: 'white',
	border: 0,
	borderBottom: '1px solid',
	borderBottomColor: isSelected ? 'white' : borderColor,
	borderRight: `1px solid ${borderColor}`,
	borderTop: `1px solid ${borderColor}`,
	boxShadow: isSelected ? null : 'inset 0 -2px 0 #f9f9f9',
	color: isSelected ? 'black' : '#333',
	cursor: 'pointer',
	flexShrink: 1,
	marginBottom: -1,
	outline: 0,
	overflow: 'hidden',
	padding: '8px 16px',
	position: 'relative',
	textOverflow: 'ellipsis',

	'&::before': isSelected
		? {
				backgroundColor: '#2684FF',
				content: '" "',
				height: 2,
				left: 1,
				position: 'absolute',
				right: 1,
				top: 1,
		  }
		: null,

	'&:first-of-type': {
		borderLeft: `1px solid ${borderColor}`,
	},
}));
export const AccordionLabel = styled.button(({ isSelected }) => ({
	alignItems: 'center',
	border: 0,
	boxShadow: '0 -1px 0 #ccc, 0 1px 0 #ccc',
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'space-between',
	padding: '8px 16px',
	textAlign: 'left',
	width: '100%',
}));
export const Panel = styled.div({
	padding: '8px 16px',
});
