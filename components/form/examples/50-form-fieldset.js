import React from 'react';
import { Box } from './_utils';

import { FormGroup, FormFieldset } from '../src';

export default () => (
	<>
		<FormGroup>
			<FormFieldset legend="This is a legend">
				<Box>FormFieldset content</Box>
			</FormFieldset>
		</FormGroup>
	</>
);
