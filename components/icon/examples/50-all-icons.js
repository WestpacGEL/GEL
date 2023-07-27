import { GEL, jsx, useBrand } from '@westpac/core';
import * as components from '@westpac/icon';
import { Select } from '@westpac/text-input';
import { Cell, Grid, Name } from './_util';
import { useState } from 'react';

// can't believe this works...
const icons = Object.keys(components);

const Search = (props) => (
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

function Example({ brand }) {
	const [inputValue, setInputValue] = useState('');
	const [look, setLook] = useState('filled');
	const filteredIcons = inputValue.length
		? icons.filter((p) =>
				p
					.slice(0, p.length - 4)
					.toLowerCase()
					.includes(inputValue.toLowerCase())
		  )
		: icons;

	const handleChange = (event) => {
		setLook(event.target.value);
	};

	return (
		<GEL brand={brand}>
			<p>Icon count: {icons.length}</p>
			<div css={{ display: 'flex' }}>
				<Search
					autoFocus
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="Search..."
					type="search"
					value={inputValue}
				/>
				<Select name="look" value={look} onChange={handleChange} width={10}>
					<option value="filled">Filled</option>
					<option value="outlined">Outlined</option>
				</Select>
			</div>
			<Grid>
				{filteredIcons.map((icon) => {
					const Icon = components[icon];
					return (
						<Cell key={icon}>
							<Icon look={look} />
							<Name>
								<code>{`<${icon}\u00A0/>`}</code>
							</Name>
						</Cell>
					);
				})}
			</Grid>
		</GEL>
	);
}

export default Example;
