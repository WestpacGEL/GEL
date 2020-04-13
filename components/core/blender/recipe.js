import React, { Fragment } from 'react';

import { Core } from '../src/index.js';

export function AllStyles({ brand, children }) {
	return <Core brand={brand}>{children}</Core>;
}

export function Docs({ brand }) {
	return [
		{
			heading: 'The Core Component',
			component: () => <Core>Add your GEL components inside the Core component</Core>,
		},
	];
}
