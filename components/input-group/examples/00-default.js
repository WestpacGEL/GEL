import React from 'react';
import { InputGroup, InputGroupAddon } from '../src';
import { Button } from '../../button/src';
import { TextInput } from '../../text-input/src';

const options = ['Select', '1', '2', '3'];

export default () => (
	<>
		<h2>Small size</h2>
		<h3>Add-on</h3>
		<InputGroup size="small">
			<InputGroupAddon>AUS $</InputGroupAddon>
			<TextInput />
		</InputGroup>

		<hr />

		<InputGroup size="small">
			<TextInput />
			<InputGroupAddon>AUS $</InputGroupAddon>
		</InputGroup>

		<h3>Button</h3>
		<InputGroup size="small" appearance="hero">
			<TextInput />
			<Button>Go</Button>
		</InputGroup>

		<hr />

		<InputGroup size="small" appearance="hero">
			<Button>Go</Button>
			<TextInput />
		</InputGroup>

		<h3>Select</h3>
		<InputGroup size="small">
			<TextInput />
			<TextInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</TextInput>
		</InputGroup>

		<hr />

		<InputGroup size="small">
			<TextInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</TextInput>
			<TextInput />
		</InputGroup>

		<h3>2 elements</h3>
		<InputGroup size="small">
			<InputGroupAddon>AUS $</InputGroupAddon>
			<TextInput />
			<InputGroupAddon>.00</InputGroupAddon>
		</InputGroup>

		<hr />

		<InputGroup size="small" appearance="hero">
			<InputGroupAddon>AUS $</InputGroupAddon>
			<TextInput />
			<Button>Go</Button>
		</InputGroup>

		<h2>Medium size</h2>
		<h3>Add-on</h3>
		<InputGroup>
			<InputGroupAddon>AUS $</InputGroupAddon>
			<TextInput />
		</InputGroup>

		<h3>Button</h3>
		<InputGroup appearance="hero">
			<TextInput />
			<Button>Go</Button>
		</InputGroup>

		<h3>Select</h3>
		<InputGroup>
			<TextInput />
			<TextInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</TextInput>
		</InputGroup>

		<h3>2 elements</h3>
		<InputGroup>
			<InputGroupAddon>AUS $</InputGroupAddon>
			<TextInput />
			<InputGroupAddon>.00</InputGroupAddon>
		</InputGroup>

		<h2>Large size</h2>
		<h3>Add-on</h3>
		<InputGroup size="large">
			<InputGroupAddon>AUS $</InputGroupAddon>
			<TextInput />
		</InputGroup>

		<h3>Button</h3>
		<InputGroup size="large" appearance="hero">
			<TextInput />
			<Button>Go</Button>
		</InputGroup>

		<h3>Select</h3>
		<InputGroup size="large">
			<TextInput />
			<TextInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</TextInput>
		</InputGroup>

		<h3>2 elements</h3>
		<InputGroup size="large">
			<InputGroupAddon>AUS $</InputGroupAddon>
			<TextInput />
			<InputGroupAddon>.00</InputGroupAddon>
		</InputGroup>

		<h2>Extra-large size</h2>
		<h3>Add-on</h3>
		<InputGroup size="xlarge">
			<InputGroupAddon>AUS $</InputGroupAddon>
			<TextInput />
		</InputGroup>

		<h3>Button</h3>
		<InputGroup size="xlarge" appearance="hero">
			<TextInput />
			<Button>Go</Button>
		</InputGroup>

		<h3>Select</h3>
		<InputGroup size="xlarge">
			<TextInput />
			<TextInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</TextInput>
		</InputGroup>

		<h3>2 elements</h3>
		<InputGroup size="xlarge">
			<InputGroupAddon>AUS $</InputGroupAddon>
			<TextInput />
			<InputGroupAddon>.00</InputGroupAddon>
		</InputGroup>
	</>
);
