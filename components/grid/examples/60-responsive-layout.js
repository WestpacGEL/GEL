import React from 'react';

import { Cell, Grid } from '../src';
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

export default () => (
	<Grid>
		{tuples.map((t, i) => (
			<Cell key={i} width={t}>
				<Box>{t.join(', ')}</Box>
			</Cell>
		))}
	</Grid>
);
