/** @jsx jsx */

import React, { forwardRef } from 'react';
import { jsx, useBrand } from '@westpac/core';

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

export const TabItem = ({ look, isJustified, isLast, isSelected, ...props }) => {
	const { COLORS: colors } = useBrand();
	const styles = {
		soft: {
			backgroundColor: isSelected ? '#fff' : colors.background,
			borderTopLeftRadius: 3,
			borderTopRightRadius: 3,
			border: `1px solid ${colors.border}`,
			borderBottom: 0,
			color: colors.neutral,
			marginBottom: isSelected ? '-0.0625rem' : null,
			paddingBottom: isSelected ? '0.9375rem' : null,
		},
		lego: {
			backgroundColor: isSelected ? '#fff' : colors.hero.default,
			border: `1px solid ${isSelected ? colors.border : 'transparent'}`,
			borderBottom: 0,
			color: isSelected ? colors.text : colors.hero.foreground,
			marginBottom: isSelected ? '-0.0625rem' : '0.125rem',
			paddingBottom: isSelected ? '1.0625rem' : null,
		},
	};

	return (
		<button
			css={{
				flex: isJustified ? 1 : 0,
				fontSize: '1rem',
				marginRight: '0.125rem',
				outline: 0,
				padding: '0.875rem 1.125rem',
				textAlign: 'left',
				textDecoration: 'none',
				transition: 'background .3s ease',
				width: '100%',
				cursor: 'pointer',

				'&:last-child': {
					marginRight: 0,
				},
				...styles[look],
			}}
			{...props}
		/>
	);
};

export const AccordionLabel = ({ look, isLast, isSelected, ...props }) => {
	const { COLORS: colors } = useBrand();
	const styles = {
		soft: {
			borderBottom: isSelected && `1px solid ${colors.border}`,
			...(isLast &&
				!isSelected && {
					borderBottom: `1px solid ${colors.border}`,
					borderBottomLeftRadius: 3,
					borderBottomRightRadius: 3,
				}),

			'&:first-of-type': {
				borderTopLeftRadius: 3,
				borderTopRightRadius: 3,
			},
		},
		lego: {
			borderBottom: isSelected && `1px solid ${colors.border}`,
			borderLeftWidth: 6,
			borderLeftColor: isSelected ? colors.border : colors.hero.default,

			'&:last-of-type': {
				borderBottom: `1px solid ${colors.border}`,
			},
		},
	};

	return (
		<button
			css={{
				alignItems: 'center',
				backgroundColor: colors.background,
				border: 0,
				borderTop: `1px solid ${colors.border}`,
				borderLeft: `1px solid ${colors.border}`,
				borderRight: `1px solid ${colors.border}`,
				cursor: 'pointer',
				display: 'flex',
				fontSize: '1rem',
				justifyContent: 'space-between',
				outline: 0,
				padding: '0.75rem 1.125rem',
				position: 'relative',
				textAlign: 'left',
				width: '100%',
				...styles[look],
			}}
			{...props}
		/>
	);
};

export const Panel = forwardRef(({ look, isLast, isSelected, mode, ...props }, ref) => {
	const { COLORS: colors, PACKS: packs } = useBrand();
	const styles =
		mode === 'accordion'
			? {
					lego: {
						borderLeftWidth: 6,
						borderLeftColor: colors.border,
					},
					soft: isLast
						? {
								borderBottomLeftRadius: 3,
								borderBottomRightRadius: 3,
						  }
						: {},
			  }
			: {};

	return (
		<div
			ref={ref}
			css={{
				borderLeft: `1px solid ${colors.border}`,
				borderRight: `1px solid ${colors.border}`,
				borderBottom: mode === 'tabs' || isLast ? `1px solid ${colors.border}` : null,
				borderTop: mode === 'tabs' ? `1px solid ${colors.border}` : null,
				padding: '1.5rem 3.22%',

				'&:focus': {
					color: packs.link.color,
				},
				...styles[look],
			}}
			{...props}
		/>
	);
});
