import { GEL } from '@westpac/core';
import React from 'react';

import { Breadcrumb, Crumb } from '@westpac/breadcrumb';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Breadcrumb>
				<Crumb href="#link" text="text" />
				<Crumb href="#link" text="text" />
				<Crumb href="#link" text="text" />
			</Breadcrumb>
			<Breadcrumb assistiveText="text">
				<Crumb href="#link" text="text" />
				<Crumb href="#link" text="text" />
				<Crumb href="#link" text="text" />
			</Breadcrumb>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'Default breadcrumbs',
			component: () => (
				<GEL brand={brand}>
					<Breadcrumb>
						<Crumb href="#/" text="Home" />
						<Crumb href="#/personal-banking/" text="Personal" />
						<Crumb href="#/credit-cards/" text="Credit cards" />
					</Breadcrumb>
				</GEL>
			),
		},
		{
			heading: 'Breadcrumbs with assistive text',
			component: () => (
				<GEL brand={brand}>
					<Breadcrumb assistiveText="Text for assistive technology">
						<Crumb href="#/" text="Home" />
						<Crumb href="#/personal-banking/" text="Personal" />
						<Crumb href="#/credit-cards/" text="Credit cards" />
					</Breadcrumb>
				</GEL>
			),
		},
	];
}
