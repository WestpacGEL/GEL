/** @jsx jsx */
import React, { useState } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import * as icons from '@westpac/icon';

const renderIcons = (search) => {
	const iconDetails = [];
	for (let key in icons) {
		iconDetails.push({ name: key, icon: icons[key] });
	}
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	return iconDetails
		.filter((icon) =>
			search.trim() === '' ? true : icon.name.toLowerCase().includes(search.toLowerCase())
		)
		.map((icon) => {
			const Icon = icon.icon;
			return (
				<Cell
					width={[12, null, 3]}
					css={{ '@media (min-width: 1337px)': { gridColumnEnd: 'span 2' } }}
					key={icon.name}
				>
					<div
						css={mq({
							alignItems: 'center',
							justifyContent: 'center',
							display: 'flex',
							flexDirection: 'column',
							background: '#fff',
							padding: '36px 12px 18px',
							marginBottom: ['12px', '24px'],
						})}
					>
						<Icon
							css={{
								paddingBottom: '36px',
							}}
						/>
						<span css={{ fontSize: '0.6875rem', color: COLORS.muted }}>{icon.name}</span>
						<input type="hidden" name="assets" value={icon.name} />
					</div>
				</Cell>
			);
		});
};

// ToDo: Elevate the brand in the AdminUI so it doesn't override website
const Icon = () => {
	const [search, setSearch] = useState('');
	const mq = useMediaQuery();
	const { BRAND, COLORS, SPACING } = useBrand();

	return (
		<form
			action="/api/svg"
			method="POST"
			css={{
				gridColumnEnd: 'span 12',
				gridRowEnd: 'span 1',
			}}
		>
			<div css={{ padding: SPACING(4), marginBottom: SPACING(4), backgroundColor: COLORS.light }}>
				<Grid>
					<Cell width={[12, null, 6]}>
						<div
							css={mq({
								display: 'flex',
								flexDirection: ['column', null, 'row'],
								alignItems: ['start', null, 'center'],
							})}
						>
							<label
								htmlFor={'filter-icons'}
								css={mq({
									marginRight: '1rem',
									marginBottom: ['0.75rem', null, 0],
									whiteSpace: 'nowrap',
								})}
							>
								Filter by name
							</label>
							<TextInput
								id={'filter-icons'}
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</div>
					</Cell>
					<Cell width={[12, null, 6]}>
						<Button type="submit">Download SVGs</Button>
						<input type="hidden" name="brand" value={BRAND.code} />
						<input type="hidden" name="pkg" value="@westpac/icon" />
					</Cell>
				</Grid>
			</div>
			<Grid>{renderIcons(search)}</Grid>
		</form>
	);
};

export const Icons = {
	component: Icon,
};
