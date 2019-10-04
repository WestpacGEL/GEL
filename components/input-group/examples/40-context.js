import React from 'react';
import { InputGroup, Addon, TextInput } from '../src';
import { Form } from '@westpac/form';

export default () => (
	<>
		<h2>Set size via Form parent</h2>

		<h3>Small</h3>
		<Form size="small">
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</Form>

		<h3>Medium</h3>
		<Form size="medium">
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</Form>

		<h3>Large</h3>
		<Form size="large">
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</Form>

		<h3>Extra large</h3>
		<Form size="xlarge">
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
		</Form>
	</>
);
