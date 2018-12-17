import React from 'react';
import styled from '@emotion/styled';

import { Tab, Tabcordion } from '../src/index.js';
import { data } from './_data';

export default () => (
	<Tabcordion mode="accordion" activeTabIndex={null}>
		{data.map(t => (
			<Tab label={t.label}>{t.content}</Tab>
		))}
	</Tabcordion>
);
