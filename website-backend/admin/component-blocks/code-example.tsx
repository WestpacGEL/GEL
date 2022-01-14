import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';
import { data } from './code-examples-data';
const options = data.map((o: string) => ({ label: o, value: o }));

export const codeExample = component({
	component: ({ codeExample }) => <NotEditable>{codeExample.value}</NotEditable>,
	label: 'Code Example',
	props: {
		codeExample: fields.select({ label: 'Code example', options, defaultValue: options[0].value }),
		showCode: fields.checkbox({ label: 'Show Code', defaultValue: false }),
	},
});

export const visionFilters = component({
	component: ({ codeExample }) => <NotEditable>{codeExample.value}</NotEditable>,
	label: 'Vision Filters',
	props: {
		codeExample: fields.select({ label: 'Code example', options, defaultValue: options[0].value }),
	},
});
