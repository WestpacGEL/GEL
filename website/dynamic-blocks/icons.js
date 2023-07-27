import React, { Fragment, useState } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { TextInput, Select } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import { DownloadIcon } from '@westpac/icon/DownloadIcon';
import * as icons from '@westpac/icon';
import { pluralize } from './_utils';
import { BASE_URL } from '../src/config';

const renderIcons = (icons, look) => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	const foundText = `Found ${icons.length} ${pluralize('icon', icons.length)}`;

	return (
		<Fragment>
			<Cell width={12}>
				<p
					aria-live="polite"
					id="filter-icons-status"
					css={{
						textAlign: 'right',
						color: COLORS.muted,
						fontStyle: 'italic',
						margin: 0,
					}}
				>
					{foundText}
				</p>
			</Cell>

			{icons.map((icon) => {
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
								look={look}
								css={{
									paddingBottom: '36px',
								}}
							/>
							<span css={{ fontSize: '0.6875rem', color: COLORS.muted }}>{icon.name}</span>
							<input type="hidden" name="assets" value={icon.name} />
						</div>
					</Cell>
				);
			})}
		</Fragment>
	);
};

const DownloadBtn = ({ qty, total }) => {
	const downloadBtnText = `Download ${qty === total ? 'all' : qty} ${pluralize('SVG', qty)}`;

	return (
		<Button type="submit" look="primary" soft iconBefore={DownloadIcon}>
			{downloadBtnText}
		</Button>
	);
};

// ToDo: Elevate the brand in the AdminUI so it doesn't override website
const Icon = () => {
	const mq = useMediaQuery();
	const { BRAND, COLORS, SPACING } = useBrand();

	const [search, setSearch] = useState('');
	const [look, setLook] = useState('filled');

	const iconDetails = [];
	for (let key in icons) {
		iconDetails.push({ name: key, icon: icons[key] });
	}

	const iconsFiltered = iconDetails.filter((icon) =>
		search.trim() === '' ? true : icon.name.toLowerCase().includes(search.toLowerCase())
	);

	const handleLookChange = (event) => {
		setLook(event.target.value);
	};

	return (
		<div
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
								htmlFor="filter-icons"
								css={mq({
									marginRight: '1rem',
									marginBottom: ['0.75rem', null, 0],
									whiteSpace: 'nowrap',
								})}
							>
								Filter by name
							</label>
							<TextInput
								id="filter-icons"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								aria-describedby="filter-icons-status"
							/>
						</div>
					</Cell>
					<Cell width={[12, null, 3]}>
						<div
							css={mq({
								display: 'flex',
								flexDirection: ['column', null, 'row'],
								alignItems: ['start', null, 'center'],
							})}
						>
							<label
								htmlFor="icon-look"
								css={mq({
									marginRight: '1rem',
									marginBottom: ['0.75rem', null, 0],
									whiteSpace: 'nowrap',
								})}
							>
								Mode
							</label>
							<Select id="icon-look" name="look" value={look} onChange={handleLookChange} inline>
								<option value="filled">Filled</option>
								<option value="outlined">Outlined</option>
							</Select>
						</div>
					</Cell>
					<Cell width={[12, null, 3]}>
						<Button
							tag="a"
							href={`${BASE_URL}/icons/GEL_icons.zip`}
							download
							look="primary"
							soft
							iconBefore={DownloadIcon}
						>
							Download all SVGs
						</Button>
						{/* <DownloadBtn qty={iconsFiltered.length} total={iconDetails.length} /> */}
						<input type="hidden" name="brand" value={BRAND.code} />
						<input type="hidden" name="pkg" value="@westpac/icon" />
					</Cell>
				</Grid>
			</div>
			<Grid>{renderIcons(iconsFiltered, look)}</Grid>
		</div>
	);
};

export const Icons = {
	component: Icon,
};
