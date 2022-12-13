/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment, useState } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import { DownloadIcon } from '@westpac/icon/DownloadIcon';
import * as symbols from '@westpac/symbol';
import { pluralize } from './_utils';

const renderSymbols = (symbols) => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	const foundText = `Found ${symbols.length} ${pluralize('symbol', symbols.length)}`;

	return (
		<Fragment>
			<Cell width={12}>
				<p
					aria-live="polite"
					id="filter-symbols-status"
					css={{ textAlign: 'right', color: COLORS.muted, fontStyle: 'italic', margin: 0 }}
				>
					{foundText}
				</p>
			</Cell>

			{symbols.map((symbol) => {
				const Symbol = symbol.symbol;
				return (
					<Cell
						width={[12, null, 6, 4]}
						css={{ '@media (min-width: 1337px)': { gridColumnEnd: 'span 3' }, display: 'flex' }}
						key={symbol.name}
					>
						<div
							css={mq({
								flexGrow: 1,
								alignItems: 'center',
								justifyContent: 'center',
								display: 'flex',
								flexDirection: 'column',
								background: '#fff',
								padding: '36px 0 18px',
								marginBottom: ['12px', '24px'],
							})}
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

const Symbol = () => {
	const mq = useMediaQuery();
	const { BRAND, COLORS, SPACING } = useBrand();

	const [search, setSearch] = useState('');

	const symbolDetails = [];
	for (let key in symbols) {
		if (/symbol$/i.test(key)) {
			symbolDetails.push({ name: key, symbol: symbols[key] });
		}
	}
	const symbolsFiltered = symbolDetails.filter((symbol) =>
		search.trim() === '' ? true : symbol.name.toLowerCase().includes(search.toLowerCase())
	);

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
									htmlFor="filter-symbols"
									css={mq({
										marginRight: '1rem',
										marginBottom: ['0.75rem', null, 0],
										whiteSpace: 'nowrap',
									})}
								>
									Filter by name
								</label>
								<TextInput
									id="filter-symbols"
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									aria-describedby="filter-symbols-status"
								/>
							</div>
						</Cell>
						<Cell width={[12, null, 6]}>
							<DownloadBtn qty={symbolsFiltered.length} total={symbolDetails} />
							<input type="hidden" name="brand" value={BRAND.code} />
							<input type="hidden" name="pkg" value="@westpac/symbol" />
						</Cell>
					</Grid>
				</div>
			</Cell>
			<Grid>{renderSymbols(symbolsFiltered)}</Grid>
		</form>
	);
};

export const Symbols = {
	component: Symbol,
};
