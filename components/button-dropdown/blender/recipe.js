import { GEL, titleCase } from '@westpac/core';
import React, { Fragment } from 'react';

import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { blenderButton, blenderIcon } from '@westpac/button';

import { blenderButtonDropdown } from '../src/overrides/buttonDropdown';
import { blenderHeading } from '../src/overrides/heading';
import { blenderPanel } from '../src/overrides/panel';

const looks = ['primary', 'hero', 'faint'];
const dropdownSizes = ['small', 'medium', 'large'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button-dropdown'] = {
		ButtonDropdown: {
			styles: blenderButtonDropdown.styles,
		},
		Heading: {
			component: blenderHeading.component,
		},
		Panel: {
			styles: blenderPanel.styles,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Button: {
			styles: blenderButton.styles,
		},
		Icon: {
			component: blenderIcon.component,
		},
	};
	return (
		<GEL brand={overridesWithTokens} noPrefix>
			{/* Default */}
			<ButtonDropdown text="Text">Text</ButtonDropdown>
			<ButtonDropdown text="Text" open>
				Text
			</ButtonDropdown>

			{/* Headings */}
			<ButtonDropdown text="Text">
				<Heading>Text</Heading>
				Text
			</ButtonDropdown>

			{/* Looks */}
			{looks.map((look) => (
				<ButtonDropdown key={look} look={look} text="Text">
					Text
				</ButtonDropdown>
			))}
			{looks.map((look) => (
				<ButtonDropdown key={look} look={look} soft text="Text">
					Text
				</ButtonDropdown>
			))}

			{/* Dropdown sizes */}
			{dropdownSizes.map((size) => (
				<ButtonDropdown key={size} dropdownSize={size} text="Text">
					Text
				</ButtonDropdown>
			))}
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button-dropdown'] = {
		ButtonDropdown: {
			attributes: blenderButtonDropdown.attributes,
		},
		Heading: {
			component: blenderHeading.component,
		},
		Panel: {
			attributes: blenderPanel.attributes,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Button: {
			attributes: blenderButton.attributes,
		},
		Icon: {
			component: blenderIcon.component,
		},
	};
	return [
		// Looks
		{
			heading: 'Button looks',
			subheading: 'Standard',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<ButtonDropdown text="Default">
						<p>
							Your default <a href="#">button-dropdown</a> content
						</p>
					</ButtonDropdown>{' '}
					{looks.map((look) => (
						<Fragment key={look}>
							<ButtonDropdown look={look} text={titleCase(look)}>
								<p>
									Your {look} <a href="#">button-dropdown</a> content
								</p>
							</ButtonDropdown>{' '}
						</Fragment>
					))}
				</GEL>
			),
		},
		{
			subheading: 'Soft',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<ButtonDropdown soft text="Default">
						<p>
							Your default <a href="#">button-dropdown</a> content
						</p>
					</ButtonDropdown>{' '}
					{looks.map((look) => (
						<Fragment key={look}>
							<ButtonDropdown look={look} soft text={titleCase(look)}>
								<p>
									Your soft {look} <a href="#">button-dropdown</a> content
								</p>
							</ButtonDropdown>{' '}
						</Fragment>
					))}
				</GEL>
			),
		},

		// Headings
		{
			heading: 'Dropdown headings',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<ButtonDropdown text="Default with headings">
						<Heading>First heading</Heading>
						<p>Example dropdown content...</p>
						<p>Example dropdown content...</p>
						<p>Example dropdown content...</p>
						<p>Example dropdown content...</p>
						<p>Example dropdown content...</p>
						<Heading>Second heading</Heading>
						<p>Example dropdown content...</p>
						<p>Example dropdown content...</p>
						<p>Example dropdown content...</p>
					</ButtonDropdown>
				</GEL>
			),
		},

		// Dropdown sizes
		{
			heading: 'Dropdown sizes',
			subheading: 'Small',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<ButtonDropdown dropdownSize="small" text="Small dropdown">
						<p>Your small dropdown content</p>
					</ButtonDropdown>
				</GEL>
			),
		},
		...dropdownSizes
			.filter((size) => size !== 'small')
			.map((size) => ({
				subheading: titleCase(size),
				component: () => (
					<GEL brand={overridesWithTokens} noPrefix>
						<ButtonDropdown dropdownSize={size} text={`${titleCase(size)} dropdown`}>
							<p>Your {size} dropdown content</p>
						</ButtonDropdown>
					</GEL>
				),
			})),
	];
}
