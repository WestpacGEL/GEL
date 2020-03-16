/** @jsx jsx */
import React, { Fragment, useEffect, useState } from 'react'; // Needed for within Keystone
import { jsx, useBrand } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';
import { Heading } from '@westpac/heading';
import { Item, List } from '@westpac/list';
import { Cell, Grid } from '@westpac/grid';
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';
import { CheckboxPrimitive } from '@arch-ui/controls';

// Intro section
const TableOfContents = () => {
	const { COLORS, SPACING } = useBrand();
	const headings = document.querySelectorAll('h2').forEach((h, i) => {
		const htmlID = h.id || 'toc-heading-' + i;
		h.id = htmlID;
		return <a href={`#${htmlID}`}>{h.innerText}</a>;
	});

	return (
		<Fragment>
			<Heading tag="h2" size={6}>
				{'Page content'}
			</Heading>

			<hr
				css={{ border: 'none', borderTop: `solid 1px ${COLORS.border}`, margin: `${SPACING(2)} 0` }}
			/>

			{headings && <nav>{headings}</nav>}
		</Fragment>
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
					<td>View Changes</td>
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

const Component = ({ description, showTableOfContents, showPackageInfo, item }) => {
	const { PACKS } = useBrand();

	return (
		<Fragment>
			<Grid>
				<Cell width={7}>
					{description && description !== '' ? (
						<p css={{ ...PACKS.lead, marginTop: 0 }}>{description}</p>
					) : null}
					{showPackageInfo && <PackageInfoTable item={item} />}
				</Cell>
				<Cell width={1} />
				{showTableOfContents && (
					<Cell width={4}>
						<TableOfContents />
					</Cell>
				)}
			</Grid>
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
			<>
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
			</>
		);
	},
	component: Component,
};
