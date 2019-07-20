import React from 'react';
import { Box } from './_utils';

import { FormGroup, FormLabel, FormHint } from '../src';

export default () => (
	<>
		<h2>Medium spacing</h2>
		<FormGroup>
			<FormLabel htmlFor="example-hint" spacing="medium">
				This is a label
			</FormLabel>
			<FormHint>This is a hint</FormHint>
			<Box>Form input here</Box>
		</FormGroup>

		<hr />

		<h2>Large spacing</h2>
		<FormGroup spacing="large">
			<FormLabel htmlFor="example-hint">This is a large spaced label</FormLabel>
			<FormHint>This is a hint</FormHint>
			<Box>Form input here</Box>
		</FormGroup>
	</>
);
