import React from 'react';
import { Box } from './_utils';

import { FormInputs } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormInputs>
			<Box>Form input here</Box>
			<Box>Form input here</Box>
		</FormInputs>

		<hr />

		<h2>Horizontal mode</h2>
		<FormInputs horizontal>
			<Box>Form input here</Box>
			<Box>Form input here</Box>
		</FormInputs>
	</>
);
