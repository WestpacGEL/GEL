import { component, fields, FormField } from '@keystone-6/fields-document/component-blocks';

import { Select, FieldContainer, FieldLabel } from '@keystone-ui/fields';

const levelOptions = [
	{ label: 'H2', value: 'h2' },
	{ label: 'H3', value: 'h3' },
	{ label: 'H4', value: 'h4' },
] as const;

const sizeOptions = [
	{ label: '6', value: 6 },
	{ label: '8', value: 8 },
	{ label: '10', value: 10 },
] as const;

export const heading = component({
	component: ({ level, content }) => {
		return <level.value>{content}</level.value>;
	},
	props: {
		content: fields.child({ kind: 'inline', placeholder: '', formatting: 'inherit' }),
		level: fields.select({
			defaultValue: 'h2',
			label: 'Level',
			options: levelOptions,
		}),
		size: numberSelect({
			defaultValue: 6,
			label: 'Size',
			options: sizeOptions,
		}),
		addTableContent: fields.checkbox({ label: 'Add to table of contents' }),
	},
	label: 'Heading',
});

function numberSelect<Option extends { label: string; value: number }>({
	label,
	options,
	defaultValue,
}: {
	label: string;
	options: readonly Option[];
	defaultValue: Option['value'];
}): FormField<Option['value'], readonly Option[]> {
	const optionValuesSet = new Set(options.map((x) => x.value));
	const optionsWithStrings = options.map((option) => ({
		value: option.value.toString(),
		label: option.label,
	}));
	return {
		kind: 'form',
		Input({ value, onChange, autoFocus }) {
			const stringValue = value.toString();
			return (
				<FieldContainer>
					<FieldLabel>{label}</FieldLabel>
					<Select
						autoFocus={autoFocus}
						value={optionsWithStrings.find((option) => option.value === stringValue) || null}
						onChange={(option) => {
							if (option) {
								onChange(parseInt(option.value));
							}
						}}
						options={optionsWithStrings}
					/>
				</FieldContainer>
			);
		},
		options,
		defaultValue,
		validate(value) {
			return typeof value === 'number' && optionValuesSet.has(value);
		},
	};
}
