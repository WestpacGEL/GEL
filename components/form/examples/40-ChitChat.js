import React from 'react';
import { Box } from './_utils';

import { Form, FormSection, ChitChat } from '../src';

export default () => (
	<>
		<Form>
			<FormSection>
				<ChitChat>
					Hello, I’m the friendly conversational text component. I live at the top of the form pod
					if required.
				</ChitChat>
			</FormSection>
		</Form>
	</>
);
