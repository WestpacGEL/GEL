import React from 'react';
import { InputGroup, TextInput, Button } from '../src';

export default () => (
	<>
		<h2>Small</h2>

		<InputGroup size="small">
			<TextInput />
			<Button>Go</Button>
		</InputGroup>

		<h2>Medium</h2>

		<InputGroup>
			<TextInput />
			<Button>Go</Button>
		</InputGroup>

		<h2>Large</h2>

		<InputGroup size="large">
			<TextInput />
			<Button>Go</Button>
		</InputGroup>

		<h2>Extra large</h2>

		<InputGroup size="xlarge">
			<TextInput />
			<Button>Go</Button>
		</InputGroup>
	</>
);
