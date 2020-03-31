import * as React from 'react';
import { Heading, toolbarElement, plugins } from '../headings';

export let type = 'heading-2';

export const ToolbarElement = toolbarElement(type);
export const getPlugins = plugins(type);

export function Node({ attributes, children }) {
	return (
		<Heading attributes={attributes} level={2}>
			{children}
		</Heading>
	);
}
