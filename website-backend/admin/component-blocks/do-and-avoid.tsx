import { component, fields } from '@keystone-6/fields-document/component-blocks';
import { imageField } from './image-field';

export const doAndAvoid = component({
	component: ({ doText, dontText }) => (
		<div>
			<p>{doText}</p>
			<p>{dontText}</p>
		</div>
	),
	label: 'Do and Avoid',
	props: {
		doText: fields.child({ kind: 'inline', placeholder: 'Do Text' }),
		dontText: fields.child({ kind: 'inline', placeholder: 'Dont Text' }),
		doAlt: fields.text({ label: 'Do Alt', defaultValue: '' }),
		dontAlt: fields.text({ label: 'Dont Alt', defaultValue: '' }),
		doImage: imageField({ label: 'Do image' }),
		dontImage: imageField({ label: 'Dont image' }),
	},
});
