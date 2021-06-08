/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form spacing="large">
				<FormGroup>
					<Field label="Home number">
						<TextInput type="tel" size="large" width={20} />
					</Field>
				</FormGroup>
				<FormGroup>
					<Field label="Work number">
						<TextInput type="tel" size="large" width={20} />
					</Field>
				</FormGroup>
				<FormGroup>
					<Field label="Mobile number">
						<TextInput type="tel" size="large" width={20} />
					</Field>
				</FormGroup>
			</Form>
		</Playground>
	);
};

export default Demo;
