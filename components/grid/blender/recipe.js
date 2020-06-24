import { GEL, Global, useBrand, useMediaQuery } from '@westpac/core';
import React from 'react';
import { bootstrapGrid } from './bootstrap/bootstrap-grid';

const Grid = () => {
	const mq = useMediaQuery();
	const {
		LAYOUT: { breakpoints },
	} = useBrand();

	return <Global styles={mq(bootstrapGrid(breakpoints))[0]} />;
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
