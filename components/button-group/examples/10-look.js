/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />
			<h2>Look</h2>
			<h3>Primary</h3>
			<ButtonGroup look="primary">
				<Item>Left</Item>
				<Item>Middle</Item>
				<Item>Right</Item>
			</ButtonGroup>

			<h3>Hero</h3>
			<ButtonGroup look="hero">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<h3>Disabled</h3>
			<ButtonGroup disabled>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<h2>Block</h2>
			<ButtonGroup block>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<h3>Responsive block</h3>
			<ButtonGroup block={[true, false, true, false, true]}>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
		</GEL>
	);
}

export default Example;
