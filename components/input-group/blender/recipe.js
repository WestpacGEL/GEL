import { GEL } from '@westpac/core';
import React, { Fragment } from 'react';
import { InputGroup, Before, After } from '@westpac/input-group';
import { blenderTextInput, blenderSelect } from '@westpac/text-input';

import { blenderText } from '../src/overrides/text';
import { blenderTextInput as blenderGroupTextInput } from '../src/overrides/textInput';
import { blenderButton as blenderGroupButton } from '../src/overrides/button';
import { blenderSelect as blenderGroupSelect } from '../src/overrides/select';

const sizes = ['small', 'medium', 'large', 'xlarge'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/input-group'] = {
		Text: {
			styles: blenderText.styles,
		},
		TextInput: {
			component: ({ invalid, ...props }) => <input {...props} />,
			styles: blenderGroupTextInput.styles,
		},
		// Button: {
		// 	component: (props) => <button {...props} />,
		// 	styles: blenderGroupButton.styles,
		// },
		Select: {
			component: (props) => <select {...props} />,
			styles: blenderGroupSelect.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			{/* This is a special case so we can genereate a base style for the text component */}
			<InputGroup name="TEXT" label="TEXT">
				<Before inputType="text" data="TEXT" position={'none'} />
			</InputGroup>
			<InputGroup name="TEXT" label="TEXT">
				<Before inputType="text" data="TEXT" />
			</InputGroup>
			<InputGroup name="TEXT" label="TEXT">
				<After inputType="text" data="TEXT" />
			</InputGroup>
			<InputGroup name="TEXT" label="TEXT">
				<Before inputType="text" data="TEXT" />
				<After inputType="text" data="TEXT" />
			</InputGroup>
			{sizes.map((size) => (
				<InputGroup name="TEXT" label="TEXT" size={size} key={size}>
					<After inputType="text" data="TEXT" />
				</InputGroup>
			))}
			<InputGroup name="TEXT" label="TEXT">
				<Before
					inputType="select"
					name="TEXT"
					label="TEXT"
					data={[
						{ text: 'TEXT', value: '' },
						{ text: 'TEXT', value: '' },
					]}
				/>
				<After
					inputType="select"
					name="TEXT"
					label="TEXT"
					data={[
						{ text: 'TEXT', value: '' },
						{ text: 'TEXT', value: '' },
					]}
				/>
			</InputGroup>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/input-group'] = {
		Text: {
			attributes: blenderText.attributes,
		},
		TextInput: {
			component: blenderGroupTextInput.component,
		},
		Select: {
			component: blenderGroupSelect.component,
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
	return [
		{
			heading: 'Input group with text left',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						instanceIdPrefix="GEL"
						name="inputgroup-left-text"
						label="inputgroup-left-text"
						data={{
							before: { inputType: 'text', data: 'AUS $' },
						}}
					/>
				</GEL>
			),
		},
		// {
		// 	heading: 'Input group with button left',
		// 	component: () => (
		// 		<GEL brand={brand}>
		// 			<InputGroup
		// 				instanceIdPrefix="GEL"
		// 				name="inputgroup-left-button"
		// 				label="inputgroup-left-button"
		// 				data={{
		// 					before: { inputType: 'button', data: 'Search' },
		// 				}}
		// 			/>
		// 		</GEL>
		// 	),
		// },
		{
			heading: 'Input group with select left',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						instanceIdPrefix="GEL"
						name="inputgroup-left-select"
						label="inputgroup-left-select"
						data={{
							before: {
								inputType: 'select',
								label: 'inputgroup-left-select-currency',
								data: [
									{ text: 'Select', value: '' },
									{ text: 'AUD $', value: 'AUD $' },
									{ text: 'USD $', value: 'USD $' },
									{ text: 'GBP £', value: 'GBP £' },
								],
							},
						}}
					/>
				</GEL>
			),
		},
		{
			heading: 'Input group with text right',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						instanceIdPrefix="GEL"
						name="inputgroup-right-text"
						label="inputgroup-right-text"
						data={{
							after: { inputType: 'text', data: '.00' },
						}}
					/>
				</GEL>
			),
		},
		// {
		// 	heading: 'Input group with button right',
		// 	component: () => (
		// 		<GEL brand={brand}>
		// 			<InputGroup
		// 				instanceIdPrefix="GEL"
		// 				name="inputgroup-right-button"
		// 				label="inputgroup-right-button"
		// 				data={{
		// 					after: { inputType: 'button', data: 'Submit' },
		// 				}}
		// 			/>
		// 		</GEL>
		// 	),
		// },
		{
			heading: 'Input group with select right',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						instanceIdPrefix="GEL"
						name="inputgroup-right-select"
						label="inputgroup-right-select"
						data={{
							after: {
								inputType: 'select',
								label: 'inputgroup-right-select-currency',
								data: [
									{ text: 'Yearly', value: 'Yearly' },
									{ text: 'Monthly', value: 'Monthly' },
									{ text: 'Weekly', value: 'Weekly' },
								],
							},
						}}
					/>
				</GEL>
			),
		},
		// {
		// 	heading: 'Input group with text left and button right',
		// 	component: () => (
		// 		<GEL brand={brand}>
		// 			<InputGroup
		// 				instanceIdPrefix="GEL"
		// 				name="inputgroup-left-text-right-button"
		// 				label="inputgroup-left-text-right-button"
		// 				data={{
		// 					before: { inputType: 'text', data: 'AUS $' },
		// 					after: { inputType: 'button', data: 'Submit' },
		// 				}}
		// 			/>
		// 		</GEL>
		// 	),
		// },
		// {
		// 	heading: 'Input group with text left and text right',
		// 	component: () => (
		// 		<GEL brand={overridesWithTokens}>
		// 			<InputGroup
		// 				instanceIdPrefix="GEL"
		// 				name="inputgroup-left-text-right-text"
		// 				label="inputgroup-left-text-right-text"
		// 				data={{
		// 					before: { inputType: 'text', data: 'AUS $' },
		// 					after: { inputType: 'text', data: '.00' },
		// 				}}
		// 			/>
		// 		</GEL>
		// 	),
		// },
		// {
		// 	heading: 'Input group with button left and button right',
		// 	component: () => (
		// 		<GEL brand={brand}>
		// 			<InputGroup
		// 				instanceIdPrefix="GEL"
		// 				name="inputgroup-left-button-right-button"
		// 				label="inputgroup-left-button-right-button"
		// 				data={{
		// 					before: { inputType: 'button', data: '-' },
		// 					after: { inputType: 'button', data: '+' },
		// 				}}
		// 			/>
		// 		</GEL>
		// 	),
		// },
		// {
		// 	heading: 'Input group with hero button',
		// 	component: () => (
		// 		<GEL brand={brand}>
		// 			<InputGroup
		// 				instanceIdPrefix="GEL"
		// 				look="hero"
		// 				name="inputgroup-button-hero"
		// 				label="inputgroup-button-hero"
		// 				data={{
		// 					after: { inputType: 'button', data: 'Submit' },
		// 				}}
		// 			/>
		// 		</GEL>
		// 	),
		// },
		// {
		// 	heading: 'Input group with primary button',
		// 	component: () => (
		// 		<GEL brand={brand}>
		// 			<InputGroup
		// 				instanceIdPrefix="GEL"
		// 				look="primary"
		// 				name="inputgroup-button-primary"
		// 				label="inputgroup-button-primary"
		// 				data={{
		// 					after: { inputType: 'button', data: 'Submit' },
		// 				}}
		// 			/>
		// 		</GEL>
		// 	),
		// },
		// {
		// 	heading: 'Input group with faint button',
		// 	component: () => (
		// 		<GEL brand={brand}>
		// 			<InputGroup
		// 				instanceIdPrefix="GEL"
		// 				look="faint"
		// 				name="inputgroup-button-faint"
		// 				label="inputgroup-button-faint"
		// 				data={{
		// 					after: { inputType: 'button', data: 'Submit' },
		// 				}}
		// 			/>
		// 		</GEL>
		// 	),
		// },
		...sizes.map((size) => ({
			heading: `Input group size ${size}`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						name={`inputgroup-size-${size}`}
						label={`inputgroup-size-${size}`}
						data={{
							before: {
								inputType: 'select',
								label: `inputgroup-size-${size}-currency`,
								data: [
									{ text: 'Select', value: '' },
									{ text: 'AUD $', value: 'AUD $' },
									{ text: 'USD $', value: 'USD $' },
									{ text: 'GBP £', value: 'GBP £' },
								],
							},
							after: { inputType: 'text', data: '.00' },
						}}
					/>
				</GEL>
			),
		})),
	];
}
