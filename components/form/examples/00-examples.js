import React from 'react';

import {
	Form,
	FormChitChat,
	FormSection,
	FormGroup,
	FormFieldset,
	FormHint,
	FormLabel,
	FormErrorMessage
} from '../src';

export default () => (
	<>
		<h2>Form</h2>
		<Form action="." noValidate>
			[This is a form]
		</Form>

		<hr />

		<h2>Chit chat</h2>
		<FormChitChat>
			Hello, I’m the friendly conversational text component. I live at the top of the form pod if required.
		</FormChitChat>

		<hr />

		<h2>Form sections</h2>
		<FormSection>
			[This is a form section]
		</FormSection>
		<FormSection>
			[This is another form section]
		</FormSection>

		<hr />

		<h2>Form groups</h2>

		<h3>Default spacing</h3>
		<FormGroup>
			[This is a default FormGroup]
		</FormGroup>
		<FormGroup>
			[This is another large FormGroup]
		</FormGroup>

		<h3>Large spacing</h3>
		<FormGroup spacing="large">
			[This is a large FormGroup]
		</FormGroup>
		<FormGroup spacing="large">
			[This is another large FormGroup]
		</FormGroup>

		<h3>Primary (fork)</h3>
		<FormGroup spacing="large" primary>
			[This is a large primary FormGroup]
		</FormGroup>

		<hr />

		<h2>Fieldset</h2>
		<FormFieldset legend="This is a legend">
			[This is a fieldset]
		</FormFieldset>

		<hr />

		<h2>Form label</h2>

		<h3>Default spacing</h3>
		<FormLabel>This is a default label</FormLabel>

		<h3>Large spacing</h3>
		<FormLabel spacing="large">This is a large spaced label</FormLabel>

		<h3>Small (sublabel)</h3>
		<FormLabel size="small">This is a small label</FormLabel>

		<hr />

		<h2>Form hint</h2>
		<FormHint>This is a hint</FormHint>

		<hr />

		<h2>Form error message</h2>
		<h3>Single error message</h3>
		<FormErrorMessage>This is an error message</FormErrorMessage>

		<h3>Multiple error messages (list)</h3>
		<FormErrorMessage tag="ul">
			<li>This is an error message</li>
			<li>This is an error message</li>
		</FormErrorMessage>

	</>
);
