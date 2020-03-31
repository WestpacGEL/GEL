import * as React from 'react';
import { Heading, plugins } from '../headings';

export let type = 'heading-3';

export const getPlugins = plugins(type);

export function Node({ attributes, children }) {
	return (
		<Heading attributes={attributes} level={3}>
			{children}
		</Heading>
	);
}
