import { GEL, Global, useBrand, useMediaQuery } from '@westpac/core';
import React from 'react';
import { bootstrapGrid } from './bootstrap/bootstrap-grid';
import { gridMap } from '../src/_utils';

const Grid = () => {
	const mq = useMediaQuery();
	const {
		LAYOUT: { breakpoints },
		SPACING,
	} = useBrand();

	const { columns, gap } = gridMap;

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

	return <Global styles={mq(bootstrapGrid(allBreakpoints, spacing, columns, gap))[0]} />;
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
			heading: 'Introduction',
			body: `
				<p>
					The GEL Design System Grid is based on Bootstrap Grid (v5) for Blender users. Please refer to Bootstrap’s docs to learn how to implement the system and its extensive features.
				</p>
				<p>
					The following Bootstrap Grid features are implemented:
				</p>
				<ul>
					<li>
						<a href="https://v5.getbootstrap.com/docs/5.0/layout/containers/" target="_blank">Containers</a>
					</li>
					<li>
						<a href="https://v5.getbootstrap.com/docs/5.0/layout/grid/" target="_blank">Grid System</a>
						<ul>
							<li>
								<a href="https://v5.getbootstrap.com/docs/5.0/layout/grid/#auto-layout-columns" target="_blank">Auto-layout columns</a>
							</li>
							<li>
								<a href="https://v5.getbootstrap.com/docs/5.0/layout/grid/#responsive-classes" target="_blank">Responsive classes</a>
							</li>
							<li>
								<a href="https://v5.getbootstrap.com/docs/5.0/layout/grid/#nesting" target="_blank">Nesting</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="https://v5.getbootstrap.com/docs/5.0/layout/columns/" target="_blank">Columns</a>
						<ul>
							<li>
								<a href="https://v5.getbootstrap.com/docs/5.0/layout/columns/#alignment" target="_blank">Alignment</a>
							</li>
							<li>
								<a href="https://v5.getbootstrap.com/docs/5.0/layout/columns/#reordering" target="_blank">Reordering</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="https://v5.getbootstrap.com/docs/5.0/layout/gutters/" target="_blank">Gutters</a>
					</li>
					<li>
						<a href="https://v5.getbootstrap.com/docs/5.0/layout/utilities/" target="_blank">Utilities</a>
					</li>
				</ul>

				<h2>Differences</h2>
				<p>
					GEL Grid includes standard Boostrap Grid classes, however there are a small number of differences between the two systems:
				</p>

				<h3>Breakpoints</h3>
				<p>
					GEL Grid is built on <em>five</em> breakpoints: Extra small (xs), Extra small landscape (xsl), Medium (md), Large (lg), Extra large (xl). The breakpoint pixel values are consistent with Bootstrap Grid, however breakpoint names are slightly different.
				</p>
				<p>
					The Extra extra large (xxl) ≥1400px breakpoint is not provided.
				</p>

				<h3>Fluid container</h3>
				<p>
					The GEL recommends use of a fluid (100% wide) container and as such GEL Grid <code>.container</code> width is fluid by default; Bootstrap Grid container width is fixed at each breakpoint. The GEL Grid provides a fixed option via <code>.container-fixed</code>, however its use is generally not recommended.
				</p>
				<p>
					Bootstrap responsive containers <code>.container-{breakpoint}</code> are not provided.
				</p>
				
				<h3>Container padding</h3>
				<p>
					GEL Grid utilises customised container styling. The <code>.container</code> and <code>.container-fixed</code> classes have increased horizontal padding required to meet our Brand design requirements.
				</p>

				<h3>Gutter width</h3>
				<p>
					While both systems are based on a 12 column grid, GEL Grid gutter widths are responsive; designed to maximise available space. A default gutter width is set at each breakpoint.
				</p>

				<h3>Spacing units</h3>
				<p>
					Spacing units differ between the two systems. GEL Grid is based on a 6px spacing unit, Bootstrap Grid uses 4px.
				</p>
				<p>
					Gutter <code>.g-*</code>, margin <code>.m-*</code> and padding <code>.p-*</code> utility classes follow this 6px increment convention. 11 increments are provided (i.e. <code>.g-0</code> to <code>.g-10</code>).
				</p>
			`,
			component: () => null,
		},
		{
			heading: 'Containers',
			subheading: 'Default (fluid width) container',
			component: () => (
				<GEL brand={brand}>
					<div className="container">Your container content</div>
				</GEL>
			),
		},
		{
			subheading: 'Fixed container',
			component: () => (
				<GEL brand={brand}>
					<div className="container-fixed">Your fixed container content</div>
				</GEL>
			),
		},
		{
			heading: 'Grid system',
			subheading: 'Example',
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
			subheading: 'Auto-layout columns - Equal widths',
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
			subheading: 'Auto-layout columns - Setting one column width',
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
			subheading: 'Auto-layout columns - Variable width content',
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
			subheading: 'Responsive classes - All breakpoints',
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
			subheading: 'Responsive classes - Stacked to horizontal',
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
			subheading: 'Responsive classes - Mix and match',
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
			subheading: 'Responsive classes - Row columns example 1',
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
			subheading: 'Responsive classes - Row columns example 2',
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
			subheading: 'Responsive classes - Row columns example 3',
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
			subheading: 'Responsive classes - Row columns example 4',
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
			subheading: 'Responsive classes - Row columns example 5',
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
			subheading: 'Responsive classes - Row columns example 6',
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
			subheading: 'Nesting',
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
		{
			heading: 'Columns',
			subheading: 'Alignment - Vertical alignment example 1',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row align-items-start">
							<div className="col">One of three columns</div>
							<div className="col">One of three columns</div>
							<div className="col">One of three columns</div>
						</div>
						<div className="row align-items-center">
							<div className="col">One of three columns</div>
							<div className="col">One of three columns</div>
							<div className="col">One of three columns</div>
						</div>
						<div className="row align-items-end">
							<div className="col">One of three columns</div>
							<div className="col">One of three columns</div>
							<div className="col">One of three columns</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			subheading: 'Alignment - Vertical alignment example 2',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col align-self-start">One of three columns</div>
							<div className="col align-self-center">One of three columns</div>
							<div className="col align-self-end">One of three columns</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			subheading: 'Alignment - Horizontal alignment',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row justify-content-start">
							<div className="col-4">One of two columns</div>
							<div className="col-4">One of two columns</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-4">One of two columns</div>
							<div className="col-4">One of two columns</div>
						</div>
						<div className="row justify-content-end">
							<div className="col-4">One of two columns</div>
							<div className="col-4">One of two columns</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-4">One of two columns</div>
							<div className="col-4">One of two columns</div>
						</div>
						<div className="row justify-content-between">
							<div className="col-4">One of two columns</div>
							<div className="col-4">One of two columns</div>
						</div>
						<div className="row justify-content-evenly">
							<div className="col-4">One of two columns</div>
							<div className="col-4">One of two columns</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			subheading: 'Alignment - Column wrapping',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col-9">.col-9</div>
							<div className="col-4">
								.col-4
								<br />
								Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one
								contiguous unit.
							</div>
							<div className="col-6">
								.col-6
								<br />
								Subsequent columns continue along the new line.
							</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			subheading: 'Alignment - Column breaks example 1',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
							<div className="col-6 col-sm-3">.col-6 .col-sm-3</div>

							{/* Force next columns to break to new line */}
							<div className="w-100"></div>

							<div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
							<div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			subheading: 'Alignment - Column breaks example 2',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
							<div className="col-6 col-sm-4">.col-6 .col-sm-4</div>

							{/*Force next columns to break to new line at md breakpoint and up */}
							<div className="w-100 d-none d-md-block"></div>

							<div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
							<div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			heading: 'Reordering',
			subheading: 'Order classes example 1',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col">First in DOM, no order applied</div>
							<div className="col order-5">Second in DOM, with a larger order</div>
							<div className="col order-1">Third in DOM, with an order of 1</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			subheading: 'Order classes example 2',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col order-last">First in DOM, ordered last</div>
							<div className="col">Second in DOM, unordered</div>
							<div className="col order-first">Third in DOM, ordered first</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			subheading: 'Offsetting columns - Offset classes example 1',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col-md-4">.col-md-4</div>
							<div className="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
						</div>
						<div className="row">
							<div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
							<div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
						</div>
						<div className="row">
							<div className="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			subheading: 'Offsetting columns - Offset classes example 2',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
							<div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
								.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
							<div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
								.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
							</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			subheading: 'Offsetting columns - Margin utilities',
			component: () => (
				<GEL brand={brand}>
					<div className="container">
						<div className="row">
							<div className="col-md-4">.col-md-4</div>
							<div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
						</div>
						<div className="row">
							<div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
							<div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
						</div>
						<div className="row">
							<div className="col-auto mr-auto">.col-auto .mr-auto</div>
							<div className="col-auto">.col-auto</div>
						</div>
					</div>
				</GEL>
			),
		},
		{
			subheading: 'Standalone column classes',
			component: () => (
				<GEL brand={brand}>
					<div className="col-3 bg-light p-3 border">.col-3: width of 25%</div>
					<div className="col-sm-9 bg-light p-3 border">
						.col-sm-9: width of 75% above sm breakpoint
					</div>
				</GEL>
			),
		},
	];
}
