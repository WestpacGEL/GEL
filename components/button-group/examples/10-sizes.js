/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonGroup, Button } from '@westpac/button-group';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Small</h2>
			<ButtonGroup size="small" name="example-small">
				<Button value="left">Left</Button>
				<Button value="middle">Middle</Button>
				<Button value="right">Right</Button>
			</ButtonGroup>

			<hr />

			<h2>Medium</h2>
			<ButtonGroup size="medium" name="example-medium">
				<Button value="left">Left</Button>
				<Button value="middle">Middle</Button>
				<Button value="right">Right</Button>
			</ButtonGroup>

			<hr />

			<h2>Large</h2>
			<ButtonGroup size="large" name="example-large">
				<Button value="left">Left</Button>
				<Button value="middle">Middle</Button>
				<Button value="right">Right</Button>
			</ButtonGroup>

			<hr />

			<h2>Extra large</h2>
			<ButtonGroup size="xlarge" name="example-xlarge">
				<Button value="left">Left</Button>
				<Button value="middle">Middle</Button>
				<Button value="right">Right</Button>
			</ButtonGroup>
		</GEL>
	);
}

export default Example;
