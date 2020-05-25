/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { CubeIcon, GenericFileIcon } from '@westpac/icon';
import { Container, Grid, Cell } from '@westpac/grid';
import { List, Item } from '@westpac/list';
import { Heading } from '@westpac/heading';

import { TextOnlySlateContent } from '../pages/single-component/blocks-hub';
import { ComponentLink } from './component-link';
import { IconTitle } from './icon-title';
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
		<div
			css={mq({
				background: '#fff',
				padding: ['36px 0 98px', null, null, null, '60px 0 122px'],
			})}
		>
			<Container fluid>
				<Grid rowGap={['30px', '30px', '30px', '30px', '60px']}>
					<Cell width={[12, 12, 12, 10, 10]} left={[1, 1, 1, 2, 2]}>
						<Heading
							tag="h2"
							size={5}
							addTableContent
							{...{ 'data-toc': true }}
							id="related-information"
							tabIndex="-1"
						>
							Related information
						</Heading>
					</Cell>

					{hasRelatedPages && (
						<Cell
							width={[
								12,
								12,
								hasRelatedInfo ? 4 : 10,
								hasRelatedInfo ? 4 : 10,
								hasRelatedInfo ? 4 : 10,
							]}
							left={[1, 1, 2, 2, 2]}
						>
							<IconTitle icon={CubeIcon}>Components</IconTitle>
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
						</Cell>
					)}
					{hasRelatedInfo && (
						<Cell
							width={[
								12,
								12,
								hasRelatedPages ? 5 : 10,
								hasRelatedPages ? 5 : 10,
								hasRelatedPages ? 5 : 10,
							]}
							left={[
								1,
								1,
								hasRelatedPages ? 7 : 2,
								hasRelatedPages ? 7 : 2,
								hasRelatedPages ? 7 : 2,
							]}
						>
							<IconTitle icon={GenericFileIcon}>Articles</IconTitle>
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
		</div>
	);
};
