import React from 'react';

import { Tab, Tabcordion } from '../src';
import { data } from './_data';

export default () => (
	<>
		<h3>Soft</h3>
		<Tabcordion mode="tabs" appearance="soft">
			{data.map(t => (
				<Tab key={t.label} label={t.label}>
					{t.content}
				</Tab>
			))}
		</Tabcordion>
		<h3>Lego</h3>
		<Tabcordion mode="tabs" appearance="lego">
			{data.map(t => (
				<Tab key={t.label} label={t.label}>
					{t.content}
				</Tab>
			))}
		</Tabcordion>
	</>
);
