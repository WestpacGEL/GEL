import { GEL } from '@westpac/core';
import React from 'react';

import { ProgressBar } from '@westpac/progress-bar';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<ProgressBar value={0} />
			<ProgressBar value={20} />
			<ProgressBar value={100} />

			<ProgressBar value={0} look="skinny" />
			<ProgressBar value={20} look="skinny" />
			<ProgressBar value={100} look="skinny" />
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A default progress bar',
			component: () => (
				<GEL brand={brand}>
					<ProgressBar value={20} />
				</GEL>
			),
		},
		{
			heading: 'A skinny progress bar',
			component: () => (
				<GEL brand={brand}>
					<ProgressBar value={20} look="skinny" />
				</GEL>
			),
		},
	];
}
