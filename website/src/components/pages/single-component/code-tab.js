import React, { Fragment } from 'react';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { BlocksDocs } from './_utils';

export const CodeTab = ({ blocks, item }) => {
	return (
		<Fragment>
			<Container>
				<Grid>
					<Cell width={10} left={2}>
						<BlocksDocs blocks={blocks} item={item} />
					</Cell>
					<Cell width={10} left={2}>
						<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
							Changelog
						</Heading>
					</Cell>
				</Grid>
			</Container>
		</Fragment>
	);
};
