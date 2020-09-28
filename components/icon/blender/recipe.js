import { GEL } from '@westpac/core';
import React from 'react';

import * as components from '@westpac/icon';
import { blenderIcon } from '../src/overrides/icon';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/icon'] = {
		Icon: {
			styles: blenderIcon.styles,
		},
	};
	return (
		<GEL brand={overridesWithTokens} noPrefix>
			<components.HouseIcon />
			<components.HouseIcon size="xsmall" />
			<components.HouseIcon size="small" />
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
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/icon'] = {
		Icon: {
			attributes: blenderIcon.attributes,
		},
	};

	const allIcons = Object.keys(components).map((icon) => {
		const Icon = components[icon];
		return {
			heading: `${icon} icon`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Icon />
				</GEL>
			),
		};
	});

	return [
		{
			heading: 'Default icon',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon />
				</GEL>
			),
		},
		{
			heading: 'Icon with assistive text',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon assistiveText="Text for assistive technologies" />
				</GEL>
			),
		},
		{
			heading: 'A xsmall icon',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon size="xsmall" />
				</GEL>
			),
		},
		{
			heading: 'A small icon',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon size="small" />
				</GEL>
			),
		},
		{
			heading: 'A medium icon',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon size="medium" />
				</GEL>
			),
		},
		{
			heading: 'A large icon',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon size="large" />
				</GEL>
			),
		},
		{
			heading: 'A xlarge icon',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
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
			'neutral',
			'primary',
			'text',
		].map((color, i) => ({
			heading: `An icon with the ${color} color`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon color={color} />
				</GEL>
			),
		})),
		...allIcons,
	];
}
