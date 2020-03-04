/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, FormLabel, Hint } from '@westpac/form';
import { Box } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia ignore />

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
		</Playground>
	);
};
