import { GEL, jsx } from '@westpac/core';
import { Cell, Grid } from '@westpac/grid';
import { Wrapper, Box } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Wrapper>
				<Grid>
					<Cell width={[12, 6, 4, 3, 2]}>
						<Box>[12, 6, 4, 3, 2]</Box>
					</Cell>
				</Grid>

				<hr />

				<Grid>
					<Cell width={[12, 10, 6, 10, 12]}>
						<Box>[12, 10, 6, 10, 12]</Box>
					</Cell>
				</Grid>

				<hr />

				<Grid>
					<Cell width={[12, 8, 3, 6, 4]}>
						<Box>[12, 8, 3, 6, 4]</Box>
					</Cell>
				</Grid>
			</Wrapper>
		</GEL>
	);
}

export default Example;
