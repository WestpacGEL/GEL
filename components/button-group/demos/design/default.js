/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonGroup name="example-1">
				<Item value="left">Yes</Item>
				<Item value="right">No</Item>
			</ButtonGroup>
			<br />
			<br />
			<ButtonGroup name="example-2">
				<Item value="left">Email</Item>
				<Item value="middle">Phone</Item>
				<Item value="right">SMS</Item>
			</ButtonGroup>
		</Playground>
	);
};

export default Demo;
