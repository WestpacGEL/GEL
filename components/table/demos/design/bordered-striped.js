import { jsx } from '@westpac/core';
import { Table, Caption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@westpac/table';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
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
						<Td>Cell 1</Td>
						<Td>Cell 7</Td>
						<Td>Cell 13</Td>
					</Tr>
					<Tr>
						<Td>Cell 2</Td>
						<Td>Cell 8</Td>
						<Td>Cell 14</Td>
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
					<Tr>
						<Td>Cell 6</Td>
						<Td>Cell 12</Td>
						<Td>Cell 18</Td>
					</Tr>
				</Tbody>
				<Tfoot>
					<Tr>
						<Td colSpan="3">Footer goes here and should colSpan all columns</Td>
					</Tr>
				</Tfoot>
			</Table>
		</Playground>
	);
};

export default Demo;
