import { jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Playground } from '../../../../website/src/components/playground/macro';

// TO DO
const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonGroup name="example-1">
				<Item value="left">Item 1</Item>
				<Item value="right">Item 2</Item>
			</ButtonGroup>
			<ButtonGroup name="example-2">
				<Item value="left">Item 1</Item>
				<Item value="middle">Item 2</Item>
				<Item value="right">Item 3</Item>
			</ButtonGroup>
		</Playground>
	);
};

export default Demo;
