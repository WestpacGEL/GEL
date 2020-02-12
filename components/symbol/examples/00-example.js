/** @jsx jsx */

import { jsx } from '@westpac/core';
import {
	MastercardAcceptedSymbol,
	BPayLandSymbol,
	AppleStoreSymbol,
	WBCLogo,
	STGLogo,
} from '@westpac/symbol';
import { Cell, Grid, Name } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ context }) {
	return (
		<Playground context={context} brand={brand}>
			<Intopia />

			<Grid>
				<Cell>
					<MastercardAcceptedSymbol />
					<Name>MastercardAcceptedSymbol</Name>
				</Cell>
				<Cell>
					<BPayLandSymbol />
					<Name>BPayLandSymbol</Name>
				</Cell>
				<Cell>
					<AppleStoreSymbol />
					<Name>AppleStoreSymbol</Name>
				</Cell>
				<Cell>
					<WBCLogo />
					<Name>WBCLogo</Name>
				</Cell>
				<Cell>
					<STGLogo />
					<Name>STGLogo</Name>
				</Cell>
			</Grid>
		</Playground>
	);
}

export default Example;
