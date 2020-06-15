import { GEL } from '@westpac/core';
import React from 'react';

import { Heading, BrandHeading } from '@westpac/heading';

const headingSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const brandHeadingSizes = [1, 2, 3, 4, 5, 6, 7];

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
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
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		...headingSizes.map((size) => ({
			heading: `A heading - size:${size}`,
			component: () => (
				<GEL brand={brand}>
					<Heading size={size}>Heading size {size}</Heading>
				</GEL>
			),
		})),
		...brandHeadingSizes.map((size) => ({
			heading: `A brand heading - size:${size}`,
			component: () => (
				<GEL brand={brand}>
					<BrandHeading size={size}>Brand heading size {size}</BrandHeading>
				</GEL>
			),
		})),
	];
}
