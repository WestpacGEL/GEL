/** @jsx jsx */

import React from 'react';
import { jsx } from '@westpac/core';

import * as components from '../src';
import { LogoSmall } from '../src';
import { Cell, Grid, Name } from './_util';

const logos = Object.keys(components).filter(s => s.endsWith('Logo'));
const multibrand = Object.keys(components).filter(s => s.startsWith('Logo'));

export default () => {
	return (
		<>
			<h2>Standard logos</h2>
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

			<h2>Multi-brand logos</h2>
			<Grid>
				<Cell>
					<LogoSmall align="left" />
					<Name>LogoSmall (left)</Name>
				</Cell>
				<Cell>
					<LogoSmall align="center" />
					<Name>LogoSmall (center)</Name>
				</Cell>
				<Cell>
					<LogoSmall align="right" />
					<Name>LogoSmall (right)</Name>
				</Cell>
			</Grid>
		</>
	);
};
