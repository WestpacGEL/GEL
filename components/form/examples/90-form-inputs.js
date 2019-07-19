import React from 'react';
import { Box } from './_utils';

import { FormInputs, FormInputsItem } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormInputs>
			<FormInputsItem>
				<Box>Form input here</Box>
			</FormInputsItem>
			<FormInputsItem>
				<Box>Form input here</Box>
			</FormInputsItem>
		</FormInputs>

		<hr />

		<h2>Horizontal mode</h2>
		<FormInputs horizontal>
			<FormInputsItem>
				<Box>Form input here</Box>
			</FormInputsItem>
			<FormInputsItem>
				<Box>Form input here</Box>
			</FormInputsItem>
		</FormInputs>
	</>
);
