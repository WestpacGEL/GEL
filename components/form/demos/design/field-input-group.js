/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, Field } from '@westpac/form';
import { InputGroup, Before, After } from '@westpac/input-group';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form>
				<Field label="Label" hint="Hint text">
					<InputGroup name="example-text" label="User input text" width={20}>
						<Before inputType="text" data="AUS $" />
						<After inputType="text" data=".00" />
					</InputGroup>
				</Field>
			</Form>
		</Playground>
	);
};

export default Demo;
