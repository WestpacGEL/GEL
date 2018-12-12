import React from 'react';
import styled from '@emotion/styled';

import { Cell, Grid } from '../src';
import { Box } from './_utils';

const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

export default () => (
	<Grid columns="repeat(auto-fit, minmax(120px, 1fr))">
		{alph.map(k => (
			<Cell key={k}>
				<Box>{k}</Box>
			</Cell>
		))}
	</Grid>
);
