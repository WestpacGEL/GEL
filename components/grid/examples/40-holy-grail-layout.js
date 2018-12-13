import React from 'react';

import { Cell, Grid } from '../src';
import { Box } from './_utils';

export default () => (
	<Grid columns={'100px 1fr 100px'} rows={'minmax(45px,auto) 1fr minmax(45px,auto)'}>
		<Cell width={3}>
			<Box>Header</Box>
		</Cell>

		<Cell>
			<Box>Menu</Box>
		</Cell>
		<Cell>
			<Box>Content</Box>
		</Cell>
		<Cell>
			<Box>Ads</Box>
		</Cell>

		<Cell width={3}>
			<Box>Footer</Box>
		</Cell>
	</Grid>
);
