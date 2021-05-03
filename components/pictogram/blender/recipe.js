import { GEL } from '@westpac/core';
import React from 'react';

import * as components from '@westpac/pictogram';
import { brands } from '../../../GEL.json';

const informative = Object.keys(components).filter(
	(component) => !Object.keys(brands).some((code) => component.startsWith(code))
);
const modes = ['dark', 'duo', 'light'];

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			{informative.map((pictogram) => {
				const Pictogram = components[pictogram];
				return <Pictogram key={pictogram} />;
			})}
		</GEL>
	);
}

export function Docs({ brand }) {
	const allInformative = informative.map((pictogram, i) => {
		const Informative = components[pictogram];
		return {
			...(i === 0 && { heading: 'Informative pictograms' }),
			subheading: pictogram,
			component: () => (
				<GEL brand={brand}>
					{modes.map((m) => (
						<Informative key={m} mode={m} />
					))}
				</GEL>
			),
		};
	});

	/* const allDecorative = Object.keys(components)
		.filter(
			(pictogram) =>
				pictogram.includes('BOM') ||
				pictogram.includes('BSA') ||
				pictogram.includes('BTFG') ||
				pictogram.includes('STG') ||
				pictogram.includes('WBC') ||
				pictogram.includes('WBG') ||
				pictogram.includes('RAMS')
		)
		.map((pictogram, i) => {
			const Decorative = components[pictogram];
			return {
				...(i === 0 && { heading: 'Decorative pictograms' }),
				subheading: pictogram,
				component: () => (
					<GEL brand={brand}>
						<Decorative />
					</GEL>
				),
			};
		}); */

	return allInformative;
}
