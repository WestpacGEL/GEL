import { GEL, titleCase } from '@westpac/core';
import React from 'react';

import { Panel, Body, Footer } from '@westpac/panel';
import { Table, Caption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@westpac/table';

import { blenderPanel } from '../src/overrides/panel';
import { blenderHeader } from '../src/overrides/header';
import { blenderHeading } from '../src/overrides/heading';
import { blenderBody } from '../src/overrides/body';

const looks = ['hero', 'faint'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/panel'] = {
		Panel: {
			component: blenderPanel.component,
			styles: blenderPanel.styles,
		},
		Header: {
			styles: blenderHeader.styles,
		},
		Heading: {
			component: blenderHeading.component,
		},
		Body: {
			component: blenderBody.component,
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
			{/* Looks */}
			{looks.map((look) => (
				<Panel key={look} look={look} heading="Heading text">
					<Body>Body text</Body>
					<Footer>Footer text</Footer>
				</Panel>
			))}

			{/* Table */}
			<Panel heading="Panel heading">
				<Body>Panel text</Body>
				<Table bordered>
					<Caption>Table caption</Caption>
					<Thead>
						<Tr>
							<Th scope="col">Column 1</Th>
							<Th scope="col">Column 2</Th>
							<Th scope="col">Column 3</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>Cell 1</Td>
							<Td>Cell 2</Td>
							<Td>Cell 3</Td>
						</Tr>
						<Tr>
							<Td>Cell 4</Td>
							<Td>Cell 5</Td>
							<Td>Cell 6</Td>
						</Tr>
						<Tr>
							<Td>Cell 7</Td>
							<Td>Cell 8</Td>
							<Td>Cell 9</Td>
						</Tr>
						<Tr>
							<Td>Cell 10</Td>
							<Td>Cell 11</Td>
							<Td>Cell 12</Td>
						</Tr>
					</Tbody>
					<Tfoot>
						<Tr>
							<Td colSpan="3">Footer goes here and should colspan all columns</Td>
						</Tr>
					</Tfoot>
				</Table>
			</Panel>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/panel'] = {
		Panel: {
			component: blenderPanel.component,
			attributes: blenderPanel.attributes,
		},
		Heading: {
			component: blenderHeading.component,
		},
		Body: {
			component: blenderBody.component,
		},
	};
	return [
		// Looks
		{
			heading: 'Panel looks',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Panel heading="Your panel heading">
						<Body>Your panel content</Body>
					</Panel>
				</GEL>
			),
		},
		...looks.map((look) => ({
			subheading: titleCase(look),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Panel look={look} heading={`Your ${look} panel heading`}>
						<Body>Your {look} panel content</Body>
					</Panel>
				</GEL>
			),
		})),

		// Footer
		{
			heading: 'Panel with footer',
			subheading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Panel heading="Your panel heading">
						<Body>Your panel content</Body>
						<Footer>Your panel footer</Footer>
					</Panel>
				</GEL>
			),
		},
		...looks.map((look) => ({
			subheading: titleCase(look),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Panel look={look} heading={`Your ${look} panel heading`}>
						<Body>Your {look} panel content</Body>
						<Footer>Your {look} panel footer</Footer>
					</Panel>
				</GEL>
			),
		})),

		// Table
		{
			heading: 'Panel with table',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Panel heading="Your panel heading">
						<Body>Your panel content</Body>
						<Table bordered>
							<Caption>Table caption</Caption>
							<Thead>
								<Tr>
									<Th scope="col">Column 1</Th>
									<Th scope="col">Column 2</Th>
									<Th scope="col">Column 3</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>Cell 1</Td>
									<Td>Cell 2</Td>
									<Td>Cell 3</Td>
								</Tr>
								<Tr>
									<Td>Cell 4</Td>
									<Td>Cell 5</Td>
									<Td>Cell 6</Td>
								</Tr>
								<Tr>
									<Td>Cell 7</Td>
									<Td>Cell 8</Td>
									<Td>Cell 9</Td>
								</Tr>
								<Tr>
									<Td>Cell 10</Td>
									<Td>Cell 11</Td>
									<Td>Cell 12</Td>
								</Tr>
							</Tbody>
							<Tfoot>
								<Tr>
									<Td colSpan="3">Footer goes here and should colspan all columns</Td>
								</Tr>
							</Tfoot>
						</Table>
					</Panel>
				</GEL>
			),
		},
	];
}
