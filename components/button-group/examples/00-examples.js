import { GEL, jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';
import { useState } from 'react';

function Example({ brand }) {
	const [controlled, setControlled] = useState();
	const [value, setValue] = useState('');
	const [index, setIndex] = useState(-1);

	return (
		<GEL brand={brand}>
			<h2>Composition</h2>
			<h3>Composed</h3>
			<ButtonGroup data-cy="test-btn-grp" name="example-composed">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
			<h3>Data-driven</h3>
			<ButtonGroup
				name="example-data-driven"
				data={[
					{ text: 'Left', value: 'left' },
					{ text: 'Middle', value: 'middle' },
					{ text: 'Right', value: 'right' },
				]}
			/>

			<hr />

			<h2>Default Value</h2>
			<h3>Index (integer)</h3>
			<ButtonGroup name="example-defaultvalue-index" defaultValue={0}>
				<Item>Left</Item>
				<Item>Middle</Item>
				<Item>Right</Item>
			</ButtonGroup>
			<h3>Key (string)</h3>
			<ButtonGroup name="example-defaultvalue-key" defaultValue={'right'}>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<hr />

			<h2>Custom onChange</h2>

			<h3>Controlled</h3>
			<div>
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
			</div>
			<br />
			<ButtonGroup
				name="example-controlled"
				value={controlled}
				onChange={(e, v) => {
					console.log(`controlled: ${v}`);
					e.preventDefault();
					setControlled(v);
				}}
			>
				<Item value="yes">Yes</Item>
				<Item value="maybe">Maybe</Item>
				<Item value="no">No</Item>
			</ButtonGroup>

			<h3>Index (integer) value</h3>
			<ButtonGroup
				name="example-custom-index"
				value={index}
				onChange={(e, v) => {
					console.log(`custom-index: ${v}`);
					setIndex(v);
				}}
			>
				<Item>Left</Item>
				<Item>Middle</Item>
				<Item>Right</Item>
			</ButtonGroup>

			<h3>Key (string) value with default value</h3>
			<ButtonGroup
				name="example-custom-key"
				defaultValue="left"
				value={value}
				onChange={(e, v) => {
					console.log(`custom-key: ${v}`);
					setValue(v);
				}}
			>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
		</GEL>
	);
}

export default Example;
