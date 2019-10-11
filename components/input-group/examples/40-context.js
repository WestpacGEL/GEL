import React from 'react';
import { InputGroup, Addon } from '../src';
import { TextInput } from '@westpac/text-input';
import { Form } from '@westpac/form';
import { Button } from '@westpac/button';

const options = ['Select', '1', '2', '3'];

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
				<Button>Go</Button>
			</InputGroup>
		</Form>

		<h2>Size from a Form component - Extra-large</h2>
		<Form size="xlarge">
			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
			</InputGroup>
		</Form>
	</>
);
