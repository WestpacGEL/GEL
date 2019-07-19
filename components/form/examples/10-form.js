import React from 'react';
import { Box } from './_utils';

import {
	Form,
	FormGroup
} from '../src';

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
