/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { Cell, Grid } from '@westpac/grid';

import { MaxWidthContainer, Separator, Row } from './_utils';
import { Blockquote, Paragraph, YesNo } from './blocks';
import { PageLinks } from './page-links';

export const DesignTab = ({ description, doc }) => {
	const nodes = doc && doc.document ? JSON.parse(doc.document).nodes : null;
	return (
		<MaxWidthContainer>
			<Intro description={description} />
			<Separator />
			<UxRationale nodes={nodes} />
			<Separator />
			<VisualDesignRationale />
		</MaxWidthContainer>
	);
};

const Intro = ({ description }) => {
	const { PACKS } = useBrand();
	return (
		<Grid>
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
		</Grid>
	);
};

const UxRationale = ({ nodes }) => {
	const { SPACING } = useBrand();

	return (
		<Grid>
			<Row>
				<Heading tag="h2" size={5}>
					UX rationale
				</Heading>

				{nodes ? (
					<Grid css={{ marginTop: SPACING(2) }}>
						<DesignDocs nodes={nodes} />
					</Grid>
				) : (
					<p>No documentation specified for this component.</p>
				)}
			</Row>
		</Grid>
	);
};

const DesignDocs = ({ nodes }) => {
	return nodes.map((node, index) => {
		switch (node.type) {
			case 'do-or-do-not':
				return (
					<Row key={index}>
						<YesNo yes={node.nodes[0]} no={node.nodes[1]} />
					</Row>
				);
			case 'paragraph':
				return (
					<Cell left={3} width={8} key={index}>
						<Paragraph node={node} />
					</Cell>
				);
			case 'blockquote':
				return (
					<Cell left={3} width={8} key={index}>
						<Blockquote node={node} />
					</Cell>
				);
			default:
				return <p key={index}>not matching component type!</p>;
		}
	});
};

const VisualDesignRationale = () => {
	const { SPACING } = useBrand();
	return (
		<Grid>
			<Row>
				<Heading tag="h2" size={5}>
					Visual design rationale
				</Heading>

				<Grid css={{ marginTop: SPACING(2) }}>
					<Cell left={3} width={8}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</Cell>
				</Grid>
			</Row>
		</Grid>
	);
};
