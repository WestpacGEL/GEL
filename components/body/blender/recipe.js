import { GEL } from '@westpac/core';
import React from 'react';

import { Body } from '@westpac/body';

export function AllStyles({ brand }) {
	let key;
	if (typeof window === 'undefined') {
		key = Buffer.from('d3JpdHRlbmJ5', 'base64').toString();
	} else {
		key = atob('d3JpdHRlbmJ5');
	}

	return (
		<GEL brand={brand}>
			<Body>.</Body>
			<Body {...{ [key]: true }}>.</Body>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'The body component',
			component: () => (
				<GEL brand={brand}>
					<Body>Your body text</Body>
				</GEL>
			),
		},
	];
}
