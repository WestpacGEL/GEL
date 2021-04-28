import { GEL, Global, useFonts } from '@westpac/core';
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
			component: blenderHeading.component,
		},
		BrandHeading: {
			styles: blenderBrandHeading.styles,
			component: blenderBrandHeading.component,
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
			{/* <Global css={{ ...useFonts({ path: 'assets/' }) }} /> */}
			{/* Heading */}
			{headingSizes.map((size) => (
				<Heading key={size} size={size}>
					Text
				</Heading>
			))}
			<Heading size={1} uppercase>
				Text
			</Heading>

			{/* Brand heading */}
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
			attributes: blenderHeading.attributes,
			component: blenderHeading.component,
		},
		BrandHeading: {
			styles: blenderBrandHeading.styles,
			attributes: blenderBrandHeading.attributes,
			component: blenderBrandHeading.component,
		},
	};
	return [
		// Heading
		{
			heading: 'Heading',
			component: () => (
				<GEL brand={overridesWithTokens}>
					{headingSizes.map((size) => (
						<Heading key={size} size={size}>
							Heading size {size}
						</Heading>
					))}
				</GEL>
			),
		},
		{
			heading: 'Heading uppercase',
			component: () => (
				<GEL brand={overridesWithTokens}>
					{headingSizes.map((size) => (
						<Heading key={size} size={size} uppercase>
							Heading size {size}
						</Heading>
					))}
				</GEL>
			),
		},

		// Brand heading
		{
			heading: 'Brand heading',
			component: () => (
				<GEL brand={overridesWithTokens}>
					{brandHeadingSizes.map((size) => (
						<BrandHeading key={size} size={size}>
							BrandHeading size {size}
						</BrandHeading>
					))}
				</GEL>
			),
		},
		{
			heading: 'Brand heading uppercase',
			component: () => (
				<GEL brand={overridesWithTokens}>
					{brandHeadingSizes.map((size) => (
						<BrandHeading key={size} size={size} uppercase>
							BrandHeading size {size}
						</BrandHeading>
					))}
				</GEL>
			),
		},
	];
}
