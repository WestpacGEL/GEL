/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { CubeIcon, GenericFileIcon } from '@westpac/icon';
import { Container, Grid, Cell } from '@westpac/grid';
import { List, Item } from '@westpac/list';
import { Section, SectionHeading } from '../section';

import { TextOnlySlateContent } from '../pages/single-component/blocks-hub';
import { ComponentLink } from './component-link';
import { BlockHeading } from '../block-heading';
import { getURL } from '../_utils';

export const RelatedInformation = ({ item }) => {
	const { SPACING, COLORS } = useBrand();
	const { relatedPages, relatedInfo } = item;
	const mq = useMediaQuery();
	const hasRelatedPages = relatedPages && relatedPages.length !== 0;

	function checkNode(node) {
		return node.text || (node.nodes && node.nodes.some(checkNode));
	}
	let hasRelatedInfo = false;
	try {
		hasRelatedInfo = checkNode(JSON.parse(relatedInfo.document));
	} catch (e) {
		console.warn('Could not parse document data searching for Related Info');
	}

	if (!hasRelatedPages && !hasRelatedInfo) return null;

	return (
		<Section css={{ backgroundColor: 'white', borderTop: `1px solid ${COLORS.border}` }}>
			<Container>
				<Grid rowGap={['30px', null, null, null, '60px']}>
					<Cell width={[12, null, null, 10]} left={[1, null, null, 2]}>
						<Heading tag="h2" size={[7, null, 6]} id="related-information" tabIndex="-1">
							Related information
						</Heading>
					</Cell>

					{hasRelatedPages && (
						<Cell width={[12, null, hasRelatedInfo ? 4 : 10]} left={[1, null, 2]}>
							<List
								type="unstyled"
								overrides={{
									Item: {
										styles: (styles) => ({
											...styles,
											margin: 0,
											borderBottom: `solid 1px ${COLORS.border}`,
										}),
									},
								}}
							>
								{relatedPages.map((d) => {
									return (
										<Item key={d.id}>
											<ComponentLink link={getURL(d)}>{d.pageTitle}</ComponentLink>
										</Item>
									);
								})}
							</List>
							<BlockHeading icon={CubeIcon}>Components</BlockHeading>
						</Cell>
					)}
					{hasRelatedInfo && (
						<Cell
							width={[12, null, hasRelatedPages ? 5 : 10]}
							left={[1, null, hasRelatedPages ? 7 : 2]}
						>
							<BlockHeading icon={GenericFileIcon}>Articles</BlockHeading>
							<TextOnlySlateContent
								content={relatedInfo}
								item={item}
								cssOverrides={{
									p: { fontSize: '14px' },
									div: { marginTop: SPACING(3) },
								}}
							/>
						</Cell>
					)}
				</Grid>
			</Container>
		</Section>
	);
};
