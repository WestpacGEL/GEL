import React from 'react';

import {
	MastercardAcceptedSymbol,
	BPayLandSymbol,
	AppleStoreSymbol,
	WBCLogo,
	STGLogo,
} from '../src';
import { Cell, Grid, Name } from './_util';

const symbols = [MastercardAcceptedSymbol, BPayLandSymbol, AppleStoreSymbol, WBCLogo, STGLogo];

export default () => (
	<>
		<Grid>
			{symbols.map(Symbol => {
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
