import React from 'react';

import { Cell, Grid } from '@westpac/grid';

export const NoMatch = () => {
	return (
		<Grid>
			<Cell width={8} left={3}>
				<p>No match!</p>
			</Cell>
		</Grid>
	);
};
