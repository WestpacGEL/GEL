import { jsx, useTheme } from '@keystone-ui/core';
import { Checkbox, FieldContainer, FieldLabel } from '@keystone-ui/fields';
import {
	CardValueComponent,
	CellComponent,
	FieldController,
	FieldControllerConfig,
	FieldProps,
} from '@keystone-6/core/types';

export const Field = ({ field, value, onChange, autoFocus }: FieldProps<typeof controller>) => {
	const { fields, typography } = useTheme();
	return (
		<FieldContainer>
			<Checkbox
				autoFocus={autoFocus}
				disabled={onChange === undefined}
				onChange={(event) => {
					onChange?.(event.target.checked);
				}}
				checked={value}
			>
				<span css={{ fontWeight: typography.fontWeight.semibold, color: fields.labelColor }}>
					{field.label}
				</span>
			</Checkbox>
		</FieldContainer>
	);
};

export const Cell = () => {
	return null;
};

export const CardValue = () => {
	return null;
};

type CheckboxController = FieldController<boolean>;

export const controller = (config: FieldControllerConfig): CheckboxController => {
	return {
		path: config.path,
		label: config.label,
		graphqlSelection: config.path,
		defaultValue: false,
		deserialize(item) {
			return false;
		},
		serialize(value) {
			return { [config.path]: value };
		},
	};
};
