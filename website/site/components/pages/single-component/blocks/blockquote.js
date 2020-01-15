import React from 'react';

import { Cell, Grid } from '@westpac/grid';

import { Body } from '@westpac/body';

export const Blockquote = ({ node }) => {
	const { text } = node.nodes[0].nodes[0];

	return (
		<Grid>
			<Cell left={3} width={8}>
				<Body>
					<blockquote>{text}</blockquote>
				</Body>
			</Cell>
		</Grid>
	);
};
