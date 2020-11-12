import { GEL } from '@westpac/core';
import React from 'react';

import { Well } from '@westpac/well';
import { blenderWell } from '../src/overrides/well';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/well'] = {
		Well: {
			component: blenderWell.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens} noPrefix>
			<Well>Text</Well>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/well'] = {
		Well: {
			component: blenderWell.component,
		},
	};

	return [
		{
			heading: 'Well component',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Well>Your well content</Well>
				</GEL>
			),
		},
		{
			heading: 'Nested wells',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Well>
						Your well content
						<Well>Your nested well content</Well>
					</Well>
				</GEL>
			),
		},
	];
}
