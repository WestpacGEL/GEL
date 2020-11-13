import { GEL } from '@westpac/core';
import React from 'react';

import * as components from '@westpac/pictogram';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand} noScope>
			{Object.keys(components)
				.filter(
					(pictogram) =>
						!pictogram.includes('BOM') &&
						!pictogram.includes('BSA') &&
						!pictogram.includes('BTFG') &&
						!pictogram.includes('STG') &&
						!pictogram.includes('WBC') &&
						!pictogram.includes('WBG')
				)
				.map((pictogram) => {
					const Pictogram = components[pictogram];
					return <Pictogram key={pictogram} />;
				})}
		</GEL>
	);
}

export function Docs({ brand }) {
	const allInformative = Object.keys(components)
		.filter(
			(pictogram) =>
				!pictogram.includes('BOM') &&
				!pictogram.includes('BSA') &&
				!pictogram.includes('BTFG') &&
				!pictogram.includes('STG') &&
				!pictogram.includes('WBC') &&
				!pictogram.includes('WBG')
		)
		.map((pictogram, i) => {
			const Informative = components[pictogram];
			return {
				...(i === 0 && { heading: 'Informative pictograms' }),
				subheading: pictogram,
				component: () => (
					<GEL brand={brand} noScope>
						<Informative />
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
				pictogram.includes('WBG')
		)
		.map((pictogram, i) => {
			const Decorative = components[pictogram];
			return {
				...(i === 0 && { heading: 'Decorative pictograms' }),
				subheading: pictogram,
				component: () => (
					<GEL brand={brand} noScope>
						<Decorative />
					</GEL>
				),
			};
		}); */

	return allInformative;
}
