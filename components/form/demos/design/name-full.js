/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form spacing="large">
				<FormGroup>
					<Field label="Title name">
						<Select inline size="large">
							<option>Select</option>
							<option>Mrs</option>
							<option>Mr</option>
							<option>Miss</option>
							<option>Ms</option>
							<option>Dr</option>
						</Select>
					</Field>
				</FormGroup>
				<FormGroup>
					<Field label="Given name">
						<TextInput size="large" width={30} />
					</Field>
				</FormGroup>
				<FormGroup>
					<Field label="Middle name(s) (if any)">
						<TextInput size="large" width={30} />
					</Field>
				</FormGroup>
				<FormGroup>
					<Field label="Family name">
						<TextInput size="large" width={30} />
					</Field>
				</FormGroup>
				{/* Fork goes here */}
			</Form>
		</Playground>
	);
};

export default Demo;
