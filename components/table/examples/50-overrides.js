import { GEL, jsx } from '@westpac/core';
import { Table, Caption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@westpac/table';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/table'] = {
		Table: {
			styles: (styles) => ({
				...styles,
				backgroundColor: '#efe8ed',
			}),
		},
		Tbody: {
			styles: (styles) => ({
				...styles,
				fontWeight: 700,
			}),
		},
		Td: {
			styles: (styles) => ({
				...styles,
				color: 'DarkSlateBlue',
			}),
		},
		Tfoot: {
			styles: (styles) => ({
				...styles,
				backgroundColor: 'PowderBlue',
			}),
		},
		Th: {
			styles: (styles) => ({
				...styles,
				paddingTop: 30,
				paddingBottom: 30,
			}),
		},
		Thead: {
			styles: (styles) => ({
				...styles,
				backgroundColor: 'Moccasin',
			}),
		},
		Tr: {
			styles: (styles) => ({
				...styles,
				borderBottom: '2px dashed Tomato',
			}),
		},
		Caption: {
			styles: (styles) => ({
				...styles,
				color: 'DodgerBlue',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>Overrides on caption, table, thead, tbody, tfoot, th, tr, td</h2>
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
		</GEL>
	);
}

export default Example;
