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
	FormSection
} from '../src';

export default () => (
	<>
		<h2>Default spacing</h2>
		<Form action="." noValidate>
			<FormSection>
				<FormChitChat>
					Hello, I’m the friendly conversational text component. I live at the top of the form pod if required.
				</FormChitChat>

				<FormGroup>
					<FormLabel htmlFor="example-1">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<Box>Form input here</Box>
				</FormGroup>

				<FormGroup>
					<FormLabel htmlFor="example-2">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<Box>Form input here</Box>
				</FormGroup>
			</FormSection>

			<FormSection>
				<FormGroup>
					<FormLabel htmlFor="example-3">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<Box>Form input here</Box>
				</FormGroup>

				<FormGroup>
					<FormLabel htmlFor="example-">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<Box>Form input here</Box>
				</FormGroup>
			</FormSection>
		</Form>

		<hr />

		<h2>Large spacing</h2>
		<Form action="." spacing="large" noValidate>
			<FormSection>
				<FormChitChat>
					Hello, I’m the friendly conversational text component. I live at the top of the form pod if required.
				</FormChitChat>

				<FormGroup>
					<FormLabel htmlFor="example-1">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<Box>Form input here</Box>
				</FormGroup>

				<FormGroup>
					<FormLabel htmlFor="example-2">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<Box>Form input here</Box>
				</FormGroup>
			</FormSection>

			<FormSection>
				<FormGroup>
					<FormLabel htmlFor="example-3">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<Box>Form input here</Box>
				</FormGroup>

				<FormGroup>
					<FormLabel htmlFor="example-">This is a label</FormLabel>
					<FormHint>This is a hint</FormHint>
					<FormErrorMessage>This is an error message</FormErrorMessage>
					<Box>Form input here</Box>
				</FormGroup>
			</FormSection>
		</Form>
	</>
);
