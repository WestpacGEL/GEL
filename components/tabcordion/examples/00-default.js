import React from 'react';

import { Tab, Tabcordion } from '../src';
import { data } from './_data';

export default () => (
	<Tabcordion>
		{data.map(t => (
			<Tab key={t.label} label={t.label}>
				{t.content}
			</Tab>
		))}
	</Tabcordion>
);
