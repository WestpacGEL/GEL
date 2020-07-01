import { GEL } from '@westpac/core';
import React from 'react';

import { Panel as OGPanel, Body, Footer } from '@westpac/panel';

import { blenderPanel } from '../src/overrides/panel';
import { blenderHeader } from '../src/overrides/header';
import { blenderHeading } from '../src/overrides/heading';
import { blenderBody } from '../src/overrides/body';
import { blenderFooter } from '../src/overrides/footer';

const Panel = (props) => (
	<OGPanel
		overrides={{
			Panel: {
				styles: () => blenderPanel.styles(),
				attributes: blenderPanel.attributes,
			},
			Header: {
				styles: () => blenderHeader.styles(),
			},
			Heading: {
				styles: () => blenderHeading.styles(),
			},
			Body: {
				styles: () => blenderBody.styles(),
			},
			Footer: {
				styles: () => blenderFooter.styles(),
			},
		}}
		{...props}
	/>
);

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Panel heading="Panel title">
				<Body>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia omnis
					aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat, perferendis
					eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem ipsum dolor sit
					amet, consectetur adipisicing elit.
				</Body>
				<Footer>I am a footer</Footer>
			</Panel>
			<Panel look="faint" heading="Panel title">
				<Body>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia omnis
					aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat, perferendis
					eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem ipsum dolor sit
					amet, consectetur adipisicing elit.
				</Body>
				<Footer>I am a footer</Footer>
			</Panel>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A basic panel',
			component: () => (
				<GEL brand={brand}>
					<Panel heading="Panel title">
						<Body>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia
							omnis aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat,
							perferendis eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem
							ipsum dolor sit amet, consectetur adipisicing elit.
						</Body>
						<Footer>I am a footer</Footer>
					</Panel>
				</GEL>
			),
		},
		{
			heading: 'A faint panel',
			component: () => (
				<GEL brand={brand}>
					<Panel look="faint" heading="Panel title">
						<Body>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia
							omnis aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat,
							perferendis eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem
							ipsum dolor sit amet, consectetur adipisicing elit.
						</Body>
						<Footer>I am a footer</Footer>
					</Panel>
				</GEL>
			),
		},
	];
}
