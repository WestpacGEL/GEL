import { GEL } from '@westpac/core';
import React from 'react';

import { ButtonGroup, Item } from '@westpac/button-group';
import { blenderButton } from '@westpac/button';

import { blenderButtonGroup } from '../src/overrides/buttonGroup';
import { blenderButton as blenderBtnGroupBtn } from '../src/overrides/button';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button-group'] = {
		ButtonGroup: {
			styles: blenderButtonGroup.styles,
		},
		Button: {
			component: (props) => <span {...props} />,
			styles: blenderBtnGroupBtn.styles,
		},
	};
	return (
		<GEL brand={overridesWithTokens} noPrefix>
			<ButtonGroup
				name="x"
				data={[
					{ text: 'Text', value: 'x' },
					{ text: 'Text', value: 'y' },
					{ text: 'Text', value: 'z' },
				]}
			/>
			<ButtonGroup
				name="y"
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
			attributes: blenderButtonGroup.attributes,
		},
		Button: {
			component: blenderBtnGroupBtn.component,
			attributes: blenderBtnGroupBtn.attributes,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Button: {
			attributes: blenderButton.attributes,
		},
	};

	return [
		{
			heading: 'A default button group',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<ButtonGroup name="item-name1" look="hero">
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
		{
			heading: 'A primary button group',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<ButtonGroup name="item-name2" look="primary">
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
		{
			heading: 'A faint button group',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<ButtonGroup name="item-name3" look="faint">
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
				<GEL brand={overridesWithTokens} noPrefix>
					<ButtonGroup name="item-name4" block>
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
		{
			heading: 'A disabled button group',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<ButtonGroup name="item-name3" disabled>
						<Item value="value1">Your text</Item>
						<Item value="value2">Your text</Item>
						<Item value="value3">Your text</Item>
					</ButtonGroup>
				</GEL>
			),
		},
	];
}
