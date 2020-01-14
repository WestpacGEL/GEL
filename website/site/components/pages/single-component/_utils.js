/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { Well } from '@westpac/well';

import { BlocksHub } from './blocks-hub';
import { PageLinks } from './page-links';

export const BlocksDocs = ({ title, blocks }) => {
	const { SPACING } = useBrand();
	return (
		<Container>
			<Grid css={{ marginBottom: SPACING(2) }}>
				<Cell width={10} left={2}>
					<Heading tag="h2" size={5}>
						{title}
					</Heading>
				</Cell>
			</Grid>
			{blocks ? (
				<BlocksHub blocks={blocks} />
			) : (
				<Grid>
					<Cell width={10} left={2}>
						<p>No documentation specified for this section.</p>
					</Cell>
				</Grid>
			)}
		</Container>
	);
};

export const ExampleBlock = ({ title, intro, children }) => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();
	return (
		<div css={{ marginBottom: SPACING(6) }}>
			<Heading tag="h2" size={5}>
				{title}
			</Heading>
			<p css={{ maxWidth: 570 }}>{intro}</p>
			<Well
				overrides={{
					Well: {
						styles: styles =>
							mq({
								...styles,
								border: 'none',
								borderRadius: 0,
								padding: [SPACING(3), SPACING(6)],
								marginTop: SPACING(4),
							}),
					},
				}}
			>
				{children}
			</Well>
		</div>
	);
};

// Separator
export const Separator = () => {
	const { COLORS, SPACING } = useBrand();
	return (
		<hr
			css={{ border: 'none', borderTop: `solid 1px ${COLORS.border}`, margin: `${SPACING(6)} 0` }}
		/>
	);
};

// Intro section
export const IntroSection = ({ description, pageLinks }) => {
	const { PACKS, SPACING } = useBrand();
	return (
		<Container css={{ marginTop: SPACING(6) }}>
			<Grid>
				<Cell width={7}>
					<p css={{ ...PACKS.lead, marginTop: 0 }}>{description}</p>
				</Cell>
				<Cell width={1} />
				<Cell width={4}>
					<PageLinks title="Page content" pageLinks={pageLinks} />
				</Cell>
			</Grid>
		</Container>
	);
};

// Full width row within <Grid> component
export const Row = props => <Cell width={12} {...props} />;
