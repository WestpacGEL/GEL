import { GEL } from '@westpac/core';
import React from 'react';

import { Panel, Body, Footer } from '@westpac/panel';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Panel look="hero" heading="Heading text">
				<Body>Body text</Body>
				<Footer>Footer text</Footer>
			</Panel>
			<Panel look="faint" heading="Heading text">
				<Body>Body text</Body>
				<Footer>Footer text</Footer>
			</Panel>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		...['hero', 'faint'].map((look) => ({
			heading: `A ${look} panel`,
			component: () => (
				<GEL brand={brand}>
					<Panel look={look} heading={`Your ${look} panel heading`}>
						<Body>Your {look} panel text</Body>
					</Panel>
				</GEL>
			),
		})),
		...['hero', 'faint'].map((look) => ({
			heading: `A ${look} panel with footer`,
			component: () => (
				<GEL brand={brand}>
					<Panel look={look} heading={`Your ${look} panel heading`}>
						<Body>Your {look} panel text</Body>
						<Footer>Your {look} panel footer</Footer>
					</Panel>
				</GEL>
			),
		})),
	];
}
