import { GEL } from '@westpac/core';
import React from 'react';

import { Heading, BrandHeading } from '@westpac/heading';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Heading size={1}>Your heading</Heading>
			<Heading size={2}>Your heading</Heading>
			<Heading size={3}>Your heading</Heading>
			<Heading size={4}>Your heading</Heading>
			<Heading size={5}>Your heading</Heading>
			<Heading size={6}>Your heading</Heading>
			<Heading size={7}>Your heading</Heading>
			<Heading size={8}>Your heading</Heading>
			<Heading size={9}>Your heading</Heading>
			<Heading size={10}>Your heading</Heading>

			<BrandHeading size={1}>Your brand heading</BrandHeading>
			<BrandHeading size={2}>Your brand heading</BrandHeading>
			<BrandHeading size={3}>Your brand heading</BrandHeading>
			<BrandHeading size={4}>Your brand heading</BrandHeading>
			<BrandHeading size={5}>Your brand heading</BrandHeading>
			<BrandHeading size={6}>Your brand heading</BrandHeading>
			<BrandHeading size={7}>Your brand heading</BrandHeading>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => ({
			heading: `A size:${size} heading`,
			component: () => (
				<GEL brand={brand}>
					<Heading size={size}>Heading size {size}</Heading>
				</GEL>
			),
		})),
		...[1, 2, 3, 4, 5, 6, 7].map((size) => ({
			heading: `A size:${size} brand heading`,
			component: () => (
				<GEL brand={brand}>
					<BrandHeading size={size}>Brand heading size {size}</BrandHeading>
				</GEL>
			),
		})),
	];
}
