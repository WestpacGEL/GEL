import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup, FormErrorMessage } from '../src';

export default () => (
	<>
		<h2>Single error message</h2>
		<Form>
			<FormGroup>
				<FormErrorMessage>This is an error message</FormErrorMessage>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>

		<hr />

		<h2>Multiple error messages (list)</h2>
		<Form>
			<FormGroup>
				<FormErrorMessage tag="ul">
					<li>This is an error message</li>
					<li>This is another error message</li>
				</FormErrorMessage>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>
	</>
);
