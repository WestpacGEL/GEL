import { GEL } from '@westpac/core';
import React from 'react';

import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { AndroidIcon, AppleIcon } from '@westpac/icon';
import { blenderButton } from '@westpac/button';

import { blenderButtonDropdown } from '../src/overrides/buttonDropdown';
import { blenderHeading } from '../src/overrides/heading';
import { blenderPanel } from '../src/overrides/panel';

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
	};
	return (
		<GEL brand={overridesWithTokens}>
			<ButtonDropdown text="Text">Text</ButtonDropdown>
			<ButtonDropdown text="Text">
				<Heading>Text</Heading>
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="primary">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="hero">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="faint">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="primary" soft>
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="hero" soft>
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="faint" soft>
				Text
			</ButtonDropdown>
			{/* <ButtonDropdown text="Text" block>
				Text
			</ButtonDropdown> */}
			{/* <ButtonDropdown text="Text" size="small">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" size="large">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" size="xlarge">
				Text
			</ButtonDropdown> */}
			{/* <ButtonDropdown text="Text" dropdownSize="small">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" dropdownSize="medium">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" dropdownSize="large">
				Text
			</ButtonDropdown> */}
			<ButtonDropdown text="Text" open>
				Text
			</ButtonDropdown>
			{/* <ButtonDropdown iconBefore={AndroidIcon} iconAfter={AppleIcon} text="Text">
				Text
			</ButtonDropdown> */}
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
	};
	return [
		{
			heading: `A button-dropdown`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ButtonDropdown text="Your text">
						<p>Your button-dropdown</p>
					</ButtonDropdown>
				</GEL>
			),
		},
		{
			heading: `A button-dropdown with headings`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ButtonDropdown text="Your text">
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
		...['primary', 'hero', 'faint'].map((look) => ({
			heading: `A ${look} button-dropdown`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ButtonDropdown text="Your text" look={look}>
						<p>Your {look} button-dropdown</p>
					</ButtonDropdown>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint'].map((look) => ({
			heading: `A ${look} soft button-dropdown`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ButtonDropdown text="Your text" look={look} soft>
						<p>Your {look} soft button-dropdown</p>
					</ButtonDropdown>
				</GEL>
			),
		})),
		// ...['primary', 'hero', 'faint'].map((look) => ({
		// 	heading: `A ${look} block button-dropdown`,
		// 	component: () => (
		// 		<GEL brand={brand}>
		// 			<ButtonDropdown text="Your text" look={look} block>
		// 				<p>Your {look} block button-dropdown</p>
		// 			</ButtonDropdown>
		// 		</GEL>
		// 	),
		// })),
		// ...['small', 'medium', 'large', 'xlarge'].map((size) => ({
		// 	heading: `A primary ${size} button-dropdown`,
		// 	component: () => (
		// 		<GEL brand={brand}>
		// 			<ButtonDropdown text="Your text" look="primary" size={size}>
		// 				<p>Your primary {size} button-dropdown</p>
		// 			</ButtonDropdown>
		// 		</GEL>
		// 	),
		// })),
		...['small', 'medium', 'large'].map((size) => ({
			heading: `A button-dropdown with a ${size} dropdown`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<ButtonDropdown text="Your text" dropdownSize={size}>
						<p>Your button-dropdown with a {size} dropdown?</p>
					</ButtonDropdown>
				</GEL>
			),
		})),
	];
}
