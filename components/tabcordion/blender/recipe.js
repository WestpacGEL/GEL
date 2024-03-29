import { GEL } from '@westpac/core';
import React, { Fragment } from 'react';

import { Tab, Tabcordion } from '../src/blender';
import { blenderTabcordion } from '../src/overrides/tabcordion';
import { blenderTabRow } from '../src/overrides/tabRow';
import { blenderTabBtn } from '../src/overrides/tabBtn';
import { blenderItem } from '../src/overrides/item';
import { blenderAccordionBtn } from '../src/overrides/accordionBtn';
import { blenderAccordionBtnIcon } from '../src/overrides/accordionBtnIcon';
import { blenderPanel } from '../src/overrides/panel';
import { blenderPanelBody } from '../src/overrides/panelBody';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/tabcordion'] = {
		Tabcordion: {
			component: blenderTabcordion.component,
			styles: blenderTabcordion.styles,
		},
		TabRow: {
			component: blenderTabRow.component,
			styles: blenderTabRow.styles,
		},
		TabBtn: {
			component: blenderTabBtn.component,
			styles: blenderTabBtn.styles,
		},
		Item: {
			component: blenderItem.component,
		},
		AccordionBtn: {
			component: blenderAccordionBtn.component,
			styles: blenderAccordionBtn.styles,
		},
		AccordionBtnIcon: {
			component: blenderAccordionBtnIcon.component,
		},
		Panel: {
			component: blenderPanel.component,
			styles: blenderPanel.styles,
		},
		PanelBody: {
			component: blenderPanelBody.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
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
			component: blenderTabcordion.component,
			attributes: blenderTabcordion.attributes,
		},
		TabRow: {
			component: blenderTabRow.component,
			attributes: blenderTabRow.attributes,
		},
		TabBtn: {
			component: blenderTabBtn.component,
			attributes: blenderTabBtn.attributes,
		},
		Item: {
			component: blenderItem.component,
		},
		AccordionBtn: {
			component: blenderAccordionBtn.component,
			attributes: blenderAccordionBtn.attributes,
		},
		AccordionBtnIcon: {
			component: blenderAccordionBtnIcon.component,
		},
		Panel: {
			component: blenderPanel.component,
			attributes: blenderPanel.attributes,
		},
		PanelBody: {
			component: blenderPanelBody.component,
		},
	};

	return [
		// Tabcordion
		{
			heading: 'Tabcordion (responsive)',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Tabcordion instanceId="example-tabcordion">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Justified',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Tabcordion justify instanceId="example-tabcordion-justify">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Lego',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Tabcordion look="lego" instanceId="example-tabcordion-lego">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Lego justified',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Tabcordion look="lego" justify instanceId="example-tabcordion-lego-justify">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},

		// Tabs
		{
			heading: 'Tabs',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Tabcordion mode="tabs" instanceId="example-tabs">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Justified',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Tabcordion mode="tabs" justify instanceId="example-tabs-justify">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Lego',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Tabcordion look="lego" mode="tabs" instanceId="example-tabs-lego">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Lego justified',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Tabcordion look="lego" mode="tabs" justify instanceId="example-tabs-lego-justify">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},

		// Accordion
		{
			heading: 'Accordion',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Tabcordion mode="accordion" instanceId="example-accordion">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
		{
			subheading: 'Lego',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Tabcordion look="lego" mode="accordion" instanceId="example-accordion-lego">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
	];
}
