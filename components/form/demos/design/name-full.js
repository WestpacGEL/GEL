/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Fork, Content } from '@westpac/fork';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Fragment } from 'react';

export const NameFullPattern = ({ showErrors = false }) => {
	const error = showErrors ? 'Error message goes here if activated' : '';
	const invalid = showErrors;

	const mq = useMediaQuery();

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
				<Field label="Given name">
					<TextInput size="large" width={30} autoComplete="given-name" />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="Middle names (if any)">
					<TextInput size="large" width={30} autoComplete="additional-name" />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="Family name" error={error}>
					<TextInput size="large" width={30} autoComplete="family-name" invalid={invalid} />
				</Field>
			</FormGroup>
			<Fieldset legend="Have you ever been known by a name different to the one provided above?">
				<Fork size="large" css={mq({ marginBottom: ['1.5rem', '1.875rem'] })}>
					<Content text="Yes">
						<FormGroup>
							<Field label="Other names">
								<TextInput size="large" width={30} />
							</Field>
						</FormGroup>
					</Content>
					<Content text="No" />
				</Fork>
			</Fieldset>
		</Fragment>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<NameFullPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
