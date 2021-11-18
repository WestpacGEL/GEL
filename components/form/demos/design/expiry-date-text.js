/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

export const ExpiryDateTextPattern = ({ showErrors = false }) => {
	const error = showErrors ? ['Month must be valid', 'Year must be valid'] : [];
	const invalid = showErrors;

	const minYear = new Date().getFullYear();

	return (
		<FormGroup>
			<Fieldset legend="Expiry date" hint="Example: 03 2020" error={error}>
				<InputCluster horizontal>
					<Item>
						<Field label="Month" subLabel>
							<TextInput
								type="text"
								inputMode="numeric"
								size="large"
								width={2}
								pattern="[0-9]*"
								min="1"
								max="12"
								invalid={invalid}
							/>
						</Field>
					</Item>
					<Item>
						<Field label="Year" subLabel>
							<TextInput
								type="text"
								inputMode="numeric"
								size="large"
								width={4}
								min={minYear}
								pattern="[0-9]*"
								invalid={invalid}
							/>
						</Field>
					</Item>
				</InputCluster>
			</Fieldset>
		</FormGroup>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<ExpiryDateTextPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
