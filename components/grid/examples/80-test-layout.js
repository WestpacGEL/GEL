/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Container, Cell, Grid } from '@westpac/grid';
import { Wrapper, Box } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia ignore />

			<Wrapper css={{
				position: 'absolute',
				zIndex: 9,
				left: 0,
				right: 0,
				pointerEvents: 'none',
			}}>
				<Container>
					<Grid>
						<Cell width={[12, 6]}>
							<Box>[12, 6]</Box>
						</Cell>
						<Cell width={[12, 6]}>
							<Box>[12, 6]</Box>
						</Cell>
						<Cell width={[12, 7, 4]}>
							<Box>[12, 7, 4]</Box>
						</Cell>
						<Cell width={[12, 5, 4]}>
							<Box>[12, 5, 4]</Box>
						</Cell>
						<Cell width={[12, 12, 4]}>
							<Box>[12, 12, 4]</Box>
						</Cell>
						<Cell width={3}>
							<Box>3</Box>
						</Cell>
						<Cell width={6}>
							<Box>6</Box>
						</Cell>
						<Cell width={3}>
							<Box>3</Box>
						</Cell>
						<Cell width={[12, 8]}>
							<Grid>
								<Cell width={[12, 6]}>
									<Box>[12, 6]</Box>
								</Cell>
								<Cell width={[12, 6]}>
									<Box>[12, 6]</Box>
								</Cell>
							</Grid>
						</Cell>
						<Cell width={4}>
							<Box>4</Box>
						</Cell>
						<Cell width={2}>
							<Box>2</Box>
						</Cell>
						<Cell width={[6, 10]}>
							<Box>[6, 10]</Box>
						</Cell>
					</Grid>
				</Container>
			</Wrapper>
		</GEL>
	);
}

export default Example;
