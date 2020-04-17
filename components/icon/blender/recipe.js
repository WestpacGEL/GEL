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
			<components.HouseIcon color={COLORS.primary.toLowerCase()} />
			<components.HouseIcon color={COLORS.borderDark.toLowerCase()} />
			<components.HouseIcon color={COLORS.heading.toLowerCase()} />
			<components.HouseIcon color={COLORS.hero.toLowerCase()} />
			<components.HouseIcon color={COLORS.light.toLowerCase()} />
			<components.HouseIcon color={COLORS.muted.toLowerCase()} />
			<components.HouseIcon color={COLORS.neutral.toLowerCase()} />
			<components.HouseIcon color={COLORS.primary.toLowerCase()} />
			<components.HouseIcon color={COLORS.text.toLowerCase()} />
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
			heading: 'A small xsmall',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon size="xsmall" />
				</GEL>
			),
		},
		{
			heading: 'A small small',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon size="small" />
				</GEL>
			),
		},
		{
			heading: 'A small medium',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon size="medium" />
				</GEL>
			),
		},
		{
			heading: 'A small large',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon size="large" />
				</GEL>
			),
		},
		{
			heading: 'A small xlarge',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon size="xlarge" />
				</GEL>
			),
		},
		{
			heading: 'An icon with the primary color',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon color={COLORS.primary.toLowerCase()} />
				</GEL>
			),
		},
		{
			heading: 'An icon with the borderDark color',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon color={COLORS.borderDark.toLowerCase()} />
				</GEL>
			),
		},
		{
			heading: 'An icon with the heading color',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon color={COLORS.heading.toLowerCase()} />
				</GEL>
			),
		},
		{
			heading: 'An icon with the hero color',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon color={COLORS.hero.toLowerCase()} />
				</GEL>
			),
		},
		{
			heading: 'An icon with the light color',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon color={COLORS.light.toLowerCase()} />
				</GEL>
			),
		},
		{
			heading: 'An icon with the muted color',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon color={COLORS.muted.toLowerCase()} />
				</GEL>
			),
		},
		{
			heading: 'An icon with the neutral color',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon color={COLORS.neutral.toLowerCase()} />
				</GEL>
			),
		},
		{
			heading: 'An icon with the primary color',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon color={COLORS.primary.toLowerCase()} />
				</GEL>
			),
		},
		{
			heading: 'An icon with the text color',
			component: () => (
				<GEL brand={brand}>
					<components.HouseIcon color={COLORS.text.toLowerCase()} />
				</GEL>
			),
		},
		...allIcons,
	];
}
