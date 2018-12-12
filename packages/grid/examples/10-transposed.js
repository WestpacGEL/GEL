import React from 'react';
import styled from '@emotion/styled';

import { Cell, Grid } from '../src';
import { Box, createRange } from './_utils';

const rows = counts =>
	counts.map(number =>
		createRange(number).map(i => (
			<Cell height={12 / number} key={`${number}_${i}`}>
				<Box>
					{i + 1}/{number}
				</Box>
			</Cell>
		))
	);

export default () => (
	<Grid flow="column" columns={5}>
		{rows([12, 6, 4, 2, 1])}
	</Grid>
);
