/** @jsx jsx */

import { Fragment, useEffect, useState, useRef } from 'react'; // Needed for within Keystone
import { jsx, Global, useBrand, useMediaQuery } from '@westpac/core';
import { Cell, Grid, Container } from '@westpac/grid';
import { List, Item } from '@westpac/list';
import { Heading } from '@westpac/heading';
import { Body } from '../src/components/body';

import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { CheckboxPrimitive } from '@arch-ui/controls';
import { inputStyles } from '@arch-ui/input';
import { Icon } from '../../components/icon/src/Icon';
import { Section } from '../src/components/section';

const ArrowIcon = (props) => (
	<Icon assistiveText="Link arrow" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M20 15l-6 6-1.42-1.42L16.17 16H4V4h2v10h10.17l-3.59-3.58L14 9z"
		/>
	</Icon>
);

const TableLink = ({ headingId, headingText, ...rest }) => (
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
				<TableLink
					key={`nav-${i}`}
					headingId={props.heading.replace(/ /g, '-').toLowerCase()}
					headingText={props.heading}
				/>
			);
		});

// Intro section
const TableOfContents = ({ content }) => {
	const toc = parseHeadings(content);
	const { COLORS, SPACING } = useBrand();
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
			<Global styles={{ html: { scrollBehavior: 'smooth' } }} />
			<nav ref={introRef}>
				<Heading
					tag="h2"
					size={9}
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
						icon={ArrowIcon}
						spacing="large"
						overrides={{
							List: {
								styles: (styles) => ({
									...styles,
									marginTop: SPACING(3),
									a: {
										color: COLORS.text,
										textDecoration: 'none',
										':hover, :focus': {
											color: COLORS.info,
											textDecoration: 'underline',
										},
									},
								}),
							},
						}}
					>
						{toc && toc.length !== 0 && toc}
						{relatedContent && (
							<TableLink
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

const PackageInfoTable = ({ item }) => {
	if (!item) return null;
	const { PACKS } = useBrand();
	const mq = useMediaQuery();
	return (
		<table
			css={mq({
				marginTop: ['1.875rem', null, '2.625rem'],
				borderTop: 'solid 1px #2585ca',
				borderCollapse: 'collapse',
				background: '#f2f8fc',
				color: '#2585ca',
				width: '100%',
				textAlign: 'left',
				...PACKS.typeScale.bodyFont[10],
			})}
		>
			<tbody
				css={{
					th: {
						fontWeight: 500,
					},
					'> tr': {
						borderBottom: 'solid 1px #2585ca',
						textAlign: 'left',
						'> td': { textAlign: 'right' },
						'> td, > th': { padding: 15 },
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
							href={`https://github.com/WestpacGEL/GEL/blob/master/components/${item.packageName}/CHANGELOG.md`}
							target="_blank"
						>
							View Changes
						</a>
					</td>
				</tr>
				<tr>
					<th>Install</th>
					<td>
						<code>npm i @westpac/{item.packageName}</code>
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
	const { PACKS, SPACING } = useBrand();
	const mq = useMediaQuery();
	return (
		<Fragment>
			<Section>
				<Container>
					<Grid gap={SPACING(4)}>
						<Cell width={showTableOfContents ? [12, 7, 7, 7, 7] : 12}>
							<Body>
								{description && description !== '' ? (
									<p
										css={mq({
											...PACKS.lead,
											marginTop: 0,
											marginBottom: 0,
											lineHeight: 1.4,
											fontSize: ['1.125rem', '1.125rem', '1.5rem'],
										})}
									>
										{description}
									</p>
								) : null}
								{showPackageInfo && <PackageInfoTable item={item} />}
							</Body>
						</Cell>
						{showTableOfContents && (
							<Cell width={[12, 4, 4, 4, 4]} left={[1, 9, 9, 9, 9]}>
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
