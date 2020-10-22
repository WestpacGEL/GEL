import { GEL, titleCase } from '@westpac/core';
import React from 'react';

import * as components from '@westpac/icon';
import { blenderIcon } from '../src/overrides/icon';

const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
const colors = [
	'inherit',
	'primary',
	'borderDark',
	'heading',
	'hero',
	'light',
	'neutral',
	'primary',
	'text',
];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/icon'] = {
		Icon: {
			styles: blenderIcon.styles,
		},
	};
	return (
		<GEL brand={overridesWithTokens} noPrefix>
			{/* Default */}
			<components.HouseIcon />

			{/* Sizes */}
			{sizes.map((size) => (
				<components.HouseIcon key={size} size={size} />
			))}

			{/* Colors */}
			{colors.map((color) => (
				<components.HouseIcon key={color} color={color} />
			))}
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

	const allIcons = Object.keys(components).map((icon, i) => {
		const Icon = components[icon];
		return {
			...(i === 0 && { heading: 'All icons' }),
			subheading: icon,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Icon />
				</GEL>
			),
		};
	});

	return [
		// Sizes
		{
			heading: 'Icon sizes',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon />
				</GEL>
			),
		},
		...sizes.map((size) => ({
			subheading: titleCase(size),
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon size={size} />
				</GEL>
			),
		})),

		// Assistive text
		{
			heading: 'Icon with custom assistive text',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon assistiveText="Text for assistive technologies" />
				</GEL>
			),
		},

		// Colors
		{
			heading: 'Icon colours',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon />
				</GEL>
			),
		},
		...colors.map((color, i) => ({
			subheading: titleCase(color),
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<components.HouseIcon color={color} />
				</GEL>
			),
		})),

		// All icons
		...allIcons,
	];
}
