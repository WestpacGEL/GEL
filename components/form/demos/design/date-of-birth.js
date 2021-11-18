/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Fragment } from 'react';

export const DateOfBirthPattern = ({ showErrors = false }) => {
	const error = showErrors ? ['Day must be valid', 'Year must be valid'] : [];
	const invalid = showErrors;

	const maxBorn = new Date().getFullYear();
	const minBorn = maxBorn - 122; // https://en.wikipedia.org/wiki/Jeanne_Calment

	return (
		<Fragment>
			<FormGroup>
				<Fieldset legend="Date of birth" hint="Example: 31 3 1980" error={error}>
					<InputCluster horizontal>
						<Item>
							<Field label="Day" subLabel>
								<TextInput
									type="text"
									inputMode="numeric"
									size="large"
									width={2}
									pattern="[0-9]*"
									min="1"
									max="31"
									autoComplete="bday-day"
									invalid={invalid}
								/>
							</Field>
						</Item>
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
									autoComplete="bday-month"
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
									pattern="[0-9]*"
									min={minBorn}
									max={maxBorn}
									autoComplete="bday-year"
									invalid={invalid}
								/>
							</Field>
						</Item>
					</InputCluster>
				</Fieldset>
			</FormGroup>
		</Fragment>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<DateOfBirthPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
