import React, { Fragment } from 'react';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { IntroSection, BlocksDocs } from './_utils';

export const CodeTab = ({ blocks }) => {
	return (
		<Fragment>
			<IntroSection
				description="Developer focused overview text goes here it will need to be at least this long."
				pageLinks={['Woo', 'Weee', 'Hooaa']}
			/>
			<Container>
				<Grid>
					<Cell width={10} left={2}>
						<BlocksDocs blocks={blocks} />
					</Cell>
					<Cell width={10} left={2}>
						<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
							Changelog
						</Heading>
						<p>// TODO: changelog</p>
						{/*<Changelog data={changelog}></Changelog>*/}
					</Cell>
				</Grid>
			</Container>
		</Fragment>
	);
};
