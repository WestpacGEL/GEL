import React from 'react';
import { Form, FormGroup } from '../src';
import { Box } from './_utils';
import { TextInput } from '@westpac/text-input';
import { Button } from '@westpac/button';

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

		<h3>Medium</h3>
		<Form action="." spacing="medium" noValidate>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>

		<h3>Large</h3>
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

		<h3>Small</h3>
		<Form action="." size="small" noValidate>
			<FormGroup>
				<TextInput />
			</FormGroup>
		</Form>

		<h3>Medium</h3>
		<Form action="." size="medium" noValidate>
			<FormGroup>
				<TextInput />
			</FormGroup>
		</Form>

		<h3>Large</h3>
		<Form action="." size="large" noValidate>
			<FormGroup>
				<TextInput />
			</FormGroup>
		</Form>

		<h3>XLarge</h3>
		<Form action="." size="xlarge" noValidate>
			<FormGroup>
				<TextInput />
			</FormGroup>
		</Form>

		<hr />

		<h2>Inline mode (SM+)</h2>
		<Form action="." isInline noValidate>
			<FormGroup>
				<TextInput />
			</FormGroup>
			<FormGroup>
				<Button>Go</Button>
			</FormGroup>
		</Form>
	</>
);
