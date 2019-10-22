/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Cell, Grid } from '@westpac/grid';
import { Box } from './_utils';

const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Grid columns="repeat(auto-fit, minmax(12rem, 1fr))">
				{alph.map(k => (
					<Cell key={k}>
						<Box>{k}</Box>
					</Cell>
				))}
			</Grid>
		</GEL>
	);
}

export default Example;
