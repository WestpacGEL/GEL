import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup } from '../src';

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

		<h3>Medium spacing</h3>
		<Form spacing="medium">
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>

		<h3>Large spacing</h3>
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
			<FormGroup primary>
				<Box>FormGroup primary content</Box>
			</FormGroup>
			<FormGroup primary>
				<Box>FormGroup primary content</Box>
			</FormGroup>
		</Form>

		<h3>Large spacing</h3>
		<Form spacing="large">
			<FormGroup primary>
				<Box>FormGroup primary content</Box>
			</FormGroup>
			<FormGroup primary>
				<Box>FormGroup primary content</Box>
			</FormGroup>
		</Form>

		<hr />

		<h2>Inline mode</h2>
		<p>Note: The following example FormGroups should NOT be affected by spacing in SM+.</p>

		<h3>Default spacing</h3>
		<Form inline>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>

		<h3>Medium spacing</h3>
		<Form spacing="medium" inline>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>

		<h3>Large spacing</h3>
		<Form spacing="large" inline>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
			<FormGroup>
				<Box>FormGroup content</Box>
			</FormGroup>
		</Form>
	</>
);
