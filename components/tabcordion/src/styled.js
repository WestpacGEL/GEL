/** @jsx jsx */

import React, { forwardRef } from 'react';
import { jsx, useTheme } from '@westpac/core';

export const TabRow = forwardRef((props, ref) => (
	<div
		ref={ref}
		css={{
			display: 'flex',
			whiteSpace: 'nowrap',
			position: 'relative',
		}}
		{...props}
	/>
));

export const TabItem = ({ appearance, isJustified, isLast, isSelected, ...props }) => {
	const theme = useTheme();
	const common = {
		flex: isJustified ? 1 : 0,
		fontSize: 'inherit',
		marginRight: 2,
		outline: 0,
		padding: '14px 18px',
		textAlign: 'left',
		textDecoration: 'none',
		transition: 'background .3s ease',
		width: '100%',

		'&:last-child': {
			marginRight: 0,
		},
	};
	const styles = {
		soft: {
			backgroundColor: isSelected ? '#fff' : theme.colors.background,
			borderTopLeftRadius: 3,
			borderTopRightRadius: 3,
			border: `1px solid ${theme.colors.border}`,
			borderBottom: 0,
			color: '#333',
			cursor: 'pointer',
			marginBottom: isSelected ? -1 : null,
			paddingBottom: isSelected ? 15 : null,
		},
		lego: {
			backgroundColor: isSelected ? '#fff' : theme.colors.hero.default,
			border: `1px solid ${isSelected ? theme.colors.border : 'transparent'}`,
			borderBottom: 0,
			color: isSelected ? theme.colors.text : theme.colors.hero.foreground,
			cursor: 'pointer',
			marginBottom: isSelected ? -1 : 2,
			paddingBottom: isSelected ? 17 : null,
		},
	};

	return <button css={{ ...common, ...styles[appearance] }} {...props} />;
};

export const AccordionLabel = ({ appearance, isLast, isSelected, ...props }) => {
	const theme = useTheme();
	const common = {
		alignItems: 'center',
		backgroundColor: theme.colors.background,
		border: 0,
		borderTop: `1px solid ${theme.colors.border}`,
		borderLeft: `1px solid ${theme.colors.border}`,
		borderRight: `1px solid ${theme.colors.border}`,
		cursor: 'pointer',
		display: 'flex',
		fontSize: 'inherit',
		justifyContent: 'space-between',
		outline: 0,
		padding: '12px 18px',
		position: 'relative',
		textAlign: 'left',
		width: '100%',
	};
	const lastStyles =
		isLast && !isSelected
			? {
					borderBottom: `1px solid ${theme.colors.border}`,
					borderBottomLeftRadius: 3,
					borderBottomRightRadius: 3,
			  }
			: {};
	const styles = {
		soft: {
			borderBottom: isSelected && `1px solid ${theme.colors.border}`,
			...lastStyles,

			'&:first-of-type': {
				borderTopLeftRadius: 3,
				borderTopRightRadius: 3,
			},
		},
		lego: {
			borderBottom: isSelected && `1px solid ${theme.colors.border}`,
			borderLeftWidth: 6,
			borderLeftColor: isSelected ? theme.colors.border : theme.colors.hero.default,

			'&:last-of-type': {
				borderBottom: `1px solid ${theme.colors.border}`,
			},
		},
	};

	return <button css={{ ...common, ...styles[appearance] }} {...props} />;
};

export const Panel = forwardRef(({ appearance, isLast, isSelected, mode, ...props }, ref) => {
	const theme = useTheme();
	const common = {
		borderLeft: `1px solid ${theme.colors.border}`,
		borderRight: `1px solid ${theme.colors.border}`,
		borderBottom: mode === 'tabs' || isLast ? `1px solid ${theme.colors.border}` : null,
		borderTop: mode === 'tabs' ? `1px solid ${theme.colors.border}` : null,
		padding: '24px 3.22%',

		'&:focus': {
			outline: '2px dotted #000',
			outlineOffset: '.5rem',
		},
	};
	const styles =
		mode === 'accordion'
			? {
					lego: {
						borderLeftWidth: 6,
						borderLeftColor: theme.colors.border,
					},
					soft: isLast
						? {
								borderBottomLeftRadius: 3,
								borderBottomRightRadius: 3,
						  }
						: {},
			  }
			: {};

	return <div ref={ref} css={{ ...common, ...styles[appearance] }} {...props} />;
});
