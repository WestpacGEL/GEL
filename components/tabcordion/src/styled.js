import React from 'react';
import { styled } from '@westpac/core';

const tabBg = '#f8f8f8';
const tabBorder = '#d3d4d5';

export const TabRow = styled.div({
	display: 'flex',
	whiteSpace: 'nowrap',
});

export const TabItem = styled.button(({ appearance, isJustified, isSelected, theme }) => {
	const common = {
		flex: isJustified ? 1 : 0,
		fontSize: 'inherit',
		marginRight: 2,
		outline: 0,
		padding: '14px 18px',
		textDecoration: 'none',
		transition: 'background .3s ease',
		width: '100%',

		'&:last-child': {
			marginRight: 0,
		},
	};
	const styles = {
		soft: {
			backgroundColor: isSelected ? '#fff' : tabBg,
			borderTopLeftRadius: 3,
			borderTopRightRadius: 3,
			border: `1px solid ${tabBorder}`,
			borderBottom: 0,
			color: '#333',
			cursor: 'pointer',
			marginBottom: isSelected ? -1 : null,
			paddingBottom: isSelected ? 15 : null,
		},
		lego: {
			backgroundColor: isSelected ? '#fff' : theme.colors.primary.default,
			border: `1px solid ${isSelected ? tabBorder : 'transparent'}`,
			borderBottom: 0,
			color: isSelected ? theme.colors.text : theme.colors.primary.offset,
			cursor: 'pointer',
			marginBottom: isSelected ? -1 : 2,
			paddingBottom: isSelected ? 17 : null,
		},
	};

	return Object.assign({}, common, styles[appearance]);
});

export const AccordionLabel = styled.button(({ appearance, isSelected, theme }) => {
	const common = {
		alignItems: 'center',
		backgroundColor: tabBg,
		border: 0,
		borderLeft: `1px solid ${tabBorder}`,
		borderRight: `1px solid ${tabBorder}`,
		boxShadow: '0 -1px 0 #ccc, 0 1px 0 #ccc',
		cursor: 'pointer',
		display: 'flex',
		fontSize: 'inherit',
		justifyContent: 'space-between',
		outline: 0,
		padding: '12px 18px',
		textAlign: 'left',
		width: '100%',
	};
	const styles = {
		soft: {
			'&:first-child': {
				borderTopLeftRadius: 3,
				borderTopRightRadius: 3,
			},
			'&:last-child': {
				borderBottomLeftRadius: 3,
				borderBottomRightRadius: 3,
			},
		},
		lego: {
			borderLeftWidth: 4,
			borderLeftColor: isSelected ? tabBorder : theme.colors.primary.default,
		},
	};

	return Object.assign({}, common, styles[appearance]);
});

export const Panel = styled.div({
	border: `1px solid ${tabBorder}`,
	padding: '24px 3.22%',
});
