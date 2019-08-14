import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup, FormSection, FormSectionImg } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Form>
			<FormSection>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</FormSection>
			<FormSection>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</FormSection>
		</Form>

		<hr />

		<h2>Spacing</h2>

		<h3>Medium</h3>
		<Form spacing="medium">
			<FormSection>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</FormSection>
			<FormSection>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</FormSection>
		</Form>

		<h3>Large</h3>
		<Form spacing="large">
			<FormSection>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</FormSection>
			<FormSection>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</FormSection>
		</Form>

		<hr />

		<h2>FormSection with image</h2>
		<Form>
			<FormSection>
				<FormSectionImg src="https://placehold.co/190x120/eee/ddd" alt="Alternative text here" />
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</FormSection>
		</Form>

		<hr />

		<h2>No padding</h2>
		<Form>
			<FormSection noPadding>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</FormSection>
			<FormSection noPadding>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</FormSection>
		</Form>
	</>
);
