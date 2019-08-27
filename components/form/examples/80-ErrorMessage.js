import React from 'react';
import { Box } from './_utils';

import { FormGroup, ErrorMessage } from '../src';
import { TextInput } from '../../text-input/src';
import { CarIcon } from '../../icon/src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormGroup>
			<ErrorMessage id="example-default-error" />
			<TextInput mame="example-default" aria-describedby="example-default-error" invalid />
		</FormGroup>

		<hr />

		<h2>Single error message</h2>
		<FormGroup>
			<ErrorMessage message="This is an error message" id="example-single-error" />
			<TextInput mame="example-single" aria-describedby="example-single-error" invalid />
		</FormGroup>

		<hr />

		<h2>Multiple error messages (list)</h2>
		<FormGroup>
			<ErrorMessage
				message={['This is an error message', 'This is another error message']}
				id="example-multiple-error"
			/>
			<TextInput mame="example-multiple" aria-describedby="example-multiple-error" invalid />
		</FormGroup>

		<hr />

		<h2>Custom icon</h2>
		<FormGroup>
			<ErrorMessage
				message="This is an error message"
				icon={CarIcon}
				id="example-custom-icon-error"
			/>
			<TextInput mame="example-custom-icon" aria-describedby="example-custom-icon-error" invalid />
		</FormGroup>
	</>
);
