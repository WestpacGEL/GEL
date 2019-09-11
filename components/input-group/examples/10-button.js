import React from 'react';
import { InputGroup, InputGroupAddon } from '../src';
import { Button } from '@westpac/button';
import { TextInput } from '@westpac/text-input';

export default () => (
	<>
		<h2>Small size</h2>
		<p>
			<InputGroup size="small" appearance="hero">
				<TextInput />
				<Button>Go</Button>
			</InputGroup>
		</p>

		<h2>Medium size</h2>
		<p>
			<InputGroup appearance="hero">
				<TextInput />
				<Button>Go</Button>
			</InputGroup>
		</p>

		<h2>Large size</h2>
		<p>
			<InputGroup size="large" appearance="hero">
				<TextInput />
				<Button>Go</Button>
			</InputGroup>
		</p>

		<h2>Extra-large size</h2>
		<p>
			<InputGroup size="xlarge" appearance="hero">
				<TextInput />
				<Button>Go</Button>
			</InputGroup>
		</p>
	</>
);
