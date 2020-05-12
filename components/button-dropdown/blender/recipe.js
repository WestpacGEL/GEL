import { GEL } from '@westpac/core';
import React from 'react';

import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { AndroidIcon, AppleIcon } from '@westpac/icon';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
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
			<ButtonDropdown text="Text" look="primary" block>
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="hero" block>
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="faint" block>
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="primary" size="small">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="primary" size="medium">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="primary" size="large">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" look="primary" size="xlarge">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" dropdownSize="small">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" dropdownSize="medium">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" dropdownSize="large">
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" open>
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" dropdownSize="small" open>
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" dropdownSize="medium" open>
				Text
			</ButtonDropdown>
			<ButtonDropdown text="Text" dropdownSize="large" open>
				Text
			</ButtonDropdown>
			<ButtonDropdown iconBefore={AndroidIcon} iconAfter={AppleIcon} text="Text">
				Text
			</ButtonDropdown>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: `A button-dropdown`,
			component: () => (
				<GEL brand={brand}>
					<ButtonDropdown text="Your text">
						<p>Your button-dropdown</p>
					</ButtonDropdown>
				</GEL>
			),
		},
		{
			heading: `A button-dropdown with headings`,
			component: () => (
				<GEL brand={brand}>
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
				<GEL brand={brand}>
					<ButtonDropdown text="Your text" look={look}>
						<p>Your {look} button-dropdown</p>
					</ButtonDropdown>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint'].map((look) => ({
			heading: `A ${look} soft button-dropdown`,
			component: () => (
				<GEL brand={brand}>
					<ButtonDropdown text="Your text" look={look} soft>
						<p>Your {look} soft button-dropdown</p>
					</ButtonDropdown>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint'].map((look) => ({
			heading: `A ${look} block button-dropdown`,
			component: () => (
				<GEL brand={brand}>
					<ButtonDropdown text="Your text" look={look} block>
						<p>Your {look} block button-dropdown</p>
					</ButtonDropdown>
				</GEL>
			),
		})),
		...['small', 'medium', 'large', 'xlarge'].map((size) => ({
			heading: `A primary ${size} button-dropdown`,
			component: () => (
				<GEL brand={brand}>
					<ButtonDropdown text="Your text" look="primary" size={size}>
						<p>Your primary {size} button-dropdown</p>
					</ButtonDropdown>
				</GEL>
			),
		})),
		...['small', 'medium', 'large'].map((size) => ({
			heading: `A button-dropdown with a ${size} dropdown`,
			component: () => (
				<GEL brand={brand}>
					<ButtonDropdown text="Your text" dropdownSize={size}>
						<p>Your button-dropdown with a {size} dropdown?</p>
					</ButtonDropdown>
				</GEL>
			),
		})),
	];
}
