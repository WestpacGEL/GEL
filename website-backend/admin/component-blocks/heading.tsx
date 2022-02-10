import { component, fields, FormField } from '@keystone-6/fields-document/component-blocks';
import { Heading as GELHeading } from '@westpac/heading';
import { GEL, useMediaQuery, useBrand } from '@westpac/core';
import brand from '@westpac/wbc';
// @ts-ignore
import merge from 'lodash.merge';
import { getTypeScaleMargin } from '../../../website/src/components/body';

import { Select, FieldContainer, FieldLabel } from '@keystone-ui/fields';
import { ReactNode } from 'react';

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

function Heading({
	level,
	codeStyles,
	removeTopMargin,
	size,
	content,
}: {
	level: string;
	size: number;
	codeStyles: boolean;
	removeTopMargin: boolean;
	content: ReactNode;
}) {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return (
		<GELHeading
			tag={level}
			size={size <= 6 ? [7, null, size] : size}
			uppercase={size === 10}
			overrides={{
				Heading: {
					styles: (styles: any) =>
						merge({}, styles, {
							...mq({
								scrollMarginTop: [
									`calc(66px + 66px + ${SPACING(7)})`,
									null,
									`calc(66px + 90px + ${SPACING(10)})`,
								],
								marginTop: !removeTopMargin && getTypeScaleMargin(size).top,
								marginBottom: codeStyles
									? getTypeScaleMargin(size).bottomTight
									: getTypeScaleMargin(size).bottom,
							})[0],
						}),
				},
			}}
		>
			{content}
		</GELHeading>
	);
}

export const heading = component({
	component: (props) => {
		return (
			<GEL brand={brand}>
				<Heading
					codeStyles={props.codeStyles.value}
					content={props.content}
					level={props.level.value}
					removeTopMargin={props.removeTopMargin.value}
					size={props.size.value}
				/>
			</GEL>
		);
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
		codeStyles: fields.checkbox({ label: 'Use code example styles' }),
		removeTopMargin: fields.checkbox({ label: 'Remove top margin' }),
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
