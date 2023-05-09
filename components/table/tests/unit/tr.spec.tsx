import { Tr, Th, Thead, Table } from '@westpac/table';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { TrProps } from '../../src/Tr';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'table',
	overrides: ['Tr'],
	Component: (props: TrProps) => (
		<Table>
			<Tr {...props}>{props.children}</Tr>
		</Table>
	),
});
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

	test('6px solid border-left should be shown if highlighted passed in props', () => {
		const { getByTestId } = render(<SimpleTr highlighted />);
		expect(getByTestId('test-Tr')).toHaveStyle('border-left: 6px solid #DA1710');
	});
});
