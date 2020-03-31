import * as React from 'react';
import { Heading, toolbarElement, plugins } from '../headings';

export let type = 'heading-4';

export const ToolbarElement = toolbarElement(type);
export const getPlugins = plugins(type);

export function Node({ attributes, children }) {
	return (
		<Heading attributes={attributes} level={4}>
			{children}
		</Heading>
	);
}
