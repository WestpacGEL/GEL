import { GEL } from '@westpac/core';
import React from 'react';

import { Popover } from '@westpac/popover';
import { blenderPanel } from '../src/overrides/panel';
import { blenderHeading } from '../src/overrides/heading';
import { blenderTrigger } from '../src/overrides/trigger';
import { blenderBody } from '../src/overrides/body';
import { blenderCloseBtn } from '../src/overrides/closeBtn';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/popover'] = {
		Panel: {
			styles: blenderPanel.styles,
		},
		Heading: {
			component: blenderHeading.component,
		},
		Body: {
			component: blenderBody.component,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Popover heading="Text" content="Text" open={false} placement="none">
				Text
			</Popover>
			<Popover heading="Text" content="Text" open={false} placement="top">
				Text
			</Popover>
			<Popover heading="Text" content="Text" open={false} placement="bottom">
				Text
			</Popover>
			<Popover heading="Text" content="Text" open={true} placement="none">
				Text
			</Popover>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/popover'] = {
		Panel: {
			attributes: blenderPanel.attributes,
		},
		Heading: {
			component: blenderHeading.component,
		},
		Trigger: {
			attributes: blenderTrigger.attributes,
		},
		Body: {
			component: blenderBody.component,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
			attributes: blenderCloseBtn.attributes,
		},
	};

	return [
		{
			heading: 'A popover popping up on top',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Popover heading="Your heading" content="The content of your popover" placement="top">
						The button text
					</Popover>
				</GEL>
			),
		},
		{
			heading: 'A popover popping up on bottom',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Popover heading="Your heading" content="The content of your popover" placement="bottom">
						The button text
					</Popover>
				</GEL>
			),
		},
		{
			heading: 'A popover without heading',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Popover content="The content of your popover" placement="top">
						The button text
					</Popover>
				</GEL>
			),
		},
		{
			heading: 'A popover opened top',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Popover
						heading="Your heading"
						content="The content of your popover"
						open={true}
						placement="top"
					>
						The button text
					</Popover>
				</GEL>
			),
		},
		{
			heading: 'A popover opened bottom',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Popover
						heading="Your heading"
						content="The content of your popover"
						open={true}
						placement="bottom"
					>
						The button text
					</Popover>
				</GEL>
			),
		},
	];
}
