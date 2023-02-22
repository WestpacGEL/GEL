import { GEL, jsx } from '@westpac/core';
import { Panel, Body } from '@westpac/panel';
import { Table, Caption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@westpac/table';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Panel with body and table</h2>
			<Panel heading="Panel title">
				<Body>
					Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia
					bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
					venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.
				</Body>
				<Table bordered>
					<Caption>
						Table caption this table width is: <em>(100%)</em>
					</Caption>
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
							<Td>Cell 7</Td>
							<Td>Cell 13</Td>
						</Tr>
						<Tr>
							<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
							<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
							<Td>Rem saepe eos, modi perferendis.</Td>
						</Tr>
						<Tr>
							<Td>Cell 3</Td>
							<Td>Cell 9</Td>
							<Td>Cell 15</Td>
						</Tr>
						<Tr>
							<Td>Cell 4</Td>
							<Td>Cell 10</Td>
							<Td>Cell 16</Td>
						</Tr>
						<Tr>
							<Td>Cell 5</Td>
							<Td>Cell 11</Td>
							<Td>Cell 17</Td>
						</Tr>
					</Tbody>
					<Tfoot>
						<Tr>
							<Td colSpan="3">Footer goes here and should colSpan all columns</Td>
						</Tr>
					</Tfoot>
				</Table>
			</Panel>

			<hr />

			<h2>Panel with table only</h2>
			<Panel heading="Panel title">
				<Table>
					<Caption>
						Table caption this table width is: <em>(100%)</em>
					</Caption>
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
							<Td>Cell 7</Td>
							<Td>Cell 13</Td>
						</Tr>
						<Tr>
							<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
							<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
							<Td>Rem saepe eos, modi perferendis.</Td>
						</Tr>
						<Tr>
							<Td>Cell 3</Td>
							<Td>Cell 9</Td>
							<Td>Cell 15</Td>
						</Tr>
						<Tr>
							<Td>Cell 4</Td>
							<Td>Cell 10</Td>
							<Td>Cell 16</Td>
						</Tr>
						<Tr>
							<Td>Cell 5</Td>
							<Td>Cell 11</Td>
							<Td>Cell 17</Td>
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
	);
}

export default Example;
