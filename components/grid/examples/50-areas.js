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

			<Grid
				columns={'10rem 1fr 10rem'}
				areas={['header header header', 'menu content ads', 'footer footer footer']}
			>
				<Cell area="header">
					<Box>Header</Box>
				</Cell>
				<Cell area="footer">
					<Box>Footer</Box>
				</Cell>

				<Cell area="menu">
					<Box>Menu</Box>
				</Cell>
				<Cell area="ads">
					<Box>Ads</Box>
				</Cell>

				<Cell area="content">
					<Box>Content</Box>
				</Cell>
			</Grid>
		</Playground>
	);
};
