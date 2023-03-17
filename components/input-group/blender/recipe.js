import React from 'react';
import { GEL, titleCase } from '@westpac/core';
import { InputGroup } from '@westpac/input-group';
import { blenderTextInput, blenderSelect, Select } from '@westpac/text-input';
import { Button, blenderButton } from '@westpac/button';

import { blenderText } from '../src/overrides/text';
import { blenderTextInput as blenderGroupTextInput } from '../src/overrides/textInput';
import { blenderButton as blenderGroupButton } from '../src/overrides/button';
import { blenderSelect as blenderGroupSelect } from '../src/overrides/select';

const sizes = ['small', 'medium', 'large', 'xlarge'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/input-group'] = {
		Text: {
			component: blenderText.component,
			styles: blenderText.styles,
		},
		TextInput: {
			component: ({ invalid, ...props }) => <input {...props} />,
			styles: blenderGroupTextInput.styles,
		},
		Button: {
			component: (props) => <button {...props} />,
			styles: blenderGroupButton.styles,
		},
		Select: {
			component: (props) => <select {...props} />,
			styles: blenderGroupSelect.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			{/* This is a special case so we can genereate a base style for the text component */}
			<InputGroup name="TEXT" label="TEXT" before="TEXT" />
			<InputGroup name="TEXT" label="TEXT" after="TEXT" />
			<InputGroup name="TEXT" label="TEXT" before="TEXT" after="TEXT" />
			{sizes.map((size) => (
				<InputGroup name="TEXT" label="TEXT" size={size} key={size} after="TEXT" />
			))}
			<InputGroup
				name="TEXT"
				label="TEXT"
				after={
					<Select
						name="TEXT"
						label="TEXT"
						data={[
							{ text: 'TEXT', value: '' },
							{ text: 'TEXT', value: '' },
						]}
					/>
				}
			/>
			{/* Adding button for here now since button styles are a different version from input-group version */}
			<Button>TEXT</Button>
			<InputGroup name="TEXT" label="TEXT" before="TEXT" after="TEXT" />
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/input-group'] = {
		Text: {
			component: blenderText.component,
			attributes: blenderText.attributes,
		},
		TextInput: {
			component: blenderGroupTextInput.component,
		},
		Select: {
			component: blenderGroupSelect.component,
		},
		Button: {
			component: blenderGroupButton.component,
		},
	};
	overridesWithTokens['@westpac/text-input'] = {
		TextInput: {
			attributes: blenderTextInput.attributes,
		},
		Select: {
			attributes: blenderSelect.attributes,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Button: {
			component: blenderButton.component,
			attributes: blenderButton.attributes,
		},
	};
	return [
		// Before
		{
			heading: 'Add-on before',
			subheading: 'Text',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						name="inputgroup-before-text"
						label="Your input label text"
						data={{
							before: { inputType: 'text', data: 'AUS $' },
						}}
					/>
				</GEL>
			),
		},
		{
			subheading: 'Button',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						name="inputgroup-before-button"
						label="Your input label text"
						before={<Button>Search</Button>}
					/>
				</GEL>
			),
		},
		{
			subheading: 'Select',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						name="inputgroup-before-select"
						label="Your input label text"
						before={
							<Select
								label="inputgroup-before-select-currency"
								data={[
									{ text: 'Select', value: '' },
									{ text: 'AUD $', value: 'AUD $' },
									{ text: 'USD $', value: 'USD $' },
									{ text: 'GBP £', value: 'GBP £' },
								]}
							/>
						}
					/>
				</GEL>
			),
		},

		// After
		{
			Heading: 'Add-on after',
			subheading: 'Text',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup name="inputgroup-after-text" label="Your input label text" after=".00" />
				</GEL>
			),
		},
		{
			subheading: 'Button',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						name="inputgroup-after-button"
						label="Your input label text"
						after={<Button>Submit</Button>}
					/>
				</GEL>
			),
		},
		{
			subheading: 'Select',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						name="inputgroup-after-select"
						label="Your input label text"
						after={
							<Select
								label={'inputgroup-after-select-currency'}
								data={[
									{ text: 'Yearly', value: 'Yearly' },
									{ text: 'Monthly', value: 'Monthly' },
									{ text: 'Weekly', value: 'Weekly' },
								]}
							/>
						}
					/>
				</GEL>
			),
		},

		// Before + after
		{
			heading: 'Add-on before and after',
			subheading: 'Text and button add-ons',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						name="inputgroup-before-text-after-button"
						label="Your input label text"
						before="AUS $"
						after={<Button>Submit</Button>}
					/>
				</GEL>
			),
		},
		{
			subheading: 'Text add-ons',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						name="inputgroup-before-text-after-text"
						label="Your input label text"
						before="AUS $"
						after=".00"
					/>
				</GEL>
			),
		},
		{
			subheading: 'Button add-ons',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						name="inputgroup-before-button-after-button"
						label="Your input label text"
						before={<Button>-</Button>}
						after={<Button>+</Button>}
					/>
				</GEL>
			),
		},

		// Sizes
		...sizes.map((size, i) => ({
			...(i === 0 && { heading: 'Input-group sizes' }),
			subheading: titleCase(size),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						size={size}
						name={`inputgroup-size-${size}`}
						label="Your input label text"
						before={
							<Select
								size={size}
								label={`inputgroup-size-${size}-currency`}
								data={[
									{ text: 'Select', value: '' },
									{ text: 'AUD $', value: 'AUD $' },
									{ text: 'USD $', value: 'USD $' },
									{ text: 'GBP £', value: 'GBP £' },
								]}
							/>
						}
						after=".00"
					/>
				</GEL>
			),
		})),
	];
}
