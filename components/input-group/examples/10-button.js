/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, TextInput, Button } from '@westpac/input-group';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Small size</h2>
			<InputGroup size="small">
				<TextInput />
				<Button>Go</Button>
			</InputGroup>

			<h2>Medium size</h2>
			<InputGroup>
				<TextInput />
				<Button>Go</Button>
			</InputGroup>

			<h2>Large size</h2>
			<InputGroup size="large">
				<TextInput />
				<Button>Go</Button>
			</InputGroup>

			<h2>Extra-large size</h2>
			<InputGroup size="xlarge">
				<TextInput />
				<Button>Go</Button>
			</InputGroup>
		</GEL>
	);
}

export default Example;
