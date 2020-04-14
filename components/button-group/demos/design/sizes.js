/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonGroup name="example-small" size="small">
				<Item value="left">Item 1</Item>
				<Item value="right">Item 2</Item>
			</ButtonGroup>{' '}
			<ButtonGroup name="example-small" size="medium">
				<Item value="left">Item 1</Item>
				<Item value="right">Item 2</Item>
			</ButtonGroup>{' '}
			<ButtonGroup name="example-small" size="large">
				<Item value="left">Item 1</Item>
				<Item value="right">Item 2</Item>
			</ButtonGroup>{' '}
			<ButtonGroup name="example-small" size="xlarge">
				<Item value="left">Item 1</Item>
				<Item value="right">Item 2</Item>
			</ButtonGroup>
		</Playground>
	);
};
