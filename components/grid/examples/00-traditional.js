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
		</Playground>
	);
};
