import React from 'react';
import { InputGroup, InputGroupAddon } from '../src';
import { Button } from '@westpac/button';
import { TextInput } from '@westpac/text-input';
import { Form } from '@westpac/form';

export default () => (
	<>
		<h2>Size from a Form component - Small</h2>
		<Form size="small">
			<InputGroup>
				<InputGroupAddon>AUS $</InputGroupAddon>
				<TextInput />
			</InputGroup>
		</Form>

		<h2>Size from a Form component - Medium</h2>
		<Form>
			<InputGroup>
				<InputGroupAddon>AUS $</InputGroupAddon>
				<TextInput />
			</InputGroup>
		</Form>

		<h2>Size from a Form component - Large</h2>
		<Form size="large">
			<InputGroup>
				<InputGroupAddon>AUS $</InputGroupAddon>
				<TextInput />
			</InputGroup>
		</Form>

		<h2>Size from a Form component - Extra-large</h2>
		<Form size="xlarge">
			<InputGroup>
				<InputGroupAddon>AUS $</InputGroupAddon>
				<TextInput />
			</InputGroup>
		</Form>
	</>
);
