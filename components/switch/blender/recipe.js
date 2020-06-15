import { GEL } from '@westpac/core';
import React from 'react';

import { Switch } from '@westpac/switch';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Switch name="text" size="small" label="example" />
			<Switch name="text" size="small" label="example" checked />
			<Switch name="text" size="small" label="example" block />
			<Switch name="text" size="small" label="example" block disabled />
			<Switch name="text" size="small" label="example" block checked />
			<Switch name="text" size="small" label="example" disabled />
			<Switch name="text" size="small" label="example" disabled checked />
			<Switch name="text" size="small" label="example" block disabled checked />

			<Switch name="text" size="medium" label="example" />
			<Switch name="text" size="medium" label="example" checked />
			<Switch name="text" size="medium" label="example" block />
			<Switch name="text" size="medium" label="example" block disabled />
			<Switch name="text" size="medium" label="example" block checked />
			<Switch name="text" size="medium" label="example" disabled />
			<Switch name="text" size="medium" label="example" disabled checked />
			<Switch name="text" size="medium" label="example" block disabled checked />

			<Switch name="text" size="large" label="example" />
			<Switch name="text" size="large" label="example" />
			<Switch name="text" size="large" label="example" checked />
			<Switch name="text" size="large" label="example" block />
			<Switch name="text" size="large" label="example" block disabled />
			<Switch name="text" size="large" label="example" block checked />
			<Switch name="text" size="large" label="example" disabled />
			<Switch name="text" size="large" label="example" disabled checked />
			<Switch name="text" size="large" label="example" block disabled checked />

			<Switch name="text" size="xlarge" label="example" />
			<Switch name="text" size="xlarge" label="example" />
			<Switch name="text" size="xlarge" label="example" checked />
			<Switch name="text" size="xlarge" label="example" block />
			<Switch name="text" size="xlarge" label="example" block disabled />
			<Switch name="text" size="xlarge" label="example" block checked />
			<Switch name="text" size="xlarge" label="example" disabled />
			<Switch name="text" size="xlarge" label="example" disabled checked />
			<Switch name="text" size="xlarge" label="example" block disabled checked />
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A default switch',
			component: () => (
				<GEL brand={brand}>
					<Switch name="example-default" label="example" />
				</GEL>
			),
		},
		...['small', 'medium', 'large', 'xlarge'].map((size) => ({
			heading: `A ${size} switch`,
			component: () => (
				<GEL brand={brand}>
					<Switch name={`example-${size}`} size={size} label={`${size} switch`} />
				</GEL>
			),
		})),
		{
			heading: 'A block switch',
			component: () => (
				<GEL brand={brand}>
					<Switch name="example-block" label="example" block />
				</GEL>
			),
		},
		{
			heading: 'A block disabled switch',
			component: () => (
				<GEL brand={brand}>
					<Switch name="example-block-disabled" label="example" block disabled />
				</GEL>
			),
		},
		{
			heading: 'A block checked switch',
			component: () => (
				<GEL brand={brand}>
					<Switch name="example-block-checked" label="example" block checked />
				</GEL>
			),
		},
		{
			heading: 'A disabled switch',
			component: () => (
				<GEL brand={brand}>
					<Switch name="example-disabled" label="example" disabled />
				</GEL>
			),
		},
		{
			heading: 'A disabled checked switch',
			component: () => (
				<GEL brand={brand}>
					<Switch name="example-disabled-checked" label="example" disabled checked />
				</GEL>
			),
		},
		{
			heading: 'A checked switch',
			component: () => (
				<GEL brand={brand}>
					<Switch name="example-checked" label="example" checked />
				</GEL>
			),
		},
		{
			heading: 'A checked block disabled switch',
			component: () => (
				<GEL brand={brand}>
					<Switch name="example-block-disabled-switch" label="example" checked block disabled />
				</GEL>
			),
		},
	];
}
