import React from 'react';
import { Box } from './_utils';

import {
	Form,
	FormChitChat,
	FormErrorMessage,
	FormFieldset,
	FormGroup,
	FormHint,
	FormInputs,
	FormLabel,
	FormSection,
} from '../src';

import { FormInput } from '../../form-input/src';

export default () => (
	<>
		<h2>Default spacing</h2>
		<Form action="." noValidate>
			<FormSection>
				<FormChitChat>
					Hello, I’m the friendly conversational text component. I live at the top of the form pod
					if required.
				</FormChitChat>
			</FormSection>

			<FormSection>
				<FormGroup>
					<FormLabel htmlFor="example-default-1">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<FormInput name="example-default-1" />
				</FormGroup>

				<FormGroup>
					<FormLabel htmlFor="example-default-2">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<FormInput name="example-default-2" />
				</FormGroup>
			</FormSection>

			<FormSection>
				<FormGroup>
					<FormLabel htmlFor="example-default-3">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<FormInput name="example-default-3" />
				</FormGroup>

				<FormGroup>
					<FormLabel htmlFor="example-default-4">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<FormInput name="example-default-4" />
				</FormGroup>

				<FormGroup>
					<FormFieldset legend="This is a legend">
						<FormHint>This is a hint</FormHint>
						<FormErrorMessage tag="ul">
							<li>This is an error message</li>
							<li>This is another error message</li>
						</FormErrorMessage>
						<FormInputs>
							<FormInput name="example-default-5-line1" />
							<FormInput name="example-default-5-line2" />
						</FormInputs>
					</FormFieldset>
				</FormGroup>
			</FormSection>
		</Form>

		<hr />

		<h2>Large spacing</h2>
		<Form action="." spacing="large" noValidate>
			<FormSection>
				<FormChitChat>
					Hello, I’m the friendly conversational text component. I live at the top of the form pod
					if required.
				</FormChitChat>
			</FormSection>

			<FormSection>
				<FormGroup>
					<FormLabel htmlFor="example-large-1">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<FormInput name="example-large-1" />
				</FormGroup>

				<FormGroup>
					<FormLabel htmlFor="example-large-2">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<FormInput name="example-large-2" />
				</FormGroup>
			</FormSection>

			<FormSection>
				<FormGroup>
					<FormLabel htmlFor="example-large-3">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<FormInput name="example-large-3" />
				</FormGroup>

				<FormGroup>
					<FormLabel htmlFor="example-large-4">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<FormInput name="example-large-4" />
				</FormGroup>

				<FormGroup>
					<FormFieldset legend="This is a legend">
						<FormHint>This is a hint</FormHint>
						<FormErrorMessage tag="ul">
							<li>This is an error message</li>
							<li>This is another error message</li>
						</FormErrorMessage>
						<FormInputs>
							<FormInput name="example-large-5-line1" />
							<FormInput name="example-large-5-line2" />
						</FormInputs>
					</FormFieldset>
				</FormGroup>
			</FormSection>
		</Form>
	</>
);
