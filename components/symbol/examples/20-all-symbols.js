/** @jsx jsx */

import { jsx } from '@westpac/core';
import * as components from '@westpac/symbol';
import { Cell, Grid, Name } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

const symbols = Object.keys(components).filter(s => s.includes('Symbol'));

function Example({ context }) {
	return (
		<Playground context={context} brand={brand}>
			<Intopia />

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
		</Playground>
	);
}

export default Example;
