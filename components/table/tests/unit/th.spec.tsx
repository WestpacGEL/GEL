import { Th, Table, Tr, Thead } from '@westpac/table';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { ThProps } from '../../src/Th';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'table',
	overrides: ['Th'],
	Component: (props: ThProps) => (
		<Table>
			<Th {...props}>{props.children}</Th>
		</Table>
	),
});
// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'table',
	Component: (props: ThProps) => (
		<Table>
			<Thead>
				<Tr>
					<Th {...props}>{props.children}</Th>
				</Tr>
			</Thead>
		</Table>
	),
});

const SimpleTh = (props: ThProps) => (
	<GEL brand={wbc}>
		<Table>
			<Th data-testid="test-Th" {...props}>
				{props.children}
			</Th>
		</Table>
	</GEL>
);

describe('Th component', () => {
	test('should render Th with defaul props', () => {
		const { container } = render(<SimpleTh />);
		expect(container).toBeInTheDocument();
	});

	test('should render children inside Th', () => {
		const { getByText } = render(<SimpleTh>Test Cell</SimpleTh>);
		expect(getByText(/Test Cell/)).toBeInTheDocument();
	});

	test('left and right border should be shown if bordered passed in props', () => {
		const { getByTestId } = render(<SimpleTh bordered />);
		expect(getByTestId('test-Th')).toHaveStyle('border-left: 1px solid #DEDEE1');
	});
});
