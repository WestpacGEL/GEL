/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, Field } from '@westpac/form';
import { ButtonGroup, Item } from '@westpac/button-group';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form>
				<Field label="Label" hint="Hint text">
					<ButtonGroup name="example-1">
						<Item value="left">Yes</Item>
						<Item value="right">No</Item>
					</ButtonGroup>
				</Field>
			</Form>
		</Playground>
	);
};

export default Demo;
