import React from 'react';
import styled from '@emotion/styled';

import { Tab, Tabcordion } from '../src/index.js';
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
