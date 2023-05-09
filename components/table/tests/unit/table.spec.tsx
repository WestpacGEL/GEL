import { Table, Caption, Tbody, Td, Tfoot, Th, Thead, Tr } from '@westpac/table';
import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { TableProps } from '../../src/Table';
import wbc from '@westpac/wbc';
import { ErrorBoundary } from '../../../../helpers/tests/error-boundary.js';

// The default tests every component should run
overridesTest({
	name: 'table', // the name has to be the package name without '@westpac/' scope
	overrides: ['Table', 'Caption', 'Tbody', 'Td', 'Tfoot', 'Th', 'Thead', 'Tr'], // every single override root key
	Component: (props: TableProps) => (
		<Table {...props}>
			<Caption>Test caption</Caption>
			<Thead>
				<Tr>
					<Th>Test Column 1</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td>Test Cell 1</Td>
				</Tr>
			</Tbody>
			<Tfoot>
				<Tr>
					<Td>Footer goes here and should colSpan all columns</Td>
				</Tr>
			</Tfoot>
		</Table>
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'table',
	Component: (props: TableProps) => <Table {...props} />,
});

const SimpleTable = (props: TableProps) => (
	<GEL brand={wbc}>
		<Table data-testid="test-table" {...props}>
			{props.children}
		</Table>
	</GEL>
);

// Component specific tests
describe('Table component', () => {
	test('should render Table with default props', () => {
		const { container } = render(<SimpleTable />);
		expect(container).toBeInTheDocument();
	});

	test('throw the error if child component is not wrapped by parent component', () => {
		const Wrapper = () => (
			<GEL brand={wbc}>
				<Caption data-testid="test-component" />
			</GEL>
		);
		render(<Wrapper />, { wrapper: ErrorBoundary });
		expect(
			screen.queryByText(/Table sub-components should be wrapped in a <Table>./i)
		).toBeInTheDocument();
	});

	test('should render bordered style table when bordered property is passed in props', () => {
		const { container } = render(<SimpleTable bordered />);
		expect(container).toBeInTheDocument();
	});

	test('should render striped style table when striped property is passed in props', () => {
		const { container } = render(<SimpleTable striped />);
		expect(container).toBeInTheDocument();
	});

	test('should render striped & bordered table when striped and bordered property is passed in props', () => {
		const { container } = render(<SimpleTable bordered striped />);
		expect(container).toBeInTheDocument();
	});

	test('should render children inside Table', () => {
		const { getByTestId } = render(
			<SimpleTable>
				<Caption data-testid="test-child">Test Caption</Caption>
			</SimpleTable>
		);
		expect(getByTestId('test-child')).toBeInTheDocument();
	});

	test('should render backgroundColor: #efe8ed if you overrides styles', () => {
		const props: TableProps = {
			overrides: {
				Table: {
					styles: (styles: any) => ({
						...styles,
						backgroundColor: '#efe8ed',
					}),
				},
			},
		};
		const { container, getByTestId } = render(<SimpleTable {...props}>Test</SimpleTable>);
		expect(container).toBeInTheDocument();
		expect(getByTestId('test-table')).toHaveStyle('backgroundColor: efe8ed');
	});
});
