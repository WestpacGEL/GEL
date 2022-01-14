import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';
// @ts-ignore
import { COLORS } from '@westpac/wbc/tokens/colors';

export const colorSwatch = component({
	component: ({ colors }) => (
		<NotEditable>
			<ul>
				{colors.value.map((val) => (
					<li key={val}>{val}</li>
				))}
			</ul>
		</NotEditable>
	),
	label: 'Color swatch',
	props: {
		colors: fields.multiselect({
			label: 'Colors',
			options: Object.keys(COLORS)
				.concat('Secondary Colors')
				.map((key) => {
					return { value: key, label: key };
				}),
			defaultValue: [],
		}),
	},
});
