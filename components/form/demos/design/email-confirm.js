/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Fragment } from 'react';

export const EmailConfirmPattern = ({ showErrors = false }) => {
	const error = showErrors
		? 'Email addresses did not match. Please enter the same email address in both fields.'
		: '';
	const invalid = showErrors;

	return (
		<Fragment>
			<FormGroup>
				<Field label="Email address">
					<TextInput
						type="email"
						size="large"
						width={30}
						defaultValue={showErrors ? 'gel@westpac.com.au' : undefined}
						spellCheck="false"
						autoComplete="email"
						invalid={invalid}
					/>
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="Confirm email address" error={error}>
					<TextInput
						type="email"
						size="large"
						width={30}
						defaultValue={showErrors ? 'gel@westpacc.com.au' : undefined}
						autoComplete="email"
						invalid={invalid}
					/>
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
					<EmailConfirmPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
