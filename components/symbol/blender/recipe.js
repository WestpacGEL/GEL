import { GEL } from '@westpac/core';
import React from 'react';
import * as components from '@westpac/symbol';

import { Symbol } from '../src/Symbol';
import { blenderSymbol } from '../src/overrides/symbol';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/symbol'] = {
		Symbol: {
			component: blenderSymbol.component,
			styles: blenderSymbol.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			{/* Generate a base style */}
			<Symbol />

			{Object.keys(components).map((symbol) => {
				const Symbol = components[symbol];
				return <Symbol key={symbol} />;
			})}
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/symbol'] = {
		Symbol: {
			component: blenderSymbol.component,
			attributes: blenderSymbol.attributes,
		},
	};

	const allLogos = Object.keys(components)
		.filter((logo) => logo.indexOf('Logo') >= 0)
		.map((logo, i) => {
			const Logo = components[logo];
			return {
				...(i === 0 && { heading: 'Logos' }),
				subheading: logo,
				component: () => (
					<GEL brand={overridesWithTokens}>
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
					<GEL brand={overridesWithTokens}>
						<Symbol />
					</GEL>
				),
			};
		});

	return [...allLogos, ...allSymbols];
}
