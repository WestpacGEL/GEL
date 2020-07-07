import { GEL } from '@westpac/core';
import React from 'react';

import { Panel as OGPanel, Body, Footer } from '@westpac/panel';

import { blenderPanel } from '../src/overrides/panel';
import { blenderHeader } from '../src/overrides/header';
import { blenderHeading } from '../src/overrides/heading';
import { blenderBody } from '../src/overrides/body';
import { blenderFooter } from '../src/overrides/footer';

// Using overrides to apply blender styles and attributes
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
			{looks.map((look) => (
				<Panel key={look} look={look} heading="Heading text">
					<Body>Body text</Body>
					<Footer>Footer text</Footer>
				</Panel>
			))}
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		...looks.map((look) => ({
			heading: `A ${look} panel`,
			component: () => (
				<GEL brand={brand}>
					<Panel look={look} heading={`Your ${look} panel heading`}>
						<Body>Your {look} panel text</Body>
					</Panel>
				</GEL>
			),
		})),
		...looks.map((look) => ({
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
		...looks.map((look) => ({
			heading: `A ${look} panel with table`,
			component: () => (
				<GEL brand={brand}>
					<Panel look={look} heading={`Your ${look} panel heading`}>
						<Body>Your {look} panel text</Body>
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
									<Td colSpan="3">Footer goes here and should colSpan all columns</Td>
								</Tr>
							</Tfoot>
						</Table>
					</Panel>
				</GEL>
			),
		})),
	];
}
