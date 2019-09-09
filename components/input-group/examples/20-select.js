import React from 'react';
import { InputGroup, InputGroupAddon } from '../src';
import { Button } from '../../button/src';
import { TextInput } from '../../text-input/src';

const options = ['Select', '1', '2', '3'];

export default () => (
	<>
		<h2>Small size</h2>
		<p>
			<InputGroup size="small">
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
				<TextInput />
			</InputGroup>
		</p>

		<p>
			<InputGroup size="small">
				<TextInput />
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
			</InputGroup>
		</p>

		<h2>Medium size</h2>
		<p>
			<InputGroup>
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
				<TextInput />
			</InputGroup>
		</p>

		<p>
			<InputGroup>
				<TextInput />
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
			</InputGroup>
		</p>

		<h2>Large size</h2>
		<p>
			<InputGroup size="large">
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
				<TextInput />
			</InputGroup>
		</p>

		<p>
			<InputGroup size="large">
				<TextInput />
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
			</InputGroup>
		</p>

		<h2>Extra-large size</h2>
		<p>
			<InputGroup size="xlarge">
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
				<TextInput />
			</InputGroup>
		</p>
		<p>
			<InputGroup size="xlarge">
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
