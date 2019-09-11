import React from 'react';
import { InputGroup, InputGroupAddon } from '../src';
import { TextInput } from '@westpac/text-input';

export default () => (
	<>
		<h2>Small size</h2>
		<p>
			<InputGroup size="small">
				<InputGroupAddon>AUS $</InputGroupAddon>
				<TextInput />
			</InputGroup>
		</p>

		<p>
			<InputGroup size="small">
				<TextInput />
				<InputGroupAddon>AUS $</InputGroupAddon>
			</InputGroup>
		</p>

		<h2>Medium size</h2>
		<p>
			<InputGroup>
				<InputGroupAddon>AUS $</InputGroupAddon>
				<TextInput />
			</InputGroup>
		</p>

		<p>
			<InputGroup>
				<TextInput />
				<InputGroupAddon>AUS $</InputGroupAddon>
			</InputGroup>
		</p>

		<h2>Large size</h2>
		<p>
			<InputGroup size="large">
				<InputGroupAddon>AUS $</InputGroupAddon>
				<TextInput />
			</InputGroup>
		</p>

		<p>
			<InputGroup size="large">
				<TextInput />
				<InputGroupAddon>AUS $</InputGroupAddon>
			</InputGroup>
		</p>

		<h2>Extra-large size</h2>
		<p>
			<InputGroup size="xlarge">
				<InputGroupAddon>AUS $</InputGroupAddon>
				<TextInput />
			</InputGroup>
		</p>
		<p>
			<InputGroup size="xlarge">
				<TextInput />
				<InputGroupAddon>AUS $</InputGroupAddon>
			</InputGroup>
		</p>
	</>
);
