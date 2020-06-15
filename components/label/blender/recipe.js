import { GEL } from '@westpac/core';
import React from 'react';

import { Label } from '@westpac/label';

const looks = ['primary', 'hero', 'neutral', 'faint', 'success', 'info', 'warning', 'danger'];

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			{looks.map((look) => (
				<Label key={look} look={look} value="Text" />
			))}
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		...looks.map((look) => ({
			heading: `${look === 'info' ? 'An' : 'A'} ${look} label`,
			component: () => (
				<GEL brand={brand}>
					<Label look={look} value={`Your ${look} label text`} />
				</GEL>
			),
		})),
	];
}
