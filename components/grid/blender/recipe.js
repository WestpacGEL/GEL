import { GEL, Global, useBrand, useMediaQuery } from '@westpac/core';
import React from 'react';

import { containerMap } from '../src/_utils';
import { rowMap, makeContainer, makeRow, makeColReady, makeGridColumns } from './_utils';

const { paddingHorizontal, fluidMaxWidth, fixedWidth } = containerMap;
const { columns, gap } = rowMap;

const Grid = () => {
	const mq = useMediaQuery();
	const {
		LAYOUT: { breakpoints },
		SPACING,
	} = useBrand();

	// console.log(makeGridColumns(columns, gap, breakpoints));
	// console.log(SPACING);

	return (
		<Global
			styles={
				mq({
					// Container
					'.container, .container-fixed': {
						...makeContainer(paddingHorizontal),
					},
					'.container': {
						maxWidth: fluidMaxWidth,
					},
					'.container-fixed': {
						width: fixedWidth,
					},

					// Row
					'.row': {
						...makeRow(gap),

						'> *': {
							...makeColReady(gap),
						},
					},

					// Columns
					...makeGridColumns(columns, gap, breakpoints, SPACING),

					// Offset

					// Gutter

					// Display

					// Align

					// Order

					// Margin

					// Padding
				})[0]
			}
		/>
	);
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
			heading: 'A default (fluid width) grid container',
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
			heading: 'Grid system',
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
	];
}
