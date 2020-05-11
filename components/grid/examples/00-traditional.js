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
					<Cell>
						<Box>1</Box>
					</Cell>
					<Cell>
						<Box>2</Box>
					</Cell>
					<Cell>
						<Box>3</Box>
					</Cell>
					<Cell>
						<Box>4</Box>
					</Cell>
					<Cell>
						<Box>5</Box>
					</Cell>
					<Cell>
						<Box>6</Box>
					</Cell>
					<Cell>
						<Box>7</Box>
					</Cell>
					<Cell>
						<Box>8</Box>
					</Cell>
					<Cell>
						<Box>9</Box>
					</Cell>
					<Cell>
						<Box>10</Box>
					</Cell>
					<Cell>
						<Box>11</Box>
					</Cell>
					<Cell>
						<Box>12</Box>
					</Cell>
				</Grid>
			</Wrapper>
		</GEL>
	);
}

export default Example;
