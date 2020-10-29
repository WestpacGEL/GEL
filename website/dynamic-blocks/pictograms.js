/** @jsx jsx */

import React, { useState, Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import * as pictograms from '@westpac/pictogram';

const renderPictograms = (search) => {
	const pictogramDetails = [];
	for (let key in pictograms) {
		pictogramDetails.push({ name: key, pictogram: pictograms[key] });
	}
	const { COLORS } = useBrand();

	return pictogramDetails
		.filter((pictogram) =>
			search.trim() === '' ? true : pictogram.name.toLowerCase().includes(search.toLowerCase())
		)
		.map((pictogram) => {
			const Pictogram = pictogram.pictogram;
			return (
				<Cell
					width={[12, null, 6, 4]}
					css={{ '@media (min-width: 1337px)': { gridColumnEnd: 'span 3' }, display: 'flex' }}
					key={pictogram.name}
				>
					<div
						css={{
							flexGrow: 1,
							alignItems: 'center',
							justifyContent: 'center',
							display: 'flex',
							flexDirection: 'column',
							background: '#fff',
							padding: '36px 0 18px',
							marginBottom: ['12px', '24px'],
						}}
					>
						<Pictogram
							css={{
								flexGrow: 1,
								paddingBottom: '36px',
							}}
						/>
						<span css={{ fontSize: '0.6875rem', color: COLORS.muted }}>{pictogram.name}</span>
					</div>
				</Cell>
			);
		});
};

const Pictogram = () => {
	const [search, setSearch] = useState('');
	const mq = useMediaQuery();
	const { COLORS, SPACING } = useBrand();

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
					</Grid>
				</div>
			</Cell>
			{renderPictograms(search)}
		</Fragment>
	);
};

export const Pictograms = {
	component: Pictogram,
};