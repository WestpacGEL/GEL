import { GEL } from '@westpac/core';
import React from 'react';
import { Alert } from '@westpac/alert';
import { blenderIcon as blenderButtonIcon } from '@westpac/button';

import { blenderAlert } from '../src/overrides/alert';
import { blenderHeading } from '../src/overrides/heading';
import { blenderCloseBtn } from '../src/overrides/closeBtn';
import { blenderIcon } from '../src/overrides/icon';
import { blenderBody } from '../src/overrides/body';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/alert'] = {
		Alert: {
			styles: blenderAlert.styles,
			attributes: blenderAlert.attributes,
		},
		Heading: {
			component: blenderHeading.component,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
			attributes: blenderCloseBtn.attributes,
		},
		Icon: {
			component: blenderIcon.component,
		},
		Body: {
			component: blenderBody.component,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Icon: {
			component: blenderButtonIcon.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens} noPrefix>
			<Alert look="info" />
			<Alert look="success" />
			<Alert look="warning" />
			<Alert look="danger" />
			<Alert look="system" />
			<Alert heading="Your alert heading" />
			<Alert dismissible />
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/alert'] = {
		Alert: {
			attributes: blenderAlert.attributes,
		},
		Heading: {
			component: blenderHeading.component,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
			attributes: blenderCloseBtn.attributes,
		},
		Icon: {
			component: blenderIcon.component,
		},
		Body: {
			component: blenderBody.component,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Icon: {
			component: blenderButtonIcon.component,
		},
	};

	return [
		{
			heading: 'A success alert',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Alert look="success">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'An info alert',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Alert look="info">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'A warning alert',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Alert look="warning">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'A danger alert',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Alert look="danger">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'A system alert',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Alert look="system">Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'A dismissible alert',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Alert dismissible>Your alert body</Alert>
				</GEL>
			),
		},
		{
			heading: 'An alert with heading',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Alert heading="Your alert heading">
						<p>Your alert body</p>
					</Alert>
				</GEL>
			),
		},
		{
			heading: 'A success alert without icon',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Alert look="success" icon={null}>
						Your alert body
					</Alert>
				</GEL>
			),
		},
	];
}
