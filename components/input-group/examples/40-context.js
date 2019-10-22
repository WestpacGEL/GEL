/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, Addon, TextInput } from '@westpac/input-group';
import { Form } from '@westpac/form';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
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
		</GEL>
	);
}

export default Example;
