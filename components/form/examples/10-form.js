import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup } from '../src';
import { FormInput } from '../../form-input/src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Form action="." noValidate>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>

		<hr />

		<h2>Spacing</h2>

		<h3>Medium spacing</h3>
		<Form action="." spacing="medium" noValidate>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>

		<h3>Large spacing</h3>
		<Form action="." spacing="large" noValidate>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>

		<hr />

		<h2>Size</h2>

		<h3>Small size</h3>
		<Form action="." size="small" noValidate>
			<FormGroup>
				<FormInput />
			</FormGroup>
		</Form>

		<h3>Medium size</h3>
		<Form action="." size="medium" noValidate>
			<FormGroup>
				<FormInput />
			</FormGroup>
		</Form>

		<h3>Large size</h3>
		<Form action="." size="large" noValidate>
			<FormGroup>
				<FormInput />
			</FormGroup>
		</Form>

		<h3>XLarge size</h3>
		<Form action="." size="xlarge" noValidate>
			<FormGroup>
				<FormInput />
			</FormGroup>
		</Form>

		<hr />

		<h2>Inline mode</h2>
		<Form action="." inline noValidate>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>
	</>
);
