/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@westpac/core';

import * as components from '../src';
import { Cell, Grid, Name } from './_util';

// can't believe this works...
const icons = Object.keys(components);
const lcase = s => s.toLowerCase();

const Search = props => (
	<input
		css={{
			border: 0,
			borderBottom: '3px solid #EBECF0',
			boxSizing: 'border-box',
			fontSize: 24,
			marginBottom: 24,
			outline: 0,
			paddingBottom: 12,
			paddingTop: 12,
			width: '100%',

			':focus': {
				borderBottomColor: '#C1C7D0',
			},
		}}
		{...props}
	/>
);

export default () => {
	const [inputValue, setInputValue] = useState('');
	const filteredIcons = inputValue.length
		? icons.filter(p => lcase(p.slice(0, p.length - 4)).includes(lcase(inputValue)))
		: icons;

	return (
		<>
			<Search
				autoFocus
				onChange={e => setInputValue(e.target.value)}
				placeholder="Search..."
				type="search"
				value={inputValue}
			/>
			<Grid>
				{filteredIcons.map(s => {
					const Icon = components[s];
					return (
						<Cell key={s}>
							<Icon />
							<Name>{s}</Name>
						</Cell>
					);
				})}
			</Grid>
		</>
	);
};
