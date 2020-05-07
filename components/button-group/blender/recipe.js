import { GEL } from '@westpac/core';
import React from 'react';

import { ButtonGroup, Item } from '@westpac/button-group';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<ButtonGroup
				defaultValue="y"
				name="x"
				data={[
					{ text: 'Text', value: 'x' },
					{ text: 'Text', value: 'y' },
					{ text: 'Text', value: 'z' },
				]}
			/>
			<ButtonGroup
				defaultValue="y"
				look="primary"
				name="x"
				data={[
					{ text: 'Text', value: 'x' },
					{ text: 'Text', value: 'y' },
					{ text: 'Text', value: 'z' },
				]}
			/>
			<ButtonGroup
				defaultValue="y"
				look="hero"
				name="x"
				data={[
					{ text: 'Text', value: 'x' },
					{ text: 'Text', value: 'y' },
					{ text: 'Text', value: 'z' },
				]}
			/>
			<ButtonGroup
				defaultValue="y"
				block
				name="x"
				data={[
					{ text: 'Text', value: 'x' },
					{ text: 'Text', value: 'y' },
					{ text: 'Text', value: 'z' },
				]}
			/>
			<ButtonGroup
				defaultValue="y"
				disabled
				name="x"
				data={[
					{ text: 'Text', value: 'x' },
					{ text: 'Text', value: 'y' },
					{ text: 'Text', value: 'z' },
				]}
			/>
			<ButtonGroup
				defaultValue="y"
				size="small"
				name="x"
				data={[
					{ text: 'Text', value: 'x' },
					{ text: 'Text', value: 'y' },
					{ text: 'Text', value: 'z' },
				]}
			/>
			<ButtonGroup
				defaultValue="y"
				size="medium"
				name="x"
				data={[
					{ text: 'Text', value: 'x' },
					{ text: 'Text', value: 'y' },
					{ text: 'Text', value: 'z' },
				]}
			/>
			<ButtonGroup
				defaultValue="y"
				size="large"
				name="x"
				data={[
					{ text: 'Text', value: 'x' },
					{ text: 'Text', value: 'y' },
					{ text: 'Text', value: 'z' },
				]}
			/>
			<ButtonGroup
				defaultValue="y"
				size="xlarge"
				name="x"
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
	return [
		{
			heading: 'A primary button group',
			component: () => (
				<GEL brand={brand}>
					<ButtonGroup name="item-name1">
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
		{
			heading: 'A hero button group',
			component: () => (
				<GEL brand={brand}>
					<ButtonGroup name="item-name2" look="hero">
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
		{
			heading: 'A button group with a selected field',
			component: () => (
				<GEL brand={brand}>
					<ButtonGroup name="item-name3" defaultValue="value2">
						<Item value="value1">Your text</Item>
						<Item value="value2">Your selected text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
		{
			heading: 'A disabled button group',
			component: () => (
				<GEL brand={brand}>
					<ButtonGroup name="item-name4" disabled>
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
		{
			heading: 'A block button group',
			component: () => (
				<GEL brand={brand}>
					<ButtonGroup name="item-name5" block>
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
		...['small', 'medium', 'large', 'xlarge'].map((size, i) => ({
			heading: `A ${size} button group`,
			component: () => (
				<GEL brand={brand}>
					<ButtonGroup name={`item-name${5 + i}`} size={size}>
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		})),
	];
}
