import { GEL, Global, useBrand, useMediaQuery } from '@westpac/core';
import React from 'react';
import { bootstrapGrid } from './bootstrap/bootstrap-grid';

const Grid = () => {
	const mq = useMediaQuery();
	const {
		LAYOUT: { breakpoints },
		SPACING,
	} = useBrand();

	// Breakpoints with an XS added back in (we don't store this in our tokens)
	const allBreakpoints = Object.assign({ xs: 0 }, breakpoints);

	// Create an array of spacing increment objects
	const GUTTERS = 11; // Gutter increments (0 – 10)
	const spacing = Object.assign(
		{},
		...Array.from({ length: GUTTERS }, (_, i) => ({
			[i]: SPACING(i),
		}))
	);

	return <Global styles={mq(bootstrapGrid(allBreakpoints, spacing))[0]} />;
};

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Grid />
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'Container',
			subheading: 'A default (fluid width) grid container',
			component: () => (
				<GEL brand={brand}>
					<div className="container">Your container content</div>
				</GEL>
			),
		},
		{
			heading: 'A fixed width grid container',
			component: () => (
				<GEL brand={brand}>
					<div className="container-fixed">Your fixed container content</div>
				</GEL>
			),
		},
		{
			heading: 'Grid system example',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col-sm">One of three columns</div>
							<div className="col-sm">One of three columns</div>
							<div className="col-sm">One of three columns</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Auto-layout columns - Equal widths',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col">1 of 2</div>
							<div className="col">2 of 2</div>
						</div>
						<div className="row">
							<div className="col">1 of 3</div>
							<div className="col">2 of 3</div>
							<div className="col">3 of 3</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Auto-layout columns - Setting one column width',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col">1 of 3</div>
							<div className="col-6">2 of 3 (wider)</div>
							<div className="col">3 of 3</div>
						</div>
						<div className="row">
							<div className="col">1 of 3</div>
							<div className="col-5">2 of 3 (wider)</div>
							<div className="col">3 of 3</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Auto-layout columns - Variable width content',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="col col-lg-2">1 of 3</div>
							<div className="col-md-auto">Variable width content</div>
							<div className="col col-lg-2">3 of 3</div>
						</div>
						<div className="row">
							<div className="col">1 of 3</div>
							<div className="col-md-auto">Variable width content</div>
							<div className="col col-lg-2">3 of 3</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Responsive classes - All breakpoints',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col">col</div>
							<div className="col">col</div>
							<div className="col">col</div>
							<div className="col">col</div>
						</div>
						<div className="row">
							<div className="col-8">col-8</div>
							<div className="col-4">col-4</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Responsive classes - Stacked to horizontal',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col-sm-8">col-sm-8</div>
							<div className="col-sm-4">col-sm-4</div>
						</div>
						<div className="row">
							<div className="col-sm">col-sm</div>
							<div className="col-sm">col-sm</div>
							<div className="col-sm">col-sm</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Responsive classes - Mix and match',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						{/* Stack the columns on mobile by making one full-width and the other half-width */}
						<div className="row">
							<div className="col-md-8">.col-md-8</div>
							<div className="col-6 col-md-4">.col-6 .col-md-4</div>
						</div>

						{/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
						<div className="row">
							<div className="col-6 col-md-4">.col-6 .col-md-4</div>
							<div className="col-6 col-md-4">.col-6 .col-md-4</div>
							<div className="col-6 col-md-4">.col-6 .col-md-4</div>
						</div>

						{/* Columns are always 50% wide, on mobile and desktop */}
						<div className="row">
							<div className="col-6">.col-6</div>
							<div className="col-6">.col-6</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Responsive classes - Row columns example 1',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row row-cols-2">
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col">Column</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Responsive classes - Row columns example 2',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row row-cols-3">
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col">Column</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Responsive classes - Row columns example 3',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row row-cols-auto">
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col">Column</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Responsive classes - Row columns example 4',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row row-cols-4">
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col">Column</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Responsive classes - Row columns example 5',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row row-cols-4">
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col-6">Column</div>
							<div className="col">Column</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Responsive classes - Row columns example 6',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col">Column</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Nesting',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col-sm-3">Level 1: .col-sm-3</div>
							<div className="col-sm-9">
								<div className="row">
									<div className="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
									<div className="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
								</div>
							</div>
						</div>
					</div>
				</GEL>
			),
		},
	];
}
