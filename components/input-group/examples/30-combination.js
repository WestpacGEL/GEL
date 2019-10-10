import React from 'react';
import { InputGroup, Addon } from '../src';
import { Button } from '@westpac/button';
import { TextInput } from '@westpac/text-input';

const options = ['Select', '1', '2', '3'];

export default () => (
	<>
		<h2>Add-ons</h2>
		<p>
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
				<Addon>.00</Addon>
			</InputGroup>
		</p>

		<h2>Add-on + button</h2>
		<p>
			<InputGroup appearance="hero">
				<Addon>AUS $</Addon>
				<TextInput />
				<Button>Go</Button>
			</InputGroup>
		</p>

		<h2>Add-on + select</h2>
		<p>
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
			</InputGroup>
		</p>
	</>
);
