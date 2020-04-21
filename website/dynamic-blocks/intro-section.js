/** @jsx jsx */

import { Fragment, useEffect, useState } from 'react'; // Needed for within Keystone
import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { Body } from '@westpac/body';
import { List, Item } from '@westpac/list';
import { Cell, Grid } from '@westpac/grid';
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';
import { CheckboxPrimitive } from '@arch-ui/controls';

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

const parseHeadings = content =>
	content.nodes
		.filter(
			item =>
				item.data.component &&
				(item.data.component === 'Heading' || item.data.component === 'VisionFilters')
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

// Intro section
const TableOfContents = ({ content }) => {
	const toc = parseHeadings(content);
	const { COLORS, SPACING } = useBrand();
	return (
		<div>
			<Heading tag="h2" size={6} style={{ fontWeight: '500' }}>
				{'Page content'}
			</Heading>

			<hr
				css={{ border: 'none', borderTop: `solid 1px ${COLORS.border}`, margin: `${SPACING(2)} 0` }}
			/>

			{toc.length ? (
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
						{toc}
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
	const { PACKS, LAYOUT, SPACING } = useBrand();
	return (
		<Fragment>
			<Grid css={{ marginTop: SPACING(12) }}>
				<Cell width={[12, 12, 12, 7]}>
					{description && description !== '' ? (
						<p
							css={{
								...PACKS.lead,
								marginTop: 0,
								lineHeight: 2,
								fontSize: '24px',
								[`@media (max-width: ${LAYOUT.breakpoints.sm}px)`]: {
									fontSize: '18px',
								},
							}}
						>
							{description}
						</p>
					) : null}
					{showPackageInfo && <PackageInfoTable item={item} />}
				</Cell>
				<Cell width={[0, 0, 0, 1]} />
				{showTableOfContents && (
					<Cell width={[12, 12, 12, 4]}>
						<TableOfContents content={_editorValue} />
					</Cell>
				)}
			</Grid>
			<hr
				css={{
					border: 'none',
					borderTop: `solid 1px #D7D2CB`,
					margin: `40px -1000px`, // full-bleed
					paddingBottom: '40px',
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
