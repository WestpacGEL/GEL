import React from 'react';
import styled from '@emotion/styled';

import { Cell, Grid } from '../src';
import { Box } from './_utils';

export default () => (
	<Grid
		columns={'100px 1fr 100px'}
		rows={'45px 1fr 45px'}
		areas={['header header  header', 'menu   content ads   ', 'footer footer  footer']}
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
