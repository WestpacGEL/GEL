/** @jsx jsx */

import { Fragment, useEffect, useState, useRef } from 'react'; // Needed for within Keystone
import { jsx, Global, useBrand, useMediaQuery } from '@westpac/core';
import { Cell, Grid, Container } from '@westpac/grid';
import { List, Item } from '@westpac/list';
import { Heading } from '@westpac/heading';
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { CheckboxPrimitive } from '@arch-ui/controls';
import { inputStyles } from '@arch-ui/input';
import merge from 'lodash.merge';

import { Body } from '../src/components/body';
import { Icon } from '../../components/icon/src/Icon';
import { Section } from '../src/components/section';
import { ExternalLinkIcon } from '../src/components/external-link-icon';

const ArrowDownRightIcon = (props) => (
	<Icon aria-hidden="true" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M20 15l-6 6-1.42-1.42L16.17 16H4V4h2v10h10.17l-3.59-3.58L14 9z"
		/>
	</Icon>
);

const HeadingItemLink = ({ headingId, headingText, ...rest }) => (
	<Item {...rest}>
		<a href={`#${headingId}`}>{headingText}</a>
	</Item>
);

const parseHeadings = (content) =>
	content.nodes
		.reduce(
			(nodes, node) => (node.type === 'section' ? nodes.concat(node.nodes) : nodes.concat(node)),
			[]
		)
		.filter(
			(item) =>
				item.data.component &&
				['Heading', 'VisionFilters', 'PropsTable', 'ScreenReaderText'].includes(item.data.component)
		)
		.filter((item) => item.data.props && item.data.props.addTableContent)
		.map((item, i) => {
			const { props } = item.data;
			return (
				<HeadingItemLink
					key={`nav-${i}`}
					headingId={props.heading.replace(/ /g, '-').toLowerCase()}
					headingText={props.heading}
				/>
			);
		});

// Custom TableOfContents Icon component to render in `link` color
const ListIconOverride = ({ state: { icon: Icon }, ...rest }) => {
	const { COLORS } = useBrand();

	return <Icon size="small" color={COLORS.link} {...rest} />;
};

// Intro section
const TableOfContents = ({ content }) => {
	const toc = parseHeadings(content);
	const { COLORS, SPACING, PACKS } = useBrand();
	const [relatedContent, setRelatedContent] = useState(false);
	const introRef = useRef();

	useEffect(() => {
		if (introRef) {
			const design = introRef.current.closest('#design-tab');
			const relatedContentElement = document && document.getElementById('related-information');
			if (relatedContentElement) {
				setRelatedContent(!!design);
			}
		}
	}, [introRef]);

	return (
		<Fragment>
			<nav ref={introRef} aria-labelledby="toc-heading">
				<Heading
					tag="h2"
					size={9}
					id="toc-heading"
					overrides={{
						Heading: {
							styles: (styles) => ({
								...styles,
								fontWeight: '500',
								paddingBottom: SPACING(2),
								borderBottom: `1px solid ${COLORS.border}`,
							}),
						},
					}}
				>
					{'Page content'}
				</Heading>

				{(toc && toc.length) || relatedContent ? (
					<List
						look="primary"
						type="icon"
						icon={ArrowDownRightIcon}
						overrides={{
							List: {
								styles: (styles) =>
									merge({}, styles, {
										marginTop: SPACING(3),
										'> li': {
											margin: '0.5rem 0 0.5625rem',
										},
										a: {
											color: `${COLORS.text} !important`,
											textDecoration: 'none !important',
											':hover': {
												textDecoration: 'underline !important',
											},
										},
									}),
							},
							Icon: {
								component: ListIconOverride,
							},
						}}
					>
						{toc && toc.length !== 0 && toc}
						{relatedContent && (
							<HeadingItemLink
								key={`related-information`}
								headingId={'related-information'}
								headingText={'Related information'}
							/>
						)}
					</List>
				) : null}
			</nav>
		</Fragment>
	);
};

