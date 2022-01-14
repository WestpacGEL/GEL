import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';

export const introSection = component({
	component: ({ description, showPackageInfo, showTableOfContents }) => (
		<div>
			<p>{description}</p>
			<NotEditable>
				show Package info: {showPackageInfo.value + ''}, showTableOfContents:{' '}
				{showTableOfContents.value + ''}
			</NotEditable>
		</div>
	),
	label: 'Intro Section',
	props: {
		description: fields.child({ kind: 'inline', placeholder: '', formatting: 'inherit' }),
		showTableOfContents: fields.checkbox({ label: 'Show Table of Contents' }),
		showPackageInfo: fields.checkbox({ label: 'Show Package info' }),
	},
});
