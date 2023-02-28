import { jsx } from '@westpac/core';
import { useState } from 'react';
import { Button } from '@westpac/button';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	const [controlled, setControlled] = useState();
	const [value, setValue] = useState('');
	const [index, setIndex] = useState(-1);
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Controlled</Title>
			<div>
				<Button type="button" onClick={() => setControlled('yes')} size="small">
					Set to "yes"
				</Button>{' '}
				<Button type="button" onClick={() => setControlled('maybe')} size="small">
					Set to "maybe"
				</Button>{' '}
				<Button type="button" onClick={() => setControlled('no')} size="small">
					Set to "no"
				</Button>{' '}
				<Button type="button" onClick={() => setControlled('')} size="small">
					reset
				</Button>
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

			<Title>Index (integer) value</Title>
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

			<Title>Key (string) value with default value</Title>
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
		</Playground>
	);
};

export default Demo;
