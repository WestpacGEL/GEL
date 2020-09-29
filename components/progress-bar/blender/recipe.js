import { GEL } from '@westpac/core';
import React from 'react';

import { ProgressBar } from '@westpac/progress-bar';
import { blenderProgressBar } from '../src/overrides/progressBar';
import { blenderBar } from '../src/overrides/bar';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/progress-bar'] = {
		ProgressBar: {
			styles: blenderProgressBar.styles,
		},
		Bar: {
			styles: blenderBar.styles,
		},
	};
	return (
		<GEL brand={overridesWithTokens} noPrefix>
			<ProgressBar value={0} />
			<ProgressBar value={0} look="skinny" />
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/progress-bar'] = {
		ProgressBar: {
			attributes: blenderProgressBar.attributes,
		},
	};
	return [
		{
			heading: 'A default progress bar',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<ProgressBar value={20} />
				</GEL>
			),
		},
		{
			heading: 'A skinny progress bar',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<ProgressBar value={20} look="skinny" />
				</GEL>
			),
		},
	];
}
