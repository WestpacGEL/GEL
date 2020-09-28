import { GEL } from '@westpac/core';
import React from 'react';

import { Breadcrumb, Crumb } from '@westpac/breadcrumb';
import { blenderIcon } from '../src/overrides/icon';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/breadcrumb'] = {
		Icon: {
			component: blenderIcon.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens} noPrefix>
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
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/breadcrumb'] = {
		Icon: {
			component: blenderIcon.component,
		},
	};
	return [
		{
			heading: 'Default breadcrumbs',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
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
				<GEL brand={overridesWithTokens} noPrefix>
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
