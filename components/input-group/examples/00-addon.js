/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, Addon, TextInput } from '@westpac/input-group';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Small size</h2>

			<InputGroup size="small">
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
			<br />
			<InputGroup size="small">
				<TextInput />
				<Addon>AUS $</Addon>
			</InputGroup>

			<h2>Medium size</h2>

			<InputGroup>
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
			<br />
			<InputGroup>
				<TextInput />
				<Addon>AUS $</Addon>
			</InputGroup>

			<h2>Large size</h2>

			<InputGroup size="large">
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
			<br />
			<InputGroup size="large">
				<TextInput />
				<Addon>AUS $</Addon>
			</InputGroup>

			<h2>Extra-large size</h2>

			<InputGroup size="xlarge">
				<Addon>AUS $</Addon>
				<TextInput />
			</InputGroup>
			<br />
			<InputGroup size="xlarge">
				<TextInput />
				<Addon>AUS $</Addon>
			</InputGroup>
		</GEL>
	);
}

export default Example;
