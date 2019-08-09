import React from 'react';

import { MastercardAcceptedSymbol, BPayLandSymbol, AppleStoreSymbol } from '../src';
import { Cell, Grid, Name } from './_util';

const examples = [MastercardAcceptedSymbol, BPayLandSymbol, AppleStoreSymbol];

export default () => (
	<>
		<Grid>
			{examples.map(Symbol => {
				return (
					<Cell key={Symbol.name}>
						<Symbol />
						<Name>{Symbol.name}</Name>
					</Cell>
				);
			})}
		</Grid>
	</>
);
