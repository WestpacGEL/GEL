/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Fragment } from 'react';

export const NameSimplePattern = ({ showErrors = false }) => {
	const error = showErrors ? 'Error message goes here if activated' : '';
	const invalid = showErrors;

	return (
		<Fragment>
			<FormGroup>
				<Field label="Given name">
					<TextInput size="large" width={30} spellCheck="false" autoComplete="given-name" />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="Family name" error={error}>
					<TextInput
						size="large"
						width={30}
						spellCheck="false"
						autoComplete="family-name"
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
					<NameSimplePattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
