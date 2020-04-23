/** @jsx jsx */
import React, { useState } from 'react'; // Needed for within Keystone
import { jsx, useBrand } from '@westpac/core';
import * as icons from '@westpac/icon';
import { FieldContainer, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';
import { Container, Grid, Cell } from '@westpac/grid';
import { blocksContainerStyle, blocksGridStyle } from '../src/components/_utils';

const renderIcons = search => {
	const iconDetails = [];
	for (let key in icons) {
		iconDetails.push({ name: key, icon: icons[key] });
	}
	const { COLORS } = useBrand();

	return iconDetails
		.filter(icon =>
			search.trim() === '' ? true : icon.name.toLowerCase().includes(search.toLowerCase())
		)
		.map(icon => {
			const Icon = icon.icon;
			return (
				<Cell width={[6, 4, 4, 3]}>
					<div
						key={icon.name}
						css={{
							alignItems: 'center',
							justifyContent: 'center',
							display: 'flex',
							flexDirection: 'column',
							background: '#fff',
							border: `solid 1px ${COLORS.background}`,
							padding: '20px 10px',
						}}
					>
						<Icon
							css={{
								width: 40,
								height: 40,
								padding: 5,
							}}
						/>
						<span css={{ fontSize: '0.75rem', marginTop: 5 }}>{icon.name}</span>
					</div>
				</Cell>
			);
		});
};
// ToDo: Elevate the brand in the AdminUI so it doesn't override website
const Icon = () => {
	const [search, setSearch] = useState('');
	return (
		<Container css={blocksContainerStyle}>
			<Grid columns={12} css={blocksGridStyle}>
				<Cell width={[12, 12, 6, 6, 6]}>
					<FieldContainer>
						<FieldInput css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<label htmlFor={'filter-icons'} css={{ minWidth: 120 }}>
								Filter by name
							</label>
							<input
								css={inputStyles}
								type="text"
								id="filter-icons"
								value={search}
								onChange={e => {
									setSearch(e.target.value);
								}}
							/>
						</FieldInput>
					</FieldContainer>
				</Cell>
			</Grid>
			<Grid columns={12} css={blocksGridStyle}>
				{renderIcons(search)}
			</Grid>
		</Container>
	);
};

export const Icons = {
	component: Icon,
};
