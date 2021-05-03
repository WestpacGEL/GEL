import { GEL, titleCase } from '@westpac/core';
import React from 'react';

import * as components from '@westpac/icon';
import { blenderIcon } from '../src/overrides/icon';

const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
const colors = [
	'inherit',
	'primary',
	'hero',
	'neutral',
	'heading',
	'text',
	'muted',
	'border',
	'background',
	'light',
	'info',
	'success',
	'warning',
	'danger',
	'system',
];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/icon'] = {
		Icon: {
			component: blenderIcon.component,
			styles: blenderIcon.styles,
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
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
			component: blenderIcon.component,
			attributes: blenderIcon.attributes,
		},
	};

	const allIcons = Object.keys(components).map((icon, i) => {
		const Icon = components[icon];
		return {
			...(i === 0 && { heading: 'All icons' }),
			subheading: icon,
			component: () => (
				<GEL brand={overridesWithTokens}>
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
				<GEL brand={overridesWithTokens}>
					<components.HouseIcon />
				</GEL>
			),
		},
		...sizes.map((size) => ({
			subheading: titleCase(size),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<components.HouseIcon size={size} />
				</GEL>
			),
		})),

		// Assistive text
		{
			heading: 'Icon with custom assistive text',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<components.HouseIcon assistiveText="Text for assistive technologies" />
				</GEL>
			),
		},

		// Colors
		{
			heading: 'Icon colours',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<components.HouseIcon />
				</GEL>
			),
		},
		...colors.map((color) => ({
			subheading: titleCase(color),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<components.HouseIcon color={color} />
				</GEL>
			),
		})),
		{
			subheading: 'Custom colour',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<components.HouseIcon style={{ color: '#BADA55' }} />
				</GEL>
			),
		},

		// All icons
		...allIcons,
	];
}
