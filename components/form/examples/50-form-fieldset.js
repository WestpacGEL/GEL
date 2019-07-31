import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup, FormFieldset } from '../src';

export default () => (
	<>
		<Form>
			<FormGroup>
				<FormFieldset legend="This is a legend">
					<Box>FormFieldset content</Box>
				</FormFieldset>
			</FormGroup>
		</Form>
	</>
);
