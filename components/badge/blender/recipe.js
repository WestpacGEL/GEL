import { GEL, titleCase } from '@westpac/core';
import React from 'react';

import { Badge } from '@westpac/badge';
import { blenderBadge } from '../src/overrides/badge';

const looks = ['primary', 'hero', 'faint', 'info', 'success', 'warning', 'danger'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/badge'] = {
		Badge: {
			component: blenderBadge.component,
			styles: blenderBadge.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
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
			component: blenderBadge.component,
			attributes: blenderBadge.attributes,
		},
	};

	return [
		{
			heading: 'Badge looks',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Badge value="Default" />
				</GEL>
			),
		},
		...looks.map((look) => ({
			subheading: titleCase(look),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Badge look={look} value={titleCase(look)} />
				</GEL>
			),
		})),
	];
}
