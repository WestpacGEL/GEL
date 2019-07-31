import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup, FormLabel } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Form>
			<FormGroup>
				<FormLabel htmlFor="example-default">This is a default label</FormLabel>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>

		<hr />

		<h2>Spacing</h2>

		<h3>Medium spacing</h3>
		<Form spacing="medium">
			<FormGroup>
				<FormLabel htmlFor="example-spacing-medium">This is a medium spaced label</FormLabel>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>

		<h3>Large spacing</h3>
		<Form spacing="large">
			<FormGroup>
				<FormLabel htmlFor="example-spacing-large">This is a large spaced label</FormLabel>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>

		<hr />

		<h2>Sublabel</h2>

		<h3>Sublabel with medium spacing</h3>
		<Form spacing="medium">
			<FormGroup>
				<FormLabel htmlFor="example-sublabel-spacing-medium" sublabel>
					This is a sub-label
				</FormLabel>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>

		<hr />

		<h3>Sublabel with large spacing</h3>
		<Form spacing="large">
			<FormGroup>
				<FormLabel htmlFor="example-sublabel-spacing-large" sublabel>
					This is a sub-label
				</FormLabel>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>
	</>
);
