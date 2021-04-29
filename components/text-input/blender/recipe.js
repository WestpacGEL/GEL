import { GEL } from '@westpac/core';
import React, { Fragment } from 'react';
import { TextInput, Select, Textarea } from '@westpac/text-input';

import { blenderTextInput } from '../src/overrides/textInput';
import { blenderSelect } from '../src/overrides/select';
import { blenderTextarea } from '../src/overrides/textarea';

const components = [TextInput, Select, Textarea];
const sizes = ['small', 'medium', 'large', 'xlarge'];
const widths = [2, 3, 4, 5, 10, 20, 30];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/text-input'] = {
		TextInput: {
			component: blenderTextInput.component,
			styles: blenderTextInput.styles,
		},
		Select: {
			component: blenderSelect.component,
			styles: blenderSelect.styles,
		},
		Textarea: {
			component: blenderTextarea.component,
			styles: blenderTextarea.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			{components.map((Component, i) => (
				<Fragment key={i}>
					<Component />
					<Component inline />
					<Component invalid />
					{sizes.map((size) => (
						<Component size={size} key={size} />
					))}
					{widths.map((width) => (
						<Component width={width} key={width} />
					))}
				</Fragment>
			))}
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/text-input'] = {
		TextInput: {
			component: blenderTextInput.component,
			attributes: blenderTextInput.attributes,
		},
		Select: {
			component: blenderSelect.component,
			attributes: blenderSelect.attributes,
		},
		Textarea: {
			component: blenderTextarea.component,
			attributes: blenderTextarea.attributes,
		},
	};
	return [
		// Default text input
		{
			heading: 'Text input',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<TextInput />
				</GEL>
			),
		},

		// Text input sizes
		{
			subheading: 'Sizes',
			component: () => (
				<GEL brand={overridesWithTokens}>
					{sizes.map((size) => (
						<TextInput key={size} size={size} placeholder={size} />
					))}
				</GEL>
			),
		},

		// Invalid text input
		{
			subheading: 'Invalid',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<TextInput invalid />
				</GEL>
			),
		},

		// Inline text input
		{
			subheading: 'Inline',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<TextInput inline />
				</GEL>
			),
		},

		// Text input widths
		{
			subheading: 'Fixed widths',
			component: () => (
				<GEL brand={overridesWithTokens}>
					{widths.map((width) => (
						<TextInput key={width} width={width} placeholder={`${width} chars`} />
					))}
				</GEL>
			),
		},

		// Default select
		{
			heading: 'Select',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Select name="select">
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		},

		// Select sizes
		{
			subheading: 'Sizes',
			component: () => (
				<GEL brand={overridesWithTokens}>
					{sizes.map((size) => (
						<Select key={size} name={size} size={size}>
							<option>Select ({size})</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</Select>
					))}
				</GEL>
			),
		},

		// Invalid select
		{
			subheading: 'Invalid',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Select invalid>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		},

		// Inline select
		{
			subheading: 'Inline',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Select inline>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		},

		// Select widths
		{
			subheading: 'Fixed widths',
			component: () => (
				<GEL brand={overridesWithTokens}>
					{widths.map((width) => (
						<Select key={width} name={`width-${width}`} width={width}>
							<option>Select ({width} chars)</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</Select>
					))}
				</GEL>
			),
		},

		// Default textarea
		{
			heading: 'Textarea',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Textarea />
				</GEL>
			),
		},

		// Textarea sizes
		{
			subheading: 'Sizes',
			component: () => (
				<GEL brand={overridesWithTokens}>
					{sizes.map((size) => (
						<Textarea key={size} size={size} placeholder={size} />
					))}
				</GEL>
			),
		},

		// Invalid textarea
		{
			subheading: 'Invalid',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Textarea invalid />
				</GEL>
			),
		},

		// Inline textarea
		{
			subheading: 'Inline',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Textarea inline />
				</GEL>
			),
		},

		// Textarea widths
		{
			subheading: 'Fixed widths',
			component: () => (
				<GEL brand={overridesWithTokens}>
					{widths.map((width) => (
						<Textarea key={width} width={width} placeholder={`${width} chars`} />
					))}
				</GEL>
			),
		},
	];
}
