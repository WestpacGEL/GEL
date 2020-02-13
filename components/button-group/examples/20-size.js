/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />
			<h2>Size</h2>
			<h3>Small</h3>
			<ButtonGroup size="small">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<h3>Medium</h3>
			<ButtonGroup size="medium">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<h3>Large</h3>
			<ButtonGroup size="large">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<h3>Extra Large</h3>
			<ButtonGroup size="xlarge">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<h3>Responsive</h3>
			<ButtonGroup size={['small', 'medium', 'large', 'xlarge']}>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
		</GEL>
	);
}

export default Example;
