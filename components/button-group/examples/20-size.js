/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Size</h2>

			<h3>Default</h3>
			<ButtonGroup name="example-default">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<h3>Small</h3>
			<ButtonGroup name="example-small" size="small">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<h3>Medium</h3>
			<ButtonGroup name="example-medium" size="medium">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<h3>Large</h3>
			<ButtonGroup name="example-large" size="large">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			<h3>Extra Large</h3>
			<ButtonGroup name="example-xlarge" size="xlarge">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>

			{/* Hidden for now until we sort out stylis */}
			{/* <h3>Responsive</h3>
			<ButtonGroup name="example-responsive" size={['small', 'medium', 'large', 'xlarge']}>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup> */}
		</GEL>
	);
}

export default Example;
