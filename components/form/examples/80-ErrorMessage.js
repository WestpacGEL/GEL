/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { FormGroup, ErrorMessage } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { CarIcon } from '@westpac/icon';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default instance (no styling props)</h2>
			<FormGroup>
				<ErrorMessage id="example-default-error" />
				<TextInput name="example-default" aria-describedby="example-default-error" invalid />
			</FormGroup>

			<hr />

			<h2>Single error message</h2>
			<FormGroup>
				<ErrorMessage message="This is an error message" id="example-single-error" />
				<TextInput name="example-single" aria-describedby="example-single-error" invalid />
			</FormGroup>

			<hr />

			<h2>Multiple error messages (list)</h2>
			<FormGroup>
				<ErrorMessage
					message={['This is an error message', 'This is another error message']}
					id="example-multiple-error"
				/>
				<TextInput name="example-multiple" aria-describedby="example-multiple-error" invalid />
			</FormGroup>

			<hr />

			<h2>Custom icon</h2>
			<FormGroup>
				<ErrorMessage
					message="This is an error message"
					icon={CarIcon}
					id="example-custom-icon-error"
				/>
				<TextInput
					name="example-custom-icon"
					aria-describedby="example-custom-icon-error"
					invalid
				/>
			</FormGroup>
		</GEL>
	);
}

export default Example;
