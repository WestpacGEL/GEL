/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Cell, Grid } from '@westpac/grid';
import { Wrapper, Box } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<Wrapper>
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
			</Wrapper>
		</GEL>
	);
}

export default Example;
