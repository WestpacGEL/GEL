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

			<Grid columns={'10rem 1fr 10rem'} rows={'minmax(4.5rem,auto) 1fr minmax(4.5rem,auto)'}>
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
		</Playground>
	);
};
