import { GEL } from '@westpac/core';
import React from 'react';

import { Badge } from '@westpac/badge';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Badge look="primary" value="Primary" />
			<Badge look="hero" value="Hero" />
			<Badge look="neutral" value="Neutral" />
			<Badge look="faint" value="Faint" />
			<Badge look="success" value="Success" />
			<Badge look="info" value="Info" />
			<Badge look="warning" value="Warning" />
			<Badge look="danger" value="Danger" />
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A primary badge',
			component: () => (
				<GEL brand={brand}>
					<Badge look="primary" value="Primary" />
				</GEL>
			),
		},
		{
			heading: 'A hero badge',
			component: () => (
				<GEL brand={brand}>
					<Badge look="hero" value="Hero" />
				</GEL>
			),
		},
		{
			heading: 'A neutral badge',
			component: () => (
				<GEL brand={brand}>
					<Badge look="neutral" value="Neutral" />
				</GEL>
			),
		},
		{
			heading: 'A faint badge',
			component: () => (
				<GEL brand={brand}>
					<Badge look="faint" value="Faint" />
				</GEL>
			),
		},
		{
			heading: 'A success badge',
			component: () => (
				<GEL brand={brand}>
					<Badge look="success" value="Success" />
				</GEL>
			),
		},
		{
			heading: 'A info badge',
			component: () => (
				<GEL brand={brand}>
					<Badge look="info" value="Info" />
				</GEL>
			),
		},
		{
			heading: 'A warning badge',
			component: () => (
				<GEL brand={brand}>
					<Badge look="warning" value="Warning" />
				</GEL>
			),
		},
		{
			heading: 'A danger badge',
			component: () => (
				<GEL brand={brand}>
					<Badge look="danger" value="Danger" />
				</GEL>
			),
		},
	];
}
