import React from 'react';
import { InputGroup, Addon } from '../src';
import { TextInput } from '@westpac/text-input';
import { Form } from '@westpac/form';

export default () => (
	<>
		<h2>Size from a Form component - Small</h2>
		<Form size="small">
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</Form>

		<h2>Size from a Form component - Medium</h2>
		<Form>
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</Form>

		<h2>Size from a Form component - Large</h2>
		<Form size="large">
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</Form>

		<h2>Size from a Form component - Extra-large</h2>
		<Form size="xlarge">
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</Form>
	</>
);
