/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Cell, Grid } from '@westpac/grid';
import { Box } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

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
		</Playground>
	);
};
