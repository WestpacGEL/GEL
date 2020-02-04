import React from 'react';

import { Cell, Grid } from '@westpac/grid';

export const Paragraph = ({ node }) => {
	const { text } = node.nodes[0];
	return (
		<Grid>
			<Cell left={3} width={8}>
				<p>{text}</p>
			</Cell>
		</Grid>
	);
};
