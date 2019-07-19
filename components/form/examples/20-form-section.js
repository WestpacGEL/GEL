import React from 'react';
import { Box } from './_utils';

import { FormSection } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormSection>
			<Box>FormSection content</Box>
		</FormSection>
		<FormSection>
			<Box>FormSection content</Box>
		</FormSection>
	</>
);
