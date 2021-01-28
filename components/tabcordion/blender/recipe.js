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

const modes = ['responsive', 'tabs', 'accordion'];
const looks = ['soft', 'lego'];

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
		<GEL brand={overridesWithTokens} noScope>
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
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion instanceIdPrefix="example-tabcordion">
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
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion justify instanceIdPrefix="example-tabcordion-justify">
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
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion look="lego" instanceIdPrefix="example-tabcordion-lego">
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
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion look="lego" justify instanceIdPrefix="example-tabcordion-lego-justify">
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
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion mode="tabs" instanceIdPrefix="example-tabs">
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
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion mode="tabs" justify instanceIdPrefix="example-tabs-justify">
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
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion look="lego" mode="tabs" instanceIdPrefix="example-tabs-lego">
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
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion look="lego" mode="tabs" justify instanceIdPrefix="example-tabs-lego-justify">
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
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion mode="accordion" instanceIdPrefix="example-accordion">
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
				<GEL brand={overridesWithTokens} noScope>
					<Tabcordion look="lego" mode="accordion" instanceIdPrefix="example-accordion-lego">
						<Tab text="Tab 1">Tab 1</Tab>
						<Tab text="Tab 2">Tab 2</Tab>
						<Tab text="Tab 3">Tab 3</Tab>
					</Tabcordion>
				</GEL>
			),
		},
	];
}
