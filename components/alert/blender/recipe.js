import { GEL } from '@westpac/core';
import React from 'react';

import { Alert } from '@westpac/alert';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Alert look="success" />
			<Alert look="info" />
			<Alert look="warning" />
			<Alert look="danger" />
			<Alert look="system" />
			<Alert look="success" icon={null} />
			<Alert look="info" icon={null} />
			<Alert look="warning" icon={null} />
			<Alert look="danger" icon={null} />
			<Alert look="system" icon={null} />
			<Alert heading="Your alert heading" />
			<Alert dismissible />
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A success alert',
			component: () => (
				<GEL brand={brand}>
					<Alert look="success">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'A info alert',
			component: () => (
				<GEL brand={brand}>
					<Alert look="info">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'A warning alert',
			component: () => (
				<GEL brand={brand}>
					<Alert look="warning">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'A danger alert',
			component: () => (
				<GEL brand={brand}>
					<Alert look="danger">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'A system alert',
			component: () => (
				<GEL brand={brand}>
					<Alert look="system">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'A dismissible alert',
			component: () => (
				<GEL brand={brand}>
					<Alert dismissible>Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'A alert with heading',
			component: () => (
				<GEL brand={brand}>
					<Alert heading="Your alert heading">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'A success alert without icon',
			component: () => (
				<GEL brand={brand}>
					<Alert look="success" icon={null}>
						Your alert body
					</Alert>
				</GEL>
			),
		},
	];
}
