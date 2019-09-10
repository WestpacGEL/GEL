import React from 'react';
import {
	Form,
	ChitChat,
	ErrorMessage,
	Fieldset,
	FormGroup,
	Hint,
	InputCluster,
	InputClusterItem,
	FormLabel,
	FormSection,
} from '../src';
import { TextInput } from '@westpac/text-input';

export default () => (
	<>
		<h2>Default size and spacing</h2>
		<Form action="." noValidate>
			<FormSection>
				<ChitChat>
					Hello, I’m the friendly conversational text component. I live at the top of the form pod
					if required.
				</ChitChat>
			</FormSection>

			<FormSection>
				<FormGroup>
					<FormLabel htmlFor="example-default-1">This is a label</FormLabel>
					<Hint>This is a hint</Hint>
					<ErrorMessage message="This is an error message" />
					<TextInput name="example-default-1" />
				</FormGroup>

				<FormGroup>
					<FormLabel htmlFor="example-default-2">This is a label</FormLabel>
					<Hint>This is a hint</Hint>
					<ErrorMessage message="This is an error message" />
					<TextInput name="example-default-2" />
				</FormGroup>
			</FormSection>

			<FormSection>
				<FormGroup>
					<FormLabel htmlFor="example-default-3">This is a label</FormLabel>
					<Hint>This is a hint</Hint>
					<ErrorMessage message="This is an error message" />
					<TextInput name="example-default-3" />
				</FormGroup>

				<FormGroup>
					<Fieldset legend="This is a legend">
						<Hint>This is a hint</Hint>
						<ErrorMessage message={['This is an error message', 'This is another error message']} />
						<InputCluster>
							<InputClusterItem>
								<TextInput name="example-default-4-line1" />
							</InputClusterItem>
							<InputClusterItem>
								<TextInput name="example-default-4-line2" />
							</InputClusterItem>
						</InputCluster>
					</Fieldset>
				</FormGroup>
			</FormSection>
		</Form>

		<hr />

		<h2>Large size with large spacing</h2>
		<Form action="." size="large" spacing="large" noValidate>
			<FormSection>
				<ChitChat>
					Hello, I’m the friendly conversational text component. I live at the top of the form pod
					if required.
				</ChitChat>
			</FormSection>

			<FormSection>
				<FormGroup>
					<FormLabel htmlFor="example-large-1">This is a label</FormLabel>
					<Hint>This is a hint</Hint>
					<ErrorMessage message="This is an error message" />
					<TextInput name="example-large-1" />
				</FormGroup>

				<FormGroup>
					<FormLabel htmlFor="example-large-2">This is a label</FormLabel>
					<Hint>This is a hint</Hint>
					<ErrorMessage message="This is an error message" />
					<TextInput name="example-large-2" />
				</FormGroup>
			</FormSection>

			<FormSection>
				<FormGroup>
					<FormLabel htmlFor="example-large-3">This is a label</FormLabel>
					<Hint>This is a hint</Hint>
					<ErrorMessage message="This is an error message" />
					<TextInput name="example-large-3" />
				</FormGroup>

				<FormGroup>
					<Fieldset legend="This is a legend">
						<Hint>This is a hint</Hint>
						<ErrorMessage message={['This is an error message', 'This is another error message']} />
						<InputCluster>
							<InputClusterItem>
								<TextInput name="example-large-4-line1" />
							</InputClusterItem>
							<InputClusterItem>
								<TextInput name="example-large-4-line2" />
							</InputClusterItem>
						</InputCluster>
					</Fieldset>
				</FormGroup>
			</FormSection>
		</Form>
	</>
);
