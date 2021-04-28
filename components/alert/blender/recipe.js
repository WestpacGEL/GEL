import { GEL, titleCase } from '@westpac/core';
import React from 'react';
import { Alert } from '@westpac/alert';
import { blenderIcon as blenderButtonIcon } from '@westpac/button';
import { HelpIcon } from '@westpac/icon';

import { blenderAlert } from '../src/overrides/alert';
import { blenderHeading } from '../src/overrides/heading';
import { blenderCloseBtn } from '../src/overrides/closeBtn';
import { blenderIcon } from '../src/overrides/icon';
import { blenderBody } from '../src/overrides/body';

const looks = ['info', 'success', 'warning', 'danger', 'system'];
const modes = ['box', 'text'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/alert'] = {
		Alert: {
			component: blenderAlert.component,
			styles: blenderAlert.styles,
		},
		Heading: {
			component: blenderHeading.component,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
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
		<GEL brand={overridesWithTokens}>
			{looks.map((look) => (
				<Alert key={look} look={look} />
			))}
			<Alert mode="text" />
			<Alert heading="Your alert heading" />
			<Alert dismissible />
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/alert'] = {
		Alert: {
			component: blenderAlert.component,
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
		// Default
		{
			heading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Alert>Your alert body</Alert>
				</GEL>
			),
		},

		// Mode
		...modes.map((mode, i) => ({
			...(i === 0 && { heading: 'Alert modes' }),
			subheading: titleCase(mode),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Alert mode={mode}>Your {mode} alert body</Alert>
				</GEL>
			),
		})),

		// Look
		...looks.map((look, i) => ({
			...(i === 0 && { heading: 'Alert looks' }),
			subheading: titleCase(look),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Alert look={look}>Your {look} alert body</Alert>
				</GEL>
			),
		})),

		// Dismissible
		{
			heading: 'Dismissible alerts',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Alert dismissible>Your dismissible alert body</Alert>
				</GEL>
			),
		},

		// Heading
		{
			heading: 'Alert with heading',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Alert heading="Your alert heading">
						<p>Your alert body</p>
					</Alert>
				</GEL>
			),
		},

		// Icon
		{
			heading: 'Alert with custom icon',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Alert icon={HelpIcon}>Your alert body</Alert>
				</GEL>
			),
		},
	];
}