const PackageInfoTable = ({ item, ...rest }) => {
	if (!item) return null;
	const { PACKS, SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();
	const packageName = item.packageName.replace('_', '-');
	return (
		<table
			css={mq({
				borderTop: `1px solid ${COLORS.tints.info50}`,
				borderCollapse: 'collapse',
				backgroundColor: COLORS.tints.info5,
				color: COLORS.info,
				width: '100%',
				textAlign: 'left',
				...PACKS.typeScale.bodyFont[10],
			})}
			{...rest}
		>
			<tbody
				css={{
					th: {
						fontWeight: 500,
					},
					'> tr': {
						borderBottom: `1px solid ${COLORS.tints.info50}`,
						textAlign: 'left',
						'> td, > th': { padding: SPACING(3) },
					},
				}}
			>
				<tr>
					<th>Version</th>
					<td>{item.version}</td>
				</tr>
				<tr>
					<th>History</th>
					<td>
						<a
							href={`https://github.com/WestpacGEL/GEL/blob/master/components/${packageName}/CHANGELOG.md`}
							target="_blank"
						>
							View changes
							<ExternalLinkIcon />
						</a>
					</td>
				</tr>
				<tr>
					<th>Install</th>
					<td>
						<code>npm install @westpac/{packageName}</code>
					</td>
				</tr>
				<tr>
					<th>Requires</th>
					<td>{item.requires || 'None'}</td>
				</tr>
			</tbody>
		</table>
	);
};

const Component = ({ description, showTableOfContents, showPackageInfo, item, _editorValue }) => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();

	return (
		<Fragment>
			<Section paddingTop="large">
				<Container>
					<Grid gap={SPACING(4)}>
						<Cell width={[12, null, 7]}>
							<Body>
								{description && description !== '' ? (
									<p
										css={mq({
											margin: 0,
											fontSize: ['1.125rem', null, '1.5rem'],
											lineHeight: 1.5,
											fontWeight: 300,
										})}
									>
										{description}
									</p>
								) : null}
								{showPackageInfo && (
									<PackageInfoTable
										item={item}
										css={mq({
											marginTop: description &&
												description !== '' && [SPACING(5), null, SPACING(7)],
										})}
									/>
								)}
							</Body>
						</Cell>
						{showTableOfContents && (
							<Cell width={[12, null, 4]} left={[null, null, 9]}>
								<TableOfContents content={_editorValue} />
							</Cell>
						)}
					</Grid>
				</Container>
			</Section>
		</Fragment>
	);
};

// Separator
export const IntroSection = {
	editor: ({ value, onChange }) => {
		const [description, setDescription] = useState(value.description);
		const [showTableOfContents, setShowTableOfContents] = useState(value.showTableOfContents);
		const [showPackageInfo, setShowPackageInfo] = useState(value.showPackageInfo);

		useEffect(() => {
			onChange({
				description,
				showTableOfContents,
				showPackageInfo,
			});
		}, [description, showTableOfContents, showPackageInfo]);

		return (
			<Fragment>
				<FieldContainer>
					<FieldLabel htmlFor={'description'} field={{ label: 'Description', config: {} }} />
					<FieldInput>
						<input
							css={inputStyles}
							type="text"
							id="description"
							value={description}
							onChange={({ target }) => setDescription(target.value)}
						/>
					</FieldInput>
				</FieldContainer>
				<FieldContainer>
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={showTableOfContents}
							tabIndex="0"
							onChange={({ target }) => setShowTableOfContents(target.checked)}
						/>
						<span>Show Table of Contents</span>
					</label>
				</FieldContainer>
				<FieldContainer>
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={showPackageInfo}
							tabIndex="0"
							onChange={({ target }) => setShowPackageInfo(target.checked)}
						/>
						<span>Show Package Information</span>
					</label>
				</FieldContainer>
			</Fragment>
		);
	},
	component: Component,
};
