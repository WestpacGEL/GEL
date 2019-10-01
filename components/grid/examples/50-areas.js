import React from 'react';
import { Cell, Grid } from '../src';
import { Box } from './_utils';

export default () => (
	<Grid
		columns={'10rem 1fr 10rem'}
		areas={['header header header', 'menu content ads', 'footer footer footer']}
	>
		<Cell area="header">
			<Box>Header</Box>
		</Cell>

		<Cell area="menu">
			<Box>Menu</Box>
		</Cell>
		<Cell area="content">
			<Box>Content</Box>
		</Cell>
		<Cell area="ads">
			<Box>Ads</Box>
		</Cell>

		<Cell area="footer">
			<Box>Footer</Box>
		</Cell>
	</Grid>
);
