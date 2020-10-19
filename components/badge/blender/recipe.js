import { GEL } from '@westpac/core';
import React from 'react';

import { Badge } from '@westpac/badge';
import { blenderBadge } from '../src/overrides/badge';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/badge'] = {
		Badge: {
			styles: blenderBadge.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens} noPrefix>
			<Badge value="Default" />
			<Badge look="primary" value="Primary" />
			<Badge look="hero" value="Hero" />
			<Badge look="neutral" value="Neutral" />
			<Badge look="faint" value="Faint" />
			<Badge look="success" value="Success" />
			<Badge look="info" value="Info" />
			<Badge look="warning" value="Warning" />
			<Badge look="danger" value="Danger" />
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/badge'] = {
		Badge: {
			attributes: blenderBadge.attributes,
		},
	};

	return [
		{
			heading: 'A default badge',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Badge value="Default" />
				</GEL>
			),
		},
		{
			heading: 'A primary badge',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Badge look="primary" value="Primary" />
				</GEL>
			),
		},
		{
			heading: 'A hero badge',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Badge look="hero" value="Hero" />
				</GEL>
			),
		},
		{
			heading: 'A neutral badge',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Badge look="neutral" value="Neutral" />
				</GEL>
			),
		},
		{
			heading: 'A faint badge',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Badge look="faint" value="Faint" />
				</GEL>
			),
		},
		{
			heading: 'A success badge',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Badge look="success" value="Success" />
				</GEL>
			),
		},
		{
			heading: 'An info badge',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Badge look="info" value="Info" />
				</GEL>
			),
		},
		{
			heading: 'A warning badge',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Badge look="warning" value="Warning" />
				</GEL>
			),
		},
		{
			heading: 'A danger badge',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Badge look="danger" value="Danger" />
				</GEL>
			),
		},
	];
}
