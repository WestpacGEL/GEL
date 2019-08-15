import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup, Fieldset } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Form>
			<FormGroup>
				<Fieldset legend="This is a legend">
					<Box>Fieldset content</Box>
				</Fieldset>
			</FormGroup>
		</Form>

		<hr />

		<h2>Spacing</h2>

		<h3>Medium spacing</h3>
		<Form spacing="medium">
			<FormGroup>
				<Fieldset legend="This is a legend">
					<Box>Fieldset content</Box>
				</Fieldset>
			</FormGroup>
		</Form>

		<h3>Large spacing</h3>
		<Form spacing="large">
			<FormGroup>
				<Fieldset legend="This is a legend">
					<Box>Fieldset content</Box>
				</Fieldset>
			</FormGroup>
		</Form>
	</>
);
