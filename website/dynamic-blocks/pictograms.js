/** @jsx jsx */

import React, { useState, Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { TextInput, Select } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import * as pictograms from '@westpac/pictogram';

const renderPictograms = (search, mode) => {
	const pictogramDetails = [];
	for (let key in pictograms) {
		// only show informative for now
		if (
			!key.startsWith('BOM') &&
			!key.startsWith('BSA') &&
			!key.startsWith('STG') &&
			!key.startsWith('WBC') &&
			!key.startsWith('WBG') &&
			!key.startsWith('RAMS')
		) {
			pictogramDetails.push({ name: key, pictogram: pictograms[key] });
		}
	}
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	const pictogramDetailsFiltered = pictogramDetails.filter((pictogram) =>
		search.trim() === '' ? true : pictogram.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<Fragment>
			<Cell width={12}>
				<p
					aria-live="true"
					id="filter-pictograms-status"
					css={{ textAlign: 'right', color: COLORS.muted, fontStyle: 'italic' }}
				>
					Found {pictogramDetailsFiltered.length}{' '}
					{pictogramDetailsFiltered.length === 1 ? 'pictogram' : 'pictograms'}
				</p>
			</Cell>

			{pictogramDetailsFiltered.map((pictogram) => {
				const Pictogram = pictogram.pictogram;
				return (
					<Cell
						width={[12, null, 6, 4]}
						css={{ '@media (min-width: 1337px)': { gridColumnEnd: 'span 3' }, display: 'flex' }}
						key={pictogram.name}
					>
						<div
							css={mq({
								flexGrow: 1,
								alignItems: 'center',
								justifyContent: 'center',
								display: 'flex',
								flexDirection: 'column',
								backgroundColor: mode === 'light' ? COLORS.hero : '#fff',
								padding: '36px 0 18px',
								marginBottom: ['12px', '24px'],
							})}
						>
							<Pictogram
								mode={mode}
								css={{
									flexGrow: 1,
									paddingBottom: '36px',
								}}
							/>
							<span
								css={{ fontSize: '0.6875rem', color: mode === 'light' ? '#fff' : COLORS.muted }}
							>
								{pictogram.name}
							</span>
						</div>
					</Cell>
				);
			})}
		</Fragment>
	);
};

const Pictogram = () => {
	const [search, setSearch] = useState('');
	const [mode, setMode] = useState('duo');
	const mq = useMediaQuery();
	const { COLORS, SPACING, BRAND } = useBrand();

	const handleModeChange = (event) => {
		setMode(event.target.value);
	};

	if (BRAND.code === 'WBG') {
		return (
			<Cell width={12}>
				<p
					css={{
						padding: SPACING(4),
						marginBottom: SPACING(4),
						backgroundColor: COLORS.light,
						textAlign: 'center',
					}}
				>{`Pictograms are not yet available for this brand`}</p>
			</Cell>
		);
	}

	return (
		<Fragment>
			<Cell width={12}>
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
									htmlFor={'filter-pictograms'}
									css={mq({
										marginRight: '1rem',
										marginBottom: ['0.75rem', null, 0],
										whiteSpace: 'nowrap',
									})}
								>
									Filter by name
								</label>
								<TextInput
									id={'filter-pictograms'}
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
							</div>
						</Cell>
						<Cell width={[12, null, 6]}>
							<div
								css={mq({
									display: 'flex',
									flexDirection: ['column', null, 'row'],
									alignItems: ['start', null, 'center'],
								})}
							>
								<label
									htmlFor={'pictogram-mode'}
									css={mq({
										marginRight: '1rem',
										marginBottom: ['0.75rem', null, 0],
										whiteSpace: 'nowrap',
									})}
								>
									Mode
								</label>
								<Select id={'pictogram-mode'} value={mode} onChange={handleModeChange} inline>
									<option value="duo">Duo</option>
									<option value="dark">Dark</option>
									<option value="light">Light</option>
								</Select>
							</div>
						</Cell>
					</Grid>
				</div>
			</Cell>
			{renderPictograms(search, mode)}
		</Fragment>
	);
};

export const Pictograms = {
	component: Pictogram,
};
