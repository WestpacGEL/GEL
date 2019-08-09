/** @jsx jsx */

import React from 'react';
import { jsx } from '@westpac/core';

import * as components from '../src';
import { Cell, Grid, Name } from './_util';

// can't believe this works...
const symbols = Object.keys(components);

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
