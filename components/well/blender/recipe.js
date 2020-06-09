import { GEL } from '@westpac/core';
import React from 'react';

import { Well } from '@westpac/well';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Well>Text</Well>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A well',
			component: () => (
				<GEL brand={brand}>
					<Well>Text</Well>
				</GEL>
			),
		},
		{
			heading: "Nested well's",
			component: () => (
				<GEL brand={brand}>
					<Well>
						Text<Well>Nested</Well>
					</Well>
				</GEL>
			),
		},
	];
}
