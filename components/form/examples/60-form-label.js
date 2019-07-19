import React from 'react';
import { Box } from './_utils';

import { FormLabel } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormLabel htmlFor="example-default">This is a default label</FormLabel>
		<Box>Form input here</Box>

		<hr />

		<h2>Spacing</h2>

		<h3>Medium spacing</h3>
		<FormLabel htmlFor="example-spacing-medium" spacing="medium">This is a medium spaced label</FormLabel>
		<Box>Form input here</Box>

		<h3>Large spacing</h3>
		<FormLabel htmlFor="example-spacing-large" spacing="large">This is a large spaced label</FormLabel>
		<Box>Form input here</Box>

		<h3>Small (sublabel)</h3>
		<FormLabel htmlFor="example-size-small" size="small">This is a small label</FormLabel>
		<Box>Form input here</Box>
	</>
);
