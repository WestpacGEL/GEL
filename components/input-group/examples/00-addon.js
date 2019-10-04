import React from 'react';
import { InputGroup, Addon, TextInput } from '../src';

export default () => (
	<>
		<h2>Small size</h2>

		<InputGroup size="small">
			<Addon>AUS $</Addon>
			<TextInput />
		</InputGroup>
		<br />
		<InputGroup size="small">
			<TextInput />
			<Addon>AUS $</Addon>
		</InputGroup>

		<h2>Medium size</h2>

		<InputGroup>
			<Addon>AUS $</Addon>
			<TextInput />
		</InputGroup>
		<br />
		<InputGroup>
			<TextInput />
			<Addon>AUS $</Addon>
		</InputGroup>

		<h2>Large size</h2>

		<InputGroup size="large">
			<Addon>AUS $</Addon>
			<TextInput />
		</InputGroup>
		<br />
		<InputGroup size="large">
			<TextInput />
			<Addon>AUS $</Addon>
		</InputGroup>

		<h2>Extra-large size</h2>

		<InputGroup size="xlarge">
			<Addon>AUS $</Addon>
			<TextInput />
		</InputGroup>
		<br />
		<InputGroup size="xlarge">
			<TextInput />
			<Addon>AUS $</Addon>
		</InputGroup>
	</>
);
