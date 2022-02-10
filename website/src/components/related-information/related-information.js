/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { CubeIcon, GenericFileIcon } from '@westpac/icon';
import { Container, Grid, Cell } from '@westpac/grid';
import { Section, SectionHeading } from '../section';

import { TextOnlySlateContent } from '../pages/single-component/blocks-hub';
import { BlockList, BlockListItem, BlockListHeading } from '../block-list';
import { getURL } from '../_utils';

export const RelatedInformation = ({ item }) => {
	const { SPACING, PACKS, COLORS } = useBrand();
	const { relatedPages, relatedInfo } = item;
	const hasRelatedPages = relatedPages && relatedPages.length !== 0;

	let hasRelatedInfo =
		relatedInfo.document.length > 1 ||
		relatedInfo.document[0].type !== 'paragraph' ||
		relatedInfo.document[0].children.length !== 1 ||
		relatedInfo.document[0].children[0].text !== '';

	if (!hasRelatedPages && !hasRelatedInfo) return null;

	return (
		<Section light css={{ borderTop: `1px solid ${COLORS.border}` }}>
			<Container>
				<SectionHeading id="related-information" tabIndex="-1">
					Related information
				</SectionHeading>

				<Grid rowGap={30}>
					{hasRelatedPages && (
						<Cell width={[12, hasRelatedInfo ? 6 : null, 4]}>
							<BlockListHeading icon={CubeIcon}>Components</BlockListHeading>
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
							width={[12, hasRelatedPages ? 6 : null, hasRelatedPages ? 7 : null]}
							left={[null, null, hasRelatedPages ? 6 : null]}
						>
							<BlockListHeading icon={GenericFileIcon}>Articles</BlockListHeading>
							<TextOnlySlateContent
								content={relatedInfo.document}
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
