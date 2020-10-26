import { GEL } from '@westpac/core';
import React from 'react';

import * as components from '@westpac/symbol';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand} noPrefix>
			{Object.keys(components).map((symbol) => {
				const Symbol = components[symbol];
				return <Symbol key={symbol} />;
			})}
		</GEL>
	);
}

export function Docs({ brand }) {
	const allSymbols = Object.keys(components).map((symbol) => {
		const Symbol = components[symbol];
		return {
			heading: `${symbol} symbol`,
			component: () => (
				<GEL brand={brand} noPrefix>
					<Symbol />
				</GEL>
			),
		};
	});

	return [...allSymbols];
}
