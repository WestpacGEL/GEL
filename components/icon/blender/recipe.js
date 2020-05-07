import { GEL } from '@westpac/core';
import React from 'react';

import * as components from '@westpac/icon';

export function AllStyles({ brand }) {
	const { COLORS } = brand;

	return (
		<GEL brand={brand}>
			<components.HouseIcon />
			<components.HouseIcon assistiveText="text" />
			<components.HouseIcon size="xsmall" />
			<components.HouseIcon size="small" />
			<components.HouseIcon size="medium" />
			<components.HouseIcon size="large" />
			<components.HouseIcon size="xlarge" />
			<components.HouseIcon color="inherit" />
			<components.HouseIcon color="primary" />
			<components.HouseIcon color="borderDark" />
			<components.HouseIcon color="heading" />
			<components.HouseIcon color="hero" />
			<components.HouseIcon color="light" />
			<components.HouseIcon color="muted" />
			<components.HouseIcon color="neutral" />
			<components.HouseIcon color="primary" />
			<components.HouseIcon color="text" />
		</GEL>
	);
}

export function Docs({ brand }) {
	const { COLORS } = brand;

	const allIcons = Object.keys(components).map(icon => {
		const Icon = components[icon];
		return {
			heading: `${icon} icon`,
			component: () => (
				<GEL brand={brand}>
					<Icon />
				</GEL>
			),
		};
	});

	return [
		{
			heading: 'Default icon',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon />
				</GEL>
			),
		},
		{
			heading: 'Icon with assistive text',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon assistiveText="Text for assistive technologies" />
				</GEL>
			),
		},
		{
			heading: 'A xsmall icon',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon size="xsmall" />
				</GEL>
			),
		},
		{
			heading: 'A small icon',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon size="small" />
				</GEL>
			),
		},
		{
			heading: 'A medium icon',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon size="medium" />
				</GEL>
			),
		},
		{
			heading: 'A large icon',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon size="large" />
				</GEL>
			),
		},
		{
			heading: 'A xlarge icon',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon size="xlarge" />
				</GEL>
			),
		},
		...[
			'inherit',
			'primary',
			'borderDark',
			'heading',
			'hero',
			'light',
			'muted',
			'neutral',
			'primary',
			'text',
		].map((color, i) => ({
			heading: `An icon with the ${color} color`,
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon color={color} />
				</GEL>
			),
		})),
		...allIcons,
	];
}
