import { GEL } from '@westpac/core';
import React from 'react';

import { Panel, Body, Footer } from '../src/blender';

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
