/** @jsx jsx */

import React, { useState, Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import * as symbols from '@westpac/symbol';

const renderSymbols = (search) => {
	const symbolDetails = [];
	for (let key in symbols) {
		symbolDetails.push({ name: key, symbol: symbols[key] });
	}
	const { COLORS } = useBrand();

	return symbolDetails
		.filter((symbol) =>
			search.trim() === '' ? true : symbol.name.toLowerCase().includes(search.toLowerCase())
		)
		.map((symbol) => {
			const Symbol = symbol.symbol;
			return (
				<Cell width={[12, 12, 6, 4, 3]} css={{ display: 'flex' }}>
					<div
						key={symbol.name}
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
					</div>
				</Cell>
			);
		});
};

const Symbol = () => {
	const [search, setSearch] = useState('');
	const mq = useMediaQuery();
	return (
		<Fragment>
			<Cell width={12}>
				<Grid>
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
								htmlFor={'filter-symbols'}
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
							<TextInput id={'filter-symbols'} />
						</div>
					</Cell>
				</Grid>
			</Cell>
			{renderSymbols(search)}
		</Fragment>
	);
};

export const Symbols = {
	component: Symbol,
};
