import React from 'react';
import { Form, FormGroup, FormLabel, Hint } from '../src';
import { Box } from './_utils';

export default () => (
	<>
		<h2>Spacing</h2>

		<h3>Medium</h3>
		<Form spacing="medium">
			<FormGroup>
				<FormLabel htmlFor="example-hint">This is a label</FormLabel>
				<Hint>This is a hint</Hint>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>

		<h3>Large</h3>
		<Form spacing="large">
			<FormGroup>
				<FormLabel htmlFor="example-hint">This is a large spaced label</FormLabel>
				<Hint>This is a hint</Hint>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>
	</>
);
