import { GEL, titleCase } from '@westpac/core';
import React from 'react';

import { Switch } from '@westpac/switch';
import { blenderSwitch } from '../src/overrides/switch';
import { blenderLabel } from '../src/overrides/label';
import { blenderToggle } from '../src/overrides/toggle';

const sizes = ['small', 'medium', 'large', 'xlarge'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/switch'] = {
		Switch: {
			component: blenderSwitch.component,
			styles: blenderSwitch.styles,
		},
		Label: {
			styles: blenderLabel.styles,
		},
		Toggle: {
			styles: blenderToggle.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Switch name="text" label="example" />
			<Switch name="text" label="example" size="small" />
			<Switch name="text" label="example" size="large" />
			<Switch name="text" label="example" size="xlarge" />
			<Switch name="text" label="example" block />
			<Switch name="text" label="example" disabled />
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/switch'] = {
		Switch: {
			component: blenderSwitch.component,
			attributes: blenderSwitch.attributes,
		},
	};

	return [
		// Default
		{
			heading: 'Default switch',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Switch name="example-default" label="Your switch label text" />
				</GEL>
			),
		},

		// Sizes
		...sizes.map((size, i) => ({
			...(i === 0 && { heading: 'Switch sizes' }),
			subheading: titleCase(size),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Switch name={`example-${size}`} size={size} label="Your label text" />
				</GEL>
			),
		})),

		// Checked
		{
			heading: 'Checked switch',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Switch name="example-checked" label="Your label text" checked />
				</GEL>
			),
		},

		// Block
		{
			heading: 'Block switch',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Switch name="example-block" label="Your label text" block />
				</GEL>
			),
		},

		{
			heading: 'Checked &amp; block',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Switch name="example-block-checked" label="Your label text" block checked />
				</GEL>
			),
		},

		// Disabled
		{
			heading: 'Disabled switch',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Switch name="example-disabled" label="Your label text" disabled />
				</GEL>
			),
		},
		{
			subheading: 'Checked',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Switch name="example-disabled-checked" label="Your label text" disabled checked />
				</GEL>
			),
		},
		{
			subheading: 'Block',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Switch name="example-block-disabled" label="Your label text" block disabled />
				</GEL>
			),
		},
		{
			subheading: 'Checked &amp; block',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Switch
						name="example-block-disabled-switch"
						label="Your label text"
						checked
						block
						disabled
					/>
				</GEL>
			),
		},
	];
}
