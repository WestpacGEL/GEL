/** @jsx jsx */

import React from 'react';
import { jsx } from '@westpac/core';

import * as components from '../src';
import { Cell, Grid, Name } from './_util';

const logos = Object.keys(components).filter(s => s.includes('Logo') && !s.includes('Multibrand'));
const multibrand = Object.keys(components).filter(
	s => s.includes('Logo') && s.includes('Multibrand')
);

export default () => {
	return (
		<>
			<h2>Default</h2>
			<Grid>
				{logos.map(s => {
					const Symbol = components[s];
					return (
						<Cell key={s}>
							<Symbol />
							<Name>{s}</Name>
						</Cell>
					);
				})}
			</Grid>

			<hr />

			<h2>Multi-brand</h2>
			<Grid>
				{multibrand.map(s => {
					const Symbol = components[s];
					return (
						<Cell key={s}>
							<Symbol />
							<Name>{s}</Name>
						</Cell>
					);
				})}
			</Grid>
		</>
	);
};
