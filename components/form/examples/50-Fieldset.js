import React from 'react';
import { Form, FormGroup, Fieldset } from '../src';
import { Box } from './_utils';

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

		<h3>Medium</h3>
		<Form spacing="medium">
			<FormGroup>
				<Fieldset legend="This is a legend">
					<Box>Fieldset content</Box>
				</Fieldset>
			</FormGroup>
		</Form>

		<h3>Large</h3>
		<Form spacing="large">
			<FormGroup>
				<Fieldset legend="This is a legend">
					<Box>Fieldset content</Box>
				</Fieldset>
			</FormGroup>
		</Form>
	</>
);
