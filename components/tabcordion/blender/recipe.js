import { GEL } from '@westpac/core';
import React from 'react';

import { Tab, Tabcordion } from '../src/blender';

import { blenderTabcordion } from '../src/overrides/tabcordion';
import { blenderTabRow } from '../src/overrides/tabRow';
import { blenderTabButton } from '../src/overrides/tabButton';
import { blenderAccordionButton } from '../src/overrides/accordionButton';
import { blenderAccordionButtonIcon } from '../src/overrides/accordionButtonIcon';
import { blenderPanel } from '../src/overrides/panel';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/tabcordion'] = {
		Tabcordion: {
			styles: blenderTabcordion.styles,
		},
		TabRow: {
			styles: blenderTabRow.styles,
		},
		TabButton: {
			styles: blenderTabButton.styles,
		},
		Panel: {
			styles: blenderPanel.styles,
		},
		AccordionButton: {
			styles: blenderAccordionButton.styles,
		},
		AccordionButtonIcon: {
			component: blenderAccordionButtonIcon.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens} noPrefix>
			<Tabcordion openTab={1}>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
			</Tabcordion>
			<Tabcordion mode="tabs" openTab={1}>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
			</Tabcordion>
			<Tabcordion mode="accordion" openTab={1}>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
			</Tabcordion>
			<Tabcordion mode="tabs" justify openTab={1}>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
			</Tabcordion>
			<Tabcordion look="lego" openTab={1}>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
				<Tab text="text">Text</Tab>
			</Tabcordion>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/tabcordion'] = {
		Tabcordion: {
			attributes: blenderTabcordion.attributes,
		},
		TabRow: {
			attributes: blenderTabRow.attributes,
		},
		TabButton: {
			attributes: blenderTabButton.attributes,
		},
		Panel: {
			attributes: blenderPanel.attributes,
		},
		AccordionButton: {
			attributes: blenderAccordionButton.attributes,
		},
		AccordionButtonIcon: {
			component: blenderAccordionButtonIcon.component,
		},
	};

	return [
		{
			heading: 'Tabcordion',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Tabcordion>
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			heading: 'Tabs',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Tabcordion mode="tabs" instanceIdPrefix="gel-tabcordion-tabs">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			heading: 'Accordion',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Tabcordion mode="accordion" instanceIdPrefix="gel-tabcordion-accordion">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			heading: 'Lego tabcordion',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Tabcordion look="lego" instanceIdPrefix="gel-tabcordion-lego">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			heading: 'Lego tabs',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Tabcordion look="lego" mode="tabs" instanceIdPrefix="gel-tabcordion-lego-tabs">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			heading: 'Lego accordion',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Tabcordion look="lego" mode="accordion" instanceIdPrefix="gel-tabcordion-lego-accordion">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			heading: 'A tabcordion with justified tabs',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Tabcordion justify instanceIdPrefix="gel-tabcordion-justify">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			heading: 'A lego tabcordion with justified tabs',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Tabcordion look="lego" justify instanceIdPrefix="gel-tabcordion-justify-lego">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
	];
}
