import { GEL } from '@westpac/core';
import React from 'react';

import { Switch } from '@westpac/switch';
import { blenderSwitch } from '../src/overrides/switch';
import { blenderLabel } from '../src/overrides/label';
import { blenderToggle } from '../src/overrides/toggle';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/switch'] = {
		Switch: {
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
		<GEL brand={overridesWithTokens} noPrefix>
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
			attributes: blenderSwitch.attributes,
		},
	};

	return [
		{
			heading: 'A default switch',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Switch name="example-default" label="example" />
				</GEL>
			),
		},
		{
			heading: 'A checked switch',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Switch name="example-checked" label="example" checked />
				</GEL>
			),
		},
		...['small', 'medium', 'large', 'xlarge'].map((size) => ({
			heading: `A ${size} switch`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Switch name={`example-${size}`} size={size} label={`${size} switch`} />
				</GEL>
			),
		})),
		{
			heading: 'A block switch',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Switch name="example-block" label="example" block />
				</GEL>
			),
		},
		{
			heading: 'A disabled switch',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Switch name="example-disabled" label="example" disabled />
				</GEL>
			),
		},
		{
			heading: 'A block disabled switch',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Switch name="example-block-disabled" label="example" block disabled />
				</GEL>
			),
		},
		{
			heading: 'A block checked switch',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Switch name="example-block-checked" label="example" block checked />
				</GEL>
			),
		},
		{
			heading: 'A disabled checked switch',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Switch name="example-disabled-checked" label="example" disabled checked />
				</GEL>
			),
		},
		{
			heading: 'A checked block disabled switch',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Switch name="example-block-disabled-switch" label="example" checked block disabled />
				</GEL>
			),
		},
	];
}
