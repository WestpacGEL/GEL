/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { Cell, Grid } from '@westpac/grid';
import { Panel, Header, Body, Footer } from '@westpac/panel';

import { PageLinks } from './page-links';
import { MaxWidthGrid, Row } from './_utils';

import { YesNo } from './blocks/do-or-do-not';

export const DesignTab = ({ description, doc }) => {
	const docsData = JSON.parse(doc.document);
	const { nodes } = docsData;
	const { SPACING, PACKS } = useBrand();
	return (
		<MaxWidthGrid>
			<Cell width={7}>
				<p css={{ ...PACKS.lead, marginTop: 0 }}>{description}</p>
				<p css={{ ...PACKS.lead }}>
					This is some placeholder text to make the intro section look nicer, until the content is
					entered in the system.
				</p>
			</Cell>
			<Cell width={1} />
			<Cell width={4}>
				<PageLinks title="Page content" links={['Item 1', 'Item 2', 'Item 3']} />
			</Cell>

			<UxRationale />
			<Row>
				<DesignDocs docs={nodes} />
			</Row>
			<VisualDesignRationale />
		</MaxWidthGrid>
	);
};

const DesignDocs = ({ docs }) => {
	return docs.map(node => {
		switch (node.type) {
			case 'do-or-do-not':
				return <YesNo yes={node.nodes[0]} no={node.nodes[1]} />;
			case 'paragraph':
				return 'paragraph here';
			default:
				return 'not matching component type!';
		}
	});
};

const UxRationale = () => {
	const { SPACING } = useBrand();
	return (
		<Row>
			<Heading tag="h2" size={5}>
				UX rationale
			</Heading>

			<Grid css={{ marginTop: SPACING(2) }}>
				<Cell left={3} width={8}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</Cell>
			</Grid>
		</Row>
	);
};

const VisualDesignRationale = () => {
	const { SPACING } = useBrand();
	return (
		<Row>
			<Heading tag="h2" size={5}>
				Visual design rationale
			</Heading>

			<Grid css={{ marginTop: SPACING(2) }}>
				<Cell left={3} width={8}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</Cell>
			</Grid>
		</Row>
	);
};
