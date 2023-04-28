import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Cell } from '@westpac/grid';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';
import { Box } from '../../examples/_utils.js';

overridesTest({
	name: 'grid',
	overrides: ['Cell'],
	Component: (props: any) => (
		<Cell height={1} {...props}>
			{props.children}
		</Cell>
	),
});

nestingTest({
	name: 'grid',
	Component: (props: any) => (
		<Cell height={1} {...props}>
			{props.children}
		</Cell>
	),
});

const SimpleCell = (props: any) => (
	<GEL brand={wbc}>
		<Cell data-testid="test-cell" {...props}>
			{props.children}
		</Cell>
	</GEL>
);

describe('Cell component', () => {
	test('should render Cell with default props', () => {
		const { container } = render(<SimpleCell />);
		expect(container).toBeInTheDocument();
	});

	test('left should be auto if 0 passed in prop', () => {
		const { getByTestId } = render(<SimpleCell left={0} />);
		expect(getByTestId('test-cell')).toHaveStyle('left: auto');
	});

	test('should render children inside cell', () => {
		const { getByTestId } = render(
			<SimpleCell height="1">
				<Box data-testid="test-child">1</Box>
			</SimpleCell>
		);
		expect(getByTestId('test-child')).toBeInTheDocument();
	});

	test('should format styles correctly when eidth and height passed in', () => {
		const { getByTestId } = render(<SimpleCell height="1px" width="1px" />);
		expect(getByTestId('test-cell')).toHaveStyle(
			'grid-column-end: span 1px; grid-row-end: span 1px;'
		);
	});
});
