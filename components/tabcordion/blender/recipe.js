import { GEL } from '@westpac/core';
import React from 'react';

import { Tab, Tabcordion } from '@westpac/tabcordion';

const looks = ['soft', 'lego'];

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Tabcordion instanceIdPrefix="GEL" openTab={1}>
				<Tab text="TEXT">TEXT</Tab>
				<Tab text="TEXT">TEXT</Tab>
				<Tab text="TEXT">TEXT</Tab>
			</Tabcordion>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'TODO',
			component: () => (
				<GEL brand={brand}>
					<Tabcordion instanceIdPrefix="GEL" openTab={1}>
						<Tab text="TEXT">TEXT</Tab>
						<Tab text="TEXT">TEXT</Tab>
						<Tab text="TEXT">TEXT</Tab>
					</Tabcordion>
				</GEL>
			),
		},
	];
}
