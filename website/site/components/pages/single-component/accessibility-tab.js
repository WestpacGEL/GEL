import React, { Fragment } from 'react';

import { Badge } from '@westpac/badge';
import { Cell, Container, Grid } from '@westpac/grid';

import { ExampleBlock, IntroSection, Separator } from './_utils';

export const AccessibilityTab = () => {
	return (
		<Fragment>
			<IntroSection
				description="This is some accessibility tab placeholder text to make the intro section look nicer,
						until the content is entered in the system."
				pageLinks={['Item A', 'Item B', 'Item C']}
			/>
			<Separator />

			<Container>
				<Grid>
					<Cell width={10} left={2}>
						<ExampleBlock
							title="Accessibility matters"
							intro="This is a little intro blurb text for the example."
						>
							<Badge value="Default" /> <Badge look="primary" value="Primary" />{' '}
							<Badge look="hero" value="Hero" /> <Badge look="neutral" value="Neutral" />{' '}
							<Badge look="faint" value="Faint" />
						</ExampleBlock>
					</Cell>
				</Grid>
			</Container>
		</Fragment>
	);
};
