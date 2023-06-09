import { jsx } from '@westpac/core';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

export const EmailInstructionsPattern = ({ showErrors = false }) => {
	const error = showErrors ? 'Enter a valid email address' : '';
	const invalid = showErrors;

	return (
		<FormGroup>
			<Field
				label="Email address"
				hint="Enter an email address in the format: youremail@example.com"
				error={error}
			>
				<TextInput
					type="email"
					size="large"
					width={30}
					spellCheck="false"
					autoComplete="email"
					invalid={invalid}
				/>
			</Field>
		</FormGroup>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<EmailInstructionsPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
