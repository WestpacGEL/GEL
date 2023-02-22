import { GEL, jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Look</h2>
			<h3>Default</h3>
			<ButtonGroup name="example-default">
				<Item>Left</Item>
				<Item>Middle</Item>
				<Item>Right</Item>
			</ButtonGroup>
			<h3>Hero</h3>
			<ButtonGroup name="example-hero" look="hero">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
			<h3>Primary</h3>
			<ButtonGroup name="example-primary" look="primary">
				<Item>Left</Item>
				<Item>Middle</Item>
				<Item>Right</Item>
			</ButtonGroup>
			<h3>Disabled</h3>
			<ButtonGroup name="example-hero-disabled" look="hero" disabled>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>{' '}
			<ButtonGroup name="example-primary-disabled" look="primary" disabled>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
			<hr />
			<h2>Block</h2>
			<ButtonGroup name="example-block" block>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
			<h3>Responsive block</h3>
			<ButtonGroup name="example-block-responsive" block={[true, false, true, false, true]}>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
		</GEL>
	);
}

export default Example;
