import React from 'react';
import styled from '@emotion/styled';

import { Tab, Tabcordion } from '../src/index.js';
import { data } from './_data';

export default () => (
	<>
		<h3>Soft</h3>
		<Tabcordion mode="tabs" appearance="soft">
			{data.map(t => (
				<Tab label={t.label}>{t.content}</Tab>
			))}
		</Tabcordion>
		<h3>Lego</h3>
		<Tabcordion mode="tabs" appearance="lego">
			{data.map(t => (
				<Tab label={t.label}>{t.content}</Tab>
			))}
		</Tabcordion>
	</>
);
