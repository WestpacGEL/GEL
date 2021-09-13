import { GEL, titleCase } from '@westpac/core';
import React, { Fragment } from 'react';

import { List, Item } from '@westpac/list';
import { AndroidIcon } from '@westpac/icon';

import { blenderIcon } from '../src/overrides/icon';
import { blenderList } from '../src/overrides/list';

const types = ['bullet', 'link', 'tick', 'cross', 'ordered', 'icon', 'unstyled', 'none'];
const looks = ['primary', 'hero', 'neutral'];

const itemText = (type = 'bullet', text = 'Your list item text') =>
	type === 'link' ? <a href="#">{text}</a> : text;

const items = (type = 'bullet') => (
	<Fragment>
		<Item>{itemText(type)}</Item>
		<Item>
			{itemText(type)}
			<List>
				<Item>{itemText(type)}</Item>
				<Item>{itemText(type)}</Item>
				<Item>{itemText(type)}</Item>
			</List>
		</Item>
		<Item>{itemText(type)}</Item>
	</Fragment>
);

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/list'] = {
		List: {
			component: blenderList.component,
			styles: blenderList.styles,
		},
		Icon: {
			component: blenderIcon.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<List type="none">
				<Item>Text</Item>
			</List>
			<List type="bullet">
				<Item>Text</Item>
			</List>
			<List type="bullet" look="primary">
				<Item>Text</Item>
			</List>
			<List type="bullet" look="neutral">
				<Item>Text</Item>
			</List>
			<List type="link">
				<Item>Text</Item>
			</List>
			<List type="tick">
				<Item>Text</Item>
			</List>
			<List type="cross">
				<Item>Text</Item>
			</List>
			<List type="unstyled">
				<Item>Text</Item>
			</List>
			<List type="ordered">
				<Item>Text</Item>
			</List>
			<List type="icon" icon={AndroidIcon}>
				<Item>Text</Item>
			</List>
			<List type="none" spacing="large">
				<Item>Text</Item>
			</List>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/list'] = {
		List: {
			component: blenderList.component,
			attributes: blenderList.attributes,
		},
		Icon: {
			component: blenderIcon.component,
		},
	};
	return [
		// Bullet
		{
			heading: 'Bullet lists',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="bullet">{items()}</List>
				</GEL>
			),
		},
		...looks.map((look) => ({
			subheading: titleCase(look),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="bullet" look={look}>
						{items()}
					</List>
				</GEL>
			),
		})),

		// Other types
		...types
			.filter((type) => ['bullet', 'none'].indexOf(type) < 0)
			.map((type) => ({
				heading: `${titleCase(type)} list`,
				component: () => (
					<GEL brand={overridesWithTokens}>
						<List type={type} icon={type == 'icon' ? AndroidIcon : undefined}>
							{items(type)}
						</List>
					</GEL>
				),
			})),

		// Spacing
		{
			heading: 'List spacing',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="bullet">{items()}</List>
				</GEL>
			),
		},
		{
			subheading: 'Large',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="bullet" spacing="large">
						{items()}
					</List>
				</GEL>
			),
		},
	];
}
