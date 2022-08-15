import React from 'react';
import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';
import { data } from './code-examples-data';

const options = data.map((o: string) => ({ label: o, value: o }));

export const codeExample = component({
	preview: ({ fields: { codeExample } }) => (
		<div>
			<NotEditable>{codeExample.value}</NotEditable>
		</div>
	),
	label: 'Code Example',
	schema: {
		codeExample: fields.select({ label: 'Code example', options, defaultValue: options[0].value }),
		showCode: fields.checkbox({ label: 'Show Code', defaultValue: false }),
	},
});

export const visionFilters = component({
	preview: ({ fields: { codeExample } }) => (
		<div>
			<NotEditable>{codeExample.value}</NotEditable>
		</div>
	),
	label: 'Vision Filters',
	schema: {
		codeExample: fields.select({ label: 'Code example', options, defaultValue: options[0].value }),
	},
});
