import React from 'react';
import { Box } from './_utils';

import { FormErrorMessage } from '../src';

export default () => (
	<>
		<h2>Single error message</h2>
		<FormErrorMessage>This is an error message</FormErrorMessage>
		<Box>Form input here</Box>

		<hr />

		<h2>Multiple error messages (list)</h2>
		<FormErrorMessage tag="ul">
			<li>This is an error message</li>
			<li>This is another error message</li>
		</FormErrorMessage>
		<Box>Form input here</Box>
	</>
);
