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
					<Field label="Given name">
						<TextInput size="large" width={30} />
					</Field>
				</FormGroup>
				<FormGroup>
					<Field label="Family name">
						<TextInput size="large" width={30} />
					</Field>
				</FormGroup>
			</Form>
		</Playground>
	);
};

export default Demo;
