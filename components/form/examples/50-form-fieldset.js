import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup, FormFieldset } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Form>
			<FormGroup>
				<FormFieldset legend="This is a legend">
					<Box>FormFieldset content</Box>
				</FormFieldset>
			</FormGroup>
		</Form>

		<hr />

		<h2>Spacing</h2>

		<h3>Medium spacing</h3>
		<Form spacing="medium">
			<FormGroup>
				<FormFieldset legend="This is a legend">
					<Box>FormFieldset content</Box>
				</FormFieldset>
			</FormGroup>
		</Form>

		<h3>Large spacing</h3>
		<Form spacing="large">
			<FormGroup>
				<FormFieldset legend="This is a legend">
					<Box>FormFieldset content</Box>
				</FormFieldset>
			</FormGroup>
		</Form>
	</>
);
