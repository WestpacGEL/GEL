/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Button, ButtonGroup } from '@westpac/button';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<ButtonGroup>
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>

			<h2>Block</h2>

			<ButtonGroup block>
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>

			<h2>Default Selected (index)</h2>

			<ButtonGroup defaultSelected={1}>
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>

			<h2>Look</h2>

			<h3>Primary</h3>
			<ButtonGroup look="primary">
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>

			<h3>Hero</h3>
			<ButtonGroup look="hero">
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>

			<h2>Size</h2>

			<h3>Small</h3>
			<ButtonGroup size="small">
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>

			<h3>Medium</h3>
			<ButtonGroup size="medium">
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>

			<h3>Large</h3>
			<ButtonGroup size="large">
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>

			<h3>Extra large</h3>
			<ButtonGroup size="xlarge">
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>
		</GEL>
	);
}

export default Example;
