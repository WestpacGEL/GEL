/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';
import { useState } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const [controlled, setControlled] = useState();
	const [value, setValue] = useState('');
	const [index, setIndex] = useState(-1);

	return (
		<GEL brand={brand}>
			<Intopia />
			<ButtonGroup name="group-1">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
			<h3>Data</h3>
			<ButtonGroup
				name="data-group"
				data={[
					{ children: 'Left', value: 'left' },
					{ children: 'Middle', value: 'middle' },
					{ children: 'Right', value: 'right' },
				]}
			/>
			<h2>Controlled</h2>
			<button type="button" onClick={() => setControlled('yes')}>
				Set to "yes"
			</button>{' '}
			<button type="button" onClick={() => setControlled('maybe')}>
				Set to "maybe"
			</button>{' '}
			<button type="button" onClick={() => setControlled('no')}>
				Set to "no"
			</button>{' '}
			<button type="button" onClick={() => setControlled('')}>
				reset
			</button>
			<br />
			<br />
			<ButtonGroup
				name="controlled"
				value={controlled}
				onChange={(event, v) => {
					console.log('controlled');
					event.preventDefault();
					setControlled(v);
				}}
			>
				<Item value="yes">Yes</Item>
				<Item value="maybe">Maybe</Item>
				<Item value="no">No</Item>
			</ButtonGroup>
			<h3>Index (integer)</h3>
			<ButtonGroup name="controlled-index" value={index} onChange={(e, v) => setIndex(v)}>
				<Item>Left</Item>
				<Item>Middle</Item>
				<Item>Right</Item>
			</ButtonGroup>
			<h3>Key (string)</h3>
			<ButtonGroup name="controlled-key" value={value} onChange={(e, v) => setValue(v)}>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
			<h2>Default Value</h2>
			<h3>Index (integer)</h3>
			<ButtonGroup defaultValue={0}>
				<Item>Left</Item>
				<Item>Middle</Item>
				<Item>Right</Item>
			</ButtonGroup>
			<h3>Key (string)</h3>
			<ButtonGroup defaultValue={'right'}>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
		</GEL>
	);
}

export default Example;
