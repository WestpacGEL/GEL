/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Panel, Body } from '@westpac/panel';
import { Table, Tr, Td, Tbody } from '@westpac/table';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Panel heading="Panel with table">
				<Table striped>
					<Tbody>
						<Tr>
							<Td>Cell 1</Td>
							<Td>Cell 4</Td>
							<Td>Cell 7</Td>
						</Tr>
						<Tr>
							<Td>Cell 2</Td>
							<Td>Cell 5</Td>
							<Td>Cell 8</Td>
						</Tr>
						<Tr>
							<Td>Cell 3</Td>
							<Td>Cell 6</Td>
							<Td>Cell 9</Td>
						</Tr>
					</Tbody>
				</Table>
			</Panel>
		</Playground>
	);
};

export default Demo;
