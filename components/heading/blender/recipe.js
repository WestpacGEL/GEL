import { GEL } from '@westpac/core';
import React from 'react';

import { Heading, BrandHeading } from '@westpac/heading';

import { blenderHeading } from '../src/overrides/heading';
import { blenderBrandHeading } from '../src/overrides/brandHeading';

const headingSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const brandHeadingSizes = [1, 2, 3, 4, 5, 6, 7];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/heading'] = {
		Heading: {
			styles: blenderHeading.styles,
		},
		BrandHeading: {
			styles: blenderBrandHeading.styles,
		},
	};
	return (
		<GEL brand={overridesWithTokens} noPrefix>
			{headingSizes.map((size) => (
				<Heading key={size} size={size}>
					Text
				</Heading>
			))}

			{brandHeadingSizes.map((size) => (
				<BrandHeading key={size} size={size}>
					Text
				</BrandHeading>
			))}
			<BrandHeading size={1} uppercase>
				Text
			</BrandHeading>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/heading'] = {
		Heading: {
			styles: blenderHeading.styles,
		},
		BrandHeading: {
			styles: blenderBrandHeading.styles,
			attributes: blenderBrandHeading.attributes,
		},
	};
	return [
		...headingSizes.map((size) => ({
			heading: `A heading - size:${size}`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Heading size={size}>Heading size {size}</Heading>
				</GEL>
			),
		})),
		...brandHeadingSizes.map((size) => ({
			heading: `A brand heading - size:${size}`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<BrandHeading size={size}>Brand heading size {size}</BrandHeading>
				</GEL>
			),
		})),
		{
			heading: `An uppercase brand heading`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<BrandHeading size={1} uppercase>
						Uppercase brand heading
					</BrandHeading>
				</GEL>
			),
		},
	];
}
