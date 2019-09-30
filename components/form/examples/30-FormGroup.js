import React from 'react';
import { Form, FormGroup } from '../src';
import { Box } from './_utils';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Form>
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
		<Form spacing="medium">
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>

		<h3>Large</h3>
		<Form spacing="large">
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>

		<hr />

		<h2>Primary form group (fork)</h2>

		<h3>Medium spacing</h3>
		<Form spacing="medium">
			<FormGroup isPrimary>
				<Box>FormGroup primary content</Box>
			</FormGroup>
			<FormGroup isPrimary>
				<Box>FormGroup primary content</Box>
			</FormGroup>
		</Form>

		<h3>Large spacing</h3>
		<Form spacing="large">
			<FormGroup isPrimary>
				<Box>FormGroup primary content</Box>
			</FormGroup>
			<FormGroup isPrimary>
				<Box>FormGroup primary content</Box>
			</FormGroup>
		</Form>

		<hr />

		<h2>Inline mode</h2>
		<p>Note: The following example FormGroups should NOT be affected by spacing in SM+.</p>

		<h3>Default spacing</h3>
		<Form isInline>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>

		<h3>Medium spacing</h3>
		<Form spacing="medium" isInline>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>

		<h3>Large spacing</h3>
		<Form spacing="large" isInline>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>
	</>
);
