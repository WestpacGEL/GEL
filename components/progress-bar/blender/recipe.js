import { GEL } from '@westpac/core';
import React from 'react';

import { ProgressBar } from '@westpac/progress-bar';
import { blenderProgressBar } from '../src/overrides/progressBar';
import { blenderBar } from '../src/overrides/bar';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/progress-bar'] = {
		ProgressBar: {
			component: blenderProgressBar.component,
			styles: blenderProgressBar.styles,
		},
		Bar: {
			styles: blenderBar.styles,
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
			<ProgressBar value={0} />
			<ProgressBar value={0} look="skinny" />
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/progress-bar'] = {
		ProgressBar: {
			component: blenderProgressBar.component,
			attributes: blenderProgressBar.attributes,
		},
	};
	return [
		// Default
		{
			heading: 'Default progress bar',
			subheading: '0% complete',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ProgressBar value={0} />
				</GEL>
			),
		},
		{
			subheading: '20% complete',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ProgressBar value={20} />
				</GEL>
			),
		},
		{
			subheading: '100% complete',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ProgressBar value={100} />
				</GEL>
			),
		},

		// Skinny
		{
			heading: 'Skinny progress bar',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ProgressBar value={20} look="skinny" />
				</GEL>
			),
		},
	];
}
