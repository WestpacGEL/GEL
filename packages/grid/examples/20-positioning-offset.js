import React from 'react';
import ReactDOM from 'react-dom';

import { Cell, Grid } from '../src';
import { Box } from './_utils';

export default () => (
	<Grid columns={3}>
		<Cell>
			<Box>Top Left</Box>
		</Cell>
		<Cell left={3}>
			<Box>Top Right</Box>
		</Cell>
		<Cell left={2} top={2}>
			<Box>Middle</Box>
		</Cell>
		<Cell top={3}>
			<Box>Bottom Left</Box>
		</Cell>
		<Cell top={3} left={3}>
			<Box>Bottom Right</Box>
		</Cell>
	</Grid>
);
