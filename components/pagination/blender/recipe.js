import { GEL } from '@westpac/core';
import React from 'react';

import { Pagination, Page } from '@westpac/pagination';
import { blenderLink } from '../src/overrides/link';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/pagination'] = {
		Link: {
			component: blenderLink.component,
			styles: blenderLink.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Pagination current={1}>
				<Page text="1" />
				<Page text="2" />
				<Page text="3" />
			</Pagination>
			<Pagination current={0}>
				<Page text="1" />
				<Page text="2" />
				<Page text="3" />
			</Pagination>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/pagination'] = {
		Link: {
			component: blenderLink.component,
			attributes: blenderLink.attributes,
		},
	};
	return [
		{
			heading: 'Pagination component',
			subheading: 'Page 1',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Pagination current={0}>
						<Page text="1" />
						<Page text="2" />
						<Page text="3" />
					</Pagination>
				</GEL>
			),
		},
		{
			subheading: 'Page 2',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Pagination current={1}>
						<Page text="1" />
						<Page text="2" />
						<Page text="3" />
					</Pagination>
				</GEL>
			),
		},
		{
			subheading: 'Page 3',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Pagination current={2}>
						<Page text="1" />
						<Page text="2" />
						<Page text="3" />
					</Pagination>
				</GEL>
			),
		},
	];
}
