/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonGroup name="example-1" block>
				<Item value="left">Item 1</Item>
				<Item value="right">Item 2</Item>
			</ButtonGroup>
		</Playground>
	);
};
