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
				<Grid>
					<Cell width={[12, 6, 3, 4]}>
						<Box>[12, 6, 3, 4]</Box>
					</Cell>
				</Grid>

				<hr />

				<Grid>
					<Cell width={[12, 10, 10, 12]}>
						<Box>[12, 10, 10, 12]</Box>
					</Cell>
				</Grid>

				<hr />

				<Grid>
					<Cell width={[12, 8, 3, 6]}>
						<Box>[12, 8, 3, 6]</Box>
					</Cell>
				</Grid>
			</Wrapper>
		</GEL>
	);
}

export default Example;
