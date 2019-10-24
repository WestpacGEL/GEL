/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Button, ButtonGroup } from '@westpac/button';

function ButtonGroupExample({ brand }) {
	const [selected, setSelected] = useState(-1);

	return (
		<GEL brand={brand}>
			<ButtonGroup>
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>

			<h2>Controlled</h2>

			<ButtonGroup selected={selected} onChange={v => setSelected(v)}>
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

			<h2>Block</h2>

			<ButtonGroup block>
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

export default ButtonGroupExample;
