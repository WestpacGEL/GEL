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
	const allLogos = Object.keys(components)
		.filter((logo) => logo.indexOf('Logo') >= 0)
		.map((logo, i) => {
			const Logo = components[logo];
			return {
				...(i === 0 && { heading: 'Logos' }),
				subheading: logo,
				component: () => (
					<GEL brand={brand} noPrefix>
						<Logo />
					</GEL>
				),
			};
		});

	const allSymbols = Object.keys(components)
		.filter((symbol) => symbol.indexOf('Symbol') >= 0)
		.map((symbol, i) => {
			const Symbol = components[symbol];
			return {
				...(i === 0 && { heading: 'Symbols' }),
				subheading: symbol,
				component: () => (
					<GEL brand={brand} noPrefix>
						<Symbol />
					</GEL>
				),
			};
		});

	return [...allLogos, ...allSymbols];
}
