import { Tfoot, Tr, Table, Td } from '@westpac/table';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { TfootProps } from '../../src/Tfoot';
import wbc from '@westpac/wbc';

// TODO: Fix overridesTest function to work with table
// There is no overridesTest function for the various table components due to how the overridesTest works,
// creating warnings relating to unexpected <div> as children/parents

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'table',
	Component: (props: TfootProps) => (
		<Table>
			<Tfoot {...props}>{props.children}</Tfoot>
		</Table>
	),
});

const SimpleTfoot = (props: TfootProps) => (
	<GEL brand={wbc}>
		<Table>
			<Tfoot data-testid="test-Tfoot" {...props}>
				{props.children}
			</Tfoot>
		</Table>
	</GEL>
);

describe('Tfoot component', () => {
	test('should render Tfoot with defaul props', () => {
		const { container } = render(<SimpleTfoot />);
		expect(container).toBeInTheDocument();
	});

	test('should render children inside Tfoot', () => {
		const { getByTestId } = render(
			<SimpleTfoot>
				<Tr data-testid="test-child">Test</Tr>
			</SimpleTfoot>
		);
		expect(getByTestId('test-child')).toBeInTheDocument();
	});

	test('border bottom should be shown if bordered passed in props', () => {
		const { getByTestId } = render(
			<SimpleTfoot bordered>
				<Tr>
					<Td data-testid="test-child">Test Footer</Td>
				</Tr>
			</SimpleTfoot>
		);
		expect(getByTestId('test-Tfoot')).toHaveStyle('color: #595767');
	});
});
