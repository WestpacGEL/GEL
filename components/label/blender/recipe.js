import { GEL } from '@westpac/core';
import React from 'react';

import { Label } from '@westpac/label';
import { blenderLabel } from '../src/overrides/label';

const looks = ['primary', 'hero', 'neutral', 'faint', 'success', 'info', 'warning', 'danger'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/label'] = {
		Label: {
			styles: blenderLabel.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens} noPrefix>
			{looks.map((look) => (
				<Label key={look} look={look} value="Text" />
			))}
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/label'] = {
		Label: {
			attributes: blenderLabel.attributes,
		},
	};

	return [
		...looks.map((look) => ({
			heading: `${look === 'info' ? 'An' : 'A'} ${look} label`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Label look={look} value={`Your ${look} label text`} />
				</GEL>
			),
		})),
	];
}
