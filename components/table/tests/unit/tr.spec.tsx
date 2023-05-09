import { Tr, Th, Td, Thead, Table } from '@westpac/table';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { TrProps } from '../../src/Tr';
import wbc from '@westpac/wbc';

// Todo: fix override function for table component// overridesTest({
// overridesTest({
// 	name: 'table',
// 	overrides: ['Tr'],
// 	Component: (props: TrProps) => (
// 		<Table>
// 			<Tr {...props}>{props.children}</Tr>
// 		</Table>
// 	),
// });
// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'table',
	Component: (props: TrProps) => (
		<Table>
			<Thead>
				<Tr {...props}>{props.children}</Tr>
			</Thead>
		</Table>
	),
});

const SimpleTr = (props: TrProps) => (
	<GEL brand={wbc}>
		<Table>
			<Tr data-testid="test-Tr" {...props}>
				{props.children}
			</Tr>
		</Table>
	</GEL>
);

describe('Tr component', () => {
	test('should render Thead with defaul props', () => {
		const { container } = render(<SimpleTr />);
		expect(container).toBeInTheDocument();
	});

	test('should render children inside Tr', () => {
		const { getByTestId } = render(
			<SimpleTr>
				<Th data-testid="test-child"></Th>
			</SimpleTr>
		);
		expect(getByTestId('test-child')).toBeInTheDocument();
	});

	test('first cell of the column will be highlighted if 0 passed to highlighted props ', () => {
		const { getByTestId } = render(
			<SimpleTr highlighted={[0]}>
				<Td data-testid="test-child"></Td>
			</SimpleTr>
		);
		expect(getByTestId('test-child')).toHaveStyle('border-left: 6px solid #DA1710');
	});

	test('first cell to third cell of the column will be highlighted if [0,2] passed to highlighted props ', () => {
		const { getByTestId } = render(
			<SimpleTr highlighted={[[0, 2]]}>
				<Td data-testid="test-child1">cell1</Td>
				<Td data-testid="test-child2">cell2</Td>
				<Td data-testid="test-child3">cell3</Td>
			</SimpleTr>
		);
		expect(getByTestId('test-child1')).toHaveStyle('border-bottom: 3px solid #DA1710');
		expect(getByTestId('test-child2')).toHaveStyle('border-bottom: 3px solid #DA1710');
		expect(getByTestId('test-child3')).toHaveStyle('border-bottom: 3px solid #DA1710');
	});

	test('6px solid border-left should be shown if highlighted passed in props', () => {
		const { getByTestId } = render(<SimpleTr highlighted />);
		expect(getByTestId('test-Tr')).toHaveStyle('border-left: 6px solid #DA1710');
	});
});
