/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, Field } from '@westpac/form';
import { Select } from '@westpac/text-input';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form>
				<Field label="Label" hint="Hint text">
					<Select name="example-select" width={20}>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</Field>
			</Form>
		</Playground>
	);
};

export default Demo;
