import { jsx } from '@westpac/core';
import { Table, Caption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@westpac/table';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Table>
				<Caption>
					Table caption this table width is: <em>(100%)</em>
				</Caption>
				<Thead>
					<Tr>
						<Th scope="col">Column 1</Th>
						<Th scope="col">Column 2</Th>
						<Th scope="col">Column 3</Th>
						<Th scope="col">Column 4</Th>
						<Th scope="col">Column 5</Th>
						<Th scope="col">Column 6</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>Cell 1</Td>
						<Td>Cell 7</Td>
						<Td>Cell 13</Td>
						<Td>Cell 1</Td>
						<Td>Cell 7</Td>
						<Td>Cell 13</Td>
					</Tr>
					<Tr highlighted>
						<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
						<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
						<Td>Rem saepe eos, modi perferendis.</Td>
						<Td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Td>
						<Td>Odit eligendi quasi quo nihil quia reiciendis obcaecati nosTrum.</Td>
						<Td>Rem saepe eos, modi perferendis.</Td>
					</Tr>
					<Tr>
						<Td>Cell 3</Td>
						<Td>Cell 9</Td>
						<Td>Cell 15</Td>
						<Td>Cell 3</Td>
						<Td>Cell 9</Td>
						<Td>Cell 15</Td>
					</Tr>
					<Tr highlighted={[0, [2, 4]]}>
						<Td>Cell 4</Td>
						<Td>Cell 10</Td>
						<Td>Cell 16</Td>
						<Td>Cell 4</Td>
						<Td>Cell 10</Td>
						<Td>Cell 16</Td>
					</Tr>
					<Tr>
						<Td>Cell 5</Td>
						<Td>Cell 11</Td>
						<Td>Cell 17</Td>
						<Td>Cell 5</Td>
						<Td>Cell 11</Td>
						<Td>Cell 17</Td>
					</Tr>
				</Tbody>
				<Tfoot>
					<Tr>
						<Td colSpan="6">Footer goes here and should colSpan all columns</Td>
					</Tr>
				</Tfoot>
			</Table>
		</Playground>
	);
};

export default Demo;
