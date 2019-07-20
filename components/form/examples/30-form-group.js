import React from 'react';
import { Box } from './_utils';

import { FormGroup } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormGroup>
			<Box>FormGroup content</Box>
		</FormGroup>
		<FormGroup>
			<Box>FormGroup content</Box>
		</FormGroup>

		<hr />

		<h2>Spacing</h2>

		<h3>Medium spacing</h3>
		<FormGroup spacing="medium">
			<Box>FormGroup content</Box>
		</FormGroup>
		<FormGroup spacing="medium">
			<Box>FormGroup content</Box>
		</FormGroup>

		<h3>Large spacing</h3>
		<FormGroup spacing="large">
			<Box>FormGroup content</Box>
		</FormGroup>
		<FormGroup spacing="large">
			<Box>FormGroup content</Box>
		</FormGroup>

		<hr />

		<h2>Primary form group (fork)</h2>

		<h3>Default spacing</h3>
		<FormGroup primary>
			<Box>FormGroup content</Box>
		</FormGroup>

		<h3>Medium spacing</h3>
		<FormGroup spacing="medium" primary>
			<Box>FormGroup content</Box>
		</FormGroup>

		<h3>Large spacing</h3>
		<FormGroup spacing="large" primary>
			<Box>FormGroup content</Box>
		</FormGroup>

		<hr />

		<h2>Inline mode</h2>
		<FormGroup inline>
			<Box>FormGroup content</Box>
		</FormGroup>
	</>
);
