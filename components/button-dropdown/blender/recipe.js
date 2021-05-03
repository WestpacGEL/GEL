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
			component: blenderButtonDropdown.component,
			styles: blenderButtonDropdown.styles,
		},
		Heading: {
			component: blenderHeading.component,
		},
		Panel: {
			component: blenderPanel.component,
			styles: blenderPanel.styles,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Button: {
			component: blenderButton.component,
			styles: blenderButton.styles,
		},
		Icon: {
			component: blenderIcon.component,
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
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
			component: blenderButtonDropdown.component,
			attributes: blenderButtonDropdown.attributes,
		},
		Heading: {
			component: blenderHeading.component,
		},
		Panel: {
			component: blenderPanel.component,
			attributes: blenderPanel.attributes,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Button: {
			component: blenderButton.component,
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
				<GEL brand={overridesWithTokens}>
					<ButtonDropdown text="Default" instanceIdPrefix="GEL-buttonDropdown-default">
						<p>
							Your default <a href="#">button-dropdown</a> content
						</p>
					</ButtonDropdown>{' '}
					{looks.map((look) => (
						<Fragment key={look}>
							<ButtonDropdown
								look={look}
								text={titleCase(look)}
								instanceIdPrefix={`GEL-buttonDropdown-${look}`}
							>
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
				<GEL brand={overridesWithTokens}>
					<ButtonDropdown soft text="Default" instanceIdPrefix="GEL-buttonDropdown-default-soft">
						<p>
							Your default <a href="#">button-dropdown</a> content
						</p>
					</ButtonDropdown>{' '}
					{looks.map((look) => (
						<Fragment key={look}>
							<ButtonDropdown
								look={look}
								soft
								text={titleCase(look)}
								instanceIdPrefix={`GEL-buttonDropdown-${look}-soft`}
							>
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
				<GEL brand={overridesWithTokens}>
					<ButtonDropdown
						text="Default with headings"
						instanceIdPrefix="GEL-buttonDropdown-headings"
					>
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
				<GEL brand={overridesWithTokens}>
					<ButtonDropdown
						dropdownSize="small"
						text="Small dropdown"
						instanceIdPrefix="GEL-buttonDropdown-small"
					>
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
					<GEL brand={overridesWithTokens}>
						<ButtonDropdown
							dropdownSize={size}
							text={`${titleCase(size)} dropdown`}
							instanceIdPrefix={`GEL-buttonDropdown-${size}`}
						>
							<p>Your {size} dropdown content</p>
						</ButtonDropdown>
					</GEL>
				),
			})),
	];
}
