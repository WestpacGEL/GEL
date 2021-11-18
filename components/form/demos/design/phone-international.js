/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

export const PhoneInternationalPattern = ({ showErrors = false }) => {
	const error = showErrors
		? 'Enter your number in either format of 2135096995, 213-509-6995, or (213) 509-6995'
		: '';
	const invalid = showErrors;

	return (
		<FormGroup>
			<Fieldset
				legend="Phone number"
				hint="Enter your country code (e.g. +61) and your number"
				error={error}
			>
				<InputCluster horizontal>
					<Item>
						<Field label="Code" subLabel>
							<TextInput
								type="tel"
								size="large"
								width={4}
								defaultValue={showErrors ? '+891' : undefined}
								autoComplete="tel-country-code"
							/>
						</Field>
					</Item>
					<Item>
						<Field label="Phone number" subLabel>
							<TextInput
								type="tel"
								size="large"
								width={10}
								defaultValue={showErrors ? '213-5096995' : undefined}
								autoComplete="tel-national"
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
					<PhoneInternationalPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
