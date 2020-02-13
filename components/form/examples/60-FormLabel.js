/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, FormLabel } from '@westpac/form';
import { Box } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context}>
			<Intopia ignore />

			<h2>Default instance (no styling props)</h2>
			<Form>
				<FormGroup>
					<FormLabel htmlFor="example-default">This is a default label</FormLabel>
					<Box>Form input here</Box>
				</FormGroup>
			</Form>

			<hr />

			<h2>Spacing</h2>

			<h3>Medium</h3>
			<Form spacing="medium">
				<FormGroup>
					<FormLabel htmlFor="example-spacing-medium">This is a medium spaced label</FormLabel>
					<Box>Form input here</Box>
				</FormGroup>
			</Form>

			<h3>Large</h3>
			<Form spacing="large">
				<FormGroup>
					<FormLabel htmlFor="example-spacing-large">This is a large spaced label</FormLabel>
					<Box>Form input here</Box>
				</FormGroup>
			</Form>

			<hr />

			<h2>Sublabel</h2>
			<p>Note: The following example Sublabels should NOT be affected by spacing.</p>

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

			<hr />

			<h2>SrOnly</h2>

			<Form>
				<FormGroup>
					<FormLabel htmlFor="example-sronly" srOnly>
						This is screen reader only label text
					</FormLabel>
					<Box>Form input here</Box>
				</FormGroup>
			</Form>
		</Playground>
	);
}

export default Example;
