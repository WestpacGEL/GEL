import React from 'react';

import { Cell, Grid } from '@westpac/grid';

import { Body } from '@westpac/body';

export const Blockquote = ({ node }) => {
	const { text } = node.nodes[0].nodes[0];

	// TODO: wrap the blockquote in <Body> component when working, currently throws atob error
	return (
		<Grid>
			<Cell left={3} width={8}>
				<blockquote>{text}</blockquote>
			</Cell>
		</Grid>
	);
};
