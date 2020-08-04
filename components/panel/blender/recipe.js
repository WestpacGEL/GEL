import { GEL } from '@westpac/core';
import React from 'react';

import { Panel as OGPanel, Body, Footer } from '@westpac/panel';
import { Table, Caption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@westpac/table';

import { blenderPanel } from '../src/overrides/panel';
import { blenderHeader } from '../src/overrides/header';

const looks = ['hero', 'faint'];

export function AllStyles({ brand }) {
	const Panel = (props) => (
		<OGPanel
			overrides={{
				Panel: {
					styles: blenderPanel.styles,
					attributes: blenderPanel.attributes,
				},
				Header: {
					styles: blenderHeader.styles,
				},
			}}
			{...props}
		/>
	);
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
	const Panel = (props) => (
		<OGPanel
			overrides={{
				Panel: {
					attributes: blenderPanel.attributes,
				},
			}}
			{...props}
		/>
	);
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
		// come back to this
		// ...looks.map((look) => ({
		// 	heading: `A ${look} panel with table`,
		// 	component: () => (
		// 		<GEL brand={brand}>
		// 			<Panel look={look} heading={`Your ${look} panel heading`}>
		// 				<Body>Your {look} panel text</Body>
		// 				<Table bordered>
		// 					<Caption>Table caption</Caption>
		// 					<Thead>
		// 						<Tr>
		// 							<Th scope="col">Column 1</Th>
		// 							<Th scope="col">Column 2</Th>
		// 							<Th scope="col">Column 3</Th>
		// 						</Tr>
		// 					</Thead>
		// 					<Tbody>
		// 						<Tr>
		// 							<Td>Cell 1</Td>
		// 							<Td>Cell 2</Td>
		// 							<Td>Cell 3</Td>
		// 						</Tr>
		// 						<Tr>
		// 							<Td>Cell 4</Td>
		// 							<Td>Cell 5</Td>
		// 							<Td>Cell 6</Td>
		// 						</Tr>
		// 						<Tr>
		// 							<Td>Cell 7</Td>
		// 							<Td>Cell 8</Td>
		// 							<Td>Cell 9</Td>
		// 						</Tr>
		// 						<Tr>
		// 							<Td>Cell 10</Td>
		// 							<Td>Cell 11</Td>
		// 							<Td>Cell 12</Td>
		// 						</Tr>
		// 					</Tbody>
		// 					<Tfoot>
		// 						<Tr>
		// 							<Td colSpan="3">Footer goes here and should colSpan all columns</Td>
		// 						</Tr>
		// 					</Tfoot>
		// 				</Table>
		// 			</Panel>
		// 		</GEL>
		// 	),
		// })),
	];
}
