import { GEL } from '@westpac/core';
import React, { Fragment } from 'react';
import { TextInput, Select, Textarea } from '@westpac/text-input';

import { blenderTextInput } from '../src/overrides/textInput';
import { blenderSelect } from '../src/overrides/select';
import { blenderTextarea } from '../src/overrides/textarea';

const components = [TextInput, Select, Textarea];
const sizes = ['small', 'large', 'xlarge'];
const widths = [2, 3, 4, 5, 10, 20, 30];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/text-input'] = {
		TextInput: {
			styles: blenderTextInput.styles,
		},
		Select: {
			styles: blenderSelect.styles,
		},
		Textarea: {
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
			attributes: blenderTextInput.attributes,
		},
		Select: {
			attributes: blenderSelect.attributes,
		},
		Textarea: {
			attributes: blenderTextarea.attributes,
		},
	};
	return [
		{
			heading: 'A default text input',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<TextInput />
				</GEL>
			),
		},
		...['small', 'medium', 'large', 'xlarge'].map((size) => ({
			heading: `A ${size} text input`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<TextInput size={size} placeholder={size} />
				</GEL>
			),
		})),
		{
			heading: 'An invalid text input',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<TextInput invalid />
				</GEL>
			),
		},
		{
			heading: 'An inline text input',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<TextInput inline />
				</GEL>
			),
		},
		{
			heading: 'An inline invalid text input',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<TextInput inline invalid />
				</GEL>
			),
		},
		...[2, 3, 4, 5, 10, 20, 30].map((width) => ({
			heading: `A text input with width of ${width}`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<TextInput width={width} placeholder={width} />
				</GEL>
			),
		})),
		{
			heading: 'An inline invalid text input with width of 10',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<TextInput inline invalid width={10} />
				</GEL>
			),
		},
		{
			heading: 'A default select',
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
		...['small', 'medium', 'large', 'xlarge'].map((size) => ({
			heading: `A ${size} select`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Select name={size} size={size}>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		})),
		{
			heading: 'An invalid select',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Select invalid>
						<option>Invalid</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		},
		{
			heading: 'An inline select',
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
		{
			heading: 'An inline invalid select',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Select inline invalid>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		},
		...[2, 3, 4, 5, 10, 20, 30].map((width) => ({
			heading: `A select with width of ${width}`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Select name={`width-${width}`} width={width}>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		})),
		{
			heading: 'An inline invalid select with width of 10',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Select inline invalid width={10}>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		},
		{
			heading: 'A default textarea',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Textarea />
				</GEL>
			),
		},
		...['small', 'medium', 'large', 'xlarge'].map((size) => ({
			heading: `A ${size} textarea`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Textarea size={size} placeholder={size} />
				</GEL>
			),
		})),
		{
			heading: 'An invalid textarea',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Textarea placeholder="invalid" invalid />
				</GEL>
			),
		},
		{
			heading: 'An inline textarea',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Textarea inline />
				</GEL>
			),
		},
		{
			heading: 'An inline invalid textarea',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Textarea inline />
				</GEL>
			),
		},
		...[2, 3, 4, 5, 10, 20, 30].map((width) => ({
			heading: `A textarea with width of ${width}`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Textarea width={width} placeholder={'W'.repeat(width)} />
				</GEL>
			),
		})),
		{
			heading: 'An inline invalid textarea with width of 10',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Textarea inline invalid width={10} />
				</GEL>
			),
		},
	];
}
