/** @jsx jsx */

import { Fragment, useEffect, useState, useRef } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { useRouter } from 'next/router';
import { Heading } from '@westpac/heading';
import { Body } from '@westpac/body';
import { List, Item } from '@westpac/list';
import { Cell, Grid, Container } from '@westpac/grid';
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';
import { CheckboxPrimitive } from '@arch-ui/controls';
import { blocksContainerStyle, blocksGridStyle } from '../src/components/_utils';

const ArrowIcon = () => {
	const { COLORS, SPACING } = useBrand();
	return (
		<svg css={{ width: SPACING(2, true) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 9">
			<path
				fill={COLORS.primary}
				fillRule="evenodd"
				d="M8 5.5l-3 3-.71-.71L6.085 6H0V0h1v5h5.085L4.29 3.21 5 2.5z"
			/>
		</svg>
	);
};

const TableLink = ({ headingId, headingText, ...rest }) => {
	const { COLORS, SPACING } = useBrand();

	return (
		<Item {...rest}>
			<a
				href={`#${headingId}`}
				css={{
					margin: SPACING(2, true),
					color: COLORS.text,
					cursor: 'pointer',
					textDecoration: 'none',
					'&:hover, &:focus': { color: COLORS.info },
				}}
			>
				{headingText}
			</a>
		</Item>
	);
};

const parseHeadings = content => {
	console.log(content.nodes);

	return content.nodes
		.filter(
			item =>
				item.data.component &&
				['Heading', 'VisionFilters', 'PropsTable', 'ScreenReaderText'].includes(item.data.component)
		)
		.filter(item => item.data.props && item.data.props.addTableContent)
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
};

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
		<div ref={introRef}>
			<Heading tag="h2" size={6} style={{ fontWeight: '500' }}>
				{'Page content'}
			</Heading>

			<hr
				css={{ border: 'none', borderTop: `solid 1px ${COLORS.border}`, margin: `${SPACING(2)} 0` }}
			/>

			{(toc && toc.length) || relatedContent ? (
				<nav>
					<List
						type="icon"
						icon={ArrowIcon}
						overrides={{
							Item: {
								styles: styles => ({
									...styles,
									paddingLeft: 0,
									paddingTop: SPACING(2),
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
				</nav>
			) : null}
		</div>
	);
};

const PackageInfoTable = ({ item }) => {
	if (!item) return null;

	return (
		<table
			css={{
				borderTop: 'solid 1px #2585ca',
				borderCollapse: 'collapse',
				background: '#f2f8fc',
				color: '#2585ca',
				width: '100%',
				textAlign: 'left',
			}}
		>
			<tbody
				css={{
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
						<Body>
							<a
								href={`https://github.com/WestpacGEL/GEL/blob/master/components/${item.packageName}/CHANGELOG.md`}
								target="_blank"
							>
								View Changes
							</a>
						</Body>
					</td>
				</tr>
				<tr>
					<th>Install</th>
					<td>npm i @westpac/{item.packageName}</td>
				</tr>
				<tr>
					<th>Requires</th>
					<td>{item.requires}</td>
				</tr>
			</tbody>
		</table>
	);
};

const Component = ({ description, showTableOfContents, showPackageInfo, item, _editorValue }) => {
	const { PACKS, COLORS } = useBrand();
	const mq = useMediaQuery();
	return (
		<Fragment>
			<Container css={blocksContainerStyle}>
				<Grid
					css={mq({
						gridGap: '1.5rem',
						marginTop: ['1.875rem', '1.875rem', '5.625rem'],
						paddingBottom: ['1.875rem', '1.875rem', '3.75rem'],
						...blocksGridStyle,
					})}
				>
					<Cell width={[12, 7, 7, 7, 7]}>
						{description && description !== '' ? (
							<p
								css={mq({
									...PACKS.lead,
									marginTop: 0,
									marginBottom: ['1.875rem', '1.875rem', '3.75rem'],
									lineHeight: 1.4,
									fontSize: ['1.125rem', '1.125rem', '1.5rem'],
								})}
							>
								{description}
							</p>
						) : null}
						{showPackageInfo && <PackageInfoTable item={item} />}
					</Cell>
					{showTableOfContents && (
						<Cell width={[12, 4, 4, 4, 4]} left={[1, 9, 9, 9, 9]}>
							<TableOfContents content={_editorValue} />
						</Cell>
					)}
				</Grid>
			</Container>
			<hr
				css={{
					border: 'none',
					borderTop: `solid 1px ${COLORS.border}`,
					margin: 0,
				}}
			/>
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
