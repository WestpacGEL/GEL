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

				<Grid rowGap={30}>
					{hasRelatedPages && (
						<Cell width={[12, hasRelatedInfo && 6, hasRelatedInfo ? 4 : 12]}>
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
							width={[12, hasRelatedPages && 6, hasRelatedPages ? 5 : 12]}
							left={[null, null, hasRelatedPages && 6]}
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
