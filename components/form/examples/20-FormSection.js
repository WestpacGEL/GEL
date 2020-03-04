/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, FormSection, FormSectionImg } from '@westpac/form';
import { Box } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia ignore />

			<h2>Default</h2>
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

			<h2>FormSection with no padding</h2>
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
		</Playground>
	);
};
