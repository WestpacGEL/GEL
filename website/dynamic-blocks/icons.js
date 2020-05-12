/** @jsx jsx */
import React, { useState } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import * as icons from '@westpac/icon';
import { Container, Grid, Cell } from '@westpac/grid';
import { blocksContainerStyle, blocksGridStyle } from '../src/components/_utils';

const renderIcons = (search) => {
	const iconDetails = [];
	for (let key in icons) {
		iconDetails.push({ name: key, icon: icons[key] });
	}
	const { COLORS, SPACING } = useBrand();

	return iconDetails
		.filter((icon) =>
			search.trim() === '' ? true : icon.name.toLowerCase().includes(search.toLowerCase())
		)
		.map((icon) => {
			const Icon = icon.icon;
			return (
				<Cell width={[12, 12, 3, 3, 2]}>
					<div
						key={icon.name}
						css={{
							alignItems: 'center',
							justifyContent: 'center',
							display: 'flex',
							flexDirection: 'column',
							background: '#fff',
							border: `solid 1px ${COLORS.background}`,
							padding: `${(SPACING(3), SPACING(2))}`,
						}}
					>
						<Icon
							css={{
								padding: SPACING(6),
							}}
						/>
						<span css={{ fontSize: '0.6875rem' }}>{icon.name}</span>
					</div>
				</Cell>
			);
		});
};

// ToDo: Elevate the brand in the AdminUI so it doesn't override website
const Icon = () => {
	const [search, setSearch] = useState('');
	const mq = useMediaQuery();
	return (
		<div>
			<Container fluid css={blocksContainerStyle}>
				<Grid columns={12}>
					<Cell width={[12, 12, 6]}>
						<div
							css={mq({
								display: 'flex',
								flexDirection: ['column', null, 'row'],
								alignItems: ['start', null, 'center'],
								margin: '1.5rem 0 0.75rem',
							})}
						>
							<label
								htmlFor={'filter-icons'}
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								css={mq({
									marginRight: '1rem',
									marginBottom: ['0.75rem', null, 0],
									whiteSpace: 'nowrap',
								})}
							>
								Filter by name
							</label>
							<TextInput />
						</div>
					</Cell>
				</Grid>
				<Grid columns={12}>{renderIcons(search)}</Grid>
			</Container>
		</div>
	);
};

export const Icons = {
	component: Icon,
};
