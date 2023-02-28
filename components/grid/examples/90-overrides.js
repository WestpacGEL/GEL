import { GEL, jsx, useBrand } from '@westpac/core';
import { Cell, Grid, Container } from '@westpac/grid';
import { Box } from './_utils';

function Example({ brand }) {
	const { COLORS } = useBrand();
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/grid'] = {
		Grid: {
			styles: (styles) => ({
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
		<GEL brand={overridesWithTokens}>
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
		</GEL>
	);
}

export default Example;
