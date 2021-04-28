import { GEL, titleCase } from '@westpac/core';
import React, { Fragment } from 'react';

import { ButtonGroup, Item } from '@westpac/button-group';
import { blenderButton } from '@westpac/button';

import { blenderButtonGroup } from '../src/overrides/buttonGroup';
import { blenderButton as blenderBtnGroupBtn } from '../src/overrides/button';

const looks = ['primary', 'hero'];
const sizes = ['small', 'medium', 'large', 'xlarge'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button-group'] = {
		ButtonGroup: {
			component: blenderButtonGroup.component,
			styles: blenderButtonGroup.styles,
		},
		Button: {
			component: (props) => <span {...props} />,
			styles: blenderBtnGroupBtn.styles,
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
			{/* Looks */}
			<ButtonGroup
				name="default"
				data={[
					{ text: 'Text', value: 'x' },
					{ text: 'Text', value: 'y' },
					{ text: 'Text', value: 'z' },
				]}
			/>
			{looks.map((look) => (
				<ButtonGroup
					key={look}
					name={look}
					look={look}
					data={[
						{ text: 'Text', value: 'x' },
						{ text: 'Text', value: 'y' },
						{ text: 'Text', value: 'z' },
					]}
				/>
			))}

			{/* Sizes */}
			{sizes.map((size) => (
				<ButtonGroup
					key={size}
					name={size}
					size={size}
					data={[
						{ text: 'Text', value: 'x' },
						{ text: 'Text', value: 'y' },
						{ text: 'Text', value: 'z' },
					]}
				/>
			))}

			{/* Block */}
			<ButtonGroup
				name="block"
				block
				data={[
					{ text: 'Text', value: 'x' },
					{ text: 'Text', value: 'y' },
					{ text: 'Text', value: 'z' },
				]}
			/>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button-group'] = {
		ButtonGroup: {
			component: blenderButtonGroup.component,
			attributes: blenderButtonGroup.attributes,
		},
		Button: {
			component: blenderBtnGroupBtn.component,
			attributes: blenderBtnGroupBtn.attributes,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Button: {
			component: blenderButton.component,
			attributes: blenderButton.attributes,
		},
	};

	return [
		// Looks
		{
			heading: 'Button-group looks',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ButtonGroup name="example-default">
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
		...looks.map((look) => ({
			subheading: titleCase(look),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ButtonGroup name={`example-${look}`} look={look}>
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		})),

		// Sizes
		{
			heading: 'Button-group sizes',
			subheading: 'Small',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ButtonGroup name={`example-small`} size="small">
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
		...sizes
			.filter((size) => size !== 'small')
			.map((size) => ({
				subheading: titleCase(size),
				component: () => (
					<GEL brand={overridesWithTokens}>
						<ButtonGroup name={`example-${size}`} size={size}>
							<Item value="value1">Your text</Item>
							<Item value="value2">Your text</Item>
							<Item value="value3">Your text</Item>
						</ButtonGroup>
					</GEL>
				),
			})),

		// Block
		{
			heading: 'Block button-group',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ButtonGroup name="example-block" block>
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},

		// Disabled
		{
			heading: 'Disabled button-group',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ButtonGroup name="example-disabled" disabled>
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
	];
}
