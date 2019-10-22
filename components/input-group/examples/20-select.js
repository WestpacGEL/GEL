/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, TextInput } from '@westpac/input-group';

const options = ['Select', '1', '2', '3'];

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Small size</h2>

			<InputGroup size="small">
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
				<TextInput />
			</InputGroup>
			<br />
			<InputGroup size="small">
				<TextInput />
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
			</InputGroup>

			<h2>Medium size</h2>

			<InputGroup>
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
				<TextInput />
			</InputGroup>
			<br />
			<InputGroup>
				<TextInput />
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
			</InputGroup>

			<h2>Large size</h2>

			<InputGroup size="large">
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
				<TextInput />
			</InputGroup>
			<br />
			<InputGroup size="large">
				<TextInput />
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
			</InputGroup>

			<h2>Extra-large size</h2>

			<InputGroup size="xlarge">
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
				<TextInput />
			</InputGroup>
			<br />
			<InputGroup size="xlarge">
				<TextInput />
				<TextInput tag="select">
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
			</InputGroup>
		</GEL>
	);
}

export default Example;
