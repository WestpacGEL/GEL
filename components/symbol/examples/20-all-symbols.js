/** @jsx jsx */

import React from 'react';
import { jsx } from '@westpac/core';

import * as components from '../src';
import { Cell, Grid, Name } from './_util';

const symbols = Object.keys(components).filter(s => s.includes('Symbol'));

export default () => {
	return (
		<>
			<Grid>
				{symbols.map(s => {
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
