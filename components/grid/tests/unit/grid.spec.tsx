import { GEL } from '@westpac/core';
import { getByTestId, render } from '@testing-library/react';
import { Cell, Container, Grid } from '@westpac/grid';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

overridesTest({
	name: 'grid',
	overrides: ['Grid', 'Cell', 'Container'],
	Component: (props: any) => (
		<Container fixed={false} {...props}>
			<Grid flow="row" columns={1} height={1} minRowHeight={1} rows={2} {...props}>
				<Cell height="1" {...props}>
					test
				</Cell>
			</Grid>
		</Container>
	),
});

nestingTest({
	name: 'grid',
	Component: (props: any) => (
		<Grid flow="row" columns={1} height={1} minRowHeight={1} {...props}></Grid>
	),
});

const SimpleGrid = (props: any) => (
	<GEL brand={wbc}>
		<Grid data-testid="test-grid" {...props}>
			{props.children}
		</Grid>
	</GEL>
);

// Component specific tests
describe('Grid component', () => {
	test('should render Grid with default props', () => {
		const { container } = render(<SimpleGrid />);
		expect(container).toBeInTheDocument();
	});

	test('should render with string values passed in for required props', () => {
		const { container } = render(<SimpleGrid columns="1" height="1" minRowHeight="1" />);
		expect(container).toBeInTheDocument();
	});

	test('should format styles correctly if numbers passed in on various props', () => {
		const { getByTestId } = render(<SimpleGrid rows={1} columns={1} minRowHeight={1} />);
		const testGrid = getByTestId('test-grid');
		expect(testGrid).toHaveStyle('grid-auto-rows: minmax(1px, auto)');
		expect(testGrid).toHaveStyle('grid-template-columns: repeat(1, 1fr)');
		expect(testGrid).toHaveStyle('grid-template-rows: repeat(1, 1fr)');
	});

	test('should format areas style correctly', () => {
		const { getByTestId } = render(
			<SimpleGrid areas={['header header header', 'menu content ads']} />
		);
		expect(getByTestId('test-grid')).toHaveStyle(
			'grid-template-areas: "header header header" "menu content ads"'
		);
	});

	test('should render children inside Grid', () => {
		const { getByTestId } = render(
			<SimpleGrid>
				<Cell height={1} data-testid="test-child"></Cell>
			</SimpleGrid>
		);
		expect(getByTestId('test-child')).toBeInTheDocument();
	});
});
