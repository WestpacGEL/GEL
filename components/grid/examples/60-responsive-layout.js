/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Cell, Grid } from '@westpac/grid';
import { Box } from './_utils';

const tuples = [
	[12, 6, 3, 4],
	[12, 6, 3, 4],
	[12, 12, 3, 4],
	[12, 4, 3, 2],
	[12, 4, 3, 8],
	[12, 4, 3, 2],
	[12, 8, 3, 6],
	[12, 4, 3, 6],
];

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Grid>
				{tuples.map((t, i) => (
					<Cell key={i} width={t}>
						<Box>{t.join(', ')}</Box>
					</Cell>
				))}
			</Grid>
		</GEL>
	);
}

export default Example;
