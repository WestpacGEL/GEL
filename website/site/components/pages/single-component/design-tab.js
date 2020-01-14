import React, { Fragment } from 'react';

import { Badge } from '@westpac/badge';
import { Cell, Container, Grid } from '@westpac/grid';

import { BlocksDocs, ExampleBlock, IntroSection, Separator } from './_utils';

export const DesignTab = ({ description, doc }) => {
	const nodes = doc && doc.document ? JSON.parse(doc.document).nodes : null;
	return (
		<Fragment>
			<IntroSection
				description={`${description}. 
        This is some accessibility tab placeholder text to make the intro section look nicer, until the content is entered in the system.`}
				links={['Item one', 'Item two', 'Item three', 'Item four']}
			/>
			<Separator />
			<DesignExamples />
			<Separator />
			<BlocksDocs title="UX rationale" blocks={nodes} />
			<Separator />
			<BlocksDocs title="Visual design rationale" blocks={nodes} />
		</Fragment>
	);
};

const DesignExamples = () => {
	return (
		<Container>
			<Grid>
				<Cell width={10} left={2}>
					<ExampleBlock
						title="Some fancy badges"
						intro="This is a little intro blurb text for the example."
					>
						<p>
							<Badge value="Default" /> <Badge look="primary" value="Primary" />{' '}
							<Badge look="hero" value="Hero" /> <Badge look="neutral" value="Neutral" />{' '}
							<Badge look="faint" value="Faint" />
						</p>
					</ExampleBlock>

					<ExampleBlock
						title="Second example"
						intro="This will obviously come from a source file rather than hardcoded."
					>
						<p>
							<Badge look="primary" value="Primary" /> <Badge look="hero" value="Hero" />{' '}
							<Badge look="neutral" value="Neutral" /> <Badge look="faint" value="Faint" />
						</p>
						<p>
							<Badge look="success" value="Success" /> <Badge look="info" value="Info" />{' '}
							<Badge look="warning" value="Warning" /> <Badge look="danger" value="Danger" />
						</p>
					</ExampleBlock>

					<ExampleBlock
						title="Aaaand a last one!"
						intro="This is a little intro blurb text for the example."
					>
						<p>
							<Badge value="Default" />
						</p>
						<p>
							<Badge look="primary" value="Primary" /> <Badge look="hero" value="Hero" />{' '}
							<Badge look="neutral" value="Neutral" /> <Badge look="faint" value="Faint" />
						</p>
						<p>
							<Badge look="success" value="Success" /> <Badge look="info" value="Info" />{' '}
							<Badge look="warning" value="Warning" /> <Badge look="danger" value="Danger" />
						</p>
					</ExampleBlock>
				</Cell>
			</Grid>
		</Container>
	);
};
