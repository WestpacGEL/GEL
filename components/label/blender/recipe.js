import { GEL, titleCase } from '@westpac/core';
import React from 'react';

import { Label } from '@westpac/label';
import { blenderLabel } from '../src/overrides/label';

const looks = ['primary', 'hero', 'neutral', 'faint', 'success', 'info', 'warning', 'danger'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/label'] = {
		Label: {
			component: blenderLabel.component,
			styles: blenderLabel.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
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
			component: blenderLabel.component,
			attributes: blenderLabel.attributes,
		},
	};

	return [
		{
			heading: 'Label looks',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Label value="Your default label text" />
				</GEL>
			),
		},
		...looks.map((look) => ({
			subheading: titleCase(look),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Label look={look} value={`Your ${look} label text`} />
				</GEL>
			),
		})),
	];
}
