import React from 'react';
import { InputGroup, Addon } from '../src';
import { TextInput } from '@westpac/text-input';

export default () => (
	<>
		<h2>Small size</h2>
		<p>
			<InputGroup size="small">
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</p>

		<p>
			<InputGroup size="small">
				<TextInput />
				<Addon>AUS $</Addon>
			</InputGroup>
		</p>

		<h2>Medium size</h2>
		<p>
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</p>

		<p>
			<InputGroup>
				<TextInput />
				<Addon>AUS $</Addon>
			</InputGroup>
		</p>

		<h2>Large size</h2>
		<p>
			<InputGroup size="large">
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</p>

		<p>
			<InputGroup size="large">
				<TextInput />
				<Addon>AUS $</Addon>
			</InputGroup>
		</p>

		<h2>Extra-large size</h2>
		<p>
			<InputGroup size="xlarge">
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</p>
		<p>
			<InputGroup size="xlarge">
				<TextInput />
				<Addon>AUS $</Addon>
			</InputGroup>
		</p>
	</>
);
