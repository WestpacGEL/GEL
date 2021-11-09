/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Fragment } from 'react';

const NamesGivenPattern = ({ showErrors = false }) => {
	const error = showErrors ? 'Error message goes here if activated' : '';
	const invalid = showErrors;

	return (
		<Fragment>
			<FormGroup>
				<Field label="Title">
					<Select inline size="large" autoComplete="honorific-prefix">
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
				<Field label="Given names" hint="Include any middle names">
					<TextInput size="large" width={30} autoComplete="given-name" />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="Family name" error={error}>
					<TextInput size="large" width={30} autoComplete="family-name" invalid={invalid} />
				</Field>
			</FormGroup>
		</Fragment>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<NamesGivenPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
