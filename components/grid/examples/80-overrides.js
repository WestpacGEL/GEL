/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Cell, Grid, Container } from '@westpac/grid';
import { Box } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	const { COLORS } = useBrand();
	const overridesWithTokens = {};
	overridesWithTokens['@westpac/grid'] = {
		Grid: {
			styles: styles => ({
				...styles,
				outline: '5px dotted green',
			}),
		},
		Container: {
			styles: (styles, { look }) => ({
				...styles,
				outline: '3px dotted blue',
			}),
		},
		Cell: {
			styles: (styles, { look }) => ({
				...styles,
				outline: '3px dotted hotpink',
			}),
		},
	};

	return (
		<Playground context={context} brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<Container css={{ backgroundColor: COLORS.primary }}>
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
			</Container>
		</Playground>
	);
}

export default Example;
