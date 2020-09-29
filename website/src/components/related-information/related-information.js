/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { CubeIcon, GenericFileIcon } from '@westpac/icon';
import { Container, Grid, Cell } from '@westpac/grid';
import { Section, SectionHeading } from '../section';

import { TextOnlySlateContent } from '../pages/single-component/blocks-hub';
import { BlockList, BlockListItem } from '../block-list';
import { BlockHeading } from '../block-heading';
import { getURL } from '../_utils';

export const RelatedInformation = ({ item }) => {
	const { SPACING, COLORS, PACKS } = useBrand();
	const { relatedPages, relatedInfo } = item;
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
				<SectionHeading id="related-information" tabIndex="-1">
					Related information
				</SectionHeading>

				<Grid>
					{hasRelatedPages && (
						<Cell width={[12, null, hasRelatedInfo ? 4 : 10]} left={[1, null, 2]}>
							<BlockHeading icon={CubeIcon}>Components</BlockHeading>
							<BlockList>
								{relatedPages.map((d) => (
									<BlockListItem key={d.id} link={getURL(d)}>
										{d.pageTitle}
									</BlockListItem>
								))}
							</BlockList>
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
								css={{
									marginTop: SPACING(3),
								}}
								overrides={{
									Body: {
										styles: (styles) => ({
											...styles,
											...PACKS.typeScale.bodyFont[10],
										}),
									},
								}}
							/>
						</Cell>
					)}
				</Grid>
			</Container>
		</Section>
	);
};
