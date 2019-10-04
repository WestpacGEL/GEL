import React from 'react';
import { InputGroup, Addon, TextInput, Button } from '../src';

const options = ['Select', '1', '2', '3'];

export default () => (
	<>
		<h2>Add-ons</h2>

		<InputGroup>
			<Addon>AUS $</Addon>
			<TextInput />
			<Addon>.00</Addon>
		</InputGroup>

		<h2>Add-on + button</h2>

		<InputGroup appearance="hero">
			<Addon>AUS $</Addon>
			<TextInput />
			<Button>Go</Button>
		</InputGroup>

		<h2>Add-on + select</h2>

		<InputGroup>
			<Addon>AUS $</Addon>
			<TextInput />
			<TextInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</TextInput>
		</InputGroup>
	</>
);
