/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Table, Caption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@westpac/table';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Basic table</h2>
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
			<h2>Striped table</h2>
			<Table striped>
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
			<h2>Bordered table</h2>
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
			<h2>Bordered, striped table</h2>
			<Table bordered striped>
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
						<Td scope="row">Cell 1</Td>
						<Td>Cell 7</Td>
						<Td>Cell 13</Td>
					</Tr>
					<Tr>
						<Td scope="row">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
						<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
						<Td>Rem saepe eos, modi perferendis.</Td>
					</Tr>
					<Tr>
						<Td scope="row">Cell 3</Td>
						<Td>Cell 9</Td>
						<Td>Cell 15</Td>
					</Tr>
					<Tr>
						<Td scope="row">Cell 4</Td>
						<Td>Cell 10</Td>
						<Td>Cell 16</Td>
					</Tr>
					<Tr>
						<Td scope="row">Cell 5</Td>
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
		</GEL>
	);
}

export default Example;
