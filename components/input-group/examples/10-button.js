import React from 'react';
import { InputGroup, TextInput, Button } from '../src';

export default () => (
	<>
		<h2>Small size</h2>
		<p>
			<InputGroup size="small">
				<TextInput />
				<Button appearance="hero">Go</Button>
			</InputGroup>
		</p>

		<h2>Medium size</h2>
		<p>
			<InputGroup>
				<TextInput />
				<Button appearance="hero">Go</Button>
			</InputGroup>
		</p>

		<h2>Large size</h2>
		<p>
			<InputGroup size="large">
				<TextInput />
				<Button appearance="hero">Go</Button>
			</InputGroup>
		</p>

		<h2>Extra-large size</h2>
		<p>
			<InputGroup size="xlarge">
				<TextInput />
				<Button appearance="hero">Go</Button>
			</InputGroup>
		</p>
	</>
);
