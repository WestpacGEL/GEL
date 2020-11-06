import React from 'react';

import { GEL } from '../src/index.js';

export function AllStyles({ brand, children }) {
	return <GEL brand={brand}>{children}</GEL>;
}

export function Docs({ brand }) {
	return [
		{
			heading: 'Core component',
			component: () => <GEL brand={brand}>Add your GEL components inside the Core component.</GEL>,
		},
	];
}
