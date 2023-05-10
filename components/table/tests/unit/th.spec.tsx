import { Th, Table, Tr, Thead } from '@westpac/table';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { ThProps } from '../../src/Th';
import wbc from '@westpac/wbc';

// TODO: Fix overridesTest function to work with table
// There is no overridesTest function for the various table components due to how the overridesTest works,
// creating warnings relating to unexpected <div> as children/parents

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
