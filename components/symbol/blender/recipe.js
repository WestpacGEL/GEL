import { GEL } from '@westpac/core';
import React from 'react';

import * as components from '@westpac/symbol';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<components.WBCLogo />
			<components.WBCLogo assistiveText="text" />
			<components.WBCLogo width={100} />
			<components.WBCLogo height={100} />
			<components.WBCLogo width={100} height={100} />
		</GEL>
	);
}

export function Docs({ brand }) {
	const allIcons = Object.keys(components).map((symbol) => {
		const Symbol = components[symbol];
		return {
			heading: `${symbol} symbol`,
			component: () => (
				<GEL brand={brand}>
					<Symbol />
				</GEL>
			),
		};
	});

	return [
		{
			heading: 'Default symbol',
			component: () => (
				<GEL brand={brand}>
					<components.WBCLogo />
				</GEL>
			),
		},
		{
			heading: 'Symbol with assistive text',
			component: () => (
				<GEL brand={brand}>
					<components.WBCLogo assistiveText="Text for assistive technologies" />
				</GEL>
			),
		},
		{
			heading: 'A symbol with width 100',
			component: () => (
				<GEL brand={brand}>
					<components.WBCLogo width={100} />
				</GEL>
			),
		},
		{
			heading: 'A symbol with height 100',
			component: () => (
				<GEL brand={brand}>
					<components.WBCLogo width={100} />
				</GEL>
			),
		},
		{
			heading: 'A symbol with width and height of 100',
			component: () => (
				<GEL brand={brand}>
					<components.WBCLogo width={100} height={100} />
				</GEL>
			),
		},
		...allIcons,
	];
}
