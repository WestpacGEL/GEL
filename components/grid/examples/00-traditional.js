/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Cell, Grid } from '@westpac/grid';
import { Box, createRange } from './_utils';

const rows = counts =>
	counts.map(number =>
		createRange(number).map(i => (
			<Cell width={12 / number} key={`${number}_${i}`}>
				<Box>
					{i + 1}/{number}
				</Box>
			</Cell>
		))
	);

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Grid>{rows([12, 6, 4, 2, 1])}</Grid>;
		</GEL>
	);
}

export default Example;
