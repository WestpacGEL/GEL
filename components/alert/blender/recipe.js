import { GEL } from '@westpac/core';
import React from 'react';

import { Alert as OGAlert } from '@westpac/alert';
import { blenderAlert } from '../src/overrides/alert';

const Alert = (props) => (
	<OGAlert overrides={{ Alert: { attributes: blenderAlert.attributes } }} {...props} />
);

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Alert look={null} icon={null} heading="heading" />
			<Alert look={null} icon={null} dismissible plainCSSProp="dismissible" />
			<Alert look="success" plainCSSProp="look" />
			<Alert look="info" plainCSSProp="look" />
			<Alert look="warning" plainCSSProp="look" />
			<Alert look="danger" plainCSSProp="look" />
			<Alert look="system" plainCSSProp="look" />
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A base alert',
			component: () => (
				<GEL brand={brand}>
					<Alert heading="heading" look={null} icon={null}>
						Your alert body
					</Alert>
				</GEL>
			),
		},
		{
			heading: 'A success alert',
			component: () => (
				<GEL brand={brand}>
					<Alert look="success">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'An info alert',
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
			heading: 'An alert with heading',
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
