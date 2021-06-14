/** @jsx jsx */

import React, { useState, Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import * as symbols from '@westpac/symbol';
import { Button } from '@westpac/button';

const renderSymbols = (search) => {
	const symbolDetails = [];
	for (let key in symbols) {
		if (/symbol$/i.test(key)) {
			symbolDetails.push({ name: key, symbol: symbols[key] });
		}
	}
	const { COLORS } = useBrand();

	return symbolDetails
		.filter((symbol) =>
			search.trim() === '' ? true : symbol.name.toLowerCase().includes(search.toLowerCase())
		)
		.map((symbol) => {
			const Symbol = symbol.symbol;
			return (
				<Cell
					width={[12, null, 6, 4]}
					css={{ '@media (min-width: 1337px)': { gridColumnEnd: 'span 3' }, display: 'flex' }}
					key={symbol.name}
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
						<Symbol
							css={{
								flexGrow: 1,
								paddingBottom: '36px',
							}}
						/>
						<span css={{ fontSize: '0.6875rem', color: COLORS.muted }}>{symbol.name}</span>
						<input type="hidden" name="assets" value={symbol.name} />
					</div>
				</Cell>
			);
		});
};

const Symbol = () => {
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
									htmlFor={'filter-symbols'}
									css={mq({
										marginRight: '1rem',
										marginBottom: ['0.75rem', null, 0],
										whiteSpace: 'nowrap',
									})}
								>
									Filter by name
								</label>
								<TextInput
									id={'filter-symbols'}
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
							</div>
						</Cell>
						<Cell width={[12, null, 6]}>
							<Button type="submit">Download SVGs</Button>
							<input type="hidden" name="brand" value={BRAND.code} />
							<input type="hidden" name="pkg" value="@westpac/symbol" />
						</Cell>
					</Grid>
				</div>
			</Cell>
			<Grid>{renderSymbols(search)}</Grid>
		</form>
	);
};

export const Symbols = {
	component: Symbol,
};
