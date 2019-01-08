import React, { useState } from 'react';
import { styled } from '@westpac/core';

import * as components from '../src';

// can't believe this works...
const icons = Object.keys(components);

const Grid = styled.div({
	display: 'grid',
	gridAutoFlow: 'row',
	gridAutoRows: 'minmax(80px,auto)',
	gridGap: 8,
	gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
});
const Cell = styled.div({
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
});
const Name = styled.div({
	fontSize: 12,
	marginTop: 12,
});
const Search = styled.input({
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
});

export default () => {
	const [inputValue, setInputValue] = useState('');
	const filteredIcons = inputValue.length
		? icons.filter(p => p.toLowerCase().includes(inputValue.toLowerCase()))
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
