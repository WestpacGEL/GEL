import { GEL } from '@westpac/core';
import React from 'react';

import { Pagination, Page } from '@westpac/pagination';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			{[0, 1, 2].map((index) => (
				<Pagination key={index} current={index}>
					<Page text="1" />
					<Page text="2" />
					<Page text="3" />
				</Pagination>
			))}
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A default pagination - Page 1',
			component: () => (
				<GEL brand={brand}>
					<Pagination current={0}>
						<Page text="1" />
						<Page text="2" />
						<Page text="3" />
					</Pagination>
				</GEL>
			),
		},
		{
			heading: 'A default pagination - Page 2',
			component: () => (
				<GEL brand={brand}>
					<Pagination current={1}>
						<Page text="1" />
						<Page text="2" />
						<Page text="3" />
					</Pagination>
				</GEL>
			),
		},
		{
			heading: 'A default pagination - Page 3',
			component: () => (
				<GEL brand={brand}>
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
