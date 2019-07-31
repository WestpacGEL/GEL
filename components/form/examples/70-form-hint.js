import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup, FormLabel, FormHint } from '../src';

export default () => (
	<>
		<h2>Medium spacing</h2>
		<Form spacing="medium">
			<FormGroup>
				<FormLabel htmlFor="example-hint">This is a label</FormLabel>
				<FormHint>This is a hint</FormHint>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>

		<hr />

		<h2>Large spacing</h2>
		<Form spacing="large">
			<FormGroup>
				<FormLabel htmlFor="example-hint">This is a large spaced label</FormLabel>
				<FormHint>This is a hint</FormHint>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>
	</>
);
